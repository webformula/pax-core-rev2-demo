import { Page } from '/@webformula/pax-core/client';
import { logger } from '../../modules/helper.js';

export default class extends Page {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('url data in connectedCallback()', this.urlParameters);
  }

  async beforeRender() {
    this.label = 'one';
  }

  onclick(event) {
    logger(event);
    console.log(document.querySelector('body'));
  }
}
