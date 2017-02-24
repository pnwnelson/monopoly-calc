import React from 'react';
import CashItem from './cash-item'
import BillSubTotal from './bill-subtotal'

export default React.createClass ({

	displayName: 'CashItemsList',

	getInitialState() {
		return { 
			billSubTotal: '0'
		}
	},

	changeBillSubTotal(newBillSubTotal) {
		this.setState({
			billSubTotal: newBillSubTotal
		})
	},

	render() {

		const { bill } = this.props

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-6 text-right">
		        <CashItem bill={bill} onChange={this.changeBillSubTotal} />
		      </div>
	         <BillSubTotal billSubTotal={this.state.billSubTotal} />
	      </div>
      </div> 
		)
	}

})