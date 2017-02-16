import React from 'react';
import { DropdownButton, MenuItem, Form, Grid } from 'react-bootstrap';

export default React.createClass({
	
	// Child to Property.
  // This component should show a drop down menu to select the state (mortgaged, houses, etc) of the Property at the end of the game

	displayName: 'PropertyValues',

	// propTypes: {
	// 	btnColor: React.PropTypes.string
	// },


	getInitialState() {
		return {
			btnTitle: '$',
			style: {backgroundColor: 'white'}
		}
	},

	handleChange (event) {
		console.log(event)
		const eventKey = event

		if (eventKey == 0) {
			this.setState({
				btnTitle: eventKey,
				style: {backgroundColor: 'white', color: 'black'}
			});
		} else if (eventKey == 'O') {
			this.setState({
				btnTitle: eventKey,
				style: {color: 'rgb(31, 178, 90)'}
			});
		} else if (eventKey == 'M') {
			this.setState({
				btnTitle: eventKey,
				style: {color: 'rgb(237, 27, 36)'}
			});
		} else if (eventKey == 1) {
			this.setState({
				btnTitle: eventKey,
				style: {backgroundColor: 'rgb(31, 178, 90)', color: 'white'}
			});
		} else if (eventKey == 2) {
			this.setState({
				btnTitle: eventKey,
				style: {backgroundColor: 'rgb(31, 178, 90)', color: 'white'}
			});
		} else if (eventKey == 3) {
			this.setState({
				btnTitle: eventKey,
				style: {backgroundColor: 'rgb(31, 178, 90)', color: 'white'}
			});
		} else if (eventKey == 4) {
			this.setState({
				btnTitle: eventKey,
				style: {backgroundColor: 'rgb(31, 178, 90)', color: 'white'}
			});
		} else if (eventKey == 'H') {
			this.setState({
				btnTitle: eventKey,
				style: {backgroundColor: 'rgb(237, 27, 36)', color: 'white'}
			})
		} else {
			this.setState({
				btnTitle: eventKey
			})
		}

		// this.setState({
		// 	btnTitle: eventKey,
		// 	style: {buttonColor}
		// 	// Can I build a function to change className of dropdown conditional on eventKey?
		// });
	},

	// getBgColor () {
	// 	let red = { bgColor: 'red'}
	// 	let green = { bgColor: 'green'}
	// 	if (this.state.btnTitle == 1) {
	// 		console.log("The color should change to green")
	// 		return green
	// 	} else if (this.state.btnTitle == "H") {
	// 		console.log("The color should change to red")
	// 		return red
	// 	} else {
	// 		console.log("The color shouldn't change at all")
	// 		return null
	// 	}
	// },

  render() {

    const { unowned } = this.props.property
    const { owned } = this.props.property;
    const { mortgaged } = this.props.property;
    const { houseCost } = this.props.property;

    return (
      <div className="property-values-container">
        <DropdownButton className="ddown" id="ddown" title={this.state.btnTitle} value="$" onSelect={this.handleChange} style={this.state.style}>
          <MenuItem className="unowned-box btn-selections" eventKey="0" value={unowned}>0</MenuItem>
          <MenuItem className="owned-box btn-selections" eventKey="O" value={owned}>O</MenuItem>
          <MenuItem className="mortgaged-box btn-selections" eventKey="M" value={mortgaged}>M</MenuItem>
          <MenuItem className="green btn-selections" eventKey="1" value={owned + (houseCost * 1)}>1</MenuItem>
          <MenuItem className="green btn-selections" eventKey="2" value={owned + (houseCost * 2)}>2</MenuItem>
          <MenuItem className="green btn-selections" eventKey="3" value={owned + (houseCost * 3)}>3</MenuItem>
          <MenuItem className="green btn-selections" eventKey="4" value={owned + (houseCost * 4)}>4</MenuItem>
          <MenuItem className="red btn-selections" eventKey="H" value={owned + (houseCost * 5)}>H</MenuItem>
        </DropdownButton>
      </div>
    )

    //console.log(oneHouse);
  }
})

const style = {backgroundColor: 'white'}







