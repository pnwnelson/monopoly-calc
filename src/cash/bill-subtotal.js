import React from 'react';

// Component to show the subtotal for each bill ($500, $100, $50, etc)
// Sibling to <CashItem />
// Parent is <CashItemList />

class BillSubTotal extends React.Component {

	render () {

		return (
    	<div className="col-xs-6 text-left">
    	<div className="cash-subtotal">
    		= ${this.props.billSubTotal}
    	</div>
    	</div>
		)
	}
}

export default BillSubTotal;