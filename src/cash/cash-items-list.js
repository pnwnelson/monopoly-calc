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
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<div className="row">
							<div className="col-xs-6 cash-col-left text-right">
								<CashItem
									key={bill.id}
									bill={bill}
									onChange={this.changeBillSubTotal}
								/>
							</div>
							<BillSubTotal billSubTotal={this.state.billSubTotal} />
						</div>
					</div>
					<div className="col-xs-6" />
				</div>
			</div>
		);
	}
});
