

class Collapse extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // Move HTML template into component.
        this.shadowRoot.innerHTML = `
            <style>
                #info-box {
                    display: none;
                }
            </style>
            <slot>Information</slot>
            <button><slot>Show</slot></button>
            <p id="info-box">Plain info!</p>
        `;
        this._isHidden = true;
    }

    connectedCallback() {
        // Outside world
        if (this.hasAttribute('info'))
            this._info = this.getAttribute('info');

        // Inside world
        const infoBox = this.shadowRoot.getElementById('info-box');
        const button = this.shadowRoot.querySelector('button');
        infoBox.innerHTML = this._info


        this.addEventListener('click', () => {

            if (this._isHidden) {
                infoBox.style.display = 'block';
                button.textContent = 'Hide';
                this._isHidden = false;
            } else {
                infoBox.style.display = 'none';
                button.textContent = 'Show';
                this._isHidden = true;
            }
        });
    }
}

customElements.define('rrm-collapse', Collapse);
