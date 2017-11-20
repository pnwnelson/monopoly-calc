import React, { Component, PropTypes } from 'react';

class AdSenseResponsive extends React.Component {

	static propTypes = {
		client: PropTypes.string,
		slot: PropTypes.string,
		format: PropTypes.string
	}

	constructor(props) {
		super(props);
	}

	componentDidMount () {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}

	render () {

		return (
			<div className="ad-sense">
				<div className='ad'>
					<ins className='adsbygoogle ad-sense-ins' 
						data-ad-client={this.props.client}
						data-ad-slot={this.props.slot}
						// data-ad-format={this.props.format} 
						/>
				</div>
			</div>
		)
	}
}

export default AdSenseResponsive;