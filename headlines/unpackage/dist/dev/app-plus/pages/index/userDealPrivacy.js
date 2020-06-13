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
/******/ 	return __webpack_require__(__webpack_require__.s = 210);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
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

/***/ 13:
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

/***/ 14:
/*!************************************************!*\
  !*** E:/headlines/headlines/common/js/util.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {var _index = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n/**\r\n                                                                                                                                                                           * 方法名称: 跳转到webView\r\n                                                                                                                                                                           * 方法注释: \r\n                                                                                                                                                                           * 传入参数: webUrl->网页链接 webTitle->网页标题 webPic->网页图片\r\n                                                                                                                                                                           * 返回数值: \r\n                                                                                                                                                                           */\nfunction gotoWebView(webUrl, webTitle, webview, webPic) {\n  webview = webview || 'webView';\n  if (webUrl) {\n    var temUrl = encodeURIComponent(webUrl);\n    ////console.log(\"temUrltemUrl= \", temUrl);\n    if (webTitle) {\n      if (webPic) {\n        uni.navigateTo({\n          url: \"/pages/webView/\" + webview + \"?webUrl=\" + temUrl + \"&webTitle=\" + webTitle + \"&webPic=\" + webPic });\n\n      } else {\n        uni.navigateTo({\n          url: \"/pages/webView/\" + webview + \"?webUrl=\" + temUrl + \"&webTitle=\" + webTitle });\n\n      }\n    } else {\n      uni.navigateTo({\n        url: \"/pages/webView/\" + webview + \"?webUrl=\" + temUrl });\n\n    }\n  }\n}\n\n/**\r\n   * 方法名称: 举报\r\n   * 方法注释: 不用传任何参数,会先判断用户是否登录,登录之后才跳到举报页面\r\n   * 传入参数: 无\r\n   * 返回数值: 无\r\n   */\nfunction tipOff(relationId) {\n  if (_index.default.alreadyLogin()) {\n    uni.navigateTo({\n      url: \"/pages/user/userIndex/inform?relationId=\" + relationId,\n      animationType: \"slide-in-bottom\",\n      animationDuration: 200 });\n\n  }\n}\n\nfunction checkAppVersion(updateFlag) {\n\n  var sendData = {\n    \"action\": \"upgrade\" };\n\n  if (uni.getSystemInfoSync().platform == \"ios\") {\n    sendData.mod = \"ios\";\n  }\n  _index.default.get(\"api/ncrb/\", sendData, \"N\", false).then(function (res) {\n    __f__(\"log\", \"res = \", res, \" at common/js/util.js:57\");\n    uni.setStorageSync(\"serviceVersion\", res.data.version);\n    uni.setStorageSync(\"description\", res.data.desc);\n    uni.setStorageSync(\"apkurl\", res.data.apkurl);\n    if (updateFlag) {\n      compareVersion(res.data.version, res.data.desc, res.data.apkurl);\n    }\n  });\n\n}\n\nfunction compareVersion(serviceVersion, description, apkurl) {\n\n  plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {\n    var localVersion = wgtinfo.version; //app本地应用版本号\n\n    if (serviceVersion > localVersion) {\n      __f__(\"log\", \"serviceVersion=\" + serviceVersion, \" at common/js/util.js:74\");\n      __f__(\"log\", \"localVersion=\" + localVersion, \" at common/js/util.js:75\");\n      var subNVue = uni.getSubNVueById('versionUpdateTip');\n      // 在 subNVue/vue 页面触发事件  \n      // $emit(eventName, data)  \n      var app = getApp();\n      app.globalData.updateTip = description;\n      subNVue.show();\n      // uni.showModal({ //提醒用户更新  \n      // \ttitle: \"版本更新啦\",\n      // \tshowCancel: false,\n      // \tconfirmText: \"立即更新\",\n      // \tcontent: description,\n      // \tcomplete(e) {\n      // \t\tif (e.confirm) {\n      // \t\t\tuni.navigateTo({\n      // \t\t\t\turl:'/pages/user/setting/versionUpdate'\n      // \t\t\t});\n      // \t\t}\n      // \t}\n      // })\n    }\n  });\n\n}\nfunction gotoDetail(detail) {\n  if (detail.type && detail.type == 61) {\n    uni.navigateTo({\n      url: '/pages/detail/explainDetails?id=' + detail.id });\n\n  } else if (detail.style && detail.style == 'activity') {\n    uni.navigateTo({\n      url: '/pages/activity/activityDetails?id=' + detail.id });\n\n  } else if (detail.style && detail.style == 'wenzheng') {\n    uni.navigateTo({\n      url: '/pages/inquire/details?id=' + detail.id });\n\n  } else if (detail.url) {\n    if (detail.url == '#' || detail.style == 'h5' && detail.url == '') {\n      // uni.navigateTo({\n      // \turl: '/pages/inquire/details?id=' + detail.id\n      // });\n    } else if (detail.url.indexOf(\"http://\") >= 0 || detail.url.indexOf(\"https://\") >= 0) {\n      if (detail.url.indexOf(\"unionid={unionid}\") >= 0) {\n        if (_index.default.alreadyLogin()) {\n          detail.url = detail.url.replace(/{unionid}/, uni.getStorageSync(\"unionid\"));\n          gotoWebView(detail.url, detail.title, '', detail.pic);\n        }\n      } else {\n        gotoWebView(detail.url, detail.title, '', detail.pic);\n      }\n    } else if (detail.url.indexOf(\"ncnews://\") >= 0) {\n\n      if (detail.url.indexOf(\"ncnews://upgrade\") >= 0) {\n        //给市长留言列表\n        uni.navigateTo({\n          url: '/pages/user/setting/versionUpdate' });\n\n      } else if (detail.url.indexOf(\"wenzheng_list_10\") >= 0) {\n        //给市长留言列表\n        uni.navigateTo({\n          url: '/pages/inquire/inquireDetails' });\n\n      } else if (detail.url.indexOf(\"wenzheng_list_12\") >= 0) {\n        //思想大讨论\n        uni.navigateTo({\n          url: '/pages/inquire/thoughtDiscussList' });\n\n      } else if (detail.url.indexOf(\"wenzheng_send_\") >= 0) {\n        var type = detail.url.split('wenzheng_send_')[1];\n        //问政列表\n        uni.navigateTo({\n          url: '/pages/inquire/complaintSuggestionMessage?type=' + type });\n\n      } else if (detail.url.indexOf(\"wenzheng_list_\") >= 0) {\n        var type = detail.url.split('wenzheng_list_')[1];\n        //问政列表\n        uni.navigateTo({\n          url: '/pages/inquire/inquireList?type=' + type });\n\n      } else if (detail.url.indexOf(\"channel_\") >= 0) {\n        var type = detail.url.split('channel_')[1];\n        //新闻列表\n        uni.navigateTo({\n          url: '/pages/news/newsList?typeId=' + type });\n\n      } else if (detail.url.indexOf(\"article_\") >= 0) {\n        var id = detail.url.split('article_')[1];\n        uni.navigateTo({\n          url: '/pages/detail/details?id=' + id });\n\n      } else if (detail.url.indexOf(\"ncnews://zt_\") >= 0) {\n        var zid = detail.url.split('ncnews://zt_')[1];\n        uni.navigateTo({\n          url: '/pages/news/topic?zid=' + zid });\n\n      } else {\n        uni.navigateTo({\n          url: '/pages/detail/details?id=' + detail.id });\n\n      }\n    }\n  } else {\n    uni.navigateTo({\n      url: '/pages/detail/details?id=' + detail.id });\n\n  }\n}\n\n/**\r\n   * 方法名称: js获取不通设备下的导航栏高度,单位是px\r\n   * 方法注释: 使用JSON.parse之前先判断字符串是否可转为json数据\r\n   * 传入参数: 字符串\r\n   * 返回数值: string可以转json则返回true,否则返回false\r\n   */\nfunction getVarNaviBarHeight() {\n  try {\n\n    return plus.navigator.getStatusbarHeight() * plus.screen.scale;\n    // return uni.getSystemInfoSync().statusBarHeight + 44 + 'px';\n\n\n\n\n  } catch (e) {}\n  return 64;\n}\n\n/**\r\n   * 方法名称: 判断字符串是否可转为json数据\r\n   * 方法注释: 使用JSON.parse之前先判断字符串是否可转为json数据\r\n   * 传入参数: 字符串\r\n   * 返回数值: string可以转json则返回true,否则返回false\r\n   */\nfunction isJsonString(str) {\n  try {\n    if (typeof JSON.parse(str) == \"object\") {\n      return true;\n    }\n  } catch (e) {}\n  return false;\n}\n\n\n\nfunction formatArray(array) {\n  var theArray = [];\n  for (var i = 0; i < array.length; i++) {\n    if (array[i] && !(array[i] == 'undefined')) {\n      theArray.push(array[i]);\n    }\n  }\n  return theArray;\n}\n\nfunction dateCheck(RQ) {\n  var date = RQ;\n  var result = date.match(/^(\\d{1,4})(-|\\/)(\\d{1,2})\\2(\\d{1,2})$/);\n\n  if (result == null)\n  return false;\n  var d = new Date(result[1], result[3] - 1, result[4]);\n  return d.getFullYear() == result[1] && d.getMonth() + 1 == result[3] && d.getDate() == result[4];\n}\n\n\n\nfunction formatLocation(longitude, latitude) {\n  if (typeof longitude === 'string' && typeof latitude === 'string') {\n    longitude = parseFloat(longitude);\n    latitude = parseFloat(latitude);\n  }\n\n  longitude = longitude.toFixed(2);\n  latitude = latitude.toFixed(2);\n\n  return {\n    longitude: longitude.toString().split('.'),\n    latitude: latitude.toString().split('.') };\n\n}\n\nfunction dateDiff(dateStr) {\n  var date = new Date(dateStr);\n  var nowdate = new Date();\n  var diff = nowdate.getDate() - date.getDate();\n  switch (diff) {\n    case 0:\n      return '今天';\n      break;\n    case 1:\n      return '昨天';\n      break;\n    case 2:\n      return '前天';\n      break;\n    default:\n      return diff + '天前';\n      break;}\n\n};\n\nfunction formatMinutesTime(dateStr) {\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  var date = new Date(parseInt(dateStr));\n  return _format(date.getHours()) + ':' + _format(date.getMinutes());\n};\n\nfunction formatTime(time) {\n  if (typeof time !== 'number' || time < 0) {\n    return time;\n  }\n\n  var hour = parseInt(time / 3600);\n  time = time % 3600;\n  var minute = parseInt(time / 60);\n  time = time % 60;\n  var second = time;\n\n  return [hour, minute, second].map(function (n) {\n    n = n.toString();\n    return n[1] ? n : '0' + n;\n  }).join(':');\n}\n\n/**\r\n   * 方法名称: 将日期格式化为某月某日\r\n   * 方法注释: 比如传入2019-11-10,则返回11月10日\r\n   * 传入参数: dateStr 日期字符串\r\n   * 返回数值: 带有月日的日期字符串\r\n   */\nfunction formatMinutesDay(dateStr) {\n  if (dateStr) {\n    dateStr = dateStr.replace(/-/ig, \"/\");\n  }\n\n  var date = new Date(parseInt(dateStr));\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return +_format(date.getMonth() + 1) + '月' + _format(date.getDate()) + \"日\";\n};\n\nfunction formatDateTime(dateStr) {\n  var date;\n  if (dateStr) {\n    date = new Date(dateStr);\n  } else {\n    date = new Date();\n  }\n\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return date.getFullYear() + '-' + _format(date.getMonth() + 1) + '-' + _format(date.getDate()) + ' ' +\n  _format(date.getHours()) + ':' + _format(date.getMinutes());\n}\n\n\nvar formatDate = function formatDate(date) {\n  if (!date instanceof Date) {\n    date = new Date(date);\n  }\n  var year = date.getFullYear();\n  var month = date.getMonth() + 1;\n  var day = date.getDate();\n  return [year, month, day].map(formatNumber).join('-');\n};\n/**\r\n    * 方法名称: 获取当前日期的前几天或者后几天\r\n    * 方法注释: dayCount传入负数比如-3,表示获取当前日期的前3天,传入正数比如2,表示获取后天的日期\r\n    * 传入参数: dayCount 正整数或者负整数\r\n    * 返回数值: 前日期的前几天或者后几天的字符串\r\n    */\nvar getDateWithCount = function getDateWithCount(dayCount) {\n  var dd = new Date();\n  dd.setDate(dd.getDate() + dayCount); //获取AddDayCount天后的日期  \n  var y = dd.getFullYear();\n  var m = dd.getMonth() + 1 < 10 ? \"0\" + (dd.getMonth() + 1) : dd.getMonth() + 1; //获取当前月份的日期，不足10补0  \n  var d = dd.getDate() < 10 ? \"0\" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0  \n  return y + \"-\" + m + \"-\" + d;\n};\n\nvar getTimeWithHour = function getTimeWithHour(hours) {\n  var dd = new Date();\n  var tt = dd.getTime();\n  var ntt = tt + hours * 60 * 1000;\n  dd.setDate(dd.getDate() + dayCount); //获取AddDayCount天后的日期  \n  var y = dd.getFullYear();\n  var m = dd.getMonth() + 1 < 10 ? \"0\" + (dd.getMonth() + 1) : dd.getMonth() + 1; //获取当前月份的日期，不足10补0  \n  var d = dd.getDate() < 10 ? \"0\" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0  \n  return y + \"-\" + m + \"-\" + d;\n};\n\n\nvar getDaysByDateString = function getDaysByDateString(dateString1, dateString2) {\n  var startDate = Date.parse(dateString1.replace('/-/g', '/'));\n  var endDate = Date.parse(dateString2.replace('/-/g', '/'));\n  var diffDate = endDate - startDate + 1 * 24 * 60 * 60 * 1000;\n  var days = diffDate / (1 * 24 * 60 * 60 * 1000);\n  //alert(diffDate/(1*24*60*60*1000));  \n  return days;\n};\n\n\n/**\r\n    * 方法名称: 获取当前日期的星期\r\n    * 方法注释: dateString传入日期格式的字符串\r\n    * 传入参数: dateString传入日期格式的字符串\r\n    * 返回数值: 日期的星期\r\n    */\nvar getDateWeekend = function getDateWeekend(dateString) {\n  var date = new Date(parseInt(dateString));\n  var a = [\"日\", \"一\", \"二\", \"三\", \"四\", \"五\", \"六\"];\n  var week = date.getDay();\n  var str = \"周\" + a[week];\n  return str;\n};\n\nvar formatNumber = function formatNumber(n) {\n  n = n.toString();\n  return n[1] ? n : '0' + n;\n};\n\nvar dateUtils = {\n  UNITS: {\n    '年': 31557600000,\n    '月': 2629800000,\n    '天': 86400000,\n    '小时': 3600000,\n    '分钟': 60000,\n    '秒': 1000 },\n\n  humanize: function humanize(milliseconds) {\n    var humanize = '';\n    for (var key in this.UNITS) {\n      if (milliseconds >= this.UNITS[key]) {\n        humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';\n        break;\n      }\n    }\n    return humanize || '刚刚';\n  },\n  format: function format(dateStr) {\n    var date = this.parse(dateStr);\n    var diff = Date.now() - date.getTime();\n    if (diff < this.UNITS['天']) {\n      return this.humanize(diff);\n    }\n    var _format = function _format(number) {\n      return number < 10 ? '0' + number : number;\n    };\n    return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +\n    _format(date.getHours()) + ':' + _format(date.getMinutes()) + '111';\n  },\n  parse: function parse(str) {//将\"yyyy-mm-dd HH:MM:ss\"格式的字符串，转化为一个Date对象\n    var a = str.split(/[^0-9]/);\n    return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);\n  },\n  formatDate: function formatDate(dateStr) {\n    //const mistiming = Math.round((Date.now() - new Date(dateStr).getTime()) / 1000)\n    //const tags = ['年', '个月', '星期', '天', '小时', '分钟', '秒']\n    //const times = [31536000, 2592000, 604800, 86400, 3600, 60, 1]\n    //console.info(\"new Date(dateStr).getDate():\" + new Date(dateStr).getDate() + \"--\" + Date.now());\n    var mistiming = Math.round((Date.now() - new Date(dateStr)) / (24 * 60 * 60 * 1000));\n    var tags = ['年', '个月', '星期', '天'];\n    var times = [31536000, 2592000, 604800, 86400];\n    for (var i = 0; i < times.length; i++) {\n      var inm = Math.floor(mistiming / times[i]);\n      if (tags[i] === '天') {\n        switch (inm) {\n          case 0:\n            return '今天';\n            break;\n          case 1:\n            return '昨天';\n            break;\n          case 2:\n            return '前天';\n            break;\n          default:\n            return inm + tags[i] + '前';\n            break;}\n\n      }\n      if (inm !== 0) {\n        return inm + tags[i] + '前';\n      }\n    }\n  } };\n\n\n/**\r\n        * 方法名称: 将日期格式化为某月某日\r\n        * 方法注释: 比如传入15800000000,则返回11月10日\r\n        * 传入参数: dateStr 日期字符串\r\n        * 返回数值: 带有月日的日期字符串\r\n        */\nfunction formatYearMinutesDay(dateStr) {\n  var date = new Date(parseInt(dateStr));\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return +date.getFullYear() + '年' + _format(date.getMonth() + 1) + '月' + _format(date.getDate()) + \"日\";\n};\n/**\r\n    * 方法名称: 将日期格式化为某月某日\r\n    * 方法注释: 比如传入15800000000,则返回11月10日\r\n    * 传入参数: dateStr 日期字符串\r\n    * 返回数值: 带有月日的日期字符串\r\n    */\nfunction formatYearMinutesDayFormt(dateStr) {\n  var date = new Date(parseInt(dateStr));\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return +date.getFullYear() + '-' + _format(date.getMonth() + 1) + '-' + _format(date.getDate()) + \"\";\n};\n\n\n/**\r\n    * 方法名称: 将日期格式化为某月某日\r\n    * 方法注释: 比如传入15800000000,则返回11/10\r\n    * 传入参数: dateStr 日期字符串\r\n    * 返回数值: 11/10\r\n    */\nfunction formatMonthDay(dateStr) {\n  var date = new Date(parseInt(dateStr));\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  return _format(date.getMonth() + 1) + '/' + _format(date.getDate());\n};\n// 将一维数组拆分成二维数组\nfunction multiArray(array) {\n  var newArray = array.reduce(function (prev, next, index) {\n    if (index % 2 === 0) {\n      prev.push([]);\n    }\n    prev[prev.length - 1].push(next);\n    return prev;\n  }, []);\n  return newArray;\n}\n/**\r\n   * 方法名称: 打开某个地点的所在位置的地图\r\n   * 方法注释: \r\n   * 传入参数: \r\n   * 返回数值: \r\n   */\nfunction openLocation(longitude, latitude, name, address) {\n  uni.openLocation({\n    longitude: Number(longitude),\n    latitude: Number(latitude),\n    name: name,\n    address: address,\n    fail: function fail() {\n      uni.navigateBack({});\n\n\n    } });\n\n}\n/**\r\n   * 方法名称: 打开店铺地址的位置\r\n   * 方法注释: \r\n   * 传入参数: shopInfo店铺信息必须包含经纬度/店铺名称/店铺地址\r\n   * 返回数值: 无\r\n   */\nfunction openShopLocation(shopInfo) {\n  if (!shopInfo) return;\n  uni.openLocation({\n    longitude: Number(shopInfo.coordinateLng),\n    latitude: Number(shopInfo.coordinateLat),\n    name: shopInfo.shopName,\n    address: shopInfo.address,\n    fail: function fail() {\n      uni.navigateBack({});\n\n\n    } });\n\n}\n/**\r\n   * 方法名称: 导航至目的地\r\n   * 方法注释: 需要传入目的地的经度、维度，如果不传默认目的是滕王阁，当前位置默认为用户所在位置，测试时可默认为南昌日报大厦\r\n   * 传入参数: desLongitude->目的地的经度 desLatitude->目的地的纬度 desAddress->目的的地址名称，比如滕王阁\r\n   * 返回数值: 无返回值，获取当前用户位置失败时会弹框提示\r\n   */\nfunction navigateToLocation() {var desLongitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 115.881141;var desLatitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 28.681356;var desAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '滕王阁';\n\n  uni.getLocation({\n    success: function success(res) {\n      //var src = new plus.maps.Point(115.885449,28.71359);\t \t\t// 南昌日报大厦（高德坐标）\n      // var dst = new plus.maps.Point(desLongitude,desLatitude);     // 目的地位置（高德坐标）\n\n      //var src = new plus.maps.Point(115.885449,28.71359);\t \t\t// 南昌日报大厦（高德坐标）\n      // var dst = new plus.maps.Point(desLongitude,desLatitude);     // 目的地位置（高德坐标）\n      ////console.log(res.longitude, res.latitude);\n      var src = new plus.maps.Point(res.longitude, res.latitude); // 当前位置 (高德坐标)\n      var point = GPS.gcj_decrypt_exact(desLongitude, desLatitude);\n      var dst = new plus.maps.Point(point.lon, point.lat); // 南昌滕王阁 (高德坐标)\n      plus.maps.openSysMap(dst, desAddress, src);\n    },\n    fail: function fail(err) {\n\n      var src = new plus.maps.Point(115.885449, 28.71359); // 南昌日报大厦（高德坐标）\n      var dst = new plus.maps.Point(desLongitude, desLatitude); // 南昌滕王阁 (高德坐标)\n      plus.maps.openSysMap(dst, desAddress, src);\n      if (err.errMsg.indexOf(\"auth deny\") >= 0) {\n        // uni.showToast({\n        // \ttitle: \"访问位置被拒绝,请到设置中允许ye南昌开启位置访问权限\"\n        // })\n      } else {\n          // uni.showToast({\n          // \ttitle: err.errMsg\n          // })\n\n        }\n    } });\n\n\n\n}\n\nfunction distance(latA, lonA, latB, lonB) {\n  return GPS.distance(latA, lonA, latB, lonB);\n}\nvar GPS = {\n  PI: 3.14159265358979324,\n  x_pi: 3.14159265358979324 * 3000.0 / 180.0,\n  delta: function delta(lat, lon) {\n    // Krasovsky 1940\n    //\n    // a = 6378245.0, 1/f = 298.3\n    // b = a * (1 - f)\n    // ee = (a^2 - b^2) / a^2;\n    var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。\n    var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。\n    var dLat = this.transformLat(lon - 105.0, lat - 35.0);\n    var dLon = this.transformLon(lon - 105.0, lat - 35.0);\n    var radLat = lat / 180.0 * this.PI;\n    var magic = Math.sin(radLat);\n    magic = 1 - ee * magic * magic;\n    var sqrtMagic = Math.sqrt(magic);\n    dLat = dLat * 180.0 / (a * (1 - ee) / (magic * sqrtMagic) * this.PI);\n    dLon = dLon * 180.0 / (a / sqrtMagic * Math.cos(radLat) * this.PI);\n    return {\n      'lat': dLat,\n      'lon': dLon };\n\n  },\n\n  //WGS-84 to GCJ-02\n  gcj_encrypt: function gcj_encrypt(wgsLat, wgsLon) {\n    if (this.outOfChina(wgsLat, wgsLon))\n    return {\n      'lat': wgsLat,\n      'lon': wgsLon };\n\n\n    var d = this.delta(wgsLat, wgsLon);\n    return {\n      'lat': wgsLat + d.lat,\n      'lon': wgsLon + d.lon };\n\n  },\n  //GCJ-02 to WGS-84\n  gcj_decrypt: function gcj_decrypt(gcjLat, gcjLon) {\n    if (this.outOfChina(gcjLat, gcjLon))\n    return {\n      'lat': gcjLat,\n      'lon': gcjLon };\n\n\n    var d = this.delta(gcjLat, gcjLon);\n    return {\n      'lat': gcjLat - d.lat,\n      'lon': gcjLon - d.lon };\n\n  },\n  //GCJ-02 to WGS-84 exactly\n  gcj_decrypt_exact: function gcj_decrypt_exact(gcjLon, gcjLat) {\n    var initDelta = 0.01;\n    var threshold = 0.000000001;\n    var dLat = initDelta,\n    dLon = initDelta;\n    var mLat = gcjLat - dLat,\n    mLon = gcjLon - dLon;\n    var pLat = gcjLat + dLat,\n    pLon = gcjLon + dLon;\n    var wgsLat,wgsLon,i = 0;\n    while (1) {\n      wgsLat = (mLat + pLat) / 2;\n      wgsLon = (mLon + pLon) / 2;\n      var tmp = this.gcj_encrypt(wgsLat, wgsLon);\n      dLat = tmp.lat - gcjLat;\n      dLon = tmp.lon - gcjLon;\n      if (Math.abs(dLat) < threshold && Math.abs(dLon) < threshold)\n      break;\n\n      if (dLat > 0) pLat = wgsLat;else\n      mLat = wgsLat;\n      if (dLon > 0) pLon = wgsLon;else\n      mLon = wgsLon;\n\n      if (++i > 10000) break;\n    }\n    //////console.log(i);\n    return {\n      'lon': wgsLon,\n      'lat': wgsLat };\n\n  },\n\n  // two point's distance\n  distance: function distance() {var latA = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 115.857963;var lonA = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 28.6926;var latB = arguments.length > 2 ? arguments[2] : undefined;var lonB = arguments.length > 3 ? arguments[3] : undefined;\n    latA = latA || 115.857963, lonA = lonA || 28.6926;\n    var earthR = 6371000.;\n    var x = Math.cos(latA * this.PI / 180.) * Math.cos(latB * this.PI / 180.) * Math.cos((lonA - lonB) * this.PI / 180);\n    var y = Math.sin(latA * this.PI / 180.) * Math.sin(latB * this.PI / 180.);\n    var s = x + y;\n    if (s > 1) s = 1;\n    if (s < -1) s = -1;\n    var alpha = Math.acos(s);\n    var distance = alpha * earthR;\n    return distance;\n  },\n  outOfChina: function outOfChina(lat, lon) {\n    if (lon < 72.004 || lon > 137.8347)\n    return true;\n    if (lat < 0.8293 || lat > 55.8271)\n    return true;\n    return false;\n  },\n  transformLat: function transformLat(x, y) {\n    var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));\n    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;\n    ret += (20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin(y / 3.0 * this.PI)) * 2.0 / 3.0;\n    ret += (160.0 * Math.sin(y / 12.0 * this.PI) + 320 * Math.sin(y * this.PI / 30.0)) * 2.0 / 3.0;\n    return ret;\n  },\n  transformLon: function transformLon(x, y) {\n    var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));\n    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;\n    ret += (20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin(x / 3.0 * this.PI)) * 2.0 / 3.0;\n    ret += (150.0 * Math.sin(x / 12.0 * this.PI) + 300.0 * Math.sin(x / 30.0 * this.PI)) * 2.0 / 3.0;\n    return ret;\n  } };\n\n\nfunction friendlyDate(timestamp) {\n  var formats = {\n    'year': '%n% 年前',\n    'month': '%n% 月前',\n    'day': '%n% 天前',\n    'hour': '%n% 小时前',\n    'minute': '%n% 分钟前',\n    'second': '%n% 秒前' };\n\n\n  var now = Date.now();\n  var seconds = Math.floor((now - timestamp) / 1000);\n  var minutes = Math.floor(seconds / 60);\n  var hours = Math.floor(minutes / 60);\n  var days = Math.floor(hours / 24);\n  var months = Math.floor(days / 30);\n  var years = Math.floor(months / 12);\n\n  var diffType = '';\n  var diffValue = 0;\n  if (years > 0) {\n    diffType = 'year';\n    diffValue = years;\n  } else {\n    if (months > 0) {\n      diffType = 'month';\n      diffValue = months;\n    } else {\n      if (days > 0) {\n        diffType = 'day';\n        diffValue = days;\n      } else {\n        if (hours > 0) {\n          diffType = 'hour';\n          diffValue = hours;\n        } else {\n          if (minutes > 0) {\n            diffType = 'minute';\n            diffValue = minutes;\n          } else {\n            diffType = 'second';\n            diffValue = seconds === 0 ? seconds = 1 : seconds;\n          }\n        }\n      }\n    }\n  }\n  return formats[diffType].replace('%n%', diffValue);\n}\n\n\n/**\r\n   * 根据字段去重\r\n   * @param {Object} arr 集合\r\n   * @param {Object} field 去重字段\r\n   */\nfunction unique(arr, field) {\n  var map = {};\n  var res = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (!map[arr[i][field]]) {\n      map[arr[i][field]] = 1;\n      res.push(arr[i]);\n    }\n  }\n  return res;\n}\n\n/**\r\n    * 方法名称: 日期字符串转时间戳\r\n    * 方法注释: 时间戳值转到秒，不到毫秒\r\n    * 传入参数: dateString 日期字符串\r\n    * 返回数值: 时间戳\r\n  */\nfunction dateStringToTimestamp(dateString) {\n  dateString = dateString.substring(0, 16); //截取到秒\n  dateString = dateString.replace(/-/g, '/'); //必须把日期'-'转为'/'\n  var timestamp = new Date(dateString).getTime();\n  timestamp = timestamp / 1000;\n  __f__(\"log\", \"timestamp == \", timestamp, \" at common/js/util.js:807\");\n  return timestamp;\n}\n/**\r\n    * 方法名称: 时间戳转日期字符串\r\n    * 方法注释: 装换结果截取到天，不截取到时分秒\r\n    * 传入参数: timestamp 时间戳\r\n    * 返回数值: 日期字符串\r\n  */\nfunction timestampToDateString(timestamp) {\n  var d = new Date(timestamp * 1000); //根据时间戳生成的时间对象\n  var date = d.getFullYear() + \"-\" + (\n  d.getMonth() + 1) + \"-\" +\n  d.getDate(); // + \" \" + \n  // (d.getHours()) + \":\" + \n  // (d.getMinutes()) + \":\" + \n  // (d.getSeconds());\n  __f__(\"log\", \"datedate = \", date, \" at common/js/util.js:824\");\n  return date;\n\n}\n\n/**\r\n   * 分享-获取服务商列表\r\n   * 返回: 服务商列表\r\n   */\nfunction getShareList() {\n  var shareList = [];\n  uni.getProvider({ //获取服务商\n    service: 'share',\n    success: function success(res) {\n      __f__(\"log\", \"服务商信息: \" + JSON.stringify(res), \" at common/js/util.js:838\");\n      if (res.provider.length == 0) {\n        res.provider = [\"weixin\", \"copyLink\", 'refresh'];\n      } else {\n        res.provider.push(\"copyLink\");\n        res.provider.push(\"refresh\");\n      }\n      for (var i = 0; i < res.provider.length; i++) {\n        var item = res.provider[i];\n        if (item == 'weixin') {\n          shareList.push(setupShareItem('weixin', \"微信\", \"WXSceneSession\"));\n          shareList.push(setupShareItem('weixin', \"朋友圈\", \"WXSenceTimeline\"));\n        }\n        //复制链接\n        if (item == 'copyLink') {\n          shareList.push(setupShareItem('copyLink', \"复制链接\", \"copyLink\"));\n        }\n        //刷新\n        if (item == 'refresh') {\n          shareList.push(setupShareItem('refresh', '刷新', 'refresh'));\n        }\n        // if (item == 'sinaweibo') {\n        // \tshareList.push(self.setupShareItem(\"weibo\", \"微博\", \"weibo\"));\n        // }\n        // if (item == 'qq') {\n        // \tshareList.push(self.setupShareItem(\"qq\", \"qq\", \"qq\"));\n        // \t// 不能直接分享到QQ空间，可以分享到QQ，然后在QQ的界面里选择QQ空间。\n        // \t// shareList.push(self.setupShareItem(\"zone\",\"qq空间\"));\n        // }\n      }\n      __f__(\"log\", \"服务商列表: \" + JSON.stringify(shareList), \" at common/js/util.js:868\");\n    },\n    fail: function fail(res) {\n      __f__(\"log\", \"获取分享服务商列表失败: \" + JSON.stringify(res), \" at common/js/util.js:871\");\n    } });\n\n  return shareList;\n}\n\n/**\r\n   * 分享-获取服务商对应图片\r\n   * 参数: provider 服务商名称\r\n   * 参数: title 标题\r\n   * 参数: scene 场景\r\n   * 返回: 服务商对应图片\r\n   */\nfunction setupShareItem(provider, title, scene) {\n  var item = {\n    provider: provider,\n    scene: scene,\n    title: title,\n    image: \"/static/img/share/\" + scene + \".png\" };\n\n  return item;\n}\n\n/**\r\n   * 分享-分享-分享微信或者qq或者其它\r\n   * 参数: item 选中的服务商信息(对象)\r\n   * 参数: detail 分享的内容信息(对象)\r\n   * 返回: 是否分享成功\r\n   */\nfunction clickShareItem(item, detail) {\n  var isShare = false;\n  //detail.link = detail.link.replace(\"{unionid}\",uni.getStorageSync(\"unionid\"));\n  // if (true) {\n  if (uni.getSystemInfoSync().platform == \"ios\") {\n    uni.downloadFile({\n      url: detail.pic, //仅为示例，并非真实的资源\n      success: function success(res) {\n        if (res.statusCode === 200) {\n          plus.zip.compressImage({\n            src: res.tempFilePath,\n            dst: \"_doc/share.png\",\n            quality: 20,\n            overwrite: true,\n            format: \"png\",\n            width: \"100px\",\n            height: \"100px\" },\n\n          function () {\n            detail.pic = \"_doc/share.png\";\n            uni.share({\n              provider: item.provider,\n              scene: item.scene, //必填: provider为weixin时\n              type: item.scene == 'qq' ? 1 : 0, //选填: 0为图文，qq不支持\n              title: detail.title, //选填: \n              summary: detail.desc, //type=1时必填: 分享内容的摘要\n              href: detail.link, //type=0时必填: 跳转链接\n              imageUrl: detail.pic, //type=0、2、5时必填: 图片大于20kb时不显示,推荐使用小于20Kb的图片\n              //mediaUrl:'',//type 为 3、4 时必选: 音视频地址\n              //miniProgram:{},//type 为 5 时必选: 分享小程序必要参数\n              success: function success(res) {//调用成功\n                __f__(\"log\", \"分享调用成功: \" + JSON.stringify(res), \" at common/js/util.js:931\");\n                isShare = true;\n                _index.default.toastTipsTime(\"分享成功\", 1500);\n              },\n              fail: function fail(error) {//调用失败\n                __f__(\"log\", \"分享调用失败: \" + JSON.stringify(error), \" at common/js/util.js:936\");\n                isShare = false;\n              } });\n\n          }, function (error) {\n            isShare = false;\n            __f__(\"log\", \"Compress error!\", error, \" at common/js/util.js:942\");\n          });\n        }\n      } });\n\n  } else {\n    uni.share({\n      provider: item.provider,\n      scene: item.scene, //必填: provider为weixin时\n      type: item.scene == 'qq' ? 1 : 0, //选填: 0为图文，qq不支持\n      title: detail.title, //选填: \n      summary: detail.desc, //type=1时必填: 分享内容的摘要\n      href: detail.link, //type=0时必填: 跳转链接\n      imageUrl: detail.pic, //type=0、2、5时必填: 图片大于20kb时不显示,推荐使用小于20Kb的图片\n      //mediaUrl:'',//type 为 3、4 时必选: 音视频地址\n      //miniProgram:{},//type 为 5 时必选: 分享小程序必要参数\n      success: function success(res) {//调用成功\n        __f__(\"log\", \"分享调用成功: \" + JSON.stringify(res), \" at common/js/util.js:959\");\n        isShare = true;\n        _index.default.toastTipsTime(\"分享成功\", 1500);\n      },\n      fail: function fail(error) {//调用失败\n        __f__(\"log\", \"分享调用失败: \" + JSON.stringify(error), \" at common/js/util.js:964\");\n        isShare = false;\n      } });\n\n  }\n  return isShare;\n}\n\nmodule.exports = {\n  isJsonString: isJsonString,\n  formatTime: formatTime,\n  formatLocation: formatLocation,\n  dateUtils: dateUtils,\n  dateDiff: dateDiff,\n  formatMinutesTime: formatMinutesTime,\n  formatMinutesDay: formatMinutesDay,\n  formatDate: formatDate,\n  formatDateTime: formatDateTime,\n  getDateWithCount: getDateWithCount,\n  getDateWeekend: getDateWeekend,\n  getDaysByDateString: getDaysByDateString,\n  dateCheck: dateCheck,\n  multiArray: multiArray,\n  navigateToLocation: navigateToLocation,\n  distance: distance,\n  formatArray: formatArray,\n  getVarNaviBarHeight: getVarNaviBarHeight,\n  openLocation: openLocation,\n  openShopLocation: openShopLocation,\n  checkAppVersion: checkAppVersion,\n  tipOff: tipOff,\n  gotoWebView: gotoWebView,\n  friendlyDate: friendlyDate,\n  dateStringToTimestamp: dateStringToTimestamp,\n  timestampToDateString: timestampToDateString,\n  formatYearMinutesDay: formatYearMinutesDay,\n  formatYearMinutesDayFormt: formatYearMinutesDayFormt,\n  formatMonthDay: formatMonthDay,\n  gotoDetail: gotoDetail,\n  getShareList: getShareList,\n  clickShareItem: clickShareItem,\n  unique: unique };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2pzL3V0aWwuanMiXSwibmFtZXMiOlsiZ290b1dlYlZpZXciLCJ3ZWJVcmwiLCJ3ZWJUaXRsZSIsIndlYnZpZXciLCJ3ZWJQaWMiLCJ0ZW1VcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ1bmkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGlwT2ZmIiwicmVsYXRpb25JZCIsImFwaSIsImFscmVhZHlMb2dpbiIsImFuaW1hdGlvblR5cGUiLCJhbmltYXRpb25EdXJhdGlvbiIsImNoZWNrQXBwVmVyc2lvbiIsInVwZGF0ZUZsYWciLCJzZW5kRGF0YSIsImdldFN5c3RlbUluZm9TeW5jIiwicGxhdGZvcm0iLCJtb2QiLCJnZXQiLCJ0aGVuIiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJkYXRhIiwidmVyc2lvbiIsImRlc2MiLCJhcGt1cmwiLCJjb21wYXJlVmVyc2lvbiIsInNlcnZpY2VWZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJwbHVzIiwicnVudGltZSIsImdldFByb3BlcnR5IiwiYXBwaWQiLCJ3Z3RpbmZvIiwibG9jYWxWZXJzaW9uIiwic3ViTlZ1ZSIsImdldFN1Yk5WdWVCeUlkIiwiYXBwIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsInVwZGF0ZVRpcCIsInNob3ciLCJnb3RvRGV0YWlsIiwiZGV0YWlsIiwidHlwZSIsImlkIiwic3R5bGUiLCJpbmRleE9mIiwicmVwbGFjZSIsImdldFN0b3JhZ2VTeW5jIiwidGl0bGUiLCJwaWMiLCJzcGxpdCIsInppZCIsImdldFZhck5hdmlCYXJIZWlnaHQiLCJuYXZpZ2F0b3IiLCJnZXRTdGF0dXNiYXJIZWlnaHQiLCJzY3JlZW4iLCJzY2FsZSIsImUiLCJpc0pzb25TdHJpbmciLCJzdHIiLCJKU09OIiwicGFyc2UiLCJmb3JtYXRBcnJheSIsImFycmF5IiwidGhlQXJyYXkiLCJpIiwibGVuZ3RoIiwicHVzaCIsImRhdGVDaGVjayIsIlJRIiwiZGF0ZSIsInJlc3VsdCIsIm1hdGNoIiwiZCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImZvcm1hdExvY2F0aW9uIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRvU3RyaW5nIiwiZGF0ZURpZmYiLCJkYXRlU3RyIiwibm93ZGF0ZSIsImRpZmYiLCJmb3JtYXRNaW51dGVzVGltZSIsIl9mb3JtYXQiLCJudW1iZXIiLCJwYXJzZUludCIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImZvcm1hdFRpbWUiLCJ0aW1lIiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIm1hcCIsIm4iLCJqb2luIiwiZm9ybWF0TWludXRlc0RheSIsImZvcm1hdERhdGVUaW1lIiwiZm9ybWF0RGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsImZvcm1hdE51bWJlciIsImdldERhdGVXaXRoQ291bnQiLCJkYXlDb3VudCIsImRkIiwic2V0RGF0ZSIsInkiLCJtIiwiZ2V0VGltZVdpdGhIb3VyIiwiaG91cnMiLCJ0dCIsImdldFRpbWUiLCJudHQiLCJnZXREYXlzQnlEYXRlU3RyaW5nIiwiZGF0ZVN0cmluZzEiLCJkYXRlU3RyaW5nMiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJkaWZmRGF0ZSIsImRheXMiLCJnZXREYXRlV2Vla2VuZCIsImRhdGVTdHJpbmciLCJhIiwid2VlayIsImdldERheSIsImRhdGVVdGlscyIsIlVOSVRTIiwiaHVtYW5pemUiLCJtaWxsaXNlY29uZHMiLCJrZXkiLCJNYXRoIiwiZmxvb3IiLCJmb3JtYXQiLCJub3ciLCJtaXN0aW1pbmciLCJyb3VuZCIsInRhZ3MiLCJ0aW1lcyIsImlubSIsImZvcm1hdFllYXJNaW51dGVzRGF5IiwiZm9ybWF0WWVhck1pbnV0ZXNEYXlGb3JtdCIsImZvcm1hdE1vbnRoRGF5IiwibXVsdGlBcnJheSIsIm5ld0FycmF5IiwicmVkdWNlIiwicHJldiIsIm5leHQiLCJpbmRleCIsIm9wZW5Mb2NhdGlvbiIsIm5hbWUiLCJhZGRyZXNzIiwiTnVtYmVyIiwiZmFpbCIsIm5hdmlnYXRlQmFjayIsIm9wZW5TaG9wTG9jYXRpb24iLCJzaG9wSW5mbyIsImNvb3JkaW5hdGVMbmciLCJjb29yZGluYXRlTGF0Iiwic2hvcE5hbWUiLCJuYXZpZ2F0ZVRvTG9jYXRpb24iLCJkZXNMb25naXR1ZGUiLCJkZXNMYXRpdHVkZSIsImRlc0FkZHJlc3MiLCJnZXRMb2NhdGlvbiIsInN1Y2Nlc3MiLCJzcmMiLCJtYXBzIiwiUG9pbnQiLCJwb2ludCIsIkdQUyIsImdjal9kZWNyeXB0X2V4YWN0IiwiZHN0IiwibG9uIiwibGF0Iiwib3BlblN5c01hcCIsImVyciIsImVyck1zZyIsImRpc3RhbmNlIiwibGF0QSIsImxvbkEiLCJsYXRCIiwibG9uQiIsIlBJIiwieF9waSIsImRlbHRhIiwiZWUiLCJkTGF0IiwidHJhbnNmb3JtTGF0IiwiZExvbiIsInRyYW5zZm9ybUxvbiIsInJhZExhdCIsIm1hZ2ljIiwic2luIiwic3FydE1hZ2ljIiwic3FydCIsImNvcyIsImdjal9lbmNyeXB0Iiwid2dzTGF0Iiwid2dzTG9uIiwib3V0T2ZDaGluYSIsImdjal9kZWNyeXB0IiwiZ2NqTGF0IiwiZ2NqTG9uIiwiaW5pdERlbHRhIiwidGhyZXNob2xkIiwibUxhdCIsIm1Mb24iLCJwTGF0IiwicExvbiIsInRtcCIsImFicyIsImVhcnRoUiIsIngiLCJzIiwiYWxwaGEiLCJhY29zIiwicmV0IiwiZnJpZW5kbHlEYXRlIiwidGltZXN0YW1wIiwiZm9ybWF0cyIsInNlY29uZHMiLCJtaW51dGVzIiwibW9udGhzIiwieWVhcnMiLCJkaWZmVHlwZSIsImRpZmZWYWx1ZSIsInVuaXF1ZSIsImFyciIsImZpZWxkIiwiZGF0ZVN0cmluZ1RvVGltZXN0YW1wIiwic3Vic3RyaW5nIiwidGltZXN0YW1wVG9EYXRlU3RyaW5nIiwiZ2V0U2hhcmVMaXN0Iiwic2hhcmVMaXN0IiwiZ2V0UHJvdmlkZXIiLCJzZXJ2aWNlIiwic3RyaW5naWZ5IiwicHJvdmlkZXIiLCJpdGVtIiwic2V0dXBTaGFyZUl0ZW0iLCJzY2VuZSIsImltYWdlIiwiY2xpY2tTaGFyZUl0ZW0iLCJpc1NoYXJlIiwiZG93bmxvYWRGaWxlIiwic3RhdHVzQ29kZSIsInppcCIsImNvbXByZXNzSW1hZ2UiLCJ0ZW1wRmlsZVBhdGgiLCJxdWFsaXR5Iiwib3ZlcndyaXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzaGFyZSIsInN1bW1hcnkiLCJocmVmIiwibGluayIsImltYWdlVXJsIiwidG9hc3RUaXBzVGltZSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjZDQUFBLG1GOztBQUVBOzs7Ozs7QUFNQSxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUE2QkMsUUFBN0IsRUFBc0NDLE9BQXRDLEVBQThDQyxNQUE5QyxFQUFzRDtBQUNyREQsU0FBTyxHQUFDQSxPQUFPLElBQUUsU0FBakI7QUFDQSxNQUFJRixNQUFKLEVBQVk7QUFDWCxRQUFJSSxNQUFNLEdBQUdDLGtCQUFrQixDQUFDTCxNQUFELENBQS9CO0FBQ0E7QUFDQSxRQUFJQyxRQUFKLEVBQWM7QUFDYixVQUFHRSxNQUFILEVBQVU7QUFDVEcsV0FBRyxDQUFDQyxVQUFKLENBQWU7QUFDZEMsYUFBRyxFQUFFLG9CQUFrQk4sT0FBbEIsR0FBMEIsVUFBMUIsR0FBdUNFLE1BQXZDLEdBQWdELFlBQWhELEdBQStESCxRQUEvRCxHQUEwRSxVQUExRSxHQUF1RkUsTUFEOUUsRUFBZjs7QUFHQSxPQUpELE1BSUs7QUFDSkcsV0FBRyxDQUFDQyxVQUFKLENBQWU7QUFDZEMsYUFBRyxFQUFFLG9CQUFrQk4sT0FBbEIsR0FBMEIsVUFBMUIsR0FBdUNFLE1BQXZDLEdBQWdELFlBQWhELEdBQStESCxRQUR0RCxFQUFmOztBQUdBO0FBQ0QsS0FWRCxNQVVPO0FBQ05LLFNBQUcsQ0FBQ0MsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSxvQkFBa0JOLE9BQWxCLEdBQTBCLFVBQTFCLEdBQXVDRSxNQUQ5QixFQUFmOztBQUdBO0FBQ0Q7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU0ss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QUEwQmhCRSx1QkFBcUIsRUFBR0EscUJBMUJSO0FBMkJoQjVGLHNCQUFvQixFQUFDQSxvQkEzQkw7QUE0QmhCQywyQkFBeUIsRUFBQ0EseUJBNUJWO0FBNkJoQkMsZ0JBQWMsRUFBQ0EsY0E3QkM7QUE4QmhCNUcsWUFBVSxFQUFDQSxVQTlCSztBQStCaEJ1TSxjQUFZLEVBQUNBLFlBL0JHO0FBZ0NoQlUsZ0JBQWMsRUFBQ0EsY0FoQ0M7QUFpQ2hCaEIsUUFBTSxFQUFDQSxNQWpDUyxFQUFqQixDIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tIFwiQC9hcGkvaW5kZXguanNcIlxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog6Lez6L2s5Yiwd2ViVmlld1xyXG4gKiDmlrnms5Xms6jph4o6IFxyXG4gKiDkvKDlhaXlj4LmlbA6IHdlYlVybC0+572R6aG16ZO+5o6lIHdlYlRpdGxlLT7nvZHpobXmoIfpopggd2ViUGljLT7nvZHpobXlm77niYdcclxuICog6L+U5Zue5pWw5YC8OiBcclxuICovXHJcbmZ1bmN0aW9uIGdvdG9XZWJWaWV3KHdlYlVybCwgd2ViVGl0bGUsd2Vidmlldyx3ZWJQaWMpIHtcclxuXHR3ZWJ2aWV3PXdlYnZpZXd8fCd3ZWJWaWV3J1xyXG5cdGlmICh3ZWJVcmwpIHtcclxuXHRcdHZhciB0ZW1VcmwgPSBlbmNvZGVVUklDb21wb25lbnQod2ViVXJsKTtcclxuXHRcdC8vLy9jb25zb2xlLmxvZyhcInRlbVVybHRlbVVybD0gXCIsIHRlbVVybCk7XHJcblx0XHRpZiAod2ViVGl0bGUpIHtcclxuXHRcdFx0aWYod2ViUGljKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL3dlYlZpZXcvXCIrd2VidmlldytcIj93ZWJVcmw9XCIgKyB0ZW1VcmwgKyBcIiZ3ZWJUaXRsZT1cIiArIHdlYlRpdGxlICsgXCImd2ViUGljPVwiICsgd2ViUGljXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy93ZWJWaWV3L1wiK3dlYnZpZXcrXCI/d2ViVXJsPVwiICsgdGVtVXJsICsgXCImd2ViVGl0bGU9XCIgKyB3ZWJUaXRsZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6IFwiL3BhZ2VzL3dlYlZpZXcvXCIrd2VidmlldytcIj93ZWJVcmw9XCIgKyB0ZW1VcmxcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IOS4vuaKpVxyXG4gKiDmlrnms5Xms6jph4o6IOS4jeeUqOS8oOS7u+S9leWPguaVsCzkvJrlhYjliKTmlq3nlKjmiLfmmK/lkKbnmbvlvZUs55m75b2V5LmL5ZCO5omN6Lez5Yiw5Li+5oql6aG16Z2iXHJcbiAqIOS8oOWFpeWPguaVsDog5pegXHJcbiAqIOi/lOWbnuaVsOWAvDog5pegXHJcbiAqL1xyXG5mdW5jdGlvbiB0aXBPZmYocmVsYXRpb25JZCkge1xyXG5cdGlmIChhcGkuYWxyZWFkeUxvZ2luKCkpIHtcclxuXHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiBcIi9wYWdlcy91c2VyL3VzZXJJbmRleC9pbmZvcm0/cmVsYXRpb25JZD1cIityZWxhdGlvbklkLFxyXG5cdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxyXG5cdFx0XHRhbmltYXRpb25EdXJhdGlvbjogMjAwXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tBcHBWZXJzaW9uKHVwZGF0ZUZsYWcpIHtcclxuXHJcblx0dmFyIHNlbmREYXRhID17XHJcblx0XHRcImFjdGlvblwiOlwidXBncmFkZVwiXHJcblx0fVxyXG5cdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKSB7XHJcblx0XHRzZW5kRGF0YS5tb2QgPVwiaW9zXCI7XHJcblx0fVxyXG5cdGFwaS5nZXQoXCJhcGkvbmNyYi9cIiwgc2VuZERhdGEsIFwiTlwiLGZhbHNlKS50aGVuKHJlcyA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcInJlcyA9IFwiLCByZXMpO1xyXG5cdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwic2VydmljZVZlcnNpb25cIiwgcmVzLmRhdGEudmVyc2lvbik7XHJcblx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJkZXNjcmlwdGlvblwiLCByZXMuZGF0YS5kZXNjKTtcclxuXHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImFwa3VybFwiLCByZXMuZGF0YS5hcGt1cmwpO1xyXG5cdFx0aWYodXBkYXRlRmxhZyl7XHJcblx0XHRcdGNvbXBhcmVWZXJzaW9uKHJlcy5kYXRhLnZlcnNpb24sIHJlcy5kYXRhLmRlc2MscmVzLmRhdGEuYXBrdXJsKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uKHNlcnZpY2VWZXJzaW9uLCBkZXNjcmlwdGlvbixhcGt1cmwpIHtcclxuXHJcblx0cGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuXHRcdHZhciBsb2NhbFZlcnNpb24gPSB3Z3RpbmZvLnZlcnNpb247IC8vYXBw5pys5Zyw5bqU55So54mI5pys5Y+3XHJcblx0XHRcclxuXHRcdGlmIChzZXJ2aWNlVmVyc2lvbiA+IGxvY2FsVmVyc2lvbikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInNlcnZpY2VWZXJzaW9uPVwiK3NlcnZpY2VWZXJzaW9uKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJsb2NhbFZlcnNpb249XCIrbG9jYWxWZXJzaW9uKTtcclxuXHRcdFx0Y29uc3Qgc3ViTlZ1ZSA9IHVuaS5nZXRTdWJOVnVlQnlJZCgndmVyc2lvblVwZGF0ZVRpcCcpO1xyXG5cdFx0XHQvLyDlnKggc3ViTlZ1ZS92dWUg6aG16Z2i6Kem5Y+R5LqL5Lu2ICBcclxuXHRcdFx0Ly8gJGVtaXQoZXZlbnROYW1lLCBkYXRhKSAgXHJcblx0XHRcdGNvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cdFx0XHRhcHAuZ2xvYmFsRGF0YS51cGRhdGVUaXAgPSBkZXNjcmlwdGlvbjtcclxuXHRcdFx0c3ViTlZ1ZS5zaG93KCk7XHJcblx0XHRcdC8vIHVuaS5zaG93TW9kYWwoeyAvL+aPkOmGkueUqOaIt+abtOaWsCAgXHJcblx0XHRcdC8vIFx0dGl0bGU6IFwi54mI5pys5pu05paw5ZWmXCIsXHJcblx0XHRcdC8vIFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdC8vIFx0Y29uZmlybVRleHQ6IFwi56uL5Y2z5pu05pawXCIsXHJcblx0XHRcdC8vIFx0Y29udGVudDogZGVzY3JpcHRpb24sXHJcblx0XHRcdC8vIFx0Y29tcGxldGUoZSkge1xyXG5cdFx0XHQvLyBcdFx0aWYgKGUuY29uZmlybSkge1xyXG5cdFx0XHQvLyBcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdC8vIFx0XHRcdFx0dXJsOicvcGFnZXMvdXNlci9zZXR0aW5nL3ZlcnNpb25VcGRhdGUnXHJcblx0XHRcdC8vIFx0XHRcdH0pO1xyXG5cdFx0XHQvLyBcdFx0fVxyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gfSlcclxuXHRcdH1cclxuXHR9KVxyXG5cclxufVxyXG5mdW5jdGlvbiBnb3RvRGV0YWlsKGRldGFpbCkge1xyXG5cdGlmKGRldGFpbC50eXBlICYmIGRldGFpbC50eXBlID09IDYxKXtcclxuXHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9leHBsYWluRGV0YWlscz9pZD0nICsgZGV0YWlsLmlkXHJcblx0XHR9KTtcclxuXHR9ZWxzZSBpZihkZXRhaWwuc3R5bGUgJiYgZGV0YWlsLnN0eWxlID09ICdhY3Rpdml0eScpe1xyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcvcGFnZXMvYWN0aXZpdHkvYWN0aXZpdHlEZXRhaWxzP2lkPScgKyBkZXRhaWwuaWRcclxuXHRcdH0pO1xyXG5cdH1lbHNlIGlmKGRldGFpbC5zdHlsZSAmJiBkZXRhaWwuc3R5bGUgPT0gJ3dlbnpoZW5nJyl7XHJcblx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy9wYWdlcy9pbnF1aXJlL2RldGFpbHM/aWQ9JyArIGRldGFpbC5pZFxyXG5cdFx0fSk7XHJcblx0fWVsc2UgaWYoZGV0YWlsLnVybCl7XHJcblx0XHRpZihkZXRhaWwudXJsID09ICcjJyB8fCAoZGV0YWlsLnN0eWxlID09ICdoNScgJiYgZGV0YWlsLnVybCA9PScnKSl7XHJcblx0XHQvLyB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHQvLyBcdHVybDogJy9wYWdlcy9pbnF1aXJlL2RldGFpbHM/aWQ9JyArIGRldGFpbC5pZFxyXG5cdFx0Ly8gfSk7XHJcblx0XHR9ZWxzZSBpZihkZXRhaWwudXJsLmluZGV4T2YoXCJodHRwOi8vXCIpID49MCB8fCBkZXRhaWwudXJsLmluZGV4T2YoXCJodHRwczovL1wiKSA+PTAgKXtcclxuXHRcdFx0aWYoZGV0YWlsLnVybC5pbmRleE9mKFwidW5pb25pZD17dW5pb25pZH1cIikgPj0wKXtcclxuXHRcdFx0XHRpZihhcGkuYWxyZWFkeUxvZ2luKCkpe1xyXG5cdFx0XHRcdFx0ZGV0YWlsLnVybCA9IGRldGFpbC51cmwucmVwbGFjZSgve3VuaW9uaWR9Lyx1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1bmlvbmlkXCIpKTtcclxuXHRcdFx0XHRcdGdvdG9XZWJWaWV3KGRldGFpbC51cmwsZGV0YWlsLnRpdGxlLCcnLGRldGFpbC5waWMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Z290b1dlYlZpZXcoZGV0YWlsLnVybCxkZXRhaWwudGl0bGUsJycsZGV0YWlsLnBpYyk7XHJcblx0XHRcdH1cclxuXHRcdH1lbHNlIGlmKGRldGFpbC51cmwuaW5kZXhPZihcIm5jbmV3czovL1wiKSA+PTApe1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoZGV0YWlsLnVybC5pbmRleE9mKFwibmNuZXdzOi8vdXBncmFkZVwiKSA+PTApe1xyXG5cdFx0XHRcdC8v57uZ5biC6ZW/55WZ6KiA5YiX6KGoXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3VzZXIvc2V0dGluZy92ZXJzaW9uVXBkYXRlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNlIGlmKGRldGFpbC51cmwuaW5kZXhPZihcIndlbnpoZW5nX2xpc3RfMTBcIikgPj0wKXtcclxuXHRcdFx0XHQvL+e7meW4gumVv+eVmeiogOWIl+ihqFxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbnF1aXJlL2lucXVpcmVEZXRhaWxzJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNlIGlmKGRldGFpbC51cmwuaW5kZXhPZihcIndlbnpoZW5nX2xpc3RfMTJcIikgPj0wKXtcclxuXHRcdFx0XHQvL+aAneaDs+Wkp+iuqOiuulxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbnF1aXJlL3Rob3VnaHREaXNjdXNzTGlzdCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2UgaWYoZGV0YWlsLnVybC5pbmRleE9mKFwid2Vuemhlbmdfc2VuZF9cIikgPj0wKXtcclxuXHRcdFx0XHR2YXIgdHlwZSAgPSBkZXRhaWwudXJsLnNwbGl0KCd3ZW56aGVuZ19zZW5kXycpWzFdO1xyXG5cdFx0XHRcdC8v6Zeu5pS/5YiX6KGoXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2lucXVpcmUvY29tcGxhaW50U3VnZ2VzdGlvbk1lc3NhZ2U/dHlwZT0nK3R5cGVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2UgaWYoZGV0YWlsLnVybC5pbmRleE9mKFwid2VuemhlbmdfbGlzdF9cIikgPj0wKXtcclxuXHRcdFx0XHR2YXIgdHlwZSAgPSBkZXRhaWwudXJsLnNwbGl0KCd3ZW56aGVuZ19saXN0XycpWzFdO1xyXG5cdFx0XHRcdC8v6Zeu5pS/5YiX6KGoXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2lucXVpcmUvaW5xdWlyZUxpc3Q/dHlwZT0nK3R5cGVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2UgaWYoZGV0YWlsLnVybC5pbmRleE9mKFwiY2hhbm5lbF9cIikgPj0wKXtcclxuXHRcdFx0XHR2YXIgdHlwZSAgPSBkZXRhaWwudXJsLnNwbGl0KCdjaGFubmVsXycpWzFdO1xyXG5cdFx0XHRcdC8v5paw6Ze75YiX6KGoXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL25ld3MvbmV3c0xpc3Q/dHlwZUlkPScrdHlwZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9ZWxzZSBpZihkZXRhaWwudXJsLmluZGV4T2YoXCJhcnRpY2xlX1wiKSA+PTApe1xyXG5cdFx0XHRcdHZhciBpZCA9IGRldGFpbC51cmwuc3BsaXQoJ2FydGljbGVfJylbMV07XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWxzP2lkPScgKyBpZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9ZWxzZSBpZihkZXRhaWwudXJsLmluZGV4T2YoXCJuY25ld3M6Ly96dF9cIikgPj0wKXtcclxuXHRcdFx0XHR2YXIgemlkID0gZGV0YWlsLnVybC5zcGxpdCgnbmNuZXdzOi8venRfJylbMV07XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL25ld3MvdG9waWM/emlkPScgKyB6aWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWxzP2lkPScgKyBkZXRhaWwuaWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1lbHNle1xyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcvcGFnZXMvZGV0YWlsL2RldGFpbHM/aWQ9JyArIGRldGFpbC5pZFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiBqc+iOt+WPluS4jemAmuiuvuWkh+S4i+eahOWvvOiIquagj+mrmOW6pizljZXkvY3mmK9weFxyXG4gKiDmlrnms5Xms6jph4o6IOS9v+eUqEpTT04ucGFyc2XkuYvliY3lhYjliKTmlq3lrZfnrKbkuLLmmK/lkKblj6/ovazkuLpqc29u5pWw5o2uXHJcbiAqIOS8oOWFpeWPguaVsDog5a2X56ym5LiyXHJcbiAqIOi/lOWbnuaVsOWAvDogc3RyaW5n5Y+v5Lul6L2sanNvbuWImei/lOWbnnRydWUs5ZCm5YiZ6L+U5ZueZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGdldFZhck5hdmlCYXJIZWlnaHQoKSB7XHJcblx0dHJ5IHtcclxuXHJcblx0XHRyZXR1cm4gcGx1cy5uYXZpZ2F0b3IuZ2V0U3RhdHVzYmFySGVpZ2h0KCkgKiBwbHVzLnNjcmVlbi5zY2FsZTtcclxuXHRcdC8vIHJldHVybiB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQgKyA0NCArICdweCc7XHJcblxyXG5cclxuXHJcblxyXG5cdH0gY2F0Y2ggKGUpIHt9XHJcblx0cmV0dXJuIDY0O1xyXG59XHJcblxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDliKTmlq3lrZfnrKbkuLLmmK/lkKblj6/ovazkuLpqc29u5pWw5o2uXHJcbiAqIOaWueazleazqOmHijog5L2/55SoSlNPTi5wYXJzZeS5i+WJjeWFiOWIpOaWreWtl+espuS4suaYr+WQpuWPr+i9rOS4umpzb27mlbDmja5cclxuICog5Lyg5YWl5Y+C5pWwOiDlrZfnrKbkuLJcclxuICog6L+U5Zue5pWw5YC8OiBzdHJpbmflj6/ku6Xovaxqc29u5YiZ6L+U5ZuedHJ1ZSzlkKbliJnov5Tlm55mYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNKc29uU3RyaW5nKHN0cikge1xyXG5cdHRyeSB7XHJcblx0XHRpZiAodHlwZW9mIEpTT04ucGFyc2Uoc3RyKSA9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGUpIHt9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGFycmF5KSB7XHJcblx0dmFyIHRoZUFycmF5ID0gW107XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGFycmF5W2ldICYmICEoYXJyYXlbaV0gPT0gJ3VuZGVmaW5lZCcpKSB7XHJcblx0XHRcdHRoZUFycmF5LnB1c2goYXJyYXlbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdGhlQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGVDaGVjayhSUSkge1xyXG5cdHZhciBkYXRlID0gUlE7XHJcblx0dmFyIHJlc3VsdCA9IGRhdGUubWF0Y2goL14oXFxkezEsNH0pKC18XFwvKShcXGR7MSwyfSlcXDIoXFxkezEsMn0pJC8pO1xyXG5cclxuXHRpZiAocmVzdWx0ID09IG51bGwpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0dmFyIGQgPSBuZXcgRGF0ZShyZXN1bHRbMV0sIHJlc3VsdFszXSAtIDEsIHJlc3VsdFs0XSk7XHJcblx0cmV0dXJuIChkLmdldEZ1bGxZZWFyKCkgPT0gcmVzdWx0WzFdICYmIChkLmdldE1vbnRoKCkgKyAxKSA9PSByZXN1bHRbM10gJiYgZC5nZXREYXRlKCkgPT0gcmVzdWx0WzRdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb2NhdGlvbihsb25naXR1ZGUsIGxhdGl0dWRlKSB7XHJcblx0aWYgKHR5cGVvZiBsb25naXR1ZGUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBsYXRpdHVkZSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdGxvbmdpdHVkZSA9IHBhcnNlRmxvYXQobG9uZ2l0dWRlKVxyXG5cdFx0bGF0aXR1ZGUgPSBwYXJzZUZsb2F0KGxhdGl0dWRlKVxyXG5cdH1cclxuXHJcblx0bG9uZ2l0dWRlID0gbG9uZ2l0dWRlLnRvRml4ZWQoMilcclxuXHRsYXRpdHVkZSA9IGxhdGl0dWRlLnRvRml4ZWQoMilcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGxvbmdpdHVkZTogbG9uZ2l0dWRlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKSxcclxuXHRcdGxhdGl0dWRlOiBsYXRpdHVkZS50b1N0cmluZygpLnNwbGl0KCcuJylcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGVEaWZmKGRhdGVTdHIpIHtcclxuXHR2YXIgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xyXG5cdHZhciBub3dkYXRlID0gbmV3IERhdGUoKTtcclxuXHR2YXIgZGlmZiA9IG5vd2RhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXRlKCk7XHJcblx0c3dpdGNoIChkaWZmKSB7XHJcblx0XHRjYXNlIDA6XHJcblx0XHRcdHJldHVybiAn5LuK5aSpJ1xyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSAxOlxyXG5cdFx0XHRyZXR1cm4gJ+aYqOWkqSdcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0cmV0dXJuICfliY3lpKknXHJcblx0XHRcdGJyZWFrXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gZGlmZiArICflpKnliY0nXHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE1pbnV0ZXNUaW1lKGRhdGVTdHIpIHtcclxuXHR2YXIgX2Zvcm1hdCA9IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0cmV0dXJuIChudW1iZXIgPCAxMCA/ICgnMCcgKyBudW1iZXIpIDogbnVtYmVyKTtcclxuXHR9O1xyXG5cdHZhciBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQoZGF0ZVN0cikpO1xyXG5cdHJldHVybiBfZm9ybWF0KGRhdGUuZ2V0SG91cnMoKSkgKyAnOicgKyBfZm9ybWF0KGRhdGUuZ2V0TWludXRlcygpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSkge1xyXG5cdGlmICh0eXBlb2YgdGltZSAhPT0gJ251bWJlcicgfHwgdGltZSA8IDApIHtcclxuXHRcdHJldHVybiB0aW1lXHJcblx0fVxyXG5cclxuXHR2YXIgaG91ciA9IHBhcnNlSW50KHRpbWUgLyAzNjAwKVxyXG5cdHRpbWUgPSB0aW1lICUgMzYwMFxyXG5cdHZhciBtaW51dGUgPSBwYXJzZUludCh0aW1lIC8gNjApXHJcblx0dGltZSA9IHRpbWUgJSA2MFxyXG5cdHZhciBzZWNvbmQgPSB0aW1lXHJcblxyXG5cdHJldHVybiAoW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXSkubWFwKGZ1bmN0aW9uKG4pIHtcclxuXHRcdG4gPSBuLnRvU3RyaW5nKClcclxuXHRcdHJldHVybiBuWzFdID8gbiA6ICcwJyArIG5cclxuXHR9KS5qb2luKCc6JylcclxufVxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5bCG5pel5pyf5qC85byP5YyW5Li65p+Q5pyI5p+Q5pelXHJcbiAqIOaWueazleazqOmHijog5q+U5aaC5Lyg5YWlMjAxOS0xMS0xMCzliJnov5Tlm54xMeaciDEw5pelXHJcbiAqIOS8oOWFpeWPguaVsDogZGF0ZVN0ciDml6XmnJ/lrZfnrKbkuLJcclxuICog6L+U5Zue5pWw5YC8OiDluKbmnInmnIjml6XnmoTml6XmnJ/lrZfnrKbkuLJcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdE1pbnV0ZXNEYXkoZGF0ZVN0cikge1xyXG5cdGlmIChkYXRlU3RyKSB7XHJcblx0XHRkYXRlU3RyID0gZGF0ZVN0ci5yZXBsYWNlKC8tL2lnLCBcIi9cIik7XHJcblx0fVxyXG5cdFxyXG5cdHZhciBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQoZGF0ZVN0cikpO1xyXG5cdHZhciBfZm9ybWF0ID0gZnVuY3Rpb24obnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gKG51bWJlciA8IDEwID8gKCcwJyArIG51bWJlcikgOiBudW1iZXIpO1xyXG5cdH07XHJcblx0cmV0dXJuICtfZm9ybWF0KGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJ+aciCcgKyBfZm9ybWF0KGRhdGUuZ2V0RGF0ZSgpKSArIFwi5pelXCI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlVGltZShkYXRlU3RyKSB7XHJcblx0dmFyIGRhdGU7XHJcblx0aWYgKGRhdGVTdHIpIHtcclxuXHRcdGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0fVxyXG5cclxuXHR2YXIgX2Zvcm1hdCA9IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0cmV0dXJuIChudW1iZXIgPCAxMCA/ICgnMCcgKyBudW1iZXIpIDogbnVtYmVyKTtcclxuXHR9O1xyXG5cdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBfZm9ybWF0KGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgX2Zvcm1hdChkYXRlLmdldERhdGUoKSkgKyAnICcgK1xyXG5cdFx0X2Zvcm1hdChkYXRlLmdldEhvdXJzKCkpICsgJzonICsgX2Zvcm1hdChkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gZGF0ZSA9PiB7XHJcblx0aWYgKCFkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG5cdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cdH1cclxuXHRjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcblx0Y29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcblx0Y29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcclxuXHRyZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy0nKVxyXG59O1xyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDojrflj5blvZPliY3ml6XmnJ/nmoTliY3lh6DlpKnmiJbogIXlkI7lh6DlpKlcclxuICog5pa55rOV5rOo6YeKOiBkYXlDb3VudOS8oOWFpei0n+aVsOavlOWmgi0zLOihqOekuuiOt+WPluW9k+WJjeaXpeacn+eahOWJjTPlpKks5Lyg5YWl5q2j5pWw5q+U5aaCMizooajnpLrojrflj5blkI7lpKnnmoTml6XmnJ9cclxuICog5Lyg5YWl5Y+C5pWwOiBkYXlDb3VudCDmraPmlbTmlbDmiJbogIXotJ/mlbTmlbBcclxuICog6L+U5Zue5pWw5YC8OiDliY3ml6XmnJ/nmoTliY3lh6DlpKnmiJbogIXlkI7lh6DlpKnnmoTlrZfnrKbkuLJcclxuICovXHJcbmNvbnN0IGdldERhdGVXaXRoQ291bnQgPSBkYXlDb3VudCA9PiB7XHJcblx0dmFyIGRkID0gbmV3IERhdGUoKTtcclxuXHRkZC5zZXREYXRlKGRkLmdldERhdGUoKSArIGRheUNvdW50KTsgLy/ojrflj5ZBZGREYXlDb3VudOWkqeWQjueahOaXpeacnyAgXHJcblx0dmFyIHkgPSBkZC5nZXRGdWxsWWVhcigpO1xyXG5cdHZhciBtID0gKGRkLmdldE1vbnRoKCkgKyAxKSA8IDEwID8gXCIwXCIgKyAoZGQuZ2V0TW9udGgoKSArIDEpIDogKGRkLmdldE1vbnRoKCkgKyAxKTsgLy/ojrflj5blvZPliY3mnIjku73nmoTml6XmnJ/vvIzkuI3otrMxMOihpTAgIFxyXG5cdHZhciBkID0gZGQuZ2V0RGF0ZSgpIDwgMTAgPyBcIjBcIiArIGRkLmdldERhdGUoKSA6IGRkLmdldERhdGUoKTsgLy/ojrflj5blvZPliY3lh6Dlj7fvvIzkuI3otrMxMOihpTAgIFxyXG5cdHJldHVybiB5ICsgXCItXCIgKyBtICsgXCItXCIgKyBkO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZVdpdGhIb3VyID0gaG91cnMgPT4ge1xyXG5cdHZhciBkZCA9IG5ldyBEYXRlKCk7XHJcblx0dmFyIHR0ID0gZGQuZ2V0VGltZSgpO1xyXG5cdHZhciBudHQgPSB0dCArIGhvdXJzICogNjAgKiAxMDAwO1xyXG5cdGRkLnNldERhdGUoZGQuZ2V0RGF0ZSgpICsgZGF5Q291bnQpOyAvL+iOt+WPlkFkZERheUNvdW505aSp5ZCO55qE5pel5pyfICBcclxuXHR2YXIgeSA9IGRkLmdldEZ1bGxZZWFyKCk7XHJcblx0dmFyIG0gPSAoZGQuZ2V0TW9udGgoKSArIDEpIDwgMTAgPyBcIjBcIiArIChkZC5nZXRNb250aCgpICsgMSkgOiAoZGQuZ2V0TW9udGgoKSArIDEpOyAvL+iOt+WPluW9k+WJjeaciOS7veeahOaXpeacn++8jOS4jei2szEw6KGlMCAgXHJcblx0dmFyIGQgPSBkZC5nZXREYXRlKCkgPCAxMCA/IFwiMFwiICsgZGQuZ2V0RGF0ZSgpIDogZGQuZ2V0RGF0ZSgpOyAvL+iOt+WPluW9k+WJjeWHoOWPt++8jOS4jei2szEw6KGlMCAgXHJcblx0cmV0dXJuIHkgKyBcIi1cIiArIG0gKyBcIi1cIiArIGQ7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0RGF5c0J5RGF0ZVN0cmluZyA9IChkYXRlU3RyaW5nMSwgZGF0ZVN0cmluZzIpID0+IHtcclxuXHR2YXIgc3RhcnREYXRlID0gRGF0ZS5wYXJzZShkYXRlU3RyaW5nMS5yZXBsYWNlKCcvLS9nJywgJy8nKSk7XHJcblx0dmFyIGVuZERhdGUgPSBEYXRlLnBhcnNlKGRhdGVTdHJpbmcyLnJlcGxhY2UoJy8tL2cnLCAnLycpKTtcclxuXHR2YXIgZGlmZkRhdGUgPSAoZW5kRGF0ZSAtIHN0YXJ0RGF0ZSkgKyAxICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuXHR2YXIgZGF5cyA9IGRpZmZEYXRlIC8gKDEgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuXHQvL2FsZXJ0KGRpZmZEYXRlLygxKjI0KjYwKjYwKjEwMDApKTsgIFxyXG5cdHJldHVybiBkYXlzO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog6I635Y+W5b2T5YmN5pel5pyf55qE5pif5pyfXHJcbiAqIOaWueazleazqOmHijogZGF0ZVN0cmluZ+S8oOWFpeaXpeacn+agvOW8j+eahOWtl+espuS4slxyXG4gKiDkvKDlhaXlj4LmlbA6IGRhdGVTdHJpbmfkvKDlhaXml6XmnJ/moLzlvI/nmoTlrZfnrKbkuLJcclxuICog6L+U5Zue5pWw5YC8OiDml6XmnJ/nmoTmmJ/mnJ9cclxuICovXHJcbmNvbnN0IGdldERhdGVXZWVrZW5kID0gZGF0ZVN0cmluZyA9PiB7XHJcblx0dmFyIGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChkYXRlU3RyaW5nKSk7XHJcblx0dmFyIGEgPSBbXCLml6VcIiwgXCLkuIBcIiwgXCLkuoxcIiwgXCLkuIlcIiwgXCLlm5tcIiwgXCLkupRcIiwgXCLlha1cIl07XHJcblx0dmFyIHdlZWsgPSBkYXRlLmdldERheSgpO1xyXG5cdHZhciBzdHIgPSBcIuWRqFwiICsgYVt3ZWVrXTtcclxuXHRyZXR1cm4gc3RyO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0TnVtYmVyID0gbiA9PiB7XHJcblx0biA9IG4udG9TdHJpbmcoKVxyXG5cdHJldHVybiBuWzFdID8gbiA6ICcwJyArIG5cclxufTtcclxuXHJcbnZhciBkYXRlVXRpbHMgPSB7XHJcblx0VU5JVFM6IHtcclxuXHRcdCflubQnOiAzMTU1NzYwMDAwMCxcclxuXHRcdCfmnIgnOiAyNjI5ODAwMDAwLFxyXG5cdFx0J+WkqSc6IDg2NDAwMDAwLFxyXG5cdFx0J+Wwj+aXtic6IDM2MDAwMDAsXHJcblx0XHQn5YiG6ZKfJzogNjAwMDAsXHJcblx0XHQn56eSJzogMTAwMFxyXG5cdH0sXHJcblx0aHVtYW5pemU6IGZ1bmN0aW9uKG1pbGxpc2Vjb25kcykge1xyXG5cdFx0dmFyIGh1bWFuaXplID0gJyc7XHJcblx0XHRmb3IgKHZhciBrZXkgaW4gdGhpcy5VTklUUykge1xyXG5cdFx0XHRpZiAobWlsbGlzZWNvbmRzID49IHRoaXMuVU5JVFNba2V5XSkge1xyXG5cdFx0XHRcdGh1bWFuaXplID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyB0aGlzLlVOSVRTW2tleV0pICsga2V5ICsgJ+WJjSc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBodW1hbml6ZSB8fCAn5Yia5YiaJztcclxuXHR9LFxyXG5cdGZvcm1hdDogZnVuY3Rpb24oZGF0ZVN0cikge1xyXG5cdFx0dmFyIGRhdGUgPSB0aGlzLnBhcnNlKGRhdGVTdHIpXHJcblx0XHR2YXIgZGlmZiA9IERhdGUubm93KCkgLSBkYXRlLmdldFRpbWUoKTtcclxuXHRcdGlmIChkaWZmIDwgdGhpcy5VTklUU1sn5aSpJ10pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHVtYW5pemUoZGlmZik7XHJcblx0XHR9XHJcblx0XHR2YXIgX2Zvcm1hdCA9IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0XHRyZXR1cm4gKG51bWJlciA8IDEwID8gKCcwJyArIG51bWJlcikgOiBudW1iZXIpO1xyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLycgKyBfZm9ybWF0KGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJy8nICsgX2Zvcm1hdChkYXRlLmdldERhdGUoKSkgKyAnLScgK1xyXG5cdFx0XHRfZm9ybWF0KGRhdGUuZ2V0SG91cnMoKSkgKyAnOicgKyBfZm9ybWF0KGRhdGUuZ2V0TWludXRlcygpKSArICcxMTEnO1xyXG5cdH0sXHJcblx0cGFyc2U6IGZ1bmN0aW9uKHN0cikgeyAvL+WwhlwieXl5eS1tbS1kZCBISDpNTTpzc1wi5qC85byP55qE5a2X56ym5Liy77yM6L2s5YyW5Li65LiA5LiqRGF0ZeWvueixoVxyXG5cdFx0dmFyIGEgPSBzdHIuc3BsaXQoL1teMC05XS8pO1xyXG5cdFx0cmV0dXJuIG5ldyBEYXRlKGFbMF0sIGFbMV0gLSAxLCBhWzJdLCBhWzNdLCBhWzRdLCBhWzVdKTtcclxuXHR9LFxyXG5cdGZvcm1hdERhdGU6IGZ1bmN0aW9uKGRhdGVTdHIpIHtcclxuXHRcdC8vY29uc3QgbWlzdGltaW5nID0gTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGRhdGVTdHIpLmdldFRpbWUoKSkgLyAxMDAwKVxyXG5cdFx0Ly9jb25zdCB0YWdzID0gWyflubQnLCAn5Liq5pyIJywgJ+aYn+acnycsICflpKknLCAn5bCP5pe2JywgJ+WIhumSnycsICfnp5InXVxyXG5cdFx0Ly9jb25zdCB0aW1lcyA9IFszMTUzNjAwMCwgMjU5MjAwMCwgNjA0ODAwLCA4NjQwMCwgMzYwMCwgNjAsIDFdXHJcblx0XHQvL2NvbnNvbGUuaW5mbyhcIm5ldyBEYXRlKGRhdGVTdHIpLmdldERhdGUoKTpcIiArIG5ldyBEYXRlKGRhdGVTdHIpLmdldERhdGUoKSArIFwiLS1cIiArIERhdGUubm93KCkpO1xyXG5cdFx0Y29uc3QgbWlzdGltaW5nID0gTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGRhdGVTdHIpKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcclxuXHRcdGNvbnN0IHRhZ3MgPSBbJ+W5tCcsICfkuKrmnIgnLCAn5pif5pyfJywgJ+WkqSddXHJcblx0XHRjb25zdCB0aW1lcyA9IFszMTUzNjAwMCwgMjU5MjAwMCwgNjA0ODAwLCA4NjQwMF1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaW5tID0gTWF0aC5mbG9vcihtaXN0aW1pbmcgLyB0aW1lc1tpXSlcclxuXHRcdFx0aWYgKHRhZ3NbaV0gPT09ICflpKknKSB7XHJcblx0XHRcdFx0c3dpdGNoIChpbm0pIHtcclxuXHRcdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdFx0cmV0dXJuICfku4rlpKknXHJcblx0XHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRcdHJldHVybiAn5pio5aSpJ1xyXG5cdFx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJ+WJjeWkqSdcclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHJldHVybiBpbm0gKyB0YWdzW2ldICsgJ+WJjSdcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpbm0gIT09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gaW5tICsgdGFnc1tpXSArICfliY0nXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5bCG5pel5pyf5qC85byP5YyW5Li65p+Q5pyI5p+Q5pelXHJcbiAqIOaWueazleazqOmHijog5q+U5aaC5Lyg5YWlMTU4MDAwMDAwMDAs5YiZ6L+U5ZueMTHmnIgxMOaXpVxyXG4gKiDkvKDlhaXlj4LmlbA6IGRhdGVTdHIg5pel5pyf5a2X56ym5LiyXHJcbiAqIOi/lOWbnuaVsOWAvDog5bim5pyJ5pyI5pel55qE5pel5pyf5a2X56ym5LiyXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXRZZWFyTWludXRlc0RheShkYXRlU3RyKSB7XHJcblx0dmFyIGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChkYXRlU3RyKSk7XHJcblx0dmFyIF9mb3JtYXQgPSBmdW5jdGlvbihudW1iZXIpIHtcclxuXHRcdHJldHVybiAobnVtYmVyIDwgMTAgPyAoJzAnICsgbnVtYmVyKSA6IG51bWJlcik7XHJcblx0fTtcclxuXHRyZXR1cm4gK2RhdGUuZ2V0RnVsbFllYXIoKSArICflubQnK19mb3JtYXQoZGF0ZS5nZXRNb250aCgpICsgMSkgKyAn5pyIJyArIF9mb3JtYXQoZGF0ZS5nZXREYXRlKCkpICsgXCLml6VcIjtcclxufTtcclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5bCG5pel5pyf5qC85byP5YyW5Li65p+Q5pyI5p+Q5pelXHJcbiAqIOaWueazleazqOmHijog5q+U5aaC5Lyg5YWlMTU4MDAwMDAwMDAs5YiZ6L+U5ZueMTHmnIgxMOaXpVxyXG4gKiDkvKDlhaXlj4LmlbA6IGRhdGVTdHIg5pel5pyf5a2X56ym5LiyXHJcbiAqIOi/lOWbnuaVsOWAvDog5bim5pyJ5pyI5pel55qE5pel5pyf5a2X56ym5LiyXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXRZZWFyTWludXRlc0RheUZvcm10KGRhdGVTdHIpIHtcclxuXHR2YXIgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGVTdHIpKTtcclxuXHR2YXIgX2Zvcm1hdCA9IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0cmV0dXJuIChudW1iZXIgPCAxMCA/ICgnMCcgKyBudW1iZXIpIDogbnVtYmVyKTtcclxuXHR9O1xyXG5cdHJldHVybiArZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nK19mb3JtYXQoZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnLScgKyBfZm9ybWF0KGRhdGUuZ2V0RGF0ZSgpKSArIFwiXCI7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5bCG5pel5pyf5qC85byP5YyW5Li65p+Q5pyI5p+Q5pelXHJcbiAqIOaWueazleazqOmHijog5q+U5aaC5Lyg5YWlMTU4MDAwMDAwMDAs5YiZ6L+U5ZueMTEvMTBcclxuICog5Lyg5YWl5Y+C5pWwOiBkYXRlU3RyIOaXpeacn+Wtl+espuS4slxyXG4gKiDov5Tlm57mlbDlgLw6IDExLzEwXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXRNb250aERheShkYXRlU3RyKSB7XHJcblx0dmFyIGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChkYXRlU3RyKSk7XHJcblx0dmFyIF9mb3JtYXQgPSBmdW5jdGlvbihudW1iZXIpIHtcclxuXHRcdHJldHVybiAobnVtYmVyIDwgMTAgPyAoJzAnICsgbnVtYmVyKSA6IG51bWJlcik7XHJcblx0fTtcclxuXHRyZXR1cm4gX2Zvcm1hdChkYXRlLmdldE1vbnRoKCkgKyAxKSArICcvJyArIF9mb3JtYXQoZGF0ZS5nZXREYXRlKCkpO1xyXG59O1xyXG4vLyDlsIbkuIDnu7TmlbDnu4Tmi4bliIbmiJDkuoznu7TmlbDnu4RcclxuZnVuY3Rpb24gbXVsdGlBcnJheShhcnJheSkge1xyXG5cdGNvbnN0IG5ld0FycmF5ID0gYXJyYXkucmVkdWNlKChwcmV2LCBuZXh0LCBpbmRleCkgPT4ge1xyXG5cdFx0aWYgKGluZGV4ICUgMiA9PT0gMCkge1xyXG5cdFx0XHRwcmV2LnB1c2goW10pXHJcblx0XHR9XHJcblx0XHRwcmV2W3ByZXYubGVuZ3RoIC0gMV0ucHVzaChuZXh0KTtcclxuXHRcdHJldHVybiBwcmV2O1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gbmV3QXJyYXlcclxufVxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDmiZPlvIDmn5DkuKrlnLDngrnnmoTmiYDlnKjkvY3nva7nmoTlnLDlm75cclxuICog5pa55rOV5rOo6YeKOiBcclxuICog5Lyg5YWl5Y+C5pWwOiBcclxuICog6L+U5Zue5pWw5YC8OiBcclxuICovXHJcbmZ1bmN0aW9uIG9wZW5Mb2NhdGlvbihsb25naXR1ZGUsIGxhdGl0dWRlLCBuYW1lLCBhZGRyZXNzKSB7XHJcblx0dW5pLm9wZW5Mb2NhdGlvbih7XHJcblx0XHRsb25naXR1ZGU6IE51bWJlcihsb25naXR1ZGUpLFxyXG5cdFx0bGF0aXR1ZGU6IE51bWJlcihsYXRpdHVkZSksXHJcblx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0YWRkcmVzczogYWRkcmVzcyxcclxuXHRcdGZhaWwoKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IOaJk+W8gOW6l+mTuuWcsOWdgOeahOS9jee9rlxyXG4gKiDmlrnms5Xms6jph4o6IFxyXG4gKiDkvKDlhaXlj4LmlbA6IHNob3BJbmZv5bqX6ZO65L+h5oGv5b+F6aG75YyF5ZCr57uP57qs5bqmL+W6l+mTuuWQjeensC/lupfpk7rlnLDlnYBcclxuICog6L+U5Zue5pWw5YC8OiDml6BcclxuICovXHJcbmZ1bmN0aW9uIG9wZW5TaG9wTG9jYXRpb24oc2hvcEluZm8pIHtcclxuXHRpZiAoIXNob3BJbmZvKSByZXR1cm47XHJcblx0dW5pLm9wZW5Mb2NhdGlvbih7XHJcblx0XHRsb25naXR1ZGU6IE51bWJlcihzaG9wSW5mby5jb29yZGluYXRlTG5nKSxcclxuXHRcdGxhdGl0dWRlOiBOdW1iZXIoc2hvcEluZm8uY29vcmRpbmF0ZUxhdCksXHJcblx0XHRuYW1lOiBzaG9wSW5mby5zaG9wTmFtZSxcclxuXHRcdGFkZHJlc3M6IHNob3BJbmZvLmFkZHJlc3MsXHJcblx0XHRmYWlsKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDlr7zoiKroh7Pnm67nmoTlnLBcclxuICog5pa55rOV5rOo6YeKOiDpnIDopoHkvKDlhaXnm67nmoTlnLDnmoTnu4/luqbjgIHnu7TluqbvvIzlpoLmnpzkuI3kvKDpu5jorqTnm67nmoTmmK/mu5XnjovpmIHvvIzlvZPliY3kvY3nva7pu5jorqTkuLrnlKjmiLfmiYDlnKjkvY3nva7vvIzmtYvor5Xml7blj6/pu5jorqTkuLrljZfmmIzml6XmiqXlpKfljqZcclxuICog5Lyg5YWl5Y+C5pWwOiBkZXNMb25naXR1ZGUtPuebrueahOWcsOeahOe7j+W6piBkZXNMYXRpdHVkZS0+55uu55qE5Zyw55qE57qs5bqmIGRlc0FkZHJlc3MtPuebrueahOeahOWcsOWdgOWQjeensO+8jOavlOWmgua7leeOi+mYgVxyXG4gKiDov5Tlm57mlbDlgLw6IOaXoOi/lOWbnuWAvO+8jOiOt+WPluW9k+WJjeeUqOaIt+S9jee9ruWksei0peaXtuS8muW8ueahhuaPkOekulxyXG4gKi9cclxuZnVuY3Rpb24gbmF2aWdhdGVUb0xvY2F0aW9uKGRlc0xvbmdpdHVkZSA9IDExNS44ODExNDEsIGRlc0xhdGl0dWRlID0gMjguNjgxMzU2LCBkZXNBZGRyZXNzID0gJ+a7leeOi+mYgScpIHtcclxuXHJcblx0dW5pLmdldExvY2F0aW9uKHtcclxuXHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0Ly92YXIgc3JjID0gbmV3IHBsdXMubWFwcy5Qb2ludCgxMTUuODg1NDQ5LDI4LjcxMzU5KTtcdCBcdFx0Ly8g5Y2X5piM5pel5oql5aSn5Y6m77yI6auY5b635Z2Q5qCH77yJXHJcblx0XHRcdC8vIHZhciBkc3QgPSBuZXcgcGx1cy5tYXBzLlBvaW50KGRlc0xvbmdpdHVkZSxkZXNMYXRpdHVkZSk7ICAgICAvLyDnm67nmoTlnLDkvY3nva7vvIjpq5jlvrflnZDmoIfvvIlcclxuXHJcblx0XHRcdC8vdmFyIHNyYyA9IG5ldyBwbHVzLm1hcHMuUG9pbnQoMTE1Ljg4NTQ0OSwyOC43MTM1OSk7XHQgXHRcdC8vIOWNl+aYjOaXpeaKpeWkp+WOpu+8iOmrmOW+t+WdkOagh++8iVxyXG5cdFx0XHQvLyB2YXIgZHN0ID0gbmV3IHBsdXMubWFwcy5Qb2ludChkZXNMb25naXR1ZGUsZGVzTGF0aXR1ZGUpOyAgICAgLy8g55uu55qE5Zyw5L2N572u77yI6auY5b635Z2Q5qCH77yJXHJcblx0XHRcdC8vLy9jb25zb2xlLmxvZyhyZXMubG9uZ2l0dWRlLCByZXMubGF0aXR1ZGUpO1xyXG5cdFx0XHR2YXIgc3JjID0gbmV3IHBsdXMubWFwcy5Qb2ludChyZXMubG9uZ2l0dWRlLCByZXMubGF0aXR1ZGUpOyAvLyDlvZPliY3kvY3nva4gKOmrmOW+t+WdkOaghylcclxuXHRcdFx0dmFyIHBvaW50ID0gR1BTLmdjal9kZWNyeXB0X2V4YWN0KGRlc0xvbmdpdHVkZSwgZGVzTGF0aXR1ZGUpXHJcblx0XHRcdHZhciBkc3QgPSBuZXcgcGx1cy5tYXBzLlBvaW50KHBvaW50LmxvbiwgcG9pbnQubGF0KTsgLy8g5Y2X5piM5ruV546L6ZiBICjpq5jlvrflnZDmoIcpXHJcblx0XHRcdHBsdXMubWFwcy5vcGVuU3lzTWFwKGRzdCwgZGVzQWRkcmVzcywgc3JjKTtcclxuXHRcdH0sXHJcblx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblxyXG5cdFx0XHR2YXIgc3JjID0gbmV3IHBsdXMubWFwcy5Qb2ludCgxMTUuODg1NDQ5LCAyOC43MTM1OSk7IC8vIOWNl+aYjOaXpeaKpeWkp+WOpu+8iOmrmOW+t+WdkOagh++8iVxyXG5cdFx0XHR2YXIgZHN0ID0gbmV3IHBsdXMubWFwcy5Qb2ludChkZXNMb25naXR1ZGUsIGRlc0xhdGl0dWRlKTsgLy8g5Y2X5piM5ruV546L6ZiBICjpq5jlvrflnZDmoIcpXHJcblx0XHRcdHBsdXMubWFwcy5vcGVuU3lzTWFwKGRzdCwgZGVzQWRkcmVzcywgc3JjKTtcclxuXHRcdFx0aWYgKGVyci5lcnJNc2cuaW5kZXhPZihcImF1dGggZGVueVwiKSA+PSAwKSB7XHJcblx0XHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0Ly8gXHR0aXRsZTogXCLorr/pl67kvY3nva7ooqvmi5Lnu50s6K+35Yiw6K6+572u5Lit5YWB6K64eWXljZfmmIzlvIDlkK/kvY3nva7orr/pl67mnYPpmZBcIlxyXG5cdFx0XHRcdC8vIH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0Ly8gXHR0aXRsZTogZXJyLmVyck1zZ1xyXG5cdFx0XHRcdC8vIH0pXHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXN0YW5jZShsYXRBLCBsb25BLCBsYXRCLCBsb25CKSB7XHJcblx0cmV0dXJuIEdQUy5kaXN0YW5jZShsYXRBLCBsb25BLCBsYXRCLCBsb25CKTtcclxufVxyXG52YXIgR1BTID0ge1xyXG5cdFBJOiAzLjE0MTU5MjY1MzU4OTc5MzI0LFxyXG5cdHhfcGk6IDMuMTQxNTkyNjUzNTg5NzkzMjQgKiAzMDAwLjAgLyAxODAuMCxcclxuXHRkZWx0YTogZnVuY3Rpb24obGF0LCBsb24pIHtcclxuXHRcdC8vIEtyYXNvdnNreSAxOTQwXHJcblx0XHQvL1xyXG5cdFx0Ly8gYSA9IDYzNzgyNDUuMCwgMS9mID0gMjk4LjNcclxuXHRcdC8vIGIgPSBhICogKDEgLSBmKVxyXG5cdFx0Ly8gZWUgPSAoYV4yIC0gYl4yKSAvIGFeMjtcclxuXHRcdHZhciBhID0gNjM3ODI0NS4wOyAvLyAgYTog5Y2r5pif5qSt55CD5Z2Q5qCH5oqV5b2x5Yiw5bmz6Z2i5Zyw5Zu+5Z2Q5qCH57O755qE5oqV5b2x5Zug5a2Q44CCXHJcblx0XHR2YXIgZWUgPSAwLjAwNjY5MzQyMTYyMjk2NTk0MzIzOyAvLyAgZWU6IOakreeQg+eahOWBj+W/g+eOh+OAglxyXG5cdFx0dmFyIGRMYXQgPSB0aGlzLnRyYW5zZm9ybUxhdChsb24gLSAxMDUuMCwgbGF0IC0gMzUuMCk7XHJcblx0XHR2YXIgZExvbiA9IHRoaXMudHJhbnNmb3JtTG9uKGxvbiAtIDEwNS4wLCBsYXQgLSAzNS4wKTtcclxuXHRcdHZhciByYWRMYXQgPSBsYXQgLyAxODAuMCAqIHRoaXMuUEk7XHJcblx0XHR2YXIgbWFnaWMgPSBNYXRoLnNpbihyYWRMYXQpO1xyXG5cdFx0bWFnaWMgPSAxIC0gZWUgKiBtYWdpYyAqIG1hZ2ljO1xyXG5cdFx0dmFyIHNxcnRNYWdpYyA9IE1hdGguc3FydChtYWdpYyk7XHJcblx0XHRkTGF0ID0gKGRMYXQgKiAxODAuMCkgLyAoKGEgKiAoMSAtIGVlKSkgLyAobWFnaWMgKiBzcXJ0TWFnaWMpICogdGhpcy5QSSk7XHJcblx0XHRkTG9uID0gKGRMb24gKiAxODAuMCkgLyAoYSAvIHNxcnRNYWdpYyAqIE1hdGguY29zKHJhZExhdCkgKiB0aGlzLlBJKTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdCdsYXQnOiBkTGF0LFxyXG5cdFx0XHQnbG9uJzogZExvblxyXG5cdFx0fTtcclxuXHR9LFxyXG5cclxuXHQvL1dHUy04NCB0byBHQ0otMDJcclxuXHRnY2pfZW5jcnlwdDogZnVuY3Rpb24od2dzTGF0LCB3Z3NMb24pIHtcclxuXHRcdGlmICh0aGlzLm91dE9mQ2hpbmEod2dzTGF0LCB3Z3NMb24pKVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdCdsYXQnOiB3Z3NMYXQsXHJcblx0XHRcdFx0J2xvbic6IHdnc0xvblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdHZhciBkID0gdGhpcy5kZWx0YSh3Z3NMYXQsIHdnc0xvbik7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQnbGF0Jzogd2dzTGF0ICsgZC5sYXQsXHJcblx0XHRcdCdsb24nOiB3Z3NMb24gKyBkLmxvblxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdC8vR0NKLTAyIHRvIFdHUy04NFxyXG5cdGdjal9kZWNyeXB0OiBmdW5jdGlvbihnY2pMYXQsIGdjakxvbikge1xyXG5cdFx0aWYgKHRoaXMub3V0T2ZDaGluYShnY2pMYXQsIGdjakxvbikpXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0J2xhdCc6IGdjakxhdCxcclxuXHRcdFx0XHQnbG9uJzogZ2NqTG9uXHJcblx0XHRcdH07XHJcblxyXG5cdFx0dmFyIGQgPSB0aGlzLmRlbHRhKGdjakxhdCwgZ2NqTG9uKTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdCdsYXQnOiBnY2pMYXQgLSBkLmxhdCxcclxuXHRcdFx0J2xvbic6IGdjakxvbiAtIGQubG9uXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Ly9HQ0otMDIgdG8gV0dTLTg0IGV4YWN0bHlcclxuXHRnY2pfZGVjcnlwdF9leGFjdDogZnVuY3Rpb24oZ2NqTG9uLCBnY2pMYXQpIHtcclxuXHRcdHZhciBpbml0RGVsdGEgPSAwLjAxO1xyXG5cdFx0dmFyIHRocmVzaG9sZCA9IDAuMDAwMDAwMDAxO1xyXG5cdFx0dmFyIGRMYXQgPSBpbml0RGVsdGEsXHJcblx0XHRcdGRMb24gPSBpbml0RGVsdGE7XHJcblx0XHR2YXIgbUxhdCA9IGdjakxhdCAtIGRMYXQsXHJcblx0XHRcdG1Mb24gPSBnY2pMb24gLSBkTG9uO1xyXG5cdFx0dmFyIHBMYXQgPSBnY2pMYXQgKyBkTGF0LFxyXG5cdFx0XHRwTG9uID0gZ2NqTG9uICsgZExvbjtcclxuXHRcdHZhciB3Z3NMYXQsIHdnc0xvbiwgaSA9IDA7XHJcblx0XHR3aGlsZSAoMSkge1xyXG5cdFx0XHR3Z3NMYXQgPSAobUxhdCArIHBMYXQpIC8gMjtcclxuXHRcdFx0d2dzTG9uID0gKG1Mb24gKyBwTG9uKSAvIDI7XHJcblx0XHRcdHZhciB0bXAgPSB0aGlzLmdjal9lbmNyeXB0KHdnc0xhdCwgd2dzTG9uKVxyXG5cdFx0XHRkTGF0ID0gdG1wLmxhdCAtIGdjakxhdDtcclxuXHRcdFx0ZExvbiA9IHRtcC5sb24gLSBnY2pMb247XHJcblx0XHRcdGlmICgoTWF0aC5hYnMoZExhdCkgPCB0aHJlc2hvbGQpICYmIChNYXRoLmFicyhkTG9uKSA8IHRocmVzaG9sZCkpXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRpZiAoZExhdCA+IDApIHBMYXQgPSB3Z3NMYXQ7XHJcblx0XHRcdGVsc2UgbUxhdCA9IHdnc0xhdDtcclxuXHRcdFx0aWYgKGRMb24gPiAwKSBwTG9uID0gd2dzTG9uO1xyXG5cdFx0XHRlbHNlIG1Mb24gPSB3Z3NMb247XHJcblxyXG5cdFx0XHRpZiAoKytpID4gMTAwMDApIGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Ly8vLy8vY29uc29sZS5sb2coaSk7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQnbG9uJzogd2dzTG9uLFxyXG5cdFx0XHQnbGF0Jzogd2dzTGF0XHJcblx0XHR9O1xyXG5cdH0sXHJcblxyXG5cdC8vIHR3byBwb2ludCdzIGRpc3RhbmNlXHJcblx0ZGlzdGFuY2U6IGZ1bmN0aW9uKGxhdEEgPSAxMTUuODU3OTYzLCBsb25BID0gMjguNjkyNiwgbGF0QiwgbG9uQikge1xyXG5cdFx0bGF0QSA9IGxhdEEgfHwgMTE1Ljg1Nzk2MywgbG9uQSA9IGxvbkEgfHwgMjguNjkyNlxyXG5cdFx0dmFyIGVhcnRoUiA9IDYzNzEwMDAuO1xyXG5cdFx0dmFyIHggPSBNYXRoLmNvcyhsYXRBICogdGhpcy5QSSAvIDE4MC4pICogTWF0aC5jb3MobGF0QiAqIHRoaXMuUEkgLyAxODAuKSAqIE1hdGguY29zKChsb25BIC0gbG9uQikgKiB0aGlzLlBJIC8gMTgwKTtcclxuXHRcdHZhciB5ID0gTWF0aC5zaW4obGF0QSAqIHRoaXMuUEkgLyAxODAuKSAqIE1hdGguc2luKGxhdEIgKiB0aGlzLlBJIC8gMTgwLik7XHJcblx0XHR2YXIgcyA9IHggKyB5O1xyXG5cdFx0aWYgKHMgPiAxKSBzID0gMTtcclxuXHRcdGlmIChzIDwgLTEpIHMgPSAtMTtcclxuXHRcdHZhciBhbHBoYSA9IE1hdGguYWNvcyhzKTtcclxuXHRcdHZhciBkaXN0YW5jZSA9IGFscGhhICogZWFydGhSO1xyXG5cdFx0cmV0dXJuIGRpc3RhbmNlO1xyXG5cdH0sXHJcblx0b3V0T2ZDaGluYTogZnVuY3Rpb24obGF0LCBsb24pIHtcclxuXHRcdGlmIChsb24gPCA3Mi4wMDQgfHwgbG9uID4gMTM3LjgzNDcpXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0aWYgKGxhdCA8IDAuODI5MyB8fCBsYXQgPiA1NS44MjcxKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdHRyYW5zZm9ybUxhdDogZnVuY3Rpb24oeCwgeSkge1xyXG5cdFx0dmFyIHJldCA9IC0xMDAuMCArIDIuMCAqIHggKyAzLjAgKiB5ICsgMC4yICogeSAqIHkgKyAwLjEgKiB4ICogeSArIDAuMiAqIE1hdGguc3FydChNYXRoLmFicyh4KSk7XHJcblx0XHRyZXQgKz0gKDIwLjAgKiBNYXRoLnNpbig2LjAgKiB4ICogdGhpcy5QSSkgKyAyMC4wICogTWF0aC5zaW4oMi4wICogeCAqIHRoaXMuUEkpKSAqIDIuMCAvIDMuMDtcclxuXHRcdHJldCArPSAoMjAuMCAqIE1hdGguc2luKHkgKiB0aGlzLlBJKSArIDQwLjAgKiBNYXRoLnNpbih5IC8gMy4wICogdGhpcy5QSSkpICogMi4wIC8gMy4wO1xyXG5cdFx0cmV0ICs9ICgxNjAuMCAqIE1hdGguc2luKHkgLyAxMi4wICogdGhpcy5QSSkgKyAzMjAgKiBNYXRoLnNpbih5ICogdGhpcy5QSSAvIDMwLjApKSAqIDIuMCAvIDMuMDtcclxuXHRcdHJldHVybiByZXQ7XHJcblx0fSxcclxuXHR0cmFuc2Zvcm1Mb246IGZ1bmN0aW9uKHgsIHkpIHtcclxuXHRcdHZhciByZXQgPSAzMDAuMCArIHggKyAyLjAgKiB5ICsgMC4xICogeCAqIHggKyAwLjEgKiB4ICogeSArIDAuMSAqIE1hdGguc3FydChNYXRoLmFicyh4KSk7XHJcblx0XHRyZXQgKz0gKDIwLjAgKiBNYXRoLnNpbig2LjAgKiB4ICogdGhpcy5QSSkgKyAyMC4wICogTWF0aC5zaW4oMi4wICogeCAqIHRoaXMuUEkpKSAqIDIuMCAvIDMuMDtcclxuXHRcdHJldCArPSAoMjAuMCAqIE1hdGguc2luKHggKiB0aGlzLlBJKSArIDQwLjAgKiBNYXRoLnNpbih4IC8gMy4wICogdGhpcy5QSSkpICogMi4wIC8gMy4wO1xyXG5cdFx0cmV0ICs9ICgxNTAuMCAqIE1hdGguc2luKHggLyAxMi4wICogdGhpcy5QSSkgKyAzMDAuMCAqIE1hdGguc2luKHggLyAzMC4wICogdGhpcy5QSSkpICogMi4wIC8gMy4wO1xyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmcmllbmRseURhdGUodGltZXN0YW1wKSB7XHJcblx0dmFyIGZvcm1hdHMgPSB7XHJcblx0XHQneWVhcic6ICclbiUg5bm05YmNJyxcclxuXHRcdCdtb250aCc6ICclbiUg5pyI5YmNJyxcclxuXHRcdCdkYXknOiAnJW4lIOWkqeWJjScsXHJcblx0XHQnaG91cic6ICclbiUg5bCP5pe25YmNJyxcclxuXHRcdCdtaW51dGUnOiAnJW4lIOWIhumSn+WJjScsXHJcblx0XHQnc2Vjb25kJzogJyVuJSDnp5LliY0nLFxyXG5cdH07XHJcblxyXG5cdHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG5cdHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigobm93IC0gdGltZXN0YW1wKSAvIDEwMDApO1xyXG5cdHZhciBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG5cdHZhciBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuXHR2YXIgZGF5cyA9IE1hdGguZmxvb3IoaG91cnMgLyAyNCk7XHJcblx0dmFyIG1vbnRocyA9IE1hdGguZmxvb3IoZGF5cyAvIDMwKTtcclxuXHR2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTtcclxuXHJcblx0dmFyIGRpZmZUeXBlID0gJyc7XHJcblx0dmFyIGRpZmZWYWx1ZSA9IDA7XHJcblx0aWYgKHllYXJzID4gMCkge1xyXG5cdFx0ZGlmZlR5cGUgPSAneWVhcic7XHJcblx0XHRkaWZmVmFsdWUgPSB5ZWFycztcclxuXHR9IGVsc2Uge1xyXG5cdFx0aWYgKG1vbnRocyA+IDApIHtcclxuXHRcdFx0ZGlmZlR5cGUgPSAnbW9udGgnO1xyXG5cdFx0XHRkaWZmVmFsdWUgPSBtb250aHM7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoZGF5cyA+IDApIHtcclxuXHRcdFx0XHRkaWZmVHlwZSA9ICdkYXknO1xyXG5cdFx0XHRcdGRpZmZWYWx1ZSA9IGRheXM7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGhvdXJzID4gMCkge1xyXG5cdFx0XHRcdFx0ZGlmZlR5cGUgPSAnaG91cic7XHJcblx0XHRcdFx0XHRkaWZmVmFsdWUgPSBob3VycztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKG1pbnV0ZXMgPiAwKSB7XHJcblx0XHRcdFx0XHRcdGRpZmZUeXBlID0gJ21pbnV0ZSc7XHJcblx0XHRcdFx0XHRcdGRpZmZWYWx1ZSA9IG1pbnV0ZXM7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRkaWZmVHlwZSA9ICdzZWNvbmQnO1xyXG5cdFx0XHRcdFx0XHRkaWZmVmFsdWUgPSBzZWNvbmRzID09PSAwID8gKHNlY29uZHMgPSAxKSA6IHNlY29uZHM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmb3JtYXRzW2RpZmZUeXBlXS5yZXBsYWNlKCclbiUnLCBkaWZmVmFsdWUpO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOagueaNruWtl+auteWOu+mHjVxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXJyIOmbhuWQiFxyXG4gKiBAcGFyYW0ge09iamVjdH0gZmllbGQg5Y676YeN5a2X5q61XHJcbiAqL1xyXG5mdW5jdGlvbiB1bmlxdWUoYXJyLGZpZWxkKXtcclxuICAgIHZhciBtYXAgPSB7fTtcclxuICAgIHZhciByZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFtYXBbYXJyW2ldW2ZpZWxkXV0pIHtcclxuICAgICAgICAgICAgbWFwW2FycltpXVtmaWVsZF1dPTE7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGFycltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cdHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gICog5pa55rOV5ZCN56ewOiDml6XmnJ/lrZfnrKbkuLLovazml7bpl7TmiLNcclxuICAqIOaWueazleazqOmHijog5pe26Ze05oiz5YC86L2s5Yiw56eS77yM5LiN5Yiw5q+r56eSXHJcbiAgKiDkvKDlhaXlj4LmlbA6IGRhdGVTdHJpbmcg5pel5pyf5a2X56ym5LiyXHJcbiAgKiDov5Tlm57mlbDlgLw6IOaXtumXtOaIs1xyXG4qL1xyXG5mdW5jdGlvbiBkYXRlU3RyaW5nVG9UaW1lc3RhbXAoZGF0ZVN0cmluZyl7XHJcblx0ZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyaW5nKDAsMTYpOy8v5oiq5Y+W5Yiw56eSXHJcblx0ZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcucmVwbGFjZSgvLS9nLCcvJyk7IC8v5b+F6aG75oqK5pel5pyfJy0n6L2s5Li6Jy8nXHJcblx0dmFyIHRpbWVzdGFtcCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpLmdldFRpbWUoKTtcclxuXHR0aW1lc3RhbXAgPSB0aW1lc3RhbXAvMTAwMDtcclxuXHRjb25zb2xlLmxvZyhcInRpbWVzdGFtcCA9PSBcIix0aW1lc3RhbXApO1xyXG5cdHJldHVybiB0aW1lc3RhbXA7XHJcbn1cclxuLyoqXHJcbiAgKiDmlrnms5XlkI3np7A6IOaXtumXtOaIs+i9rOaXpeacn+Wtl+espuS4slxyXG4gICog5pa55rOV5rOo6YeKOiDoo4XmjaLnu5PmnpzmiKrlj5bliLDlpKnvvIzkuI3miKrlj5bliLDml7bliIbnp5JcclxuICAqIOS8oOWFpeWPguaVsDogdGltZXN0YW1wIOaXtumXtOaIs1xyXG4gICog6L+U5Zue5pWw5YC8OiDml6XmnJ/lrZfnrKbkuLJcclxuKi9cclxuZnVuY3Rpb24gdGltZXN0YW1wVG9EYXRlU3RyaW5nKHRpbWVzdGFtcCl7XHJcblx0dmFyIGQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKTsgICAgLy/moLnmja7ml7bpl7TmiLPnlJ/miJDnmoTml7bpl7Tlr7nosaFcclxuXHR2YXIgZGF0ZSA9IChkLmdldEZ1bGxZZWFyKCkpICsgXCItXCIgKyBcclxuXHQgICAgICAgICAgIChkLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICtcclxuXHQgICAgICAgICAgIChkLmdldERhdGUoKSkvLyArIFwiIFwiICsgXHJcblx0ICAgICAgICAgICAvLyAoZC5nZXRIb3VycygpKSArIFwiOlwiICsgXHJcblx0ICAgICAgICAgICAvLyAoZC5nZXRNaW51dGVzKCkpICsgXCI6XCIgKyBcclxuXHQgICAgICAgICAgIC8vIChkLmdldFNlY29uZHMoKSk7XHJcblx0Y29uc29sZS5sb2coXCJkYXRlZGF0ZSA9IFwiLGRhdGUpO1xyXG5cdHJldHVybiBkYXRlO1xyXG5cdFx0XHQgICBcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIhuS6qy3ojrflj5bmnI3liqHllYbliJfooahcclxuICog6L+U5ZueOiDmnI3liqHllYbliJfooahcclxuICovXHJcbmZ1bmN0aW9uIGdldFNoYXJlTGlzdCgpe1xyXG5cdHZhciBzaGFyZUxpc3QgPSBbXTtcclxuXHR1bmkuZ2V0UHJvdmlkZXIoey8v6I635Y+W5pyN5Yqh5ZWGXHJcblx0XHRzZXJ2aWNlOidzaGFyZScsXHJcblx0XHRzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5pyN5Yqh5ZWG5L+h5oGvOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRpZihyZXMucHJvdmlkZXIubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdHJlcy5wcm92aWRlciA9IFtcIndlaXhpblwiLFwiY29weUxpbmtcIiwncmVmcmVzaCddO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyZXMucHJvdmlkZXIucHVzaChcImNvcHlMaW5rXCIpO1xyXG5cdFx0XHRcdHJlcy5wcm92aWRlci5wdXNoKFwicmVmcmVzaFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5wcm92aWRlci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBpdGVtID0gcmVzLnByb3ZpZGVyW2ldO1xyXG5cdFx0XHRcdGlmIChpdGVtID09ICd3ZWl4aW4nKSB7XHJcblx0XHRcdFx0XHRzaGFyZUxpc3QucHVzaChzZXR1cFNoYXJlSXRlbSgnd2VpeGluJywgXCLlvq7kv6FcIiwgXCJXWFNjZW5lU2Vzc2lvblwiKSk7XHJcblx0XHRcdFx0XHRzaGFyZUxpc3QucHVzaChzZXR1cFNoYXJlSXRlbSgnd2VpeGluJywgXCLmnIvlj4vlnIhcIiwgXCJXWFNlbmNlVGltZWxpbmVcIikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL+WkjeWItumTvuaOpVxyXG5cdFx0XHRcdGlmIChpdGVtID09ICdjb3B5TGluaycpIHtcclxuXHRcdFx0XHRcdHNoYXJlTGlzdC5wdXNoKHNldHVwU2hhcmVJdGVtKCdjb3B5TGluaycsIFwi5aSN5Yi26ZO+5o6lXCIsIFwiY29weUxpbmtcIikpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8v5Yi35pawXHJcblx0XHRcdFx0aWYoaXRlbSA9PSAncmVmcmVzaCcpe1xyXG5cdFx0XHRcdFx0c2hhcmVMaXN0LnB1c2goc2V0dXBTaGFyZUl0ZW0oJ3JlZnJlc2gnLCfliLfmlrAnLCdyZWZyZXNoJykpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGlmIChpdGVtID09ICdzaW5hd2VpYm8nKSB7XHJcblx0XHRcdFx0Ly8gXHRzaGFyZUxpc3QucHVzaChzZWxmLnNldHVwU2hhcmVJdGVtKFwid2VpYm9cIiwgXCLlvq7ljZpcIiwgXCJ3ZWlib1wiKSk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIGlmIChpdGVtID09ICdxcScpIHtcclxuXHRcdFx0XHQvLyBcdHNoYXJlTGlzdC5wdXNoKHNlbGYuc2V0dXBTaGFyZUl0ZW0oXCJxcVwiLCBcInFxXCIsIFwicXFcIikpO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5LiN6IO955u05o6l5YiG5Lqr5YiwUVHnqbrpl7TvvIzlj6/ku6XliIbkuqvliLBRUe+8jOeEtuWQjuWcqFFR55qE55WM6Z2i6YeM6YCJ5oupUVHnqbrpl7TjgIJcclxuXHRcdFx0XHQvLyBcdC8vIHNoYXJlTGlzdC5wdXNoKHNlbGYuc2V0dXBTaGFyZUl0ZW0oXCJ6b25lXCIsXCJxceepuumXtFwiKSk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5pyN5Yqh5ZWG5YiX6KGoOiBcIiArIEpTT04uc3RyaW5naWZ5KHNoYXJlTGlzdCkpO1xyXG5cdFx0fSxcclxuXHRcdGZhaWw6ZnVuY3Rpb24ocmVzKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bliIbkuqvmnI3liqHllYbliJfooajlpLHotKU6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHR9XHJcblx0fSlcclxuXHRyZXR1cm4gc2hhcmVMaXN0O1xyXG59XHJcblxyXG4vKipcclxuICog5YiG5LqrLeiOt+WPluacjeWKoeWVhuWvueW6lOWbvueJh1xyXG4gKiDlj4LmlbA6IHByb3ZpZGVyIOacjeWKoeWVhuWQjeensFxyXG4gKiDlj4LmlbA6IHRpdGxlIOagh+mimFxyXG4gKiDlj4LmlbA6IHNjZW5lIOWcuuaZr1xyXG4gKiDov5Tlm546IOacjeWKoeWVhuWvueW6lOWbvueJh1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0dXBTaGFyZUl0ZW0ocHJvdmlkZXIsdGl0bGUsc2NlbmUpe1xyXG5cdHZhciBpdGVtID0ge1xyXG5cdFx0cHJvdmlkZXI6IHByb3ZpZGVyLFxyXG5cdFx0c2NlbmU6IHNjZW5lLFxyXG5cdFx0dGl0bGU6IHRpdGxlLFxyXG5cdFx0aW1hZ2U6IFwiL3N0YXRpYy9pbWcvc2hhcmUvXCIgKyBzY2VuZSArIFwiLnBuZ1wiXHJcblx0fVxyXG5cdHJldHVybiBpdGVtO1xyXG59XHJcblxyXG4vKipcclxuICog5YiG5LqrLeWIhuS6qy3liIbkuqvlvq7kv6HmiJbogIVxceaIluiAheWFtuWug1xyXG4gKiDlj4LmlbA6IGl0ZW0g6YCJ5Lit55qE5pyN5Yqh5ZWG5L+h5oGvKOWvueixoSlcclxuICog5Y+C5pWwOiBkZXRhaWwg5YiG5Lqr55qE5YaF5a655L+h5oGvKOWvueixoSlcclxuICog6L+U5ZueOiDmmK/lkKbliIbkuqvmiJDlip9cclxuICovXHJcbmZ1bmN0aW9uIGNsaWNrU2hhcmVJdGVtKGl0ZW0sZGV0YWlsKXtcclxuXHR2YXIgaXNTaGFyZSA9IGZhbHNlO1xyXG5cdC8vZGV0YWlsLmxpbmsgPSBkZXRhaWwubGluay5yZXBsYWNlKFwie3VuaW9uaWR9XCIsdW5pLmdldFN0b3JhZ2VTeW5jKFwidW5pb25pZFwiKSk7XHJcblx0Ly8gaWYgKHRydWUpIHtcclxuXHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIikge1xyXG5cdFx0dW5pLmRvd25sb2FkRmlsZSh7XHJcblx0XHQgICAgdXJsOiBkZXRhaWwucGljLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOi1hOa6kFxyXG5cdFx0ICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdCAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRcdHBsdXMuemlwLmNvbXByZXNzSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0XHRzcmM6cmVzLnRlbXBGaWxlUGF0aCxcclxuXHRcdFx0XHRcdFx0ZHN0OlwiX2RvYy9zaGFyZS5wbmdcIixcclxuXHRcdFx0XHRcdFx0cXVhbGl0eToyMCxcclxuXHRcdFx0XHRcdFx0b3ZlcndyaXRlOnRydWUsXHJcblx0XHRcdFx0XHRcdGZvcm1hdDpcInBuZ1wiLFxyXG5cdFx0XHRcdFx0XHR3aWR0aDpcIjEwMHB4XCIsXHJcblx0XHRcdFx0XHRcdGhlaWdodDpcIjEwMHB4XCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0ZGV0YWlsLnBpYyA9IFwiX2RvYy9zaGFyZS5wbmdcIjtcclxuXHRcdFx0XHRcdFx0dW5pLnNoYXJlKHtcclxuXHRcdFx0XHRcdFx0XHRwcm92aWRlcjogaXRlbS5wcm92aWRlcixcclxuXHRcdFx0XHRcdFx0XHRzY2VuZTogaXRlbS5zY2VuZSwvL+W/heWhqzogcHJvdmlkZXLkuLp3ZWl4aW7ml7ZcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiBpdGVtLnNjZW5lID09ICdxcScgPyAxIDogMCwvL+mAieWhqzogMOS4uuWbvuaWh++8jHFx5LiN5pSv5oyBXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGRldGFpbC50aXRsZSwvL+mAieWhqzogXHJcblx0XHRcdFx0XHRcdFx0c3VtbWFyeTogZGV0YWlsLmRlc2MsLy90eXBlPTHml7blv4Xloas6IOWIhuS6q+WGheWuueeahOaRmOimgVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY6IGRldGFpbC5saW5rLC8vdHlwZT0w5pe25b+F5aGrOiDot7Povazpk77mjqVcclxuXHRcdFx0XHRcdFx0XHRpbWFnZVVybDogZGV0YWlsLnBpYywvL3R5cGU9MOOAgTLjgIE15pe25b+F5aGrOiDlm77niYflpKfkuo4yMGti5pe25LiN5pi+56S6LOaOqOiNkOS9v+eUqOWwj+S6jjIwS2LnmoTlm77niYdcclxuXHRcdFx0XHRcdFx0XHQvL21lZGlhVXJsOicnLC8vdHlwZSDkuLogM+OAgTQg5pe25b+F6YCJOiDpn7Pop4bpopHlnLDlnYBcclxuXHRcdFx0XHRcdFx0XHQvL21pbmlQcm9ncmFtOnt9LC8vdHlwZSDkuLogNSDml7blv4XpgIk6IOWIhuS6q+Wwj+eoi+W6j+W/heimgeWPguaVsFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzKXsvL+iwg+eUqOaIkOWKn1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLliIbkuqvosIPnlKjmiJDlip86IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRpc1NoYXJlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGFwaS50b2FzdFRpcHNUaW1lKFwi5YiG5Lqr5oiQ5YqfXCIsMTUwMCk7XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsOmZ1bmN0aW9uKGVycm9yKXsvL+iwg+eUqOWksei0pVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLliIbkuqvosIPnlKjlpLHotKU6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlzU2hhcmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdGlzU2hhcmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJDb21wcmVzcyBlcnJvciFcIixlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH1cclxuXHRcdH0pO1xyXG5cdH1lbHNle1xyXG5cdFx0dW5pLnNoYXJlKHtcclxuXHRcdFx0cHJvdmlkZXI6IGl0ZW0ucHJvdmlkZXIsXHJcblx0XHRcdHNjZW5lOiBpdGVtLnNjZW5lLC8v5b+F5aGrOiBwcm92aWRlcuS4undlaXhpbuaXtlxyXG5cdFx0XHR0eXBlOiBpdGVtLnNjZW5lID09ICdxcScgPyAxIDogMCwvL+mAieWhqzogMOS4uuWbvuaWh++8jHFx5LiN5pSv5oyBXHJcblx0XHRcdHRpdGxlOiBkZXRhaWwudGl0bGUsLy/pgInloas6IFxyXG5cdFx0XHRzdW1tYXJ5OiBkZXRhaWwuZGVzYywvL3R5cGU9MeaXtuW/heWhqzog5YiG5Lqr5YaF5a6555qE5pGY6KaBXHJcblx0XHRcdGhyZWY6IGRldGFpbC5saW5rLC8vdHlwZT0w5pe25b+F5aGrOiDot7Povazpk77mjqVcclxuXHRcdFx0aW1hZ2VVcmw6IGRldGFpbC5waWMsLy90eXBlPTDjgIEy44CBNeaXtuW/heWhqzog5Zu+54mH5aSn5LqOMjBrYuaXtuS4jeaYvuekuizmjqjojZDkvb/nlKjlsI/kuo4yMEti55qE5Zu+54mHXHJcblx0XHRcdC8vbWVkaWFVcmw6JycsLy90eXBlIOS4uiAz44CBNCDml7blv4XpgIk6IOmfs+inhumikeWcsOWdgFxyXG5cdFx0XHQvL21pbmlQcm9ncmFtOnt9LC8vdHlwZSDkuLogNSDml7blv4XpgIk6IOWIhuS6q+Wwj+eoi+W6j+W/heimgeWPguaVsFxyXG5cdFx0XHRzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7Ly/osIPnlKjmiJDlip9cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWIhuS6q+iwg+eUqOaIkOWKnzogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdFx0XHRpc1NoYXJlID0gdHJ1ZTtcclxuXHRcdFx0XHRhcGkudG9hc3RUaXBzVGltZShcIuWIhuS6q+aIkOWKn1wiLDE1MDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOmZ1bmN0aW9uKGVycm9yKXsvL+iwg+eUqOWksei0pVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi5YiG5Lqr6LCD55So5aSx6LSlOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcblx0XHRcdFx0aXNTaGFyZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHRyZXR1cm4gaXNTaGFyZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNKc29uU3RyaW5nOiBpc0pzb25TdHJpbmcsXHJcblx0Zm9ybWF0VGltZTogZm9ybWF0VGltZSxcclxuXHRmb3JtYXRMb2NhdGlvbjogZm9ybWF0TG9jYXRpb24sXHJcblx0ZGF0ZVV0aWxzOiBkYXRlVXRpbHMsXHJcblx0ZGF0ZURpZmY6IGRhdGVEaWZmLFxyXG5cdGZvcm1hdE1pbnV0ZXNUaW1lOiBmb3JtYXRNaW51dGVzVGltZSxcclxuXHRmb3JtYXRNaW51dGVzRGF5OiBmb3JtYXRNaW51dGVzRGF5LFxyXG5cdGZvcm1hdERhdGU6IGZvcm1hdERhdGUsXHJcblx0Zm9ybWF0RGF0ZVRpbWU6IGZvcm1hdERhdGVUaW1lLFxyXG5cdGdldERhdGVXaXRoQ291bnQ6IGdldERhdGVXaXRoQ291bnQsXHJcblx0Z2V0RGF0ZVdlZWtlbmQ6IGdldERhdGVXZWVrZW5kLFxyXG5cdGdldERheXNCeURhdGVTdHJpbmc6IGdldERheXNCeURhdGVTdHJpbmcsXHJcblx0ZGF0ZUNoZWNrOiBkYXRlQ2hlY2ssXHJcblx0bXVsdGlBcnJheTogbXVsdGlBcnJheSxcclxuXHRuYXZpZ2F0ZVRvTG9jYXRpb246IG5hdmlnYXRlVG9Mb2NhdGlvbixcclxuXHRkaXN0YW5jZTogZGlzdGFuY2UsXHJcblx0Zm9ybWF0QXJyYXk6IGZvcm1hdEFycmF5LFxyXG5cdGdldFZhck5hdmlCYXJIZWlnaHQ6IGdldFZhck5hdmlCYXJIZWlnaHQsXHJcblx0b3BlbkxvY2F0aW9uOiBvcGVuTG9jYXRpb24sXHJcblx0b3BlblNob3BMb2NhdGlvbjogb3BlblNob3BMb2NhdGlvbixcclxuXHRjaGVja0FwcFZlcnNpb246IGNoZWNrQXBwVmVyc2lvbixcclxuXHR0aXBPZmY6IHRpcE9mZixcclxuXHRnb3RvV2ViVmlldzogZ290b1dlYlZpZXcsXHJcblx0ZnJpZW5kbHlEYXRlOmZyaWVuZGx5RGF0ZSxcclxuXHRkYXRlU3RyaW5nVG9UaW1lc3RhbXAgOiBkYXRlU3RyaW5nVG9UaW1lc3RhbXAsXHJcblx0dGltZXN0YW1wVG9EYXRlU3RyaW5nIDogdGltZXN0YW1wVG9EYXRlU3RyaW5nLFxyXG5cdGZvcm1hdFllYXJNaW51dGVzRGF5OmZvcm1hdFllYXJNaW51dGVzRGF5LFxyXG5cdGZvcm1hdFllYXJNaW51dGVzRGF5Rm9ybXQ6Zm9ybWF0WWVhck1pbnV0ZXNEYXlGb3JtdCxcclxuXHRmb3JtYXRNb250aERheTpmb3JtYXRNb250aERheSxcclxuXHRnb3RvRGV0YWlsOmdvdG9EZXRhaWwsXHJcblx0Z2V0U2hhcmVMaXN0OmdldFNoYXJlTGlzdCxcclxuXHRjbGlja1NoYXJlSXRlbTpjbGlja1NoYXJlSXRlbSxcclxuXHR1bmlxdWU6dW5pcXVlXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),

/***/ 15:
/*!*******************************************!*\
  !*** E:/headlines/headlines/api/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i[\"return\"] != null) _i[\"return\"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;} // 管理账号信息\n\nvar URL_BASE = 'https://api.0791look.com/';\nvar IMAGE_PATH = 'https://ye.ncnews.com.cn';\n\n/**\r\n                                              * 方法名称: 请求的基础方法\r\n                                              * 方法注释: post\\get\\json请求都会调这个方法\r\n                                              * 传入参数: data->请求的参数 mescroll->可以传上下拉刷新的控件mescroll也可以传字符串\"N\",传字符串\"N\"表示请求的时候不显示加载中的动画 loadingFlag->是否显示加载动画传bool值\r\n                                              * 返回数值: 请求的结果 returncode === 0 的时候才会返回res.data \r\n                                              */\nvar request = function request(opts, data, mescroll, loadingFlag) {\n  //如果是上下拉刷新不显示，非上下拉刷新都显示\n  if (loadingFlag == true && !mescroll) {\n    showLoading(\"加载中,请稍后...\");\n  }\n  data.token = uni.getStorageSync(\"tokens\");\n  data.wid = uni.getStorageSync(\"wid\");\n\n  // console.log(\"请求的UserAgent = \",plus.navigator.getUserAgent());\n  // const res = uni.getSystemInfoSync();\n  //    console.log(\"getSystemInfoSync=\"+JSON.stringify(res));\n\n  //  uni.getSystemInfo({\n  //      success: function (res) {\n  // \t\t console.log(\"getSystemInfo=\"+JSON.stringify(res));\n  //      }\n  //  });\n  var httpDefaultOpts = {\n    url: URL_BASE + opts.url,\n    data: data,\n    method: opts.method === 'json' ? 'post' : opts.method,\n    header: opts.method == 'get' || opts.method == 'json' ? {\n      'X-Requested-With': 'XMLHttpRequest',\n      \"Accept\": \"application/json\",\n      \"Content-Type\": \"application/json; charset=UTF-8\" } :\n    {\n      'X-Requested-With': 'XMLHttpRequest',\n      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },\n\n    dataType: 'text' };\n\n  var promise = new Promise(function (resolve, reject) {\n    uni.request(httpDefaultOpts).then(function (data) {\n      //如果是上下拉刷新，下拉刷新的时候显示，上拉加载不显示，非上下拉刷新都显示,或者第三个参传字符N就不显示加载动画\n      if ((!mescroll || mescroll === \"N\") && loadingFlag != false) {\n        uni.hideLoading();\n      }var _data = _slicedToArray(\n      data, 2),error = _data[0],res = _data[1];\n      if (res) {\n        if (res.data.constructor !== Object) {\n          res.data = JSON.parse(res.data);\n        }\n        if (res.data.code === 200) {\n          if (mescroll && mescroll != \"N\") {\n            if (res.data.data.length > 0) {\n              var hasNext = res.data.data.length == mescroll.size;\n              __f__(\"log\", \"加载下一页 == \", hasNext, \" at api/index.js:58\");\n              if (hasNext) {\n                mescroll.endSuccess(res.data.data.length, true);\n              } else {\n                mescroll.endSuccess(1, false);\n              }\n            } else {\n              __f__(\"log\", \"已经加载完\", \" at api/index.js:65\");\n              mescroll.endSuccess(0, false); //1为当前页获取的数据量，false为没有下一页的数据\n            }\n          }\n          resolve(res.data);\n        } else if (res.data.code === 403) {\n          removeStorage();\n          openLoginPage();\n        } else {\n          if (res.data.message === \"token不存在,请重新登录\") {\n            removeStorage();\n            openLoginPage();\n          }\n          if (mescroll && mescroll != \"N\") {\n            mescroll.endErr(\"出错了，请稍后重试\");\n          }\n          if (res.data.message && res.data.message.length && !(res.data.message === \"token不存在,请重新登录\")) {\n            toastTips(res.data.message);\n          } else {\n            toastTips(\"出错了，请稍后重试\");\n          }\n          reject(res.data);\n        }\n      } else {\n        // toastTips(\"暂时无法访问网络\");\n        if (mescroll && mescroll != \"N\") {\n          mescroll.endErr(\"暂时无法访问网络\");\n        }\n        reject(error);\n      }\n    }).catch(function (response) {\n      if ((!mescroll || mescroll != \"N\") && loadingFlag != false) {//如果是上下拉刷新，下拉刷新的时候显示，上拉加载不显示，非上下拉刷新都显示\n        uni.hideLoading();\n      }\n      toastTips(\"出错了，请稍后重试\");\n      if (mescroll && mescroll != \"N\") {\n        mescroll.endErr(\"出错了，请稍后重试\");\n      }\n      //console.log(\"请求出错了\", response);\n      reject(response);\n    });\n  });\n  return promise;\n};\n\n/**\r\n    * 方法名称: 上传单文件\r\n    * 方法注释: 文件上传成功之后需要把返回的json转成字符串作为参数提交更新,比如logo:\"{\"fileName\":\"11111.png\",\"filePath\":\"\t\t\t  /storage/shop/77/info/logo.png\",\"fileSize\":255}\"\r\n    * 传入参数: attachment->手机获取的照片二进制文件, attachmentsFolder->保存在服务器图片的路径，比如shopLogo存放的店铺logo\r\n    * 返回数值: 服务器文件路径的json数据,json格式为data.list,其中单文件上传取第一个元素即:data.list[0]={\"fileName\":\"11111.png\",\"filePath\":\"/storage/shop/77/info/logo.png\",\"fileSize\":255}\r\n    */\nfunction uploadFile(attachment, fromData) {\n  var promise = new Promise(function (resolve, reject) {\n    showLoading(\"加载中,请稍后...\");\n    var httpDefaultOpts = {\n      url: URL_BASE + '/upload/upload/file.do',\n      filePath: attachment,\n      name: 'file',\n      formData: {\n        \"fileType\": attachmentsFolder },\n\n      header: {\n        'X-Requested-With': 'XMLHttpRequest',\n        \"token\": uni.getStorageSync(\"tokens\") || ' ',\n        \"wid\": uni.getStorageSync(\"wid\") || ' ' } };\n\n\n    //console.log(\"单文件上传的参数 = \", httpDefaultOpts);\n    uni.uploadFile(httpDefaultOpts).then(\n    function (data) {\n      uni.hideLoading();var _data2 = _slicedToArray(\n      data, 2),error = _data2[0],res = _data2[1];\n      if (res) {\n        if (res.data.constructor !== Object) {\n          res.data = JSON.parse(res.data);\n        }\n        //console.log(\"单文件上传的结果 = \", res);\n        if (res.data.returncode === 0) {\n          resolve(res.data);\n        } else if (res.data.returncode === 1009) {\n          removeStorage();\n          openLoginPage();\n        } else {\n\n          toastTips(res.data.message).then(function () {\n            reject(res.data);\n          });\n        }\n      } else {\n        toastTips(\"暂时无法访问网络\");\n      }\n    }).\n    catch(\n    function (response) {\n      uni.hideLoading();\n      reject(response);\n    });\n\n  });\n  return promise;\n}\n/**\r\n   * 方法名称: 缓存数据到本地\r\n   * 方法注释: 可已通过setStorageSync相对应的getStorageSync传入相应的key值获取缓存数据\r\n   * 传入参数: res 要缓存的数据\r\n   * 返回数值: 无\r\n   */\nvar setStorage = function setStorage(res) {\n  uni.setStorageSync(\"hasLogin\", true);\n  uni.setStorageSync(\"user\", res.data);\n};\n/**\r\n    * 方法名称: 清除本地缓存的数据\r\n    * 方法注释: 清除特定的userName/hasLogin/token数据\r\n    * 传入参数: 无\r\n    * 返回数值: 无\r\n    */\nvar removeStorage = function removeStorage() {\n  uni.setStorageSync(\"hasLogin\", false);\n  uni.removeStorage({\n    key: 'user' }).\n  then(function () {\n    uni.removeStorage({\n      key: 'tokens' });\n\n    uni.removeStorageSync(\"wid\");\n    uni.removeStorageSync(\"unionid\");\n  });\n  uni.removeStorageSync(\"tokens\");\n  uni.removeStorageSync(\"wid\");\n  uni.removeStorageSync(\"unionid\");\n};\n\n/**\r\n    * 方法名称: 获取服务器路径前缀\r\n    * 方法注释: \r\n    * 传入参数: 无\r\n    * 返回数值: 服务器路径前缀\r\n    */\nfunction getBaseUrl() {\n  return URL_BASE;\n}\n/**\r\n   * 方法名称: 获取图片路径前缀\r\n   * 方法注释: \r\n   * 传入参数: 无\r\n   * 返回数值: 图片路径前缀\r\n   */\nfunction getBaseImagePath() {\n  return IMAGE_PATH;\n}\n\n/**\r\n   * 方法名称: 获取当前用户的信息\r\n   * 方法注释: \r\n   * 传入参数: mescroll(上下拉刷新，非必传)\r\n   * 返回数值: 用户信息数据\r\n   */\nfunction getUserInfo(mescroll) {\n\n  var thePromise = new Promise(function (resolve, reject) {\n    var url = \"api/ncrb/\";\n    var data = {\n      action: 'userinfo' };\n\n    post(url, data, mescroll).then(function (res) {\n      if (res.data.nickname) {\n        res.data.nickname = decodeURI(res.data.nickname);\n      }\n      uni.setStorageSync(\"user\", res.data);\n      uni.setStorageSync(\"haslogin\", true);\n      resolve(res.data);\n    }).catch(function (res) {\n      reject(res);\n    });\n  });\n  return thePromise;\n}\n/**\r\n    * 方法名称: 修改用户信息\r\n    * 方法注释: 修改用户信息成功后会直接再读取用户信息,保证获取用户的信息最新\r\n    * 传入参数: data 要修改的用户信息参数,比如修改昵称的话传{nick:\"曾先森\"}\r\n    * 返回数值: 修改是否成功的返回值\r\n  */\nfunction updateUserInfo(data) {\n\n  var thePromise = new Promise(function (resolve, reject) {\n    var url = 'api/ncrb/';\n    data.action = \"upuserinfo\";\n    data.nickname = encodeURI(data.nickname);\n    post(url, data).then(function (res) {\n      getUserInfo();\n      resolve(res.data);\n    }).catch(function (res) {\n      reject(res);\n    });\n  });\n  return thePromise;\n}\n\n/**\r\n   * 方法名称: 重新跳到登录页\r\n   * 方法注释: 需要用户登录或登陆失效时才使用此方法\r\n   * 传入参数: 无\r\n   * 返回数值: 无\r\n   */\nvar openLoginPage = function openLoginPage() {\n  // uni.reLaunch({\n  // \turl: \"/pages/user/login/login\"\n  // });\n  // let pages = getCurrentPages();\n  //console.log(\"pagespagespages = \",pages);\n  var pages = getCurrentPages();\n  var page = pages[pages.length - 1];\n  var route = page.route;\n  if (route && route == \"pages/user/login/login\") {\n  } else {\n    uni.navigateTo({\n      url: \"/pages/user/login/login\",\n      animationType: \"slide-in-bottom\",\n      animationDuration: 200 });\n\n  }\n};\n//toast提示\nvar toastTips = function toastTips(txt) {\n  return uni.showToast({\n    title: txt,\n    icon: \"none\" });\n\n};\n//toast提示，可以设置等待时长\nvar toastTipsTime = function toastTipsTime(txt, time) {\n  return uni.showToast({\n    title: txt,\n    duration: time,\n    icon: \"none\" });\n\n\n};\n//弹窗提示\nvar showModal = function showModal(txt) {\n  return uni.showModal({\n    title: '提示',\n    content: txt,\n    showCancel: false });\n\n};\n//loading\nvar showLoading = function showLoading(txt) {\n  setTimeout(function () {\n    uni.hideLoading();\n  }, 15000);\n  return uni.showLoading({\n    title: txt,\n    mask: false //数据请求时App界面无法操作\n  });\n};\n/**\r\n    * 方法名称: get请求\r\n    * 方法注释: url为必填，data和mescroll为非必填\r\n    * 传入参数: url->请求的接口路径，data->请求的参数 mescroll->上下拉组件 laodingFlag->是否显示加载动画传bool值\r\n    * 返回数值: 请求之后的json数据\r\n    */\nfunction get(url, data, mescroll, loadingFlag) {\n  var option = {\n    \"url\": url,\n    \"method\": \"get\" };\n\n  return request(option, data, mescroll, loadingFlag);\n}\n/**\r\n   * 方法名称: post请求\r\n   * 方法注释: url为必填，data/mescroll/loadingFlag为非必填\r\n   * 传入参数: url->请求的接口路径，data->请求的参数 mescroll->上下拉组件 laodingFlag->是否显示加载动画传bool值\r\n   * 返回数值: 请求之后的json数据\r\n   */\nfunction post(url, data, mescroll, loadingFlag) {\n  var option = {\n    \"url\": url,\n    \"method\": \"post\" };\n\n  if (!data) {\n    data = {};\n  }\n  return request(option, data, mescroll, loadingFlag);\n}\n/**\r\n   * 方法名称: post请求\r\n   * 方法注释: url为必填，data和mescroll为非必填\r\n   * 传入参数: url->请求的接口路径，data->请求的参数 mescroll->上下拉组件 loadingFlag->是否显示加载动画传bool值\r\n   * 返回数值: 请求之后的json数据\r\n   */\nfunction json(url, data, mescroll, loadingFlag) {\n  var option = {\n    \"url\": url,\n    \"method\": \"json\" };\n\n  return request(option, data, mescroll, loadingFlag);\n}\n/* \r\n  \t只是返回用户登录状态的bool值，不会跳转到登录界面\r\n  */\nfunction loginState() {\n  return uni.getStorageSync(\"hasLogin\");\n}\n/* \r\n  \t用户登录之后才能进行下一步的操作，否则跳登录页,返回用户是否登录的bool值 \r\n  */\nfunction alreadyLogin() {\n  var loginState = uni.getStorageSync(\"hasLogin\");\n  __f__(\"log\", \"loginStateloginState == \", loginState, \" at api/index.js:376\");\n  if (!loginState || loginState === false) {\n    removeStorage();\n    openLoginPage();\n  }\n  return loginState;\n}var _default =\n\n{\n  request: request,\n  get: get,\n  post: post,\n  json: json,\n  loginState: loginState,\n  alreadyLogin: alreadyLogin,\n  openLoginPage: openLoginPage,\n  setStorage: setStorage,\n  removeStorage: removeStorage,\n  getUserInfo: getUserInfo,\n  updateUserInfo: updateUserInfo,\n  toastTips: toastTips,\n  toastTipsTime: toastTipsTime,\n  showModal: showModal,\n  showLoading: showLoading,\n  getBaseUrl: getBaseUrl,\n  getBaseImagePath: getBaseImagePath };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2luZGV4LmpzIl0sIm5hbWVzIjpbIlVSTF9CQVNFIiwiSU1BR0VfUEFUSCIsInJlcXVlc3QiLCJvcHRzIiwiZGF0YSIsIm1lc2Nyb2xsIiwibG9hZGluZ0ZsYWciLCJzaG93TG9hZGluZyIsInRva2VuIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJ3aWQiLCJodHRwRGVmYXVsdE9wdHMiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJkYXRhVHlwZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJoaWRlTG9hZGluZyIsImVycm9yIiwicmVzIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJKU09OIiwicGFyc2UiLCJjb2RlIiwibGVuZ3RoIiwiaGFzTmV4dCIsInNpemUiLCJlbmRTdWNjZXNzIiwicmVtb3ZlU3RvcmFnZSIsIm9wZW5Mb2dpblBhZ2UiLCJtZXNzYWdlIiwiZW5kRXJyIiwidG9hc3RUaXBzIiwiY2F0Y2giLCJyZXNwb25zZSIsInVwbG9hZEZpbGUiLCJhdHRhY2htZW50IiwiZnJvbURhdGEiLCJmaWxlUGF0aCIsIm5hbWUiLCJmb3JtRGF0YSIsImF0dGFjaG1lbnRzRm9sZGVyIiwicmV0dXJuY29kZSIsInNldFN0b3JhZ2UiLCJzZXRTdG9yYWdlU3luYyIsImtleSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0QmFzZVVybCIsImdldEJhc2VJbWFnZVBhdGgiLCJnZXRVc2VySW5mbyIsInRoZVByb21pc2UiLCJhY3Rpb24iLCJwb3N0Iiwibmlja25hbWUiLCJkZWNvZGVVUkkiLCJ1cGRhdGVVc2VySW5mbyIsImVuY29kZVVSSSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsInJvdXRlIiwibmF2aWdhdGVUbyIsImFuaW1hdGlvblR5cGUiLCJhbmltYXRpb25EdXJhdGlvbiIsInR4dCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInRvYXN0VGlwc1RpbWUiLCJ0aW1lIiwiZHVyYXRpb24iLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInNldFRpbWVvdXQiLCJtYXNrIiwiZ2V0Iiwib3B0aW9uIiwianNvbiIsImxvZ2luU3RhdGUiLCJhbHJlYWR5TG9naW4iXSwibWFwcGluZ3MiOiJna0RBQUE7O0FBRUMsSUFBTUEsUUFBUSxHQUFHLDJCQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRywwQkFBbkI7O0FBRUQ7Ozs7OztBQU1BLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFhQyxRQUFiLEVBQXNCQyxXQUF0QixFQUFzQztBQUNyRDtBQUNBLE1BQUdBLFdBQVcsSUFBRSxJQUFiLElBQW1CLENBQUNELFFBQXZCLEVBQWdDO0FBQy9CRSxlQUFXLENBQUMsWUFBRCxDQUFYO0FBQ0E7QUFDREgsTUFBSSxDQUFDSSxLQUFMLEdBQWFDLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQixRQUFuQixDQUFiO0FBQ0FOLE1BQUksQ0FBQ08sR0FBTCxHQUFXRixHQUFHLENBQUNDLGNBQUosQ0FBbUIsS0FBbkIsQ0FBWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUlFLGVBQWUsR0FBRztBQUNyQkMsT0FBRyxFQUFFYixRQUFRLEdBQUdHLElBQUksQ0FBQ1UsR0FEQTtBQUVyQlQsUUFBSSxFQUFFQSxJQUZlO0FBR3JCVSxVQUFNLEVBQUVYLElBQUksQ0FBQ1csTUFBTCxLQUFnQixNQUFoQixHQUF5QixNQUF6QixHQUFrQ1gsSUFBSSxDQUFDVyxNQUgxQjtBQUlyQkMsVUFBTSxFQUFHWixJQUFJLENBQUNXLE1BQUwsSUFBZSxLQUFmLElBQXdCWCxJQUFJLENBQUNXLE1BQUwsSUFBZSxNQUF4QyxHQUFrRDtBQUN6RCwwQkFBb0IsZ0JBRHFDO0FBRXpELGdCQUFVLGtCQUYrQztBQUd6RCxzQkFBZ0IsaUNBSHlDLEVBQWxEO0FBSUo7QUFDSCwwQkFBb0IsZ0JBRGpCO0FBRUgsc0JBQWdC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LGNBQVUsTUFGSSxFQUFmOztBQUlBLFNBQU9YLE9BQU8sQ0FBQ2lGLE1BQUQsRUFBUy9FLElBQVQsRUFBZUMsUUFBZixFQUF3QkMsV0FBeEIsQ0FBZDtBQUNBO0FBQ0Q7OztBQUdBLFNBQVMrRSxVQUFULEdBQXNCO0FBQ3JCLFNBQU81RSxHQUFHLENBQUNDLGNBQUosQ0FBbUIsVUFBbkIsQ0FBUDtBQUNBO0FBQ0Q7OztBQUdBLFNBQVM0RSxZQUFULEdBQXdCO0FBQ3ZCLE1BQUlELFVBQVUsR0FBRzVFLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQixVQUFuQixDQUFqQjtBQUNBLGVBQVksMEJBQVosRUFBdUMyRSxVQUF2QztBQUNBLE1BQUksQ0FBQ0EsVUFBRCxJQUFlQSxVQUFVLEtBQUssS0FBbEMsRUFBeUM7QUFDeENuRCxpQkFBYTtBQUNiQyxpQkFBYTtBQUNiO0FBQ0QsU0FBT2tELFVBQVA7QUFDQSxDOztBQUVjO0FBQ2RuRixTQUFPLEVBQVBBLE9BRGM7QUFFZGdGLEtBQUcsRUFBSEEsR0FGYztBQUdkeEIsTUFBSSxFQUFKQSxJQUhjO0FBSWQwQixNQUFJLEVBQUpBLElBSmM7QUFLZEMsWUFBVSxFQUFWQSxVQUxjO0FBTWRDLGNBQVksRUFBWkEsWUFOYztBQU9kbkQsZUFBYSxFQUFiQSxhQVBjO0FBUWRjLFlBQVUsRUFBVkEsVUFSYztBQVNkZixlQUFhLEVBQWJBLGFBVGM7QUFVZHFCLGFBQVcsRUFBWEEsV0FWYztBQVdkTSxnQkFBYyxFQUFkQSxjQVhjO0FBWWR2QixXQUFTLEVBQVRBLFNBWmM7QUFhZG9DLGVBQWEsRUFBYkEsYUFiYztBQWNkRyxXQUFTLEVBQVRBLFNBZGM7QUFlZHRFLGFBQVcsRUFBWEEsV0FmYztBQWdCZDhDLFlBQVUsRUFBVkEsVUFoQmM7QUFpQmRDLGtCQUFnQixFQUFoQkEsZ0JBakJjLEUiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnrqHnkIbotKblj7fkv6Hmga9cclxuXHJcbiBjb25zdCBVUkxfQkFTRSA9ICdodHRwczovL2FwaS4wNzkxbG9vay5jb20vJztcclxuIGNvbnN0IElNQUdFX1BBVEggPSAnaHR0cHM6Ly95ZS5uY25ld3MuY29tLmNuJztcclxuXHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IOivt+axgueahOWfuuehgOaWueazlVxyXG4gKiDmlrnms5Xms6jph4o6IHBvc3RcXGdldFxcanNvbuivt+axgumDveS8muiwg+i/meS4quaWueazlVxyXG4gKiDkvKDlhaXlj4LmlbA6IGRhdGEtPuivt+axgueahOWPguaVsCBtZXNjcm9sbC0+5Y+v5Lul5Lyg5LiK5LiL5ouJ5Yi35paw55qE5o6n5Lu2bWVzY3JvbGzkuZ/lj6/ku6XkvKDlrZfnrKbkuLJcIk5cIizkvKDlrZfnrKbkuLJcIk5cIuihqOekuuivt+axgueahOaXtuWAmeS4jeaYvuekuuWKoOi9veS4reeahOWKqOeUuyBsb2FkaW5nRmxhZy0+5piv5ZCm5pi+56S65Yqg6L295Yqo55S75LygYm9vbOWAvFxyXG4gKiDov5Tlm57mlbDlgLw6IOivt+axgueahOe7k+aenCByZXR1cm5jb2RlID09PSAwIOeahOaXtuWAmeaJjeS8mui/lOWbnnJlcy5kYXRhIFxyXG4gKi9cclxuY29uc3QgcmVxdWVzdCA9IChvcHRzLCBkYXRhLCBtZXNjcm9sbCxsb2FkaW5nRmxhZykgPT4ge1xyXG5cdC8v5aaC5p6c5piv5LiK5LiL5ouJ5Yi35paw5LiN5pi+56S677yM6Z2e5LiK5LiL5ouJ5Yi35paw6YO95pi+56S6XHJcblx0aWYobG9hZGluZ0ZsYWc9PXRydWUmJiFtZXNjcm9sbCl7XHJcblx0XHRzaG93TG9hZGluZyhcIuWKoOi9veS4rSzor7fnqI3lkI4uLi5cIik7XHJcblx0fVxyXG5cdGRhdGEudG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlbnNcIik7XHJcblx0ZGF0YS53aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ3aWRcIik7XHJcblx0XHJcblx0Ly8gY29uc29sZS5sb2coXCLor7fmsYLnmoRVc2VyQWdlbnQgPSBcIixwbHVzLm5hdmlnYXRvci5nZXRVc2VyQWdlbnQoKSk7XHJcblx0Ly8gY29uc3QgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0Ly8gICAgY29uc29sZS5sb2coXCJnZXRTeXN0ZW1JbmZvU3luYz1cIitKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHQgICBcclxuXHQvLyAgdW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdC8vICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG5cdC8vIFx0XHQgY29uc29sZS5sb2coXCJnZXRTeXN0ZW1JbmZvPVwiK0pTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdC8vICAgICAgfVxyXG5cdC8vICB9KTtcclxuXHRsZXQgaHR0cERlZmF1bHRPcHRzID0ge1xyXG5cdFx0dXJsOiBVUkxfQkFTRSArIG9wdHMudXJsLFxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDogb3B0cy5tZXRob2QgPT09ICdqc29uJyA/ICdwb3N0JyA6IG9wdHMubWV0aG9kLFxyXG5cdFx0aGVhZGVyOiAob3B0cy5tZXRob2QgPT0gJ2dldCcgfHwgb3B0cy5tZXRob2QgPT0gJ2pzb24nKSA/IHtcclxuXHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxyXG5cdFx0XHRcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcclxuXHRcdH0gOiB7XHJcblx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnXHJcblx0XHR9LFxyXG5cdFx0ZGF0YVR5cGU6ICd0ZXh0J1xyXG5cdH1cclxuXHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0dW5pLnJlcXVlc3QoaHR0cERlZmF1bHRPcHRzKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHQvL+WmguaenOaYr+S4iuS4i+aLieWIt+aWsO+8jOS4i+aLieWIt+aWsOeahOaXtuWAmeaYvuekuu+8jOS4iuaLieWKoOi9veS4jeaYvuekuu+8jOmdnuS4iuS4i+aLieWIt+aWsOmDveaYvuekuizmiJbogIXnrKzkuInkuKrlj4LkvKDlrZfnrKZO5bCx5LiN5pi+56S65Yqg6L295Yqo55S7XHJcblx0XHRcdGlmICgoIW1lc2Nyb2xsIHx8IG1lc2Nyb2xsID09PSBcIk5cIikmJmxvYWRpbmdGbGFnIT1mYWxzZSkge1xyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBbZXJyb3IsIHJlc10gPSBkYXRhO1xyXG5cdFx0XHRpZiAocmVzKSB7XHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvbnN0cnVjdG9yICE9PSBPYmplY3QpIHtcclxuXHRcdFx0XHRcdHJlcy5kYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRcdGlmIChtZXNjcm9sbCAmJiBtZXNjcm9sbCAhPSBcIk5cIikge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZGF0YS5sZW5ndGg+MCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBoYXNOZXh0ID0gcmVzLmRhdGEuZGF0YS5sZW5ndGggPT0gbWVzY3JvbGwuc2l6ZTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuWKoOi9veS4i+S4gOmhtSA9PSBcIixoYXNOZXh0KTtcclxuXHRcdFx0XHRcdFx0XHRpZihoYXNOZXh0KXtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc2Nyb2xsLmVuZFN1Y2Nlc3MocmVzLmRhdGEuZGF0YS5sZW5ndGgsdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNjcm9sbC5lbmRTdWNjZXNzKDEsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuW3sue7j+WKoOi9veWujFwiKTtcclxuXHRcdFx0XHRcdFx0XHRtZXNjcm9sbC5lbmRTdWNjZXNzKDAsIGZhbHNlKTsgLy8x5Li65b2T5YmN6aG16I635Y+W55qE5pWw5o2u6YeP77yMZmFsc2XkuLrmsqHmnInkuIvkuIDpobXnmoTmlbDmja5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChyZXMuZGF0YS5jb2RlID09PSA0MDMpIHtcclxuXHRcdFx0XHRcdHJlbW92ZVN0b3JhZ2UoKTtcclxuXHRcdFx0XHRcdG9wZW5Mb2dpblBhZ2UoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09IFwidG9rZW7kuI3lrZjlnKgs6K+36YeN5paw55m75b2VXCIpIHtcclxuXHRcdFx0XHRcdFx0cmVtb3ZlU3RvcmFnZSgpO1xyXG5cdFx0XHRcdFx0XHRvcGVuTG9naW5QYWdlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAobWVzY3JvbGwgJiYgbWVzY3JvbGwgIT0gXCJOXCIpIHtcclxuXHRcdFx0XHRcdFx0bWVzY3JvbGwuZW5kRXJyKFwi5Ye66ZSZ5LqG77yM6K+356iN5ZCO6YeN6K+VXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLm1lc3NhZ2UgJiYgcmVzLmRhdGEubWVzc2FnZS5sZW5ndGggJiYgIShyZXMuZGF0YS5tZXNzYWdlID09PSBcInRva2Vu5LiN5a2Y5ZyoLOivt+mHjeaWsOeZu+W9lVwiKSkge1xyXG5cdFx0XHRcdFx0XHR0b2FzdFRpcHMocmVzLmRhdGEubWVzc2FnZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0b2FzdFRpcHMoXCLlh7rplJnkuobvvIzor7fnqI3lkI7ph43or5VcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZWplY3QocmVzLmRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyB0b2FzdFRpcHMoXCLmmoLml7bml6Dms5Xorr/pl67nvZHnu5xcIik7XHJcblx0XHRcdFx0aWYgKG1lc2Nyb2xsICYmIG1lc2Nyb2xsICE9IFwiTlwiKSB7XHJcblx0XHRcdFx0XHRtZXNjcm9sbC5lbmRFcnIoXCLmmoLml7bml6Dms5Xorr/pl67nvZHnu5xcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdH0pLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0aWYgKCghbWVzY3JvbGwgfHwgbWVzY3JvbGwgIT0gXCJOXCIpJiZsb2FkaW5nRmxhZyE9ZmFsc2UpIHsgLy/lpoLmnpzmmK/kuIrkuIvmi4nliLfmlrDvvIzkuIvmi4nliLfmlrDnmoTml7blgJnmmL7npLrvvIzkuIrmi4nliqDovb3kuI3mmL7npLrvvIzpnZ7kuIrkuIvmi4nliLfmlrDpg73mmL7npLpcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2FzdFRpcHMoXCLlh7rplJnkuobvvIzor7fnqI3lkI7ph43or5VcIik7XHJcblx0XHRcdGlmIChtZXNjcm9sbCAmJiBtZXNjcm9sbCAhPSBcIk5cIikge1xyXG5cdFx0XHRcdG1lc2Nyb2xsLmVuZEVycihcIuWHuumUmeS6hu+8jOivt+eojeWQjumHjeivlVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwi6K+35rGC5Ye66ZSZ5LqGXCIsIHJlc3BvbnNlKTtcclxuXHRcdFx0cmVqZWN0KHJlc3BvbnNlKTtcclxuXHRcdH0pXHJcblx0fSlcclxuXHRyZXR1cm4gcHJvbWlzZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog5LiK5Lyg5Y2V5paH5Lu2XHJcbiAqIOaWueazleazqOmHijog5paH5Lu25LiK5Lyg5oiQ5Yqf5LmL5ZCO6ZyA6KaB5oqK6L+U5Zue55qEanNvbui9rOaIkOWtl+espuS4suS9nOS4uuWPguaVsOaPkOS6pOabtOaWsCzmr5TlpoJsb2dvOlwie1wiZmlsZU5hbWVcIjpcIjExMTExLnBuZ1wiLFwiZmlsZVBhdGhcIjpcIlx0XHRcdCAgL3N0b3JhZ2Uvc2hvcC83Ny9pbmZvL2xvZ28ucG5nXCIsXCJmaWxlU2l6ZVwiOjI1NX1cIlxyXG4gKiDkvKDlhaXlj4LmlbA6IGF0dGFjaG1lbnQtPuaJi+acuuiOt+WPlueahOeFp+eJh+S6jOi/m+WItuaWh+S7tiwgYXR0YWNobWVudHNGb2xkZXItPuS/neWtmOWcqOacjeWKoeWZqOWbvueJh+eahOi3r+W+hO+8jOavlOWmgnNob3BMb2dv5a2Y5pS+55qE5bqX6ZO6bG9nb1xyXG4gKiDov5Tlm57mlbDlgLw6IOacjeWKoeWZqOaWh+S7tui3r+W+hOeahGpzb27mlbDmja4sanNvbuagvOW8j+S4umRhdGEubGlzdCzlhbbkuK3ljZXmlofku7bkuIrkvKDlj5bnrKzkuIDkuKrlhYPntKDljbM6ZGF0YS5saXN0WzBdPXtcImZpbGVOYW1lXCI6XCIxMTExMS5wbmdcIixcImZpbGVQYXRoXCI6XCIvc3RvcmFnZS9zaG9wLzc3L2luZm8vbG9nby5wbmdcIixcImZpbGVTaXplXCI6MjU1fVxyXG4gKi9cclxuZnVuY3Rpb24gdXBsb2FkRmlsZShhdHRhY2htZW50LGZyb21EYXRhKSB7XHJcblx0bGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdHNob3dMb2FkaW5nKFwi5Yqg6L295LitLOivt+eojeWQji4uLlwiKTtcclxuXHRcdGxldCBodHRwRGVmYXVsdE9wdHMgPSB7XHJcblx0XHRcdHVybDogVVJMX0JBU0UgKyAnL3VwbG9hZC91cGxvYWQvZmlsZS5kbycsXHJcblx0XHRcdGZpbGVQYXRoOiBhdHRhY2htZW50LFxyXG5cdFx0XHRuYW1lOiAnZmlsZScsXHJcblx0XHRcdGZvcm1EYXRhOiB7XHJcblx0XHRcdFx0XCJmaWxlVHlwZVwiOiBhdHRhY2htZW50c0ZvbGRlclxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHQnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcblx0XHRcdFx0XCJ0b2tlblwiOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlbnNcIikgfHwgJyAnLFxyXG5cdFx0XHRcdFwid2lkXCI6IHVuaS5nZXRTdG9yYWdlU3luYyhcIndpZFwiKSB8fCAnICdcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIuWNleaWh+S7tuS4iuS8oOeahOWPguaVsCA9IFwiLCBodHRwRGVmYXVsdE9wdHMpO1xyXG5cdFx0dW5pLnVwbG9hZEZpbGUoaHR0cERlZmF1bHRPcHRzKS50aGVuKFxyXG5cdFx0XHQoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdGxldCBbZXJyb3IsIHJlc10gPSBkYXRhO1xyXG5cdFx0XHRcdGlmIChyZXMpIHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0KSB7XHJcblx0XHRcdFx0XHRcdHJlcy5kYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwi5Y2V5paH5Lu25LiK5Lyg55qE57uT5p6cID0gXCIsIHJlcyk7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEucmV0dXJuY29kZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhKVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuZGF0YS5yZXR1cm5jb2RlID09PSAxMDA5KSB7XHJcblx0XHRcdFx0XHRcdHJlbW92ZVN0b3JhZ2UoKTtcclxuXHRcdFx0XHRcdFx0b3BlbkxvZ2luUGFnZSgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdHRvYXN0VGlwcyhyZXMuZGF0YS5tZXNzYWdlKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZWplY3QocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dG9hc3RUaXBzKFwi5pqC5pe25peg5rOV6K6/6Zeu572R57ucXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KS5jYXRjaChcclxuXHRcdFx0KHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlKVxyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fSlcclxuXHRyZXR1cm4gcHJvbWlzZTtcclxufVxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDnvJPlrZjmlbDmja7liLDmnKzlnLBcclxuICog5pa55rOV5rOo6YeKOiDlj6/lt7LpgJrov4dzZXRTdG9yYWdlU3luY+ebuOWvueW6lOeahGdldFN0b3JhZ2VTeW5j5Lyg5YWl55u45bqU55qEa2V55YC86I635Y+W57yT5a2Y5pWw5o2uXHJcbiAqIOS8oOWFpeWPguaVsDogcmVzIOimgee8k+WtmOeahOaVsOaNrlxyXG4gKiDov5Tlm57mlbDlgLw6IOaXoFxyXG4gKi9cclxuY29uc3Qgc2V0U3RvcmFnZSA9IGZ1bmN0aW9uKHJlcykge1xyXG5cdHVuaS5zZXRTdG9yYWdlU3luYyhcImhhc0xvZ2luXCIsIHRydWUpO1xyXG5cdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJcIiwgcmVzLmRhdGEpO1xyXG59O1xyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDmuIXpmaTmnKzlnLDnvJPlrZjnmoTmlbDmja5cclxuICog5pa55rOV5rOo6YeKOiDmuIXpmaTnibnlrprnmoR1c2VyTmFtZS9oYXNMb2dpbi90b2tlbuaVsOaNrlxyXG4gKiDkvKDlhaXlj4LmlbA6IOaXoFxyXG4gKiDov5Tlm57mlbDlgLw6IOaXoFxyXG4gKi9cclxuY29uc3QgcmVtb3ZlU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHVuaS5zZXRTdG9yYWdlU3luYyhcImhhc0xvZ2luXCIsIGZhbHNlKTtcclxuXHR1bmkucmVtb3ZlU3RvcmFnZSh7XHJcblx0XHRrZXk6ICd1c2VyJyxcclxuXHR9KS50aGVuKCgpID0+IHtcclxuXHRcdHVuaS5yZW1vdmVTdG9yYWdlKHtcclxuXHRcdFx0a2V5OiAndG9rZW5zJ1xyXG5cdFx0fSk7XHJcblx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoXCJ3aWRcIik7XHJcblx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoXCJ1bmlvbmlkXCIpO1xyXG5cdH0pO1xyXG5cdHVuaS5yZW1vdmVTdG9yYWdlU3luYyhcInRva2Vuc1wiKTtcclxuXHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoXCJ3aWRcIik7XHJcblx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKFwidW5pb25pZFwiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IOiOt+WPluacjeWKoeWZqOi3r+W+hOWJjee8gFxyXG4gKiDmlrnms5Xms6jph4o6IFxyXG4gKiDkvKDlhaXlj4LmlbA6IOaXoFxyXG4gKiDov5Tlm57mlbDlgLw6IOacjeWKoeWZqOi3r+W+hOWJjee8gFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QmFzZVVybCgpIHtcclxuXHRyZXR1cm4gVVJMX0JBU0U7XHJcbn1cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog6I635Y+W5Zu+54mH6Lev5b6E5YmN57yAXHJcbiAqIOaWueazleazqOmHijogXHJcbiAqIOS8oOWFpeWPguaVsDog5pegXHJcbiAqIOi/lOWbnuaVsOWAvDog5Zu+54mH6Lev5b6E5YmN57yAXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCYXNlSW1hZ2VQYXRoKCkge1xyXG5cdHJldHVybiBJTUFHRV9QQVRIO1xyXG59XHJcblxyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiDojrflj5blvZPliY3nlKjmiLfnmoTkv6Hmga9cclxuICog5pa55rOV5rOo6YeKOiBcclxuICog5Lyg5YWl5Y+C5pWwOiBtZXNjcm9sbCjkuIrkuIvmi4nliLfmlrDvvIzpnZ7lv4XkvKApXHJcbiAqIOi/lOWbnuaVsOWAvDog55So5oi35L+h5oGv5pWw5o2uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRVc2VySW5mbyhtZXNjcm9sbCkge1xyXG5cclxuXHRsZXQgdGhlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0bGV0IHVybCA9IFwiYXBpL25jcmIvXCI7XHJcblx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0YWN0aW9uIDogJ3VzZXJpbmZvJ1xyXG5cdFx0fTtcclxuXHRcdHBvc3QodXJsLCBkYXRhLCBtZXNjcm9sbCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZihyZXMuZGF0YS5uaWNrbmFtZSl7XHJcblx0XHRcdFx0cmVzLmRhdGEubmlja25hbWUgPSBkZWNvZGVVUkkocmVzLmRhdGEubmlja25hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJcIixyZXMuZGF0YSk7XHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImhhc2xvZ2luXCIsdHJ1ZSk7XHJcblx0XHRcdHJlc29sdmUocmVzLmRhdGEpO1xyXG5cdFx0fSkuY2F0Y2gocmVzID0+IHtcclxuXHRcdFx0cmVqZWN0KHJlcyk7XHJcblx0XHR9KVxyXG5cdH0pXHJcblx0cmV0dXJuIHRoZVByb21pc2U7XHJcbn1cclxuLyoqXHJcbiAgKiDmlrnms5XlkI3np7A6IOS/ruaUueeUqOaIt+S/oeaBr1xyXG4gICog5pa55rOV5rOo6YeKOiDkv67mlLnnlKjmiLfkv6Hmga/miJDlip/lkI7kvJrnm7TmjqXlho3or7vlj5bnlKjmiLfkv6Hmga8s5L+d6K+B6I635Y+W55So5oi355qE5L+h5oGv5pyA5pawXHJcbiAgKiDkvKDlhaXlj4LmlbA6IGRhdGEg6KaB5L+u5pS555qE55So5oi35L+h5oGv5Y+C5pWwLOavlOWmguS/ruaUueaYteensOeahOivneS8oHtuaWNrOlwi5pu+5YWI5qOuXCJ9XHJcbiAgKiDov5Tlm57mlbDlgLw6IOS/ruaUueaYr+WQpuaIkOWKn+eahOi/lOWbnuWAvFxyXG4qL1xyXG5mdW5jdGlvbiB1cGRhdGVVc2VySW5mbyhkYXRhKSB7XHJcblxyXG5cdGxldCB0aGVQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRsZXQgdXJsID0gJ2FwaS9uY3JiLyc7XHJcblx0XHRkYXRhLmFjdGlvbiA9IFwidXB1c2VyaW5mb1wiO1xyXG5cdFx0ZGF0YS5uaWNrbmFtZSA9IGVuY29kZVVSSShkYXRhLm5pY2tuYW1lKTtcclxuXHRcdHBvc3QodXJsLGRhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0Z2V0VXNlckluZm8oKTtcclxuXHRcdFx0cmVzb2x2ZShyZXMuZGF0YSk7XHJcblx0XHR9KS5jYXRjaChyZXMgPT4ge1xyXG5cdFx0XHRyZWplY3QocmVzKTtcclxuXHRcdH0pXHJcblx0fSlcclxuXHRyZXR1cm4gdGhlUHJvbWlzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaWueazleWQjeensDog6YeN5paw6Lez5Yiw55m75b2V6aG1XHJcbiAqIOaWueazleazqOmHijog6ZyA6KaB55So5oi355m75b2V5oiW55m76ZmG5aSx5pWI5pe25omN5L2/55So5q2k5pa55rOVXHJcbiAqIOS8oOWFpeWPguaVsDog5pegXHJcbiAqIOi/lOWbnuaVsOWAvDog5pegXHJcbiAqL1xyXG5jb25zdCBvcGVuTG9naW5QYWdlID0gZnVuY3Rpb24oKSB7XHJcblx0Ly8gdW5pLnJlTGF1bmNoKHtcclxuXHQvLyBcdHVybDogXCIvcGFnZXMvdXNlci9sb2dpbi9sb2dpblwiXHJcblx0Ly8gfSk7XHJcblx0Ly8gbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0Ly9jb25zb2xlLmxvZyhcInBhZ2VzcGFnZXNwYWdlcyA9IFwiLHBhZ2VzKTtcclxuXHR2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuXHR2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG5cdHZhciByb3V0ZSA9IHBhZ2Uucm91dGU7XHJcblx0aWYocm91dGUgJiYgcm91dGUgPT0gXCJwYWdlcy91c2VyL2xvZ2luL2xvZ2luXCIpe1xyXG5cdH1lbHNle1xyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6XCIvcGFnZXMvdXNlci9sb2dpbi9sb2dpblwiLFxyXG5cdFx0XHRhbmltYXRpb25UeXBlOlwic2xpZGUtaW4tYm90dG9tXCIsXHJcblx0XHRcdGFuaW1hdGlvbkR1cmF0aW9uOiAyMDBcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbi8vdG9hc3Tmj5DnpLpcclxuY29uc3QgdG9hc3RUaXBzID0gZnVuY3Rpb24odHh0KSB7XHJcblx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0dGl0bGU6IHR4dCxcclxuXHRcdGljb246IFwibm9uZVwiXHJcblx0fSlcclxufTtcclxuLy90b2FzdOaPkOekuu+8jOWPr+S7peiuvue9ruetieW+heaXtumVv1xyXG5jb25zdCB0b2FzdFRpcHNUaW1lID0gZnVuY3Rpb24odHh0LCB0aW1lKSB7XHJcblx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0dGl0bGU6IHR4dCxcclxuXHRcdGR1cmF0aW9uOiB0aW1lLFxyXG5cdFx0aWNvbjogXCJub25lXCJcclxuXHJcblx0fSlcclxufTtcclxuLy/lvLnnqpfmj5DnpLpcclxuY29uc3Qgc2hvd01vZGFsID0gZnVuY3Rpb24odHh0KSB7XHJcblx0cmV0dXJuIHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0Y29udGVudDogdHh0LFxyXG5cdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0fSlcclxufTtcclxuLy9sb2FkaW5nXHJcbmNvbnN0IHNob3dMb2FkaW5nID0gZnVuY3Rpb24odHh0KSB7XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdH0sIDE1MDAwKTtcclxuXHRyZXR1cm4gdW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdHRpdGxlOiB0eHQsXHJcblx0XHRtYXNrOiBmYWxzZSAvL+aVsOaNruivt+axguaXtkFwcOeVjOmdouaXoOazleaTjeS9nFxyXG5cdH0pO1xyXG59O1xyXG4vKipcclxuICog5pa55rOV5ZCN56ewOiBnZXTor7fmsYJcclxuICog5pa55rOV5rOo6YeKOiB1cmzkuLrlv4XloavvvIxkYXRh5ZKMbWVzY3JvbGzkuLrpnZ7lv4XloatcclxuICog5Lyg5YWl5Y+C5pWwOiB1cmwtPuivt+axgueahOaOpeWPo+i3r+W+hO+8jGRhdGEtPuivt+axgueahOWPguaVsCBtZXNjcm9sbC0+5LiK5LiL5ouJ57uE5Lu2IGxhb2RpbmdGbGFnLT7mmK/lkKbmmL7npLrliqDovb3liqjnlLvkvKBib29s5YC8XHJcbiAqIOi/lOWbnuaVsOWAvDog6K+35rGC5LmL5ZCO55qEanNvbuaVsOaNrlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0KHVybCwgZGF0YSwgbWVzY3JvbGwsbG9hZGluZ0ZsYWcpIHtcclxuXHRjb25zdCBvcHRpb24gPSB7XHJcblx0XHRcInVybFwiOiB1cmwsXHJcblx0XHRcIm1ldGhvZFwiOiBcImdldFwiXHJcblx0fVxyXG5cdHJldHVybiByZXF1ZXN0KG9wdGlvbiwgZGF0YSwgbWVzY3JvbGwsbG9hZGluZ0ZsYWcpO1xyXG59XHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IHBvc3Tor7fmsYJcclxuICog5pa55rOV5rOo6YeKOiB1cmzkuLrlv4XloavvvIxkYXRhL21lc2Nyb2xsL2xvYWRpbmdGbGFn5Li66Z2e5b+F5aGrXHJcbiAqIOS8oOWFpeWPguaVsDogdXJsLT7or7fmsYLnmoTmjqXlj6Pot6/lvoTvvIxkYXRhLT7or7fmsYLnmoTlj4LmlbAgbWVzY3JvbGwtPuS4iuS4i+aLiee7hOS7tiBsYW9kaW5nRmxhZy0+5piv5ZCm5pi+56S65Yqg6L295Yqo55S75LygYm9vbOWAvFxyXG4gKiDov5Tlm57mlbDlgLw6IOivt+axguS5i+WQjueahGpzb27mlbDmja5cclxuICovXHJcbmZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhLCBtZXNjcm9sbCxsb2FkaW5nRmxhZykge1xyXG5cdGNvbnN0IG9wdGlvbiA9IHtcclxuXHRcdFwidXJsXCI6IHVybCxcclxuXHRcdFwibWV0aG9kXCI6IFwicG9zdFwiXHJcblx0fVxyXG5cdGlmICghZGF0YSkge1xyXG5cdFx0ZGF0YSA9IHt9XHJcblx0fVxyXG5cdHJldHVybiByZXF1ZXN0KG9wdGlvbiwgZGF0YSwgbWVzY3JvbGwsbG9hZGluZ0ZsYWcpO1xyXG59XHJcbi8qKlxyXG4gKiDmlrnms5XlkI3np7A6IHBvc3Tor7fmsYJcclxuICog5pa55rOV5rOo6YeKOiB1cmzkuLrlv4XloavvvIxkYXRh5ZKMbWVzY3JvbGzkuLrpnZ7lv4XloatcclxuICog5Lyg5YWl5Y+C5pWwOiB1cmwtPuivt+axgueahOaOpeWPo+i3r+W+hO+8jGRhdGEtPuivt+axgueahOWPguaVsCBtZXNjcm9sbC0+5LiK5LiL5ouJ57uE5Lu2IGxvYWRpbmdGbGFnLT7mmK/lkKbmmL7npLrliqDovb3liqjnlLvkvKBib29s5YC8XHJcbiAqIOi/lOWbnuaVsOWAvDog6K+35rGC5LmL5ZCO55qEanNvbuaVsOaNrlxyXG4gKi9cclxuZnVuY3Rpb24ganNvbih1cmwsIGRhdGEsIG1lc2Nyb2xsLGxvYWRpbmdGbGFnKSB7XHJcblx0Y29uc3Qgb3B0aW9uID0ge1xyXG5cdFx0XCJ1cmxcIjogdXJsLFxyXG5cdFx0XCJtZXRob2RcIjogXCJqc29uXCJcclxuXHR9XHJcblx0cmV0dXJuIHJlcXVlc3Qob3B0aW9uLCBkYXRhLCBtZXNjcm9sbCxsb2FkaW5nRmxhZyk7XHJcbn1cclxuLyogXHJcblx05Y+q5piv6L+U5Zue55So5oi355m75b2V54q25oCB55qEYm9vbOWAvO+8jOS4jeS8mui3s+i9rOWIsOeZu+W9leeVjOmdolxyXG4qL1xyXG5mdW5jdGlvbiBsb2dpblN0YXRlKCkge1xyXG5cdHJldHVybiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJoYXNMb2dpblwiKTtcclxufVxyXG4vKiBcclxuXHTnlKjmiLfnmbvlvZXkuYvlkI7miY3og73ov5vooYzkuIvkuIDmraXnmoTmk43kvZzvvIzlkKbliJnot7PnmbvlvZXpobUs6L+U5Zue55So5oi35piv5ZCm55m75b2V55qEYm9vbOWAvCBcclxuKi9cclxuZnVuY3Rpb24gYWxyZWFkeUxvZ2luKCkge1xyXG5cdGxldCBsb2dpblN0YXRlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiaGFzTG9naW5cIik7XHJcblx0Y29uc29sZS5sb2coXCJsb2dpblN0YXRlbG9naW5TdGF0ZSA9PSBcIixsb2dpblN0YXRlKTtcclxuXHRpZiAoIWxvZ2luU3RhdGUgfHwgbG9naW5TdGF0ZSA9PT0gZmFsc2UpIHtcclxuXHRcdHJlbW92ZVN0b3JhZ2UoKTtcclxuXHRcdG9wZW5Mb2dpblBhZ2UoKTtcclxuXHR9XHJcblx0cmV0dXJuIGxvZ2luU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRyZXF1ZXN0LFxyXG5cdGdldCxcclxuXHRwb3N0LFxyXG5cdGpzb24sXHJcblx0bG9naW5TdGF0ZSxcclxuXHRhbHJlYWR5TG9naW4sXHJcblx0b3BlbkxvZ2luUGFnZSxcclxuXHRzZXRTdG9yYWdlLFxyXG5cdHJlbW92ZVN0b3JhZ2UsXHJcblx0Z2V0VXNlckluZm8sXHJcblx0dXBkYXRlVXNlckluZm8sXHJcblx0dG9hc3RUaXBzLFxyXG5cdHRvYXN0VGlwc1RpbWUsXHJcblx0c2hvd01vZGFsLFxyXG5cdHNob3dMb2FkaW5nLFxyXG5cdGdldEJhc2VVcmwsXHJcblx0Z2V0QmFzZUltYWdlUGF0aFxyXG5cdFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),

/***/ 18:
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

/***/ 2:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-27820200527001","_inBundle":false,"_integrity":"sha512-mUmsdrO9iZv5E8lpR+yZsdxjuNz3yvPfd9KQkeWAQhOfUj9LvkHifYTC8j/Hz6rdfo0Y208wqRixNq77TzxI5A==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-27820200527001.tgz","_shasum":"2324942ff6417c2319ac24cd87ea9af04a4796eb","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"2cef0c9a12c4c980acd11787d6f4632d06dc00b0","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-27820200527001"};

/***/ }),

