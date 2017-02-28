import React from 'react';
import update from 'react-addons-update'

// This is currently not being used. This is a very long way of manually displaying all the bills and their subtotals.
// I ended up dymnaically creating the bill sets. 
// I was in the middle of trying to find a way to create a final total when I abandoned this approach.
// However, I saved it in case I needed to use this approach to create a final total.

export default React.createClass ({

	displayName: 'CashAssets',

	getInitialState () {
		return {
			FiveHundredCount: '',
			OneHundredCount: '',
			FiftyCount: '',
			TwentyCount: '',
			TenCount: '',
			FiveCount: '',
			OneCount: '',
			cashTotal: []
		}
	},

	handleInput(propertyName, event) {
		const fiveHundredTotal = this.state.FiveHundredCount * 500;
		const	oneHundredTotal = this.state.OneHundredCount * 100;
		const cashTotal = this.state.cashTotal;
		cashTotal[propertyName] = event.target.value;
		this.setState({
			cashTotal: cashTotal,
			FiveHundredTotal: fiveHundredTotal,
			OneHundredTotal: event.target.value
			
		})  
		console.log(fiveHundredTotal)
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
							<input type="number" className="cash-number" value={this.state.cashTotal.FiveHundredCount} onChange={this.handleInput.bind(this, 'fiveHundredTotal')} name='count' placeholder="#" /> =
							<span className="cash-subtotal">${this.fiveHundredTotal}</span><br/>
							<span className="cash-label">$100 x</span>
							<input type="number" className="cash-number" value={this.state.cashTotal.OneHundredCount} onChange={this.handleInput.bind(this, 'oneHundredTotal')} name='count' placeholder="#" /> =
							<span className="cash-subtotal">${this.oneHundredTotal}</span><br/>
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
						{this.state.cashTotal}
					</div>
				</div>
			</div>
		)
	}
})

//module.exports = CashAssets;