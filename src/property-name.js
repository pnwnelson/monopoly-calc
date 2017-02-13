import React from 'react';
import { Grid } from 'react-bootstrap';

export default React.createClass({

  // Child to Property.
  // This should show the names of each monopoly Property and include their colors via JSON className property.

  displayName: 'PropertyName',

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
})