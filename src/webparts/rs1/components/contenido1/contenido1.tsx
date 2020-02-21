import * as React from 'react';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  Modal,
  IconButton
} from 'office-ui-fabric-react';
import '../../styles/bootstrap.css';


export class Contenido1 extends React.Component<{}> {
  


  public render(): JSX.Element {
    return (
      <div>

       
         
          <div className="titleToggle">Contenido 1</div>
            <div className="ms-Grid">
              <div className="ms-Grid-row">                
                <div className="ms-Grid-col ms-sm6">
                  <p>Gerente de proyectos<br /><span>Romati, Pablo Andrés</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                <p>Gerente de proyectos<br /><span>Romati, Pablo Andrés</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                <p>Gerente de proyectos<br /><span>Romati, Pablo Andrés</span></p>
                </div>
                
              </div>              
            </div>
          </div>
       
    );
  }

  

}


export default Contenido1;