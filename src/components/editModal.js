import React from 'React';
import {Modal, Radio, FormControl, ControlLabel, Button, FormGroup, ButtonGroup} from 'react-bootstrap';

const EditModal = React.createClass({
  getInitialState() {
    return {
      amount: 0,
      description: "",
      store: "",
      type: "",
    }
  },
  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        amount: nextProps.amount,
        description: nextProps.description,
        type: nextProps.type,
        store: nextProps.store
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
  remove(e) {
    let num = this.props.transaction.type === 'Debit' ? this.props.transaction.amount : this.props.transaction.amount * -1
    this.props.remove(this.props.transaction._id, parseFloat(num))

  },
  render() {
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
                  value={this.props.transaction.amount}
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
                  value={this.props.transaction.description}
                  placeholder="Enter Description"
                  onChange={this.handleDescription}
                />
                <FormControl
                  type="text"
                  value={this.props.transaction.store}
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
              <Button onClick={this.addTransaction} type="button">
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