import React from 'react'
import {Modal, Radio, FormControl, ControlLabel, Button, FormGroup, ButtonGroup} from 'react-bootstrap'


const AddModal = React.createClass({
  getInitialState() {
    return {
      amount: 0,
      description: "",
      store: "",
      type: "",
    }
  },
  getValidationState() {
    if(this.state.amount && this.state.description
      && this.state.store && this.state.type !== "Select") {
      return 'success'
    }
    else
      return "error"
  },
  handleAmount(e) {
    this.setState({amount: e.target.value})
  },
  handleDescription(e) {
    this.setState({description: e.target.value})
  },
  handleStore(e) {
    this.setState({store: e.target.value})
  },
  selectType(e) {
    this.setState({type: e.target.value})
  },
  addTransaction(e) {
    if(this.state.amount && this.state.description
      && this.state.store && this.state.type !== "Select") {
      this.props.create({
        amount: this.state.amount,
        description: this.state.description,
        type: this.state.type,
        store: this.state.store
      });
      this.props.onHide();
    }
  },
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Add A Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}>
              <FormControl
                type="number"
                value={this.state.amount}
                placeholder="Enter Amount $"
                onChange={this.handleAmount}
              />

              <FormControl onChange={this.selectType} componentClass="select" placeholder="Transaction Type">
                <option value="Select">Select</option>
                <option value="Debit">Debit</option>
                <option value="Credit">Credit</option>
              </FormControl>

              <FormControl
                type="text"
                value={this.state.description}
                placeholder="Enter Description"
                onChange={this.handleDescription}
              />
              <FormControl
                type="text"
                value={this.state.store}
                placeholder="Enter Company"
                onChange={this.handleStore}
              />
              <FormControl.Feedback />
          </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={this.addTransaction} type="button">
              Add Transaction
            </Button>
            <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  } 
}); 


export default AddModal