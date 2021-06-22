"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var productSchema = new _mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  photos: Array,
  comment: String,
  userId: String,
  description: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Products', productSchema);

exports["default"] = _default;