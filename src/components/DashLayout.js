import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from "styled-components";

const DashContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const DashLayout = () => {
    return (
        <>
            <DashContainer>
                <Outlet />
            </DashContainer>
        </>
    )
}

export default DashLayout