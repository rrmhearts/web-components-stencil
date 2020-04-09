import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @Prop({ reflectToAttr: true }) title: string;
  //@Prop() open: boolean;

  render() {

    // Instead of using condition, let's use CSS
    // let content = null;
    // if (this.open) {
    //   content = (
    //     <aside>
    //       <header>
    //         <h1>{this.title}</h1>
    //       </header>
    //       <main>
    //         <slot />
    //       </main>
    //     </aside>
    //   );
    // }
    // SLOT: things between the tags go into slot.
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
