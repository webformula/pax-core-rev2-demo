import { Controller } from '@webformula/pax-core';

export default new class extends Controller {
  constructor() {
    super({
      pageTitle: 'Two',
    });
  }

  getData() {
    return {
      label: 'two'
    };
  }
}