/***/ 210:
/*!*********************************************************************************!*\
  !*** E:/headlines/headlines/main.js?{"page":"pages%2Findex%2FuserDealPrivacy"} ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_userDealPrivacy_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/userDealPrivacy.nvue?mpType=page */ 211);\n\n        \n        \n        \n        _pages_index_userDealPrivacy_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_userDealPrivacy_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/userDealPrivacy'\n        _pages_index_userDealPrivacy_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_userDealPrivacy_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxRQUFvQztBQUNwQyxRQUE4QjtBQUM5QixRQUF3RTtBQUN4RSxRQUFRLHFGQUFHO0FBQ1gsUUFBUSxxRkFBRztBQUNYLFFBQVEscUZBQUc7QUFDWCxnQkFBZ0IscUZBQUciLCJmaWxlIjoiMjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvaW5kZXgvdXNlckRlYWxQcml2YWN5Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L3VzZXJEZWFsUHJpdmFjeSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///210\n");

/***/ }),

/***/ 211:
/*!***************************************************************************!*\
  !*** E:/headlines/headlines/pages/index/userDealPrivacy.nvue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userDealPrivacy_nvue_vue_type_template_id_9a4fb41e_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userDealPrivacy.nvue?vue&type=template&id=9a4fb41e&mpType=page */ 212);\n/* harmony import */ var _userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userDealPrivacy.nvue?vue&type=script&lang=js&mpType=page */ 214);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./userDealPrivacy.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 216).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./userDealPrivacy.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 216).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _userDealPrivacy_nvue_vue_type_template_id_9a4fb41e_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _userDealPrivacy_nvue_vue_type_template_id_9a4fb41e_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6c551b1e\",\n  false,\n  _userDealPrivacy_nvue_vue_type_template_id_9a4fb41e_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/pages/index/userDealPrivacy.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDK0U7QUFDTDtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDhFQUFxRTtBQUN6SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsOEVBQXFFO0FBQzlIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLGlHQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VzZXJEZWFsUHJpdmFjeS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhNGZiNDFlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91c2VyRGVhbFByaXZhY3kubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi91c2VyRGVhbFByaXZhY3kubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdXNlckRlYWxQcml2YWN5Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdXNlckRlYWxQcml2YWN5Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI2YzU1MWIxZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9oZWFkbGluZXMvaGVhZGxpbmVzL3BhZ2VzL2luZGV4L3VzZXJEZWFsUHJpdmFjeS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///211\n");

