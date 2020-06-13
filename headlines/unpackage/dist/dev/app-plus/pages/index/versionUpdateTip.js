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
/******/ 	return __webpack_require__(__webpack_require__.s = 218);
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

/***/ 218:
/*!**********************************************************************************!*\
  !*** E:/headlines/headlines/main.js?{"page":"pages%2Findex%2FversionUpdateTip"} ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_versionUpdateTip_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/versionUpdateTip.nvue?mpType=page */ 219);\n\n        \n        \n        \n        _pages_index_versionUpdateTip_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_versionUpdateTip_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/versionUpdateTip'\n        _pages_index_versionUpdateTip_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_versionUpdateTip_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxRQUFvQztBQUNwQyxRQUE4QjtBQUM5QixRQUF5RTtBQUN6RSxRQUFRLHNGQUFHO0FBQ1gsUUFBUSxzRkFBRztBQUNYLFFBQVEsc0ZBQUc7QUFDWCxnQkFBZ0Isc0ZBQUciLCJmaWxlIjoiMjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvaW5kZXgvdmVyc2lvblVwZGF0ZVRpcC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9pbmRleC92ZXJzaW9uVXBkYXRlVGlwJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///218\n");

/***/ }),

/***/ 219:
/*!****************************************************************************!*\
  !*** E:/headlines/headlines/pages/index/versionUpdateTip.nvue?mpType=page ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _versionUpdateTip_nvue_vue_type_template_id_95410660_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./versionUpdateTip.nvue?vue&type=template&id=95410660&mpType=page */ 220);\n/* harmony import */ var _versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./versionUpdateTip.nvue?vue&type=script&lang=js&mpType=page */ 230);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./versionUpdateTip.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 232).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./versionUpdateTip.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 232).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _versionUpdateTip_nvue_vue_type_template_id_95410660_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _versionUpdateTip_nvue_vue_type_template_id_95410660_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"7e0bc050\",\n  false,\n  _versionUpdateTip_nvue_vue_type_template_id_95410660_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/pages/index/versionUpdateTip.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDZ0Y7QUFDTDtBQUMzRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtFQUFzRTtBQUMxSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0VBQXNFO0FBQy9IOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLGtHQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZlcnNpb25VcGRhdGVUaXAubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NTQxMDY2MCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmVyc2lvblVwZGF0ZVRpcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlcnNpb25VcGRhdGVUaXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmVyc2lvblVwZGF0ZVRpcC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3ZlcnNpb25VcGRhdGVUaXAubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjdlMGJjMDUwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L2hlYWRsaW5lcy9oZWFkbGluZXMvcGFnZXMvaW5kZXgvdmVyc2lvblVwZGF0ZVRpcC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///219\n");

/***/ }),

/***/ 220:
/*!**********************************************************************************************************!*\
  !*** E:/headlines/headlines/pages/index/versionUpdateTip.nvue?vue&type=template&id=95410660&mpType=page ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_template_id_95410660_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./versionUpdateTip.nvue?vue&type=template&id=95410660&mpType=page */ 221);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_template_id_95410660_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_template_id_95410660_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_template_id_95410660_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_template_id_95410660_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 221:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/pages/index/versionUpdateTip.nvue?vue&type=template&id=95410660&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  jyfParser: __webpack_require__(/*! @/components/jyf-parser/jyf-parser.vue */ 222).default
}
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
        _c("u-text", { staticClass: ["title"] }, [_vm._v("版本更新啦")]),
        _c(
          "view",
          { staticClass: ["scroller-view"] },
          [
            _c("jyf-parser", {
              staticStyle: { lineHeight: "50rpx" },
              attrs: {
                gestureZoom: true,
                lazyLoad: true,
                html: _vm.description,
                selectable: true,
                showWithAnimation: true,
                useAnchor: true
              }
            })
          ],
          1
        ),
        _c(
          "u-text",
          {
            staticClass: ["button-text"],
            on: { click: _vm.updateButtonClick }
          },
          [_vm._v("立即更新")]
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 222:
/*!*******************************************************************!*\
  !*** E:/headlines/headlines/components/jyf-parser/jyf-parser.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jyf_parser_vue_vue_type_template_id_4de9b012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jyf-parser.vue?vue&type=template&id=4de9b012& */ 223);\n/* harmony import */ var _jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jyf-parser.vue?vue&type=script&lang=js& */ 225);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./jyf-parser.vue?vue&type=style&index=0&lang=css& */ 228).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./jyf-parser.vue?vue&type=style&index=0&lang=css& */ 228).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _jyf_parser_vue_vue_type_template_id_4de9b012___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _jyf_parser_vue_vue_type_template_id_4de9b012___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5ecfec50\",\n  false,\n  _jyf_parser_vue_vue_type_template_id_4de9b012___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"E:/headlines/headlines/components/jyf-parser/jyf-parser.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUg7QUFDdkg7QUFDOEQ7QUFDTDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDREQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNERBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2p5Zi1wYXJzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkZTliMDEyJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanlmLXBhcnNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2p5Zi1wYXJzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vanlmLXBhcnNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vanlmLXBhcnNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1ZWNmZWM1MFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9oZWFkbGluZXMvaGVhZGxpbmVzL2NvbXBvbmVudHMvanlmLXBhcnNlci9qeWYtcGFyc2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///222\n");

/***/ }),

/***/ 223:
/*!**************************************************************************************************!*\
  !*** E:/headlines/headlines/components/jyf-parser/jyf-parser.vue?vue&type=template&id=4de9b012& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_template_id_4de9b012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./jyf-parser.vue?vue&type=template&id=4de9b012& */ 224);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_template_id_4de9b012___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_template_id_4de9b012___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_template_id_4de9b012___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_template_id_4de9b012___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 224:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/jyf-parser/jyf-parser.vue?vue&type=template&id=4de9b012& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      !_vm.nodes.length ? _vm._t("default") : _vm._e(),
      _c("u-web-view", {
        ref: "web",
        style: "margin-top:-2px;height:" + _vm.height + "px",
        attrs: { id: "top" },
        on: { onPostMessage: _vm._message }
      })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 225:
/*!********************************************************************************************!*\
  !*** E:/headlines/headlines/components/jyf-parser/jyf-parser.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./jyf-parser.vue?vue&type=script&lang=js& */ 226);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdhLENBQWdCLG9kQUFHLEVBQUMiLCJmaWxlIjoiMjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2p5Zi1wYXJzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vanlmLXBhcnNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///225\n");

/***/ }),

