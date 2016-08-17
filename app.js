//Setting up modules
const express = require ('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
const mongoose = require('mongoose')
//Port
const port = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost/bankdb'

//connecting to the database
mongoose.connect(MONGO_URL, err => {
  if (err) throw err;
  console.log(`MongoDB connected through ${MONGO_URL}`)
});
//VIEW CONFIGURATION
// app.set('view engine', 'ejs')
app.set('views', './public')// Sets to html
//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static('public'));

app.use('/api/accounts', require('./routes/accounts'))
app.use('/api/transactions', require('./routes/transactions'))

//Routes
// app.get('*', (req, res) => {
//   res.render(path.join(__dirname, 'public/index'));
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


//Server listen
app.listen(port), err => {
  console.log(err || `Listenning at ${port}`);
}