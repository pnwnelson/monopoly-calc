import React from 'react';
import BillSubTotal from './bill-subtotal'

export default React.createClass ({

	displayName: 'CashItem',

	handleInput(event) {
		let count = event.target.value;
		let billSubTotal = this.props.bill.amount * count;
		this.props.onChange(billSubTotal);
	},

	render() {

		const { bill } = this.props

		return (
			<div>
				<form>
					<span className="cash-label text-right">{bill.name} x</span>
					<input className="cash-number" type="number" onChange={this.handleInput} placeholder="#"/>
				</form>
			</div>

		)
	}
})