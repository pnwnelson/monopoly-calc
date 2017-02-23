import React from 'react';
import CashItem from './cash-item'
import BillTotal from './bill-total'

export default React.createClass ({

	displayName: 'CashItemsList',

	getInitialState() {
		return { 
			billTotal: '0'
		}
	},

	changeBillTotal(newBillTotal) {
		this.setState({
			billTotal: newBillTotal
		})
	},

	render() {

		const { bill } = this.props

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-6 text-right">
		        <CashItem bill={bill} onChange={this.changeBillTotal} />
		      </div>
	         <BillTotal billTotal={this.state.billTotal} />
	      </div>
      </div> 
		)
	}

})