/***/ }),

/***/ 212:
/*!*********************************************************************************************************!*\
  !*** E:/headlines/headlines/pages/index/userDealPrivacy.nvue?vue&type=template&id=9a4fb41e&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_template_id_9a4fb41e_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./userDealPrivacy.nvue?vue&type=template&id=9a4fb41e&mpType=page */ 213);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_template_id_9a4fb41e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_template_id_9a4fb41e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_template_id_9a4fb41e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_template_id_9a4fb41e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 213:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/pages/index/userDealPrivacy.nvue?vue&type=template&id=9a4fb41e&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: ["mask"],
      on: {
        click: function($event) {
          _vm.wrapperClick()
        }
      }
    },
    [
      _c("div", { staticClass: ["mask-content"] }, [
        _c("u-text", { staticClass: ["title"] }, [
          _vm._v("用户协议及隐私政策")
        ]),
        _c("scroller", { staticClass: ["scroller-view"] }, [
          _c("u-text", { staticClass: ["describle"] }, [
            _vm._v(
              "亲爱的用户，感谢您一直以来的支持!为更好地保护您的权益，同时遵守相关监管要求，我们更新了"
            )
          ]),
          _c(
            "u-text",
            { staticClass: ["deal-text"], on: { click: _vm.readPrivacy } },
            [_vm._v("《南昌头条隐私政策》")]
          ),
          _c(
            "u-text",
            { staticClass: ["deal-text"], on: { click: _vm.readUserDeal } },
            [_vm._v("《南昌头条用户协议》")]
          ),
          _c("u-text", { staticClass: ["describle"] }, [
            _vm._v("向您说明如下:")
          ]),
          _c("u-text", { staticClass: ["describle"] }, [
            _vm._v(
              "1.为向您提供基本服务，我们会遵循正当、合法、必要的原则收集和使用必要的信息；"
            )
          ]),
          _c("u-text", { staticClass: ["describle"] }, [
            _vm._v(
              "2.基于您的授权我们可能会收集和使用您的位置信息和设备信息，您有权拒绝或取消授权;"
            )
          ]),
          _c("u-text", { staticClass: ["describle"] }, [
            _vm._v(
              "3.未经您的授权同意，我们不会将您的信息共享给第三方或用于您未授权的其他用途；"
            )
          ]),
          _c("u-text", { staticClass: ["describle"] }, [
            _vm._v("4.您可以对上述信息进行访问、更正、删除、以及注销账户。")
          ])
        ]),
        _c("u-text", { staticClass: ["tip"] }, [
          _vm._v("如果您同意请点击下面的按钮以接受我们的服务")
        ]),
        _vm.isAndroid
          ? _c("div", { staticClass: ["buttons"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["button-left"],
                  on: {
                    click: function($event) {
                      _vm.disAgreeButtonClick()
                    }
                  }
                },
                [_vm._v("不同意")]
              ),
              _c(
                "u-text",
                {
                  staticClass: ["button-right"],
                  on: {
                    click: function($event) {
                      _vm.agreeButtonClick()
                    }
                  }
                },
                [_vm._v("同意并继续")]
              )
            ])
          : _c(
              "u-text",
              {
                staticClass: ["button-text"],
                on: { click: _vm.agreeButtonClick }
              },
              [_vm._v("我知道了")]
            ),
        _vm.disAgree
          ? _c("div", { staticClass: ["mask"] }, [
              _c("div", { staticClass: ["tip-view"] }, [
                _c("u-text", { staticClass: ["tip-view-title"] }, [
                  _vm._v(
                    "您需要同意《南昌头条隐私政策》和《南昌头条用户协议》,才能继续使用我们的服务"
                  )
                ]),
                _c("div", { staticClass: ["tip-view-buttons"] }, [
                  _c(
                    "u-text",
                    {
                      staticClass: ["tip-view-left"],
                      on: {
                        click: function($event) {
                          _vm.cancel()
                        }
                      }
                    },
                    [_vm._v("暂不")]
                  ),
                  _c(
                    "u-text",
                    {
                      staticClass: ["tip-view-right"],
                      on: {
                        click: function($event) {
                          _vm.sure()
                        }
                      }
                    },
                    [_vm._v("去同意")]
                  )
                ])
              ])
            ])
          : _vm._e()
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 214:
/*!***************************************************************************************************!*\
  !*** E:/headlines/headlines/pages/index/userDealPrivacy.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./userDealPrivacy.nvue?vue&type=script&lang=js&mpType=page */ 215);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXliLENBQWdCLHFlQUFHLEVBQUMiLCJmaWxlIjoiMjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXJEZWFsUHJpdmFjeS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VyRGVhbFByaXZhY3kubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///214\n");

/***/ }),

