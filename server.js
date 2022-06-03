const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const pollController = require('./pollController')
app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/create', pollController.createPollGetController);
app.get('/create', pollController.createPollPostController);
app.get('/', (req, res) => {
           res.render('home')
  
});

mongoose.connect('mongodb://localhost:27017/test')

   .then(() => {
      app.listen(5000, () => {
        console.log('Server is listening on port 8000');

      })
   })
   .catch(e => {
     console.log(e)
   })