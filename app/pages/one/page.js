import { Page } from '@webformula/pax-core/client';
import { logger } from '../../modules/helper.js';

export default class extends Page {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('connectedCallback');
  }

  async beforeRender() {
    this.label = 'one';
  }
  
  onUrlData() {
    console.log('urlParameters', this.urlParameters);
  }

  onclick(event) {
    logger(event);
    console.log(document.querySelector('body'));
  }
}
