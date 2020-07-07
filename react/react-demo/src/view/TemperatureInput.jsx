import React from 'react';

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: '',
			scaleNames: {
				c: 'Celsius',
				f: 'Fahrenheit'
			}
		}
	}

	handleChange = (e) => {
		e.persist();
		this.setState({temperature: e.target.value});
	}

	render() {
	    const { temperature, scaleNames } = this.state;
	    return (
		    <fieldset>
		        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
		        <input value={temperature}
		               onChange={this.handleChange} />
		        <p>{temperature}</p>
		    </fieldset>
	    );
	 }
}

export default TemperatureInput;