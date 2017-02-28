import React from 'react';
import CashItem from './cash-item'
import BillSubTotal from './bill-subtotal'

// Dynamically listing each bill amount and the total calculation for each.
// Parent is <App />

export default React.createClass ({

	displayName: 'CashItemsList',

	getInitialState() {
		return { 
			billSubTotal: '0',
		}
	},

	changeBillSubTotal(newBillSubTotal) { // This changes the subtotal of each bill component
		this.setState({
			billSubTotal: newBillSubTotal,
		})
	},

	render() {

		const { bill } = this.props

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-8 text-right">
		        <CashItem key={bill.id} bill={bill} onChange={this.changeBillSubTotal} />
		      </div>
	        <BillSubTotal key={bill.id} billSubTotal={this.state.billSubTotal} />
	      </div>
      </div> 	
		)
	}

})