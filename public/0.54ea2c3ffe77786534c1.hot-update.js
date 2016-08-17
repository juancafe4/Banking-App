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

	var _React = __webpack_require__(319);

	var _React2 = _interopRequireDefault(_React);

	var _button = __webpack_require__(344);

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

	var Transactions = _wrapComponent('_component')(_React2.default.createClass({
	  displayName: 'Transactions',
	  render: function render() {
	    return _React2.default.createElement(
	      'h1',
	      null,
	      'Hello Bank'
	    );
	  }
	}));

	exports.default = Transactions;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IconButton = exports.Button = undefined;

	var _identifiers = __webpack_require__(345);

	var _reactCssThemr = __webpack_require__(346);

	var _Button = __webpack_require__(351);

	var _IconButton = __webpack_require__(358);

	var _FontIcon = __webpack_require__(354);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _ripple = __webpack_require__(359);

	var _ripple2 = _interopRequireDefault(_ripple);

	var _theme = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./theme.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _theme2 = _interopRequireDefault(_theme);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Button = (0, _Button.buttonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon2.default);
	var IconButton = (0, _IconButton.iconButtonFactory)((0, _ripple2.default)({ centered: true }), _FontIcon2.default);
	var ThemedButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(Button);
	var ThemedIconButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(IconButton);

	exports.default = ThemedButton;
	exports.Button = ThemedButton;
	exports.IconButton = ThemedIconButton;

/***/ },

