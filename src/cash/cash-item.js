import React from 'react';
import BillSubTotal from './bill-subtotal'

// Dynamically creating an input field (and it's label) for bill calculation.
// Sibling to <BillSubTotal />
// Parent is <CashItemList />

export default React.createClass ({

	displayName: 'CashItem',

	handleInput(event) { // This is part of changing subtotal props.
		let count = event.target.value;
		let billSubTotal = this.props.bill.amount * count; // Multiplying the bill value with the number of that bill  (e.g $50 x 3)
		this.props.onChange(billSubTotal); // this is passed as the newBillSubTotal variable in <CashItemsList />
	},

	render() {

		const { bill } = this.props

		return (
			<div>
				<form>
					<img src={bill.billImage} className="cash-label text-right" /> x
					<input className="cash-number" type="number" onChange={this.handleInput} placeholder="#"/>
				</form>
			</div>

		)
	}
})