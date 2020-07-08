import React from 'react';
import TemperatureInput from './TemperatureInput.jsx';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div>
				<TemperatureInput>
					这是中行
				</TemperatureInput>
			</div>
		)
	}
}

export default Calculator;