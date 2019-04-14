import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `mp-toggle-container`
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

        .toggle-container__content {
          display: none;
        }

        :host([is-expanded]) .toggle-container__content {
          display: block;
        }

        .toggle-container__text--open {
          display: inline-block;
        }

        :host([is-expanded]) .toggle-container__text--open {
          display: none;
        }

        .toggle-container__text--close {
          display: none;
        }
        
        :host([is-expanded]) .toggle-container__text--close {
          display: inline-block;
        }

      </style>

      <section class="toggle-container">
    
        <h2>Hello [[prop1]]!</h2>

        <button on-click="handleClick">
          <span class="toggle-container__text--open">
            [[openText]]
          </span>
          <span class="toggle-container__text--close">
            [[closeText]]
          </span>
        </button>

        <div class="toggle-container__content">
          <slot></slot>
        </div>

      </section>
      
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'mp-toggle-container',
      },
      isExpanded: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      openText: {
        type: String,
        value: "Open"
      },
      closeText: {
        type: String,
        value: "Close"
      }
    };
  }

  handleClick() {
    this.isExpanded = !this.isExpanded;
  }
}

window.customElements.define('mp-toggle-container', MpToggleContainer);
