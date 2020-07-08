import React from 'react';

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
	    return (
		    <div>
		    	<p>这是上行</p>
		    	<p>{this.props.children}</p>
		    	<p>这是下行</p>
		    </div>
	    );
	 }
}

export default TemperatureInput;