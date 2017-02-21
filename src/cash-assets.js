import React from 'react';
//import { Form, Grid } from 'react-bootstrap';

export default React.createClass ({

	displayName: 'CashAssets',

	// constructor(props) {
	// 	super(props);
	// 	this.state = {count: ''};

	// 	this.handleUserInput = this.handleUserInput.bind(this);
	// }

	getInitialState () {
		return {
			FiveHundredCount: '',
			OneHundredCount: '',
			FiftyCount: '',
			TwentyCount: '',
			TenCount: '',
			FiveCount: '',
			OneCount: '',
		}
	},

	handleFiveHundredInput(event) {
		this.setState({
			FiveHundredCount: event.target.value
		})
		console.log("The 500# entered was " + event.target.value)
	},

	handleOneHundredInput(event) {
		this.setState({
			OneHundredCount: event.target.value
		})
	},

	handleFiftyInput(event) {
		this.setState({
			FiftyCount: event.target.value
		})
	},

	handleTwentyInput(event) {
		this.setState({
			TwentyCount: event.target.value
		})
	},

	handleTenInput(event) {
		this.setState({
			TenCount: event.target.value
		})
	},

	handleFiveInput(event) {
		this.setState({
			FiveCount: event.target.value
		})
	},

	handleOneInput(event) {
		this.setState({
			OneCount: event.target.value
		})
	},

	render() {
		return (
			<div className="cash-asset-container">
				<div className="row">
					<div className="col-xs-12">
						<form>
							<span className="cash-label">$500 x</span>
							<input type="number" className="cash-number" value={this.state.FiveHundredCount} onChange={this.handleFiveHundredInput} name='count' placeholder="#" /> =
							<span className="cash-subtotal">${this.state.FiveHundredCount * 500}</span><br/>
							<span className="cash-label">$100 x</span>
							<input type="number" className="cash-number" value={this.state.OneHundredCount} onChange={this.handleOneHundredInput} name='count' placeholder="#" /> =
							<span className="cash-subtotal">${this.state.OneHundredCount * 100}</span><br/>
							<span className="cash-label">$50 x</span>
							<input type="number" className="cash-number" value={this.state.FiftyCount} onChange={this.handleFiftyInput} name='count' placeholder="#" /> =
							<span className="cash-subtotal">${this.state.FiftyCount * 50}</span><br/>
							<span className="cash-label">$20 x</span>
							<input type="number" className="cash-number" value={this.state.TwentyCount} onChange={this.handleTwentyInput} name='count' placeholder="#" /> =
							<span className="cash-subtotal">${this.state.TwentyCount * 20}</span><br/>
							<span className="cash-label">$10 x</span>
							<input type="number" className="cash-number" value={this.state.TenCount} onChange={this.handleTenInput} name='count' placeholder="#" /> =
							<span className="cash-subtotal">${this.state.TenCount * 10}</span><br/>
							<span className="cash-label">$5 x</span>
							<input type="number" className="cash-number" value={this.state.FiveCount} onChange={this.handleFiveInput} name='count' placeholder="#" /> =
							<span className="cash-subtotal">${this.state.FiveCount * 5}</span><br/>
							<span className="cash-label">$1 x</span>
							<input type="number" className="cash-number" value={this.state.OneCount} onChange={this.handleOneInput} name='count' placeholder="#" /> =
							<span className="cash-subtotal">${this.state.OneCount * 1}</span><br/>
						</form>
					</div>
				</div>
			</div>
		)
	}
})

//module.exports = CashAssets;