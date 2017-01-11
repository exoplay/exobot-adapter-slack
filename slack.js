require("source-map-support").install();require("regenerator-runtime/runtime");
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@exoplay/exobot");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("@slack/client");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("@slack/client/lib/models");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slack_client__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slack_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__slack_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slack_client_lib_models__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slack_client_lib_models___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__slack_client_lib_models__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__);
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return SlackAdapter; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === void 0) { var parent = Object.getPrototypeOf(object); if (parent === null) { return; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === void 0) { return; } return getter.call(receiver); } };

var _class, _temp;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg), value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







const dmName = new __WEBPACK_IMPORTED_MODULE_1__slack_client_lib_models___default.a.DM()._modelName;

const EVENTS = {
  [__WEBPACK_IMPORTED_MODULE_0__slack_client__["CLIENT_EVENTS"].RTM.CONNECTING]: 'slackConnecting',
  [__WEBPACK_IMPORTED_MODULE_0__slack_client__["CLIENT_EVENTS"].RTM.RTM_CONNECTION_OPENED]: 'slackConnected',
  [__WEBPACK_IMPORTED_MODULE_0__slack_client__["CLIENT_EVENTS"].RTM.AUTHENTICATED]: 'slackAuthenticated',
  [__WEBPACK_IMPORTED_MODULE_0__slack_client__["CLIENT_EVENTS"].RTM.DISCONNECT]: 'slackDisconnected',
  [__WEBPACK_IMPORTED_MODULE_0__slack_client__["CLIENT_EVENTS"].RTM.UNABLE_TO_RTM_START]: 'slackUnableToStart',
  [__WEBPACK_IMPORTED_MODULE_0__slack_client__["CLIENT_EVENTS"].RTM.ATTEMPTING_RECONNECT]: 'slackReconnecting',
  [__WEBPACK_IMPORTED_MODULE_0__slack_client__["RTM_EVENTS"].MESSAGE]: 'slackMessage'
};
/* harmony export (immutable) */ exports["EVENTS"] = EVENTS;


let SlackAdapter = (_temp = _class = function (_Adapter) {
  _inherits(SlackAdapter, _Adapter);

  function SlackAdapter({ token, adapterName }) {
    _classCallCheck(this, SlackAdapter);

    var _this = _possibleConstructorReturn(this, (SlackAdapter.__proto__ || Object.getPrototypeOf(SlackAdapter)).apply(this, arguments));

    _this.token = token;
    _this.name = adapterName || _this.name;
    return _this;
  }

  _createClass(SlackAdapter, [{
    key: 'register',
    value: function register(bot) {
      _get(SlackAdapter.prototype.__proto__ || Object.getPrototypeOf(SlackAdapter.prototype), 'register', this).apply(this, arguments);
      const { token } = this;

      this.client = new __WEBPACK_IMPORTED_MODULE_0__slack_client__["RtmClient"](token, { logLevel: bot.logLevel });

      Object.keys(EVENTS).forEach(slackEvent => {
        const mappedFn = this[EVENTS[slackEvent]];
        this.client.on(slackEvent, mappedFn.bind(this));
        this.client.on(slackEvent, (...args) => {
          bot.emitter.emit(`slack-${ slackEvent }`, ...args);
        });
      });

      this.client.start();
    }
  }, {
    key: 'send',
    value: function send(message) {
      if (message.text) {
        this.bot.log.debug(`Sending ${ message.text } to ${ message.channel }`);
        this.client.sendMessage(message.text, message.channel);
      }
    }
  }, {
    key: 'slackConnecting',
    value: function slackConnecting() {
      this.bot.log.info('Connecting to Slack.');
      this.status = __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__["Adapter"].STATUS.CONNECTING;
    }
  }, {
    key: 'slackConnected',
    value: function slackConnected() {
      this.bot.log.info('Connected to Slack.');
    }
  }, {
    key: 'slackAuthenticated',
    value: function slackAuthenticated() {
      this.bot.log.notice('Successfully authenticated to Slack.');
      this.status = __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__["Adapter"].STATUS.CONNECTED;
    }
  }, {
    key: 'slackDisconnected',
    value: function slackDisconnected() {
      this.bot.log.critical('Disconnected from Slack.');
      this.status = __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__["Adapter"].STATUS.DISCONNECTED;
    }
  }, {
    key: 'slackUnableToStart',
    value: function slackUnableToStart() {
      this.bot.log.critical('Unable to start Slack.');
      this.status = __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__["Adapter"].STATUS.DISCONNECTED;
    }
  }, {
    key: 'slackReconnecting',
    value: function slackReconnecting() {
      this.bot.log.notice('Reconnecting to Slack.');
      this.status = __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__["Adapter"].STATUS.RECONNECTING;
    }
  }, {
    key: 'getRolesForUser',
    value: function getRolesForUser(userId) {
      if (this.adapterUsers && this.roleMapping && this.adapterUsers[userId]) {
        return this.adapterUsers[userId].roles.filter(role => this.roleMapping[role]).map(role => this.roleMapping[role]);
      }

      return [];
    }
  }, {
    key: 'getRoles',
    value: function getRoles(adapterUserId, adapterUser) {
      const roles = [];
      if (adapterUser) {
        if (adapterUser.is_admin) {
          roles.push('admin');
        }

        if (adapterUser.is_owner) {
          roles.push('owner');
        }
        return roles;
      }

      return !1;
    }
  }, {
    key: 'slackMessage',
    value: (() => {
      var _ref = _asyncToGenerator(function* (message) {
        let user;
        if (!message.text) {
          return;
        }

        const botId = this.client.activeUserId;
        if (message.user === botId) {
          return;
        }

        this.bot.log.debug(message.text);
        const slackUser = this.client.dataStore.getUserById(message.user);

        if (slackUser) {
          user = yield this.getUser(slackUser.id, slackUser.name, slackUser);
        } else {
          user = yield this.getUser(message.user, void 0, slackUser);
        }

        const channel = this.client.dataStore.getChannelGroupOrDMById(message.channel);

        if (message.text) {
          if (channel && channel._modelName === dmName) {
            return _get(SlackAdapter.prototype.__proto__ || Object.getPrototypeOf(SlackAdapter.prototype), 'receiveWhisper', this).call(this, { user, text: message.text, channel: message.channel });
          }

          _get(SlackAdapter.prototype.__proto__ || Object.getPrototypeOf(SlackAdapter.prototype), 'receive', this).call(this, { user, text: message.text, channel: message.channel });
        }
      });

      function slackMessage(_x) {
        return _ref.apply(this, arguments);
      }

      return slackMessage;
    })()
  }, {
    key: 'getUserIdByUserName',
    value: (() => {
      var _ref2 = _asyncToGenerator(function* (name) {
        const user = this.client.dataStore.getUserByName(name);
        if (user) {
          let botUser;
          try {
            botUser = yield this.getUser(user.id, user.name, user);
          } catch (err) {
            this.bot.log.warn(err);
          }

          return botUser.id;
        }
      });

      function getUserIdByUserName(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserIdByUserName;
    })()
  }]);

  return SlackAdapter;
}(__WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__["Adapter"]), _class.type = 'slack', _temp);


/***/ }
/******/ ])));
//# sourceMappingURL=slack.js.map