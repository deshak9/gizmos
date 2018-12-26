webpackJsonp([0],[
/* 0 */
/*!***********************!*\
  !*** ./app/index.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _server = __webpack_require__(/*! react-dom/server */ 178);
	
	var _server2 = _interopRequireDefault(_server);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _LoadingSpinner = __webpack_require__(/*! ./shared/LoadingSpinner.jsx */ 207);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 208);
	
	var _showAllGadgets = __webpack_require__(/*! ./gadgets/view/show.all.gadgets.jsx */ 263);
	
	var _showAllGadgets2 = _interopRequireDefault(_showAllGadgets);
	
	var _gadgetsModule = __webpack_require__(/*! ./gadgets/gadgets.module.jsx */ 322);
	
	var _gadgetsModule2 = _interopRequireDefault(_gadgetsModule);
	
	var _resetPassword = __webpack_require__(/*! ./shared/view/reset/reset.password.jsx */ 333);
	
	var _resetPassword2 = _interopRequireDefault(_resetPassword);
	
	var _termsAndConditions = __webpack_require__(/*! ./shared/terms/terms.and.conditions.jsx */ 336);
	
	var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);
	
	var _homePageModule = __webpack_require__(/*! ./home/home.page.module.jsx */ 339);
	
	var _homePageModule2 = _interopRequireDefault(_homePageModule);
	
	var _coolGadgetsModule = __webpack_require__(/*! ./home/cool-gadgets/cool.gadgets.module.jsx */ 359);
	
	var _coolGadgetsModule2 = _interopRequireDefault(_coolGadgetsModule);
	
	var _appModule = __webpack_require__(/*! ./app.module.jsx */ 362);
	
	var _appModule2 = _interopRequireDefault(_appModule);
	
	var _searchBarLogin = __webpack_require__(/*! ./shared/header/search.bar.login.jsx */ 366);
	
	var _searchBarLogin2 = _interopRequireDefault(_searchBarLogin);
	
	var _sideLatestReviewComponent = __webpack_require__(/*! ./home/side-story/side.latest.review.component.jsx */ 354);
	
	var _sideLatestReviewComponent2 = _interopRequireDefault(_sideLatestReviewComponent);
	
	var _socialButtonsColor = __webpack_require__(/*! ./shared/social/color/social.buttons.color.jsx */ 369);
	
	var _socialButtonsColor2 = _interopRequireDefault(_socialButtonsColor);
	
	var _coolGadgetsCategoryModule = __webpack_require__(/*! ./home/cool-gadgets/category/cool.gadgets.category.module.jsx */ 372);
	
	var _coolGadgetsCategoryModule2 = _interopRequireDefault(_coolGadgetsCategoryModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            user: {},
	            isPageLoading: true
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            _axios2.default.get('/api/user').then(function (res) {
	                var user = res.data;
	                RW_BCC_KEY = user['RW-BCC-KEY'];
	                UID = user['UID'];
	                isUserLoggedIn = user['RW-IS-LOGGED-IN'];
	                userName = user['RW-USERNAME'];
	                _this2.setState({ isPageLoading: false, user: user });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            if (!this.state.isPageLoading) {
	                return _react2.default.createElement(
	                    _reactRouter.Router,
	                    { history: _reactRouter.browserHistory },
	                    _react2.default.createElement(
	                        _reactRouter.Route,
	                        { path: '/', component: _appModule2.default },
	                        _react2.default.createElement(_reactRouter.IndexRoute, { component: _homePageModule2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'gadgets/:name', component: _gadgetsModule2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'stories/:name', component: _gadgetsModule2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'reviews/:name', component: _gadgetsModule2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'cool-gadgets', component: _coolGadgetsModule2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'cool-gadgets/categories/:categoryId', component: _coolGadgetsCategoryModule2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'privacypolicy', component: _termsAndConditions2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'user/reset', component: _resetPassword2.default }),
	                        _react2.default.createElement(_reactRouter.Redirect, { from: '*', to: '/' })
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(_LoadingSpinner2.default, { myHeight: 40, myWidth: 40, isBlack: true })
	                );
	            }
	        }
	    }]);
	
	    return App;
	}(_react2.default.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/*!*******************************!*\
  !*** ./~/react-dom/server.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! ./lib/ReactDOMServer */ 179);


/***/ },
/* 179 */
/*!*******************************************!*\
  !*** ./~/react-dom/lib/ReactDOMServer.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactDefaultInjection = __webpack_require__(/*! ./ReactDefaultInjection */ 38);
	var ReactServerRendering = __webpack_require__(/*! ./ReactServerRendering */ 180);
	var ReactVersion = __webpack_require__(/*! ./ReactVersion */ 171);
	
	ReactDefaultInjection.inject();
	
	var ReactDOMServer = {
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  version: ReactVersion
	};
	
	module.exports = ReactDOMServer;

/***/ },
/* 180 */
/*!*************************************************!*\
  !*** ./~/react-dom/lib/ReactServerRendering.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';
	
	var _prodInvariant = __webpack_require__(/*! ./reactProdInvariant */ 35);
	
	var React = __webpack_require__(/*! react/lib/React */ 2);
	var ReactDOMContainerInfo = __webpack_require__(/*! ./ReactDOMContainerInfo */ 167);
	var ReactDefaultBatchingStrategy = __webpack_require__(/*! ./ReactDefaultBatchingStrategy */ 140);
	var ReactInstrumentation = __webpack_require__(/*! ./ReactInstrumentation */ 62);
	var ReactMarkupChecksum = __webpack_require__(/*! ./ReactMarkupChecksum */ 169);
	var ReactReconciler = __webpack_require__(/*! ./ReactReconciler */ 59);
	var ReactServerBatchingStrategy = __webpack_require__(/*! ./ReactServerBatchingStrategy */ 181);
	var ReactServerRenderingTransaction = __webpack_require__(/*! ./ReactServerRenderingTransaction */ 133);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 56);
	
	var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 20);
	var instantiateReactComponent = __webpack_require__(/*! ./instantiateReactComponent */ 118);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 8);
	
	var pendingTransactions = 0;
	
	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToStringImpl(element, makeStaticMarkup) {
	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);
	
	    transaction = ReactServerRenderingTransaction.getPooled(makeStaticMarkup);
	
	    pendingTransactions++;
	
	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, true);
	      var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactDOMContainerInfo(), emptyObject, 0 /* parentDebugID */
	      );
	      if (process.env.NODE_ENV !== 'production') {
	        ReactInstrumentation.debugTool.onUnmountComponent(componentInstance._debugID);
	      }
	      if (!makeStaticMarkup) {
	        markup = ReactMarkupChecksum.addChecksumToMarkup(markup);
	      }
	      return markup;
	    }, null);
	  } finally {
	    pendingTransactions--;
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    if (!pendingTransactions) {
	      ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	    }
	  }
	}
	
	/**
	 * Render a ReactElement to its initial HTML. This should only be used on the
	 * server.
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring
	 */
	function renderToString(element) {
	  !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : _prodInvariant('46') : void 0;
	  return renderToStringImpl(element, false);
	}
	
	/**
	 * Similar to renderToString, except this doesn't create extra DOM attributes
	 * such as data-react-id that React uses internally.
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup
	 */
	function renderToStaticMarkup(element) {
	  !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : _prodInvariant('47') : void 0;
	  return renderToStringImpl(element, true);
	}
	
	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 3)))

/***/ },
/* 181 */
/*!********************************************************!*\
  !*** ./~/react-dom/lib/ReactServerBatchingStrategy.js ***!
  \********************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactServerBatchingStrategy = {
	  isBatchingUpdates: false,
	  batchedUpdates: function (callback) {
	    // Don't do anything here. During the server rendering we don't want to
	    // schedule any updates. We will simply ignore them.
	  }
	};
	
	module.exports = ReactServerBatchingStrategy;

/***/ },
/* 182 */
/*!**************************!*\
  !*** ./~/axios/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/axios */ 183);

/***/ },
/* 183 */
/*!******************************!*\
  !*** ./~/axios/lib/axios.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./utils */ 184);
	var bind = __webpack_require__(/*! ./helpers/bind */ 185);
	var Axios = __webpack_require__(/*! ./core/Axios */ 186);
	var defaults = __webpack_require__(/*! ./defaults */ 187);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 204);
	axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 205);
	axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 201);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(/*! ./helpers/spread */ 206);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ },
/* 184 */
/*!******************************!*\
  !*** ./~/axios/lib/utils.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(/*! ./helpers/bind */ 185);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 185 */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/bind.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 186 */
/*!***********************************!*\
  !*** ./~/axios/lib/core/Axios.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(/*! ./../defaults */ 187);
	var utils = __webpack_require__(/*! ./../utils */ 184);
	var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 198);
	var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 199);
	var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 202);
	var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 203);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ },
/* 187 */
/*!*********************************!*\
  !*** ./~/axios/lib/defaults.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(/*! ./utils */ 184);
	var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 188);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(/*! ./adapters/xhr */ 189);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(/*! ./adapters/http */ 189);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 3)))

/***/ },
/* 188 */
/*!****************************************************!*\
  !*** ./~/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ../utils */ 184);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 189 */
/*!*************************************!*\
  !*** ./~/axios/lib/adapters/xhr.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 184);
	var settle = __webpack_require__(/*! ./../core/settle */ 190);
	var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 193);
	var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 194);
	var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 195);
	var createError = __webpack_require__(/*! ../core/createError */ 191);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ 196);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 197);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../process/browser.js */ 3)))

/***/ },
/* 190 */
/*!************************************!*\
  !*** ./~/axios/lib/core/settle.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(/*! ./createError */ 191);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ },
/* 191 */
/*!*****************************************!*\
  !*** ./~/axios/lib/core/createError.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(/*! ./enhanceError */ 192);
	
	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ },
/* 192 */
/*!******************************************!*\
  !*** ./~/axios/lib/core/enhanceError.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ },
/* 193 */
/*!*****************************************!*\
  !*** ./~/axios/lib/helpers/buildURL.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 184);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ },
/* 194 */
/*!*********************************************!*\
  !*** ./~/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 184);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ },
/* 195 */
/*!************************************************!*\
  !*** ./~/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 184);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 196 */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/btoa.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ },
/* 197 */
/*!****************************************!*\
  !*** ./~/axios/lib/helpers/cookies.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 184);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 198 */
/*!************************************************!*\
  !*** ./~/axios/lib/core/InterceptorManager.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 184);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ },
/* 199 */
/*!*********************************************!*\
  !*** ./~/axios/lib/core/dispatchRequest.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 184);
	var transformData = __webpack_require__(/*! ./transformData */ 200);
	var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 201);
	var defaults = __webpack_require__(/*! ../defaults */ 187);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ },
/* 200 */
/*!*******************************************!*\
  !*** ./~/axios/lib/core/transformData.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 184);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ },
/* 201 */
/*!****************************************!*\
  !*** ./~/axios/lib/cancel/isCancel.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ },
/* 202 */
/*!**********************************************!*\
  !*** ./~/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 203 */
/*!********************************************!*\
  !*** ./~/axios/lib/helpers/combineURLs.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 204 */
/*!**************************************!*\
  !*** ./~/axios/lib/cancel/Cancel.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ },
/* 205 */
/*!*******************************************!*\
  !*** ./~/axios/lib/cancel/CancelToken.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(/*! ./Cancel */ 204);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ },
/* 206 */
/*!***************************************!*\
  !*** ./~/axios/lib/helpers/spread.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 207 */
/*!***************************************!*\
  !*** ./app/shared/LoadingSpinner.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoadingSpinner = function (_React$Component) {
	    _inherits(LoadingSpinner, _React$Component);
	
	    function LoadingSpinner(props) {
	        _classCallCheck(this, LoadingSpinner);
	
	        var _this = _possibleConstructorReturn(this, (LoadingSpinner.__proto__ || Object.getPrototypeOf(LoadingSpinner)).call(this, props));
	
	        _this.state = {
	            blackSpinnerUrl: '/images/spin-black.gif',
	            whiteSpinnerUrl: '/images/spin-white.gif'
	        };
	
	        return _this;
	    }
	
	    _createClass(LoadingSpinner, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var myFinalHeight = '' + this.props.myHeight + '';
	            var myFinalWidth = '' + this.props.myWidth + '';
	            return _react2.default.createElement(
	                'div',
	                { className: 'loading-spinner' },
	                this.props.isBlack ? _react2.default.createElement('img', { width: myFinalWidth, height: myFinalHeight, src: this.state.blackSpinnerUrl, alt: 'Loading..' }) : _react2.default.createElement('img', { width: myFinalWidth, height: myFinalHeight, src: this.state.whiteSpinnerUrl, alt: 'Loading..' })
	            );
	        }
	    }]);
	
	    return LoadingSpinner;
	}(_react2.default.Component);
	
	exports.default = LoadingSpinner;

/***/ },
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/*!***********************************************!*\
  !*** ./app/gadgets/view/show.all.gadgets.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _GadgetCard = __webpack_require__(/*! ../GadgetCard.jsx */ 264);
	
	var _GadgetCard2 = _interopRequireDefault(_GadgetCard);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _AllGadgets = __webpack_require__(/*! ../AllGadgets.jsx */ 315);
	
	var _AllGadgets2 = _interopRequireDefault(_AllGadgets);
	
	var _gadgetsService = __webpack_require__(/*! ../../services/gadgets.service.jsx */ 313);
	
	var _gadgetsService2 = _interopRequireDefault(_gadgetsService);
	
	var _LoadingSpinner = __webpack_require__(/*! ../../shared/LoadingSpinner.jsx */ 207);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _header = __webpack_require__(/*! ../../shared/header/header2.jsx */ 316);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var gadgets = [];
	
	var ShoAllGadgets = function (_React$Component) {
	    _inherits(ShoAllGadgets, _React$Component);
	
	    function ShoAllGadgets(props) {
	        _classCallCheck(this, ShoAllGadgets);
	
	        var _this = _possibleConstructorReturn(this, (ShoAllGadgets.__proto__ || Object.getPrototypeOf(ShoAllGadgets)).call(this, props));
	
	        _this.state = {
	            feeds: [],
	            isPageLoading: true
	        };
	        return _this;
	    }
	
	    _createClass(ShoAllGadgets, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            _gadgetsService2.default.getAllGadgets().then(function (resp) {
	                _this2.setState({ feeds: resp.data, isPageLoading: false });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.state.isPageLoading ? _react2.default.createElement(_LoadingSpinner2.default, { myHeight: 40, myWidth: 40, isBlack: true }) : _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_header2.default, null),
	                _react2.default.createElement(_AllGadgets2.default, { feeds: this.state.feeds })
	            );
	        }
	    }]);
	
	    return ShoAllGadgets;
	}(_react2.default.Component);
	
	exports.default = ShoAllGadgets;

/***/ },
/* 264 */
/*!************************************!*\
  !*** ./app/gadgets/GadgetCard.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _popupModal = __webpack_require__(/*! ../shared/modals/popup.modal.jsx */ 265);
	
	var _popupModal2 = _interopRequireDefault(_popupModal);
	
	var _gadgetsService = __webpack_require__(/*! ../services/gadgets.service.jsx */ 313);
	
	var _gadgetsService2 = _interopRequireDefault(_gadgetsService);
	
	var _socialShareService = __webpack_require__(/*! ../services/social.share.service.jsx */ 314);
	
	var _socialShareService2 = _interopRequireDefault(_socialShareService);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 208);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GadgetCard = function (_React$Component) {
	    _inherits(GadgetCard, _React$Component);
	
	    function GadgetCard(props) {
	        _classCallCheck(this, GadgetCard);
	
	        var _this = _possibleConstructorReturn(this, (GadgetCard.__proto__ || Object.getPrototypeOf(GadgetCard)).call(this, props));
	
	        _this.state = {
	            isSocialOption: false,
	            isLiked: false,
	            likes: 0,
	            isLoginModalOn: false,
	            productUrl: ''
	
	        };
	        return _this;
	    }
	
	    _createClass(GadgetCard, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            /// Replace all space with dash(-)
	            var name = this.props.name.replace(/ /g, "-");
	            var absoluteUrl = '/gadgets/' + name;
	            this.setState({
	                isLiked: this.props.isLiked, likes: parseInt(this.props.likes),
	                productUrl: absoluteUrl
	            });
	        }
	    }, {
	        key: 'shareOnFacebook',
	        value: function shareOnFacebook() {
	            _socialShareService2.default.shareOnFacebook(this.props.name, this.props.description, this.state.productUrl, this.props.imageUrl);
	        }
	    }, {
	        key: 'shareOnGooglePlus',
	        value: function shareOnGooglePlus() {
	            _socialShareService2.default.shareOnGooglePlus(this.state.productUrl, this.props.name);
	        }
	    }, {
	        key: 'shareOnTwitter',
	        value: function shareOnTwitter() {
	            _socialShareService2.default.shareOnTwitter(this.state.productUrl, this.props.name);
	        }
	    }, {
	        key: 'shareOnPintrest',
	        value: function shareOnPintrest() {
	            _socialShareService2.default.shareOnPintrest(this.state.productUrl, this.props.name);
	        }
	    }, {
	        key: 'openLoginModal',
	        value: function openLoginModal() {
	            this.setState({ isLoginModalOn: true });
	        }
	    }, {
	        key: 'likeThisProduct',
	        value: function likeThisProduct() {
	            var data = {
	                productId: this.props.productId
	            };
	
	            _gadgetsService2.default.saveLikeOnProduct(data);
	
	            this.setState({ isLiked: true, likes: this.state.likes + 1 });
	        }
	    }, {
	        key: 'shareOptions',
	        value: function shareOptions(e) {
	            this.setState({ isSocialOption: !this.state.isSocialOption });
	        }
	    }, {
	        key: 'hideModal',
	        value: function hideModal() {
	            this.setState({ isLoginModalOn: false });
	        }
	    }, {
	        key: 'navigateToProductPage',
	        value: function navigateToProductPage() {
	            window.location.href = this.state.productUrl;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var shareButtonsVisible = !this.state.isSocialOption ? { display: 'none' } : { display: 'block' };
	
	            var likeButton;
	            if (isUserLoggedIn) {
	                if (this.state.isLiked) {
	                    likeButton = _react2.default.createElement(
	                        'a',
	                        { className: 'mobile-button-padding' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            this.state.likes
	                        ),
	                        _react2.default.createElement('img', { src: '/images/heart-red.png', alt: 'love it like it' })
	                    );
	                } else {
	                    likeButton = _react2.default.createElement(
	                        'a',
	                        { onClick: this.likeThisProduct.bind(this), className: 'mobile-button-padding' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            this.state.likes
	                        ),
	                        _react2.default.createElement('img', { src: '/images/heart-grey.png', alt: 'love it like it' })
	                    );
	                }
	            } else {
	                likeButton = _react2.default.createElement(
	                    'a',
	                    { onClick: this.openLoginModal.bind(this), className: 'mobile-button-padding' },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        this.state.likes
	                    ),
	                    _react2.default.createElement('img', { src: '/images/heart-grey.png', alt: 'love it like it' })
	                );
	            }
	
	            var productImageStyle = {
	                background: 'url(' + this.props.imageUrl + ') no-repeat 50% 50%', backgroundSize: 'cover'
	            };
	
	            var loginModal = this.state.isLoginModalOn ? _react2.default.createElement(_popupModal2.default, { hideModal: this.hideModal.bind(this), modalType: 'login-signup' }) : "";
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'gadget-card gadget-card-size' },
	                _react2.default.createElement(
	                    'div',
	                    { style: productImageStyle, className: 'gadget-image-container',
	                        onClick: this.navigateToProductPage.bind(this) },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'image-hover-container' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'video-buttons' },
	                            _react2.default.createElement('img', { src: '/images/youtube-icon.png', alt: 'youtube icon' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'hovered-product-desc' },
	                            this.props.name
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'gadget-card-bottom gadget-card-bottom-size' },
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        _react2.default.createElement(
	                            'li',
	                            { className: 'gadget-card-desc normal-font-size' },
	                            _react2.default.createElement(
	                                'a',
	                                { className: 'text-truncate gadget-name', href: this.state.productUrl },
	                                this.props.name
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { className: 'text-truncate gadget-description', href: this.state.productUrl },
	                                this.props.description
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { onClick: this.shareOptions.bind(this), className: 'share-button share-button-size', title: 'tell your friends' },
	                            _react2.default.createElement('img', { src: '/images/share.png', alt: 'share with friends' }),
	                            _react2.default.createElement(
	                                'ul',
	                                { style: shareButtonsVisible, className: 'social-product-share social-product-share-size' },
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    _react2.default.createElement(
	                                        'a',
	                                        { onClick: this.shareOnFacebook.bind(this) },
	                                        'Facebook'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    _react2.default.createElement(
	                                        'a',
	                                        { onClick: this.shareOnGooglePlus.bind(this),
	                                            id: 'sharePost' },
	                                        'Google +'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    _react2.default.createElement(
	                                        'a',
	                                        { onClick: this.shareOnTwitter.bind(this)
	                                        },
	                                        'Twitter'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    _react2.default.createElement(
	                                        'a',
	                                        { onClick: this.shareOnPintrest.bind(this) },
	                                        'Pinterest'
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { className: 'like-button like-button-size', title: 'do you like it' },
	                            likeButton
	                        )
	                    ),
	                    _react2.default.createElement('div', { className: 'clear-both-side' })
	                ),
	                loginModal
	            );
	        }
	    }]);
	
	    return GadgetCard;
	}(_react2.default.Component);
	
	exports.default = GadgetCard;

/***/ },
/* 265 */
/*!*******************************************!*\
  !*** ./app/shared/modals/popup.modal.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _reactModal = __webpack_require__(/*! react-modal */ 266);
	
	var _reactModal2 = _interopRequireDefault(_reactModal);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _popupModal = __webpack_require__(/*! ./popup.modal.css */ 276);
	
	var _popupModal2 = _interopRequireDefault(_popupModal);
	
	var _reactDimensions = __webpack_require__(/*! react-dimensions */ 278);
	
	var _reactDimensions2 = _interopRequireDefault(_reactDimensions);
	
	var _loginSignupModal = __webpack_require__(/*! ./login/login.signup.modal.jsx */ 280);
	
	var _loginSignupModal2 = _interopRequireDefault(_loginSignupModal);
	
	var _newsletterModal = __webpack_require__(/*! ./newsletter/newsletter.modal.jsx */ 308);
	
	var _newsletterModal2 = _interopRequireDefault(_newsletterModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PopupModal = function (_React$Component) {
	    _inherits(PopupModal, _React$Component);
	
	    function PopupModal(props) {
	        _classCallCheck(this, PopupModal);
	
	        var _this = _possibleConstructorReturn(this, (PopupModal.__proto__ || Object.getPrototypeOf(PopupModal)).call(this, props));
	
	        _this.state = {
	            modalIsOpen: true
	        };
	        _this.openModal = _this.openModal.bind(_this);
	        _this.closeModal = _this.closeModal.bind(_this);
	        modalTypes['login-signup'] = _react2.default.createElement(_loginSignupModal2.default, null);
	        modalTypes['newsletter'] = _react2.default.createElement(_newsletterModal2.default, null);
	        return _this;
	    }
	
	    _createClass(PopupModal, [{
	        key: 'openModal',
	        value: function openModal() {
	            this.setState({ modalIsOpen: true });
	        }
	    }, {
	        key: 'afterOpenModal',
	        value: function afterOpenModal() {}
	    }, {
	        key: 'closeModal',
	        value: function closeModal() {
	            this.setState({ modalIsOpen: false });
	            this.props.hideModal();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var result = modalTypes[this.props.modalType];
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _reactModal2.default,
	                    { isOpen: this.state.modalIsOpen,
	                        overlayClassName: _popupModal2.default.modalOverlay,
	                        className: _popupModal2.default.modalContent + " " + _popupModal2.default.modalContentSize,
	                        contentLabel: 'Login Modal',
	                        onRequestClose: this.closeModal },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _popupModal2.default.modalActualContainer + " " + _popupModal2.default.modalActualContainerSize },
	                        _react2.default.createElement(
	                            'div',
	                            { className: _popupModal2.default.closeModalButton },
	                            _react2.default.createElement(
	                                'a',
	                                { onClick: this.closeModal },
	                                'X'
	                            )
	                        ),
	                        result
	                    )
	                )
	            );
	        }
	    }]);
	
	    return PopupModal;
	}(_react2.default.Component);
	
	var modalTypes = {};
	
	exports.default = PopupModal;

/***/ },
/* 266 */
/*!************************************!*\
  !*** ./~/react-modal/lib/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./components/Modal */ 267);
	


/***/ },
/* 267 */
/*!***********************************************!*\
  !*** ./~/react-modal/lib/components/Modal.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 32);
	var ExecutionEnvironment = __webpack_require__(/*! exenv */ 268);
	var ModalPortal = React.createFactory(__webpack_require__(/*! ./ModalPortal */ 269));
	var ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ 274);
	var elementClass = __webpack_require__(/*! element-class */ 275);
	var renderSubtreeIntoContainer = __webpack_require__(/*! react-dom */ 32).unstable_renderSubtreeIntoContainer;
	var Assign = __webpack_require__(/*! lodash.assign */ 273);
	
	var SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {};
	var AppElement = ExecutionEnvironment.canUseDOM ? document.body : {appendChild: function() {}};
	
	function getParentElement(parentSelector) {
	  return parentSelector();
	}
	
	var Modal = React.createClass({
	
	  displayName: 'Modal',
	  statics: {
	    setAppElement: function(element) {
	        AppElement = ariaAppHider.setElement(element);
	    },
	    injectCSS: function() {
	      "production" !== process.env.NODE_ENV
	        && console.warn('React-Modal: injectCSS has been deprecated ' +
	                        'and no longer has any effect. It will be removed in a later version');
	    }
	  },
	
	  propTypes: {
	    isOpen: React.PropTypes.bool.isRequired,
	    style: React.PropTypes.shape({
	      content: React.PropTypes.object,
	      overlay: React.PropTypes.object
	    }),
	    portalClassName: React.PropTypes.string,
	    appElement: React.PropTypes.instanceOf(SafeHTMLElement),
	    onAfterOpen: React.PropTypes.func,
	    onRequestClose: React.PropTypes.func,
	    closeTimeoutMS: React.PropTypes.number,
	    ariaHideApp: React.PropTypes.bool,
	    shouldCloseOnOverlayClick: React.PropTypes.bool,
	    parentSelector: React.PropTypes.func,
	    role: React.PropTypes.string,
	    contentLabel: React.PropTypes.string.isRequired
	  },
	
	  getDefaultProps: function () {
	    return {
	      isOpen: false,
	      portalClassName: 'ReactModalPortal',
	      ariaHideApp: true,
	      closeTimeoutMS: 0,
	      shouldCloseOnOverlayClick: true,
	      parentSelector: function () { return document.body; }
	    };
	  },
	
	  componentDidMount: function() {
	    this.node = document.createElement('div');
	    this.node.className = this.props.portalClassName;
	
	    var parent = getParentElement(this.props.parentSelector);
	    parent.appendChild(this.node);
	    this.renderPortal(this.props);
	  },
	
	  componentWillReceiveProps: function(newProps) {
	    var currentParent = getParentElement(this.props.parentSelector);
	    var newParent = getParentElement(newProps.parentSelector);
	
	    if(newParent !== currentParent) {
	      currentParent.removeChild(this.node);
	      newParent.appendChild(this.node);
	    }
	
	    this.renderPortal(newProps);
	  },
	
	  componentWillUnmount: function() {
	    if (this.props.ariaHideApp) {
	      ariaAppHider.show(this.props.appElement);
	    }
	
	    ReactDOM.unmountComponentAtNode(this.node);
	    var parent = getParentElement(this.props.parentSelector);
	    parent.removeChild(this.node);
	    elementClass(document.body).remove('ReactModal__Body--open');
	  },
	
	  renderPortal: function(props) {
	    if (props.isOpen) {
	      elementClass(document.body).add('ReactModal__Body--open');
	    } else {
	      elementClass(document.body).remove('ReactModal__Body--open');
	    }
	
	    if (props.ariaHideApp) {
	      ariaAppHider.toggle(props.isOpen, props.appElement);
	    }
	
	    this.portal = renderSubtreeIntoContainer(this, ModalPortal(Assign({}, props, {defaultStyles: Modal.defaultStyles})), this.node);
	  },
	
	  render: function () {
	    return React.DOM.noscript();
	  }
	});
	
	Modal.defaultStyles = {
	  overlay: {
	    position        : 'fixed',
	    top             : 0,
	    left            : 0,
	    right           : 0,
	    bottom          : 0,
	    backgroundColor : 'rgba(255, 255, 255, 0.75)'
	  },
	  content: {
	    position                : 'absolute',
	    top                     : '40px',
	    left                    : '40px',
	    right                   : '40px',
	    bottom                  : '40px',
	    border                  : '1px solid #ccc',
	    background              : '#fff',
	    overflow                : 'auto',
	    WebkitOverflowScrolling : 'touch',
	    borderRadius            : '4px',
	    outline                 : 'none',
	    padding                 : '20px'
	  }
	}
	
	module.exports = Modal
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../process/browser.js */ 3)))

