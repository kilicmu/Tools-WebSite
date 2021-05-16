import { useEffect, useState } from "react";
import createServiceToken from "../../tools/createServiceToken";


export const ToolsPageService = createServiceToken(useToolsPageService);



export interface ToolMessage {
    name: string;
    iconSrc: string;
    jumpSrc: string;
    tag: string;
}

export default function useToolsPageService() {
    const [tools, setTools] = useState<ToolMessage[]>([])
    const [tags, setTags] = useState<string[]>([])
    const [currentTag, setCurrentTag] = useState<string>('')

    useEffect(() => {
        fetch("/api/tools/message").then<ToolMessage[]>(resp => resp.json()).then((tools) => {
            const tags = tools.reduce<string[]>((tags, nextTool) => 
                tags.includes(nextTool.tag) ? [...tags, nextTool.tag] : tags
            , [])
            setTags([...tags])
            setTools([...tools])
        })
    }, [])

    useEffect(() => {
        const filtedTools = tools.filter((tool) => tool.tag === currentTag)
        setTools([...filtedTools])
    }, [currentTag])

    
    return {
        tools,
        tags,
        currentTag,
        setCurrentTag
    }
}