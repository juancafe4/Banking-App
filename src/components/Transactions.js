import React from 'react'
import AddModal from './addModal'
import EditModal from './editModal'
import {Button, Table, Col, Row, Well} from 'react-bootstrap'

const Transactions = React.createClass({
  getInitialState() {
    return {
      account: {},
      showModalAdd: false,
      showModalEdit: false,
      edditTransaction: {},
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
  openEditModal(row) {
    this.setState({showModalEdit: true, edditTransaction: row});
  },
  closeEditModal() {
    this.setState({showModalEdit: false});
  },
  addTransaction(newTrans) {
    fetch('/api/transactions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrans)
    })
    .then(Response => Response.json())
    .then(data => {
      let num = newTrans.type === 'Credit' ? newTrans.amount : newTrans.amount * -1
    
      let total = parseFloat(num) + this.state.account.total
    
      let transIds = this.state.account.transactions.map(val => val._id)
      transIds = transIds.concat(data._id)

      return fetch(`/api/accounts/${this.state.account._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          transactions: transIds,
          total: total
        })
      });
    })
    .then(() => {
      return fetch('/api/accounts')
    })
    .then(Response => Response.json())
    .then(data => {
        this.setState({account: data[0]})
    })
    .catch(err => {
      console.log('Error updating')
    })
  },
  removeTransaction(id, num) {
    this.setState({showModalEdit: false});
    let total = parseFloat(this.state.account.total) + num
    fetch(`/api/transactions/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      return fetch(`/api/accounts/${this.state.account._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          total: total
        })
      })
    })
    .then(() => {
      return fetch('/api/accounts')
    })
    .then(Response => Response.json())
    .then(data => {
        this.setState({account: data[0]})
    })
    .catch(err => {
      console.log('Error deleting')
    })

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
              <Button onClick={this.openAddModal} bsStyle="primary">Add Transaction</Button>
              
            </Well>
          </Col>
        </Row>
        <TransactionTable openModal={this.openEditModal} transactions={this.state.account.transactions}/>

        <AddModal create={this.addTransaction} show={this.state.showModalAdd} onHide={this.closeAddModal}/>
        <EditModal remove={this.removeTransaction} transaction={this.state.edditTransaction} show={this.state.showModalEdit} onHide={this.closeEditModal}/>
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
  editModal(val) {
    this.props.openModal(val)
  },
  render() {
    let trs = null
    if (this.state.transactions) {
      trs = this.state.transactions.map(val => {
        return <tr onClick={this.editModal.bind(null, val)}key={val._id}> 
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