/***/ },
/* 268 */
/*!**************************!*\
  !*** ./~/exenv/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ },
/* 269 */
/*!*****************************************************!*\
  !*** ./~/react-modal/lib/components/ModalPortal.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var div = React.DOM.div;
	var focusManager = __webpack_require__(/*! ../helpers/focusManager */ 270);
	var scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ 272);
	var Assign = __webpack_require__(/*! lodash.assign */ 273);
	
	// so that our CSS is statically analyzable
	var CLASS_NAMES = {
	  overlay: {
	    base: 'ReactModal__Overlay',
	    afterOpen: 'ReactModal__Overlay--after-open',
	    beforeClose: 'ReactModal__Overlay--before-close'
	  },
	  content: {
	    base: 'ReactModal__Content',
	    afterOpen: 'ReactModal__Content--after-open',
	    beforeClose: 'ReactModal__Content--before-close'
	  }
	};
	
	var ModalPortal = module.exports = React.createClass({
	
	  displayName: 'ModalPortal',
	  shouldClose: null,
	
	  getDefaultProps: function() {
	    return {
	      style: {
	        overlay: {},
	        content: {}
	      }
	    };
	  },
	
	  getInitialState: function() {
	    return {
	      afterOpen: false,
	      beforeClose: false
	    };
	  },
	
	  componentDidMount: function() {
	    // Focus needs to be set when mounting and already open
	    if (this.props.isOpen) {
	      this.setFocusAfterRender(true);
	      this.open();
	    }
	  },
	
	  componentWillUnmount: function() {
	    clearTimeout(this.closeTimer);
	  },
	
	  componentWillReceiveProps: function(newProps) {
	    // Focus only needs to be set once when the modal is being opened
	    if (!this.props.isOpen && newProps.isOpen) {
	      this.setFocusAfterRender(true);
	      this.open();
	    } else if (this.props.isOpen && !newProps.isOpen) {
	      this.close();
	    }
	  },
	
	  componentDidUpdate: function () {
	    if (this.focusAfterRender) {
	      this.focusContent();
	      this.setFocusAfterRender(false);
	    }
	  },
	
	  setFocusAfterRender: function (focus) {
	    this.focusAfterRender = focus;
	  },
	
	  open: function() {
	    if (this.state.afterOpen && this.state.beforeClose) {
	      clearTimeout(this.closeTimer);
	      this.setState({ beforeClose: false });
	    } else {
	      focusManager.setupScopedFocus(this.node);
	      focusManager.markForFocusLater();
	      this.setState({isOpen: true}, function() {
	        this.setState({afterOpen: true});
	
	        if (this.props.isOpen && this.props.onAfterOpen) {
	          this.props.onAfterOpen();
	        }
	      }.bind(this));
	    }
	  },
	
	  close: function() {
	    if (this.props.closeTimeoutMS > 0)
	      this.closeWithTimeout();
	    else
	      this.closeWithoutTimeout();
	  },
	
	  focusContent: function() {
	    // Don't steal focus from inner elements
	    if (!this.contentHasFocus()) {
	      this.refs.content.focus();
	    }
	  },
	
	  closeWithTimeout: function() {
	    this.setState({beforeClose: true}, function() {
	      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.props.closeTimeoutMS);
	    }.bind(this));
	  },
	
	  closeWithoutTimeout: function() {
	    this.setState({
	      beforeClose: false,
	      isOpen: false,
	      afterOpen: false,
	    }, this.afterClose);
	  },
	
	  afterClose: function() {
	    focusManager.returnFocus();
	    focusManager.teardownScopedFocus();
	  },
	
	  handleKeyDown: function(event) {
	    if (event.keyCode == 9 /*tab*/) scopeTab(this.refs.content, event);
	    if (event.keyCode == 27 /*esc*/) {
	      event.preventDefault();
	      this.requestClose(event);
	    }
	  },
	
	  handleOverlayMouseDown: function(event) {
	    if (this.shouldClose === null) {
	      this.shouldClose = true;
	    }
	  },
	
	  handleOverlayMouseUp: function(event) {
	    if (this.shouldClose && this.props.shouldCloseOnOverlayClick) {
	      if (this.ownerHandlesClose())
	        this.requestClose(event);
	      else
	        this.focusContent();
	    }
	    this.shouldClose = null;
	  },
	
	  handleContentMouseDown: function(event) {
	    this.shouldClose = false;
	  },
	
	  handleContentMouseUp: function(event) {
	    this.shouldClose = false;
	  },
	
	  requestClose: function(event) {
	    if (this.ownerHandlesClose())
	      this.props.onRequestClose(event);
	  },
	
	  ownerHandlesClose: function() {
	    return this.props.onRequestClose;
	  },
	
	  shouldBeClosed: function() {
	    return !this.props.isOpen && !this.state.beforeClose;
	  },
	
	  contentHasFocus: function() {
	    return document.activeElement === this.refs.content || this.refs.content.contains(document.activeElement);
	  },
	
	  buildClassName: function(which, additional) {
	    var className = CLASS_NAMES[which].base;
	    if (this.state.afterOpen)
	      className += ' '+CLASS_NAMES[which].afterOpen;
	    if (this.state.beforeClose)
	      className += ' '+CLASS_NAMES[which].beforeClose;
	    return additional ? className + ' ' + additional : className;
	  },
	
	  render: function() {
	    var contentStyles = (this.props.className) ? {} : this.props.defaultStyles.content;
	    var overlayStyles = (this.props.overlayClassName) ? {} : this.props.defaultStyles.overlay;
	
	    return this.shouldBeClosed() ? div() : (
	      div({
	        ref: "overlay",
	        className: this.buildClassName('overlay', this.props.overlayClassName),
	        style: Assign({}, overlayStyles, this.props.style.overlay || {}),
	        onMouseDown: this.handleOverlayMouseDown,
	        onMouseUp: this.handleOverlayMouseUp
	      },
	        div({
	          ref: "content",
	          style: Assign({}, contentStyles, this.props.style.content || {}),
	          className: this.buildClassName('content', this.props.className),
	          tabIndex: "-1",
	          onKeyDown: this.handleKeyDown,
	          onMouseDown: this.handleContentMouseDown,
	          onMouseUp: this.handleContentMouseUp,
	          role: this.props.role,
	          "aria-label": this.props.contentLabel
	        },
	          this.props.children
	        )
	      )
	    );
	  }
	});


/***/ },
/* 270 */
/*!***************************************************!*\
  !*** ./~/react-modal/lib/helpers/focusManager.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var findTabbable = __webpack_require__(/*! ../helpers/tabbable */ 271);
	var modalElement = null;
	var focusLaterElement = null;
	var needToFocus = false;
	
	function handleBlur(event) {
	  needToFocus = true;
	}
	
	function handleFocus(event) {
	  if (needToFocus) {
	    needToFocus = false;
	    if (!modalElement) {
	      return;
	    }
	    // need to see how jQuery shims document.on('focusin') so we don't need the
	    // setTimeout, firefox doesn't support focusin, if it did, we could focus
	    // the element outside of a setTimeout. Side-effect of this implementation 
	    // is that the document.body gets focus, and then we focus our element right 
	    // after, seems fine.
	    setTimeout(function() {
	      if (modalElement.contains(document.activeElement))
	        return;
	      var el = (findTabbable(modalElement)[0] || modalElement);
	      el.focus();
	    }, 0);
	  }
	}
	
	exports.markForFocusLater = function() {
	  focusLaterElement = document.activeElement;
	};
	
	exports.returnFocus = function() {
	  try {
	    focusLaterElement.focus();
	  }
	  catch (e) {
	    console.warn('You tried to return focus to '+focusLaterElement+' but it is not in the DOM anymore');
	  }
	  focusLaterElement = null;
	};
	
	exports.setupScopedFocus = function(element) {
	  modalElement = element;
	
	  if (window.addEventListener) {
	    window.addEventListener('blur', handleBlur, false);
	    document.addEventListener('focus', handleFocus, true);
	  } else {
	    window.attachEvent('onBlur', handleBlur);
	    document.attachEvent('onFocus', handleFocus);
	  }
	};
	
	exports.teardownScopedFocus = function() {
	  modalElement = null;
	
	  if (window.addEventListener) {
	    window.removeEventListener('blur', handleBlur);
	    document.removeEventListener('focus', handleFocus);
	  } else {
	    window.detachEvent('onBlur', handleBlur);
	    document.detachEvent('onFocus', handleFocus);
	  }
	};
	
	


/***/ },
/* 271 */
/*!***********************************************!*\
  !*** ./~/react-modal/lib/helpers/tabbable.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/*!
	 * Adapted from jQuery UI core
	 *
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */
	
	function focusable(element, isTabIndexNotNaN) {
	  var nodeName = element.nodeName.toLowerCase();
	  return (/input|select|textarea|button|object/.test(nodeName) ?
	    !element.disabled :
	    "a" === nodeName ?
	      element.href || isTabIndexNotNaN :
	      isTabIndexNotNaN) && visible(element);
	}
	
	function hidden(el) {
	  return (el.offsetWidth <= 0 && el.offsetHeight <= 0) ||
	    el.style.display === 'none';
	}
	
	function visible(element) {
	  while (element) {
	    if (element === document.body) break;
	    if (hidden(element)) return false;
	    element = element.parentNode;
	  }
	  return true;
	}
	
	function tabbable(element) {
	  var tabIndex = element.getAttribute('tabindex');
	  if (tabIndex === null) tabIndex = undefined;
	  var isTabIndexNaN = isNaN(tabIndex);
	  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
	}
	
	function findTabbableDescendants(element) {
	  return [].slice.call(element.querySelectorAll('*'), 0).filter(function(el) {
	    return tabbable(el);
	  });
	}
	
	module.exports = findTabbableDescendants;
	


/***/ },
/* 272 */
/*!***********************************************!*\
  !*** ./~/react-modal/lib/helpers/scopeTab.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var findTabbable = __webpack_require__(/*! ../helpers/tabbable */ 271);
	
	module.exports = function(node, event) {
	  var tabbable = findTabbable(node);
	  if (!tabbable.length) {
	      event.preventDefault();
	      return;
	  }
	  var finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
	  var leavingFinalTabbable = (
	    finalTabbable === document.activeElement ||
	    // handle immediate shift+tab after opening with mouse
	    node === document.activeElement
	  );
	  if (!leavingFinalTabbable) return;
	  event.preventDefault();
	  var target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
	  target.focus();
	};


/***/ },
/* 273 */
/*!**********************************!*\
  !*** ./~/lodash.assign/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;
	
	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = assign;


/***/ },
/* 274 */
/*!***************************************************!*\
  !*** ./~/react-modal/lib/helpers/ariaAppHider.js ***!
  \***************************************************/
/***/ function(module, exports) {

	var _element = typeof document !== 'undefined' ? document.body : null;
	
	function setElement(element) {
	  if (typeof element === 'string') {
	    var el = document.querySelectorAll(element);
	    element = 'length' in el ? el[0] : el;
	  }
	  _element = element || _element;
	  return _element;
	}
	
	function hide(appElement) {
	  validateElement(appElement);
	  (appElement || _element).setAttribute('aria-hidden', 'true');
	}
	
	function show(appElement) {
	  validateElement(appElement);
	  (appElement || _element).removeAttribute('aria-hidden');
	}
	
	function toggle(shouldHide, appElement) {
	  if (shouldHide)
	    hide(appElement);
	  else
	    show(appElement);
	}
	
	function validateElement(appElement) {
	  if (!appElement && !_element)
	    throw new Error('react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible');
	}
	
	function resetForTesting() {
	  _element = document.body;
	}
	
	exports.toggle = toggle;
	exports.setElement = setElement;
	exports.show = show;
	exports.hide = hide;
	exports.resetForTesting = resetForTesting;


/***/ },
/* 275 */
/*!**********************************!*\
  !*** ./~/element-class/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = function(opts) {
	  return new ElementClass(opts)
	}
	
	function indexOf(arr, prop) {
	  if (arr.indexOf) return arr.indexOf(prop)
	  for (var i = 0, len = arr.length; i < len; i++)
	    if (arr[i] === prop) return i
	  return -1
	}
	
	function ElementClass(opts) {
	  if (!(this instanceof ElementClass)) return new ElementClass(opts)
	  var self = this
	  if (!opts) opts = {}
	
	  // similar doing instanceof HTMLElement but works in IE8
	  if (opts.nodeType) opts = {el: opts}
	
	  this.opts = opts
	  this.el = opts.el || document.body
	  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
	}
	
	ElementClass.prototype.add = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return el.className = className
	  var classes = el.className.split(' ')
	  if (indexOf(classes, className) > -1) return classes
	  classes.push(className)
	  el.className = classes.join(' ')
	  return classes
	}
	
	ElementClass.prototype.remove = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return
	  var classes = el.className.split(' ')
	  var idx = indexOf(classes, className)
	  if (idx > -1) classes.splice(idx, 1)
	  el.className = classes.join(' ')
	  return classes
	}
	
	ElementClass.prototype.has = function(className) {
	  var el = this.el
	  if (!el) return
	  var classes = el.className.split(' ')
	  return indexOf(classes, className) > -1
	}
	
	ElementClass.prototype.toggle = function(className) {
	  var el = this.el
	  if (!el) return
	  if (this.has(className)) this.remove(className)
	  else this.add(className)
	}


/***/ },
/* 276 */
/*!*******************************************!*\
  !*** ./app/shared/modals/popup.modal.css ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\r\n    .popup-modal__modalContentSize___2sPBg {\r\n        left: 1%;\r\n        right: 1%;\r\n    }\r\n\r\n    .popup-modal__modalActualContainerSize___1uaz0 {\r\n    }\r\n\r\n    .popup-modal__closeModalButton___1loWe {\r\n        position: absolute;\r\n        top: -3em;\r\n        right: 0;\r\n        left: auto;\r\n        bottom: auto;\r\n    }\r\n\r\n    .popup-modal__closeModalButton___1loWe a {\r\n        cursor: pointer;\r\n        font-size: 3em;\r\n        color: #fff;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 5in) and (max-device-width: 13in) {\r\n    .popup-modal__modalContentSize___2sPBg {\r\n        left: 50%;\r\n        right: auto;\r\n    }\r\n\r\n    .popup-modal__modalActualContainerSize___1uaz0 {\r\n        margin-left: -50%;\r\n    }\r\n\r\n    .popup-modal__closeModalButton___1loWe {\r\n        position: absolute;\r\n        top: -20px;\r\n        right: -20px;\r\n        left: auto;\r\n        bottom: auto;\r\n    }\r\n\r\n    .popup-modal__closeModalButton___1loWe a {\r\n        cursor: pointer;\r\n        font-size: 1.5em;\r\n        color: #fff;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 13in) {\r\n    .popup-modal__modalContentSize___2sPBg {\r\n        left: 50%;\r\n        right: auto;\r\n    }\r\n\r\n    .popup-modal__modalActualContainerSize___1uaz0 {\r\n        margin-left: -50%;\r\n    }\r\n\r\n    .popup-modal__closeModalButton___1loWe {\r\n        position: absolute;\r\n        top: -15px;\r\n        right: -15px;\r\n        left: auto;\r\n        bottom: auto;\r\n    }\r\n\r\n    .popup-modal__closeModalButton___1loWe a {\r\n        cursor: pointer;\r\n        font-size: 14px;\r\n        color: #fff;\r\n    }\r\n\r\n}\r\n\r\n.popup-modal__modalOverlay___wdXPJ {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    -webkit-transition: background-color 600ms;\r\n    -moz-transition: background-color 600ms;\r\n    -ms-transition: display 600ms;\r\n    -o-transition: display 600ms;\r\n    transition: background-color 600ms;\r\n}\r\n\r\n.popup-modal__modalContent___2yk4Q {\r\n    position: absolute;\r\n    top: 100px;\r\n    bottom: auto;\r\n    outline: none;\r\n    font-family: 'Maven Pro', sans-serif;\r\n    z-index: 25;\r\n}\r\n\r\n.popup-modal__modalActualContainer___5TJUK {\r\n    position: relative;\r\n    background: #fff;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    width: 100%;\r\n\r\n    -webkit-animation: popup-modal__mymove___1Z-0g 200ms;\r\n/ / -webkit-animation-timing-function : linear;\r\n    animation: popup-modal__mymove___1Z-0g 400ms;\r\n/ / animation-timing-function : linear;\r\n}\r\n\r\n@-webkit-keyframes popup-modal__mymove___1Z-0g {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes popup-modal__mymove___1Z-0g {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}", ""]);
	
	// exports
	exports.locals = {
		"modalContentSize": "popup-modal__modalContentSize___2sPBg",
		"modalActualContainerSize": "popup-modal__modalActualContainerSize___1uaz0",
		"closeModalButton": "popup-modal__closeModalButton___1loWe",
		"modalOverlay": "popup-modal__modalOverlay___wdXPJ",
		"modalContent": "popup-modal__modalContent___2yk4Q",
		"modalActualContainer": "popup-modal__modalActualContainer___5TJUK",
		"mymove": "popup-modal__mymove___1Z-0g"
	};

/***/ },
/* 277 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 278 */
/*!*************************************!*\
  !*** ./~/react-dimensions/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(/*! react */ 1);
	var onElementResize = __webpack_require__(/*! element-resize-event */ 279);
	
	var defaultContainerStyle = {
	  width: '100%',
	  height: '100%',
	  padding: 0,
	  border: 0
	};
	
	function defaultGetWidth(element) {
	  return element.clientWidth;
	}
	
	function defaultGetHeight(element) {
	  return element.clientHeight;
	}
	
	/**
	 * Wraps a react component and adds properties `containerHeight` and
	 * `containerWidth`. Useful for responsive design. Properties update on
	 * window resize. **Note** that the parent element must have either a
	 * height or a width, or nothing will be rendered
	 *
	 * Can be used as a
	 * [higher-order component](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/#property-initializers)
	 * or as an [ES7 class decorator](https://github.com/wycats/javascript-decorators)
	 * (see examples)
	 *
	 * @param {object} [options]
	 * @param {function} [options.getHeight] A function that is passed an element and returns element
	 * height, where element is the wrapper div. Defaults to `(element) => element.clientHeight`
	 * @param {function} [options.getWidth]  A function that is passed an element and returns element
	 * width, where element is the wrapper div. Defaults to `(element) => element.clientWidth`
	 * @param {object} [options.containerStyle] A style object for the `<div>` that will wrap your component.
	 * The dimensions of this `div` are what are passed as props to your component. The default style is
	 * `{ width: '100%', height: '100%', padding: 0, border: 0 }` which will cause the `div` to fill its
	 * parent in most cases. If you are using a flexbox layout you will want to change this default style.
	 * @param {string} [options.className] Control the class name set on the wrapper `<div>`
	 * @param {boolean} [options.elementResize=false] Set true to watch the wrapper `div` for changes in
	 * size which are not a result of window resizing - e.g. changes to the flexbox and other layout.
	 * @return {function}                   A higher-order component that can be
	 * used to enhance a react component `Dimensions()(MyComponent)`
	 *
	 * @example
	 * // ES2015
	 * import React from 'react'
	 * import Dimensions from 'react-dimensions'
	 *
	 * class MyComponent extends React.Component {
	 *   render() (
	 *     <div
	 *       containerWidth={this.props.containerWidth}
	 *       containerHeight={this.props.containerHeight}
	 *     >
	 *     </div>
	 *   )
	 * }
	 *
	 * export default Dimensions()(MyComponent) // Enhanced component
	 *
	 * @example
	 * // ES5
	 * var React = require('react')
	 * var Dimensions = require('react-dimensions')
	 *
	 * var MyComponent = React.createClass({
	 *   render: function() {(
	 *     <div
	 *       containerWidth={this.props.containerWidth}
	 *       containerHeight={this.props.containerHeight}
	 *     >
	 *     </div>
	 *   )}
	 * }
	 *
	 * module.exports = Dimensions()(MyComponent) // Enhanced component
	 *
	 */
	module.exports = function Dimensions() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var _ref$getHeight = _ref.getHeight;
	  var getHeight = _ref$getHeight === undefined ? defaultGetHeight : _ref$getHeight;
	  var _ref$getWidth = _ref.getWidth;
	  var getWidth = _ref$getWidth === undefined ? defaultGetWidth : _ref$getWidth;
	  var _ref$containerStyle = _ref.containerStyle;
	  var containerStyle = _ref$containerStyle === undefined ? defaultContainerStyle : _ref$containerStyle;
	  var _ref$className = _ref.className;
	  var className = _ref$className === undefined ? null : _ref$className;
	  var _ref$elementResize = _ref.elementResize;
	  var elementResize = _ref$elementResize === undefined ? false : _ref$elementResize;
	
	  return function (ComposedComponent) {
	    return function (_React$Component) {
	      _inherits(DimensionsHOC, _React$Component);
	
	      function DimensionsHOC() {
	        var _Object$getPrototypeO;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, DimensionsHOC);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DimensionsHOC)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _this.updateDimensions = function () {
	          var container = _this.refs.container;
	          var containerWidth = getWidth(container);
	          var containerHeight = getHeight(container);
	
	          if (containerWidth !== _this.state.containerWidth || containerHeight !== _this.state.containerHeight) {
	            _this.setState({ containerWidth: containerWidth, containerHeight: containerHeight });
	          }
	        }, _this.onResize = function () {
	          if (_this.rqf) return;
	          _this.rqf = _this.getWindow().requestAnimationFrame(function () {
	            _this.rqf = null;
	            _this.updateDimensions();
	          });
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }
	      // ES7 Class properties
	      // http://babeljs.io/blog/2015/06/07/react-on-es6-plus/#property-initializers
	
	
	      // Using arrow functions and ES7 Class properties to autobind
	      // http://babeljs.io/blog/2015/06/07/react-on-es6-plus/#arrow-functions
	
	
	      _createClass(DimensionsHOC, [{
	        key: 'getWindow',
	
	
	        // If the component is mounted in a different window to the javascript
	        // context, as with https://github.com/JakeGinnivan/react-popout
	        // then the `window` global will be different from the `window` that
	        // contains the component.
	        // Depends on `defaultView` which is not supported <IE9
	        value: function getWindow() {
	          return this.refs.container ? this.refs.container.ownerDocument.defaultView || window : window;
	        }
	      }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          if (!this.refs.container) {
	            throw new Error('Cannot find container div');
	          }
	          this.updateDimensions();
	          if (elementResize) {
	            // Experimental: `element-resize-event` fires when an element resizes.
	            // It attaches its own window resize listener and also uses
	            // requestAnimationFrame, so we can just call `this.updateDimensions`.
	            onElementResize(this.refs.container, this.updateDimensions);
	          } else {
	            this.getWindow().addEventListener('resize', this.onResize, false);
	          }
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          this.getWindow().removeEventListener('resize', this.onResize);
	        }
	
	        /**
	         * Returns the underlying wrapped component instance.
	         * Useful if you need to access a method or property of the component
	         * passed to react-dimensions.
	         *
	         * @return {object} The rendered React component
	         **/
	
	      }, {
	        key: 'getWrappedInstance',
	        value: function getWrappedInstance() {
	          this.refs.wrappedInstance;
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _state = this.state;
	          var containerWidth = _state.containerWidth;
	          var containerHeight = _state.containerHeight;
	
	          if (!containerWidth && !containerHeight) {
	            console.warn('Wrapper div has no height or width, try overriding style with `containerStyle` option');
	          }
	          return React.createElement(
	            'div',
	            { className: className, style: containerStyle, ref: 'container' },
	            (containerWidth || containerHeight) && React.createElement(ComposedComponent, _extends({}, this.state, this.props, {
	              updateDimensions: this.updateDimensions,
	              ref: 'wrappedInstance'
	            }))
	          );
	        }
	      }]);
	
	      return DimensionsHOC;
	    }(React.Component);
	  };
	};


/***/ },
/* 279 */
/*!*****************************************!*\
  !*** ./~/element-resize-event/index.js ***!
  \*****************************************/
/***/ function(module, exports) {

	var exports = function exports(element, fn) {
	  var window = this
	  var document = window.document
	  var isIE
	  var requestFrame
	
	  var attachEvent = document.attachEvent
	  if (typeof navigator !== 'undefined') {
	    isIE = navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/)
	  }
	
	  requestFrame = (function () {
	    var raf = window.requestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	        window.webkitRequestAnimationFrame ||
	          function fallbackRAF(func) {
	            return window.setTimeout(func, 20)
	          }
	    return function requestFrameFunction(func) {
	      return raf(func)
	    }
	  })()
	
	  var cancelFrame = (function () {
	    var cancel = window.cancelAnimationFrame ||
	      window.mozCancelAnimationFrame ||
	        window.webkitCancelAnimationFrame ||
	          window.clearTimeout
	    return function cancelFrameFunction(id) {
	      return cancel(id)
	    }
	  })()
	
	  function resizeListener(e) {
	    var win = e.target || e.srcElement
	    if (win.__resizeRAF__) {
	      cancelFrame(win.__resizeRAF__)
	    }
	    win.__resizeRAF__ = requestFrame(function () {
	      var trigger = win.__resizeTrigger__
	      if(trigger !== undefined) {
	        trigger.__resizeListeners__.forEach(function (fn) {
	          fn.call(trigger, e)
	        })
	      }
	    })
	  }
	
	  function objectLoad() {
	    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__
	    this.contentDocument.defaultView.addEventListener('resize', resizeListener)
	  }
	
	  if (!element.__resizeListeners__) {
	    element.__resizeListeners__ = []
	    if (attachEvent) {
	      element.__resizeTrigger__ = element
	      element.attachEvent('onresize', resizeListener)
	    } else {
	      if (getComputedStyle(element).position === 'static') {
	        element.style.position = 'relative'
	      }
	      var obj = element.__resizeTrigger__ = document.createElement('object')
	      obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;')
	      obj.setAttribute('class', 'resize-sensor')
	      obj.__resizeElement__ = element
	      obj.onload = objectLoad
	      obj.type = 'text/html'
	      if (isIE) {
	        element.appendChild(obj)
	      }
	      obj.data = 'about:blank'
	      if (!isIE) {
	        element.appendChild(obj)
	      }
	    }
	  }
	  element.__resizeListeners__.push(fn)
	}
	
	exports.unbind = function(element, fn){
	  var attachEvent = document.attachEvent;
	  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	  if (!element.__resizeListeners__.length) {
	    if (attachEvent) {
	      element.detachEvent('onresize', resizeListener);
	    } else {
	      element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
	      element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
	    }
	  }
	}
	
	module.exports = (typeof window === 'undefined') ? exports : exports.bind(window)


/***/ },
/* 280 */
/*!********************************************************!*\
  !*** ./app/shared/modals/login/login.signup.modal.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _loginSignupModal = __webpack_require__(/*! ./login.signup.modal.css */ 281);
	
	var _loginSignupModal2 = _interopRequireDefault(_loginSignupModal);
	
	var _loginModal = __webpack_require__(/*! ./login.modal.jsx */ 282);
	
	var _loginModal2 = _interopRequireDefault(_loginModal);
	
	var _signupModal = __webpack_require__(/*! ./signup.modal.jsx */ 306);
	
	var _signupModal2 = _interopRequireDefault(_signupModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginSignupModal = function (_React$Component) {
	    _inherits(LoginSignupModal, _React$Component);
	
	    function LoginSignupModal(props) {
	        _classCallCheck(this, LoginSignupModal);
	
	        var _this = _possibleConstructorReturn(this, (LoginSignupModal.__proto__ || Object.getPrototypeOf(LoginSignupModal)).call(this, props));
	
	        _this.state = {
	            isLoginModal: true
	        };
	        return _this;
	    }
	
	    _createClass(LoginSignupModal, [{
	        key: 'changeLoginSignupModal',
	        value: function changeLoginSignupModal() {
	            this.setState({ isLoginModal: !this.state.isLoginModal });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var loginOrSignupModal = this.state.isLoginModal ? _react2.default.createElement(_loginModal2.default, { isSingleModal: true, changeModal: this.changeLoginSignupModal.bind(this) }) : _react2.default.createElement(_signupModal2.default, { isSingleModal: true, changeModal: this.changeLoginSignupModal.bind(this) });
	            var result = _isDesktop ? _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_signupModal2.default, { isSingleModal: false, changeModal: null }),
	                _react2.default.createElement('div', { className: 'verticalLine' }),
	                _react2.default.createElement(_loginModal2.default, { isSingleModal: false, changeModal: null })
	            ) : loginOrSignupModal;
	            return _react2.default.createElement(
	                'div',
	                { className: _loginSignupModal2.default.loginSignupContainer },
	                result,
	                _react2.default.createElement('img', { className: 'hide-me', src: '/images/spin-alt.gif', alt: 'spinner' })
	            );
	        }
	    }]);
	
	    return LoginSignupModal;
	}(_react2.default.Component);
	
	exports.default = LoginSignupModal;

