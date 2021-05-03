import React, { useContext } from "react"
import styled from "styled-components"
import { HomeService } from "../../views/Home/useHomeService"

const ShowScope = styled.ul`
    width: 100%;
    margin-top: 40px;
    height: 100px;
    background-color: gray;
    height: 100px;
    overflow-x: hidden;
    overflow-y: scroll;
`

const URLItem = styled.li`
    width: 100%;
    height: 20px;
    margin: 10px 10px;
`

export const URLShowScope:React.FC<{}> = () => {
    const homeService = useContext(HomeService);
    if (!homeService) {
        throw new Error("no service error")
    }
    return (
        <ShowScope>
            { homeService.staticUrls.map(url => <URLItem key={url}>{url}</URLItem>) }
        </ShowScope>
    )
}