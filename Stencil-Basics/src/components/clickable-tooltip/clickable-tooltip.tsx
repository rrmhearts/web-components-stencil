import { Component, ComponentInterface, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'clickable-tooltip',
  styleUrl: 'clickable-tooltip.css',
  shadow: true,
})
export class ClickableTooltip implements ComponentInterface {
  @Prop() text: string;
  @Prop() timer: number;
  @Prop({ reflectToAttr: true }) opened: boolean;

  showTooltip() {
    let timeout = this.timer ? this.timer * 1000 : 5000;
    console.log('opened')
    this.opened = true;
    setTimeout(() => {
      this.opened = false;
    }, timeout)
  }

  render() {
    return (
      <Host>
        <p onClick={this.showTooltip.bind(this)}>
          <slot></slot>
          <div id="arrow"></div>
          <div id="tooltip">{this.text}</div>
        </p>
      </Host>
    );
  }

}
