import { Controller } from '@webformula/pax-core';

export default new class extends Controller {
  constructor() {
    super({
      pageTitle: 'One',
      routes: ['one', 'one-alt', 'one/:id', 'once/*']
    });
  }

  getData() {
    return {
      label: 'one'
    };
  }
}
