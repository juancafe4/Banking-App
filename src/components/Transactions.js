import React from 'react'
import {Table, Col, Row, Well} from 'react-bootstrap'

const Transactions = React.createClass({
  getInitialState() {
    return {
      account: {}
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
  render() {
    console.log('here')
    return ( 
      <div>
        <Row>
          <Col xs={12}>
            <Well bsSize="large">
            Name: {this.state.account.name}
            <br/>
            Email: {this.state.account.email}
            
            </Well>
          </Col>
        </Row>
        <TransactionTable/>
      </div>
    )
  }
}) 

const TransactionTable = React.createClass({
  render() {
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
      </Table>
    )
  }
}) 
export default Transactions