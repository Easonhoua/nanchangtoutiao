"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;
var DIFF_TIME = 60 * 1000 * 60 * 24;

var statConfig = __webpack_require__(/*! uni-stat-config */ 3).default || __webpack_require__(/*! uni-stat-config */ 3);
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var isReportData = function isReportData() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }

    if (report_status === '') {
      requestData(function (_ref)

      {var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }

    if (report_status === 1) {
      resolve();
    }

    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }

    if (end_time - start_time > diff_time) {
      requestData(function (_ref2)

      {var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }

  });
};

var requestData = function requestData(done) {
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: statConfig.appid }) };


  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {var

      data =
      res.data;
      if (data.ret === 0) {
        typeof done === 'function' && done({
          enable: data.enable });

      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      if (report_status_code === 1) {
        typeof done === 'function' && done({
          enable: res.enable });

      }
      // console.error('统计请求错误');
    } });

};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig$1 = __webpack_require__(/*! uni-stat-config */ 3).default || __webpack_require__(/*! uni-stat-config */ 3);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig$1.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "getIsReportData", value: function getIsReportData()

    {
      return isReportData();
    } }, { key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref3$key = _ref3.key,key = _ref3$key === void 0 ? '' : _ref3$key,_ref3$value = _ref3.value,value = _ref3$value === void 0 ? "" : _ref3$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig$1.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      this.getIsReportData().then(function () {
        uni.request({
          url: STAT_URL,
          method: 'POST',
          // header: {
          //   'content-type': 'application/json' // 默认值
          // },
          data: optionsData,
          success: function success() {
            // if (process.env.NODE_ENV === 'development') {
            //   console.log('stat request success');
            // }
          },
          fail: function fail(e) {
            if (++_this5._retry < 3) {
              setTimeout(function () {
                _this5._sendRequest(optionsData);
              }, 1000);
            }
          } });

      });
    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = getSgin(GetEncodeURIComponentOptions(data)).options;
        image.src = STAT_H5_URL + '?' + options;
      });
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-27820200527001","_inBundle":false,"_integrity":"sha512-mUmsdrO9iZv5E8lpR+yZsdxjuNz3yvPfd9KQkeWAQhOfUj9LvkHifYTC8j/Hz6rdfo0Y208wqRixNq77TzxI5A==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-27820200527001.tgz","_shasum":"2324942ff6417c2319ac24cd87ea9af04a4796eb","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"2cef0c9a12c4c980acd11787d6f4632d06dc00b0","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-27820200527001"};

/***/ }),
/* 3 */
/*!*********************************************************!*\
  !*** E:/headlines/headlines/pages.json?{"type":"stat"} ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__F11A804"});

/***/ }),
/* 4 */
/*!**********************************************************!*\
  !*** E:/headlines/headlines/pages.json?{"type":"style"} ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 5 */
/*!**********************************************************!*\
  !*** E:/headlines/headlines/main.js?{"type":"appStyle"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 6).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************************************************!*\
  !*** E:/headlines/headlines/App.vue?vue&type=style&index=0&lang=scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 7);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/App.vue?vue&type=style&index=0&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "status_bar": {
    "width": 100
  }
}

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 14 */
/*!************************************************!*\
  !*** E:/headlines/headlines/common/js/util.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {var _index = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n/**\r\n                                                                                                                                                                           * 方法名称: 跳转到webView\r\n                                                                                                                                                                           * 方法注释: \r\n                                                                                                                                                                           * 传入参数: webUrl->网页链接 webTitle->网页标题 webPic->网页图片\r\n                                                                                                                                                                           * 返回数值: \r\n                                                                                                                                                                           */\nfunction gotoWebView(webUrl, webTitle, webview, webPic) {\n  webview = webview || 'webView';\n  if (webUrl) {\n    var temUrl = encodeURIComponent(webUrl);\n    ////console.log(\"temUrltemUrl= \", temUrl);\n    if (webTitle) {\n      if (webPic) {\n        uni.navigateTo({\n          url: \"/pages/webView/\" + webview + \"?webUrl=\" + temUrl + \"&webTitle=\" + webTitle + \"&webPic=\" + webPic });\n\n      } else {\n        uni.navigateTo({\n          url: \"/pages/webView/\" + webview + \"?webUrl=\" + temUrl + \"&webTitle=\" + webTitle });\n\n      }\n    } else {\n      uni.navigateTo({\n        url: \"/pages/webView/\" + webview + \"?webUrl=\" + temUrl });\n\n    }\n  }\n}\n\n/**\r\n   * 方法名称: 举报\r\n   * 方法注释: 不用传任何参数,会先判断用户是否登录,登录之后才跳到举报页面\r\n   * 传入参数: 无\r\n   * 返回数值: 无\r\n   */\nfunction tipOff(relationId) {\n  if (_index.default.alreadyLogin()) {\n    uni.navigateTo({\n      url: \"/pages/user/userIndex/inform?relationId=\" + relationId,\n      animationType: \"slide-in-bottom\",\n      animationDuration: 200 });\n\n  }\n}\n\nfunction checkAppVersion(updateFlag) {\n\n  var sendData = {\n    \"action\": \"upgrade\" };\n\n  if (uni.getSystemInfoSync().platform == \"ios\") {\n    sendData.mod = \"ios\";\n  }\n  _index.default.get(\"api/ncrb/\", sendData, \"N\", false).then(function (res) {\n    __f__(\"log\", \"res = \", res, \" at common/js/util.js:57\");\n    uni.setStorageSync(\"serviceVersion\", res.data.version);\n    uni.setStorageSync(\"description\", res.data.desc);\n    uni.setStorageSync(\"apkurl\", res.data.apkurl);\n    if (updateFlag) {\n      compareVersion(res.data.version, res.data.desc, res.data.apkurl);\n    }\n  });\n\n}\n\nfunction compareVersion(serviceVersion, description, apkurl) {\n\n  plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {\n    var localVersion = wgtinfo.version; //app本地应用版本号\n\n    if (serviceVersion > localVersion) {\n      __f__(\"log\", \"serviceVersion=\" + serviceVersion, \" at common/js/util.js:74\");\n      __f__(\"log\", \"localVersion=\" + localVersion, \" at common/js/util.js:75\");\n      var subNVue = uni.getSubNVueById('versionUpdateTip');\n      // 在 subNVue/vue 页面触发事件  \n      // $emit(eventName, data)  \n      var app = getApp();\n      app.globalData.updateTip = description;\n      subNVue.show();\n      // uni.showModal({ //提醒用户更新  \n      // \ttitle: \"版本更新啦\",\n      // \tshowCancel: false,\n      // \tconfirmText: \"立即更新\",\n      // \tcontent: description,\n      // \tcomplete(e) {\n      // \t\tif (e.confirm) {\n      // \t\t\tuni.navigateTo({\n      // \t\t\t\turl:'/pages/user/setting/versionUpdate'\n      // \t\t\t});\n      // \t\t}\n      // \t}\n      // })\n    }\n  });\n\n}\nfunction gotoDetail(detail) {\n  if (detail.type && detail.type == 61) {\n    uni.navigateTo({\n      url: '/pages/detail/explainDetails?id=' + detail.id });\n\n  } else if (detail.style && detail.style == 'activity') {\n    uni.navigateTo({\n      url: '/pages/activity/activityDetails?id=' + detail.id });\n\n  } else if (detail.style && detail.style == 'wenzheng') {\n    uni.navigateTo({\n      url: '/pages/inquire/details?id=' + detail.id });\n\n  } else if (detail.url) {\n    if (detail.url == '#' || detail.style == 'h5' && detail.url == '') {\n      // uni.navigateTo({\n      // \turl: '/pages/inquire/details?id=' + detail.id\n      // });\n    } else if (detail.url.indexOf(\"http://\") >= 0 || detail.url.indexOf(\"https://\") >= 0) {\n      if (detail.url.indexOf(\"unionid={unionid}\") >= 0) {\n        if (_index.default.alreadyLogin()) {\n          detail.url = detail.url.replace(/{unionid}/, uni.getStorageSync(\"unionid\"));\n          gotoWebView(detail.url, detail.title, '', detail.pic);\n        }\n      } else {\n        gotoWebView(detail.url, detail.title, '', detail.pic);\n      }\n    } else if (detail.url.indexOf(\"ncnews://\") >= 0) {\n\n      if (detail.url.indexOf(\"ncnews://upgrade\") >= 0) {\n        //给市长留言列表\n        uni.navigateTo({\n          url: '/pages/user/setting/versionUpdate' });\n\n      } else if (detail.url.indexOf(\"wenzheng_list_10\") >= 0) {\n        //给市长留言列表\n        uni.navigateTo({\n          url: '/pages/inquire/inquireDetails' });\n\n      } else if (detail.url.indexOf(\"wenzheng_list_12\") >= 0) {\n        //思想大讨论\n        uni.navigateTo({\n          url: '/pages/inquire/thoughtDiscussList' });\n\n      } else if (detail.url.indexOf(\"wenzheng_send_\") >= 0) {\n        var type = detail.url.split('wenzheng_send_')[1];\n        //问政列表\n        uni.navigateTo({\n          url: '/pages/inquire/complaintSuggestionMessage?type=' + type });\n\n      } else if (detail.url.indexOf(\"wenzheng_list_\") >= 0) {\n        var type = detail.url.split('wenzheng_list_')[1];\n        //问政列表\n        uni.navigateTo({\n          url: '/pages/inquire/inquireList?type=' + type });\n\n      } else if (detail.url.indexOf(\"channel_\") >= 0) {\n        var type = detail.url.split('channel_')[1];\n        //新闻列表\n        uni.navigateTo({\n          url: '/pages/news/newsList?typeId=' + type });\n\n      } else if (detail.url.indexOf(\"article_\") >= 0) {\n        var id = detail.url.split('article_')[1];\n        uni.navigateTo({\n          url: '/pages/detail/details?id=' + id });\n\n      } else if (detail.url.indexOf(\"ncnews://zt_\") >= 0) {\n        var zid = detail.url.split('ncnews://zt_')[1];\n        uni.navigateTo({\n          url: '/pages/news/topic?zid=' + zid });\n\n      } else {\n        uni.navigateTo({\n          url: '/pages/detail/details?id=' + detail.id });\n\n      }\n    }\n  } else {\n    uni.navigateTo({\n      url: '/pages/detail/details?id=' + detail.id });\n\n  }\n}\n\n/**\r\n   * 方法名称: js获取不通设备下的导航栏高度,单位是px\r\n   * 方法注释: 使用JSON.parse之前先判断字符串是否可转为json数据\r\n   * 传入参数: 字符串\r\n   * 返回数值: string可以转json则返回true,否则返回false\r\n   */\nfunction getVarNaviBarHeight() {\n  try {\n\n    return plus.navigator.getStatusbarHeight() * plus.screen.scale;\n    // return uni.getSystemInfoSync().statusBarHeight + 44 + 'px';\n\n\n\n\n  } catch (e) {}\n  return 64;\n}\n\n/**\r\n   * 方法名称: 判断字符串是否可转为json数据\r\n   * 方法注释: 使用JSON.parse之前先判断字符串是否可转为json数据\r\n   * 传入参数: 字符串\r\n   * 返回数值: string可以转json则返回true,否则返回false\r\n   */\nfunction isJsonString(str) {\n  try {\n    if (typeof JSON.parse(str) == \"object\") {\n      return true;\n    }\n  } catch (e) {}\n  return false;\n}\n\n\n\nfunction formatArray(array) {\n  var theArray = [];\n  for (var i = 0; i < array.length; i++) {\n    if (array[i] && !(array[i] == 'undefined')) {\n      theArray.push(array[i]);\n    }\n  }\n  return theArray;\n}\n\nfunction dateCheck(RQ) {\n  var date = RQ;\n  var result = date.match(/^(\\d{1,4})(-|\\/)(\\d{1,2})\\2(\\d{1,2})$/);\n\n  if (result == null)\n  return false;\n  var d = new Date(result[1], result[3] - 1, result[4]);\n  return d.getFullYear() == result[1] && d.getMonth() + 1 == result[3] && d.getDate() == result[4];\n}\n\n\n\nfunction formatLocation(longitude, latitude) {\n  if (typeof longitude === 'string' && typeof latitude === 'string') {\n    longitude = parseFloat(longitude);\n    latitude = parseFloat(latitude);\n  }\n\n  longitude = longitude.toFixed(2);\n  latitude = latitude.toFixed(2);\n\n  return {\n    longitude: longitude.toString().split('.'),\n    latitude: latitude.toString().split('.') };\n\n}\n\nfunction dateDiff(dateStr) {\n  var date = new Date(dateStr);\n  var nowdate = new Date();\n  var diff = nowdate.getDate() - date.getDate();\n  switch (diff) {\n    case 0:\n      return '今天';\n      break;\n    case 1:\n      return '昨天';\n      break;\n    case 2:\n      return '前天';\n      break;\n    default:\n      return diff + '天前';\n      break;}\n\n};\n\nfunction formatMinutesTime(dateStr) {\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  var date = new Date(parseInt(dateStr));\n  return _format(date.getHours()) + ':' + _format(date.getMinutes());\n};\n\nfunction formatTime(time) {\n  if (typeof time !== 'number' || time < 0) {\n    return time;\n  }\n\n  var hour = parseInt(time / 3600);\n  time = time % 3600;\n  var minute = parseInt(time / 60);\n  time = time % 60;\n  var second = time;\n\n  return [hour, minute, second].map(function (n) {\n    n = n.toString();\n    return n[1] ? n : '0' + n;\n  }).join(':');\n}\n\n/**\r\n   * 方法名称: 将日期格式化为某月某日\r\n   * 方法注释: 比如传入2019-11-10,则返回11月10日\r\n   * 传入参数: dateStr 日期字符串\r\n   * 返回数值: 带有月日的日期字符串\r\n   */\nfunction formatMinutesDay(dateStr) {\n  if (dateStr) {\n    dateStr = dateStr.replace(/-/ig, \"/\");\n  }\n\n  var date = new Date(parseInt(dateStr));\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return +_format(date.getMonth() + 1) + '月' + _format(date.getDate()) + \"日\";\n};\n\nfunction formatDateTime(dateStr) {\n  var date;\n  if (dateStr) {\n    date = new Date(dateStr);\n  } else {\n    date = new Date();\n  }\n\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return date.getFullYear() + '-' + _format(date.getMonth() + 1) + '-' + _format(date.getDate()) + ' ' +\n  _format(date.getHours()) + ':' + _format(date.getMinutes());\n}\n\n\nvar formatDate = function formatDate(date) {\n  if (!date instanceof Date) {\n    date = new Date(date);\n  }\n  var year = date.getFullYear();\n  var month = date.getMonth() + 1;\n  var day = date.getDate();\n  return [year, month, day].map(formatNumber).join('-');\n};\n/**\r\n    * 方法名称: 获取当前日期的前几天或者后几天\r\n    * 方法注释: dayCount传入负数比如-3,表示获取当前日期的前3天,传入正数比如2,表示获取后天的日期\r\n    * 传入参数: dayCount 正整数或者负整数\r\n    * 返回数值: 前日期的前几天或者后几天的字符串\r\n    */\nvar getDateWithCount = function getDateWithCount(dayCount) {\n  var dd = new Date();\n  dd.setDate(dd.getDate() + dayCount); //获取AddDayCount天后的日期  \n  var y = dd.getFullYear();\n  var m = dd.getMonth() + 1 < 10 ? \"0\" + (dd.getMonth() + 1) : dd.getMonth() + 1; //获取当前月份的日期，不足10补0  \n  var d = dd.getDate() < 10 ? \"0\" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0  \n  return y + \"-\" + m + \"-\" + d;\n};\n\nvar getTimeWithHour = function getTimeWithHour(hours) {\n  var dd = new Date();\n  var tt = dd.getTime();\n  var ntt = tt + hours * 60 * 1000;\n  dd.setDate(dd.getDate() + dayCount); //获取AddDayCount天后的日期  \n  var y = dd.getFullYear();\n  var m = dd.getMonth() + 1 < 10 ? \"0\" + (dd.getMonth() + 1) : dd.getMonth() + 1; //获取当前月份的日期，不足10补0  \n  var d = dd.getDate() < 10 ? \"0\" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0  \n  return y + \"-\" + m + \"-\" + d;\n};\n\n\nvar getDaysByDateString = function getDaysByDateString(dateString1, dateString2) {\n  var startDate = Date.parse(dateString1.replace('/-/g', '/'));\n  var endDate = Date.parse(dateString2.replace('/-/g', '/'));\n  var diffDate = endDate - startDate + 1 * 24 * 60 * 60 * 1000;\n  var days = diffDate / (1 * 24 * 60 * 60 * 1000);\n  //alert(diffDate/(1*24*60*60*1000));  \n  return days;\n};\n\n\n/**\r\n    * 方法名称: 获取当前日期的星期\r\n    * 方法注释: dateString传入日期格式的字符串\r\n    * 传入参数: dateString传入日期格式的字符串\r\n    * 返回数值: 日期的星期\r\n    */\nvar getDateWeekend = function getDateWeekend(dateString) {\n  var date = new Date(parseInt(dateString));\n  var a = [\"日\", \"一\", \"二\", \"三\", \"四\", \"五\", \"六\"];\n  var week = date.getDay();\n  var str = \"周\" + a[week];\n  return str;\n};\n\nvar formatNumber = function formatNumber(n) {\n  n = n.toString();\n  return n[1] ? n : '0' + n;\n};\n\nvar dateUtils = {\n  UNITS: {\n    '年': 31557600000,\n    '月': 2629800000,\n    '天': 86400000,\n    '小时': 3600000,\n    '分钟': 60000,\n    '秒': 1000 },\n\n  humanize: function humanize(milliseconds) {\n    var humanize = '';\n    for (var key in this.UNITS) {\n      if (milliseconds >= this.UNITS[key]) {\n        humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';\n        break;\n      }\n    }\n    return humanize || '刚刚';\n  },\n  format: function format(dateStr) {\n    var date = this.parse(dateStr);\n    var diff = Date.now() - date.getTime();\n    if (diff < this.UNITS['天']) {\n      return this.humanize(diff);\n    }\n    var _format = function _format(number) {\n      return number < 10 ? '0' + number : number;\n    };\n    return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +\n    _format(date.getHours()) + ':' + _format(date.getMinutes()) + '111';\n  },\n  parse: function parse(str) {//将\"yyyy-mm-dd HH:MM:ss\"格式的字符串，转化为一个Date对象\n    var a = str.split(/[^0-9]/);\n    return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);\n  },\n  formatDate: function formatDate(dateStr) {\n    //const mistiming = Math.round((Date.now() - new Date(dateStr).getTime()) / 1000)\n    //const tags = ['年', '个月', '星期', '天', '小时', '分钟', '秒']\n    //const times = [31536000, 2592000, 604800, 86400, 3600, 60, 1]\n    //console.info(\"new Date(dateStr).getDate():\" + new Date(dateStr).getDate() + \"--\" + Date.now());\n    var mistiming = Math.round((Date.now() - new Date(dateStr)) / (24 * 60 * 60 * 1000));\n    var tags = ['年', '个月', '星期', '天'];\n    var times = [31536000, 2592000, 604800, 86400];\n    for (var i = 0; i < times.length; i++) {\n      var inm = Math.floor(mistiming / times[i]);\n      if (tags[i] === '天') {\n        switch (inm) {\n          case 0:\n            return '今天';\n            break;\n          case 1:\n            return '昨天';\n            break;\n          case 2:\n            return '前天';\n            break;\n          default:\n            return inm + tags[i] + '前';\n            break;}\n\n      }\n      if (inm !== 0) {\n        return inm + tags[i] + '前';\n      }\n    }\n  } };\n\n\n/**\r\n        * 方法名称: 将日期格式化为某月某日\r\n        * 方法注释: 比如传入15800000000,则返回11月10日\r\n        * 传入参数: dateStr 日期字符串\r\n        * 返回数值: 带有月日的日期字符串\r\n        */\nfunction formatYearMinutesDay(dateStr) {\n  var date = new Date(parseInt(dateStr));\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return +date.getFullYear() + '年' + _format(date.getMonth() + 1) + '月' + _format(date.getDate()) + \"日\";\n};\n/**\r\n    * 方法名称: 将日期格式化为某月某日\r\n    * 方法注释: 比如传入15800000000,则返回11月10日\r\n    * 传入参数: dateStr 日期字符串\r\n    * 返回数值: 带有月日的日期字符串\r\n    */\nfunction formatYearMinutesDayFormt(dateStr) {\n  var date = new Date(parseInt(dateStr));\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return +date.getFullYear() + '-' + _format(date.getMonth() + 1) + '-' + _format(date.getDate()) + \"\";\n};\n\n\n/**\r\n    * 方法名称: 将日期格式化为某月某日\r\n    * 方法注释: 比如传入15800000000,则返回11/10\r\n    * 传入参数: dateStr 日期字符串\r\n    * 返回数值: 11/10\r\n    */\nfunction formatMonthDay(dateStr) {\n  var date = new Date(parseInt(dateStr));\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return _format(date.getMonth() + 1) + '/' + _format(date.getDate());\n};\n// 将一维数组拆分成二维数组\nfunction multiArray(array) {\n  var newArray = array.reduce(function (prev, next, index) {\n    if (index % 2 === 0) {\n      prev.push([]);\n    }\n    prev[prev.length - 1].push(next);\n    return prev;\n  }, []);\n  return newArray;\n}\n/**\r\n   * 方法名称: 打开某个地点的所在位置的地图\r\n   * 方法注释: \r\n   * 传入参数: \r\n   * 返回数值: \r\n   */\nfunction openLocation(longitude, latitude, name, address) {\n  uni.openLocation({\n    longitude: Number(longitude),\n    latitude: Number(latitude),\n    name: name,\n    address: address,\n    fail: function fail() {\n      uni.navigateBack({});\n\n\n    } });\n\n}\n/**\r\n   * 方法名称: 打开店铺地址的位置\r\n   * 方法注释: \r\n   * 传入参数: shopInfo店铺信息必须包含经纬度/店铺名称/店铺地址\r\n   * 返回数值: 无\r\n   */\nfunction openShopLocation(shopInfo) {\n  if (!shopInfo) return;\n  uni.openLocation({\n    longitude: Number(shopInfo.coordinateLng),\n    latitude: Number(shopInfo.coordinateLat),\n    name: shopInfo.shopName,\n    address: shopInfo.address,\n    fail: function fail() {\n      uni.navigateBack({});\n\n\n    } });\n\n}\n/**\r\n   * 方法名称: 导航至目的地\r\n   * 方法注释: 需要传入目的地的经度、维度，如果不传默认目的是滕王阁，当前位置默认为用户所在位置，测试时可默认为南昌日报大厦\r\n   * 传入参数: desLongitude->目的地的经度 desLatitude->目的地的纬度 desAddress->目的的地址名称，比如滕王阁\r\n   * 返回数值: 无返回值，获取当前用户位置失败时会弹框提示\r\n   */\nfunction navigateToLocation() {var desLongitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 115.881141;var desLatitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 28.681356;var desAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '滕王阁';\n\n  uni.getLocation({\n    success: function success(res) {\n      //var src = new plus.maps.Point(115.885449,28.71359);\t \t\t// 南昌日报大厦（高德坐标）\n      // var dst = new plus.maps.Point(desLongitude,desLatitude);     // 目的地位置（高德坐标）\n\n      //var src = new plus.maps.Point(115.885449,28.71359);\t \t\t// 南昌日报大厦（高德坐标）\n      // var dst = new plus.maps.Point(desLongitude,desLatitude);     // 目的地位置（高德坐标）\n      ////console.log(res.longitude, res.latitude);\n      var src = new plus.maps.Point(res.longitude, res.latitude); // 当前位置 (高德坐标)\n      var point = GPS.gcj_decrypt_exact(desLongitude, desLatitude);\n      var dst = new plus.maps.Point(point.lon, point.lat); // 南昌滕王阁 (高德坐标)\n      plus.maps.openSysMap(dst, desAddress, src);\n    },\n    fail: function fail(err) {\n\n      var src = new plus.maps.Point(115.885449, 28.71359); // 南昌日报大厦（高德坐标）\n      var dst = new plus.maps.Point(desLongitude, desLatitude); // 南昌滕王阁 (高德坐标)\n      plus.maps.openSysMap(dst, desAddress, src);\n      if (err.errMsg.indexOf(\"auth deny\") >= 0) {\n        // uni.showToast({\n        // \ttitle: \"访问位置被拒绝,请到设置中允许ye南昌开启位置访问权限\"\n        // })\n      } else {\n          // uni.showToast({\n          // \ttitle: err.errMsg\n          // })\n\n        }\n    } });\n\n\n\n}\n\nfunction distance(latA, lonA, latB, lonB) {\n  return GPS.distance(latA, lonA, latB, lonB);\n}\nvar GPS = {\n  PI: 3.14159265358979324,\n  x_pi: 3.14159265358979324 * 3000.0 / 180.0,\n  delta: function delta(lat, lon) {\n    // Krasovsky 1940\n    //\n    // a = 6378245.0, 1/f = 298.3\n    // b = a * (1 - f)\n    // ee = (a^2 - b^2) / a^2;\n    var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。\n    var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。\n    var dLat = this.transformLat(lon - 105.0, lat - 35.0);\n    var dLon = this.transformLon(lon - 105.0, lat - 35.0);\n    var radLat = lat / 180.0 * this.PI;\n    var magic = Math.sin(radLat);\n    magic = 1 - ee * magic * magic;\n    var sqrtMagic = Math.sqrt(magic);\n    dLat = dLat * 180.0 / (a * (1 - ee) / (magic * sqrtMagic) * this.PI);\n    dLon = dLon * 180.0 / (a / sqrtMagic * Math.cos(radLat) * this.PI);\n    return {\n      'lat': dLat,\n      'lon': dLon };\n\n  },\n\n  //WGS-84 to GCJ-02\n  gcj_encrypt: function gcj_encrypt(wgsLat, wgsLon) {\n    if (this.outOfChina(wgsLat, wgsLon))\n    return {\n      'lat': wgsLat,\n      'lon': wgsLon };\n\n\n    var d = this.delta(wgsLat, wgsLon);\n    return {\n      'lat': wgsLat + d.lat,\n      'lon': wgsLon + d.lon };\n\n  },\n  //GCJ-02 to WGS-84\n  gcj_decrypt: function gcj_decrypt(gcjLat, gcjLon) {\n    if (this.outOfChina(gcjLat, gcjLon))\n    return {\n      'lat': gcjLat,\n      'lon': gcjLon };\n\n\n    var d = this.delta(gcjLat, gcjLon);\n    return {\n      'lat': gcjLat - d.lat,\n      'lon': gcjLon - d.lon };\n\n  },\n  //GCJ-02 to WGS-84 exactly\n  gcj_decrypt_exact: function gcj_decrypt_exact(gcjLon, gcjLat) {\n    var initDelta = 0.01;\n    var threshold = 0.000000001;\n    var dLat = initDelta,\n    dLon = initDelta;\n    var mLat = gcjLat - dLat,\n    mLon = gcjLon - dLon;\n    var pLat = gcjLat + dLat,\n    pLon = gcjLon + dLon;\n    var wgsLat,wgsLon,i = 0;\n    while (1) {\n      wgsLat = (mLat + pLat) / 2;\n      wgsLon = (mLon + pLon) / 2;\n      var tmp = this.gcj_encrypt(wgsLat, wgsLon);\n      dLat = tmp.lat - gcjLat;\n      dLon = tmp.lon - gcjLon;\n      if (Math.abs(dLat) < threshold && Math.abs(dLon) < threshold)\n      break;\n\n      if (dLat > 0) pLat = wgsLat;else\n      mLat = wgsLat;\n      if (dLon > 0) pLon = wgsLon;else\n      mLon = wgsLon;\n\n      if (++i > 10000) break;\n    }\n    //////console.log(i);\n    return {\n      'lon': wgsLon,\n      'lat': wgsLat };\n\n  },\n\n  // two point's distance\n  distance: function distance() {var latA = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 115.857963;var lonA = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 28.6926;var latB = arguments.length > 2 ? arguments[2] : undefined;var lonB = arguments.length > 3 ? arguments[3] : undefined;\n    latA = latA || 115.857963, lonA = lonA || 28.6926;\n    var earthR = 6371000.;\n    var x = Math.cos(latA * this.PI / 180.) * Math.cos(latB * this.PI / 180.) * Math.cos((lonA - lonB) * this.PI / 180);\n    var y = Math.sin(latA * this.PI / 180.) * Math.sin(latB * this.PI / 180.);\n    var s = x + y;\n    if (s > 1) s = 1;\n    if (s < -1) s = -1;\n    var alpha = Math.acos(s);\n    var distance = alpha * earthR;\n    return distance;\n  },\n  outOfChina: function outOfChina(lat, lon) {\n    if (lon < 72.004 || lon > 137.8347)\n    return true;\n    if (lat < 0.8293 || lat > 55.8271)\n    return true;\n    return false;\n  },\n  transformLat: function transformLat(x, y) {\n    var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));\n    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;\n    ret += (20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin(y / 3.0 * this.PI)) * 2.0 / 3.0;\n    ret += (160.0 * Math.sin(y / 12.0 * this.PI) + 320 * Math.sin(y * this.PI / 30.0)) * 2.0 / 3.0;\n    return ret;\n  },\n  transformLon: function transformLon(x, y) {\n    var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));\n    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;\n    ret += (20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin(x / 3.0 * this.PI)) * 2.0 / 3.0;\n    ret += (150.0 * Math.sin(x / 12.0 * this.PI) + 300.0 * Math.sin(x / 30.0 * this.PI)) * 2.0 / 3.0;\n    return ret;\n  } };\n\n\nfunction friendlyDate(timestamp) {\n  var formats = {\n    'year': '%n% 年前',\n    'month': '%n% 月前',\n    'day': '%n% 天前',\n    'hour': '%n% 小时前',\n    'minute': '%n% 分钟前',\n    'second': '%n% 秒前' };\n\n\n  var now = Date.now();\n  var seconds = Math.floor((now - timestamp) / 1000);\n  var minutes = Math.floor(seconds / 60);\n  var hours = Math.floor(minutes / 60);\n  var days = Math.floor(hours / 24);\n  var months = Math.floor(days / 30);\n  var years = Math.floor(months / 12);\n\n  var diffType = '';\n  var diffValue = 0;\n  if (years > 0) {\n    diffType = 'year';\n    diffValue = years;\n  } else {\n    if (months > 0) {\n      diffType = 'month';\n      diffValue = months;\n    } else {\n      if (days > 0) {\n        diffType = 'day';\n        diffValue = days;\n      } else {\n        if (hours > 0) {\n          diffType = 'hour';\n          diffValue = hours;\n        } else {\n          if (minutes > 0) {\n            diffType = 'minute';\n            diffValue = minutes;\n          } else {\n            diffType = 'second';\n            diffValue = seconds === 0 ? seconds = 1 : seconds;\n          }\n        }\n      }\n    }\n  }\n  return formats[diffType].replace('%n%', diffValue);\n}\n\n\n/**\r\n   * 根据字段去重\r\n   * @param {Object} arr 集合\r\n   * @param {Object} field 去重字段\r\n   */\nfunction unique(arr, field) {\n  var map = {};\n  var res = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (!map[arr[i][field]]) {\n      map[arr[i][field]] = 1;\n      res.push(arr[i]);\n    }\n  }\n  return res;\n}\n\n/**\r\n    * 方法名称: 日期字符串转时间戳\r\n    * 方法注释: 时间戳值转到秒，不到毫秒\r\n    * 传入参数: dateString 日期字符串\r\n    * 返回数值: 时间戳\r\n  */\nfunction dateStringToTimestamp(dateString) {\n  dateString = dateString.substring(0, 16); //截取到秒\n  dateString = dateString.replace(/-/g, '/'); //必须把日期'-'转为'/'\n  var timestamp = new Date(dateString).getTime();\n  timestamp = timestamp / 1000;\n  __f__(\"log\", \"timestamp == \", timestamp, \" at common/js/util.js:807\");\n  return timestamp;\n}\n/**\r\n    * 方法名称: 时间戳转日期字符串\r\n    * 方法注释: 装换结果截取到天，不截取到时分秒\r\n    * 传入参数: timestamp 时间戳\r\n    * 返回数值: 日期字符串\r\n  */\nfunction timestampToDateString(timestamp) {\n  var d = new Date(timestamp * 1000); //根据时间戳生成的时间对象\n  var date = d.getFullYear() + \"-\" + (\n  d.getMonth() + 1) + \"-\" +\n  d.getDate(); // + \" \" + \n  // (d.getHours()) + \":\" + \n  // (d.getMinutes()) + \":\" + \n  // (d.getSeconds());\n  __f__(\"log\", \"datedate = \", date, \" at common/js/util.js:824\");\n  return date;\n\n}\n\n/**\r\n   * 分享-获取服务商列表\r\n   * 返回: 服务商列表\r\n   */\nfunction getShareList() {\n  var shareList = [];\n  uni.getProvider({ //获取服务商\n    service: 'share',\n    success: function success(res) {\n      __f__(\"log\", \"服务商信息: \" + JSON.stringify(res), \" at common/js/util.js:838\");\n      if (res.provider.length == 0) {\n        res.provider = [\"weixin\", \"copyLink\", 'refresh'];\n      } else {\n        res.provider.push(\"copyLink\");\n        res.provider.push(\"refresh\");\n      }\n      for (var i = 0; i < res.provider.length; i++) {\n        var item = res.provider[i];\n        if (item == 'weixin') {\n          shareList.push(setupShareItem('weixin', \"微信\", \"WXSceneSession\"));\n          shareList.push(setupShareItem('weixin', \"朋友圈\", \"WXSenceTimeline\"));\n        }\n        //复制链接\n        if (item == 'copyLink') {\n          shareList.push(setupShareItem('copyLink', \"复制链接\", \"copyLink\"));\n        }\n        //刷新\n        if (item == 'refresh') {\n          shareList.push(setupShareItem('refresh', '刷新', 'refresh'));\n        }\n        // if (item == 'sinaweibo') {\n        // \tshareList.push(self.setupShareItem(\"weibo\", \"微博\", \"weibo\"));\n        // }\n        // if (item == 'qq') {\n        // \tshareList.push(self.setupShareItem(\"qq\", \"qq\", \"qq\"));\n        // \t// 不能直接分享到QQ空间，可以分享到QQ，然后在QQ的界面里选择QQ空间。\n        // \t// shareList.push(self.setupShareItem(\"zone\",\"qq空间\"));\n        // }\n      }\n      __f__(\"log\", \"服务商列表: \" + JSON.stringify(shareList), \" at common/js/util.js:868\");\n    },\n    fail: function fail(res) {\n      __f__(\"log\", \"获取分享服务商列表失败: \" + JSON.stringify(res), \" at common/js/util.js:871\");\n    } });\n\n  return shareList;\n}\n\n/**\r\n   * 分享-获取服务商对应图片\r\n   * 参数: provider 服务商名称\r\n   * 参数: title 标题\r\n   * 参数: scene 场景\r\n   * 返回: 服务商对应图片\r\n   */\nfunction setupShareItem(provider, title, scene) {\n  var item = {\n    provider: provider,\n    scene: scene,\n    title: title,\n    image: \"/static/img/share/\" + scene + \".png\" };\n\n  return item;\n}\n\n/**\r\n   * 分享-分享-分享微信或者qq或者其它\r\n   * 参数: item 选中的服务商信息(对象)\r\n   * 参数: detail 分享的内容信息(对象)\r\n   * 返回: 是否分享成功\r\n   */\nfunction clickShareItem(item, detail) {\n  var isShare = false;\n  //detail.link = detail.link.replace(\"{unionid}\",uni.getStorageSync(\"unionid\"));\n  // if (true) {\n  if (uni.getSystemInfoSync().platform == \"ios\") {\n    uni.downloadFile({\n      url: detail.pic, //仅为示例，并非真实的资源\n      success: function success(res) {\n        if (res.statusCode === 200) {\n          plus.zip.compressImage({\n            src: res.tempFilePath,\n            dst: \"_doc/share.png\",\n            quality: 20,\n            overwrite: true,\n            format: \"png\",\n            width: \"100px\",\n            height: \"100px\" },\n\n          function () {\n            detail.pic = \"_doc/share.png\";\n            uni.share({\n              provider: item.provider,\n              scene: item.scene, //必填: provider为weixin时\n              type: item.scene == 'qq' ? 1 : 0, //选填: 0为图文，qq不支持\n              title: detail.title, //选填: \n              summary: detail.desc, //type=1时必填: 分享内容的摘要\n              href: detail.link, //type=0时必填: 跳转链接\n              imageUrl: detail.pic, //type=0、2、5时必填: 图片大于20kb时不显示,推荐使用小于20Kb的图片\n              //mediaUrl:'',//type 为 3、4 时必选: 音视频地址\n              //miniProgram:{},//type 为 5 时必选: 分享小程序必要参数\n              success: function success(res) {//调用成功\n                __f__(\"log\", \"分享调用成功: \" + JSON.stringify(res), \" at common/js/util.js:931\");\n                isShare = true;\n                _index.default.toastTipsTime(\"分享成功\", 1500);\n              },\n              fail: function fail(error) {//调用失败\n                __f__(\"log\", \"分享调用失败: \" + JSON.stringify(error), \" at common/js/util.js:936\");\n                isShare = false;\n              } });\n\n          }, function (error) {\n            isShare = false;\n            __f__(\"log\", \"Compress error!\", error, \" at common/js/util.js:942\");\n          });\n        }\n      } });\n\n  } else {\n    uni.share({\n      provider: item.provider,\n      scene: item.scene, //必填: provider为weixin时\n      type: item.scene == 'qq' ? 1 : 0, //选填: 0为图文，qq不支持\n      title: detail.title, //选填: \n      summary: detail.desc, //type=1时必填: 分享内容的摘要\n      href: detail.link, //type=0时必填: 跳转链接\n      imageUrl: detail.pic, //type=0、2、5时必填: 图片大于20kb时不显示,推荐使用小于20Kb的图片\n      //mediaUrl:'',//type 为 3、4 时必选: 音视频地址\n      //miniProgram:{},//type 为 5 时必选: 分享小程序必要参数\n      success: function success(res) {//调用成功\n        __f__(\"log\", \"分享调用成功: \" + JSON.stringify(res), \" at common/js/util.js:959\");\n        isShare = true;\n        _index.default.toastTipsTime(\"分享成功\", 1500);\n      },\n      fail: function fail(error) {//调用失败\n        __f__(\"log\", \"分享调用失败: \" + JSON.stringify(error), \" at common/js/util.js:964\");\n        isShare = false;\n      } });\n\n  }\n  return isShare;\n}\n\nmodule.exports = {\n  isJsonString: isJsonString,\n  formatTime: formatTime,\n  formatLocation: formatLocation,\n  dateUtils: dateUtils,\n  dateDiff: dateDiff,\n  formatMinutesTime: formatMinutesTime,\n  formatMinutesDay: formatMinutesDay,\n  formatDate: formatDate,\n  formatDateTime: formatDateTime,\n  getDateWithCount: getDateWithCount,\n  getDateWeekend: getDateWeekend,\n  getDaysByDateString: getDaysByDateString,\n  dateCheck: dateCheck,\n  multiArray: multiArray,\n  navigateToLocation: navigateToLocation,\n  distance: distance,\n  formatArray: formatArray,\n  getVarNaviBarHeight: getVarNaviBarHeight,\n  openLocation: openLocation,\n  openShopLocation: openShopLocation,\n  checkAppVersion: checkAppVersion,\n  tipOff: tipOff,\n  gotoWebView: gotoWebView,\n  friendlyDate: friendlyDate,\n  dateStringToTimestamp: dateStringToTimestamp,\n  timestampToDateString: timestampToDateString,\n  formatYearMinutesDay: formatYearMinutesDay,\n  formatYearMinutesDayFormt: formatYearMinutesDayFormt,\n  formatMonthDay: formatMonthDay,\n  gotoDetail: gotoDetail,\n  getShareList: getShareList,\n  clickShareItem: clickShareItem,\n  unique: unique };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2pzL3V0aWwuanMiXSwibmFtZXMiOlsiZ290b1dlYlZpZXciLCJ3ZWJVcmwiLCJ3ZWJUaXRsZSIsIndlYnZpZXciLCJ3ZWJQaWMiLCJ0ZW1VcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ1bmkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGlwT2ZmIiwicmVsYXRpb25JZCIsImFwaSIsImFscmVhZHlMb2dpbiIsImFuaW1hdGlvblR5cGUiLCJhbmltYXRpb25EdXJhdGlvbiIsImNoZWNrQXBwVmVyc2lvbiIsInVwZGF0ZUZsYWciLCJzZW5kRGF0YSIsImdldFN5c3RlbUluZm9TeW5jIiwicGxhdGZvcm0iLCJtb2QiLCJnZXQiLCJ0aGVuIiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJkYXRhIiwidmVyc2lvbiIsImRlc2MiLCJhcGt1cmwiLCJjb21wYXJlVmVyc2lvbiIsInNlcnZpY2VWZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJwbHVzIiwicnVudGltZSIsImdldFByb3BlcnR5IiwiYXBwaWQiLCJ3Z3RpbmZvIiwibG9jYWxWZXJzaW9uIiwic3ViTlZ1ZSIsImdldFN1Yk5WdWVCeUlkIiwiYXBwIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsInVwZGF0ZVRpcCIsInNob3ciLCJnb3RvRGV0YWlsIiwiZGV0YWlsIiwidHlwZSIsImlkIiwic3R5bGUiLCJpbmRleE9mIiwicmVwbGFjZSIsImdldFN0b3JhZ2VTeW5jIiwidGl0bGUiLCJwaWMiLCJzcGxpdCIsInppZCIsImdldFZhck5hdmlCYXJIZWlnaHQiLCJuYXZpZ2F0b3IiLCJnZXRTdGF0dXNiYXJIZWlnaHQiLCJzY3JlZW4iLCJzY2FsZSIsImUiLCJpc0pzb25TdHJpbmciLCJzdHIiLCJKU09OIiwicGFyc2UiLCJmb3JtYXRBcnJheSIsImFycmF5IiwidGhlQXJyYXkiLCJpIiwibGVuZ3RoIiwicHVzaCIsImRhdGVDaGVjayIsIlJRIiwiZGF0ZSIsInJlc3VsdCIsIm1hdGNoIiwiZCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImZvcm1hdExvY2F0aW9uIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRvU3RyaW5nIiwiZGF0ZURpZmYiLCJkYXRlU3RyIiwibm93ZGF0ZSIsImRpZmYiLCJmb3JtYXRNaW51dGVzVGltZSIsIl9mb3JtYXQiLCJudW1iZXIiLCJwYXJzZUludCIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImZvcm1hdFRpbWUiLCJ0aW1lIiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIm1hcCIsIm4iLCJqb2luIiwiZm9ybWF0TWludXRlc0RheSIsImZvcm1hdERhdGVUaW1lIiwiZm9ybWF0RGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsImZvcm1hdE51bWJlciIsImdldERhdGVXaXRoQ291bnQiLCJkYXlDb3VudCIsImRkIiwic2V0RGF0ZSIsInkiLCJtIiwiZ2V0VGltZVdpdGhIb3VyIiwiaG91cnMiLCJ0dCIsImdldFRpbWUiLCJudHQiLCJnZXREYXlzQnlEYXRlU3RyaW5nIiwiZGF0ZVN0cmluZzEiLCJkYXRlU3RyaW5nMiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJkaWZmRGF0ZSIsImRheXMiLCJnZXREYXRlV2Vla2VuZCIsImRhdGVTdHJpbmciLCJhIiwid2VlayIsImdldERheSIsImRhdGVVdGlscyIsIlVOSVRTIiwiaHVtYW5pemUiLCJtaWxsaXNlY29uZHMiLCJrZXkiLCJNYXRoIiwiZmxvb3IiLCJmb3JtYXQiLCJub3ciLCJtaXN0aW1pbmciLCJyb3VuZCIsInRhZ3MiLCJ0aW1lcyIsImlubSIsImZvcm1hdFllYXJNaW51dGVzRGF5IiwiZm9ybWF0WWVhck1pbnV0ZXNEYXlGb3JtdCIsImZvcm1hdE1vbnRoRGF5IiwibXVsdGlBcnJheSIsIm5ld0FycmF5IiwicmVkdWNlIiwicHJldiIsIm5leHQiLCJpbmRleCIsIm9wZW5Mb2NhdGlvbiIsIm5hbWUiLCJhZGRyZXNzIiwiTnVtYmVyIiwiZmFpbCIsIm5hdmlnYXRlQmFjayIsIm9wZW5TaG9wTG9jYXRpb24iLCJzaG9wSW5mbyIsImNvb3JkaW5hdGVMbmciLCJjb29yZGluYXRlTGF0Iiwic2hvcE5hbWUiLCJuYXZpZ2F0ZVRvTG9jYXRpb24iLCJkZXNMb25naXR1ZGUiLCJkZXNMYXRpdHVkZSIsImRlc0FkZHJlc3MiLCJnZXRMb2NhdGlvbiIsInN1Y2Nlc3MiLCJzcmMiLCJtYXBzIiwiUG9pbnQiLCJwb2ludCIsIkdQUyIsImdjal9kZWNyeXB0X2V4YWN0IiwiZHN0IiwibG9uIiwibGF0Iiwib3BlblN5c01hcCIsImVyciIsImVyck1zZyIsImRpc3RhbmNlIiwibGF0QSIsImxvbkEiLCJsYXRCIiwibG9uQiIsIlBJIiwieF9waSIsImRlbHRhIiwiZWUiLCJkTGF0IiwidHJhbnNmb3JtTGF0IiwiZExvbiIsInRyYW5zZm9ybUxvbiIsInJhZExhdCIsIm1hZ2ljIiwic2luIiwic3FydE1hZ2ljIiwic3FydCIsImNvcyIsImdjal9lbmNyeXB0Iiwid2dzTGF0Iiwid2dzTG9uIiwib3V0T2ZDaGluYSIsImdjal9kZWNyeXB0IiwiZ2NqTGF0IiwiZ2NqTG9uIiwiaW5pdERlbHRhIiwidGhyZXNob2xkIiwibUxhdCIsIm1Mb24iLCJwTGF0IiwicExvbiIsInRtcCIsImFicyIsImVhcnRoUiIsIngiLCJzIiwiYWxwaGEiLCJhY29zIiwicmV0IiwiZnJpZW5kbHlEYXRlIiwidGltZXN0YW1wIiwiZm9ybWF0cyIsInNlY29uZHMiLCJtaW51dGVzIiwibW9udGhzIiwieWVhcnMiLCJkaWZmVHlwZSIsImRpZmZWYWx1ZSIsInVuaXF1ZSIsImFyciIsImZpZWxkIiwiZGF0ZVN0cmluZ1RvVGltZXN0YW1wIiwic3Vic3RyaW5nIiwidGltZXN0YW1wVG9EYXRlU3RyaW5nIiwiZ2V0U2hhcmVMaXN0Iiwic2hhcmVMaXN0IiwiZ2V0UHJvdmlkZXIiLCJzZXJ2aWNlIiwic3RyaW5naWZ5IiwicHJvdmlkZXIiLCJpdGVtIiwic2V0dXBTaGFyZUl0ZW0iLCJzY2VuZSIsImltYWdlIiwiY2xpY2tTaGFyZUl0ZW0iLCJpc1NoYXJlIiwiZG93bmxvYWRGaWxlIiwic3RhdHVzQ29kZSIsInppcCIsImNvbXByZXNzSW1hZ2UiLCJ0ZW1wRmlsZVBhdGgiLCJxdWFsaXR5Iiwib3ZlcndyaXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzaGFyZSIsInN1bW1hcnkiLCJocmVmIiwibGluayIsImltYWdlVXJsIiwidG9hc3RUaXBzVGltZSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjZDQUFBLG1GOztBQUVBOzs7Ozs7QUFNQSxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUE2QkMsUUFBN0IsRUFBc0NDLE9BQXRDLEVBQThDQyxNQUE5QyxFQUFzRDtBQUNyREQsU0FBTyxHQUFDQSxPQUFPLElBQUUsU0FBakI7QUFDQSxNQUFJRixNQUFKLEVBQVk7QUFDWCxRQUFJSSxNQUFNLEdBQUdDLGtCQUFrQixDQUFDTCxNQUFELENBQS9CO0FBQ0E7QUFDQSxRQUFJQyxRQUFKLEVBQWM7QUFDYixVQUFHRSxNQUFILEVBQVU7QUFDVEcsV0FBRyxDQUFDQyxVQUFKLENBQWU7QUFDZEMsYUFBRyxFQUFFLG9CQUFrQk4sT0FBbEIsR0FBMEIsVUFBMUIsR0FBdUNFLE1BQXZDLEdBQWdELFlBQWhELEdBQStESCxRQUEvRCxHQUEwRSxVQUExRSxHQUF1RkUsTUFEOUUsRUFBZjs7QUFHQSxPQUpELE1BSUs7QUFDSkcsV0FBRyxDQUFDQyxVQUFKLENBQWU7QUFDZEMsYUFBRyxFQUFFLG9CQUFrQk4sT0FBbEIsR0FBMEIsVUFBMUIsR0FBdUNFLE1BQXZDLEdBQWdELFlBQWhELEdBQStESCxRQUR0RCxFQUFmOztBQUdBO0FBQ0QsS0FWRCxNQVVPO0FBQ05LLFNBQUcsQ0FBQ0MsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSxvQkFBa0JOLE9BQWxCLEdBQTBCLFVBQTFCLEdBQXVDRSxNQUQ5QixFQUFmOztBQUdBO0FBQ0Q7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU0ss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QUEwQmhCRSx1QkFBcUIsRUFBR0EscUJBMUJSO0FBMkJoQjVGLHNCQUFvQixFQUFDQSxvQkEzQkw7QUE0QmhCQywyQkFBeUIsRUFBQ0EseUJBNUJWO0FBNkJoQkMsZ0JBQWMsRUFBQ0EsY0E3QkM7QUE4QmhCNUcsWUFBVSxFQUFDQSxVQTlCSztBQStCaEJ1TSxjQUFZLEVBQUNBLFlBL0JHO0FBZ0NoQlUsZ0JBQWMsRUFBQ0EsY0FoQ0M7QUFpQ2hCaEIsUUFBTSxFQUFDQSxNQWpDUyxFQUFqQixDIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tIFwiQC9hcGkvaW5kZXguanNcIlxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog6Lez6L2s5Yiwd2ViVmlld1xyXG4gKiDmlrnms5Xms6jph4o6IFxyXG4gKiDkvKDlhaXlj4LmlbA6IHdlYlVybC0+572R6aG16ZO+5o6lIHdlYlRpdGxlLT7nvZHpobXmoIfpopggd2ViUGljLT7nvZHpobXlm77niYdcclxuICog6L+U5Zue5pWw5YC8OiBcclxuICovXHJcbmZ1bmN0aW9uIGdvdG9XZWJWaWV3KHdlYlVybCwgd2ViVGl0bGUsd2Vidmlldyx3ZWJQaWMpIHtcclxuXHR3ZWJ2aWV3PXdlYnZpZXd8fCd3ZWJWaWV3J1xyXG5cdGlmICh3ZWJVcmwpIHtcclxuXHRcdHZhciB0ZW1VcmwgPSBlbmNvZGVVUklDb21wb25lbnQod2ViVXJsKTtcclxuXHRcdC8vLy9jb25zb2xlLmxvZyhcInRlbVVybHRlbVVybD0gXCIsIHRlbVVybCk7XHJcblx0XHRpZiAod2ViVGl0bGUpIHtcclxuXHRcdFx0aWYod2ViUGljKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL3dlYlZpZXcvXCIrd2VidmlldytcIj93ZWJVcmw9XCIgKyB0ZW1VcmwgKyBcIiZ3ZWJUaXRsZT1cIiArIHdlYlRpdGxlICsgXCImd2ViUGljPVwiICsgd2ViUGljXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy93ZWJWaWV3L1wiK3dlYnZpZXcrXCI/d2ViVXJsPVwiICsgdGVtVXJsICsgXCImd2ViVGl0bGU9XCIgKyB3ZWJUaXRsZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6IFwiL3BhZ2VzL3dlYlZpZXcvXCIrd2VidmlldytcIj93ZWJVcmw9XCIgKyB0ZW1VcmxcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IOS4vuaKpVxyXG4gKiDmlrnms5Xms6jph4o6IOS4jeeUqOS8oOS7u+S9leWPguaVsCzkvJrlhYjliKTmlq3nlKjmiLfmmK/lkKbnmbvlvZUs55m75b2V5LmL5ZCO5omN6Lez5Yiw5Li+5oql6aG16Z2iXHJcbiAqIOS8oOWFpeWPguaVsDog5pegXHJcbiAqIOi/lOWbnuaVsOWAvDog5pegXHJcbiAqL1xyXG5mdW5jdGlvbiB0aXBPZmYocmVsYXRpb25JZCkge1xyXG5cdGlmIChhcGkuYWxyZWFkeUxvZ2luKCkpIHtcclxuXHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiBcIi9wYWdlcy91c2VyL3VzZXJJbmRleC9pbmZvcm0/cmVsYXRpb25JZD1cIityZWxhdGlvbklkLFxyXG5cdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxyXG5cdFx0XHRhbmltYXRpb25EdXJhdGlvbjogMjAwXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tBcHBWZXJzaW9uKHVwZGF0ZUZsYWcpIHtcclxuXHJcblx0dmFyIHNlbmREYXRhID17XHJcblx0XHRcImFjdGlvblwiOlwidXBncmFkZVwiXHJcblx0fVxyXG5cdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKSB7XHJcblx0XHRzZW5kRGF0YS5tb2QgPVwiaW9zXCI7XHJcblx0fVxyXG5cdGFwaS5nZXQoXCJhcGkvbmNyYi9cIiwgc2VuZERhdGEsIFwiTlwiLGZhbHNlKS50aGVuKHJlcyA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcInJlcyA9IFwiLCByZXMpO1xyXG5cdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwic2VydmljZVZlcnNpb25cIiwgcmVzLmRhdGEudmVyc2lvbik7XHJcblx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJkZXNjcmlwdGlvblwiLCByZXMuZGF0YS5kZXNjKTtcclxuXHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImFwa3VybFwiLCByZXMuZGF0YS5hcGt1cmwpO1xyXG5cdFx0aWYodXBkYXRlRmxhZyl7XHJcblx0XHRcdGNvbXBhcmVWZXJzaW9uKHJlcy5kYXRhLnZlcnNpb24sIHJlcy5kYXRhLmRlc2MscmVzLmRhdGEuYXBrdXJsKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uKHNlcnZpY2VWZXJzaW9uLCBkZXNjcmlwdGlvbixhcGt1cmwpIHtcclxuXHJcblx0cGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuXHRcdHZhciBsb2NhbFZlcnNpb24gPSB3Z3RpbmZvLnZlcnNpb247IC8vYXBw5pys5Zyw5bqU55So54mI5pys5Y+3XHJcblx0XHRcclxuXHRcdGlmIChzZXJ2aWNlVmVyc2lvbiA+IGxvY2FsVmVyc2lvbikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInNlcnZpY2VWZXJzaW9uPVwiK3NlcnZpY2VWZXJzaW9uKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJsb2NhbFZlcnNpb249XCIrbG9jYWxWZXJzaW9uKTtcclxuXHRcdFx0Y29uc3Qgc3ViTlZ1ZSA9IHVuaS5nZXRTdWJOVnVlQnlJZCgndmVyc2lvblVwZGF0ZVRpcCcpO1xyXG5cdFx0XHQvLyDlnKggc3ViTlZ1ZS92dWUg6aG16Z2i6Kem5Y+R5LqL5Lu2ICBcclxuXHRcdFx0Ly8gJGVtaXQoZXZlbnROYW1lLCBkYXRhKSAgXHJcblx0XHRcdGNvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cdFx0XHRhcHAuZ2xvYmFsRGF0YS51cGRhdGVUaXAgPSBkZXNjcmlwdGlvbjtcclxuXHRcdFx0c3ViTlZ1ZS5zaG93KCk7XHJcblx0XHRcdC8vIHVuaS5zaG93TW9kYWwoeyAvL+aPkOmGkueUqOaIt+abtOaWsCAgXHJcblx0XHRcdC8vIFx0dGl0bGU6IFwi54mI5pys5pu05paw5ZWmXCIsXHJcblx0XHRcdC8vIFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdC8vIFx0Y29uZmlybVRleHQ6IFwi56uL5Y2z5pu05pawXCIsXHJcblx0XHRcdC8vIFx0Y29udGVudDogZGVzY3JpcHRpb24sXHJcblx0XHRcdC8vIFx0Y29tcGxldGUoZSkge1xyXG5cdFx0XHQvLyBcdFx0aWYgKGUuY29uZmlybSkge1xyXG5cdFx0XHQvLyBcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdC8vIFx0XHRcdFx0dXJsOicvcGFnZXMvdXNlci9zZXR0aW5nL3ZlcnNpb25VcGRhdGUnXHJcblx0XHRcdC8vIFx0XHRcdH0pO1xyXG5cdFx0XHQvLyBcdFx0fVxyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gfSlcclxuXHRcdH1cclxuXHR9KVxyXG5cclxufVxyXG5mdW5jdGlvbiBnb3RvRGV0YWlsKGRldGFpbCkge1xyXG5cdGlmKGRldGFpbC50eXBlICYmIGRldGFpbC50eXBlID09IDYxKXtcclxuXHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9leHBsYWluRGV0YWlscz9pZD0nICsgZGV0YWlsLmlkXHJcblx0XHR9KTtcclxuXHR9ZWxzZSBpZihkZXRhaWwuc3R5bGUgJiYgZGV0YWlsLnN0eWxlID09ICdhY3Rpdml0eScpe1xyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcvcGFnZXMvYWN0aXZpdHkvYWN0aXZpdHlEZXRhaWxzP2lkPScgKyBkZXRhaWwuaWRcclxuXHRcdH0pO1xyXG5cdH1lbHNlIGlmKGRldGFpbC5zdHlsZSAmJiBkZXRhaWwuc3R5bGUgPT0gJ3dlbnpoZW5nJyl7XHJcblx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy9wYWdlcy9pbnF1aXJlL2RldGFpbHM/aWQ9JyArIGRldGFpbC5pZFxyXG5cdFx0fSk7XHJcblx0fWVsc2UgaWYoZGV0YWlsLnVybCl7XHJcblx0XHRpZihkZXRhaWwudXJsID09ICcjJyB8fCAoZGV0YWlsLnN0eWxlID09ICdoNScgJiYgZGV0YWlsLnVybCA9PScnKSl7XHJcblx0XHQvLyB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHQvLyBcdHVybDogJy9wYWdlcy9pbnF1aXJlL2RldGFpbHM/aWQ9JyArIGRldGFpbC5pZFxyXG5cdFx0Ly8gfSk7XHJcblx0XHR9ZWxzZSBpZihkZXRhaWwudXJsLmluZGV4T2YoXCJodHRwOi8vXCIpID49MCB8fCBkZXRhaWwudXJsLmluZGV4T2YoXCJodHRwczovL1wiKSA+PTAgKXtcclxuXHRcdFx0aWYoZGV0YWlsLnVybC5pbmRleE9mKFwidW5pb25pZD17dW5pb25pZH1cIikgPj0wKXtcclxuXHRcdFx0XHRpZihhcGkuYWxyZWFkeUxvZ2luKCkpe1xyXG5cdFx0XHRcdFx0ZGV0YWlsLnVybCA9IGRldGFpbC51cmwucmVwbGFjZSgve3VuaW9uaWR9Lyx1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1bmlvbmlkXCIpKTtcclxuXHRcdFx0XHRcdGdvdG9XZWJWaWV3KGRldGFpbC51cmwsZGV0YWlsLnRpdGxlLCcnLGRldGFpbC5waWMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Z290b1dlYlZpZXcoZGV0YWlsLnVybCxkZXRhaWwudGl0bGUsJycsZGV0YWlsLnBpYyk7XHJcblx0XHRcdH1cclxuXHRcdH1lbHNlIGlmKGRldGFpbC51cmwuaW5kZXhPZihcIm5jbmV3czovL1wiKSA+PTApe1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoZGV0YWlsLnVybC5pbmRleE9mKFwibmNuZXdzOi8vdXBncmFkZVwiKSA+PTApe1xyXG5cdFx0XHRcdC8v57uZ5biC6ZW/55WZ6KiA5YiX6KGoXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3VzZXIvc2V0dGluZy92ZXJzaW9uVXBkYXRlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNlIGlmKGRldGFpbC51cmwuaW5kZXhPZihcIndlbnpoZW5nX2xpc3RfMTBcIikgPj0wKXtcclxuXHRcdFx0XHQvL+e7meW4gumVv+eVmeiogOWIl+ihqFxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbnF1aXJlL2lucXVpcmVEZXRhaWxzJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNlIGlmKGRldGFpbC51cmwuaW5kZXhPZihcIndlbnpoZW5nX2xpc3RfMTJcIikgPj0wKXtcclxuXHRcdFx0XHQvL+aAneaDs+Wkp+iuqOiuulxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbnF1aXJlL3Rob3VnaHREaXNjdXNzTGlzdCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2UgaWYoZGV0YWlsLnVybC5pbmRleE9mKFwid2Vuemhlbmdfc2VuZF9cIikgPj0wKXtcclxuXHRcdFx0XHR2YXIgdHlwZSAgPSBkZXRhaWwudXJsLnNwbGl0KCd3ZW56aGVuZ19zZW5kXycpWzFdO1xyXG5cdFx0XHRcdC8v6Zeu5pS/5YiX6KGoXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2lucXVpcmUvY29tcGxhaW50U3VnZ2VzdGlvbk1lc3NhZ2U/dHlwZT0nK3R5cGVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2UgaWYoZGV0YWlsLnVybC5pbmRleE9mKFwid2VuemhlbmdfbGlzdF9cIikgPj0wKXtcclxuXHRcdFx0XHR2YXIgdHlwZSAgPSBkZXRhaWwudXJsLnNwbGl0KCd3ZW56aGVuZ19saXN0XycpWzFdO1xyXG5cdFx0XHRcdC8v6Zeu5pS/5YiX6KGoXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2lucXVpcmUvaW5xdWlyZUxpc3Q/dHlwZT0nK3R5cGVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2UgaWYoZGV0YWlsLnVybC5pbmRleE9mKFwiY2hhbm5lbF9cIikgPj0wKXtcclxuXHRcdFx0XHR2YXIgdHlwZSAgPSBkZXRhaWwudXJsLnNwbGl0KCdjaGFubmVsXycpWzFdO1xyXG5cdFx0XHRcdC8v5paw6Ze75YiX6KGoXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL25ld3MvbmV3c0xpc3Q/dHlwZUlkPScrdHlwZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9ZWxzZSBpZihkZXRhaWwudXJsLmluZGV4T2YoXCJhcnRpY2xlX1wiKSA+PTApe1xyXG5cdFx0XHRcdHZhciBpZCA9IGRldGFpbC51cmwuc3BsaXQoJ2FydGljbGVfJylbMV07XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWxzP2lkPScgKyBpZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9ZWxzZSBpZihkZXRhaWwudXJsLmluZGV4T2YoXCJuY25ld3M6Ly96dF9cIikgPj0wKXtcclxuXHRcdFx0XHR2YXIgemlkID0gZGV0YWlsLnVybC5zcGxpdCgnbmNuZXdzOi8venRfJylbMV07XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL25ld3MvdG9waWM/emlkPScgKyB6aWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWxzP2lkPScgKyBkZXRhaWwuaWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1lbHNle1xyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcvcGFnZXMvZGV0YWlsL2RldGFpbHM/aWQ9JyArIGRldGFpbC5pZFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiBqc+iOt+WPluS4jemAmuiuvuWkh+S4i+eahOWvvOiIquagj+mrmOW6pizljZXkvY3mmK9weFxyXG4gKiDmlrnms5Xms6jph4o6IOS9v+eUqEpTT04ucGFyc2XkuYvliY3lhYjliKTmlq3lrZfnrKbkuLLmmK/lkKblj6/ovazkuLpqc29u5pWw5o2uXHJcbiAqIOS8oOWFpeWPguaVsDog5a2X56ym5LiyXHJcbiAqIOi/lOWbnuaVsOWAvDogc3RyaW5n5Y+v5Lul6L2sanNvbuWImei/lOWbnnRydWUs5ZCm5YiZ6L+U5ZueZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGdldFZhck5hdmlCYXJIZWlnaHQoKSB7XHJcblx0dHJ5IHtcclxuXHJcblx0XHRyZXR1cm4gcGx1cy5uYXZpZ2F0b3IuZ2V0U3RhdHVzYmFySGVpZ2h0KCkgKiBwbHVzLnNjcmVlbi5zY2FsZTtcclxuXHRcdC8vIHJldHVybiB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQgKyA0NCArICdweCc7XHJcblxyXG5cclxuXHJcblxyXG5cdH0gY2F0Y2ggKGUpIHt9XHJcblx0cmV0dXJuIDY0O1xyXG59XHJcblxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDliKTmlq3lrZfnrKbkuLLmmK/lkKblj6/ovazkuLpqc29u5pWw5o2uXHJcbiAqIOaWueazleazqOmHijog5L2/55SoSlNPTi5wYXJzZeS5i+WJjeWFiOWIpOaWreWtl+espuS4suaYr+WQpuWPr+i9rOS4umpzb27mlbDmja5cclxuICog5Lyg5YWl5Y+C5pWwOiDlrZfnrKbkuLJcclxuICog6L+U5Zue5pWw5YC8OiBzdHJpbmflj6/ku6Xovaxqc29u5YiZ6L+U5ZuedHJ1ZSzlkKbliJnov5Tlm55mYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNKc29uU3RyaW5nKHN0cikge1xyXG5cdHRyeSB7XHJcblx0XHRpZiAodHlwZW9mIEpTT04ucGFyc2Uoc3RyKSA9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGUpIHt9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGFycmF5KSB7XHJcblx0dmFyIHRoZUFycmF5ID0gW107XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGFycmF5W2ldICYmICEoYXJyYXlbaV0gPT0gJ3VuZGVmaW5lZCcpKSB7XHJcblx0XHRcdHRoZUFycmF5LnB1c2goYXJyYXlbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdGhlQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGVDaGVjayhSUSkge1xyXG5cdHZhciBkYXRlID0gUlE7XHJcblx0dmFyIHJlc3VsdCA9IGRhdGUubWF0Y2goL14oXFxkezEsNH0pKC18XFwvKShcXGR7MSwyfSlcXDIoXFxkezEsMn0pJC8pO1xyXG5cclxuXHRpZiAocmVzdWx0ID09IG51bGwpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0dmFyIGQgPSBuZXcgRGF0ZShyZXN1bHRbMV0sIHJlc3VsdFszXSAtIDEsIHJlc3VsdFs0XSk7XHJcblx0cmV0dXJuIChkLmdldEZ1bGxZZWFyKCkgPT0gcmVzdWx0WzFdICYmIChkLmdldE1vbnRoKCkgKyAxKSA9PSByZXN1bHRbM10gJiYgZC5nZXREYXRlKCkgPT0gcmVzdWx0WzRdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb2NhdGlvbihsb25naXR1ZGUsIGxhdGl0dWRlKSB7XHJcblx0aWYgKHR5cGVvZiBsb25naXR1ZGUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBsYXRpdHVkZSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdGxvbmdpdHVkZSA9IHBhcnNlRmxvYXQobG9uZ2l0dWRlKVxyXG5cdFx0bGF0aXR1ZGUgPSBwYXJzZUZsb2F0KGxhdGl0dWRlKVxyXG5cdH1cclxuXHJcblx0bG9uZ2l0dWRlID0gbG9uZ2l0dWRlLnRvRml4ZWQoMilcclxuXHRsYXRpdHVkZSA9IGxhdGl0dWRlLnRvRml4ZWQoMilcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGxvbmdpdHVkZTogbG9uZ2l0dWRlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKSxcclxuXHRcdGxhdGl0dWRlOiBsYXRpdHVkZS50b1N0cmluZygpLnNwbGl0KCcuJylcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGVEaWZmKGRhdGVTdHIpIHtcclxuXHR2YXIgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xyXG5cdHZhciBub3dkYXRlID0gbmV3IERhdGUoKTtcclxuXHR2YXIgZGlmZiA9IG5vd2RhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXRlKCk7XHJcblx0c3dpdGNoIChkaWZmKSB7XHJcblx0XHRjYXNlIDA6XHJcblx0XHRcdHJldHVybiAn5LuK5aSpJ1xyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSAxOlxyXG5cdFx0XHRyZXR1cm4gJ+aYqOWkqSdcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0cmV0dXJuICfliY3lpKknXHJcblx0XHRcdGJyZWFrXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gZGlmZiArICflpKnliY0nXHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE1pbnV0ZXNUaW1lKGRhdGVTdHIpIHtcclxuXHR2YXIgX2Zvcm1hdCA9IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0cmV0dXJuIChudW1iZXIgPCAxMCA/ICgnMCcgKyBudW1iZXIpIDogbnVtYmVyKTtcclxuXHR9O1xyXG5cdHZhciBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQoZGF0ZVN0cikpO1xyXG5cdHJldHVybiBfZm9ybWF0KGRhdGUuZ2V0SG91cnMoKSkgKyAnOicgKyBfZm9ybWF0KGRhdGUuZ2V0TWludXRlcygpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSkge1xyXG5cdGlmICh0eXBlb2YgdGltZSAhPT0gJ251bWJlcicgfHwgdGltZSA8IDApIHtcclxuXHRcdHJldHVybiB0aW1lXHJcblx0fVxyXG5cclxuXHR2YXIgaG91ciA9IHBhcnNlSW50KHRpbWUgLyAzNjAwKVxyXG5cdHRpbWUgPSB0aW1lICUgMzYwMFxyXG5cdHZhciBtaW51dGUgPSBwYXJzZUludCh0aW1lIC8gNjApXHJcblx0dGltZSA9IHRpbWUgJSA2MFxyXG5cdHZhciBzZWNvbmQgPSB0aW1lXHJcblxyXG5cdHJldHVybiAoW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXSkubWFwKGZ1bmN0aW9uKG4pIHtcclxuXHRcdG4gPSBuLnRvU3RyaW5nKClcclxuXHRcdHJldHVybiBuWzFdID8gbiA6ICcwJyArIG5cclxuXHR9KS5qb2luKCc6JylcclxufVxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5bCG5pel5pyf5qC85byP5YyW5Li65p+Q5pyI5p+Q5pelXHJcbiAqIOaWueazleazqOmHijog5q+U5aaC5Lyg5YWlMjAxOS0xMS0xMCzliJnov5Tlm54xMeaciDEw5pelXHJcbiAqIOS8oOWFpeWPguaVsDogZGF0ZVN0ciDml6XmnJ/lrZfnrKbkuLJcclxuICog6L+U5Zue5pWw5YC8OiDluKbmnInmnIjml6XnmoTml6XmnJ/lrZfnrKbkuLJcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdE1pbnV0ZXNEYXkoZGF0ZVN0cikge1xyXG5cdGlmIChkYXRlU3RyKSB7XHJcblx0XHRkYXRlU3RyID0gZGF0ZVN0ci5yZXBsYWNlKC8tL2lnLCBcIi9cIik7XHJcblx0fVxyXG5cdFxyXG5cdHZhciBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQoZGF0ZVN0cikpO1xyXG5cdHZhciBfZm9ybWF0ID0gZnVuY3Rpb24obnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gKG51bWJlciA8IDEwID8gKCcwJyArIG51bWJlcikgOiBudW1iZXIpO1xyXG5cdH07XHJcblx0cmV0dXJuICtfZm9ybWF0KGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJ+aciCcgKyBfZm9ybWF0KGRhdGUuZ2V0RGF0ZSgpKSArIFwi5pelXCI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlVGltZShkYXRlU3RyKSB7XHJcblx0dmFyIGRhdGU7XHJcblx0aWYgKGRhdGVTdHIpIHtcclxuXHRcdGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0fVxyXG5cclxuXHR2YXIgX2Zvcm1hdCA9IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0cmV0dXJuIChudW1iZXIgPCAxMCA/ICgnMCcgKyBudW1iZXIpIDogbnVtYmVyKTtcclxuXHR9O1xyXG5cdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBfZm9ybWF0KGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgX2Zvcm1hdChkYXRlLmdldERhdGUoKSkgKyAnICcgK1xyXG5cdFx0X2Zvcm1hdChkYXRlLmdldEhvdXJzKCkpICsgJzonICsgX2Zvcm1hdChkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gZGF0ZSA9PiB7XHJcblx0aWYgKCFkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG5cdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cdH1cclxuXHRjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcblx0Y29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcblx0Y29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcclxuXHRyZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy0nKVxyXG59O1xyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDojrflj5blvZPliY3ml6XmnJ/nmoTliY3lh6DlpKnmiJbogIXlkI7lh6DlpKlcclxuICog5pa55rOV5rOo6YeKOiBkYXlDb3VudOS8oOWFpei0n+aVsOavlOWmgi0zLOihqOekuuiOt+WPluW9k+WJjeaXpeacn+eahOWJjTPlpKks5Lyg5YWl5q2j5pWw5q+U5aaCMizooajnpLrojrflj5blkI7lpKnnmoTml6XmnJ9cclxuICog5Lyg5YWl5Y+C5pWwOiBkYXlDb3VudCDmraPmlbTmlbDmiJbogIXotJ/mlbTmlbBcclxuICog6L+U5Zue5pWw5YC8OiDliY3ml6XmnJ/nmoTliY3lh6DlpKnmiJbogIXlkI7lh6DlpKnnmoTlrZfnrKbkuLJcclxuICovXHJcbmNvbnN0IGdldERhdGVXaXRoQ291bnQgPSBkYXlDb3VudCA9PiB7XHJcblx0dmFyIGRkID0gbmV3IERhdGUoKTtcclxuXHRkZC5zZXREYXRlKGRkLmdldERhdGUoKSArIGRheUNvdW50KTsgLy/ojrflj5ZBZGREYXlDb3VudOWkqeWQjueahOaXpeacnyAgXHJcblx0dmFyIHkgPSBkZC5nZXRGdWxsWWVhcigpO1xyXG5cdHZhciBtID0gKGRkLmdldE1vbnRoKCkgKyAxKSA8IDEwID8gXCIwXCIgKyAoZGQuZ2V0TW9udGgoKSArIDEpIDogKGRkLmdldE1vbnRoKCkgKyAxKTsgLy/ojrflj5blvZPliY3mnIjku73nmoTml6XmnJ/vvIzkuI3otrMxMOihpTAgIFxyXG5cdHZhciBkID0gZGQuZ2V0RGF0ZSgpIDwgMTAgPyBcIjBcIiArIGRkLmdldERhdGUoKSA6IGRkLmdldERhdGUoKTsgLy/ojrflj5blvZPliY3lh6Dlj7fvvIzkuI3otrMxMOihpTAgIFxyXG5cdHJldHVybiB5ICsgXCItXCIgKyBtICsgXCItXCIgKyBkO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZVdpdGhIb3VyID0gaG91cnMgPT4ge1xyXG5cdHZhciBkZCA9IG5ldyBEYXRlKCk7XHJcblx0dmFyIHR0ID0gZGQuZ2V0VGltZSgpO1xyXG5cdHZhciBudHQgPSB0dCArIGhvdXJzICogNjAgKiAxMDAwO1xyXG5cdGRkLnNldERhdGUoZGQuZ2V0RGF0ZSgpICsgZGF5Q291bnQpOyAvL+iOt+WPlkFkZERheUNvdW505aSp5ZCO55qE5pel5pyfICBcclxuXHR2YXIgeSA9IGRkLmdldEZ1bGxZZWFyKCk7XHJcblx0dmFyIG0gPSAoZGQuZ2V0TW9udGgoKSArIDEpIDwgMTAgPyBcIjBcIiArIChkZC5nZXRNb250aCgpICsgMSkgOiAoZGQuZ2V0TW9udGgoKSArIDEpOyAvL+iOt+WPluW9k+WJjeaciOS7veeahOaXpeacn++8jOS4jei2szEw6KGlMCAgXHJcblx0dmFyIGQgPSBkZC5nZXREYXRlKCkgPCAxMCA/IFwiMFwiICsgZGQuZ2V0RGF0ZSgpIDogZGQuZ2V0RGF0ZSgpOyAvL+iOt+WPluW9k+WJjeWHoOWPt++8jOS4jei2szEw6KGlMCAgXHJcblx0cmV0dXJuIHkgKyBcIi1cIiArIG0gKyBcIi1cIiArIGQ7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0RGF5c0J5RGF0ZVN0cmluZyA9IChkYXRlU3RyaW5nMSwgZGF0ZVN0cmluZzIpID0+IHtcclxuXHR2YXIgc3RhcnREYXRlID0gRGF0ZS5wYXJzZShkYXRlU3RyaW5nMS5yZXBsYWNlKCcvLS9nJywgJy8nKSk7XHJcblx0dmFyIGVuZERhdGUgPSBEYXRlLnBhcnNlKGRhdGVTdHJpbmcyLnJlcGxhY2UoJy8tL2cnLCAnLycpKTtcclxuXHR2YXIgZGlmZkRhdGUgPSAoZW5kRGF0ZSAtIHN0YXJ0RGF0ZSkgKyAxICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuXHR2YXIgZGF5cyA9IGRpZmZEYXRlIC8gKDEgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuXHQvL2FsZXJ0KGRpZmZEYXRlLygxKjI0KjYwKjYwKjEwMDApKTsgIFxyXG5cdHJldHVybiBkYXlzO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog6I635Y+W5b2T5YmN5pel5pyf55qE5pif5pyfXHJcbiAqIOaWueazleazqOmHijogZGF0ZVN0cmluZ+S8oOWFpeaXpeacn+agvOW8j+eahOWtl+espuS4slxyXG4gKiDkvKDlhaXlj4LmlbA6IGRhdGVTdHJpbmfkvKDlhaXml6XmnJ/moLzlvI/nmoTlrZfnrKbkuLJcclxuICog6L+U5Zue5pWw5YC8OiDml6XmnJ/nmoTmmJ/mnJ9cclxuICovXHJcbmNvbnN0IGdldERhdGVXZWVrZW5kID0gZGF0ZVN0cmluZyA9PiB7XHJcblx0dmFyIGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChkYXRlU3RyaW5nKSk7XHJcblx0dmFyIGEgPSBbXCLml6VcIiwgXCLkuIBcIiwgXCLkuoxcIiwgXCLkuIlcIiwgXCLlm5tcIiwgXCLkupRcIiwgXCLlha1cIl07XHJcblx0dmFyIHdlZWsgPSBkYXRlLmdldERheSgpO1xyXG5cdHZhciBzdHIgPSBcIuWRqFwiICsgYVt3ZWVrXTtcclxuXHRyZXR1cm4gc3RyO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0TnVtYmVyID0gbiA9PiB7XHJcblx0biA9IG4udG9TdHJpbmcoKVxyXG5cdHJldHVybiBuWzFdID8gbiA6ICcwJyArIG5cclxufTtcclxuXHJcbnZhciBkYXRlVXRpbHMgPSB7XHJcblx0VU5JVFM6IHtcclxuXHRcdCflubQnOiAzMTU1NzYwMDAwMCxcclxuXHRcdCfmnIgnOiAyNjI5ODAwMDAwLFxyXG5cdFx0J+WkqSc6IDg2NDAwMDAwLFxyXG5cdFx0J+Wwj+aXtic6IDM2MDAwMDAsXHJcblx0XHQn5YiG6ZKfJzogNjAwMDAsXHJcblx0XHQn56eSJzogMTAwMFxyXG5cdH0sXHJcblx0aHVtYW5pemU6IGZ1bmN0aW9uKG1pbGxpc2Vjb25kcykge1xyXG5cdFx0dmFyIGh1bWFuaXplID0gJyc7XHJcblx0XHRmb3IgKHZhciBrZXkgaW4gdGhpcy5VTklUUykge1xyXG5cdFx0XHRpZiAobWlsbGlzZWNvbmRzID49IHRoaXMuVU5JVFNba2V5XSkge1xyXG5cdFx0XHRcdGh1bWFuaXplID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyB0aGlzLlVOSVRTW2tleV0pICsga2V5ICsgJ+WJjSc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBodW1hbml6ZSB8fCAn5Yia5YiaJztcclxuXHR9LFxyXG5cdGZvcm1hdDogZnVuY3Rpb24oZGF0ZVN0cikge1xyXG5cdFx0dmFyIGRhdGUgPSB0aGlzLnBhcnNlKGRhdGVTdHIpXHJcblx0XHR2YXIgZGlmZiA9IERhdGUubm93KCkgLSBkYXRlLmdldFRpbWUoKTtcclxuXHRcdGlmIChkaWZmIDwgdGhpcy5VTklUU1sn5aSpJ10pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHVtYW5pemUoZGlmZik7XHJcblx0XHR9XHJcblx0XHR2YXIgX2Zvcm1hdCA9IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0XHRyZXR1cm4gKG51bWJlciA8IDEwID8gKCcwJyArIG51bWJlcikgOiBudW1iZXIpO1xyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLycgKyBfZm9ybWF0KGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJy8nICsgX2Zvcm1hdChkYXRlLmdldERhdGUoKSkgKyAnLScgK1xyXG5cdFx0XHRfZm9ybWF0KGRhdGUuZ2V0SG91cnMoKSkgKyAnOicgKyBfZm9ybWF0KGRhdGUuZ2V0TWludXRlcygpKSArICcxMTEnO1xyXG5cdH0sXHJcblx0cGFyc2U6IGZ1bmN0aW9uKHN0cikgeyAvL+WwhlwieXl5eS1tbS1kZCBISDpNTTpzc1wi5qC85byP55qE5a2X56ym5Liy77yM6L2s5YyW5Li65LiA5LiqRGF0ZeWvueixoVxyXG5cdFx0dmFyIGEgPSBzdHIuc3BsaXQoL1teMC05XS8pO1xyXG5cdFx0cmV0dXJuIG5ldyBEYXRlKGFbMF0sIGFbMV0gLSAxLCBhWzJdLCBhWzNdLCBhWzRdLCBhWzVdKTtcclxuXHR9LFxyXG5cdGZvcm1hdERhdGU6IGZ1bmN0aW9uKGRhdGVTdHIpIHtcclxuXHRcdC8vY29uc3QgbWlzdGltaW5nID0gTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGRhdGVTdHIpLmdldFRpbWUoKSkgLyAxMDAwKVxyXG5cdFx0Ly9jb25zdCB0YWdzID0gWyflubQnLCAn5Liq5pyIJywgJ+aYn+acnycsICflpKknLCAn5bCP5pe2JywgJ+WIhumSnycsICfnp5InXVxyXG5cdFx0Ly9jb25zdCB0aW1lcyA9IFszMTUzNjAwMCwgMjU5MjAwMCwgNjA0ODAwLCA4NjQwMCwgMzYwMCwgNjAsIDFdXHJcblx0XHQvL2NvbnNvbGUuaW5mbyhcIm5ldyBEYXRlKGRhdGVTdHIpLmdldERhdGUoKTpcIiArIG5ldyBEYXRlKGRhdGVTdHIpLmdldERhdGUoKSArIFwiLS1cIiArIERhdGUubm93KCkpO1xyXG5cdFx0Y29uc3QgbWlzdGltaW5nID0gTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGRhdGVTdHIpKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcclxuXHRcdGNvbnN0IHRhZ3MgPSBbJ+W5tCcsICfkuKrmnIgnLCAn5pif5pyfJywgJ+WkqSddXHJcblx0XHRjb25zdCB0aW1lcyA9IFszMTUzNjAwMCwgMjU5MjAwMCwgNjA0ODAwLCA4NjQwMF1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaW5tID0gTWF0aC5mbG9vcihtaXN0aW1pbmcgLyB0aW1lc1tpXSlcclxuXHRcdFx0aWYgKHRhZ3NbaV0gPT09ICflpKknKSB7XHJcblx0XHRcdFx0c3dpdGNoIChpbm0pIHtcclxuXHRcdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdFx0cmV0dXJuICfku4rlpKknXHJcblx0XHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRcdHJldHVybiAn5pio5aSpJ1xyXG5cdFx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJ+WJjeWkqSdcclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHJldHVybiBpbm0gKyB0YWdzW2ldICsgJ+WJjSdcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpbm0gIT09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gaW5tICsgdGFnc1tpXSArICfliY0nXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5bCG5pel5pyf5qC85byP5YyW5Li65p+Q5pyI5p+Q5pelXHJcbiAqIOaWueazleazqOmHijog5q+U5aaC5Lyg5YWlMTU4MDAwMDAwMDAs5YiZ6L+U5ZueMTHmnIgxMOaXpVxyXG4gKiDkvKDlhaXlj4LmlbA6IGRhdGVTdHIg5pel5pyf5a2X56ym5LiyXHJcbiAqIOi/lOWbnuaVsOWAvDog5bim5pyJ5pyI5pel55qE5pel5pyf5a2X56ym5LiyXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXRZZWFyTWludXRlc0RheShkYXRlU3RyKSB7XHJcblx0dmFyIGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChkYXRlU3RyKSk7XHJcblx0dmFyIF9mb3JtYXQgPSBmdW5jdGlvbihudW1iZXIpIHtcclxuXHRcdHJldHVybiAobnVtYmVyIDwgMTAgPyAoJzAnICsgbnVtYmVyKSA6IG51bWJlcik7XHJcblx0fTtcclxuXHRyZXR1cm4gK2RhdGUuZ2V0RnVsbFllYXIoKSArICflubQnK19mb3JtYXQoZGF0ZS5nZXRNb250aCgpICsgMSkgKyAn5pyIJyArIF9mb3JtYXQoZGF0ZS5nZXREYXRlKCkpICsgXCLml6VcIjtcclxufTtcclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5bCG5pel5pyf5qC85byP5YyW5Li65p+Q5pyI5p+Q5pelXHJcbiAqIOaWueazleazqOmHijog5q+U5aaC5Lyg5YWlMTU4MDAwMDAwMDAs5YiZ6L+U5ZueMTHmnIgxMOaXpVxyXG4gKiDkvKDlhaXlj4LmlbA6IGRhdGVTdHIg5pel5pyf5a2X56ym5LiyXHJcbiAqIOi/lOWbnuaVsOWAvDog5bim5pyJ5pyI5pel55qE5pel5pyf5a2X56ym5LiyXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXRZZWFyTWludXRlc0RheUZvcm10KGRhdGVTdHIpIHtcclxuXHR2YXIgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGVTdHIpKTtcclxuXHR2YXIgX2Zvcm1hdCA9IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0cmV0dXJuIChudW1iZXIgPCAxMCA/ICgnMCcgKyBudW1iZXIpIDogbnVtYmVyKTtcclxuXHR9O1xyXG5cdHJldHVybiArZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nK19mb3JtYXQoZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnLScgKyBfZm9ybWF0KGRhdGUuZ2V0RGF0ZSgpKSArIFwiXCI7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5bCG5pel5pyf5qC85byP5YyW5Li65p+Q5pyI5p+Q5pelXHJcbiAqIOaWueazleazqOmHijog5q+U5aaC5Lyg5YWlMTU4MDAwMDAwMDAs5YiZ6L+U5ZueMTEvMTBcclxuICog5Lyg5YWl5Y+C5pWwOiBkYXRlU3RyIOaXpeacn+Wtl+espuS4slxyXG4gKiDov5Tlm57mlbDlgLw6IDExLzEwXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXRNb250aERheShkYXRlU3RyKSB7XHJcblx0dmFyIGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChkYXRlU3RyKSk7XHJcblx0dmFyIF9mb3JtYXQgPSBmdW5jdGlvbihudW1iZXIpIHtcclxuXHRcdHJldHVybiAobnVtYmVyIDwgMTAgPyAoJzAnICsgbnVtYmVyKSA6IG51bWJlcik7XHJcblx0fTtcclxuXHRyZXR1cm4gX2Zvcm1hdChkYXRlLmdldE1vbnRoKCkgKyAxKSArICcvJyArIF9mb3JtYXQoZGF0ZS5nZXREYXRlKCkpO1xyXG59O1xyXG4vLyDlsIbkuIDnu7TmlbDnu4Tmi4bliIbmiJDkuoznu7TmlbDnu4RcclxuZnVuY3Rpb24gbXVsdGlBcnJheShhcnJheSkge1xyXG5cdGNvbnN0IG5ld0FycmF5ID0gYXJyYXkucmVkdWNlKChwcmV2LCBuZXh0LCBpbmRleCkgPT4ge1xyXG5cdFx0aWYgKGluZGV4ICUgMiA9PT0gMCkge1xyXG5cdFx0XHRwcmV2LnB1c2goW10pXHJcblx0XHR9XHJcblx0XHRwcmV2W3ByZXYubGVuZ3RoIC0gMV0ucHVzaChuZXh0KTtcclxuXHRcdHJldHVybiBwcmV2O1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gbmV3QXJyYXlcclxufVxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDmiZPlvIDmn5DkuKrlnLDngrnnmoTmiYDlnKjkvY3nva7nmoTlnLDlm75cclxuICog5pa55rOV5rOo6YeKOiBcclxuICog5Lyg5YWl5Y+C5pWwOiBcclxuICog6L+U5Zue5pWw5YC8OiBcclxuICovXHJcbmZ1bmN0aW9uIG9wZW5Mb2NhdGlvbihsb25naXR1ZGUsIGxhdGl0dWRlLCBuYW1lLCBhZGRyZXNzKSB7XHJcblx0dW5pLm9wZW5Mb2NhdGlvbih7XHJcblx0XHRsb25naXR1ZGU6IE51bWJlcihsb25naXR1ZGUpLFxyXG5cdFx0bGF0aXR1ZGU6IE51bWJlcihsYXRpdHVkZSksXHJcblx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0YWRkcmVzczogYWRkcmVzcyxcclxuXHRcdGZhaWwoKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IOaJk+W8gOW6l+mTuuWcsOWdgOeahOS9jee9rlxyXG4gKiDmlrnms5Xms6jph4o6IFxyXG4gKiDkvKDlhaXlj4LmlbA6IHNob3BJbmZv5bqX6ZO65L+h5oGv5b+F6aG75YyF5ZCr57uP57qs5bqmL+W6l+mTuuWQjeensC/lupfpk7rlnLDlnYBcclxuICog6L+U5Zue5pWw5YC8OiDml6BcclxuICovXHJcbmZ1bmN0aW9uIG9wZW5TaG9wTG9jYXRpb24oc2hvcEluZm8pIHtcclxuXHRpZiAoIXNob3BJbmZvKSByZXR1cm47XHJcblx0dW5pLm9wZW5Mb2NhdGlvbih7XHJcblx0XHRsb25naXR1ZGU6IE51bWJlcihzaG9wSW5mby5jb29yZGluYXRlTG5nKSxcclxuXHRcdGxhdGl0dWRlOiBOdW1iZXIoc2hvcEluZm8uY29vcmRpbmF0ZUxhdCksXHJcblx0XHRuYW1lOiBzaG9wSW5mby5zaG9wTmFtZSxcclxuXHRcdGFkZHJlc3M6IHNob3BJbmZvLmFkZHJlc3MsXHJcblx0XHRmYWlsKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDlr7zoiKroh7Pnm67nmoTlnLBcclxuICog5pa55rOV5rOo6YeKOiDpnIDopoHkvKDlhaXnm67nmoTlnLDnmoTnu4/luqbjgIHnu7TluqbvvIzlpoLmnpzkuI3kvKDpu5jorqTnm67nmoTmmK/mu5XnjovpmIHvvIzlvZPliY3kvY3nva7pu5jorqTkuLrnlKjmiLfmiYDlnKjkvY3nva7vvIzmtYvor5Xml7blj6/pu5jorqTkuLrljZfmmIzml6XmiqXlpKfljqZcclxuICog5Lyg5YWl5Y+C5pWwOiBkZXNMb25naXR1ZGUtPuebrueahOWcsOeahOe7j+W6piBkZXNMYXRpdHVkZS0+55uu55qE5Zyw55qE57qs5bqmIGRlc0FkZHJlc3MtPuebrueahOeahOWcsOWdgOWQjeensO+8jOavlOWmgua7leeOi+mYgVxyXG4gKiDov5Tlm57mlbDlgLw6IOaXoOi/lOWbnuWAvO+8jOiOt+WPluW9k+WJjeeUqOaIt+S9jee9ruWksei0peaXtuS8muW8ueahhuaPkOekulxyXG4gKi9cclxuZnVuY3Rpb24gbmF2aWdhdGVUb0xvY2F0aW9uKGRlc0xvbmdpdHVkZSA9IDExNS44ODExNDEsIGRlc0xhdGl0dWRlID0gMjguNjgxMzU2LCBkZXNBZGRyZXNzID0gJ+a7leeOi+mYgScpIHtcclxuXHJcblx0dW5pLmdldExvY2F0aW9uKHtcclxuXHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0Ly92YXIgc3JjID0gbmV3IHBsdXMubWFwcy5Qb2ludCgxMTUuODg1NDQ5LDI4LjcxMzU5KTtcdCBcdFx0Ly8g5Y2X5piM5pel5oql5aSn5Y6m77yI6auY5b635Z2Q5qCH77yJXHJcblx0XHRcdC8vIHZhciBkc3QgPSBuZXcgcGx1cy5tYXBzLlBvaW50KGRlc0xvbmdpdHVkZSxkZXNMYXRpdHVkZSk7ICAgICAvLyDnm67nmoTlnLDkvY3nva7vvIjpq5jlvrflnZDmoIfvvIlcclxuXHJcblx0XHRcdC8vdmFyIHNyYyA9IG5ldyBwbHVzLm1hcHMuUG9pbnQoMTE1Ljg4NTQ0OSwyOC43MTM1OSk7XHQgXHRcdC8vIOWNl+aYjOaXpeaKpeWkp+WOpu+8iOmrmOW+t+WdkOagh++8iVxyXG5cdFx0XHQvLyB2YXIgZHN0ID0gbmV3IHBsdXMubWFwcy5Qb2ludChkZXNMb25naXR1ZGUsZGVzTGF0aXR1ZGUpOyAgICAgLy8g55uu55qE5Zyw5L2N572u77yI6auY5b635Z2Q5qCH77yJXHJcblx0XHRcdC8vLy9jb25zb2xlLmxvZyhyZXMubG9uZ2l0dWRlLCByZXMubGF0aXR1ZGUpO1xyXG5cdFx0XHR2YXIgc3JjID0gbmV3IHBsdXMubWFwcy5Qb2ludChyZXMubG9uZ2l0dWRlLCByZXMubGF0aXR1ZGUpOyAvLyDlvZPliY3kvY3nva4gKOmrmOW+t+WdkOaghylcclxuXHRcdFx0dmFyIHBvaW50ID0gR1BTLmdjal9kZWNyeXB0X2V4YWN0KGRlc0xvbmdpdHVkZSwgZGVzTGF0aXR1ZGUpXHJcblx0XHRcdHZhciBkc3QgPSBuZXcgcGx1cy5tYXBzLlBvaW50KHBvaW50LmxvbiwgcG9pbnQubGF0KTsgLy8g5Y2X5piM5ruV546L6ZiBICjpq5jlvrflnZDmoIcpXHJcblx0XHRcdHBsdXMubWFwcy5vcGVuU3lzTWFwKGRzdCwgZGVzQWRkcmVzcywgc3JjKTtcclxuXHRcdH0sXHJcblx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblxyXG5cdFx0XHR2YXIgc3JjID0gbmV3IHBsdXMubWFwcy5Qb2ludCgxMTUuODg1NDQ5LCAyOC43MTM1OSk7IC8vIOWNl+aYjOaXpeaKpeWkp+WOpu+8iOmrmOW+t+WdkOagh++8iVxyXG5cdFx0XHR2YXIgZHN0ID0gbmV3IHBsdXMubWFwcy5Qb2ludChkZXNMb25naXR1ZGUsIGRlc0xhdGl0dWRlKTsgLy8g5Y2X5piM5ruV546L6ZiBICjpq5jlvrflnZDmoIcpXHJcblx0XHRcdHBsdXMubWFwcy5vcGVuU3lzTWFwKGRzdCwgZGVzQWRkcmVzcywgc3JjKTtcclxuXHRcdFx0aWYgKGVyci5lcnJNc2cuaW5kZXhPZihcImF1dGggZGVueVwiKSA+PSAwKSB7XHJcblx0XHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0Ly8gXHR0aXRsZTogXCLorr/pl67kvY3nva7ooqvmi5Lnu50s6K+35Yiw6K6+572u5Lit5YWB6K64eWXljZfmmIzlvIDlkK/kvY3nva7orr/pl67mnYPpmZBcIlxyXG5cdFx0XHRcdC8vIH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0Ly8gXHR0aXRsZTogZXJyLmVyck1zZ1xyXG5cdFx0XHRcdC8vIH0pXHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXN0YW5jZShsYXRBLCBsb25BLCBsYXRCLCBsb25CKSB7XHJcblx0cmV0dXJuIEdQUy5kaXN0YW5jZShsYXRBLCBsb25BLCBsYXRCLCBsb25CKTtcclxufVxyXG52YXIgR1BTID0ge1xyXG5cdFBJOiAzLjE0MTU5MjY1MzU4OTc5MzI0LFxyXG5cdHhfcGk6IDMuMTQxNTkyNjUzNTg5NzkzMjQgKiAzMDAwLjAgLyAxODAuMCxcclxuXHRkZWx0YTogZnVuY3Rpb24obGF0LCBsb24pIHtcclxuXHRcdC8vIEtyYXNvdnNreSAxOTQwXHJcblx0XHQvL1xyXG5cdFx0Ly8gYSA9IDYzNzgyNDUuMCwgMS9mID0gMjk4LjNcclxuXHRcdC8vIGIgPSBhICogKDEgLSBmKVxyXG5cdFx0Ly8gZWUgPSAoYV4yIC0gYl4yKSAvIGFeMjtcclxuXHRcdHZhciBhID0gNjM3ODI0NS4wOyAvLyAgYTog5Y2r5pif5qSt55CD5Z2Q5qCH5oqV5b2x5Yiw5bmz6Z2i5Zyw5Zu+5Z2Q5qCH57O755qE5oqV5b2x5Zug5a2Q44CCXHJcblx0XHR2YXIgZWUgPSAwLjAwNjY5MzQyMTYyMjk2NTk0MzIzOyAvLyAgZWU6IOakreeQg+eahOWBj+W/g+eOh+OAglxyXG5cdFx0dmFyIGRMYXQgPSB0aGlzLnRyYW5zZm9ybUxhdChsb24gLSAxMDUuMCwgbGF0IC0gMzUuMCk7XHJcblx0XHR2YXIgZExvbiA9IHRoaXMudHJhbnNmb3JtTG9uKGxvbiAtIDEwNS4wLCBsYXQgLSAzNS4wKTtcclxuXHRcdHZhciByYWRMYXQgPSBsYXQgLyAxODAuMCAqIHRoaXMuUEk7XHJcblx0XHR2YXIgbWFnaWMgPSBNYXRoLnNpbihyYWRMYXQpO1xyXG5cdFx0bWFnaWMgPSAxIC0gZWUgKiBtYWdpYyAqIG1hZ2ljO1xyXG5cdFx0dmFyIHNxcnRNYWdpYyA9IE1hdGguc3FydChtYWdpYyk7XHJcblx0XHRkTGF0ID0gKGRMYXQgKiAxODAuMCkgLyAoKGEgKiAoMSAtIGVlKSkgLyAobWFnaWMgKiBzcXJ0TWFnaWMpICogdGhpcy5QSSk7XHJcblx0XHRkTG9uID0gKGRMb24gKiAxODAuMCkgLyAoYSAvIHNxcnRNYWdpYyAqIE1hdGguY29zKHJhZExhdCkgKiB0aGlzLlBJKTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdCdsYXQnOiBkTGF0LFxyXG5cdFx0XHQnbG9uJzogZExvblxyXG5cdFx0fTtcclxuXHR9LFxyXG5cclxuXHQvL1dHUy04NCB0byBHQ0otMDJcclxuXHRnY2pfZW5jcnlwdDogZnVuY3Rpb24od2dzTGF0LCB3Z3NMb24pIHtcclxuXHRcdGlmICh0aGlzLm91dE9mQ2hpbmEod2dzTGF0LCB3Z3NMb24pKVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdCdsYXQnOiB3Z3NMYXQsXHJcblx0XHRcdFx0J2xvbic6IHdnc0xvblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdHZhciBkID0gdGhpcy5kZWx0YSh3Z3NMYXQsIHdnc0xvbik7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQnbGF0Jzogd2dzTGF0ICsgZC5sYXQsXHJcblx0XHRcdCdsb24nOiB3Z3NMb24gKyBkLmxvblxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdC8vR0NKLTAyIHRvIFdHUy04NFxyXG5cdGdjal9kZWNyeXB0OiBmdW5jdGlvbihnY2pMYXQsIGdjakxvbikge1xyXG5cdFx0aWYgKHRoaXMub3V0T2ZDaGluYShnY2pMYXQsIGdjakxvbikpXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0J2xhdCc6IGdjakxhdCxcclxuXHRcdFx0XHQnbG9uJzogZ2NqTG9uXHJcblx0XHRcdH07XHJcblxyXG5cdFx0dmFyIGQgPSB0aGlzLmRlbHRhKGdjakxhdCwgZ2NqTG9uKTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdCdsYXQnOiBnY2pMYXQgLSBkLmxhdCxcclxuXHRcdFx0J2xvbic6IGdjakxvbiAtIGQubG9uXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Ly9HQ0otMDIgdG8gV0dTLTg0IGV4YWN0bHlcclxuXHRnY2pfZGVjcnlwdF9leGFjdDogZnVuY3Rpb24oZ2NqTG9uLCBnY2pMYXQpIHtcclxuXHRcdHZhciBpbml0RGVsdGEgPSAwLjAxO1xyXG5cdFx0dmFyIHRocmVzaG9sZCA9IDAuMDAwMDAwMDAxO1xyXG5cdFx0dmFyIGRMYXQgPSBpbml0RGVsdGEsXHJcblx0XHRcdGRMb24gPSBpbml0RGVsdGE7XHJcblx0XHR2YXIgbUxhdCA9IGdjakxhdCAtIGRMYXQsXHJcblx0XHRcdG1Mb24gPSBnY2pMb24gLSBkTG9uO1xyXG5cdFx0dmFyIHBMYXQgPSBnY2pMYXQgKyBkTGF0LFxyXG5cdFx0XHRwTG9uID0gZ2NqTG9uICsgZExvbjtcclxuXHRcdHZhciB3Z3NMYXQsIHdnc0xvbiwgaSA9IDA7XHJcblx0XHR3aGlsZSAoMSkge1xyXG5cdFx0XHR3Z3NMYXQgPSAobUxhdCArIHBMYXQpIC8gMjtcclxuXHRcdFx0d2dzTG9uID0gKG1Mb24gKyBwTG9uKSAvIDI7XHJcblx0XHRcdHZhciB0bXAgPSB0aGlzLmdjal9lbmNyeXB0KHdnc0xhdCwgd2dzTG9uKVxyXG5cdFx0XHRkTGF0ID0gdG1wLmxhdCAtIGdjakxhdDtcclxuXHRcdFx0ZExvbiA9IHRtcC5sb24gLSBnY2pMb247XHJcblx0XHRcdGlmICgoTWF0aC5hYnMoZExhdCkgPCB0aHJlc2hvbGQpICYmIChNYXRoLmFicyhkTG9uKSA8IHRocmVzaG9sZCkpXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRpZiAoZExhdCA+IDApIHBMYXQgPSB3Z3NMYXQ7XHJcblx0XHRcdGVsc2UgbUxhdCA9IHdnc0xhdDtcclxuXHRcdFx0aWYgKGRMb24gPiAwKSBwTG9uID0gd2dzTG9uO1xyXG5cdFx0XHRlbHNlIG1Mb24gPSB3Z3NMb247XHJcblxyXG5cdFx0XHRpZiAoKytpID4gMTAwMDApIGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Ly8vLy8vY29uc29sZS5sb2coaSk7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQnbG9uJzogd2dzTG9uLFxyXG5cdFx0XHQnbGF0Jzogd2dzTGF0XHJcblx0XHR9O1xyXG5cdH0sXHJcblxyXG5cdC8vIHR3byBwb2ludCdzIGRpc3RhbmNlXHJcblx0ZGlzdGFuY2U6IGZ1bmN0aW9uKGxhdEEgPSAxMTUuODU3OTYzLCBsb25BID0gMjguNjkyNiwgbGF0QiwgbG9uQikge1xyXG5cdFx0bGF0QSA9IGxhdEEgfHwgMTE1Ljg1Nzk2MywgbG9uQSA9IGxvbkEgfHwgMjguNjkyNlxyXG5cdFx0dmFyIGVhcnRoUiA9IDYzNzEwMDAuO1xyXG5cdFx0dmFyIHggPSBNYXRoLmNvcyhsYXRBICogdGhpcy5QSSAvIDE4MC4pICogTWF0aC5jb3MobGF0QiAqIHRoaXMuUEkgLyAxODAuKSAqIE1hdGguY29zKChsb25BIC0gbG9uQikgKiB0aGlzLlBJIC8gMTgwKTtcclxuXHRcdHZhciB5ID0gTWF0aC5zaW4obGF0QSAqIHRoaXMuUEkgLyAxODAuKSAqIE1hdGguc2luKGxhdEIgKiB0aGlzLlBJIC8gMTgwLik7XHJcblx0XHR2YXIgcyA9IHggKyB5O1xyXG5cdFx0aWYgKHMgPiAxKSBzID0gMTtcclxuXHRcdGlmIChzIDwgLTEpIHMgPSAtMTtcclxuXHRcdHZhciBhbHBoYSA9IE1hdGguYWNvcyhzKTtcclxuXHRcdHZhciBkaXN0YW5jZSA9IGFscGhhICogZWFydGhSO1xyXG5cdFx0cmV0dXJuIGRpc3RhbmNlO1xyXG5cdH0sXHJcblx0b3V0T2ZDaGluYTogZnVuY3Rpb24obGF0LCBsb24pIHtcclxuXHRcdGlmIChsb24gPCA3Mi4wMDQgfHwgbG9uID4gMTM3LjgzNDcpXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0aWYgKGxhdCA8IDAuODI5MyB8fCBsYXQgPiA1NS44MjcxKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdHRyYW5zZm9ybUxhdDogZnVuY3Rpb24oeCwgeSkge1xyXG5cdFx0dmFyIHJldCA9IC0xMDAuMCArIDIuMCAqIHggKyAzLjAgKiB5ICsgMC4yICogeSAqIHkgKyAwLjEgKiB4ICogeSArIDAuMiAqIE1hdGguc3FydChNYXRoLmFicyh4KSk7XHJcblx0XHRyZXQgKz0gKDIwLjAgKiBNYXRoLnNpbig2LjAgKiB4ICogdGhpcy5QSSkgKyAyMC4wICogTWF0aC5zaW4oMi4wICogeCAqIHRoaXMuUEkpKSAqIDIuMCAvIDMuMDtcclxuXHRcdHJldCArPSAoMjAuMCAqIE1hdGguc2luKHkgKiB0aGlzLlBJKSArIDQwLjAgKiBNYXRoLnNpbih5IC8gMy4wICogdGhpcy5QSSkpICogMi4wIC8gMy4wO1xyXG5cdFx0cmV0ICs9ICgxNjAuMCAqIE1hdGguc2luKHkgLyAxMi4wICogdGhpcy5QSSkgKyAzMjAgKiBNYXRoLnNpbih5ICogdGhpcy5QSSAvIDMwLjApKSAqIDIuMCAvIDMuMDtcclxuXHRcdHJldHVybiByZXQ7XHJcblx0fSxcclxuXHR0cmFuc2Zvcm1Mb246IGZ1bmN0aW9uKHgsIHkpIHtcclxuXHRcdHZhciByZXQgPSAzMDAuMCArIHggKyAyLjAgKiB5ICsgMC4xICogeCAqIHggKyAwLjEgKiB4ICogeSArIDAuMSAqIE1hdGguc3FydChNYXRoLmFicyh4KSk7XHJcblx0XHRyZXQgKz0gKDIwLjAgKiBNYXRoLnNpbig2LjAgKiB4ICogdGhpcy5QSSkgKyAyMC4wICogTWF0aC5zaW4oMi4wICogeCAqIHRoaXMuUEkpKSAqIDIuMCAvIDMuMDtcclxuXHRcdHJldCArPSAoMjAuMCAqIE1hdGguc2luKHggKiB0aGlzLlBJKSArIDQwLjAgKiBNYXRoLnNpbih4IC8gMy4wICogdGhpcy5QSSkpICogMi4wIC8gMy4wO1xyXG5cdFx0cmV0ICs9ICgxNTAuMCAqIE1hdGguc2luKHggLyAxMi4wICogdGhpcy5QSSkgKyAzMDAuMCAqIE1hdGguc2luKHggLyAzMC4wICogdGhpcy5QSSkpICogMi4wIC8gMy4wO1xyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmcmllbmRseURhdGUodGltZXN0YW1wKSB7XHJcblx0dmFyIGZvcm1hdHMgPSB7XHJcblx0XHQneWVhcic6ICclbiUg5bm05YmNJyxcclxuXHRcdCdtb250aCc6ICclbiUg5pyI5YmNJyxcclxuXHRcdCdkYXknOiAnJW4lIOWkqeWJjScsXHJcblx0XHQnaG91cic6ICclbiUg5bCP5pe25YmNJyxcclxuXHRcdCdtaW51dGUnOiAnJW4lIOWIhumSn+WJjScsXHJcblx0XHQnc2Vjb25kJzogJyVuJSDnp5LliY0nLFxyXG5cdH07XHJcblxyXG5cdHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG5cdHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigobm93IC0gdGltZXN0YW1wKSAvIDEwMDApO1xyXG5cdHZhciBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG5cdHZhciBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuXHR2YXIgZGF5cyA9IE1hdGguZmxvb3IoaG91cnMgLyAyNCk7XHJcblx0dmFyIG1vbnRocyA9IE1hdGguZmxvb3IoZGF5cyAvIDMwKTtcclxuXHR2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTtcclxuXHJcblx0dmFyIGRpZmZUeXBlID0gJyc7XHJcblx0dmFyIGRpZmZWYWx1ZSA9IDA7XHJcblx0aWYgKHllYXJzID4gMCkge1xyXG5cdFx0ZGlmZlR5cGUgPSAneWVhcic7XHJcblx0XHRkaWZmVmFsdWUgPSB5ZWFycztcclxuXHR9IGVsc2Uge1xyXG5cdFx0aWYgKG1vbnRocyA+IDApIHtcclxuXHRcdFx0ZGlmZlR5cGUgPSAnbW9udGgnO1xyXG5cdFx0XHRkaWZmVmFsdWUgPSBtb250aHM7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoZGF5cyA+IDApIHtcclxuXHRcdFx0XHRkaWZmVHlwZSA9ICdkYXknO1xyXG5cdFx0XHRcdGRpZmZWYWx1ZSA9IGRheXM7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGhvdXJzID4gMCkge1xyXG5cdFx0XHRcdFx0ZGlmZlR5cGUgPSAnaG91cic7XHJcblx0XHRcdFx0XHRkaWZmVmFsdWUgPSBob3VycztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKG1pbnV0ZXMgPiAwKSB7XHJcblx0XHRcdFx0XHRcdGRpZmZUeXBlID0gJ21pbnV0ZSc7XHJcblx0XHRcdFx0XHRcdGRpZmZWYWx1ZSA9IG1pbnV0ZXM7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRkaWZmVHlwZSA9ICdzZWNvbmQnO1xyXG5cdFx0XHRcdFx0XHRkaWZmVmFsdWUgPSBzZWNvbmRzID09PSAwID8gKHNlY29uZHMgPSAxKSA6IHNlY29uZHM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmb3JtYXRzW2RpZmZUeXBlXS5yZXBsYWNlKCclbiUnLCBkaWZmVmFsdWUpO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOagueaNruWtl+auteWOu+mHjVxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXJyIOmbhuWQiFxyXG4gKiBAcGFyYW0ge09iamVjdH0gZmllbGQg5Y676YeN5a2X5q61XHJcbiAqL1xyXG5mdW5jdGlvbiB1bmlxdWUoYXJyLGZpZWxkKXtcclxuICAgIHZhciBtYXAgPSB7fTtcclxuICAgIHZhciByZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFtYXBbYXJyW2ldW2ZpZWxkXV0pIHtcclxuICAgICAgICAgICAgbWFwW2FycltpXVtmaWVsZF1dPTE7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGFycltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cdHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gICog5pa55rOV5ZCN56ewOiDml6XmnJ/lrZfnrKbkuLLovazml7bpl7TmiLNcclxuICAqIOaWueazleazqOmHijog5pe26Ze05oiz5YC86L2s5Yiw56eS77yM5LiN5Yiw5q+r56eSXHJcbiAgKiDkvKDlhaXlj4LmlbA6IGRhdGVTdHJpbmcg5pel5pyf5a2X56ym5LiyXHJcbiAgKiDov5Tlm57mlbDlgLw6IOaXtumXtOaIs1xyXG4qL1xyXG5mdW5jdGlvbiBkYXRlU3RyaW5nVG9UaW1lc3RhbXAoZGF0ZVN0cmluZyl7XHJcblx0ZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyaW5nKDAsMTYpOy8v5oiq5Y+W5Yiw56eSXHJcblx0ZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcucmVwbGFjZSgvLS9nLCcvJyk7IC8v5b+F6aG75oqK5pel5pyfJy0n6L2s5Li6Jy8nXHJcblx0dmFyIHRpbWVzdGFtcCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpLmdldFRpbWUoKTtcclxuXHR0aW1lc3RhbXAgPSB0aW1lc3RhbXAvMTAwMDtcclxuXHRjb25zb2xlLmxvZyhcInRpbWVzdGFtcCA9PSBcIix0aW1lc3RhbXApO1xyXG5cdHJldHVybiB0aW1lc3RhbXA7XHJcbn1cclxuLyoqXHJcbiAgKiDmlrnms5XlkI3np7A6IOaXtumXtOaIs+i9rOaXpeacn+Wtl+espuS4slxyXG4gICog5pa55rOV5rOo6YeKOiDoo4XmjaLnu5PmnpzmiKrlj5bliLDlpKnvvIzkuI3miKrlj5bliLDml7bliIbnp5JcclxuICAqIOS8oOWFpeWPguaVsDogdGltZXN0YW1wIOaXtumXtOaIs1xyXG4gICog6L+U5Zue5pWw5YC8OiDml6XmnJ/lrZfnrKbkuLJcclxuKi9cclxuZnVuY3Rpb24gdGltZXN0YW1wVG9EYXRlU3RyaW5nKHRpbWVzdGFtcCl7XHJcblx0dmFyIGQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKTsgICAgLy/moLnmja7ml7bpl7TmiLPnlJ/miJDnmoTml7bpl7Tlr7nosaFcclxuXHR2YXIgZGF0ZSA9IChkLmdldEZ1bGxZZWFyKCkpICsgXCItXCIgKyBcclxuXHQgICAgICAgICAgIChkLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICtcclxuXHQgICAgICAgICAgIChkLmdldERhdGUoKSkvLyArIFwiIFwiICsgXHJcblx0ICAgICAgICAgICAvLyAoZC5nZXRIb3VycygpKSArIFwiOlwiICsgXHJcblx0ICAgICAgICAgICAvLyAoZC5nZXRNaW51dGVzKCkpICsgXCI6XCIgKyBcclxuXHQgICAgICAgICAgIC8vIChkLmdldFNlY29uZHMoKSk7XHJcblx0Y29uc29sZS5sb2coXCJkYXRlZGF0ZSA9IFwiLGRhdGUpO1xyXG5cdHJldHVybiBkYXRlO1xyXG5cdFx0XHQgICBcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIhuS6qy3ojrflj5bmnI3liqHllYbliJfooahcclxuICog6L+U5ZueOiDmnI3liqHllYbliJfooahcclxuICovXHJcbmZ1bmN0aW9uIGdldFNoYXJlTGlzdCgpe1xyXG5cdHZhciBzaGFyZUxpc3QgPSBbXTtcclxuXHR1bmkuZ2V0UHJvdmlkZXIoey8v6I635Y+W5pyN5Yqh5ZWGXHJcblx0XHRzZXJ2aWNlOidzaGFyZScsXHJcblx0XHRzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5pyN5Yqh5ZWG5L+h5oGvOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRpZihyZXMucHJvdmlkZXIubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdHJlcy5wcm92aWRlciA9IFtcIndlaXhpblwiLFwiY29weUxpbmtcIiwncmVmcmVzaCddO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyZXMucHJvdmlkZXIucHVzaChcImNvcHlMaW5rXCIpO1xyXG5cdFx0XHRcdHJlcy5wcm92aWRlci5wdXNoKFwicmVmcmVzaFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5wcm92aWRlci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBpdGVtID0gcmVzLnByb3ZpZGVyW2ldO1xyXG5cdFx0XHRcdGlmIChpdGVtID09ICd3ZWl4aW4nKSB7XHJcblx0XHRcdFx0XHRzaGFyZUxpc3QucHVzaChzZXR1cFNoYXJlSXRlbSgnd2VpeGluJywgXCLlvq7kv6FcIiwgXCJXWFNjZW5lU2Vzc2lvblwiKSk7XHJcblx0XHRcdFx0XHRzaGFyZUxpc3QucHVzaChzZXR1cFNoYXJlSXRlbSgnd2VpeGluJywgXCLmnIvlj4vlnIhcIiwgXCJXWFNlbmNlVGltZWxpbmVcIikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL+WkjeWItumTvuaOpVxyXG5cdFx0XHRcdGlmIChpdGVtID09ICdjb3B5TGluaycpIHtcclxuXHRcdFx0XHRcdHNoYXJlTGlzdC5wdXNoKHNldHVwU2hhcmVJdGVtKCdjb3B5TGluaycsIFwi5aSN5Yi26ZO+5o6lXCIsIFwiY29weUxpbmtcIikpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8v5Yi35pawXHJcblx0XHRcdFx0aWYoaXRlbSA9PSAncmVmcmVzaCcpe1xyXG5cdFx0XHRcdFx0c2hhcmVMaXN0LnB1c2goc2V0dXBTaGFyZUl0ZW0oJ3JlZnJlc2gnLCfliLfmlrAnLCdyZWZyZXNoJykpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGlmIChpdGVtID09ICdzaW5hd2VpYm8nKSB7XHJcblx0XHRcdFx0Ly8gXHRzaGFyZUxpc3QucHVzaChzZWxmLnNldHVwU2hhcmVJdGVtKFwid2VpYm9cIiwgXCLlvq7ljZpcIiwgXCJ3ZWlib1wiKSk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIGlmIChpdGVtID09ICdxcScpIHtcclxuXHRcdFx0XHQvLyBcdHNoYXJlTGlzdC5wdXNoKHNlbGYuc2V0dXBTaGFyZUl0ZW0oXCJxcVwiLCBcInFxXCIsIFwicXFcIikpO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5LiN6IO955u05o6l5YiG5Lqr5YiwUVHnqbrpl7TvvIzlj6/ku6XliIbkuqvliLBRUe+8jOeEtuWQjuWcqFFR55qE55WM6Z2i6YeM6YCJ5oupUVHnqbrpl7TjgIJcclxuXHRcdFx0XHQvLyBcdC8vIHNoYXJlTGlzdC5wdXNoKHNlbGYuc2V0dXBTaGFyZUl0ZW0oXCJ6b25lXCIsXCJxceepuumXtFwiKSk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5pyN5Yqh5ZWG5YiX6KGoOiBcIiArIEpTT04uc3RyaW5naWZ5KHNoYXJlTGlzdCkpO1xyXG5cdFx0fSxcclxuXHRcdGZhaWw6ZnVuY3Rpb24ocmVzKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bliIbkuqvmnI3liqHllYbliJfooajlpLHotKU6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHR9XHJcblx0fSlcclxuXHRyZXR1cm4gc2hhcmVMaXN0O1xyXG59XHJcblxyXG4vKipcclxuICog5YiG5LqrLeiOt+WPluacjeWKoeWVhuWvueW6lOWbvueJh1xyXG4gKiDlj4LmlbA6IHByb3ZpZGVyIOacjeWKoeWVhuWQjeensFxyXG4gKiDlj4LmlbA6IHRpdGxlIOagh+mimFxyXG4gKiDlj4LmlbA6IHNjZW5lIOWcuuaZr1xyXG4gKiDov5Tlm546IOacjeWKoeWVhuWvueW6lOWbvueJh1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0dXBTaGFyZUl0ZW0ocHJvdmlkZXIsdGl0bGUsc2NlbmUpe1xyXG5cdHZhciBpdGVtID0ge1xyXG5cdFx0cHJvdmlkZXI6IHByb3ZpZGVyLFxyXG5cdFx0c2NlbmU6IHNjZW5lLFxyXG5cdFx0dGl0bGU6IHRpdGxlLFxyXG5cdFx0aW1hZ2U6IFwiL3N0YXRpYy9pbWcvc2hhcmUvXCIgKyBzY2VuZSArIFwiLnBuZ1wiXHJcblx0fVxyXG5cdHJldHVybiBpdGVtO1xyXG59XHJcblxyXG4vKipcclxuICog5YiG5LqrLeWIhuS6qy3liIbkuqvlvq7kv6HmiJbogIVxceaIluiAheWFtuWug1xyXG4gKiDlj4LmlbA6IGl0ZW0g6YCJ5Lit55qE5pyN5Yqh5ZWG5L+h5oGvKOWvueixoSlcclxuICog5Y+C5pWwOiBkZXRhaWwg5YiG5Lqr55qE5YaF5a655L+h5oGvKOWvueixoSlcclxuICog6L+U5ZueOiDmmK/lkKbliIbkuqvmiJDlip9cclxuICovXHJcbmZ1bmN0aW9uIGNsaWNrU2hhcmVJdGVtKGl0ZW0sZGV0YWlsKXtcclxuXHR2YXIgaXNTaGFyZSA9IGZhbHNlO1xyXG5cdC8vZGV0YWlsLmxpbmsgPSBkZXRhaWwubGluay5yZXBsYWNlKFwie3VuaW9uaWR9XCIsdW5pLmdldFN0b3JhZ2VTeW5jKFwidW5pb25pZFwiKSk7XHJcblx0Ly8gaWYgKHRydWUpIHtcclxuXHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIikge1xyXG5cdFx0dW5pLmRvd25sb2FkRmlsZSh7XHJcblx0XHQgICAgdXJsOiBkZXRhaWwucGljLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOi1hOa6kFxyXG5cdFx0ICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdCAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRcdHBsdXMuemlwLmNvbXByZXNzSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0XHRzcmM6cmVzLnRlbXBGaWxlUGF0aCxcclxuXHRcdFx0XHRcdFx0ZHN0OlwiX2RvYy9zaGFyZS5wbmdcIixcclxuXHRcdFx0XHRcdFx0cXVhbGl0eToyMCxcclxuXHRcdFx0XHRcdFx0b3ZlcndyaXRlOnRydWUsXHJcblx0XHRcdFx0XHRcdGZvcm1hdDpcInBuZ1wiLFxyXG5cdFx0XHRcdFx0XHR3aWR0aDpcIjEwMHB4XCIsXHJcblx0XHRcdFx0XHRcdGhlaWdodDpcIjEwMHB4XCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0ZGV0YWlsLnBpYyA9IFwiX2RvYy9zaGFyZS5wbmdcIjtcclxuXHRcdFx0XHRcdFx0dW5pLnNoYXJlKHtcclxuXHRcdFx0XHRcdFx0XHRwcm92aWRlcjogaXRlbS5wcm92aWRlcixcclxuXHRcdFx0XHRcdFx0XHRzY2VuZTogaXRlbS5zY2VuZSwvL+W/heWhqzogcHJvdmlkZXLkuLp3ZWl4aW7ml7ZcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiBpdGVtLnNjZW5lID09ICdxcScgPyAxIDogMCwvL+mAieWhqzogMOS4uuWbvuaWh++8jHFx5LiN5pSv5oyBXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGRldGFpbC50aXRsZSwvL+mAieWhqzogXHJcblx0XHRcdFx0XHRcdFx0c3VtbWFyeTogZGV0YWlsLmRlc2MsLy90eXBlPTHml7blv4Xloas6IOWIhuS6q+WGheWuueeahOaRmOimgVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY6IGRldGFpbC5saW5rLC8vdHlwZT0w5pe25b+F5aGrOiDot7Povazpk77mjqVcclxuXHRcdFx0XHRcdFx0XHRpbWFnZVVybDogZGV0YWlsLnBpYywvL3R5cGU9MOOAgTLjgIE15pe25b+F5aGrOiDlm77niYflpKfkuo4yMGti5pe25LiN5pi+56S6LOaOqOiNkOS9v+eUqOWwj+S6jjIwS2LnmoTlm77niYdcclxuXHRcdFx0XHRcdFx0XHQvL21lZGlhVXJsOicnLC8vdHlwZSDkuLogM+OAgTQg5pe25b+F6YCJOiDpn7Pop4bpopHlnLDlnYBcclxuXHRcdFx0XHRcdFx0XHQvL21pbmlQcm9ncmFtOnt9LC8vdHlwZSDkuLogNSDml7blv4XpgIk6IOWIhuS6q+Wwj+eoi+W6j+W/heimgeWPguaVsFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzKXsvL+iwg+eUqOaIkOWKn1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLliIbkuqvosIPnlKjmiJDlip86IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRpc1NoYXJlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGFwaS50b2FzdFRpcHNUaW1lKFwi5YiG5Lqr5oiQ5YqfXCIsMTUwMCk7XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsOmZ1bmN0aW9uKGVycm9yKXsvL+iwg+eUqOWksei0pVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLliIbkuqvosIPnlKjlpLHotKU6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlzU2hhcmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdGlzU2hhcmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJDb21wcmVzcyBlcnJvciFcIixlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH1cclxuXHRcdH0pO1xyXG5cdH1lbHNle1xyXG5cdFx0dW5pLnNoYXJlKHtcclxuXHRcdFx0cHJvdmlkZXI6IGl0ZW0ucHJvdmlkZXIsXHJcblx0XHRcdHNjZW5lOiBpdGVtLnNjZW5lLC8v5b+F5aGrOiBwcm92aWRlcuS4undlaXhpbuaXtlxyXG5cdFx0XHR0eXBlOiBpdGVtLnNjZW5lID09ICdxcScgPyAxIDogMCwvL+mAieWhqzogMOS4uuWbvuaWh++8jHFx5LiN5pSv5oyBXHJcblx0XHRcdHRpdGxlOiBkZXRhaWwudGl0bGUsLy/pgInloas6IFxyXG5cdFx0XHRzdW1tYXJ5OiBkZXRhaWwuZGVzYywvL3R5cGU9MeaXtuW/heWhqzog5YiG5Lqr5YaF5a6555qE5pGY6KaBXHJcblx0XHRcdGhyZWY6IGRldGFpbC5saW5rLC8vdHlwZT0w5pe25b+F5aGrOiDot7Povazpk77mjqVcclxuXHRcdFx0aW1hZ2VVcmw6IGRldGFpbC5waWMsLy90eXBlPTDjgIEy44CBNeaXtuW/heWhqzog5Zu+54mH5aSn5LqOMjBrYuaXtuS4jeaYvuekuizmjqjojZDkvb/nlKjlsI/kuo4yMEti55qE5Zu+54mHXHJcblx0XHRcdC8vbWVkaWFVcmw6JycsLy90eXBlIOS4uiAz44CBNCDml7blv4XpgIk6IOmfs+inhumikeWcsOWdgFxyXG5cdFx0XHQvL21pbmlQcm9ncmFtOnt9LC8vdHlwZSDkuLogNSDml7blv4XpgIk6IOWIhuS6q+Wwj+eoi+W6j+W/heimgeWPguaVsFxyXG5cdFx0XHRzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7Ly/osIPnlKjmiJDlip9cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWIhuS6q+iwg+eUqOaIkOWKnzogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdFx0XHRpc1NoYXJlID0gdHJ1ZTtcclxuXHRcdFx0XHRhcGkudG9hc3RUaXBzVGltZShcIuWIhuS6q+aIkOWKn1wiLDE1MDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOmZ1bmN0aW9uKGVycm9yKXsvL+iwg+eUqOWksei0pVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi5YiG5Lqr6LCD55So5aSx6LSlOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcblx0XHRcdFx0aXNTaGFyZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHRyZXR1cm4gaXNTaGFyZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNKc29uU3RyaW5nOiBpc0pzb25TdHJpbmcsXHJcblx0Zm9ybWF0VGltZTogZm9ybWF0VGltZSxcclxuXHRmb3JtYXRMb2NhdGlvbjogZm9ybWF0TG9jYXRpb24sXHJcblx0ZGF0ZVV0aWxzOiBkYXRlVXRpbHMsXHJcblx0ZGF0ZURpZmY6IGRhdGVEaWZmLFxyXG5cdGZvcm1hdE1pbnV0ZXNUaW1lOiBmb3JtYXRNaW51dGVzVGltZSxcclxuXHRmb3JtYXRNaW51dGVzRGF5OiBmb3JtYXRNaW51dGVzRGF5LFxyXG5cdGZvcm1hdERhdGU6IGZvcm1hdERhdGUsXHJcblx0Zm9ybWF0RGF0ZVRpbWU6IGZvcm1hdERhdGVUaW1lLFxyXG5cdGdldERhdGVXaXRoQ291bnQ6IGdldERhdGVXaXRoQ291bnQsXHJcblx0Z2V0RGF0ZVdlZWtlbmQ6IGdldERhdGVXZWVrZW5kLFxyXG5cdGdldERheXNCeURhdGVTdHJpbmc6IGdldERheXNCeURhdGVTdHJpbmcsXHJcblx0ZGF0ZUNoZWNrOiBkYXRlQ2hlY2ssXHJcblx0bXVsdGlBcnJheTogbXVsdGlBcnJheSxcclxuXHRuYXZpZ2F0ZVRvTG9jYXRpb246IG5hdmlnYXRlVG9Mb2NhdGlvbixcclxuXHRkaXN0YW5jZTogZGlzdGFuY2UsXHJcblx0Zm9ybWF0QXJyYXk6IGZvcm1hdEFycmF5LFxyXG5cdGdldFZhck5hdmlCYXJIZWlnaHQ6IGdldFZhck5hdmlCYXJIZWlnaHQsXHJcblx0b3BlbkxvY2F0aW9uOiBvcGVuTG9jYXRpb24sXHJcblx0b3BlblNob3BMb2NhdGlvbjogb3BlblNob3BMb2NhdGlvbixcclxuXHRjaGVja0FwcFZlcnNpb246IGNoZWNrQXBwVmVyc2lvbixcclxuXHR0aXBPZmY6IHRpcE9mZixcclxuXHRnb3RvV2ViVmlldzogZ290b1dlYlZpZXcsXHJcblx0ZnJpZW5kbHlEYXRlOmZyaWVuZGx5RGF0ZSxcclxuXHRkYXRlU3RyaW5nVG9UaW1lc3RhbXAgOiBkYXRlU3RyaW5nVG9UaW1lc3RhbXAsXHJcblx0dGltZXN0YW1wVG9EYXRlU3RyaW5nIDogdGltZXN0YW1wVG9EYXRlU3RyaW5nLFxyXG5cdGZvcm1hdFllYXJNaW51dGVzRGF5OmZvcm1hdFllYXJNaW51dGVzRGF5LFxyXG5cdGZvcm1hdFllYXJNaW51dGVzRGF5Rm9ybXQ6Zm9ybWF0WWVhck1pbnV0ZXNEYXlGb3JtdCxcclxuXHRmb3JtYXRNb250aERheTpmb3JtYXRNb250aERheSxcclxuXHRnb3RvRGV0YWlsOmdvdG9EZXRhaWwsXHJcblx0Z2V0U2hhcmVMaXN0OmdldFNoYXJlTGlzdCxcclxuXHRjbGlja1NoYXJlSXRlbTpjbGlja1NoYXJlSXRlbSxcclxuXHR1bmlxdWU6dW5pcXVlXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*******************************************!*\
  !*** E:/headlines/headlines/api/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i[\"return\"] != null) _i[\"return\"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;} // 管理账号信息\n\nvar URL_BASE = 'https://api.0791look.com/';\nvar IMAGE_PATH = 'https://ye.ncnews.com.cn';\n\n/**\r\n                                              * 方法名称: 请求的基础方法\r\n                                              * 方法注释: post\\get\\json请求都会调这个方法\r\n                                              * 传入参数: data->请求的参数 mescroll->可以传上下拉刷新的控件mescroll也可以传字符串\"N\",传字符串\"N\"表示请求的时候不显示加载中的动画 loadingFlag->是否显示加载动画传bool值\r\n                                              * 返回数值: 请求的结果 returncode === 0 的时候才会返回res.data \r\n                                              */\nvar request = function request(opts, data, mescroll, loadingFlag) {\n  //如果是上下拉刷新不显示，非上下拉刷新都显示\n  if (loadingFlag == true && !mescroll) {\n    showLoading(\"加载中,请稍后...\");\n  }\n  data.token = uni.getStorageSync(\"tokens\");\n  data.wid = uni.getStorageSync(\"wid\");\n\n  // console.log(\"请求的UserAgent = \",plus.navigator.getUserAgent());\n  // const res = uni.getSystemInfoSync();\n  //    console.log(\"getSystemInfoSync=\"+JSON.stringify(res));\n\n  //  uni.getSystemInfo({\n  //      success: function (res) {\n  // \t\t console.log(\"getSystemInfo=\"+JSON.stringify(res));\n  //      }\n  //  });\n  var httpDefaultOpts = {\n    url: URL_BASE + opts.url,\n    data: data,\n    method: opts.method === 'json' ? 'post' : opts.method,\n    header: opts.method == 'get' || opts.method == 'json' ? {\n      'X-Requested-With': 'XMLHttpRequest',\n      \"Accept\": \"application/json\",\n      \"Content-Type\": \"application/json; charset=UTF-8\" } :\n    {\n      'X-Requested-With': 'XMLHttpRequest',\n      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },\n\n    dataType: 'text' };\n\n  var promise = new Promise(function (resolve, reject) {\n    uni.request(httpDefaultOpts).then(function (data) {\n      //如果是上下拉刷新，下拉刷新的时候显示，上拉加载不显示，非上下拉刷新都显示,或者第三个参传字符N就不显示加载动画\n      if ((!mescroll || mescroll === \"N\") && loadingFlag != false) {\n        uni.hideLoading();\n      }var _data = _slicedToArray(\n      data, 2),error = _data[0],res = _data[1];\n      if (res) {\n        if (res.data.constructor !== Object) {\n          res.data = JSON.parse(res.data);\n        }\n        if (res.data.code === 200) {\n          if (mescroll && mescroll != \"N\") {\n            if (res.data.data.length > 0) {\n              var hasNext = res.data.data.length == mescroll.size;\n              __f__(\"log\", \"加载下一页 == \", hasNext, \" at api/index.js:58\");\n              if (hasNext) {\n                mescroll.endSuccess(res.data.data.length, true);\n              } else {\n                mescroll.endSuccess(1, false);\n              }\n            } else {\n              __f__(\"log\", \"已经加载完\", \" at api/index.js:65\");\n              mescroll.endSuccess(0, false); //1为当前页获取的数据量，false为没有下一页的数据\n            }\n          }\n          resolve(res.data);\n        } else if (res.data.code === 403) {\n          removeStorage();\n          openLoginPage();\n        } else {\n          if (res.data.message === \"token不存在,请重新登录\") {\n            removeStorage();\n            openLoginPage();\n          }\n          if (mescroll && mescroll != \"N\") {\n            mescroll.endErr(\"出错了，请稍后重试\");\n          }\n          if (res.data.message && res.data.message.length && !(res.data.message === \"token不存在,请重新登录\")) {\n            toastTips(res.data.message);\n          } else {\n            toastTips(\"出错了，请稍后重试\");\n          }\n          reject(res.data);\n        }\n      } else {\n        // toastTips(\"暂时无法访问网络\");\n        if (mescroll && mescroll != \"N\") {\n          mescroll.endErr(\"暂时无法访问网络\");\n        }\n        reject(error);\n      }\n    }).catch(function (response) {\n      if ((!mescroll || mescroll != \"N\") && loadingFlag != false) {//如果是上下拉刷新，下拉刷新的时候显示，上拉加载不显示，非上下拉刷新都显示\n        uni.hideLoading();\n      }\n      toastTips(\"出错了，请稍后重试\");\n      if (mescroll && mescroll != \"N\") {\n        mescroll.endErr(\"出错了，请稍后重试\");\n      }\n      //console.log(\"请求出错了\", response);\n      reject(response);\n    });\n  });\n  return promise;\n};\n\n/**\r\n    * 方法名称: 上传单文件\r\n    * 方法注释: 文件上传成功之后需要把返回的json转成字符串作为参数提交更新,比如logo:\"{\"fileName\":\"11111.png\",\"filePath\":\"\t\t\t  /storage/shop/77/info/logo.png\",\"fileSize\":255}\"\r\n    * 传入参数: attachment->手机获取的照片二进制文件, attachmentsFolder->保存在服务器图片的路径，比如shopLogo存放的店铺logo\r\n    * 返回数值: 服务器文件路径的json数据,json格式为data.list,其中单文件上传取第一个元素即:data.list[0]={\"fileName\":\"11111.png\",\"filePath\":\"/storage/shop/77/info/logo.png\",\"fileSize\":255}\r\n    */\nfunction uploadFile(attachment, fromData) {\n  var promise = new Promise(function (resolve, reject) {\n    showLoading(\"加载中,请稍后...\");\n    var httpDefaultOpts = {\n      url: URL_BASE + '/upload/upload/file.do',\n      filePath: attachment,\n      name: 'file',\n      formData: {\n        \"fileType\": attachmentsFolder },\n\n      header: {\n        'X-Requested-With': 'XMLHttpRequest',\n        \"token\": uni.getStorageSync(\"tokens\") || ' ',\n        \"wid\": uni.getStorageSync(\"wid\") || ' ' } };\n\n\n    //console.log(\"单文件上传的参数 = \", httpDefaultOpts);\n    uni.uploadFile(httpDefaultOpts).then(\n    function (data) {\n      uni.hideLoading();var _data2 = _slicedToArray(\n      data, 2),error = _data2[0],res = _data2[1];\n      if (res) {\n        if (res.data.constructor !== Object) {\n          res.data = JSON.parse(res.data);\n        }\n        //console.log(\"单文件上传的结果 = \", res);\n        if (res.data.returncode === 0) {\n          resolve(res.data);\n        } else if (res.data.returncode === 1009) {\n          removeStorage();\n          openLoginPage();\n        } else {\n\n          toastTips(res.data.message).then(function () {\n            reject(res.data);\n          });\n        }\n      } else {\n        toastTips(\"暂时无法访问网络\");\n      }\n    }).\n    catch(\n    function (response) {\n      uni.hideLoading();\n      reject(response);\n    });\n\n  });\n  return promise;\n}\n/**\r\n   * 方法名称: 缓存数据到本地\r\n   * 方法注释: 可已通过setStorageSync相对应的getStorageSync传入相应的key值获取缓存数据\r\n   * 传入参数: res 要缓存的数据\r\n   * 返回数值: 无\r\n   */\nvar setStorage = function setStorage(res) {\n  uni.setStorageSync(\"hasLogin\", true);\n  uni.setStorageSync(\"user\", res.data);\n};\n/**\r\n    * 方法名称: 清除本地缓存的数据\r\n    * 方法注释: 清除特定的userName/hasLogin/token数据\r\n    * 传入参数: 无\r\n    * 返回数值: 无\r\n    */\nvar removeStorage = function removeStorage() {\n  uni.setStorageSync(\"hasLogin\", false);\n  uni.removeStorage({\n    key: 'user' }).\n  then(function () {\n    uni.removeStorage({\n      key: 'tokens' });\n\n    uni.removeStorageSync(\"wid\");\n    uni.removeStorageSync(\"unionid\");\n  });\n  uni.removeStorageSync(\"tokens\");\n  uni.removeStorageSync(\"wid\");\n  uni.removeStorageSync(\"unionid\");\n};\n\n/**\r\n    * 方法名称: 获取服务器路径前缀\r\n    * 方法注释: \r\n    * 传入参数: 无\r\n    * 返回数值: 服务器路径前缀\r\n    */\nfunction getBaseUrl() {\n  return URL_BASE;\n}\n/**\r\n   * 方法名称: 获取图片路径前缀\r\n   * 方法注释: \r\n   * 传入参数: 无\r\n   * 返回数值: 图片路径前缀\r\n   */\nfunction getBaseImagePath() {\n  return IMAGE_PATH;\n}\n\n/**\r\n   * 方法名称: 获取当前用户的信息\r\n   * 方法注释: \r\n   * 传入参数: mescroll(上下拉刷新，非必传)\r\n   * 返回数值: 用户信息数据\r\n   */\nfunction getUserInfo(mescroll) {\n\n  var thePromise = new Promise(function (resolve, reject) {\n    var url = \"api/ncrb/\";\n    var data = {\n      action: 'userinfo' };\n\n    post(url, data, mescroll).then(function (res) {\n      if (res.data.nickname) {\n        res.data.nickname = decodeURI(res.data.nickname);\n      }\n      uni.setStorageSync(\"user\", res.data);\n      uni.setStorageSync(\"haslogin\", true);\n      resolve(res.data);\n    }).catch(function (res) {\n      reject(res);\n    });\n  });\n  return thePromise;\n}\n/**\r\n    * 方法名称: 修改用户信息\r\n    * 方法注释: 修改用户信息成功后会直接再读取用户信息,保证获取用户的信息最新\r\n    * 传入参数: data 要修改的用户信息参数,比如修改昵称的话传{nick:\"曾先森\"}\r\n    * 返回数值: 修改是否成功的返回值\r\n  */\nfunction updateUserInfo(data) {\n\n  var thePromise = new Promise(function (resolve, reject) {\n    var url = 'api/ncrb/';\n    data.action = \"upuserinfo\";\n    data.nickname = encodeURI(data.nickname);\n    post(url, data).then(function (res) {\n      getUserInfo();\n      resolve(res.data);\n    }).catch(function (res) {\n      reject(res);\n    });\n  });\n  return thePromise;\n}\n\n/**\r\n   * 方法名称: 重新跳到登录页\r\n   * 方法注释: 需要用户登录或登陆失效时才使用此方法\r\n   * 传入参数: 无\r\n   * 返回数值: 无\r\n   */\nvar openLoginPage = function openLoginPage() {\n  // uni.reLaunch({\n  // \turl: \"/pages/user/login/login\"\n  // });\n  // let pages = getCurrentPages();\n  //console.log(\"pagespagespages = \",pages);\n  var pages = getCurrentPages();\n  var page = pages[pages.length - 1];\n  var route = page.route;\n  if (route && route == \"pages/user/login/login\") {\n  } else {\n    uni.navigateTo({\n      url: \"/pages/user/login/login\",\n      animationType: \"slide-in-bottom\",\n      animationDuration: 200 });\n\n  }\n};\n//toast提示\nvar toastTips = function toastTips(txt) {\n  return uni.showToast({\n    title: txt,\n    icon: \"none\" });\n\n};\n//toast提示，可以设置等待时长\nvar toastTipsTime = function toastTipsTime(txt, time) {\n  return uni.showToast({\n    title: txt,\n    duration: time,\n    icon: \"none\" });\n\n\n};\n//弹窗提示\nvar showModal = function showModal(txt) {\n  return uni.showModal({\n    title: '提示',\n    content: txt,\n    showCancel: false });\n\n};\n//loading\nvar showLoading = function showLoading(txt) {\n  setTimeout(function () {\n    uni.hideLoading();\n  }, 15000);\n  return uni.showLoading({\n    title: txt,\n    mask: false //数据请求时App界面无法操作\n  });\n};\n/**\r\n    * 方法名称: get请求\r\n    * 方法注释: url为必填，data和mescroll为非必填\r\n    * 传入参数: url->请求的接口路径，data->请求的参数 mescroll->上下拉组件 laodingFlag->是否显示加载动画传bool值\r\n    * 返回数值: 请求之后的json数据\r\n    */\nfunction get(url, data, mescroll, loadingFlag) {\n  var option = {\n    \"url\": url,\n    \"method\": \"get\" };\n\n  return request(option, data, mescroll, loadingFlag);\n}\n/**\r\n   * 方法名称: post请求\r\n   * 方法注释: url为必填，data/mescroll/loadingFlag为非必填\r\n   * 传入参数: url->请求的接口路径，data->请求的参数 mescroll->上下拉组件 laodingFlag->是否显示加载动画传bool值\r\n   * 返回数值: 请求之后的json数据\r\n   */\nfunction post(url, data, mescroll, loadingFlag) {\n  var option = {\n    \"url\": url,\n    \"method\": \"post\" };\n\n  if (!data) {\n    data = {};\n  }\n  return request(option, data, mescroll, loadingFlag);\n}\n/**\r\n   * 方法名称: post请求\r\n   * 方法注释: url为必填，data和mescroll为非必填\r\n   * 传入参数: url->请求的接口路径，data->请求的参数 mescroll->上下拉组件 loadingFlag->是否显示加载动画传bool值\r\n   * 返回数值: 请求之后的json数据\r\n   */\nfunction json(url, data, mescroll, loadingFlag) {\n  var option = {\n    \"url\": url,\n    \"method\": \"json\" };\n\n  return request(option, data, mescroll, loadingFlag);\n}\n/* \r\n  \t只是返回用户登录状态的bool值，不会跳转到登录界面\r\n  */\nfunction loginState() {\n  return uni.getStorageSync(\"hasLogin\");\n}\n/* \r\n  \t用户登录之后才能进行下一步的操作，否则跳登录页,返回用户是否登录的bool值 \r\n  */\nfunction alreadyLogin() {\n  var loginState = uni.getStorageSync(\"hasLogin\");\n  __f__(\"log\", \"loginStateloginState == \", loginState, \" at api/index.js:376\");\n  if (!loginState || loginState === false) {\n    removeStorage();\n    openLoginPage();\n  }\n  return loginState;\n}var _default =\n\n{\n  request: request,\n  get: get,\n  post: post,\n  json: json,\n  loginState: loginState,\n  alreadyLogin: alreadyLogin,\n  openLoginPage: openLoginPage,\n  setStorage: setStorage,\n  removeStorage: removeStorage,\n  getUserInfo: getUserInfo,\n  updateUserInfo: updateUserInfo,\n  toastTips: toastTips,\n  toastTipsTime: toastTipsTime,\n  showModal: showModal,\n  showLoading: showLoading,\n  getBaseUrl: getBaseUrl,\n  getBaseImagePath: getBaseImagePath };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2luZGV4LmpzIl0sIm5hbWVzIjpbIlVSTF9CQVNFIiwiSU1BR0VfUEFUSCIsInJlcXVlc3QiLCJvcHRzIiwiZGF0YSIsIm1lc2Nyb2xsIiwibG9hZGluZ0ZsYWciLCJzaG93TG9hZGluZyIsInRva2VuIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJ3aWQiLCJodHRwRGVmYXVsdE9wdHMiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJkYXRhVHlwZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJoaWRlTG9hZGluZyIsImVycm9yIiwicmVzIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJKU09OIiwicGFyc2UiLCJjb2RlIiwibGVuZ3RoIiwiaGFzTmV4dCIsInNpemUiLCJlbmRTdWNjZXNzIiwicmVtb3ZlU3RvcmFnZSIsIm9wZW5Mb2dpblBhZ2UiLCJtZXNzYWdlIiwiZW5kRXJyIiwidG9hc3RUaXBzIiwiY2F0Y2giLCJyZXNwb25zZSIsInVwbG9hZEZpbGUiLCJhdHRhY2htZW50IiwiZnJvbURhdGEiLCJmaWxlUGF0aCIsIm5hbWUiLCJmb3JtRGF0YSIsImF0dGFjaG1lbnRzRm9sZGVyIiwicmV0dXJuY29kZSIsInNldFN0b3JhZ2UiLCJzZXRTdG9yYWdlU3luYyIsImtleSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0QmFzZVVybCIsImdldEJhc2VJbWFnZVBhdGgiLCJnZXRVc2VySW5mbyIsInRoZVByb21pc2UiLCJhY3Rpb24iLCJwb3N0Iiwibmlja25hbWUiLCJkZWNvZGVVUkkiLCJ1cGRhdGVVc2VySW5mbyIsImVuY29kZVVSSSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsInJvdXRlIiwibmF2aWdhdGVUbyIsImFuaW1hdGlvblR5cGUiLCJhbmltYXRpb25EdXJhdGlvbiIsInR4dCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInRvYXN0VGlwc1RpbWUiLCJ0aW1lIiwiZHVyYXRpb24iLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInNldFRpbWVvdXQiLCJtYXNrIiwiZ2V0Iiwib3B0aW9uIiwianNvbiIsImxvZ2luU3RhdGUiLCJhbHJlYWR5TG9naW4iXSwibWFwcGluZ3MiOiJna0RBQUE7O0FBRUMsSUFBTUEsUUFBUSxHQUFHLDJCQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRywwQkFBbkI7O0FBRUQ7Ozs7OztBQU1BLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFhQyxRQUFiLEVBQXNCQyxXQUF0QixFQUFzQztBQUNyRDtBQUNBLE1BQUdBLFdBQVcsSUFBRSxJQUFiLElBQW1CLENBQUNELFFBQXZCLEVBQWdDO0FBQy9CRSxlQUFXLENBQUMsWUFBRCxDQUFYO0FBQ0E7QUFDREgsTUFBSSxDQUFDSSxLQUFMLEdBQWFDLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQixRQUFuQixDQUFiO0FBQ0FOLE1BQUksQ0FBQ08sR0FBTCxHQUFXRixHQUFHLENBQUNDLGNBQUosQ0FBbUIsS0FBbkIsQ0FBWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUlFLGVBQWUsR0FBRztBQUNyQkMsT0FBRyxFQUFFYixRQUFRLEdBQUdHLElBQUksQ0FBQ1UsR0FEQTtBQUVyQlQsUUFBSSxFQUFFQSxJQUZlO0FBR3JCVSxVQUFNLEVBQUVYLElBQUksQ0FBQ1csTUFBTCxLQUFnQixNQUFoQixHQUF5QixNQUF6QixHQUFrQ1gsSUFBSSxDQUFDVyxNQUgxQjtBQUlyQkMsVUFBTSxFQUFHWixJQUFJLENBQUNXLE1BQUwsSUFBZSxLQUFmLElBQXdCWCxJQUFJLENBQUNXLE1BQUwsSUFBZSxNQUF4QyxHQUFrRDtBQUN6RCwwQkFBb0IsZ0JBRHFDO0FBRXpELGdCQUFVLGtCQUYrQztBQUd6RCxzQkFBZ0IsaUNBSHlDLEVBQWxEO0FBSUo7QUFDSCwwQkFBb0IsZ0JBRGpCO0FBRUgsc0JBQWdC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LGNBQVUsTUFGSSxFQUFmOztBQUlBLFNBQU9YLE9BQU8sQ0FBQ2lGLE1BQUQsRUFBUy9FLElBQVQsRUFBZUMsUUFBZixFQUF3QkMsV0FBeEIsQ0FBZDtBQUNBO0FBQ0Q7OztBQUdBLFNBQVMrRSxVQUFULEdBQXNCO0FBQ3JCLFNBQU81RSxHQUFHLENBQUNDLGNBQUosQ0FBbUIsVUFBbkIsQ0FBUDtBQUNBO0FBQ0Q7OztBQUdBLFNBQVM0RSxZQUFULEdBQXdCO0FBQ3ZCLE1BQUlELFVBQVUsR0FBRzVFLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQixVQUFuQixDQUFqQjtBQUNBLGVBQVksMEJBQVosRUFBdUMyRSxVQUF2QztBQUNBLE1BQUksQ0FBQ0EsVUFBRCxJQUFlQSxVQUFVLEtBQUssS0FBbEMsRUFBeUM7QUFDeENuRCxpQkFBYTtBQUNiQyxpQkFBYTtBQUNiO0FBQ0QsU0FBT2tELFVBQVA7QUFDQSxDOztBQUVjO0FBQ2RuRixTQUFPLEVBQVBBLE9BRGM7QUFFZGdGLEtBQUcsRUFBSEEsR0FGYztBQUdkeEIsTUFBSSxFQUFKQSxJQUhjO0FBSWQwQixNQUFJLEVBQUpBLElBSmM7QUFLZEMsWUFBVSxFQUFWQSxVQUxjO0FBTWRDLGNBQVksRUFBWkEsWUFOYztBQU9kbkQsZUFBYSxFQUFiQSxhQVBjO0FBUWRjLFlBQVUsRUFBVkEsVUFSYztBQVNkZixlQUFhLEVBQWJBLGFBVGM7QUFVZHFCLGFBQVcsRUFBWEEsV0FWYztBQVdkTSxnQkFBYyxFQUFkQSxjQVhjO0FBWWR2QixXQUFTLEVBQVRBLFNBWmM7QUFhZG9DLGVBQWEsRUFBYkEsYUFiYztBQWNkRyxXQUFTLEVBQVRBLFNBZGM7QUFlZHRFLGFBQVcsRUFBWEEsV0FmYztBQWdCZDhDLFlBQVUsRUFBVkEsVUFoQmM7QUFpQmRDLGtCQUFnQixFQUFoQkEsZ0JBakJjLEUiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnrqHnkIbotKblj7fkv6Hmga9cclxuXHJcbiBjb25zdCBVUkxfQkFTRSA9ICdodHRwczovL2FwaS4wNzkxbG9vay5jb20vJztcclxuIGNvbnN0IElNQUdFX1BBVEggPSAnaHR0cHM6Ly95ZS5uY25ld3MuY29tLmNuJztcclxuXHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IOivt+axgueahOWfuuehgOaWueazlVxyXG4gKiDmlrnms5Xms6jph4o6IHBvc3RcXGdldFxcanNvbuivt+axgumDveS8muiwg+i/meS4quaWueazlVxyXG4gKiDkvKDlhaXlj4LmlbA6IGRhdGEtPuivt+axgueahOWPguaVsCBtZXNjcm9sbC0+5Y+v5Lul5Lyg5LiK5LiL5ouJ5Yi35paw55qE5o6n5Lu2bWVzY3JvbGzkuZ/lj6/ku6XkvKDlrZfnrKbkuLJcIk5cIizkvKDlrZfnrKbkuLJcIk5cIuihqOekuuivt+axgueahOaXtuWAmeS4jeaYvuekuuWKoOi9veS4reeahOWKqOeUuyBsb2FkaW5nRmxhZy0+5piv5ZCm5pi+56S65Yqg6L295Yqo55S75LygYm9vbOWAvFxyXG4gKiDov5Tlm57mlbDlgLw6IOivt+axgueahOe7k+aenCByZXR1cm5jb2RlID09PSAwIOeahOaXtuWAmeaJjeS8mui/lOWbnnJlcy5kYXRhIFxyXG4gKi9cclxuY29uc3QgcmVxdWVzdCA9IChvcHRzLCBkYXRhLCBtZXNjcm9sbCxsb2FkaW5nRmxhZykgPT4ge1xyXG5cdC8v5aaC5p6c5piv5LiK5LiL5ouJ5Yi35paw5LiN5pi+56S677yM6Z2e5LiK5LiL5ouJ5Yi35paw6YO95pi+56S6XHJcblx0aWYobG9hZGluZ0ZsYWc9PXRydWUmJiFtZXNjcm9sbCl7XHJcblx0XHRzaG93TG9hZGluZyhcIuWKoOi9veS4rSzor7fnqI3lkI4uLi5cIik7XHJcblx0fVxyXG5cdGRhdGEudG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlbnNcIik7XHJcblx0ZGF0YS53aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ3aWRcIik7XHJcblx0XHJcblx0Ly8gY29uc29sZS5sb2coXCLor7fmsYLnmoRVc2VyQWdlbnQgPSBcIixwbHVzLm5hdmlnYXRvci5nZXRVc2VyQWdlbnQoKSk7XHJcblx0Ly8gY29uc3QgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0Ly8gICAgY29uc29sZS5sb2coXCJnZXRTeXN0ZW1JbmZvU3luYz1cIitKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHQgICBcclxuXHQvLyAgdW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdC8vICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG5cdC8vIFx0XHQgY29uc29sZS5sb2coXCJnZXRTeXN0ZW1JbmZvPVwiK0pTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdC8vICAgICAgfVxyXG5cdC8vICB9KTtcclxuXHRsZXQgaHR0cERlZmF1bHRPcHRzID0ge1xyXG5cdFx0dXJsOiBVUkxfQkFTRSArIG9wdHMudXJsLFxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDogb3B0cy5tZXRob2QgPT09ICdqc29uJyA/ICdwb3N0JyA6IG9wdHMubWV0aG9kLFxyXG5cdFx0aGVhZGVyOiAob3B0cy5tZXRob2QgPT0gJ2dldCcgfHwgb3B0cy5tZXRob2QgPT0gJ2pzb24nKSA/IHtcclxuXHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxyXG5cdFx0XHRcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcclxuXHRcdH0gOiB7XHJcblx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnXHJcblx0XHR9LFxyXG5cdFx0ZGF0YVR5cGU6ICd0ZXh0J1xyXG5cdH1cclxuXHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0dW5pLnJlcXVlc3QoaHR0cERlZmF1bHRPcHRzKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHQvL+WmguaenOaYr+S4iuS4i+aLieWIt+aWsO+8jOS4i+aLieWIt+aWsOeahOaXtuWAmeaYvuekuu+8jOS4iuaLieWKoOi9veS4jeaYvuekuu+8jOmdnuS4iuS4i+aLieWIt+aWsOmDveaYvuekuizmiJbogIXnrKzkuInkuKrlj4LkvKDlrZfnrKZO5bCx5LiN5pi+56S65Yqg6L295Yqo55S7XHJcblx0XHRcdGlmICgoIW1lc2Nyb2xsIHx8IG1lc2Nyb2xsID09PSBcIk5cIikmJmxvYWRpbmdGbGFnIT1mYWxzZSkge1xyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBbZXJyb3IsIHJlc10gPSBkYXRhO1xyXG5cdFx0XHRpZiAocmVzKSB7XHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvbnN0cnVjdG9yICE9PSBPYmplY3QpIHtcclxuXHRcdFx0XHRcdHJlcy5kYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRcdGlmIChtZXNjcm9sbCAmJiBtZXNjcm9sbCAhPSBcIk5cIikge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZGF0YS5sZW5ndGg+MCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBoYXNOZXh0ID0gcmVzLmRhdGEuZGF0YS5sZW5ndGggPT0gbWVzY3JvbGwuc2l6ZTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuWKoOi9veS4i+S4gOmhtSA9PSBcIixoYXNOZXh0KTtcclxuXHRcdFx0XHRcdFx0XHRpZihoYXNOZXh0KXtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc2Nyb2xsLmVuZFN1Y2Nlc3MocmVzLmRhdGEuZGF0YS5sZW5ndGgsdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNjcm9sbC5lbmRTdWNjZXNzKDEsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuW3sue7j+WKoOi9veWujFwiKTtcclxuXHRcdFx0XHRcdFx0XHRtZXNjcm9sbC5lbmRTdWNjZXNzKDAsIGZhbHNlKTsgLy8x5Li65b2T5YmN6aG16I635Y+W55qE5pWw5o2u6YeP77yMZmFsc2XkuLrmsqHmnInkuIvkuIDpobXnmoTmlbDmja5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChyZXMuZGF0YS5jb2RlID09PSA0MDMpIHtcclxuXHRcdFx0XHRcdHJlbW92ZVN0b3JhZ2UoKTtcclxuXHRcdFx0XHRcdG9wZW5Mb2dpblBhZ2UoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09IFwidG9rZW7kuI3lrZjlnKgs6K+36YeN5paw55m75b2VXCIpIHtcclxuXHRcdFx0XHRcdFx0cmVtb3ZlU3RvcmFnZSgpO1xyXG5cdFx0XHRcdFx0XHRvcGVuTG9naW5QYWdlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAobWVzY3JvbGwgJiYgbWVzY3JvbGwgIT0gXCJOXCIpIHtcclxuXHRcdFx0XHRcdFx0bWVzY3JvbGwuZW5kRXJyKFwi5Ye66ZSZ5LqG77yM6K+356iN5ZCO6YeN6K+VXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLm1lc3NhZ2UgJiYgcmVzLmRhdGEubWVzc2FnZS5sZW5ndGggJiYgIShyZXMuZGF0YS5tZXNzYWdlID09PSBcInRva2Vu5LiN5a2Y5ZyoLOivt+mHjeaWsOeZu+W9lVwiKSkge1xyXG5cdFx0XHRcdFx0XHR0b2FzdFRpcHMocmVzLmRhdGEubWVzc2FnZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0b2FzdFRpcHMoXCLlh7rplJnkuobvvIzor7fnqI3lkI7ph43or5VcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZWplY3QocmVzLmRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyB0b2FzdFRpcHMoXCLmmoLml7bml6Dms5Xorr/pl67nvZHnu5xcIik7XHJcblx0XHRcdFx0aWYgKG1lc2Nyb2xsICYmIG1lc2Nyb2xsICE9IFwiTlwiKSB7XHJcblx0XHRcdFx0XHRtZXNjcm9sbC5lbmRFcnIoXCLmmoLml7bml6Dms5Xorr/pl67nvZHnu5xcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdH0pLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0aWYgKCghbWVzY3JvbGwgfHwgbWVzY3JvbGwgIT0gXCJOXCIpJiZsb2FkaW5nRmxhZyE9ZmFsc2UpIHsgLy/lpoLmnpzmmK/kuIrkuIvmi4nliLfmlrDvvIzkuIvmi4nliLfmlrDnmoTml7blgJnmmL7npLrvvIzkuIrmi4nliqDovb3kuI3mmL7npLrvvIzpnZ7kuIrkuIvmi4nliLfmlrDpg73mmL7npLpcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2FzdFRpcHMoXCLlh7rplJnkuobvvIzor7fnqI3lkI7ph43or5VcIik7XHJcblx0XHRcdGlmIChtZXNjcm9sbCAmJiBtZXNjcm9sbCAhPSBcIk5cIikge1xyXG5cdFx0XHRcdG1lc2Nyb2xsLmVuZEVycihcIuWHuumUmeS6hu+8jOivt+eojeWQjumHjeivlVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwi6K+35rGC5Ye66ZSZ5LqGXCIsIHJlc3BvbnNlKTtcclxuXHRcdFx0cmVqZWN0KHJlc3BvbnNlKTtcclxuXHRcdH0pXHJcblx0fSlcclxuXHRyZXR1cm4gcHJvbWlzZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5LiK5Lyg5Y2V5paH5Lu2XHJcbiAqIOaWueazleazqOmHijog5paH5Lu25LiK5Lyg5oiQ5Yqf5LmL5ZCO6ZyA6KaB5oqK6L+U5Zue55qEanNvbui9rOaIkOWtl+espuS4suS9nOS4uuWPguaVsOaPkOS6pOabtOaWsCzmr5TlpoJsb2dvOlwie1wiZmlsZU5hbWVcIjpcIjExMTExLnBuZ1wiLFwiZmlsZVBhdGhcIjpcIlx0XHRcdCAgL3N0b3JhZ2Uvc2hvcC83Ny9pbmZvL2xvZ28ucG5nXCIsXCJmaWxlU2l6ZVwiOjI1NX1cIlxyXG4gKiDkvKDlhaXlj4LmlbA6IGF0dGFjaG1lbnQtPuaJi+acuuiOt+WPlueahOeFp+eJh+S6jOi/m+WItuaWh+S7tiwgYXR0YWNobWVudHNGb2xkZXItPuS/neWtmOWcqOacjeWKoeWZqOWbvueJh+eahOi3r+W+hO+8jOavlOWmgnNob3BMb2dv5a2Y5pS+55qE5bqX6ZO6bG9nb1xyXG4gKiDov5Tlm57mlbDlgLw6IOacjeWKoeWZqOaWh+S7tui3r+W+hOeahGpzb27mlbDmja4sanNvbuagvOW8j+S4umRhdGEubGlzdCzlhbbkuK3ljZXmlofku7bkuIrkvKDlj5bnrKzkuIDkuKrlhYPntKDljbM6ZGF0YS5saXN0WzBdPXtcImZpbGVOYW1lXCI6XCIxMTExMS5wbmdcIixcImZpbGVQYXRoXCI6XCIvc3RvcmFnZS9zaG9wLzc3L2luZm8vbG9nby5wbmdcIixcImZpbGVTaXplXCI6MjU1fVxyXG4gKi9cclxuZnVuY3Rpb24gdXBsb2FkRmlsZShhdHRhY2htZW50LGZyb21EYXRhKSB7XHJcblx0bGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdHNob3dMb2FkaW5nKFwi5Yqg6L295LitLOivt+eojeWQji4uLlwiKTtcclxuXHRcdGxldCBodHRwRGVmYXVsdE9wdHMgPSB7XHJcblx0XHRcdHVybDogVVJMX0JBU0UgKyAnL3VwbG9hZC91cGxvYWQvZmlsZS5kbycsXHJcblx0XHRcdGZpbGVQYXRoOiBhdHRhY2htZW50LFxyXG5cdFx0XHRuYW1lOiAnZmlsZScsXHJcblx0XHRcdGZvcm1EYXRhOiB7XHJcblx0XHRcdFx0XCJmaWxlVHlwZVwiOiBhdHRhY2htZW50c0ZvbGRlclxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHQnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcblx0XHRcdFx0XCJ0b2tlblwiOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlbnNcIikgfHwgJyAnLFxyXG5cdFx0XHRcdFwid2lkXCI6IHVuaS5nZXRTdG9yYWdlU3luYyhcIndpZFwiKSB8fCAnICdcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIuWNleaWh+S7tuS4iuS8oOeahOWPguaVsCA9IFwiLCBodHRwRGVmYXVsdE9wdHMpO1xyXG5cdFx0dW5pLnVwbG9hZEZpbGUoaHR0cERlZmF1bHRPcHRzKS50aGVuKFxyXG5cdFx0XHQoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdGxldCBbZXJyb3IsIHJlc10gPSBkYXRhO1xyXG5cdFx0XHRcdGlmIChyZXMpIHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0KSB7XHJcblx0XHRcdFx0XHRcdHJlcy5kYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwi5Y2V5paH5Lu25LiK5Lyg55qE57uT5p6cID0gXCIsIHJlcyk7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEucmV0dXJuY29kZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhKVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuZGF0YS5yZXR1cm5jb2RlID09PSAxMDA5KSB7XHJcblx0XHRcdFx0XHRcdHJlbW92ZVN0b3JhZ2UoKTtcclxuXHRcdFx0XHRcdFx0b3BlbkxvZ2luUGFnZSgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdHRvYXN0VGlwcyhyZXMuZGF0YS5tZXNzYWdlKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZWplY3QocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dG9hc3RUaXBzKFwi5pqC5pe25peg5rOV6K6/6Zeu572R57ucXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KS5jYXRjaChcclxuXHRcdFx0KHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlKVxyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fSlcclxuXHRyZXR1cm4gcHJvbWlzZTtcclxufVxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDnvJPlrZjmlbDmja7liLDmnKzlnLBcclxuICog5pa55rOV5rOo6YeKOiDlj6/lt7LpgJrov4dzZXRTdG9yYWdlU3luY+ebuOWvueW6lOeahGdldFN0b3JhZ2VTeW5j5Lyg5YWl55u45bqU55qEa2V55YC86I635Y+W57yT5a2Y5pWw5o2uXHJcbiAqIOS8oOWFpeWPguaVsDogcmVzIOimgee8k+WtmOeahOaVsOaNrlxyXG4gKiDov5Tlm57mlbDlgLw6IOaXoFxyXG4gKi9cclxuY29uc3Qgc2V0U3RvcmFnZSA9IGZ1bmN0aW9uKHJlcykge1xyXG5cdHVuaS5zZXRTdG9yYWdlU3luYyhcImhhc0xvZ2luXCIsIHRydWUpO1xyXG5cdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJcIiwgcmVzLmRhdGEpO1xyXG59O1xyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDmuIXpmaTmnKzlnLDnvJPlrZjnmoTmlbDmja5cclxuICog5pa55rOV5rOo6YeKOiDmuIXpmaTnibnlrprnmoR1c2VyTmFtZS9oYXNMb2dpbi90b2tlbuaVsOaNrlxyXG4gKiDkvKDlhaXlj4LmlbA6IOaXoFxyXG4gKiDov5Tlm57mlbDlgLw6IOaXoFxyXG4gKi9cclxuY29uc3QgcmVtb3ZlU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHVuaS5zZXRTdG9yYWdlU3luYyhcImhhc0xvZ2luXCIsIGZhbHNlKTtcclxuXHR1bmkucmVtb3ZlU3RvcmFnZSh7XHJcblx0XHRrZXk6ICd1c2VyJyxcclxuXHR9KS50aGVuKCgpID0+IHtcclxuXHRcdHVuaS5yZW1vdmVTdG9yYWdlKHtcclxuXHRcdFx0a2V5OiAndG9rZW5zJ1xyXG5cdFx0fSk7XHJcblx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoXCJ3aWRcIik7XHJcblx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoXCJ1bmlvbmlkXCIpO1xyXG5cdH0pO1xyXG5cdHVuaS5yZW1vdmVTdG9yYWdlU3luYyhcInRva2Vuc1wiKTtcclxuXHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoXCJ3aWRcIik7XHJcblx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKFwidW5pb25pZFwiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IOiOt+WPluacjeWKoeWZqOi3r+W+hOWJjee8gFxyXG4gKiDmlrnms5Xms6jph4o6IFxyXG4gKiDkvKDlhaXlj4LmlbA6IOaXoFxyXG4gKiDov5Tlm57mlbDlgLw6IOacjeWKoeWZqOi3r+W+hOWJjee8gFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QmFzZVVybCgpIHtcclxuXHRyZXR1cm4gVVJMX0JBU0U7XHJcbn1cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog6I635Y+W5Zu+54mH6Lev5b6E5YmN57yAXHJcbiAqIOaWueazleazqOmHijogXHJcbiAqIOS8oOWFpeWPguaVsDog5pegXHJcbiAqIOi/lOWbnuaVsOWAvDog5Zu+54mH6Lev5b6E5YmN57yAXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCYXNlSW1hZ2VQYXRoKCkge1xyXG5cdHJldHVybiBJTUFHRV9QQVRIO1xyXG59XHJcblxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDojrflj5blvZPliY3nlKjmiLfnmoTkv6Hmga9cclxuICog5pa55rOV5rOo6YeKOiBcclxuICog5Lyg5YWl5Y+C5pWwOiBtZXNjcm9sbCjkuIrkuIvmi4nliLfmlrDvvIzpnZ7lv4XkvKApXHJcbiAqIOi/lOWbnuaVsOWAvDog55So5oi35L+h5oGv5pWw5o2uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRVc2VySW5mbyhtZXNjcm9sbCkge1xyXG5cclxuXHRsZXQgdGhlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0bGV0IHVybCA9IFwiYXBpL25jcmIvXCI7XHJcblx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0YWN0aW9uIDogJ3VzZXJpbmZvJ1xyXG5cdFx0fTtcclxuXHRcdHBvc3QodXJsLCBkYXRhLCBtZXNjcm9sbCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZihyZXMuZGF0YS5uaWNrbmFtZSl7XHJcblx0XHRcdFx0cmVzLmRhdGEubmlja25hbWUgPSBkZWNvZGVVUkkocmVzLmRhdGEubmlja25hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJcIixyZXMuZGF0YSk7XHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImhhc2xvZ2luXCIsdHJ1ZSk7XHJcblx0XHRcdHJlc29sdmUocmVzLmRhdGEpO1xyXG5cdFx0fSkuY2F0Y2gocmVzID0+IHtcclxuXHRcdFx0cmVqZWN0KHJlcyk7XHJcblx0XHR9KVxyXG5cdH0pXHJcblx0cmV0dXJuIHRoZVByb21pc2U7XHJcbn1cclxuLyoqXHJcbiAgKiDmlrnms5XlkI3np7A6IOS/ruaUueeUqOaIt+S/oeaBr1xyXG4gICog5pa55rOV5rOo6YeKOiDkv67mlLnnlKjmiLfkv6Hmga/miJDlip/lkI7kvJrnm7TmjqXlho3or7vlj5bnlKjmiLfkv6Hmga8s5L+d6K+B6I635Y+W55So5oi355qE5L+h5oGv5pyA5pawXHJcbiAgKiDkvKDlhaXlj4LmlbA6IGRhdGEg6KaB5L+u5pS555qE55So5oi35L+h5oGv5Y+C5pWwLOavlOWmguS/ruaUueaYteensOeahOivneS8oHtuaWNrOlwi5pu+5YWI5qOuXCJ9XHJcbiAgKiDov5Tlm57mlbDlgLw6IOS/ruaUueaYr+WQpuaIkOWKn+eahOi/lOWbnuWAvFxyXG4qL1xyXG5mdW5jdGlvbiB1cGRhdGVVc2VySW5mbyhkYXRhKSB7XHJcblxyXG5cdGxldCB0aGVQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRsZXQgdXJsID0gJ2FwaS9uY3JiLyc7XHJcblx0XHRkYXRhLmFjdGlvbiA9IFwidXB1c2VyaW5mb1wiO1xyXG5cdFx0ZGF0YS5uaWNrbmFtZSA9IGVuY29kZVVSSShkYXRhLm5pY2tuYW1lKTtcclxuXHRcdHBvc3QodXJsLGRhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0Z2V0VXNlckluZm8oKTtcclxuXHRcdFx0cmVzb2x2ZShyZXMuZGF0YSk7XHJcblx0XHR9KS5jYXRjaChyZXMgPT4ge1xyXG5cdFx0XHRyZWplY3QocmVzKTtcclxuXHRcdH0pXHJcblx0fSlcclxuXHRyZXR1cm4gdGhlUHJvbWlzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog6YeN5paw6Lez5Yiw55m75b2V6aG1XHJcbiAqIOaWueazleazqOmHijog6ZyA6KaB55So5oi355m75b2V5oiW55m76ZmG5aSx5pWI5pe25omN5L2/55So5q2k5pa55rOVXHJcbiAqIOS8oOWFpeWPguaVsDog5pegXHJcbiAqIOi/lOWbnuaVsOWAvDog5pegXHJcbiAqL1xyXG5jb25zdCBvcGVuTG9naW5QYWdlID0gZnVuY3Rpb24oKSB7XHJcblx0Ly8gdW5pLnJlTGF1bmNoKHtcclxuXHQvLyBcdHVybDogXCIvcGFnZXMvdXNlci9sb2dpbi9sb2dpblwiXHJcblx0Ly8gfSk7XHJcblx0Ly8gbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0Ly9jb25zb2xlLmxvZyhcInBhZ2VzcGFnZXNwYWdlcyA9IFwiLHBhZ2VzKTtcclxuXHR2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuXHR2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG5cdHZhciByb3V0ZSA9IHBhZ2Uucm91dGU7XHJcblx0aWYocm91dGUgJiYgcm91dGUgPT0gXCJwYWdlcy91c2VyL2xvZ2luL2xvZ2luXCIpe1xyXG5cdH1lbHNle1xyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6XCIvcGFnZXMvdXNlci9sb2dpbi9sb2dpblwiLFxyXG5cdFx0XHRhbmltYXRpb25UeXBlOlwic2xpZGUtaW4tYm90dG9tXCIsXHJcblx0XHRcdGFuaW1hdGlvbkR1cmF0aW9uOiAyMDBcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbi8vdG9hc3Tmj5DnpLpcclxuY29uc3QgdG9hc3RUaXBzID0gZnVuY3Rpb24odHh0KSB7XHJcblx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0dGl0bGU6IHR4dCxcclxuXHRcdGljb246IFwibm9uZVwiXHJcblx0fSlcclxufTtcclxuLy90b2FzdOaPkOekuu+8jOWPr+S7peiuvue9ruetieW+heaXtumVv1xyXG5jb25zdCB0b2FzdFRpcHNUaW1lID0gZnVuY3Rpb24odHh0LCB0aW1lKSB7XHJcblx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0dGl0bGU6IHR4dCxcclxuXHRcdGR1cmF0aW9uOiB0aW1lLFxyXG5cdFx0aWNvbjogXCJub25lXCJcclxuXHJcblx0fSlcclxufTtcclxuLy/lvLnnqpfmj5DnpLpcclxuY29uc3Qgc2hvd01vZGFsID0gZnVuY3Rpb24odHh0KSB7XHJcblx0cmV0dXJuIHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0Y29udGVudDogdHh0LFxyXG5cdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0fSlcclxufTtcclxuLy9sb2FkaW5nXHJcbmNvbnN0IHNob3dMb2FkaW5nID0gZnVuY3Rpb24odHh0KSB7XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdH0sIDE1MDAwKTtcclxuXHRyZXR1cm4gdW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdHRpdGxlOiB0eHQsXHJcblx0XHRtYXNrOiBmYWxzZSAvL+aVsOaNruivt+axguaXtkFwcOeVjOmdouaXoOazleaTjeS9nFxyXG5cdH0pO1xyXG59O1xyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiBnZXTor7fmsYJcclxuICog5pa55rOV5rOo6YeKOiB1cmzkuLrlv4XloavvvIxkYXRh5ZKMbWVzY3JvbGzkuLrpnZ7lv4XloatcclxuICog5Lyg5YWl5Y+C5pWwOiB1cmwtPuivt+axgueahOaOpeWPo+i3r+W+hO+8jGRhdGEtPuivt+axgueahOWPguaVsCBtZXNjcm9sbC0+5LiK5LiL5ouJ57uE5Lu2IGxhb2RpbmdGbGFnLT7mmK/lkKbmmL7npLrliqDovb3liqjnlLvkvKBib29s5YC8XHJcbiAqIOi/lOWbnuaVsOWAvDog6K+35rGC5LmL5ZCO55qEanNvbuaVsOaNrlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0KHVybCwgZGF0YSwgbWVzY3JvbGwsbG9hZGluZ0ZsYWcpIHtcclxuXHRjb25zdCBvcHRpb24gPSB7XHJcblx0XHRcInVybFwiOiB1cmwsXHJcblx0XHRcIm1ldGhvZFwiOiBcImdldFwiXHJcblx0fVxyXG5cdHJldHVybiByZXF1ZXN0KG9wdGlvbiwgZGF0YSwgbWVzY3JvbGwsbG9hZGluZ0ZsYWcpO1xyXG59XHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IHBvc3Tor7fmsYJcclxuICog5pa55rOV5rOo6YeKOiB1cmzkuLrlv4XloavvvIxkYXRhL21lc2Nyb2xsL2xvYWRpbmdGbGFn5Li66Z2e5b+F5aGrXHJcbiAqIOS8oOWFpeWPguaVsDogdXJsLT7or7fmsYLnmoTmjqXlj6Pot6/lvoTvvIxkYXRhLT7or7fmsYLnmoTlj4LmlbAgbWVzY3JvbGwtPuS4iuS4i+aLiee7hOS7tiBsYW9kaW5nRmxhZy0+5piv5ZCm5pi+56S65Yqg6L295Yqo55S75LygYm9vbOWAvFxyXG4gKiDov5Tlm57mlbDlgLw6IOivt+axguS5i+WQjueahGpzb27mlbDmja5cclxuICovXHJcbmZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhLCBtZXNjcm9sbCxsb2FkaW5nRmxhZykge1xyXG5cdGNvbnN0IG9wdGlvbiA9IHtcclxuXHRcdFwidXJsXCI6IHVybCxcclxuXHRcdFwibWV0aG9kXCI6IFwicG9zdFwiXHJcblx0fVxyXG5cdGlmICghZGF0YSkge1xyXG5cdFx0ZGF0YSA9IHt9XHJcblx0fVxyXG5cdHJldHVybiByZXF1ZXN0KG9wdGlvbiwgZGF0YSwgbWVzY3JvbGwsbG9hZGluZ0ZsYWcpO1xyXG59XHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IHBvc3Tor7fmsYJcclxuICog5pa55rOV5rOo6YeKOiB1cmzkuLrlv4XloavvvIxkYXRh5ZKMbWVzY3JvbGzkuLrpnZ7lv4XloatcclxuICog5Lyg5YWl5Y+C5pWwOiB1cmwtPuivt+axgueahOaOpeWPo+i3r+W+hO+8jGRhdGEtPuivt+axgueahOWPguaVsCBtZXNjcm9sbC0+5LiK5LiL5ouJ57uE5Lu2IGxvYWRpbmdGbGFnLT7mmK/lkKbmmL7npLrliqDovb3liqjnlLvkvKBib29s5YC8XHJcbiAqIOi/lOWbnuaVsOWAvDog6K+35rGC5LmL5ZCO55qEanNvbuaVsOaNrlxyXG4gKi9cclxuZnVuY3Rpb24ganNvbih1cmwsIGRhdGEsIG1lc2Nyb2xsLGxvYWRpbmdGbGFnKSB7XHJcblx0Y29uc3Qgb3B0aW9uID0ge1xyXG5cdFx0XCJ1cmxcIjogdXJsLFxyXG5cdFx0XCJtZXRob2RcIjogXCJqc29uXCJcclxuXHR9XHJcblx0cmV0dXJuIHJlcXVlc3Qob3B0aW9uLCBkYXRhLCBtZXNjcm9sbCxsb2FkaW5nRmxhZyk7XHJcbn1cclxuLyogXHJcblx05Y+q5piv6L+U5Zue55So5oi355m75b2V54q25oCB55qEYm9vbOWAvO+8jOS4jeS8mui3s+i9rOWIsOeZu+W9leeVjOmdolxyXG4qL1xyXG5mdW5jdGlvbiBsb2dpblN0YXRlKCkge1xyXG5cdHJldHVybiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJoYXNMb2dpblwiKTtcclxufVxyXG4vKiBcclxuXHTnlKjmiLfnmbvlvZXkuYvlkI7miY3og73ov5vooYzkuIvkuIDmraXnmoTmk43kvZzvvIzlkKbliJnot7PnmbvlvZXpobUs6L+U5Zue55So5oi35piv5ZCm55m75b2V55qEYm9vbOWAvCBcclxuKi9cclxuZnVuY3Rpb24gYWxyZWFkeUxvZ2luKCkge1xyXG5cdGxldCBsb2dpblN0YXRlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiaGFzTG9naW5cIik7XHJcblx0Y29uc29sZS5sb2coXCJsb2dpblN0YXRlbG9naW5TdGF0ZSA9PSBcIixsb2dpblN0YXRlKTtcclxuXHRpZiAoIWxvZ2luU3RhdGUgfHwgbG9naW5TdGF0ZSA9PT0gZmFsc2UpIHtcclxuXHRcdHJlbW92ZVN0b3JhZ2UoKTtcclxuXHRcdG9wZW5Mb2dpblBhZ2UoKTtcclxuXHR9XHJcblx0cmV0dXJuIGxvZ2luU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRyZXF1ZXN0LFxyXG5cdGdldCxcclxuXHRwb3N0LFxyXG5cdGpzb24sXHJcblx0bG9naW5TdGF0ZSxcclxuXHRhbHJlYWR5TG9naW4sXHJcblx0b3BlbkxvZ2luUGFnZSxcclxuXHRzZXRTdG9yYWdlLFxyXG5cdHJlbW92ZVN0b3JhZ2UsXHJcblx0Z2V0VXNlckluZm8sXHJcblx0dXBkYXRlVXNlckluZm8sXHJcblx0dG9hc3RUaXBzLFxyXG5cdHRvYXN0VGlwc1RpbWUsXHJcblx0c2hvd01vZGFsLFxyXG5cdHNob3dMb2FkaW5nLFxyXG5cdGdldEJhc2VVcmwsXHJcblx0Z2V0QmFzZUltYWdlUGF0aFxyXG5cdFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 19 */
/*!****************************************************************************!*\
  !*** E:/headlines/headlines/main.js?{"page":"pages%2Fnanchang%2Fdetails"} ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_nanchang_details_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/nanchang/details.nvue?mpType=page */ 20);\n\n        \n        \n        \n        _pages_nanchang_details_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_nanchang_details_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/nanchang/details'\n        _pages_nanchang_details_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_nanchang_details_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxRQUFvQztBQUNwQyxRQUE4QjtBQUM5QixRQUFtRTtBQUNuRSxRQUFRLGdGQUFHO0FBQ1gsUUFBUSxnRkFBRztBQUNYLFFBQVEsZ0ZBQUc7QUFDWCxnQkFBZ0IsZ0ZBQUciLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9uYW5jaGFuZy9kZXRhaWxzLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL25hbmNoYW5nL2RldGFpbHMnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!**********************************************************************!*\
  !*** E:/headlines/headlines/pages/nanchang/details.nvue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _details_nvue_vue_type_template_id_c4ad268c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.nvue?vue&type=template&id=c4ad268c&mpType=page */ 21);\n/* harmony import */ var _details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.nvue?vue&type=script&lang=js&mpType=page */ 23);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./details.nvue?vue&type=style&index=0&lang=css&mpType=page */ 79).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./details.nvue?vue&type=style&index=0&lang=css&mpType=page */ 79).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _details_nvue_vue_type_template_id_c4ad268c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _details_nvue_vue_type_template_id_c4ad268c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"476d8db4\",\n  false,\n  _details_nvue_vue_type_template_id_c4ad268c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/pages/nanchang/details.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9FQUE0RDtBQUNoSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0VBQTREO0FBQ3JIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZGV0YWlscy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM0YWQyNjhjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhaWxzLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGV0YWlscy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9kZXRhaWxzLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9kZXRhaWxzLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjQ3NmQ4ZGI0XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L2hlYWRsaW5lcy9oZWFkbGluZXMvcGFnZXMvbmFuY2hhbmcvZGV0YWlscy5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!****************************************************************************************************!*\
  !*** E:/headlines/headlines/pages/nanchang/details.nvue?vue&type=template&id=c4ad268c&mpType=page ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_template_id_c4ad268c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./details.nvue?vue&type=template&id=c4ad268c&mpType=page */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_template_id_c4ad268c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_template_id_c4ad268c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_template_id_c4ad268c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_template_id_c4ad268c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/pages/nanchang/details.nvue?vue&type=template&id=c4ad268c&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", { staticClass: ["blogger", "page-news"] }, [
        _c(
          "view",
          { staticClass: ["bgbox"] },
          [
            _c("u-image", {
              staticClass: ["bg"],
              attrs: {
                src:
                  _vm.nchData.type == 6
                    ? "/static/img/home/qyj_d_bg.png"
                    : "/static/img/home/fyr_d_bg.png",
                mode: "widthFix"
              }
            })
          ],
          1
        ),
        _c(
          "view",
          {
            staticClass: ["main", "line-bottom"],
            style: "margin-top:" + _vm.headerHight + "rpx"
          },
          [
            _c(
              "view",
              { staticClass: ["header"] },
              [
                _c("u-image", {
                  staticClass: ["header-icon"],
                  attrs: { src: "../../static/img/common/w_back@3x.png" },
                  on: {
                    click: function($event) {
                      _vm.goback()
                    }
                  }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["user"] },
              [
                _c("u-image", {
                  staticClass: ["logo"],
                  attrs: {
                    src: _vm.nchData.logo
                      ? _vm.nchData.logo
                      : "/static/img/user/user_logo@3x.png"
                  }
                }),
                _c("u-text", { staticClass: ["user-name"] }, [
                  _vm._v(_vm._s(_vm.nchData.name))
                ]),
                _vm.nchData.desc
                  ? _c("u-text", { staticClass: ["desc"] }, [
                      _vm._v(_vm._s(_vm.nchData.desc))
                    ])
                  : _vm._e()
              ],
              1
            ),
            _c("view", { staticClass: ["tab"] }, [
              _c("view", { staticClass: ["item"] }, [
                _c(
                  "u-text",
                  {
                    staticClass: ["item-txt"],
                    class: this.style == "all" ? "active" : "",
                    on: {
                      click: function($event) {
                        _vm.search("all")
                      }
                    }
                  },
                  [_vm._v("全部")]
                ),
                this.style == "all"
                  ? _c("view", { staticClass: ["line"] })
                  : _vm._e()
              ]),
              _c("view", { staticClass: ["item"] }, [
                _c(
                  "u-text",
                  {
                    staticClass: ["item-txt"],
                    class: this.style == "default" ? "active" : "",
                    on: {
                      click: function($event) {
                        _vm.search("default")
                      }
                    }
                  },
                  [_vm._v("文章")]
                ),
                this.style == "default"
                  ? _c("view", { staticClass: ["line"] })
                  : _vm._e()
              ]),
              _c("view", { staticClass: ["item"] }, [
                _c(
                  "u-text",
                  {
                    staticClass: ["item-txt"],
                    class: this.style == "video" ? "active" : "",
                    on: {
                      click: function($event) {
                        _vm.search("video")
                      }
                    }
                  },
                  [_vm._v("视频")]
                ),
                this.style == "video"
                  ? _c("view", { staticClass: ["line"] })
                  : _vm._e()
              ])
            ])
          ]
        ),
        _c(
          "view",
          { staticClass: ["tab-con"] },
          [
            _c(
              "uni-list",
              {
                staticClass: ["listview"],
                style: "top:" + _vm.topHight + "rpx",
                attrs: { enableBackToTop: true, scrollY: true },
                on: {
                  scrolltolower: function($event) {
                    _vm.loadMore()
                  }
                }
              },
              [
                _c(
                  "uni-refresh",
                  {
                    staticClass: ["refresh"],
                    attrs: { display: _vm.refreshing ? "show" : "hide" },
                    on: {
                      refresh: _vm.onrefresh,
                      pullingdown: _vm.onpullingdown
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: ["refresh-view"] },
                      [
                        _c("u-image", {
                          staticClass: ["refresh-icon"],
                          class: { "refresh-icon-active": _vm.refreshFlag },
                          style: {
                            width: _vm.refreshing || _vm.pulling ? 0 : "32px"
                          },
                          attrs: { src: _vm.refreshIcon }
                        }),
                        _vm.refreshing
                          ? _c("uni-load-more", {
                              staticClass: ["loading-icon"],
                              attrs: {
                                status: "loading",
                                contentText: _vm.loadingMoreText
                              }
                            })
                          : _vm._e(),
                        _c("u-text", { staticClass: ["loading-text"] }, [
                          _vm._v(_vm._s(_vm.refreshText))
                        ])
                      ],
                      1
                    )
                  ]
                ),
                _vm._l(_vm.dataList, function(item, index) {
                  return _c(
                    "uni-cell",
                    { key: item.id },
                    [
                      item.style == "pics"
                        ? _c("news-pics-item", {
                            attrs: { newsItem: item },
                            on: {
                              click: function($event) {
                                _vm.goDetail(item)
                              }
                            }
                          })
                        : item.style == "video"
                        ? _c("news-video-item", {
                            attrs: { newsItem: item },
                            on: {
                              click: function($event) {
                                _vm.goDetail(item)
                              },
                              videoPlay: _vm.videoPlay
                            }
                          })
                        : item.style == "activity" ||
                          item.style == "bigpic" ||
                          item.style == "h5_bigpic"
                        ? _c("news-bigpic-item", {
                            attrs: { newsItem: item },
                            on: {
                              click: function($event) {
                                _vm.goDetail(item)
                              }
                            }
                          })
                        : _c("left-news-item", {
                            attrs: { newsItem: item },
                            on: {
                              click: function($event) {
                                _vm.goDetail(item)
                              }
                            }
                          })
                    ],
                    1
                  )
                }),
                _vm.dataList.length == 0
                  ? _c("uni-cell", [
                      _c(
                        "view",
                        {
                          staticClass: ["loading-more"],
                          staticStyle: { marginTop: "60rpx" }
                        },
                        [
                          _c("u-image", {
                            staticStyle: { width: "405rpx", height: "279rpx" },
                            attrs: { src: "/static/img/common/nodata.png" }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                (_vm.isLoading || _vm.dataList.length > 4) && !_vm.isNoData
                  ? _c("uni-cell", [
                      _c("view", { staticClass: ["loading-more"] }, [
                        _c("u-text", { staticClass: ["loading-more-text"] }, [
                          _vm._v(_vm._s(_vm.loadingText))
                        ])
                      ])
                    ])
                  : _vm._e()
              ],
              2
            )
          ],
          1
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!**********************************************************************************************!*\
  !*** E:/headlines/headlines/pages/nanchang/details.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./details.nvue?vue&type=script&lang=js&mpType=page */ 24);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWliLENBQWdCLDZkQUFHLEVBQUMiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGV0YWlscy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhaWxzLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/pages/nanchang/details.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _util = _interopRequireDefault(__webpack_require__(/*! @/common/js/util.js */ 14));\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 15));\nvar _uniList = _interopRequireDefault(__webpack_require__(/*! @/components/uni-list.vue */ 25));\nvar _uniCell = _interopRequireDefault(__webpack_require__(/*! @/components/uni-cell.vue */ 32));\nvar _uniRefresh = _interopRequireDefault(__webpack_require__(/*! @/components/uni-refresh.vue */ 37));\nvar _uniLoadMore = _interopRequireDefault(__webpack_require__(/*! @/components/uni-load-more.vue */ 44));\nvar _leftNewsItem = _interopRequireDefault(__webpack_require__(/*! @/components/item-list/left-news-item.nvue */ 51));\nvar _newsPicsItem = _interopRequireDefault(__webpack_require__(/*! @/components/item-list/news-pics-item.nvue */ 58));\nvar _newsBigpicItem = _interopRequireDefault(__webpack_require__(/*! @/components/item-list/news-bigpic-item.nvue */ 65));\nvar _newsVideoItem = _interopRequireDefault(__webpack_require__(/*! @/components/item-list/news-video-item.nvue */ 72));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { uniList: _uniList.default, uniCell: _uniCell.default, uniRefresh: _uniRefresh.default, uniLoadMore: _uniLoadMore.default, leftNewsItem: _leftNewsItem.default, newsPicsItem: _newsPicsItem.default, newsBigpicItem: _newsBigpicItem.default, newsVideoItem: _newsVideoItem.default }, data: function data() {return { headerHight: -440, topHight: 440, nchData: { subscribe: 0 }, subscribe: 0, dataList: [], style: 'all', navigateFlag: false, pulling: false, refreshing: false, refreshFlag: false, refreshText: \"\", isLoading: false, loadingText: '加载中...', isNoData: false, pageNo: 0, loadnum: 0, tpp: 30, angle: 0, currDate: '', weekday: '', requestParams: { action: 'nch', mod: 'home', token: uni.getStorageSync(\"tokens\"), wid: uni.getStorageSync(\"wid\") }, loadingMoreText: { contentdown: '', contentrefresh: '', contentnomore: '' }, hasNotchInScreen: false, //是否是刘海屏\n      refreshIcon: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==\", videoContextList: {}, videoContext: '' };}, created: function created() {this.pullTimer = null;var _this = this;this.headerHight = plus.navigator.hasNotchInScreen() ? -440 : -460;this.topHight = plus.navigator.hasNotchInScreen() ? 540 : 520; // this.statusBarHeight = plus.navigator.hasNotchInScreen() ? '66rpx':'40rpx';\n    __f__(\"log\", \"this.headerHight: \" + this.headerHight, \" at pages/nanchang/details.nvue:133\");}, onLoad: function onLoad(e) {if (e.id) {\n      this.id = e.id;\n      this.loadData(true);\n    }\n  },\n  onHide: function onHide() {\n    if (this.videoContext) {\n      this.videoContext.pause();\n    }\n  },\n  methods: {\n    loadData: function loadData(refresh) {\n      var _this = this;\n      if (this.isLoading) {\n        return;\n      }\n      if (refresh) {\n        _this.dataList = [];\n        _this.pageNo = 0;\n        _this.loadnum = 0;\n        _this.requestParams.loadnum = 0;\n        this.isNoData = false;\n      }\n      this.isLoading = true;\n      this.requestParams.style = this.style;\n      this.requestParams.id = this.id;\n\n      var url = 'api/ncrb/';\n      _index.default.get(url, _this.requestParams).then(function (result) {\n        if (result.code === 200) {\n          _this.nchData = result.data;\n          _this.subscribe = _this.nchData.subscribe;\n          var data = _this.nchData.list;\n          _this.isNoData = data.length <= 0;\n          var data_list = [];\n          if (!_this.isNoData) {\n            data_list = data.map(function (news) {\n              if (news.style == 'video') {\n                var video = uni.createVideoContext(news.id);\n                _this.videoContextList[news.id] = video;\n              }\n              news.id = news.id;\n              news.datetime = _util.default.friendlyDate(news.dateline + \"000\");\n              news.time = _util.default.formatMinutesTime(news.dateline + \"000\");\n              return news;\n            });\n\n\n            if (refresh) {\n              _this.dataList = data_list;\n            } else {\n              _this.dataList = _this.dataList.concat(data_list);\n              _this.dataList = _util.default.unique(_this.dataList, \"id\");\n\n            }\n            _this.pageNo += 1;\n            _this.loadnum = _this.pageNo * _this.tpp;\n            _this.requestParams.loadnum = _this.loadnum;\n            __f__(\"log\", _this.pageNo, _this.loadnum, _this.requestParams.loadnum, \" at pages/nanchang/details.nvue:195\");\n          }\n        } else {\n          if (_this.dataList.length == 0) {\n            _this.isNoData = true;\n          }\n        }\n        _this.isLoading = false;\n        if (refresh) {\n          _this.refreshing = false;\n          _this.refreshFlag = false;\n          _this.refreshText = \"已刷新\";\n          _this.pulling = false;\n          if (_this.pullTimer) {\n            clearTimeout(_this.pullTimer);\n          }\n          _this.pullTimer = setTimeout(function () {\n            _this.pulling = false;\n          }, 1000);\n        }\n      }).catch(function (response) {\n        _this.isLoading = false;\n        __f__(\"log\", response, \" at pages/nanchang/details.nvue:217\");\n        if (_this.dataList.length == 0) {\n          _this.isNoData = true;\n        }\n      });\n    },\n    loadMore: function loadMore(e) {\n      if (!this.isNoData) {\n        this.loadData();\n      }\n    },\n    clear: function clear() {\n      this.dataList = [];\n      this.loadnum = 0;\n      this.pageNo = 0;\n    },\n    goDetail: function goDetail(detail) {var _this2 = this;\n\n      __f__(\"log\", \"details=: \" + JSON.stringify(detail), \" at pages/nanchang/details.nvue:235\");\n      _util.default.gotoDetail(detail);\n      setTimeout(function () {\n        _this2.navigateFlag = false;\n      }, 200);\n    },\n    refreshData: function refreshData() {\n      if (this.isLoading) {\n        return;\n      }\n      this.pulling = true;\n      this.refreshing = true;\n      this.refreshText = \"正在刷新...\";\n      this.loadData(true);\n    },\n    onrefresh: function onrefresh(e) {\n      this.refreshData();\n    },\n    search: function search(style) {\n      this.style = style;\n      this.loadData(true);\n    },\n    toSearch: function toSearch() {\n      uni.redirectTo({\n        url: '/pages/search/search' });\n\n    },\n    clearkeyWord: function clearkeyWord() {\n      this.keyword = '';\n    },\n    goback: function goback() {\n      __f__(\"log\", \"back\", \" at pages/nanchang/details.nvue:266\");\n      uni.navigateBack({});\n    },\n    onpullingdown: function onpullingdown(e) {\n      if (this.refreshing) {\n        return;\n      }\n      this.pulling = false;\n      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {\n        this.refreshFlag = true;\n        this.refreshText = \"释放立即刷新\";\n      } else {\n        this.refreshFlag = false;\n        this.refreshText = \"下拉可以刷新\";\n      }\n    },\n    //关注\n    toFollow: function toFollow() {var _this3 = this;\n      if (_index.default.alreadyLogin()) {\n        var url = 'api/ncrb/';\n        var data = {\n          action: 'nch',\n          mod: 'subscribe',\n          id: this.id };\n\n        _index.default.get(url, data).then(function (res) {\n          if (res.code == 200) {\n            if (res.data.subscribe == 1) {\n              _index.default.toastTips(\"关注成功\");\n            } else {\n              _index.default.toastTips(\"取消成功\");\n            }\n            _this3.nchData.subscribe = res.data.subscribe;\n            _this3.subscribe = res.data.subscribe;\n          }\n        });\n      }\n    },\n    videoPlay: function videoPlay(item) {\n      if (this.videoContext && item.id != this.videoContext.id) {\n        this.videoContext.pause();\n      }\n      var video = this.videoContextList[item.id];\n      this.remarkVideo(video);\n    },\n    remarkVideo: function remarkVideo(video) {\n      this.videoContext = video;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbmFuY2hhbmcvZGV0YWlscy5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDQSxFQUNBLGNBQ0EseUJBREEsRUFFQSx5QkFGQSxFQUdBLCtCQUhBLEVBSUEsaUNBSkEsRUFLQSxtQ0FMQSxFQU1BLG1DQU5BLEVBT0EsdUNBUEEsRUFRQSxxQ0FSQSxFQURBLEVBV0EsSUFYQSxrQkFXQSxDQUNBLFNBQ0EsaUJBREEsRUFFQSxhQUZBLEVBR0EsV0FDQSxZQURBLEVBSEEsRUFNQSxZQU5BLEVBT0EsWUFQQSxFQVFBLFlBUkEsRUFTQSxtQkFUQSxFQVVBLGNBVkEsRUFXQSxpQkFYQSxFQVlBLGtCQVpBLEVBYUEsZUFiQSxFQWNBLGdCQWRBLEVBZUEscUJBZkEsRUFnQkEsZUFoQkEsRUFpQkEsU0FqQkEsRUFrQkEsVUFsQkEsRUFtQkEsT0FuQkEsRUFvQkEsUUFwQkEsRUFxQkEsWUFyQkEsRUFzQkEsV0F0QkEsRUF1QkEsaUJBQ0EsYUFEQSxFQUVBLFdBRkEsRUFHQSxtQ0FIQSxFQUlBLDhCQUpBLEVBdkJBLEVBNkJBLG1CQUNBLGVBREEsRUFFQSxrQkFGQSxFQUdBLGlCQUhBLEVBN0JBLEVBa0NBLHVCQWxDQSxFQWtDQTtBQUNBLHVaQW5DQSxFQW9DQSxvQkFwQ0EsRUFxQ0EsZ0JBckNBLEdBdUNBLENBbkRBLEVBb0RBLE9BcERBLHFCQW9EQSxDQUNBLHNCQUNBLGlCQUVBLG1FQUNBLDhEQUxBLENBTUE7QUFDQSxpR0FFQSxDQTdEQSxFQThEQSxNQTlEQSxrQkE4REEsQ0E5REEsRUE4REEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBbkVBO0FBb0VBLFFBcEVBLG9CQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBeEVBO0FBeUVBO0FBQ0EsWUFEQSxvQkFDQSxPQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBVEE7OztBQVlBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBL0JBLE1BK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxFQUVBLElBRkE7QUFHQTtBQUNBLE9BbERBLEVBa0RBLEtBbERBLENBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BeERBO0FBeURBLEtBM0VBO0FBNEVBLFlBNUVBLG9CQTRFQSxDQTVFQSxFQTRFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEZBO0FBaUZBLFNBakZBLG1CQWlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckZBO0FBc0ZBLFlBdEZBLG9CQXNGQSxNQXRGQSxFQXNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxHQUZBO0FBR0EsS0E3RkE7QUE4RkEsZUE5RkEseUJBOEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRHQTtBQXVHQSxhQXZHQSxxQkF1R0EsQ0F2R0EsRUF1R0E7QUFDQTtBQUNBLEtBekdBO0FBMEdBLFVBMUdBLGtCQTBHQSxLQTFHQSxFQTBHQTtBQUNBO0FBQ0E7QUFDQSxLQTdHQTtBQThHQSxZQTlHQSxzQkE4R0E7QUFDQTtBQUNBLG1DQURBOztBQUdBLEtBbEhBO0FBbUhBLGdCQW5IQSwwQkFtSEE7QUFDQTtBQUNBLEtBckhBO0FBc0hBLFVBdEhBLG9CQXNIQTtBQUNBO0FBQ0E7QUFDQSxLQXpIQTtBQTBIQSxpQkExSEEseUJBMEhBLENBMUhBLEVBMEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRJQTtBQXVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSwwQkFGQTtBQUdBLHFCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBVkE7QUFXQTtBQUNBLEtBNUpBO0FBNkpBLGFBN0pBLHFCQTZKQSxJQTdKQSxFQTZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5LQTtBQW9LQSxlQXBLQSx1QkFvS0EsS0FwS0EsRUFvS0E7QUFDQTtBQUNBLEtBdEtBLEVBekVBLEUiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJibG9nZ2VyIHBhZ2UtbmV3c1wiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJiZ2JveFwiID5cclxuXHRcdFx0PGltYWdlIGNsYXNzPVwiYmdcIiA6c3JjPVwibmNoRGF0YS50eXBlPT02Pycvc3RhdGljL2ltZy9ob21lL3F5al9kX2JnLnBuZyc6Jy9zdGF0aWMvaW1nL2hvbWUvZnlyX2RfYmcucG5nJ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm1haW4gbGluZS1ib3R0b21cIiA6c3R5bGU9XCInbWFyZ2luLXRvcDonK2hlYWRlckhpZ2h0KydycHgnXCIgPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlclwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlci1pY29uXCIgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWcvY29tbW9uL3dfYmFja0AzeC5wbmdcIiBAY2xpY2s9XCJnb2JhY2soKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PCEtLSA8aW1hZ2UgY2xhc3M9XCJoZWFkZXItaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWcvY29tbW9uL3dfZnhAM3gucG5nXCI+PC9pbWFnZT4gLS0+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibG9nb1wiICA6c3JjPVwibmNoRGF0YS5sb2dvP25jaERhdGEubG9nbzonL3N0YXRpYy9pbWcvdXNlci91c2VyX2xvZ29AM3gucG5nJ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1c2VyLW5hbWVcIj57e25jaERhdGEubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGVzY1wiIHYtaWY9XCJuY2hEYXRhLmRlc2NcIj57e25jaERhdGEuZGVzY319PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFiXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tdHh0XCIgOmNsYXNzPVwidGhpcy5zdHlsZSA9PSdhbGwnPydhY3RpdmUnOicnXCIgQGNsaWNrPVwic2VhcmNoKCdhbGwnKVwiPuWFqOmDqDwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiIHYtaWY9XCJ0aGlzLnN0eWxlID09J2FsbCdcIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXR4dFwiIDpjbGFzcz1cInRoaXMuc3R5bGUgPT0nZGVmYXVsdCc/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJzZWFyY2goJ2RlZmF1bHQnKVwiPuaWh+eroDwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiIHYtaWY9XCJ0aGlzLnN0eWxlID09J2RlZmF1bHQnXCI+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS10eHRcIiA6Y2xhc3M9XCJ0aGlzLnN0eWxlID09J3ZpZGVvJz8nYWN0aXZlJzonJ1wiIEBjbGljaz1cInNlYXJjaCgndmlkZW8nKVwiPuinhumikTwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiIHYtaWY9XCJ0aGlzLnN0eWxlID09J3ZpZGVvJ1wiPjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGFiLWNvblwiPlxyXG5cdFx0XHQ8dW5pLWxpc3QgY2xhc3M9XCJsaXN0dmlld1wiIDplbmFibGVCYWNrVG9Ub3A9XCJ0cnVlXCIgOnNjcm9sbC15PVwidHJ1ZVwiIEBzY3JvbGx0b2xvd2VyPVwibG9hZE1vcmUoKVwiIDpzdHlsZT1cIid0b3A6Jyt0b3BIaWdodCsncnB4J1wiPlxyXG5cdFx0XHRcdDx1bmktcmVmcmVzaCBjbGFzcz1cInJlZnJlc2hcIiBAcmVmcmVzaD1cIm9ucmVmcmVzaFwiIEBwdWxsaW5nZG93bj1cIm9ucHVsbGluZ2Rvd25cIiA6ZGlzcGxheT1cInJlZnJlc2hpbmcgPyAnc2hvdycgOiAnaGlkZSdcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyZWZyZXNoLXZpZXdcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwicmVmcmVzaC1pY29uXCIgOnNyYz1cInJlZnJlc2hJY29uXCIgOnN0eWxlPVwie3dpZHRoOiAocmVmcmVzaGluZyB8fCBwdWxsaW5nKSA/IDA6ICczMnB4J31cIiA6Y2xhc3M9XCJ7J3JlZnJlc2gtaWNvbi1hY3RpdmUnOiByZWZyZXNoRmxhZ31cIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dW5pLWxvYWQtbW9yZSB2LWlmPVwicmVmcmVzaGluZ1wiIGNsYXNzPVwibG9hZGluZy1pY29uXCIgc3RhdHVzPVwibG9hZGluZ1wiIDpjb250ZW50VGV4dD1cImxvYWRpbmdNb3JlVGV4dFwiPjwvdW5pLWxvYWQtbW9yZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsb2FkaW5nLXRleHRcIj57e3JlZnJlc2hUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L3VuaS1yZWZyZXNoPlxyXG5cclxuXHRcdFx0XHQ8dW5pLWNlbGwgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGRhdGFMaXN0XCIgOmtleT1cIml0ZW0uaWRcIj5cclxuXHRcdFx0XHRcdDwhLS0gPG5ld3MtdmlkZW8taXRlbSB2LWlmPVwiaW5kZXggPT0gMFwiIDpuZXdzSXRlbT1cIml0ZW1cIiAgQGNsaWNrPVwiZ29EZXRhaWwoaXRlbSlcIj48L25ld3MtdmlkZW8taXRlbT4gLS0+XHJcblx0XHRcdFx0XHQ8bmV3cy1waWNzLWl0ZW0gdi1pZj1cIml0ZW0uc3R5bGUgPT0gJ3BpY3MnXCIgOm5ld3NJdGVtPVwiaXRlbVwiIEBjbGljaz1cImdvRGV0YWlsKGl0ZW0pXCI+PC9uZXdzLXBpY3MtaXRlbT5cclxuXHRcdFx0XHRcdDxuZXdzLXZpZGVvLWl0ZW0gdi1lbHNlLWlmPVwiaXRlbS5zdHlsZSA9PSAndmlkZW8nXCIgOm5ld3NJdGVtPVwiaXRlbVwiIEBjbGljaz1cImdvRGV0YWlsKGl0ZW0pXCIgdi1vbjp2aWRlb1BsYXk9XCJ2aWRlb1BsYXlcIj48L25ld3MtdmlkZW8taXRlbT5cclxuXHRcdFx0XHRcdDxuZXdzLWJpZ3BpYy1pdGVtIHYtZWxzZS1pZj1cIml0ZW0uc3R5bGUgPT0gJ2FjdGl2aXR5J3x8IGl0ZW0uc3R5bGUgPT0gJ2JpZ3BpYycgfHwgaXRlbS5zdHlsZT09J2g1X2JpZ3BpYydcIiA6bmV3c0l0ZW09XCJpdGVtXCIgQGNsaWNrPVwiZ29EZXRhaWwoaXRlbSlcIj48L25ld3MtYmlncGljLWl0ZW0+XHJcblx0XHRcdFx0XHQ8bGVmdC1uZXdzLWl0ZW0gdi1lbHNlIDpuZXdzSXRlbT1cIml0ZW1cIiBAY2xpY2s9XCJnb0RldGFpbChpdGVtKVwiPjwvbGVmdC1uZXdzLWl0ZW0+XHJcblx0XHRcdFx0PC91bmktY2VsbD5cclxuXHRcdFx0XHQ8dW5pLWNlbGwgdi1pZj1cImRhdGFMaXN0Lmxlbmd0aCA9PSAwXCI+XHJcblx0XHRcdFx0ICAgIDx2aWV3IGNsYXNzPVwibG9hZGluZy1tb3JlXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA2MHJweDtcIj5cclxuXHRcdFx0XHQgICAgICAgIDxpbWFnZSBzdHlsZT1cIndpZHRoOiA0MDVycHg7IGhlaWdodDogMjc5cnB4O1wiIHNyYz1cIi9zdGF0aWMvaW1nL2NvbW1vbi9ub2RhdGEucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQgICAgPC92aWV3PlxyXG5cdFx0XHRcdDwvdW5pLWNlbGw+XHJcblx0XHRcdFx0PHVuaS1jZWxsIHYtaWY9XCIoaXNMb2FkaW5nIHx8IGRhdGFMaXN0Lmxlbmd0aCA+IDQpJiYhaXNOb0RhdGFcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibG9hZGluZy1tb3JlXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibG9hZGluZy1tb3JlLXRleHRcIj57e2xvYWRpbmdUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC91bmktY2VsbD5cclxuXHRcdFx0PC91bmktbGlzdD5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB1dGlscyBmcm9tICdAL2NvbW1vbi9qcy91dGlsLmpzJztcclxuXHRpbXBvcnQgcmVxdWVzdCBmcm9tICdAL2FwaS9pbmRleC5qcyc7XHJcblx0aW1wb3J0IHVuaUxpc3QgZnJvbSAnQC9jb21wb25lbnRzL3VuaS1saXN0LnZ1ZSc7XHJcblx0aW1wb3J0IHVuaUNlbGwgZnJvbSAnQC9jb21wb25lbnRzL3VuaS1jZWxsLnZ1ZSc7XHJcblx0aW1wb3J0IHVuaVJlZnJlc2ggZnJvbSAnQC9jb21wb25lbnRzL3VuaS1yZWZyZXNoLnZ1ZSc7XHJcblx0aW1wb3J0IHVuaUxvYWRNb3JlIGZyb20gJ0AvY29tcG9uZW50cy91bmktbG9hZC1tb3JlLnZ1ZSc7XHJcblx0aW1wb3J0IGxlZnROZXdzSXRlbSBmcm9tICdAL2NvbXBvbmVudHMvaXRlbS1saXN0L2xlZnQtbmV3cy1pdGVtLm52dWUnO1xyXG5cdGltcG9ydCBuZXdzUGljc0l0ZW0gZnJvbSAnQC9jb21wb25lbnRzL2l0ZW0tbGlzdC9uZXdzLXBpY3MtaXRlbS5udnVlJztcclxuXHRpbXBvcnQgbmV3c0JpZ3BpY0l0ZW0gZnJvbSAnQC9jb21wb25lbnRzL2l0ZW0tbGlzdC9uZXdzLWJpZ3BpYy1pdGVtLm52dWUnO1xyXG5cdGltcG9ydCBuZXdzVmlkZW9JdGVtIGZyb20gJ0AvY29tcG9uZW50cy9pdGVtLWxpc3QvbmV3cy12aWRlby1pdGVtLm52dWUnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dW5pTGlzdCxcclxuXHRcdFx0dW5pQ2VsbCxcclxuXHRcdFx0dW5pUmVmcmVzaCxcclxuXHRcdFx0dW5pTG9hZE1vcmUsXHJcblx0XHRcdGxlZnROZXdzSXRlbSxcclxuXHRcdFx0bmV3c1BpY3NJdGVtLFxyXG5cdFx0XHRuZXdzQmlncGljSXRlbSxcclxuXHRcdFx0bmV3c1ZpZGVvSXRlbVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aGVhZGVySGlnaHQ6LTQ0MCxcclxuXHRcdFx0XHR0b3BIaWdodDogNDQwLFxyXG5cdFx0XHRcdG5jaERhdGE6IHtcclxuXHRcdFx0XHRcdHN1YnNjcmliZTogMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3Vic2NyaWJlOiAwLFxyXG5cdFx0XHRcdGRhdGFMaXN0OiBbXSxcclxuXHRcdFx0XHRzdHlsZTogJ2FsbCcsXHJcblx0XHRcdFx0bmF2aWdhdGVGbGFnOiBmYWxzZSxcclxuXHRcdFx0XHRwdWxsaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRyZWZyZXNoaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRyZWZyZXNoRmxhZzogZmFsc2UsXHJcblx0XHRcdFx0cmVmcmVzaFRleHQ6IFwiXCIsXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRsb2FkaW5nVGV4dDogJ+WKoOi9veS4rS4uLicsXHJcblx0XHRcdFx0aXNOb0RhdGE6IGZhbHNlLFxyXG5cdFx0XHRcdHBhZ2VObzogMCxcclxuXHRcdFx0XHRsb2FkbnVtOiAwLFxyXG5cdFx0XHRcdHRwcDogMzAsXHJcblx0XHRcdFx0YW5nbGU6IDAsXHJcblx0XHRcdFx0Y3VyckRhdGU6ICcnLFxyXG5cdFx0XHRcdHdlZWtkYXk6ICcnLFxyXG5cdFx0XHRcdHJlcXVlc3RQYXJhbXM6IHtcclxuXHRcdFx0XHRcdGFjdGlvbjogJ25jaCcsXHJcblx0XHRcdFx0XHRtb2Q6ICdob21lJyxcclxuXHRcdFx0XHRcdHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlbnNcIiksXHJcblx0XHRcdFx0XHR3aWQ6IHVuaS5nZXRTdG9yYWdlU3luYyhcIndpZFwiKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bG9hZGluZ01vcmVUZXh0OiB7XHJcblx0XHRcdFx0XHRjb250ZW50ZG93bjogJycsXHJcblx0XHRcdFx0XHRjb250ZW50cmVmcmVzaDogJycsXHJcblx0XHRcdFx0XHRjb250ZW50bm9tb3JlOiAnJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0aGFzTm90Y2hJblNjcmVlbjogZmFsc2UsIC8v5piv5ZCm5piv5YiY5rW35bGPXHJcblx0XHRcdFx0cmVmcmVzaEljb246IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFCNVFURlJGY0hCdzNOemN0N2UzOXZiMnljbkppb3FLN2UzdHBxYW0yOXZiLy8vL0Q4b0s3d0FBQUFwMFVrNVQvLy8vLy8vLy8vLy9BTExNTE04QUFBQnhTVVJCVkhqYTdKVkJEb0FnREFTcmpxai8vN0NKQmk5MGl5WWVPSFRQTXdtRlpySGpZeXlGWVlVeTFid1VacXRKSVlWeGhmMWE2dTBSN2lVdldzQ2NyRXR3SkhwOE13TWR2aDJhbUhkdWlaRDNycFdJZDkrQmdQZDdDYzJMSWtQeXF2bFF2S3hLQkovL1F3cS9DYWNBQXdEVXYwYTBZdUtoemdBQUFBQkpSVTVFcmtKZ2dnPT1cIixcclxuXHRcdFx0XHR2aWRlb0NvbnRleHRMaXN0OiB7fSxcclxuXHRcdFx0XHR2aWRlb0NvbnRleHQ6ICcnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLnB1bGxUaW1lciA9IG51bGw7XHJcblx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHR0aGlzLmhlYWRlckhpZ2h0ID0gcGx1cy5uYXZpZ2F0b3IuaGFzTm90Y2hJblNjcmVlbigpPy00NDA6LTQ2MDtcclxuXHRcdFx0dGhpcy50b3BIaWdodCA9IHBsdXMubmF2aWdhdG9yLmhhc05vdGNoSW5TY3JlZW4oKT81NDA6NTIwO1xyXG5cdFx0XHRcdC8vIHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcGx1cy5uYXZpZ2F0b3IuaGFzTm90Y2hJblNjcmVlbigpID8gJzY2cnB4JzonNDBycHgnO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidGhpcy5oZWFkZXJIaWdodDogXCIgKyB0aGlzLmhlYWRlckhpZ2h0KTtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKGUpIHtcclxuXHRcdFx0aWYgKGUuaWQpIHtcclxuXHRcdFx0XHR0aGlzLmlkID0gZS5pZDtcclxuXHRcdFx0XHR0aGlzLmxvYWREYXRhKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25IaWRlKCkge1xyXG5cdFx0XHRpZiAodGhpcy52aWRlb0NvbnRleHQpIHtcclxuXHRcdFx0XHR0aGlzLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRsb2FkRGF0YShyZWZyZXNoKSB7XHJcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdFx0XHRpZiAodGhpcy5pc0xvYWRpbmcpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHJlZnJlc2gpIHtcclxuXHRcdFx0XHRcdF90aGlzLmRhdGFMaXN0ID0gW107XHJcblx0XHRcdFx0XHRfdGhpcy5wYWdlTm8gPSAwO1xyXG5cdFx0XHRcdFx0X3RoaXMubG9hZG51bSA9IDA7XHJcblx0XHRcdFx0XHRfdGhpcy5yZXF1ZXN0UGFyYW1zLmxvYWRudW0gPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5pc05vRGF0YSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0UGFyYW1zLnN0eWxlID0gdGhpcy5zdHlsZTtcclxuXHRcdFx0XHR0aGlzLnJlcXVlc3RQYXJhbXMuaWQgPSB0aGlzLmlkO1xyXG5cclxuXHRcdFx0XHR2YXIgdXJsID0gJ2FwaS9uY3JiLyc7XHJcblx0XHRcdFx0cmVxdWVzdC5nZXQodXJsLF90aGlzLnJlcXVlc3RQYXJhbXMpLnRoZW4ocmVzdWx0ID0+e1xyXG5cdFx0XHRcdFx0aWYocmVzdWx0LmNvZGUgPT09IDIwMCl7XHJcblx0XHRcdFx0XHRcdF90aGlzLm5jaERhdGEgPSByZXN1bHQuZGF0YTtcclxuXHRcdFx0XHRcdFx0X3RoaXMuc3Vic2NyaWJlID0gX3RoaXMubmNoRGF0YS5zdWJzY3JpYmU7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBfdGhpcy5uY2hEYXRhLmxpc3Q7XHJcblx0XHRcdFx0XHRcdF90aGlzLmlzTm9EYXRhID0gKGRhdGEubGVuZ3RoIDw9IDApO1xyXG5cdFx0XHRcdFx0XHR2YXIgZGF0YV9saXN0ID0gW107XHJcblx0XHRcdFx0XHRcdGlmICghX3RoaXMuaXNOb0RhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHRkYXRhX2xpc3QgPSBkYXRhLm1hcCgobmV3cykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5ld3Muc3R5bGUgPT0gJ3ZpZGVvJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgdmlkZW8gPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KG5ld3MuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy52aWRlb0NvbnRleHRMaXN0W25ld3MuaWRdID0gdmlkZW87XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRuZXdzLmlkID0gbmV3cy5pZDtcclxuXHRcdFx0XHRcdFx0XHRcdG5ld3MuZGF0ZXRpbWUgPSB1dGlscy5mcmllbmRseURhdGUobmV3cy5kYXRlbGluZSArIFwiMDAwXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0bmV3cy50aW1lID0gdXRpbHMuZm9ybWF0TWludXRlc1RpbWUobmV3cy5kYXRlbGluZSArIFwiMDAwXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ld3M7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChyZWZyZXNoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy5kYXRhTGlzdCA9IGRhdGFfbGlzdDtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuZGF0YUxpc3QgPSBfdGhpcy5kYXRhTGlzdC5jb25jYXQoZGF0YV9saXN0KTtcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmRhdGFMaXN0ID0gdXRpbHMudW5pcXVlKF90aGlzLmRhdGFMaXN0LFwiaWRcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMucGFnZU5vICs9IDE7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMubG9hZG51bSA9IF90aGlzLnBhZ2VObyAqIF90aGlzLnRwcDtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5yZXF1ZXN0UGFyYW1zLmxvYWRudW0gPSBfdGhpcy5sb2FkbnVtO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKF90aGlzLnBhZ2VObyxfdGhpcy5sb2FkbnVtLF90aGlzLnJlcXVlc3RQYXJhbXMubG9hZG51bSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdGlmIChfdGhpcy5kYXRhTGlzdC5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdF90aGlzLmlzTm9EYXRhID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0X3RoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRpZiAocmVmcmVzaCkge1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdF90aGlzLnJlZnJlc2hGbGFnID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdF90aGlzLnJlZnJlc2hUZXh0ID0gXCLlt7LliLfmlrBcIjtcclxuXHRcdFx0XHRcdFx0X3RoaXMucHVsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRpZiAoX3RoaXMucHVsbFRpbWVyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KF90aGlzLnB1bGxUaW1lcik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0X3RoaXMucHVsbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMucHVsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5jYXRjaChyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHRfdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdGlmIChfdGhpcy5kYXRhTGlzdC5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5pc05vRGF0YSA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGxvYWRNb3JlKGUpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaXNOb0RhdGEpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGNsZWFyKCkge1xyXG5cdFx0XHRcdHRoaXMuZGF0YUxpc3QgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmxvYWRudW0gPSAwO1xyXG5cdFx0XHRcdHRoaXMucGFnZU5vID0gMDtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z29EZXRhaWwoZGV0YWlsKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZGV0YWlscz06IFwiICsgSlNPTi5zdHJpbmdpZnkoZGV0YWlsKSk7XHJcblx0XHRcdFx0dXRpbHMuZ290b0RldGFpbChkZXRhaWwpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5uYXZpZ2F0ZUZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCAyMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlZnJlc2hEYXRhKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzTG9hZGluZykge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnB1bGxpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5yZWZyZXNoVGV4dCA9IFwi5q2j5Zyo5Yi35pawLi4uXCI7XHJcblx0XHRcdFx0dGhpcy5sb2FkRGF0YSh0cnVlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25yZWZyZXNoKGUpIHtcclxuXHRcdFx0XHR0aGlzLnJlZnJlc2hEYXRhKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlYXJjaChzdHlsZSkge1xyXG5cdFx0XHRcdHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuXHRcdFx0XHR0aGlzLmxvYWREYXRhKHRydWUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b1NlYXJjaCgpIHtcclxuXHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvc2VhcmNoL3NlYXJjaCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xlYXJrZXlXb3JkKCkge1xyXG5cdFx0XHRcdHRoaXMua2V5d29yZCA9ICcnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnb2JhY2soKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJiYWNrXCIpO1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe30pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbnB1bGxpbmdkb3duKGUpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5yZWZyZXNoaW5nKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucHVsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmIChNYXRoLmFicyhlLnB1bGxpbmdEaXN0YW5jZSkgPiBNYXRoLmFicyhlLnZpZXdIZWlnaHQpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hGbGFnID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaFRleHQgPSBcIumHiuaUvueri+WNs+WIt+aWsFwiO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hGbGFnID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hUZXh0ID0gXCLkuIvmi4nlj6/ku6XliLfmlrBcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5YWz5rOoXHJcblx0XHRcdHRvRm9sbG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAocmVxdWVzdC5hbHJlYWR5TG9naW4oKSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXJsID0gJ2FwaS9uY3JiLyc7XHJcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0YWN0aW9uOiAnbmNoJyxcclxuXHRcdFx0XHRcdFx0bW9kOiAnc3Vic2NyaWJlJyxcclxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuaWRcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRyZXF1ZXN0LmdldCh1cmwsIGRhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5zdWJzY3JpYmUgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWVzdC50b2FzdFRpcHMoXCLlhbPms6jmiJDlip9cIik7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVlc3QudG9hc3RUaXBzKFwi5Y+W5raI5oiQ5YqfXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5jaERhdGEuc3Vic2NyaWJlID0gcmVzLmRhdGEuc3Vic2NyaWJlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3Vic2NyaWJlID0gcmVzLmRhdGEuc3Vic2NyaWJlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dmlkZW9QbGF5KGl0ZW0pIHtcclxuXHRcdFx0XHRpZiAodGhpcy52aWRlb0NvbnRleHQgJiYgaXRlbS5pZCAhPSB0aGlzLnZpZGVvQ29udGV4dC5pZCkge1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0NvbnRleHQucGF1c2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHZpZGVvID0gdGhpcy52aWRlb0NvbnRleHRMaXN0W2l0ZW0uaWRdO1xyXG5cdFx0XHRcdHRoaXMucmVtYXJrVmlkZW8odmlkZW8pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZW1hcmtWaWRlbyh2aWRlbykge1xyXG5cdFx0XHRcdHRoaXMudmlkZW9Db250ZXh0ID0gdmlkZW87XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblx0LnBhZ2UtbmV3cyB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5saXN0dmlldyB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnJlZnJlc2gge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucmVmcmVzaC12aWV3IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDY0cHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiBub3dyYXA7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucmVmcmVzaC1pY29uIHtcclxuXHRcdHdpZHRoOiAzMnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnB4O1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiAxNXB4IDE1cHg7XHJcblx0fVxyXG5cclxuXHQucmVmcmVzaC1pY29uLWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG5cdH1cclxuXHJcblx0LmxvYWRpbmctaWNvbiB7XHJcblx0XHR3aWR0aDogMjhweDtcclxuXHRcdGhlaWdodDogMjhweDtcclxuXHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0Y29sb3I6IGdyYXk7XHJcblx0fVxyXG5cclxuXHQubG9hZGluZy10ZXh0IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAycHg7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5sb2FkaW5nLW1vcmUge1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cGFkZGluZy10b3A6IDE0cHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5sb2FkaW5nLW1vcmUtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0Y29sb3I6ICM5OTk7XHJcblx0fVxyXG5cclxuXHQuYmxvZ2dlciB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0LmJnYm94IHtcclxuXHRcdC8qIGhlaWdodDo4MDBycHg7ICovXHJcblx0fVxyXG5cclxuXHQuYmcge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC5oZWFkZXIge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHBhZGRpbmc6IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmhlYWRlci1pY29uIHtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0fVxyXG5cclxuXHQubWFpbiB7XHJcblx0XHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6MDtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRwYWRkaW5nLXRvcDozMHJweDsgKi9cclxuXHRcdG1hcmdpbi10b3A6IC00NDBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0b3A6IC0yMHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nOiAtMjBycHggMzBycHggNDBycHggMzBycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0d2lkdGg6IDE1NnJweDtcclxuXHRcdGhlaWdodDogMTU2cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZSB7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5hdHRlbnRpb24ge1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGNvbG9yOiAjZTVlNWU1O1xyXG5cdFx0cGFkZGluZzogNnJweCAyMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjJycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdH1cclxuXHJcblxyXG5cdC50YWIge1xyXG5cdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRwYWRkaW5nOiAzMHJweCA2MHJweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG5cdC5pdGVtLXR4dCB7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5pdGVtIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYWN0aXZlIHtcclxuXHRcdGNvbG9yOiAjRTAwMDAwO1xyXG5cdH1cclxuXHJcblx0LmxpbmUge1xyXG5cdFx0d2lkdGg6IDM3cnB4O1xyXG5cdFx0aGVpZ2h0OiA1cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTAwMDAwO1xyXG5cdH1cclxuXHJcblx0LmRlc2Mge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHRcdG1hcmdpbjogMHJweCA2MHJweCAxNXJweCA2MHJweDtcclxuXHRcdGxpbmVzOiAzO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!******************************************************!*\
  !*** E:/headlines/headlines/components/uni-list.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_list_vue_vue_type_template_id_f958d030_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-list.vue?vue&type=template&id=f958d030&scoped=true& */ 26);\n/* harmony import */ var _uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-list.vue?vue&type=script&lang=js& */ 28);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-list.vue?vue&type=style&index=0&id=f958d030&scoped=true&lang=css& */ 30).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-list.vue?vue&type=style&index=0&id=f958d030&scoped=true&lang=css& */ 30).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_list_vue_vue_type_template_id_f958d030_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_list_vue_vue_type_template_id_f958d030_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"f958d030\",\n  \"2bb8ceef\",\n  false,\n  _uni_list_vue_vue_type_template_id_f958d030_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/components/uni-list.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlGQUF5RTtBQUM3SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUZBQXlFO0FBQ2xJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY5NThkMDMwJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mOTU4ZDAzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Zjk1OGQwMzAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjk1OGQwMzBcIixcbiAgXCIyYmI4Y2VlZlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9oZWFkbGluZXMvaGVhZGxpbmVzL2NvbXBvbmVudHMvdW5pLWxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!*************************************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-list.vue?vue&type=template&id=f958d030&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_f958d030_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-list.vue?vue&type=template&id=f958d030&scoped=true& */ 27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_f958d030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_f958d030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_f958d030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_f958d030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 27 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-list.vue?vue&type=template&id=f958d030&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "list",
    {
      staticClass: ["uni-list"],
      attrs: {
        enableBackToTop: _vm.enableBackToTop,
        loadmoreoffset: "15",
        scrollY: _vm.scrollY
      },
      on: { loadmore: _vm.loadMore }
    },
    [_vm._t("default")],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 28 */
/*!*******************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-list.vue?vue&type=script&lang=js& */ 29);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNhLENBQWdCLGtkQUFHLEVBQUMiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  name: 'UniList',\n  'mp-weixin': {\n    options: {\n      multipleSlots: false } },\n\n\n  data: function data() {\n    return {};\n  },\n  props: {\n    enableBackToTop: {\n      type: [Boolean, String],\n      default: false },\n\n    scrollY: {\n      type: [Boolean, String],\n      default: true } },\n\n\n  created: function created() {\n\n\n\n\n\n\n\n\n\n\n\n\n  },\n  methods: {\n    loadMore: function loadMore(e) {\n      this.$emit(\"scrolltolower\");\n    },\n    ontouchstart: function ontouchstart(e) {\n      if (!this.canPullDown) {\n        __f__(\"log\", \"canPullDown\", this.canPullDown, \" at components/uni-list.vue:67\");\n        return;\n      }\n\n      this.height = 0;\n      this.touchStartY = e.touches[0].pageY || e.changedTouches[0].pageY;\n      this._updateRefresh(0);\n      this.refreshInstance.callMethod(\"onchange\", true);\n    },\n    ontouchmove: function ontouchmove(e) {\n      if (!this.canPullDown) {\n        return;\n      }\n\n      var oldHeight = this.height;\n      var endY = e.touches[0].pageY || e.changedTouches[0].pageY;\n      var newHeight = endY - this.touchStartY;\n      if (newHeight > this.pullDown.maxHeight) {\n        return;\n      }\n\n      this._updateRefresh(newHeight);\n\n      newHeight = newHeight < this.pullDown.maxHeight ? newHeight : this.pullDown.maxHeight;\n      this.height = newHeight;\n\n      this.refreshInstance.callMethod(this.pullDown.callPullingDown, {\n        height: newHeight });\n\n    },\n    ontouchend: function ontouchend(e) {\n      if (!this.canPullDown) {\n        return;\n      }\n\n      this.refreshInstance.callMethod(\"onchange\", false);\n\n      if (this.height > this.pullDown.threshold) {\n        refreshInstance.callMethod(this.pullDown.callRefresh);\n        return;\n      }\n\n      this._updateRefresh(0);\n    },\n    _updateRefresh: function _updateRefresh(height) {\n      this.refreshInstance.setStyle({\n        'height': height });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktbGlzdC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQSxpQkFEQTtBQUVBO0FBQ0E7QUFDQSwwQkFEQSxFQURBLEVBRkE7OztBQU9BLE1BUEEsa0JBT0E7QUFDQTtBQUNBLEdBVEE7QUFVQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSxvQkFGQSxFQURBOztBQUtBO0FBQ0EsNkJBREE7QUFFQSxtQkFGQSxFQUxBLEVBVkE7OztBQW9CQSxTQXBCQSxxQkFvQkE7Ozs7Ozs7Ozs7Ozs7QUFhQSxHQWpDQTtBQWtDQTtBQUNBLFlBREEsb0JBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsZ0JBSkEsd0JBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWRBO0FBZUEsZUFmQSx1QkFlQSxDQWZBLEVBZUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFEQTs7QUFHQSxLQW5DQTtBQW9DQSxjQXBDQSxzQkFvQ0EsQ0FwQ0EsRUFvQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQWpEQTtBQWtEQSxrQkFsREEsMEJBa0RBLE1BbERBLEVBa0RBO0FBQ0E7QUFDQSx3QkFEQTs7QUFHQSxLQXREQSxFQWxDQSxFIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8IS0tICNpZmRlZiBBUFAtVlVFIC0tPlxuXHQ8dmlldyBjbGFzcz1cInVuaS1saXN0XCI+XG5cdFx0PHNsb3QgLz5cblx0PC9saXN0PlxuXHQ8IS0tICNlbmRpZiAtLT5cblx0PCEtLSAjaWZkZWYgQVBQLU5WVUUgLS0+XG5cdDxsaXN0IGNsYXNzPVwidW5pLWxpc3RcIiA6ZW5hYmxlQmFja1RvVG9wPVwiZW5hYmxlQmFja1RvVG9wXCIgbG9hZG1vcmVvZmZzZXQ9XCIxNVwiIDpzY3JvbGwteT1cInNjcm9sbFlcIiBAbG9hZG1vcmU9XCJsb2FkTW9yZVwiPlxuXHRcdDxzbG90IC8+XG5cdDwvbGlzdD5cblx0PCEtLSAjZW5kaWYgLS0+XG5cdDwhLS0gI2lmZGVmIEg1IHx8IE1QLVdFSVhJTiB8fCBNUC1RUSAtLT5cblx0PHNjcm9sbC12aWV3IGNsYXNzPVwidW5pLWxpc3RcIiA6ZW5hYmxlQmFja1RvVG9wPVwiZW5hYmxlQmFja1RvVG9wXCIgOnNjcm9sbC15PVwic2Nyb2xsWVwiIEBzY3JvbGx0b2xvd2VyPVwibG9hZE1vcmVcIj5cblx0XHQ8c2xvdCAvPlxuXHQ8L3Njcm9sbC12aWV3PlxuXHQ8IS0tICNlbmRpZiAtLT5cblx0PCEtLSAjaWZkZWYgTVAtQUxJUEFZIHx8IE1QLUJBSURVIHx8IE1QLVRPVVRJQU8gLS0+XG5cdDxzY3JvbGwtdmlldyBjbGFzcz1cInVuaS1saXN0XCIgOnNjcm9sbC15PVwic2Nyb2xsWVwiIEBzY3JvbGx0b2xvd2VyPVwibG9hZE1vcmVcIj5cblx0XHQ8c2xvdCAvPlxuXHQ8L3Njcm9sbC12aWV3PlxuXHQ8IS0tICNlbmRpZiAtLT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc3JjPVwiLi91bmktcmVmcmVzaC53eHNcIiBtb2R1bGU9XCJyZWZyZXNoXCIgbGFuZz1cInd4c1wiPjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ1VuaUxpc3QnLFxuXHRcdCdtcC13ZWl4aW4nOiB7XG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdG11bHRpcGxlU2xvdHM6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHt9XG5cdFx0fSxcblx0XHRwcm9wczoge1xuXHRcdFx0ZW5hYmxlQmFja1RvVG9wOiB7XG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHNjcm9sbFk6IHtcblx0XHRcdFx0dHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXG5cdFx0XHR0aGlzLnB1bGxEb3duID0ge1xuXHRcdFx0XHR0aHJlc2hvbGQ6IDk1LFxuXHRcdFx0XHRtYXhIZWlnaHQ6IDIwMCxcblx0XHRcdFx0Y2FsbFJlZnJlc2g6ICdvbnJlZnJlc2gnLFxuXHRcdFx0XHRjYWxsUHVsbGluZ0Rvd246ICdvbnB1bGxpbmdkb3duJyxcblx0XHRcdFx0cmVmcmVzaFNlbGVjdG9yOiAnLnVuaS1yZWZyZXNoJ1xuXHRcdFx0fTtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gMDtcblx0XHRcdHRoaXMuY2FuUHVsbERvd24gPSBmYWxzZTtcblx0XHRcdHRoaXMucmVmcmVzaEluc3RhbmNlID0ge307XG5cdFx0XHQvLyAjZW5kaWZcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGxvYWRNb3JlKGUpIHtcblx0XHRcdFx0dGhpcy4kZW1pdChcInNjcm9sbHRvbG93ZXJcIik7XG5cdFx0XHR9LFxuXHRcdFx0b250b3VjaHN0YXJ0KGUpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmNhblB1bGxEb3duKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjYW5QdWxsRG93blwiLCB0aGlzLmNhblB1bGxEb3duKTtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaGVpZ2h0ID0gMDtcblx0XHRcdFx0dGhpcy50b3VjaFN0YXJ0WSA9IGUudG91Y2hlc1swXS5wYWdlWSB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuXHRcdFx0XHR0aGlzLl91cGRhdGVSZWZyZXNoKDApO1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hJbnN0YW5jZS5jYWxsTWV0aG9kKFwib25jaGFuZ2VcIiwgdHJ1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0b250b3VjaG1vdmUoZSkge1xuXHRcdFx0XHRpZiAoIXRoaXMuY2FuUHVsbERvd24pIHtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBvbGRIZWlnaHQgPSB0aGlzLmhlaWdodDtcblx0XHRcdFx0dmFyIGVuZFkgPSBlLnRvdWNoZXNbMF0ucGFnZVkgfHwgZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcblx0XHRcdFx0dmFyIG5ld0hlaWdodCA9IGVuZFkgLSB0aGlzLnRvdWNoU3RhcnRZO1xuXHRcdFx0XHRpZiAobmV3SGVpZ2h0ID4gdGhpcy5wdWxsRG93bi5tYXhIZWlnaHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl91cGRhdGVSZWZyZXNoKG5ld0hlaWdodCk7XG5cblx0XHRcdFx0bmV3SGVpZ2h0ID0gbmV3SGVpZ2h0IDwgdGhpcy5wdWxsRG93bi5tYXhIZWlnaHQgPyBuZXdIZWlnaHQgOiB0aGlzLnB1bGxEb3duLm1heEhlaWdodDtcblx0XHRcdFx0dGhpcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG5cblx0XHRcdFx0dGhpcy5yZWZyZXNoSW5zdGFuY2UuY2FsbE1ldGhvZCh0aGlzLnB1bGxEb3duLmNhbGxQdWxsaW5nRG93biwge1xuXHRcdFx0XHRcdGhlaWdodDogbmV3SGVpZ2h0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdG9udG91Y2hlbmQoZSkge1xuXHRcdFx0XHRpZiAoIXRoaXMuY2FuUHVsbERvd24pIHtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMucmVmcmVzaEluc3RhbmNlLmNhbGxNZXRob2QoXCJvbmNoYW5nZVwiLCBmYWxzZSk7XG5cblx0XHRcdFx0aWYgKHRoaXMuaGVpZ2h0ID4gdGhpcy5wdWxsRG93bi50aHJlc2hvbGQpIHtcblx0XHRcdFx0XHRyZWZyZXNoSW5zdGFuY2UuY2FsbE1ldGhvZCh0aGlzLnB1bGxEb3duLmNhbGxSZWZyZXNoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl91cGRhdGVSZWZyZXNoKDApO1xuXHRcdFx0fSxcblx0XHRcdF91cGRhdGVSZWZyZXNoKGhlaWdodCkge1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hJbnN0YW5jZS5zZXRTdHlsZSh7XG5cdFx0XHRcdFx0J2hlaWdodCc6IGhlaWdodFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQudW5pLWxpc3Qge1xuXHRcdGZsZXg6IDE7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!***************************************************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-list.vue?vue&type=style&index=0&id=f958d030&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_id_f958d030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-list.vue?vue&type=style&index=0&id=f958d030&scoped=true&lang=css& */ 31);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_id_f958d030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_id_f958d030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_id_f958d030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_id_f958d030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_id_f958d030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-list.vue?vue&type=style&index=0&id=f958d030&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-list": {
    "flex": 1,
    "position": "relative",
    "flexDirection": "column"
  }
}

/***/ }),
/* 32 */
/*!******************************************************!*\
  !*** E:/headlines/headlines/components/uni-cell.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_cell_vue_vue_type_template_id_072522a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-cell.vue?vue&type=template&id=072522a8& */ 33);\n/* harmony import */ var _uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-cell.vue?vue&type=script&lang=js& */ 35);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_cell_vue_vue_type_template_id_072522a8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_cell_vue_vue_type_template_id_072522a8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"b65ab49a\",\n  false,\n  _uni_cell_vue_vue_type_template_id_072522a8___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"E:/headlines/headlines/components/uni-cell.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDs7O0FBR3ZEO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1jZWxsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzI1MjJhOCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1jZWxsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWNlbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiYjY1YWI0OWFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovaGVhZGxpbmVzL2hlYWRsaW5lcy9jb21wb25lbnRzL3VuaS1jZWxsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*************************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-cell.vue?vue&type=template&id=072522a8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_template_id_072522a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-cell.vue?vue&type=template&id=072522a8& */ 34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_template_id_072522a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_template_id_072522a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_template_id_072522a8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_template_id_072522a8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 34 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-cell.vue?vue&type=template&id=072522a8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cell",
    { appendAsTree: true, attrs: { append: "tree" } },
    [_vm._t("default")],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 35 */
/*!*******************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-cell.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-cell.vue?vue&type=script&lang=js& */ 36);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNhLENBQWdCLGtkQUFHLEVBQUMiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWNlbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWNlbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-cell.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  name: 'UniCell',\n  props: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktY2VsbC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBLGlCQURBO0FBRUEsV0FGQSxFIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxuICAgIDxjZWxsPlxuICAgICAgICA8c2xvdCAvPlxuICAgIDwvY2VsbD5cbiAgICA8IS0tICNlbmRpZiAtLT5cbiAgICA8IS0tICNpZm5kZWYgQVBQLU5WVUUgLS0+XG4gICAgPHZpZXc+XG4gICAgICAgIDxzbG90IC8+XG4gICAgPC92aWV3PlxuICAgIDwhLS0gI2VuZGlmIC0tPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdVbmlDZWxsJyxcbiAgICAgICAgcHJvcHM6IHt9XG4gICAgfVxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*********************************************************!*\
  !*** E:/headlines/headlines/components/uni-refresh.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_refresh_vue_vue_type_template_id_495eb701___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-refresh.vue?vue&type=template&id=495eb701& */ 38);\n/* harmony import */ var _uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-refresh.vue?vue&type=script&lang=js& */ 40);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-refresh.vue?vue&type=style&index=0&lang=css& */ 42).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-refresh.vue?vue&type=style&index=0&lang=css& */ 42).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_refresh_vue_vue_type_template_id_495eb701___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_refresh_vue_vue_type_template_id_495eb701___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"b84562cc\",\n  false,\n  _uni_refresh_vue_vue_type_template_id_495eb701___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/components/uni-refresh.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDREQUFvRDtBQUN4RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNERBQW9EO0FBQzdHOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXJlZnJlc2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5NWViNzAxJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXJlZnJlc2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktcmVmcmVzaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktcmVmcmVzaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXJlZnJlc2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiYjg0NTYyY2NcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovaGVhZGxpbmVzL2hlYWRsaW5lcy9jb21wb25lbnRzL3VuaS1yZWZyZXNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!****************************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-refresh.vue?vue&type=template&id=495eb701& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_template_id_495eb701___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-refresh.vue?vue&type=template&id=495eb701& */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_template_id_495eb701___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_template_id_495eb701___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_template_id_495eb701___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_template_id_495eb701___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 39 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-refresh.vue?vue&type=template&id=495eb701& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "refresh",
    {
      attrs: { display: _vm.display },
      on: { refresh: _vm.onrefresh, pullingdown: _vm.onpullingdown }
    },
    [_vm._t("default")],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 40 */
/*!**********************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-refresh.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-refresh.vue?vue&type=script&lang=js& */ 41);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlhLENBQWdCLHFkQUFHLEVBQUMiLCJmaWxlIjoiNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXJlZnJlc2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXJlZnJlc2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-refresh.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  name: 'UniRefresh',\n  props: {\n    display: {\n      type: [String],\n      default: \"hide\" } },\n\n\n  data: function data() {\n    return {\n      pulling: false };\n\n  },\n  computed: {\n    isShow: function isShow() {\n      if (this.display === \"show\" || this.pulling === true) {\n        return true;\n      }\n      return false;\n    } },\n\n  created: function created() {},\n  methods: {\n    onchange: function onchange(value) {\n      this.pulling = value;\n    },\n    onrefresh: function onrefresh(e) {\n      this.$emit(\"refresh\", e);\n    },\n    onpullingdown: function onpullingdown(e) {\n\n      this.$emit(\"pullingdown\", e);\n\n\n\n\n\n\n\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktcmVmcmVzaC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBLG9CQURBO0FBRUEscUJBRkEsRUFEQSxFQUZBOzs7QUFRQSxNQVJBLGtCQVFBO0FBQ0E7QUFDQSxvQkFEQTs7QUFHQSxHQVpBO0FBYUE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQU5BLEVBYkE7O0FBcUJBLFNBckJBLHFCQXFCQSxFQXJCQTtBQXNCQTtBQUNBLFlBREEsb0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsYUFKQSxxQkFJQSxDQUpBLEVBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxpQkFQQSx5QkFPQSxDQVBBLEVBT0E7O0FBRUE7Ozs7Ozs7OztBQVNBLEtBbEJBLEVBdEJBLEUiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPCEtLSAjaWZkZWYgQVBQLU5WVUUgLS0+XG4gICAgPHJlZnJlc2ggOmRpc3BsYXk9XCJkaXNwbGF5XCIgQHJlZnJlc2g9XCJvbnJlZnJlc2hcIiBAcHVsbGluZ2Rvd249XCJvbnB1bGxpbmdkb3duXCI+XG4gICAgICAgIDxzbG90IC8+XG4gICAgPC9yZWZyZXNoPlxuICAgIDwhLS0gI2VuZGlmIC0tPlxuICAgIDwhLS0gI2lmbmRlZiBBUFAtTlZVRSAtLT5cbiAgICA8dmlldyByZWY9XCJ1bmktcmVmcmVzaFwiIGNsYXNzPVwidW5pLXJlZnJlc2hcIiB2LXNob3c9XCJpc1Nob3dcIj5cbiAgICAgICAgPHNsb3QgLz5cbiAgICA8L3ZpZXc+XG4gICAgPCEtLSAjZW5kaWYgLS0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ1VuaVJlZnJlc2gnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFtTdHJpbmddLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwiaGlkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHB1bGxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc1Nob3coKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheSA9PT0gXCJzaG93XCIgfHwgdGhpcy5wdWxsaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7fSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25jaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1bGxpbmcgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbnJlZnJlc2goZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJyZWZyZXNoXCIsIGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9ucHVsbGluZ2Rvd24oZSkge1xuICAgICAgICAgICAgICAgIC8vICNpZmRlZiBBUFAtTlZVRVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJwdWxsaW5nZG93blwiLCBlKTtcbiAgICAgICAgICAgICAgICAvLyAjZW5kaWZcbiAgICAgICAgICAgICAgICAvLyAjaWZuZGVmIEFQUC1OVlVFXG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdmlld0hlaWdodDogOTAsXG4gICAgICAgICAgICAgICAgICAgIHB1bGxpbmdEaXN0YW5jZTogZS5oZWlnaHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInB1bGxpbmdkb3duXCIsIGRldGFpbCk7XG4gICAgICAgICAgICAgICAgLy8gI2VuZGlmXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC51bmktcmVmcmVzaCB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!******************************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-refresh.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-refresh.vue?vue&type=style&index=0&lang=css& */ 43);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_refresh_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-refresh.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-refresh": {
    "height": 0,
    "overflow": "hidden"
  }
}

/***/ }),
/* 44 */
/*!***********************************************************!*\
  !*** E:/headlines/headlines/components/uni-load-more.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_load_more_vue_vue_type_template_id_36142ffc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-load-more.vue?vue&type=template&id=36142ffc&scoped=true& */ 45);\n/* harmony import */ var _uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-load-more.vue?vue&type=script&lang=js& */ 47);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-load-more.vue?vue&type=style&index=0&id=36142ffc&scoped=true&lang=css& */ 49).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-load-more.vue?vue&type=style&index=0&id=36142ffc&scoped=true&lang=css& */ 49).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_load_more_vue_vue_type_template_id_36142ffc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_load_more_vue_vue_type_template_id_36142ffc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"36142ffc\",\n  \"cba6054a\",\n  false,\n  _uni_load_more_vue_vue_type_template_id_36142ffc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/components/uni-load-more.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0k7QUFDdEk7QUFDaUU7QUFDTDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHNGQUE4RTtBQUNsSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsc0ZBQThFO0FBQ3ZJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzYxNDJmZmMmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2MTQyZmZjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2MTQyZmZjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM2MTQyZmZjXCIsXG4gIFwiY2JhNjA1NGFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovaGVhZGxpbmVzL2hlYWRsaW5lcy9jb21wb25lbnRzL3VuaS1sb2FkLW1vcmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!******************************************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-load-more.vue?vue&type=template&id=36142ffc&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_36142ffc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-load-more.vue?vue&type=template&id=36142ffc&scoped=true& */ 46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_36142ffc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_36142ffc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_36142ffc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_36142ffc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 46 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-load-more.vue?vue&type=template&id=36142ffc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-load-more"], on: { click: _vm.onClick } },
    [
      _vm.status === "loading" && _vm.showIcon
        ? _c("loading-indicator", {
            staticClass: ["uni-load-more__img", "uni-load-more__img--nvue"],
            style: { color: _vm.color },
            attrs: { animating: true }
          })
        : _vm._e(),
      _c(
        "u-text",
        { staticClass: ["uni-load-more__text"], style: { color: _vm.color } },
        [
          _vm._v(
            _vm._s(
              _vm.status === "more"
                ? _vm.contentText.contentdown
                : _vm.status === "loading"
                ? _vm.contentText.contentrefresh
                : _vm.contentText.contentnomore
            )
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 47 */
/*!************************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-load-more.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-load-more.vue?vue&type=script&lang=js& */ 48);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJhLENBQWdCLHVkQUFHLEVBQUMiLCJmaWxlIjoiNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-load-more.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar platform = uni.getSystemInfoSync().platform;var _default2 =\n{\n  name: 'UniLoadMore',\n  props: {\n    status: {\n      // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了\n      type: String,\n      default: 'more' },\n\n    showIcon: {\n      type: Boolean,\n      default: true },\n\n    iconType: {\n      type: String,\n      default: 'auto' },\n\n    color: {\n      type: String,\n      default: '#777777' },\n\n    contentText: {\n      type: Object,\n      default: function _default() {\n        return {\n          contentdown: '上拉显示更多',\n          contentrefresh: '正在加载...',\n          contentnomore: '没有更多数据了' };\n\n      } } },\n\n\n  data: function data() {\n    return {\n      platform: platform };\n\n  },\n  methods: {\n    onClick: function onClick() {\n      this.$emit('clickLoadMore', {\n        detail: {\n          status: this.status } });\n\n\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktbG9hZC1tb3JlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0EsZ0Q7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBRkE7QUFHQSxxQkFIQSxFQURBOztBQU1BO0FBQ0EsbUJBREE7QUFFQSxtQkFGQSxFQU5BOztBQVVBO0FBQ0Esa0JBREE7QUFFQSxxQkFGQSxFQVZBOztBQWNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQWRBOztBQWtCQTtBQUNBLGtCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSxtQ0FGQTtBQUdBLGtDQUhBOztBQUtBLE9BUkEsRUFsQkEsRUFGQTs7O0FBK0JBLE1BL0JBLGtCQStCQTtBQUNBO0FBQ0Esd0JBREE7O0FBR0EsR0FuQ0E7QUFvQ0E7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQURBLEVBREE7OztBQUtBLEtBUEEsRUFwQ0EsRSIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJ1bmktbG9hZC1tb3JlXCIgQGNsaWNrPVwib25DbGlja1wiPlxuXHRcdDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxuXHRcdDxsb2FkaW5nLWluZGljYXRvciB2LWlmPVwic3RhdHVzID09PSAnbG9hZGluZycgJiYgc2hvd0ljb25cIiA6c3R5bGU9XCJ7Y29sb3I6IGNvbG9yfVwiIDphbmltYXRpbmc9XCJ0cnVlXCIgY2xhc3M9XCJ1bmktbG9hZC1tb3JlX19pbWcgdW5pLWxvYWQtbW9yZV9faW1nLS1udnVlXCI+PC9sb2FkaW5nLWluZGljYXRvcj5cblx0XHQ8IS0tICNlbmRpZiAtLT5cblx0XHQ8IS0tICNpZmRlZiBINSAtLT5cblx0XHQ8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIyNSAyNSA1MCA1MFwiIHYtaWY9XCIoaWNvblR5cGU9PT0nY2lyY2xlJyB8fCBpY29uVHlwZT09PSdhdXRvJyAmJiBwbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSAmJiBzdGF0dXMgPT09ICdsb2FkaW5nJyAmJiBzaG93SWNvblwiIGNsYXNzPVwidW5pLWxvYWQtbW9yZV9faW1nIHVuaS1sb2FkLW1vcmVfX2ltZy0tYW5kcm9pZC1INVwiPlxuXHRcdFx0PGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIyMFwiIGZpbGw9XCJub25lXCIgOnN0eWxlPVwie2NvbG9yOmNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjNcIj48L2NpcmNsZT5cblx0XHQ8L3N2Zz5cblx0XHQ8dmlldyB2LWVsc2UtaWY9XCJzdGF0dXMgPT09ICdsb2FkaW5nJyAmJiBzaG93SWNvblwiIGNsYXNzPVwidW5pLWxvYWQtbW9yZV9faW1nIHVuaS1sb2FkLW1vcmVfX2ltZy0taW9zLUg1XCI+XG5cdFx0XHQ8dmlldyA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmNvbG9yfVwiPjwvdmlldz5cblx0XHRcdDx2aWV3IDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6Y29sb3J9XCI+PC92aWV3PlxuXHRcdFx0PHZpZXcgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpjb2xvcn1cIj48L3ZpZXc+XG5cdFx0XHQ8dmlldyA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmNvbG9yfVwiPjwvdmlldz5cblx0XHRcdDx2aWV3IDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6Y29sb3J9XCI+PC92aWV3PlxuXHRcdFx0PHZpZXcgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpjb2xvcn1cIj48L3ZpZXc+XG5cdFx0XHQ8dmlldyA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmNvbG9yfVwiPjwvdmlldz5cblx0XHRcdDx2aWV3IDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6Y29sb3J9XCI+PC92aWV3PlxuXHRcdFx0PHZpZXcgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpjb2xvcn1cIj48L3ZpZXc+XG5cdFx0XHQ8dmlldyA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmNvbG9yfVwiPjwvdmlldz5cblx0XHRcdDx2aWV3IDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6Y29sb3J9XCI+PC92aWV3PlxuXHRcdFx0PHZpZXcgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpjb2xvcn1cIj48L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdDwhLS0gI2lmbmRlZiBBUFAtTlZVRSB8fCBINSAtLT5cblx0XHQ8dmlldyB2LWlmPVwiKGljb25UeXBlPT09J2NpcmNsZScgfHwgaWNvblR5cGU9PT0nYXV0bycgJiYgcGxhdGZvcm0gPT09ICdhbmRyb2lkJykgJiYgc3RhdHVzID09PSAnbG9hZGluZycgJiYgc2hvd0ljb25cIiBjbGFzcz1cInVuaS1sb2FkLW1vcmVfX2ltZ1wiPlxuXHRcdFx0PGltYWdlIGNsYXNzPVwidW5pLWxvYWQtbW9yZV9faW1nLS1hbmRyb2lkXCIgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDb0FBQUFxQ0FZQUFBREZ3OGxiQUFBQUFYTlNSMElBcnM0YzZRQUFCc1JKUkVGVVdBbk5tVXRvbkZVVXgvTjltWmxrOHA1cFd2UFdOTTJya2ZvZ3V0QmlGMjVxUVVRSVhiaFZzZWhTcUN2M0lpNUVCUkdVNnNaRlJleE9RVzJDWUZ0RkVLck5xOWlZWWg1Tk1tM2lKSlBYUFB6OWIrZCt6a3c2YVdPYkdTL2MzUGM1dnpuMzNOY1hwK1F1d3FWTGwvcVN5ZVN4MHRMU2J0Sm1SRFVSbGQ2Zzd1WGUzdDRoOHZjaytIWXFaWHg4dkhkalkrTUZ4M0dPcFZLcEIwaGRJRjNrWk1icVJDTHhHWFgzMzBvKzR4am1wRzdWbHEvdWprSEh4c2FhNC9INHljM056UUdVbENMUWxUS0Z0RktUdDRyeWdhZzdmZnlrNmhxblg5S08yUzY5TFNqVEczQmQ5M1VnWDBSUU9WR0twTVZHc2hSdUtpNUpBMDVSOWFwcDJQcEg0eFhkYTlldUNUaE9maVBmRDdQRHR3VWRHUm5adzdSK2lMREhKSmpVV0UrSkJDQTh4bzhZSXZzZDhVL0tzN1ROOVBYMUxWUE9GelFiQnBheHp2WHIxOHZDNGJDQVZ4bWZ5RGNvTCtqRml4ZDdnUHlJZ1MxRVk3MzByMDZoNERmcTNnMEdnMmZiMjl2WDhnblByVS8vUUd0UnhOME05UE10TFMzVjBCNmxSaGJlRW94bGNtdnh4eDRXdytjTXJLSk5mY3hDQVhDYXVuZFl6V2NRYUp3c2QreWRsSkVoQTVVUlN4Y1hGeEhydWpVMU5VNDBHbldxcTZ1WGtMMlpLMGNBV1FHZkRBUDVBY0tDREpDamE3cVR5QnJrVno5ejhPREJyKzRHVXNvWUw2dkY4TkZFWFYwZFJjZFpYbDdXNG5SWFZsYkM2Slo3WklVc2k5TEJqMTkrUW85SGlWclNHcXowVXdEZkpudEhLelJMdzIwS3M3T3psWVFLNlNNWWZiaGNvcXFxYWw2cTdmQXNpekxscjlINEVJMmVKUmwwaXNYeEZ2WDNIRklRRFEwTks2c0VDNm1Vd3lKQVU2M2FiZkFzT2p3ODNJamx6dEJRUm1mVksvNklQd3ArVnlBdGhGSjBoK0VORXQyS2lncWp2N3k4ZkJyZHhsKzlWVS9IRTFTcUxDaXl6aXp4SkhIWElRVktXSVNoWEpCcmEydkdCVmdyZTZpZlZhT1plaGJRQVlDT3BxRUVsbVRRK3owOVBWRjFLa1NRYmxiOUVycGNMQ21MdWo2ZnJ4SU83UTQzUWVuMExIbnFVa2tOWUlXUE1PVmZxME1oZy93VlNKMVNIaXk3Z2ZGVnU1Z09BMlMySWNFU1A2YXp0K0lLQ2J1d3NCRGwwbVB1RXVoMS9YNS9IVHlPbTU3Mis2ZzBVdzVnREpPZkx5UmNwcTc2K3ZwbHdGSmNma3BsV1ZLdG02QU9oU2VwdDM2cDlIeG5aK2Q2NXVCQzVqV1RuRkl4ZEdxMlRXVDZLM1hSYUtQUldqUEpIbmF1a0dCNWRKbDkxVnBWaTByRVlhSVdrRzR1QXRZVnJhaGhabVptTFJBSWVCYUZyVnluUU1oYUZMcmsrdnA2cEtpVUtHOXNiSXhiYThwUHFmTDdPQ0tOUlMwY2w0UUZteTlpcWt1TEFFMEFOdURUUWtwYjFOYi9IMUtRekhQSHNHRGRwS1pldHhRRHE1UWJ0NDZ0WW9jQVR4L1hSdmJWdUY2UUM3SnEycks2WG9XS1RjbGxXc2VtdDVoZ2k2c1FrU1ZKRFN3WGdZWmlnMkxKSUJ6ZTZZUXhOM1ZMdVNwSXV6MVJxVXR6VVFQdVdBK0FLMWlpM0hQVlpiLzZTZE5PZzExVWgvUkVMaGJwNmRPbkJWZVBBUVZxcHAvRkZISDM3OTgvQ2JHZXVXYnFBZlJ6RWp4Y0xOQWpSNDdVTTdzNjN3MGtYQnY3OXUxYlZxRUU4cCt0bjZiVDUrbWdPMkZCZzNSeVd6cUFVcGVEeDF4S1lEUDd1Z0ZsK3MvaW0zYnFaZGsyM2s5UEZKUVNaVk5UVTgyQTFSRXRwUGlteFdGQU96bzZyakxkUHdCb3R5a3Ryb0hwNldtOURnc1MwSTB4L2IxQW1vOXVTcW1iMmJ0M3IzbGxHRkNSWU5BdmdOUHQybTVWSWQ3WXI5RFo2N05ieE9od01Ncmp5SzhrU3A5V2VncmZITGM2UFlqdTdtNXQvTjhJMUViS0QrSUNBN2J6YnFWemMzT0htTkVHYTAzME9PVDFMV3ZWNnZSQVZkSFYxZlVsY1BvVnhnWEl5d1dldm56NThnRDVyTDVXd04ya3lIVHd5MGZZNFBXZFMzdTZMT21nOHdidnA5Rk0yVnRXOXZ6OGZIVWtFbm1UUWZiNnA3ZVRyUHc3RDY5VHJhMnQzcS9NRkxUVHZQYnEydHJhdzBBMUFHeDBrSmZiclFENVBmcXlYaGxickNUbjVWZTlSMGNCV1VnSjZJM0ZZbStNam83Mnl4STdCYlA5TlpadlRoM2NLWjZqcmtYVGpTN0owNmVqSkcvNmM3bVFHcHRYSWRQZHdvQVRDQXJwbDVJMzdxQTg0Uy9LMzNKNUdPdnY3OS95NVUyQ2M4UGc0S0N2dWJtNWpVK1ZPa3hDZ2twYjBLWXJ0QTJGUXFIRjNMRXE1d1ZWSTlhcnhyb3ZJYlJkUWlWY3dEU1pQT2s2OVdQVWo5RXZ3dllTNVl1ZjJVNTRvRlhSVnNrUHJXVk1HMzdZS3YremdEWk55NXFqZmFoOW0yK3QyNElpcEVTV2FHbHBPVWIyS1NJNi8zMElTaGwxQmg2b1JFYlo1RFByZ0RSdnNreEFWanJIK09id2hRc1hmajErL0hqZXI4M28yTjZpNm1ERDVPUmtpRjk5bExLbUxzWDA2NE5GQWhoclhjL2FxcmZRbVlDTU05T2NoaDB2S3l2N1JlZTQxYkZkZWx1TDVnN1dWeittdUIrWUh0cjB1Y1VERkVBbVdPYVBVQjQzV0tMOUQrSW9zN1NqUitTT1FUUEJKeVltZE1uV1A4TjBMYXUwVWZDRXZ5bnJtN3gya1FYaWxhYW1wdi84Y1B3SHlVRE5BQWN0ZGFjQUFBQUFTVVZPUks1Q1lJST1cIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyB2LWVsc2UtaWY9XCJzdGF0dXMgPT09ICdsb2FkaW5nJyAmJiBzaG93SWNvblwiIGNsYXNzPVwidW5pLWxvYWQtbW9yZV9faW1nXCI+XG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1bmktbG9hZC1tb3JlX19pbWctLWlvc1wiIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVNeTFqTURFeElEWTJMakUwTlRZMk1Td2dNakF4TWk4d01pOHdOaTB4TkRvMU5qb3lOeUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTmlBb1YybHVaRzkzY3lraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlF6bEJNelUzT1RsRU9VTTBNVEZGT1VJME5UWkRORVJCUVVSQlF6STRSa1VpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UXpsQk16VTNPVUZFT1VNME1URkZPVUkwTlRaRE5FUkJRVVJCUXpJNFJrVWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBET1VFek5UYzVOMFE1UXpReE1VVTVRalExTmtNMFJFRkJSRUZETWpoR1JTSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcERPVUV6TlRjNU9FUTVRelF4TVVVNVFqUTFOa00wUkVGQlJFRkRNamhHUlNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1B0K0FMU3dBQUE2Q1NVUkJWSGphMUZzTGtGWlZIYjk4TE0rRjViSEw4a2hBMWlTZWl5UUJDUk0rWUdxS1VubkpURExHSTBCR1psS0RJVTJNTWdsVWlEQXBFWnZTc1puUXRCUkp0S3dRTktRTUZZZVJEUjEwV09MZDhsallYZGgrdjh2NWZSM09kKzc5N3QxZG5Pbk8vT2ZjZTc3eitKLy8rYi9QK1pxdFhiczJzSjlNSmhOVVYxY0hKMDZjQ0pvM2J4N0VQYzJhTmN2cHk3cFdyVm9GKy9mdkR5b3FLb0kyYmRvRTlmWDFGN1RqTjhhK0VYQm4vZmtmdnc5NDJUZit3WU1IZzltelp3Zmp4bzBMRGh3NEVQYTF4Mk1iRncvZk9HZlBuZzFxYTJ0emNDa0lMc0xEeWRxMmJSc3VucE9UTU03VEQvVy90WkRaaFBkZUtEK3lHeEhoZHUzYUJWMjdkZzNPbkRsek1WQU5NaGVMQU8zYnR3OEtDd3VEbXBvYVg1T3hiZ1VJTUVxN0s4SWNQbnc0S0NzckMvcjM3eDhjUDM3OC80Y0FYQUIzdnFTa0pNdWlEaFRrdytYY3VYTmhPV2JNbUtCbHk1WWhVVDh4QXJoeUZ2UDBCZndSc0F1d3hKWkpzbS9uenAyRFRwMDZoZS9PVStjWjY0SzZvMGVQQmtPSERnMkdEeDhlNmdFYko1US9OSE51QUpRMWhnQmVIVURsUjduVlRrWThyUUF2QWk0ejM0dlIvbVBzMUZvUnNhQ2dJSlRoSTBlT0JDMWF0RWlGR0dWKzVNaVJvUzQ1ZWZKa3FGakpGWFYxZFF1QTAxMm0yV2N3VHc5OGZ5NkNxQmRzYWlJTzRDU2NyR1BIanZrNG9kaGF2UHF1UnRGV1hFQzI1VmdrUkVLT0NoL3FEU3Erdm4zN2h0ekQvbVpUT21PYzVVN3pLekJQRWVkeWdXc2hjRHlXdnMzMGlnQWJVKzZveU1nSkJDRmh3UUUwZmNjeE42MEF5OWllYmJqb0RoMDZoTW93alF4VDRmWHExU3NrQXJtSFpwa0Fydml4cC9rV3pIZE1lQXJFeFNKRWFpWElqalJqUko0RGFBR1dwaWJMelhOM0ZtMXZBNXRlQmdoM2oxUnYzYnAxWWdLd1BkbWYycDl6Y3lOWVlnUEtNZlkwVDVmNW5OWWR3MTU4bko4UWF3VzRDTEt3aU9CU0VnTy9ob2syZUJ5ZFIrM2RZSCtQTHhBNUo4VnYwS0JCd2VuVHAwUDJKV0F4Nit5RkVCZnM4bE1ZK3kwU1dNQk5JOUU0VGhLaTU4VktUZzNGUVpTMVJRRjFjejI3ZUMwUUhNdSszRTBTa1Vvd2poVnQ1VmRhV2hwMDc5NDlaSHYyUWQxRWpEWE0yY2xhMU0wbmwzR3hBczNKOXlSRXp5VGRGVktWRk9hRTlxUkE4R00wV2ViUnVvOUpHWktBN012MlNlUy9aOCtlb1E5QkFyTWZGckxHbzZqdnhiaEhiSlpuS1gyUnp6MU83UWhKSjlDczJaTWFXSXlxL3poZGVxUE5mSW9IZDU4Y2xJUUQrSlNYbDRkS2x5SUF1QmRWWFp3RlZXS3NwU1NveEUrK2g4eDRrM3VDbkVoRTRJNUt3UmlGV0dPVTBRV0tpQ1lMYmRvUk1SS0F1MmtROXZrZkxVNmRPaFgwNk5FamxIK3lNUlpTaW5udXlXbllvc1Zjamk4Q0VBLzZDZzJKRitJSVVCcW5HS1VUQ053dHdCTjRmODlSaUsxUjk2REVnTzJvME5EbXRFZHZWRmRWVllWK1AzVUFQVUVzNkdGd1YzUEhtWGtENHZoNzRpREZKeXNWSS9NbGFRaHdLZUJOVExZWDVWdUE4VDQvZ1p4QTRNUkdGeERCNlI3T21ZUGZ5eWtHUkpieWllK1huR1luUUlDL2NvSDkrdlVMaVlyeHJrTDlaQTkrMHlrYUhJZkVwTTdnZThUaUoyQ3NIWXd5TWZhZkFGMXlDR0JIWUliQ1ZEakRqS3Q3QmVCNTFEK0xnUWE2T2tHN0lEWUVFdHZRN2xuWExLTHRMZEx1SkJwRTRnUFVYY1cyK1BrWndPZXgrNGNHRGh3WURCa3lSTDcvSEZjRXdVR1BvLzh1V1JVcFluZnhHSGNvOEhrZXdMSEx5WW1BYXdBUHVJRlp4aE9wRGZKUThnYlV2NDF5T1JBcHRNV0JOcjZvcU1oV2lyZDUrdStpSG1CYjJuaGpEVjdIV0JOUVRnSzh5MTFsNU5ldFd6YzVVTHNjQXRTajduYk5JMHNraFdlVVpDYzBXNG55SC9qTzRWejB1MUllWWhiazRBaXdNNnRqeElXQnlIc29aOXFjSUJQSmQveStEd1BmQkVTT21DYS9RRjNXaVpIdWNMbEVEcE54Y05obWhlRU9QZ2RRTng2L1ZaRlF6Rlo1VE4wOEFIWFF0MklpM0VkeUZ1VXNQdFRjR1BoVzVpTWlDTkVMdnorR2RuOWh1RzRIVUphVy93M2cwd3hWMFhhRzdhckcyV2VLaVVXWU00WTdHTzVlenNoVEFSYmJXR3cvRHZYa3BwL2l2VnZFMEpWb014TjRycEd6Sk1oRTVQbCt4bEFUc0RJcWlrUDlGOUQyejNoOW5Pa3NFVUZoSytxTzRyY1Brb2FsTVEvSHFKTEl5YjNGM0pkanJDY3cxeVo4am95SkxSNWdDbzU0ZXRsYWc3cUlvZU5oMU4xQlJZajNEVEZKMGVsb3R4UGxWemtHdVlBbUwwVlNKVkdBSkE0MWM0WjZBM0J6VExmbjBIWXdZS0VJNkNVQU16WkVXdkxzSWNRT28xQW1teXlNNzJuSEpDZllzb2dmbEdWNmpFazl2eVFaWFN1cTZ3NGMxNk5zR2NHWmJ3T1ByK0gxUmtPazJMRXpqTmVweFFraWhIU0NRNHluQVlOUngyek1LVjkyQ1FNV3FqOEowQlJFOEVTaHhSRk42WXJmQ1JoQzB4M3IvWm00SWJRQ2NtSm9WMGtNYW1sbGNjUjZGakhxVUM1RjJSL3dTMmRjeW1PbGZBS09TNEttelFiNWNwTkMyTUM3SmhWbjV3alhvSjQ0clloTGg4bjBlWE9Db3JKeGE3UE9qYlNsQ0dWY3pyMzQvUnNBbXJjdm85cyt3R3AzdHpWaG50eGlYaUo0bnZFWWI0RkprZjBPOEhvY0FlUG1MdkN4bkwwQU9ScmFWZWtKazZUWWpEYWJSVlhmUkUybENOMWg2WlFSTjErSW5VYnNDcEt3b0JaSGgwZE9ETjlKQkNVZmZJdFh4RWF2VFFrVXRuZlRWQXBsQ1dMM0pJU3oyOWg0TmpvdG51U3NRS0pDazhkRitrSlI2UkFSanJxRlZtZlBuajNaYks4Y0lKMG1zZDZqZ0hQR3RmVlRROFZMbWx2aDRtY3Q5c29iUm1QaWMwRHlEUVFueC9ObGZZVWd5ejU5K29TY3NIMzc5cEF3WEFCRDMyblRwb1VISVRvRVNlSTVtbmJFL1VxRGR5TGNhZkVCZjJNQ3FnQzdOd3hJYk1SRUpRMGc0RDRzZkp3bkQrQW1ScklJMDVjZk1XSkUrTDExNjliUXIrZmlwMDZkR3A0b0o4M2xtWWQ1d2ovRW1NYTRUYUhpdm80RWVDZ3VZWkJua0I1ZzJhV0E2OU9JRW5VSE9hR3lzaklZTUdCQU1HblNwT0RZc1dQWndDcEZtbTRsTnErNGdTTFFBN2pjWDhEd3RqRXlSQzh3amFiblhFeDlrZlduVEprU0prQW85MHhwSlZWK0ZtY1ZOZVlBRjV6V25nUzRDNE85MU1CeG1BdjhibExFcGJqSTVzejlNVGRBaGNna0NUMVJPOG1aa0FqZmlZcFRFdlN0QVM1M1V3MXZBaVVHZ1ozR3B1UUVZdm9pQnFsSWFuN2tTREhuVHdKUUZOaVB1MCs1VnhDVlloY1pJak5yZFhVRGRwK0VxNUFaM0drZzhRQXlWWlJaSWs0VGw0UUFiRjljWEp4TllaTUF0QW9rZ3M0QnJOeEVwQ3R0ZVhnN0REVE1ES1lOU3VRZEtzbkpCZWs3SHhld3Z4YW9zV3hMWVh0dytjSnAxODIxN3dxbDRhS0NmQk5vRXUwTzVWVStQaGN0SjBZZVhENEM2SlFweXJscFNMVG9qcEdHR041WXdOemlDaGRJWkxrNGx2TGNGSjlqTVgzUWRpSW1ZOWJtR1FVK1RSVUw1Q0hJVFRSbGdGOEQ5b3VEMU1mbUxvRVBsNXhva0l1bVoyY2ZnTXBIdDQ3SVc5TjY0SHNoN3dRWVlqeUl1Z1d1RjVmQ3FZbmNYUmQ1dlBNV3lpenp2aGkvMzIrbnZHMGRaYzl2UjZmWk91MG1kNWUrdUM0MDhGdktTSU9ad1hsR3Z4UHY5NWl6QTJWdHZnMXhLRldBUkkrdk1YNjZIVWhwUVFiNjQzdVcxYlNqdVRXeXcyU0J2RHJCdmpGaWMxZUdHbHo1ZXNxM2tvOXVTSWxCUnFQdUZjQ3Y4RjRXSWNOMTJuVmFCZDBTYVl3STZQRERJbVIxMUprcWdIY1BtUXNzanhJbjZiVXNoeWdERkpVVHhQTXBIaytqZmpQZ3VwZ2RuWVYyUi9nN3hTanRwYWg4UkpCZXdod2YwZ0dLNlhJOTJ1NHdYRkVVNDBhZko0RE40aDVMY0FkKzQwSEkzSmdKZWN1VDBjMDYyVzBpMmhRSlVUY3hhbjMvQ01XMVBGMks2YmJBK0RhejR4UnMxRDNCcjFDbTBPaWhLQ3Fpelc3OC9uWEFGL0c1VFhyRWNWemFOTUg2Q3lNc3dxc0FIcUR5RExFeW91OGx3T1huS0Y4RGpJNktqVjNLek1CaVhrREg4aWovSDIxNEo1QTU5NmVrclozRjB6WGxXZUw3K1A1ZVVyTm8zL1F3QzE1dXh0aHV6aWR5N0R6S1J3RURhQVZpaURnS2JUYno3Q0puem8wYk43cElmSWlpZDhTdVB3bjI1bzNRQ21wbnlqbFpreXhQUDhFb21DSnpyR2I3R0pNeDd0TnNxNE1UMnhNVVlhaUVyWk9sdVR6S3NuejNnd0NlQ1p5VlJaSmZZcGxORW9rRWp3clB0eGx4amVZQWsrRjFGNzRWQXpQeFFSTllZZHRwT1V2V3M4SjFzR2hCSk1Oc2I3aWdOOHBsSnMxZVNtTEloTEtFNHJ2YUNYMjdnT2hMcExPc0l6Sjdxbi9pK3daemN2U09aMjMvZHU4VFpqd1Y4ekhJWG9QNFIzaWZCeGlGejFkY1ZwYTNhUG50UEUrYzZUbUlXRTlFdGNNbUFjUGRXQWhZaEFYeGNMT1FpOUwxV2hEMVNjOHAxZDJvTDdYR2lSS3A4RjRBMmk4Sy9uZkkreS9nc1RESi9ZQy84K0FENVVoMDRLSGlHbCtjSUZQbkJERHJQTWp3UkdrTFh5eE80VkdiZlFXbkRIMnYwYlZXRTNDOVFPWGxlcGJnakVmSUpRSTZYREczejVhaEQ5Y3cycFM3OGlwQjg1d3lTY05UdnNWemx6emhMOC9qUnJubVZqZkZKSy9tM200bmo5dmJnUVRndVQ4WFpUanNtNjcyUjV1SktFYVFtQkkvYzU4Z3l1czhaRGFnTHBFVlNKQkl5SHA0am4rK3hxUFY3MU9nUWdKWUVXT3RaL2hheFJ0S21XT0J1OHhkQkxmdFdsdHNZODR6RTZXSUV5L2VJT1dMK0JhYXlNeCtLSHRMN0VBa3FkTkRMaUVYbUVNVUhuaWVkdEpxZzlIbVp0ZnZ0MjZ2TmkwQmRHM0Z0M2c4Wk9mN1BBdTU5VHh0eml2TE5JZWt5aSt3RDFpOEN1VWlEOUZYQWE4QysveFMzSlBtWm5vbXljN0grZmI0L1NlMGJrNDFGZWw2MjFyNGNnVnhicTkxVjRqVnF3QjdIVGUyTTdqZ0IrUVdIYXZaa0RSUG1aY0FTb1pFbUJ4Nmk3NWJHalBjTWRMNC9WS0dGQUdXWmtHelBHMFhBYmRMOUE4MUc1TE9tVW5DOWhIS0plTzdkY1VNamJsU2wxMjg2N0VsRlR0YUdsMjB4dnZMR1BkVnovOFRWdVU3eTB4MVBHN3Z0TmcyNG96OVVvL1o0MTIrK1ZGV0k3RmNvZzl0dTlMbTZndlJtSVB2OXgxeG1RQXU2UkRrWHRiT3RsR0VtcGdENU52bnljMGRjdjBFRTZjZmRpMUhtaE1mOXdERjNrM2d0UnZFZWRoeGpwZ2ZxUGI5UFU5aUVKSG55T1VBN2JRVVhoNmtxL0Q3bDJpVGpXdjdYT0Q1MzBCRHI4aklydXMrc3JYanQ0TXp1bUpNSHVUc0JhNjNZS0UxK1JSNWxCakVpa0NDbldLV2lIZHpPZ0tPK25SSUJBRjg4emEvSUZtSjNlTVpvdjRDWXhHQmFiY3BHTDhFWXgrU2VNWEplUndITnNWL2grdmR4ZXVoRXBOM1p5Tlk3OEdtMmZrbkp4VkdoeWppeFBpUXZWa056VDFlbEQ5UHkvYVRBTDY0SGI5dmNZbUM5emZkWGRUL0MxTGVHYmc0cm5CYUFpaERGSkgxMlc1dWxmTkNOZS94VHNQM2JwOGlrekpzNUJGKzVQTmZBUVlBUGFzZVRkc0VjYVlBQUFBQVNVVk9SSzVDWUlJPVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdDwhLS0gI2lmZGVmIEFQUC1OVlVFIHx8IEg1IC0tPlxuXHRcdDx0ZXh0IGNsYXNzPVwidW5pLWxvYWQtbW9yZV9fdGV4dFwiIDpzdHlsZT1cIntjb2xvcjogY29sb3J9XCI+e3sgc3RhdHVzID09PSAnbW9yZScgPyBjb250ZW50VGV4dC5jb250ZW50ZG93biA6IHN0YXR1cyA9PT0gJ2xvYWRpbmcnID8gY29udGVudFRleHQuY29udGVudHJlZnJlc2ggOiBjb250ZW50VGV4dC5jb250ZW50bm9tb3JlIH19PC90ZXh0PlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdDwhLS0gI2lmbmRlZiBBUFAtTlZVRSB8fCBINSAtLT5cblx0XHQ8dGV4dCBjbGFzcz1cInVuaS1sb2FkLW1vcmVfX3RleHRcIj57eyBzdGF0dXMgPT09ICdtb3JlJyA/IGNvbnRlbnRUZXh0LmNvbnRlbnRkb3duIDogc3RhdHVzID09PSAnbG9hZGluZycgPyBjb250ZW50VGV4dC5jb250ZW50cmVmcmVzaCA6IGNvbnRlbnRUZXh0LmNvbnRlbnRub21vcmUgfX08L3RleHQ+XG5cdFx0PCEtLSAjZW5kaWYgLS0+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGNvbnN0IHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm1cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICdVbmlMb2FkTW9yZScsXG5cdFx0cHJvcHM6IHtcblx0XHRcdHN0YXR1czoge1xuXHRcdFx0XHQvLyDkuIrmi4nnmoTnirbmgIHvvJptb3JlLWxvYWRpbmfliY3vvJtsb2FkaW5nLWxvYWRpbmfkuK3vvJtub01vcmUt5rKh5pyJ5pu05aSa5LqGXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJ21vcmUnXG5cdFx0XHR9LFxuXHRcdFx0c2hvd0ljb246IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdGljb25UeXBlOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJ2F1dG8nXG5cdFx0XHR9LFxuXHRcdFx0Y29sb3I6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnIzc3Nzc3Nydcblx0XHRcdH0sXG5cdFx0XHRjb250ZW50VGV4dDoge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRjb250ZW50ZG93bjogJ+S4iuaLieaYvuekuuabtOWkmicsXG5cdFx0XHRcdFx0XHRjb250ZW50cmVmcmVzaDogJ+ato+WcqOWKoOi9vS4uLicsXG5cdFx0XHRcdFx0XHRjb250ZW50bm9tb3JlOiAn5rKh5pyJ5pu05aSa5pWw5o2u5LqGJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBsYXRmb3JtOiBwbGF0Zm9ybVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0b25DbGljaygpIHtcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2tMb2FkTW9yZScsIHtcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdHN0YXR1czogdGhpcy5zdGF0dXMsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cdC51bmktbG9hZC1tb3JlIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGhlaWdodDogNDBweDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cblx0LnVuaS1sb2FkLW1vcmVfX3RleHQge1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0fVxuXG5cdC51bmktbG9hZC1tb3JlX19pbWcge1xuXHRcdHdpZHRoOiAyNHB4O1xuXHRcdGhlaWdodDogMjRweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcblx0fVxuXG5cdC51bmktbG9hZC1tb3JlX19pbWctLW52dWUge1xuXHRcdGNvbG9yOiAjNjY2NjY2O1xuXHR9XG5cblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0tYW5kcm9pZCxcblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0taW9zIHtcblx0XHR3aWR0aDogMjRweDtcblx0XHRoZWlnaHQ6IDI0cHg7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWFuZHJvaWQge1xuXHRcdGFuaW1hdGlvbjogbG9hZGluZy1pb3MgMXMgMHMgbGluZWFyIGluZmluaXRlO1xuXHR9XG5cblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0taW9zIHtcblx0XHRhbmltYXRpb246IGxvYWRpbmctaW9zIDFzIDBzIHN0ZXAtZW5kIGluZmluaXRlO1xuXHR9XG5cblx0QGtleWZyYW1lcyBsb2FkaW5nLWFuZHJvaWQge1xuXHRcdDAlIHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdH1cblxuXHRcdDEwMCUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHR9XG5cdH1cblxuXHRAa2V5ZnJhbWVzIGxvYWRpbmctaW9zIHtcblx0XHQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHR9XG5cblx0XHQ4JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG5cdFx0fVxuXG5cdFx0MTYlIHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcblx0XHR9XG5cblx0XHQyNCUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuXHRcdH1cblxuXHRcdDMyJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuXHRcdH1cblxuXHRcdDQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuXHRcdH1cblxuXHRcdDQ4JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXHRcdH1cblxuXHRcdDU2JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuXHRcdH1cblxuXHRcdDY0JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuXHRcdH1cblxuXHRcdDczJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuXHRcdH1cblxuXHRcdDgyJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuXHRcdH1cblxuXHRcdDkxJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuXHRcdH1cblxuXHRcdDEwMCUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHR9XG5cdH1cblxuXHQvKiAjZW5kaWYgKi9cblxuXHQvKiAjaWZkZWYgSDUgKi9cblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0tYW5kcm9pZC1INSB7XG5cdFx0YW5pbWF0aW9uOiBsb2FkaW5nLWFuZHJvaWQtSDUtcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuXHR9XG5cblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0tYW5kcm9pZC1INT5jaXJjbGUge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRhbmltYXRpb246IGxvYWRpbmctYW5kcm9pZC1INS1kYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG5cdFx0c3Ryb2tlOiBjdXJyZW50Q29sb3I7XG5cdFx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuXHR9XG5cblx0QGtleWZyYW1lcyBsb2FkaW5nLWFuZHJvaWQtSDUtcm90YXRlIHtcblx0XHQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHR9XG5cblx0XHQxMDAlIHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0fVxuXHR9XG5cblx0QGtleWZyYW1lcyBsb2FkaW5nLWFuZHJvaWQtSDUtZGFzaCB7XG5cdFx0MCUge1xuXHRcdFx0c3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuXHRcdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG5cdFx0fVxuXG5cdFx0NTAlIHtcblx0XHRcdHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XG5cdFx0XHRzdHJva2UtZGFzaG9mZnNldDogLTQwO1xuXHRcdH1cblxuXHRcdDEwMCUge1xuXHRcdFx0c3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcblx0XHRcdHN0cm9rZS1kYXNob2Zmc2V0OiAtMTIwO1xuXHRcdH1cblx0fVxuXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWlvcy1INSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGFuaW1hdGlvbjogbG9hZGluZy1pb3MtSDUgMXMgMHMgc3RlcC1lbmQgaW5maW5pdGU7XG5cdH1cblxuXHQudW5pLWxvYWQtbW9yZV9faW1nLS1pb3MtSDU+dmlldyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGhlaWdodDogNnB4O1xuXHRcdHdpZHRoOiAycHg7XG5cdFx0bGVmdDogMTFweDtcblx0XHR0b3A6IDA7XG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogMXB4IDEycHg7XG5cdH1cblxuXHQvKiBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcbiAqL1xuXHQvKiBcdC51bmktbG9hZC1tb3JlX19pbWctLWlvcy1INT52aWV3Om50aC1jaGlsZCgjeyRpfSkge1xuICovXG5cdC8qIFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcgLSAoJGkgLSAxKSAqIDMwZGVnKTtcbiAqL1xuXHQvKiBcdFx0b3BhY2l0eTogMSAtICRpICogMC4wODtcbiAqL1xuXHQvKiBcdH1cbiAqL1xuXHQvKiB9XG4gKi9cblxuXHQudW5pLWxvYWQtbW9yZV9faW1nLS1pb3MtSDU+dmlldzpudGgtY2hpbGQoMSkge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0b3BhY2l0eTogMC45Mjtcblx0fVxuXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWlvcy1INT52aWV3Om50aC1jaGlsZCgyKSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcblx0XHRvcGFjaXR5OiAwLjg0O1xuXHR9XG5cblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0taW9zLUg1PnZpZXc6bnRoLWNoaWxkKDMpIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuXHRcdG9wYWNpdHk6IDAuNzY7XG5cdH1cblxuXHQudW5pLWxvYWQtbW9yZV9faW1nLS1pb3MtSDU+dmlldzpudGgtY2hpbGQoNCkge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG5cdFx0b3BhY2l0eTogMC42ODtcblx0fVxuXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWlvcy1INT52aWV3Om50aC1jaGlsZCg1KSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcblx0XHRvcGFjaXR5OiAwLjY7XG5cdH1cblxuXHQudW5pLWxvYWQtbW9yZV9faW1nLS1pb3MtSDU+dmlldzpudGgtY2hpbGQoNikge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG5cdFx0b3BhY2l0eTogMC41Mjtcblx0fVxuXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWlvcy1INT52aWV3Om50aC1jaGlsZCg3KSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblx0XHRvcGFjaXR5OiAwLjQ0O1xuXHR9XG5cblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0taW9zLUg1PnZpZXc6bnRoLWNoaWxkKDgpIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuXHRcdG9wYWNpdHk6IDAuMzY7XG5cdH1cblxuXHQudW5pLWxvYWQtbW9yZV9faW1nLS1pb3MtSDU+dmlldzpudGgtY2hpbGQoOSkge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG5cdFx0b3BhY2l0eTogMC4yODtcblx0fVxuXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWlvcy1INT52aWV3Om50aC1jaGlsZCgxMCkge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0XHRvcGFjaXR5OiAwLjI7XG5cdH1cblxuXHQudW5pLWxvYWQtbW9yZV9faW1nLS1pb3MtSDU+dmlldzpudGgtY2hpbGQoMTEpIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG5cdFx0b3BhY2l0eTogMC4xMjtcblx0fVxuXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWlvcy1INT52aWV3Om50aC1jaGlsZCgxMikge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcblx0XHRvcGFjaXR5OiAwLjA0O1xuXHR9XG5cblx0QGtleWZyYW1lcyBsb2FkaW5nLWlvcy1INSB7XG5cdFx0MCUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdFx0fVxuXG5cdFx0OCUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuXHRcdH1cblxuXHRcdDE2JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG5cdFx0fVxuXG5cdFx0MjQlIHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0XHR9XG5cblx0XHQzMiUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcblx0XHR9XG5cblx0XHQ0MCUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcblx0XHR9XG5cblx0XHQ0OCUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblx0XHR9XG5cblx0XHQ1NiUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcblx0XHR9XG5cblx0XHQ2NCUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcblx0XHR9XG5cblx0XHQ3MyUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcblx0XHR9XG5cblx0XHQ4MiUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcblx0XHR9XG5cblx0XHQ5MSUge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcblx0XHR9XG5cblx0XHQxMDAlIHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0fVxuXHR9XG5cblx0LyogI2VuZGlmICovXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!********************************************************************************************************************!*\
  !*** E:/headlines/headlines/components/uni-load-more.vue?vue&type=style&index=0&id=36142ffc&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_36142ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-load-more.vue?vue&type=style&index=0&id=36142ffc&scoped=true&lang=css& */ 50);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_36142ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_36142ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_36142ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_36142ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_36142ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 50 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/uni-load-more.vue?vue&type=style&index=0&id=36142ffc&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-load-more": {
    "flexDirection": "row",
    "height": "40",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "uni-load-more__text": {
    "fontSize": "15"
  },
  "uni-load-more__img": {
    "width": "24",
    "height": "24",
    "marginRight": "8"
  },
  "uni-load-more__img--nvue": {
    "color": "#666666"
  },
  "uni-load-more__img--android": {
    "width": "24",
    "height": "24",
    "transform": "rotate(0deg)"
  },
  "uni-load-more__img--ios": {
    "width": "24",
    "height": "24",
    "transform": "rotate(0deg)"
  }
}

/***/ }),
/* 51 */
/*!***********************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/left-news-item.nvue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _left_news_item_nvue_vue_type_template_id_64964fda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./left-news-item.nvue?vue&type=template&id=64964fda& */ 52);\n/* harmony import */ var _left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-news-item.nvue?vue&type=script&lang=js& */ 54);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./left-news-item.nvue?vue&type=style&index=0&lang=css& */ 56).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./left-news-item.nvue?vue&type=style&index=0&lang=css& */ 56).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _left_news_item_nvue_vue_type_template_id_64964fda___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _left_news_item_nvue_vue_type_template_id_64964fda___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6a1742c2\",\n  false,\n  _left_news_item_nvue_vue_type_template_id_64964fda___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/components/item-list/left-news-item.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0VBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbGVmdC1uZXdzLWl0ZW0ubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDk2NGZkYSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xlZnQtbmV3cy1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xlZnQtbmV3cy1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9sZWZ0LW5ld3MtaXRlbS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2xlZnQtbmV3cy1pdGVtLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI2YTE3NDJjMlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9oZWFkbGluZXMvaGVhZGxpbmVzL2NvbXBvbmVudHMvaXRlbS1saXN0L2xlZnQtbmV3cy1pdGVtLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!******************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/left-news-item.nvue?vue&type=template&id=64964fda& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_template_id_64964fda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./left-news-item.nvue?vue&type=template&id=64964fda& */ 53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_template_id_64964fda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_template_id_64964fda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_template_id_64964fda___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_template_id_64964fda___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 53 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/left-news-item.nvue?vue&type=template&id=64964fda& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["list-original"],
      class: _vm.newsItem.desc ? "list1" : "list",
      on: { click: _vm.click }
    },
    [
      _vm.newsItem.pic
        ? _c(
            "view",
            { staticClass: ["imgbox-left"] },
            [
              _c("u-image", {
                staticClass: ["img"],
                attrs: { src: _vm.newsItem.pic }
              })
            ],
            1
          )
        : _vm._e(),
      _c("view", { staticClass: ["right"] }, [
        _c("view", [
          _c("u-text", { staticClass: ["title"] }, [
            _vm._v(_vm._s(_vm.newsItem.title))
          ])
        ]),
        _c("view", [
          _vm.newsItem.desc
            ? _c("u-text", { staticClass: ["list-original-con"] }, [
                _vm._v(_vm._s(_vm.newsItem.desc))
              ])
            : _vm._e()
        ]),
        _c("view", { staticClass: ["tagbox"] }, [
          _vm.newsItem.tag && _vm.newsItem.tag.indexOf("头条") >= 0
            ? _c(
                "u-text",
                {
                  staticClass: ["label"],
                  staticStyle: { color: "#FFFFFF", backgroundColor: "#DF0000" }
                },
                [_vm._v(_vm._s(_vm.newsItem.tag))]
              )
            : _vm.newsItem.tag
            ? _c("u-text", { staticClass: ["label"] }, [
                _vm._v(_vm._s(_vm.newsItem.tag))
              ])
            : _vm._e(),
          _c("u-text", { staticClass: ["source"] }, [
            _vm._v(
              _vm._s(_vm.newsItem.from) + " " + _vm._s(_vm.newsItem.datetime)
            )
          ])
        ])
      ]),
      _c("view", {
        staticClass: ["media-item-line"],
        staticStyle: { position: "absolute" }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 54 */
/*!************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/left-news-item.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./left-news-item.nvue?vue&type=script&lang=js& */ 55);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZhLENBQWdCLHlkQUFHLEVBQUMiLCJmaWxlIjoiNTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGVmdC1uZXdzLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xlZnQtbmV3cy1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/left-news-item.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 =\n{\n  props: {\n    newsItem: {\n      type: Object,\n      default: function _default(e) {\n        return {};\n      } },\n\n    picPosition: {\n      type: String,\n      default: 'right' } },\n\n\n  methods: {\n    click: function click() {\n      this.$emit('click');\n    },\n    close: function close(e) {\n      e.stopPropagation();\n      this.$emit('close');\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9pdGVtLWxpc3QvbGVmdC1uZXdzLWl0ZW0ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQURBOztBQU9BO0FBQ0Esa0JBREE7QUFFQSxzQkFGQSxFQVBBLEVBREE7OztBQWFBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFNBSkEsaUJBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBLEtBUEEsRUFiQSxFIiwiZmlsZSI6IjU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibGlzdC1vcmlnaW5hbFwiIDpjbGFzcz1cIm5ld3NJdGVtLmRlc2M/J2xpc3QxJzonbGlzdCdcIiBAY2xpY2s9XCJjbGlja1wiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbWdib3gtbGVmdFwiIHYtaWY9XCJuZXdzSXRlbS5waWNcIj5cclxuXHRcdFx0PGltYWdlIGNsYXNzPVwiaW1nXCIgOnNyYz1cIm5ld3NJdGVtLnBpY1wiPjwvaW1hZ2U+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0XCI+XHJcblx0XHRcdDx2aWV3Pjx0ZXh0IGNsYXNzPVwidGl0bGVcIj57e25ld3NJdGVtLnRpdGxlfX08L3RleHQ+PC92aWV3PlxyXG5cdFx0XHQ8dmlldz5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpc3Qtb3JpZ2luYWwtY29uXCIgdi1pZj1cIm5ld3NJdGVtLmRlc2NcIj57e25ld3NJdGVtLmRlc2N9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZ2JveFwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGFiZWxcIiBzdHlsZT1cImNvbG9yOiAjRkZGRkZGOyBiYWNrZ3JvdW5kLWNvbG9yOiAjREYwMDAwO1wiIHYtaWY9XCJuZXdzSXRlbS50YWcgJiYgbmV3c0l0ZW0udGFnLmluZGV4T2YoJ+WktOadoScpID49MFwiPnt7bmV3c0l0ZW0udGFnfX08L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJsYWJlbFwiIHYtZWxzZS1pZj1cIm5ld3NJdGVtLnRhZ1wiPnt7bmV3c0l0ZW0udGFnfX08L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJzb3VyY2VcIj57e25ld3NJdGVtLmZyb219fSB7e25ld3NJdGVtLmRhdGV0aW1lfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWVkaWEtaXRlbS1saW5lXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7XCI+PC92aWV3PlxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG5ld3NJdGVtOiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiB7fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cGljUG9zaXRpb246IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ3JpZ2h0J1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UoZSkge1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xvc2UnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5saXN0IHtcblx0cGFkZGluZzogMzVycHggMzJycHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubGlzdDEge1xuXHRwYWRkaW5nOiAzNXJweCAzMnJweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRib3JkZXItdG9wLWNvbG9yOiAjZWJlYmViO1xuXHRib3JkZXItdG9wLXdpZHRoOiAxcnB4O1xufVxuLnRpdGxlIHtcblx0Zm9udC1zaXplOiAzNHJweDtcblx0bGluZS1oZWlnaHQ6NDBycHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRtYXJnaW4tYm90dG9tOiAxNHJweDtcbn1cblxuLnRhZ2JveCB7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5sYWJlbCB7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGZvbnQtc2l6ZTogMjBycHg7XG5cdGNvbG9yOiAjREYwMDAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRwYWRkaW5nOiAycnB4IDVycHg7XG5cdG1hcmdpbi1yaWdodDogMThycHg7XG5cdGJvcmRlci1yYWRpdXM6IDVycHg7XG5cdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdGJvcmRlci1jb2xvcjogICNERjAwMDA7XG5cdGJvcmRlci13aWR0aDogMXJweDtcbn1cblxuLnNvdXJjZSB7XG5cdGNvbG9yOiAjQUFCMEJCO1xuXHRmb250LXNpemU6IDI0cnB4O1xufVxuXG4uc3ViLWxpc3Qge1xuXHRtYXJnaW4tYm90dG9tOiAzMnJweDtcbn1cblxuLnN1Yi10aXRsZSB7XG5cdGZvbnQtc2l6ZTogMjZycHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWItc291cmNlIHtcblx0Zm9udC1zaXplOiAxOHJweDtcblx0Y29sb3I6ICNBQUIwQkI7XG5cdHBhZGRpbmctbGVmdDogMjZycHg7XG59XG5cbi5saXN0LW9yaWdpbmFsIHtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxuXG4ubGVmdCB7XG5cdGZsZXg6IDE7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnJpZ2h0IHtcblx0ZmxleDogMTtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRtYXJnaW4tbGVmdDogMjBycHg7XHJcbn1cclxuLmltZ2JveC1sZWZ0IHtcblx0d2lkdGg6IDE3MHJweDtcblx0aGVpZ2h0OiAxNzBycHg7XG59XG5cbi5pbWdib3gge1xuXHR3aWR0aDogMTcwcnB4O1xuXHRoZWlnaHQ6IDE3MHJweDtcblx0bWFyZ2luLWxlZnQ6IDMwcnB4O1xufVxyXG5cblxuLmltZyB7XG5cdHdpZHRoOiAxNzBycHg7XG5cdGhlaWdodDogMTcwcnB4O1xufVxuXG4udGl0bGUge1xuXHRmb250LXNpemU6IDMycnB4O1xuXHRsaW5lLWhlaWdodDo1MHJweDtcclxuXHRsaW5lczoyO1xyXG5cdHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XG59XG5cbi5saXN0LW9yaWdpbmFsLWNvbiB7XG5cdGNvbG9yOiAjNDY0NjQ2O1xuXHRmb250LXNpemU6IDI0cnB4O1xuXHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHRsaW5lczoyO1xyXG5cdHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XG59XG5cbi50YWdib3gge1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRtYXJnaW4tYm90dG9tOiAwO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxyXG4ubWVkaWEtaXRlbS1saW5lIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMzB1cHg7XHJcblx0cmlnaHQ6IDMwdXB4O1xyXG5cdGJvdHRvbTogMDtcclxuXHRoZWlnaHQ6IDF1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVx0XHRcclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!********************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/left-news-item.nvue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./left-news-item.nvue?vue&type=style&index=0&lang=css& */ 57);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_left_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/left-news-item.nvue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "paddingTop": "35rpx",
    "paddingRight": "32rpx",
    "paddingBottom": "35rpx",
    "paddingLeft": "32rpx",
    "position": "relative"
  },
  "list1": {
    "paddingTop": "35rpx",
    "paddingRight": "32rpx",
    "paddingBottom": "35rpx",
    "paddingLeft": "32rpx",
    "position": "relative",
    "alignItems": "flex-start",
    "borderTopColor": "#ebebeb",
    "borderTopWidth": "1rpx"
  },
  "title": {
    "fontSize": "32rpx",
    "lineHeight": "50rpx",
    "fontWeight": "bold",
    "marginBottom": "14rpx",
    "lines": 2,
    "textOverflow": "ellipsis"
  },
  "tagbox": {
    "flexDirection": "row",
    "marginBottom": 0,
    "alignItems": "center"
  },
  "label": {
    "flexDirection": "row",
    "fontSize": "20rpx",
    "color": "#DF0000",
    "backgroundColor": "#FFFFFF",
    "paddingTop": "2rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "2rpx",
    "paddingLeft": "5rpx",
    "marginRight": "18rpx",
    "borderRadius": "5rpx",
    "borderStyle": "solid",
    "borderColor": "#DF0000",
    "borderWidth": "1rpx"
  },
  "source": {
    "color": "#AAB0BB",
    "fontSize": "24rpx"
  },
  "sub-list": {
    "marginBottom": "32rpx"
  },
  "sub-title": {
    "fontSize": "26rpx",
    "position": "relative",
    "fontWeight": "bold",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "sub-source": {
    "fontSize": "18rpx",
    "color": "#AAB0BB",
    "paddingLeft": "26rpx"
  },
  "list-original": {
    "flexDirection": "row"
  },
  "left": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  "right": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "space-between",
    "marginLeft": "20rpx"
  },
  "imgbox-left": {
    "width": "170rpx",
    "height": "170rpx"
  },
  "imgbox": {
    "width": "170rpx",
    "height": "170rpx",
    "marginLeft": "30rpx"
  },
  "img": {
    "width": "170rpx",
    "height": "170rpx"
  },
  "list-original-con": {
    "color": "#464646",
    "fontSize": "24rpx",
    "marginBottom": "20rpx",
    "lines": 2,
    "textOverflow": "ellipsis"
  },
  "media-item-line": {
    "position": "absolute",
    "left": "30upx",
    "right": "30upx",
    "bottom": 0,
    "height": "1upx",
    "backgroundColor": "#ebebeb"
  }
}

/***/ }),
/* 58 */
/*!***********************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-pics-item.nvue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news_pics_item_nvue_vue_type_template_id_72b384c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-pics-item.nvue?vue&type=template&id=72b384c6&scoped=true& */ 59);\n/* harmony import */ var _news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-pics-item.nvue?vue&type=script&lang=js& */ 61);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./news-pics-item.nvue?vue&type=style&index=0&id=72b384c6&scoped=true&lang=css& */ 63).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./news-pics-item.nvue?vue&type=style&index=0&id=72b384c6&scoped=true&lang=css& */ 63).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _news_pics_item_nvue_vue_type_template_id_72b384c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _news_pics_item_nvue_vue_type_template_id_72b384c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"72b384c6\",\n  \"783477ae\",\n  false,\n  _news_pics_item_nvue_vue_type_template_id_72b384c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/components/item-list/news-pics-item.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUFnRjtBQUNwSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0ZBQWdGO0FBQ3pJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmV3cy1waWNzLWl0ZW0ubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MmIzODRjNiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25ld3MtcGljcy1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25ld3MtcGljcy1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9uZXdzLXBpY3MtaXRlbS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzJiMzg0YzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL25ld3MtcGljcy1pdGVtLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MmIzODRjNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3MmIzODRjNlwiLFxuICBcIjc4MzQ3N2FlXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L2hlYWRsaW5lcy9oZWFkbGluZXMvY29tcG9uZW50cy9pdGVtLWxpc3QvbmV3cy1waWNzLWl0ZW0ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///58\n");

/***/ }),
/* 59 */
/*!******************************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-pics-item.nvue?vue&type=template&id=72b384c6&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_template_id_72b384c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-pics-item.nvue?vue&type=template&id=72b384c6&scoped=true& */ 60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_template_id_72b384c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_template_id_72b384c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_template_id_72b384c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_template_id_72b384c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 60 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/news-pics-item.nvue?vue&type=template&id=72b384c6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["list-block", "list", "line-bottom"],
      on: {
        click: function($event) {
          _vm.click()
        }
      }
    },
    [
      _c("u-text", { staticClass: ["title"] }, [
        _vm._v(_vm._s(_vm.newsItem.title))
      ]),
      _c(
        "scroll-view",
        {
          staticClass: ["near-scroll", "imgbox-more"],
          attrs: { scrollX: "true" }
        },
        _vm._l(_vm.newsItem.imglist, function(item, index) {
          return _c("u-image", {
            key: item.id,
            staticClass: ["img"],
            attrs: { src: item }
          })
        }),
        1
      ),
      _vm.newsNick
        ? _c("view", { staticClass: ["source-pics"] }, [
            _c(
              "view",
              { staticClass: ["source-user"] },
              [
                _c("u-image", {
                  staticClass: ["source-icon-pics"],
                  attrs: {
                    src: _vm.newsItem.headimgurl
                      ? _vm.newsItem.headimgurl
                      : "/static/img/home/home_icon3@3x.png"
                  }
                }),
                _c("u-text", { staticClass: ["source-txt-pics"] }, [
                  _vm._v(_vm._s(_vm.newsItem.nickname))
                ])
              ],
              1
            ),
            _c("u-text", { staticClass: ["source-time-pics"] }, [
              _vm._v(_vm._s(_vm.newsItem.datetime))
            ])
          ])
        : _c("view", { staticClass: ["source"] }, [
            _c("u-text", { staticClass: ["txt"] }, [
              _vm._v(_vm._s(_vm.newsItem.from))
            ]),
            _c("u-text", { staticClass: ["txt"] }, [
              _vm._v(_vm._s(_vm.newsItem.datetime))
            ])
          ]),
      _c("view", {
        staticClass: ["media-item-line"],
        staticStyle: { position: "absolute" }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 61 */
/*!************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-pics-item.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-pics-item.nvue?vue&type=script&lang=js& */ 62);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZhLENBQWdCLHlkQUFHLEVBQUMiLCJmaWxlIjoiNjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmV3cy1waWNzLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25ld3MtcGljcy1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///61\n");

/***/ }),
/* 62 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/news-pics-item.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 =\n{\n  props: {\n    newsItem: {\n      type: Object,\n      default: function _default(e) {\n        return {};\n      } },\n\n    newsNick: {\n      type: Boolean,\n      default: false } },\n\n\n  methods: {\n    click: function click() {\n      this.$emit('click');\n    },\n    close: function close(e) {\n      e.stopPropagation();\n      this.$emit('close');\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9pdGVtLWxpc3QvbmV3cy1waWNzLWl0ZW0ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUFEQTs7QUFPQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFQQSxFQURBOzs7QUFhQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxTQUpBLGlCQUlBLENBSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBLEVBYkEsRSIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImxpc3QtYmxvY2sgbGlzdCBsaW5lLWJvdHRvbVwiIEBjbGljaz1cImNsaWNrKClcIj5cclxuXHRcdDx0ZXh0IGNsYXNzPVwidGl0bGVcIj57e25ld3NJdGVtLnRpdGxlfX08L3RleHQ+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJuZWFyLXNjcm9sbCBpbWdib3gtbW9yZVwiIHNjcm9sbC14PVwidHJ1ZVwiPlxyXG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpbWdcIiA6c3JjPVwiaXRlbVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBuZXdzSXRlbS5pbWdsaXN0XCIgOmtleT1cIml0ZW0uaWRcIj48L2ltYWdlPlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwic291cmNlLXBpY3NcIiB2LWlmPVwibmV3c05pY2tcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzb3VyY2UtdXNlclwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cInNvdXJjZS1pY29uLXBpY3NcIiA6c3JjPVwibmV3c0l0ZW0uaGVhZGltZ3VybD9uZXdzSXRlbS5oZWFkaW1ndXJsOicvc3RhdGljL2ltZy9ob21lL2hvbWVfaWNvbjNAM3gucG5nJ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJzb3VyY2UtdHh0LXBpY3NcIj57e25ld3NJdGVtLm5pY2tuYW1lfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJzb3VyY2UtdGltZS1waWNzXCI+e3tuZXdzSXRlbS5kYXRldGltZX19PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzb3VyY2VcIiB2LWVsc2U+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidHh0XCI+e3tuZXdzSXRlbS5mcm9tfX08L3RleHQ+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidHh0XCI+e3tuZXdzSXRlbS5kYXRldGltZX19PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtZWRpYS1pdGVtLWxpbmVcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtcIj48L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRuZXdzSXRlbToge1xyXG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0XHRkZWZhdWx0OiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG5ld3NOaWNrOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZShlKSB7XHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbG9zZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0Lmxpc3QtYmxvY2sge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBhZGRpbmc6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGxpbmVzOiAyO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuc291cmNlIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQudHh0IHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTAwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjQUFCMEJCO1xyXG5cdH1cclxuXHJcblxyXG5cdC5pbWdib3gtbW9yZSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHR9XHJcblxyXG5cdC5pbWcge1xyXG5cdFx0d2lkdGg6IDIxMHJweDtcclxuXHRcdGhlaWdodDogMTc3cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5tZWRpYS1pdGVtLWxpbmUge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMHVweDtcclxuXHRcdHJpZ2h0OiAwdXB4O1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0aGVpZ2h0OiAxdXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuXHR9XHJcblx0LnNvdXJjZS1waWNzIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHR9XHJcblx0XHQuc291cmNlLXVzZXJ7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHR9XHJcblx0XHQuc291cmNlLWljb24tcGljc3tcclxuXHRcdFx0d2lkdGg6NDVycHg7XHJcblx0XHRcdGhlaWdodDo0NXJweDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiA4cnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdH1cclxuXHRcdC5zb3VyY2UtdHh0LXBpY3N7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdFx0Y29sb3I6I0FBQjBCQjtcclxuXHRcdH1cclxuXHRcdC5zb3VyY2UtdGltZS1waWNze1xyXG5cdFx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHRjb2xvcjojQUFCMEJCO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDgwcnB4O1xyXG5cdFx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///62\n");

/***/ }),
/* 63 */
/*!********************************************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-pics-item.nvue?vue&type=style&index=0&id=72b384c6&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_style_index_0_id_72b384c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-pics-item.nvue?vue&type=style&index=0&id=72b384c6&scoped=true&lang=css& */ 64);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_style_index_0_id_72b384c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_style_index_0_id_72b384c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_style_index_0_id_72b384c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_style_index_0_id_72b384c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_pics_item_nvue_vue_type_style_index_0_id_72b384c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 64 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/news-pics-item.nvue?vue&type=style&index=0&id=72b384c6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "list-block": {
    "flexDirection": "column",
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx"
  },
  "title": {
    "lines": 2,
    "textOverflow": "ellipsis",
    "marginBottom": "30rpx",
    "fontSize": "32rpx"
  },
  "source": {
    "flexDirection": "row"
  },
  "txt": {
    "marginRight": "100rpx",
    "fontSize": "24rpx",
    "color": "#AAB0BB"
  },
  "imgbox-more": {
    "marginBottom": "24rpx",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "img": {
    "width": "210rpx",
    "height": "177rpx",
    "marginRight": "30rpx"
  },
  "media-item-line": {
    "position": "absolute",
    "left": "0upx",
    "right": "0upx",
    "bottom": 0,
    "height": "1upx",
    "backgroundColor": "#ebebeb"
  },
  "source-pics": {
    "width": 100,
    "flexDirection": "row"
  },
  "source-user": {
    "flexDirection": "row",
    "alignItems": "center",
    "flex": 1,
    "width": 80
  },
  "source-icon-pics": {
    "width": "45rpx",
    "height": "45rpx",
    "marginRight": "8rpx",
    "borderRadius": "20rpx"
  },
  "source-txt-pics": {
    "marginLeft": "10rpx",
    "fontSize": "24rpx",
    "color": "#AAB0BB"
  },
  "source-time-pics": {
    "fontSize": "24rpx",
    "color": "#AAB0BB",
    "marginRight": "80rpx"
  }
}

/***/ }),
/* 65 */
/*!*************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-bigpic-item.nvue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news_bigpic_item_nvue_vue_type_template_id_2bebc93e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-bigpic-item.nvue?vue&type=template&id=2bebc93e& */ 66);\n/* harmony import */ var _news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-bigpic-item.nvue?vue&type=script&lang=js& */ 68);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./news-bigpic-item.nvue?vue&type=style&index=0&lang=scss& */ 70).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./news-bigpic-item.nvue?vue&type=style&index=0&lang=scss& */ 70).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _news_bigpic_item_nvue_vue_type_template_id_2bebc93e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _news_bigpic_item_nvue_vue_type_template_id_2bebc93e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5138466c\",\n  false,\n  _news_bigpic_item_nvue_vue_type_template_id_2bebc93e___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/components/item-list/news-bigpic-item.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEyRDtBQUMvRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTJEO0FBQ3BIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmV3cy1iaWdwaWMtaXRlbS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZWJjOTNlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbmV3cy1iaWdwaWMtaXRlbS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9uZXdzLWJpZ3BpYy1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9uZXdzLWJpZ3BpYy1pdGVtLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL25ld3MtYmlncGljLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1MTM4NDY2Y1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9oZWFkbGluZXMvaGVhZGxpbmVzL2NvbXBvbmVudHMvaXRlbS1saXN0L25ld3MtYmlncGljLWl0ZW0ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///65\n");

/***/ }),
/* 66 */
/*!********************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-bigpic-item.nvue?vue&type=template&id=2bebc93e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_template_id_2bebc93e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-bigpic-item.nvue?vue&type=template&id=2bebc93e& */ 67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_template_id_2bebc93e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_template_id_2bebc93e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_template_id_2bebc93e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_template_id_2bebc93e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 67 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/news-bigpic-item.nvue?vue&type=template&id=2bebc93e& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["videolist"], on: { click: _vm.click } }, [
    _c("view", { staticClass: ["inner"] }, [
      _c("u-text", { staticClass: ["video-title"] }, [
        _vm._v(_vm._s(_vm.newsItem.title))
      ]),
      _c(
        "view",
        { staticClass: ["picbox"] },
        [
          _c("u-image", {
            staticClass: ["pic"],
            attrs: { src: _vm.newsItem.pic }
          })
        ],
        1
      ),
      _c("view", { staticClass: ["bt-bar"] }, [
        _c("view", { staticClass: ["videolist-txt"] }, [
          _vm.newsItem.tag
            ? _c("u-text", { staticClass: ["label"] }, [
                _vm._v(_vm._s(_vm.newsItem.tag))
              ])
            : _vm._e(),
          _vm.newsItem.from
            ? _c("u-text", { staticClass: ["source"] }, [
                _vm._v(_vm._s(_vm.newsItem.from))
              ])
            : _vm._e(),
          _vm.newsItem.datetime
            ? _c("u-text", { staticClass: ["source"] }, [
                _vm._v(_vm._s(_vm.newsItem.datetime))
              ])
            : _vm._e()
        ]),
        _vm.shareFlag && _vm.newsItem.url
          ? _c(
              "view",
              { staticClass: ["videolist-txt"], on: { click: _vm.share } },
              [
                _c(
                  "view",
                  { staticClass: ["videolist-iconbox"] },
                  [
                    _c("u-image", {
                      staticClass: ["videolist-icon"],
                      attrs: { src: "/static/img/common/l_fx@3x.png" }
                    }),
                    _c("u-text", { staticClass: ["videolist-txt"] }, [
                      _vm._v("分享")
                    ])
                  ],
                  1
                )
              ]
            )
          : _vm._e()
      ])
    ]),
    _c("view", {
      staticClass: ["media-item-line"],
      staticStyle: { position: "absolute" }
    })
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 68 */
/*!**************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-bigpic-item.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-bigpic-item.nvue?vue&type=script&lang=js& */ 69);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSthLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiNjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmV3cy1iaWdwaWMtaXRlbS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmV3cy1iaWdwaWMtaXRlbS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///68\n");

/***/ }),
/* 69 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/news-bigpic-item.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 =\n{\n  props: {\n    newsItem: {\n      type: Object,\n      default: function _default(e) {\n        return {};\n      } },\n\n    shareFlag: {\n      type: Boolean,\n      default: function _default(e) {\n        return false;\n      } } },\n\n\n  created: function created() {\n    // console.log(ewsItem: \" + JSON.stringify(this.newsItem));\n  },\n  methods: {\n    click: function click() {\n      this.$emit('click');\n    },\n    share: function share(e) {\n      e.stopPropagation();\n      this.$emit('share');\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9pdGVtLWxpc3QvbmV3cy1iaWdwaWMtaXRlbS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUFEQTs7QUFPQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUFQQSxFQURBOzs7QUFlQSxTQWZBLHFCQWVBO0FBQ0E7QUFDQSxHQWpCQTtBQWtCQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxTQUpBLGlCQUlBLENBSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBLEVBbEJBLEUiLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ2aWRlb2xpc3RcIiBAY2xpY2s9XCJjbGlja1wiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbm5lclwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInZpZGVvLXRpdGxlXCI+e3tuZXdzSXRlbS50aXRsZX19PC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBpY2JveFwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cInBpY1wiIDpzcmM9XCJuZXdzSXRlbS5waWNcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYnQtYmFyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWRlb2xpc3QtdHh0XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxhYmVsXCIgdi1pZj1cIm5ld3NJdGVtLnRhZ1wiPnt7bmV3c0l0ZW0udGFnfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvdXJjZVwiIHYtaWY9XCJuZXdzSXRlbS5mcm9tXCI+e3tuZXdzSXRlbS5mcm9tfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvdXJjZVwiIHYtaWY9XCJuZXdzSXRlbS5kYXRldGltZVwiPnt7bmV3c0l0ZW0uZGF0ZXRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInNoYXJlRmxhZyAmJiBuZXdzSXRlbS51cmxcIiBjbGFzcz1cInZpZGVvbGlzdC10eHRcIiBAY2xpY2suc3RvcD1cInNoYXJlXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvbGlzdC1pY29uYm94XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInZpZGVvbGlzdC1pY29uXCIgc3JjPVwiL3N0YXRpYy9pbWcvY29tbW9uL2xfZnhAM3gucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aWRlb2xpc3QtdHh0XCI+5YiG5LqrPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtZWRpYS1pdGVtLWxpbmVcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtcIj48L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRuZXdzSXRlbToge1xyXG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0XHRkZWZhdWx0OiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNoYXJlRmxhZzp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhld3NJdGVtOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMubmV3c0l0ZW0pKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNoYXJlKGUpIHtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3NoYXJlJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0LnZpZGVvbGlzdCB7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHVweDtcclxuXHRcdHBhZGRpbmc6IDB1cHggMzB1cHg7XHJcblx0XHQvLyBib3JkZXItYm90dG9tLWNvbG9yOiAjZWJlYmViO1xyXG5cdFx0Ly8gYm9yZGVyLWJvdHRvbS13aWR0aDogMXJweDtcclxuXHR9XHJcblxyXG5cdC52aWRlbyB7XHJcblx0XHR3aWR0aDogNjkwdXB4O1xyXG5cdFx0aGVpZ2h0OiAzODl1cHg7XHJcblx0fVxyXG5cclxuXHQudmlkZW8tdGl0bGUge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzB1cHg7XHJcblx0XHRmb250LXNpemU6IDM0cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQuYnQtYmFyIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnZpZGVvbGlzdC10eHQge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogIzlmOWY5ZjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5zb3VyY2Uge1xyXG5cdFx0Y29sb3I6ICNBQUIwQkI7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC52aWRlb2xpc3QtaWNvbmJveCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDMwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC52aWRlb2xpc3QtaWNvbiB7XHJcblx0XHR3aWR0aDogMzB1cHg7XHJcblx0XHRoZWlnaHQ6IDMwdXB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA1dXB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTV1cHg7XHJcblx0fVxyXG5cdC5sYWJlbCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjREYwMDAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHBhZGRpbmc6IDJycHggNXJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogI0RGMDAwMDtcclxuXHRcdGJvcmRlci13aWR0aDogMXJweDtcclxuXHR9XHJcbi5zb3VyY2Uge1xyXG5cdFx0Y29sb3I6ICNBQUIwQkI7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblx0LnBpY2JveCB7XHJcblx0XHRoZWlnaHQ6IDM5MnJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjc7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5waWMge1xyXG5cdFx0d2lkdGg6IDY5MHJweDtcclxuXHRcdGhlaWdodDogMzkycnB4O1xyXG5cdH1cclxuXHJcblx0LnZpZGVvbGlzdC10aXRsZSB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAzMHJweCAwIDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LnZpZGVvbGlzdC10aXRsZS1waWMge1xyXG5cdFx0d2lkdGg6IDEzM3JweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQubWVkaWEtaXRlbS1saW5lIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDB1cHg7XHJcblx0XHRyaWdodDogMHVweDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGhlaWdodDogMXVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///69\n");

/***/ }),
/* 70 */
/*!***********************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-bigpic-item.nvue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-bigpic-item.nvue?vue&type=style&index=0&lang=scss& */ 71);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_bigpic_item_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 71 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/news-bigpic-item.nvue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "status_bar": {
    "width": 100
  },
  "videolist": {
    "marginTop": "20upx",
    "paddingTop": "0upx",
    "paddingRight": "30upx",
    "paddingBottom": "0upx",
    "paddingLeft": "30upx"
  },
  "video": {
    "width": "690upx",
    "height": "389upx"
  },
  "video-title": {
    "marginBottom": "30upx",
    "fontSize": "34rpx",
    "fontWeight": "bold"
  },
  "bt-bar": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingBottom": "20rpx"
  },
  "videolist-txt": {
    "flexDirection": "row",
    "alignItems": "center",
    "color": "#9f9f9f",
    "fontSize": "24rpx"
  },
  "source": {
    "color": "#AAB0BB",
    "fontSize": "24rpx",
    "marginRight": "20rpx"
  },
  "videolist-iconbox": {
    "flexDirection": "row",
    "marginLeft": "30rpx",
    "alignItems": "center"
  },
  "videolist-icon": {
    "width": "30upx",
    "height": "30upx",
    "marginRight": "5upx",
    "marginTop": "-5upx"
  },
  "label": {
    "flexDirection": "row",
    "fontSize": "20rpx",
    "color": "#DF0000",
    "backgroundColor": "#FFFFFF",
    "paddingTop": "2rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "2rpx",
    "paddingLeft": "5rpx",
    "marginRight": "20rpx",
    "borderRadius": "5rpx",
    "borderStyle": "solid",
    "borderColor": "#DF0000",
    "borderWidth": "1rpx"
  },
  "picbox": {
    "height": "392rpx",
    "backgroundColor": "#f3f5f7",
    "marginBottom": "20rpx"
  },
  "pic": {
    "width": "690rpx",
    "height": "392rpx"
  },
  "videolist-title": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "videolist-title-pic": {
    "width": "133rpx",
    "height": "32rpx"
  },
  "media-item-line": {
    "position": "absolute",
    "left": "0upx",
    "right": "0upx",
    "bottom": 0,
    "height": "1upx",
    "backgroundColor": "#ebebeb"
  }
}

/***/ }),
/* 72 */
/*!************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-video-item.nvue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news_video_item_nvue_vue_type_template_id_45d85553_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-video-item.nvue?vue&type=template&id=45d85553&scoped=true& */ 73);\n/* harmony import */ var _news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-video-item.nvue?vue&type=script&lang=js& */ 75);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./news-video-item.nvue?vue&type=style&index=0&id=45d85553&scoped=true&lang=css& */ 77).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./news-video-item.nvue?vue&type=style&index=0&id=45d85553&scoped=true&lang=css& */ 77).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _news_video_item_nvue_vue_type_template_id_45d85553_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _news_video_item_nvue_vue_type_template_id_45d85553_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"45d85553\",\n  \"1eecbf72\",\n  false,\n  _news_video_item_nvue_vue_type_template_id_45d85553_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/components/item-list/news-video-item.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmV3cy12aWRlby1pdGVtLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDVkODU1NTMmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9uZXdzLXZpZGVvLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmV3cy12aWRlby1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9uZXdzLXZpZGVvLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1ZDg1NTUzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9uZXdzLXZpZGVvLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1ZDg1NTUzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ1ZDg1NTUzXCIsXG4gIFwiMWVlY2JmNzJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovaGVhZGxpbmVzL2hlYWRsaW5lcy9jb21wb25lbnRzL2l0ZW0tbGlzdC9uZXdzLXZpZGVvLWl0ZW0ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///72\n");

/***/ }),
/* 73 */
/*!*******************************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-video-item.nvue?vue&type=template&id=45d85553&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_template_id_45d85553_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-video-item.nvue?vue&type=template&id=45d85553&scoped=true& */ 74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_template_id_45d85553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_template_id_45d85553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_template_id_45d85553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_template_id_45d85553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 74 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/news-video-item.nvue?vue&type=template&id=45d85553&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.newsItem.title
    ? _c(
        "view",
        { staticClass: ["media-item", "view"], on: { click: _vm.click } },
        [
          _c("view", { staticClass: ["title"] }, [
            _c(
              "u-text",
              {
                staticClass: ["title-txt"],
                class: _vm.newsNick ? "txt1" : "txt"
              },
              [_vm._v(_vm._s(_vm.newsItem.title))]
            )
          ]),
          _c(
            "view",
            { staticClass: ["videobox"] },
            [
              _c("u-video", {
                staticClass: ["video"],
                staticStyle: { width: "690rpx", height: "389rpx" },
                attrs: {
                  id: _vm.newsItem.id,
                  src: _vm.newsItem.video_url,
                  poster: _vm.newsItem.pic,
                  playBtnPosition: "center"
                },
                on: { play: _vm.videoPlay }
              })
            ],
            1
          ),
          _vm.newsNick
            ? _c("view", { staticClass: ["source-pics"] }, [
                _c(
                  "view",
                  { staticClass: ["source-user"] },
                  [
                    _c("u-image", {
                      staticClass: ["source-icon-pics"],
                      attrs: {
                        src: _vm.newsItem.headimgurl
                          ? _vm.newsItem.headimgurl
                          : "/static/img/home/home_icon3@3x.png"
                      }
                    }),
                    _c("u-text", { staticClass: ["source-txt-pics"] }, [
                      _vm._v(_vm._s(_vm.newsItem.nickname))
                    ])
                  ],
                  1
                ),
                _c("u-text", { staticClass: ["source-time-pics"] }, [
                  _vm._v(_vm._s(_vm.newsItem.datetime))
                ])
              ])
            : _c("view", { staticClass: ["tagbox"] }, [
                _vm.newsItem.tag
                  ? _c("u-text", { staticClass: ["label"] }, [
                      _vm._v(_vm._s(_vm.newsItem.tag))
                    ])
                  : _vm._e(),
                _c("u-text", { staticClass: ["source"] }, [
                  _vm._v(_vm._s(_vm.newsItem.from))
                ]),
                _c("u-text", { staticClass: ["source"] }, [
                  _vm._v(_vm._s(_vm.newsItem.datetime))
                ])
              ]),
          _c("view", {
            staticClass: ["media-item-line"],
            staticStyle: { position: "absolute" }
          })
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 75 */
/*!*************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-video-item.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-video-item.nvue?vue&type=script&lang=js& */ 76);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThhLENBQWdCLDBkQUFHLEVBQUMiLCJmaWxlIjoiNzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmV3cy12aWRlby1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uZXdzLXZpZGVvLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///75\n");

/***/ }),
/* 76 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/news-video-item.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 =\n{\n  props: {\n    newsItem: {\n      type: Object,\n      default: function _default(e) {\n        return {};\n      } },\n\n    newsNick: {\n      type: Boolean,\n      default: false } },\n\n\n  created: function created() {\n    // this.newsItem.video_url = \"https://cdn.0791look.com/data/attachment/2020/0410/20200410164945I7lZYZ.mp4\";\n  },\n  methods: {\n    videoPlay: function videoPlay() {\n      this.$emit('videoPlay', this.newsItem);\n    },\n    click: function click() {\n      this.$emit('click');\n    },\n    close: function close(e) {\n      e.stopPropagation();\n      this.$emit('close');\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9pdGVtLWxpc3QvbmV3cy12aWRlby1pdGVtLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQURBOztBQU9BO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQVBBLEVBREE7OztBQWFBLFNBYkEscUJBYUE7QUFDQTtBQUNBLEdBZkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFNBSkEsbUJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxTQVBBLGlCQU9BLENBUEEsRUFPQTtBQUNBO0FBQ0E7QUFDQSxLQVZBLEVBaEJBLEUiLCJmaWxlIjoiNzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJtZWRpYS1pdGVtIHZpZXdcIiB2LWlmPVwibmV3c0l0ZW0udGl0bGVcIiBAY2xpY2s9XCJjbGlja1wiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLXR4dFwiIDpjbGFzcz1cIm5ld3NOaWNrPyd0eHQxJzondHh0J1wiPnt7bmV3c0l0ZW0udGl0bGV9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidmlkZW9ib3hcIj5cclxuXHRcdFx0PHZpZGVvIGNsYXNzPVwidmlkZW9cIiA6aWQ9XCJuZXdzSXRlbS5pZFwiIDpzcmM9XCJuZXdzSXRlbS52aWRlb191cmxcIiA6cG9zdGVyPVwibmV3c0l0ZW0ucGljXCIgcGxheS1idG4tcG9zaXRpb249XCJjZW50ZXJcIlxyXG5cdFx0XHQgc3R5bGU9XCJ3aWR0aDo2OTBycHg7aGVpZ2h0OjM4OXJweDtcIiBAcGxheT1cInZpZGVvUGxheVwiPjwvdmlkZW8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInNvdXJjZS1waWNzXCIgdi1pZj1cIm5ld3NOaWNrXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic291cmNlLXVzZXJcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJzb3VyY2UtaWNvbi1waWNzXCIgOnNyYz1cIm5ld3NJdGVtLmhlYWRpbWd1cmw/bmV3c0l0ZW0uaGVhZGltZ3VybDonL3N0YXRpYy9pbWcvaG9tZS9ob21lX2ljb24zQDN4LnBuZydcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwic291cmNlLXR4dC1waWNzXCI+e3tuZXdzSXRlbS5uaWNrbmFtZX19PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwic291cmNlLXRpbWUtcGljc1wiPnt7bmV3c0l0ZW0uZGF0ZXRpbWV9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGFnYm94XCIgdi1lbHNlPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImxhYmVsXCIgdi1pZj1cIm5ld3NJdGVtLnRhZ1wiPnt7bmV3c0l0ZW0udGFnfX08L3RleHQ+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwic291cmNlXCI+e3tuZXdzSXRlbS5mcm9tfX08L3RleHQ+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwic291cmNlXCI+e3tuZXdzSXRlbS5kYXRldGltZX19PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtZWRpYS1pdGVtLWxpbmVcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtcIj48L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRuZXdzSXRlbToge1xyXG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0XHRkZWZhdWx0OiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG5ld3NOaWNrOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Ly8gdGhpcy5uZXdzSXRlbS52aWRlb191cmwgPSBcImh0dHBzOi8vY2RuLjA3OTFsb29rLmNvbS9kYXRhL2F0dGFjaG1lbnQvMjAyMC8wNDEwLzIwMjAwNDEwMTY0OTQ1STdsWllaLm1wNFwiO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0dmlkZW9QbGF5OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCd2aWRlb1BsYXknLCB0aGlzLm5ld3NJdGVtKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UoZSkge1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xvc2UnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC52aWV3IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHJcblx0Lm1lZGlhLWl0ZW0ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nOiAyMHVweCAzMHVweCAyMXVweCAzMHVweDtcclxuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0Lm1lZGlhLWl0ZW0tbGluZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwdXB4O1xyXG5cdFx0cmlnaHQ6IDB1cHg7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRoZWlnaHQ6IDF1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XG5cdFx0XHJcblx0fVxyXG5cdC50aXRsZS10eHR7XG5cdFx0Zm9udC1zaXplOiAzNHJweDtcblx0XHRsaW5lLWhlaWdodDo0NXJweDtcblx0fVxyXG5cdC50eHQge1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0bGluZXM6IDI7XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHR9XHJcblxyXG5cdC50eHQxIHtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRsaW5lczogMjtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdH1cclxuXHJcblx0LnZpZGVvYm94IHtcclxuXHRcdGhlaWdodDogMzg1cnB4O1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC50YWdib3gge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0bWFyZ2luLXRvcDoyNXJweDtcblx0fVxuXHRcblx0LmxhYmVsIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGZvbnQtc2l6ZTogMjBycHg7XG5cdFx0Y29sb3I6ICNERjAwMDA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0XHRwYWRkaW5nOiAycnB4IDVycHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxOHJweDtcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWNvbG9yOiAgI0RGMDAwMDtcblx0XHRib3JkZXItd2lkdGg6IDFycHg7XG5cdH1cblx0XG5cdC5zb3VyY2Uge1xuXHRcdGNvbG9yOiAjQUFCMEJCO1xuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xuXHR9XHJcblxyXG5cdC50YWdib3gtdHh0IHtcclxuXHRcdHBhZGRpbmc6IDVycHggMjBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQudmlkZW8ge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogMzg1cnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwcnB4O1xyXG5cdFx0bGVmdDogMHJweDtcclxuXHRcdHRvcDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdH1cclxuXHJcblx0LnNvdXJjZS1waWNzIHtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuc291cmNlLXVzZXIge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHR9XHJcblxyXG5cdC5zb3VyY2UtaWNvbi1waWNzIHtcclxuXHRcdHdpZHRoOiA0NXJweDtcclxuXHRcdGhlaWdodDogNDVycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDhycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0LnNvdXJjZS10eHQtcGljcyB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNBQUIwQkI7XHJcblx0fVxyXG5cclxuXHQuc291cmNlLXRpbWUtcGljcyB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNBQUIwQkI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDgwcnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///76\n");

/***/ }),
/* 77 */
/*!*********************************************************************************************************************************!*\
  !*** E:/headlines/headlines/components/item-list/news-video-item.nvue?vue&type=style&index=0&id=45d85553&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_style_index_0_id_45d85553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-video-item.nvue?vue&type=style&index=0&id=45d85553&scoped=true&lang=css& */ 78);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_style_index_0_id_45d85553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_style_index_0_id_45d85553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_style_index_0_id_45d85553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_style_index_0_id_45d85553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_video_item_nvue_vue_type_style_index_0_id_45d85553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 78 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/item-list/news-video-item.nvue?vue&type=style&index=0&id=45d85553&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "view": {
    "flexDirection": "column"
  },
  "media-item": {
    "position": "relative",
    "flex": 1,
    "flexDirection": "column",
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": "21upx",
    "paddingLeft": "30upx",
    "marginTop": "10rpx"
  },
  "media-item-line": {
    "position": "absolute",
    "left": "0upx",
    "right": "0upx",
    "bottom": 0,
    "height": "1upx",
    "backgroundColor": "#ebebeb"
  },
  "title": {
    "marginBottom": "20rpx",
    "marginRight": "20rpx"
  },
  "title-txt": {
    "fontSize": "34rpx",
    "lineHeight": "45rpx"
  },
  "txt": {
    "fontSize": "30rpx",
    "fontWeight": "bold",
    "lines": 2,
    "textOverflow": "ellipsis"
  },
  "txt1": {
    "fontSize": "30rpx",
    "lines": 2,
    "textOverflow": "ellipsis"
  },
  "videobox": {
    "height": "385rpx",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "position": "relative"
  },
  "tagbox": {
    "flexDirection": "row",
    "marginTop": "25rpx"
  },
  "label": {
    "flexDirection": "row",
    "fontSize": "20rpx",
    "color": "#DF0000",
    "backgroundColor": "#FFFFFF",
    "paddingTop": "2rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "2rpx",
    "paddingLeft": "5rpx",
    "marginRight": "18rpx",
    "borderRadius": "5rpx",
    "borderStyle": "solid",
    "borderColor": "#DF0000",
    "borderWidth": "1rpx"
  },
  "source": {
    "color": "#AAB0BB",
    "fontSize": "24rpx",
    "marginRight": "20rpx"
  },
  "tagbox-txt": {
    "paddingTop": "5rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "20rpx",
    "backgroundColor": "#000000",
    "color": "#FFFFFF",
    "borderRadius": "30rpx",
    "fontSize": "24rpx"
  },
  "video": {
    "width": "750rpx",
    "height": "385rpx",
    "position": "absolute",
    "bottom": "0rpx",
    "left": "0rpx",
    "top": 0,
    "right": 0
  },
  "source-pics": {
    "width": "750rpx",
    "flexDirection": "row",
    "marginTop": "10rpx"
  },
  "source-user": {
    "flexDirection": "row",
    "alignItems": "center",
    "flex": 1,
    "width": 80
  },
  "source-icon-pics": {
    "width": "45rpx",
    "height": "45rpx",
    "marginRight": "8rpx",
    "borderRadius": "20rpx"
  },
  "source-txt-pics": {
    "marginLeft": "10rpx",
    "fontSize": "24rpx",
    "color": "#AAB0BB"
  },
  "source-time-pics": {
    "fontSize": "24rpx",
    "color": "#AAB0BB",
    "marginRight": "80rpx"
  }
}

/***/ }),
/* 79 */
/*!******************************************************************************************************!*\
  !*** E:/headlines/headlines/pages/nanchang/details.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./details.nvue?vue&type=style&index=0&lang=css&mpType=page */ 80);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_details_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 80 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/pages/nanchang/details.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page-news": {
    "flex": 1,
    "flexDirection": "column",
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "listview": {
    "position": "fixed",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "refresh": {
    "justifyContent": "center"
  },
  "refresh-view": {
    "width": "750rpx",
    "height": "64",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refresh-icon": {
    "width": "32",
    "height": "32",
    "transitionDuration": 500,
    "transitionProperty": "transform",
    "transform": "rotate(0deg)",
    "transformOrigin": "15px 15px"
  },
  "@TRANSITION": {
    "refresh-icon": {
      "duration": 500,
      "property": "transform"
    }
  },
  "refresh-icon-active": {
    "transform": "rotate(180deg)"
  },
  "loading-icon": {
    "width": "28",
    "height": "28",
    "marginRight": "5",
    "color": "#808080"
  },
  "loading-text": {
    "marginLeft": "2",
    "fontSize": "16",
    "color": "#999999"
  },
  "loading-more": {
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "14",
    "paddingBottom": "14",
    "textAlign": "center"
  },
  "loading-more-text": {
    "fontSize": "28upx",
    "color": "#999999"
  },
  "blogger": {
    "flexDirection": "column"
  },
  "bg": {
    "width": "750rpx",
    "position": "relative"
  },
  "header": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "header-icon": {
    "width": "40rpx",
    "height": "40rpx"
  },
  "main": {
    "marginTop": "-440rpx"
  },
  "user": {
    "position": "relative",
    "top": "-20rpx",
    "flexDirection": "column",
    "paddingTop": "-20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "30rpx",
    "alignItems": "center"
  },
  "logo": {
    "width": "156rpx",
    "height": "156rpx",
    "borderRadius": "100rpx"
  },
  "user-name": {
    "marginTop": "20rpx",
    "fontSize": "30rpx",
    "color": "#FFFFFF"
  },
  "attention": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#FFFFFF",
    "color": "#e5e5e5",
    "paddingTop": "6rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "6rpx",
    "paddingLeft": "20rpx",
    "fontSize": "22rpx",
    "borderRadius": "5rpx"
  },
  "tab": {
    "zIndex": 100,
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "paddingTop": "30rpx",
    "paddingRight": "60rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "60rpx",
    "justifyContent": "space-between"
  },
  "item-txt": {
    "fontSize": "36rpx",
    "color": "#000000",
    "marginBottom": "10rpx"
  },
  "item": {
    "backgroundColor": "#FFFFFF",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "active": {
    "color": "#E00000"
  },
  "line": {
    "width": "37rpx",
    "height": "5rpx",
    "borderRadius": "10rpx",
    "backgroundColor": "#E00000"
  },
  "desc": {
    "fontSize": "24rpx",
    "lineHeight": "50rpx",
    "marginTop": "0rpx",
    "marginRight": "60rpx",
    "marginBottom": "15rpx",
    "marginLeft": "60rpx",
    "lines": 3,
    "textOverflow": "ellipsis",
    "color": "#FFFFFF"
  }
}

/***/ })
/******/ ]);