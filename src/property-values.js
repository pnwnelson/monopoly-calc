import React from 'react';
//import { DropdownButton, MenuItem, Input, Form, Grid } from 'react-bootstrap';

export default React.createClass ({
	
	displayName: 'PropertyValues',
	// Child to Property.
  // This component should show a drop down menu to select the state (mortgaged, houses, etc) of the Property at the end of the game
  // constructor(props) {
  // 	super(props);
  // 	this.state = { value: 'Own it?' };

  // 	this.handleValue = this.handleValue.bind(this)
  // }

  getInitialState() {
		return {
			value: 'Own it?',
		}
	},

	// This handler is to pass off the selected total value of the property to the third box
	handleValue(event) {
		this.setState({ value: this.props.text})
		const propertyValueTotal = event.target.value;
		this.props.onClick(propertyValueTotal);
		console.log('This is the handleValue: ' + event)
		//finalTotal.push(propertyValueTotal) // hopefully add each property value selected to end of array
		//console.log(finalTotal)
	},

  render() {

    const { unowned } = this.props.property
    const { owned } = this.props.property
    const { mortgaged } = this.props.property
    const { houseCost } = this.props.property

    // This menthod will let me use the value= attribute and populates the total box, but won't let me style it.
    return (
    	<div className="property-values-container">
    		<select className="ddown" value={this.state.value} title="*" id="ddown" onClick={this.handleFinalTotal} onChange={this.handleValue}>

    			<option className="unowned-box btn-selections" value={unowned}>Unowned</option>
    			<option className="mortgaged-box btn-selections" value={"$" + mortgaged}>Mortgaged</option>
    			<option className="owned-box btn-selection" value={"$" + owned}>Owned</option>
    			<option className="green btn-selections" value={"$" + (owned + (houseCost * 1))}>1 house</option>
    			<option className="green btn-selections" value={"$" + (owned + (houseCost * 2))}>2 houses</option>
    			<option className="green btn-selections" value={"$" + (owned + (houseCost * 3))}>3 houses</option>
    			<option className="green btn-selections" value={"$" + (owned + (houseCost * 4))}>4 houses</option>
    			<option className="red btn-selections" value={"$" + (owned + (houseCost * 5))}>Hotel</option>
    		</select>
    	</div>
    )
  }
})

//module.exports = PropertyValues;

// THE FOLLOWING ARE ATTEMPTS AT GETTING RESULTS I WANTED

	// getInitialState() {
	// 	return {
	// 		btnTitle: '$',
	// 		style: {backgroundColor: 'white'}
	// 	}
	// }

    // This method works with styling, but it won't let me use the value= attribute to populate the total box.
    // return (
    //   <div className="property-values-container">
    //     <DropdownButton className="ddown" id="ddown" title={this.state.btnTitle} value="$" onSelect={this.handleChange	} style={this.state.style}>
    //       <MenuItem className="unowned-box btn-selections" eventKey="0" onClick={this.handleValue} value="testtest">0</MenuItem>
    //       <MenuItem className="owned-box btn-selections" eventKey="O" onClick={this.handleValue} value={owned}>O</MenuItem>
    //       <MenuItem className="mortgaged-box btn-selections" eventKey="M" onClick={this.handleValue} value={mortgaged}>M</MenuItem>
    //       <MenuItem className="green btn-selections" eventKey={owned + (houseCost * 1)} onClick={this.handleValue}>1</MenuItem>
    //       <MenuItem className="green btn-selections" eventKey="2" value={owned + (houseCost * 2)}>2</MenuItem>
    //       <MenuItem className="green btn-selections" eventKey="3" value={owned + (houseCost * 3)}>3</MenuItem>
    //       <MenuItem className="green btn-selections" eventKey="4" value={owned + (houseCost * 4)}>4</MenuItem>
    //       <MenuItem className="red btn-selections" eventKey="H" value={owned + (houseCost * 5)}>H</MenuItem>
    //     </DropdownButton>
    //   </div>
    // )

    // return (
    // 	<div>
    // 		<Input type="select" ref="select" onSelect={this.handleChange} onChange={this.handleValue} style={this.state.style}>
    // 			<option className="unowned-box btn-selections" value={unowned}>0</option>
    // 			<option className="mortgaged-box btn-selections" value={"$" + mortgaged}>M</option>
    // 			<option className="owned-box btn-selection" value={"$" + owned}>O</option>
    // 			<option className="green btn-selections" value={"$" + (owned + (houseCost * 1))}>1</option>
    // 			<option className="green btn-selections" value={"$" + (owned + (houseCost * 2))}>2</option>
    // 			<option className="green btn-selections" value={"$" + (owned + (houseCost * 3))}>3</option>
    // 			<option className="green btn-selections" value={"$" + (owned + (houseCost * 4))}>4</option>
    // 			<option className="red btn-selections" value={"$" + (owned + (houseCost * 5))}>H</option>
    // 		</Input>
    // 	</div>
    // )
//const style = {backgroundColor: 'white'}

	// This handler is to style the menu options when using DropdownButton and MenuItem

	// handleChange (event) {

	// 	console.log("The event is " + event)

	// 	if (event == 0) {
	// 		this.setState({
	// 			btnTitle: event,
	// 			style: {backgroundColor: 'white', color: 'black'}
	// 		});
	// 	} else if (event == 'O') {
	// 		this.setState({
	// 			btnTitle: event,
	// 			style: {color: 'rgb(31, 178, 90)'}
	// 		});
	// 	} else if (event == 'M') {
	// 		this.setState({
	// 			btnTitle: event,
	// 			style: {color: 'rgb(237, 27, 36)'}
	// 		});
	// 	} else if (event == 1) {
	// 		this.setState({
	// 			btnTitle: event,
	// 			style: {backgroundColor: 'rgb(31, 178, 90)', color: 'white'}
	// 		});
	// 	} else if (event == 2) {
	// 		this.setState({
	// 			btnTitle: event,
	// 			style: {backgroundColor: 'rgb(31, 178, 90)', color: 'white'}
	// 		});
	// 	} else if (event == 3) {
	// 		this.setState({
	// 			btnTitle: event,
	// 			style: {backgroundColor: 'rgb(31, 178, 90)', color: 'white'}
	// 		});
	// 	} else if (event == 4) {
	// 		this.setState({
	// 			btnTitle: event,
	// 			style: {backgroundColor: 'rgb(31, 178, 90)', color: 'white'}
	// 		});
	// 	} else if (event == 'H') {
	// 		this.setState({
	// 			btnTitle: event,
	// 			style: {backgroundColor: 'rgb(237, 27, 36)', color: 'white'}
	// 		})
	// 	} else {
	// 		this.setState({
	// 			btnTitle: event
	// 		})
	// 	}
	// },

	// This is to add propertyValueTotals to an array
	// handleFinalTotal(event) {
	// 	let newArray = this.state.arr.slice();
	// },