/***/ 345:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var APP_BAR = exports.APP_BAR = 'RTAppBar';
	var AUTOCOMPLETE = exports.AUTOCOMPLETE = 'RTAutocomplete';
	var AVATAR = exports.AVATAR = 'RTAvatar';
	var BUTTON = exports.BUTTON = 'RTButton';
	var CARD = exports.CARD = 'RTCard';
	var CHIP = exports.CHIP = 'RTChip';
	var CHECKBOX = exports.CHECKBOX = 'RTCheckbox';
	var DATE_PICKER = exports.DATE_PICKER = 'RTDatePicker';
	var DIALOG = exports.DIALOG = 'RTDialog';
	var DROPDOWN = exports.DROPDOWN = 'RTDropdown';
	var INPUT = exports.INPUT = 'RTInput';
	var LAYOUT = exports.LAYOUT = 'RTLayout';
	var LINK = exports.LINK = 'RTLink';
	var LIST = exports.LIST = 'RTList';
	var MENU = exports.MENU = 'RTMenu';
	var NAVIGATION = exports.NAVIGATION = 'RTNavigation';
	var OVERLAY = exports.OVERLAY = 'RTOverlay';
	var PROGRESS_BAR = exports.PROGRESS_BAR = 'RTProgressBar';
	var RADIO = exports.RADIO = 'RTRadio';
	var RIPPLE = exports.RIPPLE = 'RTRipple';
	var SLIDER = exports.SLIDER = 'RTSlider';
	var SNACKBAR = exports.SNACKBAR = 'RTSnackbar';
	var SWITCH = exports.SWITCH = 'RTSwitch';
	var TABLE = exports.TABLE = 'RTTable';
	var TABS = exports.TABS = 'RTTabs';
	var TOOLTIP = exports.TOOLTIP = 'RTTooltip';
	var TIME_PICKER = exports.TIME_PICKER = 'RTTimePicker';

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ThemeProvider = __webpack_require__(347);

	Object.defineProperty(exports, 'ThemeProvider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ThemeProvider).default;
	  }
	});

	var _themr = __webpack_require__(349);

	Object.defineProperty(exports, 'themr', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_themr).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _react = __webpack_require__(3);

	var _themrShape = __webpack_require__(348);

	var _themrShape2 = _interopRequireDefault(_themrShape);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ThemeProvider = (_temp = _class = function (_Component) {
	  _inherits(ThemeProvider, _Component);

	  function ThemeProvider() {
	    _classCallCheck(this, ThemeProvider);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ThemeProvider).apply(this, arguments));
	  }

	  _createClass(ThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        themr: {
	          theme: this.props.theme
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react.Children.only(this.props.children);
	    }
	  }]);

	  return ThemeProvider;
	}(_react.Component), _class.propTypes = {
	  children: _react.PropTypes.element.isRequired,
	  theme: _react.PropTypes.object.isRequired
	}, _class.defaultProps = {
	  theme: {}
	}, _class.childContextTypes = {
	  themr: _themrShape2.default.isRequired
	}, _temp);
	exports.default = ThemeProvider;

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	exports.default = _react.PropTypes.shape({
	  theme: _react.PropTypes.object.isRequired
	});

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(350);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var COMPOSE_DEEPLY = 'deeply';
	var COMPOSE_SOFTLY = 'softly';
	var DONT_COMPOSE = false;

	var DEFAULT_OPTIONS = {
	  composeTheme: COMPOSE_DEEPLY,
	  withRef: false
	};

	exports.default = function (componentName, localTheme) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	  return function (ThemedComponent) {
	    var _class, _temp;

	    var _DEFAULT_OPTIONS$opti = _extends({}, DEFAULT_OPTIONS, options);

	    var optionComposeTheme = _DEFAULT_OPTIONS$opti.composeTheme;
	    var optionWithRef = _DEFAULT_OPTIONS$opti.withRef;

	    validateComposeOption(optionComposeTheme);
	    return _temp = _class = function (_Component) {
	      _inherits(Themed, _Component);

	      function Themed() {
	        _classCallCheck(this, Themed);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Themed).apply(this, arguments));
	      }

	      _createClass(Themed, [{
	        key: 'getWrappedInstance',
	        value: function getWrappedInstance() {
	          (0, _invariant2.default)(optionWithRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the third argument of the themr() call.');

	          return this.refs.wrappedInstance;
	        }
	      }, {
	        key: 'getThemeNotComposed',
	        value: function getThemeNotComposed() {
	          if (this.props.theme) return this.props.theme;
	          if (localTheme) return localTheme;
	          return this.getContextTheme();
	        }
	      }, {
	        key: 'getContextTheme',
	        value: function getContextTheme() {
	          return this.context.themr ? this.context.themr.theme[componentName] : {};
	        }
	      }, {
	        key: 'getTheme',
	        value: function getTheme() {
	          return this.props.composeTheme === COMPOSE_SOFTLY ? Object.assign({}, this.getContextTheme(), localTheme, this.props.theme) : themeable(themeable(this.getContextTheme(), localTheme), this.props.theme);
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _props = this.props;
	          var composeTheme = _props.composeTheme;

	          var rest = _objectWithoutProperties(_props, ['composeTheme']);

	          var renderedElement = void 0;

	          if (optionWithRef) {
	            renderedElement = _react2.default.createElement(ThemedComponent, _extends({}, rest, {
	              ref: 'wrappedInstance',
	              theme: composeTheme ? this.getTheme() : this.getThemeNotComposed()
	            }));
	          } else {
	            renderedElement = _react2.default.createElement(ThemedComponent, _extends({}, rest, {
	              theme: composeTheme ? this.getTheme() : this.getThemeNotComposed()
	            }));
	          }

	          return renderedElement;
	        }
	      }]);

	      return Themed;
	    }(_react.Component), _class.displayName = 'Themed ' + ThemedComponent.name, _class.contextTypes = {
	      themr: _react.PropTypes.object
	    }, _class.propTypes = {
	      composeTheme: _react.PropTypes.oneOf([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE]),
	      theme: _react.PropTypes.object
	    }, _class.defaultProps = {
	      composeTheme: optionComposeTheme
	    }, _temp;
	  };
	};

	function themeable() {
	  var style = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var theme = arguments[1];

	  if (!theme) return style;
	  return [].concat(_toConsumableArray(Object.keys(theme)), _toConsumableArray(Object.keys(style))).reduce(function (result, key) {
	    return typeof theme[key] === 'string' && style[key] && theme[key].indexOf(style[key]) === -1 ? _extends({}, result, _defineProperty({}, key, style[key] + ' ' + theme[key])) : _extends({}, result, _defineProperty({}, key, theme[key] || style[key]));
	  }, {});
	}

	function validateComposeOption(composeTheme) {
	  if ([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE].indexOf(composeTheme) === -1) {
	    throw new Error('Invalid composeTheme option for react-css-themr. Valid composition options are ' + COMPOSE_DEEPLY + ', ' + COMPOSE_SOFTLY + ' and ' + DONT_COMPOSE + '. The given option was ' + composeTheme);
	  }
	}

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Button = exports.buttonFactory = undefined;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(352);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _reactCssThemr = __webpack_require__(346);

	var _identifiers = __webpack_require__(345);

	var _FontIcon = __webpack_require__(354);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _Ripple = __webpack_require__(355);

	var _Ripple2 = _interopRequireDefault(_Ripple);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var factory = function factory(ripple, FontIcon) {
	  var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button() {
	      var _Object$getPrototypeO;

	      var _temp, _this, _ret;

	      _classCallCheck(this, Button);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Button)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleMouseUp = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	      }, _this.handleMouseLeave = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Button, [{
	      key: 'render',
	      value: function render() {
	        var _classnames;

	        var _props = this.props;
	        var accent = _props.accent;
	        var children = _props.children;
	        var className = _props.className;
	        var flat = _props.flat;
	        var floating = _props.floating;
	        var href = _props.href;
	        var icon = _props.icon;
	        var inverse = _props.inverse;
	        var label = _props.label;
	        var mini = _props.mini;
	        var neutral = _props.neutral;
	        var primary = _props.primary;
	        var theme = _props.theme;
	        var raised = _props.raised;

	        var others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'href', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'theme', 'raised']);

	        var element = href ? 'a' : 'button';
	        var level = primary ? 'primary' : accent ? 'accent' : 'neutral';
	        var shape = flat ? 'flat' : raised ? 'raised' : floating ? 'floating' : 'flat';

	        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

	        var props = _extends({}, others, {
	          href: href,
	          ref: 'button',
	          className: classes,
	          disabled: this.props.disabled,
	          onMouseUp: this.handleMouseUp,
	          onMouseLeave: this.handleMouseLeave,
	          'data-react-toolbox': 'button'
	        });

	        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, label, children);
	      }
	    }]);

	    return Button;
	  }(_react.Component);

	  Button.propTypes = {
	    accent: _react.PropTypes.bool,
	    children: _react.PropTypes.node,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    flat: _react.PropTypes.bool,
	    floating: _react.PropTypes.bool,
	    href: _react.PropTypes.string,
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	    inverse: _react.PropTypes.bool,
	    label: _react.PropTypes.string,
	    mini: _react.PropTypes.bool,
	    neutral: _react.PropTypes.bool,
	    onMouseLeave: _react.PropTypes.func,
	    onMouseUp: _react.PropTypes.func,
	    primary: _react.PropTypes.bool,
	    raised: _react.PropTypes.bool,
	    theme: _react.PropTypes.shape({
	      accent: _react.PropTypes.string,
	      button: _react.PropTypes.string,
	      flat: _react.PropTypes.string,
	      floating: _react.PropTypes.string,
	      icon: _react.PropTypes.string,
	      inverse: _react.PropTypes.string,
	      mini: _react.PropTypes.string,
	      neutral: _react.PropTypes.string,
	      primary: _react.PropTypes.string,
	      raised: _react.PropTypes.string,
	      rippleWrapper: _react.PropTypes.string,
	      toggle: _react.PropTypes.string
	    }),
	    type: _react.PropTypes.string
	  };
	  Button.defaultProps = {
	    accent: false,
	    className: '',
	    flat: false,
	    floating: false,
	    mini: false,
	    neutral: true,
	    primary: false,
	    raised: false
	  };

	  return ripple(Button);
	};

	var Button = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
	exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(Button);
	exports.buttonFactory = factory;
	exports.Button = Button;

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(353)) === 'object' && __webpack_require__(353)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },

