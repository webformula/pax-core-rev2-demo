import { HTMLElementExtended  } from '@webformula/pax-core';

customElements.define('test-button', class TestButton extends HTMLElementExtended {
  useShadowRoot = true;

  constructor() {
    super();

    this.value = 'test value';
  }

  connectedCallback() {
    this.render();
  }

  testClick() {
    console.log('test click')
  }

  template() {
    return /*html*/`
      <button part="foo" class="red" onclick="component.testClick(); console.log(component)">
        <slot></slot> ${this.value}
      </button>
    `;
  }
});
