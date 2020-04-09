import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {

  // Only Changes from INSIDE. 
  @State() showContactInfo = false; // typescript infers type

  @Prop({ reflectToAttr: true }) title: string;

  // Stencil will synchronize everything better with a Prop. Attribute will match prop.
  // Props are IMMUTABLE inside component. Data always flows on direction, outside to inside!,
  // ^-- overwrite that by setting mutable flag. Now can internally change.
  @Prop({ reflectToAttr: true, mutable: true }) open: boolean;

  // Can be named anything. Event triggered could be "onEvent"
  onCloseDrawer() {
    this.open = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  render() {
    let mainContent = <slot />; // Default is slot content.
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone: 49802384032</li>
            <li>
              E-Mail:
              <a href="mailto:something@something.com">
                something@something.com
              </a>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this) /*refer to SD, not button*/}>X</button>
        </header>
        <section id="tabs">
          <button
            class={!this.showContactInfo ? 'active' : ''}
            onClick={this.onContentChange.bind(this, 'nav') /*nav is arg to be passed*/}
          >
            Navigation
          </button>
          <button
            class={this.showContactInfo ? 'active' : ''}
            onClick={this.onContentChange.bind(this, 'contact')/*contact is arg to be passed*/}
          >
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>
    );
  }
}
