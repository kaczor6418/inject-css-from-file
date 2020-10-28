import style from "./index.css";

const template = `
<style>${style}</style>
<div>
    <p>Example component</p>
</div>
`;

export class App extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
    }
}
customElements.define('kk-app', App);