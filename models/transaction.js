const mongoose = require('mongoose');
const moment = require('moment')

let transactionSchema = new mongoose.Schema({
  amount: {type: Number, required: true},
  time: {type: String, default: moment().format('MMMM Do YYYY, h:mm:ss a')},
  type: {type: String, enum: ['Debit', 'Credit'], required: true},
  description: {type: String, required: true},
  store: {type: String, required: true}
});

let Transaction = mongoose.model('Transaction' , transactionSchema);

module.exports = Transaction;