import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Input.css'

export default class Input extends Component {
    state = {
        value: this.props.value,
    };


    handleInputChange = event => {
        this.props.onChange(event.target.value);
        this.setState({
            value: event.currentTarget.value,
        });
    };


    render() {
        const {type, name, placeholder,} = this.props;


        return (
            <input type={type} name={name} placeholder={placeholder} onChange={this.handleInputChange}
                   className="input" value={this.state.value}/>
        );
    }
}


Input.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

Input.defaulProps = {
    type: 'text',
    placeholder: '',
    onChange: () => {
    }
};