/***/ 353:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FontIcon = undefined;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(352);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	var FontIcon = function FontIcon(_ref) {
	  var children = _ref.children;
	  var className = _ref.className;
	  var value = _ref.value;

	  var other = _objectWithoutProperties(_ref, ['children', 'className', 'value']);

	  return _react2.default.createElement('span', _extends({
	    'data-react-toolbox': 'font-icon',
	    className: (0, _classnames2.default)({ 'material-icons': typeof value === 'string' || typeof children === 'string' }, className)
	  }, other), value, children);
	};

	FontIcon.propTypes = {
	  children: _react.PropTypes.any,
	  className: _react.PropTypes.string,
	  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
	};

	FontIcon.defaultProps = {
	  className: ''
	};

	exports.default = FontIcon;
	exports.FontIcon = FontIcon;

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames2 = __webpack_require__(352);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _reactAddonsUpdate = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-addons-update\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _reactCssThemr = __webpack_require__(346);

	var _identifiers = __webpack_require__(345);

	var _events = __webpack_require__(356);

	var _events2 = _interopRequireDefault(_events);

	var _prefixer = __webpack_require__(357);

	var _prefixer2 = _interopRequireDefault(_prefixer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	var defaults = {
	  centered: false,
	  className: '',
	  multiple: true,
	  spread: 2,
	  theme: {}
	};

	var rippleFactory = function rippleFactory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var _defaults$options = _extends({}, defaults, options);

	  var defaultCentered = _defaults$options.centered;
	  var defaultClassName = _defaults$options.className;
	  var defaultMultiple = _defaults$options.multiple;
	  var defaultSpread = _defaults$options.spread;
	  var defaultTheme = _defaults$options.theme;

	  var props = _objectWithoutProperties(_defaults$options, ['centered', 'className', 'multiple', 'spread', 'theme']);

	  return function (ComposedComponent) {
	    var RippledComponent = function (_Component) {
	      _inherits(RippledComponent, _Component);

	      function RippledComponent() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, RippledComponent);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RippledComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	          ripples: {}
	        }, _this.handleMouseDown = function (event) {
	          if (_this.props.onMouseDown) _this.props.onMouseDown(event);
	          if (!_this.props.disabled) {
	            var _events$getMousePosit = _events2.default.getMousePosition(event);

	            var x = _events$getMousePosit.x;
	            var y = _events$getMousePosit.y;

	            _this.animateRipple(x, y, false);
	          }
	        }, _this.handleTouchStart = function (event) {
	          if (_this.props.onTouchStart) _this.props.onTouchStart(event);
	          if (!_this.props.disabled) {
	            var _events$getTouchPosit = _events2.default.getTouchPosition(event);

	            var x = _events$getTouchPosit.x;
	            var y = _events$getTouchPosit.y;

	            _this.animateRipple(x, y, true);
	          }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      _createClass(RippledComponent, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	          // If a new ripple was just added, add a remove event listener to its animation
	          if (Object.keys(prevState.ripples).length < Object.keys(this.state.ripples).length) {
	            this.addRippleRemoveEventListener(this.getLastKey());
	          }
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          var _this2 = this;

	          // Remove document event listeners for ripple if they still exists
	          Object.keys(this.state.ripples).forEach(function (key) {
	            _this2.state.ripples[key].endRipple();
	          });
	        }

	        /**
	         * Add an event listener to the reference with given key so when the animation transition
	         * ends we can be sure that it finished and it can be safely removed from the state.
	         * This function is called whenever a new ripple is added to the component.
	         *
	         * @param {String} rippleKey Is the key of the ripple to add the event.
	         */

	      }, {
	        key: 'addRippleRemoveEventListener',
	        value: function addRippleRemoveEventListener(rippleKey) {
	          var self = this;
	          _events2.default.addEventListenerOnTransitionEnded(this.refs[rippleKey], function onOpacityEnd(e) {
	            if (e.propertyName === 'opacity') {
	              if (self.props.onRippleEnded) self.props.onRippleEnded(e);
	              _events2.default.removeEventListenerOnTransitionEnded(self.refs[rippleKey], onOpacityEnd);
	              self.setState({ ripples: (0, _reactAddonsUpdate2.default)(self.state.ripples, _defineProperty({}, rippleKey, { $apply: function $apply(ripplesState) {
	                    delete ripplesState[rippleKey];
	                    return ripplesState;
	                  } })) });
	            }
	          });
	        }

	        /**
	         * Start a ripple animation on an specific point with touch or mouse events. First
	         * decides if the animation should trigger. If the ripple is multiple or there is no
	         * ripple present, it creates a new key. If it's a simple ripple and already exists,
	         * it just restarts the current ripple. The animation happens in two state changes
	         * to allow triggering via css.
	         *
	         * @param {Number} x Coordinate X on the screen where animation should start
	         * @param {Number} y Coordinate Y on the screen where animation should start
	         * @param {Boolean} isTouch Use events from touch or mouse.
	         */

	      }, {
	        key: 'animateRipple',
	        value: function animateRipple(x, y, isTouch) {
	          var _this3 = this;

	          if (this.rippleShouldTrigger(isTouch)) {
	            (function () {
	              var _getDescriptor = _this3.getDescriptor(x, y);

	              var top = _getDescriptor.top;
	              var left = _getDescriptor.left;
	              var width = _getDescriptor.width;

	              var noRipplesActive = Object.keys(_this3.state.ripples).length === 0;
	              var key = _this3.props.rippleMultiple || noRipplesActive ? _this3.getNextKey() : _this3.getLastKey();
	              var endRipple = _this3.addRippleDeactivateEventListener(isTouch, key);
	              var initialState = { active: false, restarting: true, top: top, left: left, width: width, endRipple: endRipple };
	              var runningState = { active: true, restarting: false };
	              _this3.setState((0, _reactAddonsUpdate2.default)(_this3.state, { ripples: _defineProperty({}, key, { $set: initialState }) }), function () {
	                _this3.refs[key].offsetWidth; //eslint-disable-line no-unused-expressions
	                _this3.setState((0, _reactAddonsUpdate2.default)(_this3.state, { ripples: _defineProperty({}, key, { $merge: runningState }) }));
	              });
	            })();
	          }
	        }

	        /**
	         * Determine if a ripple should start depending if its a touch event. For mobile both
	         * touchStart and mouseDown are launched so in case is touch we should always trigger
	         * but if its not we should check if a touch was already triggered to decide.
	         *
	         * @param {Boolean} isTouch True in case a touch event triggered the ripple false otherwise.
	         * @return {Boolean} True in case the ripple should trigger or false if it shouldn't.
	         */

	      }, {
	        key: 'rippleShouldTrigger',
	        value: function rippleShouldTrigger(isTouch) {
	          var shouldStart = isTouch ? true : !this.touchCache;
	          this.touchCache = isTouch;
	          return shouldStart;
	        }

	        /**
	         * Find out a descriptor object for the ripple element being created depending on
	         * the position where the it was triggered and the component's dimensions.
	         *
	         * @param {Number} x Coordinate x in the viewport where ripple was triggered
	         * @param {Number} y Coordinate y in the viewport where ripple was triggered
	         * @return {Object} Descriptor element including position and size of the element
	         */

	      }, {
	        key: 'getDescriptor',
	        value: function getDescriptor(x, y) {
	          var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this).getBoundingClientRect();

	          var left = _ReactDOM$findDOMNode.left;
	          var top = _ReactDOM$findDOMNode.top;
	          var height = _ReactDOM$findDOMNode.height;
	          var width = _ReactDOM$findDOMNode.width;
	          var _props = this.props;
	          var centered = _props.rippleCentered;
	          var spread = _props.rippleSpread;

	          return {
	            left: centered ? 0 : x - left - width / 2,
	            top: centered ? 0 : y - top - height / 2,
	            width: width * spread
	          };
	        }

	        /**
	         * Increments and internal counter and returns the next value as a string. It
	         * is used to assign key references to new ripple elements.
	         *
	         * @return {String} Key to be assigned to a ripple.
	         */

	      }, {
	        key: 'getNextKey',
	        value: function getNextKey() {
	          this.currentCount = this.currentCount ? this.currentCount + 1 : 1;
	          return this.currentCount.toString();
	        }

	        /**
	         * Return the last generated key for a ripple element. When there is only one ripple
	         * and to get the reference when a ripple was just created.
	         *
	         * @return {String} The last generated ripple key.
	         */

	      }, {
	        key: 'getLastKey',
	        value: function getLastKey() {
	          return this.currentCount.toString();
	        }

	        /**
	         * Add an event listener to the document needed to deactivate a ripple and make it dissappear.
	         * Deactivation can happen with a touchend or mouseup depending on the trigger type. The
	         * ending function is created from a factory function and returned.
	         *
	         * @param {Boolean} isTouch True in case the trigger was a touch event false otherwise.
	         * @param {String} rippleKey It's a key to identify the ripple that should be deactivated.
	         * @return {Function} Callback function that deactivates the ripple and removes the event listener
	         */

	      }, {
	        key: 'addRippleDeactivateEventListener',
	        value: function addRippleDeactivateEventListener(isTouch, rippleKey) {
	          var eventType = isTouch ? 'touchend' : 'mouseup';
	          var endRipple = this.createRippleDeactivateCallback(eventType, rippleKey);
	          document.addEventListener(eventType, endRipple);
	          return endRipple;
	        }

	        /**
	         * Generates a function that can be called to deactivate a given ripple and remove its finishing
	         * event listener. If is generated because we need to store it to be called on unmount in case
	         * the ripple is still running.
	         *
	         * @param {String} eventType Is the event type that can be touchend or mouseup
	         * @param {String} rippleKey Is the key representing the ripple
	         * @return {Function} Callback function that deactivates the ripple and removes the listener
	         */

	      }, {
	        key: 'createRippleDeactivateCallback',
	        value: function createRippleDeactivateCallback(eventType, rippleKey) {
	          var self = this;
	          return function endRipple() {
	            document.removeEventListener(eventType, endRipple);
	            self.setState({ ripples: (0, _reactAddonsUpdate2.default)(self.state.ripples, _defineProperty({}, rippleKey, { $merge: { active: false } })) });
	          };
	        }
	      }, {
	        key: 'renderRipple',
	        value: function renderRipple(key, className, _ref) {
	          var _classnames;

	          var active = _ref.active;
	          var left = _ref.left;
	          var restarting = _ref.restarting;
	          var top = _ref.top;
	          var width = _ref.width;

	          var scale = restarting ? 0 : 1;
	          var transform = 'translate3d(' + (-width / 2 + left) + 'px, ' + (-width / 2 + top) + 'px, 0) scale(' + scale + ')';
	          var _className = (0, _classnames3.default)(this.props.theme.ripple, (_classnames = {}, _defineProperty(_classnames, this.props.theme.rippleActive, active), _defineProperty(_classnames, this.props.theme.rippleRestarting, restarting), _classnames), className);
	          return _react2.default.createElement('span', _extends({ key: key, 'data-react-toolbox': 'ripple', className: this.props.theme.rippleWrapper }, props), _react2.default.createElement('span', {
	            role: 'ripple',
	            ref: key,
	            className: _className,
	            style: (0, _prefixer2.default)({ transform: transform }, { width: width, height: width })
	          }));
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _this4 = this;

	          if (!this.props.ripple) {
	            return _react2.default.createElement(ComposedComponent, this.props);
	          } else {
	            var _ret3 = function () {
	              var ripples = _this4.state.ripples;
	              var _props2 = _this4.props;
	              var ripple = _props2.ripple;
	              var onRippleEnded = _props2.onRippleEnded;
	              var rippleCentered = _props2.rippleCentered;
	              var rippleMultiple = _props2.rippleMultiple;
	              var rippleSpread = _props2.rippleSpread;
	              var children = _props2.children;
	              var className = _props2.rippleClassName;

	              var other = _objectWithoutProperties(_props2, ['ripple', 'onRippleEnded', 'rippleCentered', 'rippleMultiple', 'rippleSpread', 'children', 'rippleClassName']);

	              return {
	                v: _react2.default.createElement(ComposedComponent, _extends({}, other, { onMouseDown: _this4.handleMouseDown, onTouchStart: _this4.handleTouchStart }), children ? children : null, Object.keys(ripples).map(function (key) {
	                  return _this4.renderRipple(key, className, ripples[key]);
	                }))
	              };
	            }();

	            if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
	          }
	        }
	      }]);

	      return RippledComponent;
	    }(_react.Component);

	    RippledComponent.propTypes = {
	      children: _react.PropTypes.any,
	      disabled: _react.PropTypes.bool,
	      onRippleEnded: _react.PropTypes.func,
	      ripple: _react.PropTypes.bool,
	      rippleCentered: _react.PropTypes.bool,
	      rippleClassName: _react.PropTypes.string,
	      rippleMultiple: _react.PropTypes.bool,
	      rippleSpread: _react.PropTypes.number,
	      theme: _react.PropTypes.shape({
	        ripple: _react.PropTypes.string,
	        rippleActive: _react.PropTypes.string,
	        rippleRestarting: _react.PropTypes.string,
	        rippleWrapper: _react.PropTypes.string
	      })
	    };
	    RippledComponent.defaultProps = {
	      disabled: false,
	      ripple: true,
	      rippleCentered: defaultCentered,
	      rippleClassName: defaultClassName,
	      rippleMultiple: defaultMultiple,
	      rippleSpread: defaultSpread
	    };

	    return (0, _reactCssThemr.themr)(_identifiers.RIPPLE, defaultTheme)(RippledComponent);
	  };
	};

	exports.default = rippleFactory;

