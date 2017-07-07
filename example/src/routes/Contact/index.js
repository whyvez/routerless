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
