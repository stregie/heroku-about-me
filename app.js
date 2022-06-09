const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// Set templating engine
app.engine('ejs', ejs.__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set the public dir
app.use(express.static(path.join(__dirname, 'public')));

// From express docs - for "req.body"
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes
const routes = require('./routes/routes');
app.use('/', routes);

// 404 page
// app.use(function (req, res, next) {
//   res.status(404).render('00-404', null);
// });

// Server
const PORT = process.env.PORT || 6565;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});