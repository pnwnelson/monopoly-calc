import React from 'react';
import SubPropertyValues from './subproperty-values';
import SubPropertyName from './subproperty-name';
import SubPropertyValuesTotal from './subproperty-values-total';

// This should be the parent/container for <PropertyName />, <PropertyValues /> and <PropertyValuesTotal />.
// This should be a child to <App />

export default React.createClass ({

  displayName: 'SubProperty',

  getInitialState() {
    return { subPropertyValueTotal: ''};
  },

  changeSubValueTotal(newSubValueTotal) { // This changes the subtotal value of each Property component
    this.setState ({
      subPropertyValueTotal: newSubValueTotal
    })
    this.props.onChange(this.props.subproperty.id, newSubValueTotal);
  },

  render() {

    const { subproperty } = this.props

    return (
      
      <div className="container-fluid">
        <div className="row-fluid properties-item">
          <div className="col-xs-12">
            <SubPropertyName subproperty={subproperty} />
            <SubPropertyValues subproperty={subproperty} onClick={this.changeSubValueTotal} />
            <SubPropertyValuesTotal subPropertyValueTotal={this.state.subPropertyValueTotal} />
          </div>
        </div>
      </div> 
    );
  }
})