/***/ },
/* 281 */
/*!********************************************************!*\
  !*** ./app/shared/modals/login/login.signup.modal.css ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\r\n    .login-signup-modal__headingName___2nTpf {\r\n        font-size: 2.6em;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 5in) and (max-device-width: 13in) {\r\n    .login-signup-modal__headingName___2nTpf {\r\n        font-size: 17px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 13in) {\r\n    .login-signup-modal__headingName___2nTpf {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n.login-signup-modal__headingName___2nTpf {\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.login-signup-modal__loginSignupContainer___32TfB {\r\n    position: relative;\r\n    display: table-row;\r\n\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"headingName": "login-signup-modal__headingName___2nTpf",
		"loginSignupContainer": "login-signup-modal__loginSignupContainer___32TfB"
	};

/***/ },
/* 282 */
/*!*************************************************!*\
  !*** ./app/shared/modals/login/login.modal.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _loginModal = __webpack_require__(/*! ./login.modal.css */ 283);
	
	var _loginModal2 = _interopRequireDefault(_loginModal);
	
	var _loginSignupModal = __webpack_require__(/*! ./login.signup.modal.css */ 281);
	
	var _loginSignupModal2 = _interopRequireDefault(_loginSignupModal);
	
	var _userService = __webpack_require__(/*! ../../../services/user.service.jsx */ 284);
	
	var _userService2 = _interopRequireDefault(_userService);
	
	var _inputValidatorService = __webpack_require__(/*! ../../../services/input.validator.service.jsx */ 287);
	
	var _inputValidatorService2 = _interopRequireDefault(_inputValidatorService);
	
	var _forgotPasswordModal = __webpack_require__(/*! ./forgot.password.modal.jsx */ 288);
	
	var _forgotPasswordModal2 = _interopRequireDefault(_forgotPasswordModal);
	
	var _LoadingSpinner = __webpack_require__(/*! ../../LoadingSpinner.jsx */ 207);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _submitButton = __webpack_require__(/*! ../../../shared/buttons/submit.button.jsx */ 304);
	
	var _submitButton2 = _interopRequireDefault(_submitButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginModal = function (_React$Component) {
	    _inherits(LoginModal, _React$Component);
	
	    function LoginModal(props) {
	        _classCallCheck(this, LoginModal);
	
	        var _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));
	
	        _this.state = {
	            errorMessage: '',
	            emailId: '',
	            password: '',
	            changeLoginResetModal: true,
	            loginButtonState: 'enabled',
	            fBButtonState: 'enabled'
	
	        };
	        return _this;
	    }
	
	    _createClass(LoginModal, [{
	        key: 'changeToSignupModal',
	        value: function changeToSignupModal() {
	            this.props.changeModal();
	        }
	    }, {
	        key: 'handleEmailIdChange',
	        value: function handleEmailIdChange(event) {
	            this.setState({ emailId: event.target.value.trim() });
	        }
	    }, {
	        key: 'handlePasswordChange',
	        value: function handlePasswordChange(event) {
	            this.setState({ password: event.target.value.trim() });
	        }
	    }, {
	        key: 'doLogin',
	        value: function doLogin(e) {
	            e.preventDefault();
	            this.setState({ errorMessage: '' });
	            if (this.validateInput()) {
	                this._doLogin();
	            }
	        }
	    }, {
	        key: 'loginWithFacebook',
	        value: function loginWithFacebook() {
	            this.setState({ fBButtonState: 'inProgress' });
	            FB.login(function (response) {
	                if (response.status == "connected") {
	                    FB.api('/me?scope=email', { fields: 'name, email' }, function (response2) {
	                        _userService2.default.loginWithFacebook(response2.email, response2.id, response.authResponse.accessToken).then(function (res) {
	                            if (res.data['response'] == true) {
	                                window.location.href = '';
	                            }
	                        });
	                    });
	                }
	            }, { fields: 'public_profile, email' }, this);
	        }
	    }, {
	        key: 'changeToForgotPasswordModal',
	        value: function changeToForgotPasswordModal() {
	            this.setState({ changeLoginResetModal: !this.state.changeLoginResetModal });
	        }
	    }, {
	        key: '_doLogin',
	        value: function _doLogin() {
	            var _this2 = this;
	
	            this.setState({ loginButtonState: 'inProgress' });
	            _userService2.default.login(this.state.emailId, this.state.password).then(function (res) {
	                if (res.data['response'] == true) {
	                    window.location.href = '';
	                } else {
	                    _this2.setState({
	                        errorMessage: 'Incorrect email or password',
	                        loginButtonState: 'enabled'
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'validateInput',
	        value: function validateInput() {
	            if (!_inputValidatorService2.default.validateEmail(this.state.emailId)) {
	                this.setState({ errorMessage: 'Please enter valid Email Id' });
	                return false;
	            }
	
	            if (!_inputValidatorService2.default.validatePassword(this.state.password)) {
	                this.setState({ errorMessage: 'Password should be at least 6 characters' });
	                return false;
	            }
	
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var loginButtonValue = this.state.disableButton ? 'Logging in...' : 'Login';
	            var isModalChangeVisible = this.props.isSingleModal ? _react2.default.createElement(
	                'div',
	                { className: _loginModal2.default.notYetRegistered },
	                _react2.default.createElement(
	                    'a',
	                    { onClick: this.changeToSignupModal.bind(this) },
	                    'Not yet registered?'
	                )
	            ) : "";
	            return this.state.changeLoginResetModal ? _react2.default.createElement(
	                'div',
	                { className: _loginModal2.default.loginContainer + " " + _loginModal2.default.loginContainerSize },
	                _react2.default.createElement(
	                    'form',
	                    null,
	                    _react2.default.createElement(
	                        'h1',
	                        { className: _loginSignupModal2.default.headingName },
	                        'Login here'
	                    ),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement('input', { type: 'textbox',
	                        onChange: this.handleEmailIdChange.bind(this),
	                        className: 'inputTextBox inputTextBoxSize',
	                        placeholder: 'Email' }),
	                    _react2.default.createElement('input', { type: 'password',
	                        onChange: this.handlePasswordChange.bind(this),
	                        className: 'inputTextBox inputTextBoxSize',
	                        placeholder: 'Password' }),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'error-message' },
	                        this.state.errorMessage
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _loginModal2.default.forgotPassword },
	                        _react2.default.createElement(
	                            'a',
	                            { onClick: this.changeToForgotPasswordModal.bind(this) },
	                            'Forgot password?'
	                        )
	                    ),
	                    _react2.default.createElement(_submitButton2.default, {
	                        onButtonClick: this.doLogin.bind(this),
	                        buttonValue: 'Login',
	                        buttonColor: submitButtonBackground,
	                        buttonHoverColor: submitButtonHoverBackground,
	                        buttonState: this.state.loginButtonState }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: "align-center " + _loginModal2.default.orText },
	                        ' OR'
	                    ),
	                    _react2.default.createElement(_submitButton2.default, {
	                        onButtonClick: this.loginWithFacebook.bind(this),
	                        buttonValue: 'Login with Facebook',
	                        buttonColor: '#4e69a2',
	                        buttonHoverColor: submitButtonHoverBackground,
	                        buttonState: this.state.fBButtonState }),
	                    isModalChangeVisible
	                )
	            ) : _react2.default.createElement(_forgotPasswordModal2.default, { changeModal: this.changeToForgotPasswordModal.bind(this) });
	        }
	    }]);
	
	    return LoginModal;
	}(_react2.default.Component);
	
	exports.default = LoginModal;

/***/ },
/* 283 */
/*!*************************************************!*\
  !*** ./app/shared/modals/login/login.modal.css ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\r\n    .login-modal__loginContainerSize___WWOUZ {\r\n        width: 50%;\r\n    }\r\n\r\n    .login-modal__orText___MWsjz {\r\n        width: 100%;\r\n        margin-top: 1em;\r\n        font-size: 2em;\r\n    }\r\n\r\n    .login-modal__notYetRegistered___1KfTQ {\r\n        font-size: 2em;\r\n        margin-top: 2em;\r\n        text-align: center;\r\n    }\r\n\r\n\r\n    .login-modal__forgotPassword___1r_Z2 {\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 5in) and (max-device-width: 13in) {\r\n    .login-modal__loginContainerSize___WWOUZ {\r\n        width: 350px;\r\n    }\r\n\r\n    .login-modal__orText___MWsjz {\r\n        width: 100%;\r\n        margin-top: 20px;\r\n        margin-bottom: -5px;\r\n    }\r\n\r\n    .login-modal__notYetRegistered___1KfTQ {\r\n        font-size: 14px;\r\n        margin-top: 20px;\r\n        text-align: center;\r\n    }\r\n\r\n\r\n    .login-modal__forgotPassword___1r_Z2 {\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 13in) {\r\n    .login-modal__loginContainerSize___WWOUZ {\r\n        width: 350px;\r\n        padding: 20px;\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .login-modal__orText___MWsjz {\r\n        width: 100%;\r\n        margin-top: 20px;\r\n        margin-bottom: -5px;\r\n    }\r\n\r\n    .login-modal__notYetRegistered___1KfTQ {\r\n        font-size: 13px;\r\n        margin-top: 20px;\r\n        text-align: center;\r\n    }\r\n\r\n\r\n\r\n    .login-modal__forgotPassword___1r_Z2 {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n.login-modal__loginContainer___wwxJV {\r\n    padding: 20px;\r\n    display: table-cell;\r\n    text-align: left;\r\n}\r\n\r\n.login-modal__loginContainer___wwxJV h1 {\r\n    //font-weight: bold;\r\n}\r\n\r\n.login-modal__notYetRegistered___1KfTQ {\r\n    width: 100%;\r\n    padding: 20px;\r\n    text-decoration: underline;\r\n}\r\n\r\n.login-modal__notYetRegistered___1KfTQ a {\r\n    cursor: pointer;\r\n    color: #222;\r\n    width: 100%;\r\n    padding: 30px;\r\n}\r\n\r\n.login-modal__forgotPassword___1r_Z2 {\r\n    text-align: right;\r\n}\r\n\r\n.login-modal__forgotPassword___1r_Z2 {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n", ""]);
	
	// exports
	exports.locals = {
		"loginContainerSize": "login-modal__loginContainerSize___WWOUZ",
		"orText": "login-modal__orText___MWsjz",
		"notYetRegistered": "login-modal__notYetRegistered___1KfTQ",
		"forgotPassword": "login-modal__forgotPassword___1r_Z2",
		"loginContainer": "login-modal__loginContainer___wwxJV"
	};

/***/ },
/* 284 */
/*!***************************************!*\
  !*** ./app/services/user.service.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _baseSerivce = __webpack_require__(/*! ./base.serivce.jsx */ 285);
	
	var _baseSerivce2 = _interopRequireDefault(_baseSerivce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UserService = function () {
	    function UserService() {
	        _classCallCheck(this, UserService);
	    }
	
	    _createClass(UserService, [{
	        key: 'newRegistration',
	        value: function newRegistration(userName, emailId, password) {
	            return _axios2.default.post(_baseSerivce2.default.baseUrl + '/user/create?_t=' + RW_BCC_KEY, {
	                userName: userName,
	                emailId: emailId,
	                password: password
	            });
	        }
	    }, {
	        key: 'login',
	        value: function login(emailId, password) {
	            return _axios2.default.post(_baseSerivce2.default.baseUrl + '/login?_t=' + RW_BCC_KEY, {
	                emailId: emailId,
	                password: password
	            });
	        }
	    }, {
	        key: 'loginWithFacebook',
	        value: function loginWithFacebook(fbEmailId, fbUserId, fbAccessToken) {
	            var url = _baseSerivce2.default.baseUrl + '/login/facebook';
	            var data = {
	                fbEmailId: fbEmailId,
	                fbUserId: fbUserId,
	                fbAccessToken: fbAccessToken
	            };
	            return _baseSerivce2.default.postData(url, data);
	        }
	    }, {
	        key: 'resetPassword',
	        value: function resetPassword(emailId) {
	            var url = _baseSerivce2.default.baseUrl + '/user/reset';
	            var data = {
	                emailId: emailId
	            };
	            return _baseSerivce2.default.postData(url, data);
	        }
	    }, {
	        key: 'newsletterSignup',
	        value: function newsletterSignup(emailId) {
	            var url = _baseSerivce2.default.baseUrl + '/user/submit/email';
	            var data = {
	                emailId: emailId,
	                country: visitorCountry
	            };
	            return _baseSerivce2.default.postData(url, data);
	        }
	    }, {
	        key: 'resetValidation',
	        value: function resetValidation(password, resetPasswordLink) {
	            var url = _baseSerivce2.default.baseUrl + '/user/reset/validation';
	            var data = {
	                password: password,
	                resetPasswordLink: resetPasswordLink
	            };
	            return _baseSerivce2.default.postData(url, data);
	        }
	    }, {
	        key: 'doLogout',
	        value: function doLogout() {
	            return _axios2.default.post(_baseSerivce2.default.baseUrl + '/logout?_t=' + RW_BCC_KEY, {});
	        }
	    }]);
	
	    return UserService;
	}();
	
	exports.default = new UserService();

/***/ },
/* 285 */
/*!***************************************!*\
  !*** ./app/services/base.serivce.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _userCountry = __webpack_require__(/*! ./user.country.jsx */ 286);
	
	var _userCountry2 = _interopRequireDefault(_userCountry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BaseService = function () {
	    function BaseService() {
	        _classCallCheck(this, BaseService);
	
	        this.baseUrl = "/api";
	        this.fullHostName = "http://www.gadgetclues.com";
	    }
	
	    _createClass(BaseService, [{
	        key: 'getQueryParam',
	        value: function getQueryParam() {
	            return '_t=' + RW_BCC_KEY + '&_u=' + UID + '&_c=' + visitorCountry;
	        }
	    }, {
	        key: 'getData',
	        value: function getData(url) {
	            return _axios2.default.get(url + '?' + this.getQueryParam());
	        }
	    }, {
	        key: 'getDataWithQueryParams',
	        value: function getDataWithQueryParams(url, queryParams) {
	            var params = this.getParams(queryParams);
	            return _axios2.default.get(url + '?' + this.getQueryParam() + '&' + params);
	        }
	    }, {
	        key: 'postData',
	        value: function postData(url, data) {
	            return _axios2.default.post(url + '?' + this.getQueryParam(), data);
	        }
	    }, {
	        key: 'getParams',
	        value: function getParams(params) {
	            var str = "";
	            for (var key in params) {
	                if (str == "") {
	                    str = key + '=' + params[key];
	                } else {
	                    str = str + '&' + key + '=' + params[key];
	                }
	            }
	            return str.length > 1 ? str : '';
	        }
	    }]);
	
	    return BaseService;
	}();
	
	exports.default = new BaseService();

/***/ },
/* 286 */
/*!***************************************!*\
  !*** ./app/services/user.country.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UserCountry = function () {
	    function UserCountry() {
	        _classCallCheck(this, UserCountry);
	
	        this.allowedCountry = ['IN', 'US', 'FR', 'GE'];
	        this.state = {
	            userCountry: 'US'
	        };
	    }
	
	    _createClass(UserCountry, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;
	
	            var url = 'http://api.wipmania.com/jsonp';
	            _axios2.default.get(url, sync).then(function (res) {
	                var country = res.address.country_code;
	                if (Array.indexOf(_this.allowedCountry, country) !== -1) {
	                    _this.setState({ userCountry: country });
	                    visitorCountry = country;
	                }
	            });
	        }
	    }, {
	        key: 'getCountry',
	        value: function getCountry() {
	            return this.state.userCountry;
	        }
	    }]);
	
	    return UserCountry;
	}();
	
	exports.default = new UserCountry();

/***/ },
/* 287 */
/*!**************************************************!*\
  !*** ./app/services/input.validator.service.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InputValidatorService = function () {
	    function InputValidatorService() {
	        _classCallCheck(this, InputValidatorService);
	    }
	
	    _createClass(InputValidatorService, [{
	        key: 'validateEmail',
	        value: function validateEmail(text) {
	
	            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	            if (!re.test(text) || text.length > 100) {
	                return false;
	            }
	
	            return true;
	        }
	    }, {
	        key: 'validateOnlyText',
	        value: function validateOnlyText(text, minLength, maxLength) {
	            text = text.trim();
	            if (text == "") {
	                return false;
	            }
	
	            if (text.length > maxLength || text.length < minLength) {
	                return false;
	            }
	
	            text = text.toLowerCase();
	
	            if (!/^[a-z A-Z]*$/g.test(text)) {
	                return false;
	            }
	            return true;
	        }
	    }, {
	        key: 'validateVarChar',
	        value: function validateVarChar(text) {
	            return true;
	        }
	    }, {
	        key: 'validatePassword',
	        value: function validatePassword(text) {
	            if (text.length < 6) {
	                return false;
	            }
	            return true;
	        }
	    }]);
	
	    return InputValidatorService;
	}();
	
	exports.default = new InputValidatorService();

/***/ },
/* 288 */
/*!***********************************************************!*\
  !*** ./app/shared/modals/login/forgot.password.modal.jsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _forgotPasswordModal = __webpack_require__(/*! ./forgot.password.modal.css */ 289);
	
	var _forgotPasswordModal2 = _interopRequireDefault(_forgotPasswordModal);
	
	var _loginSignupModal = __webpack_require__(/*! ./login.signup.modal.css */ 281);
	
	var _loginSignupModal2 = _interopRequireDefault(_loginSignupModal);
	
	var _loginModal = __webpack_require__(/*! ./login.modal.css */ 283);
	
	var _loginModal2 = _interopRequireDefault(_loginModal);
	
	var _userService = __webpack_require__(/*! ../../../services/user.service.jsx */ 284);
	
	var _userService2 = _interopRequireDefault(_userService);
	
	var _inputValidatorService = __webpack_require__(/*! ../../../services/input.validator.service.jsx */ 287);
	
	var _inputValidatorService2 = _interopRequireDefault(_inputValidatorService);
	
	var _reactButton = __webpack_require__(/*! react-button */ 290);
	
	var _reactButton2 = _interopRequireDefault(_reactButton);
	
	var _submitButton = __webpack_require__(/*! ../../../shared/buttons/submit.button.jsx */ 304);
	
	var _submitButton2 = _interopRequireDefault(_submitButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var inProgressBtn = {
	    background: 'url(/images/spin-alt.gif) no-repeat 50% 50%',
	    backgroundSize: '3vw',
	    backgroundColor: '#ff5858'
	};
	
	var LoginModal = function (_React$Component) {
	    _inherits(LoginModal, _React$Component);
	
	    function LoginModal(props) {
	        _classCallCheck(this, LoginModal);
	
	        var _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));
	
	        _this.state = {
	            errorMessage: '',
	            succeedMessage: '',
	            disableButton: false,
	            resetButtonValue: 'Reset',
	            inProgressButton: {},
	            emailId: '',
	            buttonState: 'enabled'
	        };
	        return _this;
	    }
	
	    _createClass(LoginModal, [{
	        key: 'changeToLoginModal',
	        value: function changeToLoginModal() {
	            this.props.changeModal();
	        }
	    }, {
	        key: 'handleEmailIdChange',
	        value: function handleEmailIdChange(event) {
	            this.setState({ emailId: event.target.value.trim() });
	        }
	    }, {
	        key: 'doReset',
	        value: function doReset(e) {
	            e.preventDefault();
	            if (this.validateInput()) {
	                this._doReset();
	            }
	        }
	    }, {
	        key: '_doReset',
	        value: function _doReset() {
	            var _this2 = this;
	
	            this.setState({
	                errorMessage: '', buttonState: 'inProgress'
	            });
	            _userService2.default.resetPassword(this.state.emailId).then(function (res) {
	                if (res.data['response'] == true) {
	                    _this2.setState({
	                        succeedMessage: "Please check your email to reset your password",
	                        buttonState: 'enabled'
	                    });
	                } else {
	                    _this2.setState({
	                        errorMessage: 'Email id does not exist',
	                        buttonState: 'enabled'
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'validateInput',
	        value: function validateInput() {
	            if (!_inputValidatorService2.default.validateEmail(this.state.emailId)) {
	                this.setState({ errorMessage: 'Please enter valid Email Id' });
	                return false;
	            }
	
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _loginModal2.default.loginContainer + " " + _loginModal2.default.loginContainerSize },
	                _react2.default.createElement(
	                    'form',
	                    null,
	                    _react2.default.createElement(
	                        'h1',
	                        { className: _loginSignupModal2.default.headingName },
	                        'Forgot password'
	                    ),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement('input', { type: 'textbox',
	                        onChange: this.handleEmailIdChange.bind(this),
	                        className: 'inputTextBox inputTextBoxSize',
	                        placeholder: 'Email' }),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'error-message' },
	                        this.state.errorMessage
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'succeed-message' },
	                        this.state.succeedMessage
	                    ),
	                    _react2.default.createElement(_submitButton2.default, {
	                        onButtonClick: this.doReset.bind(this),
	                        buttonValue: 'Reset',
	                        buttonColor: submitButtonBackground,
	                        buttonHoverColor: submitButtonHoverBackground,
	                        buttonState: this.state.buttonState }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _loginModal2.default.notYetRegistered },
	                        _react2.default.createElement(
	                            'a',
	                            { onClick: this.changeToLoginModal.bind(this) },
	                            'Login'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return LoginModal;
	}(_react2.default.Component);
	
	exports.default = LoginModal;

/***/ },
/* 289 */
/*!***********************************************************!*\
  !*** ./app/shared/modals/login/forgot.password.modal.css ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 290 */
/*!*************************************!*\
  !*** ./~/react-button/lib/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var React     = __webpack_require__(/*! react */ 1)
	var assign    = __webpack_require__(/*! object-assign */ 291)
	var normalize = __webpack_require__(/*! react-style-normalizer */ 292)
	
	function emptyFn(){}
	
	function toUpperFirst(s){
	    return s?
	            s.charAt(0).toUpperCase() + s.substring(1):
	            ''
	}
	
	var ALIGN = (function(){
	    var MAP = {
	        left  : 'flex-start',
	        start : 'flex-start',
	        center: 'center',
	        right : 'flex-end',
	        end   : 'flex-end'
	    }
	
	    return function(value){
	        return MAP[value] || value
	    }
	})()
	
	var PropTypes    = React.PropTypes
	var DISPLAY_NAME = 'ReactButton'
	
	var THEME = {
	    'default': {
	        //default type
	        style: {
	            border    : '1px solid rgb(46, 153, 235)',
	            color     : 'rgb(84, 84, 84)',
	        },
	                overStyle: {
	                    background: 'linear-gradient(to bottom, rgb(125, 191, 242) 0%, rgb(110, 184, 241) 50%, rgb(117, 188, 242) 100%)',
	                    color: 'white'
	                },
	
	                activeStyle: {
	                    //-6 lightness from overStyle
	                    background: ' linear-gradient(to bottom, rgb(106,182,240) 0%,rgb(91,175,239) 50%,rgb(96,178,240) 100%)',
	                    color: 'white'
	                },
	
	            //disabled
	            disabledStyle: {
	                //theme properties
	                background: 'rgb(221, 221, 221)',
	                border: '1px solid rgb(147, 147, 147)',
	                color: 'rgb(128, 128, 128)'
	            },
	
	            //pressed
	            pressedStyle: {
	                background: 'linear-gradient(to bottom, rgb(22,135,222) 0%,rgb(20,129,212) 50%,rgb(20,132,218) 100%)',
	                color: 'white'
	            },
	
	                overPressedStyle: {
	                    // +14 lightness from pressed style
	                    background: 'linear-gradient(to bottom, rgb(48,153,234) 0%,rgb(36,148,234) 50%,rgb(41,151,235) 100%)',
	                },
	
	                activePressedStyle: {
	                    background: 'linear-gradient(to bottom, rgb(58,159,236) 0%,rgb(45,153,235) 50%,rgb(50,155,236) 100%)'
	                },
	
	            //focused
	            focusedStyle: {}
	            //---NONE ----
	    },
	    'primary': {
	        style: {
	            background: 'linear-gradient(to bottom, #4ea9ee 0%,#41a2ed 50%,#46a5ee 100%)',
	            color: 'white'
	        },
	
	                overStyle: {
	                    // + 10 lightness from primary
	                    background: 'linear-gradient(to bottom, rgb(96,178,240) 0%,rgb(83,171,239) 50%,rgb(88,174,240) 100%)'
	                },
	
	                activeStyle: {
	                    // -5 lightness from primary
	                    background: 'linear-gradient(to bottom, rgb(64,162,236) 0%,rgb(50,155,236) 50%,rgb(55,158,237) 100%)'
	                },
	
	            //disabled
	            disabledStyle: {
	                //theme properties
	                background: 'rgb(116, 144, 166)',
	                color: 'rgb(190, 190, 190)'
	            }
	
	            //pressed
	            //---NONE---
	
	            //focused
	            //---NONE---
	    }
	}
	
	var ReactButton = React.createClass({
	
	    displayName: DISPLAY_NAME,
	
	    propTypes: {
	        fn: PropTypes.func,
	        onClick: PropTypes.func,
	
	        primary: PropTypes.bool,
	        disabled: PropTypes.bool,
	        pressed: PropTypes.bool,
	        defaultPressed: PropTypes.bool,
	
	        href: PropTypes.string,
	        align: PropTypes.string,
	
	        style: PropTypes.object,
	
	        className       : PropTypes.string,
	        activeClassName : PropTypes.string,
	        overClassName   : PropTypes.string,
	        focusedClassName: PropTypes.string,
	        disabledClassName: PropTypes.string
	    },
	
	    getDefaultProps: function() {
	        return {
	            isReactButton: true,
	            applyDefaultTheme: true,
	            buttonStates: ['focused', 'pressed'],
	
	            'data-display-name': DISPLAY_NAME,
	
	            align: 'center',
	
	            defaultStyle: {
	                boxSizing     : 'border-box',
	
	                display       : 'inline-flex',
	                alignItems    : 'center',
	                justifyContent: 'center',
	
	                userSelect    : 'none',
	                textDecoration: 'none',
	                cursor        : 'pointer',
	                overflow      : 'hidden',
	
	                //theme properties
	                //fontFamily: 'Arial',
	                // fontSize  : '0.9em',
	                whiteSpace: 'nowrap',
	                padding   : 5,
	                margin    : 2
	            },
	
	            defaultDisabledStyle: {
	                cursor: 'default',
	            },
	
	            defaultLabelStyle: {
	                display: 'inline-block'
	            },
	
	            ellipsisLabelStyle: {
	                textOverflow: 'ellipsis',
	                overflow: 'hidden',
	                whiteSpace: 'nowrap'
	            },
	
	            ellipsis: true,
	
	            href: ''
	        }
	    },
	
	    getInitialState: function() {
	        return {
	            mouseOver: false,
	            active: false,
	            defaultPressed: this.props.defaultPressed
	        }
	    },
	
	    isFocused: function() {
	        return this.state.focused
	    },
	
	    isActive: function() {
	        return !!this.state.active
	    },
	
	    render: function(){
	        var props = this.prepareProps(this.props, this.state)
	
	        return (props.factory || React.DOM.a)(props)
	    },
	
	    prepareProps: function(thisProps, state) {
	
	        var props = {}
	
	        assign(props, thisProps)
	
	        props.theme = this.prepareTheme(props)
	
	        var pressed = props.pressed != null? props.pressed: state.defaultPressed
	
	        if (pressed != null){
	            props.pressed = pressed
	        }
	
	        props.active    = props.activeState == null? !!state.active: props.activeState
	        props.over      = props.overState == null? !!state.mouseOver: props.overState
	        props.focused   = props.focusedState == null? !!state.focused: props.focusedState
	
	        props['data-active']  = props.active
	        props['data-over']    = props.over
	        props['data-focused'] = props.focused
	        props['data-pressed'] = props.pressed
	        props['data-disabled'] = props.disabled
	
	        props.style     = this.prepareStyle(props, state)
	        props.className = this.prepareClassName(props, state)
	        props.children  = this.prepareChildren(props)
	
	        var handleClick = this.handleClick.bind(this, props)
	
	        props.onClick = typeof props.interceptClick == 'function'?
	                            props.interceptClick.bind(this, handleClick):
	                            handleClick
	
	        props.onFocus      = this.handleFocus.bind(this, props)
	        props.onBlur       = this.handleBlur.bind(this, props)
	        props.onMouseEnter = this.handleMouseEnter.bind(this, props)
	        props.onMouseLeave = this.handleMouseLeave.bind(this, props)
	        props.onMouseDown  = this.handleMouseDown.bind(this, props)
	        props.onMouseUp    = this.handleMouseUp.bind(this, props)
	
	        return props
	    },
	
	    handleFocus: function(props, event) {
	        if (props.disabled){
	            return
	        }
	
	        this.setState({
	            focused: true
	        })
	
	        ;(this.props.onFocus || emptyFn)(event)
	    },
	
	    handleBlur: function(props, event) {
	        if (props.disabled){
	            return
	        }
	
	        this.setState({
	            focused: false
	        })
	
	        ;(this.props.onBlur || emptyFn)(event)
	    },
	
	    handleClick: function(props, event) {
	        if (!props.href || props.disabled){
	            event.preventDefault()
	        }
	
	        if (props.disabled){
	            return
	        }
	
	        if (props.pressed != null){
	            var newPressed = !props.pressed
	
	            if (this.props.pressed == null){
	                this.setState({
	                    defaultPressed: newPressed
	                })
	            }
	
	            ;(this.props.onToggle || emptyFn)(newPressed, event)
	        }
	
	        ;(this.props.onClick || emptyFn)(event)
	        ;(this.props.fn || emptyFn)(props, event)
	    },
	
	    handleMouseEnter: function(props, event) {
	        if (props.disabled){
	            return
	        }
	
	        this.setState({
	            mouseOver: true
	        })
	
	        ;(this.props.onMouseEnter || emptyFn)(event)
	    },
	
	    handleMouseLeave: function(props, event) {
	        if (props.disabled){
	            return
	        }
	
	        this.setState({
	            mouseOver: false
	        })
	
	        ;(this.props.onMouseLeave || emptyFn)(event)
	    },
	
	    handleMouseUp: function(props, event) {
	        if (props.disabled){
	            return
	        }
	
	        this.setState({
	            active: false
	        })
	
	        window.removeEventListener('mouseup', this.handleMouseUp)
	
	        ;(this.props.onMouseUp || emptyFn)(event)
	        ;(this.props.onDeactivate || emptyFn)(event)
	    },
	
	    handleMouseDown: function(props, event) {
	
	        if (props.disabled){
	            return
	        }
	
	        this.setState({
	            active: true
	        })
	
	        window.addEventListener('mouseup', this.handleMouseUp)
	
	        ;(this.props.onMouseDown || emptyFn)(event)
	        ;(this.props.onActivate || emptyFn)(event)
	    },
	
	    prepareTheme: function(props){
	        var theme  = props.theme
	        var THEMES = props.themes = props.themes || this.constructor.theme || THEME
	
	        if (typeof theme == 'string'){
	            theme = THEMES[theme]?
	                        THEMES[theme]:
	                        null
	        }
	
	        return theme == null?
	                THEMES.default:
	                theme
	    },
	
	    prepareChildren: function(props) {
	        var children = props.children
	
	        if (props.label){
	
	            var labelProps = assign({}, props.defaultLabelProps, props.labelProps)
	            var defaultLabelStyle = assign({}, props.defaultLabelStyle)
	
	            if (props.ellipsis){
	                assign(defaultLabelStyle, props.ellipsisLabelStyle)
	            }
	
	            var labelStyle = assign({}, defaultLabelStyle, labelProps.style, props.labelStyle)
	
	            labelProps.style = labelStyle
	
	            children = React.createElement("span", React.__spread({},  labelProps), 
	                props.label
	            )
	        }
	
	        if (typeof this.props.renderChildren === 'function'){
	            return this.props.renderChildren(children)
	        }
	
	        return children
	    },
	
	    prepareClassName: function(props) {
	
	        var className = props.className || ''
	
	        if (props.disabled){
	            if (props.disabledClassName){
	                className += ' ' + props.disabledClassName
	            }
	        } else {
	            if (props.active && props.activeClassName){
	                className += ' ' + props.activeClassName
	            }
	
	            if (props.pressed && props.pressedClassName){
	                className += ' ' + props.pressedClassName
	            }
	
	            if (props.over && props.overClassName){
	                className += ' ' + props.overClassName
	            }
	
	            if (props.focused && props.focusedClassName){
	                className += ' ' + props.focusedClassName
	            }
	        }
	
	        return className
	    },
	
	    prepareComputedStyleNames: function(props){
	
	        if (typeof props.computeStyleNames == 'function'){
	            return props.computeStyleNames(props)
	        }
	
	        var names = ['style']
	
	        if (props.disabled){
	            names.push('disabledStyle')
	
	            return names
	        }
	
	        if (props.focused){
	            names.push('focusedStyle')
	        }
	        if (props.pressed){
	            names.push('pressedStyle')
	        }
	
	        if (typeof props.addStateStyle == 'function'){
	            props.addStateStyle(names)
	        }
	
	        if (props.focused && props.pressed){
	            names.push('focusedPressedStyle')
	        }
	
	        if (typeof props.addCombinedStateStyle == 'function'){
	            props.addCombinedStateStyle(names)
	        }
	
	        //names is something like ['style','focusedStyle','pressedStyle', 'focusedPressedStyle']
	        //
	        //now we add over and active styles
	
	        var overNames
	        if (props.over){
	            overNames = names.map(function(name){
	                return 'over' + toUpperFirst(name)
	            })
	        }
	
	        var activeNames
	        if (props.active){
	            activeNames = names.map(function(name){
	                return 'active' + toUpperFirst(name)
	            })
	        }
	
	        overNames   && names.push.apply(names, overNames)
	        activeNames && names.push.apply(names, activeNames)
	
	        return names
	    },
	
	    prepareStyle: function(props) {
	
	        var style = assign({}, this.prepareDefaultStyle(props))
	
	        var styleNames = this.prepareComputedStyleNames(props)
	        var theme      = props.theme
	        var THEMES     = props.themes
	
	        if (theme){
	            //apply default theme first
	            if (props.applyDefaultTheme && THEMES.default && theme != THEMES.default){
	                styleNames.forEach(function(styleName){
	                    assign(style, THEMES.default[styleName])
	                })
	            }
	
	            //then apply theme
	            styleNames.forEach(function(styleName){
	                assign(style, theme[styleName])
	            })
	        }
	
	        ;(props.onThemeStyleReady || emptyFn)(style, props)
	
	        //TODO apply default non-theme first to typed buttons
	        //then non-theme
	        styleNames.forEach(function(styleName){
	            assign(style, props[styleName])
	        })
	
	        ;(props.onStyleReady || emptyFn)(style, props)
	
	        return normalize(style)
	    },
	
	    prepareDefaultStyle: function(props){
	        var defaultStyle = assign({}, props.defaultStyle)
	
	        if (props.block){
	            defaultStyle.display = 'flex'
	        }
	
	        defaultStyle.justifyContent = ALIGN(props.align)
	
	        if (props.disabled){
	            assign(defaultStyle, props.defaultDisabledStyle)
	        }
	
	        return defaultStyle
	    }
	})
	
	ReactButton.themes = THEME
	
	module.exports = ReactButton

/***/ },
/* 291 */
/*!*************************************************!*\
  !*** ./~/react-button/~/object-assign/index.js ***!
  \*************************************************/
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 292 */
/*!***********************************************!*\
  !*** ./~/react-style-normalizer/src/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hasOwn      = __webpack_require__(/*! ./hasOwn */ 293)
	var getPrefixed = __webpack_require__(/*! ./getPrefixed */ 294)
	
	var map      = __webpack_require__(/*! ./map */ 300)
	var plugable = __webpack_require__(/*! ./plugable */ 301)
	
	function plugins(key, value){
	
		var result = {
			key  : key,
			value: value
		}
	
		;(RESULT.plugins || []).forEach(function(fn){
	
			var tmp = map(function(res){
				return fn(key, value, res)
			}, result)
	
			if (tmp){
				result = tmp
			}
		})
	
		return result
	}
	
	function normalize(key, value){
	
		var result = plugins(key, value)
	
		return map(function(result){
			return {
				key  : getPrefixed(result.key, result.value),
				value: result.value
			}
		}, result)
	
		return result
	}
	
	var RESULT = function(style){
	
		var k
		var item
		var result = {}
	
		for (k in style) if (hasOwn(style, k)){
			item = normalize(k, style[k])
	
			if (!item){
				continue
			}
	
			map(function(item){
				result[item.key] = item.value
			}, item)
		}
	
		return result
	}
	
	module.exports = plugable(RESULT)

/***/ },
/* 293 */
/*!************************************************!*\
  !*** ./~/react-style-normalizer/src/hasOwn.js ***!
  \************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(obj, prop){
		return Object.prototype.hasOwnProperty.call(obj, prop)
	}


/***/ },
/* 294 */
/*!*****************************************************!*\
  !*** ./~/react-style-normalizer/src/getPrefixed.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getStylePrefixed = __webpack_require__(/*! ./getStylePrefixed */ 295)
	var properties       = __webpack_require__(/*! ./prefixProps */ 299)
	
	module.exports = function(key, value){
	
		if (!properties[key]){
			return key
		}
	
		return getStylePrefixed(key, value)
	}

