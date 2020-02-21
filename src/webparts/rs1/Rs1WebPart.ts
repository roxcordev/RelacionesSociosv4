import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import { Home } from './components/home';
import Dynamo from './components/Dynamo';
import { IDynamoProps } from './components/IDynamoProps';

import styles from './Rs1WebPart.module.scss';
import * as strings from 'Rs1WebPartStrings';

export interface IRs1WebPartProps {
  description: string;
  isHome: boolean;
}

//
export default class Rs1WebPart extends BaseClientSideWebPart <IRs1WebPartProps> {

  public render(): void {
    let element: React.ReactElement<IDynamoProps>;

    if (this.properties.isHome) {
      element = React.createElement(Home,
        {
          description: this.properties.description,
          isHome: this.properties.isHome
        }
      )
    }
    else {
      element = React.createElement(Dynamo,
        {
          description: this.properties.description,
          isHome: this.properties.isHome
        }
      )
    }
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
  

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              }),
              PropertyPaneCheckbox('isHome', {
                text: "Is home?",
                checked: this.properties.isHome
              }),
            ]
          }
        ]
      }
    ]
  };
}
}
