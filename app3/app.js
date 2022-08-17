import { registerPage } from '@webformula/pax-core';

import './components/test-button.js';

import home from './pages/home/page.js';
import one from './pages/one/page.js';
import two from './pages/two/page.js';

registerPage(home, '/');
registerPage(one, ['/one', '/one/:id']);
registerPage(two, '/two');
