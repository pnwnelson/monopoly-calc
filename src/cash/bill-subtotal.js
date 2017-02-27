import React from 'react';

export default React.createClass ({

	displayName: 'BillSubTotal',

	render () {

		const billSubTotal = this.props.billSubTotal

		return (
    	<div className="col-xs-4 text-left">
    	<div className="cash-subtotal">
    		${billSubTotal}
    	</div>
    	</div>
		)
	}
})