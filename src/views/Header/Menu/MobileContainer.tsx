import { FC, PropsWithChildren, useState } from "react";
import React from "react"
import styles from "./menu.module.scss";
import styled from "styled-components";
import menuIcon from "../../../assets/svgs/menu-icon.svg";
import Card from "../../../components/Card";

const Container = styled.div`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
    width: 42px;
    height: 34px;
`

const MenuButton = styled.button`
    width: 24px;
    height: 36px;
    background: #fff;
    border: none;
    cursor: pointer;
`

const ListContainer: FC<React.PropsWithChildren<{show: boolean}>> = ({show, children}) => {
    
    return (
        <Card
            width="240px"
            height="240px"
            className={show ? 
                styles["mobile-menu-list-container"] : 
                styles["mobile-menu-list-container--hidden"]}
            >
            {
                children ? 
                (children as any).props.children.flat(Infinity).map((item: any) => {
                    return item
                })
                : children
            }
        </Card>
    )
}

export default function MobileContainer({children}: PropsWithChildren<{}>) {
    const [show, setShow] = useState(false);
    return (
        <Container>
            <MenuButton onClick={() => setShow(prev => !prev)}><img src={menuIcon} alt="menu icon" /></MenuButton>
            <ListContainer show={show} children={children}/>
        </Container>
    )
}