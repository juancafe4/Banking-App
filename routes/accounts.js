let express = require('express');
let router = express.Router();
let Account = require('../models/account')

router.get('/', (req, res) => {
  Account.find({}, (err, accounts) => {
    res.status(err ? 500 : 200).send(err || accounts)
  }).populate('transactions');
});

router.post('/', (req, res) => {
  Account.create(req.body, (err , account) => {
    if (err) return res.status(500).send(err)
    return res.status(200).send(account)
  });
});

router.put('/:id', (req, res) => {
  Account.findByIdAndUpdate(req.params.id, {
    $set: req.body}, err => {
      res.status(err ? 400 : 200).send(err || "Account was updated")
    });
});

router.delete('/:id', (req, res) => {
  Account.findByIdAndRemove(req.params.id, function(err, deletedAccount) {
    res.status(err ? 400 : 200).send(err || deletedAccount)
  });
});
//Account route
//base url: /api/accounts

module.exports = router;