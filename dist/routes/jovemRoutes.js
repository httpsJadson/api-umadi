"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _jovemControllers = require('../controllers/jovemControllers'); var _jovemControllers2 = _interopRequireDefault(_jovemControllers);

const router = new (0, _express.Router)();

router.get('/', _jovemControllers2.default.index);
router.post('/', _jovemControllers2.default.store);
router.put('/:id', _jovemControllers2.default.update);
router.get('/:id', _jovemControllers2.default.show);
router.delete('/:id', _jovemControllers2.default.delete);

exports. default = router;
