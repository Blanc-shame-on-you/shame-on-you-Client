import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Camera from './Camera';  

const CameraContents = () => {
    const [Type, setType] = useState('general');

    const GetFrame = (type) => {
        axios.get(`http://210.217.243.3:5000/video_feed/${type}`)
        .then(response => {
            return response.data;
        })
    }

    return (
        <Content>
            <Camera type={Type} />
            <ColumnWrapper>
                <HeaderColumn>
                    <Title>Shame-on-you</Title>
                </HeaderColumn>
                <Column src={GetFrame('general')} alt="general" onClick={() => setType('general')} />
                <Column src={GetFrame('GAN')} alt="GAN" onClick={() => setType('GAN')} />
                <Column src={GetFrame('template')} alt="template" onClick={() => setType('template')} />
            </ColumnWrapper>
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex; 
`;

const ColumnWrapper = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column
`;

const HeaderColumn = styled.div`
    height: 17%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    font-family: Roboto;
    background-color: #646464;
`;

const Title = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    color: #ffffff;
`;

const Column = styled.img`
    height: 27%;
    width: 100%;
    background-color: #646464;
`;

export default CameraContents;