"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProductsById = exports.updateProductsById = exports.getProductsById = exports.createProdurcts = exports.getProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Products = _interopRequireDefault(require("../models/Products"));

var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Products["default"].find();

          case 2:
            products = _context.sent;
            res.json(products);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var createProdurcts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, category, price, photos, comment, description, userId, newProducts, productSaved;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, category = _req$body.category, price = _req$body.price, photos = _req$body.photos, comment = _req$body.comment, description = _req$body.description, userId = _req$body.userId;
            newProducts = new _Products["default"]({
              name: name,
              category: category,
              price: price,
              photos: photos,
              comment: comment,
              description: description,
              userId: userId
            });
            _context2.next = 4;
            return newProducts.save();

          case 4:
            productSaved = _context2.sent;
            res.status(201).json(productSaved);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createProdurcts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createProdurcts = createProdurcts;

var getProductsById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Products["default"].findById(req.params.productId);

          case 2:
            products = _context3.sent;
            res.status(201).json(products);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductsById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductsById = getProductsById;

var updateProductsById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updateProducts;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Products["default"].findByIdAndUpdate(req.params.productId, req.body, {
              "new": true
            });

          case 2:
            updateProducts = _context4.sent;
            res.status(201).json(updateProducts);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateProductsById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProductsById = updateProductsById;

var deleteProductsById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var productsDelete;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(req.params.productId);
            _context5.next = 3;
            return _Products["default"].findByIdAndDelete(req.params.productId);

          case 3:
            productsDelete = _context5.sent;
            res.status(201).json('delete produtcs');

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProductsById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProductsById = deleteProductsById;