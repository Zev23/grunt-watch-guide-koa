"use strict"

const 
  koa = require('koa'),
  app = koa();

app.use(function *(){
  this.body = "<script src=\"http://localhost:35729/livereload.js\"></script>";
  this.body += "Hello World\n";
});

app.listen(3000, function(){console.log("Server Koa Running")});

