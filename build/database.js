"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

require('dotenv').config();

console.log('here...', process.env.MONGODB_URI); // local mongodb://localhost/api_db;

_mongoose["default"].connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function (db) {
  return console.log('DB is connected');
})["catch"](function (error) {
  return console.log(error);
});