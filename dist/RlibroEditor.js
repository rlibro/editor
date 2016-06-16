'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = function (_Component) {
  _inherits(Editor, _Component);

  _createClass(Editor, [{
    key: 'initialState',
    value: function initialState() {
      return {
        initiatedLazyload: false,
        minHeight: window.innerHeight * 2,
        minItemIndex: 0,
        maxItemIndex: 100,
        itemDimensions: {
          height: this._itemHeight(),
          width: this._itemHeight(),
          gridWidth: 0,
          itemsPerRow: 2
        }
      };
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {};
    }
  }]);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Editor).call(this, props));

    _this.state = _this.initialState();
    // bind the functions
    _this._scrollListener = _this._scrollListener.bind(_this);
    _this._updateItemDimensions = _this._updateItemDimensions.bind(_this);
    _this._resizeListener = _this._resizeListener.bind(_this);
    _this._visibleIndexes = _this._visibleIndexes.bind(_this);
    return _this;
  }

  // LIFECYCLE

  _createClass(Editor, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //window.addEventListener('resize', this._resizeListener);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this._updateItemDimensions();
      // this._visibleIndexes();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if (nextProps.entries.length > this.props.entries.length) {
      //   this.setState({
      //     initiatedLazyload: false,
      //   });
      // }
      // // Update these all the time because entries may change on the fly.
      // // this._updateItemDimensions();
      // this._visibleIndexes();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // if (typeof this.props.renderRangeCallback === 'function') {
      //   this.props.renderRangeCallback(this.state.minItemIndex, this.state.maxItemIndex);
      // }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      //return !isEqual(this.state, nextState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
    //window.removeEventListener('resize', this._resizeListener);


    // LISTENERS

  }, {
    key: '_scrollListener',
    value: function _scrollListener(event) {
      var _this2 = this;

      clearTimeout(this.scrollOffset);
      this.scrollOffset = setTimeout(function () {
        _this2._visibleIndexes();
      }, 10);
    }
  }, {
    key: '_resizeListener',
    value: function _resizeListener(event) {
      if (!this.props.wrapperHeight) {
        this.setState({
          wrapperHeight: window.innerHeight
        });
      }
      this._updateItemDimensions();
      this._visibleIndexes();
    }

    // RENDER

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'rEditor' },
        '에디터 테스트'
      );
    }
  }]);

  return Editor;
}(_react.Component);

exports.default = Editor;
;