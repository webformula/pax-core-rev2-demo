import { Page } from '@webformula/pax-core';

export default new class extends Page {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('url data in connectedCallback()', this.urlParameters);
  }

  async beforeRender() {
    this.label = 'two';
  }

  onclick() {
    console.log('two click');
  }

  // check page home and one for alt methods
  template() {
    return /*html*/`
      <div>
        label: ${page.label}
        <button onclick="console.log(page)">button</button>
        <a href="/one">one</a>
      </div>
    `;
  }
}
