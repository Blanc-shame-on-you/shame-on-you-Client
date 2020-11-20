import React from 'react';
import styled from 'styled-components';

const Camera = (props) => {

    const CameraType = (type) => {
        switch(type) {
            case 'general':
                return '제너럴';
            case 'GAN':
                return 'GAN';
            case 'template':
                return '템플릿';
            default:
                return '제너럴';
        }
    }
    return (
        <MainVideo alt={CameraType(props.type)}/>
    )
}

const MainVideo = styled.img`
    height: 100%;
    width: 80%;
    background-repeat: no-repeat;
    background-size: cover;
`;

export default Camera;