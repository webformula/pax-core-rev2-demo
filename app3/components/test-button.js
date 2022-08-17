import { HTMLElementExtended  } from '@webformula/pax-core';


customElements.define('test-button', class TestButton extends HTMLElementExtended {
  useShadowRoot = true;

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  testClick() {
    console.log('test click')
  }

  template() {
    return /*html*/`
      <button onclick="component.testClick(); console.log(component)">
        <slot></slot>
      </button>
    `;
  }
});
