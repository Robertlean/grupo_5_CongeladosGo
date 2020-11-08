var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var methodOverride = require('method-override');
<<<<<<< HEAD
var localsCheck = require('./middlewares/localsCheck');
=======
var localsCheck = require('./middlewares/localsCheck')
>>>>>>> 65a9450c9d4a747f5b799febdc5a0c1b6e25f1ea

let mainRouter = require('./routes/main');
let productosRouter = require('./routes/productos');
let usuariosRouter = require('./routes/usuarios');
let carritoRouter = require('./routes/carrito');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({secret:'miFrase'}))
app.use(methodOverride('_method'))
app.use(localsCheck)

app.use('/', mainRouter);
app.use('/productos',productosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/carrito', carritoRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
