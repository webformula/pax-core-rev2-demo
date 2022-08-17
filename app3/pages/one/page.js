import { Page } from '@webformula/pax-core';
import { logger } from '../../modules/helper.js';

// using webpack posthtml plugin
import html from './template.html'


export default new class extends Page {
  // using webpack posthtml plugin
  // check page home and two for alt methods
  templateString = html;

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
