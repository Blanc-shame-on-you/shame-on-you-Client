import React from 'react';
import styled from 'styled-components';
import CameraContents from '../Components/CameraContents';
import CameraList from '../Components/CameraList';

const StreamingPage = () => {
    return (
        <Background>
            <Content>
                <CameraContents/>
                <CameraList/>
            </Content>
        </Background>
    )
}

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;  
`;

export default StreamingPage;