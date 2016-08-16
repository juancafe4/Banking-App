const mongoose = require('mongoose');

let accountSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  phoneNumber: {type: Number, required: true, unique: true},
  total: {type: Number, required: true, default: 0},
  transactions: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}
  ]
});

let Account = mongoose.model('Account' , accountSchema);

module.exports = Account;