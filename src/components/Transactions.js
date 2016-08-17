import React from 'react'
import AddModal from './addModal'
import {Button, Table, Col, Row, Well} from 'react-bootstrap'

const Transactions = React.createClass({
  getInitialState() {
    return {
      account: {},
      showModalAdd: false,
    }
  },
  componentWillMount() {
    fetch('/api/accounts')
      .then(Response => Response.json())
      .then(data => {
        this.setState({account: data[0]})
      })
      .catch(err => {
        console.log('Error getting your account...')
      });
  },
  closeAddModal() {
    this.setState({showModalAdd: false});
  },
  openAddModal(e) {
    this.setState({showModalAdd: true});
  },
  render() {
    let total = null 
    if (this.state.account.total) {
      total =<h4>Total $: {this.state.account.total.toFixed(2)}</h4>
    }
    return ( 
      <div>
        <Row>
          <Col xs={6}>
            <Well bsSize="small">
              <h4>Name: {this.state.account.name}</h4>
              <br/>
              <h4>Email: {this.state.account.email}</h4>
              <br/>
              <h4>Phone Number: {this.state.account.phoneNumber}</h4>
            </Well>
          </Col>
          <Col xs={6}>
            <Well bsSize="small">
              {total}
              <Button onClick={this.openAddModal}  bsStyle="primary">Add Transaction</Button>
              
            </Well>
          </Col>
        </Row>
        <TransactionTable transactions={this.state.account.transactions}/>

        <AddModal show={this.state.showModalAdd} onHide={this.closeAddModal}/>
      </div>
    )
  }
}) 

const TransactionTable = React.createClass({
  getInitialState() {
    return {transactions: []}
  },
  componentWillReceiveProps(nextProps) {
    this.setState({transactions: nextProps.transactions})
  },
  render() {
    let trs = null
    console.log(this.state.transactions)
    if (this.state.transactions) {
      trs = this.state.transactions.map(val => {
        return <tr key={val._id}> 
                <td>${val.amount.toFixed(2)}</td>
                <td>{val.time}</td>
                <td>{val.type}</td>
                <td>{val.description}</td>
                <td>{val.store}</td>
              </tr>
      });
    }
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Description</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </Table>
    )
  }
}) 
export default Transactions