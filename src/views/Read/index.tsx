import React, { useEffect, useRef } from "react"

export const Read = () => {

    const ref = useRef<HTMLIFrameElement | null>(null);

    function changeFrameAssets(){
        if(ref.current) {
            const el = ref.current
            el.height = document.documentElement.clientHeight - 90 + 'px'
            el.width = document.documentElement.clientWidth + 'px'
        }
    }

    useEffect(() => {
        changeFrameAssets()
        window.addEventListener('resize', changeFrameAssets)
        return () => {
            window.removeEventListener('resize', changeFrameAssets)
        }
    }, [ref.current])

    return <iframe 
        src="https://kilicmu.github.io/read-ecma-262/" 
        ref={ref}
        width="100%"
        scrolling="no"
        style={{
            margin: '0',
            overflow: 'hidden'
        }}
    />
}
    