/***/ 215:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/pages/index/userDealPrivacy.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _util = _interopRequireDefault(__webpack_require__(/*! ../../common/js/util.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { describle1: \"亲爱的用户，感谢您一直以来的支持!为更好地保护您的权益，同时遵守相关监管要求，我们更新了\", describle2: \"\", disAgree: false, isAndroid: false };}, onShow: function onShow() {if (uni.getSystemInfoSync().platform == \"ios\") {//console.log(\"苹果\");\n    } else {this.isAndroid = true; //console.log(\"安卓\");\n    }}, methods: { wrapperClick: function wrapperClick() {}, cancel: function cancel() {//console.log(\"5555555\");\n      plus.runtime.quit(); //console.log(\"777777\");\n      plus.runtime.quit();}, sure: function sure() {//console.log(\"666666\");\n      this.disAgree = false;}, disAgreeButtonClick: function disAgreeButtonClick() {//console.log(\"不同意不同意不同意\");\n      this.disAgree = true;uni.showModal({ title: \"您需要同意《南昌头条隐私政策》和《南昌头条用户协议》，才能继续使用我们的服务\", cancelText: \"暂不\", confirmText: \"去同意\", complete: function complete(res) {if (res.cancel) {\n\n          }\n        } });\n\n\n    },\n    agreeButtonClick: function agreeButtonClick() {\n      uni.setStorageSync(\"agreeUserDeal\", true);\n      var subNVue = uni.getSubNVueById('userDealPrivacy');\n      subNVue.hide();\n    },\n    readPrivacy: function readPrivacy() {\n      var webUrl = \"yszc\";\n      _util.default.gotoWebView(webUrl, \"南昌头条隐私政策\");\n    },\n    readUserDeal: function readUserDeal() {\n      var webUrl = \"yhxy\";\n      _util.default.gotoWebView(webUrl, \"南昌头条用户协议\");\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvdXNlckRlYWxQcml2YWN5Lm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0EsMkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLDBEQURBLEVBRUEsY0FGQSxFQUdBLGVBSEEsRUFJQSxnQkFKQSxHQU1BLENBUkEsRUFVQSxNQVZBLG9CQVVBLENBQ0EsZ0RBQ0E7QUFDQSxLQUZBLE1BRUEsQ0FDQSxzQkFEQSxDQUVBO0FBQ0EsS0FDQSxDQWpCQSxFQWtCQSxXQUNBLHVDQUVBLENBSEEsRUFJQSwyQkFDQTtBQUNBLDBCQUZBLENBR0E7QUFFQSwwQkFFQSxDQVhBLEVBWUEsdUJBQ0E7QUFDQSw0QkFDQSxDQWZBLEVBZ0JBLHFEQUNBO0FBQ0EsMkJBQ0EsZ0JBQ0EsK0NBREEsRUFFQSxnQkFGQSxFQUdBLGtCQUhBLEVBSUEsUUFKQSxvQkFJQSxHQUpBLEVBSUEsQ0FDQTs7QUFFQTtBQUNBLFNBUkE7OztBQVdBLEtBOUJBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQ0E7QUFvQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2Q0E7QUF3Q0E7QUFDQTtBQUNBO0FBQ0EsS0EzQ0EsRUFsQkEsRSIsImZpbGUiOiIyMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cIm1hc2tcIiBAY2xpY2s9XCJ3cmFwcGVyQ2xpY2soKVwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1hc2stY29udGVudFwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlXCI+55So5oi35Y2P6K6u5Y+K6ZqQ56eB5pS/562WPC90ZXh0PlxyXG5cdFx0XHQ8c2Nyb2xsZXIgY2xhc3M9XCJzY3JvbGxlci12aWV3XCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZXNjcmlibGVcIj7kurLniLHnmoTnlKjmiLfvvIzmhJ/osKLmgqjkuIDnm7Tku6XmnaXnmoTmlK/mjIEh5Li65pu05aW95Zyw5L+d5oqk5oKo55qE5p2D55uK77yM5ZCM5pe26YG15a6I55u45YWz55uR566h6KaB5rGC77yM5oiR5Lus5pu05paw5LqGPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGVhbC10ZXh0XCIgdi1vbjpjbGljay5zdG9wPVwicmVhZFByaXZhY3lcIj7jgIrljZfmmIzlpLTmnaHpmpDnp4HmlL/nrZbjgIs8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZWFsLXRleHRcIiB2LW9uOmNsaWNrLnN0b3A9XCJyZWFkVXNlckRlYWxcIj7jgIrljZfmmIzlpLTmnaHnlKjmiLfljY/orq7jgIs8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZXNjcmlibGVcIj7lkJHmgqjor7TmmI7lpoLkuIs6PC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGVzY3JpYmxlXCI+MS7kuLrlkJHmgqjmj5Dkvpvln7rmnKzmnI3liqHvvIzmiJHku6zkvJrpgbXlvqrmraPlvZPjgIHlkIjms5XjgIHlv4XopoHnmoTljp/liJnmlLbpm4blkozkvb/nlKjlv4XopoHnmoTkv6Hmga/vvJs8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZXNjcmlibGVcIj4yLuWfuuS6juaCqOeahOaOiOadg+aIkeS7rOWPr+iDveS8muaUtumbhuWSjOS9v+eUqOaCqOeahOS9jee9ruS/oeaBr+WSjOiuvuWkh+S/oeaBr++8jOaCqOacieadg+aLkue7neaIluWPlua2iOaOiOadgzs8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZXNjcmlibGVcIj4zLuacque7j+aCqOeahOaOiOadg+WQjOaEj++8jOaIkeS7rOS4jeS8muWwhuaCqOeahOS/oeaBr+WFseS6q+e7meesrOS4ieaWueaIlueUqOS6juaCqOacquaOiOadg+eahOWFtuS7lueUqOmAlO+8mzwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRlc2NyaWJsZVwiPjQu5oKo5Y+v5Lul5a+55LiK6L+w5L+h5oGv6L+b6KGM6K6/6Zeu44CB5pu05q2j44CB5Yig6Zmk44CB5Lul5Y+K5rOo6ZSA6LSm5oi344CCPC90ZXh0PlxyXG5cdFx0XHQ8L3Njcm9sbGVyPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRpcFwiPuWmguaenOaCqOWQjOaEj+ivt+eCueWHu+S4i+mdoueahOaMiemSruS7peaOpeWPl+aIkeS7rOeahOacjeWKoTwvdGV4dD5cclxuXHJcblx0XHRcdDxkaXYgdi1pZj1cImlzQW5kcm9pZFwiIGNsYXNzPVwiYnV0dG9uc1wiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnV0dG9uLWxlZnRcIiB2LW9uOmNsaWNrLnN0b3A9XCJkaXNBZ3JlZUJ1dHRvbkNsaWNrKClcIj7kuI3lkIzmhI88L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJidXR0b24tcmlnaHRcIiB2LW9uOmNsaWNrLnN0b3A9XCJhZ3JlZUJ1dHRvbkNsaWNrKClcIj7lkIzmhI/lubbnu6fnu608L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PHRleHQgdi1lbHNlIGNsYXNzPVwiYnV0dG9uLXRleHRcIiB2LW9uOmNsaWNrLnN0b3A9XCJhZ3JlZUJ1dHRvbkNsaWNrXCI+5oiR55+l6YGT5LqGPC90ZXh0PlxyXG5cclxuXHRcdFx0PGRpdiB2LWlmPVwiZGlzQWdyZWVcIiBjbGFzcz1cIm1hc2tcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNTUpO1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aXAtdmlld1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXAtdmlldy10aXRsZVwiPuaCqOmcgOimgeWQjOaEj+OAiuWNl+aYjOWktOadoemakOengeaUv+etluOAi+WSjOOAiuWNl+aYjOWktOadoeeUqOaIt+WNj+iuruOAiyzmiY3og73nu6fnu63kvb/nlKjmiJHku6znmoTmnI3liqE8L3RleHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGlwLXZpZXctYnV0dG9uc1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpcC12aWV3LWxlZnRcIiB2LW9uOmNsaWNrLnN0b3A9XCJjYW5jZWwoKVwiPuaaguS4jTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXAtdmlldy1yaWdodFwiIHYtb246Y2xpY2suc3RvcD1cInN1cmUoKVwiPuWOu+WQjOaEjzwvdGV4dD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHV0aWwgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy91dGlsLmpzXCJcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRlc2NyaWJsZTE6IFwi5Lqy54ix55qE55So5oi377yM5oSf6LCi5oKo5LiA55u05Lul5p2l55qE5pSv5oyBIeS4uuabtOWlveWcsOS/neaKpOaCqOeahOadg+ebiu+8jOWQjOaXtumBteWuiOebuOWFs+ebkeeuoeimgeaxgu+8jOaIkeS7rOabtOaWsOS6hlwiLFxyXG5cdFx0XHRcdGRlc2NyaWJsZTI6IFwiXCIsXHJcblx0XHRcdFx0ZGlzQWdyZWU6IGZhbHNlLFxyXG5cdFx0XHRcdGlzQW5kcm9pZDogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIikge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCLoi7nmnpxcIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5pc0FuZHJvaWQgPSB0cnVlO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCLlronljZNcIik7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHdyYXBwZXJDbGljazogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYW5jZWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCI1NTU1NTU1XCIpO1xyXG5cdFx0XHRcdHBsdXMucnVudGltZS5xdWl0KCk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIjc3Nzc3N1wiKTtcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRwbHVzLnJ1bnRpbWUucXVpdCgpO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdXJlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiNjY2NjY2XCIpO1xyXG5cdFx0XHRcdHRoaXMuZGlzQWdyZWUgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGlzQWdyZWVCdXR0b25DbGljazogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIuS4jeWQjOaEj+S4jeWQjOaEj+S4jeWQjOaEj1wiKTtcclxuXHRcdFx0XHR0aGlzLmRpc0FncmVlID0gdHJ1ZTtcclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdHRpdGxlOiBcIuaCqOmcgOimgeWQjOaEj+OAiuWNl+aYjOWktOadoemakOengeaUv+etluOAi+WSjOOAiuWNl+aYjOWktOadoeeUqOaIt+WNj+iuruOAi++8jOaJjeiDvee7p+e7reS9v+eUqOaIkeS7rOeahOacjeWKoVwiLFxyXG5cdFx0XHRcdFx0Y2FuY2VsVGV4dDogXCLmmoLkuI1cIixcclxuXHRcdFx0XHRcdGNvbmZpcm1UZXh0OiBcIuWOu+WQjOaEj1wiLFxyXG5cdFx0XHRcdFx0Y29tcGxldGUocmVzKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuY2FuY2VsKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGFncmVlQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImFncmVlVXNlckRlYWxcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0Y29uc3Qgc3ViTlZ1ZSA9IHVuaS5nZXRTdWJOVnVlQnlJZCgndXNlckRlYWxQcml2YWN5Jyk7XHJcblx0XHRcdFx0c3ViTlZ1ZS5oaWRlKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlYWRQcml2YWN5OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgd2ViVXJsID0gXCJ5c3pjXCI7XHJcblx0XHRcdFx0dXRpbC5nb3RvV2ViVmlldyh3ZWJVcmwsIFwi5Y2X5piM5aS05p2h6ZqQ56eB5pS/562WXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZWFkVXNlckRlYWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB3ZWJVcmwgPSBcInloeHlcIjtcclxuXHRcdFx0XHR1dGlsLmdvdG9XZWJWaWV3KHdlYlVybCwgXCLljZfmmIzlpLTmnaHnlKjmiLfljY/orq5cIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0Lm1hc2sge1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0dG9wOiAwcnB4O1xyXG5cdFx0Ym90dG9tOiAwcnB4O1xyXG5cdFx0cmlnaHQ6IDBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KTtcclxuXHR9XHJcblxyXG5cdC5tYXNrLWNvbnRlbnQge1xyXG5cdFx0d2lkdGg6IDU1MHJweDtcclxuXHRcdGhlaWdodDogNzYwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0ei1pbmRleDogLTE7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEwMHJweDtcclxuXHRcdGZsZXg6IDA7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQuc2Nyb2xsZXItdmlldyB7XHJcblx0XHR3aWR0aDogNTUwcnB4O1xyXG5cdFx0cGFkZGluZzogMHJweCAzMHJweCAyMHJweCAzNXJweDtcclxuXHR9XHJcblxyXG5cdC5kZXNjcmlibGUge1xyXG5cdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC50aXAge1xyXG5cdFx0d2lkdGg6IDU1MHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0cGFkZGluZzogMjBycHggMzVycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHJweDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHotaW5kZXg6IDM7XHJcblx0fVxyXG5cclxuXHQuZGVhbC10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzIyNTI4OTtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5idXR0b25zIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmJ1dHRvbi1sZWZ0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHR3aWR0aDogMjIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA3MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2NXJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTI4OTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJ1dHRvbi1yaWdodCB7XHJcblxyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdHdpZHRoOiAyMjBycHg7XHJcblx0XHRoZWlnaHQ6IDcwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDY1cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1Mjg5O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTJycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uLXRleHQge1xyXG5cdFx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAycnB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogI0Y1RjVGNTtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdHdpZHRoOiA1NTBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxMDBycHg7XHJcblx0XHRjb2xvcjogIzIyNTI4OTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC50aXAtdmlldyB7XHJcblx0XHR3aWR0aDogNDYwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyNDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHR6LWluZGV4OiAyO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC50aXAtdmlldy10aXRsZSB7XHJcblx0XHR3aWR0aDogNDYwcnB4O1xyXG5cdFx0cGFkZGluZzogMzBycHggMjBycHggMzBycHggMjVycHg7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQudGlwLXZpZXctYnV0dG9ucyB7XHJcblx0XHR3aWR0aDogNDYwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci10b3Atd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjMjI1Mjg5O1xyXG5cdH1cclxuXHJcblx0LnRpcC12aWV3LWxlZnQge1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdHdpZHRoOiAyMzBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0Y29sb3I6ICMyMjUyODk7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRib3JkZXItcmlnaHQtd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjMjI1Mjg5O1xyXG5cdH1cclxuXHJcblx0LnRpcC12aWV3LXJpZ2h0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHR3aWR0aDogMjMwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdGNvbG9yOiAjMjI1Mjg5O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///215\n");

/***/ }),

