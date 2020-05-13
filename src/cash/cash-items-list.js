import React from "react";
import CashItem from "./cash-item";
import BillSubTotal from "./bill-subtotal";

// Dynamically listing each bill amount and the total calculation for each.
// Parent is <App />

export default React.createClass({
	displayName: "CashItemsList",

	getInitialState() {
		return {
			billSubTotal: "0"
		};
	},

	changeBillSubTotal(newBillSubTotal) {
		this.setState({
			// This changes the subtotal of each bill component
			billSubTotal: newBillSubTotal
		});
		this.props.onChange(this.props.bill.id, newBillSubTotal);
	},

	render() {
		const { bill } = this.props;

		return (
			<div className="flex flex-column w-100">
				<div className="flex flex-row items-center justify-center">
					<CashItem
						key={bill.id}
						bill={bill}
						onChange={this.changeBillSubTotal}
					/>
					<BillSubTotal billSubTotal={this.state.billSubTotal} />
				</div>
			</div>
		);
	}
});
