const mongoose = require('mongoose');

let transactionSchema = new mongoose.Schema({
  amount: {type: Number, required: true},
  time: {type: Date, default: Date.now },
  description: {type: String, required: true},
  store: {type: String, required: true},
  transactions: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}
  ]
});

let Account = mongoose.model('Account' , accountSchema);

module.exports = Account;