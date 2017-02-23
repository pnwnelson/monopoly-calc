import React from 'react';

export default React.createClass ({

	displayName: 'BillTotal',

	render () {

		const billTotal = this.props.billTotal

		return (
    	<div className="col-xs-6 text-left">
    	<div className="cash-subtotal">
    		${billTotal}
    	</div>
    	</div>
		)
	}
})