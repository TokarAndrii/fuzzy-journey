import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({text, onClick, type}) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
};

export default Button