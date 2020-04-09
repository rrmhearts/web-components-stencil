import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css', // Automatically applied!
  shadow: true // Scope css to this component's shadow dom.
})
export class SideDrawer {
  // Prop watches title, if changes, calls render.
  // reflectToAttr may have changed to reflect in future Stencil releases.
  // ^-- updates attribute of html tag. In outside code wants to interact with attribute.
  @Prop({reflectToAttr: true}) title: string;

  render() {
    return (
      <aside>
        <header><h1>{this.title}</h1></header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
