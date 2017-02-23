import React from 'react';
import CashItem from './cash-item'

export default React.createClass ({

	displayName: 'CashItemsList',

	getInitialState() {
		return { 
			bills: [
				{
					total: 1
				}
			]
		}
	},

	changeBillTotal(newBillTotal) {
		this.setState({
			total: newBillTotal
		})
	},

	render() {

		const { bill } = this.props

		return (
			<div className="container">
        <CashItem bill={bill} />
      </div> 
		)
	}

})