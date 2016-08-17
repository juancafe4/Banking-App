webpackHotUpdate(0,{

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
	      store: ""
	    };
	  },
	  getValidationState: function getValidationState() {
	    if (this.state.amount) {}
	  },
	  handleAmount: function handleAmount(e) {
	    this.setState({ amount: e.target.value });
	  },
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
	            _react3.default.createElement(
	              _reactBootstrap.ControlLabel,
	              null,
	              'Working example with validation'
	            ),
	            _react3.default.createElement(_reactBootstrap.FormControl, {
	              type: 'number',
	              value: this.state.amount,
	              placeholder: 'Enter Amount $',
	              onChange: this.handleAmount
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