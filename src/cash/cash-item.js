import React from 'react';

export default React.createClass ({

	displayName: 'CashItem',

	getInitialState() {
		return {
			bills:[
				{
					total: 0
				}
			]}
	},

	handleInput(event) {
		let count = event.target.value;
		let billTotal = this.props.bill.amount * count;
				console.log("The total of " + this.props.bill.name + " is " + "$" + billTotal)
		this.props.onChange(billTotal)
	},

	render() {

		const { bill } = this.props

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<form>
							<span className="cash-label text-right">{bill.name} x</span>
							<input className="cash-number" type="number" onChange={this.handleInput} />
							<span className="cash-subtotal">= {bill.total}</span>
						</form>
					</div>
				</div>
			</div>
		)
	}
})