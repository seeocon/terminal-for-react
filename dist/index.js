'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.module.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Terminal = function (_Component) {
  _inherits(Terminal, _Component);

  function Terminal(props) {
    _classCallCheck(this, Terminal);

    var _this = _possibleConstructorReturn(this, (Terminal.__proto__ || Object.getPrototypeOf(Terminal)).call(this, props));

    _this.state = {
      value: '',
      currentValues: []
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.textInput = _react2.default.createRef();
    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  _createClass(Terminal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.textInput.current.focus();
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.keyCode === 13) {
        if (this.state.value.includes("clear")) {
          this.setState({
            currentValues: [],
            value: ''
          });
        } else {
          var currentValues = this.state.currentValues.slice();
          currentValues.push('~$ ' + this.state.value);
          currentValues.push(this.getCommand(this.state.value));
          this.setState({ currentValues: currentValues, value: '' });
          this.focus();
        }
      }
    }
  }, {
    key: 'getCommand',
    value: function getCommand(command) {
      return this.props.commands[command] || this.props.errorText;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      var self = this;
      if (this.state.currentValues != null) {
        var renderValues = this.state.currentValues.map(function (item, i) {
          return item.includes("jpg") || item.includes("png") || item.includes("gif") ? _react2.default.createElement('img', { className: 'displayPicture', key: i, src: item }) : _react2.default.createElement(
            'pre',
            { className: 'terminalText', style: self.props.style, key: i },
            item
          );
        });
      }
      return _react2.default.createElement(
        'div',
        { className: 'terminal', onClick: this.focus },
        _react2.default.createElement(
          'div',
          { className: 'terminalHeader', style: { backgroundColor: this.props.barBackgroundColor, color: this.props.barColor } },
          _react2.default.createElement(
            'div',
            { className: 'terminalOptions' },
            _react2.default.createElement('div', { className: 'terminalClose' }),
            _react2.default.createElement('div', { className: 'terminalMinimize' }),
            _react2.default.createElement('div', { className: 'terminalEnlarge' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'terminalTitle' },
            this.props.title
          ),
          _react2.default.createElement('div', { className: 'terminalTitle' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'terminalBody', style: { backgroundColor: this.props.backgroundColor, color: this.props.color } },
          _react2.default.createElement(
            'pre',
            { style: this.props.style, className: 'terminalText' },
            this.props.initialMessage
          ),
          renderValues,
          _react2.default.createElement(
            'div',
            { className: 'input' },
            _react2.default.createElement(
              'pre',
              { style: this.props.style, className: 'terminalText' },
              '~$'
            ),
            _react2.default.createElement('input', (_React$createElement = { style: this.props.style }, _defineProperty(_React$createElement, 'style', { color: this.props.color }), _defineProperty(_React$createElement, 'className', 'terminalText'), _defineProperty(_React$createElement, 'ref', this.textInput), _defineProperty(_React$createElement, 'autoFocus', true), _defineProperty(_React$createElement, 'value', this.state.value), _defineProperty(_React$createElement, 'onChange', this.handleChange), _React$createElement))
          )
        )
      );
    }
  }]);

  return Terminal;
}(_react.Component);

Terminal.defaultProps = {
  initialMessage: 'run the \'help\' command for a list of commands.',
  commands: {
    help: 'commands: [help, icon, clear]',
    icon: 'https://i.imgur.com/fj9gWRB.png'
  },
  color: 'green',
  backgroundColor: 'black',
  barBackgroundColor: 'black',
  barColor: 'green',
  title: 'terminal-for-react',
  errorText: 'This command doesn\'t exist!'
};

Terminal.propTypes = {
  initialMessage: _propTypes2.default.string,
  commands: _propTypes2.default.objectOf(_propTypes2.default.string),
  color: _propTypes2.default.string,
  backgroundColor: _propTypes2.default.string,
  barBackgroundColor: _propTypes2.default.string,
  barColor: _propTypes2.default.string,
  title: _propTypes2.default.string,
  errorText: _propTypes2.default.string,
  style: _propTypes2.default.objectOf(_propTypes2.default.string)
};

exports.default = Terminal;