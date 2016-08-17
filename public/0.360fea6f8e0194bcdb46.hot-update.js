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

	var _reactBootstrap = __webpack_require__(320);

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

	var _addModal = __webpack_require__(319);

	var _addModal2 = _interopRequireDefault(_addModal);

	var _editModal = __webpack_require__(574);

	var _editModal2 = _interopRequireDefault(_editModal);

	var _reactBootstrap = __webpack_require__(320);

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
	      showModalAdd: false,
	      showModalEdit: false,
	      edditTransaction: {}
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
	  openEditModal: function openEditModal(row) {
	    this.setState({ showModalEdit: true, edditTransaction: row });
	  },
	  closeEditModal: function closeEditModal() {
	    this.setState({ showModalEdit: false });
	  },
	  addTransaction: function addTransaction(newTrans) {
	    var _this2 = this;

	    fetch('/api/transactions', {
	      method: "POST",
	      headers: {
	        "Content-Type": "application/json"
	      },
	      body: JSON.stringify(newTrans)
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      var num = newTrans.type === 'Credit' ? newTrans.amount : newTrans.amount * -1;

	      var total = parseFloat(num) + _this2.state.account.total;

	      var transIds = _this2.state.account.transactions.map(function (val) {
	        return val._id;
	      });
	      transIds = transIds.concat(data._id);

	      return fetch('/api/accounts/' + _this2.state.account._id, {
	        method: "PUT",
	        headers: {
	          "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
	          transactions: transIds,
	          total: total
	        })
	      });
	    }).then(function () {
	      return fetch('/api/accounts');
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this2.setState({ account: data[0] });
	    }).catch(function (err) {
	      console.log('Error updating');
	    });
	  },
	  removeTransaction: function removeTransaction(id) {
	    console.log('delete id ', id);
	  },
	  render: function render() {
	    var total = null;
	    if (this.state.account.total) {
	      total = _react3.default.createElement(
	        'h4',
	        null,
	        'Total $: ',
	        this.state.account.total.toFixed(2)
	      );
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
	            total,
	            _react3.default.createElement(
	              _reactBootstrap.Button,
	              { onClick: this.openAddModal, bsStyle: 'primary' },
	              'Add Transaction'
	            )
	          )
	        )
	      ),
	      _react3.default.createElement(TransactionTable, { openModal: this.openEditModal, transactions: this.state.account.transactions }),
	      _react3.default.createElement(_addModal2.default, { create: this.addTransaction, show: this.state.showModalAdd, onHide: this.closeAddModal }),
	      _react3.default.createElement(_editModal2.default, { remove: this.removeTransaction, transaction: this.state.edditTransaction, show: this.state.showModalEdit, onHide: this.closeEditModal })
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
	  editModal: function editModal(val) {
	    this.props.openModal(val);
	  },
	  render: function render() {
	    var _this3 = this;

	    var trs = null;
	    if (this.state.transactions) {
	      trs = this.state.transactions.map(function (val) {
	        return _react3.default.createElement(
	          'tr',
	          { onClick: _this3.editModal.bind(null, val), key: val._id },
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

/***/ 319:
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

	var _reactBootstrap = __webpack_require__(320);

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
	  getInitialState: function getInitialState() {
	    return {
	      amount: 0,
	      description: "",
	      store: "",
	      type: ""
	    };
	  },
	  getValidationState: function getValidationState() {
	    if (this.state.amount && this.state.description && this.state.store && this.state.type !== "Select") {
	      return 'success';
	    } else return "error";
	  },
	  handleAmount: function handleAmount(e) {
	    this.setState({ amount: e.target.value });
	  },
	  handleDescription: function handleDescription(e) {
	    this.setState({ description: e.target.value });
	  },
	  handleStore: function handleStore(e) {
	    this.setState({ store: e.target.value });
	  },
	  selectType: function selectType(e) {
	    this.setState({ type: e.target.value });
	  },
	  addTransaction: function addTransaction(e) {
	    if (this.state.amount && this.state.description && this.state.store && this.state.type !== "Select") {
	      this.props.create({
	        amount: this.state.amount,
	        description: this.state.description,
	        type: this.state.type,
	        store: this.state.store
	      });
	      this.props.onHide();
	    }
	  },
	  render: function render() {
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
	      _react3.default.createElement(
	        _reactBootstrap.Modal.Body,
	        null,
	        _react3.default.createElement(
	          'form',
	          null,
	          _react3.default.createElement(
	            _reactBootstrap.FormGroup,
	            {
	              controlId: 'formBasicText',
	              validationState: this.getValidationState() },
	            _react3.default.createElement(_reactBootstrap.FormControl, {
	              type: 'number',
	              value: this.state.amount,
	              placeholder: 'Enter Amount $',
	              onChange: this.handleAmount
	            }),
	            _react3.default.createElement(
	              _reactBootstrap.FormControl,
	              { onChange: this.selectType, componentClass: 'select', placeholder: 'Transaction Type' },
	              _react3.default.createElement(
	                'option',
	                { value: 'Select' },
	                'Select'
	              ),
	              _react3.default.createElement(
	                'option',
	                { value: 'Debit' },
	                'Debit'
	              ),
	              _react3.default.createElement(
	                'option',
	                { value: 'Credit' },
	                'Credit'
	              )
	            ),
	            _react3.default.createElement(_reactBootstrap.FormControl, {
	              type: 'text',
	              value: this.state.description,
	              placeholder: 'Enter Description',
	              onChange: this.handleDescription
	            }),
	            _react3.default.createElement(_reactBootstrap.FormControl, {
	              type: 'text',
	              value: this.state.store,
	              placeholder: 'Enter Company',
	              onChange: this.handleStore
	            }),
	            _react3.default.createElement(_reactBootstrap.FormControl.Feedback, null)
	          )
	        )
	      ),
	      _react3.default.createElement(
	        _reactBootstrap.Modal.Footer,
	        null,
	        _react3.default.createElement(
	          _reactBootstrap.Button,
	          { onClick: this.addTransaction, type: 'button' },
	          'Add Transaction'
	        ),
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

/***/ },

/***/ 574:
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

	var _React = __webpack_require__(3);

	var _React2 = _interopRequireDefault(_React);

	var _reactBootstrap = __webpack_require__(320);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersMASTERCodeBankTransactionNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/MASTER/code/bank-transaction/src/components/editModal.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersMASTERCodeBankTransactionNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/MASTER/code/bank-transaction/src/components/editModal.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMASTERCodeBankTransactionNode_modulesReactTransformHmrLibIndexJs2(_UsersMASTERCodeBankTransactionNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var EditModal = _wrapComponent('_component')(_React2.default.createClass({
	  displayName: 'EditModal',
	  getInitialState: function getInitialState() {
	    return {
	      amount: 0,
	      description: "",
	      store: "",
	      type: ""
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      amount: nextProps.amount,
	      description: nextProps.description,
	      type: nextProps.type,
	      store: nextProps.store
	    });
	  },
	  getValidationState: function getValidationState() {
	    if (this.state.amount && this.state.description && this.state.store && this.state.type !== "Select") {
	      return 'success';
	    } else return "error";
	  },
	  handleAmount: function handleAmount(e) {
	    this.setState({ amount: e.target.value });
	  },
	  handleDescription: function handleDescription(e) {
	    this.setState({ description: e.target.value });
	  },
	  handleStore: function handleStore(e) {
	    this.setState({ store: e.target.value });
	  },
	  selectType: function selectType(e) {
	    this.setState({ type: e.target.value });
	  },
	  addTransaction: function addTransaction(e) {
	    if (this.state.amount && this.state.description && this.state.store && this.state.type !== "Select") {
	      this.props.create({
	        amount: this.state.amount,
	        description: this.state.description,
	        type: this.state.type,
	        store: this.state.store
	      });
	      this.props.onHide();
	    }
	  },
	  remove: function remove(e) {
	    this.props.remove(this.props.transaction._id);
	  },
	  render: function render() {
	    if (this.props.transaction) return _React2.default.createElement(
	      _reactBootstrap.Modal,
	      { show: this.props.show, onHide: this.props.onHide },
	      _React2.default.createElement(
	        _reactBootstrap.Modal.Header,
	        { closeButton: true },
	        _React2.default.createElement(
	          _reactBootstrap.Modal.Title,
	          null,
	          'Add A Transaction'
	        )
	      ),
	      _React2.default.createElement(
	        _reactBootstrap.Modal.Body,
	        null,
	        _React2.default.createElement(
	          'form',
	          null,
	          _React2.default.createElement(
	            _reactBootstrap.FormGroup,
	            {
	              controlId: 'formBasicText',
	              validationState: this.getValidationState() },
	            _React2.default.createElement(_reactBootstrap.FormControl, {
	              type: 'number',
	              value: this.props.transaction.amount,
	              placeholder: 'Enter Amount $',
	              onChange: this.handleAmount
	            }),
	            _React2.default.createElement(
	              _reactBootstrap.FormControl,
	              { onChange: this.selectType, componentClass: 'select', placeholder: 'Transaction Type' },
	              _React2.default.createElement(
	                'option',
	                { value: 'Select' },
	                'Select'
	              ),
	              _React2.default.createElement(
	                'option',
	                { value: 'Debit' },
	                'Debit'
	              ),
	              _React2.default.createElement(
	                'option',
	                { value: 'Credit' },
	                'Credit'
	              )
	            ),
	            _React2.default.createElement(_reactBootstrap.FormControl, {
	              type: 'text',
	              value: this.props.transaction.description,
	              placeholder: 'Enter Description',
	              onChange: this.handleDescription
	            }),
	            _React2.default.createElement(_reactBootstrap.FormControl, {
	              type: 'text',
	              value: this.props.transaction.store,
	              placeholder: 'Enter Company',
	              onChange: this.handleStore
	            }),
	            _React2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
	          )
	        )
	      ),
	      _React2.default.createElement(
	        _reactBootstrap.Modal.Footer,
	        null,
	        _React2.default.createElement(
	          _reactBootstrap.Button,
	          { onClick: this.remove, bsStyle: 'danger' },
	          'Delete Transaction'
	        ),
	        _React2.default.createElement(
	          _reactBootstrap.Button,
	          { onClick: this.addTransaction, type: 'button' },
	          'Save Transaction'
	        ),
	        _React2.default.createElement(
	          _reactBootstrap.Button,
	          { onClick: this.props.onHide },
	          'Close'
	        )
	      )
	    );else return _React2.default.createElement('div', null);
	  }
	}));

	exports.default = EditModal;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})