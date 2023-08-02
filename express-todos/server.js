var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// http://localhost:3000/views/-> todos/index.ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
// request body -> parsed (converted from a string -> original data )
// updates the request object - a body -> req.body -> form data is accessible

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// custom middleware 
app.use(function(req,res,next){
  res.locals.time = new Date().toLocaleTimeString()
  console.log('Time Stamp', res.locals.time)
  next()
})


// routing middleware -> inbound requests pass through each router function
app.use('/', indexRouter);
// every in indexRouter, assumes http://localhost:3000/test-route
app.use('/todos', todosRouter);

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
  res.render('error',{title: `Error: ${404}`});
  // 
});

module.exports = app;
