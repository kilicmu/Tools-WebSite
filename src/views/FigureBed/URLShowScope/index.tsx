import React, { Fragment, useContext } from "react"
import styled from "styled-components"
import Card from "../../../components/Card"
import { FigureBedService } from "../useFigureBedService"
import styles from "./urlshow-scope.module.scss";

const URLItem = styled.li`
    width: 100%;
    height: 20px;
    margin: 10px 10px;
    user-select: text;
`

const Introduce:React.FC<{}> = () => {
    return <div className={styles.introduce}>
        <span>资源地址:</span>
        <div></div>
    </div>
}

export const URLShowScope:React.FC<{}> = () => {
    const figureBedService = useContext(FigureBedService);
    if (!figureBedService) {
        throw new Error("no service error")
    }
    return (
        <React.Fragment>
            <Introduce />
            <Card width="100%" minHeight={340}>
                { figureBedService.staticUrls.map(url => <URLItem key={url}>{url}</URLItem>) }
            </Card>
        </React.Fragment>
    )
}