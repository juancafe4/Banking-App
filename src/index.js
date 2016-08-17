import React from 'react'
import {render} from 'react-dom'
import Transactions from './components/Transactions'
import {Grid} from 'react-bootstrap'
const App = React.createClass({
  render() {
    return (
        <Grid>
          <Transactions />
        </Grid>
    )
  }
});

render(<App />, document.getElementById('root'))