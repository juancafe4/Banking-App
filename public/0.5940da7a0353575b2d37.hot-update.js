webpackHotUpdate(0,{

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(181);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(3);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(182);

	var _index6 = _interopRequireDefault(_index5);

	var _reactBootstrap = __webpack_require__(319);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersMASTERCodeBankTransactionNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/MASTER/code/bank-transaction/src/components/Transactions.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersMASTERCodeBankTransactionNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/MASTER/code/bank-transaction/src/components/Transactions.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMASTERCodeBankTransactionNode_modulesReactTransformHmrLibIndexJs2(_UsersMASTERCodeBankTransactionNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Transactions = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'Transactions',
	  render: function render() {
	    console.log('here');
	    return _react3.default.createElement(
	      _reactBootstrap.Table,
	      { striped: true, bordered: true, condensed: true, hover: true },
	      _react3.default.createElement(
	        'thead',
	        null,
	        _react3.default.createElement(
	          'tr',
	          null,
	          _react3.default.createElement(
	            'th',
	            null,
	            '#'
	          ),
	          _react3.default.createElement(
	            'th',
	            null,
	            'First Name'
	          ),
	          _react3.default.createElement(
	            'th',
	            null,
	            'Last Name'
	          ),
	          _react3.default.createElement(
	            'th',
	            null,
	            'Username'
	          )
	        )
	      ),
	      _react3.default.createElement(
	        'tbody',
	        null,
	        _react3.default.createElement(
	          'tr',
	          null,
	          _react3.default.createElement(
	            'td',
	            null,
	            '1'
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            'Mark'
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            'Otto'
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            '@mdo'
	          )
	        ),
	        _react3.default.createElement(
	          'tr',
	          null,
	          _react3.default.createElement(
	            'td',
	            null,
	            '2'
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            'Jacob'
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            'Thornton'
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            '@fat'
	          )
	        ),
	        _react3.default.createElement(
	          'tr',
	          null,
	          _react3.default.createElement(
	            'td',
	            null,
	            '3'
	          ),
	          _react3.default.createElement(
	            'td',
	            { colSpan: '2' },
	            'Larry the Bird'
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            '@twitter'
	          )
	        )
	      )
	    );
	  }
	}));

	exports.default = Transactions;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})