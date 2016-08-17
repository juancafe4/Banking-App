const mongoose = require('mongoose');

let transactionSchema = new mongoose.Schema({
  amount: {type: Number, required: true},
  time: {type: Date, default: Date.now },
  description: {type: String, required: true},
  store: {type: String, required: true}
});

let Transaction = mongoose.model('Transaction' , transactionSchema);

module.exports = Transaction;