/***/ },
/* 295 */
/*!**********************************************************!*\
  !*** ./~/react-style-normalizer/src/getStylePrefixed.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toUpperFirst = __webpack_require__(/*! ./toUpperFirst */ 296)
	var getPrefix    = __webpack_require__(/*! ./getPrefix */ 297)
	var el           = __webpack_require__(/*! ./el */ 298)
	
	var MEMORY = {}
	var STYLE
	var ELEMENT
	
	var PREFIX
	
	module.exports = function(key, value){
	
	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   || ELEMENT.style
	
	    var k = key// + ': ' + value
	
	    if (MEMORY[k]){
	        return MEMORY[k]
	    }
	
	    var prefix
	    var prefixed
	
	    if (!(key in STYLE)){//we have to prefix
	
	        // if (PREFIX){
	        //     prefix = PREFIX
	        // } else {
	            prefix = getPrefix('appearance')
	
	        //     if (prefix){
	        //         prefix = PREFIX = prefix.toLowerCase()
	        //     }
	        // }
	
	        if (prefix){
	            prefixed = prefix + toUpperFirst(key)
	
	            if (prefixed in STYLE){
	                key = prefixed
	            }
	        }
	    }
	
	    MEMORY[k] = key
	
	    return key
	}

/***/ },
/* 296 */
/*!******************************************************!*\
  !*** ./~/react-style-normalizer/src/toUpperFirst.js ***!
  \******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(str){
		return str?
				str.charAt(0).toUpperCase() + str.slice(1):
				''
	}

/***/ },
/* 297 */
/*!***************************************************!*\
  !*** ./~/react-style-normalizer/src/getPrefix.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toUpperFirst = __webpack_require__(/*! ./toUpperFirst */ 296)
	var prefixes     = ["ms", "Moz", "Webkit", "O"]
	
	var el = __webpack_require__(/*! ./el */ 298)
	
	var ELEMENT
	var PREFIX
	
	module.exports = function(key){
	
		if (PREFIX !== undefined){
			return PREFIX
		}
	
		ELEMENT = ELEMENT || el()
	
		var i = 0
		var len = prefixes.length
		var tmp
		var prefix
	
		for (; i < len; i++){
			prefix = prefixes[i]
			tmp = prefix + toUpperFirst(key)
	
			if (typeof ELEMENT.style[tmp] != 'undefined'){
				return PREFIX = prefix
			}
		}
	
		return PREFIX
	}

/***/ },
/* 298 */
/*!********************************************!*\
  !*** ./~/react-style-normalizer/src/el.js ***!
  \********************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var el
	
	module.exports = function(){
	
		if(!el && !!global.document){
		  	el = global.document.createElement('div')
		}
	
		if (!el){
			el = {style: {}}
		}
	
		return el
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 299 */
/*!*****************************************************!*\
  !*** ./~/react-style-normalizer/src/prefixProps.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  'alignItems': 1,
	  'justifyContent': 1,
	  'flex': 1,
	  'flexFlow': 1,
	  'flexGrow': 1,
	  'flexShrink': 1,
	  'flexBasis': 1,
	  'flexDirection': 1,
	  'flexWrap': 1,
	  'alignContent': 1,
	  'alignSelf': 1,
	
	  'userSelect': 1,
	  'transform': 1,
	  'transition': 1,
	  'transformOrigin': 1,
	  'transformStyle': 1,
	  'transitionProperty': 1,
	  'transitionDuration': 1,
	  'transitionTimingFunction': 1,
	  'transitionDelay': 1,
	  'borderImage': 1,
	  'borderImageSlice': 1,
	  'boxShadow': 1,
	  'backgroundClip': 1,
	  'backfaceVisibility': 1,
	  'perspective': 1,
	  'perspectiveOrigin': 1,
	  'animation': 1,
	  'animationDuration': 1,
	  'animationName': 1,
	  'animationDelay': 1,
	  'animationDirection': 1,
	  'animationIterationCount': 1,
	  'animationTimingFunction': 1,
	  'animationPlayState': 1,
	  'animationFillMode': 1,
	  'appearance': 1
	}


/***/ },
/* 300 */
/*!*********************************************!*\
  !*** ./~/react-style-normalizer/src/map.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(fn, item){
	
		if (!item){
			return
		}
	
		if (Array.isArray(item)){
			return item.map(fn).filter(function(x){
				return !!x
			})
		} else {
			return fn(item)
		}
	}

/***/ },
/* 301 */
/*!**************************************************!*\
  !*** ./~/react-style-normalizer/src/plugable.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getCssPrefixedValue = __webpack_require__(/*! ./getCssPrefixedValue */ 302)
	
	module.exports = function(target){
		target.plugins = target.plugins || [
			(function(){
				var values = {
					'flex':1,
					'inline-flex':1
				}
	
				return function(key, value){
					if (key === 'display' && value in values){
						return {
							key  : key,
							value: getCssPrefixedValue(key, value, true)
						}
					}
				}
			})()
		]
	
		target.plugin = function(fn){
			target.plugins = target.plugins || []
	
			target.plugins.push(fn)
		}
	
		return target
	}

/***/ },
/* 302 */
/*!*************************************************************!*\
  !*** ./~/react-style-normalizer/src/getCssPrefixedValue.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getPrefix     = __webpack_require__(/*! ./getPrefix */ 297)
	var forcePrefixed = __webpack_require__(/*! ./forcePrefixed */ 303)
	var el            = __webpack_require__(/*! ./el */ 298)
	
	var MEMORY = {}
	var STYLE
	var ELEMENT
	
	module.exports = function(key, value, force){
	
	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   ||  ELEMENT.style
	
	    var k = key + ': ' + value
	
	    if (MEMORY[k]){
	        return MEMORY[k]
	    }
	
	    var prefix
	    var prefixed
	    var prefixedValue
	
	    if (force || !(key in STYLE)){
	
	        prefix = getPrefix('appearance')
	
	        if (prefix){
	            prefixed = forcePrefixed(key, value)
	
	            prefixedValue = '-' + prefix.toLowerCase() + '-' + value
	
	            if (prefixed in STYLE){
	                ELEMENT.style[prefixed] = ''
	                ELEMENT.style[prefixed] = prefixedValue
	
	                if (ELEMENT.style[prefixed] !== ''){
	                    value = prefixedValue
	                }
	            }
	        }
	    }
	
	    MEMORY[k] = value
	
	    return value
	}

/***/ },
/* 303 */
/*!*******************************************************!*\
  !*** ./~/react-style-normalizer/src/forcePrefixed.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toUpperFirst = __webpack_require__(/*! ./toUpperFirst */ 296)
	var getPrefix    = __webpack_require__(/*! ./getPrefix */ 297)
	var properties   = __webpack_require__(/*! ./prefixProps */ 299)
	
	/**
	 * Returns the given key prefixed, if the property is found in the prefixProps map.
	 *
	 * Does not test if the property supports the given value unprefixed.
	 * If you need this, use './getPrefixed' instead
	 */
	module.exports = function(key, value){
	
		if (!properties[key]){
			return key
		}
	
		var prefix = getPrefix(key)
	
		return prefix?
					prefix + toUpperFirst(key):
					key
	}

/***/ },
/* 304 */
/*!**********************************************!*\
  !*** ./app/shared/buttons/submit.button.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _submitButton = __webpack_require__(/*! ./submit.button.css */ 305);
	
	var _submitButton2 = _interopRequireDefault(_submitButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SubmitButton = function (_React$Component) {
	    _inherits(SubmitButton, _React$Component);
	
	    function SubmitButton(props) {
	        _classCallCheck(this, SubmitButton);
	
	        var _this = _possibleConstructorReturn(this, (SubmitButton.__proto__ || Object.getPrototypeOf(SubmitButton)).call(this, props));
	
	        _this.inProgressBtn = {
	            background: 'url(/images/spin-alt.gif) no-repeat 50% 50%',
	            backgroundSize: '2vw',
	            backgroundColor: _this.props.buttonColor
	        };
	
	        _this.defaultCss = {
	            background: _this.props.buttonColor
	        };
	
	        _this.state = {};
	        return _this;
	    }
	
	    _createClass(SubmitButton, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            e.preventDefault();
	            this.props.onButtonClick(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _React$createElement;
	
	            var buttonBackground = this.props.buttonState == 'inProgress' ? this.inProgressBtn : this.defaultCss;
	            var isButtonDisabled = this.props.buttonState == 'inProgress';
	            var buttonValue = this.props.buttonState == 'inProgress' ? '' : this.props.buttonValue;
	            return _react2.default.createElement('input', (_React$createElement = { type: 'submit',
	                className: _submitButton2.default.buttonSize,
	                style: buttonBackground,
	                disabled: isButtonDisabled,
	                onClick: this.handleClick.bind(this)
	            }, _defineProperty(_React$createElement, 'className', 'loginButton loginButtonSize'), _defineProperty(_React$createElement, 'value', buttonValue), _React$createElement));
	        }
	    }, {
	        key: 'mergeObjects',
	        value: function mergeObjects(obj1, obj2) {
	            var obj3 = {};
	            for (var attrname in obj1) {
	                obj3[attrname] = obj1[attrname];
	            }
	            for (var _attrname in obj2) {
	                obj3[_attrname] = obj2[_attrname];
	            }
	            return obj3;
	        }
	    }]);
	
	    return SubmitButton;
	}(_react2.default.Component);
	
	exports.default = SubmitButton;

/***/ },
/* 305 */
/*!**********************************************!*\
  !*** ./app/shared/buttons/submit.button.css ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\r\n    .submit-button__buttonSize___3nnTS {\r\n        height: 3em;\r\n        margin-top: 1em;\r\n        font-size: 2.5em;\r\n        letter-spacing: 1px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 5in) and (max-device-width: 13in) {\r\n    .submit-button__buttonSize___3nnTS {\r\n        height: 40px;\r\n        margin-top: 25px;\r\n        font-size: 14px;\r\n        letter-spacing: 1px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 13in) {\r\n    .submit-button__buttonSize___3nnTS {\r\n        height: 40px;\r\n        width: 200px;\r\n        margin-top: 25px;\r\n        font-size: 13px;\r\n        letter-spacing: 1px;\r\n\r\n    }\r\n}", ""]);
	
	// exports
	exports.locals = {
		"buttonSize": "submit-button__buttonSize___3nnTS"
	};

/***/ },
/* 306 */
/*!**************************************************!*\
  !*** ./app/shared/modals/login/signup.modal.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _signupModal = __webpack_require__(/*! ./signup.modal.css */ 307);
	
	var _signupModal2 = _interopRequireDefault(_signupModal);
	
	var _loginSignupModal = __webpack_require__(/*! ./login.signup.modal.css */ 281);
	
	var _loginSignupModal2 = _interopRequireDefault(_loginSignupModal);
	
	var _userService = __webpack_require__(/*! ../../../services/user.service.jsx */ 284);
	
	var _userService2 = _interopRequireDefault(_userService);
	
	var _inputValidatorService = __webpack_require__(/*! ../../../services/input.validator.service.jsx */ 287);
	
	var _inputValidatorService2 = _interopRequireDefault(_inputValidatorService);
	
	var _submitButton = __webpack_require__(/*! ../../../shared/buttons/submit.button.jsx */ 304);
	
	var _submitButton2 = _interopRequireDefault(_submitButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SignupModal = function (_React$Component) {
	    _inherits(SignupModal, _React$Component);
	
	    function SignupModal(props) {
	        _classCallCheck(this, SignupModal);
	
	        var _this = _possibleConstructorReturn(this, (SignupModal.__proto__ || Object.getPrototypeOf(SignupModal)).call(this, props));
	
	        _this.state = {
	            userName: '',
	            emailId: '',
	            password: '',
	            errorMessage: '',
	            signUpButtonState: 'enabled'
	        };
	        return _this;
	    }
	
	    _createClass(SignupModal, [{
	        key: 'handleNameChange',
	        value: function handleNameChange(event) {
	            this.setState({ userName: event.target.value.trim() });
	        }
	    }, {
	        key: 'handleEmailIdChange',
	        value: function handleEmailIdChange(event) {
	            this.setState({ emailId: event.target.value.trim() });
	        }
	    }, {
	        key: 'handlePasswordChange',
	        value: function handlePasswordChange(event) {
	            this.setState({ password: event.target.value.trim() });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'doSignup',
	        value: function doSignup(e) {
	            e.preventDefault();
	            if (this.validateInput()) {
	                this._doSignup();
	            }
	        }
	    }, {
	        key: 'validateInput',
	        value: function validateInput() {
	
	            if (!_inputValidatorService2.default.validateOnlyText(this.state.userName, 2, 50)) {
	                this.setState({ errorMessage: 'Please enter a valid name' });
	                return false;
	            }
	
	            if (!_inputValidatorService2.default.validateEmail(this.state.emailId)) {
	                this.setState({ errorMessage: 'Please enter valid Email Id' });
	                return false;
	            }
	
	            if (!_inputValidatorService2.default.validatePassword(this.state.password)) {
	                this.setState({ errorMessage: 'Password should be at least 6 characters' });
	                return false;
	            }
	
	            return true;
	        }
	    }, {
	        key: '_doSignup',
	        value: function _doSignup() {
	            var _this2 = this;
	
	            this.setState({ signUpButtonState: 'inProgress' });
	            _userService2.default.newRegistration(this.state.userName, this.state.emailId, this.state.password).then(function (res) {
	                if (res.data['response'] == true) {
	                    window.location.href = '';
	                } else {
	                    _this2.setState({
	                        errorMessage: 'You are already registered, try logging in',
	                        signUpButtonState: 'enabled'
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'changeToLoginModal',
	        value: function changeToLoginModal() {
	            this.props.changeModal();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var signupButtonValue = this.state.signupButtonDisabled ? 'Joining...' : 'Join us';
	            var isModalChangeVisible = this.props.isSingleModal ? _react2.default.createElement(
	                'div',
	                { className: _signupModal2.default.notYetRegistered },
	                _react2.default.createElement(
	                    'a',
	                    { onClick: this.changeToLoginModal.bind(this) },
	                    'Sign in'
	                )
	            ) : "";
	            return _react2.default.createElement(
	                'div',
	                { className: _signupModal2.default.signupContainer + " " + _signupModal2.default.signupContainerSize },
	                _react2.default.createElement(
	                    'form',
	                    null,
	                    _react2.default.createElement(
	                        'h1',
	                        { className: _loginSignupModal2.default.headingName },
	                        'Signup here'
	                    ),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement('input', { type: 'textbox', className: 'inputTextBox inputTextBoxSize',
	                        onChange: this.handleNameChange.bind(this),
	                        placeholder: 'Name' }),
	                    _react2.default.createElement('input', { type: 'textbox', className: 'inputTextBox inputTextBoxSize',
	                        onChange: this.handleEmailIdChange.bind(this),
	                        placeholder: 'Email' }),
	                    _react2.default.createElement('input', { type: 'password', className: 'inputTextBox inputTextBoxSize',
	                        onChange: this.handlePasswordChange.bind(this),
	                        placeholder: 'Password' }),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'error-message' },
	                        this.state.errorMessage
	                    ),
	                    _react2.default.createElement(_submitButton2.default, {
	                        onButtonClick: this.doSignup.bind(this),
	                        buttonValue: 'Join us',
	                        buttonColor: submitButtonBackground,
	                        buttonHoverColor: submitButtonHoverBackground,
	                        buttonState: this.state.signUpButtonState })
	                ),
	                isModalChangeVisible
	            );
	        }
	    }]);
	
	    return SignupModal;
	}(_react2.default.Component);
	
	exports.default = SignupModal;

/***/ },
/* 307 */
/*!**************************************************!*\
  !*** ./app/shared/modals/login/signup.modal.css ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\r\n    .signup-modal__signupContainerSize___3d-Ty {\r\n        width: 100%;\r\n    }\r\n\r\n    .signup-modal__notYetRegistered___7lmu9 {\r\n        font-size: 2em;\r\n        margin-top: 2em;\r\n        text-align: center;\r\n    }\r\n\r\n    .signup-modal__errorMessage___mg5TH {\r\n        color: #ff0000;\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 5in) and (max-device-width: 13in) {\r\n    .signup-modal__signupContainerSize___3d-Ty {\r\n        width: 350px;\r\n    }\r\n\r\n    .signup-modal__notYetRegistered___7lmu9 {\r\n        font-size: 14px;\r\n        margin-top: 20px;\r\n        text-align: center;\r\n    }\r\n\r\n    .signup-modal__errorMessage___mg5TH {\r\n        color: #ff0000;\r\n        font-size: 1em;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 13in) {\r\n    .signup-modal__signupContainerSize___3d-Ty {\r\n        width: 350px;\r\n        padding: 20px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .signup-modal__notYetRegistered___7lmu9 {\r\n        font-size: 13px;\r\n        margin-top: 20px;\r\n        text-align: center;\r\n    }\r\n\r\n    .signup-modal__errorMessage___mg5TH {\r\n        color: #ff0000;\r\n        font-size: 12px;\r\n    }\r\n\r\n}\r\n\r\n.signup-modal__signupContainer___FDqxf {\r\n    padding: 20px;\r\n    position: inherit;\r\n    display: table-cell;\r\n}\r\n\r\n.signup-modal__signupContainer___FDqxf h1 {\r\n}\r\n\r\n.signup-modal__notYetRegistered___7lmu9 a {\r\n    cursor: pointer;\r\n    color: #0000ff;;\r\n    text-decoration: underline;\r\n}", ""]);
	
	// exports
	exports.locals = {
		"signupContainerSize": "signup-modal__signupContainerSize___3d-Ty",
		"notYetRegistered": "signup-modal__notYetRegistered___7lmu9",
		"errorMessage": "signup-modal__errorMessage___mg5TH",
		"signupContainer": "signup-modal__signupContainer___FDqxf"
	};

/***/ },
/* 308 */
/*!***********************************************************!*\
  !*** ./app/shared/modals/newsletter/newsletter.modal.jsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _reactModal = __webpack_require__(/*! react-modal */ 266);
	
	var _reactModal2 = _interopRequireDefault(_reactModal);
	
	var _newsletterModal = __webpack_require__(/*! ./newsletter.modal.css */ 309);
	
	var _newsletterModal2 = _interopRequireDefault(_newsletterModal);
	
	var _submitButton = __webpack_require__(/*! ../../../shared/buttons/submit.button.jsx */ 304);
	
	var _submitButton2 = _interopRequireDefault(_submitButton);
	
	var _inputValidatorService = __webpack_require__(/*! ../../../services/input.validator.service.jsx */ 287);
	
	var _inputValidatorService2 = _interopRequireDefault(_inputValidatorService);
	
	var _userService = __webpack_require__(/*! ../../../services/user.service.jsx */ 284);
	
	var _userService2 = _interopRequireDefault(_userService);
	
	var _cookieGuy = __webpack_require__(/*! ../../../services/cookie.guy.jsx */ 310);
	
	var _cookieGuy2 = _interopRequireDefault(_cookieGuy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewsletterModal = function (_React$Component) {
	    _inherits(NewsletterModal, _React$Component);
	
	    function NewsletterModal(props) {
	        _classCallCheck(this, NewsletterModal);
	
	        var _this = _possibleConstructorReturn(this, (NewsletterModal.__proto__ || Object.getPrototypeOf(NewsletterModal)).call(this, props));
	
	        _this.userSubscribedCookieName = '_usfn';
	        _this.promotionAmount = '';
	        _this.state = {
	            emailId: '',
	            buttonState: 'enabled',
	            isModalVisible: true,
	            errorMessage: '',
	            succeedMessage: '',
	            successFulSubscription: false,
	            isVisible: false
	        };
	        return _this;
	    }
	
	    _createClass(NewsletterModal, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var that = this;
	            if (!isUserLoggedIn && !_cookieGuy2.default.getCookie(this.userSubscribedCookieName)) {
	                setTimeout(function () {
	                    that.setState({ isVisible: true });
	                }, 4000, this);
	            }
	
	            if (visitorCountry == 'US') {
	                this.promotionAmount = '$10';
	            } else {
	                this.promotionAmount = 'RS 500';
	            }
	        }
	    }, {
	        key: 'handleEmailIdChange',
	        value: function handleEmailIdChange(e) {
	            this.setState({ emailId: e.target.value });
	        }
	    }, {
	        key: 'closeModal',
	        value: function closeModal() {
	            this.setState({ isModalVisible: false });
	            _cookieGuy2.default.setCookie(this.userSubscribedCookieName, 'true', {});
	        }
	    }, {
	        key: 'doSubmit',
	        value: function doSubmit(e) {
	            e.preventDefault();
	            if (_inputValidatorService2.default.validateEmail(this.state.emailId)) {
	                this._doSubmit();
	            } else {
	                this.setState({ errorMessage: 'Please enter a valid email id' });
	            }
	        }
	    }, {
	        key: '_doSubmit',
	        value: function _doSubmit() {
	            var _this2 = this;
	
	            this.setState({ buttonState: 'inProgress', errorMessage: '' });
	            _userService2.default.newsletterSignup(this.state.emailId).then(function (res) {
	                if (res.data.response == true) {
	                    _this2.setState({ succeedMessage: 'Thanks for the subscription', successFulSubscription: true });
	                    _cookieGuy2.default.setCookieForOneYear(_this2.userSubscribedCookieName, 'true');
	                } else {
	                    _this2.setState({ buttonState: 'enabled', errorMessage: 'Something went wrong' });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.state.isVisible ? _react2.default.createElement(
	                _reactModal2.default,
	                {
	                    isOpen: this.state.isModalVisible,
	                    overlayClassName: _newsletterModal2.default.modalOverlay,
	                    contentLabel: 'newsletter',
	                    className: _newsletterModal2.default.newsletterContainer },
	                _react2.default.createElement(
	                    'div',
	                    { className: _newsletterModal2.default.newsletterContent },
	                    _react2.default.createElement(
	                        'div',
	                        { className: "hide-in-desktop " + _newsletterModal2.default.newsLetterLeftContainer },
	                        _react2.default.createElement(
	                            'h2',
	                            { className: _newsletterModal2.default.mainHeading },
	                            'WIN ',
	                            this.promotionAmount
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Subscribe to our newsletter and get a chance to win Amazon gift card of worth ',
	                            this.promotionAmount,
	                            '. ',
	                            _react2.default.createElement(
	                                'a',
	                                { href: '/terms#newsletter', target: '_blank' },
	                                'T&C'
	                            )
	                        ),
	                        _react2.default.createElement('img', { src: '/images/right-arrow-icon.png', alt: 'right arrow' }),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            'a',
	                            { onClick: this.closeModal.bind(this) },
	                            'NO THANKS'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _newsletterModal2.default.newsLetterRightContainer },
	                        _react2.default.createElement(
	                            'h2',
	                            { className: _newsletterModal2.default.mainHeading },
	                            'SUBSCRIBE'
	                        ),
	                        _react2.default.createElement('img', { src: '/images/mail_grey.png', alt: 'mail grey' }),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            'form',
	                            null,
	                            _react2.default.createElement('input', { className: 'inputTextBox inputTextBoxSize',
	                                type: 'textbox',
	                                onChange: this.handleEmailIdChange.bind(this),
	                                placeholder: 'Enter your email' }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'error-message' },
	                                this.state.errorMessage
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'succeed-message' },
	                                this.state.succeedMessage
	                            ),
	                            this.state.successFulSubscription ? _react2.default.createElement(_submitButton2.default, {
	                                onButtonClick: this.closeModal.bind(this),
	                                buttonValue: 'Close',
	                                buttonColor: submitButtonBackground,
	                                buttonHoverColor: submitButtonHoverBackground,
	                                buttonState: 'enabled' }) : _react2.default.createElement(_submitButton2.default, {
	                                onButtonClick: this.doSubmit.bind(this),
	                                buttonValue: 'Submit',
	                                buttonColor: submitButtonBackground,
	                                buttonHoverColor: submitButtonHoverBackground,
	                                buttonState: this.state.buttonState }),
	                            _react2.default.createElement(
	                                'a',
	                                { className: 'hide-in-mobile', onClick: this.closeModal.bind(this) },
	                                'NO THANKS'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'h2',
	                        { className: 'hide-me' },
	                        'Top 10 gadgets to buy online'
	                    )
	                )
	            ) : _react2.default.createElement('div', null);
	        }
	    }]);
	
	    return NewsletterModal;
	}(_react2.default.Component);
	
	exports.default = NewsletterModal;

/***/ },
/* 309 */
/*!***********************************************************!*\
  !*** ./app/shared/modals/newsletter/newsletter.modal.css ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\r\n    .newsletter-modal__newsletterContainer___30c0c {\r\n        left: 0;\r\n        right: 0;\r\n        top: 10%;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterLeftContainer___rJ8fD {\r\n        width: 100%;\r\n        padding: 40px;\r\n        position: relative;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterRightContainer___2-a5e {\r\n        width: 100%;\r\n        padding: 40px;\r\n        position: relative;\r\n    }\r\n\r\n    .newsletter-modal__mainHeading___SMdSY {\r\n        font-size: 45px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterLeftContainer___rJ8fD p {\r\n        font-size: 20px;\r\n        line-height: 20px;\r\n        margin-top: 20px;\r\n        letter-spacing: 1px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterLeftContainer___rJ8fD img {\r\n        margin-top: 20px;\r\n        width: 65px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterRightContainer___2-a5e a {\r\n        margin-top: 30px;\r\n        display: block;\r\n        cursor: pointer;\r\n        text-decoration: underline;\r\n        font-size: 30px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterRightContainer___2-a5e img {\r\n        margin-top: 20px;\r\n        width: 75px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterRightContainer___2-a5e input {\r\n        text-align: center;\r\n        margin-top: 20px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 5in) {\r\n    .newsletter-modal__newsletterContainer___30c0c {\r\n        left: 50%;\r\n        top: 20%;\r\n    }\r\n\r\n    .newsletter-modal__newsletterContent___1vGBA{\r\n        position: relative;\r\n        margin-left: -50%;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterLeftContainer___rJ8fD {\r\n        width: 300px;\r\n        padding: 20px;\r\n        display: table-cell;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterRightContainer___2-a5e {\r\n        width: 300px;\r\n        padding: 20px;\r\n        display: table-cell;\r\n    }\r\n\r\n    .newsletter-modal__mainHeading___SMdSY {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterLeftContainer___rJ8fD p {\r\n        font-size: 13px;\r\n        line-height: 20px;\r\n        margin-top: 20px;\r\n        letter-spacing: 0.7px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterLeftContainer___rJ8fD img {\r\n        margin-top: 20px;\r\n        width: 65px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterLeftContainer___rJ8fD a {\r\n        margin-top: 20px;\r\n        display: block;\r\n        cursor: pointer;\r\n        text-decoration: underline;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterRightContainer___2-a5e img {\r\n        margin-top: 20px;\r\n        width: 75px;\r\n    }\r\n\r\n    .newsletter-modal__newsLetterRightContainer___2-a5e input {\r\n        text-align: center;\r\n        margin-top: 20px;\r\n    }\r\n\r\n}\r\n\r\n.newsletter-modal__newsletterContainer___30c0c {\r\n    position: fixed;\r\n    display: table-row;\r\n    text-align: center;\r\n    color: #444;\r\n}\r\n\r\n.newsletter-modal__modalOverlay___1EQ4g {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    align-items: center;\r\n    justify-content: center;\r\n    -webkit-transition: background-color 600ms;\r\n    -moz-transition: background-color 600ms;\r\n    -ms-transition: display 600ms;\r\n    -o-transition: display 600ms;\r\n    transition: background-color 600ms;\r\n}\r\n\r\n.newsletter-modal__newsLetterLeftContainer___rJ8fD {\r\n    position: relative;\r\n    background: #ff5858;\r\n    text-align: center;\r\n    color: #f7f7f7;\r\n}\r\n\r\n.newsletter-modal__newsLetterRightContainer___2-a5e {\r\n    background: #f7f7f7;\r\n    text-align: center;\r\n    color: #b8b8b8;\r\n}\r\n\r\n.newsletter-modal__successFulSubscription___3p9Av {\r\n    padding: 20px;\r\n    text-align: center;\r\n    height: 300px;\r\n\r\n}\r\n\r\n*:focus {\r\n    outline: none;\r\n}", ""]);
	
	// exports
	exports.locals = {
		"newsletterContainer": "newsletter-modal__newsletterContainer___30c0c",
		"newsLetterLeftContainer": "newsletter-modal__newsLetterLeftContainer___rJ8fD",
		"newsLetterRightContainer": "newsletter-modal__newsLetterRightContainer___2-a5e",
		"mainHeading": "newsletter-modal__mainHeading___SMdSY",
		"newsletterContent": "newsletter-modal__newsletterContent___1vGBA",
		"modalOverlay": "newsletter-modal__modalOverlay___1EQ4g",
		"successFulSubscription": "newsletter-modal__successFulSubscription___3p9Av"
	};

/***/ },
/* 310 */
/*!*************************************!*\
  !*** ./app/services/cookie.guy.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactCookie = __webpack_require__(/*! react-cookie */ 311);
	
	var _reactCookie2 = _interopRequireDefault(_reactCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CookieGuy = function () {
	    function CookieGuy() {
	        _classCallCheck(this, CookieGuy);
	    }
	
	    _createClass(CookieGuy, [{
	        key: 'setCookieForOneYear',
	        value: function setCookieForOneYear(name, value) {
	            var targetDate = new Date();
	            targetDate.setDate(targetDate.getDate() + 365);
	            var options = {
	                path: '/',
	                expires: targetDate
	            };
	            this.setCookie(name, value, options);
	        }
	    }, {
	        key: 'setCookie',
	        value: function setCookie(name, value, options) {
	            _reactCookie2.default.save(name, value, options);
	        }
	    }, {
	        key: 'getCookie',
	        value: function getCookie(name) {
	            if (!navigator.cookieEnabled) {
	                /// if cookies are enabled on browser set return true
	                return true;
	            }
	            return _reactCookie2.default.load(name);
	        }
	    }, {
	        key: 'isCookieEnabled',
	        value: function isCookieEnabled() {
	            return navigator.cookieEnabled;
	        }
	    }]);
	
	    return CookieGuy;
	}();
	
	exports.default = new CookieGuy();

/***/ },
/* 311 */
/*!****************************************!*\
  !*** ./~/react-cookie/build/cookie.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.load = load;
	exports.select = select;
	exports.save = save;
	exports.remove = remove;
	exports.setRawCookie = setRawCookie;
	exports.plugToRequest = plugToRequest;
	
	var _cookie = __webpack_require__(/*! cookie */ 312);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _objectAssign = __webpack_require__(/*! object-assign */ 4);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IS_NODE = typeof document === 'undefined' || process && process.env && process.env.NODE_ENV === 'test';
	var _rawCookie = {};
	var _res = undefined;
	
	function _isResWritable() {
	  return _res && !_res.headersSent;
	}
	
	function load(name, doNotParse) {
	  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
	  var cookieVal = cookies && cookies[name];
	
	  if (typeof doNotParse === 'undefined') {
	    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
	  }
	
	  if (!doNotParse) {
	    try {
	      cookieVal = JSON.parse(cookieVal);
	    } catch (e) {
	      // Not serialized object
	    }
	  }
	
	  return cookieVal;
	}
	
	function select(regex) {
	  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
	
	  if (!cookies) {
	    return {};
	  }
	
	  if (!regex) {
	    return cookies;
	  }
	
	  return Object.keys(cookies).reduce(function (accumulator, name) {
	    if (!regex.test(name)) {
	      return accumulator;
	    }
	
	    var newCookie = {};
	    newCookie[name] = cookies[name];
	    return (0, _objectAssign2.default)({}, accumulator, newCookie);
	  }, {});
	}
	
	function save(name, val, opt) {
	  _rawCookie[name] = val;
	
	  // allow you to work with cookies as objects.
	  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	    _rawCookie[name] = JSON.stringify(val);
	  }
	
	  // Cookies only work in the browser
	  if (!IS_NODE) {
	    document.cookie = _cookie2.default.serialize(name, _rawCookie[name], opt);
	  }
	
	  if (_isResWritable() && _res.cookie) {
	    _res.cookie(name, val, opt);
	  }
	}
	
	function remove(name, opt) {
	  delete _rawCookie[name];
	
	  if (typeof opt === 'undefined') {
	    opt = {};
	  } else if (typeof opt === 'string') {
	    // Will be deprecated in future versions
	    opt = { path: opt };
	  } else {
	    // Prevent mutation of opt below
	    opt = (0, _objectAssign2.default)({}, opt);
	  }
	
	  if (typeof document !== 'undefined') {
	    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
	    opt.maxAge = 0;
	    document.cookie = _cookie2.default.serialize(name, '', opt);
	  }
	
	  if (_isResWritable() && _res.clearCookie) {
	    _res.clearCookie(name, opt);
	  }
	}
	
	function setRawCookie(rawCookie) {
	  if (rawCookie) {
	    _rawCookie = _cookie2.default.parse(rawCookie);
	  } else {
	    _rawCookie = {};
	  }
	}
	
	function plugToRequest(req, res) {
	  if (req.cookie) {
	    _rawCookie = req.cookie;
	  } else if (req.cookies) {
	    _rawCookie = req.cookies;
	  } else if (req.headers && req.headers.cookie) {
	    setRawCookie(req.headers.cookie);
	  } else {
	    _rawCookie = {};
	  }
	
	  _res = res;
	
	  return function unplug() {
	    _res = null;
	    _rawCookie = {};
	  };
	}
	
	exports.default = {
	  setRawCookie: setRawCookie,
	  load: load,
	  select: select,
	  save: save,
	  remove: remove,
	  plugToRequest: plugToRequest
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 3)))

