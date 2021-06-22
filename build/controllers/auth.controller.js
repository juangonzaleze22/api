"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = exports.login = exports.register = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Roles = _interopRequireDefault(require("../models/Roles"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, lastname, username, business_photo, business_name, description, address, email, password, roles, status, newUser, foundRoles, role, usernameDB, emailDB, saveUser, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, lastname = _req$body.lastname, username = _req$body.username, business_photo = _req$body.business_photo, business_name = _req$body.business_name, description = _req$body.description, address = _req$body.address, email = _req$body.email, password = _req$body.password, roles = _req$body.roles, status = _req$body.status;
            console.log(req.body);
            _context.t0 = _User["default"];
            _context.t1 = name;
            _context.t2 = lastname;
            _context.t3 = username;
            _context.t4 = email;
            _context.t5 = business_photo;
            _context.t6 = business_name;
            _context.t7 = description;
            _context.t8 = address;
            _context.next = 13;
            return _User["default"].encryptPassword(password);

          case 13:
            _context.t9 = _context.sent;
            _context.t10 = status;
            _context.t11 = {
              name: _context.t1,
              lastname: _context.t2,
              username: _context.t3,
              email: _context.t4,
              business_photo: _context.t5,
              business_name: _context.t6,
              description: _context.t7,
              address: _context.t8,
              password: _context.t9,
              status: _context.t10
            };
            newUser = new _context.t0(_context.t11);

            if (!roles) {
              _context.next = 24;
              break;
            }

            _context.next = 20;
            return _Roles["default"].find({
              name: {
                $in: roles
              }
            });

          case 20:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 28;
            break;

          case 24:
            _context.next = 26;
            return _Roles["default"].findOne({
              name: 'user'
            });

          case 26:
            role = _context.sent;
            newUser.roles = [role._id];

          case 28:
            _context.next = 30;
            return _User["default"].findOne({
              username: username
            });

          case 30:
            usernameDB = _context.sent;
            _context.next = 33;
            return _User["default"].findOne({
              email: email
            });

          case 33:
            emailDB = _context.sent;

            if (!usernameDB) {
              _context.next = 38;
              break;
            }

            res.status(401).json({
              message: 'Ya existe este usuario'
            });
            _context.next = 47;
            break;

          case 38:
            if (!emailDB) {
              _context.next = 42;
              break;
            }

            res.status(401).json({
              message: 'Ya existe este email'
            });
            _context.next = 47;
            break;

          case 42:
            _context.next = 44;
            return newUser.save();

          case 44:
            saveUser = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: saveUser._id
            }, _config["default"].SECRECT, {
              expiresIn: 86400
            });
            res.json({
              token: token,
              message: 'Usuario creado exitosamente'
            });

          case 47:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.register = register;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userFound, matchPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 2:
            userFound = _context2.sent;
            console.log(req.body.email, req.body.password);
            if (!userFound) res.status(401).json({
              message: "Este usuario no existe"
            });
            _context2.next = 7;
            return _User["default"].comparePassword(req.body.password, userFound.password);

          case 7:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "Contraseña incorrecta"
            }));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRECT, {
              expiresIn: 86400
            });
            console.log('===>', token);
            res.json({
              token: token,
              userFound: userFound
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;

var users = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _User["default"].findById();

          case 2:
            users = _context3.sent;
            res.json(users);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function users(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.users = users;