/***/ },

/***/ 356:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  getMousePosition: function getMousePosition(event) {
	    return {
	      x: event.pageX - (window.scrollX || window.pageXOffset),
	      y: event.pageY - (window.scrollY || window.pageYOffset)
	    };
	  },
	  getTouchPosition: function getTouchPosition(event) {
	    return {
	      x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
	      y: event.touches[0].pageY - (window.scrollY || window.pageYOffset)
	    };
	  },
	  pauseEvent: function pauseEvent(event) {
	    event.stopPropagation();
	    event.preventDefault();
	  },
	  addEventsToDocument: function addEventsToDocument(eventMap) {
	    for (var key in eventMap) {
	      document.addEventListener(key, eventMap[key], false);
	    }
	  },
	  removeEventsFromDocument: function removeEventsFromDocument(eventMap) {
	    for (var key in eventMap) {
	      document.removeEventListener(key, eventMap[key], false);
	    }
	  },
	  targetIsDescendant: function targetIsDescendant(event, parent) {
	    var node = event.target;
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	    return false;
	  },
	  addEventListenerOnTransitionEnded: function addEventListenerOnTransitionEnded(element, fn) {
	    var eventName = transitionEventNamesFor(element);
	    if (!eventName) return false;
	    element.addEventListener(eventName, fn);
	    return true;
	  },
	  removeEventListenerOnTransitionEnded: function removeEventListenerOnTransitionEnded(element, fn) {
	    var eventName = transitionEventNamesFor(element);
	    if (!eventName) return false;
	    element.removeEventListener(eventName, fn);
	    return true;
	  }
	};

	var TRANSITIONS = {
	  'transition': 'transitionend',
	  'OTransition': 'oTransitionEnd',
	  'MozTransition': 'transitionend',
	  'WebkitTransition': 'webkitTransitionEnd'
	};

	function transitionEventNamesFor(element) {
	  for (var transition in TRANSITIONS) {
	    if (element.style[transition] !== undefined) {
	      return TRANSITIONS[transition];
	    }
	  }
	}

