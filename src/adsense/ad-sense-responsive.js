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

		// const style = {
		// 	display: 'block'
		// }

		return (
			<div className="ad-sense">
				<div className='ad'>
					<ins className='adsbygoogle ad-sense-ins' 
						// style={style}
						data-ad-client={this.props.client}
						data-ad-slot={this.props.slot}
						data-ad-format={this.props.format} />
				</div>
			</div>
		)
	}
}

export default AdSenseResponsive;



// <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
// <!-- Monopoly Responsive -->
// <ins class="adsbygoogle"
//      style="display:block"
//      data-ad-client="ca-pub-6063578944512286"
//      data-ad-slot="8034558454"
//      data-ad-format="auto"></ins>
// <script>
// (adsbygoogle = window.adsbygoogle || []).push({});
// </script>