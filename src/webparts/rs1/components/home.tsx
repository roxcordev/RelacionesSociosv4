import * as React from 'react';

import 'office-ui-fabric-react/dist/css/fabric.css';
import { Stack } from 'office-ui-fabric-react';

var  BGImageSocios =require('./img/relaciones-socios.png') ;

import './App.css';
import { IDynamoProps } from "./IDynamoProps";


export const Home: React.FunctionComponent<IDynamoProps> = () => {
    return (
        <Stack
        verticalFill
        styles={{
            root: {
                margin: 'auto',
                marginTop: '-44px',
                color: '#605e5c',
                background: `url(${BGImageSocios}) no-repeat center`,
                backgroundSize: 'cover'
            }
        }}
        gap={15}
    >
        <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm6 col-full-vh">
                    <h2 className="relSocios bottomText">
                        Relaciones con Socios
                    </h2>
                </div>
                <div className="ms-Grid-col ms-sm6 bgSocios">
                    
                </div>
            </div>
        </div>
    </Stack>
    );
};

export default Home;