/***/ 216:
/*!************************************************************************************************************!*\
  !*** E:/headlines/headlines/pages/index/userDealPrivacy.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./userDealPrivacy.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 217);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userDealPrivacy_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 217:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/pages/index/userDealPrivacy.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "status_bar": {
    "width": 100
  },
  "mask": {
    "alignItems": "center",
    "justifyContent": "center",
    "top": "0rpx",
    "bottom": "0rpx",
    "right": "0rpx",
    "position": "fixed",
    "width": "750rpx",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  "mask-content": {
    "width": "550rpx",
    "height": "760rpx",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "20rpx",
    "zIndex": -1,
    "overflow": "hidden"
  },
  "title": {
    "height": "100rpx",
    "lineHeight": "100rpx",
    "flex": 0,
    "textAlign": "center",
    "fontSize": "36rpx",
    "fontWeight": "bold"
  },
  "scroller-view": {
    "width": "550rpx",
    "paddingTop": "0rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "35rpx"
  },
  "describle": {
    "fontSize": "26rpx",
    "color": "#333333",
    "textAlign": "left",
    "lineHeight": "40rpx",
    "marginLeft": "10rpx"
  },
  "tip": {
    "width": "550rpx",
    "height": "80rpx",
    "fontSize": "26rpx",
    "paddingTop": "20rpx",
    "paddingRight": "35rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "35rpx",
    "marginBottom": "10rpx",
    "color": "#333333",
    "backgroundColor": "#FFFFFF",
    "zIndex": 3
  },
  "deal-text": {
    "fontSize": "24rpx",
    "color": "#225289",
    "lineHeight": "40rpx"
  },
  "buttons": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "height": "90rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx"
  },
  "button-left": {
    "fontSize": "30rpx",
    "width": "220rpx",
    "height": "70rpx",
    "lineHeight": "65rpx",
    "color": "#FFFFFF",
    "backgroundColor": "#225289",
    "borderRadius": "12rpx",
    "textAlign": "center"
  },
  "button-right": {
    "fontSize": "30rpx",
    "width": "220rpx",
    "height": "70rpx",
    "lineHeight": "65rpx",
    "color": "#FFFFFF",
    "backgroundColor": "#225289",
    "borderRadius": "12rpx",
    "textAlign": "center"
  },
  "button-text": {
    "borderTopStyle": "solid",
    "borderTopWidth": "2rpx",
    "borderTopColor": "#F5F5F5",
    "fontSize": "30rpx",
    "fontWeight": "bold",
    "width": "550rpx",
    "height": "100rpx",
    "lineHeight": "100rpx",
    "color": "#225289",
    "textAlign": "center"
  },
  "tip-view": {
    "width": "460rpx",
    "height": "240rpx",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "20rpx",
    "zIndex": 2,
    "overflow": "hidden"
  },
  "tip-view-title": {
    "width": "460rpx",
    "paddingTop": "30rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "25rpx",
    "fontSize": "30rpx",
    "fontWeight": "bold"
  },
  "tip-view-buttons": {
    "width": "460rpx",
    "marginTop": "0rpx",
    "flexDirection": "row",
    "borderTopStyle": "solid",
    "borderTopWidth": "1rpx",
    "borderTopColor": "#225289"
  },
  "tip-view-left": {
    "fontSize": "30rpx",
    "width": "230rpx",
    "height": "80rpx",
    "lineHeight": "80rpx",
    "color": "#225289",
    "textAlign": "center",
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#225289"
  },
  "tip-view-right": {
    "fontSize": "30rpx",
    "width": "230rpx",
    "height": "80rpx",
    "lineHeight": "80rpx",
    "color": "#225289",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 3:
/*!*********************************************************!*\
  !*** E:/headlines/headlines/pages.json?{"type":"stat"} ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__F11A804"});

/***/ }),

/***/ 4:
/*!**********************************************************!*\
  !*** E:/headlines/headlines/pages.json?{"type":"style"} ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),

/***/ 5:
/*!**********************************************************!*\
  !*** E:/headlines/headlines/main.js?{"type":"appStyle"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 6).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),

/***/ 6:
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

/***/ 7:
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

/***/ })

/******/ });