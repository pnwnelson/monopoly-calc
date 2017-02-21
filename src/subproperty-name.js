import React from 'react';
//import { Grid } from 'react-bootstrap';

export default React.createClass({

  // Child to Property.
  // This should show the names of each monopoly Property and include their colors via JSON className property.

  displayName: 'SubPropertyName',

  render() {

    const name = this.props.subproperty.abbrName // Showing just the first three letters of Property name.

    return (
      
      <div className="property-title-container">
        <div className={this.props.subproperty.className}>
          <p>{name}</p>
        </div>
      </div>  
    )
  }
})