import { Page } from '@webformula/pax-core/client';
import { logger } from '../../modules/helper.js';

export default class extends Page {
  constructor() {
    super();
  }

  async beforeRender() {
    this.label = 'two';
  }

  onclick(event) {
    logger(event);
    console.log(document.querySelector('body'));
  }
}
