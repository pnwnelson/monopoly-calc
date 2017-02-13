import React from 'react';
import { Header, Navbar, DropdownButton, MenuItem, Form, Grid } from 'react-bootstrap';

class PropertyName extends React.Component { 
  // Child to Property.
  // This should show the names of each monopoly Property and include their colors via JSON className property.
  render() {

    const name = this.props.property.name.slice(0,3) // Showing just the first three letters of Property name.

    return (
      
      <div className="property-title-container">
        <div className={this.props.property.className}>
          <p>{name}</p>
        </div>
      </div>  
    )
  }
}


class PropertyValues extends React.Component { 
  // Child to Property.
  // This component should show a drop down menu to select the state (mortgaged, houses, etc) of the Property at the end of the game
  render() {

    const { owned } = this.props.property;
    const { mortgaged } = this.props.property;
    const { houseCost } = this.props.property;

    return (
      <div className="property-values-container">
        <DropdownButton className="ddown" id="ddown" title="$">
          <MenuItem className="owned-box btn-selections" eventKey="o" value={owned}>O</MenuItem>
          <MenuItem className="mortgaged-box btn-selections" eventKey="m" value={mortgaged}>M</MenuItem>
          <MenuItem className="green btn-selections" eventKey="1" value={owned + (houseCost * 1)}>1</MenuItem>
          <MenuItem className="green btn-selections" eventKey="2" value={owned + (houseCost * 2)}>2</MenuItem>
          <MenuItem className="green btn-selections" eventKey="3" value={owned + (houseCost * 3)}>3</MenuItem>
          <MenuItem className="green btn-selections" eventKey="4" value={owned + (houseCost * 4)}>4</MenuItem>
          <MenuItem className="red btn-selections" eventKey="h" value={owned + (houseCost * 5)}>H</MenuItem>
        </DropdownButton>
      </div>
    )
  }
}

export class PropertyValues {}

class PropertyValuesTotal extends React.Component { 
  // Child to Property.
  // This should show the user the total valuation of the property once they select the drop down menu
  render() {

    return (
        <div className="property-value-total-box"></div>
      )
        // need code to add up selection from <PropertyValues /> and display in a div
  }
}




