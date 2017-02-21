import React from 'react';
//import { Grid } from 'react-bootstrap';
import SubPropertyValues from './subproperty-values';
import SubPropertyName from './subproperty-name';
import SubPropertyValuesTotal from './subproperty-values-total';

export default React.createClass ({
  // This should be the parent/container for <PropertyName />, <PropertyValues /> and <PropertyValuesTotal />.
  // This should be a child to <App />
  displayName: 'SubProperty',

  getInitialState() {
    return { subPropertyValueTotal: ''};
  },

  changeValueTotal(newValueTotal) {
  	this.setState ({
  		subPropertyValueTotal: newValueTotal
  	})
  },

  render() {

    const { subproperty } = this.props

    return (
      
      <div className="container">
        <div className="row properties-item">
          <div className="col-xs-12">
            <SubPropertyName subproperty={subproperty} />
            <SubPropertyValues subproperty={subproperty} onClick={this.changeValueTotal} />
            <SubPropertyValuesTotal subPropertyValueTotal={this.state.subPropertyValueTotal} />
          </div>
        </div>
      </div> 
    );
  }
})