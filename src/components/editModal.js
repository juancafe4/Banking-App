import React from 'React';
import {Modal, Radio, FormControl, ControlLabel, Button, FormGroup, ButtonGroup} from 'react-bootstrap';

const EditModal = React.createClass({
  getInitialState() {
    return {
      amount: 0,
      description: "",
      store: "",
      type: "",
      prevAmount: 0 
    }
  },
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState(
      {
        amount: nextProps.transaction.amount,
        description: nextProps.transaction.description,
        type: nextProps.transaction.type,
        store: nextProps.transaction.store,
        prevAmount: nextProps.transaction.amount
      });
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
  edit(e) {
    if(this.state.amount && this.state.description
      && this.state.store && this.state.type !== "Select") {
      
      let num = this.state.type === 'Credit'  ? this.state.prevAmount * -1 : this.state.prevAmount
      let transNum = this.state.type === 'Debit'  ? this.state.amount * -1 : this.state.amount
      let total = parseFloat(num) + parseFloat(transNum)
      this.props.edit({
        amount: this.state.amount,
        description: this.state.description,
        type: this.state.type,
        store: this.state.store
      }, this.props.transaction._id, total);
      this.props.onHide();
    }
  },
  remove(e) {
    let num = this.props.transaction.type === 'Debit' ? this.props.transaction.amount : this.props.transaction.amount * -1
    this.props.remove(this.props.transaction._id, parseFloat(num))

  },
  render() {
    console.log('edit ', this.state.amount)
    if (this.props.transaction) 
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
              <Button onClick={this.remove} bsStyle="danger">
                Delete Transaction
              </Button>
              <Button onClick={this.edit} bsStyle="success" type="button">
                Save Transaction
              </Button>
              <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      )
    else return <div></div>
  } 
});

export default EditModal