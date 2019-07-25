var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var es6Renderer = require('express-es6-template-engine');
var sass = require('node-sass-middleware');
var app = express();

// view engine setup
app.engine('html', es6Renderer);
app.set('views', path.join(__dirname, '.'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sass({
    src: __dirname + '/',    // Input SASS files
    dest: __dirname + '/css', // Output CSS
    debug: true
  })
);
app.use(express.static(path.join(__dirname, 'css')));

app.get('/', function(req, res) {
  // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  // res.header('Expires', '-1');
  // res.header('Pragma', 'no-cache');
  res.render('server/template', {
    locals: {
      title:  'PatternFly'
    }
  });
});

app.get('/iframe', function(req, res) {
  // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  // res.header('Expires', '-1');
  // res.header('Pragma', 'no-cache');
  res.render('server/iframe', {
    locals: {
      title:  'PatternFly'
    },
    partials: {
      partial: '/index'
    }
  });
});

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
  res.render('server/views/error');
});

module.exports = app;
