import { Page } from '@webformula/pax-core';
import html from './template.html'

export default new class extends Page {
  // loads from browser
  // check page one and two for alt methods
  templateString = html;//'app3/pages/home/template.html';

  constructor() {
    super();
  }
}