/***/ },

/***/ 357:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var WEBKIT = 'Webkit';
	var MICROSOFT = 'Ms';

	var properties = {
	  transform: [WEBKIT, MICROSOFT]
	};

	function capitalize(string) {
	  return string.charAt(0).toUpperCase() + string.substr(1);
	}

	function getPrefixes(property, value) {
	  return properties[property].reduce(function (acc, item) {
	    acc['' + item + capitalize(property)] = value;
	    return acc;
	  }, {});
	}

	function addPrefixesTo(style, property, value) {
	  var vendor = getPrefixes(property, value);
	  for (var prefix in vendor) {
	    style[prefix] = vendor[prefix];
	  }

	  return style;
	}

	function prefixer(style) {
	  var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var _style = defaultValue;
	  for (var property in style) {
	    _style[property] = style[property];
	    if (properties[property]) {
	      addPrefixesTo(_style, property, style[property]);
	    }
	  }

	  return _style;
	}

	exports.default = prefixer;

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IconButton = exports.iconButtonFactory = undefined;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(352);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _reactCssThemr = __webpack_require__(346);

	var _identifiers = __webpack_require__(345);

	var _FontIcon = __webpack_require__(354);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _Ripple = __webpack_require__(355);

	var _Ripple2 = _interopRequireDefault(_Ripple);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var factory = function factory(ripple, FontIcon) {
	  var IconButton = function (_Component) {
	    _inherits(IconButton, _Component);

	    function IconButton() {
	      var _Object$getPrototypeO;

	      var _temp, _this, _ret;

	      _classCallCheck(this, IconButton);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(IconButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleMouseUp = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	      }, _this.handleMouseLeave = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(IconButton, [{
	      key: 'render',
	      value: function render() {
	        var _classnames;

	        var _props = this.props;
	        var accent = _props.accent;
	        var children = _props.children;
	        var className = _props.className;
	        var href = _props.href;
	        var icon = _props.icon;
	        var inverse = _props.inverse;
	        var neutral = _props.neutral;
	        var primary = _props.primary;
	        var theme = _props.theme;

	        var others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'href', 'icon', 'inverse', 'neutral', 'primary', 'theme']);

	        var element = href ? 'a' : 'button';
	        var level = primary ? 'primary' : accent ? 'accent' : 'neutral';
	        var classes = (0, _classnames3.default)([theme.toggle], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

	        var props = _extends({}, others, {
	          href: href,
	          ref: 'button',
	          className: classes,
	          disabled: this.props.disabled,
	          onMouseUp: this.handleMouseUp,
	          onMouseLeave: this.handleMouseLeave,
	          'data-react-toolbox': 'button'
	        });

	        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, children);
	      }
	    }]);

	    return IconButton;
	  }(_react.Component);

	  IconButton.propTypes = {
	    accent: _react.PropTypes.bool,
	    children: _react.PropTypes.node,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    href: _react.PropTypes.string,
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	    inverse: _react.PropTypes.bool,
	    neutral: _react.PropTypes.bool,
	    onMouseLeave: _react.PropTypes.func,
	    onMouseUp: _react.PropTypes.func,
	    primary: _react.PropTypes.bool,
	    theme: _react.PropTypes.object,
	    type: _react.PropTypes.string
	  };
	  IconButton.defaultProps = {
	    accent: false,
	    className: '',
	    neutral: true,
	    primary: false
	  };

	  return ripple(IconButton);
	};

	var IconButton = factory((0, _Ripple2.default)({ centered: true }), _FontIcon2.default);
	exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(IconButton);
	exports.iconButtonFactory = factory;
	exports.IconButton = IconButton;

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _Ripple = __webpack_require__(355);

	var _Ripple2 = _interopRequireDefault(_Ripple);

	var _theme = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./theme.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _theme2 = _interopRequireDefault(_theme);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (options) {
	  return (0, _Ripple2.default)(_extends({}, options, { theme: _theme2.default }));
	};

/***/ }

})