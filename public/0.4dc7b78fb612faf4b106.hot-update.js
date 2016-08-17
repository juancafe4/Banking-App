webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(181);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(3);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(182);

	var _index6 = _interopRequireDefault(_index5);

	var _reactDom = __webpack_require__(37);

	var _Transactions = __webpack_require__(318);

	var _Transactions2 = _interopRequireDefault(_Transactions);

	var _reactBootstrap = __webpack_require__(319);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersMASTERCodeBankTransactionNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/MASTER/code/bank-transaction/src/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersMASTERCodeBankTransactionNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/MASTER/code/bank-transaction/src/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMASTERCodeBankTransactionNode_modulesReactTransformHmrLibIndexJs2(_UsersMASTERCodeBankTransactionNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var App = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react3.default.createElement(
	      _reactBootstrap.Grid,
	      null,
	      _react3.default.createElement(_Transactions2.default, null)
	    );
	  }
	}));

	(0, _reactDom.render)(_react3.default.createElement(App, null), document.getElementById('root'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

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

	var _addModal = __webpack_require__(573);

	var _addModal2 = _interopRequireDefault(_addModal);

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
	      account: {},
	      showModalAdd: false
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
	  closeAddModal: function closeAddModal() {
	    this.setState({ showModalAdd: false });
	  },
	  openAddModal: function openAddModal(e) {
	    this.setState({ showModalAdd: true });
	  },
	  render: function render() {
	    var info = null;
	    if (this.state.account) {
	      info = [_react3.default.createElement(
	        'h4',
	        null,
	        'Name: ',
	        this.state.account.name
	      ), _react3.default.createElement('br', null), _react3.default.createElement(
	        'h4',
	        null,
	        'Email: ',
	        this.state.account.email
	      ), _react3.default.createElement('br', null), _react3.default.createElement(
	        'h4',
	        null,
	        'Phone Number: ',
	        this.state.account.phoneNumber
	      )];
	    }
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
	            info
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
	              this.state.account.total.toFixed(2)
	            ),
	            _react3.default.createElement(
	              _reactBootstrap.Button,
	              { onClick: this.openAddModal, bsStyle: 'primary' },
	              'Add Transaction'
	            )
	          )
	        )
	      ),
	      _react3.default.createElement(TransactionTable, { transactions: this.state.account.transactions }),
	      _react3.default.createElement(_addModal2.default, { show: this.state.showModalAdd, onHide: this.closeAddModal })
	    );
	  }
	}));

	var TransactionTable = _wrapComponent('_component2')(_react3.default.createClass({
	  displayName: 'TransactionTable',
	  getInitialState: function getInitialState() {
	    return { transactions: [] };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({ transactions: nextProps.transactions });
	  },
	  render: function render() {
	    var trs = null;
	    console.log(this.state.transactions);
	    if (this.state.transactions) {
	      trs = this.state.transactions.map(function (val) {
	        return _react3.default.createElement(
	          'tr',
	          { key: val._id },
	          _react3.default.createElement(
	            'td',
	            null,
	            '$',
	            val.amount.toFixed(2)
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            val.time
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            val.type
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            val.description
	          ),
	          _react3.default.createElement(
	            'td',
	            null,
	            val.store
	          )
	        );
	      });
	    }
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
	      ),
	      _react3.default.createElement(
	        'tbody',
	        null,
	        trs
	      )
	    );
	  }
	}));
	exports.default = Transactions;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 573:
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
	  filename: '/Users/MASTER/code/bank-transaction/src/components/addModal.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersMASTERCodeBankTransactionNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/MASTER/code/bank-transaction/src/components/addModal.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMASTERCodeBankTransactionNode_modulesReactTransformHmrLibIndexJs2(_UsersMASTERCodeBankTransactionNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var AddModal = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'AddModal',
	  render: function render() {
	    console.log('this.props.showModal', this.props.showModal);
	    return _react3.default.createElement(
	      _reactBootstrap.Modal,
	      { show: this.props.show, onHide: this.props.onHide },
	      _react3.default.createElement(
	        _reactBootstrap.Modal.Header,
	        { closeButton: true },
	        _react3.default.createElement(
	          _reactBootstrap.Modal.Title,
	          null,
	          'Add A Transaction'
	        )
	      ),
	      _react3.default.createElement(_reactBootstrap.Modal.Body, null),
	      _react3.default.createElement(
	        _reactBootstrap.Modal.Footer,
	        null,
	        _react3.default.createElement(
	          _reactBootstrap.Button,
	          { onClick: this.props.onHide },
	          'Close'
	        )
	      )
	    );
	  }
	}));

	exports.default = AddModal;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})