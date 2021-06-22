"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _products = _interopRequireDefault(require("./routes/products"));

var _authentication = _interopRequireDefault(require("./routes/authentication"));

var _user = _interopRequireDefault(require("./routes/user"));

var _database = _interopRequireDefault(require("./database"));

var _cors = _interopRequireDefault(require("cors"));

var _initialSetup = require("./libs/initialSetup");

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
/* Middleware */

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.json({
    text: 'welcome'
  });
});
app.use('/api/products', _products["default"]);
app.use('/api/auth', _authentication["default"]);
app.use('/api/users', _user["default"]);
var _default = app;
exports["default"] = _default;