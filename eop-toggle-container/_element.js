import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `eop-toggle-container`
 * A toggle container, that will show/hide content depending on the interaction with the user
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MpToggleContainer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'eop-toggle-container',
      },
    };
  }
}

window.customElements.define('eop-toggle-container', MpToggleContainer);
