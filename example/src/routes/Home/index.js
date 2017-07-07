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
