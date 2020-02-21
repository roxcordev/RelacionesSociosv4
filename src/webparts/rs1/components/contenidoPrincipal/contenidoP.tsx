import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import '../../styles/bootstrap.css';
import { IcontenidoProps } from '../contenidoPrincipal/IcontenidoProps';


export default class ContenidoPrincipal extends React.Component<IcontenidoProps>{
    constructor(props: IcontenidoProps) {
        super(props)
        
    }
   
    
    render() {
        let content: JSX.Element = <div>            
                                        <div>{this.props.contenido}</div>
                                        <table className="table table-sm w-50 p-3">
                                        <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
   
  </tbody>
                                        </table>
                                     </div>     

           return (<div> {content} </div> )
                }
}