/***/ },
/* 312 */
/*!***************************!*\
  !*** ./~/cookie/index.js ***!
  \***************************/
/***/ function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	'use strict';
	
	/**
	 * Module exports.
	 * @public
	 */
	
	exports.parse = parse;
	exports.serialize = serialize;
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	var pairSplitRegExp = /; */;
	
	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */
	
	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
	
	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */
	
	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }
	
	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(pairSplitRegExp);
	  var dec = opt.decode || decode;
	
	  for (var i = 0; i < pairs.length; i++) {
	    var pair = pairs[i];
	    var eq_idx = pair.indexOf('=');
	
	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      continue;
	    }
	
	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();
	
	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }
	
	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  }
	
	  return obj;
	}
	
	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */
	
	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;
	
	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }
	
	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }
	
	  var value = enc(val);
	
	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }
	
	  var str = name + '=' + value;
	
	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    str += '; Max-Age=' + Math.floor(maxAge);
	  }
	
	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }
	
	    str += '; Domain=' + opt.domain;
	  }
	
	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }
	
	    str += '; Path=' + opt.path;
	  }
	
	  if (opt.expires) {
	    if (typeof opt.expires.toUTCString !== 'function') {
	      throw new TypeError('option expires is invalid');
	    }
	
	    str += '; Expires=' + opt.expires.toUTCString();
	  }
	
	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }
	
	  if (opt.secure) {
	    str += '; Secure';
	  }
	
	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;
	
	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }
	
	  return str;
	}
	
	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */
	
	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ },
/* 313 */
/*!******************************************!*\
  !*** ./app/services/gadgets.service.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _baseSerivce = __webpack_require__(/*! ./base.serivce.jsx */ 285);
	
	var _baseSerivce2 = _interopRequireDefault(_baseSerivce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GadgetsService = function () {
	    function GadgetsService() {
	        _classCallCheck(this, GadgetsService);
	    }
	
	    _createClass(GadgetsService, [{
	        key: 'getAllGadgets',
	        value: function getAllGadgets(offset, limit) {
	            var url = _baseSerivce2.default.baseUrl + '/latest-gadgets';
	            var params = {
	                offset: offset,
	                limit: limit
	            };
	            return _baseSerivce2.default.getDataWithQueryParams(url, params);
	        }
	    }, {
	        key: 'getAllCategories',
	        value: function getAllCategories() {
	            var url = _baseSerivce2.default.baseUrl + '/categories';
	            return _baseSerivce2.default.getData(url);
	        }
	    }, {
	        key: 'getTop10Gadgets',
	        value: function getTop10Gadgets() {
	            var url = _baseSerivce2.default.baseUrl + '/gadgets/top10';
	            return _baseSerivce2.default.getData(url);
	        }
	    }, {
	        key: 'getTopGadgetsByView',
	        value: function getTopGadgetsByView(limit) {
	            var url = _baseSerivce2.default.baseUrl + '/gadgets/gadgets-by-view';
	            var params = {
	                limit: limit
	            };
	            return _baseSerivce2.default.getDataWithQueryParams(url, params);
	        }
	    }, {
	        key: 'getTopStoriesByView',
	        value: function getTopStoriesByView(limit) {
	            var url = _baseSerivce2.default.baseUrl + '/stories/stories-by-view';
	            var params = {
	                limit: limit
	            };
	            return _baseSerivce2.default.getDataWithQueryParams(url, params);
	        }
	    }, {
	        key: 'getLatestStoriesByRange',
	        value: function getLatestStoriesByRange(offset, limit) {
	            var url = _baseSerivce2.default.baseUrl + '/stories/stories-by-range';
	            var params = {
	                offset: offset,
	                limit: limit
	            };
	            return _baseSerivce2.default.getDataWithQueryParams(url, params);
	        }
	    }, {
	        key: 'getLatestReview',
	        value: function getLatestReview(limit) {
	            var url = _baseSerivce2.default.baseUrl + '/review/gadget-review';
	            var params = {
	                limit: limit
	            };
	            return _baseSerivce2.default.getDataWithQueryParams(url, params);
	        }
	    }, {
	        key: 'getCategoryBasedData',
	        value: function getCategoryBasedData(categoryId, offset, limit) {
	            var url = _baseSerivce2.default.baseUrl + '/gadgets/category';
	            var params = {
	                categoryId: categoryId,
	                offset: offset,
	                limit: limit
	            };
	            return _baseSerivce2.default.getDataWithQueryParams(url, params);
	        }
	    }, {
	        key: 'saveLikeOnProduct',
	        value: function saveLikeOnProduct(data) {
	            var url = _baseSerivce2.default.baseUrl + '/like-product';
	            return _baseSerivce2.default.postData(url, data);
	        }
	    }, {
	        key: 'getGadgetInfo',
	        value: function getGadgetInfo(productName) {
	            var url = _baseSerivce2.default.baseUrl + '/gadget/' + productName;
	            return _baseSerivce2.default.getData(url);
	        }
	    }, {
	        key: 'getSearchItems',
	        value: function getSearchItems(productName) {
	            var url = _baseSerivce2.default.baseUrl + '/stories/search';
	            var queryParams = {
	                productName: productName
	            };
	            return _baseSerivce2.default.getDataWithQueryParams(url, queryParams);
	        }
	    }]);
	
	    return GadgetsService;
	}();
	
	exports.default = new GadgetsService();

/***/ },
/* 314 */
/*!***********************************************!*\
  !*** ./app/services/social.share.service.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseSerivce = __webpack_require__(/*! ./base.serivce.jsx */ 285);
	
	var _baseSerivce2 = _interopRequireDefault(_baseSerivce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SocialShareService = function () {
	    function SocialShareService() {
	        _classCallCheck(this, SocialShareService);
	    }
	
	    _createClass(SocialShareService, [{
	        key: 'shareOnFacebook',
	        value: function shareOnFacebook(title, description, targetUrl, imageUrl) {
	            FB.ui({
	                method: 'share',
	                title: title,
	                description: description,
	                href: _baseSerivce2.default.fullHostName + targetUrl,
	                picture: _baseSerivce2.default.fullHostName + imageUrl
	            }, function (response) {});
	        }
	    }, {
	        key: 'shareOnGooglePlus',
	        value: function shareOnGooglePlus(targetUrl, name) {
	            window.open('https://plus.google.com/share?description=HelloDescription&title=asfhasf&url=' + (_baseSerivce2.default.fullHostName + targetUrl) + '&prefilltext=' + name, 'MsgWindow', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	        }
	    }, {
	        key: 'shareOnTwitter',
	        value: function shareOnTwitter(targetUrl, name) {
	            window.open('https://twitter.com/share?url=' + (_baseSerivce2.default.fullHostName + targetUrl) + '&text=' + name, 'MsgWindow', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	        }
	    }, {
	        key: 'shareOnPintrest',
	        value: function shareOnPintrest(targetUrl, name) {
	            window.open('https://www.pinterest.com/pin/create/button/', 'MsgWindow', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	        }
	    }, {
	        key: 'shareOnWhatsapp',
	        value: function shareOnWhatsapp(targetUrl, name) {
	            window.open('whatsapp://send?text=Found ' + name + ' very interesting gadget on ' + (_baseSerivce2.default.fullHostName + targetUrl), 'MsgWindow', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	        }
	    }]);
	
	    return SocialShareService;
	}();
	
	exports.default = new SocialShareService();

/***/ },
/* 315 */
/*!************************************!*\
  !*** ./app/gadgets/AllGadgets.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _GadgetCard = __webpack_require__(/*! ./GadgetCard.jsx */ 264);
	
	var _GadgetCard2 = _interopRequireDefault(_GadgetCard);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _LoadingSpinner = __webpack_require__(/*! ../shared/LoadingSpinner.jsx */ 207);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _gadgetsService = __webpack_require__(/*! ../services/gadgets.service.jsx */ 313);
	
	var _gadgetsService2 = _interopRequireDefault(_gadgetsService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var gadgets = [];
	
	var AllGadgets = function (_React$Component) {
	    _inherits(AllGadgets, _React$Component);
	
	    function AllGadgets(props) {
	        _classCallCheck(this, AllGadgets);
	
	        var _this = _possibleConstructorReturn(this, (AllGadgets.__proto__ || Object.getPrototypeOf(AllGadgets)).call(this, props));
	
	        _this.state = {
	            gadgets: []
	        };
	        return _this;
	    }
	
	    _createClass(AllGadgets, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setState({ gadgets: this.props.feeds });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'full-width' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-width' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'gadgets-container masonry gadgets-column-size' },
	                            _react2.default.createElement(
	                                'ul',
	                                { className: 'gadget-card-grid' },
	                                this.state.gadgets.map(function (gadget) {
	                                    return _react2.default.createElement(
	                                        'li',
	                                        { key: gadget.id,
	                                            className: 'gadget-card-box gadget-card-box-size' },
	                                        _react2.default.createElement(_GadgetCard2.default, _extends({ name: gadget.NAME,
	                                            imageUrl: gadget.IMAGE_URL,
	                                            isLiked: gadget.IS_LIKED,
	                                            likes: gadget.LIKES,
	                                            productId: gadget.PRODUCT_ID,
	                                            description: gadget.DESCRIPTION
	                                        }, _this2.props))
	                                    );
	                                })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement('div', { className: 'clear-both-side' })
	                )
	            );
	        }
	    }]);
	
	    return AllGadgets;
	}(_react2.default.Component);
	
	exports.default = AllGadgets;

/***/ },
/* 316 */
/*!***************************************!*\
  !*** ./app/shared/header/header2.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _header = __webpack_require__(/*! ./header2.css */ 317);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _header3 = __webpack_require__(/*! ../../shared/header/header.jsx */ 318);
	
	var _header4 = _interopRequireDefault(_header3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderBackground = function (_React$Component) {
	    _inherits(HeaderBackground, _React$Component);
	
	    function HeaderBackground(props) {
	        _classCallCheck(this, HeaderBackground);
	
	        var _this = _possibleConstructorReturn(this, (HeaderBackground.__proto__ || Object.getPrototypeOf(HeaderBackground)).call(this, props));
	
	        _this.state = {};
	        return _this;
	    }
	
	    _createClass(HeaderBackground, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'openMobileMenuContent',
	        value: function openMobileMenuContent() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: "full-width " + _header2.default.headerBackgroundContainer },
	                    _react2.default.createElement(_header4.default, { backgroundColor: 'none' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _header2.default.bgTextContainer },
	                        _react2.default.createElement(
	                            'h1',
	                            null,
	                            'COOL GADGETS'
	                        ),
	                        _react2.default.createElement(
	                            'h2',
	                            null,
	                            'Why not make life simpler with these cool gadgets'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return HeaderBackground;
	}(_react2.default.Component);
	
	exports.default = HeaderBackground;

/***/ },
/* 317 */
/*!***************************************!*\
  !*** ./app/shared/header/header2.css ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\r\n    .header2__headerBackgroundContainer___2C2_S {\r\n        height: 50em;\r\n    }\r\n\r\n    .header2__bgTextContainer___138Ad {\r\n        width: 100%;\r\n        margin-top: 16%;\r\n        position: absolute;\r\n    }\r\n\r\n    .header2__bgTextContainer___138Ad h1 {\r\n        font-size: 60px;\r\n        font-family: 'Advent Pro', sans-serif;\r\n    }\r\n\r\n    .header2__bgTextContainer___138Ad h2 {\r\n        font-size: 30px;\r\n        margin-top: 15px;\r\n        letter-spacing: 2px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 5in) and (max-device-width: 13in) {\r\n    .header2__headerBackgroundContainer___2C2_S {\r\n        height: 500px;\r\n    }\r\n\r\n    .header2__bgTextContainer___138Ad {\r\n        width: 100%;\r\n        margin-top: 15%;\r\n        position: absolute;\r\n    }\r\n\r\n    .header2__bgTextContainer___138Ad h1 {\r\n        font-size: 45px;\r\n        font-family: 'Advent Pro', sans-serif;\r\n    }\r\n\r\n    .header2__bgTextContainer___138Ad h2 {\r\n        font-size: 20px;\r\n        margin-top: 15px;\r\n        letter-spacing: 1px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 13in) {\r\n    .header2__headerBackgroundContainer___2C2_S {\r\n        height: 600px;\r\n    }\r\n\r\n    .header2__bgTextContainer___138Ad {\r\n        width: 100%;\r\n        margin-top: 14%;\r\n        position: absolute;\r\n    }\r\n\r\n    .header2__bgTextContainer___138Ad h1 {\r\n        font-size: 45px;\r\n        font-family: 'Advent Pro', sans-serif;\r\n        letter-spacing: 4px;\r\n    }\r\n\r\n    .header2__bgTextContainer___138Ad h2 {\r\n        font-size: 20px;\r\n        letter-spacing: 1px;\r\n        margin-top: 15px;\r\n    }\r\n\r\n}\r\n\r\n.header2__bgTextContainer___138Ad {\r\n    text-align: center;\r\n    color: #fafafa;\r\n    text-shadow: 0 0 1px #aaa;\r\n    font-weight: 300;\r\n}\r\n\r\n.header2__headerBackgroundContainer___2C2_S {\r\n    background: url(\"/images/bg3.jpg\") 50% 50% no-repeat;\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"headerBackgroundContainer": "header2__headerBackgroundContainer___2C2_S",
		"bgTextContainer": "header2__bgTextContainer___138Ad"
	};

/***/ },
/* 318 */
/*!**************************************!*\
  !*** ./app/shared/header/header.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 208);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _LoadingSpinner = __webpack_require__(/*! ../LoadingSpinner.jsx */ 207);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _header = __webpack_require__(/*! ./header.css */ 319);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _userService = __webpack_require__(/*! ../../services/user.service.jsx */ 284);
	
	var _userService2 = _interopRequireDefault(_userService);
	
	var _popupModal = __webpack_require__(/*! ../modals/popup.modal.jsx */ 265);
	
	var _popupModal2 = _interopRequireDefault(_popupModal);
	
	var _categoriesComponent = __webpack_require__(/*! ./categories.component.jsx */ 320);
	
	var _categoriesComponent2 = _interopRequireDefault(_categoriesComponent);
	
	var _mobileCategoriesComponent = __webpack_require__(/*! ./mobile.categories.component.jsx */ 321);
	
	var _mobileCategoriesComponent2 = _interopRequireDefault(_mobileCategoriesComponent);
	
	var _gadgetsService = __webpack_require__(/*! ../../services/gadgets.service.jsx */ 313);
	
	var _gadgetsService2 = _interopRequireDefault(_gadgetsService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header(props) {
	        _classCallCheck(this, Header);
	
	        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	
	        _this.state = {
	            user: {},
	            isLoginModalOn: false,
	            mobileMenuContentCss: 'display-none',
	            allCategories: []
	        };
	
	        _this.obj = {
	            name: 'prabhat',
	            age: 20,
	            fnc: function fnc() {
	                this.lovely = "helldfl";
	            }
	        };
	        return _this;
	    }
	
	    _createClass(Header, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            _gadgetsService2.default.getAllCategories().then(function (resp) {
	                _this2.setState({ allCategories: resp.data });
	            });
	        }
	    }, {
	        key: 'hideModal',
	        value: function hideModal() {
	            this.setState({ isLoginModalOn: false });
	        }
	    }, {
	        key: 'showModal',
	        value: function showModal() {
	            this.setState({ isLoginModalOn: true });
	        }
	    }, {
	        key: 'openMobileMenuContent',
	        value: function openMobileMenuContent() {
	            this.setState({ mobileMenuContentCss: this.state.mobileMenuContentCss == 'display-none' ? 'display-block' : 'display-none' });
	        }
	    }, {
	        key: 'doLogout',
	        value: function doLogout() {
	            _userService2.default.doLogout().then(function (res) {
	                if (res.data['response'] == true) {
	                    window.location.href = '';
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var deskTopLoginButton = isUserLoggedIn ? _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'a',
	                    null,
	                    'Hi ',
	                    userName,
	                    ' '
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _header2.default.desktopLoginMenuContainer },
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        _react2.default.createElement(
	                            'li',
	                            { onClick: this.doLogout.bind(this) },
	                            'Logout'
	                        )
	                    )
	                )
	            ) : _react2.default.createElement(
	                'a',
	                { onClick: this.showModal.bind(this) },
	                'LOGIN'
	            );
	            var mobileMenu = !isUserLoggedIn ? _react2.default.createElement(
	                'ul',
	                null,
	                _react2.default.createElement(
	                    'li',
	                    { onClick: this.showModal.bind(this) },
	                    _react2.default.createElement(
	                        'a',
	                        null,
	                        'Login'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: '/top10' },
	                        'Top 10'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    { className: _header2.default.categoryButton },
	                    _react2.default.createElement(
	                        'a',
	                        null,
	                        'Categories',
	                        _react2.default.createElement('img', { src: '/images/downarrow.png',
	                            alt: 'down arrow' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(_mobileCategoriesComponent2.default, { allCategories: this.state.allCategories })
	                )
	            ) : _react2.default.createElement(
	                'ul',
	                null,
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: '/top10' },
	                        'Top 10'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    { className: _header2.default.categoryButton },
	                    _react2.default.createElement(
	                        'a',
	                        null,
	                        'Categories',
	                        _react2.default.createElement('img', { width: '10', src: '/images/downarrow.png',
	                            alt: 'down arrow' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(_mobileCategoriesComponent2.default, { allCategories: this.state.allCategories })
	                ),
	                _react2.default.createElement(
	                    'li',
	                    { onClick: this.doLogout.bind(this) },
	                    _react2.default.createElement(
	                        'a',
	                        null,
	                        'Logout'
	                    )
	                )
	            );
	
	            var loginModal = this.state.isLoginModalOn ? _react2.default.createElement(_popupModal2.default, { hideModal: this.hideModal.bind(this), modalType: 'login-signup' }) : "";
	
	            var backGroundColor = {
	                background: this.props.backgroundColor
	            };
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: "full-width " + _header2.default.headerContainer + " " + _header2.default.headerContainerSize,
	                        style: backGroundColor },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'page-width' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: _header2.default.logoContainer + " " + _header2.default.logoContainerSize },
	                            _react2.default.createElement(
	                                'a',
	                                { href: '/' },
	                                'Gadget'
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '/' },
	                                'Clues'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _header2.default.headerMenuItems },
	                            _react2.default.createElement(
	                                'a',
	                                { className: _header2.default.categoryButton },
	                                'Categories',
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: _header2.default.categoriesContainer },
	                                    _react2.default.createElement(_categoriesComponent2.default, { allCategories: this.state.allCategories })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '/top10' },
	                                'Top 10'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _header2.default.loginContainer + " text-truncate" },
	                            deskTopLoginButton,
	                            _react2.default.createElement('img', { onClick: this.openMobileMenuContent.bind(this), src: '/img/cd-icon-menu.svg',
	                                alt: 'menu icon' }),
	                            _react2.default.createElement(
	                                'div',
	                                { className: _header2.default.mobileMenuContainer + " " + this.state.mobileMenuContentCss },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: _header2.default.mobileMenuContent + " page-width" },
	                                    mobileMenu
	                                )
	                            )
	                        )
	                    ),
	                    loginModal
	                )
	            );
	        }
	    }]);
	
	    return Header;
	}(_react2.default.Component);
	
	exports.default = Header;

/***/ },
/* 319 */
/*!**************************************!*\
  !*** ./app/shared/header/header.css ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\r\n    .header__headerContainerSize___WB1R6 {\r\n        height: 9em;\r\n        line-height: 9em;\r\n    }\r\n\r\n    .header__logoContainerSize___Bvkm9 {\r\n        font-size: 4em;\r\n    }\r\n\r\n    .header__loginContainer____6k59 a {\r\n        display: none;\r\n    }\r\n\r\n    .header__loginContainer____6k59 img {\r\n        display: inline-block;\r\n    }\r\n\r\n    .header__mobileMenuContent___1gnAF li {\r\n        font-size: 2.5em;\r\n    }\r\n\r\n    .header__headerMenuItems___2L45N {\r\n        display: none;\r\n    }\r\n\r\n    .header__categoriesContainer___3j5Eu {\r\n        border-radius: 5px;\r\n        position: absolute;\r\n        background: #fff;\r\n        padding: 12px 10px;\r\n        z-index: 2;\r\n        box-shadow: 1px 0 2px #333;\r\n\r\n        transition: 0s 180s;\r\n        -webkit-transition: 0s 180s;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 5in) and (max-device-width: 13in) {\r\n    .header__headerContainerSize___WB1R6 {\r\n        height: 7em;\r\n        line-height: 7em;\r\n    }\r\n\r\n    .header__logoContainerSize___Bvkm9 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .header__loginContainer____6k59 img {\r\n        display: none;\r\n    }\r\n\r\n    .header__mobileMenuContainer___3hC4l {\r\n        display: none;\r\n    }\r\n\r\n    .header__loginContainer____6k59 {\r\n        width: 150px;\r\n        text-align: right;\r\n    }\r\n\r\n    .header__loginContainer____6k59:hover {\r\n        -webkit-transition: background 700ms;\r\n        -moz-transition: background 700ms;\r\n        -ms-transition: background 700ms;\r\n        -o-transition: background 700ms;\r\n        transition: background 700ms;\r\n    }\r\n\r\n    .header__desktopLoginMenuContainer___2wiG8 {\r\n        margin-left: -50px;\r\n    }\r\n\r\n    .header__loginContainer____6k59:hover .header__desktopLoginMenuContainer___2wiG8 {\r\n        display: block;\r\n    }\r\n\r\n    .header__categoriesContainer___3j5Eu::before {\r\n        background-image: url(/images/upper_arrow.png);\r\n        background-position: 50% center;\r\n        background-repeat: no-repeat;\r\n        background-size: auto 15px;\r\n        top: -15px;\r\n        content: \"\";\r\n        display: block;\r\n        height: 15px;\r\n        left: 32%;\r\n        margin-left: -15px;\r\n        position: absolute;\r\n        width: 30px;\r\n    }\r\n\r\n    .header__categoriesContainer___3j5Eu {\r\n        border-radius: 5px;\r\n        display: none;\r\n        position: absolute;\r\n        background: #fff;\r\n        padding: 12px 10px;\r\n        z-index: 2;\r\n        box-shadow: 0 0 3px #333;\r\n        transition: 0s 180s;\r\n        -webkit-transition: 0s 180s;\r\n    }\r\n}\r\n\r\n@media only screen and (min-device-width: 13in) {\r\n    .header__headerContainerSize___WB1R6 {\r\n        height: 80px;\r\n        line-height: 80px;\r\n    }\r\n\r\n    .header__logoContainerSize___Bvkm9 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .header__loginContainer____6k59 img {\r\n        display: none;\r\n    }\r\n\r\n    .header__mobileMenuContainer___3hC4l {\r\n        display: none;\r\n    }\r\n\r\n    .header__loginContainer____6k59 {\r\n        width: 150px;\r\n        text-align: right;\r\n    }\r\n\r\n    .header__loginContainer____6k59:hover {\r\n        -webkit-transition: background 700ms;\r\n        -moz-transition: background 700ms;\r\n        -ms-transition: background 700ms;\r\n        -o-transition: background 700ms;\r\n        transition: background 700ms;\r\n    }\r\n\r\n    .header__desktopLoginMenuContainer___2wiG8 {\r\n        margin-left: -50px;\r\n    }\r\n\r\n    .header__loginContainer____6k59:hover .header__desktopLoginMenuContainer___2wiG8 {\r\n        display: block;\r\n    }\r\n\r\n    .header__categoriesContainer___3j5Eu::before {\r\n        background-image: url(/images/upper_arrow.png);\r\n        background-position: 50% center;\r\n        background-repeat: no-repeat;\r\n        background-size: auto 15px;\r\n        top: -15px;\r\n        content: \"\";\r\n        display: block;\r\n        height: 15px;\r\n        left: 32%;\r\n        margin-left: -15px;\r\n        position: absolute;\r\n        width: 30px;\r\n    }\r\n\r\n    .header__categoriesContainer___3j5Eu {\r\n        border-radius: 5px;\r\n        display: none;\r\n        position: absolute;\r\n        background: #fff;\r\n        padding: 12px 10px;\r\n        z-index: 2;\r\n        box-shadow: 0 0 3px #333;\r\n        transition: 0s 180s;\r\n        -webkit-transition: 0s 180s;\r\n    }\r\n}\r\n\r\n.header__headerContainer___MqkpH {\r\n    width: 100%;\r\n    position: relative;\r\n    //background : #ff5858;\r\n}\r\n\r\n.header__logoContainer___3bxfI {\r\n    position: relative;\r\n    float: left;\r\n    font-family: 'Advent Pro', sans-serif;\r\n}\r\n\r\n.header__logoContainer___3bxfI a {\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.header__loginContainer____6k59 {\r\n    float: right;\r\n}\r\n\r\n.header__loginContainer____6k59 a {\r\n/ / padding : 0 15 px;\r\n    cursor: pointer;\r\n    letter-spacing: 1px;\r\n    color: #fff;\r\n}\r\n\r\n.header__loginContainer____6k59 img {\r\n    vertical-align: middle;\r\n    width: 7em;\r\n}\r\n\r\n.header__headerMenuItems___2L45N {\r\n    float: left;\r\n    margin-left: 2rem;\r\n}\r\n\r\n.header__headerMenuItems___2L45N a {\r\n    margin-left: 15px;\r\n    padding: 33px 0 33px 0;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n}\r\n\r\n.header__mobileMenuContainer___3hC4l {\r\n    position: absolute;\r\n    background-color: #fff;\r\n    top: 9em;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    z-index: 3;\r\n    box-shadow: 1px 1px 1em #555;\r\n    -webkit-transition: height 800ms;\r\n    -moz-transition: height 800ms;\r\n    -ms-transition: height 800ms;\r\n    -o-transition: height 800ms;\r\n    transition: height 800ms;\r\n\r\n}\r\n\r\n.header__headerMenuItems___2L45N a:hover {\r\n/ / border-bottom : 3 px solid #eee;\r\n}\r\n\r\n.header__mobileMenuContent___1gnAF li {\r\n    padding: 0 20px;\r\n/ / border-bottom : 2 px solid #ddd;\r\n}\r\n\r\n.header__mobileMenuContent___1gnAF li a {\r\n    padding: 0 20px;\r\n    border-bottom: 2px solid #ddd;\r\n    display: block;\r\n    color: #444;\r\n    border: 0;\r\n}\r\n\r\n.header__desktopLoginMenuContainer___2wiG8::before {\r\n    background-image: url(/images/upper_arrow.png);\r\n    background-position: 50% center;\r\n    background-repeat: no-repeat;\r\n    background-size: auto 15px;\r\n    top: -15px;\r\n    content: \"\";\r\n    display: block;\r\n    height: 15px;\r\n    left: 82%;\r\n    margin-left: -15px;\r\n    position: absolute;\r\n    width: 30px;\r\n}\r\n\r\n.header__desktopLoginMenuContainer___2wiG8 {\r\n    position: absolute;\r\n    width: 200px;\r\n    background-color: #fff;\r\n    z-index: 4;\r\n    display: none;\r\n    box-shadow: 0 0 3px #321;\r\n    text-align: right;\r\n    border-radius: 4px;\r\n    padding: 10px 10px;\r\n    color: #99a;\r\n}\r\n\r\n.header__desktopLoginMenuContainer___2wiG8 li {\r\n    padding: 0 10px;\r\n    cursor: pointer;\r\n    line-height: 35px;\r\n}\r\n\r\n.header__desktopLoginMenuContainer___2wiG8 li:hover {\r\n    background: #dfefef;\r\n}\r\n\r\n.header__categoryButton___2PVdJ:hover .header__categoriesContainer___3j5Eu {\r\n    display: block;\r\n    transition: 0s;\r\n    -webkit-transition: 0s;\r\n}\r\n\r\n.header__categoryButton___2PVdJ img {\r\n    width: 1em;\r\n}\r\n\r\n.header__categoriesContent___33g70 {\r\n    position: relative;\r\n    text-align: left;\r\n}\r\n\r\n.header__categoriesContent___33g70::before {\r\n    margin-top: 5px;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 50px solid transparent;\r\n    border-right: 50px solid transparent;\r\n    border-bottom: 100px solid red;\r\n}\r\n\r\n.header__categoriesContent___33g70 li {\r\n    padding: 5px 10px;\r\n    height: auto;\r\n    line-height: 18px;\r\n    text-align: left;\r\n}\r\n\r\n.header__categoriesContent___33g70 li:hover {\r\n    background: #dfefef;\r\n}\r\n\r\n.header__categoriesContent___33g70 a {\r\n    color: #99a;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    padding: 0;\r\n    margin-left: 0;\r\n    text-transform: capitalize;\r\n    font-family: \"AvenirLTStd-Heavy\", \"Arial\", sans-serif;\r\n    border: 0;\r\n}\r\n\r\n.header__categoriesContent___33g70 a:hover {\r\n/ / font-weight : bold;\r\n    border: 0;\r\n}\r\n\r\n.header__mobileCategories___EH4oy {\r\n\r\n}", ""]);
	
	// exports
	exports.locals = {
		"headerContainerSize": "header__headerContainerSize___WB1R6",
		"logoContainerSize": "header__logoContainerSize___Bvkm9",
		"loginContainer": "header__loginContainer____6k59",
		"mobileMenuContent": "header__mobileMenuContent___1gnAF",
		"headerMenuItems": "header__headerMenuItems___2L45N",
		"categoriesContainer": "header__categoriesContainer___3j5Eu",
		"mobileMenuContainer": "header__mobileMenuContainer___3hC4l",
		"desktopLoginMenuContainer": "header__desktopLoginMenuContainer___2wiG8",
		"headerContainer": "header__headerContainer___MqkpH",
		"logoContainer": "header__logoContainer___3bxfI",
		"categoryButton": "header__categoryButton___2PVdJ",
		"categoriesContent": "header__categoriesContent___33g70",
		"mobileCategories": "header__mobileCategories___EH4oy"
	};

/***/ },
/* 320 */
/*!****************************************************!*\
  !*** ./app/shared/header/categories.component.jsx ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _header = __webpack_require__(/*! ./header.css */ 319);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderCategories = function (_React$Component) {
	    _inherits(HeaderCategories, _React$Component);
	
	    function HeaderCategories(props) {
	        _classCallCheck(this, HeaderCategories);
	
	        return _possibleConstructorReturn(this, (HeaderCategories.__proto__ || Object.getPrototypeOf(HeaderCategories)).call(this, props));
	    }
	
	    _createClass(HeaderCategories, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: _header2.default.categoriesContent },
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        this.props.allCategories.map(function (category) {
	                            return _react2.default.createElement(
	                                'li',
	                                { key: category },
	                                _react2.default.createElement(
	                                    'a',
	                                    {
	                                        href: "/category/" + category.replace(/\s+/g, '-') },
	                                    category
	                                )
	                            );
	                        })
	                    )
	                ),
	                _react2.default.createElement('img', { className: 'hide-me', src: '/images/upper_arrow.png', alt: 'upper arrow' })
	            );
	        }
	    }]);
	
	    return HeaderCategories;
	}(_react2.default.Component);
	
	exports.default = HeaderCategories;