/***/ 226:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/jyf-parser/jyf-parser.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _createForOfIteratorHelper(o) {if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var it,normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar rpx = uni.getSystemInfoSync().windowWidth / 750,\ncfg = __webpack_require__(/*! ./libs/config.js */ 227);\n\n\nvar weexDom = weex.requireModule('dom');\n\n/**\n                                          * Parser 富文本组件\n                                          * @tutorial https://github.com/jin-yufeng/Parser\n                                          * @property {String|Array} html 富文本数据\n                                          * @property {Boolean} autopause 是否在播放一个视频时自动暂停其他视频\n                                          * @property {Boolean} autoscroll 是否自动给所有表格添加一个滚动层\n                                          * @property {Boolean} autosetTitle 是否自动将 title 标签中的内容设置到页面标题\n                                          * @property {Number} compress 压缩等级\n                                          * @property {String} domain 图片、视频等链接的主域名\n                                          * @property {Boolean} lazyLoad 是否开启图片懒加载\n                                          * @property {String} loadingImg 图片加载完成前的占位图\n                                          * @property {Boolean} selectable 是否开启长按复制\n                                          * @property {Object} tagStyle 标签的默认样式\n                                          * @property {Boolean} showWithAnimation 是否使用渐显动画\n                                          * @property {Boolean} useAnchor 是否使用锚点\n                                          * @property {Boolean} useCache 是否缓存解析结果\n                                          * @event {Function} parse 解析完成事件\n                                          * @event {Function} load dom 加载完成事件\n                                          * @event {Function} ready 所有图片加载完毕事件\n                                          * @event {Function} error 错误事件\n                                          * @event {Function} imgtap 图片点击事件\n                                          * @event {Function} linkpress 链接点击事件\n                                          * @example <jyf-parser :html=\"html\"></jyf-parser>\n                                          * @author JinYufeng\n                                          * @version 20200528\n                                          * @listens MIT\n                                          */var _default =\n{\n  name: 'parser',\n  data: function data() {\n    return {\n\n\n\n\n      height: 1,\n\n\n\n\n      nodes: [] };\n\n  },\n\n\n\n\n\n  props: {\n    html: null,\n    autopause: {\n      type: Boolean,\n      default: true },\n\n    autoscroll: Boolean,\n    autosetTitle: {\n      type: Boolean,\n      default: true },\n\n\n\n\n\n\n    domain: String,\n    lazyLoad: Boolean,\n    selectable: Boolean,\n    tagStyle: Object,\n    showWithAnimation: Boolean,\n    useAnchor: Boolean },\n\n  watch: {\n    html: function html(_html) {\n      this.setContent(_html);\n    } },\n\n  mounted: function mounted() {var _this2 = this;\n    // 图片数组\n    this.imgList = [];\n    this.imgList.each = function (f) {\n      for (var i = 0, len = this.length; i < len; i++) {\n        this.setItem(i, f(this[i], i, this));}\n    };\n    this.imgList.setItem = function (i, src) {var _this = this;\n      if (i == void 0 || !src) return;\n\n\n\n\n\n\n\n\n\n\n\n\n      this[i] = src;\n      // 暂存 data src\n      if (src.includes('data:image')) {\n        var filePath,info = src.match(/data:image\\/(\\S+?);(\\S+?),(.+)/);\n        if (!info) return;\n\n\n\n\n\n\n\n\n\n\n        filePath = \"_doc/parser_tmp/\".concat(Date.now(), \".\").concat(info[1]);\n        var bitmap = new plus.nativeObj.Bitmap();\n        bitmap.loadBase64Data(src, function () {\n          bitmap.save(filePath, {}, function () {\n            bitmap.clear();\n            _this[i] = filePath;\n          });\n        });\n\n      }\n    };\n\n\n\n\n\n\n\n    this.document = this.$refs.web;\n    setTimeout(function () {\n\n      if (_this2.html) _this2.setContent(_this2.html);\n\n    }, 30);\n\n  },\n  beforeDestroy: function beforeDestroy() {\n\n\n\n    this.imgList.each(function (src) {\n\n      if (src && src.includes('_doc')) {\n        plus.io.resolveLocalFileSystemURL(src, function (entry) {\n          entry.remove();\n        });\n      }\n\n\n\n\n\n\n\n    });\n    clearInterval(this._timer);\n  },\n  methods: {\n\n    _Dom2Str: function _Dom2Str(nodes) {\n      var str = '';var _iterator = _createForOfIteratorHelper(\n      nodes),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var node = _step.value;\n          if (node.type == 'text')\n          str += node.text;else\n          {\n            str += '<' + node.name;\n            for (var attr in node.attrs || {}) {\n              str += ' ' + attr + '=\"' + node.attrs[attr] + '\"';}\n            if (!node.children || !node.children.length) str += '>';else\n            str += '>' + this._Dom2Str(node.children) + '</' + node.name + '>';\n          }\n        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n      return str;\n    },\n    _handleHtml: function _handleHtml(html, append) {\n      if (typeof html != 'string') html = this._Dom2Str(html.nodes || html);\n      if (!append) {\n        // 处理 tag-style 和 userAgentStyles\n        var style = '<style>@keyframes show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}';\n        for (var item in cfg.userAgentStyles) {\n          style += \"\".concat(item, \"{\").concat(cfg.userAgentStyles[item], \"}\");}\n        for (item in this.tagStyle) {\n          style += \"\".concat(item, \"{\").concat(this.tagStyle[item], \"}\");}\n        style += '</style>';\n        html = style + html;\n      }\n      // 处理 rpx\n      if (html.includes('rpx'))\n      html = html.replace(/[0-9.]+\\s*rpx/g, function ($) {return parseFloat($) * rpx + 'px';});\n      return html;\n    },\n\n    setContent: function setContent(html, append) {\n\n      if (!html)\n      return this.height = 1;\n      if (append)\n      this.$refs.web.evalJs(\"var b=document.createElement('div');b.innerHTML='\" + html.replace(/'/g, \"\\\\'\") +\n      \"';document.getElementById('parser').appendChild(b)\");else\n      {\n        html =\n        '<meta charset=\"utf-8\" /><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no\"><base href=\"' +\n        this.domain + '\"><div id=\"parser\"' + (this.selectable ? '>' : ' style=\"user-select:none\">') + this._handleHtml(html).replace(/\\n/g, '\\\\n') +\n        '</div><script>\"use strict\";function e(e){if(window.__dcloud_weex_postMessage||window.__dcloud_weex_){var t={data:[e]};window.__dcloud_weex_postMessage?window.__dcloud_weex_postMessage(t):window.__dcloud_weex_.postMessage(JSON.stringify(t))}}' + (\n        this.showWithAnimation ? 'document.body.style.animation=\"show .5s\",' : '') +\n        'setTimeout(function(){e({action:\"load\",text:document.body.innerText,height:document.getElementById(\"parser\").scrollHeight+16})},50);\\x3c/script>';\n        this.$refs.web.evalJs(\"document.write('\" + html.replace(/'/g, \"\\\\'\") + \"');document.close()\");\n      }\n      this.$refs.web.evalJs(\n      'var t=document.getElementsByTagName(\"title\");t.length&&e({action:\"getTitle\",title:t[0].innerText});for(var o,n=document.getElementsByTagName(\"style\"),r=0;o=n[r++];)o.innerHTML=o.innerHTML.replace(/body/g,\"#parser\");for(var i,a=document.getElementsByTagName(\"img\"),s=[],c=0,l=0;i=a[c];c++)i.onerror=function(){' + (\n      cfg.errorImg ? 'this.src=\"' + cfg.errorImg + '\",' : '') +\n      'e({action:\"error\",source:\"img\",target:this})},i.hasAttribute(\"ignore\")||\"A\"==i.parentElement.nodeName||(i.i=l++,s.push(i.src),i.onclick=function(){e({action:\"preview\",img:{i:this.i,src:this.src}})});e({action:\"getImgList\",imgList:s});for(var d,u=document.getElementsByTagName(\"a\"),g=0;d=u[g];g++)d.onclick=function(){var t,o=this.getAttribute(\"href\");if(\"#\"==o[0]){var n=document.getElementById(o.substr(1));n&&(t=n.offsetTop)}return e({action:\"linkpress\",href:o,offset:t}),!1};for(var m,f=document.getElementsByTagName(\"video\"),h=0;m=f[h];h++)m.style.maxWidth=\"100%\",m.onerror=function(){e({action:\"error\",source:\"video\",target:this})}' + (\n      this.autopause ? ',m.onplay=function(){for(var e,t=0;e=f[t];t++)e!=this&&e.pause()}' : '') +\n      ';for(var v,y=document.getElementsByTagName(\"audio\"),_=0;v=y[_];_++)v.onerror=function(){e({action:\"error\",source:\"audio\",target:this})};' + (\n      this.autoscroll ? 'for(var p,w=document.getElementsByTagName(\"table\"),T=0;p=w[T];T++){var E=document.createElement(\"div\");E.style.overflow=\"scroll\",p.parentNode.replaceChild(E,p),E.appendChild(p)}' : '') +\n      '(function(){return new Promise(function(e){var t=document.getElementById(\"parser\"),o=t.scrollHeight,n=setInterval(function(){o==t.scrollHeight?(clearInterval(n),e(o)):o=t.scrollHeight},500)})})().then(function(t){e({action:\"ready\",height:t+16})})');\n\n      this.nodes = [1];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    },\n    getText: function getText() {var ns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.nodes;\n      var txt = '';\n\n      txt = this._text;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      return txt;\n    },\n    navigateTo: function navigateTo(obj) {\n      if (!this.useAnchor)\n      return obj.fail && obj.fail({\n        errMsg: 'Anchor is disabled' });\n\n\n      if (!obj.id)\n      weexDom.scrollToElement(this.$refs.web);else\n\n      this.$refs.web.evalJs('var pos=document.getElementById(\"' + obj.id +\n      '\");if(pos)post({action:\"linkpress\",href:\"#\",offset:pos.offsetTop+' + (obj.offset || 0) + '})');\n      obj.success && obj.success({\n        errMsg: 'pageScrollTo:ok' });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    },\n    getVideoContext: function getVideoContext(id) {\n\n\n\n\n\n\n    },\n\n    _message: function _message(e) {var _this3 = this;\n      // 接收 web-view 消息\n      var data = e.detail.data[0];\n      if (data.action == 'load') {\n        this.$emit('load');\n        this.height = data.height;\n        this._text = data.text;\n      } else if (data.action == 'getTitle') {\n        if (this.autosetTitle)\n        uni.setNavigationBarTitle({\n          title: data.title });\n\n      } else if (data.action == 'getImgList') {\n        this.imgList.length = 0;\n        for (var i = data.imgList.length; i--;) {\n          this.imgList.setItem(i, data.imgList[i]);}\n      } else if (data.action == 'preview') {\n        var preview = true;\n        data.img.ignore = function () {return preview = false;};\n        this.$emit('imgtap', data.img);\n        if (preview)\n        uni.previewImage({\n          current: data.img.i,\n          urls: this.imgList });\n\n      } else if (data.action == 'linkpress') {\n        var jump = true,\n        href = data.href;\n        this.$emit('linkpress', {\n          href: href,\n          ignore: function ignore() {return jump = false;} });\n\n        if (jump && href) {\n          if (href[0] == '#') {\n            if (this.useAnchor)\n            weexDom.scrollToElement(this.$refs.web, {\n              offset: data.offset });\n\n          } else if (href.includes('://'))\n          plus.runtime.openWeb(href);else\n\n          uni.navigateTo({\n            url: href });\n\n        }\n      } else if (data.action == 'error') {\n        if (data.source == 'img' && cfg.errorImg)\n        this.imgList.setItem(data.target.i, cfg.errorImg);\n        this.$emit('error', {\n          source: data.source,\n          target: data.target });\n\n      } else if (data.action == 'ready') {\n        this.height = data.height;\n        this.$nextTick(function () {\n          uni.createSelectorQuery().in(_this3).select('#top').boundingClientRect().exec(function (res) {\n            _this3.rect = res[0];\n            _this3.$emit('ready', res[0]);\n          });\n        });\n      }\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9qeWYtcGFyc2VyL2p5Zi1wYXJzZXIudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBLHNEQURBOzs7QUFJQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0EsZ0JBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7Ozs7O0FBS0EsZUFMQTs7Ozs7QUFVQSxlQVZBOztBQVlBLEdBZkE7Ozs7OztBQXFCQTtBQUNBLGNBREE7QUFFQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFGQTs7QUFNQSx1QkFOQTtBQU9BO0FBQ0EsbUJBREE7QUFFQSxtQkFGQSxFQVBBOzs7Ozs7O0FBZ0JBLGtCQWhCQTtBQWlCQSxxQkFqQkE7QUFrQkEsdUJBbEJBO0FBbUJBLG9CQW5CQTtBQW9CQSw4QkFwQkE7QUFxQkEsc0JBckJBLEVBckJBOztBQTRDQTtBQUNBLFFBREEsZ0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBLEVBNUNBOztBQWlEQSxTQWpEQSxxQkFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQURBO0FBRUEsS0FIQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSEE7QUFJQSxTQUxBOztBQU9BO0FBQ0EsS0F2Q0E7Ozs7Ozs7O0FBK0NBO0FBQ0E7O0FBRUE7O0FBRUEsS0FKQSxFQUlBLEVBSkE7O0FBTUEsR0E5R0E7QUErR0EsZUEvR0EsMkJBK0dBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBOzs7Ozs7OztBQVFBLEtBZEE7QUFlQTtBQUNBLEdBbklBO0FBb0lBOztBQUVBLFlBRkEsb0JBRUEsS0FGQSxFQUVBO0FBQ0EsbUJBREE7QUFFQSxXQUZBLGFBRUE7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQVpBO0FBYUE7QUFDQSxLQWhCQTtBQWlCQSxlQWpCQSx1QkFpQkEsSUFqQkEsRUFpQkEsTUFqQkEsRUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBREE7QUFFQTtBQUNBLHlFQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpDQTs7QUFtQ0EsY0FuQ0Esc0JBbUNBLElBbkNBLEVBbUNBLE1BbkNBLEVBbUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBREEsRUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLG1CQURBLEdBQ0Esb0JBREEsSUFDQSxvREFEQSxJQUNBLDRDQURBO0FBRUEsMlBBRkE7QUFHQSxpRkFIQTtBQUlBLDBKQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFEQTtBQUVBLG9vQkFGQTtBQUdBLCtGQUhBO0FBSUEsZ0pBSkE7QUFLQSxnTkFMQTtBQU1BLDhQQVBBOztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMk9BLEtBdlNBO0FBd1NBLFdBeFNBLHFCQXdTQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQSxLQWpVQTtBQWtVQSxjQWxVQSxzQkFrVUEsR0FsVUEsRUFrVUE7QUFDQTtBQUNBO0FBQ0Esb0NBREE7OztBQUlBO0FBQ0EsOENBREE7O0FBR0E7QUFDQSx5RUFEQSxJQUNBLGVBREEsSUFDQSxJQURBO0FBRUE7QUFDQSxpQ0FEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBLEtBeFhBO0FBeVhBLG1CQXpYQSwyQkF5WEEsRUF6WEEsRUF5WEE7Ozs7Ozs7QUFPQSxLQWhZQTs7QUFrWUEsWUFsWUEsb0JBa1lBLENBbFlBLEVBa1lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLDJCQURBOztBQUdBLE9BTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQSxtREFEQTtBQUVBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLDRCQUZBOztBQUlBLE9BVEEsTUFTQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLG9CQURBO0FBRUEsMERBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTs7QUFHQSxXQUxBLE1BS0E7QUFDQSxxQ0FEQTs7QUFHQTtBQUNBLHFCQURBOztBQUdBO0FBQ0EsT0FwQkEsTUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLDZCQUZBOztBQUlBLE9BUEEsTUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBO0FBSUEsU0FMQTtBQU1BO0FBQ0EsS0EvYkEsRUFwSUEsRSIsImZpbGUiOiIyMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8c2xvdCB2LWlmPVwiIW5vZGVzLmxlbmd0aFwiIC8+XHJcblx0XHQ8IS0tI2lmZGVmIEFQUC1QTFVTLU5WVUUtLT5cclxuXHRcdDx3ZWItdmlldyBpZD1cInRvcFwiIHJlZj1cIndlYlwiIDpzdHlsZT1cIidtYXJnaW4tdG9wOi0ycHg7aGVpZ2h0OicraGVpZ2h0KydweCdcIiBAb25Qb3N0TWVzc2FnZT1cIl9tZXNzYWdlXCIgLz5cclxuXHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdDwhLS0jaWZuZGVmIEFQUC1QTFVTLU5WVUUtLT5cclxuXHRcdDx2aWV3IGlkPVwidG9wXCIgOnN0eWxlPVwic2hvd0FtKyhzZWxlY3RhYmxlPyc7dXNlci1zZWxlY3Q6dGV4dDstd2Via2l0LXVzZXItc2VsZWN0OnRleHQnOicnKVwiPlxyXG5cdFx0XHQ8IS0tI2lmZGVmIEg1IHx8IE1QLTM2MC0tPlxyXG5cdFx0XHQ8ZGl2IDppZD1cIidydGYnK3VpZFwiPjwvZGl2PlxyXG5cdFx0XHQ8IS0tI2VuZGlmLS0+XHJcblx0XHRcdDwhLS0jaWZuZGVmIEg1IHx8IE1QLTM2MC0tPlxyXG5cdFx0XHQ8dHJlZXMgOm5vZGVzPVwibm9kZXNcIiA6bGF6eUxvYWQ9XCJsYXp5TG9hZFwiIDpsb2FkaW5nPVwibG9hZGluZ0ltZ1wiIC8+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0jZW5kaWYtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8vICNpZm5kZWYgSDUgfHwgQVBQLVBMVVMtTlZVRSB8fCBNUC0zNjBcclxuXHRpbXBvcnQgdHJlZXMgZnJvbSAnLi9saWJzL3RyZWVzJztcclxuXHR2YXIgY2FjaGUgPSB7fSxcclxuXHRcdC8vICNpZmRlZiBNUC1XRUlYSU4gfHwgTVAtVE9VVElBT1xyXG5cdFx0ZnMgPSB1bmkuZ2V0RmlsZVN5c3RlbU1hbmFnZXIgPyB1bmkuZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKSA6IG51bGwsXHJcblx0XHQvLyAjZW5kaWZcclxuXHRcdFBhcnNlciA9IHJlcXVpcmUoJy4vbGlicy9NcEh0bWxQYXJzZXIuanMnKTtcclxuXHR2YXIgZG9tO1xyXG5cdC8vIOiuoeeulyBjYWNoZSDnmoQga2V5XHJcblx0ZnVuY3Rpb24gaGFzaChzdHIpIHtcclxuXHRcdGZvciAodmFyIGkgPSBzdHIubGVuZ3RoLCB2YWwgPSA1MzgxOyBpLS07KVxyXG5cdFx0XHR2YWwgKz0gKHZhbCA8PCA1KSArIHN0ci5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0cmV0dXJuIHZhbDtcclxuXHR9XHJcblx0Ly8gI2VuZGlmXHJcblx0Ly8gI2lmZGVmIEg1IHx8IEFQUC1QTFVTLU5WVUUgfHwgTVAtMzYwXHJcblx0dmFyIHJweCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8gNzUwLFxyXG5cdFx0Y2ZnID0gcmVxdWlyZSgnLi9saWJzL2NvbmZpZy5qcycpO1xyXG5cdC8vICNlbmRpZlxyXG5cdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0dmFyIHdlZXhEb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdC8vICNlbmRpZlxyXG5cdC8qKlxyXG5cdCAqIFBhcnNlciDlr4zmlofmnKznu4Tku7ZcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9naXRodWIuY29tL2ppbi15dWZlbmcvUGFyc2VyXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd8QXJyYXl9IGh0bWwg5a+M5paH5pys5pWw5o2uXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBhdXRvcGF1c2Ug5piv5ZCm5Zyo5pKt5pS+5LiA5Liq6KeG6aKR5pe26Ieq5Yqo5pqC5YGc5YW25LuW6KeG6aKRXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBhdXRvc2Nyb2xsIOaYr+WQpuiHquWKqOe7meaJgOacieihqOagvOa3u+WKoOS4gOS4qua7muWKqOWxglxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXV0b3NldFRpdGxlIOaYr+WQpuiHquWKqOWwhiB0aXRsZSDmoIfnrb7kuK3nmoTlhoXlrrnorr7nva7liLDpobXpnaLmoIfpophcclxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gY29tcHJlc3Mg5Y6L57yp562J57qnXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGRvbWFpbiDlm77niYfjgIHop4bpopHnrYnpk77mjqXnmoTkuLvln5/lkI1cclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGxhenlMb2FkIOaYr+WQpuW8gOWQr+WbvueJh+aHkuWKoOi9vVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBsb2FkaW5nSW1nIOWbvueJh+WKoOi9veWujOaIkOWJjeeahOWNoOS9jeWbvlxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2VsZWN0YWJsZSDmmK/lkKblvIDlkK/plb/mjInlpI3liLZcclxuXHQgKiBAcHJvcGVydHkge09iamVjdH0gdGFnU3R5bGUg5qCH562+55qE6buY6K6k5qC35byPXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93V2l0aEFuaW1hdGlvbiDmmK/lkKbkvb/nlKjmuJDmmL7liqjnlLtcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHVzZUFuY2hvciDmmK/lkKbkvb/nlKjplJrngrlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHVzZUNhY2hlIOaYr+WQpue8k+WtmOino+aekOe7k+aenFxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IHBhcnNlIOino+aekOWujOaIkOS6i+S7tlxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGxvYWQgZG9tIOWKoOi9veWujOaIkOS6i+S7tlxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IHJlYWR5IOaJgOacieWbvueJh+WKoOi9veWujOavleS6i+S7tlxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGVycm9yIOmUmeivr+S6i+S7tlxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGltZ3RhcCDlm77niYfngrnlh7vkuovku7ZcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBsaW5rcHJlc3Mg6ZO+5o6l54K55Ye75LqL5Lu2XHJcblx0ICogQGV4YW1wbGUgPGp5Zi1wYXJzZXIgOmh0bWw9XCJodG1sXCI+PC9qeWYtcGFyc2VyPlxyXG5cdCAqIEBhdXRob3IgSmluWXVmZW5nXHJcblx0ICogQHZlcnNpb24gMjAyMDA1MjhcclxuXHQgKiBAbGlzdGVucyBNSVRcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAncGFyc2VyJyxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1IHx8IE1QLTM2MFxyXG5cdFx0XHRcdHVpZDogdGhpcy5fdWlkLFxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0aGVpZ2h0OiAxLFxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRcdHNob3dBbTogJycsXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0bm9kZXM6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyAjaWZuZGVmIEg1IHx8IEFQUC1QTFVTLU5WVUUgfHwgTVAtMzYwXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHRyZWVzXHJcblx0XHR9LFxyXG5cdFx0Ly8gI2VuZGlmXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRodG1sOiBudWxsLFxyXG5cdFx0XHRhdXRvcGF1c2U6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0YXV0b3Njcm9sbDogQm9vbGVhbixcclxuXHRcdFx0YXV0b3NldFRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vICNpZm5kZWYgSDUgfHwgQVBQLVBMVVMtTlZVRSB8fCBNUC0zNjBcclxuXHRcdFx0Y29tcHJlc3M6IE51bWJlcixcclxuXHRcdFx0bG9hZGluZ0ltZzogU3RyaW5nLFxyXG5cdFx0XHR1c2VDYWNoZTogQm9vbGVhbixcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdGRvbWFpbjogU3RyaW5nLFxyXG5cdFx0XHRsYXp5TG9hZDogQm9vbGVhbixcclxuXHRcdFx0c2VsZWN0YWJsZTogQm9vbGVhbixcclxuXHRcdFx0dGFnU3R5bGU6IE9iamVjdCxcclxuXHRcdFx0c2hvd1dpdGhBbmltYXRpb246IEJvb2xlYW4sXHJcblx0XHRcdHVzZUFuY2hvcjogQm9vbGVhblxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdGh0bWwoaHRtbCkge1xyXG5cdFx0XHRcdHRoaXMuc2V0Q29udGVudChodG1sKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdC8vIOWbvueJh+aVsOe7hFxyXG5cdFx0XHR0aGlzLmltZ0xpc3QgPSBbXTtcclxuXHRcdFx0dGhpcy5pbWdMaXN0LmVhY2ggPSBmdW5jdGlvbihmKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspXHJcblx0XHRcdFx0XHR0aGlzLnNldEl0ZW0oaSwgZih0aGlzW2ldLCBpLCB0aGlzKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5pbWdMaXN0LnNldEl0ZW0gPSBmdW5jdGlvbihpLCBzcmMpIHtcclxuXHRcdFx0XHRpZiAoaSA9PSB2b2lkIDAgfHwgIXNyYykgcmV0dXJuO1xyXG5cdFx0XHRcdC8vICNpZm5kZWYgTVAtQUxJUEFZIHx8IEFQUC1QTFVTXHJcblx0XHRcdFx0Ly8g5Y676YeNXHJcblx0XHRcdFx0aWYgKHNyYy5pbmRleE9mKCdodHRwJykgPT0gMCAmJiB0aGlzLmluY2x1ZGVzKHNyYykpIHtcclxuXHRcdFx0XHRcdHZhciBuZXdTcmMgPSAnJztcclxuXHRcdFx0XHRcdGZvciAodmFyIGogPSAwLCBjOyBjID0gc3JjW2pdOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGMgPT0gJy8nICYmIHNyY1tqIC0gMV0gIT0gJy8nICYmIHNyY1tqICsgMV0gIT0gJy8nKSBicmVhaztcclxuXHRcdFx0XHRcdFx0bmV3U3JjICs9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBjLnRvVXBwZXJDYXNlKCkgOiBjO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bmV3U3JjICs9IHNyYy5zdWJzdHIoaik7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpc1tpXSA9IG5ld1NyYztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0dGhpc1tpXSA9IHNyYztcclxuXHRcdFx0XHQvLyDmmoLlrZggZGF0YSBzcmNcclxuXHRcdFx0XHRpZiAoc3JjLmluY2x1ZGVzKCdkYXRhOmltYWdlJykpIHtcclxuXHRcdFx0XHRcdHZhciBmaWxlUGF0aCwgaW5mbyA9IHNyYy5tYXRjaCgvZGF0YTppbWFnZVxcLyhcXFMrPyk7KFxcUys/KSwoLispLyk7XHJcblx0XHRcdFx0XHRpZiAoIWluZm8pIHJldHVybjtcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU4gfHwgTVAtVE9VVElBT1xyXG5cdFx0XHRcdFx0ZmlsZVBhdGggPSBgJHt3eC5lbnYuVVNFUl9EQVRBX1BBVEh9LyR7RGF0ZS5ub3coKX0uJHtpbmZvWzFdfWA7XHJcblx0XHRcdFx0XHRmcyAmJiBmcy53cml0ZUZpbGUoe1xyXG5cdFx0XHRcdFx0XHRmaWxlUGF0aCxcclxuXHRcdFx0XHRcdFx0ZGF0YTogaW5mb1szXSxcclxuXHRcdFx0XHRcdFx0ZW5jb2Rpbmc6IGluZm9bMl0sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6ICgpID0+IHRoaXNbaV0gPSBmaWxlUGF0aFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRmaWxlUGF0aCA9IGBfZG9jL3BhcnNlcl90bXAvJHtEYXRlLm5vdygpfS4ke2luZm9bMV19YDtcclxuXHRcdFx0XHRcdHZhciBiaXRtYXAgPSBuZXcgcGx1cy5uYXRpdmVPYmouQml0bWFwKCk7XHJcblx0XHRcdFx0XHRiaXRtYXAubG9hZEJhc2U2NERhdGEoc3JjLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGJpdG1hcC5zYXZlKGZpbGVQYXRoLCB7fSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGJpdG1hcC5jbGVhcigpXHJcblx0XHRcdFx0XHRcdFx0dGhpc1tpXSA9IGZpbGVQYXRoO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAjaWZkZWYgSDUgfHwgTVAtMzYwXHJcblx0XHRcdHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnRmJyArIHRoaXMuX3VpZCk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHQvLyAjaWZuZGVmIEg1IHx8IEFQUC1QTFVTLU5WVUUgfHwgTVAtMzYwXHJcblx0XHRcdGlmIChkb20pIHRoaXMuZG9jdW1lbnQgPSBuZXcgZG9tKHRoaXMpO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0dGhpcy5kb2N1bWVudCA9IHRoaXMuJHJlZnMud2ViO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRpZiAodGhpcy5odG1sKSB0aGlzLnNldENvbnRlbnQodGhpcy5odG1sKTtcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHR9LCAzMClcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlRGVzdHJveSgpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEg1IHx8IE1QLTM2MFxyXG5cdFx0XHRpZiAodGhpcy5fb2JzZXJ2ZXIpIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdHRoaXMuaW1nTGlzdC5lYWNoKHNyYyA9PiB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0aWYgKHNyYyAmJiBzcmMuaW5jbHVkZXMoJ19kb2MnKSkge1xyXG5cdFx0XHRcdFx0cGx1cy5pby5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKHNyYywgZW50cnkgPT4ge1xyXG5cdFx0XHRcdFx0XHRlbnRyeS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOIHx8IE1QLVRPVVRJQU9cclxuXHRcdFx0XHRpZiAoc3JjICYmIHNyYy5pbmNsdWRlcyh1bmkuZW52LlVTRVJfREFUQV9QQVRIKSlcclxuXHRcdFx0XHRcdGZzICYmIGZzLnVubGluayh7XHJcblx0XHRcdFx0XHRcdGZpbGVQYXRoOiBzcmNcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0pXHJcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8gI2lmZGVmIEg1IHx8IEFQUC1QTFVTLU5WVUUgfHwgTVAtMzYwXHJcblx0XHRcdF9Eb20yU3RyKG5vZGVzKSB7XHJcblx0XHRcdFx0dmFyIHN0ciA9ICcnO1xyXG5cdFx0XHRcdGZvciAodmFyIG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdFx0XHRcdGlmIChub2RlLnR5cGUgPT0gJ3RleHQnKVxyXG5cdFx0XHRcdFx0XHRzdHIgKz0gbm9kZS50ZXh0O1xyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHN0ciArPSAoJzwnICsgbm9kZS5uYW1lKTtcclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgYXR0ciBpbiBub2RlLmF0dHJzIHx8IHt9KVxyXG5cdFx0XHRcdFx0XHRcdHN0ciArPSAoJyAnICsgYXR0ciArICc9XCInICsgbm9kZS5hdHRyc1thdHRyXSArICdcIicpO1xyXG5cdFx0XHRcdFx0XHRpZiAoIW5vZGUuY2hpbGRyZW4gfHwgIW5vZGUuY2hpbGRyZW4ubGVuZ3RoKSBzdHIgKz0gJz4nO1xyXG5cdFx0XHRcdFx0XHRlbHNlIHN0ciArPSAoJz4nICsgdGhpcy5fRG9tMlN0cihub2RlLmNoaWxkcmVuKSArICc8LycgKyBub2RlLm5hbWUgKyAnPicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gc3RyO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRfaGFuZGxlSHRtbChodG1sLCBhcHBlbmQpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGh0bWwgIT0gJ3N0cmluZycpIGh0bWwgPSB0aGlzLl9Eb20yU3RyKGh0bWwubm9kZXMgfHwgaHRtbCk7XHJcblx0XHRcdFx0aWYgKCFhcHBlbmQpIHtcclxuXHRcdFx0XHRcdC8vIOWkhOeQhiB0YWctc3R5bGUg5ZKMIHVzZXJBZ2VudFN0eWxlc1xyXG5cdFx0XHRcdFx0dmFyIHN0eWxlID0gJzxzdHlsZT5Aa2V5ZnJhbWVzIHNob3d7MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1pbWd7bWF4LXdpZHRoOjEwMCV9JztcclxuXHRcdFx0XHRcdGZvciAodmFyIGl0ZW0gaW4gY2ZnLnVzZXJBZ2VudFN0eWxlcylcclxuXHRcdFx0XHRcdFx0c3R5bGUgKz0gYCR7aXRlbX17JHtjZmcudXNlckFnZW50U3R5bGVzW2l0ZW1dfX1gO1xyXG5cdFx0XHRcdFx0Zm9yIChpdGVtIGluIHRoaXMudGFnU3R5bGUpXHJcblx0XHRcdFx0XHRcdHN0eWxlICs9IGAke2l0ZW19eyR7dGhpcy50YWdTdHlsZVtpdGVtXX19YDtcclxuXHRcdFx0XHRcdHN0eWxlICs9ICc8L3N0eWxlPic7XHJcblx0XHRcdFx0XHRodG1sID0gc3R5bGUgKyBodG1sO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDlpITnkIYgcnB4XHJcblx0XHRcdFx0aWYgKGh0bWwuaW5jbHVkZXMoJ3JweCcpKVxyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvWzAtOS5dK1xccypycHgvZywgJCA9PiBwYXJzZUZsb2F0KCQpICogcnB4ICsgJ3B4Jyk7XHJcblx0XHRcdFx0cmV0dXJuIGh0bWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRzZXRDb250ZW50KGh0bWwsIGFwcGVuZCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0aWYgKCFodG1sKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaGVpZ2h0ID0gMTtcclxuXHRcdFx0XHRpZiAoYXBwZW5kKVxyXG5cdFx0XHRcdFx0dGhpcy4kcmVmcy53ZWIuZXZhbEpzKFwidmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7Yi5pbm5lckhUTUw9J1wiICsgaHRtbC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIikgK1xyXG5cdFx0XHRcdFx0XHRcIic7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcnNlcicpLmFwcGVuZENoaWxkKGIpXCIpO1xyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aHRtbCA9XHJcblx0XHRcdFx0XHRcdCc8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPjxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MSxtYXhpbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiPjxiYXNlIGhyZWY9XCInICtcclxuXHRcdFx0XHRcdFx0dGhpcy5kb21haW4gKyAnXCI+PGRpdiBpZD1cInBhcnNlclwiJyArICh0aGlzLnNlbGVjdGFibGUgPyAnPicgOiAnIHN0eWxlPVwidXNlci1zZWxlY3Q6bm9uZVwiPicpICsgdGhpcy5faGFuZGxlSHRtbChodG1sKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgK1xyXG5cdFx0XHRcdFx0XHQnPC9kaXY+PHNjcmlwdD5cInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe2lmKHdpbmRvdy5fX2RjbG91ZF93ZWV4X3Bvc3RNZXNzYWdlfHx3aW5kb3cuX19kY2xvdWRfd2VleF8pe3ZhciB0PXtkYXRhOltlXX07d2luZG93Ll9fZGNsb3VkX3dlZXhfcG9zdE1lc3NhZ2U/d2luZG93Ll9fZGNsb3VkX3dlZXhfcG9zdE1lc3NhZ2UodCk6d2luZG93Ll9fZGNsb3VkX3dlZXhfLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHQpKX19JyArXHJcblx0XHRcdFx0XHRcdCh0aGlzLnNob3dXaXRoQW5pbWF0aW9uID8gJ2RvY3VtZW50LmJvZHkuc3R5bGUuYW5pbWF0aW9uPVwic2hvdyAuNXNcIiwnIDogJycpICtcclxuXHRcdFx0XHRcdFx0J3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlKHthY3Rpb246XCJsb2FkXCIsdGV4dDpkb2N1bWVudC5ib2R5LmlubmVyVGV4dCxoZWlnaHQ6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJzZXJcIikuc2Nyb2xsSGVpZ2h0KzE2fSl9LDUwKTtcXHgzYy9zY3JpcHQ+JztcclxuXHRcdFx0XHRcdHRoaXMuJHJlZnMud2ViLmV2YWxKcyhcImRvY3VtZW50LndyaXRlKCdcIiArIGh0bWwucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpICsgXCInKTtkb2N1bWVudC5jbG9zZSgpXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRyZWZzLndlYi5ldmFsSnMoXHJcblx0XHRcdFx0XHQndmFyIHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKTt0Lmxlbmd0aCYmZSh7YWN0aW9uOlwiZ2V0VGl0bGVcIix0aXRsZTp0WzBdLmlubmVyVGV4dH0pO2Zvcih2YXIgbyxuPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIikscj0wO289bltyKytdOylvLmlubmVySFRNTD1vLmlubmVySFRNTC5yZXBsYWNlKC9ib2R5L2csXCIjcGFyc2VyXCIpO2Zvcih2YXIgaSxhPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpLHM9W10sYz0wLGw9MDtpPWFbY107YysrKWkub25lcnJvcj1mdW5jdGlvbigpeycgK1xyXG5cdFx0XHRcdFx0KGNmZy5lcnJvckltZyA/ICd0aGlzLnNyYz1cIicgKyBjZmcuZXJyb3JJbWcgKyAnXCIsJyA6ICcnKSArXHJcblx0XHRcdFx0XHQnZSh7YWN0aW9uOlwiZXJyb3JcIixzb3VyY2U6XCJpbWdcIix0YXJnZXQ6dGhpc30pfSxpLmhhc0F0dHJpYnV0ZShcImlnbm9yZVwiKXx8XCJBXCI9PWkucGFyZW50RWxlbWVudC5ub2RlTmFtZXx8KGkuaT1sKysscy5wdXNoKGkuc3JjKSxpLm9uY2xpY2s9ZnVuY3Rpb24oKXtlKHthY3Rpb246XCJwcmV2aWV3XCIsaW1nOntpOnRoaXMuaSxzcmM6dGhpcy5zcmN9fSl9KTtlKHthY3Rpb246XCJnZXRJbWdMaXN0XCIsaW1nTGlzdDpzfSk7Zm9yKHZhciBkLHU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpLGc9MDtkPXVbZ107ZysrKWQub25jbGljaz1mdW5jdGlvbigpe3ZhciB0LG89dGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO2lmKFwiI1wiPT1vWzBdKXt2YXIgbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChvLnN1YnN0cigxKSk7biYmKHQ9bi5vZmZzZXRUb3ApfXJldHVybiBlKHthY3Rpb246XCJsaW5rcHJlc3NcIixocmVmOm8sb2Zmc2V0OnR9KSwhMX07Zm9yKHZhciBtLGY9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ2aWRlb1wiKSxoPTA7bT1mW2hdO2grKyltLnN0eWxlLm1heFdpZHRoPVwiMTAwJVwiLG0ub25lcnJvcj1mdW5jdGlvbigpe2Uoe2FjdGlvbjpcImVycm9yXCIsc291cmNlOlwidmlkZW9cIix0YXJnZXQ6dGhpc30pfScgK1xyXG5cdFx0XHRcdFx0KHRoaXMuYXV0b3BhdXNlID8gJyxtLm9ucGxheT1mdW5jdGlvbigpe2Zvcih2YXIgZSx0PTA7ZT1mW3RdO3QrKyllIT10aGlzJiZlLnBhdXNlKCl9JyA6ICcnKSArXHJcblx0XHRcdFx0XHQnO2Zvcih2YXIgdix5PWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXVkaW9cIiksXz0wO3Y9eVtfXTtfKyspdi5vbmVycm9yPWZ1bmN0aW9uKCl7ZSh7YWN0aW9uOlwiZXJyb3JcIixzb3VyY2U6XCJhdWRpb1wiLHRhcmdldDp0aGlzfSl9OycgK1xyXG5cdFx0XHRcdFx0KHRoaXMuYXV0b3Njcm9sbCA/ICdmb3IodmFyIHAsdz1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRhYmxlXCIpLFQ9MDtwPXdbVF07VCsrKXt2YXIgRT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO0Uuc3R5bGUub3ZlcmZsb3c9XCJzY3JvbGxcIixwLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKEUscCksRS5hcHBlbmRDaGlsZChwKX0nIDogJycpICtcclxuXHRcdFx0XHRcdCcoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJzZXJcIiksbz10LnNjcm9sbEhlaWdodCxuPXNldEludGVydmFsKGZ1bmN0aW9uKCl7bz09dC5zY3JvbGxIZWlnaHQ/KGNsZWFySW50ZXJ2YWwobiksZShvKSk6bz10LnNjcm9sbEhlaWdodH0sNTAwKX0pfSkoKS50aGVuKGZ1bmN0aW9uKHQpe2Uoe2FjdGlvbjpcInJlYWR5XCIsaGVpZ2h0OnQrMTZ9KX0pJ1xyXG5cdFx0XHRcdClcclxuXHRcdFx0XHR0aGlzLm5vZGVzID0gWzFdO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZmRlZiBINSB8fCBNUC0zNjBcclxuXHRcdFx0XHRpZiAoIWh0bWwpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnJ0ZiAmJiAhYXBwZW5kKSB0aGlzLnJ0Zi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucnRmKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGlmICghYXBwZW5kKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5ydGYpIHRoaXMucnRmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ydGYpO1xyXG5cdFx0XHRcdFx0dGhpcy5ydGYgPSBkaXY7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5ydGYpIHRoaXMucnRmID0gZGl2O1xyXG5cdFx0XHRcdFx0ZWxzZSB0aGlzLnJ0Zi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkaXYuaW5uZXJIVE1MID0gdGhpcy5faGFuZGxlSHRtbChodG1sLCBhcHBlbmQpO1xyXG5cdFx0XHRcdGZvciAodmFyIHN0eWxlcyA9IHRoaXMucnRmLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdHlsZScpLCBpID0gMCwgc3R5bGU7IHN0eWxlID0gc3R5bGVzW2krK107KSB7XHJcblx0XHRcdFx0XHRzdHlsZS5pbm5lckhUTUwgPSBzdHlsZS5pbm5lckhUTUwucmVwbGFjZSgvYm9keS9nLCAnI3J0ZicgKyB0aGlzLl91aWQpO1xyXG5cdFx0XHRcdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdzY29wZWQnLCAndHJ1ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDmh5LliqDovb1cclxuXHRcdFx0XHRpZiAoIXRoaXMuX29ic2VydmVyICYmIHRoaXMubGF6eUxvYWQgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMuX29ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNoYW5nZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpdGVtLCBpID0gMDsgaXRlbSA9IGNoYW5nZXNbaSsrXTspIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS5pc0ludGVyc2VjdGluZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS50YXJnZXQuc3JjID0gaXRlbS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS50YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fb2JzZXJ2ZXIudW5vYnNlcnZlKGl0ZW0udGFyZ2V0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0cm9vdE1hcmdpbjogJzUwMHB4IDBweCA1MDBweCAwcHgnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgX3RzID0gdGhpcztcclxuXHRcdFx0XHQvLyDojrflj5bmoIfpophcclxuXHRcdFx0XHR2YXIgdGl0bGUgPSB0aGlzLnJ0Zi5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGl0bGUnKTtcclxuXHRcdFx0XHRpZiAodGl0bGUubGVuZ3RoICYmIHRoaXMuYXV0b3NldFRpdGxlKVxyXG5cdFx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiB0aXRsZVswXS5pbm5lclRleHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8g5Zu+54mH5aSE55CGXHJcblx0XHRcdFx0dGhpcy5pbWdMaXN0Lmxlbmd0aCA9IDA7XHJcblx0XHRcdFx0dmFyIGltZ3MgPSB0aGlzLnJ0Zi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGogPSAwLCBpbWc7IGltZyA9IGltZ3NbaV07IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZG9tYWluICYmIHNyYykge1xyXG5cdFx0XHRcdFx0XHRpZiAoc3JjWzBdID09ICcvJykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChzcmNbMV0gPT0gJy8nKVxyXG5cdFx0XHRcdFx0XHRcdFx0aW1nLnNyYyA9ICh0aGlzLmRvbWFpbi5pbmNsdWRlcygnOi8vJykgPyB0aGlzLmRvbWFpbi5zcGxpdCgnOi8vJylbMF0gOiAnJykgKyAnOicgKyBzcmM7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSBpbWcuc3JjID0gdGhpcy5kb21haW4gKyBzcmM7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIXNyYy5pbmNsdWRlcygnOi8vJykpIGltZy5zcmMgPSB0aGlzLmRvbWFpbiArICcvJyArIHNyYztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICghaW1nLmhhc0F0dHJpYnV0ZSgnaWdub3JlJykgJiYgaW1nLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT0gJ0EnKSB7XHJcblx0XHRcdFx0XHRcdGltZy5pID0gaisrO1xyXG5cdFx0XHRcdFx0XHRfdHMuaW1nTGlzdC5wdXNoKGltZy5zcmMgfHwgaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSk7XHJcblx0XHRcdFx0XHRcdGltZy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHByZXZpZXcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaWdub3JlID0gKCkgPT4gcHJldmlldyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdF90cy4kZW1pdCgnaW1ndGFwJywgdGhpcyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHByZXZpZXcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5wcmV2aWV3SW1hZ2Uoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50OiB0aGlzLmksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybHM6IF90cy5pbWdMaXN0XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjZmcuZXJyb3JJbWcpXHJcblx0XHRcdFx0XHRcdFx0X3RzLmltZ0xpc3RbdGhpcy5pXSA9IHRoaXMuc3JjID0gY2ZnLmVycm9ySW1nO1xyXG5cdFx0XHRcdFx0XHRfdHMuJGVtaXQoJ2Vycm9yJywge1xyXG5cdFx0XHRcdFx0XHRcdHNvdXJjZTogJ2ltZycsXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKF90cy5sYXp5TG9hZCAmJiB0aGlzLl9vYnNlcnZlciAmJiBpbWcuc3JjICYmIGltZy5pICE9IDApIHtcclxuXHRcdFx0XHRcdFx0aW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmMnLCBpbWcuc3JjKTtcclxuXHRcdFx0XHRcdFx0aW1nLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuX29ic2VydmVyLm9ic2VydmUoaW1nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g6ZO+5o6l5aSE55CGXHJcblx0XHRcdFx0dmFyIGxpbmtzID0gdGhpcy5ydGYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcclxuXHRcdFx0XHRmb3IgKHZhciBsaW5rIG9mIGxpbmtzKSB7XHJcblx0XHRcdFx0XHRsaW5rLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGp1bXAgPSB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0XHRcdFx0XHRfdHMuJGVtaXQoJ2xpbmtwcmVzcycsIHtcclxuXHRcdFx0XHRcdFx0XHRocmVmLFxyXG5cdFx0XHRcdFx0XHRcdGlnbm9yZTogKCkgPT4ganVtcCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRpZiAoanVtcCAmJiBocmVmKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGhyZWZbMF0gPT0gJyMnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoX3RzLnVzZUFuY2hvcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRfdHMubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGhyZWYuc3Vic3RyKDEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChocmVmLmluZGV4T2YoJ2h0dHAnKSA9PSAwIHx8IGhyZWYuaW5kZXhPZignLy8nKSA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IGhyZWZcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDop4bpopHlpITnkIZcclxuXHRcdFx0XHR2YXIgdmlkZW9zID0gdGhpcy5ydGYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ZpZGVvJyk7XHJcblx0XHRcdFx0X3RzLnZpZGVvQ29udGV4dHMgPSB2aWRlb3M7XHJcblx0XHRcdFx0Zm9yIChsZXQgdmlkZW8sIGkgPSAwOyB2aWRlbyA9IHZpZGVvc1tpKytdOykge1xyXG5cdFx0XHRcdFx0dmlkZW8uc3R5bGUubWF4V2lkdGggPSAnMTAwJSc7XHJcblx0XHRcdFx0XHR2aWRlby5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdF90cy4kZW1pdCgnZXJyb3InLCB7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlOiAndmlkZW8nLFxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldDogdGhpc1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZpZGVvLm9ucGxheSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoX3RzLmF1dG9wYXVzZSlcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpdGVtLCBpID0gMDsgaXRlbSA9IF90cy52aWRlb0NvbnRleHRzW2krK107KVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0gIT0gdGhpcykgaXRlbS5wYXVzZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDpn7PpopHlpITnkIZcclxuXHRcdFx0XHR2YXIgYXVkaW9zID0gdGhpcy5ydGYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2F1ZGlvJyk7XHJcblx0XHRcdFx0Zm9yICh2YXIgYXVkaW8gb2YgYXVkaW9zKVxyXG5cdFx0XHRcdFx0YXVkaW8ub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRfdHMuJGVtaXQoJ2Vycm9yJywge1xyXG5cdFx0XHRcdFx0XHRcdHNvdXJjZTogJ2F1ZGlvJyxcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g6KGo5qC85aSE55CGXHJcblx0XHRcdFx0aWYgKHRoaXMuYXV0b3Njcm9sbCkge1xyXG5cdFx0XHRcdFx0dmFyIHRhYmxlcyA9IHRoaXMucnRmLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0YWJsZScpO1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgdGFibGUgb2YgdGFibGVzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRcdFx0ZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XHJcblx0XHRcdFx0XHRcdHRhYmxlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGRpdiwgdGFibGUpO1xyXG5cdFx0XHRcdFx0XHRkaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWFwcGVuZCkgdGhpcy5kb2N1bWVudC5hcHBlbmRDaGlsZCh0aGlzLnJ0Zik7XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlcyA9IFsxXTtcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2xvYWQnKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvd0FtID0gJycsIDUwMCk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBINSB8fCBNUC0zNjBcclxuXHRcdFx0XHR2YXIgbm9kZXM7XHJcblx0XHRcdFx0aWYgKCFodG1sKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMubm9kZXMgPSBbXTtcclxuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgaHRtbCA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0bGV0IHBhcnNlciA9IG5ldyBQYXJzZXIoaHRtbCwgdGhpcyk7XHJcblx0XHRcdFx0XHQvLyDnvJPlrZjor7vlj5ZcclxuXHRcdFx0XHRcdGlmICh0aGlzLnVzZUNhY2hlKSB7XHJcblx0XHRcdFx0XHRcdHZhciBoYXNoVmFsID0gaGFzaChodG1sKTtcclxuXHRcdFx0XHRcdFx0aWYgKGNhY2hlW2hhc2hWYWxdKVxyXG5cdFx0XHRcdFx0XHRcdG5vZGVzID0gY2FjaGVbaGFzaFZhbF07XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG5vZGVzID0gcGFyc2VyLnBhcnNlKCk7XHJcblx0XHRcdFx0XHRcdFx0Y2FjaGVbaGFzaFZhbF0gPSBub2RlcztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIG5vZGVzID0gcGFyc2VyLnBhcnNlKCk7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdwYXJzZScsIG5vZGVzKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChodG1sKSA9PSAnW29iamVjdCBBcnJheV0nKSB7XHJcblx0XHRcdFx0XHQvLyDpnZ7mnKzmj5Lku7bkuqfnlJ/nmoQgYXJyYXkg6ZyA6KaB6L+b6KGM5LiA5Lqb6L2s5o2iXHJcblx0XHRcdFx0XHRpZiAoaHRtbC5sZW5ndGggJiYgaHRtbFswXS5Qb3dlcmVkQnkgIT0gJ1BhcnNlcicpIHtcclxuXHRcdFx0XHRcdFx0bGV0IHBhcnNlciA9IG5ldyBQYXJzZXIoaHRtbCwgdGhpcyk7XHJcblx0XHRcdFx0XHRcdChmdW5jdGlvbiBmKG5zKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG47IG4gPSBuc1tpXTsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobi50eXBlID09ICd0ZXh0JykgY29udGludWU7XHJcblx0XHRcdFx0XHRcdFx0XHRuLmF0dHJzID0gbi5hdHRycyB8fCB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAodmFyIGl0ZW0gaW4gbi5hdHRycylcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBuLmF0dHJzW2l0ZW1dICE9ICdzdHJpbmcnKSBuLmF0dHJzW2l0ZW1dID0gbi5hdHRyc1tpdGVtXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2VyLm1hdGNoQXR0cihuLCBwYXJzZXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG4uY2hpbGRyZW4gJiYgbi5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyc2VyLlNUQUNLLnB1c2gobik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGYobi5jaGlsZHJlbik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlci5wb3BOb2RlKHBhcnNlci5TVEFDSy5wb3AoKSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Ugbi5jaGlsZHJlbiA9IHZvaWQgMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pKGh0bWwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bm9kZXMgPSBodG1sO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGh0bWwgPT0gJ29iamVjdCcgJiYgaHRtbC5ub2Rlcykge1xyXG5cdFx0XHRcdFx0bm9kZXMgPSBodG1sLm5vZGVzO1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCfplJnor6/nmoQgaHRtbCDnsbvlnovvvJpvYmplY3Qg57G75Z6L5bey5bqf5byDJyk7XHJcblx0XHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gY29uc29sZS53YXJuKCfplJnor6/nmoQgaHRtbCDnsbvlnovvvJonICsgdHlwZW9mIGh0bWwpO1xyXG5cdFx0XHRcdGlmIChhcHBlbmQpIHRoaXMubm9kZXMgPSB0aGlzLm5vZGVzLmNvbmNhdChub2Rlcyk7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLm5vZGVzID0gbm9kZXM7XHJcblx0XHRcdFx0aWYgKG5vZGVzLmxlbmd0aCAmJiBub2Rlc1swXS50aXRsZSAmJiB0aGlzLmF1dG9zZXRUaXRsZSlcclxuXHRcdFx0XHRcdHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogbm9kZXNbMF0udGl0bGVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKHRoaXMuaW1nTGlzdCkgdGhpcy5pbWdMaXN0Lmxlbmd0aCA9IDA7XHJcblx0XHRcdFx0dGhpcy52aWRlb0NvbnRleHRzID0gW107XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnbG9hZCcpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0dmFyIGhlaWdodDtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcclxuXHRcdFx0XHR0aGlzLl90aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBINSB8fCBNUC0zNjBcclxuXHRcdFx0XHRcdHRoaXMucmVjdCA9IHRoaXMucnRmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIEg1IHx8IE1QLTM2MFxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpXHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdC8vICNpZm5kZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcblx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHQuc2VsZWN0KCcjdG9wJykuYm91bmRpbmdDbGllbnRSZWN0KCkuZXhlYyhyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghcmVzKSByZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5yZWN0ID0gcmVzWzBdO1xyXG5cdFx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnJlY3QuaGVpZ2h0ID09IGhlaWdodCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgncmVhZHknLCB0aGlzLnJlY3QpXHJcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0ID0gdGhpcy5yZWN0LmhlaWdodDtcclxuXHRcdFx0XHRcdFx0XHQvLyAjaWZuZGVmIEg1IHx8IE1QLTM2MFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH0sIDM1MCk7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2hvd1dpdGhBbmltYXRpb24gJiYgIWFwcGVuZCkgdGhpcy5zaG93QW0gPSAnYW5pbWF0aW9uOnNob3cgLjVzJztcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0VGV4dChucyA9IHRoaXMubm9kZXMpIHtcclxuXHRcdFx0XHR2YXIgdHh0ID0gJyc7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0XHR0eHQgPSB0aGlzLl90ZXh0O1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZmRlZiBINSB8fCBNUC0zNjBcclxuXHRcdFx0XHR0eHQgPSB0aGlzLnJ0Zi5pbm5lclRleHQ7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBINSB8fCBBUFAtUExVUy1OVlVFIHx8IE1QLTM2MFxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBuOyBuID0gbnNbaSsrXTspIHtcclxuXHRcdFx0XHRcdGlmIChuLnR5cGUgPT0gJ3RleHQnKSB0eHQgKz0gbi50ZXh0LnJlcGxhY2UoLyZuYnNwOy9nLCAnXFx1MDBBMCcpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mZ3Q7L2csICc+JylcclxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChuLnR5cGUgPT0gJ2JyJykgdHh0ICs9ICdcXG4nO1xyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIOWdl+e6p+agh+etvuWJjeWQjuWKoOaNouihjFxyXG5cdFx0XHRcdFx0XHR2YXIgYmxvY2sgPSBuLm5hbWUgPT0gJ3AnIHx8IG4ubmFtZSA9PSAnZGl2JyB8fCBuLm5hbWUgPT0gJ3RyJyB8fCBuLm5hbWUgPT0gJ2xpJyB8fCAobi5uYW1lWzBdID09ICdoJyAmJiBuLm5hbWVbMV0gPlxyXG5cdFx0XHRcdFx0XHRcdCcwJyAmJiBuLm5hbWVbMV0gPCAnNycpO1xyXG5cdFx0XHRcdFx0XHRpZiAoYmxvY2sgJiYgdHh0ICYmIHR4dFt0eHQubGVuZ3RoIC0gMV0gIT0gJ1xcbicpIHR4dCArPSAnXFxuJztcclxuXHRcdFx0XHRcdFx0aWYgKG4uY2hpbGRyZW4pIHR4dCArPSB0aGlzLmdldFRleHQobi5jaGlsZHJlbik7XHJcblx0XHRcdFx0XHRcdGlmIChibG9jayAmJiB0eHRbdHh0Lmxlbmd0aCAtIDFdICE9ICdcXG4nKSB0eHQgKz0gJ1xcbic7XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYgKG4ubmFtZSA9PSAndGQnIHx8IG4ubmFtZSA9PSAndGgnKSB0eHQgKz0gJ1xcdCc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdHJldHVybiB0eHQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdG5hdmlnYXRlVG8ob2JqKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnVzZUFuY2hvcilcclxuXHRcdFx0XHRcdHJldHVybiBvYmouZmFpbCAmJiBvYmouZmFpbCh7XHJcblx0XHRcdFx0XHRcdGVyck1zZzogJ0FuY2hvciBpcyBkaXNhYmxlZCdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0XHRpZiAoIW9iai5pZClcclxuXHRcdFx0XHRcdHdlZXhEb20uc2Nyb2xsVG9FbGVtZW50KHRoaXMuJHJlZnMud2ViKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLndlYi5ldmFsSnMoJ3ZhciBwb3M9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCInICsgb2JqLmlkICtcclxuXHRcdFx0XHRcdFx0J1wiKTtpZihwb3MpcG9zdCh7YWN0aW9uOlwibGlua3ByZXNzXCIsaHJlZjpcIiNcIixvZmZzZXQ6cG9zLm9mZnNldFRvcCsnICsgKG9iai5vZmZzZXQgfHwgMCkgKyAnfSknKTtcclxuXHRcdFx0XHRvYmouc3VjY2VzcyAmJiBvYmouc3VjY2Vzcyh7XHJcblx0XHRcdFx0XHRlcnJNc2c6ICdwYWdlU2Nyb2xsVG86b2snXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1IHx8IE1QLTM2MFxyXG5cdFx0XHRcdGlmICghb2JqLmlkKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgdGhpcy5ydGYub2Zmc2V0VG9wKTtcclxuXHRcdFx0XHRcdHJldHVybiBvYmouc3VjY2VzcyAmJiBvYmouc3VjY2Vzcyh7XHJcblx0XHRcdFx0XHRcdGVyck1zZzogJ3BhZ2VTY3JvbGxUbzpvaydcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmlkKTtcclxuXHRcdFx0XHRpZiAoIXRhcmdldCkgcmV0dXJuIG9iai5mYWlsICYmIG9iai5mYWlsKHtcclxuXHRcdFx0XHRcdGVyck1zZzogJ0xhYmVsIG5vdCBmb3VuZCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRvYmouc2Nyb2xsVG9wID0gdGhpcy5ydGYub2Zmc2V0VG9wICsgdGFyZ2V0Lm9mZnNldFRvcCArIChvYmoub2Zmc2V0IHx8IDApO1xyXG5cdFx0XHRcdHVuaS5wYWdlU2Nyb2xsVG8ob2JqKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEg1IHx8IEFQUC1QTFVTLU5WVUUgfHwgTVAtMzYwXHJcblx0XHRcdFx0dmFyIFNjcm9sbCA9IChzZWxlY3RvciwgY29tcG9uZW50KSA9PiB7XHJcblx0XHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKGNvbXBvbmVudCA/IGNvbXBvbmVudCA6IHRoaXMpLnNlbGVjdChzZWxlY3RvcikuYm91bmRpbmdDbGllbnRSZWN0KCkuc2VsZWN0Vmlld3BvcnQoKVxyXG5cdFx0XHRcdFx0XHQuc2Nyb2xsT2Zmc2V0KClcclxuXHRcdFx0XHRcdFx0LmV4ZWMocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXJlcyB8fCAhcmVzWzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG9iai5mYWlsICYmIG9iai5mYWlsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyTXNnOiAnTGFiZWwgbm90IGZvdW5kJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0b2JqLnNjcm9sbFRvcCA9IHJlc1sxXS5zY3JvbGxUb3AgKyByZXNbMF0udG9wICsgKG9iai5vZmZzZXQgfHwgMCk7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnBhZ2VTY3JvbGxUbyhvYmopO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIW9iai5pZCkgU2Nyb2xsKCcjdG9wJyk7XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QLUJBSURVIHx8IE1QLUFMSVBBWSB8fCBBUFAtUExVU1xyXG5cdFx0XHRcdFx0U2Nyb2xsKCcjdG9wID4+PiAjJyArIG9iai5pZCArICcsICN0b3AgPj4+IC4nICsgb2JqLmlkKTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLUJBSURVIHx8IE1QLUFMSVBBWSB8fCBBUFAtUExVU1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgYW5jaG9yIG9mIHRoaXMuYW5jaG9ycylcclxuXHRcdFx0XHRcdFx0aWYgKGFuY2hvci5pZCA9PSBvYmouaWQpXHJcblx0XHRcdFx0XHRcdFx0U2Nyb2xsKCcjJyArIG9iai5pZCArICcsIC4nICsgb2JqLmlkLCBhbmNob3Iubm9kZSk7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFZpZGVvQ29udGV4dChpZCkge1xyXG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRcdGlmICghaWQpIHJldHVybiB0aGlzLnZpZGVvQ29udGV4dHM7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IHRoaXMudmlkZW9Db250ZXh0cy5sZW5ndGg7IGktLTspXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnZpZGVvQ29udGV4dHNbaV0uaWQgPT0gaWQpIHJldHVybiB0aGlzLnZpZGVvQ29udGV4dHNbaV07XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdF9tZXNzYWdlKGUpIHtcclxuXHRcdFx0XHQvLyDmjqXmlLYgd2ViLXZpZXcg5raI5oGvXHJcblx0XHRcdFx0dmFyIGRhdGEgPSBlLmRldGFpbC5kYXRhWzBdO1xyXG5cdFx0XHRcdGlmIChkYXRhLmFjdGlvbiA9PSAnbG9hZCcpIHtcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2xvYWQnKTtcclxuXHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcblx0XHRcdFx0XHR0aGlzLl90ZXh0ID0gZGF0YS50ZXh0O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS5hY3Rpb24gPT0gJ2dldFRpdGxlJykge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuYXV0b3NldFRpdGxlKVxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZGF0YS50aXRsZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS5hY3Rpb24gPT0gJ2dldEltZ0xpc3QnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmltZ0xpc3QubGVuZ3RoID0gMDtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSBkYXRhLmltZ0xpc3QubGVuZ3RoOyBpLS07KVxyXG5cdFx0XHRcdFx0XHR0aGlzLmltZ0xpc3Quc2V0SXRlbShpLCBkYXRhLmltZ0xpc3RbaV0pO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS5hY3Rpb24gPT0gJ3ByZXZpZXcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcHJldmlldyA9IHRydWU7XHJcblx0XHRcdFx0XHRkYXRhLmltZy5pZ25vcmUgPSAoKSA9PiBwcmV2aWV3ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbWd0YXAnLCBkYXRhLmltZyk7XHJcblx0XHRcdFx0XHRpZiAocHJldmlldylcclxuXHRcdFx0XHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudDogZGF0YS5pbWcuaSxcclxuXHRcdFx0XHRcdFx0XHR1cmxzOiB0aGlzLmltZ0xpc3RcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEuYWN0aW9uID09ICdsaW5rcHJlc3MnKSB7XHJcblx0XHRcdFx0XHR2YXIganVtcCA9IHRydWUsXHJcblx0XHRcdFx0XHRcdGhyZWYgPSBkYXRhLmhyZWY7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdsaW5rcHJlc3MnLCB7XHJcblx0XHRcdFx0XHRcdGhyZWYsXHJcblx0XHRcdFx0XHRcdGlnbm9yZTogKCkgPT4ganVtcCA9IGZhbHNlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0aWYgKGp1bXAgJiYgaHJlZikge1xyXG5cdFx0XHRcdFx0XHRpZiAoaHJlZlswXSA9PSAnIycpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy51c2VBbmNob3IpXHJcblx0XHRcdFx0XHRcdFx0XHR3ZWV4RG9tLnNjcm9sbFRvRWxlbWVudCh0aGlzLiRyZWZzLndlYiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ6IGRhdGEub2Zmc2V0XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGhyZWYuaW5jbHVkZXMoJzovLycpKVxyXG5cdFx0XHRcdFx0XHRcdHBsdXMucnVudGltZS5vcGVuV2ViKGhyZWYpO1xyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiBocmVmXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEuYWN0aW9uID09ICdlcnJvcicpIHtcclxuXHRcdFx0XHRcdGlmIChkYXRhLnNvdXJjZSA9PSAnaW1nJyAmJiBjZmcuZXJyb3JJbWcpXHJcblx0XHRcdFx0XHRcdHRoaXMuaW1nTGlzdC5zZXRJdGVtKGRhdGEudGFyZ2V0LmksIGNmZy5lcnJvckltZyk7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdlcnJvcicsIHtcclxuXHRcdFx0XHRcdFx0c291cmNlOiBkYXRhLnNvdXJjZSxcclxuXHRcdFx0XHRcdFx0dGFyZ2V0OiBkYXRhLnRhcmdldFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEuYWN0aW9uID09ICdyZWFkeScpIHtcclxuXHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcblx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcykuc2VsZWN0KCcjdG9wJykuYm91bmRpbmdDbGllbnRSZWN0KCkuZXhlYyhyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVjdCA9IHJlc1swXTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdyZWFkeScsIHJlc1swXSk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRAa2V5ZnJhbWVzIHNob3cge1xyXG5cdFx0MCUge1xyXG5cdFx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdDEwMCUge1xyXG5cdFx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogI2lmZGVmIE1QLVdFSVhJTiAqL1xyXG5cdDpob3N0IHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0b3ZlcmZsb3c6IHNjcm9sbDtcclxuXHRcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///226\n");

/***/ }),

/***/ 227:
/*!*******************************************************************!*\
  !*** E:/headlines/headlines/components/jyf-parser/libs/config.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* 配置文件 */\n\n\n\nmodule.exports = {\n  // 出错占位图\n  errorImg: null,\n  // 过滤器函数\n  filter: null,\n  // 代码高亮函数\n  highlight: null,\n  // 文本处理函数\n  onText: null,\n  // 实体编码列表\n  entities: {\n    quot: '\"',\n    apos: \"'\",\n    semi: ';',\n    nbsp: '\\xA0',\n    ensp: \"\\u2002\",\n    emsp: \"\\u2003\",\n    ndash: '–',\n    mdash: '—',\n    middot: '·',\n    lsquo: '‘',\n    rsquo: '’',\n    ldquo: '“',\n    rdquo: '”',\n    bull: '•',\n    hellip: '…' },\n\n  blankChar: makeMap(' ,\\xA0,\\t,\\r,\\n,\\f'),\n  // 块级标签，将被转为 div\n  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,section' +\n\n\n\n  ',pre'),\n  // 将被移除的标签\n  ignoreTags: makeMap(\n  'area,base,canvas,frame,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr'),\n\n\n\n\n\n\n\n  // 只能被 rich-text 显示的标签\n  richOnlyTags: makeMap('a,colgroup,fieldset,legend,picture,table'),\n\n\n\n\n  // 自闭合的标签\n  selfClosingTags: makeMap(\n  'area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),\n\n  // 信任的属性\n  trustAttrs: makeMap(\n  'align,allowfullscreen,alt,app-id,author,autoplay,autostart,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns'),\n\n  // bool 型的属性\n  boolAttrs: makeMap('allowfullscreen,autoplay,autostart,controls,ignore,loop,muted'),\n  // 信任的标签\n  trustTags: makeMap(\n  'a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video' +\n\n\n\n\n  ',embed,iframe'),\n\n\n  // 默认的标签样式\n  userAgentStyles: {\n    address: 'font-style:italic',\n    big: 'display:inline;font-size:1.2em',\n    blockquote: 'background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px',\n    caption: 'display:table-caption;text-align:center',\n    center: 'text-align:center',\n    cite: 'font-style:italic',\n    dd: 'margin-left:40px',\n    mark: 'background-color:yellow',\n    pre: 'font-family:monospace;white-space:pre;overflow:scroll',\n    s: 'text-decoration:line-through',\n    small: 'display:inline;font-size:0.8em',\n    u: 'text-decoration:underline' } };\n\n\n\nfunction makeMap(str) {\n  var map = Object.create(null),\n  list = str.split(',');\n  for (var i = list.length; i--;) {\n    map[list[i]] = true;}\n  return map;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9qeWYtcGFyc2VyL2xpYnMvY29uZmlnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlcnJvckltZyIsImZpbHRlciIsImhpZ2hsaWdodCIsIm9uVGV4dCIsImVudGl0aWVzIiwicXVvdCIsImFwb3MiLCJzZW1pIiwibmJzcCIsImVuc3AiLCJlbXNwIiwibmRhc2giLCJtZGFzaCIsIm1pZGRvdCIsImxzcXVvIiwicnNxdW8iLCJsZHF1byIsInJkcXVvIiwiYnVsbCIsImhlbGxpcCIsImJsYW5rQ2hhciIsIm1ha2VNYXAiLCJibG9ja1RhZ3MiLCJpZ25vcmVUYWdzIiwicmljaE9ubHlUYWdzIiwic2VsZkNsb3NpbmdUYWdzIiwidHJ1c3RBdHRycyIsImJvb2xBdHRycyIsInRydXN0VGFncyIsInVzZXJBZ2VudFN0eWxlcyIsImFkZHJlc3MiLCJiaWciLCJibG9ja3F1b3RlIiwiY2FwdGlvbiIsImNlbnRlciIsImNpdGUiLCJkZCIsIm1hcmsiLCJwcmUiLCJzIiwic21hbGwiLCJ1Iiwic3RyIiwibWFwIiwiT2JqZWN0IiwiY3JlYXRlIiwibGlzdCIsInNwbGl0IiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFJQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCO0FBQ0FDLFVBQVEsRUFBRSxJQUZNO0FBR2hCO0FBQ0FDLFFBQU0sRUFBRSxJQUpRO0FBS2hCO0FBQ0FDLFdBQVMsRUFBRSxJQU5LO0FBT2hCO0FBQ0FDLFFBQU0sRUFBRSxJQVJRO0FBU2hCO0FBQ0FDLFVBQVEsRUFBRTtBQUNUQyxRQUFJLEVBQUUsR0FERztBQUVUQyxRQUFJLEVBQUUsR0FGRztBQUdUQyxRQUFJLEVBQUUsR0FIRztBQUlUQyxRQUFJLEVBQUUsTUFKRztBQUtUQyxRQUFJLEVBQUUsUUFMRztBQU1UQyxRQUFJLEVBQUUsUUFORztBQU9UQyxTQUFLLEVBQUUsR0FQRTtBQVFUQyxTQUFLLEVBQUUsR0FSRTtBQVNUQyxVQUFNLEVBQUUsR0FUQztBQVVUQyxTQUFLLEVBQUUsR0FWRTtBQVdUQyxTQUFLLEVBQUUsR0FYRTtBQVlUQyxTQUFLLEVBQUUsR0FaRTtBQWFUQyxTQUFLLEVBQUUsR0FiRTtBQWNUQyxRQUFJLEVBQUUsR0FkRztBQWVUQyxVQUFNLEVBQUUsR0FmQyxFQVZNOztBQTJCaEJDLFdBQVMsRUFBRUMsT0FBTyxDQUFDLG9CQUFELENBM0JGO0FBNEJoQjtBQUNBQyxXQUFTLEVBQUVELE9BQU8sQ0FBQzs7OztBQUlsQixRQUppQixDQTdCRjtBQWtDaEI7QUFDQUUsWUFBVSxFQUFFRixPQUFPO0FBQ2xCLHFHQURrQixDQW5DSDs7Ozs7Ozs7QUE0Q2hCO0FBQ0FHLGNBQVksRUFBRUgsT0FBTyxDQUFDLDBDQUFELENBN0NMOzs7OztBQWtEaEI7QUFDQUksaUJBQWUsRUFBRUosT0FBTztBQUN2Qix3SEFEdUIsQ0FuRFI7O0FBc0RoQjtBQUNBSyxZQUFVLEVBQUVMLE9BQU87QUFDbEIsK1BBRGtCLENBdkRIOztBQTBEaEI7QUFDQU0sV0FBUyxFQUFFTixPQUFPLENBQUMsK0RBQUQsQ0EzREY7QUE0RGhCO0FBQ0FPLFdBQVMsRUFBRVAsT0FBTztBQUNqQjs7Ozs7QUFLRSxpQkFOZSxDQTdERjs7O0FBc0VoQjtBQUNBUSxpQkFBZSxFQUFFO0FBQ2hCQyxXQUFPLEVBQUUsbUJBRE87QUFFaEJDLE9BQUcsRUFBRSxnQ0FGVztBQUdoQkMsY0FBVSxFQUFFLDZGQUhJO0FBSWhCQyxXQUFPLEVBQUUseUNBSk87QUFLaEJDLFVBQU0sRUFBRSxtQkFMUTtBQU1oQkMsUUFBSSxFQUFFLG1CQU5VO0FBT2hCQyxNQUFFLEVBQUUsa0JBUFk7QUFRaEJDLFFBQUksRUFBRSx5QkFSVTtBQVNoQkMsT0FBRyxFQUFFLHVEQVRXO0FBVWhCQyxLQUFDLEVBQUUsOEJBVmE7QUFXaEJDLFNBQUssRUFBRSxnQ0FYUztBQVloQkMsS0FBQyxFQUFFLDJCQVphLEVBdkVELEVBQWpCOzs7O0FBdUZBLFNBQVNwQixPQUFULENBQWlCcUIsR0FBakIsRUFBc0I7QUFDckIsTUFBSUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLENBQVY7QUFDQ0MsTUFBSSxHQUFHSixHQUFHLENBQUNLLEtBQUosQ0FBVSxHQUFWLENBRFI7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBR0YsSUFBSSxDQUFDRyxNQUFsQixFQUEwQkQsQ0FBQyxFQUEzQjtBQUNDTCxPQUFHLENBQUNHLElBQUksQ0FBQ0UsQ0FBRCxDQUFMLENBQUgsR0FBZSxJQUFmLENBREQ7QUFFQSxTQUFPTCxHQUFQO0FBQ0EiLCJmaWxlIjoiMjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyog6YWN572u5paH5Lu2ICovXHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdC8vIOWHuumUmeWNoOS9jeWbvlxyXG5cdGVycm9ySW1nOiBudWxsLFxyXG5cdC8vIOi/h+a7pOWZqOWHveaVsFxyXG5cdGZpbHRlcjogbnVsbCxcclxuXHQvLyDku6PnoIHpq5jkuq7lh73mlbBcclxuXHRoaWdobGlnaHQ6IG51bGwsXHJcblx0Ly8g5paH5pys5aSE55CG5Ye95pWwXHJcblx0b25UZXh0OiBudWxsLFxyXG5cdC8vIOWunuS9k+e8lueggeWIl+ihqFxyXG5cdGVudGl0aWVzOiB7XHJcblx0XHRxdW90OiAnXCInLFxyXG5cdFx0YXBvczogXCInXCIsXHJcblx0XHRzZW1pOiAnOycsXHJcblx0XHRuYnNwOiAnXFx4QTAnLFxyXG5cdFx0ZW5zcDogJ1xcdTIwMDInLFxyXG5cdFx0ZW1zcDogJ1xcdTIwMDMnLFxyXG5cdFx0bmRhc2g6ICfigJMnLFxyXG5cdFx0bWRhc2g6ICfigJQnLFxyXG5cdFx0bWlkZG90OiAnwrcnLFxyXG5cdFx0bHNxdW86ICfigJgnLFxyXG5cdFx0cnNxdW86ICfigJknLFxyXG5cdFx0bGRxdW86ICfigJwnLFxyXG5cdFx0cmRxdW86ICfigJ0nLFxyXG5cdFx0YnVsbDogJ+KAoicsXHJcblx0XHRoZWxsaXA6ICfigKYnXHJcblx0fSxcclxuXHRibGFua0NoYXI6IG1ha2VNYXAoJyAsXFx4QTAsXFx0LFxccixcXG4sXFxmJyksXHJcblx0Ly8g5Z2X57qn5qCH562+77yM5bCG6KKr6L2s5Li6IGRpdlxyXG5cdGJsb2NrVGFnczogbWFrZU1hcCgnYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJvZHksY2FwdGlvbixjZW50ZXIsY2l0ZSxmb290ZXIsaGVhZGVyLGh0bWwsbmF2LHNlY3Rpb24nICsgKFxyXG5cclxuXHJcblxyXG5cdFx0JyxwcmUnKSksXHJcblx0Ly8g5bCG6KKr56e76Zmk55qE5qCH562+XHJcblx0aWdub3JlVGFnczogbWFrZU1hcChcclxuXHRcdCdhcmVhLGJhc2UsY2FudmFzLGZyYW1lLGlucHV0LGxpbmssbWFwLG1ldGEscGFyYW0sc2NyaXB0LHNvdXJjZSxzdHlsZSxzdmcsdGV4dGFyZWEsdGl0bGUsdHJhY2ssd2JyJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdCksXHJcblx0Ly8g5Y+q6IO96KKrIHJpY2gtdGV4dCDmmL7npLrnmoTmoIfnrb5cclxuXHRyaWNoT25seVRhZ3M6IG1ha2VNYXAoJ2EsY29sZ3JvdXAsZmllbGRzZXQsbGVnZW5kLHBpY3R1cmUsdGFibGUnXHJcblxyXG5cclxuXHJcblx0KSxcclxuXHQvLyDoh6rpl63lkIjnmoTmoIfnrb5cclxuXHRzZWxmQ2xvc2luZ1RhZ3M6IG1ha2VNYXAoXHJcblx0XHQnYXJlYSxiYXNlLGJyLGNvbCxjaXJjbGUsZWxsaXBzZSxlbWJlZCxmcmFtZSxocixpbWcsaW5wdXQsbGluZSxsaW5rLG1ldGEscGFyYW0scGF0aCxwb2x5Z29uLHJlY3Qsc291cmNlLHRyYWNrLHVzZSx3YnInXHJcblx0KSxcclxuXHQvLyDkv6Hku7vnmoTlsZ7mgKdcclxuXHR0cnVzdEF0dHJzOiBtYWtlTWFwKFxyXG5cdFx0J2FsaWduLGFsbG93ZnVsbHNjcmVlbixhbHQsYXBwLWlkLGF1dGhvcixhdXRvcGxheSxhdXRvc3RhcnQsYm9yZGVyLGNlbGxwYWRkaW5nLGNlbGxzcGFjaW5nLGNsYXNzLGNvbG9yLGNvbHNwYW4sY29udHJvbHMsZGF0YS1zcmMsZGlyLGZhY2UsaGVpZ2h0LGhyZWYsaWQsaWdub3JlLGxvb3AsbWVkaWEsbXV0ZWQsbmFtZSxwYXRoLHBvc3Rlcixyb3dzcGFuLHNpemUsc3BhbixzcmMsc3RhcnQsc3R5bGUsdHlwZSx1bml0LWlkLHdpZHRoLHhtbG5zJ1xyXG5cdCksXHJcblx0Ly8gYm9vbCDlnovnmoTlsZ7mgKdcclxuXHRib29sQXR0cnM6IG1ha2VNYXAoJ2FsbG93ZnVsbHNjcmVlbixhdXRvcGxheSxhdXRvc3RhcnQsY29udHJvbHMsaWdub3JlLGxvb3AsbXV0ZWQnKSxcclxuXHQvLyDkv6Hku7vnmoTmoIfnrb5cclxuXHR0cnVzdFRhZ3M6IG1ha2VNYXAoXHJcblx0XHQnYSxhYmJyLGFkLGF1ZGlvLGIsYmxvY2txdW90ZSxicixjb2RlLGNvbCxjb2xncm91cCxkZCxkZWwsZGwsZHQsZGl2LGVtLGZpZWxkc2V0LGgxLGgyLGgzLGg0LGg1LGg2LGhyLGksaW1nLGlucyxsYWJlbCxsZWdlbmQsbGksb2wscCxxLHNvdXJjZSxzcGFuLHN0cm9uZyxzdWIsc3VwLHRhYmxlLHRib2R5LHRkLHRmb290LHRoLHRoZWFkLHRyLHRpdGxlLHVsLHZpZGVvJ1xyXG5cclxuXHJcblxyXG5cclxuXHRcdCsgJyxlbWJlZCxpZnJhbWUnXHJcblxyXG5cdCksXHJcblx0Ly8g6buY6K6k55qE5qCH562+5qC35byPXHJcblx0dXNlckFnZW50U3R5bGVzOiB7XHJcblx0XHRhZGRyZXNzOiAnZm9udC1zdHlsZTppdGFsaWMnLFxyXG5cdFx0YmlnOiAnZGlzcGxheTppbmxpbmU7Zm9udC1zaXplOjEuMmVtJyxcclxuXHRcdGJsb2NrcXVvdGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjY7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICNkYmRiZGI7Y29sb3I6IzZjNmM2YztwYWRkaW5nOjVweCAwIDVweCAxMHB4JyxcclxuXHRcdGNhcHRpb246ICdkaXNwbGF5OnRhYmxlLWNhcHRpb247dGV4dC1hbGlnbjpjZW50ZXInLFxyXG5cdFx0Y2VudGVyOiAndGV4dC1hbGlnbjpjZW50ZXInLFxyXG5cdFx0Y2l0ZTogJ2ZvbnQtc3R5bGU6aXRhbGljJyxcclxuXHRcdGRkOiAnbWFyZ2luLWxlZnQ6NDBweCcsXHJcblx0XHRtYXJrOiAnYmFja2dyb3VuZC1jb2xvcjp5ZWxsb3cnLFxyXG5cdFx0cHJlOiAnZm9udC1mYW1pbHk6bW9ub3NwYWNlO3doaXRlLXNwYWNlOnByZTtvdmVyZmxvdzpzY3JvbGwnLFxyXG5cdFx0czogJ3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2gnLFxyXG5cdFx0c21hbGw6ICdkaXNwbGF5OmlubGluZTtmb250LXNpemU6MC44ZW0nLFxyXG5cdFx0dTogJ3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUnXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlTWFwKHN0cikge1xyXG5cdHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxyXG5cdFx0bGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xyXG5cdGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aDsgaS0tOylcclxuXHRcdG1hcFtsaXN0W2ldXSA9IHRydWU7XHJcblx0cmV0dXJuIG1hcDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///227\n");

/***/ }),

