/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface UcSideDrawer {
    'open': () => void;
    'opened': boolean;
    'title': string;
  }
  interface UcSideDrawerAttributes extends StencilHTMLAttributes {
    'opened'?: boolean;
    'title'?: string;
  }

  interface UcTooltip {
    'text': string;
  }
  interface UcTooltipAttributes extends StencilHTMLAttributes {
    'text'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'UcSideDrawer': Components.UcSideDrawer;
    'UcTooltip': Components.UcTooltip;
  }

  interface StencilIntrinsicElements {
    'uc-side-drawer': Components.UcSideDrawerAttributes;
    'uc-tooltip': Components.UcTooltipAttributes;
  }


  interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {}
  var HTMLUcSideDrawerElement: {
    prototype: HTMLUcSideDrawerElement;
    new (): HTMLUcSideDrawerElement;
  };

  interface HTMLUcTooltipElement extends Components.UcTooltip, HTMLStencilElement {}
  var HTMLUcTooltipElement: {
    prototype: HTMLUcTooltipElement;
    new (): HTMLUcTooltipElement;
  };

  interface HTMLElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement
    'uc-tooltip': HTMLUcTooltipElement
  }

  interface ElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement;
    'uc-tooltip': HTMLUcTooltipElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
