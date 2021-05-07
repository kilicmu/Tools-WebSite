import {useMediaQuery} from "react-responsive"

const mobile_device_width = `1224px`
export const useMobile = () => {
    return useMediaQuery({
        query: `(max-width: ${mobile_device_width})`
    })
}