import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './InputRange.css'

export default class InputRange extends Component {
    state = {
        value: this.props.value,
    };

    handleChange = (event)=>{
        this.props.onInput(event.target.value);
        this.setState({
            value: event.target.value,
        })
    };


    render() {
        const {type, name, min, max, spanText,} = this.props;
        return (
            <div className="inputRange">
                <span className="spanText">{spanText}
                    <output className="inputRangeOut" htmlFor="quantity">{this.state.value}</output>
                </span>
                <span className="fromValue">{min}</span>
                <input type={type} name={name} min={min} max={max}
                       onInput={this.handleChange}
                       value={this.state.value}/>
                <span className="toValue">{max}</span>
            </div>
        )
    }
}

InputRange.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
    value: PropTypes.string,
    spanText: PropTypes.string,
    onInput: PropTypes.func,
};

InputRange.defaultProps = {
    type: 'range',
    spanText: `Num of columns:`,
    value: 1,
    onInput: () => {
    },
};

