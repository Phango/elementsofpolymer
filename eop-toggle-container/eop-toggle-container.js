import { LitElement, html, css } from "lit-element";

/**
 * `eop-toggle-container`
 * A toggle container, that will show/hide content depending on the interaction with the user
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class EopToggleContainer extends LitElement {
  constructor() {
    super();
    this.prop1 = "eop-toggle-container";
    this.expanded = false;
    this.openText = 'Open';
    this.closeText = 'Close';
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }

    .toggle-container__content {
      display: none;
    }

    :host([expanded]) .toggle-container__content {
      display: block;
    }

    .toggle-container__text--open {
      display: inline-block;
    }

    :host([expanded]) .toggle-container__text--open {
      display: none;
    }

    .toggle-container__text--close {
      display: none;
    }
    
    :host([expanded]) .toggle-container__text--close {
      display: inline-block;
    }
  `;
  }

  render() {
    return html`
      <section class="toggle-container">
    
        <h2>Hello ${this.prop1}!</h2>

        <button @click="${this.handleClick}">
          <span class="toggle-container__text--open">
            ${this.openText}
          </span>
          <span class="toggle-container__text--close">
            ${this.closeText}
          </span>
        </button>

        <div class="toggle-container__content">
          <slot name="content_1"></slot>
          <slot name="content_2"></slot>
        </div>

      </section>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String
      },
      expanded: {
        type: Boolean,
        reflect: true
      },
      openText: {
        type: String
      },
      closeText: {
        type: String
      }
    };
  }

  handleClick() {
    this.expanded = !this.expanded;
  }
}

window.customElements.define("eop-toggle-container", EopToggleContainer);
