import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './header.css';

import { IheaderProps } from './IheaderProps';


export default class NavBasicExample extends React.Component<IheaderProps>{
    constructor(props: IheaderProps) {
        super(props)
        
    }
   
    
    render() {
        let headerTop: JSX.Element = <div>
            
                                        <p><h2>{this.props.tituloGeneral}</h2></p>
                                       
                                        </div>     
             

        return (
            <div>
               {headerTop}
            </div>
        )
    }
}



