import { useCallback, useState } from "react";
import createServiceToken from "../../tools/createServiceToken"


export const FigureBedService = createServiceToken(useFigureBedService)


export default function useFigureBedService() {
    const [ staticUrls, setStaticUrls ] = useState<string[]>([])  // 静态资源访问地址
    const [ clientUrls, setClientUrls ] = useState<string[]>([]) // 图片显示地址 

    // 删除一个url
    const delClientUrl = useCallback((id: number) => {
        clientUrls.splice(id, 1)
        setClientUrls([...clientUrls])
    }, [clientUrls])

    const addClientUrl = useCallback((url: string) => {
        const prev = [...clientUrls]
        setClientUrls([...clientUrls, url])
        return function cancel() {
            setClientUrls(prev)
        }
    }, [clientUrls])

    const clearStaticUrls = useCallback(() => {
        setStaticUrls([]);
    }, [])
    return {
        staticUrls,
        setStaticUrls,
        clientUrls,
        addClientUrl,
        setClientUrls,
        delClientUrl
    }
}