/***/ },
/* 321 */
/*!***********************************************************!*\
  !*** ./app/shared/header/mobile.categories.component.jsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _header = __webpack_require__(/*! ./header.css */ 319);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MobileHeaderCategories = function (_React$Component) {
	    _inherits(MobileHeaderCategories, _React$Component);
	
	    function MobileHeaderCategories(props) {
	        _classCallCheck(this, MobileHeaderCategories);
	
	        return _possibleConstructorReturn(this, (MobileHeaderCategories.__proto__ || Object.getPrototypeOf(MobileHeaderCategories)).call(this, props));
	    }
	
	    _createClass(MobileHeaderCategories, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    this.props.allCategories.map(function (category) {
	                        return _react2.default.createElement(
	                            'li',
	                            { key: category },
	                            _react2.default.createElement(
	                                'a',
	                                {
	                                    href: "/category/" + category.replace(/\s+/g, '-') },
	                                ' \xA0\xA0\xA0\xA0',
	                                category
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }]);
	
	    return MobileHeaderCategories;
	}(_react2.default.Component);
	
	exports.default = MobileHeaderCategories;

/***/ },
/* 322 */
/*!****************************************!*\
  !*** ./app/gadgets/gadgets.module.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _storyTilesComponent = __webpack_require__(/*! ../home/story/story.tiles.component.jsx */ 323);
	
	var _storyTilesComponent2 = _interopRequireDefault(_storyTilesComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GadgetsModule = function (_React$Component) {
	    _inherits(GadgetsModule, _React$Component);
	
	    function GadgetsModule(props) {
	        _classCallCheck(this, GadgetsModule);
	
	        return _possibleConstructorReturn(this, (GadgetsModule.__proto__ || Object.getPrototypeOf(GadgetsModule)).call(this, props));
	    }
	
	    _createClass(GadgetsModule, [{
	        key: 'hideModal',
	        value: function hideModal() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_storyTilesComponent2.default, null)
	            );
	        }
	    }]);
	
	    return GadgetsModule;
	}(_react2.default.Component);
	
	exports.default = GadgetsModule;

/***/ },
/* 323 */
/*!**************************************************!*\
  !*** ./app/home/story/story.tiles.component.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _storyTilesComponent = __webpack_require__(/*! ./story.tiles.component.scss */ 324);
	
	var _storyTilesComponent2 = _interopRequireDefault(_storyTilesComponent);
	
	var _storyTile = __webpack_require__(/*! ../../tiles/story/story.tile.jsx */ 327);
	
	var _storyTile2 = _interopRequireDefault(_storyTile);
	
	var _gadgetsService = __webpack_require__(/*! ../../services/gadgets.service.jsx */ 313);
	
	var _gadgetsService2 = _interopRequireDefault(_gadgetsService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StoryTileComponent = function (_React$Component) {
	    _inherits(StoryTileComponent, _React$Component);
	
	    function StoryTileComponent(props) {
	        _classCallCheck(this, StoryTileComponent);
	
	        var _this = _possibleConstructorReturn(this, (StoryTileComponent.__proto__ || Object.getPrototypeOf(StoryTileComponent)).call(this, props));
	
	        _this.offset = 0;
	        _this.state = {
	            storyTiles: [],
	            loadMoreText: "Load More"
	        };
	        _this.canLoadMore = true;
	
	        return _this;
	    }
	
	    _createClass(StoryTileComponent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadData();
	        }
	    }, {
	        key: 'loadData',
	        value: function loadData() {
	            var _this2 = this;
	
	            if (!this.canLoadMore) {
	                return;
	            }
	
	            this.setState({ loadMoreText: "Loading.." });
	
	            var limit = 10;
	            _gadgetsService2.default.getLatestStoriesByRange(this.offset, limit).then(function (resp) {
	                var data = resp.data;
	                if (data.length > 0) {
	                    var newData = _this2.state.storyTiles.concat(data);
	                    _this2.setState({ storyTiles: newData });
	                    _this2.offset += limit;
	                } else {
	                    _this2.canLoadMore = false;
	                }
	                _this2.setState({ loadMoreText: "Load More" });
	            });
	        }
	    }, {
	        key: 'loadMoreStories',
	        value: function loadMoreStories(e) {
	            e.preventDefault();
	            this.loadData();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'story-tiles-component' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'story-tiles-component-heading' },
	                    _react2.default.createElement(
	                        'h2',
	                        null,
	                        'Latest Stories'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'story-tiles-grid' },
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        this.state.storyTiles.map(function (story) {
	                            return _react2.default.createElement(
	                                'li',
	                                { key: story.NAME },
	                                _react2.default.createElement(_storyTile2.default, {
	                                    imageUrl: story.IMAGE_URL,
	                                    name: story.NAME,
	                                    type: story.TYPE,
	                                    description: story.DESCRIPTION })
	                            );
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'gadget-load-more-button' },
	                    _react2.default.createElement(
	                        'a',
	                        { onClick: this.loadMoreStories.bind(this) },
	                        this.state.loadMoreText
	                    )
	                )
	            );
	        }
	    }]);
	
	    return StoryTileComponent;
	}(_react2.default.Component);
	
	exports.default = StoryTileComponent;

/***/ },
/* 324 */
/*!***************************************************!*\
  !*** ./app/home/story/story.tiles.component.scss ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./story.tiles.component.scss */ 325);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./story.tiles.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./story.tiles.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 325 */
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/home/story/story.tiles.component.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n.story-tiles-component {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px; }\n\n.story-tiles-grid li {\n  margin-top: 10px;\n  border-bottom: 1px dashed #bbb; }\n\n.story-tiles-grid ul li:last-child {\n  border-bottom: 0; }\n\n.story-tiles-component-heading {\n  width: 100%;\n  font-family: \"PT Sans\", sans-serif;\n  padding: 5px 0;\n  font-size: 28px; }\n\n.load-more-button {\n  width: 100%;\n  text-align: center; }\n\n.load-more-button a {\n  text-decoration: underline;\n  font-size: 18px;\n  padding: 15px 0; }\n", ""]);
	
	// exports


/***/ },
/* 326 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 327 */
/*!****************************************!*\
  !*** ./app/tiles/story/story.tile.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _storyTile = __webpack_require__(/*! ./story.tile.scss */ 328);
	
	var _storyTile2 = _interopRequireDefault(_storyTile);
	
	var _socialButtonsGray = __webpack_require__(/*! ./../../shared/social/gray/social.buttons.gray.jsx */ 330);
	
	var _socialButtonsGray2 = _interopRequireDefault(_socialButtonsGray);
	
	var _socialShareService = __webpack_require__(/*! ../../services/social.share.service.jsx */ 314);
	
	var _socialShareService2 = _interopRequireDefault(_socialShareService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StoryTile = function (_React$Component) {
	    _inherits(StoryTile, _React$Component);
	
	    function StoryTile(props) {
	        _classCallCheck(this, StoryTile);
	
	        var _this = _possibleConstructorReturn(this, (StoryTile.__proto__ || Object.getPrototypeOf(StoryTile)).call(this, props));
	
	        _this.state = { productUrl: '' };
	        return _this;
	    }
	
	    _createClass(StoryTile, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var productName = this.props.name.trim();
	            productName = productName.replace(/ /g, "-");
	            this.setState({ productUrl: '/' + this.props.type.toLowerCase() + '/' + productName });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var productImageStyle = {
	                background: 'url(' + this.props.imageUrl + ') no-repeat 50% 50%', backgroundSize: 'cover'
	            };
	            return _react2.default.createElement(
	                'div',
	                { className: 'story-tile' },
	                _react2.default.createElement(
	                    'a',
	                    { href: this.state.productUrl },
	                    _react2.default.createElement('div', { style: productImageStyle, className: 'story-tile-image' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'story-tile-description-data' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'story-tile-name' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: this.state.productUrl },
	                            this.props.name
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'story-tile-description' },
	                        this.props.description
	                    ),
	                    _react2.default.createElement(_socialButtonsGray2.default, _extends({}, this.props, { productUrl: this.state.productUrl }))
	                ),
	                _react2.default.createElement('div', { className: 'clear-both-side' })
	            );
	        }
	    }]);
	
	    return StoryTile;
	}(_react2.default.Component);
	
	exports.default = StoryTile;

/***/ },
/* 328 */
/*!*****************************************!*\
  !*** ./app/tiles/story/story.tile.scss ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./story.tile.scss */ 329);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./story.tile.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./story.tile.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 329 */
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/tiles/story/story.tile.scss ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n@media only screen and (max-device-width: 6in) {\n  .story-tile-image {\n    width: 45%; }\n  .story-tile-description-data {\n    width: 55%; } }\n\n@media only screen and (min-device-width: 6in) {\n  .story-tile-image {\n    width: 25%; }\n  .story-tile-description-data {\n    width: 75%; } }\n\n.story-tile {\n  width: 100%;\n  padding: 20px 0 30px 0;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.story-tile-image {\n  float: left;\n  height: 160px;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n\n.story-tile-image img {\n  width: 100%; }\n\n.story-tile-description-data {\n  float: left;\n  padding-left: 20px;\n  box-sizing: border-box;\n  height: 100%; }\n\n.story-tile-name {\n  font-size: 22px;\n  font-family: \"PT Sans\", sans-serif;\n  letter-spacing: 0.6px;\n  height: 1.4em;\n  line-height: 1.3em;\n  overflow: hidden; }\n\n.story-tile-name a {\n  color: #221; }\n\n.story-tile-description {\n  font-size: 16px;\n  margin-top: 10px;\n  height: 5.5em;\n  line-height: 1.4em;\n  color: #494949;\n  font-family: Roboto, Arial, sans-serif;\n  letter-spacing: 0.6px;\n  overflow: hidden; }\n", ""]);
	
	// exports


/***/ },
/* 330 */
/*!********************************************************!*\
  !*** ./app/shared/social/gray/social.buttons.gray.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 182);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 208);
	
	var _socialButtonsGray = __webpack_require__(/*! ./social.buttons.gray.scss */ 331);
	
	var _socialButtonsGray2 = _interopRequireDefault(_socialButtonsGray);
	
	var _socialShareService = __webpack_require__(/*! ../../../services/social.share.service.jsx */ 314);
	
	var _socialShareService2 = _interopRequireDefault(_socialShareService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SocialButtonsGray = function (_React$Component) {
	    _inherits(SocialButtonsGray, _React$Component);
	
	    function SocialButtonsGray(props) {
	        _classCallCheck(this, SocialButtonsGray);
	
	        var _this = _possibleConstructorReturn(this, (SocialButtonsGray.__proto__ || Object.getPrototypeOf(SocialButtonsGray)).call(this, props));
	
	        _this.state = {};
	        return _this;
	    }
	
	    _createClass(SocialButtonsGray, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'shareOnFacebook',
	        value: function shareOnFacebook() {
	            _socialShareService2.default.shareOnFacebook(this.props.name, this.props.description, this.props.productUrl, this.props.imageUrl);
	        }
	    }, {
	        key: 'shareOnGooglePlus',
	        value: function shareOnGooglePlus() {
	            _socialShareService2.default.shareOnGooglePlus(this.props.productUrl, this.props.name);
	        }
	    }, {
	        key: 'shareOnTwitter',
	        value: function shareOnTwitter() {
	            _socialShareService2.default.shareOnTwitter(this.props.productUrl, this.props.name);
	        }
	    }, {
	        key: 'shareOnPintrest',
	        value: function shareOnPintrest() {
	            _socialShareService2.default.shareOnPintrest(this.props.productUrl, this.props.name);
	        }
	    }, {
	        key: 'shareOnWhatsapp',
	        value: function shareOnWhatsapp() {
	            _socialShareService2.default.shareOnWhatsapp(this.props.productUrl, this.props.name);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'social-button-gray-container' },
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        _react2.default.createElement('li', { className: 'social-button-gray-fb',
	                            onClick: this.shareOnFacebook.bind(this) }),
	                        _react2.default.createElement('li', { className: 'social-button-gray-tw',
	                            onClick: this.shareOnTwitter.bind(this) }),
	                        _react2.default.createElement('li', { className: 'social-button-gray-gp',
	                            onClick: this.shareOnGooglePlus.bind(this) }),
	                        _react2.default.createElement('li', { className: 'social-button-gray-pr',
	                            onClick: this.shareOnPintrest.bind(this) }),
	                        _react2.default.createElement('div', { className: 'clear-both-side' })
	                    ),
	                    _react2.default.createElement('div', { className: 'clear-both-side' })
	                ),
	                _react2.default.createElement('div', { className: 'clear-both-side' })
	            );
	        }
	    }]);
	
	    return SocialButtonsGray;
	}(_react2.default.Component);
	
	exports.default = SocialButtonsGray;

/***/ },
/* 331 */
/*!*********************************************************!*\
  !*** ./app/shared/social/gray/social.buttons.gray.scss ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader/lib/loader.js!./../../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./social.buttons.gray.scss */ 332);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js!./../../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./social.buttons.gray.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js!./../../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./social.buttons.gray.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 332 */
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/shared/social/gray/social.buttons.gray.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, ".social-button-gray-container {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 5px; }\n\n.social-button-gray-container ul li {\n  float: right;\n  width: 17px;\n  margin-left: 14px;\n  padding-left: 5px;\n  padding-right: 10px;\n  display: block;\n  border: 0;\n  background-size: contain;\n  vertical-align: middle;\n  cursor: pointer; }\n\n.social-button-gray-container ul li:first-child {\n  border-right: 0; }\n\n.social-button-gray-container img {\n  width: 15px; }\n\n.social-button-gray-fb {\n  background: url(/images/social/fb-64-gray.gif) top left no-repeat;\n  height: 18px; }\n\n.social-button-gray-fb:hover {\n  background: url(/images/social/fb-64.gif) top left no-repeat;\n  background-size: contain; }\n\n.social-button-gray-tw {\n  background: url(/images/social/tw-64-gray.gif) top left no-repeat;\n  height: 18px; }\n\n.social-button-gray-tw:hover {\n  background: url(/images/social/tw-64.gif) top left no-repeat;\n  background-size: contain; }\n\n.social-button-gray-gp {\n  background: url(/images/social/gp-64-gray.gif) top left no-repeat;\n  height: 18px; }\n\n.social-button-gray-gp:hover {\n  background: url(/images/social/gp-64.gif) top left no-repeat;\n  background-size: contain; }\n\n.social-button-gray-ig {\n  background: url(/images/social/ig-64-gray.gif) top left no-repeat;\n  height: 18px; }\n\n.social-button-gray-ig:hover {\n  background: url(/images/social/ig-64.gif) top left no-repeat;\n  background-size: contain; }\n\n.social-button-gray-pr {\n  background: url(/images/social/pr-64-gray.gif) top left no-repeat;\n  height: 18px; }\n\n.social-button-gray-pr:hover {\n  background: url(/images/social/pr-64.gif) top left no-repeat;\n  background-size: contain; }\n\n.social-button-gray-wa {\n  background: url(/images/social/wa-64-gray.gif) top left no-repeat;\n  height: 18px; }\n\n.social-button-gray-wa:hover {\n  background: url(/images/social/wa-64.gif) top left no-repeat;\n  background-size: contain; }\n", ""]);
	
	// exports


/***/ },
/* 333 */
/*!**************************************************!*\
  !*** ./app/shared/view/reset/reset.password.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _resetPassword = __webpack_require__(/*! ./reset.password.scss */ 334);
	
	var _resetPassword2 = _interopRequireDefault(_resetPassword);
	
	var _loginModal = __webpack_require__(/*! ../../modals/login/login.modal.css */ 283);
	
	var _loginModal2 = _interopRequireDefault(_loginModal);
	
	var _userService = __webpack_require__(/*! ../../../services/user.service.jsx */ 284);
	
	var _userService2 = _interopRequireDefault(_userService);
	
	var _inputValidatorService = __webpack_require__(/*! ../../../services/input.validator.service.jsx */ 287);
	
	var _inputValidatorService2 = _interopRequireDefault(_inputValidatorService);
	
	var _submitButton = __webpack_require__(/*! ../../../shared/buttons/submit.button.jsx */ 304);
	
	var _submitButton2 = _interopRequireDefault(_submitButton);
	
	var _header = __webpack_require__(/*! ../../header/header.jsx */ 318);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ResetPassword = function (_React$Component) {
	    _inherits(ResetPassword, _React$Component);
	
	    function ResetPassword(props) {
	        _classCallCheck(this, ResetPassword);
	
	        var _this = _possibleConstructorReturn(this, (ResetPassword.__proto__ || Object.getPrototypeOf(ResetPassword)).call(this, props));
	
	        _this.state = {
	            errorMessage: '',
	            succeedMessage: '',
	            password: '',
	            rePassword: '',
	            resetButtonState: 'enabled'
	        };
	        return _this;
	    }
	
	    _createClass(ResetPassword, [{
	        key: 'doReset',
	        value: function doReset(e) {
	            e.preventDefault();
	            if (this.validateInput()) {
	                this._doReset();
	            }
	        }
	    }, {
	        key: 'validateInput',
	        value: function validateInput() {
	
	            if (!_inputValidatorService2.default.validatePassword(this.state.password)) {
	                this.setState({ errorMessage: 'Password should be at least 6 characters' });
	                return false;
	            }
	            if (this.state.password !== this.state.rePassword) {
	                this.setState({ errorMessage: 'Password did not match' });
	                return false;
	            }
	
	            return true;
	        }
	    }, {
	        key: '_doReset',
	        value: function _doReset() {
	            var _this2 = this;
	
	            this.setState({ resetButtonState: 'inProgress', errorMessage: '' });
	            _userService2.default.resetValidation(this.state.password, this.props.location.query._l).then(function (res) {
	                if (res.data['response'] == true) {
	                    _this2.setState({
	                        succeedMessage: 'Password got reset, try logging in, You will be redirected ' + 'to home page in 5 seconds'
	                    });
	
	                    setTimeout(function () {
	                        window.location.href = '/';
	                    }.bind(_this2), 5000);
	                } else {
	                    _this2.setState({
	                        errorMessage: 'This link is expired, try reset password again',
	                        resetButtonState: 'enabled'
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'handlePasswordChange',
	        value: function handlePasswordChange(event) {
	            this.setState({ password: event.target.value.trim() });
	        }
	    }, {
	        key: 'handleRePasswordChange',
	        value: function handleRePasswordChange(event) {
	            this.setState({ rePassword: event.target.value.trim() });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            /*this.props.location.query._l*/
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'full-width' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'page-width' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: _resetPassword2.default.resetPasswordContainer },
	                            _react2.default.createElement(
	                                'div',
	                                { className: _resetPassword2.default.resetPasswordContent },
	                                _react2.default.createElement(
	                                    'form',
	                                    null,
	                                    _react2.default.createElement(
	                                        'label',
	                                        { className: 'normal-font-size' },
	                                        'Enter your new password below'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: _resetPassword2.default.inputContainer },
	                                        _react2.default.createElement(
	                                            'label',
	                                            { className: 'normal-font-size' },
	                                            'New password'
	                                        ),
	                                        _react2.default.createElement('input', { type: 'password',
	                                            onChange: this.handlePasswordChange.bind(this),
	                                            placeholder: 'password' }),
	                                        _react2.default.createElement('input', { type: 'password',
	                                            onChange: this.handleRePasswordChange.bind(this),
	                                            placeholder: 're-enter password' }),
	                                        _react2.default.createElement(
	                                            'span',
	                                            { className: 'error-message' },
	                                            this.state.errorMessage
	                                        ),
	                                        _react2.default.createElement(
	                                            'span',
	                                            { className: 'succeed-message' },
	                                            this.state.succeedMessage
	                                        ),
	                                        _react2.default.createElement(_submitButton2.default, {
	                                            onButtonClick: this.doReset.bind(this),
	                                            buttonValue: 'Submit',
	                                            buttonColor: submitButtonBackground,
	                                            buttonHoverColor: submitButtonHoverBackground,
	                                            buttonState: this.state.resetButtonState })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ResetPassword;
	}(_react2.default.Component);
	
	exports.default = ResetPassword;

/***/ },
/* 334 */
/*!***************************************************!*\
  !*** ./app/shared/view/reset/reset.password.scss ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader/lib/loader.js!./../../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./reset.password.scss */ 335);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js!./../../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./reset.password.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js!./../../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./reset.password.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 335 */
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/shared/view/reset/reset.password.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\n  .resetPasswordContent {\n    width: 100%; }\n  .inputContainer {\n    padding: 3em;\n    border-radius: 4px; }\n  .inputContainer input {\n    height: 4em;\n    margin-top: 2em;\n    font-size: 2em;\n    padding: 1em; } }\n\n@media only screen and (min-device-width: 5in) and (max-device-width: 13in) {\n  .resetPasswordContent {\n    width: 50%;\n    margin: auto; }\n  .inputContainer {\n    padding: 20px; }\n  .inputContainer input {\n    height: 3em;\n    margin-top: 20px;\n    font-size: 1em;\n    padding: 15px; } }\n\n@media only screen and (min-device-width: 13in) {\n  .resetPasswordContent {\n    width: 300px;\n    margin: auto; }\n  .inputContainer {\n    padding: 20px; }\n  .inputContainer input {\n    height: 40px;\n    margin-top: 20px;\n    font-size: 13px;\n    padding: 10px; } }\n\n.resetPasswordContent {\n  margin-top: 100px;\n  text-align: left;\n  margin-bottom: 100px; }\n\n.resetPasswordContainer {\n  text-align: center; }\n\n.inputContainer {\n  border: 1px solid #ccc;\n  margin-top: 30px;\n  border-radius: 4px; }\n\n.inputContainer input {\n  width: 100%;\n  border: 1px solid #bbb;\n  border-radius: 4px; }\n\n.resetButton {\n  cursor: pointer;\n  background: #ff5858;\n  color: #EEE;\n  letter-spacing: 1px; }\n\n.resetButton:hover {\n  background: #ff6969; }\n", ""]);
	
	// exports


/***/ },
/* 336 */
/*!***************************************************!*\
  !*** ./app/shared/terms/terms.and.conditions.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _header = __webpack_require__(/*! ../../shared/header/header.jsx */ 318);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _termsAndConditions = __webpack_require__(/*! ./terms.and.conditions.scss */ 337);
	
	var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TermsAndConditions = function (_React$Component) {
	    _inherits(TermsAndConditions, _React$Component);
	
	    function TermsAndConditions(props) {
	        _classCallCheck(this, TermsAndConditions);
	
	        var _this = _possibleConstructorReturn(this, (TermsAndConditions.__proto__ || Object.getPrototypeOf(TermsAndConditions)).call(this, props));
	
	        _this.handSymbol = "fa-hand-o-right";
	        return _this;
	    }
	
	    _createClass(TermsAndConditions, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'full-width' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'page-width' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'ppHeader' },
	                            'Gadgetclues.com Privacy Policy'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'ppBody' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'hide-me' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'quick-links text-center' },
	                                        'Information Collection'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'quick-links text-center' },
	                                        'Information Usage'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'quick-links text-center' },
	                                        'Information Protection'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'quick-links text-center' },
	                                        'Cookie Usage'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'quick-links text-center' },
	                                        '3rd Party Disclosure'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'quick-links text-center' },
	                                        '3rd Party Links'
	                                    )
	                                ),
	                                _react2.default.createElement('div', { className: 'col-2' }),
	                                _react2.default.createElement('div', { className: 'col-2' })
	                            ),
	                            _react2.default.createElement('div', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'hide-me' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-12 quick-links2 gen-text-center' },
	                                        'Google AdSense'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-12 quick-links2 gen-text-center coppa-pad' },
	                                        'COPPA'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-12 quick-links2 quick4 gen-text-center caloppa-pad' },
	                                        'CalOPPA'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'quick-links2 gen-text-center' },
	                                        'Our Contact Information',
	                                        _react2.default.createElement('br', null)
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'This privacy policy has been compiled to better serve those who are concerned with how their \'Personally Identifiable Information\' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.',
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement('span', { id: 'infoCo' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'grayText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'What personal information do we collect from the people that visit our blog, website or app?'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address or other details to help you with your experience.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'grayText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'When do we collect information?'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We collect information from you when you register on our site, subscribe to a newsletter or enter information on our site.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            ' ',
	                            _react2.default.createElement('span', { id: 'infoUs' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'grayText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'How do we use your information? '
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                ' We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:',
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' To allow us to better service you in responding to your customer service requests.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' To send periodic emails regarding your order or other products and services.'
	                            ),
	                            _react2.default.createElement('span', { id: 'infoPro' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'grayText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'How do we protect your information?'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We do not use vulnerability scanning and/or scanning to PCI standards.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We only provide articles and information. We never ask for credit card numbers.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We do not use Malware Scanning.',
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We do not use an SSL certificate'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' We only provide articles and information. We never ask for personal or private information like names, email addresses, or credit card numbers.'
	                            ),
	                            _react2.default.createElement('span', { id: 'coUs' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'grayText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Do we use \'cookies\'?'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'Yes. Cookies are small files that a site or its service provider transfers to your computer\'s hard drive through your Web browser (if you allow) that enables the site\'s or service provider\'s systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'We use cookies to:'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Understand and save user\'s preferences for future visits.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement('br', null),
	                                'You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser\'s Help Menu to learn the correct way to modify your cookies.',
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'If users disable cookies in their browser:'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.Some of the features that make your site experience more efficient and may not function properly.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('span', { id: 'trDi' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'grayText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Third-party disclosure'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.'
	                            ),
	                            _react2.default.createElement('span', { id: 'trLi' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'grayText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Third-party links'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.'
	                            ),
	                            _react2.default.createElement('span', { id: 'gooAd' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'blueText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Google'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'Google\'s advertising requirements can be summed up by Google\'s Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en ',
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We have not enabled Google AdSense on our site but we may do so in the future.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We use them to compile data regarding user interactions to sell that data to interested parties.'
	                            ),
	                            _react2.default.createElement('span', { id: 'calOppa' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'blueText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'California Online Privacy Protection Act'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law\'s reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf',
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'According to CalOPPA, we agree to the following:'
	                                ),
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'Users can visit our site anonymously.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.',
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'Our Privacy Policy link includes the word \'Privacy\' and can easily be found on the page specified above.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement('br', null),
	                                'You will be notified of any Privacy Policy changes:'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Via Email'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'Can change your personal information:'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' By emailing us'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'How does our site handle Do Not Track signals?'
	                                ),
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Does our site allow third-party behavioral tracking?'
	                                ),
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'It\'s also important to note that we do not allow third-party behavioral tracking'
	                            ),
	                            _react2.default.createElement('span', { id: 'coppAct' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'blueText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'COPPA (Children Online Privacy Protection Act)'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'When it comes to the collection of personal information from children under the age of 13 years old, the Children\'s Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States\' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children\'s privacy and safety online.',
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'We do not specifically market to children under the age of 13 years old.'
	                            ),
	                            _react2.default.createElement('span', { id: 'canSpam' }),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'blueText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'CAN SPAM Act'
	                                )
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                'The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.',
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement('br', null)
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'We collect your email address in order to:'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'To be in accordance with CANSPAM, we agree to the following:'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Not use false or misleading subjects or email addresses.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Identify the message as an advertisement in some reasonable way.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Include the physical address of our business or site headquarters.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Monitor third-party email marketing services for compliance, if one is used.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Honor opt-out/unsubscribe requests quickly.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Allow users to unsubscribe by using the link at the bottom of each email.'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    _react2.default.createElement('br', null),
	                                    'If at any time you would like to unsubscribe from receiving future emails, you can email us at'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'innerText' },
	                                '\xA0\xA0\xA0\xA0\xA0 ',
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    '\u2022'
	                                ),
	                                ' Follow the instructions at the bottom of each email.'
	                            ),
	                            'and we will promptly remove you from ',
	                            _react2.default.createElement(
	                                'strong',
	                                null,
	                                'ALL'
	                            ),
	                            ' correspondence.'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement('span', { id: 'ourCon' }),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'blueText' },
	                            _react2.default.createElement(
	                                'strong',
	                                null,
	                                'Contacting Us'
	                            )
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'innerText' },
	                            'If there are any questions regarding this privacy policy, you may contact us using the information below.',
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null)
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'innerText' },
	                            'care@gadgetclues.com'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'innerText' },
	                            _react2.default.createElement('br', null),
	                            'Last Edited on 2017-03-19'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return TermsAndConditions;
	}(_react2.default.Component);
	
	exports.default = TermsAndConditions;

/***/ },
/* 337 */
/*!****************************************************!*\
  !*** ./app/shared/terms/terms.and.conditions.scss ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./terms.and.conditions.scss */ 338);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./terms.and.conditions.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./terms.and.conditions.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 338 */
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/shared/terms/terms.and.conditions.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 5in) {\n  .terms {\n    margin-top: 40px; }\n  .terms h2 {\n    font-size: 25px;\n    font-weight: bold; }\n  .terms ul {\n    font-size: 15px;\n    margin-top: 15px; }\n  .terms ul li {\n    font-size: 15px;\n    line-height: 20px;\n    margin-top: 20px; }\n  .terms ul li i {\n    margin-right: 35px; } }\n\n@media only screen and (min-device-width: 5in) {\n  .terms {\n    margin-top: 20px; }\n  .terms h2 {\n    font-size: 15px;\n    font-weight: bold; }\n  .terms ul {\n    font-size: 13px;\n    margin-top: 15px; }\n  .terms ul li {\n    font-size: 13px;\n    line-height: 20px; }\n  .terms ul li i {\n    margin-right: 5px;\n    margin-left: 10px; } }\n\n.terms {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #838383;\n  text-align: left; }\n\n#ppBody {\n  font-size: 11pt;\n  width: 100%;\n  margin: 0 auto;\n  text-align: justify;\n  color: #444;\n  font-family: sans-serif; }\n\n#ppHeader {\n  font-family: sans-serif;\n  font-size: 21pt;\n  color: #444;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.ppConsistencies {\n  display: none; }\n\n.grayText {\n  font-size: 20px;\n  margin-top: 10px; }\n\n.blueText {\n  font-size: 20px;\n  margin-top: 10px; }\n\n.innerText {\n  font-size: 13px; }\n", ""]);
	
	// exports


/***/ },
/* 339 */
/*!***************************************!*\
  !*** ./app/home/home.page.module.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _gadgetTilesComponent = __webpack_require__(/*! ./gadgets/gadget.tiles.component.jsx */ 340);
	
	var _gadgetTilesComponent2 = _interopRequireDefault(_gadgetTilesComponent);
	
	var _storyTilesComponent = __webpack_require__(/*! ./story/story.tiles.component.jsx */ 323);
	
	var _storyTilesComponent2 = _interopRequireDefault(_storyTilesComponent);
	
	var _homePageModule = __webpack_require__(/*! ./home.page.module.scss */ 346);
	
	var _homePageModule2 = _interopRequireDefault(_homePageModule);
	
	var _sideTrendingStoriesComponent = __webpack_require__(/*! ./side-story/side.trending.stories.component.jsx */ 348);
	
	var _sideTrendingStoriesComponent2 = _interopRequireDefault(_sideTrendingStoriesComponent);
	
	var _sideLatestReviewComponent = __webpack_require__(/*! ./side-story/side.latest.review.component.jsx */ 354);
	
	var _sideLatestReviewComponent2 = _interopRequireDefault(_sideLatestReviewComponent);
	
	var _appFooter = __webpack_require__(/*! ../shared/footer/app.footer.jsx */ 355);
	
	var _appFooter2 = _interopRequireDefault(_appFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HomePageModule = function (_React$Component) {
	    _inherits(HomePageModule, _React$Component);
	
	    function HomePageModule(props) {
	        _classCallCheck(this, HomePageModule);
	
	        return _possibleConstructorReturn(this, (HomePageModule.__proto__ || Object.getPrototypeOf(HomePageModule)).call(this, props));
	    }
	
	    _createClass(HomePageModule, [{
	        key: 'hideModal',
	        value: function hideModal() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-width' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'left-data-container' },
	                        _react2.default.createElement(_gadgetTilesComponent2.default, { name: 'Trending Gadgets', loadMoreEnabled: false, type: 'HOME' }),
	                        _react2.default.createElement(_storyTilesComponent2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'right-data-container' },
	                        _react2.default.createElement(_sideTrendingStoriesComponent2.default, {
	                            name: 'Trending stories' }),
	                        _react2.default.createElement(_sideLatestReviewComponent2.default, {
	                            name: 'Latest review' })
	                    ),
	                    _react2.default.createElement('div', { className: 'clear-both-side' })
	                ),
	                _react2.default.createElement(_appFooter2.default, null)
	            );
	        }
	    }]);
	
	    return HomePageModule;
	}(_react2.default.Component);
	
	exports.default = HomePageModule;

