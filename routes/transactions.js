let express = require('express');
let router = express.Router();
let Transaction = require('../models/account')

router.get('/', (req, res) => {
  Transaction.find({}, (err, transactions) => {
    res.status(err ? 500 : 200).send(err || transactions)
  });
});

router.post('/', (req, res) => {
  Transaction.create(req.body, (err , transaction) => {
    if (err) return res.status(500).send(err)
    return res.status(200).send(transaction)
  });
});

router.put('/:id', (req, res) => {
  Transaction.findByIdAndUpdate(req.params.id, {
    $set: req.body}, (err, updatedTransaction) => {
      res.status(err ? 400 : 200).send(err || updatedTransaction)
    });
});

router.delete('/:id', (req, res) => {
  Transaction.findByIdAndRemove(req.params.id, function(err, deletedTransaction) {
    res.status(err ? 400 : 200).send(err || deletedTransaction)
  });
});

//Transaction route
//base url: /api/transaction
module.exports = router