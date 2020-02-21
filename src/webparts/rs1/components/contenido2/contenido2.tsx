import * as React from 'react';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  Modal,
  IconButton
} from 'office-ui-fabric-react';



export class Contenido2 extends React.Component<{}> {
  

  public render(): JSX.Element {
    return (
      <div>

       
         <div>
          <div >
          <div className="titleToggle">Contenido 2</div>
            <div className="ms-Grid" dir="ltr">
              <div className="ms-Grid-row">                
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">vvvvvvvvvvvvvvvvvvvv<br /><span className="notTinyText">sdhsjhd</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">ffffffff<br /><span className="notTinyText">RO619.16UO</span></p>
                </div>
                
              </div>              
            </div>
          </div>
        </div >
      </div >
    );
  }

  

}


export default Contenido2;