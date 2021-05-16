import React, {FC, PropsWithChildren} from "react"
import styled from "styled-components"

interface CardProps {
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
    className?: string;
}

const _Card = styled.div`
    background: #FFFFFF;
    border: 1px solid rgba(163, 163, 163, 0.2);
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`

const Card = (props: PropsWithChildren<CardProps>) => {
    const {
        width = 0,
        height = "100%",
        minWidth = 0,
        maxWidth = '100%',
        minHeight = 0,
        maxHeight = '100%'
    } = props;
    const styles = {
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight
    }
    return <_Card style={styles} {...props}/>
}


export default Card