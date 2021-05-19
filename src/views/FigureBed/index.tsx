import React from "react";
import { AppContainer } from "../../components/Containers/AppContainer";
import { PhotoWall } from "./PhotoWall";
import { URLShowScope } from "./URLShowScope";
import styled from "styled-components"
import useFigureBedService, {FigureBedService} from "./useFigureBedService"

const URLShowScopeContainer = styled.div`
    margin-top: 90px;
`

export default function FigureBed() {
    const service =  useFigureBedService()
    return (
        <FigureBedService.Provider value={service}>
            <AppContainer>
                <PhotoWall />
                <URLShowScopeContainer>
                    <URLShowScope />
                </URLShowScopeContainer>
            </AppContainer>
        </FigureBedService.Provider>
    )
}