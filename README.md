# routerless

Simple router that passes on path params and query string params onto child if one matches proptype.


```js
// ./routes

import Home from './Home';
import Contact from './Contact';

export const home = Home;
export const contact = Contact;

export default home;
```

```js
// ./index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Routerless from './Routerless.js';
import defaultRoute, * as routes from './routes';

const props = { defaultRoute, routes };

ReactDOM.render(<Routerless {...props} />, document.getElementById('root'));
```

```js
// ./routes/Home

import React from 'react';
import PropTypes from 'prop-types';

const Home = (props) => (
    <div>
        <h2>Home</h2>
        <p>{props.message}</p>
    </div>
)

Home.propTypes = {
    message: PropTypes.string
};

export default Home;
```

```js
// ./routes/Contact

import React from 'react';
import PropTypes from 'prop-types';

const Contact = (props) => (
    <div>
        <h2>Contact</h2>
        <p>{props.name}</p>
    </div>
)

Contact.propTypes = {
    name: PropTypes.string
};

export default Contact;

```