/***/ 228:
/*!****************************************************************************************************!*\
  !*** E:/headlines/headlines/components/jyf-parser/jyf-parser.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./jyf-parser.vue?vue&type=style&index=0&lang=css& */ 229);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 229:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/components/jyf-parser/jyf-parser.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 230:
/*!****************************************************************************************************!*\
  !*** E:/headlines/headlines/pages/index/versionUpdateTip.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./versionUpdateTip.nvue?vue&type=script&lang=js&mpType=page */ 231);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBiLENBQWdCLHNlQUFHLEVBQUMiLCJmaWxlIjoiMjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZlcnNpb25VcGRhdGVUaXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmVyc2lvblVwZGF0ZVRpcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///230\n");

/***/ }),

/***/ 231:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/pages/index/versionUpdateTip.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _jyfParser = _interopRequireDefault(__webpack_require__(/*! @/components/jyf-parser/jyf-parser */ 222));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { 'jyf-parser': _jyfParser.default }, data: function data() {return { description: \"亲爱的用户，感谢您一直以来的支持!为更好地保护您的权益，同时遵守相关监管要求，我们更新了\", disAgree: false };}, created: function created() {var app = getApp();this.description = app.globalData.updateTip;\n    __f__(\"log\", \"description=\" + this.description, \" at pages/index/versionUpdateTip.nvue:29\");\n  },\n  onUnload: function onUnload() {\n    uni.$off(\"page-popup\");\n  },\n  methods: {\n    wrapperClick: function wrapperClick() {\n\n    },\n    updateButtonClick: function updateButtonClick() {\n      var subNVue = uni.getSubNVueById('versionUpdateTip');\n      subNVue.hide();\n      uni.navigateTo({\n        url: '/pages/user/setting/versionUpdate' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvdmVyc2lvblVwZGF0ZVRpcC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBY0EsNEc7Ozs7Ozs7Ozs7Ozs7ZUFDQSxFQUNBLGNBQ0EsZ0NBREEsRUFEQSxFQUlBLElBSkEsa0JBSUEsQ0FDQSxTQUNBLDJEQURBLEVBRUEsZUFGQSxHQUlBLENBVEEsRUFVQSxPQVZBLHFCQVVBLENBQ0EsbUJBQ0E7QUFDQTtBQUNBLEdBZEE7QUFlQSxVQWZBLHNCQWVBO0FBQ0E7QUFDQSxHQWpCQTtBQWtCQTtBQUNBOztBQUVBLEtBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQURBOztBQUdBLEtBVkEsRUFsQkEsRSIsImZpbGUiOiIyMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cIm1hc2tcIiBAY2xpY2s9XCJ3cmFwcGVyQ2xpY2soKVwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1hc2stY29udGVudFwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlXCI+54mI5pys5pu05paw5ZWmPC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNjcm9sbGVyLXZpZXdcIj5cclxuXHRcdFx0XHQ8anlmLXBhcnNlciBzdHlsZT1cImxpbmUtaGVpZ2h0OiA1MHJweDtcIiBnZXN0dXJlLXpvb20gbGF6eS1sb2FkIDpodG1sPVwiZGVzY3JpcHRpb25cIiBzZWxlY3RhYmxlIHNob3ctd2l0aC1hbmltYXRpb24gdXNlLWFuY2hvcj48L2p5Zi1wYXJzZXI+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJidXR0b24tdGV4dFwiIHYtb246Y2xpY2suc3RvcD1cInVwZGF0ZUJ1dHRvbkNsaWNrXCI+56uL5Y2z5pu05pawPC90ZXh0PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcGFyc2VyIGZyb20gJ0AvY29tcG9uZW50cy9qeWYtcGFyc2VyL2p5Zi1wYXJzZXInO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J2p5Zi1wYXJzZXInOiBwYXJzZXJcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIuS6sueIseeahOeUqOaIt++8jOaEn+iwouaCqOS4gOebtOS7peadpeeahOaUr+aMgSHkuLrmm7Tlpb3lnLDkv53miqTmgqjnmoTmnYPnm4rvvIzlkIzml7bpgbXlrojnm7jlhbPnm5HnrqHopoHmsYLvvIzmiJHku6zmm7TmlrDkuoZcIixcclxuXHRcdFx0XHRkaXNBZ3JlZTogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGNvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gYXBwLmdsb2JhbERhdGEudXBkYXRlVGlwO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImRlc2NyaXB0aW9uPVwiICsgdGhpcy5kZXNjcmlwdGlvbik7XHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdHVuaS4kb2ZmKFwicGFnZS1wb3B1cFwiKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHdyYXBwZXJDbGljazogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cGRhdGVCdXR0b25DbGljazogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29uc3Qgc3ViTlZ1ZSA9IHVuaS5nZXRTdWJOVnVlQnlJZCgndmVyc2lvblVwZGF0ZVRpcCcpO1xyXG5cdFx0XHRcdHN1Yk5WdWUuaGlkZSgpO1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy91c2VyL3NldHRpbmcvdmVyc2lvblVwZGF0ZSdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQubWFzayB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR0b3A6IDBycHg7XHJcblx0XHRib3R0b206IDBycHg7XHJcblx0XHRyaWdodDogMHJweDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjQpO1xyXG5cdH1cclxuXHJcblx0Lm1hc2stY29udGVudCB7XHJcblx0XHR3aWR0aDogNTUwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0ei1pbmRleDogLTE7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEwMHJweDtcclxuXHRcdGZsZXg6IDA7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQuc2Nyb2xsZXItdmlldyB7XHJcblx0XHR3aWR0aDogNTUwcnB4O1xyXG5cdFx0cGFkZGluZzogMHJweCAzMHJweCAwcnB4IDM1cnB4O1xyXG5cdH1cclxuXHJcblx0LmRlc2NyaWJsZSB7XHJcblx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRpcCB7XHJcblx0XHR3aWR0aDogNTUwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjZycHg7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAzNXJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcnB4O1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0ei1pbmRleDogMztcclxuXHR9XHJcblxyXG5cdC5kZWFsLXRleHQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0xMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzIyNTI4OTtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5idXR0b25zIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmJ1dHRvbi1sZWZ0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHR3aWR0aDogMjIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA3MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2NXJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTI4OTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJ1dHRvbi1yaWdodCB7XHJcblxyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdHdpZHRoOiAyMjBycHg7XHJcblx0XHRoZWlnaHQ6IDcwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDY1cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1Mjg5O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTJycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uLXRleHQge1xyXG5cdFx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAycnB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogI0Y1RjVGNTtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdHdpZHRoOiA1NTBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxMDBycHg7XHJcblx0XHRjb2xvcjogIzIyNTI4OTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC50aXAtdmlldyB7XHJcblx0XHR3aWR0aDogNDYwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyNDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHR6LWluZGV4OiAyO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC50aXAtdmlldy10aXRsZSB7XHJcblx0XHR3aWR0aDogNDYwcnB4O1xyXG5cdFx0cGFkZGluZzogMzBycHggMjBycHggMzBycHggMjVycHg7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQudGlwLXZpZXctYnV0dG9ucyB7XHJcblx0XHR3aWR0aDogNDYwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci10b3Atd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjMjI1Mjg5O1xyXG5cdH1cclxuXHJcblx0LnRpcC12aWV3LWxlZnQge1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdHdpZHRoOiAyMzBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0Y29sb3I6ICMyMjUyODk7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRib3JkZXItcmlnaHQtd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjMjI1Mjg5O1xyXG5cdH1cclxuXHJcblx0LnRpcC12aWV3LXJpZ2h0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHR3aWR0aDogMjMwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdGNvbG9yOiAjMjI1Mjg5O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///231\n");

/***/ }),

/***/ 232:
/*!*************************************************************************************************************!*\
  !*** E:/headlines/headlines/pages/index/versionUpdateTip.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./versionUpdateTip.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 233);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_versionUpdateTip_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 233:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/headlines/headlines/pages/index/versionUpdateTip.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "paddingBottom": "0rpx",
    "paddingLeft": "35rpx"
  },
  "describle": {
    "fontSize": "26rpx",
    "color": "#333333",
    "textAlign": "left",
    "lineHeight": "40rpx"
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
    "marginLeft": "-10rpx",
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