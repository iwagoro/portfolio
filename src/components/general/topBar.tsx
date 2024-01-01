import React from "react";
import styled from "styled-components";

import Drawer from "./drawer";

const height = "100px";

const Container = styled.div`
    width: 100vw;
    height: ${height};
    box-sizing: border-box;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 5;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function TopBar() {
    return (
        <Container>
            <div className="w-screen max-w-7xl flex items-center justify-between">
                <p className="ml-10 text-xl  font-bold ">Rockwell</p>
                <div className="mr-10">
                    <Drawer />
                </div>
            </div>
        </Container>
    );
}
