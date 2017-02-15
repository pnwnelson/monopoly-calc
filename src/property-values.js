import React from 'react';
import { DropdownButton, MenuItem, Form, Grid } from 'react-bootstrap';

export default React.createClass({
	
	// Child to Property.
  // This component should show a drop down menu to select the state (mortgaged, houses, etc) of the Property at the end of the game

	displayName: 'PropertyValues',

	propTypes: {
		btnTitle: React.PropTypes.string
	},

	getInitialState() {
		return {
			btnTitle: '$'
		}
	},

	handleChange (event) {
		console.log(event)
		let eventKey = event
		this.setState({
			btnTitle: eventKey // don't know what this should be - keep getting console error of 'value' being undefined
		});
	},

  render() {

    const { unowned } = this.props.property
    const { owned } = this.props.property;
    const { mortgaged } = this.props.property;
    const { houseCost } = this.props.property;
    //const { oneHouse } = function() {owned + (houseCost * 1)};

    return (
      <div className="property-values-container">
        <DropdownButton className="ddown" id="ddown" title={this.state.btnTitle} value="$" onSelect={this.handleChange}>
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







