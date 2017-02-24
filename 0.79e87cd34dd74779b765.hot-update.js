webpackHotUpdate(0,{

/***/ 235:
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
	
	var Projectcard = function (_Component) {
		_inherits(Projectcard, _Component);
	
		function Projectcard(props) {
			_classCallCheck(this, Projectcard);
	
			var _this = _possibleConstructorReturn(this, (Projectcard.__proto__ || Object.getPrototypeOf(Projectcard)).call(this, props));
	
			_this.state = {
				projects: props.projects
			};
			return _this;
		}
	
		// @TODO has to be better to do this
	
	
		_createClass(Projectcard, [{
			key: 'render',
			value: function render() {
				var div = "";
				var eachProject = [];
				var projects = this.props.projects;
				for (var i = 0; i < projects.length; i++) {
					var project = projects[i];
					div = _react2.default.createElement(
						'div',
						{ key: i, className: 'border-shadow card' },
						_react2.default.createElement('img', { className: 'project-image', src: '../../public/img/' + project.photo_file_name, alt: project.title }),
						_react2.default.createElement(
							'div',
							{ className: 'padding-left-right-5 project-info' },
							_react2.default.createElement(
								'a',
								{ href: project.website },
								_react2.default.createElement(
									'h3',
									{ className: 'text-center' },
									project.title
								)
							),
							_react2.default.createElement(
								'p',
								null,
								' ',
								project.description
							),
							_react2.default.createElement(
								'h4',
								null,
								' ',
								_react2.default.createElement(
									'i',
									null,
									' ',
									project.skills
								)
							)
						)
					);
					eachProject.push(div);
				}
				return _react2.default.createElement(
					'div',
					{ id: 'container' },
					eachProject
				);
			}
		}]);
	
		return Projectcard;
	}(_react.Component);
	
	exports.default = Projectcard;

/***/ }

})
//# sourceMappingURL=0.79e87cd34dd74779b765.hot-update.js.map