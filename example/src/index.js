import React from 'react';
import ReactDOM from 'react-dom';
import Routerless from './Routerless.js';
import defaultRoute, * as routes from './routes';

const props = { defaultRoute, routes };

ReactDOM.render(<Routerless {...props} />, document.getElementById('root'));
