import React from "react";
import PropertyValues from "./property-values";
import PropertyName from "./property-name";
import PropertyValuesTotal from "./property-values-total";

// This should be the parent/container for <PropertyName />, <PropertyValues /> and <PropertyValuesTotal />.
// This should be a child to <App />

export default React.createClass({
  displayName: "Property",

  getInitialState() {
    return { propertyValueTotal: "" };
  },

  changeValueTotal(newValueTotal) {
    // This changes the subtotal value of each Property component
    this.setState({
      propertyValueTotal: newValueTotal
    });
    this.props.onChange(this.props.property.id, newValueTotal);
  },

  render() {
    const { property } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <PropertyName property={property} />
            <PropertyValues
              property={property}
              onClick={this.changeValueTotal}
            />
            <PropertyValuesTotal
              propertyValueTotal={this.state.propertyValueTotal}
            />
          </div>
        </div>
      </div>
    );
  }
});
