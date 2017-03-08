import React from 'react';
//import { Grid } from 'react-bootstrap';

export default React.createClass({

  // Child to Property.
  // This should show the names of each monopoly Property and include their colors via JSON className property.

  displayName: 'PropertyName',

  render() {

    const abbrName = this.props.property.abbrName // Showing just the first three letters of Property name.
    const fullName = this.props.property.name

    return (
        <div className="property-title-container">
          <div className="property-name-abbr">
            <div className={this.props.property.className}>
              <p>{abbrName}</p>
            </div>
          </div>
          <div className="property-name-full">
            <div className={this.props.property.className}>
              <p>{fullName}</p>
            </div>
          </div>
        </div>
    )
  }
})