/***/ },
/* 340 */
/*!*****************************************************!*\
  !*** ./app/home/gadgets/gadget.tiles.component.jsx ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gadgetTilesComponent = __webpack_require__(/*! ./gadget.tiles.component.scss */ 341);
	
	var _gadgetTilesComponent2 = _interopRequireDefault(_gadgetTilesComponent);
	
	var _gadgetTile = __webpack_require__(/*! ../../tiles/gadgets/gadget.tile.jsx */ 343);
	
	var _gadgetTile2 = _interopRequireDefault(_gadgetTile);
	
	var _gadgetsService = __webpack_require__(/*! ../../services/gadgets.service.jsx */ 313);
	
	var _gadgetsService2 = _interopRequireDefault(_gadgetsService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SideStoryTile = function (_React$Component) {
	    _inherits(SideStoryTile, _React$Component);
	
	    function SideStoryTile(props) {
	        _classCallCheck(this, SideStoryTile);
	
	        var _this = _possibleConstructorReturn(this, (SideStoryTile.__proto__ || Object.getPrototypeOf(SideStoryTile)).call(this, props));
	
	        _this.state = {
	            gadgetTiles: [],
	            loadMoreText: "Load More"
	        };
	        _this.offset = 0;
	        _this.limit = 15;
	        _this.canLoadMore = true;
	        return _this;
	    }
	
	    _createClass(SideStoryTile, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadMore();
	        }
	    }, {
	        key: 'loadMore',
	        value: function loadMore() {
	            if (!this.canLoadMore) {
	                return;
	            }
	
	            this.setState({ loadMoreText: "Loading.." });
	            switch (this.props.type) {
	                case "HOME":
	                    this.loadGadgetOnHomePage();
	                    break;
	                case "ALL_GADGET":
	                    this.loadGadgetOnAllGadgetsPage();
	                    break;
	                case "CATEGORY_GADGET":
	                    this.loadGadgetOnGadgetsCategoriesPage();
	                    break;
	                default:
	                    this.loadGadgetOnHomePage();
	            }
	        }
	    }, {
	        key: 'loadGadgetOnHomePage',
	        value: function loadGadgetOnHomePage() {
	            var _this2 = this;
	
	            _gadgetsService2.default.getTopGadgetsByView(6).then(function (resp) {
	                _this2.setState({ gadgetTiles: resp.data });
	            });
	        }
	    }, {
	        key: 'loadGadgetOnAllGadgetsPage',
	        value: function loadGadgetOnAllGadgetsPage() {
	            var _this3 = this;
	
	            _gadgetsService2.default.getAllGadgets(this.offset, this.limit).then(function (resp) {
	                _this3.processGadgetsData(resp);
	            });
	        }
	    }, {
	        key: 'loadGadgetOnGadgetsCategoriesPage',
	        value: function loadGadgetOnGadgetsCategoriesPage() {
	            var _this4 = this;
	
	            _gadgetsService2.default.getCategoryBasedData(this.props.categoryId, this.offset, this.limit).then(function (resp) {
	                _this4.processGadgetsData(resp);
	            });
	        }
	    }, {
	        key: 'processGadgetsData',
	        value: function processGadgetsData(resp) {
	            var data = resp.data;
	            if (data.length > 0) {
	                var newData = this.state.gadgetTiles.concat(data);
	                this.setState({ gadgetTiles: newData });
	                this.offset += this.limit;
	            } else {
	                this.canLoadMore = false;
	            }
	
	            this.setState({ loadMoreText: "Load More" });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'gadget-tiles-component' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'gadget-tiles-component-heading' },
	                    _react2.default.createElement(
	                        'h1',
	                        null,
	                        this.props.name
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'gadget-tiles-grid' },
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        this.state.gadgetTiles.map(function (gadget) {
	                            return _react2.default.createElement(
	                                'li',
	                                { key: gadget.NAME },
	                                _react2.default.createElement(_gadgetTile2.default, { name: gadget.NAME,
	                                    description: gadget.DESCRIPTION,
	                                    imageUrl: gadget.IMAGE_URL })
	                            );
	                        }),
	                        _react2.default.createElement('div', { className: 'clear-both-side' })
	                    )
	                ),
	                this.props.loadMoreEnabled ? _react2.default.createElement(
	                    'div',
	                    { className: 'gadget-load-more-button' },
	                    _react2.default.createElement(
	                        'a',
	                        { onClick: this.loadMore.bind(this) },
	                        this.state.loadMoreText
	                    ),
	                    _react2.default.createElement('div', { className: 'clear-both-side' })
	                ) : _react2.default.createElement(
	                    'div',
	                    { className: 'gadget-tiles-component-button' },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '/cool-gadgets' },
	                        'See All'
	                    ),
	                    _react2.default.createElement('div', { className: 'clear-both-side' })
	                )
	            );
	        }
	    }]);
	
	    return SideStoryTile;
	}(_react2.default.Component);
	
	exports.default = SideStoryTile;

/***/ },
/* 341 */
/*!******************************************************!*\
  !*** ./app/home/gadgets/gadget.tiles.component.scss ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./gadget.tiles.component.scss */ 342);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./gadget.tiles.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./gadget.tiles.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 342 */
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/home/gadgets/gadget.tiles.component.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n@media only screen and (max-device-width: 6in) {\n  .gadget-tiles-grid li {\n    width: 100%; } }\n\n@media only screen and (min-device-width: 6in) and (max-device-width: 10in) {\n  .gadget-tiles-grid li {\n    width: 50%; } }\n\n@media only screen and (min-device-width: 10in) {\n  .gadget-tiles-grid li {\n    width: 33.3%; }\n  .gadget-tiles-grid ul:nth-child(1) {\n    padding-left: 0; } }\n\n.gadget-tiles-component {\n  min-height: 500px;\n  width: 100%; }\n\n.gadget-tiles-component-heading {\n  width: 100%;\n  font-family: \"PT Sans\", sans-serif;\n  padding: 10px;\n  font-size: 28px;\n  text-transform: capitalize; }\n\n.gadget-tiles-component-button {\n  width: 100%;\n  font-family: Roboto, Arial, sans-serif;\n  padding: 10px;\n  box-sizing: border-box; }\n\n.gadget-tiles-component-button a {\n  display: block;\n  border: 1px solid #666;\n  float: right;\n  padding: 12px 28px;\n  border-radius: 2px;\n  color: #444; }\n\n.gadget-tiles-component-button a:hover {\n  background: #cedede; }\n\n.gadget-tiles-grid {\n  width: 100%;\n  margin-top: 15px; }\n\n.gadget-tiles-grid li {\n  display: block;\n  float: left;\n  padding: 10px;\n  box-sizing: border-box; }\n\n.gadget-load-more-button {\n  text-align: center;\n  margin-top: 20px; }\n\n.gadget-load-more-button a {\n  padding: 8px 12px;\n  border: 1px solid #aaa;\n  border-radius: 2px;\n  color: #444;\n  font-size: 12px; }\n\n.gadget-load-more-button a:hover {\n  background: #cedede; }\n", ""]);
	
	// exports


/***/ },
/* 343 */
/*!*******************************************!*\
  !*** ./app/tiles/gadgets/gadget.tile.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gadgetTile = __webpack_require__(/*! ./gadget.tile.scss */ 344);
	
	var _gadgetTile2 = _interopRequireDefault(_gadgetTile);
	
	var _socialButtonsGray = __webpack_require__(/*! ./../../shared/social/gray/social.buttons.gray.jsx */ 330);
	
	var _socialButtonsGray2 = _interopRequireDefault(_socialButtonsGray);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GadgetTile = function (_React$Component) {
	    _inherits(GadgetTile, _React$Component);
	
	    function GadgetTile(props) {
	        _classCallCheck(this, GadgetTile);
	
	        var _this = _possibleConstructorReturn(this, (GadgetTile.__proto__ || Object.getPrototypeOf(GadgetTile)).call(this, props));
	
	        _this.state = {
	            productUrl: ''
	        };
	        return _this;
	    }
	
	    _createClass(GadgetTile, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var productName = this.props.name.trim();
	            productName = productName.replace(/ /g, "-");
	            this.setState({ productUrl: '/gadgets/' + productName });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var productImageStyle = {
	                background: 'url(' + this.props.imageUrl + ') no-repeat 50% 50%', backgroundSize: 'cover'
	            };
	            return _react2.default.createElement(
	                'div',
	                { className: 'gadget-tile' },
	                _react2.default.createElement(
	                    'a',
	                    { href: this.state.productUrl },
	                    _react2.default.createElement('div', { style: productImageStyle, className: 'gadget-tile-image' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'gadget-tile-description-data' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'gadget-tile-name' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: this.state.productUrl },
	                            this.props.name
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'gadget-tile-description' },
	                        this.props.description
	                    ),
	                    _react2.default.createElement(_socialButtonsGray2.default, _extends({}, this.props, { productUrl: this.state.productUrl }))
	                )
	            );
	        }
	    }]);
	
	    return GadgetTile;
	}(_react2.default.Component);
	
	exports.default = GadgetTile;

/***/ },
/* 344 */
/*!********************************************!*\
  !*** ./app/tiles/gadgets/gadget.tile.scss ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./gadget.tile.scss */ 345);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./gadget.tile.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./gadget.tile.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 345 */
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/tiles/gadgets/gadget.tile.scss ***!
  \*********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all, .gadget-tile {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n.gadget-tile {\n  width: 100%; }\n\n.gadget-tile-image {\n  width: 100%;\n  height: 200px;\n  background: url(\"/product_img/gadgets/trackR-bravo-1.jpg\") no-repeat 50% 50%;\n  -webkit-background-size: cover;\n  background-size: cover; }\n\n.gadget-tile-description-data {\n  padding: 10px;\n  background: #fff; }\n\n.gadget-tile-name {\n  font-size: 22px;\n  font-family: \"PT Sans\", sans-serif;\n  height: 1.4em;\n  line-height: 1.3em;\n  overflow: hidden; }\n\n.gadget-tile-name a {\n  color: #221; }\n\n.gadget-tile-description {\n  font-size: 14px;\n  margin-top: 5px;\n  height: 2.5em;\n  line-height: 1.3em;\n  color: #494949;\n  font-family: Roboto, Arial, sans-serif;\n  letter-spacing: 0.2px;\n  overflow: hidden;\n  margin-bottom: 5px; }\n\n.icon-whatsapp:before {\n  content: \"\\EA93\"; }\n", ""]);
	
	// exports


/***/ },
/* 346 */
/*!****************************************!*\
  !*** ./app/home/home.page.module.scss ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader/lib/loader.js!./../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./home.page.module.scss */ 347);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./home.page.module.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./home.page.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 347 */
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/home/home.page.module.scss ***!
  \*****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n.gadget-tile-container {\n  width: 300px;\n  margin-top: 30px; }\n\n.story-tiles-container {\n  width: 700px;\n  margin-top: 30px; }\n\n.side-story-tiles-container {\n  width: 260px;\n  margin-top: 30px;\n  margin-bottom: 50px; }\n", ""]);
	
	// exports


/***/ },
/* 348 */
/*!*****************************************************************!*\
  !*** ./app/home/side-story/side.trending.stories.component.jsx ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sideStoriesComponent = __webpack_require__(/*! ./side.stories.component.scss */ 349);
	
	var _sideStoriesComponent2 = _interopRequireDefault(_sideStoriesComponent);
	
	var _sideStoryTile = __webpack_require__(/*! ../../tiles/side-story/side.story.tile.jsx */ 351);
	
	var _sideStoryTile2 = _interopRequireDefault(_sideStoryTile);
	
	var _gadgetsService = __webpack_require__(/*! ../../services/gadgets.service.jsx */ 313);
	
	var _gadgetsService2 = _interopRequireDefault(_gadgetsService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SideTrendingStoriesComponent = function (_React$Component) {
	    _inherits(SideTrendingStoriesComponent, _React$Component);
	
	    function SideTrendingStoriesComponent(props) {
	        _classCallCheck(this, SideTrendingStoriesComponent);
	
	        var _this = _possibleConstructorReturn(this, (SideTrendingStoriesComponent.__proto__ || Object.getPrototypeOf(SideTrendingStoriesComponent)).call(this, props));
	
	        _this.state = {
	            trendingStories: []
	        };
	        return _this;
	    }
	
	    _createClass(SideTrendingStoriesComponent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            _gadgetsService2.default.getTopStoriesByView(10).then(function (resp) {
	                _this2.setState({ trendingStories: resp.data });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'side-story-tiles-component' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'side-story-heading' },
	                    this.props.name ? this.props.name : "Trending Stories"
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'side-story-tiles-content' },
	                    this.state.trendingStories.map(function (story) {
	                        return _react2.default.createElement(_sideStoryTile2.default, {
	                            key: story.NAME,
	                            name: story.NAME,
	                            imageUrl: story.IMAGE_URL,
	                            type: 'stories',
	                            description: story.DESCRIPTION });
	                    })
	                )
	            );
	        }
	    }]);
	
	    return SideTrendingStoriesComponent;
	}(_react2.default.Component);
	
	if (sideTrendingStoriesComponentView) {
	    (0, _reactDom.render)(_react2.default.createElement(SideTrendingStoriesComponent, null), document.getElementById('side-trending-stories-component'));
	}
	exports.default = SideTrendingStoriesComponent;

/***/ },
/* 349 */
/*!*********************************************************!*\
  !*** ./app/home/side-story/side.stories.component.scss ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./side.stories.component.scss */ 350);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./side.stories.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./side.stories.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 350 */
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/home/side-story/side.stories.component.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n.side-story-tiles-component {\n  width: 100%;\n  padding: 10px;\n  margin-top: 10px; }\n\n.side-story-heading {\n  padding: 10px 10px;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 1px;\n  background: #414141;\n  color: #eee; }\n\n.side-story-tiles-content {\n  width: 100%;\n  height: 300px;\n  overflow: auto; }\n\n.side-story-tiles-content::-webkit-scrollbar {\n  width: 2px;\n  /* for vertical scrollbars */\n  height: 2px;\n  /* for horizontal scrollbars */ }\n", ""]);
	
	// exports


/***/ },
/* 351 */
/*!**************************************************!*\
  !*** ./app/tiles/side-story/side.story.tile.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sideStoryTile = __webpack_require__(/*! ./side.story.tile.scss */ 352);
	
	var _sideStoryTile2 = _interopRequireDefault(_sideStoryTile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SideStoryTile = function (_React$Component) {
	    _inherits(SideStoryTile, _React$Component);
	
	    function SideStoryTile(props) {
	        _classCallCheck(this, SideStoryTile);
	
	        var _this = _possibleConstructorReturn(this, (SideStoryTile.__proto__ || Object.getPrototypeOf(SideStoryTile)).call(this, props));
	
	        _this.state = {
	            productUrl: ''
	        };
	        return _this;
	    }
	
	    _createClass(SideStoryTile, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var productName = this.props.name.trim();
	            productName = productName.replace(/ /g, "-");
	            this.setState({ productUrl: '/' + this.props.type + '/' + productName });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var productImageStyle = {
	                background: 'url(' + this.props.imageUrl + ') no-repeat 50% 50%', backgroundSize: 'cover'
	            };
	            return _react2.default.createElement(
	                'div',
	                { className: 'side-story-tile' },
	                _react2.default.createElement(
	                    'a',
	                    { href: this.state.productUrl },
	                    _react2.default.createElement('div', { style: productImageStyle, className: 'side-story-tile-image' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'side-story-tile-name' },
	                    _react2.default.createElement(
	                        'a',
	                        { href: this.state.productUrl },
	                        this.props.name
	                    )
	                ),
	                _react2.default.createElement('div', { className: 'clear-both-side' })
	            );
	        }
	    }]);
	
	    return SideStoryTile;
	}(_react2.default.Component);
	
	exports.default = SideStoryTile;

/***/ },
/* 352 */
/*!***************************************************!*\
  !*** ./app/tiles/side-story/side.story.tile.scss ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./side.story.tile.scss */ 353);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./side.story.tile.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./side.story.tile.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 353 */
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/tiles/side-story/side.story.tile.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n.side-story-tile {\n  width: 100%;\n  height: 50px;\n  padding: 10px 0;\n  border-bottom: 1px dashed #ddd;\n  font-family: Roboto, Arial, sans-serif;\n  letter-spacing: 0.4px; }\n\n.side-story-tile:last-child {\n  border-bottom: 0; }\n\n.side-story-tile-image {\n  float: left;\n  width: 20%;\n  height: 50px;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n\n.side-story-tile-name {\n  float: left;\n  width: 80%;\n  padding-left: 10px;\n  box-sizing: border-box;\n  font-size: 13px; }\n\n.side-story-tile-name a {\n  color: #494949; }\n", ""]);
	
	// exports


/***/ },
/* 354 */
/*!**************************************************************!*\
  !*** ./app/home/side-story/side.latest.review.component.jsx ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sideStoriesComponent = __webpack_require__(/*! ./side.stories.component.scss */ 349);
	
	var _sideStoriesComponent2 = _interopRequireDefault(_sideStoriesComponent);
	
	var _sideStoryTile = __webpack_require__(/*! ../../tiles/side-story/side.story.tile.jsx */ 351);
	
	var _sideStoryTile2 = _interopRequireDefault(_sideStoryTile);
	
	var _gadgetsService = __webpack_require__(/*! ../../services/gadgets.service.jsx */ 313);
	
	var _gadgetsService2 = _interopRequireDefault(_gadgetsService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SideLatestReviewComponent = function (_React$Component) {
	    _inherits(SideLatestReviewComponent, _React$Component);
	
	    function SideLatestReviewComponent(props) {
	        _classCallCheck(this, SideLatestReviewComponent);
	
	        var _this = _possibleConstructorReturn(this, (SideLatestReviewComponent.__proto__ || Object.getPrototypeOf(SideLatestReviewComponent)).call(this, props));
	
	        _this.state = { trendingStories: [] };
	        return _this;
	    }
	
	    _createClass(SideLatestReviewComponent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            _gadgetsService2.default.getLatestReview(10).then(function (resp) {
	                _this2.setState({ trendingStories: resp.data });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'side-story-tiles-component' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'side-story-heading' },
	                    this.props.name ? this.props.name : "Latest review"
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'side-story-tiles-content' },
	                    this.state.trendingStories.map(function (story) {
	                        return _react2.default.createElement(_sideStoryTile2.default, {
	                            key: story.NAME,
	                            name: story.NAME,
	                            type: 'reviews',
	                            imageUrl: story.IMAGE_URL,
	                            description: story.DESCRIPTION });
	                    })
	                )
	            );
	        }
	    }]);
	
	    return SideLatestReviewComponent;
	}(_react2.default.Component);
	
	if (sideLatestReviewComponentView) {
	    (0, _reactDom.render)(_react2.default.createElement(SideLatestReviewComponent, null), document.getElementById('side-latest-review-component'));
	}
	exports.default = SideLatestReviewComponent;

/***/ },
/* 355 */
/*!******************************************!*\
  !*** ./app/shared/footer/app.footer.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _appFooter = __webpack_require__(/*! ./app.footer.scss */ 356);
	
	var _appFooter2 = _interopRequireDefault(_appFooter);
	
	var _inputValidatorService = __webpack_require__(/*! ../../services/input.validator.service.jsx */ 287);
	
	var _inputValidatorService2 = _interopRequireDefault(_inputValidatorService);
	
	var _userService = __webpack_require__(/*! ../../services/user.service.jsx */ 284);
	
	var _userService2 = _interopRequireDefault(_userService);
	
	var _appFooterSubscribeButton = __webpack_require__(/*! ./app.footer.subscribe.button.jsx */ 358);
	
	var _appFooterSubscribeButton2 = _interopRequireDefault(_appFooterSubscribeButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AppFooter = function (_React$Component) {
	    _inherits(AppFooter, _React$Component);
	
	    function AppFooter(props) {
	        _classCallCheck(this, AppFooter);
	
	        var _this = _possibleConstructorReturn(this, (AppFooter.__proto__ || Object.getPrototypeOf(AppFooter)).call(this, props));
	
	        _this.state = {
	            emailId: ''
	        };
	
	        _this.userSubscribedCookieName = '_usfn';
	        _this.buttonState;
	        return _this;
	    }
	
	    _createClass(AppFooter, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'handleEmailIdChange',
	        value: function handleEmailIdChange(e) {
	            this.setState({ emailId: e.target.value });
	        }
	    }, {
	        key: 'doSubmit',
	        value: function doSubmit(e) {
	            e.preventDefault();
	            if (_inputValidatorService2.default.validateEmail(this.state.emailId)) {
	                this._doSubmit();
	            } else {
	                this.setState({ errorMessage: 'Please enter a valid email id' });
	            }
	        }
	    }, {
	        key: '_doSubmit',
	        value: function _doSubmit() {
	            var _this2 = this;
	
	            this.setState({ buttonState: 'inProgress', errorMessage: '' });
	            _userService2.default.newsletterSignup(this.state.emailId).then(function (res) {
	                if (res.data.response == true) {
	                    _this2.setState({ succeedMessage: 'Thanks for the subscription', successFulSubscription: true });
	                    CookieGuy.setCookieForOneYear(_this2.userSubscribedCookieName, 'true');
	                } else {
	                    _this2.setState({ errorMessage: 'Something went wrong' });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'footer',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'full-width' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'footer-top' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'page-width' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'footer-top-container' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'footer-top-about' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'footer-title' },
	                                        'About Us'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'footer-content' },
	                                        'We are among the world\'s best websites to help our users to find latest, innovative and cool gadgets available in the market and also help them by providing availability of product in famous stores.'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'footer-top-link' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'footer-title' },
	                                        'Links'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'footer-content' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'footer-content-links' },
	                                            _react2.default.createElement(
	                                                'a',
	                                                { href: '/' },
	                                                'Home'
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'footer-top-contact' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'footer-title' },
	                                        'Contact Us'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'footer-content' },
	                                        'care@gadgetclues.com'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'footer-title footer-subscribe-text' },
	                                'Newsletter Signup'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'footer-content footer-subscribe-text' },
	                                'Receive the coolest tech, gadgets and future products straight to your inbox.'
	                            ),
	                            _react2.default.createElement(_appFooterSubscribeButton2.default, null)
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'footer-bottom' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'page-width' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'footer-bottom-content' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'footer-bottom-copyrights' },
	                                    '\xA9 2017 gadgetclues.com'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'footer-bottom-social' },
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: 'https://www.facebook.com/thegadgetclues', target: '_blank' },
	                                        _react2.default.createElement('img', {
	                                            src: '/images/social/fb-64-white.gif' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: 'https://twitter.com/gadget_clues', target: '_blank' },
	                                        _react2.default.createElement('img', {
	                                            src: '/images/social/tw-64-white.gif' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: 'https://plus.google.com/108995328016403560945', target: '_blank' },
	                                        _react2.default.createElement('img', {
	                                            src: '/images/social/gp-64-white.gif' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: 'https://www.instagram.com/gadget_clues', target: '_blank' },
	                                        _react2.default.createElement('img', {
	                                            src: '/images/social/ig-64-white.gif' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'footer-bottom-links' },
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '/sitemap.xml', target: '_blank' },
	                                        'Sitemap'
	                                    ),
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '/privacypolicy', target: '_blank' },
	                                        'Privacy'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return AppFooter;
	}(_react2.default.Component);
	
	if (pageFooterView) {
	    (0, _reactDom.render)(_react2.default.createElement(AppFooter, null), document.getElementById('app-footer'));
	}
	
	exports.default = AppFooter;

/***/ },
/* 356 */
/*!*******************************************!*\
  !*** ./app/shared/footer/app.footer.scss ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app.footer.scss */ 357);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./app.footer.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./app.footer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 357 */
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/shared/footer/app.footer.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n@media only screen and (max-device-width: 6in) {\n  .footer-top-about {\n    line-height: 25px;\n    padding-top: 20px;\n    text-align: center; }\n  .footer-top-link {\n    text-align: center; }\n  .footer-top-contact {\n    text-align: center; }\n  .footer-subscribe-text {\n    text-align: center; }\n  .footer-content-subscribe {\n    text-align: center;\n    border-top: 1px solid #566;\n    padding-top: 30px; }\n  .footer-content-subscribe input {\n    padding: 15px 30px;\n    border-radius: 4px;\n    border: 1px solid #bbb;\n    width: 200px;\n    display: inline;\n    background: #dedede;\n    text-align: center; }\n  .footer-content-subscribe a {\n    margin-left: 10px;\n    display: inline-block;\n    margin-top: 20px;\n    width: 100px;\n    padding: 15px 30px;\n    border-radius: 4px;\n    border: 1px solid #666; }\n  .footer-bottom-copyrights {\n    text-align: center; }\n  .footer-bottom-links {\n    text-align: center;\n    margin-top: 20px; }\n  .footer-bottom-links a {\n    color: #999;\n    margin: 0 20px; }\n  .footer-bottom-links a:hover {\n    color: #ccc; }\n  .footer-bottom-social {\n    text-align: center;\n    margin-top: 20px; } }\n\n@media only screen and (min-device-width: 6in) {\n  .footer-top-container {\n    display: flex; }\n  .footer-top-container div {\n    flex: 1; }\n  .footer-top-about {\n    text-align: left;\n    line-height: 25px; }\n  .footer-top-link {\n    text-align: center; }\n  .footer-top-contact {\n    text-align: right; }\n  .footer-content-subscribe {\n    text-align: center;\n    border-top: 1px solid #566;\n    padding-top: 30px;\n    display: flex; }\n  .footer-content-subscribe input {\n    padding: 15px 30px;\n    border-radius: 4px;\n    border: 1px solid #bbb;\n    width: 200px;\n    display: inline;\n    background: #dedede;\n    flex: 2; }\n  .footer-content-subscribe a {\n    margin-left: 10px;\n    display: inline;\n    width: 100px;\n    padding: 15px 30px;\n    border-radius: 4px;\n    border: 1px solid #666;\n    flex: 1; }\n  .footer-content-subscribe-container label {\n    display: block; }\n  .footer-bottom-content {\n    display: flex; }\n  .footer-bottom-copyrights {\n    flex: 1; }\n  .footer-bottom-links {\n    flex: 1;\n    text-align: right; }\n  .footer-bottom-links a {\n    color: #999;\n    margin-left: 20px; }\n  .footer-bottom-links a:hover {\n    color: #ccc; }\n  .footer-bottom-social {\n    flex: 1.4;\n    text-align: center; } }\n\n.footer-top-container {\n  margin-top: 40px; }\n\n.footer-top {\n  background: #414347;\n  padding-bottom: 30px; }\n\n.footer-bottom {\n  background: #2C2B2B; }\n\n.footer-title {\n  font-size: 20px;\n  color: #dedede;\n  margin-top: 30px; }\n\n.footer-content {\n  font-size: 15px;\n  color: #999;\n  margin-top: 20px;\n  letter-spacing: 0.6px; }\n\n.footer-content-links a {\n  color: #999; }\n\n.footer-content-links a:hover {\n  color: #dedede; }\n\n.footer-content-subscribe a:hover {\n  border: 1px solid #bbb; }\n\n.footer-bottom-content {\n  padding: 20px 0;\n  color: #999;\n  letter-spacing: 0.7px; }\n\n.footer-bottom-social img {\n  width: 15px;\n  padding: 5px 10px; }\n", ""]);
	
	// exports


/***/ },
/* 358 */
/*!***********************************************************!*\
  !*** ./app/shared/footer/app.footer.subscribe.button.jsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _appFooter = __webpack_require__(/*! ./app.footer.scss */ 356);
	
	var _appFooter2 = _interopRequireDefault(_appFooter);
	
	var _inputValidatorService = __webpack_require__(/*! ../../services/input.validator.service.jsx */ 287);
	
	var _inputValidatorService2 = _interopRequireDefault(_inputValidatorService);
	
	var _userService = __webpack_require__(/*! ../../services/user.service.jsx */ 284);
	
	var _userService2 = _interopRequireDefault(_userService);
	
	var _cookieGuy = __webpack_require__(/*! ../../services/cookie.guy.jsx */ 310);
	
	var _cookieGuy2 = _interopRequireDefault(_cookieGuy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AppFooterSubscribeButton = function (_React$Component) {
	    _inherits(AppFooterSubscribeButton, _React$Component);
	
	    function AppFooterSubscribeButton(props) {
	        _classCallCheck(this, AppFooterSubscribeButton);
	
	        var _this = _possibleConstructorReturn(this, (AppFooterSubscribeButton.__proto__ || Object.getPrototypeOf(AppFooterSubscribeButton)).call(this, props));
	
	        _this.state = {
	            emailId: '',
	            buttonState: true,
	            subscribeButtonText: 'Subscribe',
	            errorMessage: 'Enter your email here',
	            successFulSubscription: false
	        };
	
	        _this.userSubscribedCookieName = '_usfn';
	        return _this;
	    }
	
	    _createClass(AppFooterSubscribeButton, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'handleEmailIdChange',
	        value: function handleEmailIdChange(e) {
	            this.setState({ emailId: e.target.value });
	        }
	    }, {
	        key: 'doSubmit',
	        value: function doSubmit(e) {
	            e.preventDefault();
	            if (!this.state.buttonState || this.state.successFulSubscription) {
	                return;
	            }
	            if (_inputValidatorService2.default.validateEmail(this.state.emailId)) {
	                this._doSubmit();
	            } else {
	                this.setState({ errorMessage: 'Please enter a valid email id' });
	            }
	        }
	    }, {
	        key: '_doSubmit',
	        value: function _doSubmit() {
	            var _this2 = this;
	
	            this.setState({ subscribeButtonText: 'Subscribing...', buttonState: false, errorMessage: '' });
	            _userService2.default.newsletterSignup(this.state.emailId).then(function (res) {
	                if (res.data.response == true) {
	                    _this2.setState({ subscribeButtonText: 'Thanks for the subscription', successFulSubscription: true });
	                    _cookieGuy2.default.setCookieForOneYear(_this2.userSubscribedCookieName, 'true');
	                } else {
	                    _this2.setState({ subscribeButtonText: 'Something went wrong' });
	                    _this2.setState({ buttonState: true });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'form',
	                { onSubmit: this.doSubmit.bind(this) },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'footer-content footer-content-subscribe' },
	                    _react2.default.createElement('input', { type: 'textbox',
	                        onChange: this.handleEmailIdChange.bind(this),
	                        placeholder: this.state.errorMessage }),
	                    _react2.default.createElement(
	                        'a',
	                        null,
	                        this.state.subscribeButtonText
	                    )
	                )
	            );
	        }
	    }]);
	
	    return AppFooterSubscribeButton;
	}(_react2.default.Component);
	
	exports.default = AppFooterSubscribeButton;

