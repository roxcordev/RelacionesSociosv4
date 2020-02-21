import * as React from 'react';
import './App.css';
import '../styles/bootstrap.css';
import { IDynamoProps } from "./IDynamoProps";

import { escape } from '@microsoft/sp-lodash-subset';
import 'office-ui-fabric-react/dist/css/fabric.css';

import NavBar from './navbar/navbar';
import Header from './header/header';
import Content from './contenidoPrincipal/contenidoP';
import { Idatos } from './models/Idatos'

//
export default class Dynamo extends React.Component<IDynamoProps, {}> {

  itemsDatos:Idatos[]=[
    {name:'item contenido1',url:'#',key:'contenido1'},
    {name:'item contenido2',url:'#',key:'contenido2'}
    
  ]

    
    public render(): React.ReactElement<IDynamoProps> { 
      return (
              <div>
                <div><Header tituloGeneral="Titulo principal"/></div>

                <div> <NavBar items={this.itemsDatos} /></div>


                {/* <div> <Content contenido="aqui tabla"/></div>  */}
                                  
              </div>      
  
      );
    }
  }
  