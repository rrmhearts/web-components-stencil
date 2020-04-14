export class Spinner {
    render() {
        return (h("div", { class: "lds-ring" },
            h("div", null),
            h("div", null),
            h("div", null),
            h("div", null)));
    }
    static get is() { return "uc-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:uc-spinner:**/"; }
}
