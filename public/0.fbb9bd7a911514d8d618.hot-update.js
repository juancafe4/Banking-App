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
	  _component: {},
	  _component2: {}
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
	  getInitialState: function getInitialState() {
	    return {
	      account: {}
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    fetch('/api/accounts').then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this.setState({ account: data[0] });
	    }).catch(function (err) {
	      console.log('Error getting your account...');
	    });
	  },
	  render: function render() {
	    console.log('here');
	    return _react3.default.createElement(
	      'div',
	      null,
	      _react3.default.createElement(
	        _reactBootstrap.Row,
	        null,
	        _react3.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 6 },
	          _react3.default.createElement(
	            _reactBootstrap.Well,
	            { bsSize: 'small' },
	            _react3.default.createElement(
	              'h4',
	              null,
	              'Name: ',
	              this.state.account.name
	            ),
	            _react3.default.createElement('br', null),
	            _react3.default.createElement(
	              'h4',
	              null,
	              'Email: ',
	              this.state.account.email
	            ),
	            _react3.default.createElement('br', null),
	            _react3.default.createElement(
	              'h4',
	              null,
	              'Phone Number: ',
	              this.state.account.phoneNumber
	            )
	          )
	        ),
	        _react3.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 6 },
	          _react3.default.createElement(
	            _reactBootstrap.Well,
	            { bsSize: 'small' },
	            _react3.default.createElement(
	              'h4',
	              null,
	              'Total $: ',
	              this.state.account.total
	            ),
	            _react3.default.createElement(
	              _reactBootstrap.Button,
	              { bsStyle: 'primary' },
	              'Add Transaction'
	            )
	          )
	        )
	      ),
	      _react3.default.createElement(TransactionTable, { transactions: this.state.account.transactions })
	    );
	  }
	}));

	var TransactionTable = _wrapComponent('_component2')(_react3.default.createClass({
	  displayName: 'TransactionTable',
	  getInitialState: function getInitialState() {},
	  render: function render() {
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
	            'Amount'
	          ),
	          _react3.default.createElement(
	            'th',
	            null,
	            'Date'
	          ),
	          _react3.default.createElement(
	            'th',
	            null,
	            'Type'
	          ),
	          _react3.default.createElement(
	            'th',
	            null,
	            'Description'
	          ),
	          _react3.default.createElement(
	            'th',
	            null,
	            'Store'
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