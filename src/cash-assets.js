import React from 'react';
//import { Form, Grid } from 'react-bootstrap';

class CashAssets extends React.Component {

	//displayName: 'CashAssets',

	constructor(props) {
		super(props);
		this.state = {count: ''};

		this.handleUserInput = this.handleUserInput.bind(this);
	}

	// getInitialState () {
	// 	return {
	// 		count: ''
	// 	}
	// },

	handleUserInput(event) {
		this.setState({
			count: event.target.value
		})
		console.log(event)
	}

	render() {
		return (
			<div className="cash-asset-container">
				<div className="row">
					<div className="col-xs-12">
						<form>
							<span className="cash-label">$500 x</span>
							<input className="cash-number" value={this.state.count} onChange={this.handleUserInput} name='count' placeholder="#" />
							<span className="cash-subtotal">{function(){this.state.count * 500}}</span>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = CashAssets;