import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,

} from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp/presets/all";




import BackOffice from './components/BackOffice';

export default class CareerPageWebPart extends BaseClientSideWebPart<{}> {

  protected onInit(): Promise<void> {

    return super.onInit().then(_ => {
  
      
  
      sp.setup({
        spfxContext: this.context as any
      });
    });
  }
  
  public render(): void {
    const element: React.ReactElement<{}> = React.createElement(
      React.Fragment,
      {},
       // Include here any other componnet
      React.createElement(BackOffice),
     
      
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

 


  
}
