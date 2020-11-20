import React from 'react';
import styled from 'styled-components';

const ImageList = [
    {
        title: '1',
        color: 'red'
    },
    {
        title: '2',
        color: 'orange'
    },
    {
        title: '3',
        color: 'yellow'
    },
    {
        title: '4',
        color: 'green'
    },
    {
        title: '5',
        color: 'blue'
    }
]


const CameraList = () => {

    const CamList = ImageList.map((Camera, index) =>
        <Cam key={index} style={{ backgroundColor: Camera.color}}>
            <img alt={Camera.title}/>
        </Cam>
    );

    return (
        <Content>
            {CamList}
            <Bottom>
                <div></div>
            </Bottom>
        </Content>
    );
}

const Content = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
`;

const Cam = styled.div`
    height: 100%;
    width: 25%;
    background-color: #919191;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Bottom = styled.div`
    height: 100%;
    width: 30%;
    background-color: #333333;
`;

export default CameraList;