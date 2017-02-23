import React from 'react';
//import { DropdownButton, MenuItem, Input, Form, Grid } from 'react-bootstrap';

export default React.createClass({

	displayName: 'SubPropertyValues',

  getInitialState() {
		return {
			value: 'Own it?',
		}
	},

		// This handler is to pass off the selected total value of the property to the third box
	handleValue(event) {
		const subPropertyValueTotal = event.target.value;
		this.props.onClick(subPropertyValueTotal);
		console.log('This is the handleValue: ' + event)
	},

	render() {
		const {unowned} = this.props.subproperty
		const {mortgaged} = this.props.subproperty
		const {owned} = this.props.subproperty

		return (
			<div className="property-values-container">
    		<select className="ddown" title={this.state.value} id="ddown" onClick={this.handleFinalTotal} onChange={this.handleValue} style={this.state.style}>
    			<option className="unowned-box btn-selections" value={unowned}>Unowned</option>
    			<option className="mortgaged-box btn-selections" value={"$" + mortgaged}>Mortgaged</option>
    			<option className="owned-box btn-selection" value={"$" + owned}>Owned</option>
    		</select>
    	</div>
		)
	}

})