import React, { Component, PropTypes } from 'react';

class AdSenseDesktop extends React.Component {

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

		const style = {
			width: '728px',
			height: '90px'
		}

		return (
			<div className="ad-sense">
				<div className='ad'>
					<ins className='adsbygoogle ad-sense-desktop-ins' 
						style={style}
						data-ad-client={this.props.client}
						data-ad-slot={this.props.slot} />
				</div>
			</div>
		)
	}
}

export default AdSenseDesktop;