/***/ },
/* 359 */
/*!*******************************************************!*\
  !*** ./app/home/cool-gadgets/cool.gadgets.module.jsx ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _gadgetTilesComponent = __webpack_require__(/*! ../gadgets/gadget.tiles.component.jsx */ 340);
	
	var _gadgetTilesComponent2 = _interopRequireDefault(_gadgetTilesComponent);
	
	var _coolGadgetsModule = __webpack_require__(/*! ./cool.gadgets.module.scss */ 360);
	
	var _coolGadgetsModule2 = _interopRequireDefault(_coolGadgetsModule);
	
	var _sideTrendingStoriesComponent = __webpack_require__(/*! ../side-story/side.trending.stories.component.jsx */ 348);
	
	var _sideTrendingStoriesComponent2 = _interopRequireDefault(_sideTrendingStoriesComponent);
	
	var _sideLatestReviewComponent = __webpack_require__(/*! ../side-story/side.latest.review.component.jsx */ 354);
	
	var _sideLatestReviewComponent2 = _interopRequireDefault(_sideLatestReviewComponent);
	
	var _appFooter = __webpack_require__(/*! ../../shared/footer/app.footer.jsx */ 355);
	
	var _appFooter2 = _interopRequireDefault(_appFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CoolGadgetsModule = function (_React$Component) {
	    _inherits(CoolGadgetsModule, _React$Component);
	
	    function CoolGadgetsModule(props) {
	        _classCallCheck(this, CoolGadgetsModule);
	
	        return _possibleConstructorReturn(this, (CoolGadgetsModule.__proto__ || Object.getPrototypeOf(CoolGadgetsModule)).call(this, props));
	    }
	
	    _createClass(CoolGadgetsModule, [{
	        key: 'hideModal',
	        value: function hideModal() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-width' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'left-data-container' },
	                        _react2.default.createElement(_gadgetTilesComponent2.default, { name: 'Cool Gadgets', loadMoreEnabled: true,
	                            type: 'ALL_GADGET' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'right-data-container' },
	                        _react2.default.createElement(_sideTrendingStoriesComponent2.default, {
	                            name: 'Trending stories' }),
	                        _react2.default.createElement(_sideLatestReviewComponent2.default, {
	                            name: 'Latest review' })
	                    ),
	                    _react2.default.createElement('div', { className: 'clear-both-side' })
	                ),
	                _react2.default.createElement(_appFooter2.default, null)
	            );
	        }
	    }]);
	
	    return CoolGadgetsModule;
	}(_react2.default.Component);
	
	exports.default = CoolGadgetsModule;

/***/ },
/* 360 */
/*!********************************************************!*\
  !*** ./app/home/cool-gadgets/cool.gadgets.module.scss ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./cool.gadgets.module.scss */ 361);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./cool.gadgets.module.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./cool.gadgets.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 361 */
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/home/cool-gadgets/cool.gadgets.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n.gadget-tile-container {\n  width: 300px;\n  margin-top: 30px; }\n\n.story-tiles-container {\n  width: 700px;\n  margin-top: 30px; }\n\n.side-story-tiles-container {\n  width: 260px;\n  margin-top: 30px;\n  margin-bottom: 50px; }\n", ""]);
	
	// exports


/***/ },
/* 362 */
/*!****************************!*\
  !*** ./app/app.module.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _newsLetterSignup = __webpack_require__(/*! ./shared/news-letter/news.letter.signup.jsx */ 363);
	
	var _newsLetterSignup2 = _interopRequireDefault(_newsLetterSignup);
	
	var _appFooter = __webpack_require__(/*! ./shared/footer/app.footer.jsx */ 355);
	
	var _appFooter2 = _interopRequireDefault(_appFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AppModule = function (_React$Component) {
	    _inherits(AppModule, _React$Component);
	
	    function AppModule(props) {
	        _classCallCheck(this, AppModule);
	
	        return _possibleConstructorReturn(this, (AppModule.__proto__ || Object.getPrototypeOf(AppModule)).call(this, props));
	    }
	
	    _createClass(AppModule, [{
	        key: 'hideModal',
	        value: function hideModal() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_newsLetterSignup2.default, null),
	                this.props.children
	            );
	        }
	    }]);
	
	    return AppModule;
	}(_react2.default.Component);
	
	exports.default = AppModule;

/***/ },
/* 363 */
/*!*******************************************************!*\
  !*** ./app/shared/news-letter/news.letter.signup.jsx ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _newsLetterSignup = __webpack_require__(/*! ./news.letter.signup.scss */ 364);
	
	var _newsLetterSignup2 = _interopRequireDefault(_newsLetterSignup);
	
	var _inputValidatorService = __webpack_require__(/*! ../../services/input.validator.service.jsx */ 287);
	
	var _inputValidatorService2 = _interopRequireDefault(_inputValidatorService);
	
	var _userService = __webpack_require__(/*! ../../services/user.service.jsx */ 284);
	
	var _userService2 = _interopRequireDefault(_userService);
	
	var _cookieGuy = __webpack_require__(/*! ../../services/cookie.guy.jsx */ 310);
	
	var _cookieGuy2 = _interopRequireDefault(_cookieGuy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewsLetterSignup = function (_React$Component) {
	    _inherits(NewsLetterSignup, _React$Component);
	
	    function NewsLetterSignup(props) {
	        _classCallCheck(this, NewsLetterSignup);
	
	        var _this = _possibleConstructorReturn(this, (NewsLetterSignup.__proto__ || Object.getPrototypeOf(NewsLetterSignup)).call(this, props));
	
	        _this.state = {
	            emailId: '',
	            buttonState: true,
	            successFulSubscription: false,
	            errorMessage: '',
	            isVisible: false,
	            isPopupShown: false,
	            popupCssSelector: '',
	            subscribeButtonText: 'Subscribe'
	        };
	
	        _this.userSubscribedCookieName = '_usfn';
	        _this.didUserClickHideSingupNewsletter = '_ducsn';
	        _this.showPopupCss = "news-letter-signup-show";
	        _this.hidePopupCss = "news-letter-signup-hide";
	        return _this;
	    }
	
	    _createClass(NewsLetterSignup, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var noOfSeconds = 2000;
	            console.log(_cookieGuy2.default.isCookieEnabled());
	            if (!_cookieGuy2.default.isCookieEnabled()) {
	                setTimeout(function () {
	                    this.setState({ isPopupShown: false, isVisible: true });
	                }.bind(this), noOfSeconds);
	                return;
	            }
	
	            if (!isUserLoggedIn && !_cookieGuy2.default.getCookie(this.userSubscribedCookieName)) {
	
	                console.log("CookieGuy.getCookie(this.didUserClickHideSingupNewsletter)", _cookieGuy2.default.getCookie(this.didUserClickHideSingupNewsletter));
	                if (_cookieGuy2.default.getCookie(this.didUserClickHideSingupNewsletter) == 'true') {
	                    setTimeout(function () {
	                        console.log("comming here");
	                        this.setState({ isPopupShown: false, isVisible: true });
	                    }.bind(this), noOfSeconds);
	                } else {
	                    setTimeout(function () {
	                        this.setState({ isPopupShown: true, isVisible: true, popupCssSelector: this.showPopupCss });
	                    }.bind(this), noOfSeconds);
	                }
	            }
	        }
	    }, {
	        key: 'handleEmailIdChange',
	        value: function handleEmailIdChange(e) {
	            this.setState({ emailId: e.target.value });
	        }
	    }, {
	        key: 'doSubmit',
	        value: function doSubmit(e) {
	            e.preventDefault();
	            if (!this.state.buttonState) {
	                return;
	            }
	            if (_inputValidatorService2.default.validateEmail(this.state.emailId)) {
	                this._doSubmit();
	            } else {
	                this.setState({ errorMessage: 'Please enter a valid email id' });
	            }
	        }
	    }, {
	        key: '_doSubmit',
	        value: function _doSubmit() {
	            var _this2 = this;
	
	            this.setState({ subscribeButtonText: 'Subscribing...', buttonState: false, errorMessage: '' });
	            _userService2.default.newsletterSignup(this.state.emailId).then(function (res) {
	                if (res.data.response == true) {
	                    _this2.setState({ errorMessage: 'Thanks for the subscription', subscribeButtonText: 'Subscribed' });
	                    _cookieGuy2.default.setCookieForOneYear(_this2.userSubscribedCookieName, 'true');
	                } else {
	                    _this2.setState({ errorMessage: 'Something went wrong, please try again' });
	                    _this2.setState({ buttonState: true });
	                }
	            });
	        }
	    }, {
	        key: 'hideSignupPopup',
	        value: function hideSignupPopup() {
	            console.log("arrow button clicked");
	            if (this.state.isPopupShown) {
	                this.setState({ isPopupShown: false, popupCssSelector: this.hidePopupCss });
	                _cookieGuy2.default.setCookieForOneYear(this.didUserClickHideSingupNewsletter, true);
	            } else {
	                this.setState({ isPopupShown: true, popupCssSelector: this.showPopupCss });
	                _cookieGuy2.default.setCookieForOneYear(this.didUserClickHideSingupNewsletter, false);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.state.isVisible ? _react2.default.createElement(
	                'div',
	                { className: "news-letter-signup-container " + this.state.popupCssSelector },
	                _react2.default.createElement(
	                    'div',
	                    { onClick: this.hideSignupPopup.bind(this), className: 'newsletter-signup-circle' },
	                    this.state.isPopupShown ? _react2.default.createElement('img', { src: '/images/down-arrow.png' }) : _react2.default.createElement('img', { src: '/images/up-arrow.png' })
	                ),
	                _react2.default.createElement(
	                    'form',
	                    { onSubmit: this.doSubmit.bind(this) },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newsletter-signup-input' },
	                        _react2.default.createElement(
	                            'h2',
	                            null,
	                            'Newsletter Signup'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Receive the coolest tech, gadgets and future products straight to your inbox.'
	                        ),
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            this.state.errorMessage
	                        ),
	                        _react2.default.createElement('input', { type: 'textbox',
	                            onChange: this.handleEmailIdChange.bind(this),
	                            placeholder: 'You email here' }),
	                        _react2.default.createElement(
	                            'a',
	                            { onClick: this.doSubmit.bind(this) },
	                            this.state.subscribeButtonText
	                        )
	                    )
	                )
	            ) : _react2.default.createElement('div', null);
	        }
	    }]);
	
	    return NewsLetterSignup;
	}(_react2.default.Component);
	
	exports.default = NewsLetterSignup;

/***/ },
/* 364 */
/*!********************************************************!*\
  !*** ./app/shared/news-letter/news.letter.signup.scss ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./news.letter.signup.scss */ 365);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./news.letter.signup.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./news.letter.signup.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 365 */
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/shared/news-letter/news.letter.signup.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n@media only screen and (max-device-width: 6in) {\n  .news-letter-signup-container {\n    bottom: -280px; }\n  .newsletter-signup-input input {\n    vertical-align: middle;\n    padding: 20px;\n    width: 200px;\n    background: #dedede;\n    border: 1px solid #999999;\n    border-radius: 4px;\n    margin-top: 20px; }\n  .newsletter-signup-input a {\n    display: block;\n    width: 150px;\n    padding: 18px 40px;\n    border: 1px solid #777;\n    border-radius: 4px;\n    color: #cdcdcd;\n    margin: 20px auto 30px; }\n  .news-letter-signup-hide {\n    bottom: -265px;\n    -webkit-animation: hide-newsletter 600ms; } }\n\n@media only screen and (min-device-width: 6in) {\n  .news-letter-signup-container {\n    bottom: -220px;\n    height: 230px; }\n  .newsletter-signup-input input {\n    vertical-align: middle;\n    padding: 20px;\n    width: 350px;\n    background: #dedede;\n    border: 1px solid #999999;\n    border-right: 0;\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px; }\n  .newsletter-signup-input a {\n    line-height: 80px;\n    padding: 18px 40px;\n    border: 1px solid #777;\n    border-left: 0;\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    color: #cdcdcd;\n    vertical-align: middle; }\n  .news-letter-signup-hide {\n    bottom: -220px;\n    -webkit-animation: hide-newsletter 600ms; } }\n\n.news-letter-signup-container {\n  position: fixed;\n  left: 0;\n  right: 0;\n  background: #353430;\n  z-index: 4; }\n\n.newsletter-signup-input {\n  text-align: center;\n  margin-top: 0px;\n  margin-bottom: 10px; }\n\n.newsletter-signup-input label {\n  margin-top: 20px;\n  display: block;\n  color: #9a9a9a; }\n\n.newsletter-signup-input h2 {\n  margin-top: 35px;\n  color: #cdcdcd;\n  font-size: 30px; }\n\n.newsletter-signup-input p {\n  margin-top: 10px;\n  color: #787878;\n  font-size: 18px; }\n\n.newsletter-signup-input input:focus {\n  outline: none; }\n\n.newsletter-signup-input a:hover {\n  border: 1px solid #cdcdcd; }\n\n.newsletter-signup-circle {\n  position: absolute;\n  width: 70px;\n  height: 50px;\n  right: 70px;\n  top: -30px;\n  background: #353430;\n  border-top-left-radius: 40px;\n  border-top-right-radius: 40px;\n  text-align: center;\n  cursor: pointer; }\n\n.newsletter-signup-circle img {\n  margin-top: 5px;\n  width: 40px; }\n\n.news-letter-signup-show {\n  bottom: 0;\n  -webkit-animation: expand 600ms; }\n\n@-webkit-keyframes expand {\n  0% {\n    bottom: -220px; }\n  100% {\n    bottom: 0px; } }\n\n@-webkit-keyframes hide-newsletter {\n  0% {\n    bottom: 0px; }\n  100% {\n    bottom: -220px; } }\n", ""]);
	
	// exports


/***/ },
/* 366 */
/*!************************************************!*\
  !*** ./app/shared/header/search.bar.login.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _searchBarLogin = __webpack_require__(/*! ./search.bar.login.scss */ 367);
	
	var _searchBarLogin2 = _interopRequireDefault(_searchBarLogin);
	
	var _popupModal = __webpack_require__(/*! ../../shared/modals/popup.modal.jsx */ 265);
	
	var _popupModal2 = _interopRequireDefault(_popupModal);
	
	var _cookieGuy = __webpack_require__(/*! ../../services/cookie.guy.jsx */ 310);
	
	var _cookieGuy2 = _interopRequireDefault(_cookieGuy);
	
	var _gadgetsService = __webpack_require__(/*! ../../services/gadgets.service.jsx */ 313);
	
	var _gadgetsService2 = _interopRequireDefault(_gadgetsService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SearchBarLogin = function (_React$Component) {
	    _inherits(SearchBarLogin, _React$Component);
	
	    function SearchBarLogin(props) {
	        _classCallCheck(this, SearchBarLogin);
	
	        var _this = _possibleConstructorReturn(this, (SearchBarLogin.__proto__ || Object.getPrototypeOf(SearchBarLogin)).call(this, props));
	
	        _this.state = {
	            isLoginModalOn: false,
	            searchInput: '',
	            searchResult: [],
	            isSearching: false
	        };
	
	        var rwCookie = _cookieGuy2.default.getCookie('RWcookie');
	        rwCookie != "" && (isUserLoggedIn = true);
	
	        _this.searchTimeOutId = 0;
	        return _this;
	    }
	
	    _createClass(SearchBarLogin, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'hideModal',
	        value: function hideModal() {
	            this.setState({ isLoginModalOn: false });
	        }
	    }, {
	        key: 'showModal',
	        value: function showModal() {
	            this.setState({ isLoginModalOn: true });
	        }
	    }, {
	        key: 'doLogout',
	        value: function doLogout() {
	            UserService.doLogout().then(function (res) {
	                if (res.data['response'] == true) {
	                    window.location.href = '';
	                }
	            });
	        }
	    }, {
	        key: 'handleSearchChange',
	        value: function handleSearchChange(e) {
	            var oldVal = this.state.searchInput;
	            this.setState({ isSearching: true, searchInput: e.target.value.trim() }, function () {
	                if (this.state.searchInput != oldVal || this.state.searchResult.length === 0) {
	                    clearTimeout(this.searchTimeOutId);
	                    this.searchTimeOutId = setTimeout(function () {
	                        this._doSearch(this.state.searchInput);
	                    }.bind(this), 300);
	                }
	            }.bind(this));
	        }
	    }, {
	        key: '_doSearch',
	        value: function _doSearch(searchInput) {
	            var _this2 = this;
	
	            _gadgetsService2.default.getSearchItems(searchInput).then(function (res) {
	                _this2.setState({ searchResult: res.data });
	            });
	        }
	
	        /*
	         <div className="header-login-button">
	         {deskTopLoginButton}
	         </div>
	         */
	
	    }, {
	        key: 'disableIsSearching',
	        value: function disableIsSearching() {
	            setTimeout(function () {
	                this.setState({ isSearching: false });
	                clearTimeout(this.searchTimeOutId);
	            }.bind(this), 200);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var loginModal = this.state.isLoginModalOn ? _react2.default.createElement(_popupModal2.default, { hideModal: this.hideModal.bind(this), modalType: 'login-signup' }) : "";
	            var deskTopLoginButton = isUserLoggedIn ? _react2.default.createElement(
	                'div',
	                null,
	                'Hi ',
	                userName,
	                _react2.default.createElement(
	                    'div',
	                    { className: '' },
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        _react2.default.createElement(
	                            'li',
	                            { onClick: this.doLogout.bind(this) },
	                            'Logout'
	                        )
	                    )
	                )
	            ) : _react2.default.createElement(
	                'a',
	                { onClick: this.showModal.bind(this) },
	                'Login'
	            );
	
	            var showSearchResult = this.state.isSearching ? {
	                display: 'block'
	            } : {
	                display: 'none'
	            };
	            return _react2.default.createElement(
	                'div',
	                { className: 'hello' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'header-search-bar' },
	                    _react2.default.createElement('input', {
	                        onChange: this.handleSearchChange.bind(this),
	                        onFocus: this.handleSearchChange.bind(this),
	                        onBlur: this.disableIsSearching.bind(this),
	                        type: 'textbox', placeholder: 'What are you looking for' }),
	                    _react2.default.createElement(
	                        'div',
	                        { style: showSearchResult, className: 'header-search-bar-result' },
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            this.state.searchResult.map(function (item) {
	                                return _react2.default.createElement(
	                                    'li',
	                                    { key: item.NAME },
	                                    _react2.default.createElement(
	                                        'a',
	                                        {
	                                            href: "/" + item.TYPE.toLowerCase() + "/" + item.NAME.replace(/\s+/g, '-') },
	                                        item.NAME
	                                    )
	                                );
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'a',
	                        null,
	                        _react2.default.createElement('img', { width: '13', src: '/images/search-icon1.png' })
	                    )
	                ),
	                _react2.default.createElement('div', { className: 'clear-both-side' }),
	                loginModal
	            );
	        }
	    }]);
	
	    return SearchBarLogin;
	}(_react2.default.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(SearchBarLogin, null), document.getElementById('search-bar-login'));
	exports.default = SearchBarLogin;

/***/ },
/* 367 */
/*!*************************************************!*\
  !*** ./app/shared/header/search.bar.login.scss ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader/lib/loader.js!./../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./search.bar.login.scss */ 368);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./search.bar.login.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/lib/loader.js!./../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./search.bar.login.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 368 */
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/shared/header/search.bar.login.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n.header-search-bar {\n  float: left;\n  line-height: 70px; }\n\n.header-search-bar input {\n  padding: 14px 15px;\n  border: 1px solid #aaa;\n  color: #222;\n  width: 300px;\n  /* border-top-left-radius: 25px; */\n  /* border-bottom-left-radius: 25px; */ }\n\n.header-search-bar input:focus {\n  outline: none; }\n\n.header-search-bar a {\n  padding: 13px 30px 15px 30px;\n  background: #414141;\n  line-height: 70px;\n  /* border-top-right-radius: 25px; */\n  /* border-bottom-right-radius: 25px; */ }\n\n.header-search-bar img {\n  vertical-align: middle; }\n\n.header-login-button {\n  float: left;\n  color: #221;\n  margin-left: 10px;\n  line-height: 70px;\n  /*margin-top: -2px;*/ }\n\n.header-login-button a {\n  padding: 11px 25px 10px 25px; }\n\n.header-login-button {\n  height: 70px;\n  line-height: 70px;\n  margin-left: 70px; }\n\n.header-login-button a {\n  padding: 12px 25px;\n  border: 1px solid #222;\n  font-size: 12px;\n  background: #fff; }\n\n.header-login-button a:hover {\n  background: #eee;\n  background: #eef; }\n\n.header-search-bar-result {\n  background: #fff;\n  box-shadow: 0 0 1px #aaa;\n  position: absolute;\n  width: 331px;\n  overflow: hidden;\n  margin-top: -11px;\n  margin-left: 1px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  padding: 10px 0; }\n\n.header-search-bar-result li {\n  line-height: 10px; }\n\n.header-search-bar-result li a {\n  display: block;\n  line-height: 14px;\n  background: #fff;\n  color: #333;\n  font-size: 13px;\n  overflow: hidden;\n  padding: 8px 10px 8px 15px; }\n\n.header-search-bar-result li a:hover {\n  color: #444;\n  text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },
/* 369 */
/*!**********************************************************!*\
  !*** ./app/shared/social/color/social.buttons.color.jsx ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _socialButtonsColor = __webpack_require__(/*! ./social.buttons.color.scss */ 370);
	
	var _socialButtonsColor2 = _interopRequireDefault(_socialButtonsColor);
	
	var _socialShareService = __webpack_require__(/*! ../../../services/social.share.service.jsx */ 314);
	
	var _socialShareService2 = _interopRequireDefault(_socialShareService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SocialButtonsColor = function (_React$Component) {
	    _inherits(SocialButtonsColor, _React$Component);
	
	    function SocialButtonsColor(props) {
	        _classCallCheck(this, SocialButtonsColor);
	
	        var _this = _possibleConstructorReturn(this, (SocialButtonsColor.__proto__ || Object.getPrototypeOf(SocialButtonsColor)).call(this, props));
	
	        _this.state = {};
	        _this.productUrl = pageProductUrl;
	        _this.name = pageProductName;
	        _this.imageUrl = pageProductImageUrl;
	        _this.description = pageProductDescription;
	        return _this;
	    }
	
	    _createClass(SocialButtonsColor, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'shareOnFacebook',
	        value: function shareOnFacebook() {
	            _socialShareService2.default.shareOnFacebook(this.name, this.description, this.productUrl, this.imageUrl);
	        }
	    }, {
	        key: 'shareOnGooglePlus',
	        value: function shareOnGooglePlus() {
	            _socialShareService2.default.shareOnGooglePlus(this.productUrl, this.name);
	        }
	    }, {
	        key: 'shareOnTwitter',
	        value: function shareOnTwitter() {
	            _socialShareService2.default.shareOnTwitter(this.productUrl, this.name);
	        }
	    }, {
	        key: 'shareOnPintrest',
	        value: function shareOnPintrest() {
	            _socialShareService2.default.shareOnPintrest(this.productUrl, this.name);
	        }
	    }, {
	        key: 'shareOnWhatsapp',
	        value: function shareOnWhatsapp() {
	            _socialShareService2.default.shareOnWhatsapp(this.productUrl, this.name);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'social-button-color-container' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'social-button-color-fb social-button-color-common',
	                            onClick: this.shareOnFacebook.bind(this) },
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            'Share'
	                        ),
	                        _react2.default.createElement('img', { src: '/images/social/fb-64-white.gif' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'social-button-color-tw social-button-color-common',
	                            onClick: this.shareOnTwitter.bind(this) },
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            'Tweet'
	                        ),
	                        _react2.default.createElement('img', { src: '/images/social/tw-64-white.gif' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'social-button-color-gp social-button-color-common',
	                            onClick: this.shareOnGooglePlus.bind(this) },
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            '+1'
	                        ),
	                        _react2.default.createElement('img', { src: '/images/social/gp-64-white.gif' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'social-button-color-pr social-button-color-common',
	                            onClick: this.shareOnPintrest.bind(this) },
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            'Pin'
	                        ),
	                        _react2.default.createElement('img', { src: '/images/social/pr-64-white.gif' })
	                    ),
	                    _isDesktop ? "" : _react2.default.createElement(
	                        'div',
	                        { className: 'social-button-color-wa social-button-color-common',
	                            onClick: this.shareOnWhatsapp.bind(this) },
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            'Message'
	                        ),
	                        _react2.default.createElement('img', { src: '/images/social/wa-64-white.gif' })
	                    ),
	                    _react2.default.createElement('div', { className: 'clear-both-side' })
	                ),
	                _react2.default.createElement('div', { className: 'clear-both-side' })
	            );
	        }
	    }]);
	
	    return SocialButtonsColor;
	}(_react2.default.Component);
	
	if (socialButtonsColor) {
	    (0, _reactDom.render)(_react2.default.createElement(SocialButtonsColor, null), document.getElementById('social-buttons-color'));
	}
	exports.default = SocialButtonsColor;

/***/ },
/* 370 */
/*!***********************************************************!*\
  !*** ./app/shared/social/color/social.buttons.color.scss ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader/lib/loader.js!./../../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./social.buttons.color.scss */ 371);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js!./../../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./social.buttons.color.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js!./../../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./social.buttons.color.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 371 */
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/shared/social/color/social.buttons.color.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, ".social-button-color-container {\n  width: 100%;\n  display: flex; }\n\n.social-button-color-container li {\n  float: left;\n  display: block; }\n\n.social-button-color-container img {\n  width: 15px;\n  vertical-align: middle; }\n\n.social-button-color-container label {\n  color: #efefef;\n  margin-right: 20px;\n  display: none;\n  cursor: pointer; }\n\n.social-button-color-common {\n  padding: 8px 15px;\n  margin-left: 5px;\n  margin-right: 5px;\n  border-radius: 2px;\n  cursor: pointer;\n  flex: 1;\n  text-align: center;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.social-button-color-fb {\n  float: left;\n  background: #3b5998; }\n\n.social-button-color-fb:hover {\n  flex: 1.3; }\n\n.social-button-color-fb:hover label {\n  display: inline; }\n\n.social-button-color-tw {\n  float: left;\n  background: #55acee; }\n\n.social-button-color-tw:hover {\n  flex: 1.3; }\n\n.social-button-color-tw:hover label {\n  display: inline; }\n\n.social-button-color-gp {\n  float: left;\n  background: #dd4b39; }\n\n.social-button-color-gp:hover {\n  flex: 1.3; }\n\n.social-button-color-gp:hover label {\n  display: inline; }\n\n.social-button-color-pr {\n  float: left;\n  background: #cb2027; }\n\n.social-button-color-pr:hover {\n  flex: 1.3; }\n\n.social-button-color-pr:hover label {\n  display: inline; }\n\n.social-button-color-wa {\n  float: left;\n  background: #4dc247; }\n\n.social-button-color-wa:hover {\n  flex: 1.3; }\n\n.social-button-color-wa:hover label {\n  display: inline; }\n\n.social-button-color-animation, .social-button-color-fb:hover, .social-button-color-tw:hover, .social-button-color-gp:hover, .social-button-color-pr:hover, .social-button-color-wa:hover {\n  -webkit-transition: flex 300ms;\n  -moz-transition: flex 300ms;\n  -ms-transition: flex 300ms;\n  -o-transition: flex 300ms;\n  transition: flex 300ms; }\n", ""]);
	
	// exports


/***/ },
/* 372 */
/*!*************************************************************************!*\
  !*** ./app/home/cool-gadgets/category/cool.gadgets.category.module.jsx ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _gadgetTilesComponent = __webpack_require__(/*! ../../gadgets/gadget.tiles.component.jsx */ 340);
	
	var _gadgetTilesComponent2 = _interopRequireDefault(_gadgetTilesComponent);
	
	var _coolGadgetsCategoryModule = __webpack_require__(/*! ./cool.gadgets.category.module.scss */ 373);
	
	var _coolGadgetsCategoryModule2 = _interopRequireDefault(_coolGadgetsCategoryModule);
	
	var _sideTrendingStoriesComponent = __webpack_require__(/*! ../../side-story/side.trending.stories.component.jsx */ 348);
	
	var _sideTrendingStoriesComponent2 = _interopRequireDefault(_sideTrendingStoriesComponent);
	
	var _sideLatestReviewComponent = __webpack_require__(/*! ../../side-story/side.latest.review.component.jsx */ 354);
	
	var _sideLatestReviewComponent2 = _interopRequireDefault(_sideLatestReviewComponent);
	
	var _appFooter = __webpack_require__(/*! ../../../shared/footer/app.footer.jsx */ 355);
	
	var _appFooter2 = _interopRequireDefault(_appFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CoolGadgetsCategoryModule = function (_React$Component) {
	    _inherits(CoolGadgetsCategoryModule, _React$Component);
	
	    function CoolGadgetsCategoryModule(props) {
	        _classCallCheck(this, CoolGadgetsCategoryModule);
	
	        var _this = _possibleConstructorReturn(this, (CoolGadgetsCategoryModule.__proto__ || Object.getPrototypeOf(CoolGadgetsCategoryModule)).call(this, props));
	
	        var catId = _this.props.params.categoryId;
	        _this.catId = catId.trim().replace(/-/g, " ");
	        console.log(_this.catId);
	        return _this;
	    }
	
	    _createClass(CoolGadgetsCategoryModule, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'hideModal',
	        value: function hideModal() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-width' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'left-data-container' },
	                        _react2.default.createElement(_gadgetTilesComponent2.default, { name: this.catId + " Gadgets", loadMoreEnabled: true,
	                            type: 'CATEGORY_GADGET',
	                            categoryId: this.props.params.categoryId })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'right-data-container' },
	                        _react2.default.createElement(_sideTrendingStoriesComponent2.default, {
	                            name: 'Trending stories' }),
	                        _react2.default.createElement(_sideLatestReviewComponent2.default, {
	                            name: 'Latest review' })
	                    ),
	                    _react2.default.createElement('div', { className: 'clear-both-side' })
	                ),
	                _react2.default.createElement(_appFooter2.default, null)
	            );
	        }
	    }]);
	
	    return CoolGadgetsCategoryModule;
	}(_react2.default.Component);
	
	exports.default = CoolGadgetsCategoryModule;

/***/ },
/* 373 */
/*!**************************************************************************!*\
  !*** ./app/home/cool-gadgets/category/cool.gadgets.category.module.scss ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader/lib/loader.js!./../../../../~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./cool.gadgets.category.module.scss */ 374);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 326)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js!./../../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./cool.gadgets.category.module.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js!./../../../../node_modules/sass-loader/lib/loader.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./cool.gadgets.category.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 374 */
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./~/sass-loader/lib/loader.js?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./app/home/cool-gadgets/category/cool.gadgets.category.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 277)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-device-width: 6in) {\n  .page-width {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-mobile {\n    display: none; }\n  .left-data-container {\n    width: 100%; }\n  .right-data-container {\n    display: none; } }\n\n@media only screen and (min-device-width: 6in) {\n  .page-width {\n    width: 1050px;\n    margin-left: auto;\n    margin-right: auto; }\n  .full-width {\n    width: 100%; }\n  .hide-in-desktop {\n    display: none; }\n  .left-data-container {\n    width: 77%;\n    margin-left: -10px; }\n  .right-data-container {\n    width: 23%; } }\n\n.left-data-container {\n  margin-top: 25px;\n  float: left; }\n\n.right-data-container {\n  margin-top: 15px;\n  float: left; }\n\n.box-shadow-bottom {\n  box-shadow: 0 0 2px #aaa; }\n\n.box-shadow-all {\n  box-shadow: 0 0 1.5px #aaa; }\n\n.clear-both-side {\n  clear: both; }\n\n.left-aligned {\n  float: left; }\n\n.right-aligned {\n  float: right; }\n\n.hide-me {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  /* for vertical scrollbars */\n  height: 8px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n.gadget-tile-container {\n  width: 300px;\n  margin-top: 30px; }\n\n.story-tiles-container {\n  width: 700px;\n  margin-top: 30px; }\n\n.side-story-tiles-container {\n  width: 260px;\n  margin-top: 30px;\n  margin-bottom: 50px; }\n", ""]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=bundle.js.map