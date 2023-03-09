import { Viewer } from "cesium";
import { html, LitElement, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cesium-viewer")
class CesiumViewer extends LitElement {

    private viewer?: Viewer;

    connectedCallback() {
        super.connectedCallback();
        if (this.querySelector("#cesiumContainer") && !this.viewer) {
            this.initialiseViewer();
        }
    }

    disconnectedCallback(): void {
        this.viewer?.destroy();
        this.viewer = undefined;
        super.disconnectedCallback();
    }

    protected createRenderRoot() {
        return this;
    }

    protected render() {
        return html`<div id="cesiumContainer"></div>`;
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.initialiseViewer();
    }

    private initialiseViewer() {
        this.viewer = new Viewer("cesiumContainer", {
            fullscreenElement: this,
        });
    }
}
