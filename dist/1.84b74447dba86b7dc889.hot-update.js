webpackHotUpdate(1,{

/***/ 179:
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Projectcard = __webpack_require__(/*! ./Projectcard */ 180);
	
	var _Projectcard2 = _interopRequireDefault(_Projectcard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Project = function (_React$Component) {
		_inherits(Project, _React$Component);
	
		function Project() {
			_classCallCheck(this, Project);
	
			var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this));
	
			_this.state = {
				projects: []
			};
			return _this;
		}
	
		_createClass(Project, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;
	
				fetch('/project').then(function (response) {
					return response.json();
				}).then(function (result) {
					_this2.setState({
						projects: result
					});
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'projects' },
					_react2.default.createElement(_Projectcard2.default, { projects: this.state.projects })
				);
			}
		}]);
	
		return Project;
	}(_react2.default.Component);
	
	exports.default = Project;

/***/ },

/***/ 180:
/*!***************************************!*\
  !*** ./src/components/Projectcard.js ***!
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
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Projectcard = function (_React$Component) {
		_inherits(Projectcard, _React$Component);
	
		function Projectcard(props) {
			_classCallCheck(this, Projectcard);
	
			var _this = _possibleConstructorReturn(this, (Projectcard.__proto__ || Object.getPrototypeOf(Projectcard)).call(this, props));
	
			_this.state = {};
			return _this;
		}
	
		_createClass(Projectcard, [{
			key: 'render',
			value: function render() {
				var eachProject = [];
				var div = "";
				var projects = this.props.projects;
				for (var i = 0; i < projects.length; i++) {
					div = _react2.default.createElement(
						'div',
						null,
						' projects[i].title '
					);
					eachProject.push(div);
				}
				return _react2.default.createElement(
					'div',
					{ className: 'projectcard' },
					eachProject
				);
			}
		}]);
	
		return Projectcard;
	}(_react2.default.Component);
	
	exports.default = Projectcard;

/***/ }

})
//# sourceMappingURL=1.84b74447dba86b7dc889.hot-update.js.map