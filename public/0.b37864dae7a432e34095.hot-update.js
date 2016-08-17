webpackHotUpdate(0,{

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

	var _reactAddonsUpdate = __webpack_require__(362);

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

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(363);

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(9),
	    _assign = __webpack_require__(6);

	var keyOf = __webpack_require__(27);
	var invariant = __webpack_require__(10);
	var hasOwnProperty = {}.hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
	    return _assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });

	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
	}

	/**
	 * Returns a updated shallow copy of an object without mutating the original.
	 * See https://facebook.github.io/react/docs/update.html for details.
	 */
	function update(value, spec) {
	  !((typeof spec === 'undefined' ? 'undefined' : _typeof(spec)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && (typeof mergeObj === 'undefined' ? 'undefined' : _typeof(mergeObj)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
	    !(nextValue && (typeof nextValue === 'undefined' ? 'undefined' : _typeof(nextValue)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
	    _assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }

})