import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `eop-accordion`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class EopAccordion extends PolymerElement {
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
        value: 'eop-accordion',
      },
    };
  }
}

window.customElements.define('eop-accordion', EopAccordion);
