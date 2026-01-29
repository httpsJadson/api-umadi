"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _jovemRoutes = require('./routes/jovemRoutes'); var _jovemRoutes2 = _interopRequireDefault(_jovemRoutes);
var _obreiroRoutes = require('./routes/obreiroRoutes'); var _obreiroRoutes2 = _interopRequireDefault(_obreiroRoutes);
require('./database');

_dotenv2.default.config();

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/jovens/', _jovemRoutes2.default);
    this.app.use('/obreiros/', _obreiroRoutes2.default);
  }
}

exports. default = new App().app;
