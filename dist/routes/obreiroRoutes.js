"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _obreiroController = require('../controllers/obreiroController'); var _obreiroController2 = _interopRequireDefault(_obreiroController);

const router = new (0, _express.Router)();

router.get('/', _obreiroController2.default.index);
router.post('/', _obreiroController2.default.store);
router.put('/:id', _obreiroController2.default.update);
router.get('/:id', _obreiroController2.default.show);
router.delete('/:id', _obreiroController2.default.delete);

exports. default = router;
