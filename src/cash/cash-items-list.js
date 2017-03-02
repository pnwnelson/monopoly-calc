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

	changeBillSubTotal(newBillSubTotal) { 
		this.setState({ // This changes the subtotal of each bill component
			billSubTotal: newBillSubTotal
		})
		// I also want it to keep sending the newBillSubTotal up to the Parent so I can update the finalBillTotal state
		// so that's what this next line is for. 
		this.props.onChange(newBillSubTotal);  
	},

	render() {

		const { bill } = this.props

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-8 text-right">
		        <CashItem key={bill.id} bill={bill} onChange={this.changeBillSubTotal} /* billSubTotalonChange={this.props.onChange} *//>
		      </div>
	        <BillSubTotal key={bill.id} billSubTotal={this.state.billSubTotal} />
	      </div>
      </div> 	
		)
	}

})