import React from 'react';

class Routerless extends React.Component {
    render() {
        const { defaultRoute, routes } = this.props;
        const url = new window.URL(window.location.href);
        const route = url.pathname.replace(/^\//, '');
        
        const Route = route === '/' ? defaultRoute : routes[route];
        const props = Object.keys(Route.propTypes).reduce((props, prop) => {
            return {...props, [prop]: url.searchParams.get(prop) };
        }, {});

        return <Route {...props} />;
    }
}

export default Routerless;