import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './navbar.css';
import '../../styles/bootstrap.css';
import { InavbarProps } from './InavbarProps';
import { InavbarState } from './InavbarState';
import Contenido1 from '../contenido1/contenido1';
import Contenido2 from '../contenido2/contenido2';


export default class NavBasicExample extends React.Component<InavbarProps, InavbarState>{
    constructor(props: InavbarProps) {
        super(props)
        this.state ={typeComponent:"contenido2"}
        
    }
   

   
    render() {
        let panelRight: JSX.Element;


        if(this.state.typeComponent=="contenido1"){
            panelRight= <div><Contenido1/></div>;
           

        }
        if(this.state.typeComponent=="contenido2"){
            panelRight=<div><Contenido2/></div>
        }
        //let navbarCenter: JSX.Element[] = this.props.items.map((item)=> <div>{item.name}</div> )

        let navbarLeft: JSX.Element = <div className="navbarStyles"><Nav
             
      
        groups={[
            {

                name: 'contenido',

                links: this.props.items
            }
        ]}
        onLinkClick={this.onClick.bind(this)}
    /></div>


        return (
            <div>
               {navbarLeft}
               {panelRight}
            </div>
        )
    }

    onClick(event, element) {
        this.setState({ typeComponent: element.key });
    }
    
}



