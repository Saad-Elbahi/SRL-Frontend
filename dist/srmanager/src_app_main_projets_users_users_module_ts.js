(self["webpackChunksr_manager"] = self["webpackChunksr_manager"] || []).push([["src_app_main_projets_users_users_module_ts"],{

/***/ 76321:
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileDropDirective": function() { return /* binding */ FileDropDirective; },
/* harmony export */   "FileItem": function() { return /* binding */ FileItem; },
/* harmony export */   "FileLikeObject": function() { return /* binding */ FileLikeObject; },
/* harmony export */   "FileSelectDirective": function() { return /* binding */ FileSelectDirective; },
/* harmony export */   "FileUploadModule": function() { return /* binding */ FileUploadModule; },
/* harmony export */   "FileUploader": function() { return /* binding */ FileUploader; }
/* harmony export */ });
/* harmony import */ var C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 72454);
/* harmony import */ var C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} node
 * @return {?}
 */



function isElement(node) {
  return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}

var FileLikeObject = /*#__PURE__*/function () {
  /**
   * @param {?} fileOrInput
   */
  function FileLikeObject(fileOrInput) {
    (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FileLikeObject);

    this.rawFile = fileOrInput;
    /** @type {?} */

    var isInput = isElement(fileOrInput);
    /** @type {?} */

    var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
    /** @type {?} */

    var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
    /** @type {?} */

    var method = '_createFrom' + postfix;
    this[method](fakePathOrObject);
  }
  /**
   * @param {?} path
   * @return {?}
   */


  (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(FileLikeObject, [{
    key: "_createFromFakePath",
    value: function _createFromFakePath(path) {
      this.lastModifiedDate = void 0;
      this.size = void 0;
      this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
      this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    }
    /**
     * @param {?} object
     * @return {?}
     */

  }, {
    key: "_createFromObject",
    value: function _createFromObject(object) {
      this.size = object.size;
      this.type = object.type;
      this.name = object.name;
    }
  }]);

  return FileLikeObject;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var FileItem = /*#__PURE__*/function () {
  /**
   * @param {?} uploader
   * @param {?} some
   * @param {?} options
   */
  function FileItem(uploader, some, options) {
    (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FileItem);

    this.url = '/';
    this.headers = [];
    this.withCredentials = true;
    this.formData = [];
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = false;
    this.isSuccess = false;
    this.isCancel = false;
    this.isError = false;
    this.progress = 0;
    this.index = void 0;
    this.uploader = uploader;
    this.some = some;
    this.options = options;
    this.file = new FileLikeObject(some);
    this._file = some;

    if (uploader.options) {
      this.method = uploader.options.method || 'POST';
      this.alias = uploader.options.itemAlias || 'file';
    }

    this.url = uploader.options.url;
  }
  /**
   * @return {?}
   */


  (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(FileItem, [{
    key: "upload",
    value: function upload() {
      try {
        this.uploader.uploadItem(this);
      } catch (e) {
        this.uploader._onCompleteItem(this, '', 0, {});

        this.uploader._onErrorItem(this, '', 0, {});
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "cancel",
    value: function cancel() {
      this.uploader.cancelItem(this);
    }
    /**
     * @return {?}
     */

  }, {
    key: "remove",
    value: function remove() {
      this.uploader.removeFromQueue(this);
    }
    /**
     * @return {?}
     */

  }, {
    key: "onBeforeUpload",
    value: function onBeforeUpload() {
      return void 0;
    }
    /**
     * @param {?} form
     * @return {?}
     */

  }, {
    key: "onBuildForm",
    value: function onBuildForm(form) {
      return {
        form: form
      };
    }
    /**
     * @param {?} progress
     * @return {?}
     */

  }, {
    key: "onProgress",
    value: function onProgress(progress) {
      return {
        progress: progress
      };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(response, status, headers) {
      return {
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "onError",
    value: function onError(response, status, headers) {
      return {
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "onCancel",
    value: function onCancel(response, status, headers) {
      return {
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "onComplete",
    value: function onComplete(response, status, headers) {
      return {
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @return {?}
     */

  }, {
    key: "_onBeforeUpload",
    value: function _onBeforeUpload() {
      this.isReady = true;
      this.isUploading = true;
      this.isUploaded = false;
      this.isSuccess = false;
      this.isCancel = false;
      this.isError = false;
      this.progress = 0;
      this.onBeforeUpload();
    }
    /**
     * @param {?} form
     * @return {?}
     */

  }, {
    key: "_onBuildForm",
    value: function _onBuildForm(form) {
      this.onBuildForm(form);
    }
    /**
     * @param {?} progress
     * @return {?}
     */

  }, {
    key: "_onProgress",
    value: function _onProgress(progress) {
      this.progress = progress;
      this.onProgress(progress);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_onSuccess",
    value: function _onSuccess(response, status, headers) {
      this.isReady = false;
      this.isUploading = false;
      this.isUploaded = true;
      this.isSuccess = true;
      this.isCancel = false;
      this.isError = false;
      this.progress = 100;
      this.index = void 0;
      this.onSuccess(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_onError",
    value: function _onError(response, status, headers) {
      this.isReady = false;
      this.isUploading = false;
      this.isUploaded = true;
      this.isSuccess = false;
      this.isCancel = false;
      this.isError = true;
      this.progress = 0;
      this.index = void 0;
      this.onError(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_onCancel",
    value: function _onCancel(response, status, headers) {
      this.isReady = false;
      this.isUploading = false;
      this.isUploaded = false;
      this.isSuccess = false;
      this.isCancel = true;
      this.isError = false;
      this.progress = 0;
      this.index = void 0;
      this.onCancel(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_onComplete",
    value: function _onComplete(response, status, headers) {
      this.onComplete(response, status, headers);

      if (this.uploader.options.removeAfterUpload) {
        this.remove();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "_prepareToUploading",
    value: function _prepareToUploading() {
      this.index = this.index || ++this.uploader._nextIndex;
      this.isReady = true;
    }
  }]);

  return FileItem;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var FileType = /*#__PURE__*/function () {
  function FileType() {
    (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FileType);
  }

  (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(FileType, null, [{
    key: "getMimeClass",
    value:
    /**
     * @param {?} file
     * @return {?}
     */
    function getMimeClass(file) {
      /** @type {?} */
      var mimeClass = 'application';

      if (this.mime_psd.indexOf(file.type) !== -1) {
        mimeClass = 'image';
      } else if (file.type.match('image.*')) {
        mimeClass = 'image';
      } else if (file.type.match('video.*')) {
        mimeClass = 'video';
      } else if (file.type.match('audio.*')) {
        mimeClass = 'audio';
      } else if (file.type === 'application/pdf') {
        mimeClass = 'pdf';
      } else if (this.mime_compress.indexOf(file.type) !== -1) {
        mimeClass = 'compress';
      } else if (this.mime_doc.indexOf(file.type) !== -1) {
        mimeClass = 'doc';
      } else if (this.mime_xsl.indexOf(file.type) !== -1) {
        mimeClass = 'xls';
      } else if (this.mime_ppt.indexOf(file.type) !== -1) {
        mimeClass = 'ppt';
      }

      if (mimeClass === 'application') {
        mimeClass = this.fileTypeDetection(file.name);
      }

      return mimeClass;
    }
    /**
     * @param {?} inputFilename
     * @return {?}
     */

  }, {
    key: "fileTypeDetection",
    value: function fileTypeDetection(inputFilename) {
      /** @type {?} */
      var types = {
        'jpg': 'image',
        'jpeg': 'image',
        'tif': 'image',
        'psd': 'image',
        'bmp': 'image',
        'png': 'image',
        'nef': 'image',
        'tiff': 'image',
        'cr2': 'image',
        'dwg': 'image',
        'cdr': 'image',
        'ai': 'image',
        'indd': 'image',
        'pin': 'image',
        'cdp': 'image',
        'skp': 'image',
        'stp': 'image',
        '3dm': 'image',
        'mp3': 'audio',
        'wav': 'audio',
        'wma': 'audio',
        'mod': 'audio',
        'm4a': 'audio',
        'compress': 'compress',
        'zip': 'compress',
        'rar': 'compress',
        '7z': 'compress',
        'lz': 'compress',
        'z01': 'compress',
        'bz2': 'compress',
        'gz': 'compress',
        'pdf': 'pdf',
        'xls': 'xls',
        'xlsx': 'xls',
        'ods': 'xls',
        'mp4': 'video',
        'avi': 'video',
        'wmv': 'video',
        'mpg': 'video',
        'mts': 'video',
        'flv': 'video',
        '3gp': 'video',
        'vob': 'video',
        'm4v': 'video',
        'mpeg': 'video',
        'm2ts': 'video',
        'mov': 'video',
        'doc': 'doc',
        'docx': 'doc',
        'eps': 'doc',
        'txt': 'doc',
        'odt': 'doc',
        'rtf': 'doc',
        'ppt': 'ppt',
        'pptx': 'ppt',
        'pps': 'ppt',
        'ppsx': 'ppt',
        'odp': 'ppt'
      };
      /** @type {?} */

      var chunks = inputFilename.split('.');

      if (chunks.length < 2) {
        return 'application';
      }
      /** @type {?} */


      var extension = chunks[chunks.length - 1].toLowerCase();

      if (types[extension] === undefined) {
        return 'application';
      } else {
        return types[extension];
      }
    }
  }]);

  return FileType;
}();
/*  MS office  */


FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
/* PSD */

FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
/* Compressed files */

FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @return {?}
 */


function _isFile(value) {
  return File && value instanceof File;
}
/**
 * @record
 */


function Headers() {}

if (false) {}
/**
 * @record
 */


function FileUploaderOptions() {}

if (false) {}

var FileUploader = /*#__PURE__*/function () {
  /**
   * @param {?} options
   */
  function FileUploader(options) {
    (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FileUploader);

    this.isUploading = false;
    this.queue = [];
    this.progress = 0;
    this._nextIndex = 0;
    this.options = {
      autoUpload: false,
      isHTML5: true,
      filters: [],
      removeAfterUpload: false,
      disableMultipart: false,
      formatDataFunction:
      /**
      * @param {?} item
      * @return {?}
      */
      function formatDataFunction(item) {
        return item._file;
      },
      formatDataFunctionIsAsync: false
    };
    this.setOptions(options);
    this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  /**
   * @param {?} options
   * @return {?}
   */


  (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(FileUploader, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = Object.assign(this.options, options);
      this.authToken = this.options.authToken;
      this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
      this.autoUpload = this.options.autoUpload;
      this.options.filters.unshift({
        name: 'queueLimit',
        fn: this._queueLimitFilter
      });

      if (this.options.maxFileSize) {
        this.options.filters.unshift({
          name: 'fileSize',
          fn: this._fileSizeFilter
        });
      }

      if (this.options.allowedFileType) {
        this.options.filters.unshift({
          name: 'fileType',
          fn: this._fileTypeFilter
        });
      }

      if (this.options.allowedMimeType) {
        this.options.filters.unshift({
          name: 'mimeType',
          fn: this._mimeTypeFilter
        });
      }

      for (var i = 0; i < this.queue.length; i++) {
        this.queue[i].url = this.options.url;
      }
    }
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */

  }, {
    key: "addToQueue",
    value: function addToQueue(files, options, filters) {
      var _this = this;

      /** @type {?} */
      var list = [];

      var _iterator = (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.default)(files),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;
          list.push(file);
        }
        /** @type {?} */

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var arrayOfFilters = this._getFilters(filters);
      /** @type {?} */


      var count = this.queue.length;
      /** @type {?} */

      var addedFileItems = [];
      list.map(
      /**
      * @param {?} some
      * @return {?}
      */
      function (some) {
        if (!options) {
          options = _this.options;
        }
        /** @type {?} */


        var temp = new FileLikeObject(some);

        if (_this._isValidFile(temp, arrayOfFilters, options)) {
          /** @type {?} */
          var fileItem = new FileItem(_this, some, options);
          addedFileItems.push(fileItem);

          _this.queue.push(fileItem);

          _this._onAfterAddingFile(fileItem);
        } else {
          /** @type {?} */
          var filter = arrayOfFilters[_this._failFilterIndex];

          _this._onWhenAddingFileFailed(temp, filter, options);
        }
      });

      if (this.queue.length !== count) {
        this._onAfterAddingAll(addedFileItems);

        this.progress = this._getTotalProgress();
      }

      this._render();

      if (this.options.autoUpload) {
        this.uploadAll();
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "removeFromQueue",
    value: function removeFromQueue(value) {
      /** @type {?} */
      var index = this.getIndexOfItem(value);
      /** @type {?} */

      var item = this.queue[index];

      if (item.isUploading) {
        item.cancel();
      }

      this.queue.splice(index, 1);
      this.progress = this._getTotalProgress();
    }
    /**
     * @return {?}
     */

  }, {
    key: "clearQueue",
    value: function clearQueue() {
      while (this.queue.length) {
        this.queue[0].remove();
      }

      this.progress = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "uploadItem",
    value: function uploadItem(value) {
      /** @type {?} */
      var index = this.getIndexOfItem(value);
      /** @type {?} */

      var item = this.queue[index];
      /** @type {?} */

      var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

      item._prepareToUploading();

      if (this.isUploading) {
        return;
      }

      this.isUploading = true;
      this[transport](item);
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "cancelItem",
    value: function cancelItem(value) {
      /** @type {?} */
      var index = this.getIndexOfItem(value);
      /** @type {?} */

      var item = this.queue[index];
      /** @type {?} */

      var prop = this.options.isHTML5 ? item._xhr : item._form;

      if (item && item.isUploading) {
        prop.abort();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "uploadAll",
    value: function uploadAll() {
      /** @type {?} */
      var items = this.getNotUploadedItems().filter(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return !item.isUploading;
      });

      if (!items.length) {
        return;
      }

      items.map(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return item._prepareToUploading();
      });
      items[0].upload();
    }
    /**
     * @return {?}
     */

  }, {
    key: "cancelAll",
    value: function cancelAll() {
      /** @type {?} */
      var items = this.getNotUploadedItems();
      items.map(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return item.cancel();
      });
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "isFile",
    value: function isFile(value) {
      return _isFile(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "isFileLikeObject",
    value: function isFileLikeObject(value) {
      return value instanceof FileLikeObject;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "getIndexOfItem",
    value: function getIndexOfItem(value) {
      return typeof value === 'number' ? value : this.queue.indexOf(value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "getNotUploadedItems",
    value: function getNotUploadedItems() {
      return this.queue.filter(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return !item.isUploaded;
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "getReadyItems",
    value: function getReadyItems() {
      return this.queue.filter(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return item.isReady && !item.isUploading;
      }).sort(
      /**
      * @param {?} item1
      * @param {?} item2
      * @return {?}
      */
      function (item1, item2) {
        return item1.index - item2.index;
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      return void 0;
    }
    /**
     * @param {?} fileItems
     * @return {?}
     */

  }, {
    key: "onAfterAddingAll",
    value: function onAfterAddingAll(fileItems) {
      return {
        fileItems: fileItems
      };
    }
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */

  }, {
    key: "onBuildItemForm",
    value: function onBuildItemForm(fileItem, form) {
      return {
        fileItem: fileItem,
        form: form
      };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */

  }, {
    key: "onAfterAddingFile",
    value: function onAfterAddingFile(fileItem) {
      return {
        fileItem: fileItem
      };
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "onWhenAddingFileFailed",
    value: function onWhenAddingFileFailed(item, filter, options) {
      return {
        item: item,
        filter: filter,
        options: options
      };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */

  }, {
    key: "onBeforeUploadItem",
    value: function onBeforeUploadItem(fileItem) {
      return {
        fileItem: fileItem
      };
    }
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */

  }, {
    key: "onProgressItem",
    value: function onProgressItem(fileItem, progress) {
      return {
        fileItem: fileItem,
        progress: progress
      };
    }
    /**
     * @param {?} progress
     * @return {?}
     */

  }, {
    key: "onProgressAll",
    value: function onProgressAll(progress) {
      return {
        progress: progress
      };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "onSuccessItem",
    value: function onSuccessItem(item, response, status, headers) {
      return {
        item: item,
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "onErrorItem",
    value: function onErrorItem(item, response, status, headers) {
      return {
        item: item,
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "onCancelItem",
    value: function onCancelItem(item, response, status, headers) {
      return {
        item: item,
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "onCompleteItem",
    value: function onCompleteItem(item, response, status, headers) {
      return {
        item: item,
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @return {?}
     */

  }, {
    key: "onCompleteAll",
    value: function onCompleteAll() {
      return void 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_mimeTypeFilter",
    value: function _mimeTypeFilter(item) {
      return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_fileSizeFilter",
    value: function _fileSizeFilter(item) {
      return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_fileTypeFilter",
    value: function _fileTypeFilter(item) {
      return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_onErrorItem",
    value: function _onErrorItem(item, response, status, headers) {
      item._onError(response, status, headers);

      this.onErrorItem(item, response, status, headers);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_onCompleteItem",
    value: function _onCompleteItem(item, response, status, headers) {
      item._onComplete(response, status, headers);

      this.onCompleteItem(item, response, status, headers);
      /** @type {?} */

      var nextItem = this.getReadyItems()[0];
      this.isUploading = false;

      if (nextItem) {
        nextItem.upload();
        return;
      }

      this.onCompleteAll();
      this.progress = this._getTotalProgress();

      this._render();
    }
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */

  }, {
    key: "_headersGetter",
    value: function _headersGetter(parsedHeaders) {
      return (
        /**
        * @param {?} name
        * @return {?}
        */
        function (name) {
          if (name) {
            return parsedHeaders[name.toLowerCase()] || void 0;
          }

          return parsedHeaders;
        }
      );
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_xhrTransport",
    value: function _xhrTransport(item) {
      var _this2 = this;

      /** @type {?} */
      var that = this;
      /** @type {?} */

      var xhr = item._xhr = new XMLHttpRequest();
      /** @type {?} */

      var sendable;

      this._onBeforeUploadItem(item);

      if (typeof item._file.size !== 'number') {
        throw new TypeError('The file specified is no longer valid');
      }

      if (!this.options.disableMultipart) {
        sendable = new FormData();

        this._onBuildItemForm(item, sendable);
        /** @type {?} */


        var appendFile =
        /**
        * @return {?}
        */
        function appendFile() {
          return sendable.append(item.alias, item._file, item.file.name);
        };

        if (!this.options.parametersBeforeFiles) {
          appendFile();
        } // For AWS, Additional Parameters must come BEFORE Files


        if (this.options.additionalParameter !== undefined) {
          Object.keys(this.options.additionalParameter).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var paramVal = _this2.options.additionalParameter[key]; // Allow an additional parameter to include the filename

            if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
              paramVal = paramVal.replace('{{file_name}}', item.file.name);
            }

            sendable.append(key, paramVal);
          });
        }

        if (this.options.parametersBeforeFiles) {
          appendFile();
        }
      } else {
        sendable = this.options.formatDataFunction(item);
      }

      xhr.upload.onprogress =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

        _this2._onProgressItem(item, progress);
      };

      xhr.onload =
      /**
      * @return {?}
      */
      function () {
        /** @type {?} */
        var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
        /** @type {?} */


        var response = _this2._transformResponse(xhr.response, headers);
        /** @type {?} */


        var gist = _this2._isSuccessCode(xhr.status) ? 'Success' : 'Error';
        /** @type {?} */

        var method = '_on' + gist + 'Item';

        _this2[method](item, response, xhr.status, headers);

        _this2._onCompleteItem(item, response, xhr.status, headers);
      };

      xhr.onerror =
      /**
      * @return {?}
      */
      function () {
        /** @type {?} */
        var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
        /** @type {?} */


        var response = _this2._transformResponse(xhr.response, headers);

        _this2._onErrorItem(item, response, xhr.status, headers);

        _this2._onCompleteItem(item, response, xhr.status, headers);
      };

      xhr.onabort =
      /**
      * @return {?}
      */
      function () {
        /** @type {?} */
        var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
        /** @type {?} */


        var response = _this2._transformResponse(xhr.response, headers);

        _this2._onCancelItem(item, response, xhr.status, headers);

        _this2._onCompleteItem(item, response, xhr.status, headers);
      };

      xhr.open(item.method, item.url, true);
      xhr.withCredentials = item.withCredentials;

      if (this.options.headers) {
        var _iterator2 = (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.default)(this.options.headers),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var header = _step2.value;
            xhr.setRequestHeader(header.name, header.value);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      if (item.headers.length) {
        var _iterator3 = (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.default)(item.headers),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _header = _step3.value;
            xhr.setRequestHeader(_header.name, _header.value);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      if (this.authToken) {
        xhr.setRequestHeader(this.authTokenHeader, this.authToken);
      }

      xhr.onreadystatechange =
      /**
      * @return {?}
      */
      function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          that.response.emit(xhr.responseText);
        }
      };

      if (this.options.formatDataFunctionIsAsync) {
        sendable.then(
        /**
        * @param {?} result
        * @return {?}
        */
        function (result) {
          return xhr.send(JSON.stringify(result));
        });
      } else {
        xhr.send(sendable);
      }

      this._render();
    }
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */

  }, {
    key: "_getTotalProgress",
    value: function _getTotalProgress() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.options.removeAfterUpload) {
        return value;
      }
      /** @type {?} */


      var notUploaded = this.getNotUploadedItems().length;
      /** @type {?} */

      var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
      /** @type {?} */

      var ratio = 100 / this.queue.length;
      /** @type {?} */

      var current = value * ratio / 100;
      return Math.round(uploaded * ratio + current);
    }
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */

  }, {
    key: "_getFilters",
    value: function _getFilters(filters) {
      if (!filters) {
        return this.options.filters;
      }

      if (Array.isArray(filters)) {
        return filters;
      }

      if (typeof filters === 'string') {
        /** @type {?} */
        var names = filters.match(/[^\s,]+/g);
        return this.options.filters.filter(
        /**
        * @param {?} filter
        * @return {?}
        */
        function (filter) {
          return names.indexOf(filter.name) !== -1;
        });
      }

      return this.options.filters;
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "_render",
    value: function _render() {
      return void 0;
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "_queueLimitFilter",
    value: function _queueLimitFilter() {
      return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "_isValidFile",
    value: function _isValidFile(file, filters, options) {
      var _this3 = this;

      this._failFilterIndex = -1;
      return !filters.length ? true : filters.every(
      /**
      * @param {?} filter
      * @return {?}
      */
      function (filter) {
        _this3._failFilterIndex++;
        return filter.fn.call(_this3, file, options);
      });
    }
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */

  }, {
    key: "_isSuccessCode",
    value: function _isSuccessCode(status) {
      return status >= 200 && status < 300 || status === 304;
    }
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_transformResponse",
    value: function _transformResponse(response, headers) {
      return response;
    }
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_parseHeaders",
    value: function _parseHeaders(headers) {
      /** @type {?} */
      var parsed = {};
      /** @type {?} */

      var key;
      /** @type {?} */

      var val;
      /** @type {?} */

      var i;

      if (!headers) {
        return parsed;
      }

      headers.split('\n').map(
      /**
      * @param {?} line
      * @return {?}
      */
      function (line) {
        i = line.indexOf(':');
        key = line.slice(0, i).trim().toLowerCase();
        val = line.slice(i + 1).trim();

        if (key) {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      });
      return parsed;
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "_onWhenAddingFileFailed",
    value: function _onWhenAddingFileFailed(item, filter, options) {
      this.onWhenAddingFileFailed(item, filter, options);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_onAfterAddingFile",
    value: function _onAfterAddingFile(item) {
      this.onAfterAddingFile(item);
    }
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */

  }, {
    key: "_onAfterAddingAll",
    value: function _onAfterAddingAll(items) {
      this.onAfterAddingAll(items);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_onBeforeUploadItem",
    value: function _onBeforeUploadItem(item) {
      item._onBeforeUpload();

      this.onBeforeUploadItem(item);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */

  }, {
    key: "_onBuildItemForm",
    value: function _onBuildItemForm(item, form) {
      item._onBuildForm(form);

      this.onBuildItemForm(item, form);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */

  }, {
    key: "_onProgressItem",
    value: function _onProgressItem(item, progress) {
      /** @type {?} */
      var total = this._getTotalProgress(progress);

      this.progress = total;

      item._onProgress(progress);

      this.onProgressItem(item, progress);
      this.onProgressAll(total);

      this._render();
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_onSuccessItem",
    value: function _onSuccessItem(item, response, status, headers) {
      item._onSuccess(response, status, headers);

      this.onSuccessItem(item, response, status, headers);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */

  }, {
    key: "_onCancelItem",
    value: function _onCancelItem(item, response, status, headers) {
      item._onCancel(response, status, headers);

      this.onCancelItem(item, response, status, headers);
    }
  }]);

  return FileUploader;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var FileSelectDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   */
  function FileSelectDirective(element) {
    (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FileSelectDirective);

    this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.element = element;
  }
  /**
   * @return {?}
   */


  (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(FileSelectDirective, [{
    key: "getOptions",
    value: function getOptions() {
      return this.uploader.options;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getFilters",
    value: function getFilters() {
      return {};
    }
    /**
     * @return {?}
     */

  }, {
    key: "isEmptyAfterSelection",
    value: function isEmptyAfterSelection() {
      return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */

  }, {
    key: "onChange",
    value: function onChange() {
      /** @type {?} */
      var files = this.element.nativeElement.files;
      /** @type {?} */

      var options = this.getOptions();
      /** @type {?} */

      var filters = this.getFilters();
      this.uploader.addToQueue(files, options, filters);
      this.onFileSelected.emit(files);

      if (this.isEmptyAfterSelection()) {
        this.element.nativeElement.value = '';
      }
    }
  }]);

  return FileSelectDirective;
}();

FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) {
  return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};

FileSelectDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: FileSelectDirective,
  selectors: [["", "ng2FileSelect", ""]],
  hostBindings: function FileSelectDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FileSelectDirective_change_HostBindingHandler() {
        return ctx.onChange();
      });
    }
  },
  inputs: {
    uploader: "uploader"
  },
  outputs: {
    onFileSelected: "onFileSelected"
  }
});
/** @nocollapse */

FileSelectDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }];
};

FileSelectDirective.propDecorators = {
  uploader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  onFileSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['change']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FileSelectDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[ng2FileSelect]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }];
  }, {
    onFileSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],

    /**
     * @return {?}
     */
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['change']
    }],
    uploader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var FileDropDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   */
  function FileDropDirective(element) {
    (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FileDropDirective);

    this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.element = element;
  }
  /**
   * @return {?}
   */


  (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(FileDropDirective, [{
    key: "getOptions",
    value: function getOptions() {
      return this.uploader.options;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getFilters",
    value: function getFilters() {
      return {};
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onDrop",
    value: function onDrop(event) {
      /** @type {?} */
      var transfer = this._getTransfer(event);

      if (!transfer) {
        return;
      }
      /** @type {?} */


      var options = this.getOptions();
      /** @type {?} */

      var filters = this.getFilters();

      this._preventAndStop(event);

      this.uploader.addToQueue(transfer.files, options, filters);
      this.fileOver.emit(false);
      this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      /** @type {?} */
      var transfer = this._getTransfer(event);

      if (!this._haveFiles(transfer.types)) {
        return;
      }

      transfer.dropEffect = 'copy';

      this._preventAndStop(event);

      this.fileOver.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      if (this.element) {
        if (event.currentTarget === this.element[0]) {
          return;
        }
      }

      this._preventAndStop(event);

      this.fileOver.emit(false);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "_getTransfer",
    value: function _getTransfer(event) {
      return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "_preventAndStop",
    value: function _preventAndStop(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */

  }, {
    key: "_haveFiles",
    value: function _haveFiles(types) {
      if (!types) {
        return false;
      }

      if (types.indexOf) {
        return types.indexOf('Files') !== -1;
      } else if (types.contains) {
        return types.contains('Files');
      } else {
        return false;
      }
    }
  }]);

  return FileDropDirective;
}();

FileDropDirective.ɵfac = function FileDropDirective_Factory(t) {
  return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};

FileDropDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: FileDropDirective,
  selectors: [["", "ng2FileDrop", ""]],
  hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
        return ctx.onDragOver($event);
      })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
        return ctx.onDragLeave($event);
      });
    }
  },
  inputs: {
    uploader: "uploader"
  },
  outputs: {
    fileOver: "fileOver",
    onFileDrop: "onFileDrop"
  }
});
/** @nocollapse */

FileDropDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }];
};

FileDropDirective.propDecorators = {
  uploader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  fileOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onFileDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['drop', ['$event']]
  }],
  onDragOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['dragover', ['$event']]
  }],
  onDragLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['dragleave', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FileDropDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[ng2FileDrop]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }];
  }, {
    fileOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onFileDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['drop', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['dragover', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['dragleave', ['$event']]
    }],
    uploader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var FileUploadModule = function FileUploadModule() {
  (0,C_Users_SAAD_Desktop_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FileUploadModule);
};

FileUploadModule.ɵfac = function FileUploadModule_Factory(t) {
  return new (t || FileUploadModule)();
};

FileUploadModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: FileUploadModule
});
FileUploadModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FileUploadModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [FileDropDirective, FileSelectDirective],
      exports: [FileDropDirective, FileSelectDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FileUploadModule, {
    declarations: function declarations() {
      return [FileDropDirective, FileSelectDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule];
    },
    exports: function exports() {
      return [FileDropDirective, FileSelectDirective];
    }
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


 //# sourceMappingURL=ng2-file-upload.js.map

/***/ }),

/***/ 58709:
/*!**************************************************************!*\
  !*** ./src/app/main/authentication/models/create-userDTO.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserDTO": function() { return /* binding */ CreateUserDTO; }
/* harmony export */ });
var CreateUserDTO = /** @class */ (function () {
    function CreateUserDTO(username, password, firstName, lastName, email, avatar, roles) {
        this.roles = [];
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.avatar = avatar;
        this.roles = roles;
    }
    return CreateUserDTO;
}());



/***/ }),

/***/ 57904:
/*!*********************************************************!*\
  !*** ./src/app/main/authentication/models/type-role.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeRole": function() { return /* binding */ TypeRole; }
/* harmony export */ });
var TypeRole;
(function (TypeRole) {
    TypeRole["ADMINISTARTION"] = "ADMINISTARTION";
    TypeRole["CHANTIER"] = "CHANTIER";
})(TypeRole || (TypeRole = {}));


/***/ }),

/***/ 62868:
/*!********************************************************************!*\
  !*** ./src/app/main/authentication/models/update-infos-userDTO.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateInfosUserDTO": function() { return /* binding */ UpdateInfosUserDTO; }
/* harmony export */ });
var UpdateInfosUserDTO = /** @class */ (function () {
    function UpdateInfosUserDTO(username, avatar, firstName, lastName, email, roles, accountNonLocked, accountNonExpired, credentialsNonExpired) {
        this.roles = [];
        this.username = username;
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roles = roles;
        this.accountNonLocked = accountNonLocked;
        this.accountNonExpired = accountNonExpired;
        this.credentialsNonExpired = credentialsNonExpired;
    }
    return UpdateInfosUserDTO;
}());



/***/ }),

/***/ 14122:
/*!**************************************************************************!*\
  !*** ./src/app/main/authentication/models/update-pwd-user-requestDTO.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePwdUserRequestDTO": function() { return /* binding */ UpdatePwdUserRequestDTO; }
/* harmony export */ });
var UpdatePwdUserRequestDTO = /** @class */ (function () {
    function UpdatePwdUserRequestDTO(username, oldPassword, newPassword) {
        this.username = username;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }
    return UpdatePwdUserRequestDTO;
}());



/***/ }),

/***/ 78474:
/*!***********************************************************************************!*\
  !*** ./src/app/main/projets/users/account-settings/account-settings.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsComponent": function() { return /* binding */ AccountSettingsComponent; }
/* harmony export */ });
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-file-upload */ 76321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _authentication_models_app_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../authentication/models/app-role */ 71233);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _authentication_models_type_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/models/type-role */ 57904);
/* harmony import */ var _authentication_models_update_infos_userDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../authentication/models/update-infos-userDTO */ 62868);
/* harmony import */ var _authentication_models_update_pwd_user_requestDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authentication/models/update-pwd-user-requestDTO */ 14122);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _role_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../role-list.service */ 2764);
/* harmony import */ var _account_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-settings.service */ 60559);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../authentication/auth.service */ 7918);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);





















function AccountSettingsComponent_ng_template_13_span_23_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Le Pr\u00E9nom est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_13_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccountSettingsComponent_ng_template_13_span_23_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r7.errors.required);
} }
function AccountSettingsComponent_ng_template_13_span_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Le Nom est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_13_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccountSettingsComponent_ng_template_13_span_30_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r9.errors.required);
} }
function AccountSettingsComponent_ng_template_13_span_37_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Le Nom d'utilisateur est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_13_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccountSettingsComponent_ng_template_13_span_37_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r11.errors.required);
} }
function AccountSettingsComponent_ng_template_13_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " L'Email doit etre valide! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_13_div_45_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccountSettingsComponent_ng_template_13_div_45_ng_template_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24); _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](22); ctx_r23.onAddRole(_r3); _r20.blur(); return _r20.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Ajouter un Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_13_div_45_span_9_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Vous devez choisir au moins un role! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_13_div_45_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccountSettingsComponent_ng_template_13_div_45_span_9_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r22.currentUser.appRoles && ctx_r22.currentUser.appRoles.length == 0);
} }
var _c0 = function () { return { standalone: true }; };
function AccountSettingsComponent_ng_template_13_div_45_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "fieldset", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "LES ROLES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ng-select", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_ng_template_13_div_45_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r26.currentUser.appRoles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, AccountSettingsComponent_ng_template_13_div_45_ng_template_8_Template, 4, 0, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, AccountSettingsComponent_ng_template_13_div_45_span_9_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](15);
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", ctx_r15.currentUser.appRoles && ctx_r15.currentUser.appRoles.length == 0 && _r6.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r15.roles)("multiple", true)("closeOnSelect", true)("searchable", true)("ngModel", ctx_r15.currentUser.appRoles)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r6.submitted && ctx_r15.currentUser.appRoles && ctx_r15.currentUser.appRoles.length == 0);
} }
var _c1 = function (a1, a2) { return { "btn btn-sm mb-75 mr-75": true, "btn-primary": a1, "btn-secondary": a2 }; };
var _c2 = function (a1, a2) { return { "btn mr-1 mt-1": true, "btn-primary": a1, "btn-secondary": a2 }; };
var _c3 = function () { return [""]; };
function AccountSettingsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccountSettingsComponent_ng_template_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9); return _r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function AccountSettingsComponent_ng_template_13_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r30.uploadImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Images: JPG, GIF or PNG. Taille max 800kB");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "form", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function AccountSettingsComponent_ng_template_13_Template_form_ngSubmit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](15); return _r6.form.valid; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Pr\u00E9nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_ng_template_13_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r32.currentUser.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, AccountSettingsComponent_ng_template_13_span_23_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_ng_template_13_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r33.currentUser.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, AccountSettingsComponent_ng_template_13_span_30_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "Nom d'utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_ng_template_13_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r34.currentUser.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, AccountSettingsComponent_ng_template_13_span_37_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_ng_template_13_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r35.currentUser.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, AccountSettingsComponent_ng_template_13_span_44_Template, 3, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, AccountSettingsComponent_ng_template_13_div_45_Template, 10, 10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccountSettingsComponent_ng_template_13_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r36.updateInfosGenerales(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](15);
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](22);
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](29);
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](36);
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](43);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.avatarImage, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.disableUploadImage)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](23, _c1, !ctx_r1.disableUploadImage, ctx_r1.disableUploadImage));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r7.valid && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r1.currentUser.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r9.valid && _r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r1.currentUser.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r9.valid && _r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r11.valid && _r11.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r1.currentUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r11.valid && _r11.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r13.valid && _r13.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r1.currentUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r13.valid && _r13.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !_r6.form.valid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](26, _c2, _r6.form.valid, !_r6.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](29, _c3));
} }
function AccountSettingsComponent_ng_template_19_span_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " L'ancien mot de passe est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_19_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccountSettingsComponent_ng_template_19_span_15_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r38.errors.required);
} }
function AccountSettingsComponent_ng_template_19_div_27_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Mot de passe obligatoire. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_19_div_27_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Doit contenir au moins un chiffre et une lettre majuscule et minuscule, et au moins 6 caract\u00E8res ou plus. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_19_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccountSettingsComponent_ng_template_19_div_27_small_1_Template, 2, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, AccountSettingsComponent_ng_template_19_div_27_small_2_Template, 2, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r40.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r40.errors.pattern);
} }
function AccountSettingsComponent_ng_template_19_div_38_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Vous devez Confirmer le mot de passe. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_19_div_38_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Le mot de passe et la confirmation du mot de passe ne correspondent pas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_19_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccountSettingsComponent_ng_template_19_div_38_small_1_Template, 2, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, AccountSettingsComponent_ng_template_19_div_38_small_2_Template, 2, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r42.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r42.errors.pattern);
} }
var _c4 = function (a0, a1) { return { "icon-eye-off": a0, "icon-eye": a1 }; };
function AccountSettingsComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "form", 27, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function AccountSettingsComponent_ng_template_19_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50); var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3); return _r37.form.valid; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Ancien mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "input", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccountSettingsComponent_ng_template_19_Template_i_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50); var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r51.togglePasswordTextTypeOld(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, AccountSettingsComponent_ng_template_19_span_15_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "input", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccountSettingsComponent_ng_template_19_Template_i_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r52.togglePasswordTextTypeNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, AccountSettingsComponent_ng_template_19_div_27_Template, 3, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Re-taper le nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "input", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccountSettingsComponent_ng_template_19_Template_i_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50); var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r53.togglePasswordTextTypeNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, AccountSettingsComponent_ng_template_19_div_38_Template, 3, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccountSettingsComponent_ng_template_19_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50); var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r54.updatePwd(_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](23);
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](34);
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r38.valid && _r38.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx_r2.passwordTextTypeOld ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](19, _c4, ctx_r2.passwordTextTypeOld, !ctx_r2.passwordTextTypeOld));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r38.valid && _r38.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", _r40.invalid && _r40.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx_r2.passwordTextTypeNew ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](22, _c4, ctx_r2.passwordTextTypeNew, !ctx_r2.passwordTextTypeNew));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r40.invalid && _r40.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", _r42.invalid && _r42.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("pattern", _r40.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx_r2.passwordTextTypeNew ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](25, _c4, ctx_r2.passwordTextTypeNew, !ctx_r2.passwordTextTypeNew));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r42.invalid && _r42.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !_r37.form.valid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](28, _c2, _r37.form.valid, !_r37.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](31, _c3));
} }
function AccountSettingsComponent_ng_template_21_span_11_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Le nom du role est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_ng_template_21_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccountSettingsComponent_ng_template_21_span_11_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r56.errors && _r56.errors.required);
} }
function AccountSettingsComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h4", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Ajouter un role utilisateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Intitule du Role : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "form", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function AccountSettingsComponent_ng_template_21_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r61); var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7); return _r56.form.valid; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "input", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_ng_template_21_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r61); var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r62.roleName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, AccountSettingsComponent_ng_template_21_span_11_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccountSettingsComponent_ng_template_21_Template_button_click_13_listener() { var modal_r55 = ctx.$implicit; return modal_r55.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccountSettingsComponent_ng_template_21_Template_button_click_15_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r61); var modal_r55 = restoredCtx.$implicit; var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r64.onSaveNewRole(modal_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
    var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10);
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r57.valid && _r56.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r4.roleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r56.submitted && _r56.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMapInterpolate1"]("btn ", ctx_r4.roleName ? "btn-success" : "btn-secondary", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r4.roleName);
} }
var URL = 'Users/Mac/Downloads/';
var AccountSettingsComponent = /** @class */ (function () {
    //public rolesSelected: AppRole[] = [];
    /**
     * Constructor
     *
     * @param roleListService
     * @param {AccountSettingsService} _accountSettingsService
     * @param _router
     * @param modalService
     * @param authService
     */
    function AccountSettingsComponent(roleListService, _accountSettingsService, _router, modalService, authService) {
        var _this = this;
        this.roleListService = roleListService;
        this._accountSettingsService = _accountSettingsService;
        this._router = _router;
        this.modalService = modalService;
        this.authService = authService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__.FileUploader({
            url: URL,
            isHTML5: true
        });
        this.birthDateOptions = {
            altInput: true
        };
        this.passwordTextTypeOld = false;
        this.passwordTextTypeNew = false;
        this.passwordTextTypeRetype = false;
        this.avatarImage = "/Users/mac/Apps/sr-manager/RESSOURCES/data/directory/images/6000.png";
        this.disableUploadImage = true;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.currentUserSubscription = this.authService.currentUserSubject.subscribe(function (data) {
            _this.currentUser = data;
            // this.avatarImage =  this.currentUser? 'assets/images/portrait/small/'+this.currentUser?.avatar:'assets/images/portrait/small/unknown.png';
        });
        authService.loadCurrentUser();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle Password Text Type Old
     */
    AccountSettingsComponent.prototype.togglePasswordTextTypeOld = function () {
        this.passwordTextTypeOld = !this.passwordTextTypeOld;
    };
    /**
     * Toggle Password Text Type New
     */
    AccountSettingsComponent.prototype.togglePasswordTextTypeNew = function () {
        this.passwordTextTypeNew = !this.passwordTextTypeNew;
    };
    /**
     * Toggle Password Text Type Retype
     */
    AccountSettingsComponent.prototype.togglePasswordTextTypeRetype = function () {
        this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
    };
    /**
     * Upload Image
     *
     * @param event
     */
    AccountSettingsComponent.prototype.uploadImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            console.log(event.target.files[0]);
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.avatarImage = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    AccountSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleListService.onRolessChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this._unsubscribeAll)).subscribe(function (response) {
            _this.roles = response;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Paramètres du compte utilisateur',
            actionButton: false,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Paramètres du compte',
                        isLink: false
                    }
                ]
            }
        };
    };
    /**
     * On destroy
     */
    AccountSettingsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    AccountSettingsComponent.prototype.onAddRole = function (modal) {
        this.roleName = "";
        this.modalService.open(modal, {
            centered: true,
            backdrop: false,
            size: 'sm'
        });
    };
    AccountSettingsComponent.prototype.onSaveNewRole = function (modal) {
        var _this = this;
        var appRole = new _authentication_models_app_role__WEBPACK_IMPORTED_MODULE_0__.AppRole(this.roleName, _authentication_models_type_role__WEBPACK_IMPORTED_MODULE_1__.TypeRole.ADMINISTARTION);
        this.roleListService.createRole(appRole).subscribe(function (data) {
            _this.roleListService.getAppRoles();
            modal.close('Accept click');
        });
    };
    AccountSettingsComponent.prototype.updateInfosGenerales = function () {
        var _this = this;
        var roles = [];
        this.currentUser.appRoles.forEach(function (appRole) {
            roles.push(appRole.roleName);
        });
        var updateInfoUserDto = new _authentication_models_update_infos_userDTO__WEBPACK_IMPORTED_MODULE_2__.UpdateInfosUserDTO(this.currentUser.username, this.currentUser.avatar, this.currentUser.firstName, this.currentUser.lastName, this.currentUser.email, roles, this.currentUser.accountNonLocked, this.currentUser.accountNonExpired, this.currentUser.credentialsNonExpired);
        this._accountSettingsService.updateInfoUser(updateInfoUserDto).subscribe(function (data) {
            _this.showSwal('basic', 'success', 'Good job!', 'Infos utilisateur modifiées avec succés', 'btn btn-primary');
        });
    };
    AccountSettingsComponent.prototype.updatePwd = function (tDPassWordForm) {
        var _this = this;
        console.log(tDPassWordForm.value);
        var updatePwdUserRequestDTO = new _authentication_models_update_pwd_user_requestDTO__WEBPACK_IMPORTED_MODULE_3__.UpdatePwdUserRequestDTO(this.currentUser.username, tDPassWordForm.value.txtOldPwd, tDPassWordForm.value.txtNewPwd);
        this._accountSettingsService.updatePwdUser(updatePwdUserRequestDTO).subscribe(function (data) {
            if (data['result']) {
                _this.showSwal('basic', 'success', 'Good job!', data['message'], 'btn btn-primary');
                _this.authService.logout();
            }
            else {
                _this.showSwal('basic', 'error', 'Erreur!', data['message'], 'btn btn-danger');
            }
            //this._router.navigate(['/pages/authentication/login-v2']);
        });
    };
    AccountSettingsComponent.prototype.showSwal = function (type, icone, title, message, btn) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            icon: icone,
            title: title,
            titleText: message,
            customClass: {
                confirmButton: btn,
            }
        });
    };
    AccountSettingsComponent.ɵfac = function AccountSettingsComponent_Factory(t) { return new (t || AccountSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_role_list_service__WEBPACK_IMPORTED_MODULE_5__.RoleListService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_account_settings_service__WEBPACK_IMPORTED_MODULE_6__.AccountSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService)); };
    AccountSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AccountSettingsComponent, selectors: [["app-account-settings"]], decls: 23, vars: 2, consts: [[1, "content-wrapper", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "page-account-settings"], [1, "row", "nav-vertical", "nav-vertical-over", "d-flex"], [1, "col-md-3", "mb-2", "mb-md-0"], ["ngbNav", "", 1, "nav", "nav-pills", "flex-column", "nav-left"], ["navVertical", "ngbNav"], ["ngbNavItem", "", 1, "nav-item"], ["ngbNavLink", "", "id", "account-pill-general", "data-toggle", "pill", "href", "#account-vertical-general", "aria-expanded", "true", 1, "nav-link", "d-flex", "py-75"], ["data-feather", "user", 1, "font-medium-3", "mr-1"], [1, "font-weight-bold"], ["ngbNavContent", ""], ["ngbNavLink", "", "id", "account-pill-password", "data-toggle", "pill", "href", "#account-vertical-password", "aria-expanded", "false", 1, "nav-link", "d-flex", "py-75"], ["data-feather", "lock", 1, "font-medium-3", "mr-1"], [1, "col-12", "col-md-9", 3, "ngbNavOutlet"], ["modalNewRole", ""], [1, "card"], [1, "card-body"], [1, "media"], ["href", "javascript:void(0);", 1, "mr-25"], ["alt", "profile image", "height", "76", "width", "80", 1, "rounded", "mr-50", 3, "src"], [1, "media-body", "mt-75", "ml-1"], ["for", "account-upload", "rippleEffect", "", 1, "btn", "btn-sm", "btn-primary", "mb-75", "mr-75", 3, "disabled", "ngClass", "click"], ["type", "file", "id", "account-upload", "hidden", "", "accept", "image/*", 3, "change"], ["file", ""], ["disabled", "", "rippleEffect", "", 1, "btn", "btn-sm", "btn-outline-secondary", "mb-75"], [1, "form-horizontal", 3, "ngSubmit"], ["TDInfoGeneraleForm", "ngForm"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "TDFirstName", 1, "form-control-label"], ["required", "", "id", "TDFirstName", "name", "TDFirstName", "type", "text", "placeholder", "Pr\u00E9nom", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDFirstNameRef", "ngModel"], ["class", "invalid-form", 4, "ngIf"], ["for", "TDLastName", 1, "form-control-label"], ["required", "", "id", "TDLastName", "name", "TDLastName", "type", "text", "placeholder", "Pr\u00E9nom", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDLastNameRef", "ngModel"], ["for", "TDUserName", 1, "form-control-label"], ["disabled", "", "required", "", "id", "TDUserName", "name", "TDUserName", "type", "text", "placeholder", "Nom D'utilisateur", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDUserNameRef", "ngModel"], ["for", "TDMultiRuleEmail", 1, "form-control-label"], ["required", "", "email", "", "id", "TDMultiRuleEmail", "name", "TDMultiRuleEmail", "type", "text", "placeholder", "Votre Email", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDMultiRuleEmailRef", "ngModel"], ["class", "row", 4, "ngIf"], ["type", "submit", "rippleEffect", "", 3, "disabled", "ngClass", "click"], ["type", "reset", "rippleEffect", "", 1, "btn", "btn-outline-secondary", "mt-1", 3, "routerLink"], [1, "invalid-form"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-text", "text-danger"], [1, "col-md-6", "col-6"], ["bindLabel", "roleName", "placeholder", "S\u00E9l\u00E9ctionner au moins un Roles", 3, "items", "multiple", "closeOnSelect", "searchable", "ngModel", "ngModelOptions", "ngModelChange"], ["TDSubContractorRef", "ngModel", "select", ""], ["ng-header-tmp", ""], [1, "add-new-customer", "btn", "btn-flat-success", "cursor-pointer", "rounded-0", "text-left", "p-50", "w-100", 3, "click"], ["data-feather", "plus"], [1, "align-middle", "ml-25"], ["TDPassWordForm", "ngForm"], [1, "col-12", "col-sm-6"], ["for", "txtOldPwd"], [1, "input-group", "form-password-toggle", "input-group-merge"], ["ngModel", "", "required", "", "id", "txtOldPwd", "name", "txtOldPwd", "placeholder", "Ancien mot de passe", 1, "form-control", "input-md", 3, "type"], ["txtOldPwdRef", "ngModel"], [1, "input-group-append"], [1, "input-group-text", "cursor-pointer"], [1, "feather", "font-small-4", 3, "ngClass", "click"], ["for", "txtNewPwd", 1, "form-control-label"], ["name", "txtNewPwd", "placeholder", "Nouveau mot de passe", "ngModel", "", "required", "", "minlength", "6", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}", "id", "txtNewPwd", 1, "form-control", 3, "type"], ["txtNewPwdRef", "ngModel"], ["for", "txtConfPwd", 1, "form-control-label"], ["placeholder", "Re-taper le nouveau mot de passe", "minlength", "6", "name", "txtConfPwd", "required", "", "ngModel", "", "id", "txtConfPwd", 1, "form-control", 3, "type", "pattern"], ["txtConfPwdRef", "ngModel"], [4, "ngIf"], [1, "modal-header"], ["id", "idmodalNewCity", 1, "modal-title", "text-bold", "text-primary"], ["tabindex", "0", "ngbAutofocus", "", 1, "modal-body"], [1, "text-bold", "text-success"], [3, "ngSubmit"], ["newRoleForm", "ngForm"], ["id", "roleName", "required", "", "name", "roleName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["txtRoleName", "ngModel"], [1, "modal-footer"], ["type", "button", "rippleEffect", "", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", "rippleEffect", "", 3, "disabled", "click"]], template: function AccountSettingsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-content-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ul", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "G\u00E9n\u00E9ral");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, AccountSettingsComponent_ng_template_13_Template, 50, 30, "ng-template", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Changer le mot de passe");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, AccountSettingsComponent_ng_template_19_Template, 43, 32, "ng-template", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, AccountSettingsComponent_ng_template_21_Template, 17, 8, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbNavOutlet", _r0);
        } }, directives: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_8__.ContentHeaderComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavLink, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_9__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavOutlet, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_10__.RippleEffectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.EmailValidator, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["ɵj"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.PatternValidator], styles: [".ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=\"rtl\"] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#D0021B}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=\"rtl\"] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=\"rtl\"] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=\"rtl\"] .ng-dropdown-panel{direction:rtl;text-align:right}.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;box-sizing:border-box;touch-action:manipulation;background:#fff;box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9)}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{/*\n      /*rtl:begin:ignore*/left:0/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*//*\n      /*rtl:end:ignore*/.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{/*\n      /*rtl:begin:ignore*/right:0/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*//*\n      /*rtl:end:ignore*/.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;transform:translate3d(0,0,0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:baseline;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:baseline;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:flex;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:flex;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:flex;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;box-sizing:border-box;display:inline-block;display:flex;flex-wrap:wrap;-ms-flex-wrap:wrap;justify-content:space-around;transform:translate3d(0,0,0);opacity:1}.dayContainer + .dayContainer{box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:flex;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;box-sizing:border-box;overflow:hidden;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:translate3d(0,0,0)}}.bg-white {\n  background-color: #ffffff !important;\n}.bg-white .card-header,\n.bg-white .card-footer {\n  background-color: transparent;\n}.border-white {\n  border: 1px solid #ffffff !important;\n}.border-top-white {\n  border-top: 1px solid #ffffff;\n}.border-bottom-white {\n  border-bottom: 1px solid #ffffff;\n}.border-left-white {\n  border-left: 1px solid #ffffff;\n}.border-right-white {\n  border-right: 1px solid #ffffff;\n}.bg-white.badge-glow,\n.border-white.badge-glow,\n.badge-white.badge-glow {\n  box-shadow: 0px 0px 10px #ffffff;\n}.overlay-white {\n  background: #ffffff;\n  /* The Fallback */\n  background: rgba(255, 255, 255, 0.6);\n}input:focus ~ .bg-white {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ffffff !important;\n}.bg-black {\n  background-color: #000000 !important;\n}.bg-black .card-header,\n.bg-black .card-footer {\n  background-color: transparent;\n}.border-black {\n  border: 1px solid #000000 !important;\n}.border-top-black {\n  border-top: 1px solid #000000;\n}.border-bottom-black {\n  border-bottom: 1px solid #000000;\n}.border-left-black {\n  border-left: 1px solid #000000;\n}.border-right-black {\n  border-right: 1px solid #000000;\n}.bg-black.badge-glow,\n.border-black.badge-glow,\n.badge-black.badge-glow {\n  box-shadow: 0px 0px 10px #000000;\n}.overlay-black {\n  background: #000000;\n  /* The Fallback */\n  background: rgba(0, 0, 0, 0.6);\n}input:focus ~ .bg-black {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #000000 !important;\n}.bg-dark {\n  background-color: #4b4b4b !important;\n}.bg-dark .card-header,\n.bg-dark .card-footer {\n  background-color: transparent;\n}.alert-dark {\n  background: rgba(75, 75, 75, 0.12) !important;\n  color: #4b4b4b !important;\n}.alert-dark .alert-heading {\n  box-shadow: rgba(75, 75, 75, 0.4) 0px 6px 15px -7px;\n}.alert-dark .alert-link {\n  color: #3e3e3e !important;\n}.alert-dark .close {\n  color: #4b4b4b !important;\n}.border-dark {\n  border: 1px solid #4b4b4b !important;\n}.border-top-dark {\n  border-top: 1px solid #4b4b4b;\n}.border-bottom-dark {\n  border-bottom: 1px solid #4b4b4b;\n}.border-left-dark {\n  border-left: 1px solid #4b4b4b;\n}.border-right-dark {\n  border-right: 1px solid #4b4b4b;\n}.bg-dark.badge-glow,\n.border-dark.badge-glow,\n.badge-dark.badge-glow {\n  box-shadow: 0px 0px 10px #4b4b4b;\n}.badge.badge-light-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n  color: #4b4b4b !important;\n}.overlay-dark {\n  background: #4b4b4b;\n  /* The Fallback */\n  background: rgba(75, 75, 75, 0.6);\n}.btn-dark {\n  border-color: #4b4b4b !important;\n  background-color: #4b4b4b !important;\n  color: #fff !important;\n}.btn-dark:focus, .btn-dark:active, .btn-dark.active {\n  color: #fff;\n  background-color: #343434 !important;\n}.btn-dark:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #4b4b4b;\n}.btn-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-dark {\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-flat-dark:hover {\n  color: #4b4b4b;\n}.btn-flat-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.12);\n}.btn-flat-dark:active, .btn-flat-dark.active, .btn-flat-dark:focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-flat-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-dark {\n  background-color: #4b4b4b;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-dark:hover:not(.disabled):not(:disabled) {\n  background-color: #626262;\n}.btn-relief-dark:active, .btn-relief-dark.active, .btn-relief-dark:focus {\n  background-color: #343434;\n}.btn-relief-dark:hover {\n  color: #fff;\n}.btn-relief-dark:active, .btn-relief-dark.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-dark {\n  border: 1px solid #4b4b4b !important;\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-outline-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.04);\n  color: #4b4b4b;\n}.btn-outline-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .btn-outline-dark:not(:disabled):not(.disabled):focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-dark.dropdown-toggle {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.waves-effect .waves-ripple,\n.btn-flat-dark.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(75, 75, 75, 0.2) 0, rgba(75, 75, 75, 0.3) 40%, rgba(75, 75, 75, 0.4) 50%, rgba(75, 75, 75, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-dark {\n  background-color: #4b4b4b;\n}.modal.modal-dark .modal-header .modal-title {\n  color: #4b4b4b;\n}.modal.modal-dark .modal-header .close {\n  color: #4b4b4b !important;\n}.progress-bar-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n}.progress-bar-dark .progress-bar {\n  background-color: #4b4b4b;\n}.timeline .timeline-point-dark {\n  border-color: #4b4b4b !important;\n}.timeline .timeline-point-dark i,\n.timeline .timeline-point-dark svg {\n  stroke: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator {\n  background-color: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator:before {\n  background: rgba(75, 75, 75, 0.12) !important;\n}.divider.divider-dark .divider-text:before, .divider.divider-dark .divider-text:after {\n  border-color: #4b4b4b !important;\n}input:focus ~ .bg-dark {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #4b4b4b !important;\n}.custom-control-dark .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #4b4b4b;\n  background-color: #4b4b4b;\n}.custom-control-dark.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-dark.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(75, 75, 75, 0.4) !important;\n}.custom-control-dark .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(75, 75, 75, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-dark .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #4b4b4b !important;\n}.custom-switch-dark .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #4b4b4b !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-dark .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #4b4b4b !important;\n  border-color: #4b4b4b !important;\n}.text-dark.text-darken-1 {\n  color: #343434 !important;\n}.bg-dark.bg-darken-1 {\n  background-color: #343434 !important;\n}.border-dark.border-darken-1 {\n  border: 1px solid #343434 !important;\n}.border-top-dark.border-top-darken-1 {\n  border-top: 1px solid #343434 !important;\n}.border-bottom-dark.border-bottom-darken-1 {\n  border-bottom: 1px solid #343434 !important;\n}.border-left-dark.border-left-darken-1 {\n  border-left: 1px solid #343434 !important;\n}.border-right-dark.border-right-darken-1 {\n  border-right: 1px solid #343434 !important;\n}.overlay-dark.overlay-darken-1 {\n  background: #343434;\n  /* The Fallback */\n  background: rgba(52, 52, 52, 0.6);\n}.text-dark.text-darken-2 {\n  color: #1e1e1e !important;\n}.bg-dark.bg-darken-2 {\n  background-color: #1e1e1e !important;\n}.border-dark.border-darken-2 {\n  border: 1px solid #1e1e1e !important;\n}.border-top-dark.border-top-darken-2 {\n  border-top: 1px solid #1e1e1e !important;\n}.border-bottom-dark.border-bottom-darken-2 {\n  border-bottom: 1px solid #1e1e1e !important;\n}.border-left-dark.border-left-darken-2 {\n  border-left: 1px solid #1e1e1e !important;\n}.border-right-dark.border-right-darken-2 {\n  border-right: 1px solid #1e1e1e !important;\n}.overlay-dark.overlay-darken-2 {\n  background: #1e1e1e;\n  /* The Fallback */\n  background: rgba(30, 30, 30, 0.6);\n}.text-dark.text-darken-3 {\n  color: #626262 !important;\n}.bg-dark.bg-darken-3 {\n  background-color: #626262 !important;\n}.border-dark.border-darken-3 {\n  border: 1px solid #626262 !important;\n}.border-top-dark.border-top-darken-3 {\n  border-top: 1px solid #626262 !important;\n}.border-bottom-dark.border-bottom-darken-3 {\n  border-bottom: 1px solid #626262 !important;\n}.border-left-dark.border-left-darken-3 {\n  border-left: 1px solid #626262 !important;\n}.border-right-dark.border-right-darken-3 {\n  border-right: 1px solid #626262 !important;\n}.overlay-dark.overlay-darken-3 {\n  background: #626262;\n  /* The Fallback */\n  background: rgba(98, 98, 98, 0.6);\n}.bg-light {\n  background-color: #f6f6f6 !important;\n}.bg-light .card-header,\n.bg-light .card-footer {\n  background-color: transparent;\n}.border-light {\n  border: 1px solid #f6f6f6 !important;\n}.border-top-light {\n  border-top: 1px solid #f6f6f6;\n}.border-bottom-light {\n  border-bottom: 1px solid #f6f6f6;\n}.border-left-light {\n  border-left: 1px solid #f6f6f6;\n}.border-right-light {\n  border-right: 1px solid #f6f6f6;\n}.bg-light.badge-glow,\n.border-light.badge-glow,\n.badge-light.badge-glow {\n  box-shadow: 0px 0px 10px #f6f6f6;\n}.overlay-light {\n  background: #f6f6f6;\n  /* The Fallback */\n  background: rgba(246, 246, 246, 0.6);\n}input:focus ~ .bg-light {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #f6f6f6 !important;\n}.text-primary.text-lighten-5 {\n  color: #e93751 !important;\n}.bg-primary.bg-lighten-5 {\n  background-color: #e93751 !important;\n}.border-primary.border-lighten-5 {\n  border: 1px solid #e93751 !important;\n}.border-top-primary.border-top-lighten-5 {\n  border-top: 1px solid #e93751 !important;\n}.border-bottom-primary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #e93751 !important;\n}.border-left-primary.border-left-lighten-5 {\n  border-left: 1px solid #e93751 !important;\n}.border-right-primary.border-right-lighten-5 {\n  border-right: 1px solid #e93751 !important;\n}.overlay-primary.overlay-lighten-5 {\n  background: #e93751;\n  /* The Fallback */\n  background: rgba(233, 55, 81, 0.6);\n}.text-primary.text-lighten-4 {\n  color: #e6203d !important;\n}.bg-primary.bg-lighten-4 {\n  background-color: #e6203d !important;\n}.border-primary.border-lighten-4 {\n  border: 1px solid #e6203d !important;\n}.border-top-primary.border-top-lighten-4 {\n  border-top: 1px solid #e6203d !important;\n}.border-bottom-primary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #e6203d !important;\n}.border-left-primary.border-left-lighten-4 {\n  border-left: 1px solid #e6203d !important;\n}.border-right-primary.border-right-lighten-4 {\n  border-right: 1px solid #e6203d !important;\n}.overlay-primary.overlay-lighten-4 {\n  background: #e6203d;\n  /* The Fallback */\n  background: rgba(230, 32, 61, 0.6);\n}.text-primary.text-lighten-3 {\n  color: #d51834 !important;\n}.bg-primary.bg-lighten-3 {\n  background-color: #d51834 !important;\n}.border-primary.border-lighten-3 {\n  border: 1px solid #d51834 !important;\n}.border-top-primary.border-top-lighten-3 {\n  border-top: 1px solid #d51834 !important;\n}.border-bottom-primary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #d51834 !important;\n}.border-left-primary.border-left-lighten-3 {\n  border-left: 1px solid #d51834 !important;\n}.border-right-primary.border-right-lighten-3 {\n  border-right: 1px solid #d51834 !important;\n}.overlay-primary.overlay-lighten-3 {\n  background: #d51834;\n  /* The Fallback */\n  background: rgba(213, 24, 52, 0.6);\n}.text-primary.text-lighten-2 {\n  color: #be152e !important;\n}.bg-primary.bg-lighten-2 {\n  background-color: #be152e !important;\n}.border-primary.border-lighten-2 {\n  border: 1px solid #be152e !important;\n}.border-top-primary.border-top-lighten-2 {\n  border-top: 1px solid #be152e !important;\n}.border-bottom-primary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #be152e !important;\n}.border-left-primary.border-left-lighten-2 {\n  border-left: 1px solid #be152e !important;\n}.border-right-primary.border-right-lighten-2 {\n  border-right: 1px solid #be152e !important;\n}.overlay-primary.overlay-lighten-2 {\n  background: #be152e;\n  /* The Fallback */\n  background: rgba(190, 21, 46, 0.6);\n}.text-primary.text-lighten-1 {\n  color: #a71329 !important;\n}.bg-primary.bg-lighten-1 {\n  background-color: #a71329 !important;\n}.border-primary.border-lighten-1 {\n  border: 1px solid #a71329 !important;\n}.border-top-primary.border-top-lighten-1 {\n  border-top: 1px solid #a71329 !important;\n}.border-bottom-primary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #a71329 !important;\n}.border-left-primary.border-left-lighten-1 {\n  border-left: 1px solid #a71329 !important;\n}.border-right-primary.border-right-lighten-1 {\n  border-right: 1px solid #a71329 !important;\n}.overlay-primary.overlay-lighten-1 {\n  background: #a71329;\n  /* The Fallback */\n  background: rgba(167, 19, 41, 0.6);\n}.bg-primary {\n  background-color: #901023 !important;\n}.bg-primary .card-header,\n.bg-primary .card-footer {\n  background-color: transparent;\n}.alert-primary {\n  background: rgba(144, 16, 35, 0.12) !important;\n  color: #901023 !important;\n}.alert-primary .alert-heading {\n  box-shadow: rgba(144, 16, 35, 0.4) 0px 6px 15px -7px;\n}.alert-primary .alert-link {\n  color: #790d1d !important;\n}.alert-primary .close {\n  color: #901023 !important;\n}.bg-light-primary {\n  background: rgba(144, 16, 35, 0.12) !important;\n  color: #901023 !important;\n}.bg-light-primary.fc-h-event, .bg-light-primary.fc-v-event {\n  border-color: rgba(144, 16, 35, 0.1);\n}.bg-light-primary .fc-list-event-dot,\n.bg-light-primary .fc-daygrid-event-dot {\n  border-color: #901023 !important;\n}.bg-light-primary.fc-list-event:hover td {\n  background: rgba(144, 16, 35, 0.1) !important;\n}.bg-light-primary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-primary {\n  color: #901023 !important;\n}.border-primary {\n  border: 1px solid #901023 !important;\n}.border-top-primary {\n  border-top: 1px solid #901023;\n}.border-bottom-primary {\n  border-bottom: 1px solid #901023;\n}.border-left-primary {\n  border-left: 1px solid #901023;\n}.border-right-primary {\n  border-right: 1px solid #901023;\n}.bg-primary.badge-glow,\n.border-primary.badge-glow,\n.badge-primary.badge-glow {\n  box-shadow: 0px 0px 10px #901023;\n}.badge.badge-light-primary {\n  background-color: rgba(144, 16, 35, 0.12);\n  color: #901023 !important;\n}.overlay-primary {\n  background: #901023;\n  /* The Fallback */\n  background: rgba(144, 16, 35, 0.6);\n}.btn-primary {\n  border-color: #901023 !important;\n  background-color: #901023 !important;\n  color: #fff !important;\n}.btn-primary:focus, .btn-primary:active, .btn-primary.active {\n  color: #fff;\n  background-color: #790d1d !important;\n}.btn-primary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #901023;\n}.btn-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-primary {\n  background-color: transparent;\n  color: #901023;\n}.btn-flat-primary:hover {\n  color: #901023;\n}.btn-flat-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(144, 16, 35, 0.12);\n}.btn-flat-primary:active, .btn-flat-primary.active, .btn-flat-primary:focus {\n  background-color: rgba(144, 16, 35, 0.2);\n  color: #901023;\n}.btn-flat-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23901023' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-primary {\n  background-color: #901023;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-primary:hover:not(.disabled):not(:disabled) {\n  background-color: #a71329;\n}.btn-relief-primary:active, .btn-relief-primary.active, .btn-relief-primary:focus {\n  background-color: #790d1d;\n}.btn-relief-primary:hover {\n  color: #fff;\n}.btn-relief-primary:active, .btn-relief-primary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-primary {\n  border: 1px solid #901023 !important;\n  background-color: transparent;\n  color: #901023;\n}.btn-outline-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(144, 16, 35, 0.04);\n  color: #901023;\n}.btn-outline-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(144, 16, 35, 0.2);\n  color: #901023;\n}.btn-outline-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23901023' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-primary.dropdown-toggle {\n  background-color: rgba(144, 16, 35, 0.2);\n  color: #901023;\n}.btn-outline-primary.waves-effect .waves-ripple,\n.btn-flat-primary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(144, 16, 35, 0.2) 0, rgba(144, 16, 35, 0.3) 40%, rgba(144, 16, 35, 0.4) 50%, rgba(144, 16, 35, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-primary {\n  background-color: #901023;\n}.modal.modal-primary .modal-header .modal-title {\n  color: #901023;\n}.modal.modal-primary .modal-header .close {\n  color: #901023 !important;\n}.pagination-primary .page-item.active .page-link {\n  background: #901023 !important;\n  color: #fff;\n}.pagination-primary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-primary .page-item .page-link:hover {\n  color: #901023;\n}.pagination-primary .page-item.prev-item .page-link:hover, .pagination-primary .page-item.next-item .page-link:hover {\n  background: #901023;\n  color: #fff;\n}.pagination-primary .page-item.next-item .page-link:active:after, .pagination-primary .page-item.next-item .page-link:hover:after, .pagination-primary .page-item.next .page-link:active:after, .pagination-primary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23901023' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-primary .page-item.prev-item .page-link:active:before, .pagination-primary .page-item.prev-item .page-link:hover:before, .pagination-primary .page-item.prev .page-link:active:before, .pagination-primary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23901023' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-primary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #901023 !important;\n  border-color: #901023;\n  box-shadow: 0 4px 18px -4px rgba(144, 16, 35, 0.65);\n}.progress-bar-primary {\n  background-color: rgba(144, 16, 35, 0.12);\n}.progress-bar-primary .progress-bar {\n  background-color: #901023;\n}.timeline .timeline-point-primary {\n  border-color: #901023 !important;\n}.timeline .timeline-point-primary i,\n.timeline .timeline-point-primary svg {\n  stroke: #901023 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator {\n  background-color: #901023 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator:before {\n  background: rgba(144, 16, 35, 0.12) !important;\n}.divider.divider-primary .divider-text:before, .divider.divider-primary .divider-text:after {\n  border-color: #901023 !important;\n}input:focus ~ .bg-primary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #901023 !important;\n}.custom-control-primary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #901023;\n  background-color: #901023;\n}.custom-control-primary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-primary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(144, 16, 35, 0.4) !important;\n}.custom-control-primary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(144, 16, 35, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-primary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #901023 !important;\n}.custom-switch-primary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #901023 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-primary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #901023 !important;\n  border-color: #901023 !important;\n}.text-primary.text-darken-1 {\n  color: #790d1d !important;\n}.bg-primary.bg-darken-1 {\n  background-color: #790d1d !important;\n}.border-primary.border-darken-1 {\n  border: 1px solid #790d1d !important;\n}.border-top-primary.border-top-darken-1 {\n  border-top: 1px solid #790d1d !important;\n}.border-bottom-primary.border-bottom-darken-1 {\n  border-bottom: 1px solid #790d1d !important;\n}.border-left-primary.border-left-darken-1 {\n  border-left: 1px solid #790d1d !important;\n}.border-right-primary.border-right-darken-1 {\n  border-right: 1px solid #790d1d !important;\n}.overlay-primary.overlay-darken-1 {\n  background: #790d1d;\n  /* The Fallback */\n  background: rgba(121, 13, 29, 0.6);\n}.text-primary.text-darken-2 {\n  color: #620b18 !important;\n}.bg-primary.bg-darken-2 {\n  background-color: #620b18 !important;\n}.border-primary.border-darken-2 {\n  border: 1px solid #620b18 !important;\n}.border-top-primary.border-top-darken-2 {\n  border-top: 1px solid #620b18 !important;\n}.border-bottom-primary.border-bottom-darken-2 {\n  border-bottom: 1px solid #620b18 !important;\n}.border-left-primary.border-left-darken-2 {\n  border-left: 1px solid #620b18 !important;\n}.border-right-primary.border-right-darken-2 {\n  border-right: 1px solid #620b18 !important;\n}.overlay-primary.overlay-darken-2 {\n  background: #620b18;\n  /* The Fallback */\n  background: rgba(98, 11, 24, 0.6);\n}.text-primary.text-darken-3 {\n  color: #4b0812 !important;\n}.bg-primary.bg-darken-3 {\n  background-color: #4b0812 !important;\n}.border-primary.border-darken-3 {\n  border: 1px solid #4b0812 !important;\n}.border-top-primary.border-top-darken-3 {\n  border-top: 1px solid #4b0812 !important;\n}.border-bottom-primary.border-bottom-darken-3 {\n  border-bottom: 1px solid #4b0812 !important;\n}.border-left-primary.border-left-darken-3 {\n  border-left: 1px solid #4b0812 !important;\n}.border-right-primary.border-right-darken-3 {\n  border-right: 1px solid #4b0812 !important;\n}.overlay-primary.overlay-darken-3 {\n  background: #4b0812;\n  /* The Fallback */\n  background: rgba(75, 8, 18, 0.6);\n}.text-primary.text-darken-4 {\n  color: #34060d !important;\n}.bg-primary.bg-darken-4 {\n  background-color: #34060d !important;\n}.border-primary.border-darken-4 {\n  border: 1px solid #34060d !important;\n}.border-top-primary.border-top-darken-4 {\n  border-top: 1px solid #34060d !important;\n}.border-bottom-primary.border-bottom-darken-4 {\n  border-bottom: 1px solid #34060d !important;\n}.border-left-primary.border-left-darken-4 {\n  border-left: 1px solid #34060d !important;\n}.border-right-primary.border-right-darken-4 {\n  border-right: 1px solid #34060d !important;\n}.overlay-primary.overlay-darken-4 {\n  background: #34060d;\n  /* The Fallback */\n  background: rgba(52, 6, 13, 0.6);\n}.text-primary.text-accent-1 {\n  color: #bdfdff !important;\n}.bg-primary.bg-accent-1 {\n  background-color: #bdfdff !important;\n}.border-primary.border-accent-1 {\n  border: 1px solid #bdfdff !important;\n}.border-top-primary.border-top-accent-1 {\n  border-top: 1px solid #bdfdff !important;\n}.border-bottom-primary.border-bottom-accent-1 {\n  border-bottom: 1px solid #bdfdff !important;\n}.border-left-primary.border-left-accent-1 {\n  border-left: 1px solid #bdfdff !important;\n}.border-right-primary.border-right-accent-1 {\n  border-right: 1px solid #bdfdff !important;\n}.overlay-primary.overlay-accent-1 {\n  background: #bdfdff;\n  /* The Fallback */\n  background: rgba(189, 253, 255, 0.6);\n}.text-primary.text-accent-2 {\n  color: #8afbff !important;\n}.bg-primary.bg-accent-2 {\n  background-color: #8afbff !important;\n}.border-primary.border-accent-2 {\n  border: 1px solid #8afbff !important;\n}.border-top-primary.border-top-accent-2 {\n  border-top: 1px solid #8afbff !important;\n}.border-bottom-primary.border-bottom-accent-2 {\n  border-bottom: 1px solid #8afbff !important;\n}.border-left-primary.border-left-accent-2 {\n  border-left: 1px solid #8afbff !important;\n}.border-right-primary.border-right-accent-2 {\n  border-right: 1px solid #8afbff !important;\n}.overlay-primary.overlay-accent-2 {\n  background: #8afbff;\n  /* The Fallback */\n  background: rgba(138, 251, 255, 0.6);\n}.text-primary.text-accent-3 {\n  color: #57faff !important;\n}.bg-primary.bg-accent-3 {\n  background-color: #57faff !important;\n}.border-primary.border-accent-3 {\n  border: 1px solid #57faff !important;\n}.border-top-primary.border-top-accent-3 {\n  border-top: 1px solid #57faff !important;\n}.border-bottom-primary.border-bottom-accent-3 {\n  border-bottom: 1px solid #57faff !important;\n}.border-left-primary.border-left-accent-3 {\n  border-left: 1px solid #57faff !important;\n}.border-right-primary.border-right-accent-3 {\n  border-right: 1px solid #57faff !important;\n}.overlay-primary.overlay-accent-3 {\n  background: #57faff;\n  /* The Fallback */\n  background: rgba(87, 250, 255, 0.6);\n}.text-primary.text-accent-4 {\n  color: #3df9ff !important;\n}.bg-primary.bg-accent-4 {\n  background-color: #3df9ff !important;\n}.border-primary.border-accent-4 {\n  border: 1px solid #3df9ff !important;\n}.border-top-primary.border-top-accent-4 {\n  border-top: 1px solid #3df9ff !important;\n}.border-bottom-primary.border-bottom-accent-4 {\n  border-bottom: 1px solid #3df9ff !important;\n}.border-left-primary.border-left-accent-4 {\n  border-left: 1px solid #3df9ff !important;\n}.border-right-primary.border-right-accent-4 {\n  border-right: 1px solid #3df9ff !important;\n}.overlay-primary.overlay-accent-4 {\n  background: #3df9ff;\n  /* The Fallback */\n  background: rgba(61, 249, 255, 0.6);\n}.text-secondary.text-lighten-5 {\n  color: #cdd8de !important;\n}.bg-secondary.bg-lighten-5 {\n  background-color: #cdd8de !important;\n}.border-secondary.border-lighten-5 {\n  border: 1px solid #cdd8de !important;\n}.border-top-secondary.border-top-lighten-5 {\n  border-top: 1px solid #cdd8de !important;\n}.border-bottom-secondary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #cdd8de !important;\n}.border-left-secondary.border-left-lighten-5 {\n  border-left: 1px solid #cdd8de !important;\n}.border-right-secondary.border-right-lighten-5 {\n  border-right: 1px solid #cdd8de !important;\n}.overlay-secondary.overlay-lighten-5 {\n  background: #cdd8de;\n  /* The Fallback */\n  background: rgba(205, 216, 222, 0.6);\n}.text-secondary.text-lighten-4 {\n  color: #bdccd4 !important;\n}.bg-secondary.bg-lighten-4 {\n  background-color: #bdccd4 !important;\n}.border-secondary.border-lighten-4 {\n  border: 1px solid #bdccd4 !important;\n}.border-top-secondary.border-top-lighten-4 {\n  border-top: 1px solid #bdccd4 !important;\n}.border-bottom-secondary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #bdccd4 !important;\n}.border-left-secondary.border-left-lighten-4 {\n  border-left: 1px solid #bdccd4 !important;\n}.border-right-secondary.border-right-lighten-4 {\n  border-right: 1px solid #bdccd4 !important;\n}.overlay-secondary.overlay-lighten-4 {\n  background: #bdccd4;\n  /* The Fallback */\n  background: rgba(189, 204, 212, 0.6);\n}.text-secondary.text-lighten-3 {\n  color: #aec1c9 !important;\n}.bg-secondary.bg-lighten-3 {\n  background-color: #aec1c9 !important;\n}.border-secondary.border-lighten-3 {\n  border: 1px solid #aec1c9 !important;\n}.border-top-secondary.border-top-lighten-3 {\n  border-top: 1px solid #aec1c9 !important;\n}.border-bottom-secondary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #aec1c9 !important;\n}.border-left-secondary.border-left-lighten-3 {\n  border-left: 1px solid #aec1c9 !important;\n}.border-right-secondary.border-right-lighten-3 {\n  border-right: 1px solid #aec1c9 !important;\n}.overlay-secondary.overlay-lighten-3 {\n  background: #aec1c9;\n  /* The Fallback */\n  background: rgba(174, 193, 201, 0.6);\n}.text-secondary.text-lighten-2 {\n  color: #9fb5bf !important;\n}.bg-secondary.bg-lighten-2 {\n  background-color: #9fb5bf !important;\n}.border-secondary.border-lighten-2 {\n  border: 1px solid #9fb5bf !important;\n}.border-top-secondary.border-top-lighten-2 {\n  border-top: 1px solid #9fb5bf !important;\n}.border-bottom-secondary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #9fb5bf !important;\n}.border-left-secondary.border-left-lighten-2 {\n  border-left: 1px solid #9fb5bf !important;\n}.border-right-secondary.border-right-lighten-2 {\n  border-right: 1px solid #9fb5bf !important;\n}.overlay-secondary.overlay-lighten-2 {\n  background: #9fb5bf;\n  /* The Fallback */\n  background: rgba(159, 181, 191, 0.6);\n}.text-secondary.text-lighten-1 {\n  color: #8fa9b5 !important;\n}.bg-secondary.bg-lighten-1 {\n  background-color: #8fa9b5 !important;\n}.border-secondary.border-lighten-1 {\n  border: 1px solid #8fa9b5 !important;\n}.border-top-secondary.border-top-lighten-1 {\n  border-top: 1px solid #8fa9b5 !important;\n}.border-bottom-secondary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #8fa9b5 !important;\n}.border-left-secondary.border-left-lighten-1 {\n  border-left: 1px solid #8fa9b5 !important;\n}.border-right-secondary.border-right-lighten-1 {\n  border-right: 1px solid #8fa9b5 !important;\n}.overlay-secondary.overlay-lighten-1 {\n  background: #8fa9b5;\n  /* The Fallback */\n  background: rgba(143, 169, 181, 0.6);\n}.bg-secondary {\n  background-color: #809dab !important;\n}.bg-secondary .card-header,\n.bg-secondary .card-footer {\n  background-color: transparent;\n}.alert-secondary {\n  background: rgba(128, 157, 171, 0.12) !important;\n  color: #809dab !important;\n}.alert-secondary .alert-heading {\n  box-shadow: rgba(128, 157, 171, 0.4) 0px 6px 15px -7px;\n}.alert-secondary .alert-link {\n  color: #7191a1 !important;\n}.alert-secondary .close {\n  color: #809dab !important;\n}.bg-light-secondary {\n  background: rgba(128, 157, 171, 0.12) !important;\n  color: #809dab !important;\n}.bg-light-secondary.fc-h-event, .bg-light-secondary.fc-v-event {\n  border-color: rgba(128, 157, 171, 0.1);\n}.bg-light-secondary .fc-list-event-dot,\n.bg-light-secondary .fc-daygrid-event-dot {\n  border-color: #809dab !important;\n}.bg-light-secondary.fc-list-event:hover td {\n  background: rgba(128, 157, 171, 0.1) !important;\n}.bg-light-secondary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-secondary {\n  color: #809dab !important;\n}.border-secondary {\n  border: 1px solid #809dab !important;\n}.border-top-secondary {\n  border-top: 1px solid #809dab;\n}.border-bottom-secondary {\n  border-bottom: 1px solid #809dab;\n}.border-left-secondary {\n  border-left: 1px solid #809dab;\n}.border-right-secondary {\n  border-right: 1px solid #809dab;\n}.bg-secondary.badge-glow,\n.border-secondary.badge-glow,\n.badge-secondary.badge-glow {\n  box-shadow: 0px 0px 10px #809dab;\n}.badge.badge-light-secondary {\n  background-color: rgba(128, 157, 171, 0.12);\n  color: #809dab !important;\n}.overlay-secondary {\n  background: #809dab;\n  /* The Fallback */\n  background: rgba(128, 157, 171, 0.6);\n}.btn-secondary {\n  border-color: #809dab !important;\n  background-color: #809dab !important;\n  color: #fff !important;\n}.btn-secondary:focus, .btn-secondary:active, .btn-secondary.active {\n  color: #fff;\n  background-color: #7191a1 !important;\n}.btn-secondary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #809dab;\n}.btn-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-secondary {\n  background-color: transparent;\n  color: #809dab;\n}.btn-flat-secondary:hover {\n  color: #809dab;\n}.btn-flat-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(128, 157, 171, 0.12);\n}.btn-flat-secondary:active, .btn-flat-secondary.active, .btn-flat-secondary:focus {\n  background-color: rgba(128, 157, 171, 0.2);\n  color: #809dab;\n}.btn-flat-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23809dab' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-secondary {\n  background-color: #809dab;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: #8fa9b5;\n}.btn-relief-secondary:active, .btn-relief-secondary.active, .btn-relief-secondary:focus {\n  background-color: #7191a1;\n}.btn-relief-secondary:hover {\n  color: #fff;\n}.btn-relief-secondary:active, .btn-relief-secondary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-secondary {\n  border: 1px solid #809dab !important;\n  background-color: transparent;\n  color: #809dab;\n}.btn-outline-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(128, 157, 171, 0.04);\n  color: #809dab;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .btn-outline-secondary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(128, 157, 171, 0.2);\n  color: #809dab;\n}.btn-outline-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23809dab' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-secondary.dropdown-toggle {\n  background-color: rgba(128, 157, 171, 0.2);\n  color: #809dab;\n}.btn-outline-secondary.waves-effect .waves-ripple,\n.btn-flat-secondary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(128, 157, 171, 0.2) 0, rgba(128, 157, 171, 0.3) 40%, rgba(128, 157, 171, 0.4) 50%, rgba(128, 157, 171, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-secondary {\n  background-color: #809dab;\n}.modal.modal-secondary .modal-header .modal-title {\n  color: #809dab;\n}.modal.modal-secondary .modal-header .close {\n  color: #809dab !important;\n}.pagination-secondary .page-item.active .page-link {\n  background: #809dab !important;\n  color: #fff;\n}.pagination-secondary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-secondary .page-item .page-link:hover {\n  color: #809dab;\n}.pagination-secondary .page-item.prev-item .page-link:hover, .pagination-secondary .page-item.next-item .page-link:hover {\n  background: #809dab;\n  color: #fff;\n}.pagination-secondary .page-item.next-item .page-link:active:after, .pagination-secondary .page-item.next-item .page-link:hover:after, .pagination-secondary .page-item.next .page-link:active:after, .pagination-secondary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23809dab' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-secondary .page-item.prev-item .page-link:active:before, .pagination-secondary .page-item.prev-item .page-link:hover:before, .pagination-secondary .page-item.prev .page-link:active:before, .pagination-secondary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23809dab' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-secondary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #809dab !important;\n  border-color: #809dab;\n  box-shadow: 0 4px 18px -4px rgba(128, 157, 171, 0.65);\n}.progress-bar-secondary {\n  background-color: rgba(128, 157, 171, 0.12);\n}.progress-bar-secondary .progress-bar {\n  background-color: #809dab;\n}.timeline .timeline-point-secondary {\n  border-color: #809dab !important;\n}.timeline .timeline-point-secondary i,\n.timeline .timeline-point-secondary svg {\n  stroke: #809dab !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator {\n  background-color: #809dab !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator:before {\n  background: rgba(128, 157, 171, 0.12) !important;\n}.divider.divider-secondary .divider-text:before, .divider.divider-secondary .divider-text:after {\n  border-color: #809dab !important;\n}input:focus ~ .bg-secondary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #809dab !important;\n}.custom-control-secondary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #809dab;\n  background-color: #809dab;\n}.custom-control-secondary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-secondary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(128, 157, 171, 0.4) !important;\n}.custom-control-secondary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(128, 157, 171, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-secondary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #809dab !important;\n}.custom-switch-secondary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #809dab !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-secondary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #809dab !important;\n  border-color: #809dab !important;\n}.text-secondary.text-darken-1 {\n  color: #7191a1 !important;\n}.bg-secondary.bg-darken-1 {\n  background-color: #7191a1 !important;\n}.border-secondary.border-darken-1 {\n  border: 1px solid #7191a1 !important;\n}.border-top-secondary.border-top-darken-1 {\n  border-top: 1px solid #7191a1 !important;\n}.border-bottom-secondary.border-bottom-darken-1 {\n  border-bottom: 1px solid #7191a1 !important;\n}.border-left-secondary.border-left-darken-1 {\n  border-left: 1px solid #7191a1 !important;\n}.border-right-secondary.border-right-darken-1 {\n  border-right: 1px solid #7191a1 !important;\n}.overlay-secondary.overlay-darken-1 {\n  background: #7191a1;\n  /* The Fallback */\n  background: rgba(113, 145, 161, 0.6);\n}.text-secondary.text-darken-2 {\n  color: #638595 !important;\n}.bg-secondary.bg-darken-2 {\n  background-color: #638595 !important;\n}.border-secondary.border-darken-2 {\n  border: 1px solid #638595 !important;\n}.border-top-secondary.border-top-darken-2 {\n  border-top: 1px solid #638595 !important;\n}.border-bottom-secondary.border-bottom-darken-2 {\n  border-bottom: 1px solid #638595 !important;\n}.border-left-secondary.border-left-darken-2 {\n  border-left: 1px solid #638595 !important;\n}.border-right-secondary.border-right-darken-2 {\n  border-right: 1px solid #638595 !important;\n}.overlay-secondary.overlay-darken-2 {\n  background: #638595;\n  /* The Fallback */\n  background: rgba(99, 133, 149, 0.6);\n}.text-secondary.text-darken-3 {\n  color: #597786 !important;\n}.bg-secondary.bg-darken-3 {\n  background-color: #597786 !important;\n}.border-secondary.border-darken-3 {\n  border: 1px solid #597786 !important;\n}.border-top-secondary.border-top-darken-3 {\n  border-top: 1px solid #597786 !important;\n}.border-bottom-secondary.border-bottom-darken-3 {\n  border-bottom: 1px solid #597786 !important;\n}.border-left-secondary.border-left-darken-3 {\n  border-left: 1px solid #597786 !important;\n}.border-right-secondary.border-right-darken-3 {\n  border-right: 1px solid #597786 !important;\n}.overlay-secondary.overlay-darken-3 {\n  background: #597786;\n  /* The Fallback */\n  background: rgba(89, 119, 134, 0.6);\n}.text-secondary.text-darken-4 {\n  color: #4e6a77 !important;\n}.bg-secondary.bg-darken-4 {\n  background-color: #4e6a77 !important;\n}.border-secondary.border-darken-4 {\n  border: 1px solid #4e6a77 !important;\n}.border-top-secondary.border-top-darken-4 {\n  border-top: 1px solid #4e6a77 !important;\n}.border-bottom-secondary.border-bottom-darken-4 {\n  border-bottom: 1px solid #4e6a77 !important;\n}.border-left-secondary.border-left-darken-4 {\n  border-left: 1px solid #4e6a77 !important;\n}.border-right-secondary.border-right-darken-4 {\n  border-right: 1px solid #4e6a77 !important;\n}.overlay-secondary.overlay-darken-4 {\n  background: #4e6a77;\n  /* The Fallback */\n  background: rgba(78, 106, 119, 0.6);\n}.text-success.text-lighten-5 {\n  color: #88e7b2 !important;\n}.bg-success.bg-lighten-5 {\n  background-color: #88e7b2 !important;\n}.border-success.border-lighten-5 {\n  border: 1px solid #88e7b2 !important;\n}.border-top-success.border-top-lighten-5 {\n  border-top: 1px solid #88e7b2 !important;\n}.border-bottom-success.border-bottom-lighten-5 {\n  border-bottom: 1px solid #88e7b2 !important;\n}.border-left-success.border-left-lighten-5 {\n  border-left: 1px solid #88e7b2 !important;\n}.border-right-success.border-right-lighten-5 {\n  border-right: 1px solid #88e7b2 !important;\n}.overlay-success.overlay-lighten-5 {\n  background: #88e7b2;\n  /* The Fallback */\n  background: rgba(136, 231, 178, 0.6);\n}.text-success.text-lighten-4 {\n  color: #72e3a4 !important;\n}.bg-success.bg-lighten-4 {\n  background-color: #72e3a4 !important;\n}.border-success.border-lighten-4 {\n  border: 1px solid #72e3a4 !important;\n}.border-top-success.border-top-lighten-4 {\n  border-top: 1px solid #72e3a4 !important;\n}.border-bottom-success.border-bottom-lighten-4 {\n  border-bottom: 1px solid #72e3a4 !important;\n}.border-left-success.border-left-lighten-4 {\n  border-left: 1px solid #72e3a4 !important;\n}.border-right-success.border-right-lighten-4 {\n  border-right: 1px solid #72e3a4 !important;\n}.overlay-success.overlay-lighten-4 {\n  background: #72e3a4;\n  /* The Fallback */\n  background: rgba(114, 227, 164, 0.6);\n}.text-success.text-lighten-3 {\n  color: #5dde97 !important;\n}.bg-success.bg-lighten-3 {\n  background-color: #5dde97 !important;\n}.border-success.border-lighten-3 {\n  border: 1px solid #5dde97 !important;\n}.border-top-success.border-top-lighten-3 {\n  border-top: 1px solid #5dde97 !important;\n}.border-bottom-success.border-bottom-lighten-3 {\n  border-bottom: 1px solid #5dde97 !important;\n}.border-left-success.border-left-lighten-3 {\n  border-left: 1px solid #5dde97 !important;\n}.border-right-success.border-right-lighten-3 {\n  border-right: 1px solid #5dde97 !important;\n}.overlay-success.overlay-lighten-3 {\n  background: #5dde97;\n  /* The Fallback */\n  background: rgba(93, 222, 151, 0.6);\n}.text-success.text-lighten-2 {\n  color: #48da89 !important;\n}.bg-success.bg-lighten-2 {\n  background-color: #48da89 !important;\n}.border-success.border-lighten-2 {\n  border: 1px solid #48da89 !important;\n}.border-top-success.border-top-lighten-2 {\n  border-top: 1px solid #48da89 !important;\n}.border-bottom-success.border-bottom-lighten-2 {\n  border-bottom: 1px solid #48da89 !important;\n}.border-left-success.border-left-lighten-2 {\n  border-left: 1px solid #48da89 !important;\n}.border-right-success.border-right-lighten-2 {\n  border-right: 1px solid #48da89 !important;\n}.overlay-success.overlay-lighten-2 {\n  background: #48da89;\n  /* The Fallback */\n  background: rgba(72, 218, 137, 0.6);\n}.text-success.text-lighten-1 {\n  color: #33d67c !important;\n}.bg-success.bg-lighten-1 {\n  background-color: #33d67c !important;\n}.border-success.border-lighten-1 {\n  border: 1px solid #33d67c !important;\n}.border-top-success.border-top-lighten-1 {\n  border-top: 1px solid #33d67c !important;\n}.border-bottom-success.border-bottom-lighten-1 {\n  border-bottom: 1px solid #33d67c !important;\n}.border-left-success.border-left-lighten-1 {\n  border-left: 1px solid #33d67c !important;\n}.border-right-success.border-right-lighten-1 {\n  border-right: 1px solid #33d67c !important;\n}.overlay-success.overlay-lighten-1 {\n  background: #33d67c;\n  /* The Fallback */\n  background: rgba(51, 214, 124, 0.6);\n}.bg-success {\n  background-color: #28c76f !important;\n}.bg-success .card-header,\n.bg-success .card-footer {\n  background-color: transparent;\n}.alert-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.alert-success .alert-heading {\n  box-shadow: rgba(40, 199, 111, 0.4) 0px 6px 15px -7px;\n}.alert-success .alert-link {\n  color: #24b263 !important;\n}.alert-success .close {\n  color: #28c76f !important;\n}.bg-light-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.bg-light-success.fc-h-event, .bg-light-success.fc-v-event {\n  border-color: rgba(40, 199, 111, 0.1);\n}.bg-light-success .fc-list-event-dot,\n.bg-light-success .fc-daygrid-event-dot {\n  border-color: #28c76f !important;\n}.bg-light-success.fc-list-event:hover td {\n  background: rgba(40, 199, 111, 0.1) !important;\n}.bg-light-success.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-success {\n  color: #28c76f !important;\n}.border-success {\n  border: 1px solid #28c76f !important;\n}.border-top-success {\n  border-top: 1px solid #28c76f;\n}.border-bottom-success {\n  border-bottom: 1px solid #28c76f;\n}.border-left-success {\n  border-left: 1px solid #28c76f;\n}.border-right-success {\n  border-right: 1px solid #28c76f;\n}.bg-success.badge-glow,\n.border-success.badge-glow,\n.badge-success.badge-glow {\n  box-shadow: 0px 0px 10px #28c76f;\n}.badge.badge-light-success {\n  background-color: rgba(40, 199, 111, 0.12);\n  color: #28c76f !important;\n}.overlay-success {\n  background: #28c76f;\n  /* The Fallback */\n  background: rgba(40, 199, 111, 0.6);\n}.btn-success {\n  border-color: #28c76f !important;\n  background-color: #28c76f !important;\n  color: #fff !important;\n}.btn-success:focus, .btn-success:active, .btn-success.active {\n  color: #fff;\n  background-color: #24b263 !important;\n}.btn-success:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #28c76f;\n}.btn-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-success {\n  background-color: transparent;\n  color: #28c76f;\n}.btn-flat-success:hover {\n  color: #28c76f;\n}.btn-flat-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.12);\n}.btn-flat-success:active, .btn-flat-success.active, .btn-flat-success:focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-flat-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-success {\n  background-color: #28c76f;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-success:hover:not(.disabled):not(:disabled) {\n  background-color: #33d67c;\n}.btn-relief-success:active, .btn-relief-success.active, .btn-relief-success:focus {\n  background-color: #24b263;\n}.btn-relief-success:hover {\n  color: #fff;\n}.btn-relief-success:active, .btn-relief-success.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-success {\n  border: 1px solid #28c76f !important;\n  background-color: transparent;\n  color: #28c76f;\n}.btn-outline-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.04);\n  color: #28c76f;\n}.btn-outline-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .btn-outline-success:not(:disabled):not(.disabled):focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-success.dropdown-toggle {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.waves-effect .waves-ripple,\n.btn-flat-success.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(40, 199, 111, 0.2) 0, rgba(40, 199, 111, 0.3) 40%, rgba(40, 199, 111, 0.4) 50%, rgba(40, 199, 111, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-success {\n  background-color: #28c76f;\n}.modal.modal-success .modal-header .modal-title {\n  color: #28c76f;\n}.modal.modal-success .modal-header .close {\n  color: #28c76f !important;\n}.pagination-success .page-item.active .page-link {\n  background: #28c76f !important;\n  color: #fff;\n}.pagination-success .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-success .page-item .page-link:hover {\n  color: #28c76f;\n}.pagination-success .page-item.prev-item .page-link:hover, .pagination-success .page-item.next-item .page-link:hover {\n  background: #28c76f;\n  color: #fff;\n}.pagination-success .page-item.next-item .page-link:active:after, .pagination-success .page-item.next-item .page-link:hover:after, .pagination-success .page-item.next .page-link:active:after, .pagination-success .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-success .page-item.prev-item .page-link:active:before, .pagination-success .page-item.prev-item .page-link:hover:before, .pagination-success .page-item.prev .page-link:active:before, .pagination-success .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-success .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #28c76f !important;\n  border-color: #28c76f;\n  box-shadow: 0 4px 18px -4px rgba(40, 199, 111, 0.65);\n}.progress-bar-success {\n  background-color: rgba(40, 199, 111, 0.12);\n}.progress-bar-success .progress-bar {\n  background-color: #28c76f;\n}.timeline .timeline-point-success {\n  border-color: #28c76f !important;\n}.timeline .timeline-point-success i,\n.timeline .timeline-point-success svg {\n  stroke: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator {\n  background-color: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator:before {\n  background: rgba(40, 199, 111, 0.12) !important;\n}.divider.divider-success .divider-text:before, .divider.divider-success .divider-text:after {\n  border-color: #28c76f !important;\n}input:focus ~ .bg-success {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #28c76f !important;\n}.custom-control-success .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #28c76f;\n  background-color: #28c76f;\n}.custom-control-success.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-success.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(40, 199, 111, 0.4) !important;\n}.custom-control-success .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(40, 199, 111, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-success .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #28c76f !important;\n}.custom-switch-success .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #28c76f !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-success .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #28c76f !important;\n  border-color: #28c76f !important;\n}.text-success.text-darken-1 {\n  color: #24b263 !important;\n}.bg-success.bg-darken-1 {\n  background-color: #24b263 !important;\n}.border-success.border-darken-1 {\n  border: 1px solid #24b263 !important;\n}.border-top-success.border-top-darken-1 {\n  border-top: 1px solid #24b263 !important;\n}.border-bottom-success.border-bottom-darken-1 {\n  border-bottom: 1px solid #24b263 !important;\n}.border-left-success.border-left-darken-1 {\n  border-left: 1px solid #24b263 !important;\n}.border-right-success.border-right-darken-1 {\n  border-right: 1px solid #24b263 !important;\n}.overlay-success.overlay-darken-1 {\n  background: #24b263;\n  /* The Fallback */\n  background: rgba(36, 178, 99, 0.6);\n}.text-success.text-darken-2 {\n  color: #1f9d57 !important;\n}.bg-success.bg-darken-2 {\n  background-color: #1f9d57 !important;\n}.border-success.border-darken-2 {\n  border: 1px solid #1f9d57 !important;\n}.border-top-success.border-top-darken-2 {\n  border-top: 1px solid #1f9d57 !important;\n}.border-bottom-success.border-bottom-darken-2 {\n  border-bottom: 1px solid #1f9d57 !important;\n}.border-left-success.border-left-darken-2 {\n  border-left: 1px solid #1f9d57 !important;\n}.border-right-success.border-right-darken-2 {\n  border-right: 1px solid #1f9d57 !important;\n}.overlay-success.overlay-darken-2 {\n  background: #1f9d57;\n  /* The Fallback */\n  background: rgba(31, 157, 87, 0.6);\n}.text-success.text-darken-3 {\n  color: #1b874b !important;\n}.bg-success.bg-darken-3 {\n  background-color: #1b874b !important;\n}.border-success.border-darken-3 {\n  border: 1px solid #1b874b !important;\n}.border-top-success.border-top-darken-3 {\n  border-top: 1px solid #1b874b !important;\n}.border-bottom-success.border-bottom-darken-3 {\n  border-bottom: 1px solid #1b874b !important;\n}.border-left-success.border-left-darken-3 {\n  border-left: 1px solid #1b874b !important;\n}.border-right-success.border-right-darken-3 {\n  border-right: 1px solid #1b874b !important;\n}.overlay-success.overlay-darken-3 {\n  background: #1b874b;\n  /* The Fallback */\n  background: rgba(27, 135, 75, 0.6);\n}.text-success.text-darken-4 {\n  color: #177240 !important;\n}.bg-success.bg-darken-4 {\n  background-color: #177240 !important;\n}.border-success.border-darken-4 {\n  border: 1px solid #177240 !important;\n}.border-top-success.border-top-darken-4 {\n  border-top: 1px solid #177240 !important;\n}.border-bottom-success.border-bottom-darken-4 {\n  border-bottom: 1px solid #177240 !important;\n}.border-left-success.border-left-darken-4 {\n  border-left: 1px solid #177240 !important;\n}.border-right-success.border-right-darken-4 {\n  border-right: 1px solid #177240 !important;\n}.overlay-success.overlay-darken-4 {\n  background: #177240;\n  /* The Fallback */\n  background: rgba(23, 114, 64, 0.6);\n}.text-success.text-accent-1 {\n  color: #e1fff1 !important;\n}.bg-success.bg-accent-1 {\n  background-color: #e1fff1 !important;\n}.border-success.border-accent-1 {\n  border: 1px solid #e1fff1 !important;\n}.border-top-success.border-top-accent-1 {\n  border-top: 1px solid #e1fff1 !important;\n}.border-bottom-success.border-bottom-accent-1 {\n  border-bottom: 1px solid #e1fff1 !important;\n}.border-left-success.border-left-accent-1 {\n  border-left: 1px solid #e1fff1 !important;\n}.border-right-success.border-right-accent-1 {\n  border-right: 1px solid #e1fff1 !important;\n}.overlay-success.overlay-accent-1 {\n  background: #e1fff1;\n  /* The Fallback */\n  background: rgba(225, 255, 241, 0.6);\n}.text-success.text-accent-2 {\n  color: #aeffd9 !important;\n}.bg-success.bg-accent-2 {\n  background-color: #aeffd9 !important;\n}.border-success.border-accent-2 {\n  border: 1px solid #aeffd9 !important;\n}.border-top-success.border-top-accent-2 {\n  border-top: 1px solid #aeffd9 !important;\n}.border-bottom-success.border-bottom-accent-2 {\n  border-bottom: 1px solid #aeffd9 !important;\n}.border-left-success.border-left-accent-2 {\n  border-left: 1px solid #aeffd9 !important;\n}.border-right-success.border-right-accent-2 {\n  border-right: 1px solid #aeffd9 !important;\n}.overlay-success.overlay-accent-2 {\n  background: #aeffd9;\n  /* The Fallback */\n  background: rgba(174, 255, 217, 0.6);\n}.text-success.text-accent-3 {\n  color: #7bffc1 !important;\n}.bg-success.bg-accent-3 {\n  background-color: #7bffc1 !important;\n}.border-success.border-accent-3 {\n  border: 1px solid #7bffc1 !important;\n}.border-top-success.border-top-accent-3 {\n  border-top: 1px solid #7bffc1 !important;\n}.border-bottom-success.border-bottom-accent-3 {\n  border-bottom: 1px solid #7bffc1 !important;\n}.border-left-success.border-left-accent-3 {\n  border-left: 1px solid #7bffc1 !important;\n}.border-right-success.border-right-accent-3 {\n  border-right: 1px solid #7bffc1 !important;\n}.overlay-success.overlay-accent-3 {\n  background: #7bffc1;\n  /* The Fallback */\n  background: rgba(123, 255, 193, 0.6);\n}.text-success.text-accent-4 {\n  color: #62ffb5 !important;\n}.bg-success.bg-accent-4 {\n  background-color: #62ffb5 !important;\n}.border-success.border-accent-4 {\n  border: 1px solid #62ffb5 !important;\n}.border-top-success.border-top-accent-4 {\n  border-top: 1px solid #62ffb5 !important;\n}.border-bottom-success.border-bottom-accent-4 {\n  border-bottom: 1px solid #62ffb5 !important;\n}.border-left-success.border-left-accent-4 {\n  border-left: 1px solid #62ffb5 !important;\n}.border-right-success.border-right-accent-4 {\n  border-right: 1px solid #62ffb5 !important;\n}.overlay-success.overlay-accent-4 {\n  background: #62ffb5;\n  /* The Fallback */\n  background: rgba(98, 255, 181, 0.6);\n}.text-info.text-lighten-5 {\n  color: #69efff !important;\n}.bg-info.bg-lighten-5 {\n  background-color: #69efff !important;\n}.border-info.border-lighten-5 {\n  border: 1px solid #69efff !important;\n}.border-top-info.border-top-lighten-5 {\n  border-top: 1px solid #69efff !important;\n}.border-bottom-info.border-bottom-lighten-5 {\n  border-bottom: 1px solid #69efff !important;\n}.border-left-info.border-left-lighten-5 {\n  border-left: 1px solid #69efff !important;\n}.border-right-info.border-right-lighten-5 {\n  border-right: 1px solid #69efff !important;\n}.overlay-info.overlay-lighten-5 {\n  background: #69efff;\n  /* The Fallback */\n  background: rgba(105, 239, 255, 0.6);\n}.text-info.text-lighten-4 {\n  color: #4fecff !important;\n}.bg-info.bg-lighten-4 {\n  background-color: #4fecff !important;\n}.border-info.border-lighten-4 {\n  border: 1px solid #4fecff !important;\n}.border-top-info.border-top-lighten-4 {\n  border-top: 1px solid #4fecff !important;\n}.border-bottom-info.border-bottom-lighten-4 {\n  border-bottom: 1px solid #4fecff !important;\n}.border-left-info.border-left-lighten-4 {\n  border-left: 1px solid #4fecff !important;\n}.border-right-info.border-right-lighten-4 {\n  border-right: 1px solid #4fecff !important;\n}.overlay-info.overlay-lighten-4 {\n  background: #4fecff;\n  /* The Fallback */\n  background: rgba(79, 236, 255, 0.6);\n}.text-info.text-lighten-3 {\n  color: #36e9ff !important;\n}.bg-info.bg-lighten-3 {\n  background-color: #36e9ff !important;\n}.border-info.border-lighten-3 {\n  border: 1px solid #36e9ff !important;\n}.border-top-info.border-top-lighten-3 {\n  border-top: 1px solid #36e9ff !important;\n}.border-bottom-info.border-bottom-lighten-3 {\n  border-bottom: 1px solid #36e9ff !important;\n}.border-left-info.border-left-lighten-3 {\n  border-left: 1px solid #36e9ff !important;\n}.border-right-info.border-right-lighten-3 {\n  border-right: 1px solid #36e9ff !important;\n}.overlay-info.overlay-lighten-3 {\n  background: #36e9ff;\n  /* The Fallback */\n  background: rgba(54, 233, 255, 0.6);\n}.text-info.text-lighten-2 {\n  color: #1ce7ff !important;\n}.bg-info.bg-lighten-2 {\n  background-color: #1ce7ff !important;\n}.border-info.border-lighten-2 {\n  border: 1px solid #1ce7ff !important;\n}.border-top-info.border-top-lighten-2 {\n  border-top: 1px solid #1ce7ff !important;\n}.border-bottom-info.border-bottom-lighten-2 {\n  border-bottom: 1px solid #1ce7ff !important;\n}.border-left-info.border-left-lighten-2 {\n  border-left: 1px solid #1ce7ff !important;\n}.border-right-info.border-right-lighten-2 {\n  border-right: 1px solid #1ce7ff !important;\n}.overlay-info.overlay-lighten-2 {\n  background: #1ce7ff;\n  /* The Fallback */\n  background: rgba(28, 231, 255, 0.6);\n}.text-info.text-lighten-1 {\n  color: #03e4ff !important;\n}.bg-info.bg-lighten-1 {\n  background-color: #03e4ff !important;\n}.border-info.border-lighten-1 {\n  border: 1px solid #03e4ff !important;\n}.border-top-info.border-top-lighten-1 {\n  border-top: 1px solid #03e4ff !important;\n}.border-bottom-info.border-bottom-lighten-1 {\n  border-bottom: 1px solid #03e4ff !important;\n}.border-left-info.border-left-lighten-1 {\n  border-left: 1px solid #03e4ff !important;\n}.border-right-info.border-right-lighten-1 {\n  border-right: 1px solid #03e4ff !important;\n}.overlay-info.overlay-lighten-1 {\n  background: #03e4ff;\n  /* The Fallback */\n  background: rgba(3, 228, 255, 0.6);\n}.bg-info {\n  background-color: #00cfe8 !important;\n}.bg-info .card-header,\n.bg-info .card-footer {\n  background-color: transparent;\n}.alert-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.alert-info .alert-heading {\n  box-shadow: rgba(0, 207, 232, 0.4) 0px 6px 15px -7px;\n}.alert-info .alert-link {\n  color: #00b8cf !important;\n}.alert-info .close {\n  color: #00cfe8 !important;\n}.bg-light-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.bg-light-info.fc-h-event, .bg-light-info.fc-v-event {\n  border-color: rgba(0, 207, 232, 0.1);\n}.bg-light-info .fc-list-event-dot,\n.bg-light-info .fc-daygrid-event-dot {\n  border-color: #00cfe8 !important;\n}.bg-light-info.fc-list-event:hover td {\n  background: rgba(0, 207, 232, 0.1) !important;\n}.bg-light-info.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-info {\n  color: #00cfe8 !important;\n}.border-info {\n  border: 1px solid #00cfe8 !important;\n}.border-top-info {\n  border-top: 1px solid #00cfe8;\n}.border-bottom-info {\n  border-bottom: 1px solid #00cfe8;\n}.border-left-info {\n  border-left: 1px solid #00cfe8;\n}.border-right-info {\n  border-right: 1px solid #00cfe8;\n}.bg-info.badge-glow,\n.border-info.badge-glow,\n.badge-info.badge-glow {\n  box-shadow: 0px 0px 10px #00cfe8;\n}.badge.badge-light-info {\n  background-color: rgba(0, 207, 232, 0.12);\n  color: #00cfe8 !important;\n}.overlay-info {\n  background: #00cfe8;\n  /* The Fallback */\n  background: rgba(0, 207, 232, 0.6);\n}.btn-info {\n  border-color: #00cfe8 !important;\n  background-color: #00cfe8 !important;\n  color: #fff !important;\n}.btn-info:focus, .btn-info:active, .btn-info.active {\n  color: #fff;\n  background-color: #00b8cf !important;\n}.btn-info:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #00cfe8;\n}.btn-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-info {\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-flat-info:hover {\n  color: #00cfe8;\n}.btn-flat-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.12);\n}.btn-flat-info:active, .btn-flat-info.active, .btn-flat-info:focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-flat-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-info {\n  background-color: #00cfe8;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-info:hover:not(.disabled):not(:disabled) {\n  background-color: #03e4ff;\n}.btn-relief-info:active, .btn-relief-info.active, .btn-relief-info:focus {\n  background-color: #00b8cf;\n}.btn-relief-info:hover {\n  color: #fff;\n}.btn-relief-info:active, .btn-relief-info.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-info {\n  border: 1px solid #00cfe8 !important;\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-outline-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.04);\n  color: #00cfe8;\n}.btn-outline-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .btn-outline-info:not(:disabled):not(.disabled):focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-info.dropdown-toggle {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.waves-effect .waves-ripple,\n.btn-flat-info.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(0, 207, 232, 0.2) 0, rgba(0, 207, 232, 0.3) 40%, rgba(0, 207, 232, 0.4) 50%, rgba(0, 207, 232, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-info {\n  background-color: #00cfe8;\n}.modal.modal-info .modal-header .modal-title {\n  color: #00cfe8;\n}.modal.modal-info .modal-header .close {\n  color: #00cfe8 !important;\n}.pagination-info .page-item.active .page-link {\n  background: #00cfe8 !important;\n  color: #fff;\n}.pagination-info .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-info .page-item .page-link:hover {\n  color: #00cfe8;\n}.pagination-info .page-item.prev-item .page-link:hover, .pagination-info .page-item.next-item .page-link:hover {\n  background: #00cfe8;\n  color: #fff;\n}.pagination-info .page-item.next-item .page-link:active:after, .pagination-info .page-item.next-item .page-link:hover:after, .pagination-info .page-item.next .page-link:active:after, .pagination-info .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-info .page-item.prev-item .page-link:active:before, .pagination-info .page-item.prev-item .page-link:hover:before, .pagination-info .page-item.prev .page-link:active:before, .pagination-info .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-info .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #00cfe8 !important;\n  border-color: #00cfe8;\n  box-shadow: 0 4px 18px -4px rgba(0, 207, 232, 0.65);\n}.progress-bar-info {\n  background-color: rgba(0, 207, 232, 0.12);\n}.progress-bar-info .progress-bar {\n  background-color: #00cfe8;\n}.timeline .timeline-point-info {\n  border-color: #00cfe8 !important;\n}.timeline .timeline-point-info i,\n.timeline .timeline-point-info svg {\n  stroke: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator {\n  background-color: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator:before {\n  background: rgba(0, 207, 232, 0.12) !important;\n}.divider.divider-info .divider-text:before, .divider.divider-info .divider-text:after {\n  border-color: #00cfe8 !important;\n}input:focus ~ .bg-info {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #00cfe8 !important;\n}.custom-control-info .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #00cfe8;\n  background-color: #00cfe8;\n}.custom-control-info.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-info.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(0, 207, 232, 0.4) !important;\n}.custom-control-info .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 207, 232, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-info .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #00cfe8 !important;\n}.custom-switch-info .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #00cfe8 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-info .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #00cfe8 !important;\n  border-color: #00cfe8 !important;\n}.text-info.text-darken-1 {\n  color: #00b8cf !important;\n}.bg-info.bg-darken-1 {\n  background-color: #00b8cf !important;\n}.border-info.border-darken-1 {\n  border: 1px solid #00b8cf !important;\n}.border-top-info.border-top-darken-1 {\n  border-top: 1px solid #00b8cf !important;\n}.border-bottom-info.border-bottom-darken-1 {\n  border-bottom: 1px solid #00b8cf !important;\n}.border-left-info.border-left-darken-1 {\n  border-left: 1px solid #00b8cf !important;\n}.border-right-info.border-right-darken-1 {\n  border-right: 1px solid #00b8cf !important;\n}.overlay-info.overlay-darken-1 {\n  background: #00b8cf;\n  /* The Fallback */\n  background: rgba(0, 184, 207, 0.6);\n}.text-info.text-darken-2 {\n  color: #00a1b5 !important;\n}.bg-info.bg-darken-2 {\n  background-color: #00a1b5 !important;\n}.border-info.border-darken-2 {\n  border: 1px solid #00a1b5 !important;\n}.border-top-info.border-top-darken-2 {\n  border-top: 1px solid #00a1b5 !important;\n}.border-bottom-info.border-bottom-darken-2 {\n  border-bottom: 1px solid #00a1b5 !important;\n}.border-left-info.border-left-darken-2 {\n  border-left: 1px solid #00a1b5 !important;\n}.border-right-info.border-right-darken-2 {\n  border-right: 1px solid #00a1b5 !important;\n}.overlay-info.overlay-darken-2 {\n  background: #00a1b5;\n  /* The Fallback */\n  background: rgba(0, 161, 181, 0.6);\n}.text-info.text-darken-3 {\n  color: #008b9c !important;\n}.bg-info.bg-darken-3 {\n  background-color: #008b9c !important;\n}.border-info.border-darken-3 {\n  border: 1px solid #008b9c !important;\n}.border-top-info.border-top-darken-3 {\n  border-top: 1px solid #008b9c !important;\n}.border-bottom-info.border-bottom-darken-3 {\n  border-bottom: 1px solid #008b9c !important;\n}.border-left-info.border-left-darken-3 {\n  border-left: 1px solid #008b9c !important;\n}.border-right-info.border-right-darken-3 {\n  border-right: 1px solid #008b9c !important;\n}.overlay-info.overlay-darken-3 {\n  background: #008b9c;\n  /* The Fallback */\n  background: rgba(0, 139, 156, 0.6);\n}.text-info.text-darken-4 {\n  color: #007482 !important;\n}.bg-info.bg-darken-4 {\n  background-color: #007482 !important;\n}.border-info.border-darken-4 {\n  border: 1px solid #007482 !important;\n}.border-top-info.border-top-darken-4 {\n  border-top: 1px solid #007482 !important;\n}.border-bottom-info.border-bottom-darken-4 {\n  border-bottom: 1px solid #007482 !important;\n}.border-left-info.border-left-darken-4 {\n  border-left: 1px solid #007482 !important;\n}.border-right-info.border-right-darken-4 {\n  border-right: 1px solid #007482 !important;\n}.overlay-info.overlay-darken-4 {\n  background: #007482;\n  /* The Fallback */\n  background: rgba(0, 116, 130, 0.6);\n}.text-info.text-accent-1 {\n  color: #feffff !important;\n}.bg-info.bg-accent-1 {\n  background-color: #feffff !important;\n}.border-info.border-accent-1 {\n  border: 1px solid #feffff !important;\n}.border-top-info.border-top-accent-1 {\n  border-top: 1px solid #feffff !important;\n}.border-bottom-info.border-bottom-accent-1 {\n  border-bottom: 1px solid #feffff !important;\n}.border-left-info.border-left-accent-1 {\n  border-left: 1px solid #feffff !important;\n}.border-right-info.border-right-accent-1 {\n  border-right: 1px solid #feffff !important;\n}.overlay-info.overlay-accent-1 {\n  background: #feffff;\n  /* The Fallback */\n  background: rgba(254, 255, 255, 0.6);\n}.text-info.text-accent-2 {\n  color: #cbf5ff !important;\n}.bg-info.bg-accent-2 {\n  background-color: #cbf5ff !important;\n}.border-info.border-accent-2 {\n  border: 1px solid #cbf5ff !important;\n}.border-top-info.border-top-accent-2 {\n  border-top: 1px solid #cbf5ff !important;\n}.border-bottom-info.border-bottom-accent-2 {\n  border-bottom: 1px solid #cbf5ff !important;\n}.border-left-info.border-left-accent-2 {\n  border-left: 1px solid #cbf5ff !important;\n}.border-right-info.border-right-accent-2 {\n  border-right: 1px solid #cbf5ff !important;\n}.overlay-info.overlay-accent-2 {\n  background: #cbf5ff;\n  /* The Fallback */\n  background: rgba(203, 245, 255, 0.6);\n}.text-info.text-accent-3 {\n  color: #98ecff !important;\n}.bg-info.bg-accent-3 {\n  background-color: #98ecff !important;\n}.border-info.border-accent-3 {\n  border: 1px solid #98ecff !important;\n}.border-top-info.border-top-accent-3 {\n  border-top: 1px solid #98ecff !important;\n}.border-bottom-info.border-bottom-accent-3 {\n  border-bottom: 1px solid #98ecff !important;\n}.border-left-info.border-left-accent-3 {\n  border-left: 1px solid #98ecff !important;\n}.border-right-info.border-right-accent-3 {\n  border-right: 1px solid #98ecff !important;\n}.overlay-info.overlay-accent-3 {\n  background: #98ecff;\n  /* The Fallback */\n  background: rgba(152, 236, 255, 0.6);\n}.text-info.text-accent-4 {\n  color: #7fe7ff !important;\n}.bg-info.bg-accent-4 {\n  background-color: #7fe7ff !important;\n}.border-info.border-accent-4 {\n  border: 1px solid #7fe7ff !important;\n}.border-top-info.border-top-accent-4 {\n  border-top: 1px solid #7fe7ff !important;\n}.border-bottom-info.border-bottom-accent-4 {\n  border-bottom: 1px solid #7fe7ff !important;\n}.border-left-info.border-left-accent-4 {\n  border-left: 1px solid #7fe7ff !important;\n}.border-right-info.border-right-accent-4 {\n  border-right: 1px solid #7fe7ff !important;\n}.overlay-info.overlay-accent-4 {\n  background: #7fe7ff;\n  /* The Fallback */\n  background: rgba(127, 231, 255, 0.6);\n}.text-warning.text-lighten-5 {\n  color: #ffe0c3 !important;\n}.bg-warning.bg-lighten-5 {\n  background-color: #ffe0c3 !important;\n}.border-warning.border-lighten-5 {\n  border: 1px solid #ffe0c3 !important;\n}.border-top-warning.border-top-lighten-5 {\n  border-top: 1px solid #ffe0c3 !important;\n}.border-bottom-warning.border-bottom-lighten-5 {\n  border-bottom: 1px solid #ffe0c3 !important;\n}.border-left-warning.border-left-lighten-5 {\n  border-left: 1px solid #ffe0c3 !important;\n}.border-right-warning.border-right-lighten-5 {\n  border-right: 1px solid #ffe0c3 !important;\n}.overlay-warning.overlay-lighten-5 {\n  background: #ffe0c3;\n  /* The Fallback */\n  background: rgba(255, 224, 195, 0.6);\n}.text-warning.text-lighten-4 {\n  color: #ffd3a9 !important;\n}.bg-warning.bg-lighten-4 {\n  background-color: #ffd3a9 !important;\n}.border-warning.border-lighten-4 {\n  border: 1px solid #ffd3a9 !important;\n}.border-top-warning.border-top-lighten-4 {\n  border-top: 1px solid #ffd3a9 !important;\n}.border-bottom-warning.border-bottom-lighten-4 {\n  border-bottom: 1px solid #ffd3a9 !important;\n}.border-left-warning.border-left-lighten-4 {\n  border-left: 1px solid #ffd3a9 !important;\n}.border-right-warning.border-right-lighten-4 {\n  border-right: 1px solid #ffd3a9 !important;\n}.overlay-warning.overlay-lighten-4 {\n  background: #ffd3a9;\n  /* The Fallback */\n  background: rgba(255, 211, 169, 0.6);\n}.text-warning.text-lighten-3 {\n  color: #ffc690 !important;\n}.bg-warning.bg-lighten-3 {\n  background-color: #ffc690 !important;\n}.border-warning.border-lighten-3 {\n  border: 1px solid #ffc690 !important;\n}.border-top-warning.border-top-lighten-3 {\n  border-top: 1px solid #ffc690 !important;\n}.border-bottom-warning.border-bottom-lighten-3 {\n  border-bottom: 1px solid #ffc690 !important;\n}.border-left-warning.border-left-lighten-3 {\n  border-left: 1px solid #ffc690 !important;\n}.border-right-warning.border-right-lighten-3 {\n  border-right: 1px solid #ffc690 !important;\n}.overlay-warning.overlay-lighten-3 {\n  background: #ffc690;\n  /* The Fallback */\n  background: rgba(255, 198, 144, 0.6);\n}.text-warning.text-lighten-2 {\n  color: #ffb976 !important;\n}.bg-warning.bg-lighten-2 {\n  background-color: #ffb976 !important;\n}.border-warning.border-lighten-2 {\n  border: 1px solid #ffb976 !important;\n}.border-top-warning.border-top-lighten-2 {\n  border-top: 1px solid #ffb976 !important;\n}.border-bottom-warning.border-bottom-lighten-2 {\n  border-bottom: 1px solid #ffb976 !important;\n}.border-left-warning.border-left-lighten-2 {\n  border-left: 1px solid #ffb976 !important;\n}.border-right-warning.border-right-lighten-2 {\n  border-right: 1px solid #ffb976 !important;\n}.overlay-warning.overlay-lighten-2 {\n  background: #ffb976;\n  /* The Fallback */\n  background: rgba(255, 185, 118, 0.6);\n}.text-warning.text-lighten-1 {\n  color: #ffac5d !important;\n}.bg-warning.bg-lighten-1 {\n  background-color: #ffac5d !important;\n}.border-warning.border-lighten-1 {\n  border: 1px solid #ffac5d !important;\n}.border-top-warning.border-top-lighten-1 {\n  border-top: 1px solid #ffac5d !important;\n}.border-bottom-warning.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ffac5d !important;\n}.border-left-warning.border-left-lighten-1 {\n  border-left: 1px solid #ffac5d !important;\n}.border-right-warning.border-right-lighten-1 {\n  border-right: 1px solid #ffac5d !important;\n}.overlay-warning.overlay-lighten-1 {\n  background: #ffac5d;\n  /* The Fallback */\n  background: rgba(255, 172, 93, 0.6);\n}.bg-warning {\n  background-color: #ff9f43 !important;\n}.bg-warning .card-header,\n.bg-warning .card-footer {\n  background-color: transparent;\n}.alert-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.alert-warning .alert-heading {\n  box-shadow: rgba(255, 159, 67, 0.4) 0px 6px 15px -7px;\n}.alert-warning .alert-link {\n  color: #ff922a !important;\n}.alert-warning .close {\n  color: #ff9f43 !important;\n}.bg-light-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.bg-light-warning.fc-h-event, .bg-light-warning.fc-v-event {\n  border-color: rgba(255, 159, 67, 0.1);\n}.bg-light-warning .fc-list-event-dot,\n.bg-light-warning .fc-daygrid-event-dot {\n  border-color: #ff9f43 !important;\n}.bg-light-warning.fc-list-event:hover td {\n  background: rgba(255, 159, 67, 0.1) !important;\n}.bg-light-warning.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-warning {\n  color: #ff9f43 !important;\n}.border-warning {\n  border: 1px solid #ff9f43 !important;\n}.border-top-warning {\n  border-top: 1px solid #ff9f43;\n}.border-bottom-warning {\n  border-bottom: 1px solid #ff9f43;\n}.border-left-warning {\n  border-left: 1px solid #ff9f43;\n}.border-right-warning {\n  border-right: 1px solid #ff9f43;\n}.bg-warning.badge-glow,\n.border-warning.badge-glow,\n.badge-warning.badge-glow {\n  box-shadow: 0px 0px 10px #ff9f43;\n}.badge.badge-light-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n  color: #ff9f43 !important;\n}.overlay-warning {\n  background: #ff9f43;\n  /* The Fallback */\n  background: rgba(255, 159, 67, 0.6);\n}.btn-warning {\n  border-color: #ff9f43 !important;\n  background-color: #ff9f43 !important;\n  color: #fff !important;\n}.btn-warning:focus, .btn-warning:active, .btn-warning.active {\n  color: #fff;\n  background-color: #ff922a !important;\n}.btn-warning:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ff9f43;\n}.btn-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-warning {\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-flat-warning:hover {\n  color: #ff9f43;\n}.btn-flat-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.12);\n}.btn-flat-warning:active, .btn-flat-warning.active, .btn-flat-warning:focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-flat-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-warning {\n  background-color: #ff9f43;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-warning:hover:not(.disabled):not(:disabled) {\n  background-color: #ffac5d;\n}.btn-relief-warning:active, .btn-relief-warning.active, .btn-relief-warning:focus {\n  background-color: #ff922a;\n}.btn-relief-warning:hover {\n  color: #fff;\n}.btn-relief-warning:active, .btn-relief-warning.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-warning {\n  border: 1px solid #ff9f43 !important;\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-outline-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.04);\n  color: #ff9f43;\n}.btn-outline-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .btn-outline-warning:not(:disabled):not(.disabled):focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-warning.dropdown-toggle {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.waves-effect .waves-ripple,\n.btn-flat-warning.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(255, 159, 67, 0.2) 0, rgba(255, 159, 67, 0.3) 40%, rgba(255, 159, 67, 0.4) 50%, rgba(255, 159, 67, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-warning {\n  background-color: #ff9f43;\n}.modal.modal-warning .modal-header .modal-title {\n  color: #ff9f43;\n}.modal.modal-warning .modal-header .close {\n  color: #ff9f43 !important;\n}.pagination-warning .page-item.active .page-link {\n  background: #ff9f43 !important;\n  color: #fff;\n}.pagination-warning .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-warning .page-item .page-link:hover {\n  color: #ff9f43;\n}.pagination-warning .page-item.prev-item .page-link:hover, .pagination-warning .page-item.next-item .page-link:hover {\n  background: #ff9f43;\n  color: #fff;\n}.pagination-warning .page-item.next-item .page-link:active:after, .pagination-warning .page-item.next-item .page-link:hover:after, .pagination-warning .page-item.next .page-link:active:after, .pagination-warning .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-warning .page-item.prev-item .page-link:active:before, .pagination-warning .page-item.prev-item .page-link:hover:before, .pagination-warning .page-item.prev .page-link:active:before, .pagination-warning .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-warning .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ff9f43 !important;\n  border-color: #ff9f43;\n  box-shadow: 0 4px 18px -4px rgba(255, 159, 67, 0.65);\n}.progress-bar-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n}.progress-bar-warning .progress-bar {\n  background-color: #ff9f43;\n}.timeline .timeline-point-warning {\n  border-color: #ff9f43 !important;\n}.timeline .timeline-point-warning i,\n.timeline .timeline-point-warning svg {\n  stroke: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator {\n  background-color: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator:before {\n  background: rgba(255, 159, 67, 0.12) !important;\n}.divider.divider-warning .divider-text:before, .divider.divider-warning .divider-text:after {\n  border-color: #ff9f43 !important;\n}input:focus ~ .bg-warning {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ff9f43 !important;\n}.custom-control-warning .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ff9f43;\n  background-color: #ff9f43;\n}.custom-control-warning.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-warning.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(255, 159, 67, 0.4) !important;\n}.custom-control-warning .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(255, 159, 67, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-warning .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ff9f43 !important;\n}.custom-switch-warning .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ff9f43 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-warning .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ff9f43 !important;\n  border-color: #ff9f43 !important;\n}.text-warning.text-darken-1 {\n  color: #ff922a !important;\n}.bg-warning.bg-darken-1 {\n  background-color: #ff922a !important;\n}.border-warning.border-darken-1 {\n  border: 1px solid #ff922a !important;\n}.border-top-warning.border-top-darken-1 {\n  border-top: 1px solid #ff922a !important;\n}.border-bottom-warning.border-bottom-darken-1 {\n  border-bottom: 1px solid #ff922a !important;\n}.border-left-warning.border-left-darken-1 {\n  border-left: 1px solid #ff922a !important;\n}.border-right-warning.border-right-darken-1 {\n  border-right: 1px solid #ff922a !important;\n}.overlay-warning.overlay-darken-1 {\n  background: #ff922a;\n  /* The Fallback */\n  background: rgba(255, 146, 42, 0.6);\n}.text-warning.text-darken-2 {\n  color: #ff8510 !important;\n}.bg-warning.bg-darken-2 {\n  background-color: #ff8510 !important;\n}.border-warning.border-darken-2 {\n  border: 1px solid #ff8510 !important;\n}.border-top-warning.border-top-darken-2 {\n  border-top: 1px solid #ff8510 !important;\n}.border-bottom-warning.border-bottom-darken-2 {\n  border-bottom: 1px solid #ff8510 !important;\n}.border-left-warning.border-left-darken-2 {\n  border-left: 1px solid #ff8510 !important;\n}.border-right-warning.border-right-darken-2 {\n  border-right: 1px solid #ff8510 !important;\n}.overlay-warning.overlay-darken-2 {\n  background: #ff8510;\n  /* The Fallback */\n  background: rgba(255, 133, 16, 0.6);\n}.text-warning.text-darken-3 {\n  color: #f67800 !important;\n}.bg-warning.bg-darken-3 {\n  background-color: #f67800 !important;\n}.border-warning.border-darken-3 {\n  border: 1px solid #f67800 !important;\n}.border-top-warning.border-top-darken-3 {\n  border-top: 1px solid #f67800 !important;\n}.border-bottom-warning.border-bottom-darken-3 {\n  border-bottom: 1px solid #f67800 !important;\n}.border-left-warning.border-left-darken-3 {\n  border-left: 1px solid #f67800 !important;\n}.border-right-warning.border-right-darken-3 {\n  border-right: 1px solid #f67800 !important;\n}.overlay-warning.overlay-darken-3 {\n  background: #f67800;\n  /* The Fallback */\n  background: rgba(246, 120, 0, 0.6);\n}.text-warning.text-darken-4 {\n  color: #dc6c00 !important;\n}.bg-warning.bg-darken-4 {\n  background-color: #dc6c00 !important;\n}.border-warning.border-darken-4 {\n  border: 1px solid #dc6c00 !important;\n}.border-top-warning.border-top-darken-4 {\n  border-top: 1px solid #dc6c00 !important;\n}.border-bottom-warning.border-bottom-darken-4 {\n  border-bottom: 1px solid #dc6c00 !important;\n}.border-left-warning.border-left-darken-4 {\n  border-left: 1px solid #dc6c00 !important;\n}.border-right-warning.border-right-darken-4 {\n  border-right: 1px solid #dc6c00 !important;\n}.overlay-warning.overlay-darken-4 {\n  background: #dc6c00;\n  /* The Fallback */\n  background: rgba(220, 108, 0, 0.6);\n}.text-warning.text-accent-1 {\n  color: #fff5ef !important;\n}.bg-warning.bg-accent-1 {\n  background-color: #fff5ef !important;\n}.border-warning.border-accent-1 {\n  border: 1px solid #fff5ef !important;\n}.border-top-warning.border-top-accent-1 {\n  border-top: 1px solid #fff5ef !important;\n}.border-bottom-warning.border-bottom-accent-1 {\n  border-bottom: 1px solid #fff5ef !important;\n}.border-left-warning.border-left-accent-1 {\n  border-left: 1px solid #fff5ef !important;\n}.border-right-warning.border-right-accent-1 {\n  border-right: 1px solid #fff5ef !important;\n}.overlay-warning.overlay-accent-1 {\n  background: #fff5ef;\n  /* The Fallback */\n  background: rgba(255, 245, 239, 0.6);\n}.text-warning.text-accent-2 {\n  color: #ffe5d8 !important;\n}.bg-warning.bg-accent-2 {\n  background-color: #ffe5d8 !important;\n}.border-warning.border-accent-2 {\n  border: 1px solid #ffe5d8 !important;\n}.border-top-warning.border-top-accent-2 {\n  border-top: 1px solid #ffe5d8 !important;\n}.border-bottom-warning.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffe5d8 !important;\n}.border-left-warning.border-left-accent-2 {\n  border-left: 1px solid #ffe5d8 !important;\n}.border-right-warning.border-right-accent-2 {\n  border-right: 1px solid #ffe5d8 !important;\n}.overlay-warning.overlay-accent-2 {\n  background: #ffe5d8;\n  /* The Fallback */\n  background: rgba(255, 229, 216, 0.6);\n}.text-warning.text-accent-3 {\n  color: #fff6f3 !important;\n}.bg-warning.bg-accent-3 {\n  background-color: #fff6f3 !important;\n}.border-warning.border-accent-3 {\n  border: 1px solid #fff6f3 !important;\n}.border-top-warning.border-top-accent-3 {\n  border-top: 1px solid #fff6f3 !important;\n}.border-bottom-warning.border-bottom-accent-3 {\n  border-bottom: 1px solid #fff6f3 !important;\n}.border-left-warning.border-left-accent-3 {\n  border-left: 1px solid #fff6f3 !important;\n}.border-right-warning.border-right-accent-3 {\n  border-right: 1px solid #fff6f3 !important;\n}.overlay-warning.overlay-accent-3 {\n  background: #fff6f3;\n  /* The Fallback */\n  background: rgba(255, 246, 243, 0.6);\n}.text-warning.text-accent-4 {\n  color: #ffe3da !important;\n}.bg-warning.bg-accent-4 {\n  background-color: #ffe3da !important;\n}.border-warning.border-accent-4 {\n  border: 1px solid #ffe3da !important;\n}.border-top-warning.border-top-accent-4 {\n  border-top: 1px solid #ffe3da !important;\n}.border-bottom-warning.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffe3da !important;\n}.border-left-warning.border-left-accent-4 {\n  border-left: 1px solid #ffe3da !important;\n}.border-right-warning.border-right-accent-4 {\n  border-right: 1px solid #ffe3da !important;\n}.overlay-warning.overlay-accent-4 {\n  background: #ffe3da;\n  /* The Fallback */\n  background: rgba(255, 227, 218, 0.6);\n}.text-danger.text-lighten-5 {\n  color: #f8c6c6 !important;\n}.bg-danger.bg-lighten-5 {\n  background-color: #f8c6c6 !important;\n}.border-danger.border-lighten-5 {\n  border: 1px solid #f8c6c6 !important;\n}.border-top-danger.border-top-lighten-5 {\n  border-top: 1px solid #f8c6c6 !important;\n}.border-bottom-danger.border-bottom-lighten-5 {\n  border-bottom: 1px solid #f8c6c6 !important;\n}.border-left-danger.border-left-lighten-5 {\n  border-left: 1px solid #f8c6c6 !important;\n}.border-right-danger.border-right-lighten-5 {\n  border-right: 1px solid #f8c6c6 !important;\n}.overlay-danger.overlay-lighten-5 {\n  background: #f8c6c6;\n  /* The Fallback */\n  background: rgba(248, 198, 198, 0.6);\n}.text-danger.text-lighten-4 {\n  color: #f5afaf !important;\n}.bg-danger.bg-lighten-4 {\n  background-color: #f5afaf !important;\n}.border-danger.border-lighten-4 {\n  border: 1px solid #f5afaf !important;\n}.border-top-danger.border-top-lighten-4 {\n  border-top: 1px solid #f5afaf !important;\n}.border-bottom-danger.border-bottom-lighten-4 {\n  border-bottom: 1px solid #f5afaf !important;\n}.border-left-danger.border-left-lighten-4 {\n  border-left: 1px solid #f5afaf !important;\n}.border-right-danger.border-right-lighten-4 {\n  border-right: 1px solid #f5afaf !important;\n}.overlay-danger.overlay-lighten-4 {\n  background: #f5afaf;\n  /* The Fallback */\n  background: rgba(245, 175, 175, 0.6);\n}.text-danger.text-lighten-3 {\n  color: #f29899 !important;\n}.bg-danger.bg-lighten-3 {\n  background-color: #f29899 !important;\n}.border-danger.border-lighten-3 {\n  border: 1px solid #f29899 !important;\n}.border-top-danger.border-top-lighten-3 {\n  border-top: 1px solid #f29899 !important;\n}.border-bottom-danger.border-bottom-lighten-3 {\n  border-bottom: 1px solid #f29899 !important;\n}.border-left-danger.border-left-lighten-3 {\n  border-left: 1px solid #f29899 !important;\n}.border-right-danger.border-right-lighten-3 {\n  border-right: 1px solid #f29899 !important;\n}.overlay-danger.overlay-lighten-3 {\n  background: #f29899;\n  /* The Fallback */\n  background: rgba(242, 152, 153, 0.6);\n}.text-danger.text-lighten-2 {\n  color: #f08182 !important;\n}.bg-danger.bg-lighten-2 {\n  background-color: #f08182 !important;\n}.border-danger.border-lighten-2 {\n  border: 1px solid #f08182 !important;\n}.border-top-danger.border-top-lighten-2 {\n  border-top: 1px solid #f08182 !important;\n}.border-bottom-danger.border-bottom-lighten-2 {\n  border-bottom: 1px solid #f08182 !important;\n}.border-left-danger.border-left-lighten-2 {\n  border-left: 1px solid #f08182 !important;\n}.border-right-danger.border-right-lighten-2 {\n  border-right: 1px solid #f08182 !important;\n}.overlay-danger.overlay-lighten-2 {\n  background: #f08182;\n  /* The Fallback */\n  background: rgba(240, 129, 130, 0.6);\n}.text-danger.text-lighten-1 {\n  color: #ed6b6c !important;\n}.bg-danger.bg-lighten-1 {\n  background-color: #ed6b6c !important;\n}.border-danger.border-lighten-1 {\n  border: 1px solid #ed6b6c !important;\n}.border-top-danger.border-top-lighten-1 {\n  border-top: 1px solid #ed6b6c !important;\n}.border-bottom-danger.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ed6b6c !important;\n}.border-left-danger.border-left-lighten-1 {\n  border-left: 1px solid #ed6b6c !important;\n}.border-right-danger.border-right-lighten-1 {\n  border-right: 1px solid #ed6b6c !important;\n}.overlay-danger.overlay-lighten-1 {\n  background: #ed6b6c;\n  /* The Fallback */\n  background: rgba(237, 107, 108, 0.6);\n}.bg-danger {\n  background-color: #ea5455 !important;\n}.bg-danger .card-header,\n.bg-danger .card-footer {\n  background-color: transparent;\n}.alert-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.alert-danger .alert-heading {\n  box-shadow: rgba(234, 84, 85, 0.4) 0px 6px 15px -7px;\n}.alert-danger .alert-link {\n  color: #e73d3e !important;\n}.alert-danger .close {\n  color: #ea5455 !important;\n}.bg-light-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.bg-light-danger.fc-h-event, .bg-light-danger.fc-v-event {\n  border-color: rgba(234, 84, 85, 0.1);\n}.bg-light-danger .fc-list-event-dot,\n.bg-light-danger .fc-daygrid-event-dot {\n  border-color: #ea5455 !important;\n}.bg-light-danger.fc-list-event:hover td {\n  background: rgba(234, 84, 85, 0.1) !important;\n}.bg-light-danger.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-danger {\n  color: #ea5455 !important;\n}.border-danger {\n  border: 1px solid #ea5455 !important;\n}.border-top-danger {\n  border-top: 1px solid #ea5455;\n}.border-bottom-danger {\n  border-bottom: 1px solid #ea5455;\n}.border-left-danger {\n  border-left: 1px solid #ea5455;\n}.border-right-danger {\n  border-right: 1px solid #ea5455;\n}.bg-danger.badge-glow,\n.border-danger.badge-glow,\n.badge-danger.badge-glow {\n  box-shadow: 0px 0px 10px #ea5455;\n}.badge.badge-light-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n  color: #ea5455 !important;\n}.overlay-danger {\n  background: #ea5455;\n  /* The Fallback */\n  background: rgba(234, 84, 85, 0.6);\n}.btn-danger {\n  border-color: #ea5455 !important;\n  background-color: #ea5455 !important;\n  color: #fff !important;\n}.btn-danger:focus, .btn-danger:active, .btn-danger.active {\n  color: #fff;\n  background-color: #e73d3e !important;\n}.btn-danger:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ea5455;\n}.btn-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-danger {\n  background-color: transparent;\n  color: #ea5455;\n}.btn-flat-danger:hover {\n  color: #ea5455;\n}.btn-flat-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.12);\n}.btn-flat-danger:active, .btn-flat-danger.active, .btn-flat-danger:focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-flat-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-danger {\n  background-color: #ea5455;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-danger:hover:not(.disabled):not(:disabled) {\n  background-color: #ed6b6c;\n}.btn-relief-danger:active, .btn-relief-danger.active, .btn-relief-danger:focus {\n  background-color: #e73d3e;\n}.btn-relief-danger:hover {\n  color: #fff;\n}.btn-relief-danger:active, .btn-relief-danger.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-danger {\n  border: 1px solid #ea5455 !important;\n  background-color: transparent;\n  color: #ea5455;\n}.btn-outline-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.04);\n  color: #ea5455;\n}.btn-outline-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .btn-outline-danger:not(:disabled):not(.disabled):focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-danger.dropdown-toggle {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.waves-effect .waves-ripple,\n.btn-flat-danger.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(234, 84, 85, 0.2) 0, rgba(234, 84, 85, 0.3) 40%, rgba(234, 84, 85, 0.4) 50%, rgba(234, 84, 85, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-danger {\n  background-color: #ea5455;\n}.modal.modal-danger .modal-header .modal-title {\n  color: #ea5455;\n}.modal.modal-danger .modal-header .close {\n  color: #ea5455 !important;\n}.pagination-danger .page-item.active .page-link {\n  background: #ea5455 !important;\n  color: #fff;\n}.pagination-danger .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-danger .page-item .page-link:hover {\n  color: #ea5455;\n}.pagination-danger .page-item.prev-item .page-link:hover, .pagination-danger .page-item.next-item .page-link:hover {\n  background: #ea5455;\n  color: #fff;\n}.pagination-danger .page-item.next-item .page-link:active:after, .pagination-danger .page-item.next-item .page-link:hover:after, .pagination-danger .page-item.next .page-link:active:after, .pagination-danger .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-danger .page-item.prev-item .page-link:active:before, .pagination-danger .page-item.prev-item .page-link:hover:before, .pagination-danger .page-item.prev .page-link:active:before, .pagination-danger .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-danger .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ea5455 !important;\n  border-color: #ea5455;\n  box-shadow: 0 4px 18px -4px rgba(234, 84, 85, 0.65);\n}.progress-bar-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n}.progress-bar-danger .progress-bar {\n  background-color: #ea5455;\n}.timeline .timeline-point-danger {\n  border-color: #ea5455 !important;\n}.timeline .timeline-point-danger i,\n.timeline .timeline-point-danger svg {\n  stroke: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator {\n  background-color: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator:before {\n  background: rgba(234, 84, 85, 0.12) !important;\n}.divider.divider-danger .divider-text:before, .divider.divider-danger .divider-text:after {\n  border-color: #ea5455 !important;\n}input:focus ~ .bg-danger {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ea5455 !important;\n}.custom-control-danger .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ea5455;\n  background-color: #ea5455;\n}.custom-control-danger.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-danger.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(234, 84, 85, 0.4) !important;\n}.custom-control-danger .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(234, 84, 85, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-danger .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ea5455 !important;\n}.custom-switch-danger .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ea5455 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-danger .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ea5455 !important;\n  border-color: #ea5455 !important;\n}.text-danger.text-darken-1 {\n  color: #e73d3e !important;\n}.bg-danger.bg-darken-1 {\n  background-color: #e73d3e !important;\n}.border-danger.border-darken-1 {\n  border: 1px solid #e73d3e !important;\n}.border-top-danger.border-top-darken-1 {\n  border-top: 1px solid #e73d3e !important;\n}.border-bottom-danger.border-bottom-darken-1 {\n  border-bottom: 1px solid #e73d3e !important;\n}.border-left-danger.border-left-darken-1 {\n  border-left: 1px solid #e73d3e !important;\n}.border-right-danger.border-right-darken-1 {\n  border-right: 1px solid #e73d3e !important;\n}.overlay-danger.overlay-darken-1 {\n  background: #e73d3e;\n  /* The Fallback */\n  background: rgba(231, 61, 62, 0.6);\n}.text-danger.text-darken-2 {\n  color: #e42728 !important;\n}.bg-danger.bg-darken-2 {\n  background-color: #e42728 !important;\n}.border-danger.border-darken-2 {\n  border: 1px solid #e42728 !important;\n}.border-top-danger.border-top-darken-2 {\n  border-top: 1px solid #e42728 !important;\n}.border-bottom-danger.border-bottom-darken-2 {\n  border-bottom: 1px solid #e42728 !important;\n}.border-left-danger.border-left-darken-2 {\n  border-left: 1px solid #e42728 !important;\n}.border-right-danger.border-right-darken-2 {\n  border-right: 1px solid #e42728 !important;\n}.overlay-danger.overlay-darken-2 {\n  background: #e42728;\n  /* The Fallback */\n  background: rgba(228, 39, 40, 0.6);\n}.text-danger.text-darken-3 {\n  color: #d71a1c !important;\n}.bg-danger.bg-darken-3 {\n  background-color: #d71a1c !important;\n}.border-danger.border-darken-3 {\n  border: 1px solid #d71a1c !important;\n}.border-top-danger.border-top-darken-3 {\n  border-top: 1px solid #d71a1c !important;\n}.border-bottom-danger.border-bottom-darken-3 {\n  border-bottom: 1px solid #d71a1c !important;\n}.border-left-danger.border-left-darken-3 {\n  border-left: 1px solid #d71a1c !important;\n}.border-right-danger.border-right-darken-3 {\n  border-right: 1px solid #d71a1c !important;\n}.overlay-danger.overlay-darken-3 {\n  background: #d71a1c;\n  /* The Fallback */\n  background: rgba(215, 26, 28, 0.6);\n}.text-danger.text-darken-4 {\n  color: #c01819 !important;\n}.bg-danger.bg-darken-4 {\n  background-color: #c01819 !important;\n}.border-danger.border-darken-4 {\n  border: 1px solid #c01819 !important;\n}.border-top-danger.border-top-darken-4 {\n  border-top: 1px solid #c01819 !important;\n}.border-bottom-danger.border-bottom-darken-4 {\n  border-bottom: 1px solid #c01819 !important;\n}.border-left-danger.border-left-darken-4 {\n  border-left: 1px solid #c01819 !important;\n}.border-right-danger.border-right-darken-4 {\n  border-right: 1px solid #c01819 !important;\n}.overlay-danger.overlay-darken-4 {\n  background: #c01819;\n  /* The Fallback */\n  background: rgba(192, 24, 25, 0.6);\n}.text-danger.text-accent-1 {\n  color: #ffeef1 !important;\n}.bg-danger.bg-accent-1 {\n  background-color: #ffeef1 !important;\n}.border-danger.border-accent-1 {\n  border: 1px solid #ffeef1 !important;\n}.border-top-danger.border-top-accent-1 {\n  border-top: 1px solid #ffeef1 !important;\n}.border-bottom-danger.border-bottom-accent-1 {\n  border-bottom: 1px solid #ffeef1 !important;\n}.border-left-danger.border-left-accent-1 {\n  border-left: 1px solid #ffeef1 !important;\n}.border-right-danger.border-right-accent-1 {\n  border-right: 1px solid #ffeef1 !important;\n}.overlay-danger.overlay-accent-1 {\n  background: #ffeef1;\n  /* The Fallback */\n  background: rgba(255, 238, 241, 0.6);\n}.text-danger.text-accent-2 {\n  color: #ffd6db !important;\n}.bg-danger.bg-accent-2 {\n  background-color: #ffd6db !important;\n}.border-danger.border-accent-2 {\n  border: 1px solid #ffd6db !important;\n}.border-top-danger.border-top-accent-2 {\n  border-top: 1px solid #ffd6db !important;\n}.border-bottom-danger.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffd6db !important;\n}.border-left-danger.border-left-accent-2 {\n  border-left: 1px solid #ffd6db !important;\n}.border-right-danger.border-right-accent-2 {\n  border-right: 1px solid #ffd6db !important;\n}.overlay-danger.overlay-accent-2 {\n  background: #ffd6db;\n  /* The Fallback */\n  background: rgba(255, 214, 219, 0.6);\n}.text-danger.text-accent-3 {\n  color: #ffecee !important;\n}.bg-danger.bg-accent-3 {\n  background-color: #ffecee !important;\n}.border-danger.border-accent-3 {\n  border: 1px solid #ffecee !important;\n}.border-top-danger.border-top-accent-3 {\n  border-top: 1px solid #ffecee !important;\n}.border-bottom-danger.border-bottom-accent-3 {\n  border-bottom: 1px solid #ffecee !important;\n}.border-left-danger.border-left-accent-3 {\n  border-left: 1px solid #ffecee !important;\n}.border-right-danger.border-right-accent-3 {\n  border-right: 1px solid #ffecee !important;\n}.overlay-danger.overlay-accent-3 {\n  background: #ffecee;\n  /* The Fallback */\n  background: rgba(255, 236, 238, 0.6);\n}.text-danger.text-accent-4 {\n  color: #ffd3d7 !important;\n}.bg-danger.bg-accent-4 {\n  background-color: #ffd3d7 !important;\n}.border-danger.border-accent-4 {\n  border: 1px solid #ffd3d7 !important;\n}.border-top-danger.border-top-accent-4 {\n  border-top: 1px solid #ffd3d7 !important;\n}.border-bottom-danger.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffd3d7 !important;\n}.border-left-danger.border-left-accent-4 {\n  border-left: 1px solid #ffd3d7 !important;\n}.border-right-danger.border-right-accent-4 {\n  border-right: 1px solid #ffd3d7 !important;\n}.overlay-danger.overlay-accent-4 {\n  background: #ffd3d7;\n  /* The Fallback */\n  background: rgba(255, 211, 215, 0.6);\n}.bg-gradient-dark,\n.btn-gradient-dark {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #4b4b4b, #1e1e1e);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.dark-layout .bg-gradient-dark,\n.dark-layout .btn-gradient-dark {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-dark:hover, .bg-gradient-dark:active,\n.btn-gradient-dark:hover,\n.btn-gradient-dark:active {\n  color: #fff;\n}.bg-gradient-dark:hover:not(.disabled):not(:disabled),\n.btn-gradient-dark:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-dark:active,\n.btn-gradient-dark:active {\n  transform: translateY(0);\n}.bg-gradient-dark:active, .bg-gradient-dark:focus,\n.btn-gradient-dark:active,\n.btn-gradient-dark:focus {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary,\n.btn-gradient-primary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #901023, #be152e);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary:hover, .bg-gradient-primary:active,\n.btn-gradient-primary:hover,\n.btn-gradient-primary:active {\n  color: #fff;\n}.bg-gradient-primary:hover:not(.disabled):not(:disabled),\n.btn-gradient-primary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-primary:active,\n.btn-gradient-primary:active {\n  transform: translateY(0);\n}.bg-gradient-primary:active, .bg-gradient-primary:focus,\n.btn-gradient-primary:active,\n.btn-gradient-primary:focus {\n  background-image: linear-gradient(47deg, #620b18, #901023);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary,\n.btn-gradient-secondary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #809dab, #9fb5bf);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary:hover, .bg-gradient-secondary:active,\n.btn-gradient-secondary:hover,\n.btn-gradient-secondary:active {\n  color: #fff;\n}.bg-gradient-secondary:hover:not(.disabled):not(:disabled),\n.btn-gradient-secondary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-secondary:active,\n.btn-gradient-secondary:active {\n  transform: translateY(0);\n}.bg-gradient-secondary:active, .bg-gradient-secondary:focus,\n.btn-gradient-secondary:active,\n.btn-gradient-secondary:focus {\n  background-image: linear-gradient(47deg, #638595, #809dab);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success,\n.btn-gradient-success {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #28c76f, #48da89);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success:hover, .bg-gradient-success:active,\n.btn-gradient-success:hover,\n.btn-gradient-success:active {\n  color: #fff;\n}.bg-gradient-success:hover:not(.disabled):not(:disabled),\n.btn-gradient-success:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-success:active,\n.btn-gradient-success:active {\n  transform: translateY(0);\n}.bg-gradient-success:active, .bg-gradient-success:focus,\n.btn-gradient-success:active,\n.btn-gradient-success:focus {\n  background-image: linear-gradient(47deg, #1f9d57, #28c76f);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info,\n.btn-gradient-info {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #00cfe8, #1ce7ff);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info:hover, .bg-gradient-info:active,\n.btn-gradient-info:hover,\n.btn-gradient-info:active {\n  color: #fff;\n}.bg-gradient-info:hover:not(.disabled):not(:disabled),\n.btn-gradient-info:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-info:active,\n.btn-gradient-info:active {\n  transform: translateY(0);\n}.bg-gradient-info:active, .bg-gradient-info:focus,\n.btn-gradient-info:active,\n.btn-gradient-info:focus {\n  background-image: linear-gradient(47deg, #00a1b5, #00cfe8);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning,\n.btn-gradient-warning {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ff9f43, #ffb976);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning:hover, .bg-gradient-warning:active,\n.btn-gradient-warning:hover,\n.btn-gradient-warning:active {\n  color: #fff;\n}.bg-gradient-warning:hover:not(.disabled):not(:disabled),\n.btn-gradient-warning:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-warning:active,\n.btn-gradient-warning:active {\n  transform: translateY(0);\n}.bg-gradient-warning:active, .bg-gradient-warning:focus,\n.btn-gradient-warning:active,\n.btn-gradient-warning:focus {\n  background-image: linear-gradient(47deg, #ff8510, #ff9f43);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger,\n.btn-gradient-danger {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ea5455, #f08182);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger:hover, .bg-gradient-danger:active,\n.btn-gradient-danger:hover,\n.btn-gradient-danger:active {\n  color: #fff;\n}.bg-gradient-danger:hover:not(.disabled):not(:disabled),\n.btn-gradient-danger:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-danger:active,\n.btn-gradient-danger:active {\n  transform: translateY(0);\n}.bg-gradient-danger:active, .bg-gradient-danger:focus,\n.btn-gradient-danger:active,\n.btn-gradient-danger:focus {\n  background-image: linear-gradient(47deg, #e42728, #ea5455);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.ng-select.ng-select-focused {\n  outline: 0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}.ng-select.ng-select-focused .ng-select-container {\n  border-color: #901023 !important;\n  z-index: 2000 !important;\n  box-shadow: none !important;\n  color: #6e6b7b !important;\n  min-height: 38px !important;\n}.ng-select .ng-select-container {\n  color: #6e6b7b !important;\n  min-height: 38px !important;\n}.ng-select.error .ng-select-container {\n  border-color: #ea5455 !important;\n}.ng-select.ng-select-multiple .ng-value {\n  background-color: #901023 !important;\n  color: #fff;\n  border: none !important;\n  font-size: 0.8rem !important;\n  border-radius: 4px !important;\n  display: flex;\n  align-items: center;\n}.ng-select.ng-select-multiple .ng-value .ng-value-icon.right {\n  border: 0 !important;\n}.ng-select.ng-select-multiple .ng-value .ng-value-icon.left {\n  border: 0 !important;\n}.ng-select.ng-select-multiple .ng-value .ng-value-icon:hover {\n  background-color: transparent !important;\n}.ng-select.ng-select-multiple .ng-value .ng-value-icon.left {\n  font-size: 1.1rem !important;\n}.ng-select.ng-select-multiple .ng-value .ng-value-icon.right {\n  font-size: 1.1rem !important;\n}.ng-select.ng-select-multiple .ng-select-container .ng-placeholder {\n  top: 8px !important;\n}.ng-select.ng-select-size-lg .ng-select-container {\n  min-height: 48px;\n  font-size: 1.2rem !important;\n}.ng-select.ng-select-size-lg .ng-select-container .ng-value {\n  font-size: 1.2rem !important;\n  padding: 7px;\n}.ng-select.ng-select-size-lg .ng-select-container .ng-value .ng-value-icon.left {\n  font-size: 1.1rem !important;\n}.ng-select.ng-select-size-lg .ng-select-container .ng-value .ng-value-icon.right {\n  font-size: 1.1rem !important;\n}.ng-select.ng-select-size-lg .ng-select-container .ng-clear-wrapper {\n  height: 22px !important;\n}.ng-select.ng-select-size-sm .ng-select-container {\n  min-height: 28px !important;\n  font-size: 0.75rem;\n}.ng-select.ng-select-size-sm .ng-select-container .ng-value {\n  padding: 0px;\n  font-size: 0.9em !important;\n}.ng-select.ng-select-size-sm .ng-select-container .ng-value .ng-value-icon.left {\n  font-size: 0.9em !important;\n}.ng-select.ng-select-size-sm .ng-select-container .ng-value .ng-value-icon.right {\n  font-size: 0.9em !important;\n}.ng-select .ng-option.ng-option-selected {\n  background-color: #901023 !important;\n  color: #fff !important;\n}.ng-select .ng-option.ng-option-selected.ng-option-marked {\n  background-color: #901023 !important;\n  color: #fff !important;\n}.ng-select .ng-option.ng-option-selected .ng-option-label {\n  font-weight: inherit !important;\n}.ng-select .ng-option.ng-option-marked {\n  background-color: rgba(144, 16, 35, 0.12) !important;\n  color: #901023 !important;\n}.ng-select .ng-option.ng-option-disabled {\n  color: #b9b9c3 !important;\n}.ng-select .ng-arrow {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAG1BMVEUAAACRkZGRkZGSkpKRkZGSkpKSkpKRkZGRkZHLso+9AAAACHRSTlMA+1JoWo0vLFQDmmkAAABlSURBVBjTY6ALSACTbBAOazOYsggAUxEdBkCSuaMVxGGX6BABUo4djQUgrmJHhwFQqkMIrJJJoqOZwaKjUQHIhkg6g6QggEWiQ7Cj0QHIgkpCpaA6wbrgkiAphKSgArJTXRhoBgB9GRPswyvBqAAAAABJRU5ErkJggg==\");\n  background-size: 12px 12px, 10px 10px;\n  background-repeat: no-repeat;\n  height: 0.8rem !important;\n  padding-right: 1.5rem;\n  margin-left: 0;\n  margin-top: 0;\n  left: 0;\n  border-style: none !important;\n}.ng-select.ng-select-opened > .ng-select-container .ng-arrow {\n  top: 0px !important;\n}.ng-select .ng-clear-wrapper {\n  height: 18px;\n}.dark-layout .ng-select-container {\n  background-color: #283046;\n  border-color: #3b4253;\n  color: #676d7d;\n}.dark-layout .ng-select-container .ng-placeholder {\n  color: #676d7d !important;\n}.dark-layout .ng-select.ng-select-multiple .ng-value {\n  background-color: rgba(144, 16, 35, 0.12) !important;\n  color: #901023 !important;\n}.dark-layout .ng-dropdown-header {\n  background-color: #809dab;\n  border-color: #3b4253;\n}.dark-layout .ng-dropdown-footer {\n  background-color: #809dab;\n  border-color: #3b4253;\n}.dark-layout .ng-select.ng-select-opened > .ng-select-container {\n  background-color: #809dab;\n}.dark-layout .ng-option {\n  background-color: #283046 !important;\n  color: #b4b7bd !important;\n}.dark-layout .ng-option.ng-option-disabled {\n  color: #676d7d !important;\n}.dark-layout ng-dropdown-panel {\n  border-color: #3b4253 !important;\n}.dark-layout ng-dropdown-panel .ng-dropdown-panel-items {\n  background-color: #809dab !important;\n}.dark-layout ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup {\n  color: #676d7d !important;\n}.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}.flatpickr-calendar .flatpickr-day.today {\n  border-color: #901023;\n}.flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n  color: #6e6b7b;\n}.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #901023;\n  color: #fff;\n  border-color: #901023;\n}.flatpickr-calendar .flatpickr-day.inRange, .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #eb4e65;\n  border-color: #eb4e65;\n  box-shadow: -5px 0 0 #eb4e65, 5px 0 0 #eb4e65;\n}.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #901023;\n  color: #fff;\n  border-color: #901023;\n}.flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #901023;\n}.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}.flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #901023;\n}.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}.flatpickr-calendar.open {\n  z-index: 1051;\n}.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}.dark-layout .flatpickr-calendar {\n  background: #809dab;\n  border-color: #809dab;\n  box-shadow: none;\n}.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}.dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}.dark-layout .flatpickr-calendar .flatpickr-day.inRange, .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n  border-color: #283046;\n}.dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}.dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #809dab !important;\n}.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}.dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #809dab;\n}.dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}.dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}.dark-layout .flatpickr-time input:hover,\n.dark-layout .flatpickr-time .flatpickr-am-pm:hover,\n.dark-layout .flatpickr-time input:focus,\n.dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #809dab;\n}.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n  opacity: 1 !important;\n}.flatpickr-weekdays {\n  margin-top: 8px;\n}.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  border-radius: 4px;\n  padding: 2px;\n  transition: all 0.15s ease-out;\n}.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Abmctc2VsZWN0L25nLXNlbGVjdC90aGVtZXMvZGVmYXVsdC50aGVtZS5jc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLm1pbi5jc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxjb2xvcnNcXF9wYWxldHRlLnNjc3MiLCJhY2NvdW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29yZVxcbWl4aW5zXFxoZXgycmdiLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxjb2xvcnNcXHBhbGV0dGUtdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxtaXhpbnNcXGFsZXJ0LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxib290c3RyYXAtZXh0ZW5kZWRcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXGNvbG9yc1xccGFsZXR0ZS1ncmFkaWVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2dyYWRpZW50cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYW5ndWxhclxcbGlic1xcc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy1kYXJrLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxwbHVnaW5zXFxmb3Jtc1xccGlja2Vyc1xcZm9ybS1mbGF0LXBpY2tyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcdmFyaWFibGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlELGVBQWUsQ0FBQyxpQ0FBaUMsQ0FBQyx1REFBdUQsZUFBZSxDQUFDLDJEQUEyRCxRQUFRLENBQUMseUNBQXlDLENBQUMsc0JBQXNCLENBQUMsaUVBQWlFLHlDQUF5QyxDQUFDLGtFQUFrRSw0QkFBNEIsQ0FBQywyQkFBMkIsQ0FBQywrREFBK0QseUJBQXlCLENBQUMsd0JBQXdCLENBQUMseUVBQXlFLG9CQUFvQixDQUFDLDBFQUEwRSxDQUFDLG1EQUFtRCx3QkFBd0IsQ0FBQyx5Q0FBeUMsWUFBWSxDQUFDLGdDQUFnQyxVQUFVLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLHNDQUFzQyxtQ0FBbUMsQ0FBQyxvREFBb0Qsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsZ0VBQWdFLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxvRUFBb0UsVUFBVSxDQUFDLGlEQUFpRCxXQUFXLENBQUMsK0VBQStFLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsMkZBQTJGLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLG9HQUFvRyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxvSEFBb0gsYUFBYSxDQUFDLHVFQUF1RSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsbUZBQW1GLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxpRkFBaUYsY0FBYyxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLDZGQUE2RixjQUFjLENBQUMsZUFBZSxDQUFDLG1HQUFtRyx3QkFBd0IsQ0FBQyxtSEFBbUgsZ0JBQWdCLENBQUMsK0hBQStILGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpR0FBaUcsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGdHQUFnRyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsc0dBQXNHLHdCQUF3QixDQUFDLHFHQUFxRyw4QkFBOEIsQ0FBQyxpSEFBaUgsNkJBQTZCLENBQUMsaUJBQWlCLENBQUMsc0dBQXNHLDZCQUE2QixDQUFDLGtIQUFrSCxhQUFhLENBQUMsOEJBQThCLENBQUMsaUZBQWlGLG1CQUFtQixDQUFDLDZGQUE2RixtQkFBbUIsQ0FBQyx1RkFBdUYsT0FBTyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLG1HQUFtRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsNkJBQTZCLFVBQVUsQ0FBQyw2Q0FBNkMsYUFBYSxDQUFDLDRCQUE0QixtQkFBbUIsQ0FBQyx3Q0FBd0MsbUJBQW1CLENBQUMsNkJBQTZCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyx5Q0FBeUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLDZDQUE2QyxxQkFBcUIsQ0FBQyx1Q0FBdUMseUNBQXlDLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLG1DQUFtQyxDQUFDLE1BQU0sQ0FBQyxvQ0FBb0MsUUFBUSxDQUFDLDhCQUE4QixDQUFDLDZCQUE2QixDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxtRkFBbUYsOEJBQThCLENBQUMsNkJBQTZCLENBQUMsaUNBQWlDLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQyxpRkFBaUYsMkJBQTJCLENBQUMsMEJBQTBCLENBQUMsdUNBQXVDLDRCQUE0QixDQUFDLGVBQWUsQ0FBQyx1Q0FBdUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLHlEQUF5RCx3QkFBZ0IsQ0FBaEIscUJBQWdCLENBQWhCLG9CQUFnQixDQUFoQixnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLDRFQUE0RSxjQUFjLENBQUMsMEVBQTBFLHdCQUF3QixDQUFDLHlLQUF5Syx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsdURBQXVELHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLHFLQUFxSyxVQUFVLENBQUMsd0JBQXdCLENBQUMsdU1BQXVNLGVBQWUsQ0FBQyx3RUFBd0Usd0JBQXdCLENBQUMsVUFBVSxDQUFDLDBFQUEwRSxVQUFVLENBQUMsdUVBQXVFLGlCQUFpQixDQUFDLG1GQUFtRixrQkFBa0IsQ0FBQyxjQUFjLENBQUMscUVBQXFFLGFBQWEsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsaUZBQWlGLGdCQUFnQixDQUFDLGVBQWUsQ0FBQywrQkFBK0IsYUFBYSxDQUFDLGdCQUFnQixDQ0ExNE8sb0JBQW9CLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQStCLHFCQUFxQixDQUErQix5QkFBeUIsQ0FBQyxlQUFlLENBQWtILHdHQUF3RyxDQUFDLG9EQUFvRCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxpQ0FBaUMsOERBQThELENBQUMsc0RBQXNELENBQUMsMkJBQTJCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGdDQUFnQyxXQUFXLENBQUMsYUFBYSxDQUFDLG1IQUFzSiwwQkFBMEIsQ0FBQyxtSEFBdUssMkNBQTJDLENBQUMsdUZBQXVGLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQywyQkFBMkIsQ0FBQyw0Q0FBNEMsYUFBYSxDQUFDLDRDQUE0QyxXQUFXLENBQUMsNEJBQTRCLENBQUMsdURBQXVELFdBQVcsQ0FBQyxxREFBcUQsaUJBQWlCLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxvSkFBb0osU0FBUyxDQUFDLFVBQVUsQ0FBQyw2RUFBNkUsUUFBUSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLDBCQUEwQixnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsdUVBQXVFLFdBQVcsQ0FBQyxvQ0FBb0MsMkJBQTJCLENBQUMsbUNBQW1DLHdCQUF3QixDQUFDLDZFQUE2RSxRQUFRLENBQUMsdUNBQXVDLHdCQUF3QixDQUFDLHNDQUFzQyxxQkFBcUIsQ0FBQywwQkFBMEIsU0FBUyxDQUFDLG1CQUFtQixpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBK0UsWUFBWSxDQUFDLG1DQUFtQyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBOEMsTUFBTSxDQUFDLGdGQUFnRixvQkFBb0IsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLHNIQUFzSCxZQUFZLENBQUMsb0ZBQW9GLGlCQUFpQixDQUFDLDBIQUEwSDt5QkFDaHlILENBQUMsS0FBSyxDQUFDO3VCQUNULENBQUMsQ0FBQzt5QkFDQSxDQUN6Qjt1QkFDdUIsQ0FDdkIsMEhBQTBIO3lCQUNqRyxDQUFDLE1BQU0sQ0FBQzt1QkFDVixDQUFDLENBQUM7eUJBQ0EsQ0FDekI7dUJBQ3VCLENBQ3ZCLDRGQUE0RixhQUFhLENBQUMsb0dBQW9HLFlBQVksQ0FBQyx3RkFBd0YsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrR0FBOEgsbUJBQW1CLENBQUMsWUFBWSxDQUFDLGlCQUFpQixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsNkNBQTZDLG9CQUFvQixDQUFDLHVCQUF1QixVQUFVLENBQUMsa0NBQWtDLFlBQVksQ0FBQyxvR0FBb0csUUFBUSxDQUFDLHVCQUF1QixDQUFDLHNCQUFzQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxvQ0FBb0MsQ0FBK0IscUJBQXFCLENBQUMsNEJBQTRCLDBCQUEwQixDQUFDLDZCQUE2QiwwQkFBMEIsQ0FBQyw0QkFBNEIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyw4QkFBOEIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxvQ0FBb0MsaUNBQWlDLENBQUMsa0NBQWtDLENBQUMsMENBQTBDLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxPQUFPLENBQUMsc0NBQXNDLGlDQUFpQyxDQUFDLGtDQUFrQyxDQUFDLHVDQUF1QyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsYUFBYSxDQUFDLFdBQVcsQ0FBQywrQkFBK0Isb0JBQW9CLENBQUMsdUJBQXVCLDJCQUEyQixDQUFDLDRCQUE0QixTQUFTLENBQUMseUJBQXlCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBc0MsNEJBQTRCLENBQUMsd0NBQXdDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLDhDQUE4QywyQkFBMkIsQ0FBQywwQ0FBMEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyw2REFBNkQsbUNBQW1DLENBQUMsK0RBQStELGdDQUFnQyxDQUFDLHdDQUF3QyxzQkFBc0IsQ0FBK0IscUJBQXFCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLHVCQUFzQixDQUF0QixzQkFBc0IsQ0FBQyw0QkFBNEIsQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBQyw4Q0FBOEMsU0FBUyxDQUFDLDBHQUEwRyxjQUFjLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMseURBQXlELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBc0IsQ0FBdEIsc0JBQXNCLENBQUMsNkJBQTZCLENBQUMsMkJBQTJCLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLCtIQUErSCxZQUFZLENBQUMsK0RBQStELDJCQUEyQixDQUFDLHdGQUF3Riw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLG9CQUFvQixzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUE4RCxZQUFZLENBQTJFLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxnREFBNkcsWUFBWSxDQUE4QyxNQUFNLENBQUMsdUJBQXVCLGNBQWMsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQThDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQywrQkFBK0IsaUJBQWlCLENBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLGVBQWUsQ0FBOEQsWUFBWSxDQUE2RSxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLFNBQVMsQ0FBQyxjQUFjLFNBQVMsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBK0IscUJBQXFCLENBQUMsb0JBQW9CLENBQThELFlBQVksQ0FBd0IsY0FBYyxDQUFDLGtCQUFrQixDQUE0RCw0QkFBNEIsQ0FBc0MsNEJBQTRCLENBQUMsU0FBUyxDQUFDLDhCQUFrRSwyQkFBMkIsQ0FBQyxlQUFlLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxtQkFBbUIsQ0FBK0IscUJBQXFCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQW9FLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUE2RSxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxrWUFBa1ksY0FBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsb0JBQW9CLENBQUMsc0RBQXNELG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxza0JBQXNrQixrQkFBa0IsQ0FBeUIsZUFBZSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQywyR0FBMkcsMkJBQTJCLENBQUMscUdBQXFHLDJCQUEyQixDQUFDLGlOQUFzUCw0QkFBNEIsQ0FBQyxzSUFBc0ksa0JBQWtCLENBQUMsdUJBQXVCLGVBQWUsQ0FBcUQsMkNBQTJDLENBQUMsME9BQTBPLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQywwRUFBMEUsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsNkJBQTZCLGVBQWUsQ0FBcUQsMkNBQTJDLENBQUMsc0JBQXNCLGlCQUFpQixDQUFDLDBCQUEwQixjQUFjLENBQUMsdUJBQXVCLFVBQVUsQ0FBQyx3Q0FBd0MsY0FBYyxDQUFvQywwQkFBMEIsQ0FBQywwQ0FBMEMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQywwRkFBMEYsYUFBYSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsYUFBYSxDQUE4RCxZQUFZLENBQStCLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0Isb0JBQW9CLENBQUMsU0FBUyxDQUErQixxQkFBcUIsQ0FBQyxnQkFBZ0IsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUErQixxQkFBcUIsQ0FBQyxlQUFlLENBQThELFlBQVksQ0FBQyxzQkFBc0IsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsaUNBQThFLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxvREFBb0QsMkJBQTJCLENBQUMsc0RBQXNELHdCQUF3QixDQUFDLDRDQUE0QyxTQUFTLENBQUMsMENBQTBDLFNBQVMsQ0FBQyxzQkFBc0Isc0JBQXNCLENBQXlCLGVBQWUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQStCLHFCQUFxQixDQUFDLDRCQUE0QixDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFDLHFDQUFxQyxnQkFBZ0IsQ0FBQyw4RUFBOEUsZUFBZSxDQUFDLDRCQUE0QixTQUFTLENBQUMsUUFBUSxDQUFDLDJFQUEyRSxjQUFjLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQXNELGlCQUFpQixDQUFDLGlDQUFpQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsc0lBQXNJLGVBQWUsQ0FBQywyQkFBMkIsY0FBYyxDQUFDLGdDQUFnQyxLQUFLLFNBQVMsQ0FBMEMsZ0NBQWdDLENBQUMsR0FBRyxTQUFTLENBQXNDLDRCQUE0QixDQUFDLENBQUMsd0JBQXdCLEtBQUssU0FBUyxDQUEwQyxnQ0FBZ0MsQ0FBQyxHQUFHLFNBQVMsQ0FBc0MsNEJBQTRCLENBQUMsQ0NtQ3BpWDtFQUNFLG9DQUFBO0FDNUNSLENEOENROztFQUVFLDZCQUFBO0FDNUNWLENEMEdNO0VBQ0Usb0NBQUE7QUN2R1IsQ0QwR007RUFDRSw2QkFBQTtBQ3ZHUixDRDBHTTtFQUNFLGdDQUFBO0FDdkdSLENEMEdNO0VBQ0UsOEJBQUE7QUN2R1IsQ0QwR007RUFDRSwrQkFBQTtBQ3ZHUixDRDhHUTs7O0VBQ0UsZ0NBQUE7QUN6R1YsQ0R5SE07RUUxSkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEc0NGLENEOFpNO0VBQ0UsaUVBQUE7QUMzWlIsQ0RHTTtFQUNFLG9DQUFBO0FDQVIsQ0RFUTs7RUFFRSw2QkFBQTtBQ0FWLENEOERNO0VBQ0Usb0NBQUE7QUMzRFIsQ0Q4RE07RUFDRSw2QkFBQTtBQzNEUixDRDhETTtFQUNFLGdDQUFBO0FDM0RSLENEOERNO0VBQ0UsOEJBQUE7QUMzRFIsQ0Q4RE07RUFDRSwrQkFBQTtBQzNEUixDRGtFUTs7O0VBQ0UsZ0NBQUE7QUM3RFYsQ0Q2RU07RUUxSkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLDhCQUFBO0FEa0ZGLENEa1hNO0VBQ0UsaUVBQUE7QUMvV1IsQ0R6Q007RUFDRSxvQ0FBQTtBQzRDUixDRDFDUTs7RUFFRSw2QkFBQTtBQzRDVixDRHRDUTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUN5Q1YsQ0R2Q1U7RUkzRFIsbURBQUE7QUhxR0YsQ0R0Q1U7RUFDRSx5QkFBQTtBQ3dDWixDRHBDVTtFQUNFLHlCQUFBO0FDc0NaLENESU07RUFDRSxvQ0FBQTtBQ0RSLENESU07RUFDRSw2QkFBQTtBQ0RSLENESU07RUFDRSxnQ0FBQTtBQ0RSLENESU07RUFDRSw4QkFBQTtBQ0RSLENESU07RUFDRSwrQkFBQTtBQ0RSLENEUVE7OztFQUNFLGdDQUFBO0FDSFYsQ0RXVTtFQUNFLHdDQUFBO0VBQ0EseUJBQUE7QUNSWixDRGNNO0VFMUpKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixpQ0FBQTtBRGlKRixDRGNRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FDWFYsQ0RhVTtFQUdFLFdLOUpKO0VMK0pJLG9DQUFBO0FDYlosQ0RnQlU7RUFDRSxtQ0FBQTtBQ2RaLENEaUJVO0VBQ0UsZ0JBQUE7QUNmWixDRHNCUTtFQUNFLDZCQUFBO0VBQ0EsY0d6RUQ7QUZzRFQsQ0RxQlU7RUFDRSxjRzVFSDtBRnlEVCxDRHNCVTtFQUNFLHdDQUFBO0FDcEJaLENEdUJVO0VBR0UsdUNBQUE7RUFDQSxjR3ZGSDtBRmdFVCxDRDBCVTtFQUNFLCtTQUFBO0FDeEJaLENEK0JRO0VBQ0UseUJHbkdEO0VIb0dDLGtEQUFBO0VBQ0EsV0s1TUY7RUw2TUUseUJBQUE7QUM1QlYsQ0Q4Qlk7RUFDRSx5QkFBQTtBQzVCZCxDRG9DVTtFQUdFLHlCQUFBO0FDcENaLENEdUNVO0VBQ0UsV0svTko7QUowTFIsQ0R3Q1U7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ3ZDWixDRDhDUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjR3pJRDtBRjhGVCxDRDZDVTtFQUNFLHdDQUFBO0VBQ0EsY0c3SUg7QUZrR1QsQ0Q4Q1U7RUFDRSxnQkFBQTtBQzVDWixDRCtDVTtFQUdFLHVDQUFBO0VBQ0EsY0d4Skg7QUZ5R1QsQ0RrRFU7RUFDRSwrU0FBQTtBQ2hEWixDRG9EVTtFQUNFLHVDQUFBO0VBQ0EsY0dsS0g7QUZnSFQsQ0Q0RFk7O0VBQ0UsaUtBQUE7QUN4RGQsQ0R1RVU7RUFDRSx5Qkc3TEg7QUZ5SFQsQ0Q4RWM7RUFDRSxjR3hNUDtBRjZIVCxDRDhFYztFQUNFLHlCQUFBO0FDNUVoQixDRHFLUTtFQUNFLHdDQUFBO0FDbEtWLENEb0tVO0VBQ0UseUJHelNIO0FGdUlULENEMEtVO0VBQ0UsZ0NBQUE7QUN2S1osQ0R5S1k7O0VBRUUsMEJBQUE7QUN2S2QsQ0QwS1k7RUFDRSxvQ0FBQTtBQ3hLZCxDRDBLYztFQUNFLDZDQUFBO0FDeEtoQixDRG1MWTtFQUVFLGdDQUFBO0FDakxkLENEMkxNO0VBQ0UsaUVBQUE7QUN4TFIsQ0Q4TFU7O0VBRUUscUJHN1ZIO0VIOFZHLHlCRzlWSDtBRm1LVCxDRGdNWTs7Ozs7RUFHRSx3REFBQTtBQzVMZCxDRGdNVTtFQUNFLG1EQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDOUxaLENEaU1VO0VBQ0UsZ0NBQUE7QUMvTFosQ0R1TVU7RUFDRSxvQ0FBQTtFQUNBLFdLbGVKO0VMbWVJLDZCQUFBO0FDcE1aLENEOE1jO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBQzNNaEIsQ0RrTk07RUFDRSx5QkFBQTtBQy9NUixDRGtOTTtFQUNFLG9DQUFBO0FDL01SLENEa05NO0VBQ0Usb0NBQUE7QUMvTVIsQ0RrTk07RUFDRSx3Q0FBQTtBQy9NUixDRGtOTTtFQUNFLDJDQUFBO0FDL01SLENEa05NO0VBQ0UseUNBQUE7QUMvTVIsQ0RrTk07RUFDRSwwQ0FBQTtBQy9NUixDRGtOTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FEK1VGLENEZ0xNO0VBQ0UseUJBQUE7QUM3S1IsQ0RnTE07RUFDRSxvQ0FBQTtBQzdLUixDRGdMTTtFQUNFLG9DQUFBO0FDN0tSLENEZ0xNO0VBQ0Usd0NBQUE7QUM3S1IsQ0RnTE07RUFDRSwyQ0FBQTtBQzdLUixDRGdMTTtFQUNFLHlDQUFBO0FDN0tSLENEZ0xNO0VBQ0UsMENBQUE7QUM3S1IsQ0RnTE07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixpQ0FBQTtBRGlYRixDRDhJTTtFQUNFLHlCQUFBO0FDM0lSLENEOElNO0VBQ0Usb0NBQUE7QUMzSVIsQ0Q4SU07RUFDRSxvQ0FBQTtBQzNJUixDRDhJTTtFQUNFLHdDQUFBO0FDM0lSLENEOElNO0VBQ0UsMkNBQUE7QUMzSVIsQ0Q4SU07RUFDRSx5Q0FBQTtBQzNJUixDRDhJTTtFQUNFLDBDQUFBO0FDM0lSLENEOElNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsaUNBQUE7QURtWkYsQ0R0V007RUFDRSxvQ0FBQTtBQ3lXUixDRHZXUTs7RUFFRSw2QkFBQTtBQ3lXVixDRDNTTTtFQUNFLG9DQUFBO0FDOFNSLENEM1NNO0VBQ0UsNkJBQUE7QUM4U1IsQ0QzU007RUFDRSxnQ0FBQTtBQzhTUixDRDNTTTtFQUNFLDhCQUFBO0FDOFNSLENEM1NNO0VBQ0UsK0JBQUE7QUM4U1IsQ0R2U1E7OztFQUNFLGdDQUFBO0FDNFNWLENENVJNO0VFMUpKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRDJiRixDRFNNO0VBQ0UsaUVBQUE7QUNOUixDRGdFTTtFQUNFLHlCQUFBO0FDN0RSLENEZ0VNO0VBQ0Usb0NBQUE7QUM3RFIsQ0RnRU07RUFDRSxvQ0FBQTtBQzdEUixDRGdFTTtFQUNFLHdDQUFBO0FDN0RSLENEZ0VNO0VBQ0UsMkNBQUE7QUM3RFIsQ0RnRU07RUFDRSx5Q0FBQTtBQzdEUixDRGdFTTtFQUNFLDBDQUFBO0FDN0RSLENEZ0VNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QURpZUYsQ0Q4Qk07RUFDRSx5QkFBQTtBQzNCUixDRDhCTTtFQUNFLG9DQUFBO0FDM0JSLENEOEJNO0VBQ0Usb0NBQUE7QUMzQlIsQ0Q4Qk07RUFDRSx3Q0FBQTtBQzNCUixDRDhCTTtFQUNFLDJDQUFBO0FDM0JSLENEOEJNO0VBQ0UseUNBQUE7QUMzQlIsQ0Q4Qk07RUFDRSwwQ0FBQTtBQzNCUixDRDhCTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FEbWdCRixDREpNO0VBQ0UseUJBQUE7QUNPUixDREpNO0VBQ0Usb0NBQUE7QUNPUixDREpNO0VBQ0Usb0NBQUE7QUNPUixDREpNO0VBQ0Usd0NBQUE7QUNPUixDREpNO0VBQ0UsMkNBQUE7QUNPUixDREpNO0VBQ0UseUNBQUE7QUNPUixDREpNO0VBQ0UsMENBQUE7QUNPUixDREpNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QURxaUJGLENEdENNO0VBQ0UseUJBQUE7QUN5Q1IsQ0R0Q007RUFDRSxvQ0FBQTtBQ3lDUixDRHRDTTtFQUNFLG9DQUFBO0FDeUNSLENEdENNO0VBQ0Usd0NBQUE7QUN5Q1IsQ0R0Q007RUFDRSwyQ0FBQTtBQ3lDUixDRHRDTTtFQUNFLHlDQUFBO0FDeUNSLENEdENNO0VBQ0UsMENBQUE7QUN5Q1IsQ0R0Q007RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRHVrQkYsQ0R4RU07RUFDRSx5QkFBQTtBQzJFUixDRHhFTTtFQUNFLG9DQUFBO0FDMkVSLENEeEVNO0VBQ0Usb0NBQUE7QUMyRVIsQ0R4RU07RUFDRSx3Q0FBQTtBQzJFUixDRHhFTTtFQUNFLDJDQUFBO0FDMkVSLENEeEVNO0VBQ0UseUNBQUE7QUMyRVIsQ0R4RU07RUFDRSwwQ0FBQTtBQzJFUixDRHhFTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FEeW1CRixDRDVqQk07RUFDRSxvQ0FBQTtBQytqQlIsQ0Q3akJROztFQUVFLDZCQUFBO0FDK2pCVixDRHpqQlE7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FDNGpCVixDRDFqQlU7RUkzRFIsb0RBQUE7QUh3bkJGLENEempCVTtFQUNFLHlCQUFBO0FDMmpCWixDRHZqQlU7RUFDRSx5QkFBQTtBQ3lqQlosQ0RsakJRO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBQ3FqQlYsQ0RsakJVO0VBRUUsb0NBQUE7QUNtakJaLENEaGpCVTs7RUFFRSxnQ0FBQTtBQ2tqQlosQ0Q5aUJZO0VBQ0UsNkNBQUE7QUNnakJkLENEN2lCWTtFQUNFLGNLRUQ7QUo2aUJiLENEdmlCUTtFQUNFLHlCQUFBO0FDMGlCVixDRHJpQk07RUFDRSxvQ0FBQTtBQ3dpQlIsQ0RyaUJNO0VBQ0UsNkJBQUE7QUN3aUJSLENEcmlCTTtFQUNFLGdDQUFBO0FDd2lCUixDRHJpQk07RUFDRSw4QkFBQTtBQ3dpQlIsQ0RyaUJNO0VBQ0UsK0JBQUE7QUN3aUJSLENEamlCUTs7O0VBQ0UsZ0NBQUE7QUNzaUJWLENEOWhCVTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUNpaUJaLENEM2hCTTtFRTFKSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUQwckJGLENEM2hCUTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQzhoQlYsQ0Q1aEJVO0VBR0UsV0s5Sko7RUwrSkksb0NBQUE7QUM0aEJaLENEemhCVTtFQUNFLG1DQUFBO0FDMmhCWixDRHhoQlU7RUFDRSxnQkFBQTtBQzBoQlosQ0RuaEJRO0VBQ0UsNkJBQUE7RUFDQSxjR3pFRDtBRitsQlQsQ0RwaEJVO0VBQ0UsY0c1RUg7QUZrbUJULENEbmhCVTtFQUNFLHlDQUFBO0FDcWhCWixDRGxoQlU7RUFHRSx3Q0FBQTtFQUNBLGNHdkZIO0FGeW1CVCxDRC9nQlU7RUFDRSwrU0FBQTtBQ2loQlosQ0QxZ0JRO0VBQ0UseUJHbkdEO0VIb0dDLGtEQUFBO0VBQ0EsV0s1TUY7RUw2TUUseUJBQUE7QUM2Z0JWLENEdmdCWTtFQUNFLHlCQUFBO0FDeWdCZCxDRHJnQlU7RUFHRSx5QkFBQTtBQ3FnQlosQ0RsZ0JVO0VBQ0UsV0svTko7QUptdUJSLENEamdCVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDa2dCWixDRDNmUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjR3pJRDtBRnVvQlQsQ0Q1ZlU7RUFDRSx5Q0FBQTtFQUNBLGNHN0lIO0FGMm9CVCxDRDNmVTtFQUNFLGdCQUFBO0FDNmZaLENEMWZVO0VBR0Usd0NBQUE7RUFDQSxjR3hKSDtBRmtwQlQsQ0R2ZlU7RUFDRSwrU0FBQTtBQ3lmWixDRHJmVTtFQUNFLHdDQUFBO0VBQ0EsY0dsS0g7QUZ5cEJULENEN2VZOztFQUNFLHFLQUFBO0FDaWZkLENEbGVVO0VBQ0UseUJHN0xIO0FGa3FCVCxDRDNkYztFQUNFLGNHeE1QO0FGc3FCVCxDRDNkYztFQUNFLHlCQUFBO0FDNmRoQixDRGpkYztFQUNFLDhCQUFBO0VBQ0EsV0tqVVI7QUpxeEJSLENEbGRnQjtFQUNFLFdLcFVWO0FKd3hCUixDRDljYztFQUNFLGNHcE9QO0FGb3JCVCxDRDFjYztFQUNFLG1CRzNPUDtFSDRPTyxXS25WUjtBSit4QlIsQ0RuY2tCO0VBQ0UsMlRBQUE7QUNxY3BCLENEdGJrQjtFQUNFLDJUQUFBO0FDd2JwQixDRHRhYztFQUNFLFdLaFlSO0VMaVlRLG9DQUFBO0VBQ0EscUJHM1JQO0VINFJPLG1EQUFBO0FDeWFoQixDRGhhUTtFQUNFLHlDQUFBO0FDbWFWLENEamFVO0VBQ0UseUJHelNIO0FGNHNCVCxDRDNaVTtFQUNFLGdDQUFBO0FDOFpaLENENVpZOztFQUVFLDBCQUFBO0FDOFpkLENEM1pZO0VBQ0Usb0NBQUE7QUM2WmQsQ0QzWmM7RUFDRSw4Q0FBQTtBQzZaaEIsQ0RsWlk7RUFFRSxnQ0FBQTtBQ29aZCxDRDFZTTtFQUNFLGlFQUFBO0FDNllSLENEdllVOztFQUVFLHFCRzdWSDtFSDhWRyx5Qkc5Vkg7QUZ3dUJULENEcllZOzs7OztFQUdFLHlEQUFBO0FDeVlkLENEcllVO0VBQ0Usb0RBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUN1WVosQ0RwWVU7RUFDRSxnQ0FBQTtBQ3NZWixDRDlYVTtFQUNFLG9DQUFBO0VBQ0EsV0tsZUo7RUxtZUksNkJBQUE7QUNpWVosQ0R2WGM7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FDMFhoQixDRG5YTTtFQUNFLHlCQUFBO0FDc1hSLENEblhNO0VBQ0Usb0NBQUE7QUNzWFIsQ0RuWE07RUFDRSxvQ0FBQTtBQ3NYUixDRG5YTTtFQUNFLHdDQUFBO0FDc1hSLENEblhNO0VBQ0UsMkNBQUE7QUNzWFIsQ0RuWE07RUFDRSx5Q0FBQTtBQ3NYUixDRG5YTTtFQUNFLDBDQUFBO0FDc1hSLENEblhNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QURvNUJGLENEclpNO0VBQ0UseUJBQUE7QUN3WlIsQ0RyWk07RUFDRSxvQ0FBQTtBQ3daUixDRHJaTTtFQUNFLG9DQUFBO0FDd1pSLENEclpNO0VBQ0Usd0NBQUE7QUN3WlIsQ0RyWk07RUFDRSwyQ0FBQTtBQ3daUixDRHJaTTtFQUNFLHlDQUFBO0FDd1pSLENEclpNO0VBQ0UsMENBQUE7QUN3WlIsQ0RyWk07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixpQ0FBQTtBRHM3QkYsQ0R2Yk07RUFDRSx5QkFBQTtBQzBiUixDRHZiTTtFQUNFLG9DQUFBO0FDMGJSLENEdmJNO0VBQ0Usb0NBQUE7QUMwYlIsQ0R2Yk07RUFDRSx3Q0FBQTtBQzBiUixDRHZiTTtFQUNFLDJDQUFBO0FDMGJSLENEdmJNO0VBQ0UseUNBQUE7QUMwYlIsQ0R2Yk07RUFDRSwwQ0FBQTtBQzBiUixDRHZiTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGdDQUFBO0FEdzlCRixDRHpkTTtFQUNFLHlCQUFBO0FDNGRSLENEemRNO0VBQ0Usb0NBQUE7QUM0ZFIsQ0R6ZE07RUFDRSxvQ0FBQTtBQzRkUixDRHpkTTtFQUNFLHdDQUFBO0FDNGRSLENEemRNO0VBQ0UsMkNBQUE7QUM0ZFIsQ0R6ZE07RUFDRSx5Q0FBQTtBQzRkUixDRHpkTTtFQUNFLDBDQUFBO0FDNGRSLENEemRNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsZ0NBQUE7QUQwL0JGLENEM2ZNO0VBQ0UseUJBQUE7QUM4ZlIsQ0QzZk07RUFDRSxvQ0FBQTtBQzhmUixDRDNmTTtFQUNFLG9DQUFBO0FDOGZSLENEM2ZNO0VBQ0Usd0NBQUE7QUM4ZlIsQ0QzZk07RUFDRSwyQ0FBQTtBQzhmUixDRDNmTTtFQUNFLHlDQUFBO0FDOGZSLENEM2ZNO0VBQ0UsMENBQUE7QUM4ZlIsQ0QzZk07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRDRoQ0YsQ0Q3aEJNO0VBQ0UseUJBQUE7QUNnaUJSLENEN2hCTTtFQUNFLG9DQUFBO0FDZ2lCUixDRDdoQk07RUFDRSxvQ0FBQTtBQ2dpQlIsQ0Q3aEJNO0VBQ0Usd0NBQUE7QUNnaUJSLENEN2hCTTtFQUNFLDJDQUFBO0FDZ2lCUixDRDdoQk07RUFDRSx5Q0FBQTtBQ2dpQlIsQ0Q3aEJNO0VBQ0UsMENBQUE7QUNnaUJSLENEN2hCTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEOGpDRixDRC9qQk07RUFDRSx5QkFBQTtBQ2trQlIsQ0QvakJNO0VBQ0Usb0NBQUE7QUNra0JSLENEL2pCTTtFQUNFLG9DQUFBO0FDa2tCUixDRC9qQk07RUFDRSx3Q0FBQTtBQ2trQlIsQ0QvakJNO0VBQ0UsMkNBQUE7QUNra0JSLENEL2pCTTtFQUNFLHlDQUFBO0FDa2tCUixDRC9qQk07RUFDRSwwQ0FBQTtBQ2trQlIsQ0QvakJNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QURnbUNGLENEam1CTTtFQUNFLHlCQUFBO0FDb21CUixDRGptQk07RUFDRSxvQ0FBQTtBQ29tQlIsQ0RqbUJNO0VBQ0Usb0NBQUE7QUNvbUJSLENEam1CTTtFQUNFLHdDQUFBO0FDb21CUixDRGptQk07RUFDRSwyQ0FBQTtBQ29tQlIsQ0RqbUJNO0VBQ0UseUNBQUE7QUNvbUJSLENEam1CTTtFQUNFLDBDQUFBO0FDb21CUixDRGptQk07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRGtvQ0YsQ0Rub0JNO0VBQ0UseUJBQUE7QUNzb0JSLENEbm9CTTtFQUNFLG9DQUFBO0FDc29CUixDRG5vQk07RUFDRSxvQ0FBQTtBQ3NvQlIsQ0Rub0JNO0VBQ0Usd0NBQUE7QUNzb0JSLENEbm9CTTtFQUNFLDJDQUFBO0FDc29CUixDRG5vQk07RUFDRSx5Q0FBQTtBQ3NvQlIsQ0Rub0JNO0VBQ0UsMENBQUE7QUNzb0JSLENEbm9CTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEb3FDRixDRHJxQk07RUFDRSx5QkFBQTtBQ3dxQlIsQ0RycUJNO0VBQ0Usb0NBQUE7QUN3cUJSLENEcnFCTTtFQUNFLG9DQUFBO0FDd3FCUixDRHJxQk07RUFDRSx3Q0FBQTtBQ3dxQlIsQ0RycUJNO0VBQ0UsMkNBQUE7QUN3cUJSLENEcnFCTTtFQUNFLHlDQUFBO0FDd3FCUixDRHJxQk07RUFDRSwwQ0FBQTtBQ3dxQlIsQ0RycUJNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QURzc0NGLENEdnNCTTtFQUNFLHlCQUFBO0FDMHNCUixDRHZzQk07RUFDRSxvQ0FBQTtBQzBzQlIsQ0R2c0JNO0VBQ0Usb0NBQUE7QUMwc0JSLENEdnNCTTtFQUNFLHdDQUFBO0FDMHNCUixDRHZzQk07RUFDRSwyQ0FBQTtBQzBzQlIsQ0R2c0JNO0VBQ0UseUNBQUE7QUMwc0JSLENEdnNCTTtFQUNFLDBDQUFBO0FDMHNCUixDRHZzQk07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRHd1Q0YsQ0R6dUJNO0VBQ0UseUJBQUE7QUM0dUJSLENEenVCTTtFQUNFLG9DQUFBO0FDNHVCUixDRHp1Qk07RUFDRSxvQ0FBQTtBQzR1QlIsQ0R6dUJNO0VBQ0Usd0NBQUE7QUM0dUJSLENEenVCTTtFQUNFLDJDQUFBO0FDNHVCUixDRHp1Qk07RUFDRSx5Q0FBQTtBQzR1QlIsQ0R6dUJNO0VBQ0UsMENBQUE7QUM0dUJSLENEenVCTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEMHdDRixDRDN3Qk07RUFDRSx5QkFBQTtBQzh3QlIsQ0Qzd0JNO0VBQ0Usb0NBQUE7QUM4d0JSLENEM3dCTTtFQUNFLG9DQUFBO0FDOHdCUixDRDN3Qk07RUFDRSx3Q0FBQTtBQzh3QlIsQ0Qzd0JNO0VBQ0UsMkNBQUE7QUM4d0JSLENEM3dCTTtFQUNFLHlDQUFBO0FDOHdCUixDRDN3Qk07RUFDRSwwQ0FBQTtBQzh3QlIsQ0Qzd0JNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUQ0eUNGLENEL3ZDTTtFQUNFLG9DQUFBO0FDa3dDUixDRGh3Q1E7O0VBRUUsNkJBQUE7QUNrd0NWLENENXZDUTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUMrdkNWLENEN3ZDVTtFSTNEUixzREFBQTtBSDJ6Q0YsQ0Q1dkNVO0VBQ0UseUJBQUE7QUM4dkNaLENEMXZDVTtFQUNFLHlCQUFBO0FDNHZDWixDRHJ2Q1E7RUFDRSxnREFBQTtFQUNBLHlCQUFBO0FDd3ZDVixDRHJ2Q1U7RUFFRSxzQ0FBQTtBQ3N2Q1osQ0RudkNVOztFQUVFLGdDQUFBO0FDcXZDWixDRGp2Q1k7RUFDRSwrQ0FBQTtBQ212Q2QsQ0RodkNZO0VBQ0UsY0tFRDtBSmd2Q2IsQ0QxdUNRO0VBQ0UseUJBQUE7QUM2dUNWLENEeHVDTTtFQUNFLG9DQUFBO0FDMnVDUixDRHh1Q007RUFDRSw2QkFBQTtBQzJ1Q1IsQ0R4dUNNO0VBQ0UsZ0NBQUE7QUMydUNSLENEeHVDTTtFQUNFLDhCQUFBO0FDMnVDUixDRHh1Q007RUFDRSwrQkFBQTtBQzJ1Q1IsQ0RwdUNROzs7RUFDRSxnQ0FBQTtBQ3l1Q1YsQ0RqdUNVO0VBQ0UsMkNBQUE7RUFDQSx5QkFBQTtBQ291Q1osQ0Q5dENNO0VFMUpKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRDYzQ0YsQ0Q5dENRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FDaXVDVixDRC90Q1U7RUFHRSxXSzlKSjtFTCtKSSxvQ0FBQTtBQyt0Q1osQ0Q1dENVO0VBQ0UsbUNBQUE7QUM4dENaLENEM3RDVTtFQUNFLGdCQUFBO0FDNnRDWixDRHR0Q1E7RUFDRSw2QkFBQTtFQUNBLGNHekVEO0FGa3lDVCxDRHZ0Q1U7RUFDRSxjRzVFSDtBRnF5Q1QsQ0R0dENVO0VBQ0UsMkNBQUE7QUN3dENaLENEcnRDVTtFQUdFLDBDQUFBO0VBQ0EsY0d2Rkg7QUY0eUNULENEbHRDVTtFQUNFLCtTQUFBO0FDb3RDWixDRDdzQ1E7RUFDRSx5QkduR0Q7RUhvR0Msa0RBQUE7RUFDQSxXSzVNRjtFTDZNRSx5QkFBQTtBQ2d0Q1YsQ0Qxc0NZO0VBQ0UseUJBQUE7QUM0c0NkLENEeHNDVTtFQUdFLHlCQUFBO0FDd3NDWixDRHJzQ1U7RUFDRSxXSy9OSjtBSnM2Q1IsQ0Rwc0NVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNxc0NaLENEOXJDUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjR3pJRDtBRjAwQ1QsQ0QvckNVO0VBQ0UsMkNBQUE7RUFDQSxjRzdJSDtBRjgwQ1QsQ0Q5ckNVO0VBQ0UsZ0JBQUE7QUNnc0NaLENEN3JDVTtFQUdFLDBDQUFBO0VBQ0EsY0d4Skg7QUZxMUNULENEMXJDVTtFQUNFLCtTQUFBO0FDNHJDWixDRHhyQ1U7RUFDRSwwQ0FBQTtFQUNBLGNHbEtIO0FGNDFDVCxDRGhyQ1k7O0VBQ0UsNktBQUE7QUNvckNkLENEcnFDVTtFQUNFLHlCRzdMSDtBRnEyQ1QsQ0Q5cENjO0VBQ0UsY0d4TVA7QUZ5MkNULENEOXBDYztFQUNFLHlCQUFBO0FDZ3FDaEIsQ0RwcENjO0VBQ0UsOEJBQUE7RUFDQSxXS2pVUjtBSnc5Q1IsQ0RycENnQjtFQUNFLFdLcFVWO0FKMjlDUixDRGpwQ2M7RUFDRSxjR3BPUDtBRnUzQ1QsQ0Q3b0NjO0VBQ0UsbUJHM09QO0VINE9PLFdLblZSO0FKaytDUixDRHRvQ2tCO0VBQ0UsMlRBQUE7QUN3b0NwQixDRHpuQ2tCO0VBQ0UsMlRBQUE7QUMybkNwQixDRHptQ2M7RUFDRSxXS2hZUjtFTGlZUSxvQ0FBQTtFQUNBLHFCRzNSUDtFSDRSTyxxREFBQTtBQzRtQ2hCLENEbm1DUTtFQUNFLDJDQUFBO0FDc21DVixDRHBtQ1U7RUFDRSx5Qkd6U0g7QUYrNENULENEOWxDVTtFQUNFLGdDQUFBO0FDaW1DWixDRC9sQ1k7O0VBRUUsMEJBQUE7QUNpbUNkLENEOWxDWTtFQUNFLG9DQUFBO0FDZ21DZCxDRDlsQ2M7RUFDRSxnREFBQTtBQ2dtQ2hCLENEcmxDWTtFQUVFLGdDQUFBO0FDdWxDZCxDRDdrQ007RUFDRSxpRUFBQTtBQ2dsQ1IsQ0Qxa0NVOztFQUVFLHFCRzdWSDtFSDhWRyx5Qkc5Vkg7QUYyNkNULENEeGtDWTs7Ozs7RUFHRSwyREFBQTtBQzRrQ2QsQ0R4a0NVO0VBQ0Usc0RBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUMwa0NaLENEdmtDVTtFQUNFLGdDQUFBO0FDeWtDWixDRGprQ1U7RUFDRSxvQ0FBQTtFQUNBLFdLbGVKO0VMbWVJLDZCQUFBO0FDb2tDWixDRDFqQ2M7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FDNmpDaEIsQ0R0akNNO0VBQ0UseUJBQUE7QUN5akNSLENEdGpDTTtFQUNFLG9DQUFBO0FDeWpDUixDRHRqQ007RUFDRSxvQ0FBQTtBQ3lqQ1IsQ0R0akNNO0VBQ0Usd0NBQUE7QUN5akNSLENEdGpDTTtFQUNFLDJDQUFBO0FDeWpDUixDRHRqQ007RUFDRSx5Q0FBQTtBQ3lqQ1IsQ0R0akNNO0VBQ0UsMENBQUE7QUN5akNSLENEdGpDTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEdWxERixDRHhsQ007RUFDRSx5QkFBQTtBQzJsQ1IsQ0R4bENNO0VBQ0Usb0NBQUE7QUMybENSLENEeGxDTTtFQUNFLG9DQUFBO0FDMmxDUixDRHhsQ007RUFDRSx3Q0FBQTtBQzJsQ1IsQ0R4bENNO0VBQ0UsMkNBQUE7QUMybENSLENEeGxDTTtFQUNFLHlDQUFBO0FDMmxDUixDRHhsQ007RUFDRSwwQ0FBQTtBQzJsQ1IsQ0R4bENNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUR5bkRGLENEMW5DTTtFQUNFLHlCQUFBO0FDNm5DUixDRDFuQ007RUFDRSxvQ0FBQTtBQzZuQ1IsQ0QxbkNNO0VBQ0Usb0NBQUE7QUM2bkNSLENEMW5DTTtFQUNFLHdDQUFBO0FDNm5DUixDRDFuQ007RUFDRSwyQ0FBQTtBQzZuQ1IsQ0QxbkNNO0VBQ0UseUNBQUE7QUM2bkNSLENEMW5DTTtFQUNFLDBDQUFBO0FDNm5DUixDRDFuQ007RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRDJwREYsQ0Q1cENNO0VBQ0UseUJBQUE7QUMrcENSLENENXBDTTtFQUNFLG9DQUFBO0FDK3BDUixDRDVwQ007RUFDRSxvQ0FBQTtBQytwQ1IsQ0Q1cENNO0VBQ0Usd0NBQUE7QUMrcENSLENENXBDTTtFQUNFLDJDQUFBO0FDK3BDUixDRDVwQ007RUFDRSx5Q0FBQTtBQytwQ1IsQ0Q1cENNO0VBQ0UsMENBQUE7QUMrcENSLENENXBDTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FENnJERixDRDlyQ007RUFDRSx5QkFBQTtBQ2lzQ1IsQ0Q5ckNNO0VBQ0Usb0NBQUE7QUNpc0NSLENEOXJDTTtFQUNFLG9DQUFBO0FDaXNDUixDRDlyQ007RUFDRSx3Q0FBQTtBQ2lzQ1IsQ0Q5ckNNO0VBQ0UsMkNBQUE7QUNpc0NSLENEOXJDTTtFQUNFLHlDQUFBO0FDaXNDUixDRDlyQ007RUFDRSwwQ0FBQTtBQ2lzQ1IsQ0Q5ckNNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUQrdERGLENEaHVDTTtFQUNFLHlCQUFBO0FDbXVDUixDRGh1Q007RUFDRSxvQ0FBQTtBQ211Q1IsQ0RodUNNO0VBQ0Usb0NBQUE7QUNtdUNSLENEaHVDTTtFQUNFLHdDQUFBO0FDbXVDUixDRGh1Q007RUFDRSwyQ0FBQTtBQ211Q1IsQ0RodUNNO0VBQ0UseUNBQUE7QUNtdUNSLENEaHVDTTtFQUNFLDBDQUFBO0FDbXVDUixDRGh1Q007RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRGl3REYsQ0Rsd0NNO0VBQ0UseUJBQUE7QUNxd0NSLENEbHdDTTtFQUNFLG9DQUFBO0FDcXdDUixDRGx3Q007RUFDRSxvQ0FBQTtBQ3F3Q1IsQ0Rsd0NNO0VBQ0Usd0NBQUE7QUNxd0NSLENEbHdDTTtFQUNFLDJDQUFBO0FDcXdDUixDRGx3Q007RUFDRSx5Q0FBQTtBQ3F3Q1IsQ0Rsd0NNO0VBQ0UsMENBQUE7QUNxd0NSLENEbHdDTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FEbXlERixDRHB5Q007RUFDRSx5QkFBQTtBQ3V5Q1IsQ0RweUNNO0VBQ0Usb0NBQUE7QUN1eUNSLENEcHlDTTtFQUNFLG9DQUFBO0FDdXlDUixDRHB5Q007RUFDRSx3Q0FBQTtBQ3V5Q1IsQ0RweUNNO0VBQ0UsMkNBQUE7QUN1eUNSLENEcHlDTTtFQUNFLHlDQUFBO0FDdXlDUixDRHB5Q007RUFDRSwwQ0FBQTtBQ3V5Q1IsQ0RweUNNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QURxMERGLENEdDBDTTtFQUNFLHlCQUFBO0FDeTBDUixDRHQwQ007RUFDRSxvQ0FBQTtBQ3kwQ1IsQ0R0MENNO0VBQ0Usb0NBQUE7QUN5MENSLENEdDBDTTtFQUNFLHdDQUFBO0FDeTBDUixDRHQwQ007RUFDRSwyQ0FBQTtBQ3kwQ1IsQ0R0MENNO0VBQ0UseUNBQUE7QUN5MENSLENEdDBDTTtFQUNFLDBDQUFBO0FDeTBDUixDRHQwQ007RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRHUyREYsQ0QxekRNO0VBQ0Usb0NBQUE7QUM2ekRSLENEM3pEUTs7RUFFRSw2QkFBQTtBQzZ6RFYsQ0R2ekRRO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBQzB6RFYsQ0R4ekRVO0VJM0RSLHFEQUFBO0FIczNERixDRHZ6RFU7RUFDRSx5QkFBQTtBQ3l6RFosQ0RyekRVO0VBQ0UseUJBQUE7QUN1ekRaLENEaHpEUTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7QUNtekRWLENEaHpEVTtFQUVFLHFDQUFBO0FDaXpEWixDRDl5RFU7O0VBRUUsZ0NBQUE7QUNnekRaLENENXlEWTtFQUNFLDhDQUFBO0FDOHlEZCxDRDN5RFk7RUFDRSxjS0VEO0FKMnlEYixDRHJ5RFE7RUFDRSx5QkFBQTtBQ3d5RFYsQ0RueURNO0VBQ0Usb0NBQUE7QUNzeURSLENEbnlETTtFQUNFLDZCQUFBO0FDc3lEUixDRG55RE07RUFDRSxnQ0FBQTtBQ3N5RFIsQ0RueURNO0VBQ0UsOEJBQUE7QUNzeURSLENEbnlETTtFQUNFLCtCQUFBO0FDc3lEUixDRC94RFE7OztFQUNFLGdDQUFBO0FDb3lEVixDRDV4RFU7RUFDRSwwQ0FBQTtFQUNBLHlCQUFBO0FDK3hEWixDRHp4RE07RUUxSkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FEdzdERixDRHp4RFE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUM0eERWLENEMXhEVTtFQUdFLFdLOUpKO0VMK0pJLG9DQUFBO0FDMHhEWixDRHZ4RFU7RUFDRSxtQ0FBQTtBQ3l4RFosQ0R0eERVO0VBQ0UsZ0JBQUE7QUN3eERaLENEanhEUTtFQUNFLDZCQUFBO0VBQ0EsY0d6RUQ7QUY2MURULENEbHhEVTtFQUNFLGNHNUVIO0FGZzJEVCxDRGp4RFU7RUFDRSwwQ0FBQTtBQ214RFosQ0RoeERVO0VBR0UseUNBQUE7RUFDQSxjR3ZGSDtBRnUyRFQsQ0Q3d0RVO0VBQ0UsK1NBQUE7QUMrd0RaLENEeHdEUTtFQUNFLHlCR25HRDtFSG9HQyxrREFBQTtFQUNBLFdLNU1GO0VMNk1FLHlCQUFBO0FDMndEVixDRHJ3RFk7RUFDRSx5QkFBQTtBQ3V3RGQsQ0Rud0RVO0VBR0UseUJBQUE7QUNtd0RaLENEaHdEVTtFQUNFLFdLL05KO0FKaStEUixDRC92RFU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ2d3RFosQ0R6dkRRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNHeklEO0FGcTREVCxDRDF2RFU7RUFDRSwwQ0FBQTtFQUNBLGNHN0lIO0FGeTREVCxDRHp2RFU7RUFDRSxnQkFBQTtBQzJ2RFosQ0R4dkRVO0VBR0UseUNBQUE7RUFDQSxjR3hKSDtBRmc1RFQsQ0RydkRVO0VBQ0UsK1NBQUE7QUN1dkRaLENEbnZEVTtFQUNFLHlDQUFBO0VBQ0EsY0dsS0g7QUZ1NURULENEM3VEWTs7RUFDRSx5S0FBQTtBQyt1RGQsQ0RodURVO0VBQ0UseUJHN0xIO0FGZzZEVCxDRHp0RGM7RUFDRSxjR3hNUDtBRm82RFQsQ0R6dERjO0VBQ0UseUJBQUE7QUMydERoQixDRC9zRGM7RUFDRSw4QkFBQTtFQUNBLFdLalVSO0FKbWhFUixDRGh0RGdCO0VBQ0UsV0twVVY7QUpzaEVSLENENXNEYztFQUNFLGNHcE9QO0FGazdEVCxDRHhzRGM7RUFDRSxtQkczT1A7RUg0T08sV0tuVlI7QUo2aEVSLENEanNEa0I7RUFDRSwyVEFBQTtBQ21zRHBCLENEcHJEa0I7RUFDRSwyVEFBQTtBQ3NyRHBCLENEcHFEYztFQUNFLFdLaFlSO0VMaVlRLG9DQUFBO0VBQ0EscUJHM1JQO0VINFJPLG9EQUFBO0FDdXFEaEIsQ0Q5cERRO0VBQ0UsMENBQUE7QUNpcURWLENEL3BEVTtFQUNFLHlCR3pTSDtBRjA4RFQsQ0R6cERVO0VBQ0UsZ0NBQUE7QUM0cERaLENEMXBEWTs7RUFFRSwwQkFBQTtBQzRwRGQsQ0R6cERZO0VBQ0Usb0NBQUE7QUMycERkLENEenBEYztFQUNFLCtDQUFBO0FDMnBEaEIsQ0RocERZO0VBRUUsZ0NBQUE7QUNrcERkLENEeG9ETTtFQUNFLGlFQUFBO0FDMm9EUixDRHJvRFU7O0VBRUUscUJHN1ZIO0VIOFZHLHlCRzlWSDtBRnMrRFQsQ0Rub0RZOzs7OztFQUdFLDBEQUFBO0FDdW9EZCxDRG5vRFU7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ3FvRFosQ0Rsb0RVO0VBQ0UsZ0NBQUE7QUNvb0RaLENENW5EVTtFQUNFLG9DQUFBO0VBQ0EsV0tsZUo7RUxtZUksNkJBQUE7QUMrbkRaLENEcm5EYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUN3bkRoQixDRGpuRE07RUFDRSx5QkFBQTtBQ29uRFIsQ0RqbkRNO0VBQ0Usb0NBQUE7QUNvbkRSLENEam5ETTtFQUNFLG9DQUFBO0FDb25EUixDRGpuRE07RUFDRSx3Q0FBQTtBQ29uRFIsQ0RqbkRNO0VBQ0UsMkNBQUE7QUNvbkRSLENEam5ETTtFQUNFLHlDQUFBO0FDb25EUixDRGpuRE07RUFDRSwwQ0FBQTtBQ29uRFIsQ0RqbkRNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QURrcEVGLENEbnBETTtFQUNFLHlCQUFBO0FDc3BEUixDRG5wRE07RUFDRSxvQ0FBQTtBQ3NwRFIsQ0RucERNO0VBQ0Usb0NBQUE7QUNzcERSLENEbnBETTtFQUNFLHdDQUFBO0FDc3BEUixDRG5wRE07RUFDRSwyQ0FBQTtBQ3NwRFIsQ0RucERNO0VBQ0UseUNBQUE7QUNzcERSLENEbnBETTtFQUNFLDBDQUFBO0FDc3BEUixDRG5wRE07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRG9yRUYsQ0RyckRNO0VBQ0UseUJBQUE7QUN3ckRSLENEcnJETTtFQUNFLG9DQUFBO0FDd3JEUixDRHJyRE07RUFDRSxvQ0FBQTtBQ3dyRFIsQ0RyckRNO0VBQ0Usd0NBQUE7QUN3ckRSLENEcnJETTtFQUNFLDJDQUFBO0FDd3JEUixDRHJyRE07RUFDRSx5Q0FBQTtBQ3dyRFIsQ0RyckRNO0VBQ0UsMENBQUE7QUN3ckRSLENEcnJETTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FEc3RFRixDRHZ0RE07RUFDRSx5QkFBQTtBQzB0RFIsQ0R2dERNO0VBQ0Usb0NBQUE7QUMwdERSLENEdnRETTtFQUNFLG9DQUFBO0FDMHREUixDRHZ0RE07RUFDRSx3Q0FBQTtBQzB0RFIsQ0R2dERNO0VBQ0UsMkNBQUE7QUMwdERSLENEdnRETTtFQUNFLHlDQUFBO0FDMHREUixDRHZ0RE07RUFDRSwwQ0FBQTtBQzB0RFIsQ0R2dERNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUR3dkVGLENEenZETTtFQUNFLHlCQUFBO0FDNHZEUixDRHp2RE07RUFDRSxvQ0FBQTtBQzR2RFIsQ0R6dkRNO0VBQ0Usb0NBQUE7QUM0dkRSLENEenZETTtFQUNFLHdDQUFBO0FDNHZEUixDRHp2RE07RUFDRSwyQ0FBQTtBQzR2RFIsQ0R6dkRNO0VBQ0UseUNBQUE7QUM0dkRSLENEenZETTtFQUNFLDBDQUFBO0FDNHZEUixDRHp2RE07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRDB4RUYsQ0QzeERNO0VBQ0UseUJBQUE7QUM4eERSLENEM3hETTtFQUNFLG9DQUFBO0FDOHhEUixDRDN4RE07RUFDRSxvQ0FBQTtBQzh4RFIsQ0QzeERNO0VBQ0Usd0NBQUE7QUM4eERSLENEM3hETTtFQUNFLDJDQUFBO0FDOHhEUixDRDN4RE07RUFDRSx5Q0FBQTtBQzh4RFIsQ0QzeERNO0VBQ0UsMENBQUE7QUM4eERSLENEM3hETTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FENHpFRixDRDd6RE07RUFDRSx5QkFBQTtBQ2cwRFIsQ0Q3ekRNO0VBQ0Usb0NBQUE7QUNnMERSLENEN3pETTtFQUNFLG9DQUFBO0FDZzBEUixDRDd6RE07RUFDRSx3Q0FBQTtBQ2cwRFIsQ0Q3ekRNO0VBQ0UsMkNBQUE7QUNnMERSLENEN3pETTtFQUNFLHlDQUFBO0FDZzBEUixDRDd6RE07RUFDRSwwQ0FBQTtBQ2cwRFIsQ0Q3ekRNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUQ4MUVGLENELzFETTtFQUNFLHlCQUFBO0FDazJEUixDRC8xRE07RUFDRSxvQ0FBQTtBQ2syRFIsQ0QvMURNO0VBQ0Usb0NBQUE7QUNrMkRSLENELzFETTtFQUNFLHdDQUFBO0FDazJEUixDRC8xRE07RUFDRSwyQ0FBQTtBQ2syRFIsQ0QvMURNO0VBQ0UseUNBQUE7QUNrMkRSLENELzFETTtFQUNFLDBDQUFBO0FDazJEUixDRC8xRE07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRGc0RUYsQ0RqNERNO0VBQ0UseUJBQUE7QUNvNERSLENEajRETTtFQUNFLG9DQUFBO0FDbzREUixDRGo0RE07RUFDRSxvQ0FBQTtBQ280RFIsQ0RqNERNO0VBQ0Usd0NBQUE7QUNvNERSLENEajRETTtFQUNFLDJDQUFBO0FDbzREUixDRGo0RE07RUFDRSx5Q0FBQTtBQ280RFIsQ0RqNERNO0VBQ0UsMENBQUE7QUNvNERSLENEajRETTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEazZFRixDRG42RE07RUFDRSx5QkFBQTtBQ3M2RFIsQ0RuNkRNO0VBQ0Usb0NBQUE7QUNzNkRSLENEbjZETTtFQUNFLG9DQUFBO0FDczZEUixDRG42RE07RUFDRSx3Q0FBQTtBQ3M2RFIsQ0RuNkRNO0VBQ0UsMkNBQUE7QUNzNkRSLENEbjZETTtFQUNFLHlDQUFBO0FDczZEUixDRG42RE07RUFDRSwwQ0FBQTtBQ3M2RFIsQ0RuNkRNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QURvOEVGLENEcjhETTtFQUNFLHlCQUFBO0FDdzhEUixDRHI4RE07RUFDRSxvQ0FBQTtBQ3c4RFIsQ0RyOERNO0VBQ0Usb0NBQUE7QUN3OERSLENEcjhETTtFQUNFLHdDQUFBO0FDdzhEUixDRHI4RE07RUFDRSwyQ0FBQTtBQ3c4RFIsQ0RyOERNO0VBQ0UseUNBQUE7QUN3OERSLENEcjhETTtFQUNFLDBDQUFBO0FDdzhEUixDRHI4RE07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRHMrRUYsQ0R2K0RNO0VBQ0UseUJBQUE7QUMwK0RSLENEditETTtFQUNFLG9DQUFBO0FDMCtEUixDRHYrRE07RUFDRSxvQ0FBQTtBQzArRFIsQ0R2K0RNO0VBQ0Usd0NBQUE7QUMwK0RSLENEditETTtFQUNFLDJDQUFBO0FDMCtEUixDRHYrRE07RUFDRSx5Q0FBQTtBQzArRFIsQ0R2K0RNO0VBQ0UsMENBQUE7QUMwK0RSLENEditETTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FEd2dGRixDRHpnRU07RUFDRSx5QkFBQTtBQzRnRVIsQ0R6Z0VNO0VBQ0Usb0NBQUE7QUM0Z0VSLENEemdFTTtFQUNFLG9DQUFBO0FDNGdFUixDRHpnRU07RUFDRSx3Q0FBQTtBQzRnRVIsQ0R6Z0VNO0VBQ0UsMkNBQUE7QUM0Z0VSLENEemdFTTtFQUNFLHlDQUFBO0FDNGdFUixDRHpnRU07RUFDRSwwQ0FBQTtBQzRnRVIsQ0R6Z0VNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUQwaUZGLENENy9FTTtFQUNFLG9DQUFBO0FDZ2dGUixDRDkvRVE7O0VBRUUsNkJBQUE7QUNnZ0ZWLENEMS9FUTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QUM2L0VWLENEMy9FVTtFSTNEUixvREFBQTtBSHlqRkYsQ0QxL0VVO0VBQ0UseUJBQUE7QUM0L0VaLENEeC9FVTtFQUNFLHlCQUFBO0FDMC9FWixDRG4vRVE7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FDcy9FVixDRG4vRVU7RUFFRSxvQ0FBQTtBQ28vRVosQ0RqL0VVOztFQUVFLGdDQUFBO0FDbS9FWixDRC8rRVk7RUFDRSw2Q0FBQTtBQ2kvRWQsQ0Q5K0VZO0VBQ0UsY0tFRDtBSjgrRWIsQ0R4K0VRO0VBQ0UseUJBQUE7QUMyK0VWLENEdCtFTTtFQUNFLG9DQUFBO0FDeStFUixDRHQrRU07RUFDRSw2QkFBQTtBQ3krRVIsQ0R0K0VNO0VBQ0UsZ0NBQUE7QUN5K0VSLENEdCtFTTtFQUNFLDhCQUFBO0FDeStFUixDRHQrRU07RUFDRSwrQkFBQTtBQ3krRVIsQ0RsK0VROzs7RUFDRSxnQ0FBQTtBQ3UrRVYsQ0QvOUVVO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBQ2srRVosQ0Q1OUVNO0VFMUpKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRDJuRkYsQ0Q1OUVRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FDKzlFVixDRDc5RVU7RUFHRSxXSzlKSjtFTCtKSSxvQ0FBQTtBQzY5RVosQ0QxOUVVO0VBQ0UsbUNBQUE7QUM0OUVaLENEejlFVTtFQUNFLGdCQUFBO0FDMjlFWixDRHA5RVE7RUFDRSw2QkFBQTtFQUNBLGNHekVEO0FGZ2lGVCxDRHI5RVU7RUFDRSxjRzVFSDtBRm1pRlQsQ0RwOUVVO0VBQ0UseUNBQUE7QUNzOUVaLENEbjlFVTtFQUdFLHdDQUFBO0VBQ0EsY0d2Rkg7QUYwaUZULENEaDlFVTtFQUNFLCtTQUFBO0FDazlFWixDRDM4RVE7RUFDRSx5QkduR0Q7RUhvR0Msa0RBQUE7RUFDQSxXSzVNRjtFTDZNRSx5QkFBQTtBQzg4RVYsQ0R4OEVZO0VBQ0UseUJBQUE7QUMwOEVkLENEdDhFVTtFQUdFLHlCQUFBO0FDczhFWixDRG44RVU7RUFDRSxXSy9OSjtBSm9xRlIsQ0RsOEVVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNtOEVaLENENTdFUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjR3pJRDtBRndrRlQsQ0Q3N0VVO0VBQ0UseUNBQUE7RUFDQSxjRzdJSDtBRjRrRlQsQ0Q1N0VVO0VBQ0UsZ0JBQUE7QUM4N0VaLENEMzdFVTtFQUdFLHdDQUFBO0VBQ0EsY0d4Skg7QUZtbEZULENEeDdFVTtFQUNFLCtTQUFBO0FDMDdFWixDRHQ3RVU7RUFDRSx3Q0FBQTtFQUNBLGNHbEtIO0FGMGxGVCxDRDk2RVk7O0VBQ0UscUtBQUE7QUNrN0VkLENEbjZFVTtFQUNFLHlCRzdMSDtBRm1tRlQsQ0Q1NUVjO0VBQ0UsY0d4TVA7QUZ1bUZULENENTVFYztFQUNFLHlCQUFBO0FDODVFaEIsQ0RsNUVjO0VBQ0UsOEJBQUE7RUFDQSxXS2pVUjtBSnN0RlIsQ0RuNUVnQjtFQUNFLFdLcFVWO0FKeXRGUixDRC80RWM7RUFDRSxjR3BPUDtBRnFuRlQsQ0QzNEVjO0VBQ0UsbUJHM09QO0VINE9PLFdLblZSO0FKZ3VGUixDRHA0RWtCO0VBQ0UsMlRBQUE7QUNzNEVwQixDRHYzRWtCO0VBQ0UsMlRBQUE7QUN5M0VwQixDRHYyRWM7RUFDRSxXS2hZUjtFTGlZUSxvQ0FBQTtFQUNBLHFCRzNSUDtFSDRSTyxtREFBQTtBQzAyRWhCLENEajJFUTtFQUNFLHlDQUFBO0FDbzJFVixDRGwyRVU7RUFDRSx5Qkd6U0g7QUY2b0ZULENENTFFVTtFQUNFLGdDQUFBO0FDKzFFWixDRDcxRVk7O0VBRUUsMEJBQUE7QUMrMUVkLENENTFFWTtFQUNFLG9DQUFBO0FDODFFZCxDRDUxRWM7RUFDRSw4Q0FBQTtBQzgxRWhCLENEbjFFWTtFQUVFLGdDQUFBO0FDcTFFZCxDRDMwRU07RUFDRSxpRUFBQTtBQzgwRVIsQ0R4MEVVOztFQUVFLHFCRzdWSDtFSDhWRyx5Qkc5Vkg7QUZ5cUZULENEdDBFWTs7Ozs7RUFHRSx5REFBQTtBQzAwRWQsQ0R0MEVVO0VBQ0Usb0RBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUN3MEVaLENEcjBFVTtFQUNFLGdDQUFBO0FDdTBFWixDRC96RVU7RUFDRSxvQ0FBQTtFQUNBLFdLbGVKO0VMbWVJLDZCQUFBO0FDazBFWixDRHh6RWM7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FDMnpFaEIsQ0RwekVNO0VBQ0UseUJBQUE7QUN1ekVSLENEcHpFTTtFQUNFLG9DQUFBO0FDdXpFUixDRHB6RU07RUFDRSxvQ0FBQTtBQ3V6RVIsQ0RwekVNO0VBQ0Usd0NBQUE7QUN1ekVSLENEcHpFTTtFQUNFLDJDQUFBO0FDdXpFUixDRHB6RU07RUFDRSx5Q0FBQTtBQ3V6RVIsQ0RwekVNO0VBQ0UsMENBQUE7QUN1ekVSLENEcHpFTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FEcTFGRixDRHQxRU07RUFDRSx5QkFBQTtBQ3kxRVIsQ0R0MUVNO0VBQ0Usb0NBQUE7QUN5MUVSLENEdDFFTTtFQUNFLG9DQUFBO0FDeTFFUixDRHQxRU07RUFDRSx3Q0FBQTtBQ3kxRVIsQ0R0MUVNO0VBQ0UsMkNBQUE7QUN5MUVSLENEdDFFTTtFQUNFLHlDQUFBO0FDeTFFUixDRHQxRU07RUFDRSwwQ0FBQTtBQ3kxRVIsQ0R0MUVNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUR1M0ZGLENEeDNFTTtFQUNFLHlCQUFBO0FDMjNFUixDRHgzRU07RUFDRSxvQ0FBQTtBQzIzRVIsQ0R4M0VNO0VBQ0Usb0NBQUE7QUMyM0VSLENEeDNFTTtFQUNFLHdDQUFBO0FDMjNFUixDRHgzRU07RUFDRSwyQ0FBQTtBQzIzRVIsQ0R4M0VNO0VBQ0UseUNBQUE7QUMyM0VSLENEeDNFTTtFQUNFLDBDQUFBO0FDMjNFUixDRHgzRU07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRHk1RkYsQ0QxNUVNO0VBQ0UseUJBQUE7QUM2NUVSLENEMTVFTTtFQUNFLG9DQUFBO0FDNjVFUixDRDE1RU07RUFDRSxvQ0FBQTtBQzY1RVIsQ0QxNUVNO0VBQ0Usd0NBQUE7QUM2NUVSLENEMTVFTTtFQUNFLDJDQUFBO0FDNjVFUixDRDE1RU07RUFDRSx5Q0FBQTtBQzY1RVIsQ0QxNUVNO0VBQ0UsMENBQUE7QUM2NUVSLENEMTVFTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FEMjdGRixDRDU3RU07RUFDRSx5QkFBQTtBQys3RVIsQ0Q1N0VNO0VBQ0Usb0NBQUE7QUMrN0VSLENENTdFTTtFQUNFLG9DQUFBO0FDKzdFUixDRDU3RU07RUFDRSx3Q0FBQTtBQys3RVIsQ0Q1N0VNO0VBQ0UsMkNBQUE7QUMrN0VSLENENTdFTTtFQUNFLHlDQUFBO0FDKzdFUixDRDU3RU07RUFDRSwwQ0FBQTtBQys3RVIsQ0Q1N0VNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUQ2OUZGLENEOTlFTTtFQUNFLHlCQUFBO0FDaStFUixDRDk5RU07RUFDRSxvQ0FBQTtBQ2krRVIsQ0Q5OUVNO0VBQ0Usb0NBQUE7QUNpK0VSLENEOTlFTTtFQUNFLHdDQUFBO0FDaStFUixDRDk5RU07RUFDRSwyQ0FBQTtBQ2krRVIsQ0Q5OUVNO0VBQ0UseUNBQUE7QUNpK0VSLENEOTlFTTtFQUNFLDBDQUFBO0FDaStFUixDRDk5RU07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRCsvRkYsQ0RoZ0ZNO0VBQ0UseUJBQUE7QUNtZ0ZSLENEaGdGTTtFQUNFLG9DQUFBO0FDbWdGUixDRGhnRk07RUFDRSxvQ0FBQTtBQ21nRlIsQ0RoZ0ZNO0VBQ0Usd0NBQUE7QUNtZ0ZSLENEaGdGTTtFQUNFLDJDQUFBO0FDbWdGUixDRGhnRk07RUFDRSx5Q0FBQTtBQ21nRlIsQ0RoZ0ZNO0VBQ0UsMENBQUE7QUNtZ0ZSLENEaGdGTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEaWlHRixDRGxpRk07RUFDRSx5QkFBQTtBQ3FpRlIsQ0RsaUZNO0VBQ0Usb0NBQUE7QUNxaUZSLENEbGlGTTtFQUNFLG9DQUFBO0FDcWlGUixDRGxpRk07RUFDRSx3Q0FBQTtBQ3FpRlIsQ0RsaUZNO0VBQ0UsMkNBQUE7QUNxaUZSLENEbGlGTTtFQUNFLHlDQUFBO0FDcWlGUixDRGxpRk07RUFDRSwwQ0FBQTtBQ3FpRlIsQ0RsaUZNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QURta0dGLENEcGtGTTtFQUNFLHlCQUFBO0FDdWtGUixDRHBrRk07RUFDRSxvQ0FBQTtBQ3VrRlIsQ0Rwa0ZNO0VBQ0Usb0NBQUE7QUN1a0ZSLENEcGtGTTtFQUNFLHdDQUFBO0FDdWtGUixDRHBrRk07RUFDRSwyQ0FBQTtBQ3VrRlIsQ0Rwa0ZNO0VBQ0UseUNBQUE7QUN1a0ZSLENEcGtGTTtFQUNFLDBDQUFBO0FDdWtGUixDRHBrRk07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRHFtR0YsQ0R0bUZNO0VBQ0UseUJBQUE7QUN5bUZSLENEdG1GTTtFQUNFLG9DQUFBO0FDeW1GUixDRHRtRk07RUFDRSxvQ0FBQTtBQ3ltRlIsQ0R0bUZNO0VBQ0Usd0NBQUE7QUN5bUZSLENEdG1GTTtFQUNFLDJDQUFBO0FDeW1GUixDRHRtRk07RUFDRSx5Q0FBQTtBQ3ltRlIsQ0R0bUZNO0VBQ0UsMENBQUE7QUN5bUZSLENEdG1GTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEdW9HRixDRHhvRk07RUFDRSx5QkFBQTtBQzJvRlIsQ0R4b0ZNO0VBQ0Usb0NBQUE7QUMyb0ZSLENEeG9GTTtFQUNFLG9DQUFBO0FDMm9GUixDRHhvRk07RUFDRSx3Q0FBQTtBQzJvRlIsQ0R4b0ZNO0VBQ0UsMkNBQUE7QUMyb0ZSLENEeG9GTTtFQUNFLHlDQUFBO0FDMm9GUixDRHhvRk07RUFDRSwwQ0FBQTtBQzJvRlIsQ0R4b0ZNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUR5cUdGLENEMXFGTTtFQUNFLHlCQUFBO0FDNnFGUixDRDFxRk07RUFDRSxvQ0FBQTtBQzZxRlIsQ0QxcUZNO0VBQ0Usb0NBQUE7QUM2cUZSLENEMXFGTTtFQUNFLHdDQUFBO0FDNnFGUixDRDFxRk07RUFDRSwyQ0FBQTtBQzZxRlIsQ0QxcUZNO0VBQ0UseUNBQUE7QUM2cUZSLENEMXFGTTtFQUNFLDBDQUFBO0FDNnFGUixDRDFxRk07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRDJzR0YsQ0Q1c0ZNO0VBQ0UseUJBQUE7QUMrc0ZSLENENXNGTTtFQUNFLG9DQUFBO0FDK3NGUixDRDVzRk07RUFDRSxvQ0FBQTtBQytzRlIsQ0Q1c0ZNO0VBQ0Usd0NBQUE7QUMrc0ZSLENENXNGTTtFQUNFLDJDQUFBO0FDK3NGUixDRDVzRk07RUFDRSx5Q0FBQTtBQytzRlIsQ0Q1c0ZNO0VBQ0UsMENBQUE7QUMrc0ZSLENENXNGTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FENnVHRixDRGhzR007RUFDRSxvQ0FBQTtBQ21zR1IsQ0Rqc0dROztFQUVFLDZCQUFBO0FDbXNHVixDRDdyR1E7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0FDZ3NHVixDRDlyR1U7RUkzRFIscURBQUE7QUg0dkdGLENEN3JHVTtFQUNFLHlCQUFBO0FDK3JHWixDRDNyR1U7RUFDRSx5QkFBQTtBQzZyR1osQ0R0ckdRO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBQ3lyR1YsQ0R0ckdVO0VBRUUscUNBQUE7QUN1ckdaLENEcHJHVTs7RUFFRSxnQ0FBQTtBQ3NyR1osQ0RsckdZO0VBQ0UsOENBQUE7QUNvckdkLENEanJHWTtFQUNFLGNLRUQ7QUppckdiLENEM3FHUTtFQUNFLHlCQUFBO0FDOHFHVixDRHpxR007RUFDRSxvQ0FBQTtBQzRxR1IsQ0R6cUdNO0VBQ0UsNkJBQUE7QUM0cUdSLENEenFHTTtFQUNFLGdDQUFBO0FDNHFHUixDRHpxR007RUFDRSw4QkFBQTtBQzRxR1IsQ0R6cUdNO0VBQ0UsK0JBQUE7QUM0cUdSLENEcnFHUTs7O0VBQ0UsZ0NBQUE7QUMwcUdWLENEbHFHVTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7QUNxcUdaLENEL3BHTTtFRTFKSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUQ4ekdGLENEL3BHUTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQ2txR1YsQ0RocUdVO0VBR0UsV0s5Sko7RUwrSkksb0NBQUE7QUNncUdaLENEN3BHVTtFQUNFLG1DQUFBO0FDK3BHWixDRDVwR1U7RUFDRSxnQkFBQTtBQzhwR1osQ0R2cEdRO0VBQ0UsNkJBQUE7RUFDQSxjR3pFRDtBRm11R1QsQ0R4cEdVO0VBQ0UsY0c1RUg7QUZzdUdULENEdnBHVTtFQUNFLDBDQUFBO0FDeXBHWixDRHRwR1U7RUFHRSx5Q0FBQTtFQUNBLGNHdkZIO0FGNnVHVCxDRG5wR1U7RUFDRSwrU0FBQTtBQ3FwR1osQ0Q5b0dRO0VBQ0UseUJHbkdEO0VIb0dDLGtEQUFBO0VBQ0EsV0s1TUY7RUw2TUUseUJBQUE7QUNpcEdWLENEM29HWTtFQUNFLHlCQUFBO0FDNm9HZCxDRHpvR1U7RUFHRSx5QkFBQTtBQ3lvR1osQ0R0b0dVO0VBQ0UsV0svTko7QUp1MkdSLENEcm9HVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDc29HWixDRC9uR1E7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0d6SUQ7QUYyd0dULENEaG9HVTtFQUNFLDBDQUFBO0VBQ0EsY0c3SUg7QUYrd0dULENEL25HVTtFQUNFLGdCQUFBO0FDaW9HWixDRDluR1U7RUFHRSx5Q0FBQTtFQUNBLGNHeEpIO0FGc3hHVCxDRDNuR1U7RUFDRSwrU0FBQTtBQzZuR1osQ0R6bkdVO0VBQ0UseUNBQUE7RUFDQSxjR2xLSDtBRjZ4R1QsQ0RqbkdZOztFQUNFLHlLQUFBO0FDcW5HZCxDRHRtR1U7RUFDRSx5Qkc3TEg7QUZzeUdULENEL2xHYztFQUNFLGNHeE1QO0FGMHlHVCxDRC9sR2M7RUFDRSx5QkFBQTtBQ2ltR2hCLENEcmxHYztFQUNFLDhCQUFBO0VBQ0EsV0tqVVI7QUp5NUdSLENEdGxHZ0I7RUFDRSxXS3BVVjtBSjQ1R1IsQ0RsbEdjO0VBQ0UsY0dwT1A7QUZ3ekdULENEOWtHYztFQUNFLG1CRzNPUDtFSDRPTyxXS25WUjtBSm02R1IsQ0R2a0drQjtFQUNFLDJUQUFBO0FDeWtHcEIsQ0QxakdrQjtFQUNFLDJUQUFBO0FDNGpHcEIsQ0QxaUdjO0VBQ0UsV0toWVI7RUxpWVEsb0NBQUE7RUFDQSxxQkczUlA7RUg0Uk8sb0RBQUE7QUM2aUdoQixDRHBpR1E7RUFDRSwwQ0FBQTtBQ3VpR1YsQ0RyaUdVO0VBQ0UseUJHelNIO0FGZzFHVCxDRC9oR1U7RUFDRSxnQ0FBQTtBQ2tpR1osQ0RoaUdZOztFQUVFLDBCQUFBO0FDa2lHZCxDRC9oR1k7RUFDRSxvQ0FBQTtBQ2lpR2QsQ0QvaEdjO0VBQ0UsK0NBQUE7QUNpaUdoQixDRHRoR1k7RUFFRSxnQ0FBQTtBQ3doR2QsQ0Q5Z0dNO0VBQ0UsaUVBQUE7QUNpaEdSLENEM2dHVTs7RUFFRSxxQkc3Vkg7RUg4VkcseUJHOVZIO0FGNDJHVCxDRHpnR1k7Ozs7O0VBR0UsMERBQUE7QUM2Z0dkLENEemdHVTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDMmdHWixDRHhnR1U7RUFDRSxnQ0FBQTtBQzBnR1osQ0RsZ0dVO0VBQ0Usb0NBQUE7RUFDQSxXS2xlSjtFTG1lSSw2QkFBQTtBQ3FnR1osQ0QzL0ZjO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBQzgvRmhCLENEdi9GTTtFQUNFLHlCQUFBO0FDMC9GUixDRHYvRk07RUFDRSxvQ0FBQTtBQzAvRlIsQ0R2L0ZNO0VBQ0Usb0NBQUE7QUMwL0ZSLENEdi9GTTtFQUNFLHdDQUFBO0FDMC9GUixDRHYvRk07RUFDRSwyQ0FBQTtBQzAvRlIsQ0R2L0ZNO0VBQ0UseUNBQUE7QUMwL0ZSLENEdi9GTTtFQUNFLDBDQUFBO0FDMC9GUixDRHYvRk07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRHdoSEYsQ0R6aEdNO0VBQ0UseUJBQUE7QUM0aEdSLENEemhHTTtFQUNFLG9DQUFBO0FDNGhHUixDRHpoR007RUFDRSxvQ0FBQTtBQzRoR1IsQ0R6aEdNO0VBQ0Usd0NBQUE7QUM0aEdSLENEemhHTTtFQUNFLDJDQUFBO0FDNGhHUixDRHpoR007RUFDRSx5Q0FBQTtBQzRoR1IsQ0R6aEdNO0VBQ0UsMENBQUE7QUM0aEdSLENEemhHTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FEMGpIRixDRDNqR007RUFDRSx5QkFBQTtBQzhqR1IsQ0QzakdNO0VBQ0Usb0NBQUE7QUM4akdSLENEM2pHTTtFQUNFLG9DQUFBO0FDOGpHUixDRDNqR007RUFDRSx3Q0FBQTtBQzhqR1IsQ0QzakdNO0VBQ0UsMkNBQUE7QUM4akdSLENEM2pHTTtFQUNFLHlDQUFBO0FDOGpHUixDRDNqR007RUFDRSwwQ0FBQTtBQzhqR1IsQ0QzakdNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUQ0bEhGLENEN2xHTTtFQUNFLHlCQUFBO0FDZ21HUixDRDdsR007RUFDRSxvQ0FBQTtBQ2dtR1IsQ0Q3bEdNO0VBQ0Usb0NBQUE7QUNnbUdSLENEN2xHTTtFQUNFLHdDQUFBO0FDZ21HUixDRDdsR007RUFDRSwyQ0FBQTtBQ2dtR1IsQ0Q3bEdNO0VBQ0UseUNBQUE7QUNnbUdSLENEN2xHTTtFQUNFLDBDQUFBO0FDZ21HUixDRDdsR007RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRDhuSEYsQ0QvbkdNO0VBQ0UseUJBQUE7QUNrb0dSLENEL25HTTtFQUNFLG9DQUFBO0FDa29HUixDRC9uR007RUFDRSxvQ0FBQTtBQ2tvR1IsQ0QvbkdNO0VBQ0Usd0NBQUE7QUNrb0dSLENEL25HTTtFQUNFLDJDQUFBO0FDa29HUixDRC9uR007RUFDRSx5Q0FBQTtBQ2tvR1IsQ0QvbkdNO0VBQ0UsMENBQUE7QUNrb0dSLENEL25HTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEZ3FIRixDRGpxR007RUFDRSx5QkFBQTtBQ29xR1IsQ0RqcUdNO0VBQ0Usb0NBQUE7QUNvcUdSLENEanFHTTtFQUNFLG9DQUFBO0FDb3FHUixDRGpxR007RUFDRSx3Q0FBQTtBQ29xR1IsQ0RqcUdNO0VBQ0UsMkNBQUE7QUNvcUdSLENEanFHTTtFQUNFLHlDQUFBO0FDb3FHUixDRGpxR007RUFDRSwwQ0FBQTtBQ29xR1IsQ0RqcUdNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QURrc0hGLENEbnNHTTtFQUNFLHlCQUFBO0FDc3NHUixDRG5zR007RUFDRSxvQ0FBQTtBQ3NzR1IsQ0Ruc0dNO0VBQ0Usb0NBQUE7QUNzc0dSLENEbnNHTTtFQUNFLHdDQUFBO0FDc3NHUixDRG5zR007RUFDRSwyQ0FBQTtBQ3NzR1IsQ0Ruc0dNO0VBQ0UseUNBQUE7QUNzc0dSLENEbnNHTTtFQUNFLDBDQUFBO0FDc3NHUixDRG5zR007RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRG91SEYsQ0RydUdNO0VBQ0UseUJBQUE7QUN3dUdSLENEcnVHTTtFQUNFLG9DQUFBO0FDd3VHUixDRHJ1R007RUFDRSxvQ0FBQTtBQ3d1R1IsQ0RydUdNO0VBQ0Usd0NBQUE7QUN3dUdSLENEcnVHTTtFQUNFLDJDQUFBO0FDd3VHUixDRHJ1R007RUFDRSx5Q0FBQTtBQ3d1R1IsQ0RydUdNO0VBQ0UsMENBQUE7QUN3dUdSLENEcnVHTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEc3dIRixDRHZ3R007RUFDRSx5QkFBQTtBQzB3R1IsQ0R2d0dNO0VBQ0Usb0NBQUE7QUMwd0dSLENEdndHTTtFQUNFLG9DQUFBO0FDMHdHUixDRHZ3R007RUFDRSx3Q0FBQTtBQzB3R1IsQ0R2d0dNO0VBQ0UsMkNBQUE7QUMwd0dSLENEdndHTTtFQUNFLHlDQUFBO0FDMHdHUixDRHZ3R007RUFDRSwwQ0FBQTtBQzB3R1IsQ0R2d0dNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUR3eUhGLENEenlHTTtFQUNFLHlCQUFBO0FDNHlHUixDRHp5R007RUFDRSxvQ0FBQTtBQzR5R1IsQ0R6eUdNO0VBQ0Usb0NBQUE7QUM0eUdSLENEenlHTTtFQUNFLHdDQUFBO0FDNHlHUixDRHp5R007RUFDRSwyQ0FBQTtBQzR5R1IsQ0R6eUdNO0VBQ0UseUNBQUE7QUM0eUdSLENEenlHTTtFQUNFLDBDQUFBO0FDNHlHUixDRHp5R007RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRDAwSEYsQ0QzMEdNO0VBQ0UseUJBQUE7QUM4MEdSLENEMzBHTTtFQUNFLG9DQUFBO0FDODBHUixDRDMwR007RUFDRSxvQ0FBQTtBQzgwR1IsQ0QzMEdNO0VBQ0Usd0NBQUE7QUM4MEdSLENEMzBHTTtFQUNFLDJDQUFBO0FDODBHUixDRDMwR007RUFDRSx5Q0FBQTtBQzgwR1IsQ0QzMEdNO0VBQ0UsMENBQUE7QUM4MEdSLENEMzBHTTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FENDJIRixDRDcyR007RUFDRSx5QkFBQTtBQ2czR1IsQ0Q3MkdNO0VBQ0Usb0NBQUE7QUNnM0dSLENENzJHTTtFQUNFLG9DQUFBO0FDZzNHUixDRDcyR007RUFDRSx3Q0FBQTtBQ2czR1IsQ0Q3MkdNO0VBQ0UsMkNBQUE7QUNnM0dSLENENzJHTTtFQUNFLHlDQUFBO0FDZzNHUixDRDcyR007RUFDRSwwQ0FBQTtBQ2czR1IsQ0Q3MkdNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUQ4NEhGLENELzRHTTtFQUNFLHlCQUFBO0FDazVHUixDRC80R007RUFDRSxvQ0FBQTtBQ2s1R1IsQ0QvNEdNO0VBQ0Usb0NBQUE7QUNrNUdSLENELzRHTTtFQUNFLHdDQUFBO0FDazVHUixDRC80R007RUFDRSwyQ0FBQTtBQ2s1R1IsQ0QvNEdNO0VBQ0UseUNBQUE7QUNrNUdSLENELzRHTTtFQUNFLDBDQUFBO0FDazVHUixDRC80R007RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRGc3SEYsQ0RuNEhNO0VBQ0Usb0NBQUE7QUNzNEhSLENEcDRIUTs7RUFFRSw2QkFBQTtBQ3M0SFYsQ0RoNEhRO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBQ200SFYsQ0RqNEhVO0VJM0RSLG9EQUFBO0FIKzdIRixDRGg0SFU7RUFDRSx5QkFBQTtBQ2s0SFosQ0Q5M0hVO0VBQ0UseUJBQUE7QUNnNEhaLENEejNIUTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QUM0M0hWLENEejNIVTtFQUVFLG9DQUFBO0FDMDNIWixDRHYzSFU7O0VBRUUsZ0NBQUE7QUN5M0haLENEcjNIWTtFQUNFLDZDQUFBO0FDdTNIZCxDRHAzSFk7RUFDRSxjS0VEO0FKbzNIYixDRDkySFE7RUFDRSx5QkFBQTtBQ2kzSFYsQ0Q1MkhNO0VBQ0Usb0NBQUE7QUMrMkhSLENENTJITTtFQUNFLDZCQUFBO0FDKzJIUixDRDUySE07RUFDRSxnQ0FBQTtBQysySFIsQ0Q1MkhNO0VBQ0UsOEJBQUE7QUMrMkhSLENENTJITTtFQUNFLCtCQUFBO0FDKzJIUixDRHgySFE7OztFQUNFLGdDQUFBO0FDNjJIVixDRHIySFU7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FDdzJIWixDRGwySE07RUUxSkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FEaWdJRixDRGwySFE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUNxMkhWLENEbjJIVTtFQUdFLFdLOUpKO0VMK0pJLG9DQUFBO0FDbTJIWixDRGgySFU7RUFDRSxtQ0FBQTtBQ2sySFosQ0QvMUhVO0VBQ0UsZ0JBQUE7QUNpMkhaLENEMTFIUTtFQUNFLDZCQUFBO0VBQ0EsY0d6RUQ7QUZzNkhULENEMzFIVTtFQUNFLGNHNUVIO0FGeTZIVCxDRDExSFU7RUFDRSx5Q0FBQTtBQzQxSFosQ0R6MUhVO0VBR0Usd0NBQUE7RUFDQSxjR3ZGSDtBRmc3SFQsQ0R0MUhVO0VBQ0UsK1NBQUE7QUN3MUhaLENEajFIUTtFQUNFLHlCR25HRDtFSG9HQyxrREFBQTtFQUNBLFdLNU1GO0VMNk1FLHlCQUFBO0FDbzFIVixDRDkwSFk7RUFDRSx5QkFBQTtBQ2cxSGQsQ0Q1MEhVO0VBR0UseUJBQUE7QUM0MEhaLENEejBIVTtFQUNFLFdLL05KO0FKMGlJUixDRHgwSFU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ3kwSFosQ0RsMEhRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNHeklEO0FGODhIVCxDRG4wSFU7RUFDRSx5Q0FBQTtFQUNBLGNHN0lIO0FGazlIVCxDRGwwSFU7RUFDRSxnQkFBQTtBQ28wSFosQ0RqMEhVO0VBR0Usd0NBQUE7RUFDQSxjR3hKSDtBRnk5SFQsQ0Q5ekhVO0VBQ0UsK1NBQUE7QUNnMEhaLENENXpIVTtFQUNFLHdDQUFBO0VBQ0EsY0dsS0g7QUZnK0hULENEcHpIWTs7RUFDRSxxS0FBQTtBQ3d6SGQsQ0R6eUhVO0VBQ0UseUJHN0xIO0FGeStIVCxDRGx5SGM7RUFDRSxjR3hNUDtBRjYrSFQsQ0RseUhjO0VBQ0UseUJBQUE7QUNveUhoQixDRHh4SGM7RUFDRSw4QkFBQTtFQUNBLFdLalVSO0FKNGxJUixDRHp4SGdCO0VBQ0UsV0twVVY7QUorbElSLENEcnhIYztFQUNFLGNHcE9QO0FGMi9IVCxDRGp4SGM7RUFDRSxtQkczT1A7RUg0T08sV0tuVlI7QUpzbUlSLENEMXdIa0I7RUFDRSwyVEFBQTtBQzR3SHBCLENEN3ZIa0I7RUFDRSwyVEFBQTtBQyt2SHBCLENEN3VIYztFQUNFLFdLaFlSO0VMaVlRLG9DQUFBO0VBQ0EscUJHM1JQO0VINFJPLG1EQUFBO0FDZ3ZIaEIsQ0R2dUhRO0VBQ0UseUNBQUE7QUMwdUhWLENEeHVIVTtFQUNFLHlCR3pTSDtBRm1oSVQsQ0RsdUhVO0VBQ0UsZ0NBQUE7QUNxdUhaLENEbnVIWTs7RUFFRSwwQkFBQTtBQ3F1SGQsQ0RsdUhZO0VBQ0Usb0NBQUE7QUNvdUhkLENEbHVIYztFQUNFLDhDQUFBO0FDb3VIaEIsQ0R6dEhZO0VBRUUsZ0NBQUE7QUMydEhkLENEanRITTtFQUNFLGlFQUFBO0FDb3RIUixDRDlzSFU7O0VBRUUscUJHN1ZIO0VIOFZHLHlCRzlWSDtBRitpSVQsQ0Q1c0hZOzs7OztFQUdFLHlEQUFBO0FDZ3RIZCxDRDVzSFU7RUFDRSxvREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQzhzSFosQ0Qzc0hVO0VBQ0UsZ0NBQUE7QUM2c0haLENEcnNIVTtFQUNFLG9DQUFBO0VBQ0EsV0tsZUo7RUxtZUksNkJBQUE7QUN3c0haLENEOXJIYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUNpc0hoQixDRDFySE07RUFDRSx5QkFBQTtBQzZySFIsQ0QxckhNO0VBQ0Usb0NBQUE7QUM2ckhSLENEMXJITTtFQUNFLG9DQUFBO0FDNnJIUixDRDFySE07RUFDRSx3Q0FBQTtBQzZySFIsQ0QxckhNO0VBQ0UsMkNBQUE7QUM2ckhSLENEMXJITTtFQUNFLHlDQUFBO0FDNnJIUixDRDFySE07RUFDRSwwQ0FBQTtBQzZySFIsQ0QxckhNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUQydElGLENENXRITTtFQUNFLHlCQUFBO0FDK3RIUixDRDV0SE07RUFDRSxvQ0FBQTtBQyt0SFIsQ0Q1dEhNO0VBQ0Usb0NBQUE7QUMrdEhSLENENXRITTtFQUNFLHdDQUFBO0FDK3RIUixDRDV0SE07RUFDRSwyQ0FBQTtBQyt0SFIsQ0Q1dEhNO0VBQ0UseUNBQUE7QUMrdEhSLENENXRITTtFQUNFLDBDQUFBO0FDK3RIUixDRDV0SE07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRDZ2SUYsQ0Q5dkhNO0VBQ0UseUJBQUE7QUNpd0hSLENEOXZITTtFQUNFLG9DQUFBO0FDaXdIUixDRDl2SE07RUFDRSxvQ0FBQTtBQ2l3SFIsQ0Q5dkhNO0VBQ0Usd0NBQUE7QUNpd0hSLENEOXZITTtFQUNFLDJDQUFBO0FDaXdIUixDRDl2SE07RUFDRSx5Q0FBQTtBQ2l3SFIsQ0Q5dkhNO0VBQ0UsMENBQUE7QUNpd0hSLENEOXZITTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FEK3hJRixDRGh5SE07RUFDRSx5QkFBQTtBQ215SFIsQ0RoeUhNO0VBQ0Usb0NBQUE7QUNteUhSLENEaHlITTtFQUNFLG9DQUFBO0FDbXlIUixDRGh5SE07RUFDRSx3Q0FBQTtBQ215SFIsQ0RoeUhNO0VBQ0UsMkNBQUE7QUNteUhSLENEaHlITTtFQUNFLHlDQUFBO0FDbXlIUixDRGh5SE07RUFDRSwwQ0FBQTtBQ215SFIsQ0RoeUhNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QURpMElGLENEbDBITTtFQUNFLHlCQUFBO0FDcTBIUixDRGwwSE07RUFDRSxvQ0FBQTtBQ3EwSFIsQ0RsMEhNO0VBQ0Usb0NBQUE7QUNxMEhSLENEbDBITTtFQUNFLHdDQUFBO0FDcTBIUixDRGwwSE07RUFDRSwyQ0FBQTtBQ3EwSFIsQ0RsMEhNO0VBQ0UseUNBQUE7QUNxMEhSLENEbDBITTtFQUNFLDBDQUFBO0FDcTBIUixDRGwwSE07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRG0ySUYsQ0RwMkhNO0VBQ0UseUJBQUE7QUN1MkhSLENEcDJITTtFQUNFLG9DQUFBO0FDdTJIUixDRHAySE07RUFDRSxvQ0FBQTtBQ3UySFIsQ0RwMkhNO0VBQ0Usd0NBQUE7QUN1MkhSLENEcDJITTtFQUNFLDJDQUFBO0FDdTJIUixDRHAySE07RUFDRSx5Q0FBQTtBQ3UySFIsQ0RwMkhNO0VBQ0UsMENBQUE7QUN1MkhSLENEcDJITTtFRTVoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FEcTRJRixDRHQ0SE07RUFDRSx5QkFBQTtBQ3k0SFIsQ0R0NEhNO0VBQ0Usb0NBQUE7QUN5NEhSLENEdDRITTtFQUNFLG9DQUFBO0FDeTRIUixDRHQ0SE07RUFDRSx3Q0FBQTtBQ3k0SFIsQ0R0NEhNO0VBQ0UsMkNBQUE7QUN5NEhSLENEdDRITTtFQUNFLHlDQUFBO0FDeTRIUixDRHQ0SE07RUFDRSwwQ0FBQTtBQ3k0SFIsQ0R0NEhNO0VFNWhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUR1NklGLENEeDZITTtFQUNFLHlCQUFBO0FDMjZIUixDRHg2SE07RUFDRSxvQ0FBQTtBQzI2SFIsQ0R4NkhNO0VBQ0Usb0NBQUE7QUMyNkhSLENEeDZITTtFQUNFLHdDQUFBO0FDMjZIUixDRHg2SE07RUFDRSwyQ0FBQTtBQzI2SFIsQ0R4NkhNO0VBQ0UseUNBQUE7QUMyNkhSLENEeDZITTtFQUNFLDBDQUFBO0FDMjZIUixDRHg2SE07RUU1aEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRHk4SUYsQ0s3NklROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRGVVLHlCQUFBO0FMeTZJWixDSzc2SVk7O0VDWlYsMERBQUE7RUFDQSwyQkFBQTtFRGFZLHlCQUFBO0FMaTdJZCxDS3Y2SVU7OztFQUVFLFdEMUNKO0FKbzlJUixDS3Y2SVU7O0VBQ0UsMkJBQUE7QUwwNklaLENLdjZJVTs7RUFDRSx3QkFBQTtBTDA2SVosQ0t2NklVOzs7RUNyQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHlDVSx5QkFBQTtBTHk2SVosQ0toOUlROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTHU4SVosQ0twOElVOzs7RUFFRSxXRDFDSjtBSmkvSVIsQ0twOElVOztFQUNFLDJCQUFBO0FMdThJWixDS3A4SVU7O0VBQ0Usd0JBQUE7QUx1OElaLENLcDhJVTs7O0VDckNSLDBEQUFBO0VBQ0EsMkJBQUE7RUR5Q1UseUJBQUE7QUxzOElaLENLNytJUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QUxvK0laLENLaitJVTs7O0VBRUUsV0QxQ0o7QUo4Z0pSLENLaitJVTs7RUFDRSwyQkFBQTtBTG8rSVosQ0tqK0lVOztFQUNFLHdCQUFBO0FMbytJWixDS2orSVU7OztFQ3JDUiwwREFBQTtFQUNBLDJCQUFBO0VEeUNVLHlCQUFBO0FMbStJWixDSzFnSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FMaWdKWixDSzkvSVU7OztFQUVFLFdEMUNKO0FKMmlKUixDSzkvSVU7O0VBQ0UsMkJBQUE7QUxpZ0paLENLOS9JVTs7RUFDRSx3QkFBQTtBTGlnSlosQ0s5L0lVOzs7RUNyQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHlDVSx5QkFBQTtBTGdnSlosQ0t2aUpROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTDhoSlosQ0szaEpVOzs7RUFFRSxXRDFDSjtBSndrSlIsQ0szaEpVOztFQUNFLDJCQUFBO0FMOGhKWixDSzNoSlU7O0VBQ0Usd0JBQUE7QUw4aEpaLENLM2hKVTs7O0VDckNSLDBEQUFBO0VBQ0EsMkJBQUE7RUR5Q1UseUJBQUE7QUw2aEpaLENLcGtKUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QUwyakpaLENLeGpKVTs7O0VBRUUsV0QxQ0o7QUpxbUpSLENLeGpKVTs7RUFDRSwyQkFBQTtBTDJqSlosQ0t4akpVOztFQUNFLHdCQUFBO0FMMmpKWixDS3hqSlU7OztFQ3JDUiwwREFBQTtFQUNBLDJCQUFBO0VEeUNVLHlCQUFBO0FMMGpKWixDS2ptSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FMd2xKWixDS3JsSlU7OztFQUVFLFdEMUNKO0FKa29KUixDS3JsSlU7O0VBQ0UsMkJBQUE7QUx3bEpaLENLcmxKVTs7RUFDRSx3QkFBQTtBTHdsSlosQ0tybEpVOzs7RUNyQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHlDVSx5QkFBQTtBTHVsSlosQ085b0pFO0VBQ0UsVUFBQTtFQUNBLDhDSG1PcUI7QUo4Nkl6QixDTy9vSkk7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FQaXBKTixDTzdvSkU7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FQK29KSixDTzNvSkk7RUFDRSxnQ0FBQTtBUDZvSk4sQ094b0pJO0VBQ0Usb0NBQUE7RUFDQSxXSDlCRTtFRytCRix1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QVAwb0pOLENPdm9KUTtFQUNFLG9CQUFBO0FQeW9KVixDT3RvSlE7RUFDRSxvQkFBQTtBUHdvSlYsQ09yb0pRO0VBQ0Usd0NBQUE7QVB1b0pWLENPbG9KUTtFQUNFLDRCQUFBO0FQb29KVixDT2pvSlE7RUFDRSw0QkFBQTtBUG1vSlYsQ083bkpNO0VBQ0UsbUJBQUE7QVArbkpSLENPem5KSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QVAybkpOLENPem5KTTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBUDJuSlIsQ094bkpVO0VBQ0UsNEJBQUE7QVAwbkpaLENPdm5KVTtFQUNFLDRCQUFBO0FQeW5KWixDT3BuSk07RUFDRSx1QkFBQTtBUHNuSlIsQ09obkpJO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBUGtuSk4sQ09obkpNO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0FQa25KUixDTy9tSlU7RUFDRSwyQkFBQTtBUGluSlosQ085bUpVO0VBQ0UsMkJBQUE7QVBnbkpaLENPeG1KSTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QVAwbUpOLENPeG1KTTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QVAwbUpSLENPdm1KTTtFQUNFLCtCQUFBO0FQeW1KUixDT3JtSkk7RUFDRSxvREFBQTtFQUNBLHlCQUFBO0FQdW1KTixDT3BtSkk7RUFDRSx5QkFBQTtBUHNtSk4sQ09sbUpFO0VBQ0UsbVZBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0FQb21KSixDT2ptSkU7RUFDRSxtQkFBQTtBUG1tSkosQ09obUpFO0VBQ0UsWUFBQTtBUGttSkosQ081bEpFO0VBQ0UseUJDL0lrQjtFRGdKbEIscUJDOUpzQjtFRCtKdEIsY0N6SjBCO0FSd3ZKOUIsQ083bEpJO0VBQ0UseUJBQUE7QVArbEpOLENPemxKTTtFQUNFLG9EQUFBO0VBQ0EseUJBQUE7QVAybEpSLENPdGxKRTtFQUNFLHlCQ2xMaUI7RURtTGpCLHFCQ2pMc0I7QVJ5d0oxQixDT3JsSkU7RUFDRSx5QkN2TGlCO0VEd0xqQixxQkN0THNCO0FSNndKMUIsQ09wbEpFO0VBQ0UseUJDNUxpQjtBUmt4SnJCLENPbmxKRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QVBxbEpKLENPbmxKSTtFQUNFLHlCQUFBO0FQcWxKTixDT2psSkU7RUFDRSxnQ0FBQTtBUG1sSkosQ09qbEpJO0VBQ0Usb0NBQUE7QVBtbEpOLENPamxKTTtFQUNFLHlCQUFBO0FQbWxKUixDUy95SkU7RUFDRSxjTGdHUztBSmt0SmIsQ1NoekpJO0VBQ0UscUJDSEk7QVZxekpWLENTaHpKTTtFQUNFLHVCQUFBO0VBQ0EsY0x5Rks7QUp5dEpiLENTOXlKSTtFQUVFLG1CQ2JJO0VEY0osV0xURTtFS1VGLHFCQ2ZJO0FWOHpKVixDUzV5Skk7RUFFRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QVQ2eUpOLENTMXlKSTtFQUlFLG1CQzdCSTtFRDhCSixXTHpCRTtFSzBCRixxQkMvQkk7QVZ3MEpWLENTdHlKSTtFQUdFLDZCQUFBO0FUc3lKTixDU255Skk7RUFHRSxjTGxDSztBSnEwSlgsQ1NoeUpJO0VBQ0UsbUJMekNJO0FKMjBKVixDUzl4SkU7RUFFRSxhQUFBO0FUK3hKSixDUzN4Skk7O0VBRUUsU0FBQTtBVDZ4Sk4sQ1MzeEpNOzs7RUFFRSxhQy9ERTtBVjYxSlYsQ1N6eEpFO0VBQ0UsZ0JBQUE7QVQyeEpKLENTeHhKRTtFQUNFLGFBQUE7QVQweEpKLENTdHhKSTtFQUNFLFlBQUE7QVR3eEpOLENTbHhKQTs7OztFQUlFLGdCTG5GTTtBSncySlIsQ1NoeEpFO0VBQ0UsbUJEbEZpQjtFQ21GakIscUJEbkZpQjtFQ29GakIsZ0JBQUE7QVRteEpKLENTaHhKTTs7RUFFRSxhRHhGZ0I7QVIwMkp4QixDUzl3Skk7RUFDRSxjRDdGa0I7QVI2Mkp4QixDUzd3Skk7RUFDRSwyQkFBQTtBVCt3Sk4sQ1M1d0pJO0VBQ0UsY0RyR2tCO0FSbTNKeEIsQ1Mxd0pNO0VBRUUsY0QzR2dCO0FSczNKeEIsQ1N4d0pNO0VBQ0UsV0x2SEE7QUppNEpSLENTdndKTTtFQUdFLHlCQUFBO0FUdXdKUixDU3B3Sk07RUFFRSxtQkRoSGE7RUNpSGIscUJEakhhO0VDa0hiLDZDQUFBO0FUcXdKUixDU2x3Sk07RUFDRSxjRGhJZ0I7RUNpSWhCLHFCRHZIYTtBUjIzSnJCLENTL3ZKTTtFQUVFLG1CRDlIYTtBUjgzSnJCLENTNXZKSTtFQUNFLGdDQUFBO0FUOHZKTixDUzV2Sk07O0VBRUUsY0RqSmdCO0FSKzRKeEIsQ1M1dkpROztFQUNFLG1CRHJKVztBUm81SnJCLENTM3ZKTTtFQUNFLDRCRHpKZ0I7QVJzNUp4QixDUzF2Sk07RUFDRSx5QkQ3SmdCO0FSeTVKeEIsQ1N0dkpFOzs7O0VBSUUsbUJEeEtpQjtBUmc2SnJCLENTbnZKQTs7O0VBR0UseUJBQUE7RUFDQSxxQkFBQTtBVHN2SkYsQ1NudkpBO0VBQ0UsZUFBQTtBVHN2SkYsQ1NsdkpFO0VBQ0Usd0JBQUE7QVRxdkpKLENTbHZKRTs7RUFFRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FUb3ZKSixDU2x2Skk7O0VBQ0UsYUFBQTtBVHF2Sk4iLCJmaWxlIjoiYWNjb3VudC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiNiM2IzYjMgI2NjYyAjZDlkOWQ5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy1hcnJvd3t0b3A6LTJweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk5OTtib3JkZXItd2lkdGg6MCA1cHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3c6aG92ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzMzN9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC1ib3R0b20+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC10b3A+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1jb2xvcjojMDA3ZWZmO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wNzUpLDAgMCAwIDNweCByZ2JhKDAsMTI2LDI1NSwwLjEpfS5uZy1zZWxlY3Qubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOX0ubmctc2VsZWN0IC5uZy1oYXMtdmFsdWUgLm5nLXBsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZX0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVye2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgI2NjYzttaW4taGVpZ2h0OjM2cHg7YWxpZ24taXRlbXM6Y2VudGVyfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDFweCAwIHJnYmEoMCwwLDAsMC4wNil9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLWxlZnQ6MTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntjb2xvcjojOTk5fS5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lcntoZWlnaHQ6MzZweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7dG9wOjVweDtsZWZ0OjA7cGFkZGluZy1sZWZ0OjEwcHg7cGFkZGluZy1yaWdodDo1MHB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3BhZGRpbmctcmlnaHQ6MTBweDtwYWRkaW5nLWxlZnQ6NTBweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZS5uZy1zZWxlY3QtZGlzYWJsZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O2JvcmRlcjoxcHggc29saWQgI2U2ZTZlNn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZS5uZy1zZWxlY3QtZGlzYWJsZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmc6MCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1sZWZ0OjdweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDo3cHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7Zm9udC1zaXplOi45ZW07bWFyZ2luLWJvdHRvbTo1cHg7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcnt0b3A6NXB4O3BhZGRpbmctYm90dG9tOjVweDtwYWRkaW5nLWxlZnQ6M3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7cGFkZGluZy1yaWdodDozcHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcntjb2xvcjojOTk5fS5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXI6aG92ZXIgLm5nLWNsZWFye2NvbG9yOiNEMDAyMUJ9Lm5nLXNlbGVjdCAubmctc3Bpbm5lci16b25le3BhZGRpbmc6NXB4IDVweCAwIDB9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggMCAwIDVweH0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVye3dpZHRoOjI1cHg7cGFkZGluZy1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVye3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXI6aG92ZXIgLm5nLWFycm93e2JvcmRlci10b3AtY29sb3I6IzY2Nn0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVyIC5uZy1hcnJvd3tib3JkZXItY29sb3I6Izk5OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjVweCA1cHggMi41cHh9Lm5nLWRyb3Bkb3duLXBhbmVse2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym94LXNoYWRvdzowIDFweCAwIHJnYmEoMCwwLDAsMC4wNik7bGVmdDowfS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9te3RvcDoxMDAlO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItdG9wLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLXRvcDotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9tIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9we2JvdHRvbToxMDAlO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLWJvdHRvbTotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9wIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWhlYWRlcntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cHt1c2VyLXNlbGVjdDpub25lO3BhZGRpbmc6OHB4IDEwcHg7Zm9udC13ZWlnaHQ6NTAwO2NvbG9yOnJnYmEoMCwwLDAsMC41NCk7Y3Vyc29yOnBvaW50ZXJ9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLWRpc2FibGVke2N1cnNvcjpkZWZhdWx0fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1zZWxlY3RlZCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtwYWRkaW5nOjhweCAxMHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQgLm5nLW9wdGlvbi1sYWJlbCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbHtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmO2NvbG9yOiMzMzN9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1kaXNhYmxlZHtjb2xvcjojY2NjfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1sZWZ0OjIycHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtmb250LXNpemU6ODAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH1cbiIsIi5mbGF0cGlja3ItY2FsZW5kYXJ7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtvcGFjaXR5OjA7ZGlzcGxheTpub25lO3RleHQtYWxpZ246Y2VudGVyO3Zpc2liaWxpdHk6aGlkZGVuO3BhZGRpbmc6MDstd2Via2l0LWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lO2RpcmVjdGlvbjpsdHI7Ym9yZGVyOjA7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjVweDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozMDcuODc1cHg7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy1tcy10b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYm94LXNoYWRvdzoxcHggMCAwICNlNmU2ZTYsLTFweCAwIDAgI2U2ZTZlNiwwIDFweCAwICNlNmU2ZTYsMCAtMXB4IDAgI2U2ZTZlNiwwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7Ym94LXNoYWRvdzoxcHggMCAwICNlNmU2ZTYsLTFweCAwIDAgI2U2ZTZlNiwwIDFweCAwICNlNmU2ZTYsMCAtMXB4IDAgI2U2ZTZlNiwwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCl9LmZsYXRwaWNrci1jYWxlbmRhci5vcGVuLC5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5le29wYWNpdHk6MTttYXgtaGVpZ2h0OjY0MHB4O3Zpc2liaWxpdHk6dmlzaWJsZX0uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW57ZGlzcGxheTppbmxpbmUtYmxvY2s7ei1pbmRleDo5OTk5OX0uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUub3Blbnstd2Via2l0LWFuaW1hdGlvbjpmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTthbmltYXRpb246ZnBGYWRlSW5Eb3duIDMwMG1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSl9LmZsYXRwaWNrci1jYWxlbmRhci5pbmxpbmV7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MnB4fS5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGlje3Bvc2l0aW9uOmFic29sdXRlO3RvcDpjYWxjKDEwMCUgKyAycHgpfS5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljLm9wZW57ei1pbmRleDo5OTk7ZGlzcGxheTpibG9ja30uZmxhdHBpY2tyLWNhbGVuZGFyLm11bHRpTW9udGggLmZsYXRwaWNrci1kYXlzIC5kYXlDb250YWluZXI6bnRoLWNoaWxkKG4rMSkgLmZsYXRwaWNrci1kYXkuaW5SYW5nZTpudGgtY2hpbGQoN24rNyl7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudH0uZmxhdHBpY2tyLWNhbGVuZGFyLm11bHRpTW9udGggLmZsYXRwaWNrci1kYXlzIC5kYXlDb250YWluZXI6bnRoLWNoaWxkKG4rMikgLmZsYXRwaWNrci1kYXkuaW5SYW5nZTpudGgtY2hpbGQoN24rMSl7LXdlYmtpdC1ib3gtc2hhZG93Oi0ycHggMCAwICNlNmU2ZTYsNXB4IDAgMCAjZTZlNmU2O2JveC1zaGFkb3c6LTJweCAwIDAgI2U2ZTZlNiw1cHggMCAwICNlNmU2ZTZ9LmZsYXRwaWNrci1jYWxlbmRhciAuaGFzV2Vla3MgLmRheUNvbnRhaW5lciwuZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNUaW1lIC5kYXlDb250YWluZXJ7Ym9yZGVyLWJvdHRvbTowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXJ7Ym9yZGVyLWxlZnQ6MH0uZmxhdHBpY2tyLWNhbGVuZGFyLmhhc1RpbWUgLmZsYXRwaWNrci10aW1le2hlaWdodDo0MHB4O2JvcmRlci10b3A6MXB4IHNvbGlkICNlNmU2ZTZ9LmZsYXRwaWNrci1jYWxlbmRhci5ub0NhbGVuZGFyLmhhc1RpbWUgLmZsYXRwaWNrci10aW1le2hlaWdodDphdXRvfS5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3JlLC5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztwb2ludGVyLWV2ZW50czpub25lO2JvcmRlcjpzb2xpZCB0cmFuc3BhcmVudDtjb250ZW50OicnO2hlaWdodDowO3dpZHRoOjA7bGVmdDoyMnB4fS5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmJlZm9yZSwuZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93UmlnaHQ6YmVmb3JlLC5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmFmdGVyLC5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dSaWdodDphZnRlcntsZWZ0OmF1dG87cmlnaHQ6MjJweH0uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Q2VudGVyOmJlZm9yZSwuZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Q2VudGVyOmFmdGVye2xlZnQ6NTAlO3JpZ2h0OjUwJX0uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZXtib3JkZXItd2lkdGg6NXB4O21hcmdpbjowIC01cHh9LmZsYXRwaWNrci1jYWxlbmRhcjphZnRlcntib3JkZXItd2lkdGg6NHB4O21hcmdpbjowIC00cHh9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUsLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlcntib3R0b206MTAwJX0uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZXtib3JkZXItYm90dG9tLWNvbG9yOiNlNmU2ZTZ9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlcntib3JkZXItYm90dG9tLWNvbG9yOiNmZmZ9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmUsLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlcnt0b3A6MTAwJX0uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZXtib3JkZXItdG9wLWNvbG9yOiNlNmU2ZTZ9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlcntib3JkZXItdG9wLWNvbG9yOiNmZmZ9LmZsYXRwaWNrci1jYWxlbmRhcjpmb2N1c3tvdXRsaW5lOjB9LmZsYXRwaWNrci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5mbGF0cGlja3ItbW9udGhze2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1tb250aHtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsMC45KTtmaWxsOnJnYmEoMCwwLDAsMC45KTtoZWlnaHQ6MzRweDtsaW5lLWhlaWdodDoxO3RleHQtYWxpZ246Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1ib3gtZmxleDoxOy13ZWJraXQtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxfS5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aCwuZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGh7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7aGVpZ2h0OjM0cHg7cGFkZGluZzoxMHB4O3otaW5kZXg6Mztjb2xvcjpyZ2JhKDAsMCwwLDAuOSk7ZmlsbDpyZ2JhKDAsMCwwLDAuOSl9LmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1kaXNhYmxlZCwuZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLWRpc2FibGVke2Rpc3BsYXk6bm9uZX0uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGggaSwuZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGggaXtwb3NpdGlvbjpyZWxhdGl2ZX0uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgsLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoey8qXG4gICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL2xlZnQ6MC8qXG4gICAgICAvKnJ0bDplbmQ6aWdub3JlKi99LypcbiAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXG4vKlxuICAgICAgLypydGw6ZW5kOmlnbm9yZSovXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgsLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1uZXh0LW1vbnRoey8qXG4gICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL3JpZ2h0OjAvKlxuICAgICAgLypydGw6ZW5kOmlnbm9yZSovfS8qXG4gICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xuLypcbiAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyLC5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItbmV4dC1tb250aDpob3Zlcntjb2xvcjojOTU5ZWE5fS5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aDpob3ZlciBzdmcsLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHN2Z3tmaWxsOiNmNjQ3NDd9LmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZywuZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGggc3Zne3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHh9LmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyBwYXRoLC5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcgcGF0aHstd2Via2l0LXRyYW5zaXRpb246ZmlsbCAuMXM7dHJhbnNpdGlvbjpmaWxsIC4xcztmaWxsOmluaGVyaXR9Lm51bUlucHV0V3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6YXV0b30ubnVtSW5wdXRXcmFwcGVyIGlucHV0LC5udW1JbnB1dFdyYXBwZXIgc3BhbntkaXNwbGF5OmlubGluZS1ibG9ja30ubnVtSW5wdXRXcmFwcGVyIGlucHV0e3dpZHRoOjEwMCV9Lm51bUlucHV0V3JhcHBlciBpbnB1dDo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX0ubnVtSW5wdXRXcmFwcGVyIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLC5udW1JbnB1dFdyYXBwZXIgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b257bWFyZ2luOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Lm51bUlucHV0V3JhcHBlciBzcGFue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7d2lkdGg6MTRweDtwYWRkaW5nOjAgNHB4IDAgMnB4O2hlaWdodDo1MCU7bGluZS1oZWlnaHQ6NTAlO29wYWNpdHk6MDtjdXJzb3I6cG9pbnRlcjtib3JkZXI6MXB4IHNvbGlkIHJnYmEoNTcsNTcsNTcsMC4xNSk7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5udW1JbnB1dFdyYXBwZXIgc3Bhbjpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4xKX0ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpfS5udW1JbnB1dFdyYXBwZXIgc3BhbjphZnRlcntkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZX0ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcHt0b3A6MDtib3JkZXItYm90dG9tOjB9Lm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXJ7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDo0cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbTo0cHggc29saWQgcmdiYSg1Nyw1Nyw1NywwLjYpO3RvcDoyNiV9Lm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bnt0b3A6NTAlfS5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXJ7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDo0cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcDo0cHggc29saWQgcmdiYSg1Nyw1Nyw1NywwLjYpO3RvcDo0MCV9Lm51bUlucHV0V3JhcHBlciBzcGFuIHN2Z3t3aWR0aDppbmhlcml0O2hlaWdodDphdXRvfS5udW1JbnB1dFdyYXBwZXIgc3BhbiBzdmcgcGF0aHtmaWxsOnJnYmEoMCwwLDAsMC41KX0ubnVtSW5wdXRXcmFwcGVyOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjA1KX0ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHNwYW57b3BhY2l0eToxfS5mbGF0cGlja3ItY3VycmVudC1tb250aHtmb250LXNpemU6MTM1JTtsaW5lLWhlaWdodDppbmhlcml0O2ZvbnQtd2VpZ2h0OjMwMDtjb2xvcjppbmhlcml0O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjc1JTtsZWZ0OjEyLjUlO3BhZGRpbmc6Ny40OHB4IDAgMCAwO2xpbmUtaGVpZ2h0OjE7aGVpZ2h0OjM0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9LmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHNwYW4uY3VyLW1vbnRoe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOmluaGVyaXQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6LjVjaDtwYWRkaW5nOjB9LmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHNwYW4uY3VyLW1vbnRoOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjA1KX0uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlcnt3aWR0aDo2Y2g7d2lkdGg6N2NoXFwwO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlcntib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMCwwLDAsMC45KX0uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlcntib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsMC45KX0uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJ7YmFja2dyb3VuZDp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6aW5oZXJpdDtjdXJzb3I6dGV4dDtwYWRkaW5nOjAgMCAwIC41Y2g7bWFyZ2luOjA7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDozMDA7bGluZS1oZWlnaHQ6aW5oZXJpdDtoZWlnaHQ6YXV0bztib3JkZXI6MDtib3JkZXItcmFkaXVzOjA7dmVydGljYWwtYWxpZ246aW5pdGlhbDstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7YXBwZWFyYW5jZTp0ZXh0ZmllbGR9LmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyOmZvY3Vze291dGxpbmU6MH0uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdLC5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF06aG92ZXJ7Zm9udC1zaXplOjEwMCU7Y29sb3I6cmdiYSgwLDAsMCwwLjUpO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7cG9pbnRlci1ldmVudHM6bm9uZX0uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoc3thcHBlYXJhbmNlOm1lbnVsaXN0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6MzAwO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0OmluaGVyaXQ7bWFyZ2luOi0xcHggMCAwIDA7b3V0bGluZTpub25lO3BhZGRpbmc6MCAwIDAgLjVjaDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjppbml0aWFsOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTptZW51bGlzdDstbW96LWFwcGVhcmFuY2U6bWVudWxpc3Q7d2lkdGg6YXV0b30uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoczpmb2N1cywuZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoczphY3RpdmV7b3V0bGluZTpub25lfS5mbGF0cGlja3ItY3VycmVudC1tb250aCAuZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGhzOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjA1KX0uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRocyAuZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGh7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtvdXRsaW5lOm5vbmU7cGFkZGluZzowfS5mbGF0cGlja3Itd2Vla2RheXN7YmFja2dyb3VuZDp0cmFuc3BhcmVudDt0ZXh0LWFsaWduOmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MTAwJTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDoyOHB4fS5mbGF0cGlja3Itd2Vla2RheXMgLmZsYXRwaWNrci13ZWVrZGF5Y29udGFpbmVye2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtZmxleDoxOy13ZWJraXQtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxfXNwYW4uZmxhdHBpY2tyLXdlZWtkYXl7Y3Vyc29yOmRlZmF1bHQ7Zm9udC1zaXplOjkwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsMC41NCk7bGluZS1oZWlnaHQ6MTttYXJnaW46MDt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrOy13ZWJraXQtYm94LWZsZXg6MTstd2Via2l0LWZsZXg6MTstbXMtZmxleDoxO2ZsZXg6MTtmb250LXdlaWdodDpib2xkZXJ9LmRheUNvbnRhaW5lciwuZmxhdHBpY2tyLXdlZWtze3BhZGRpbmc6MXB4IDAgMCAwfS5mbGF0cGlja3ItZGF5c3twb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1hbGlnbjpzdGFydDstd2Via2l0LWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDt3aWR0aDozMDcuODc1cHh9LmZsYXRwaWNrci1kYXlzOmZvY3Vze291dGxpbmU6MH0uZGF5Q29udGFpbmVye3BhZGRpbmc6MDtvdXRsaW5lOjA7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOjMwNy44NzVweDttaW4td2lkdGg6MzA3Ljg3NXB4O21heC13aWR0aDozMDcuODc1cHg7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstbXMtZmxleC13cmFwOndyYXA7LW1zLWZsZXgtcGFjazpqdXN0aWZ5Oy13ZWJraXQtanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0uZGF5Q29udGFpbmVyICsgLmRheUNvbnRhaW5lcnstd2Via2l0LWJveC1zaGFkb3c6LTFweCAwIDAgI2U2ZTZlNjtib3gtc2hhZG93Oi0xcHggMCAwICNlNmU2ZTZ9LmZsYXRwaWNrci1kYXl7YmFja2dyb3VuZDpub25lO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoxNTBweDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6IzM5MzkzOTtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo0MDA7d2lkdGg6MTQuMjg1NzE0MyU7LXdlYmtpdC1mbGV4LWJhc2lzOjE0LjI4NTcxNDMlOy1tcy1mbGV4LXByZWZlcnJlZC1zaXplOjE0LjI4NTcxNDMlO2ZsZXgtYmFzaXM6MTQuMjg1NzE0MyU7bWF4LXdpZHRoOjM5cHg7aGVpZ2h0OjM5cHg7bGluZS1oZWlnaHQ6MzlweDttYXJnaW46MDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstd2Via2l0LWp1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcn0uZmxhdHBpY2tyLWRheS5pblJhbmdlLC5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS5pblJhbmdlLC5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS5pblJhbmdlLC5mbGF0cGlja3ItZGF5LnRvZGF5LmluUmFuZ2UsLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsLmZsYXRwaWNrci1kYXk6aG92ZXIsLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmhvdmVyLC5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpob3ZlciwuZmxhdHBpY2tyLWRheTpmb2N1cywuZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6Zm9jdXMsLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5OmZvY3Vze2N1cnNvcjpwb2ludGVyO291dGxpbmU6MDtiYWNrZ3JvdW5kOiNlNmU2ZTY7Ym9yZGVyLWNvbG9yOiNlNmU2ZTZ9LmZsYXRwaWNrci1kYXkudG9kYXl7Ym9yZGVyLWNvbG9yOiM5NTllYTl9LmZsYXRwaWNrci1kYXkudG9kYXk6aG92ZXIsLmZsYXRwaWNrci1kYXkudG9kYXk6Zm9jdXN7Ym9yZGVyLWNvbG9yOiM5NTllYTk7YmFja2dyb3VuZDojOTU5ZWE5O2NvbG9yOiNmZmZ9LmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQsLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZSwuZmxhdHBpY2tyLWRheS5lbmRSYW5nZSwuZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5pblJhbmdlLC5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuaW5SYW5nZSwuZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5pblJhbmdlLC5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmZvY3VzLC5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6Zm9jdXMsLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6Zm9jdXMsLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQ6aG92ZXIsLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3ZlciwuZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpob3ZlciwuZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5wcmV2TW9udGhEYXksLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5wcmV2TW9udGhEYXksLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UucHJldk1vbnRoRGF5LC5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLm5leHRNb250aERheSwuZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLm5leHRNb250aERheSwuZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5uZXh0TW9udGhEYXl7YmFja2dyb3VuZDojNTY5ZmY3Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojNTY5ZmY3fS5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UsLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlLC5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2V7Ym9yZGVyLXJhZGl1czo1MHB4IDAgMCA1MHB4fS5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLmVuZFJhbmdlLC5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuZW5kUmFuZ2V7Ym9yZGVyLXJhZGl1czowIDUwcHggNTBweCAwfS5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2U6bm90KDpudGgtY2hpbGQoN24rMSkpLC5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSksLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSl7LXdlYmtpdC1ib3gtc2hhZG93Oi0xMHB4IDAgMCAjNTY5ZmY3O2JveC1zaGFkb3c6LTEwcHggMCAwICM1NjlmZjd9LmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZS5lbmRSYW5nZSwuZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZXtib3JkZXItcmFkaXVzOjUwcHh9LmZsYXRwaWNrci1kYXkuaW5SYW5nZXtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1ib3gtc2hhZG93Oi01cHggMCAwICNlNmU2ZTYsNXB4IDAgMCAjZTZlNmU2O2JveC1zaGFkb3c6LTVweCAwIDAgI2U2ZTZlNiw1cHggMCAwICNlNmU2ZTZ9LmZsYXRwaWNrci1kYXkuZmxhdHBpY2tyLWRpc2FibGVkLC5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZDpob3ZlciwuZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXksLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LC5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQsLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5wcmV2TW9udGhEYXksLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5uZXh0TW9udGhEYXl7Y29sb3I6cmdiYSg1Nyw1Nyw1NywwLjMpO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2N1cnNvcjpkZWZhdWx0fS5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZCwuZmxhdHBpY2tyLWRheS5mbGF0cGlja3ItZGlzYWJsZWQ6aG92ZXJ7Y3Vyc29yOm5vdC1hbGxvd2VkO2NvbG9yOnJnYmEoNTcsNTcsNTcsMC4xKX0uZmxhdHBpY2tyLWRheS53ZWVrLnNlbGVjdGVke2JvcmRlci1yYWRpdXM6MDstd2Via2l0LWJveC1zaGFkb3c6LTVweCAwIDAgIzU2OWZmNyw1cHggMCAwICM1NjlmZjc7Ym94LXNoYWRvdzotNXB4IDAgMCAjNTY5ZmY3LDVweCAwIDAgIzU2OWZmN30uZmxhdHBpY2tyLWRheS5oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59LnJhbmdlTW9kZSAuZmxhdHBpY2tyLWRheXttYXJnaW4tdG9wOjFweH0uZmxhdHBpY2tyLXdlZWt3cmFwcGVye2Zsb2F0OmxlZnR9LmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtze3BhZGRpbmc6MCAxMnB4Oy13ZWJraXQtYm94LXNoYWRvdzoxcHggMCAwICNlNmU2ZTY7Ym94LXNoYWRvdzoxcHggMCAwICNlNmU2ZTZ9LmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtkYXl7ZmxvYXQ6bm9uZTt3aWR0aDoxMDAlO2xpbmUtaGVpZ2h0OjI4cHh9LmZsYXRwaWNrci13ZWVrd3JhcHBlciBzcGFuLmZsYXRwaWNrci1kYXksLmZsYXRwaWNrci13ZWVrd3JhcHBlciBzcGFuLmZsYXRwaWNrci1kYXk6aG92ZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21heC13aWR0aDpub25lO2NvbG9yOnJnYmEoNTcsNTcsNTcsMC4zKTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2N1cnNvcjpkZWZhdWx0O2JvcmRlcjpub25lfS5mbGF0cGlja3ItaW5uZXJDb250YWluZXJ7ZGlzcGxheTpibG9jaztkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpoaWRkZW59LmZsYXRwaWNrci1yQ29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmZsYXRwaWNrci10aW1le3RleHQtYWxpZ246Y2VudGVyO291dGxpbmU6MDtkaXNwbGF5OmJsb2NrO2hlaWdodDowO2xpbmUtaGVpZ2h0OjQwcHg7bWF4LWhlaWdodDo0MHB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uZmxhdHBpY2tyLXRpbWU6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH0uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlcnstd2Via2l0LWJveC1mbGV4OjE7LXdlYmtpdC1mbGV4OjE7LW1zLWZsZXg6MTtmbGV4OjE7d2lkdGg6NDAlO2hlaWdodDo0MHB4O2Zsb2F0OmxlZnR9LmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVye2JvcmRlci1ib3R0b20tY29sb3I6IzM5MzkzOX0uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlcntib3JkZXItdG9wLWNvbG9yOiMzOTM5Mzl9LmZsYXRwaWNrci10aW1lLmhhc1NlY29uZHMgLm51bUlucHV0V3JhcHBlcnt3aWR0aDoyNiV9LmZsYXRwaWNrci10aW1lLnRpbWUyNGhyIC5udW1JbnB1dFdyYXBwZXJ7d2lkdGg6NDklfS5mbGF0cGlja3ItdGltZSBpbnB1dHtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtib3JkZXI6MDtib3JkZXItcmFkaXVzOjA7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjA7cGFkZGluZzowO2hlaWdodDppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXQ7Y29sb3I6IzM5MzkzOTtmb250LXNpemU6MTRweDtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZDstbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO2FwcGVhcmFuY2U6dGV4dGZpZWxkfS5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItaG91cntmb250LXdlaWdodDpib2xkfS5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItbWludXRlLC5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3Itc2Vjb25ke2ZvbnQtd2VpZ2h0OjQwMH0uZmxhdHBpY2tyLXRpbWUgaW5wdXQ6Zm9jdXN7b3V0bGluZTowO2JvcmRlcjowfS5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yLC5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBte2hlaWdodDppbmhlcml0O2Zsb2F0OmxlZnQ7bGluZS1oZWlnaHQ6aW5oZXJpdDtjb2xvcjojMzkzOTM5O2ZvbnQtd2VpZ2h0OmJvbGQ7d2lkdGg6MiU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtYWxpZ24tc2VsZjpjZW50ZXI7LW1zLWZsZXgtaXRlbS1hbGlnbjpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXJ9LmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG17b3V0bGluZTowO3dpZHRoOjE4JTtjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDo0MDB9LmZsYXRwaWNrci10aW1lIGlucHV0OmhvdmVyLC5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtOmhvdmVyLC5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cywuZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpmb2N1c3tiYWNrZ3JvdW5kOiNlZWV9LmZsYXRwaWNrci1pbnB1dFtyZWFkb25seV17Y3Vyc29yOnBvaW50ZXJ9QC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluRG93bntmcm9te29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX19QGtleWZyYW1lcyBmcEZhZGVJbkRvd257ZnJvbXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9fSIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgIEZpbGUgTmFtZTogcGFsbGV0dGUuc2Nzc1xyXG4vLyAgIERlc2NyaXB0aW9uOiBDdXN0b20gY29sb3Igc3lzdGVtIHN0eWxlcywgaW5jbHVkZXMgYmFja2dyb3VuZCwgYm9yZGVyIGFuZCB0ZXh0IGNvbG9yc1xyXG4vLyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxyXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWdWV4eSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXHJcbi8vICBUSVA6XHJcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvY29sb3JzL3BhbGV0dGUuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb2xvciB2YXJpYWJsZXMuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIHVzYWdlOiB0aGVtZS1jb2xvcihcIm5hbWVfb2ZfY29sb3JcIiwgXCJ0eXBlX29mX2NvbG9yXCIpXHJcbi8vIHRvIGF2b2lkIHRvIHJlcGVhdGluZyBtYXAtZ2V0KCRjb2xvcnMsIC4uLilcclxuXHJcbkBmdW5jdGlvbiBjb2xvci1mdW5jdGlvbigkY29sb3IsICR0eXBlKSB7XHJcbiAgQGlmIG1hcC1oYXMta2V5KCRjb2xvcnMsICRjb2xvcikge1xyXG4gICAgJGN1cnJfY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yKTtcclxuICAgIEBpZiBtYXAtaGFzLWtleSgkY3Vycl9jb2xvciwgJHR5cGUpIHtcclxuICAgICAgQHJldHVybiBtYXAtZ2V0KCRjdXJyX2NvbG9yLCAkdHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBAd2FybiBcIlVua25vd24gYCN7bmFtZX1gIGluICRjb2xvcnMuXCI7XHJcbiAgQHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vLyBDb2xvciBwYWxldHRlc1xyXG5AaW1wb3J0ICdwYWxldHRlLXZhcmlhYmxlcyc7XHJcblxyXG4vLyBDb2xvciBDbGFzc2VzXHJcbi8vICAgVGV4dCBjb2xvcjogLmNvbG9yIC5saWdodGVuLSogLyAuZGFya2VuLSogLyAuYWNjZW50LSpcclxuLy8gICBCYWNrZ3JvdW5kOiAuYmctY29sb3IgLmJnLWxpZ2h0ZW4tKiAvIC5iZy1kYXJrZW4tKiAvIC5iZy1hY2NlbnQtKlxyXG4vLyAgIGJvcmRlcjogLmJvcmRlci1jb2xvciAuYm9yZGVyLWxpZ2h0ZW4tKiAvIC5ib3JkZXItZGFya2VuLSogLyAuYm9yZGVyLWFjY2VudC0qXHJcbi8vICAgYm9yZGVyLXRvcDogLmJvcmRlci10b3AtY29sb3IgLmJvcmRlci10b3AtbGlnaHRlbi0qIC8gLmJvcmRlci10b3AtZGFya2VuLSogLyAuYm9yZGVyLXRvcC1hY2NlbnQtKlxyXG4vLyAgIGJvcmRlci1ib3R0b206IC5ib3JkZXItYm90dG9tLWNvbG9yIC5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tKiAvIC5ib3JkZXItYm90dG9tLWRhcmtlbi0qIC8gLmJvcmRlci1ib3R0b20tYWNjZW50LSpcclxuLy8gICBib3JkZXItbGVmdDogLmJvcmRlci1sZWZ0LWNvbG9yIC5ib3JkZXItbGVmdC1saWdodGVuLSogLyAuYm9yZGVyLWxlZnQtZGFya2VuLSogLyAuYm9yZGVyLWxlZnQtYWNjZW50LSpcclxuLy8gICBib3JkZXItcmlnaHQ6IC5ib3JkZXItcmlnaHQtY29sb3IgLmJvcmRlci1yaWdodC1saWdodGVuLSogLyAuYm9yZGVyLXJpZ2h0LWRhcmtlbi0qIC8gLmJvcmRlci1yaWdodC1hY2NlbnQtKlxyXG5cclxuQGVhY2ggJGNvbG9yX25hbWUsICRjb2xvciBpbiAkY29sb3JzIHtcclxuICBAZWFjaCAkY29sb3JfdHlwZSwgJGNvbG9yX3ZhbHVlIGluICRjb2xvciB7XHJcbiAgICBAaWYgJGNvbG9yX3R5cGU9PSAnYmFzZScge1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAgIC5iZy0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5jYXJkLWhlYWRlcixcclxuICAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBbGVydFxyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcclxuICAgICAgICAuYWxlcnQtI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3JfdmFsdWUsIDAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgLmFsZXJ0LWhlYWRpbmcge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbGVydC1oZWFkaW5nLWJzKCRjb2xvcl92YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFsZXJ0LWxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcl92YWx1ZSwgNSUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gY2xvc2FibGUgYWxlcnRcclxuICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGJnIGNvbG9yIGxpZ2h0ZW4gZm9yIHJnYmEgLSBvcGFjaXR5IHNldFxyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScgYW5kICRjb2xvcl9uYW1lICE9ICdkYXJrJykge1xyXG4gICAgICAgIC5iZy1saWdodC0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcl92YWx1ZSwgMC4xMikgIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAvLyBDYWxlbmRhciBiYWNrZ3JvdW5kLCBjb2xvciBhbmQgYm9yZGVyIGNvbG9yXHJcbiAgICAgICAgICAmLmZjLWgtZXZlbnQsXHJcbiAgICAgICAgICAmLmZjLXYtZXZlbnQge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mYy1saXN0LWV2ZW50LWRvdCxcclxuICAgICAgICAgIC5mYy1kYXlncmlkLWV2ZW50LWRvdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5mYy1saXN0LWV2ZW50IHtcclxuICAgICAgICAgICAgJjpob3ZlciB0ZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3JfdmFsdWUsIDAuMSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZjLWxpc3QtZXZlbnQtdGl0bGUge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXZhdGFyIHdpdGggbGlnaHQgYmdcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcclxuICAgICAgICAuYXZhdGFyLmJnLWxpZ2h0LSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEJvcmRlciBjb2xvcnNcclxuICAgICAgLmJvcmRlci0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3JkZXItdG9wLSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm9yZGVyLWJvdHRvbS0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvcl92YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvcmRlci1sZWZ0LSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRjb2xvcl92YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvcmRlci1yaWdodC0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBiYWRnZSBnbG93IGNvbG9yc1xyXG4gICAgICAuYmctI3skY29sb3JfbmFtZX0sXHJcbiAgICAgIC5ib3JkZXItI3skY29sb3JfbmFtZX0sXHJcbiAgICAgIC5iYWRnZS0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgJi5iYWRnZS1nbG93IHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkY29sb3JfdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCYWRnZSBCYWNrZ3JvdW5kIENvbG9yXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAvLyBCYWRnZSBMaWdodCBCYWNrZ3JvdW5kXHJcbiAgICAgICAgICAmLmJhZGdlLWxpZ2h0LSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRjb2xvcl92YWx1ZSwgJGFscGhhOiAwLjEyKTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT3ZlcmxheSBjb2xvcnNcclxuICAgICAgLm92ZXJsYXktI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgIEBpbmNsdWRlIGJnLW9wYWNpdHkoJGNvbG9yX3ZhbHVlLCAwLjYpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCYXNpYyBidXR0b25zXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5idG4tI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMScpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggLThweCByZ2JhKCRjb2xvci12YWx1ZSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRm9yIEJ0biBGbGF0XHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5idG4tZmxhdC0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItdmFsdWU7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItdmFsdWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXZhbHVlLCAwLjEyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICYuYWN0aXZlLFxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4yKTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICRjb2xvcl92YWx1ZSksICcjJywgJyUyMycpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvciBCdG4gUmVsaWVmXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5idG4tcmVsaWVmLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci12YWx1ZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIDAgcmdiYSgkYmxhY2ssIDAuMik7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICAgIEBpZiAkY29sb3JfbmFtZSA9PSAnZGFyaycge1xyXG4gICAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2Rhcmtlbi0zJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2xpZ2h0ZW4tMScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAmLmFjdGl2ZSxcclxuICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2Rhcmtlbi0xJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT3V0bGluZSBidXR0b25zXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5idG4tb3V0bGluZS0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRjb2xvcl92YWx1ZSwgJGFscGhhOiAwLjA0KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXHJcbiAgICAgICAgICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuICAgICAgICAgICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMik7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKHN0ci1yZXBsYWNlKCRjaGV2cm9uLWRvd24sICdjdXJyZW50Q29sb3InLCAkY29sb3JfdmFsdWUpLCAnIycsICclMjMnKSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gc3BsaXQgdG9nZ2xlIGhhdmUgc2hvdyBjbGFzc1xyXG4gICAgICAgICAgLnNob3cgPiAmLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4yKTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFdhdmUgZWZmZWN0XHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5idG4tb3V0bGluZS0jeyRjb2xvcl9uYW1lfSxcclxuICAgICAgICAuYnRuLWZsYXQtI3skY29sb3ItbmFtZX0ge1xyXG4gICAgICAgICAgJi53YXZlcy1lZmZlY3Qge1xyXG4gICAgICAgICAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjIpIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjMpIDQwJSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkY29sb3JfdmFsdWUsIDAuNCkgNTAlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRjb2xvcl92YWx1ZSwgMC41KSA2MCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAwKSA3MCVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCdWxsZXQgY29sb3JzIGZvciBlbWFpbCBhcHBcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XHJcbiAgICAgICAgLmJ1bGxldCB7XHJcbiAgICAgICAgICAmLmJ1bGxldC0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1vZGFsXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAmLm1vZGFsLSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRm9yIFBhZ2luYXRpb25cclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcclxuICAgICAgICAucGFnaW5hdGlvbi0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgICAucGFnZS1pdGVtIHtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIC5wYWdlLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5wcmV2LWl0ZW0sXHJcbiAgICAgICAgICAgICYubmV4dC1pdGVtIHtcclxuICAgICAgICAgICAgICAucGFnZS1saW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5leHQtaXRlbSxcclxuICAgICAgICAgICAgJi5uZXh0IHtcclxuICAgICAgICAgICAgICAucGFnZS1saW5rIHtcclxuICAgICAgICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyLXJlcGxhY2UoJGNoZXZyb24tcmlnaHQsICdjdXJyZW50Q29sb3InLCAkY29sb3JfdmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICclMjMnXHJcbiAgICAgICAgICAgICAgICAgICAgKSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5wcmV2LWl0ZW0sXHJcbiAgICAgICAgICAgICYucHJldiB7XHJcbiAgICAgICAgICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSgkY2hldnJvbi1sZWZ0LCAnY3VycmVudENvbG9yJywgJGNvbG9yX3ZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJTIzJ1xyXG4gICAgICAgICAgICAgICAgICAgICkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvciBOYXYgUGlsbHNcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcclxuICAgICAgICAubmF2LXBpbGwtI3skY29sb3ItbmFtZX0ge1xyXG4gICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggLTRweCByZ2JhKCRjb2xvcl92YWx1ZSwgMC42NSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcm9ncmVzcyBCYXJzXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5wcm9ncmVzcy1iYXItI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JfdmFsdWUsIDAuMTIpO1xyXG5cclxuICAgICAgICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaW1lbGluZVxyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcclxuICAgICAgICAudGltZWxpbmUge1xyXG4gICAgICAgICAgLnRpbWVsaW5lLXBvaW50LSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgc3Ryb2tlOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEaXZpZGVyXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5kaXZpZGVyLmRpdmlkZXItI3skY29sb3ItbmFtZX0ge1xyXG4gICAgICAgICAgLmRpdmlkZXItdGV4dCB7XHJcbiAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci12YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGb3JtIElucHV0IEVsZW1lbnRzXHJcbiAgICAgIC8vIENoZWNrYm94ICYgUmFkaW9cclxuXHJcbiAgICAgIC8vIHRvZG86IHJlbW92ZSBpdCBvbmNlIGNvbmZpcm1cclxuICAgICAgaW5wdXQ6Zm9jdXMgfiAuYmctI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICR3aGl0ZSwgMCAwIDAgMC4yMXJlbSAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ3VzdG9tIENoZWNrYm94ICYgUmFkaW9cclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XHJcbiAgICAgICAgLmN1c3RvbS1jb250cm9sLSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXHJcbiAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuY3VzdG9tLWNoZWNrYm94LFxyXG4gICAgICAgICAgJi5jdXN0b20tcmFkaW8ge1xyXG4gICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXHJcbiAgICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKCRjb2xvcl92YWx1ZSwgMC40KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjY1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCb290c3RyYXAgQ3VzdG9tIFN3aXRjaGVzXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5jdXN0b20tc3dpdGNoLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZWxlY3QyXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5zZWxlY3QyLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCB7XHJcbiAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xyXG4gICAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAudGV4dC0jeyRjb2xvcl9uYW1lfS50ZXh0LSN7JGNvbG9yX3R5cGV9IHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iZy0jeyRjb2xvcl9uYW1lfS5iZy0jeyRjb2xvcl90eXBlfSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3JkZXItI3skY29sb3JfbmFtZX0uYm9yZGVyLSN7JGNvbG9yX3R5cGV9IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvcmRlci10b3AtI3skY29sb3JfbmFtZX0uYm9yZGVyLXRvcC0jeyRjb2xvcl90eXBlfSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm9yZGVyLWJvdHRvbS0jeyRjb2xvcl9uYW1lfS5ib3JkZXItYm90dG9tLSN7JGNvbG9yX3R5cGV9IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3JkZXItbGVmdC0jeyRjb2xvcl9uYW1lfS5ib3JkZXItbGVmdC0jeyRjb2xvcl90eXBlfSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvcmRlci1yaWdodC0jeyRjb2xvcl9uYW1lfS5ib3JkZXItcmlnaHQtI3skY29sb3JfdHlwZX0ge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAub3ZlcmxheS0jeyRjb2xvcl9uYW1lfS5vdmVybGF5LSN7JGNvbG9yX3R5cGV9IHtcclxuICAgICAgICBAaW5jbHVkZSBiZy1vcGFjaXR5KCRjb2xvcl92YWx1ZSwgMC42KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICd+QG5nLXNlbGVjdC9uZy1zZWxlY3QvdGhlbWVzL2RlZmF1bHQudGhlbWUuY3NzJztcbkBpbXBvcnQgJ35mbGF0cGlja3IvZGlzdC9mbGF0cGlja3IubWluLmNzcyc7XG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG4uYmctd2hpdGUgLmNhcmQtaGVhZGVyLFxuLmJnLXdoaXRlIC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYm9yZGVyLXdoaXRlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC13aGl0ZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmO1xufVxuXG4uYm9yZGVyLWJvdHRvbS13aGl0ZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xufVxuXG4uYm9yZGVyLWxlZnQtd2hpdGUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5ib3JkZXItcmlnaHQtd2hpdGUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmZmZmO1xufVxuXG4uYmctd2hpdGUuYmFkZ2UtZ2xvdyxcbi5ib3JkZXItd2hpdGUuYmFkZ2UtZ2xvdyxcbi5iYWRnZS13aGl0ZS5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNmZmZmZmY7XG59XG5cbi5vdmVybGF5LXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctd2hpdGUge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjIxcmVtICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuLmJnLWJsYWNrIC5jYXJkLWhlYWRlcixcbi5iZy1ibGFjayAuY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJvcmRlci1ibGFjayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtYmxhY2sge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLmJvcmRlci1ib3R0b20tYmxhY2sge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLmJvcmRlci1sZWZ0LWJsYWNrIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uYm9yZGVyLXJpZ2h0LWJsYWNrIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLmJnLWJsYWNrLmJhZGdlLWdsb3csXG4uYm9yZGVyLWJsYWNrLmJhZGdlLWdsb3csXG4uYmFkZ2UtYmxhY2suYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xufVxuXG4ub3ZlcmxheS1ibGFjayB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbmlucHV0OmZvY3VzIH4gLmJnLWJsYWNrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuLmJnLWRhcmsgLmNhcmQtaGVhZGVyLFxuLmJnLWRhcmsgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg3NSwgNzUsIDc1LCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LWRhcmsgLmFsZXJ0LWhlYWRpbmcge1xuICBib3gtc2hhZG93OiByZ2JhKDc1LCA3NSwgNzUsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4uYWxlcnQtZGFyayAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjM2UzZTNlICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtZGFyayAuY2xvc2Uge1xuICBjb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhcmsge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhcmsge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzRiNGI0Yjtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFyayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGI0YjRiO1xufVxuXG4uYm9yZGVyLWxlZnQtZGFyayB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRiNGI0Yjtcbn1cblxuLmJvcmRlci1yaWdodC1kYXJrIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRiNGI0Yjtcbn1cblxuLmJnLWRhcmsuYmFkZ2UtZ2xvdyxcbi5ib3JkZXItZGFyay5iYWRnZS1nbG93LFxuLmJhZGdlLWRhcmsuYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNGI0YjRiO1xufVxuXG4uYmFkZ2UuYmFkZ2UtbGlnaHQtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC4xMik7XG4gIGNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAjNGI0YjRiO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg3NSwgNzUsIDc1LCAwLjYpO1xufVxuXG4uYnRuLWRhcmsge1xuICBib3JkZXItY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmJ0bi1kYXJrOmZvY3VzLCAuYnRuLWRhcms6YWN0aXZlLCAuYnRuLWRhcmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQgIWltcG9ydGFudDtcbn1cbi5idG4tZGFyazpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggLThweCAjNGI0YjRiO1xufVxuLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idG4tZmxhdC1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuLmJ0bi1mbGF0LWRhcms6aG92ZXIge1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cbi5idG4tZmxhdC1kYXJrOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjEyKTtcbn1cbi5idG4tZmxhdC1kYXJrOmFjdGl2ZSwgLmJ0bi1mbGF0LWRhcmsuYWN0aXZlLCAuYnRuLWZsYXQtZGFyazpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC4yKTtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG4uYnRuLWZsYXQtZGFyay5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM0YjRiNGInIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5idG4tcmVsaWVmLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi1kYXJrOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyNjI2Mjtcbn1cbi5idG4tcmVsaWVmLWRhcms6YWN0aXZlLCAuYnRuLXJlbGllZi1kYXJrLmFjdGl2ZSwgLmJ0bi1yZWxpZWYtZGFyazpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG59XG4uYnRuLXJlbGllZi1kYXJrOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXJlbGllZi1kYXJrOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtZGFyay5hY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLWRhcmsge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cbi5idG4tb3V0bGluZS1kYXJrOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjA0KTtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG4uYnRuLW91dGxpbmUtZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bi1vdXRsaW5lLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjIpO1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cbi5idG4tb3V0bGluZS1kYXJrLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzRiNGI0Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWRhcmsuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjIpO1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cblxuLmJ0bi1vdXRsaW5lLWRhcmsud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUsXG4uYnRuLWZsYXQtZGFyay53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDc1LCA3NSwgNzUsIDAuMikgMCwgcmdiYSg3NSwgNzUsIDc1LCAwLjMpIDQwJSwgcmdiYSg3NSwgNzUsIDc1LCAwLjQpIDUwJSwgcmdiYSg3NSwgNzUsIDc1LCAwLjUpIDYwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA3MCUpO1xufVxuXG4uYnVsbGV0LmJ1bGxldC1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0Yjtcbn1cblxuLm1vZGFsLm1vZGFsLWRhcmsgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cbi5tb2RhbC5tb2RhbC1kYXJrIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cblxuLnByb2dyZXNzLWJhci1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjEyKTtcbn1cbi5wcm9ncmVzcy1iYXItZGFyayAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0Yjtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1kYXJrIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhcmsgaSxcbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFyayBzdmcge1xuICBzdHJva2U6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFyay50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhcmsudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzUsIDc1LCA3NSwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci1kYXJrIC5kaXZpZGVyLXRleHQ6YmVmb3JlLCAuZGl2aWRlci5kaXZpZGVyLWRhcmsgLmRpdmlkZXItdGV4dDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1kYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1kYXJrIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtZGFyayAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM0YjRiNGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XG59XG4uY3VzdG9tLWNvbnRyb2wtZGFyay5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYXJrLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtZGFyay5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1kYXJrLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhcmsuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYXJrLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoNzUsIDc1LCA3NSwgMC40KSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLWRhcmsgLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC42NSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtZGFyayAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXN3aXRjaC1kYXJrIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLnNlbGVjdDItZGFyayAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZSB7XG4gIGJhY2tncm91bmQ6ICM0YjRiNGIgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWRhcmsudGV4dC1kYXJrZW4tMSB7XG4gIGNvbG9yOiAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYXJrLmJnLWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhcmsuYm9yZGVyLWRhcmtlbi0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0MzQzNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYXJrLmJvcmRlci10b3AtZGFya2VuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzM0MzQzNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYXJrLmJvcmRlci1ib3R0b20tZGFya2VuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM0MzQzNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFyay5ib3JkZXItbGVmdC1kYXJrZW4tMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzM0MzQzNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhcmsuYm9yZGVyLXJpZ2h0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM0MzQzNCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYXJrLm92ZXJsYXktZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg1MiwgNTIsIDUyLCAwLjYpO1xufVxuXG4udGV4dC1kYXJrLnRleHQtZGFya2VuLTIge1xuICBjb2xvcjogIzFlMWUxZSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyay5iZy1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYXJrLmJvcmRlci1kYXJrZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZTFlMWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFyay5ib3JkZXItdG9wLWRhcmtlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxZTFlMWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFyay5ib3JkZXItYm90dG9tLWRhcmtlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxZTFlMWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhcmsuYm9yZGVyLWxlZnQtZGFya2VuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxZTFlMWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYXJrLmJvcmRlci1yaWdodC1kYXJrZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxZTFlMWUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFyay5vdmVybGF5LWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC42KTtcbn1cblxuLnRleHQtZGFyay50ZXh0LWRhcmtlbi0zIHtcbiAgY29sb3I6ICM2MjYyNjIgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhcmsuYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI2MjYyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFyay5ib3JkZXItZGFya2VuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2MjYyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhcmsuYm9yZGVyLXRvcC1kYXJrZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjI2MjYyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhcmsuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjI2MjYyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYXJrLmJvcmRlci1sZWZ0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjI2MjYyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFyay5ib3JkZXItcmlnaHQtZGFya2VuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjI2MjYyICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhcmsub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICM2MjYyNjI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk4LCA5OCwgOTgsIDAuNik7XG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjYgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodCAuY2FyZC1oZWFkZXIsXG4uYmctbGlnaHQgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5ib3JkZXItbGlnaHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjZmNmY2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWxpZ2h0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNmY2ZjY7XG59XG5cbi5ib3JkZXItYm90dG9tLWxpZ2h0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNmY2ZjY7XG59XG5cbi5ib3JkZXItbGVmdC1saWdodCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Y2ZjZmNjtcbn1cblxuLmJvcmRlci1yaWdodC1saWdodCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNmY2ZjY7XG59XG5cbi5iZy1saWdodC5iYWRnZS1nbG93LFxuLmJvcmRlci1saWdodC5iYWRnZS1nbG93LFxuLmJhZGdlLWxpZ2h0LmJhZGdlLWdsb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2Y2ZjZmNjtcbn1cblxuLm92ZXJsYXktbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNDYsIDI0NiwgMjQ2LCAwLjYpO1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1saWdodCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICNmZmYsIDAgMCAwIDAuMjFyZW0gI2Y2ZjZmNiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtbGlnaHRlbi01IHtcbiAgY29sb3I6ICNlOTM3NTEgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkuYmctbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5Mzc1MSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOTM3NTEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTkzNzUxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXByaW1hcnkuYm9yZGVyLWJvdHRvbS1saWdodGVuLTUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5Mzc1MSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1saWdodGVuLTUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOTM3NTEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1saWdodGVuLTUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTkzNzUxICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkub3ZlcmxheS1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kOiAjZTkzNzUxO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDU1LCA4MSwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWxpZ2h0ZW4tNCB7XG4gIGNvbG9yOiAjZTYyMDNkICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjIwM2QgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1saWdodGVuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTYyMDNkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1saWdodGVuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2MjAzZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNjIwM2QgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTYyMDNkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U2MjAzZCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZDogI2U2MjAzZDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAzMiwgNjEsIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1saWdodGVuLTMge1xuICBjb2xvcjogI2Q1MTgzNCAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUxODM0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItbGlnaHRlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1MTgzNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNTE4MzQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDUxODM0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q1MTgzNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNTE4MzQgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQ6ICNkNTE4MzQ7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjQsIDUyLCAwLjYpO1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtbGlnaHRlbi0yIHtcbiAgY29sb3I6ICNiZTE1MmUgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkuYmctbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlMTUyZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZTE1MmUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmUxNTJlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXByaW1hcnkuYm9yZGVyLWJvdHRvbS1saWdodGVuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JlMTUyZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1saWdodGVuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZTE1MmUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1saWdodGVuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmUxNTJlICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkub3ZlcmxheS1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kOiAjYmUxNTJlO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxOTAsIDIxLCA0NiwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWxpZ2h0ZW4tMSB7XG4gIGNvbG9yOiAjYTcxMzI5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzEzMjkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1saWdodGVuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTcxMzI5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1saWdodGVuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2E3MTMyOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNzEzMjkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYTcxMzI5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2E3MTMyOSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZDogI2E3MTMyOTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTY3LCAxOSwgNDEsIDAuNik7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTAyMyAhaW1wb3J0YW50O1xufVxuLmJnLXByaW1hcnkgLmNhcmQtaGVhZGVyLFxuLmJnLXByaW1hcnkgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNDQsIDE2LCAzNSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5MDEwMjMgIWltcG9ydGFudDtcbn1cbi5hbGVydC1wcmltYXJ5IC5hbGVydC1oZWFkaW5nIHtcbiAgYm94LXNoYWRvdzogcmdiYSgxNDQsIDE2LCAzNSwgMC40KSAwcHggNnB4IDE1cHggLTdweDtcbn1cbi5hbGVydC1wcmltYXJ5IC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICM3OTBkMWQgIWltcG9ydGFudDtcbn1cbi5hbGVydC1wcmltYXJ5IC5jbG9zZSB7XG4gIGNvbG9yOiAjOTAxMDIzICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1saWdodC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNDQsIDE2LCAzNSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5MDEwMjMgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1wcmltYXJ5LmZjLWgtZXZlbnQsIC5iZy1saWdodC1wcmltYXJ5LmZjLXYtZXZlbnQge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTQ0LCAxNiwgMzUsIDAuMSk7XG59XG4uYmctbGlnaHQtcHJpbWFyeSAuZmMtbGlzdC1ldmVudC1kb3QsXG4uYmctbGlnaHQtcHJpbWFyeSAuZmMtZGF5Z3JpZC1ldmVudC1kb3Qge1xuICBib3JkZXItY29sb3I6ICM5MDEwMjMgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1wcmltYXJ5LmZjLWxpc3QtZXZlbnQ6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0NCwgMTYsIDM1LCAwLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtcHJpbWFyeS5mYy1saXN0LWV2ZW50IC5mYy1saXN0LWV2ZW50LXRpdGxlIHtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG5cbi5hdmF0YXIuYmctbGlnaHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjOTAxMDIzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDEwMjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTAxMDIzO1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MDEwMjM7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTAxMDIzO1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTAxMDIzO1xufVxuXG4uYmctcHJpbWFyeS5iYWRnZS1nbG93LFxuLmJvcmRlci1wcmltYXJ5LmJhZGdlLWdsb3csXG4uYmFkZ2UtcHJpbWFyeS5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM5MDEwMjM7XG59XG5cbi5iYWRnZS5iYWRnZS1saWdodC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE2LCAzNSwgMC4xMik7XG4gIGNvbG9yOiAjOTAxMDIzICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjOTAxMDIzO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxNDQsIDE2LCAzNSwgMC42KTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjOTAxMDIzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDEwMjMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5LmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzkwZDFkICFpbXBvcnRhbnQ7XG59XG4uYnRuLXByaW1hcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IC04cHggIzkwMTAyMztcbn1cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWZsYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzkwMTAyMztcbn1cbi5idG4tZmxhdC1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICM5MDEwMjM7XG59XG4uYnRuLWZsYXQtcHJpbWFyeTpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAxNiwgMzUsIDAuMTIpO1xufVxuLmJ0bi1mbGF0LXByaW1hcnk6YWN0aXZlLCAuYnRuLWZsYXQtcHJpbWFyeS5hY3RpdmUsIC5idG4tZmxhdC1wcmltYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE2LCAzNSwgMC4yKTtcbiAgY29sb3I6ICM5MDEwMjM7XG59XG4uYnRuLWZsYXQtcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM5MDEwMjMnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5idG4tcmVsaWVmLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAxMDIzO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi1wcmltYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3MTMyOTtcbn1cbi5idG4tcmVsaWVmLXByaW1hcnk6YWN0aXZlLCAuYnRuLXJlbGllZi1wcmltYXJ5LmFjdGl2ZSwgLmJ0bi1yZWxpZWYtcHJpbWFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTBkMWQ7XG59XG4uYnRuLXJlbGllZi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXJlbGllZi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1yZWxpZWYtcHJpbWFyeS5hY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMDIzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzkwMTAyMztcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE2LCAzNSwgMC4wNCk7XG4gIGNvbG9yOiAjOTAxMDIzO1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAxNiwgMzUsIDAuMik7XG4gIGNvbG9yOiAjOTAxMDIzO1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzOTAxMDIzJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnNob3cgPiAuYnRuLW91dGxpbmUtcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgMTYsIDM1LCAwLjIpO1xuICBjb2xvcjogIzkwMTAyMztcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUsXG4uYnRuLWZsYXQtcHJpbWFyeS53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDE0NCwgMTYsIDM1LCAwLjIpIDAsIHJnYmEoMTQ0LCAxNiwgMzUsIDAuMykgNDAlLCByZ2JhKDE0NCwgMTYsIDM1LCAwLjQpIDUwJSwgcmdiYSgxNDQsIDE2LCAzNSwgMC41KSA2MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzAlKTtcbn1cblxuLmJ1bGxldC5idWxsZXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDEwMjM7XG59XG5cbi5tb2RhbC5tb2RhbC1wcmltYXJ5IC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICM5MDEwMjM7XG59XG4ubW9kYWwubW9kYWwtcHJpbWFyeSAubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIGNvbG9yOiAjOTAxMDIzICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQ6ICM5MDEwMjMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM5MDEwMjM7XG59XG4ucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXIsIC5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5MDEwMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTphZnRlciwgLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyOmFmdGVyLCAucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ubmV4dCAucGFnZS1saW5rOmFjdGl2ZTphZnRlciwgLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazpob3ZlcjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzOTAxMDIzJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUsIC5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzkwMTAyMycgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cblxuLm5hdi1waWxsLXByaW1hcnkgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTAyMyAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM5MDEwMjM7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggLTRweCByZ2JhKDE0NCwgMTYsIDM1LCAwLjY1KTtcbn1cblxuLnByb2dyZXNzLWJhci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE2LCAzNSwgMC4xMik7XG59XG4ucHJvZ3Jlc3MtYmFyLXByaW1hcnkgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDEwMjM7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtcHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzkwMTAyMyAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1wcmltYXJ5IGksXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXByaW1hcnkgc3ZnIHtcbiAgc3Ryb2tlOiAjOTAxMDIzICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXByaW1hcnkudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTAyMyAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1wcmltYXJ5LnRpbWVsaW5lLXBvaW50LWluZGljYXRvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0NCwgMTYsIDM1LCAwLjEyKSAhaW1wb3J0YW50O1xufVxuXG4uZGl2aWRlci5kaXZpZGVyLXByaW1hcnkgLmRpdmlkZXItdGV4dDpiZWZvcmUsIC5kaXZpZGVyLmRpdmlkZXItcHJpbWFyeSAuZGl2aWRlci10ZXh0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTAxMDIzICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzIH4gLmJnLXByaW1hcnkge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjIxcmVtICM5MDEwMjMgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1wcmltYXJ5IC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzkwMTAyMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTAyMztcbn1cbi5jdXN0b20tY29udHJvbC1wcmltYXJ5LmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1wcmltYXJ5LmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLXByaW1hcnkuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtcHJpbWFyeS5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNDQsIDE2LCAzNSwgMC40KSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAxNiwgMzUsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM5MDEwMjMgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtcHJpbWFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTAyMyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWxlY3QyLXByaW1hcnkgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kOiAjOTAxMDIzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzkwMTAyMyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogIzc5MGQxZCAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTBkMWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1kYXJrZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3OTBkMWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3OTBkMWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3OTBkMWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtZGFya2VuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3OTBkMWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3OTBkMWQgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZDogIzc5MGQxZDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTIxLCAxMywgMjksIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1kYXJrZW4tMiB7XG4gIGNvbG9yOiAjNjIwYjE4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyMGIxOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWRhcmtlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyMGIxOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtZGFya2VuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzYyMGIxOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tZGFya2VuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYyMGIxOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1kYXJrZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzYyMGIxOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzYyMGIxOCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kOiAjNjIwYjE4O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg5OCwgMTEsIDI0LCAwLjYpO1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtZGFya2VuLTMge1xuICBjb2xvcjogIzRiMDgxMiAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjA4MTIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1kYXJrZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YjA4MTIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWRhcmtlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0YjA4MTIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjA4MTIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtZGFya2VuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0YjA4MTIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1kYXJrZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YjA4MTIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZDogIzRiMDgxMjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNzUsIDgsIDE4LCAwLjYpO1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogIzM0MDYwZCAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDA2MGQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1kYXJrZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDA2MGQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzNDA2MGQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNDA2MGQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtZGFya2VuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzNDA2MGQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNDA2MGQgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZDogIzM0MDYwZDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsIDYsIDEzLCAwLjYpO1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtYWNjZW50LTEge1xuICBjb2xvcjogI2JkZmRmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1hY2NlbnQtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGZkZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1hY2NlbnQtMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGZkZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWFjY2VudC0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiZGZkZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWFjY2VudC0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGZkZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtYWNjZW50LTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZGZkZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1hY2NlbnQtMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiZGZkZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZDogI2JkZmRmZjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTg5LCAyNTMsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWFjY2VudC0yIHtcbiAgY29sb3I6ICM4YWZiZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkuYmctYWNjZW50LTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGFmYmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItYWNjZW50LTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGFmYmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1hY2NlbnQtMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOGFmYmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXByaW1hcnkuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGFmYmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWFjY2VudC0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOGFmYmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtYWNjZW50LTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOGFmYmZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkub3ZlcmxheS1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQ6ICM4YWZiZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzOCwgMjUxLCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1hY2NlbnQtMyB7XG4gIGNvbG9yOiAjNTdmYWZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWFjY2VudC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3ZmFmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWFjY2VudC0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU3ZmFmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtYWNjZW50LTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzU3ZmFmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tYWNjZW50LTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU3ZmFmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1hY2NlbnQtMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzU3ZmFmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWFjY2VudC0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzU3ZmFmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kOiAjNTdmYWZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg4NywgMjUwLCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1hY2NlbnQtNCB7XG4gIGNvbG9yOiAjM2RmOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWFjY2VudC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkZjlmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWFjY2VudC00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkZjlmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtYWNjZW50LTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzNkZjlmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tYWNjZW50LTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNkZjlmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1hY2NlbnQtNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzNkZjlmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWFjY2VudC00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzNkZjlmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kOiAjM2RmOWZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg2MSwgMjQ5LCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LXNlY29uZGFyeS50ZXh0LWxpZ2h0ZW4tNSB7XG4gIGNvbG9yOiAjY2RkOGRlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZDhkZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeS5ib3JkZXItbGlnaHRlbi01IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkZDhkZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkuYm9yZGVyLXRvcC1saWdodGVuLTUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NkZDhkZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1saWdodGVuLTUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NkZDhkZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc2Vjb25kYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NkZDhkZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NkZDhkZSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kOiAjY2RkOGRlO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMDUsIDIxNiwgMjIyLCAwLjYpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1saWdodGVuLTQge1xuICBjb2xvcjogI2JkY2NkNCAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5LmJnLWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGNjZDQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkuYm9yZGVyLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGNjZDQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiZGNjZDQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc2Vjb25kYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGNjZDQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeS5ib3JkZXItbGVmdC1saWdodGVuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZGNjZDQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiZGNjZDQgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc2Vjb25kYXJ5Lm92ZXJsYXktbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZDogI2JkY2NkNDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTg5LCAyMDQsIDIxMiwgMC42KTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5LnRleHQtbGlnaHRlbi0zIHtcbiAgY29sb3I6ICNhZWMxYzkgIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeS5iZy1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVjMWM5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1saWdodGVuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWVjMWM5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXNlY29uZGFyeS5ib3JkZXItdG9wLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWVjMWM5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWVjMWM5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYWVjMWM5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc2Vjb25kYXJ5LmJvcmRlci1yaWdodC1saWdodGVuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYWVjMWM5ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeS5vdmVybGF5LWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQ6ICNhZWMxYzk7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NCwgMTkzLCAyMDEsIDAuNik7XG59XG5cbi50ZXh0LXNlY29uZGFyeS50ZXh0LWxpZ2h0ZW4tMiB7XG4gIGNvbG9yOiAjOWZiNWJmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmYjViZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeS5ib3JkZXItbGlnaHRlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzlmYjViZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkuYm9yZGVyLXRvcC1saWdodGVuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzlmYjViZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1saWdodGVuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzlmYjViZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc2Vjb25kYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzlmYjViZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzlmYjViZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kOiAjOWZiNWJmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxNTksIDE4MSwgMTkxLCAwLjYpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1saWdodGVuLTEge1xuICBjb2xvcjogIzhmYTliNSAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5LmJnLWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZmE5YjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkuYm9yZGVyLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ZmE5YjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4ZmE5YjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc2Vjb25kYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZmE5YjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeS5ib3JkZXItbGVmdC1saWdodGVuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4ZmE5YjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ZmE5YjUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc2Vjb25kYXJ5Lm92ZXJsYXktbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZDogIzhmYTliNTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTQzLCAxNjksIDE4MSwgMC42KTtcbn1cblxuLmJnLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cbi5iZy1zZWNvbmRhcnkgLmNhcmQtaGVhZGVyLFxuLmJnLXNlY29uZGFyeSAuY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmFsZXJ0LXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxNTcsIDE3MSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cbi5hbGVydC1zZWNvbmRhcnkgLmFsZXJ0LWhlYWRpbmcge1xuICBib3gtc2hhZG93OiByZ2JhKDEyOCwgMTU3LCAxNzEsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4uYWxlcnQtc2Vjb25kYXJ5IC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICM3MTkxYTEgIWltcG9ydGFudDtcbn1cbi5hbGVydC1zZWNvbmRhcnkgLmNsb3NlIHtcbiAgY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0LXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxNTcsIDE3MSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1zZWNvbmRhcnkuZmMtaC1ldmVudCwgLmJnLWxpZ2h0LXNlY29uZGFyeS5mYy12LWV2ZW50IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyOCwgMTU3LCAxNzEsIDAuMSk7XG59XG4uYmctbGlnaHQtc2Vjb25kYXJ5IC5mYy1saXN0LWV2ZW50LWRvdCxcbi5iZy1saWdodC1zZWNvbmRhcnkgLmZjLWRheWdyaWQtZXZlbnQtZG90IHtcbiAgYm9yZGVyLWNvbG9yOiAjODA5ZGFiICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtc2Vjb25kYXJ5LmZjLWxpc3QtZXZlbnQ6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTU3LCAxNzEsIDAuMSkgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1zZWNvbmRhcnkuZmMtbGlzdC1ldmVudCAuZmMtbGlzdC1ldmVudC10aXRsZSB7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuXG4uYXZhdGFyLmJnLWxpZ2h0LXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjODA5ZGFiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwOWRhYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzgwOWRhYjtcbn1cblxuLmJvcmRlci1ib3R0b20tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDlkYWI7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4MDlkYWI7XG59XG5cbi5ib3JkZXItcmlnaHQtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwOWRhYjtcbn1cblxuLmJnLXNlY29uZGFyeS5iYWRnZS1nbG93LFxuLmJvcmRlci1zZWNvbmRhcnkuYmFkZ2UtZ2xvdyxcbi5iYWRnZS1zZWNvbmRhcnkuYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjODA5ZGFiO1xufVxuXG4uYmFkZ2UuYmFkZ2UtbGlnaHQtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDE1NywgMTcxLCAwLjEyKTtcbiAgY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogIzgwOWRhYjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxNTcsIDE3MSwgMC42KTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOWRhYiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1zZWNvbmRhcnkuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTkxYTEgIWltcG9ydGFudDtcbn1cbi5idG4tc2Vjb25kYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCAtOHB4ICM4MDlkYWI7XG59XG4uYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWZsYXQtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjODA5ZGFiO1xufVxuLmJ0bi1mbGF0LXNlY29uZGFyeTpob3ZlciB7XG4gIGNvbG9yOiAjODA5ZGFiO1xufVxuLmJ0bi1mbGF0LXNlY29uZGFyeTpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxNTcsIDE3MSwgMC4xMik7XG59XG4uYnRuLWZsYXQtc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1mbGF0LXNlY29uZGFyeS5hY3RpdmUsIC5idG4tZmxhdC1zZWNvbmRhcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTU3LCAxNzEsIDAuMik7XG4gIGNvbG9yOiAjODA5ZGFiO1xufVxuLmJ0bi1mbGF0LXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM4MDlkYWInIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5idG4tcmVsaWVmLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDlkYWI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjIpO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5idG4tcmVsaWVmLXNlY29uZGFyeTpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZmE5YjU7XG59XG4uYnRuLXJlbGllZi1zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLXJlbGllZi1zZWNvbmRhcnkuYWN0aXZlLCAuYnRuLXJlbGllZi1zZWNvbmRhcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE5MWExO1xufVxuLmJ0bi1yZWxpZWYtc2Vjb25kYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXJlbGllZi1zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLXJlbGllZi1zZWNvbmRhcnkuYWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODA5ZGFiICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzgwOWRhYjtcbn1cbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTU3LCAxNzEsIDAuMDQpO1xuICBjb2xvcjogIzgwOWRhYjtcbn1cbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxNTcsIDE3MSwgMC4yKTtcbiAgY29sb3I6ICM4MDlkYWI7XG59XG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzgwOWRhYicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTU3LCAxNzEsIDAuMik7XG4gIGNvbG9yOiAjODA5ZGFiO1xufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5LndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlLFxuLmJ0bi1mbGF0LXNlY29uZGFyeS53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEyOCwgMTU3LCAxNzEsIDAuMikgMCwgcmdiYSgxMjgsIDE1NywgMTcxLCAwLjMpIDQwJSwgcmdiYSgxMjgsIDE1NywgMTcxLCAwLjQpIDUwJSwgcmdiYSgxMjgsIDE1NywgMTcxLCAwLjUpIDYwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA3MCUpO1xufVxuXG4uYnVsbGV0LmJ1bGxldC1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA5ZGFiO1xufVxuXG4ubW9kYWwubW9kYWwtc2Vjb25kYXJ5IC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICM4MDlkYWI7XG59XG4ubW9kYWwubW9kYWwtc2Vjb25kYXJ5IC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cblxuLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjODA5ZGFiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBjb2xvcjogIzgwOWRhYjtcbn1cbi5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyLCAucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM4MDlkYWI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjphZnRlciwgLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ubmV4dCAucGFnZS1saW5rOmFjdGl2ZTphZnRlciwgLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ubmV4dCAucGFnZS1saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM4MDlkYWInIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG4ucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUsIC5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM4MDlkYWInIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtcGlsbC1zZWNvbmRhcnkgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOWRhYiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM4MDlkYWI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggLTRweCByZ2JhKDEyOCwgMTU3LCAxNzEsIDAuNjUpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxNTcsIDE3MSwgMC4xMik7XG59XG4ucHJvZ3Jlc3MtYmFyLXNlY29uZGFyeSAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOWRhYjtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtc2Vjb25kYXJ5IGksXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXNlY29uZGFyeSBzdmcge1xuICBzdHJva2U6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtc2Vjb25kYXJ5LnRpbWVsaW5lLXBvaW50LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtc2Vjb25kYXJ5LnRpbWVsaW5lLXBvaW50LWluZGljYXRvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTU3LCAxNzEsIDAuMTIpICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZpZGVyLmRpdmlkZXItc2Vjb25kYXJ5IC5kaXZpZGVyLXRleHQ6YmVmb3JlLCAuZGl2aWRlci5kaXZpZGVyLXNlY29uZGFyeSAuZGl2aWRlci10ZXh0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjODA5ZGFiICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzIH4gLmJnLXNlY29uZGFyeSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICNmZmYsIDAgMCAwIDAuMjFyZW0gIzgwOWRhYiAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5IC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzgwOWRhYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOWRhYjtcbn1cbi5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5LmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5LmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeS5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxMjgsIDE1NywgMTcxLCAwLjQpICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5IC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTU3LCAxNzEsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzgwOWRhYiAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXN3aXRjaC1zZWNvbmRhcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VsZWN0Mi1zZWNvbmRhcnkgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kOiAjODA5ZGFiICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzgwOWRhYiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1kYXJrZW4tMSB7XG4gIGNvbG9yOiAjNzE5MWExICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE5MWExICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1kYXJrZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MTkxYTEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtZGFya2VuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzcxOTFhMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzE5MWExICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtZGFya2VuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3MTkxYTEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcxOTFhMSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQ6ICM3MTkxYTE7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExMywgMTQ1LCAxNjEsIDAuNik7XG59XG5cbi50ZXh0LXNlY29uZGFyeS50ZXh0LWRhcmtlbi0yIHtcbiAgY29sb3I6ICM2Mzg1OTUgIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeS5iZy1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Mzg1OTUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkuYm9yZGVyLWRhcmtlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYzODU5NSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkuYm9yZGVyLXRvcC1kYXJrZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjM4NTk1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Mzg1OTUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeS5ib3JkZXItbGVmdC1kYXJrZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzYzODU5NSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeS5ib3JkZXItcmlnaHQtZGFya2VuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjM4NTk1ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeS5vdmVybGF5LWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZDogIzYzODU5NTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoOTksIDEzMywgMTQ5LCAwLjYpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1kYXJrZW4tMyB7XG4gIGNvbG9yOiAjNTk3Nzg2ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk3Nzg2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1kYXJrZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTc3ODYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtZGFya2VuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzU5Nzc4NiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTk3Nzg2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtZGFya2VuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1OTc3ODYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzU5Nzc4NiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICM1OTc3ODY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDg5LCAxMTksIDEzNCwgMC42KTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5LnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogIzRlNmE3NyAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5LmJnLWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNmE3NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeS5ib3JkZXItZGFya2VuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGU2YTc3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXNlY29uZGFyeS5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0ZTZhNzcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc2Vjb25kYXJ5LmJvcmRlci1ib3R0b20tZGFya2VuLTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRlNmE3NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc2Vjb25kYXJ5LmJvcmRlci1sZWZ0LWRhcmtlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNGU2YTc3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc2Vjb25kYXJ5LmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0ZTZhNzcgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc2Vjb25kYXJ5Lm92ZXJsYXktZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kOiAjNGU2YTc3O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg3OCwgMTA2LCAxMTksIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1saWdodGVuLTUge1xuICBjb2xvcjogIzg4ZTdiMiAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODhlN2IyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItbGlnaHRlbi01IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ZTdiMiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4OGU3YjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODhlN2IyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzg4ZTdiMiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4OGU3YjIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQ6ICM4OGU3YjI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMjMxLCAxNzgsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1saWdodGVuLTQge1xuICBjb2xvcjogIzcyZTNhNCAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJlM2E0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItbGlnaHRlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcyZTNhNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3MmUzYTQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzJlM2E0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzcyZTNhNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MmUzYTQgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQ6ICM3MmUzYTQ7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNCwgMjI3LCAxNjQsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1saWdodGVuLTMge1xuICBjb2xvcjogIzVkZGU5NyAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRkZTk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItbGlnaHRlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVkZGU5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1ZGRlOTcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRkZTk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzVkZGU5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1ZGRlOTcgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQ6ICM1ZGRlOTc7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkzLCAyMjIsIDE1MSwgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWxpZ2h0ZW4tMiB7XG4gIGNvbG9yOiAjNDhkYTg5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGRhODkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1saWdodGVuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDhkYTg5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1saWdodGVuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ4ZGE4OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0OGRhODkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNDhkYTg5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQ4ZGE4OSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZDogIzQ4ZGE4OTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNzIsIDIxOCwgMTM3LCAwLjYpO1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtbGlnaHRlbi0xIHtcbiAgY29sb3I6ICMzM2Q2N2MgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzZDY3YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzM2Q2N2MgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzNkNjdjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1saWdodGVuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzZDY3YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1saWdodGVuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzM2Q2N2MgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1saWdodGVuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzNkNjdjICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kOiAjMzNkNjdjO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg1MSwgMjE0LCAxMjQsIDAuNik7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuLmJnLXN1Y2Nlc3MgLmNhcmQtaGVhZGVyLFxuLmJnLXN1Y2Nlc3MgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTk5LCAxMTEsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtc3VjY2VzcyAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjQpIDBweCA2cHggMTVweCAtN3B4O1xufVxuLmFsZXJ0LXN1Y2Nlc3MgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LXN1Y2Nlc3MgLmNsb3NlIHtcbiAgY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1zdWNjZXNzLmZjLWgtZXZlbnQsIC5iZy1saWdodC1zdWNjZXNzLmZjLXYtZXZlbnQge1xuICBib3JkZXItY29sb3I6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjEpO1xufVxuLmJnLWxpZ2h0LXN1Y2Nlc3MgLmZjLWxpc3QtZXZlbnQtZG90LFxuLmJnLWxpZ2h0LXN1Y2Nlc3MgLmZjLWRheWdyaWQtZXZlbnQtZG90IHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtc3VjY2Vzcy5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTk5LCAxMTEsIDAuMSkgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1zdWNjZXNzLmZjLWxpc3QtZXZlbnQgLmZjLWxpc3QtZXZlbnQtdGl0bGUge1xuICBjb2xvcjogIzZlNmI3Yjtcbn1cblxuLmF2YXRhci5iZy1saWdodC1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyOGM3NmY7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4Yzc2Zjtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3Mge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMyOGM3NmY7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2VzcyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyOGM3NmY7XG59XG5cbi5iZy1zdWNjZXNzLmJhZGdlLWdsb3csXG4uYm9yZGVyLXN1Y2Nlc3MuYmFkZ2UtZ2xvdyxcbi5iYWRnZS1zdWNjZXNzLmJhZGdlLWdsb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzI4Yzc2Zjtcbn1cblxuLmJhZGdlLmJhZGdlLWxpZ2h0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMik7XG4gIGNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMjhjNzZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTk5LCAxMTEsIDAuNik7XG59XG5cbi5idG4tc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLXN1Y2Nlc3M6Zm9jdXMsIC5idG4tc3VjY2VzczphY3RpdmUsIC5idG4tc3VjY2Vzcy5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuLmJ0bi1zdWNjZXNzOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCAtOHB4ICMyOGM3NmY7XG59XG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1mbGF0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4uYnRuLWZsYXQtc3VjY2Vzczpob3ZlciB7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuLmJ0bi1mbGF0LXN1Y2Nlc3M6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMik7XG59XG4uYnRuLWZsYXQtc3VjY2VzczphY3RpdmUsIC5idG4tZmxhdC1zdWNjZXNzLmFjdGl2ZSwgLmJ0bi1mbGF0LXN1Y2Nlc3M6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4yKTtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4uYnRuLWZsYXQtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMyOGM3NmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5idG4tcmVsaWVmLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi1zdWNjZXNzOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzZDY3Yztcbn1cbi5idG4tcmVsaWVmLXN1Y2Nlc3M6YWN0aXZlLCAuYnRuLXJlbGllZi1zdWNjZXNzLmFjdGl2ZSwgLmJ0bi1yZWxpZWYtc3VjY2Vzczpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNGIyNjM7XG59XG4uYnRuLXJlbGllZi1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXJlbGllZi1zdWNjZXNzOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtc3VjY2Vzcy5hY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzI4Yzc2Zjtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgMTk5LCAxMTEsIDAuMDQpO1xuICBjb2xvcjogIzI4Yzc2Zjtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4yKTtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMyOGM3NmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjIpO1xuICBjb2xvcjogIzI4Yzc2Zjtcbn1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUsXG4uYnRuLWZsYXQtc3VjY2Vzcy53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDQwLCAxOTksIDExMSwgMC4yKSAwLCByZ2JhKDQwLCAxOTksIDExMSwgMC4zKSA0MCUsIHJnYmEoNDAsIDE5OSwgMTExLCAwLjQpIDUwJSwgcmdiYSg0MCwgMTk5LCAxMTEsIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmO1xufVxuXG4ubW9kYWwubW9kYWwtc3VjY2VzcyAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuLm1vZGFsLm1vZGFsLXN1Y2Nlc3MgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyLCAucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjhjNzZmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjphZnRlciwgLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzI4Yzc2Zicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlLCAucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMyOGM3NmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtcGlsbC1zdWNjZXNzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjNzZmO1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSg0MCwgMTk5LCAxMTEsIDAuNjUpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMik7XG59XG4ucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmY7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zdWNjZXNzIGksXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXN1Y2Nlc3Mgc3ZnIHtcbiAgc3Ryb2tlOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXN1Y2Nlc3MudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zdWNjZXNzLnRpbWVsaW5lLXBvaW50LWluZGljYXRvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci1zdWNjZXNzIC5kaXZpZGVyLXRleHQ6YmVmb3JlLCAuZGl2aWRlci5kaXZpZGVyLXN1Y2Nlc3MgLmRpdmlkZXItdGV4dDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1zdWNjZXNzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1zdWNjZXNzIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc3VjY2VzcyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMyOGM3NmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmY7XG59XG4uY3VzdG9tLWNvbnRyb2wtc3VjY2Vzcy5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zdWNjZXNzLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc3VjY2Vzcy5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1zdWNjZXNzLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXN1Y2Nlc3MuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zdWNjZXNzLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoNDAsIDE5OSwgMTExLCAwLjQpICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtc3VjY2VzcyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgMTk5LCAxMTEsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXN1Y2Nlc3MgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtc3VjY2VzcyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWxlY3QyLXN1Y2Nlc3MgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1kYXJrZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWRhcmtlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtZGFya2VuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZDogIzI0YjI2MztcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMzYsIDE3OCwgOTksIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1kYXJrZW4tMiB7XG4gIGNvbG9yOiAjMWY5ZDU3ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWRhcmtlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtZGFya2VuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tZGFya2VuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1kYXJrZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kOiAjMWY5ZDU3O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgzMSwgMTU3LCA4NywgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWRhcmtlbi0zIHtcbiAgY29sb3I6ICMxYjg3NGIgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItZGFya2VuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1kYXJrZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtZGFya2VuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICMxYjg3NGI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI3LCAxMzUsIDc1LCAwLjYpO1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogIzE3NzI0MCAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1kYXJrZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWRhcmtlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtZGFya2VuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZDogIzE3NzI0MDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMsIDExNCwgNjQsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1hY2NlbnQtMSB7XG4gIGNvbG9yOiAjZTFmZmYxICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWFjY2VudC0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtYWNjZW50LTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tYWNjZW50LTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1hY2NlbnQtMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWFjY2VudC0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kOiAjZTFmZmYxO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDI1NSwgMjQxLCAwLjYpO1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtYWNjZW50LTIge1xuICBjb2xvcjogI2FlZmZkOSAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1hY2NlbnQtMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWFjY2VudC0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWFjY2VudC0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtYWNjZW50LTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1hY2NlbnQtMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZDogI2FlZmZkOTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTc0LCAyNTUsIDIxNywgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWFjY2VudC0zIHtcbiAgY29sb3I6ICM3YmZmYzEgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItYWNjZW50LTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1hY2NlbnQtMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWFjY2VudC0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtYWNjZW50LTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQ6ICM3YmZmYzE7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyMywgMjU1LCAxOTMsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1hY2NlbnQtNCB7XG4gIGNvbG9yOiAjNjJmZmI1ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWFjY2VudC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWFjY2VudC00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtYWNjZW50LTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tYWNjZW50LTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1hY2NlbnQtNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWFjY2VudC00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kOiAjNjJmZmI1O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg5OCwgMjU1LCAxODEsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1saWdodGVuLTUge1xuICBjb2xvcjogIzY5ZWZmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjllZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItbGlnaHRlbi01IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY5ZWZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2OWVmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjllZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzY5ZWZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2OWVmZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQ6ICM2OWVmZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMjM5LCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1saWdodGVuLTQge1xuICBjb2xvcjogIzRmZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItbGlnaHRlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRmZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0ZmVjZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGZlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRmZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0ZmVjZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQ6ICM0ZmVjZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCAyMzYsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWxpZ2h0ZW4tMyB7XG4gIGNvbG9yOiAjMzZlOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNmU5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1saWdodGVuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzZlOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1saWdodGVuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzM2ZTlmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNmU5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzZlOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM2ZTlmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZDogIzM2ZTlmZjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNTQsIDIzMywgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtbGlnaHRlbi0yIHtcbiAgY29sb3I6ICMxY2U3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxY2U3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMWNlN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1saWdodGVuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFjZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1saWdodGVuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxY2U3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1saWdodGVuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWNlN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kOiAjMWNlN2ZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjMxLCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1saWdodGVuLTEge1xuICBjb2xvcjogIzAzZTRmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlNGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItbGlnaHRlbi0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzZTRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwM2U0ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDNlNGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAzZTRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwM2U0ZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQ6ICMwM2U0ZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDIyOCwgMjU1LCAwLjYpO1xufVxuXG4uYmctaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cbi5iZy1pbmZvIC5jYXJkLWhlYWRlcixcbi5iZy1pbmZvIC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWxlcnQtaW5mbyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtaW5mbyAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMjA3LCAyMzIsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4uYWxlcnQtaW5mbyAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtaW5mbyAuY2xvc2Uge1xuICBjb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG4uYmctbGlnaHQtaW5mbyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtaW5mby5mYy1oLWV2ZW50LCAuYmctbGlnaHQtaW5mby5mYy12LWV2ZW50IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIwNywgMjMyLCAwLjEpO1xufVxuLmJnLWxpZ2h0LWluZm8gLmZjLWxpc3QtZXZlbnQtZG90LFxuLmJnLWxpZ2h0LWluZm8gLmZjLWRheWdyaWQtZXZlbnQtZG90IHtcbiAgYm9yZGVyLWNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtaW5mby5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDcsIDIzMiwgMC4xKSAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LWluZm8uZmMtbGlzdC1ldmVudCAuZmMtbGlzdC1ldmVudC10aXRsZSB7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuXG4uYXZhdGFyLmJnLWxpZ2h0LWluZm8ge1xuICBjb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwY2ZlODtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBjZmU4O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mbyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwY2ZlODtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwY2ZlODtcbn1cblxuLmJnLWluZm8uYmFkZ2UtZ2xvdyxcbi5ib3JkZXItaW5mby5iYWRnZS1nbG93LFxuLmJhZGdlLWluZm8uYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDBjZmU4O1xufVxuXG4uYmFkZ2UuYmFkZ2UtbGlnaHQtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMTIpO1xuICBjb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzAwY2ZlODtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjA3LCAyMzIsIDAuNik7XG59XG5cbi5idG4taW5mbyB7XG4gIGJvcmRlci1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLWluZm86Zm9jdXMsIC5idG4taW5mbzphY3RpdmUsIC5idG4taW5mby5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjhjZiAhaW1wb3J0YW50O1xufVxuLmJ0bi1pbmZvOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCAtOHB4ICMwMGNmZTg7XG59XG4uYnRuLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1mbGF0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG4uYnRuLWZsYXQtaW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLmJ0bi1mbGF0LWluZm86aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNywgMjMyLCAwLjEyKTtcbn1cbi5idG4tZmxhdC1pbmZvOmFjdGl2ZSwgLmJ0bi1mbGF0LWluZm8uYWN0aXZlLCAuYnRuLWZsYXQtaW5mbzpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMik7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLmJ0bi1mbGF0LWluZm8uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMDBjZmU4JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uYnRuLXJlbGllZi1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2ZlODtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2JhKDM0LCA0MSwgNDcsIDAuMik7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmJ0bi1yZWxpZWYtaW5mbzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2U0ZmY7XG59XG4uYnRuLXJlbGllZi1pbmZvOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtaW5mby5hY3RpdmUsIC5idG4tcmVsaWVmLWluZm86Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiOGNmO1xufVxuLmJ0bi1yZWxpZWYtaW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1yZWxpZWYtaW5mbzphY3RpdmUsIC5idG4tcmVsaWVmLWluZm8uYWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG5cbi5idG4tb3V0bGluZS1pbmZvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwY2ZlOCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG4uYnRuLW91dGxpbmUtaW5mbzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMDQpO1xuICBjb2xvcjogIzAwY2ZlODtcbn1cbi5idG4tb3V0bGluZS1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLW91dGxpbmUtaW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNywgMjMyLCAwLjIpO1xuICBjb2xvcjogIzAwY2ZlODtcbn1cbi5idG4tb3V0bGluZS1pbmZvLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzAwY2ZlOCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDcsIDIzMiwgMC4yKTtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG5cbi5idG4tb3V0bGluZS1pbmZvLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlLFxuLmJ0bi1mbGF0LWluZm8ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAyMDcsIDIzMiwgMC4yKSAwLCByZ2JhKDAsIDIwNywgMjMyLCAwLjMpIDQwJSwgcmdiYSgwLCAyMDcsIDIzMiwgMC40KSA1MCUsIHJnYmEoMCwgMjA3LCAyMzIsIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZmU4O1xufVxuXG4ubW9kYWwubW9kYWwtaW5mbyAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLm1vZGFsLm1vZGFsLWluZm8gLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyLCAucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDBjZmU4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjphZnRlciwgLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzAwY2ZlOCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlLCAucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMwMGNmZTgnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtcGlsbC1pbmZvIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBjZmU4O1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSgwLCAyMDcsIDIzMiwgMC42NSk7XG59XG5cbi5wcm9ncmVzcy1iYXItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMTIpO1xufVxuLnByb2dyZXNzLWJhci1pbmZvIC5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZmU4O1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWluZm8ge1xuICBib3JkZXItY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtaW5mbyBpLFxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1pbmZvIHN2ZyB7XG4gIHN0cm9rZTogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1pbmZvLnRpbWVsaW5lLXBvaW50LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtaW5mby50aW1lbGluZS1wb2ludC1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDcsIDIzMiwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci1pbmZvIC5kaXZpZGVyLXRleHQ6YmVmb3JlLCAuZGl2aWRlci5kaXZpZGVyLWluZm8gLmRpdmlkZXItdGV4dDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1pbmZvIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbmZvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtaW5mbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMwMGNmZTg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTg7XG59XG4uY3VzdG9tLWNvbnRyb2wtaW5mby5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1pbmZvLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtaW5mby5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1pbmZvLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWluZm8uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1pbmZvLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMjA3LCAyMzIsIDAuNCkgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1pbmZvIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNywgMjMyLCAwLjY1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1pbmZvIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tc3dpdGNoLWluZm8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VsZWN0Mi1pbmZvIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgYmFja2dyb3VuZDogIzAwY2ZlOCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cblxuLnRleHQtaW5mby50ZXh0LWRhcmtlbi0xIHtcbiAgY29sb3I6ICMwMGI4Y2YgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItZGFya2VuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1kYXJrZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1kYXJrZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtZGFya2VuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQ6ICMwMGI4Y2Y7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE4NCwgMjA3LCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtZGFya2VuLTIge1xuICBjb2xvcjogIzAwYTFiNSAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1kYXJrZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWRhcmtlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWRhcmtlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtZGFya2VuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1kYXJrZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZDogIzAwYTFiNTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTYxLCAxODEsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1kYXJrZW4tMyB7XG4gIGNvbG9yOiAjMDA4YjljICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWRhcmtlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtZGFya2VuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tZGFya2VuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1kYXJrZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kOiAjMDA4YjljO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMzksIDE1NiwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWRhcmtlbi00IHtcbiAgY29sb3I6ICMwMDc0ODIgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItZGFya2VuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1kYXJrZW4tNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1kYXJrZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWRhcmtlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtZGFya2VuLTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQ6ICMwMDc0ODI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDExNiwgMTMwLCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtYWNjZW50LTEge1xuICBjb2xvcjogI2ZlZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1hY2NlbnQtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1hY2NlbnQtMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWFjY2VudC0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWFjY2VudC0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtYWNjZW50LTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1hY2NlbnQtMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZDogI2ZlZmZmZjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWFjY2VudC0yIHtcbiAgY29sb3I6ICNjYmY1ZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctYWNjZW50LTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItYWNjZW50LTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1hY2NlbnQtMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1hY2NlbnQtMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWFjY2VudC0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtYWNjZW50LTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQ6ICNjYmY1ZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMywgMjQ1LCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1hY2NlbnQtMyB7XG4gIGNvbG9yOiAjOThlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWFjY2VudC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWFjY2VudC0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtYWNjZW50LTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tYWNjZW50LTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1hY2NlbnQtMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWFjY2VudC0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kOiAjOThlY2ZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxNTIsIDIzNiwgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtYWNjZW50LTQge1xuICBjb2xvcjogIzdmZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1hY2NlbnQtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1hY2NlbnQtNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWFjY2VudC00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWFjY2VudC00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtYWNjZW50LTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1hY2NlbnQtNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWFjY2VudC00IHtcbiAgYmFja2dyb3VuZDogIzdmZTdmZjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTI3LCAyMzEsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tNSB7XG4gIGNvbG9yOiAjZmZlMGMzICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUwYzMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZlMGMzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZTBjMyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi01IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmUwYzMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZlMGMzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZTBjMyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZDogI2ZmZTBjMztcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMjQsIDE5NSwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tNCB7XG4gIGNvbG9yOiAjZmZkM2E5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQzYTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZkM2E5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZDNhOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmQzYTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZkM2E5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZDNhOSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZDogI2ZmZDNhOTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMTEsIDE2OSwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tMyB7XG4gIGNvbG9yOiAjZmZjNjkwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM2OTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjNjkwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmYzY5MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmM2OTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZjNjkwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmYzY5MCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZDogI2ZmYzY5MDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTgsIDE0NCwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tMiB7XG4gIGNvbG9yOiAjZmZiOTc2ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI5NzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZiOTc2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmYjk3NiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmI5NzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZiOTc2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmYjk3NiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZDogI2ZmYjk3NjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxODUsIDExOCwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tMSB7XG4gIGNvbG9yOiAjZmZhYzVkICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFjNWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZhYzVkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmYWM1ZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmFjNWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZhYzVkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmYWM1ZCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZDogI2ZmYWM1ZDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNzIsIDkzLCAwLjYpO1xufVxuXG4uYmctd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cbi5iZy13YXJuaW5nIC5jYXJkLWhlYWRlcixcbi5iZy13YXJuaW5nIC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWxlcnQtd2FybmluZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LXdhcm5pbmcgLmFsZXJ0LWhlYWRpbmcge1xuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMTU5LCA2NywgMC40KSAwcHggNnB4IDE1cHggLTdweDtcbn1cbi5hbGVydC13YXJuaW5nIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICNmZjkyMmEgIWltcG9ydGFudDtcbn1cbi5hbGVydC13YXJuaW5nIC5jbG9zZSB7XG4gIGNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1saWdodC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtd2FybmluZy5mYy1oLWV2ZW50LCAuYmctbGlnaHQtd2FybmluZy5mYy12LWV2ZW50IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4xKTtcbn1cbi5iZy1saWdodC13YXJuaW5nIC5mYy1saXN0LWV2ZW50LWRvdCxcbi5iZy1saWdodC13YXJuaW5nIC5mYy1kYXlncmlkLWV2ZW50LWRvdCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXdhcm5pbmcuZmMtbGlzdC1ldmVudDpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtd2FybmluZy5mYy1saXN0LWV2ZW50IC5mYy1saXN0LWV2ZW50LXRpdGxlIHtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG5cbi5hdmF0YXIuYmctbGlnaHQtd2FybmluZyB7XG4gIGNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmY5ZjQzO1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjlmNDM7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmY5ZjQzO1xufVxuXG4uYm9yZGVyLXJpZ2h0LXdhcm5pbmcge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmY5ZjQzO1xufVxuXG4uYmctd2FybmluZy5iYWRnZS1nbG93LFxuLmJvcmRlci13YXJuaW5nLmJhZGdlLWdsb3csXG4uYmFkZ2Utd2FybmluZy5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNmZjlmNDM7XG59XG5cbi5iYWRnZS5iYWRnZS1saWdodC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpO1xuICBjb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZmOWY0MztcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjYpO1xufVxuXG4uYnRuLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmJ0bi13YXJuaW5nOmZvY3VzLCAuYnRuLXdhcm5pbmc6YWN0aXZlLCAuYnRuLXdhcm5pbmcuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkyMmEgIWltcG9ydGFudDtcbn1cbi5idG4td2FybmluZzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggLThweCAjZmY5ZjQzO1xufVxuLmJ0bi13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idG4tZmxhdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLmJ0bi1mbGF0LXdhcm5pbmc6aG92ZXIge1xuICBjb2xvcjogI2ZmOWY0Mztcbn1cbi5idG4tZmxhdC13YXJuaW5nOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpO1xufVxuLmJ0bi1mbGF0LXdhcm5pbmc6YWN0aXZlLCAuYnRuLWZsYXQtd2FybmluZy5hY3RpdmUsIC5idG4tZmxhdC13YXJuaW5nOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMik7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLmJ0bi1mbGF0LXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmY5ZjQzJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uYnRuLXJlbGllZi13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0MztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2JhKDM0LCA0MSwgNDcsIDAuMik7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmJ0bi1yZWxpZWYtd2FybmluZzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFjNWQ7XG59XG4uYnRuLXJlbGllZi13YXJuaW5nOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtd2FybmluZy5hY3RpdmUsIC5idG4tcmVsaWVmLXdhcm5pbmc6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MjJhO1xufVxuLmJ0bi1yZWxpZWYtd2FybmluZzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1yZWxpZWYtd2FybmluZzphY3RpdmUsIC5idG4tcmVsaWVmLXdhcm5pbmcuYWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG4uYnRuLW91dGxpbmUtd2FybmluZzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjA0KTtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG4uYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bi1vdXRsaW5lLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMik7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmY5ZjQzJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnNob3cgPiAuYnRuLW91dGxpbmUtd2FybmluZy5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4yKTtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlLFxuLmJ0bi1mbGF0LXdhcm5pbmcud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDE1OSwgNjcsIDAuMikgMCwgcmdiYSgyNTUsIDE1OSwgNjcsIDAuMykgNDAlLCByZ2JhKDI1NSwgMTU5LCA2NywgMC40KSA1MCUsIHJnYmEoMjU1LCAxNTksIDY3LCAwLjUpIDYwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA3MCUpO1xufVxuXG4uYnVsbGV0LmJ1bGxldC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0Mztcbn1cblxuLm1vZGFsLm1vZGFsLXdhcm5pbmcgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBjb2xvcjogI2ZmOWY0Mztcbn1cbi5tb2RhbC5tb2RhbC13YXJuaW5nIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZDogI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmOWY0Mztcbn1cbi5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazpob3ZlciwgLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOWY0MztcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIsIC5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ubmV4dCAucGFnZS1saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZjlmNDMnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG4ucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSwgLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmY5ZjQzJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXBpbGwtd2FybmluZyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmOWY0MztcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCAtNHB4IHJnYmEoMjU1LCAxNTksIDY3LCAwLjY1KTtcbn1cblxuLnByb2dyZXNzLWJhci13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpO1xufVxuLnByb2dyZXNzLWJhci13YXJuaW5nIC5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtd2FybmluZyBpLFxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC13YXJuaW5nIHN2ZyB7XG4gIHN0cm9rZTogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC13YXJuaW5nLnRpbWVsaW5lLXBvaW50LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtd2FybmluZy50aW1lbGluZS1wb2ludC1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZpZGVyLmRpdmlkZXItd2FybmluZyAuZGl2aWRlci10ZXh0OmJlZm9yZSwgLmRpdmlkZXIuZGl2aWRlci13YXJuaW5nIC5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctd2FybmluZyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICNmZmYsIDAgMCAwIDAuMjFyZW0gI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ZjQzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzO1xufVxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZy5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtd2FybmluZy5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC13YXJuaW5nLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZy5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDI1NSwgMTU5LCA2NywgMC40KSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcgLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjY1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC13YXJuaW5nIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tc3dpdGNoLXdhcm5pbmcgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VsZWN0Mi13YXJuaW5nIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgYmFja2dyb3VuZDogI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWRhcmtlbi0xIHtcbiAgY29sb3I6ICNmZjkyMmEgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItZGFya2VuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1kYXJrZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtZGFya2VuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQ6ICNmZjkyMmE7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQ2LCA0MiwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWRhcmtlbi0yIHtcbiAgY29sb3I6ICNmZjg1MTAgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItZGFya2VuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1kYXJrZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtZGFya2VuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQ6ICNmZjg1MTA7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTMzLCAxNiwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWRhcmtlbi0zIHtcbiAgY29sb3I6ICNmNjc4MDAgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItZGFya2VuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1kYXJrZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtZGFya2VuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICNmNjc4MDA7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NiwgMTIwLCAwLCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogI2RjNmMwMCAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZy5iZy1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1kYXJrZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20td2FybmluZy5ib3JkZXItYm90dG9tLWRhcmtlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtZGFya2VuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktd2FybmluZy5vdmVybGF5LWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZDogI2RjNmMwMDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjIwLCAxMDgsIDAsIDAuNik7XG59XG5cbi50ZXh0LXdhcm5pbmcudGV4dC1hY2NlbnQtMSB7XG4gIGNvbG9yOiAjZmZmNWVmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWFjY2VudC0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC13YXJuaW5nLmJvcmRlci10b3AtYWNjZW50LTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tYWNjZW50LTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1hY2NlbnQtMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXdhcm5pbmcuYm9yZGVyLXJpZ2h0LWFjY2VudC0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kOiAjZmZmNWVmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0NSwgMjM5LCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtYWNjZW50LTIge1xuICBjb2xvcjogI2ZmZTVkOCAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZy5iZy1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1hY2NlbnQtMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWFjY2VudC0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20td2FybmluZy5ib3JkZXItYm90dG9tLWFjY2VudC0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtYWNjZW50LTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1hY2NlbnQtMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktd2FybmluZy5vdmVybGF5LWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZDogI2ZmZTVkODtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMjksIDIxNiwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWFjY2VudC0zIHtcbiAgY29sb3I6ICNmZmY2ZjMgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItYWNjZW50LTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1hY2NlbnQtMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWFjY2VudC0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtYWNjZW50LTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQ6ICNmZmY2ZjM7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ2LCAyNDMsIDAuNik7XG59XG5cbi50ZXh0LXdhcm5pbmcudGV4dC1hY2NlbnQtNCB7XG4gIGNvbG9yOiAjZmZlM2RhICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWFjY2VudC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWFjY2VudC00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC13YXJuaW5nLmJvcmRlci10b3AtYWNjZW50LTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tYWNjZW50LTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1hY2NlbnQtNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXdhcm5pbmcuYm9yZGVyLXJpZ2h0LWFjY2VudC00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kOiAjZmZlM2RhO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIyNywgMjE4LCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1saWdodGVuLTUge1xuICBjb2xvcjogI2Y4YzZjNiAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIuYm9yZGVyLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tbGlnaHRlbi01IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlci5ib3JkZXItbGVmdC1saWdodGVuLTUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZDogI2Y4YzZjNjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAxOTgsIDE5OCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtbGlnaHRlbi00IHtcbiAgY29sb3I6ICNmNWFmYWYgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhbmdlci5iZy1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1saWdodGVuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhbmdlci5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1saWdodGVuLTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlci5vdmVybGF5LWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQ6ICNmNWFmYWY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTc1LCAxNzUsIDAuNik7XG59XG5cbi50ZXh0LWRhbmdlci50ZXh0LWxpZ2h0ZW4tMyB7XG4gIGNvbG9yOiAjZjI5ODk5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItbGlnaHRlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYW5nZXIuYm9yZGVyLXRvcC1saWdodGVuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1saWdodGVuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhbmdlci5ib3JkZXItcmlnaHQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kOiAjZjI5ODk5O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDE1MiwgMTUzLCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1saWdodGVuLTIge1xuICBjb2xvcjogI2YwODE4MiAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIuYm9yZGVyLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlci5ib3JkZXItbGVmdC1saWdodGVuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZDogI2YwODE4MjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAxMjksIDEzMCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtbGlnaHRlbi0xIHtcbiAgY29sb3I6ICNlZDZiNmMgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhbmdlci5iZy1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1saWdodGVuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhbmdlci5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1saWdodGVuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlci5vdmVybGF5LWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQ6ICNlZDZiNmM7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNywgMTA3LCAxMDgsIDAuNik7XG59XG5cbi5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4uYmctZGFuZ2VyIC5jYXJkLWhlYWRlcixcbi5iZy1kYW5nZXIgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgODQsIDg1LCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LWRhbmdlciAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjM0LCA4NCwgODUsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4uYWxlcnQtZGFuZ2VyIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICNlNzNkM2UgIWltcG9ydGFudDtcbn1cbi5hbGVydC1kYW5nZXIgLmNsb3NlIHtcbiAgY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0LWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCA4NCwgODUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtZGFuZ2VyLmZjLWgtZXZlbnQsIC5iZy1saWdodC1kYW5nZXIuZmMtdi1ldmVudCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4xKTtcbn1cbi5iZy1saWdodC1kYW5nZXIgLmZjLWxpc3QtZXZlbnQtZG90LFxuLmJnLWxpZ2h0LWRhbmdlciAuZmMtZGF5Z3JpZC1ldmVudC1kb3Qge1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1kYW5nZXIuZmMtbGlzdC1ldmVudDpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCA4NCwgODUsIDAuMSkgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1kYW5nZXIuZmMtbGlzdC1ldmVudCAuZmMtbGlzdC1ldmVudC10aXRsZSB7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuXG4uYXZhdGFyLmJnLWxpZ2h0LWRhbmdlciB7XG4gIGNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYW5nZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhNTQ1NTtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYTU0NTU7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYTU0NTU7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VhNTQ1NTtcbn1cblxuLmJnLWRhbmdlci5iYWRnZS1nbG93LFxuLmJvcmRlci1kYW5nZXIuYmFkZ2UtZ2xvdyxcbi5iYWRnZS1kYW5nZXIuYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZWE1NDU1O1xufVxuXG4uYmFkZ2UuYmFkZ2UtbGlnaHQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4xMik7XG4gIGNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNlYTU0NTU7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgODQsIDg1LCAwLjYpO1xufVxuXG4uYnRuLWRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLWRhbmdlcjpmb2N1cywgLmJ0bi1kYW5nZXI6YWN0aXZlLCAuYnRuLWRhbmdlci5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IC04cHggI2VhNTQ1NTtcbn1cbi5idG4tZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idG4tZmxhdC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4uYnRuLWZsYXQtZGFuZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4uYnRuLWZsYXQtZGFuZ2VyOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4xMik7XG59XG4uYnRuLWZsYXQtZGFuZ2VyOmFjdGl2ZSwgLmJ0bi1mbGF0LWRhbmdlci5hY3RpdmUsIC5idG4tZmxhdC1kYW5nZXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjIpO1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cbi5idG4tZmxhdC1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZWE1NDU1JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uYnRuLXJlbGllZi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi1kYW5nZXI6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2YjZjO1xufVxuLmJ0bi1yZWxpZWYtZGFuZ2VyOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtZGFuZ2VyLmFjdGl2ZSwgLmJ0bi1yZWxpZWYtZGFuZ2VyOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3M2QzZTtcbn1cbi5idG4tcmVsaWVmLWRhbmdlcjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1yZWxpZWYtZGFuZ2VyOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtZGFuZ2VyLmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuXG4uYnRuLW91dGxpbmUtZGFuZ2VyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNTQ1NSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4uYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4wNCk7XG4gIGNvbG9yOiAjZWE1NDU1O1xufVxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLW91dGxpbmUtZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4yKTtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4uYnRuLW91dGxpbmUtZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2VhNTQ1NScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjIpO1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cblxuLmJ0bi1vdXRsaW5lLWRhbmdlci53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSxcbi5idG4tZmxhdC1kYW5nZXIud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyMzQsIDg0LCA4NSwgMC4yKSAwLCByZ2JhKDIzNCwgODQsIDg1LCAwLjMpIDQwJSwgcmdiYSgyMzQsIDg0LCA4NSwgMC40KSA1MCUsIHJnYmEoMjM0LCA4NCwgODUsIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG59XG5cbi5tb2RhbC5tb2RhbC1kYW5nZXIgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cbi5tb2RhbC5tb2RhbC1kYW5nZXIgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQ6ICNlYTU0NTUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZWE1NDU1O1xufVxuLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXIsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VhNTQ1NTtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyOmFmdGVyLCAucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2VhNTQ1NScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSwgLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2VhNTQ1NScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cblxuLm5hdi1waWxsLWRhbmdlciAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2VhNTQ1NTtcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCAtNHB4IHJnYmEoMjM0LCA4NCwgODUsIDAuNjUpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCA4NCwgODUsIDAuMTIpO1xufVxuLnByb2dyZXNzLWJhci1kYW5nZXIgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhbmdlciBpLFxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1kYW5nZXIgc3ZnIHtcbiAgc3Ryb2tlOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhbmdlci50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhbmdlci50aW1lbGluZS1wb2ludC1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDg0LCA4NSwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci1kYW5nZXIgLmRpdmlkZXItdGV4dDpiZWZvcmUsIC5kaXZpZGVyLmRpdmlkZXItZGFuZ2VyIC5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctZGFuZ2VyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1kYW5nZXIgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYW5nZXIgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWE1NDU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xufVxuLmN1c3RvbS1jb250cm9sLWRhbmdlci5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYW5nZXIuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYW5nZXIuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtZGFuZ2VyLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhbmdlci5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhbmdlci5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDIzNCwgODQsIDg1LCAwLjQpICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtZGFuZ2VyIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjY1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1kYW5nZXIgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtZGFuZ2VyIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLnNlbGVjdDItZGFuZ2VyIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgYmFja2dyb3VuZDogI2VhNTQ1NSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItZGFya2VuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTczZDNlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNzNkM2UgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tZGFya2VuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTczZDNlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNzNkM2UgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kOiAjZTczZDNlO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDYxLCA2MiwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtZGFya2VuLTIge1xuICBjb2xvcjogI2U0MjcyOCAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MjcyOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItZGFya2VuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTQyNzI4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWRhcmtlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNDI3MjggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tZGFya2VuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0MjcyOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTQyNzI4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1kYXJrZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNDI3MjggIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kOiAjZTQyNzI4O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMjgsIDM5LCA0MCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtZGFya2VuLTMge1xuICBjb2xvcjogI2Q3MWExYyAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MWExYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItZGFya2VuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDcxYTFjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWRhcmtlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNzFhMWMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tZGFya2VuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3MWExYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDcxYTFjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1kYXJrZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNzFhMWMgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kOiAjZDcxYTFjO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMTUsIDI2LCAyOCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogI2MwMTgxOSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMTgxOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItZGFya2VuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzAxODE5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjMDE4MTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tZGFya2VuLTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwMTgxOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWRhcmtlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYzAxODE5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjMDE4MTkgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kOiAjYzAxODE5O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxOTIsIDI0LCAyNSwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtYWNjZW50LTEge1xuICBjb2xvcjogI2ZmZWVmMSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWVmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItYWNjZW50LTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZlZWYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWFjY2VudC0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmVlZjEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tYWNjZW50LTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZWVmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWFjY2VudC0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZlZWYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1hY2NlbnQtMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmVlZjEgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kOiAjZmZlZWYxO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzOCwgMjQxLCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1hY2NlbnQtMiB7XG4gIGNvbG9yOiAjZmZkNmRiICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctYWNjZW50LTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNmRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1hY2NlbnQtMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmQ2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtYWNjZW50LTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZDZkYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZkNmRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtYWNjZW50LTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmQ2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWFjY2VudC0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZDZkYiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQ6ICNmZmQ2ZGI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjE0LCAyMTksIDAuNik7XG59XG5cbi50ZXh0LWRhbmdlci50ZXh0LWFjY2VudC0zIHtcbiAgY29sb3I6ICNmZmVjZWUgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhbmdlci5iZy1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIuYm9yZGVyLWFjY2VudC0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZWNlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYW5nZXIuYm9yZGVyLXRvcC1hY2NlbnQtMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZlY2VlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhbmdlci5ib3JkZXItYm90dG9tLWFjY2VudC0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmVjZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlci5ib3JkZXItbGVmdC1hY2NlbnQtMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZWNlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhbmdlci5ib3JkZXItcmlnaHQtYWNjZW50LTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZlY2VlICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlci5vdmVybGF5LWFjY2VudC0zIHtcbiAgYmFja2dyb3VuZDogI2ZmZWNlZTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzYsIDIzOCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtYWNjZW50LTQge1xuICBjb2xvcjogI2ZmZDNkNyAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWFjY2VudC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDNkNyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItYWNjZW50LTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZkM2Q3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWFjY2VudC00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmQzZDcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tYWNjZW50LTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZDNkNyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWFjY2VudC00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZkM2Q3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1hY2NlbnQtNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmQzZDcgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kOiAjZmZkM2Q3O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIxMSwgMjE1LCAwLjYpO1xufVxuXG4uYmctZ3JhZGllbnQtZGFyayxcbi5idG4tZ3JhZGllbnQtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM0YjRiNGIsICMxZTFlMWUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uZGFyay1sYXlvdXQgLmJnLWdyYWRpZW50LWRhcmssXG4uZGFyay1sYXlvdXQgLmJ0bi1ncmFkaWVudC1kYXJrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMWUxZTFlLCAjNGI0YjRiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuLmJnLWdyYWRpZW50LWRhcms6aG92ZXIsIC5iZy1ncmFkaWVudC1kYXJrOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtZGFyazpob3Zlcixcbi5idG4tZ3JhZGllbnQtZGFyazphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZy1ncmFkaWVudC1kYXJrOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpLFxuLmJ0bi1ncmFkaWVudC1kYXJrOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLmJnLWdyYWRpZW50LWRhcms6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1kYXJrOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5iZy1ncmFkaWVudC1kYXJrOmFjdGl2ZSwgLmJnLWdyYWRpZW50LWRhcms6Zm9jdXMsXG4uYnRuLWdyYWRpZW50LWRhcms6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1kYXJrOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMWUxZTFlLCAjNGI0YjRiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuXG4uYmctZ3JhZGllbnQtcHJpbWFyeSxcbi5idG4tZ3JhZGllbnQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM5MDEwMjMsICNiZTE1MmUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtcHJpbWFyeTpob3ZlciwgLmJnLWdyYWRpZW50LXByaW1hcnk6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1ncmFkaWVudC1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJnLWdyYWRpZW50LXByaW1hcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCksXG4uYnRuLWdyYWRpZW50LXByaW1hcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtcHJpbWFyeTphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXByaW1hcnk6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLmJnLWdyYWRpZW50LXByaW1hcnk6YWN0aXZlLCAuYmctZ3JhZGllbnQtcHJpbWFyeTpmb2N1cyxcbi5idG4tZ3JhZGllbnQtcHJpbWFyeTphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXByaW1hcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM2MjBiMTgsICM5MDEwMjMpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5iZy1ncmFkaWVudC1zZWNvbmRhcnksXG4uYnRuLWdyYWRpZW50LXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM4MDlkYWIsICM5ZmI1YmYpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmhvdmVyLCAuYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtc2Vjb25kYXJ5OmhvdmVyLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5iZy1ncmFkaWVudC1zZWNvbmRhcnk6YWN0aXZlLCAuYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmZvY3VzLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM2Mzg1OTUsICM4MDlkYWIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5iZy1ncmFkaWVudC1zdWNjZXNzLFxuLmJ0bi1ncmFkaWVudC1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgIzI4Yzc2ZiwgIzQ4ZGE4OSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cbi5iZy1ncmFkaWVudC1zdWNjZXNzOmhvdmVyLCAuYmctZ3JhZGllbnQtc3VjY2VzczphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXN1Y2Nlc3M6aG92ZXIsXG4uYnRuLWdyYWRpZW50LXN1Y2Nlc3M6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmctZ3JhZGllbnQtc3VjY2Vzczpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSxcbi5idG4tZ3JhZGllbnQtc3VjY2Vzczpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5iZy1ncmFkaWVudC1zdWNjZXNzOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtc3VjY2VzczphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4uYmctZ3JhZGllbnQtc3VjY2VzczphY3RpdmUsIC5iZy1ncmFkaWVudC1zdWNjZXNzOmZvY3VzLFxuLmJ0bi1ncmFkaWVudC1zdWNjZXNzOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtc3VjY2Vzczpmb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgIzFmOWQ1NywgIzI4Yzc2Zik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cblxuLmJnLWdyYWRpZW50LWluZm8sXG4uYnRuLWdyYWRpZW50LWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMDBjZmU4LCAjMWNlN2ZmKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuLmJnLWdyYWRpZW50LWluZm86aG92ZXIsIC5iZy1ncmFkaWVudC1pbmZvOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtaW5mbzpob3Zlcixcbi5idG4tZ3JhZGllbnQtaW5mbzphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZy1ncmFkaWVudC1pbmZvOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpLFxuLmJ0bi1ncmFkaWVudC1pbmZvOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLmJnLWdyYWRpZW50LWluZm86YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1pbmZvOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5iZy1ncmFkaWVudC1pbmZvOmFjdGl2ZSwgLmJnLWdyYWRpZW50LWluZm86Zm9jdXMsXG4uYnRuLWdyYWRpZW50LWluZm86YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1pbmZvOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMDBhMWI1LCAjMDBjZmU4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuXG4uYmctZ3JhZGllbnQtd2FybmluZyxcbi5idG4tZ3JhZGllbnQtd2FybmluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICNmZjlmNDMsICNmZmI5NzYpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtd2FybmluZzpob3ZlciwgLmJnLWdyYWRpZW50LXdhcm5pbmc6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC13YXJuaW5nOmhvdmVyLFxuLmJ0bi1ncmFkaWVudC13YXJuaW5nOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJnLWdyYWRpZW50LXdhcm5pbmc6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCksXG4uYnRuLWdyYWRpZW50LXdhcm5pbmc6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtd2FybmluZzphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXdhcm5pbmc6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLmJnLWdyYWRpZW50LXdhcm5pbmc6YWN0aXZlLCAuYmctZ3JhZGllbnQtd2FybmluZzpmb2N1cyxcbi5idG4tZ3JhZGllbnQtd2FybmluZzphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXdhcm5pbmc6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICNmZjg1MTAsICNmZjlmNDMpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5iZy1ncmFkaWVudC1kYW5nZXIsXG4uYnRuLWdyYWRpZW50LWRhbmdlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICNlYTU0NTUsICNmMDgxODIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtZGFuZ2VyOmhvdmVyLCAuYmctZ3JhZGllbnQtZGFuZ2VyOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtZGFuZ2VyOmhvdmVyLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmctZ3JhZGllbnQtZGFuZ2VyOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtZGFuZ2VyOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtZGFuZ2VyOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5iZy1ncmFkaWVudC1kYW5nZXI6YWN0aXZlLCAuYmctZ3JhZGllbnQtZGFuZ2VyOmZvY3VzLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICNlNDI3MjgsICNlYTU0NTUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjEpO1xufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlci1jb2xvcjogIzkwMTAyMyAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICM2ZTZiN2IgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjNmU2YjdiICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cbi5uZy1zZWxlY3QuZXJyb3IgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDEwMjMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnQge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ubGVmdCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHQge1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVyIHtcbiAgdG9wOiA4cHggIWltcG9ydGFudDtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpemUtbGcgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2l6ZS1sZyAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA3cHg7XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaXplLWxnIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0IHtcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpemUtbGcgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLnJpZ2h0IHtcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpemUtbGcgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWNsZWFyLXdyYXBwZXIge1xuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpemUtc20gLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpemUtc20gLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlIHtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaXplLXNtIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0IHtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2l6ZS1zbSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHQge1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG4ubmctc2VsZWN0IC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTAyMyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLm5nLXNlbGVjdCAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTAyMyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLm5nLXNlbGVjdCAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZCAubmctb3B0aW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbi5uZy1zZWxlY3QgLm5nLW9wdGlvbi5uZy1vcHRpb24tbWFya2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE2LCAzNSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5MDEwMjMgIWltcG9ydGFudDtcbn1cbi5uZy1zZWxlY3QgLm5nLW9wdGlvbi5uZy1vcHRpb24tZGlzYWJsZWQge1xuICBjb2xvcjogI2I5YjljMyAhaW1wb3J0YW50O1xufVxuLm5nLXNlbGVjdCAubmctYXJyb3cge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWFCQU1BQUFCYlpGSDlBQUFBRzFCTVZFVUFBQUNSa1pHUmtaR1NrcEtSa1pHU2twS1NrcEtSa1pHUmtaSExzbys5QUFBQUNIUlNUbE1BKzFKb1dvMHZMRlFEbW1rQUFBQmxTVVJCVkJqVFk2QUxTQUNUYkJBT2F6T1lzZ2dBVXhFZEJrQ1N1YU1WeEdHWDZCQUJVbzRkalFVZ3JtSkhod0ZRcWtNSXJKSkpvcU9ad2FLalVRSEloa2c2ZzZRZ2dFV2lRN0NqMFFISWdrcENwYUE2d2JyZ2tpQXBoS1NnQXJKVFhSaG9CZ0I5R1JQc3d5dkJxQUFBQUFCSlJVNUVya0pnZ2c9PVwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMnB4IDEycHgsIDEwcHggMTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAwLjhyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQgPiAubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3cge1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlciB7XG4gIGhlaWdodDogMThweDtcbn1cblxuLmRhcmstbGF5b3V0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzA0NjtcbiAgYm9yZGVyLWNvbG9yOiAjM2I0MjUzO1xuICBjb2xvcjogIzY3NmQ3ZDtcbn1cbi5kYXJrLWxheW91dCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzY3NmQ3ZCAhaW1wb3J0YW50O1xufVxuLmRhcmstbGF5b3V0IC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAxNiwgMzUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOTAxMDIzICFpbXBvcnRhbnQ7XG59XG4uZGFyay1sYXlvdXQgLm5nLWRyb3Bkb3duLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDlkYWI7XG4gIGJvcmRlci1jb2xvcjogIzNiNDI1Mztcbn1cbi5kYXJrLWxheW91dCAubmctZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOWRhYjtcbiAgYm9yZGVyLWNvbG9yOiAjM2I0MjUzO1xufVxuLmRhcmstbGF5b3V0IC5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZCA+IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOWRhYjtcbn1cbi5kYXJrLWxheW91dCAubmctb3B0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzA0NiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2I0YjdiZCAhaW1wb3J0YW50O1xufVxuLmRhcmstbGF5b3V0IC5uZy1vcHRpb24ubmctb3B0aW9uLWRpc2FibGVkIHtcbiAgY29sb3I6ICM2NzZkN2QgIWltcG9ydGFudDtcbn1cbi5kYXJrLWxheW91dCBuZy1kcm9wZG93bi1wYW5lbCB7XG4gIGJvcmRlci1jb2xvcjogIzNiNDI1MyAhaW1wb3J0YW50O1xufVxuLmRhcmstbGF5b3V0IG5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDlkYWIgIWltcG9ydGFudDtcbn1cbi5kYXJrLWxheW91dCBuZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwIHtcbiAgY29sb3I6ICM2NzZkN2QgIWltcG9ydGFudDtcbn1cblxuLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLWRheSB7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLWRheS50b2RheSB7XG4gIGJvcmRlci1jb2xvcjogIzkwMTAyMztcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkudG9kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLCAuZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzkwMTAyMztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogIzkwMTAyMztcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkuaW5SYW5nZSwgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLWRheS5pblJhbmdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ViNGU2NTtcbiAgYm9yZGVyLWNvbG9yOiAjZWI0ZTY1O1xuICBib3gtc2hhZG93OiAtNXB4IDAgMCAjZWI0ZTY1LCA1cHggMCAwICNlYjRlNjU7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UsIC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UsIC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3ZlciwgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5MDEwMjM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICM5MDEwMjM7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2U6bm90KDpudGgtY2hpbGQoN24rMSkpLCAuZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSksIC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSkge1xuICBib3gtc2hhZG93OiAtMTBweCAwIDAgIzkwMTAyMztcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkuZmxhdHBpY2tyLWRpc2FibGVkLCAuZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItZGF5LnByZXZNb250aERheSwgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkge1xuICBjb2xvcjogI2RhZTFlNztcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xufVxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciwgLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGgsXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItbmV4dC1tb250aCB7XG4gIHRvcDogLTVweDtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyIGksIC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyIHN2Zyxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIGksXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciBzdmcge1xuICBmaWxsOiAjOTAxMDIzO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGgge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuIHtcbiAgei1pbmRleDogMTA1MTtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIuaGFzVGltZS5vcGVuIC5mbGF0cGlja3ItdGltZSB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmZsYXRwaWNrci10aW1lIGlucHV0OmhvdmVyLFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06aG92ZXIsXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQ6Zm9jdXMsXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kYXJrLWxheW91dCAuZmxhdHBpY2tyLWNhbGVuZGFyIHtcbiAgYmFja2dyb3VuZDogIzgwOWRhYjtcbiAgYm9yZGVyLWNvbG9yOiAjODA5ZGFiO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1tb250aHMgaSxcbi5kYXJrLWxheW91dCAuZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItbW9udGhzIHN2ZyB7XG4gIGZpbGw6ICNiNGI3YmQ7XG59XG4uZGFyay1sYXlvdXQgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLW1vbnRoIHtcbiAgY29sb3I6ICNiNGI3YmQ7XG59XG4uZGFyay1sYXlvdXQgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla3Mge1xuICBib3gtc2hhZG93OiAxcHggMCAwICMzYjQyNTM7XG59XG4uZGFyay1sYXlvdXQgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLXdlZWtkYXkge1xuICBjb2xvcjogI2I0YjdiZDtcbn1cbi5kYXJrLWxheW91dCAuZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItZGF5LCAuZGFyay1sYXlvdXQgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLWRheS50b2RheTpob3ZlciB7XG4gIGNvbG9yOiAjYjRiN2JkO1xufVxuLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5kYXJrLWxheW91dCAuZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItZGF5LnByZXZNb250aERheSwgLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LCAuZGFyay1sYXlvdXQgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLWRheS5mbGF0cGlja3ItZGlzYWJsZWQge1xuICBjb2xvcjogIzRlNTE1NCAhaW1wb3J0YW50O1xufVxuLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkuaW5SYW5nZSwgLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXkuaW5SYW5nZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODMwNDY7XG4gIGJvcmRlci1jb2xvcjogIzI4MzA0NjtcbiAgYm94LXNoYWRvdzogLTVweCAwIDAgIzI4MzA0NiwgNXB4IDAgMCAjMjgzMDQ2O1xufVxuLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXk6aG92ZXI6bm90KC5zZWxlY3RlZCk6bm90KC50b2RheSk6bm90KC5zdGFydFJhbmdlKTpub3QoLmVuZFJhbmdlKSB7XG4gIGNvbG9yOiAjYjRiN2JkO1xuICBib3JkZXItY29sb3I6ICMyODMwNDY7XG59XG4uZGFyay1sYXlvdXQgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLWRheXMgLmZsYXRwaWNrci1kYXk6aG92ZXI6bm90KC5zZWxlY3RlZCk6bm90KC50b2RheSk6bm90KC5zdGFydFJhbmdlKTpub3QoLmVuZFJhbmdlKSwgLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci1kYXlzIC5mbGF0cGlja3ItZGF5OmZvY3VzOm5vdCguc2VsZWN0ZWQpOm5vdCgudG9kYXkpOm5vdCguc3RhcnRSYW5nZSk6bm90KC5lbmRSYW5nZSkge1xuICBiYWNrZ3JvdW5kOiAjMjgzMDQ2O1xufVxuLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci10aW1lIHtcbiAgYm9yZGVyLWNvbG9yOiAjODA5ZGFiICFpbXBvcnRhbnQ7XG59XG4uZGFyay1sYXlvdXQgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0LFxuLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xuICBjb2xvcjogI2I0YjdiZDtcbn1cbi5kYXJrLWxheW91dCAuZmxhdHBpY2tyLWNhbGVuZGFyIC5mbGF0cGlja3ItdGltZSAubnVtSW5wdXQ6aG92ZXIsXG4uZGFyay1sYXlvdXQgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM4MDlkYWI7XG59XG4uZGFyay1sYXlvdXQgLmZsYXRwaWNrci1jYWxlbmRhciAuZmxhdHBpY2tyLXRpbWUgLmFycm93VXA6YWZ0ZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjYjRiN2JkO1xufVxuLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItY2FsZW5kYXIgLmZsYXRwaWNrci10aW1lIC5hcnJvd0Rvd246YWZ0ZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYjRiN2JkO1xufVxuLmRhcmstbGF5b3V0IC5mbGF0cGlja3ItdGltZSBpbnB1dDpob3Zlcixcbi5kYXJrLWxheW91dCAuZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3Zlcixcbi5kYXJrLWxheW91dCAuZmxhdHBpY2tyLXRpbWUgaW5wdXQ6Zm9jdXMsXG4uZGFyay1sYXlvdXQgLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjODA5ZGFiO1xufVxuXG4uZmxhdHBpY2tyLWlucHV0W3JlYWRvbmx5XSxcbi5mbGF0cGlja3ItaW5wdXQgfiAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSxcbi5mbGF0cGlja3ItaHVtYW4tZnJpZW5kbHlbcmVhZG9ubHldIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4uZmxhdHBpY2tyLXdlZWtkYXlzIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRocyB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAuZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGhzLFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDtcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAuZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGhzIHNwYW4sXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iLCJAbWl4aW4gYmctb3BhY2l0eSgkY29sb3IsICRvcGFjaXR5OiAxKSB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yOyAvKiBUaGUgRmFsbGJhY2sgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xyXG59XHJcbiIsIi8vIE92ZXJyaWRlcyB1c2VyIF92YXJpYWJsZXMtY29tcG9uZW50c1xyXG5AaW1wb3J0ICcuLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7XHJcblxyXG4vLyBHb29nbGUgQ29sb3IgUGFsZXR0ZSBkZWZpbmVkOiBodHRwOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvc3R5bGUvY29sb3IuaHRtbFxyXG5cclxuJHdoaXRlLWNvbG9yOiAoXHJcbiAgICAgICAgJ2Jhc2UnOiAjZmZmZmZmXHJcbik7XHJcbiRibGFjay1jb2xvcjogKFxyXG4gICAgICAgICdiYXNlJzogIzAwMDAwMFxyXG4pO1xyXG4kZGFyay1jb2xvcjogKFxyXG4gICAgICAgICdiYXNlJzogdGhlbWUtY29sb3IoJ2RhcmsnKSxcclxuICAgICAgICAnZGFya2VuLTEnOiAjMzQzNDM0LFxyXG4gICAgICAgICdkYXJrZW4tMic6ICMxZTFlMWUsXHJcbiAgICAgICAgJ2Rhcmtlbi0zJzogIzYyNjI2MlxyXG4pO1xyXG4kbGlnaHQtY29sb3I6IChcclxuICAgICAgICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdsaWdodCcpXHJcbik7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogKFxyXG4gICAgICAgICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDI1JSksXHJcbiAgICAgICAgJ2xpZ2h0ZW4tNCc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgMjAlKSxcclxuICAgICAgICAnbGlnaHRlbi0zJzogbGlnaHRlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAxNSUpLFxyXG4gICAgICAgICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDEwJSksXHJcbiAgICAgICAgJ2xpZ2h0ZW4tMSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgNSUpLFxyXG4gICAgICAgICdiYXNlJzogdGhlbWUtY29sb3IoJ3ByaW1hcnknKSxcclxuICAgICAgICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgNSUpLFxyXG4gICAgICAgICdkYXJrZW4tMic6IGRhcmtlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAxMCUpLFxyXG4gICAgICAgICdkYXJrZW4tMyc6IGRhcmtlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAxNSUpLFxyXG4gICAgICAgICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAyMCUpLFxyXG4gICAgICAgICdhY2NlbnQtMSc6ICNiZGZkZmYsXHJcbiAgICAgICAgJ2FjY2VudC0yJzogIzhhZmJmZixcclxuICAgICAgICAnYWNjZW50LTMnOiAjNTdmYWZmLFxyXG4gICAgICAgICdhY2NlbnQtNCc6ICMzZGY5ZmZcclxuKTtcclxuJHNlY29uZGFyeS1jb2xvcjogKFxyXG4gICAgICAgICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMjUlKSxcclxuICAgICAgICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDIwJSksXHJcbiAgICAgICAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxNSUpLFxyXG4gICAgICAgICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMTAlKSxcclxuICAgICAgICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDUlKSxcclxuICAgICAgICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSxcclxuICAgICAgICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCA1JSksXHJcbiAgICAgICAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMTAlKSxcclxuICAgICAgICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxNSUpLFxyXG4gICAgICAgICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDIwJSlcclxuKTtcclxuJHN1Y2Nlc3MtY29sb3I6IChcclxuICAgICAgICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCAyNSUpLFxyXG4gICAgICAgICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDIwJSksXHJcbiAgICAgICAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTUlKSxcclxuICAgICAgICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCAxMCUpLFxyXG4gICAgICAgICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDUlKSxcclxuICAgICAgICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksXHJcbiAgICAgICAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDUlKSxcclxuICAgICAgICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTAlKSxcclxuICAgICAgICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTUlKSxcclxuICAgICAgICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMjAlKSxcclxuICAgICAgICAnYWNjZW50LTEnOiAjZTFmZmYxLFxyXG4gICAgICAgICdhY2NlbnQtMic6ICNhZWZmZDksXHJcbiAgICAgICAgJ2FjY2VudC0zJzogIzdiZmZjMSxcclxuICAgICAgICAnYWNjZW50LTQnOiAjNjJmZmI1XHJcbik7XHJcbiRpbmZvLWNvbG9yOiAoXHJcbiAgICAgICAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMjUlKSxcclxuICAgICAgICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAyMCUpLFxyXG4gICAgICAgICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDE1JSksXHJcbiAgICAgICAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMTAlKSxcclxuICAgICAgICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCA1JSksXHJcbiAgICAgICAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignaW5mbycpLFxyXG4gICAgICAgICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcignaW5mbycpLCA1JSksXHJcbiAgICAgICAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDEwJSksXHJcbiAgICAgICAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDE1JSksXHJcbiAgICAgICAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDIwJSksXHJcbiAgICAgICAgJ2FjY2VudC0xJzogI2ZlZmZmZixcclxuICAgICAgICAnYWNjZW50LTInOiAjY2JmNWZmLFxyXG4gICAgICAgICdhY2NlbnQtMyc6ICM5OGVjZmYsXHJcbiAgICAgICAgJ2FjY2VudC00JzogIzdmZTdmZlxyXG4pO1xyXG4kd2FybmluZy1jb2xvcjogKFxyXG4gICAgICAgICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDI1JSksXHJcbiAgICAgICAgJ2xpZ2h0ZW4tNCc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgMjAlKSxcclxuICAgICAgICAnbGlnaHRlbi0zJzogbGlnaHRlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAxNSUpLFxyXG4gICAgICAgICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDEwJSksXHJcbiAgICAgICAgJ2xpZ2h0ZW4tMSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgNSUpLFxyXG4gICAgICAgICdiYXNlJzogdGhlbWUtY29sb3IoJ3dhcm5pbmcnKSxcclxuICAgICAgICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgNSUpLFxyXG4gICAgICAgICdkYXJrZW4tMic6IGRhcmtlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAxMCUpLFxyXG4gICAgICAgICdkYXJrZW4tMyc6IGRhcmtlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAxNSUpLFxyXG4gICAgICAgICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAyMCUpLFxyXG4gICAgICAgICdhY2NlbnQtMSc6ICNmZmY1ZWYsXHJcbiAgICAgICAgJ2FjY2VudC0yJzogI2ZmZTVkOCxcclxuICAgICAgICAnYWNjZW50LTMnOiAjZmZmNmYzLFxyXG4gICAgICAgICdhY2NlbnQtNCc6ICNmZmUzZGFcclxuKTtcclxuJGRhbmdlci1jb2xvcjogKFxyXG4gICAgICAgICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMjUlKSxcclxuICAgICAgICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDIwJSksXHJcbiAgICAgICAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxNSUpLFxyXG4gICAgICAgICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMTAlKSxcclxuICAgICAgICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDUlKSxcclxuICAgICAgICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdkYW5nZXInKSxcclxuICAgICAgICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCA1JSksXHJcbiAgICAgICAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMTAlKSxcclxuICAgICAgICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxNSUpLFxyXG4gICAgICAgICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDIwJSksXHJcbiAgICAgICAgJ2FjY2VudC0xJzogI2ZmZWVmMSxcclxuICAgICAgICAnYWNjZW50LTInOiAjZmZkNmRiLFxyXG4gICAgICAgICdhY2NlbnQtMyc6ICNmZmVjZWUsXHJcbiAgICAgICAgJ2FjY2VudC00JzogI2ZmZDNkN1xyXG4pO1xyXG5cclxuJGNvbG9yczogKFxyXG4gICAgICAgICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcclxuICAgICAgICAnYmxhY2snOiAkYmxhY2stY29sb3IsXHJcbiAgICAgICAgJ2RhcmsnOiAkZGFyay1jb2xvcixcclxuICAgICAgICAnbGlnaHQnOiAkbGlnaHQtY29sb3IsXHJcbiAgICAgICAgJ3ByaW1hcnknOiAkcHJpbWFyeS1jb2xvcixcclxuICAgICAgICAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeS1jb2xvcixcclxuICAgICAgICAnc3VjY2Vzcyc6ICRzdWNjZXNzLWNvbG9yLFxyXG4gICAgICAgICdpbmZvJzogJGluZm8tY29sb3IsXHJcbiAgICAgICAgJ3dhcm5pbmcnOiAkd2FybmluZy1jb2xvcixcclxuICAgICAgICAnZGFuZ2VyJzogJGRhbmdlci1jb2xvclxyXG4pO1xyXG4iLCIvLyBGb3IgYWxlcnQncyBoZWFkaW5nIGJveC1zaGFkb3dcclxuXHJcbkBtaXhpbiBhbGVydC1oZWFkaW5nLWJzKCRjb2xvcikge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoJGNvbG9yLCAwLjQpIDBweCA2cHggMTVweCAtN3B4O1xyXG59XHJcbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gb3ZlcnJpZGVzIG9mIEJvb3RzdHJhcCB2YXJpYWJsZXNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS01MDogI2Y2ZjZmNiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAjYmFiZmM3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVzdFxyXG4kZ3JheS0yMDA6ICNlZGVkZWQgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXJcclxuJGdyYXktMzAwOiAjZGFlMWU3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodFxyXG4kZ3JheS00MDA6ICM2MzYzNjMgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjYjhjMmNjICFkZWZhdWx0OyAvLyAkZ3JheVxyXG4kZ3JheS03MDA6ICM0ZTUxNTQgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzFlMWUxZSAhZGVmYXVsdDsgLy8gJGdyYXktZGFya1xyXG4kZ3JheS05MDA6ICMyYTJlMzAgIWRlZmF1bHQ7XHJcbiRibGFjazogIzIyMjkyZiAhZGVmYXVsdDsgLy8gMjMxZjQ4IDIyMjkyZlxyXG5cclxuJHB1cnBsZTogIzczNjdmMCAhZGVmYXVsdDsgLy8kcHJpbWFyeVxyXG4kZ3JlZW46ICMyOGM3NmYgIWRlZmF1bHQ7IC8vJHN1Y2Nlc3NcclxuJGJsdWU6ICMwMGNmZTggIWRlZmF1bHQ7IC8vJGluZm9cclxuJG9yYW5nZTogI2ZmOWY0MyAhZGVmYXVsdDsgLy8kd2FybmluZ1xyXG4kcmVkOiAjZWE1NDU1ICFkZWZhdWx0OyAvLyRkYW5nZXJcclxuXHJcbiRwcmltYXJ5OiAkcHVycGxlICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAjODI4NjhiICFkZWZhdWx0O1xyXG4kaW5mbzogJGJsdWUgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAkb3JhbmdlICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICRncmF5LTUwICFkZWZhdWx0O1xyXG4kZGFyazogIzRiNGI0YiAhZGVmYXVsdDtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29udGFpbmVyLW1heC13aWR0aHNcclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICAgICAgICB4czogMCxcclxuICAgICAgICBzbTogNTc2cHgsXHJcbiAgICAgICAgbWQ6IDc2OHB4LFxyXG4gICAgICAgIGxnOiA5OTJweCxcclxuICAgICAgICB4bDogMTIwMHB4LFxyXG4gICAgICAgIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgICAgICAgeHM6IDAsXHJcbiAgICAgICAgc206IDU3NnB4LFxyXG4gICAgICAgIG1kOiA3NjhweCxcclxuICAgICAgICBsZzogOTkycHgsXHJcbiAgICAgICAgeGw6IDEyMDBweCxcclxuICAgICAgICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcclxuKSAhZGVmYXVsdDtcclxuLy8gc2Nzcy1kb2NzLWVuZCBjb250YWluZXItbWF4LXdpZHRoc1xyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGVcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyNTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzcGFjZXIgKiAwLjI1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAqIDAuNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3NTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzcGFjZXIgKiAwLjc1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3BhY2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDI6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3BhY2VyICogMS41XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3BhY2VyICogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0OiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAqIDMuNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1OiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAqIDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuJGJvZHktYmc6ICNmOGY4ZjggIWRlZmF1bHQ7XHJcbiRib2R5LWNvbG9yOiAjNmU2YjdiICFkZWZhdWx0O1xyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRsaW5rLWNvbG9yLCA1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS4yNSAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xyXG4kYm9yZGVyLWNvbG9yOiAjZWJlOWYxICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogMC4zNTdyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjZyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gc2hhZG93XHJcbiRib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcbi8vIFR5cG9ncmFwaHlcclxuXHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xyXG5cclxuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLWxnOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLXNtOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDAuODUpICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiA2MDAgIWRlZmF1bHQ7XHJcblxyXG4kbGluZS1oZWlnaHQtYmFzZTogMS40NSAhZGVmYXVsdDtcclxuXHJcbiRoMS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XHJcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzE0ICFkZWZhdWx0O1xyXG4kaDMtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjg2ICFkZWZhdWx0O1xyXG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjA3ICFkZWZhdWx0O1xyXG5cclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBpbmhlcml0ICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6ICM1ZTU4NzMgIWRlZmF1bHQ7XHJcblxyXG4kZGlzcGxheTEtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTItd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTMtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGxlYWQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjE0ICFkZWZhdWx0O1xyXG4kbGVhZC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJHRleHQtbXV0ZWQ6ICNiOWI5YzMgIWRlZmF1bHQ7XHJcbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyBUYWJsZXNcclxuXHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDAuNzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYWNjZW50LWJnOiAjZmFmYWZjICFkZWZhdWx0O1xyXG4kdGFibGUtaG92ZXItYmc6ICNmNmY2ZjkgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWhlYWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtZGFyay1iZzogJGRhcmsgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogIzQwNDA0MCAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS10aC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuXHJcbi8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4kYnRuLXBhZGRpbmcteTogMC43ODZyZW0gIWRlZmF1bHQ7XHJcbiRidG4tcGFkZGluZy14OiAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMnJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjQ4NnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogMC44cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcbiRidG4tbGluZS1oZWlnaHQ6IDEgIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnRuLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbmJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlciAwcyAhZGVmYXVsdDtcclxuXHJcbi8vIEZvcm1zXHJcbiRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICNkOGQ2ZGU7XHJcbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjI4NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAwLjQzOHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXktc206IDAuMTg4cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15LWxnOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNlZmVmZWYgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kaW5wdXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6IDIuNzE0cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOiAyLjE0MnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1sZzogMy4yODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiB3aGl0ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbmJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlci1jb2xvciAwcyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yO1xyXG5cclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogM3B4ICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1jaGVja2VkLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOS41IDcuNSclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzAuNzUgNC4zNSA0LjE4IDYuNzUgOC43NSAwLjc1JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTolMjNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjVweCcvJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1taW51cyclM0UlM0NsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogcmdiYSgkcHJpbWFyeSwgMC42NSk7XHJcblxyXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6IG5vbmU7XHJcblxyXG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAxMHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6IHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLXNwYWNlcjogMCAhZGVmYXVsdDtcclxuJHppbmRleC1kcm9wZG93bjogMTAgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuMjhyZW0gIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd25fc3BhY2luZzogMC41cmVtOyAvLyBjdXN0b21cclxuXHJcbi8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuODVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC41NTc1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDFyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC40NDNyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC43NDVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZm9udC1zaXplLWxnOiAxLjE0cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJHBhZ2luYXRpb24tZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBDYXJkc1xyXG4kY2FyZC1zcGFjZXIteTogMS41cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogMS41cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAwLjQyOHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vQWxlcnRzXHJcblxyXG4kYWxlcnQtcGFkZGluZy15OiAwLjcxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiA3MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdiB0YWJzXHJcblxyXG4kbmF2LWxpbmstcGFkZGluZy15OiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJG5hdi10YWJzLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6IDAuMjUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyBuYXZiYXJcclxuXHJcbiRmbG9hdGluZy1uYXYtbWFyZ2luOiAxLjNyZW07XHJcblxyXG4vLyBUb29sdGlwc1xyXG5cclxuJHRvb2x0aXAtYmc6ICMzMjMyMzIgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1wYWRkaW5nLXg6IDAuNzc1cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtb3BhY2l0eTogMSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtbWF4LXdpZHRoOiAyMjBweCAhZGVmYXVsdDtcclxuXHJcbi8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRwb3BvdmVyLWhlYWRlci1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxLjIxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gVG9hc3RzXHJcblxyXG4kdG9hc3QtbWF4LXdpZHRoOiAzODBweCAhZGVmYXVsdDtcclxuJHRvYXN0LXBhZGRpbmcteDogMS4xNHJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LXBhZGRpbmcteTogMC4xNXJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAwLjI4NnJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XHJcblxyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBQcm9ncmVzc1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiA1cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjg1NyAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJyZWFkY3J1bWJzXHJcblxyXG4kYnJlYWRjcnVtYi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAwLjZyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAwICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBDYXJvdXNlbFxyXG5cclxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnRcIj48cG9seWxpbmUgcG9pbnRzPVwiMTUgMTggOSAxMiAxNSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcclxuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjkgMTggMTUgMTIgOSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA2MDAgIWRlZmF1bHQ7XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuXHJcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuOHJlbSAxLjRyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuOHJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNHJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwteGw6IDk0JSAhZGVmYXVsdDtcclxuJG1vZGFsLXNtOiA0MDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICAgIFNsaWRlIEluIE1vZGFsXHJcbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1zbTogMjVyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG4kbW9kYWwtc2xpZGUtaW4td2lkdGg6IDI4cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLWxnOiAzMHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBDbG9zZVxyXG5cclxuJGNsb3NlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcclxuJGNsb3NlLWZvbnQtd2VpZ2h0OiA0MDAgIWRlZmF1bHQ7XHJcbiRjbG9zZS1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gQ29kZVxyXG5cclxuJGNvZGUtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XHJcbiRrYmQtYmc6ICNlZWUgIWRlZmF1bHQ7XHJcblxyXG4vLyBTd2l0Y2hcclxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDNyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vc3ZnIGNvbG9yXHJcbiRzdmctY29sb3ItbGlnaHQ6ICM2MjYyNjIgIWRlZmF1bHQ7XHJcblxyXG4vLyBTVkcgaWNvbnNcclxuLy8gRm9yIEJyZWFkY3J1bWJcclxuJGRvdWJsZS1jaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9ucy1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzEzIDE3IDE4IDEyIDEzIDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDE3IDExIDEyIDYgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbi8vIENoZXZyb24gSWNvbnNcclxuJGNoZXZyb24tbGVmdDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLXVwOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXVwJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTggMTUgMTIgOSA2IDE1JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tZG93bjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG5cclxuJGRvd25sb2FkOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1kb3dubG9hZCclM0UlM0NwYXRoIGQ9J00yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00JyUzRSUzQy9wYXRoJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc3IDEwIDEyIDE1IDE3IDEwJyUzRSUzQy9wb2x5bGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTUnIHgyPScxMicgeTI9JzMnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRyZW1vdmU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLXgnJTNFJTNDbGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hlY2s6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hlY2snJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaXJjbGU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2lyY2xlJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQy9zdmclM0VcIjtcclxuJGluZm9JY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWluZm8nJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPScxMCclM0UlM0MvY2lyY2xlJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNicgeDI9JzEyJyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzgnIHgyPScxMi4wMScgeTI9JzgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiR3YXJuaW5nSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1hbGVydC10cmlhbmdsZSclM0UlM0NwYXRoIGQ9J00xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHonJTNFJTNDL3BhdGglM0UlM0NsaW5lIHgxPScxMicgeTE9JzknIHgyPScxMicgeTI9JzEzJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNycgeDI9JzEyLjAxJyB5Mj0nMTcnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRtZW51OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nY3NzLWk2ZHpxMSclM0UlM0NsaW5lIHgxPSczJyB5MT0nMTInIHgyPScyMScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzYnIHgyPScyMScgeTI9JzYnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nMTgnIHgyPScyMScgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG5cclxuJGNoYXQtYmctbGlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXpMakF1TVN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2STBVeFJUQkZPVHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XHJcbiRjaGF0LWJnLWRhcms6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2SXpFM01VRXlORHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgIEZpbGUgTmFtZTogcGFsbGV0dGUtZ3JhZGllbnQuc2Nzc1xyXG4vLyAgIERlc2NyaXB0aW9uOiBncmFkaWVudCBjb2xvciBzeXN0ZW0gc3R5bGVzXHJcbi8vICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AZnVuY3Rpb24gY29sb3ItZnVuY3Rpb24oJGNvbG9yLCAkdHlwZSkge1xyXG4gIEBpZiBtYXAtaGFzLWtleSgkY29sb3JzLCAkY29sb3IpIHtcclxuICAgICRjdXJyX2NvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvcik7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGN1cnJfY29sb3IsICR0eXBlKSB7XHJcbiAgICAgIEByZXR1cm4gbWFwLWdldCgkY3Vycl9jb2xvciwgJHR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBAd2FybiBcIlVua25vd24gYCN7bmFtZX1gIGluICRjb2xvcnMuXCI7XHJcbiAgQHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vLyBDb2xvciBwYWxldHRlc1xyXG5AaW1wb3J0ICdwYWxldHRlLXZhcmlhYmxlcyc7XHJcblxyXG5AaW1wb3J0ICdib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyYWRpZW50cyc7XHJcbkBpbXBvcnQgJ2Jvb3RzdHJhcC9zY3NzL21peGlucy9ncmFkaWVudHMnO1xyXG5cclxuQGVhY2ggJGNvbG9yX25hbWUsICRjb2xvciBpbiAkY29sb3JzIHtcclxuICBAZWFjaCAkY29sb3JfdHlwZSwgJGNvbG9yX3ZhbHVlIGluICRjb2xvciB7XHJcbiAgICBAaWYgJGNvbG9yX3R5cGUgPT0gJ2Jhc2UnIHtcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XHJcbiAgICAgICAgLmJnLWdyYWRpZW50LSN7JGNvbG9yX25hbWV9LFxyXG4gICAgICAgIC5idG4tZ3JhZGllbnQtI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgICBAaWYgJGNvbG9yX25hbWUgPT0gJ2RhcmsnIHtcclxuICAgICAgICAgICAgQGlmIChjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2Jhc2UnKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtZGlyZWN0aW9uYWwobWFwLWdldCgoJGNvbG9yKSwgJ2Jhc2UnKSwgbWFwLWdldCgoJGNvbG9yKSwgJ2Rhcmtlbi0yJyksIDQ3ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBmb3IgZGFyayBsYXlvdXRcclxuICAgICAgICAgICAgLmRhcmstbGF5b3V0ICYge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWRpcmVjdGlvbmFsKG1hcC1nZXQoKCRjb2xvciksICdkYXJrZW4tMicpLCBtYXAtZ2V0KCgkY29sb3IpLCAnYmFzZScpLCA0N2RlZyk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgIEBpZiAoY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdiYXNlJykgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWRpcmVjdGlvbmFsKG1hcC1nZXQoKCRjb2xvciksICdiYXNlJyksIG1hcC1nZXQoKCRjb2xvciksICdsaWdodGVuLTInKSwgNDdkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIEBpZiAoY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMicpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1kaXJlY3Rpb25hbChtYXAtZ2V0KCgkY29sb3IpLCAnZGFya2VuLTInKSwgbWFwLWdldCgoJGNvbG9yKSwgJ2Jhc2UnKSwgNDdkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIEdyYWRpZW50c1xuXG5AbWl4aW4gZ3JhZGllbnQtYmcoJGNvbG9yKSB7XG4gIEBpZiAkZW5hYmxlLWdyYWRpZW50cyB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIG1peCgkYm9keS1iZywgJGNvbG9yLCAxNSUpLCAkY29sb3IpIHJlcGVhdC14O1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbkBtaXhpbiBncmFkaWVudC14KCRzdGFydC1jb2xvcjogJGdyYXktNzAwLCAkZW5kLWNvbG9yOiAkZ3JheS04MDAsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG5AbWl4aW4gZ3JhZGllbnQteSgkc3RhcnQtY29sb3I6ICRncmF5LTcwMCwgJGVuZC1jb2xvcjogJGdyYXktODAwLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAkZ3JheS03MDAsICRlbmQtY29sb3I6ICRncmF5LTgwMCwgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cbkBtaXhpbiBncmFkaWVudC14LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC15LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXJhZGlhbCgkaW5uZXItY29sb3I6ICRncmF5LTcwMCwgJG91dGVyLWNvbG9yOiAkZ3JheS04MDApIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKCR3aGl0ZSwgLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4iLCJAaW1wb3J0ICd+QG5nLXNlbGVjdC9uZy1zZWxlY3QvdGhlbWVzL2RlZmF1bHQudGhlbWUuY3NzJztcbkBpbXBvcnQgJ35AY29yZS9zY3NzL2Jhc2UvY29sb3JzJztcbkBpbXBvcnQgJ35AY29yZS9zY3NzL2Jhc2UvY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xuXG4vLyB2YXJpYWJsZSBkZWNsYXJhdGlvblxuJG5nLXNlbGVjdC1kYXJrLWJnLWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xuJG5nLXNlbGVjdC1kcm9wZG93bi1iZy1jb2xvcjogJHRoZW1lLWRhcmstY2FyZC1iZztcbiRuZy1zZWxlY3QtZGFyay1tdXRlZC1jb2xvcjogJHRoZW1lLWRhcmstdGV4dC1tdXRlZC1jb2xvcjtcbiRuZy1zZWxlY3QtZGFyay1ib3JkZXItY29sb3I6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcbiRuZy1zZWxlY3QtZGFyay1jb2xvcjogJHRoZW1lLWRhcmstYm9keS1jb2xvcjtcbiRuZy1zZWxlY3QtZGFyay1pbnB1dC1iZy1jb2xvcjogJHRoZW1lLWRhcmstaW5wdXQtYmc7XG5cbi8vIG5nLXNlbGVjdFxuLm5nLXNlbGVjdCB7XG4gICYubmctc2VsZWN0LWZvY3VzZWQge1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogJGlucHV0LWZvY3VzLWJveC1zaGFkb3c7XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogJGJvZHktY29sb3IgIWltcG9ydGFudDtcbiAgICAgIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICRib2R5LWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5lcnJvciB7XG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkZGFuZ2VyICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJi5uZy1zZWxlY3QtbXVsdGlwbGUge1xuICAgIC5uZy12YWx1ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5uZy12YWx1ZS1pY29uIHtcbiAgICAgICAgJi5yaWdodCB7XG4gICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmxlZnQge1xuICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubmctdmFsdWUtaWNvbiB7XG4gICAgICAgICYubGVmdCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYucmlnaHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICB0b3A6IDhweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYubmctc2VsZWN0LXNpemUtbGcge1xuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuXG4gICAgICAubmctdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG5cbiAgICAgICAgLm5nLXZhbHVlLWljb24ge1xuICAgICAgICAgICYubGVmdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYucmlnaHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5nLWNsZWFyLXdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLm5nLXNlbGVjdC1zaXplLXNtIHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBtaW4taGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG5cbiAgICAgIC5uZy12YWx1ZSB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5uZy12YWx1ZS1pY29uIHtcbiAgICAgICAgICAmLmxlZnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYucmlnaHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uZy1vcHRpb24ge1xuICAgICYubmctb3B0aW9uLXNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG5cbiAgICAgICYubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLm5nLW9wdGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5uZy1vcHRpb24tbWFya2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHByaW1hcnksIDAuMTIpICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLm5nLW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogJHRleHQtbXV0ZWQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubmctYXJyb3cge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFhQkFNQUFBQmJaRkg5QUFBQUcxQk1WRVVBQUFDUmtaR1JrWkdTa3BLUmtaR1NrcEtTa3BLUmtaR1JrWkhMc28rOUFBQUFDSFJTVGxNQSsxSm9XbzB2TEZRRG1ta0FBQUJsU1VSQlZCalRZNkFMU0FDVGJCQU9hek9Zc2dnQVV4RWRCa0NTdWFNVnhHR1g2QkFCVW80ZGpRVWdybUpIaHdGUXFrTUlySkpKb3FPWndhS2pVUUhJaGtnNmc2UWdnRVdpUTdDajBRSElna3BDcGFBNndicmdraUFwaEtTZ0FySlRYUmhvQmdCOUdSUHN3eXZCcUFBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEycHggMTJweCwgMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAwLjhyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5uZy1zZWxlY3Qtb3BlbmVkID4gLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93IHtcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5nLWNsZWFyLXdyYXBwZXIge1xuICAgIGhlaWdodDogMThweDtcbiAgfVxufVxuXG4vLyBkYXJrIGxheW91dCBzdHlsZVxuLmRhcmstbGF5b3V0IHtcbiAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRuZy1zZWxlY3QtZGFyay1pbnB1dC1iZy1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRuZy1zZWxlY3QtZGFyay1ib3JkZXItY29sb3I7XG4gICAgY29sb3I6ICRuZy1zZWxlY3QtZGFyay1tdXRlZC1jb2xvcjtcblxuICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJG5nLXNlbGVjdC1kYXJrLW11dGVkLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm5nLXNlbGVjdCB7XG4gICAgJi5uZy1zZWxlY3QtbXVsdGlwbGUge1xuICAgICAgLm5nLXZhbHVlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5nLWRyb3Bkb3duLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5nLXNlbGVjdC1kYXJrLWJnLWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogJG5nLXNlbGVjdC1kYXJrLWJvcmRlci1jb2xvcjtcbiAgfVxuXG4gIC5uZy1kcm9wZG93bi1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRuZy1zZWxlY3QtZGFyay1iZy1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRuZy1zZWxlY3QtZGFyay1ib3JkZXItY29sb3I7XG4gIH1cblxuICAubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5nLXNlbGVjdC1kYXJrLWJnLWNvbG9yO1xuICB9XG5cbiAgLm5nLW9wdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5nLXNlbGVjdC1kcm9wZG93bi1iZy1jb2xvciAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkbmctc2VsZWN0LWRhcmstY29sb3IgIWltcG9ydGFudDtcblxuICAgICYubmctb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiAkbmctc2VsZWN0LWRhcmstbXV0ZWQtY29sb3IgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICBuZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbmctc2VsZWN0LWRhcmstYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5nLXNlbGVjdC1kYXJrLWJnLWNvbG9yICFpbXBvcnRhbnQ7XG5cbiAgICAgIC5uZy1vcHRncm91cCB7XG4gICAgICAgIGNvbG9yOiAkbmctc2VsZWN0LWRhcmstbXV0ZWQtY29sb3IgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLWRhcmsuc2Nzc1xyXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBkYXJrIHRoZW1lIHZhcmlhYmxlc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxyXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXHJcbi8vICBUSVA6XHJcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvdmFyaWFibGVzL192YXJpYWJsZXMtY29tcG9uZW50cy5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbXBvbmVudHMgdmFyaWFibGVzLlxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vL0JvZHlcclxuLy8kdGhlbWUtZGFyay1ib2R5LWJnOiAjMTYxZDMxICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib2R5LWJnOiAjODA5ZGFiICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib2R5LWNvbG9yOiAjYjRiN2JkICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib3JkZXItY29sb3I6ICMzYjQyNTMgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjogIzQ0NDA1ZSAhZGVmYXVsdDtcclxuXHJcbi8vVHlwb2dyYXBoeVxyXG4kdGhlbWUtZGFyay1oZWFkaW5ncy1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstbGFiZWwtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRleHQtbXV0ZWQtY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XHJcblxyXG4vL0NhcmRcclxuJHRoZW1lLWRhcmstY2FyZC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuLy8kdGhlbWUtZGFyay1jYXJkLWJnOiAjODA5ZGFiICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjQpO1xyXG5cclxuLy9JbnB1dFxyXG4kdGhlbWUtZGFyay1pbnB1dC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWJvcmRlci1jb2xvcjogIzQwNDY1NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYmc6ICMyNDIzM2EgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcclxuXHJcbi8vIFN3aXRjaFxyXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XHJcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZy1kaXNhYmxlZDogIzFiMjMzNztcclxuXHJcbi8vVGFibGVcclxuJHRoZW1lLWRhcmstdGFibGUtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLWhlYWRlci1iZzogIzM0M2Q1NSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1ob3Zlci1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtc3RyaXBlZC1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1kYXJrLW1vZGFsLWhlYWRlci1iZzogIzE2MWQzMSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstcGFnaW5hdGlvbi1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXdpZGdldC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnO1xyXG4vLyBCb290c3RyYXAgaW5jbHVkZXNcclxuQGltcG9ydCAnLi4vLi4vLi4vY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xyXG5cclxuLmZsYXRwaWNrci1jYWxlbmRhciB7XHJcbiAgLmZsYXRwaWNrci1kYXkge1xyXG4gICAgY29sb3I6ICRib2R5LWNvbG9yO1xyXG5cclxuICAgICYudG9kYXkge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5zZWxlY3RlZCxcclxuICAgICYuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxuXHJcbiAgICAmLmluUmFuZ2UsXHJcbiAgICAmLmluUmFuZ2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRjb2xvcjogJHByaW1hcnksICRhbW91bnQ6IDMwJSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkY29sb3I6ICRwcmltYXJ5LCAkYW1vdW50OiAzMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAtNXB4IDAgMCBsaWdodGVuKCRjb2xvcjogJHByaW1hcnksICRhbW91bnQ6IDMwJSksIDVweCAwIDAgbGlnaHRlbigkY29sb3I6ICRwcmltYXJ5LCAkYW1vdW50OiAzMCUpO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhcnRSYW5nZSxcclxuICAgICYuZW5kUmFuZ2UsXHJcbiAgICAmLnN0YXJ0UmFuZ2U6aG92ZXIsXHJcbiAgICAmLmVuZFJhbmdlOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zZWxlY3RlZC5zdGFydFJhbmdlICsgLmVuZFJhbmdlOm5vdCg6bnRoLWNoaWxkKDduICsgMSkpLFxyXG4gICAgJi5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2U6bm90KDpudGgtY2hpbGQoN24gKyAxKSksXHJcbiAgICAmLmVuZFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2U6bm90KDpudGgtY2hpbGQoN24gKyAxKSkge1xyXG4gICAgICBib3gtc2hhZG93OiAtMTBweCAwIDAgJHByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5mbGF0cGlja3ItZGlzYWJsZWQsXHJcbiAgICAmLnByZXZNb250aERheSxcclxuICAgICYubmV4dE1vbnRoRGF5IHtcclxuICAgICAgY29sb3I6ICRncmF5LTMwMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogJGdyYXktNTA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyLFxyXG4gICY6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZmxhdHBpY2tyLW1vbnRocyB7XHJcbiAgICAuZmxhdHBpY2tyLXByZXYtbW9udGgsXHJcbiAgICAuZmxhdHBpY2tyLW5leHQtbW9udGgge1xyXG4gICAgICB0b3A6IC01cHg7XHJcblxyXG4gICAgICAmOmhvdmVyIGksXHJcbiAgICAgICY6aG92ZXIgc3ZnIHtcclxuICAgICAgICBmaWxsOiAkcHJpbWFyeTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHNwYW4uY3VyLW1vbnRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG5cclxuICAmLm9wZW4ge1xyXG4gICAgei1pbmRleDogMTA1MTtcclxuICB9XHJcblxyXG4gICYuaGFzVGltZS5vcGVuIHtcclxuICAgIC5mbGF0cGlja3ItdGltZSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRpbWUgcGlja2VyIGhvdmVyICYgZm9jdXMgYmcgY29sb3JcclxuLmZsYXRwaWNrci10aW1lIGlucHV0OmhvdmVyLFxyXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3ZlcixcclxuLmZsYXRwaWNrci10aW1lIGlucHV0OmZvY3VzLFxyXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG59XHJcblxyXG4vL0RhcmsgbGF5b3V0XHJcbi5kYXJrLWxheW91dCB7XHJcbiAgLmZsYXRwaWNrci1jYWxlbmRhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAuZmxhdHBpY2tyLW1vbnRocyB7XHJcbiAgICAgIGksXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgZmlsbDogJHRoZW1lLWRhcmstYm9keS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mbGF0cGlja3ItbW9udGgge1xyXG4gICAgICBjb2xvcjogJHRoZW1lLWRhcmstYm9keS1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla3Mge1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMCAwICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmxhdHBpY2tyLXdlZWtkYXkge1xyXG4gICAgICBjb2xvcjogJHRoZW1lLWRhcmstYm9keS1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmxhdHBpY2tyLWRheSB7XHJcbiAgICAgICYsXHJcbiAgICAgICYudG9kYXk6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnByZXZNb250aERheSxcclxuICAgICAgJi5uZXh0TW9udGhEYXksXHJcbiAgICAgICYuZmxhdHBpY2tyLWRpc2FibGVkIHtcclxuICAgICAgICBjb2xvcjogJGdyYXktNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaW5SYW5nZSxcclxuICAgICAgJi5pblJhbmdlOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtZGFyay1jYXJkLWJnO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLWRhcmstY2FyZC1iZztcclxuICAgICAgICBib3gtc2hhZG93OiAtNXB4IDAgMCAkdGhlbWUtZGFyay1jYXJkLWJnLCA1cHggMCAwICR0aGVtZS1kYXJrLWNhcmQtYmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXI6bm90KC5zZWxlY3RlZCk6bm90KC50b2RheSk6bm90KC5zdGFydFJhbmdlKTpub3QoLmVuZFJhbmdlKSB7XHJcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtZGFyay1jYXJkLWJnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZsYXRwaWNrci1kYXlzIC5mbGF0cGlja3ItZGF5IHtcclxuICAgICAgJjpob3Zlcjpub3QoLnNlbGVjdGVkKTpub3QoLnRvZGF5KTpub3QoLnN0YXJ0UmFuZ2UpOm5vdCguZW5kUmFuZ2UpLFxyXG4gICAgICAmOmZvY3VzOm5vdCguc2VsZWN0ZWQpOm5vdCgudG9kYXkpOm5vdCguc3RhcnRSYW5nZSk6bm90KC5lbmRSYW5nZSkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1kYXJrLWNhcmQtYmc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmxhdHBpY2tyLXRpbWUge1xyXG4gICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktYmcgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIC5udW1JbnB1dCxcclxuICAgICAgLmZsYXRwaWNrci1hbS1wbSB7XHJcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWRhcmstYm9keS1iZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hcnJvd1VwOmFmdGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXJyb3dEb3duOmFmdGVyIHtcclxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBUaW1lIHBpY2tlciBob3ZlciAmIGZvY3VzIGJnIGNvbG9yXHJcbiAgLmZsYXRwaWNrci10aW1lIGlucHV0OmhvdmVyLFxyXG4gIC5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtOmhvdmVyLFxyXG4gIC5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyxcclxuICAuZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gPyBBZGRlZCBiZyBjb2xvciBmb3IgZmxhdHBpY2tyIGlucHV0IG9ubHkgYXMgaXQgaGFzIGRlZmF1bHQgcmVhZG9ubHkgYXR0cmlidXRlXHJcbi5mbGF0cGlja3ItaW5wdXRbcmVhZG9ubHldLFxyXG4uZmxhdHBpY2tyLWlucHV0IH4gLmZvcm0tY29udHJvbFtyZWFkb25seV0sXHJcbi5mbGF0cGlja3ItaHVtYW4tZnJpZW5kbHlbcmVhZG9ubHldIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsYXRwaWNrci13ZWVrZGF5cyB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGgge1xyXG4gIC5mbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHMge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRocyxcclxuICAubnVtSW5wdXRXcmFwcGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgPyBUSVA6ICBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBmaWxlIGZvciBvdmVycmlkaW5nIGJvb3RzdHJhcCB2YXJpYWJsZXMuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEJvb3RzdHJhcCB2YXJpYWJsZXNcbi8vJHByaW1hcnk6ICM0MTg2ZTA7XG4kcHJpbWFyeTogIzkwMTAyMztcbiRzZWNvbmRhcnk6ICM4MDlkYWI7XG5cbiJdfQ== */"], encapsulation: 2 });
    return AccountSettingsComponent;
}());



/***/ }),

/***/ 60559:
/*!*********************************************************************************!*\
  !*** ./src/app/main/projets/users/account-settings/account-settings.service.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsService": function() { return /* binding */ AccountSettingsService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _sr_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sr-manager.service */ 14471);



var AccountSettingsService = /** @class */ (function () {
    function AccountSettingsService(srManagerService) {
        this.srManagerService = srManagerService;
    }
    AccountSettingsService.prototype.updateInfoUser = function (updateInfoUserDto) {
        return this.srManagerService.postRessource(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authCmdHost + '/updateInfosUser', updateInfoUserDto);
    };
    AccountSettingsService.prototype.updatePwdUser = function (updatePwdUserRequestDTO) {
        return this.srManagerService.postRessource(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authCmdHost + '/updatePwdUser', updatePwdUserRequestDTO);
    };
    AccountSettingsService.ɵfac = function AccountSettingsService_Factory(t) { return new (t || AccountSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_sr_manager_service__WEBPACK_IMPORTED_MODULE_1__.SrManagerService)); };
    AccountSettingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountSettingsService, factory: AccountSettingsService.ɵfac, providedIn: 'root' });
    return AccountSettingsService;
}());



/***/ }),

/***/ 2764:
/*!*********************************************************!*\
  !*** ./src/app/main/projets/users/role-list.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleListService": function() { return /* binding */ RoleListService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _sr_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sr-manager.service */ 14471);




var RoleListService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function RoleListService(srManagerService) {
        this.srManagerService = srManagerService;
        // Set the defaults
        this.onSettingsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.onRolessChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    RoleListService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([_this.getAppRoles()]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get rows
     */
    /*getDataTableRows(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/account-settings-data').subscribe((response: any) => {
                this.rows = response;
                this.onSettingsChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }*/
    RoleListService.prototype.getAppRoles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.srManagerService.getResources(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authQueryHost + '/appRoles').subscribe(function (response) {
                _this.appRoles = response;
                _this.onRolessChanged.next(_this.appRoles);
                resolve(_this.appRoles);
            }, reject);
        });
    };
    RoleListService.prototype.createRole = function (appRole) {
        return this.srManagerService.postRessource(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authCmdHost + '/createRole', appRole);
    };
    RoleListService.ɵfac = function RoleListService_Factory(t) { return new (t || RoleListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_sr_manager_service__WEBPACK_IMPORTED_MODULE_1__.SrManagerService)); };
    RoleListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoleListService, factory: RoleListService.ɵfac, providedIn: 'root' });
    return RoleListService;
}());



/***/ }),

/***/ 92403:
/*!*******************************************************************!*\
  !*** ./src/app/main/projets/users/user-add/user-add.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAddComponent": function() { return /* binding */ UserAddComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _authentication_models_app_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../authentication/models/app-user */ 26463);
/* harmony import */ var _authentication_models_app_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/models/app-role */ 71233);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _authentication_models_type_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../authentication/models/type-role */ 57904);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _authentication_models_create_userDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/models/create-userDTO */ 58709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _role_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../role-list.service */ 2764);
/* harmony import */ var _user_add_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-add.service */ 46798);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../authentication/auth.service */ 7918);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);




















function UserAddComponent_ng_template_13_span_23_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Le Pr\u00E9nom est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserAddComponent_ng_template_13_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserAddComponent_ng_template_13_span_23_small_1_Template, 2, 0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r6.errors.required);
} }
function UserAddComponent_ng_template_13_span_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Le Nom est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserAddComponent_ng_template_13_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserAddComponent_ng_template_13_span_30_small_1_Template, 2, 0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r8.errors.required);
} }
function UserAddComponent_ng_template_13_span_37_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Le Nom d'utilisateur est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserAddComponent_ng_template_13_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserAddComponent_ng_template_13_span_37_small_1_Template, 2, 0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r10.errors.required);
} }
function UserAddComponent_ng_template_13_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " L'Email doit etre valide! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserAddComponent_ng_template_13_div_45_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserAddComponent_ng_template_13_div_45_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](6); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](16); ctx_r22.onAddRole(_r2); _r19.blur(); return _r19.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Ajouter un Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserAddComponent_ng_template_13_div_45_span_8_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Vous devez choisir au moins un role! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserAddComponent_ng_template_13_div_45_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserAddComponent_ng_template_13_div_45_span_8_small_1_Template, 2, 0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r21.userCreated.appRoles && ctx_r21.userCreated.appRoles.length == 0);
} }
var _c0 = function () { return { standalone: true }; };
function UserAddComponent_ng_template_13_div_45_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "fieldset", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "LES ROLES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ng-select", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function UserAddComponent_ng_template_13_div_45_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r25.userCreated.appRoles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, UserAddComponent_ng_template_13_div_45_ng_template_7_Template, 4, 0, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, UserAddComponent_ng_template_13_div_45_span_8_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](15);
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", ctx_r14.userCreated.appRoles && ctx_r14.userCreated.appRoles.length == 0 && _r5.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r14.roles)("multiple", true)("closeOnSelect", true)("searchable", true)("ngModel", ctx_r14.userCreated.appRoles)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r5.submitted && ctx_r14.userCreated.appRoles && ctx_r14.userCreated.appRoles.length == 0);
} }
var _c1 = function (a1, a2) { return { "btn btn-sm mb-75 mr-75": true, "btn-primary": a1, "btn-secondary": a2 }; };
var _c2 = function (a1, a2) { return { "btn mr-1 mt-1": true, "btn-primary": a1, "btn-secondary": a2 }; };
var _c3 = function () { return ["/projets/users/list"]; };
function UserAddComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserAddComponent_ng_template_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9); return _r4.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function UserAddComponent_ng_template_13_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r29.uploadImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Images: JPG, GIF or PNG. Taille max 800kB");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "form", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function UserAddComponent_ng_template_13_Template_form_ngSubmit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](15); return _r5.form.valid; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Pr\u00E9nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function UserAddComponent_ng_template_13_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r31.userCreated.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, UserAddComponent_ng_template_13_span_23_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function UserAddComponent_ng_template_13_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r32.userCreated.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, UserAddComponent_ng_template_13_span_30_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "Nom d'utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function UserAddComponent_ng_template_13_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r33.userCreated.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, UserAddComponent_ng_template_13_span_37_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function UserAddComponent_ng_template_13_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r34.userCreated.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, UserAddComponent_ng_template_13_span_44_Template, 3, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, UserAddComponent_ng_template_13_div_45_Template, 9, 10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserAddComponent_ng_template_13_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r35.createUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](15);
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](22);
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](29);
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](36);
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](43);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.avatarImage, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.disableUploadImage)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](23, _c1, !ctx_r1.disableUploadImage, ctx_r1.disableUploadImage));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r6.valid && _r6.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r1.userCreated.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r8.valid && _r8.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r1.userCreated.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r8.valid && _r8.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r10.valid && _r10.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r1.userCreated.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r10.valid && _r10.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r12.valid && _r12.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r1.userCreated.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r12.valid && _r12.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.authService.isAdmin(ctx_r1.userCreated));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !_r5.form.valid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](26, _c2, _r5.form.valid, !_r5.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](29, _c3));
} }
function UserAddComponent_ng_template_15_span_11_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Le nom du role est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserAddComponent_ng_template_15_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserAddComponent_ng_template_15_span_11_small_1_Template, 2, 0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r37.errors && _r37.errors.required);
} }
function UserAddComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Ajouter un role utilisateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Intitule du Role : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "form", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function UserAddComponent_ng_template_15_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42); var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7); return _r37.form.valid; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "input", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function UserAddComponent_ng_template_15_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42); var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r43.roleName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, UserAddComponent_ng_template_15_span_11_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserAddComponent_ng_template_15_Template_button_click_13_listener() { var modal_r36 = ctx.$implicit; return modal_r36.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserAddComponent_ng_template_15_Template_button_click_15_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42); var modal_r36 = restoredCtx.$implicit; var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r45.onSaveNewRole(modal_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10);
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("error", !_r38.valid && _r37.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r3.roleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r37.submitted && _r37.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMapInterpolate1"]("btn ", ctx_r3.roleName ? "btn-success" : "btn-secondary", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r3.roleName);
} }
var UserAddComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param _accountSettingsService
     * @param _roleListService
     * @param userEditService
     * @param _router
     * @param modalService
     * @param authService
     */
    function UserAddComponent(_roleListService, userAddService, _router, modalService, authService) {
        var _this = this;
        this._roleListService = _roleListService;
        this.userAddService = userAddService;
        this._router = _router;
        this.modalService = modalService;
        this.authService = authService;
        //public rolesSelected: AppRole[] = [];
        this.avatarImage = 'assets/images/portrait/small/unknown.png';
        this.disableUploadImage = true;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.userCreated = new _authentication_models_app_user__WEBPACK_IMPORTED_MODULE_0__.AppUser();
        this.currentUserSubscription = this.authService.currentUserSubject.subscribe(function (data) {
            _this.accountUser = data;
        });
        authService.loadCurrentUser();
    }
    /**
     * On init
     */
    UserAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._roleListService.onRolessChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._unsubscribeAll)).subscribe(function (response) {
            _this.roles = response;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Paramètres du compte utilisateur',
            actionButton: false,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Paramètres du compte',
                        isLink: false
                    }
                ]
            }
        };
    };
    /**
     * On destroy
     */
    UserAddComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    /**
     * Upload Image
     *
     * @param event
     */
    UserAddComponent.prototype.uploadImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            console.log(event.target.files[0]);
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.avatarImage = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    UserAddComponent.prototype.onAddRole = function (modal) {
        this.roleName = "";
        this.modalService.open(modal, {
            centered: true,
            backdrop: false,
            size: 'sm'
        });
    };
    UserAddComponent.prototype.onSaveNewRole = function (modal) {
        var _this = this;
        var appRole = new _authentication_models_app_role__WEBPACK_IMPORTED_MODULE_1__.AppRole(this.roleName, _authentication_models_type_role__WEBPACK_IMPORTED_MODULE_2__.TypeRole.ADMINISTARTION);
        this._roleListService.createRole(appRole).subscribe(function (data) {
            _this._roleListService.getAppRoles();
            modal.close('Accept click');
        });
    };
    UserAddComponent.prototype.createUser = function () {
        var _this = this;
        var roles = [];
        this.userCreated.appRoles.forEach(function (appRole) {
            roles.push(appRole.roleName);
        });
        /*
        username: string,
                    password: string,
                    firstName: string,
                    lastName: string,
                    email: string,
                    avatar: string,
                    roles: string[]
         */
        var createUserDTO = new _authentication_models_create_userDTO__WEBPACK_IMPORTED_MODULE_4__.CreateUserDTO(this.userCreated.username, this.userCreated.username + '@srmanager', this.userCreated.firstName, this.userCreated.lastName, this.userCreated.email, 'unknown.png', roles);
        this.userAddService.createUser(createUserDTO).subscribe(function (data) {
            _this.showSwal('basic', 'success', 'Good job!', 'Utilisateur crée avec succés', 'btn btn-primary');
        });
    };
    UserAddComponent.prototype.showSwal = function (type, icone, title, message, btn) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            icon: icone,
            title: title,
            titleText: message,
            customClass: {
                confirmButton: btn,
            }
        });
    };
    UserAddComponent.ɵfac = function UserAddComponent_Factory(t) { return new (t || UserAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_role_list_service__WEBPACK_IMPORTED_MODULE_5__.RoleListService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_user_add_service__WEBPACK_IMPORTED_MODULE_6__.UserAddService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService)); };
    UserAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: UserAddComponent, selectors: [["app-user-add"]], decls: 17, vars: 2, consts: [[1, "content-wrapper", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "page-account-settings"], [1, "row", "nav-vertical", "nav-vertical-over", "d-flex"], [1, "col-md-3", "mb-2", "mb-md-0"], ["ngbNav", "", 1, "nav", "nav-pills", "flex-column", "nav-left"], ["navVertical", "ngbNav"], ["ngbNavItem", "", 1, "nav-item"], ["ngbNavLink", "", "id", "account-pill-general", "data-toggle", "pill", "href", "#account-vertical-general", "aria-expanded", "true", 1, "nav-link", "d-flex", "py-75"], ["data-feather", "user", 1, "font-medium-3", "mr-1"], [1, "font-weight-bold"], ["ngbNavContent", ""], [1, "col-12", "col-md-9", 3, "ngbNavOutlet"], ["modalNewRole", ""], [1, "card"], [1, "card-body"], [1, "media"], ["href", "javascript:void(0);", 1, "mr-25"], ["alt", "profile image", "height", "76", "width", "80", 1, "rounded", "mr-50", 3, "src"], [1, "media-body", "mt-75", "ml-1"], ["for", "account-upload", "rippleEffect", "", 1, "btn", "btn-sm", "btn-primary", "mb-75", "mr-75", 3, "disabled", "ngClass", "click"], ["type", "file", "id", "account-upload", "hidden", "", "accept", "image/*", 3, "change"], ["file", ""], ["disabled", "", "rippleEffect", "", 1, "btn", "btn-sm", "btn-outline-secondary", "mb-75"], [1, "form-horizontal", 3, "ngSubmit"], ["TDInfoGeneraleForm", "ngForm"], [1, "row"], [1, "col-sm-6", "col-md-6"], [1, "form-group"], ["for", "TDFirstName", 1, "form-control-label"], ["required", "", "id", "TDFirstName", "name", "TDFirstName", "type", "text", "placeholder", "Pr\u00E9nom", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDFirstNameRef", "ngModel"], ["class", "invalid-form", 4, "ngIf"], ["for", "TDLastName", 1, "form-control-label"], ["required", "", "id", "TDLastName", "name", "TDLastName", "type", "text", "placeholder", "Pr\u00E9nom", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDLastNameRef", "ngModel"], ["for", "TDUserName", 1, "form-control-label"], ["required", "", "id", "TDUserName", "name", "TDUserName", "type", "text", "placeholder", "Nom D'utilisateur", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDUserNameRef", "ngModel"], ["for", "TDMultiRuleEmail", 1, "form-control-label"], ["required", "", "email", "", "id", "TDMultiRuleEmail", "name", "TDMultiRuleEmail", "type", "text", "placeholder", "Votre Email", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDMultiRuleEmailRef", "ngModel"], ["class", "col-sm-6 col-md-6", 4, "ngIf"], ["type", "submit", "rippleEffect", "", 3, "disabled", "ngClass", "click"], ["type", "reset", "rippleEffect", "", 1, "btn", "btn-outline-secondary", "mr-1", "mt-1", 3, "routerLink"], [1, "invalid-form"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-text", "text-danger"], ["bindLabel", "roleName", "placeholder", "S\u00E9l\u00E9ctionner au moins un Roles", 3, "items", "multiple", "closeOnSelect", "searchable", "ngModel", "ngModelOptions", "ngModelChange"], ["TDSubContractorRef", "ngModel", "select", ""], ["ng-header-tmp", ""], [1, "add-new-customer", "btn", "btn-flat-success", "cursor-pointer", "rounded-0", "text-left", "p-50", "w-100", 3, "click"], ["data-feather", "plus"], [1, "align-middle", "ml-25"], [1, "modal-header"], ["id", "idmodalNewCity", 1, "modal-title", "text-bold", "text-primary"], ["tabindex", "0", "ngbAutofocus", "", 1, "modal-body"], [1, "text-bold", "text-success"], [3, "ngSubmit"], ["newRoleForm", "ngForm"], ["id", "roleName", "required", "", "name", "roleName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["txtRoleName", "ngModel"], [1, "modal-footer"], ["type", "button", "rippleEffect", "", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", "rippleEffect", "", 3, "disabled", "click"]], template: function UserAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-content-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ul", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "G\u00E9n\u00E9ral");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, UserAddComponent_ng_template_13_Template, 50, 30, "ng-template", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, UserAddComponent_ng_template_15_Template, 17, 8, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbNavOutlet", _r0);
    return UserAddComponent;
}());



/***/ }),

/***/ 46798:
/*!*****************************************************************!*\
  !*** ./src/app/main/projets/users/user-add/user-add.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAddService": function() { return /* binding */ UserAddService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _sr_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sr-manager.service */ 14471);




var UserAddService = /** @class */ (function () {
    function UserAddService(srManagerService) {
        this.srManagerService = srManagerService;
        this.onUserChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    }
    UserAddService.prototype.createUser = function (createUserDTO) {
        return this.srManagerService.postRessource(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authCmdHost + '/createUser', createUserDTO);
    };
    UserAddService.ɵfac = function UserAddService_Factory(t) { return new (t || UserAddService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_sr_manager_service__WEBPACK_IMPORTED_MODULE_1__.SrManagerService)); };
    UserAddService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserAddService, factory: UserAddService.ɵfac, providedIn: 'root' });
    return UserAddService;
}());



/***/ }),

/***/ 64961:
/*!*********************************************************************!*\
  !*** ./src/app/main/projets/users/user-edit/user-edit.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditComponent": function() { return /* binding */ UserEditComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _authentication_models_app_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../authentication/models/app-role */ 71233);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ 76321);
/* harmony import */ var _authentication_models_update_infos_userDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/models/update-infos-userDTO */ 62868);
/* harmony import */ var _authentication_models_update_pwd_user_requestDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../authentication/models/update-pwd-user-requestDTO */ 14122);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _authentication_models_type_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/models/type-role */ 57904);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _account_settings_account_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account-settings/account-settings.service */ 60559);
/* harmony import */ var app_main_projets_users_role_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/projets/users/role-list.service */ 2764);
/* harmony import */ var _user_edit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit.service */ 3163);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../authentication/auth.service */ 7918);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
























function UserEditComponent_ng_template_13_span_23_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Le Pr\u00E9nom est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_13_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, UserEditComponent_ng_template_13_span_23_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r7.errors.required);
} }
function UserEditComponent_ng_template_13_span_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Le Nom est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_13_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, UserEditComponent_ng_template_13_span_30_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r9.errors.required);
} }
function UserEditComponent_ng_template_13_span_37_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Le Nom d'utilisateur est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_13_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, UserEditComponent_ng_template_13_span_37_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r11.errors.required);
} }
function UserEditComponent_ng_template_13_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " L'Email doit etre valide! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_13_div_45_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserEditComponent_ng_template_13_div_45_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25); _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](6); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](17); ctx_r24.onAddRole(_r3); _r21.blur(); return _r21.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Ajouter un Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_13_div_45_span_8_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Vous devez choisir au moins un role! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_13_div_45_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, UserEditComponent_ng_template_13_div_45_span_8_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r23.userEditter.appRoles && ctx_r23.userEditter.appRoles.length == 0);
} }
var _c0 = function () { return { standalone: true }; };
function UserEditComponent_ng_template_13_div_45_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "fieldset", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "LES ROLES");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ng-select", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_13_div_45_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r27.userEditter.appRoles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, UserEditComponent_ng_template_13_div_45_ng_template_7_Template, 4, 0, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, UserEditComponent_ng_template_13_div_45_span_8_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](15);
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("error", ctx_r15.userEditter.appRoles && ctx_r15.userEditter.appRoles.length == 0 && _r6.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx_r15.roles)("multiple", true)("closeOnSelect", true)("searchable", true)("ngModel", ctx_r15.userEditter.appRoles)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r6.submitted && ctx_r15.userEditter.appRoles && ctx_r15.userEditter.appRoles.length == 0);
} }
function UserEditComponent_ng_template_13_div_46_Template(rf, ctx) { if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_13_div_46_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r29.userEditter.accountNonLocked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Compte activ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_13_div_46_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r31.userEditter.accountNonExpired = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Compte non expir\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_13_div_46_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r32.userEditter.credentialsNonExpired = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Mot de passe non expir\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](6, _c0))("ngModel", ctx_r16.userEditter.accountNonLocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](7, _c0))("ngModel", ctx_r16.userEditter.accountNonExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c0))("ngModel", ctx_r16.userEditter.credentialsNonExpired);
} }
var _c1 = function (a1, a2) { return { "btn btn-sm mb-75 mr-75": true, "btn-primary": a1, "btn-secondary": a2 }; };
var _c2 = function (a1, a2) { return { "btn mr-1 mt-1": true, "btn-primary": a1, "btn-secondary": a2 }; };
var _c3 = function () { return ["/projets/users/list"]; };
function UserEditComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserEditComponent_ng_template_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9); return _r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function UserEditComponent_ng_template_13_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r35.uploadImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Images: JPG, GIF or PNG. Taille max 800kB");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "form", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function UserEditComponent_ng_template_13_Template_form_ngSubmit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](15); return _r6.form.valid; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Pr\u00E9nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_13_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r37.userEditter.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, UserEditComponent_ng_template_13_span_23_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_13_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r38.userEditter.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, UserEditComponent_ng_template_13_span_30_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "Nom d'utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_13_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r39.userEditter.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, UserEditComponent_ng_template_13_span_37_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_13_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r40.userEditter.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, UserEditComponent_ng_template_13_span_44_Template, 3, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, UserEditComponent_ng_template_13_div_45_Template, 9, 10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, UserEditComponent_ng_template_13_div_46_Template, 16, 9, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserEditComponent_ng_template_13_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r41.updateInfosGenerales(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserEditComponent_ng_template_13_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r42.onInitPwd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, " Initialiser le mot de passe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](15);
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](22);
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](29);
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](36);
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](43);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.avatarImage, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.disableUploadImage)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](24, _c1, !ctx_r1.disableUploadImage, ctx_r1.disableUploadImage));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("error", !_r7.valid && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r1.userEditter.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("error", !_r9.valid && _r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r1.userEditter.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r9.valid && _r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("error", !_r11.valid && _r11.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r1.userEditter.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r11.valid && _r11.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("error", !_r13.valid && _r13.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r1.userEditter.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r13.valid && _r13.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.authService.isAdmin(ctx_r1.userEditter));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.authService.isAdmin(ctx_r1.userEditter));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r6.form.valid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](27, _c2, _r6.form.valid, !_r6.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](30, _c3));
} }
function UserEditComponent_li_14_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Afficher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_li_14_ng_template_5_Template_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r45); var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r44.selectedOption = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "100");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, " lignes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, " Recherche: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_li_14_ng_template_5_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r45); var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r46.searchValue = $event; })("keyup", function UserEditComponent_li_14_ng_template_5_Template_input_keyup_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r45); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r47.filterUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "ngx-datatable", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "ngx-datatable-column", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "ngx-datatable-column", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "ngx-datatable-column", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "ngx-datatable-column", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "ngx-datatable-column", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "ngx-datatable-column", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r43.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r43.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx_r43.srLogs)("rowHeight", 50)("limit", ctx_r43.selectedOption)("columnMode", ctx_r43.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("scrollbarH", true);
} }
function UserEditComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Journal");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, UserEditComponent_li_14_ng_template_5_Template, 29, 9, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_16_span_11_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Le nom du role est obligatoire! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_16_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, UserEditComponent_ng_template_16_span_11_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r49.errors && _r49.errors.required);
} }
function UserEditComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Ajouter un role utilisateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h5", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Intitule du Role : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "form", 90, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function UserEditComponent_ng_template_16_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7); return _r49.form.valid; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "input", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_16_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r55.roleName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, UserEditComponent_ng_template_16_span_11_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserEditComponent_ng_template_16_Template_button_click_13_listener() { var modal_r48 = ctx.$implicit; return modal_r48.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserEditComponent_ng_template_16_Template_button_click_15_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); var modal_r48 = restoredCtx.$implicit; var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r57.onSaveNewRole(modal_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](10);
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("error", !_r50.valid && _r49.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r4.roleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r49.submitted && _r49.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("btn ", ctx_r4.roleName ? "btn-success" : "btn-secondary", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r4.roleName);
} }
var URL = 'Users/Mac/Downloads/';
var UserEditComponent = /** @class */ (function () {
    //public rolesSelected: AppRole[] = [];
    /**
     * Constructor
     *
     * @param _accountSettingsService
     * @param _roleListService
     * @param userEditService
     * @param _router
     * @param modalService
     * @param authService
     */
    function UserEditComponent(_accountSettingsService, _roleListService, userEditService, modalService, authService) {
        var _this = this;
        this._accountSettingsService = _accountSettingsService;
        this._roleListService = _roleListService;
        this.userEditService = userEditService;
        this.modalService = modalService;
        this.authService = authService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__.FileUploader({
            url: URL,
            isHTML5: true
        });
        this.birthDateOptions = {
            altInput: true
        };
        this.passwordTextTypeOld = false;
        this.passwordTextTypeNew = false;
        this.passwordTextTypeRetype = false;
        this.disableUploadImage = true;
        this.selectedOption = 10;
        this.searchValue = '';
        this.tempData = [];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__.ColumnMode;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
        this.currentUserSubscription = this.authService.currentUserSubject.subscribe(function (data) {
            _this.accountUser = data;
            /* this.accountUser?.roles.forEach(role => {
                 let appRole: AppRole = new AppRole(role,null);
                 this.rolesSelected?.push(appRole)
             })*/
        });
        authService.loadCurrentUser();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle Password Text Type Old
     */
    UserEditComponent.prototype.togglePasswordTextTypeOld = function () {
        this.passwordTextTypeOld = !this.passwordTextTypeOld;
    };
    /**
     * Toggle Password Text Type New
     */
    UserEditComponent.prototype.togglePasswordTextTypeNew = function () {
        this.passwordTextTypeNew = !this.passwordTextTypeNew;
    };
    /**
     * Toggle Password Text Type Retype
     */
    UserEditComponent.prototype.togglePasswordTextTypeRetype = function () {
        this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
    };
    /**
     * Upload Image
     *
     * @param event
     */
    UserEditComponent.prototype.uploadImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            console.log(event.target.files[0]);
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.avatarImage = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.logListService.onLogListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(
             response => {
                 this.srLogs = response;
                 this.tempData = response;
 
             });
 */
        this._roleListService.onRolessChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeAll)).subscribe(function (response) {
            _this.roles = response;
        });
        this.userEditService.onUserChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeAll)).subscribe(function (response) {
            var _a;
            _this.userEditter = response;
            _this.avatarImage = 'assets/images/portrait/small/' + ((_a = _this.userEditter) === null || _a === void 0 ? void 0 : _a.avatar);
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Paramètres du compte utilisateur',
            actionButton: false,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Paramètres du compte',
                        isLink: false
                    }
                ]
            }
        };
    };
    /**
     * On destroy
     */
    UserEditComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    /**
     * filterUpdate
     *
     * @param event
     */
    UserEditComponent.prototype.filterUpdate = function (event) {
        var val = event.target.value.toLowerCase();
        // Filter Our Data
        var temp = this.tempData.filter(function (d) {
            var _a, _b, _c;
            return ((_a = d.firstName) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(val)) !== -1
                || ((_b = d.lastName) === null || _b === void 0 ? void 0 : _b.toLowerCase().indexOf(val)) !== -1 || !val
                || ((_c = d.fullName) === null || _c === void 0 ? void 0 : _c.toLowerCase().indexOf(val)) !== -1 || !val;
        });
        // Update The Rows
        this.srLogs = temp;
        // Whenever The Filter Changes, Always Go Back To The First Page
        this.table.offset = 0;
    };
    UserEditComponent.prototype.onAddRole = function (modal) {
        this.roleName = "";
        this.modalService.open(modal, {
            centered: true,
            backdrop: false,
            size: 'sm'
        });
    };
    UserEditComponent.prototype.onSaveNewRole = function (modal) {
        var _this = this;
        var appRole = new _authentication_models_app_role__WEBPACK_IMPORTED_MODULE_0__.AppRole(this.roleName, _authentication_models_type_role__WEBPACK_IMPORTED_MODULE_4__.TypeRole.ADMINISTARTION);
        this._roleListService.createRole(appRole).subscribe(function (data) {
            _this._roleListService.getAppRoles();
            modal.close('Accept click');
        });
    };
    UserEditComponent.prototype.updateInfosGenerales = function () {
        var _this = this;
        var roles = [];
        this.userEditter.appRoles.forEach(function (appRole) {
            roles.push(appRole.roleName);
        });
        var updateInfoUserDto = new _authentication_models_update_infos_userDTO__WEBPACK_IMPORTED_MODULE_1__.UpdateInfosUserDTO(this.userEditter.username, this.userEditter.avatar, this.userEditter.firstName, this.userEditter.lastName, this.userEditter.email, roles, this.userEditter.accountNonLocked, this.userEditter.accountNonExpired, this.userEditter.credentialsNonExpired);
        this._accountSettingsService.updateInfoUser(updateInfoUserDto).subscribe(function (data) {
            _this.showSwal('basic', 'success', 'Good job!', 'Infos utilisateur modifiées avec succés', 'btn btn-primary');
        });
    };
    UserEditComponent.prototype.updatePwd = function (tDPassWordForm) {
        var _this = this;
        console.log(tDPassWordForm.value);
        var updatePwdUserRequestDTO = new _authentication_models_update_pwd_user_requestDTO__WEBPACK_IMPORTED_MODULE_2__.UpdatePwdUserRequestDTO(this.userEditter.username, tDPassWordForm.value.txtOldPwd, tDPassWordForm.value.txtNewPwd);
        this._accountSettingsService.updatePwdUser(updatePwdUserRequestDTO).subscribe(function (data) {
            if (data['result']) {
                _this.showSwal('basic', 'success', 'Good job!', data['message'], 'btn btn-primary');
                _this.authService.logout();
            }
            else {
                _this.showSwal('basic', 'error', 'Erreur!', data['message'], 'btn btn-danger');
            }
            //this._router.navigate(['/pages/authentication/login-v2']);
        });
    };
    UserEditComponent.prototype.showSwal = function (type, icone, title, message, btn) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            icon: icone,
            title: title,
            titleText: message,
            customClass: {
                confirmButton: btn,
            }
        });
    };
    UserEditComponent.prototype.onInitPwd = function () {
        this.initPwd(this.userEditter.username, this.userEditService);
    };
    UserEditComponent.prototype.initPwd = function (username, userEditService) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: 'Etes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7367F0',
            cancelButtonColor: '#E42728',
            confirmButtonText: 'Oui, Initialiser le PWD!',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger ml-1'
            }
        }).then(function (result) {
            if (result.value) {
                var newPwd;
                userEditService.initPwd(username).subscribe(function (data) {
                    newPwd = data.message;
                    console.log("Nouveau Mot de passe est :" + newPwd);
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    icon: 'success',
                    title: 'Mot de passe initialisé!',
                    text: "Veuillez consulter votre email professionnel ...@rouandi.ma",
                    customClass: {
                        confirmButton: 'btn btn-success',
                    }
                });
            }
        });
    };
    UserEditComponent.ɵfac = function UserEditComponent_Factory(t) { return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_account_settings_account_settings_service__WEBPACK_IMPORTED_MODULE_5__.AccountSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_main_projets_users_role_list_service__WEBPACK_IMPORTED_MODULE_6__.RoleListService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_user_edit_service__WEBPACK_IMPORTED_MODULE_7__.UserEditService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService)); };
    UserEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: UserEditComponent, selectors: [["app-user-edit"]], viewQuery: function UserEditComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__.DatatableComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, decls: 18, vars: 3, consts: [[1, "content-wrapper", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "page-account-settings"], [1, "row", "nav-vertical", "nav-vertical-over", "d-flex"], [1, "col-md-2", "mb-2", "mb-md-0"], ["ngbNav", "", 1, "nav", "nav-pills", "flex-column", "nav-left"], ["navVertical", "ngbNav"], ["ngbNavItem", "", 1, "nav-item"], ["ngbNavLink", "", "id", "account-pill-general", "data-toggle", "pill", "href", "#account-vertical-general", "aria-expanded", "true", 1, "nav-link", "d-flex", "py-75"], ["data-feather", "user", 1, "font-medium-3", "mr-1"], [1, "font-weight-bold"], ["ngbNavContent", ""], ["class", "nav-item", "ngbNavItem", "", 4, "ngIf"], [1, "col-12", "col-md-10", 3, "ngbNavOutlet"], ["modalNewRole", ""], [1, "card"], [1, "card-body"], [1, "media"], ["href", "javascript:void(0);", 1, "mr-25"], ["alt", "profile image", "height", "76", "width", "80", 1, "rounded", "mr-50", 3, "src"], [1, "media-body", "mt-75", "ml-1"], ["for", "account-upload", "rippleEffect", "", 1, "btn", "btn-sm", "btn-primary", "mb-75", "mr-75", 3, "disabled", "ngClass", "click"], ["type", "file", "id", "account-upload", "hidden", "", "accept", "image/*", 3, "change"], ["file", ""], ["disabled", "", "rippleEffect", "", 1, "btn", "btn-sm", "btn-outline-secondary", "mb-75"], [1, "form-horizontal", 3, "ngSubmit"], ["TDInfoGeneraleForm", "ngForm"], [1, "row"], [1, "col-sm-6", "col-md-6"], [1, "form-group"], ["for", "TDFirstName", 1, "form-control-label"], ["required", "", "id", "TDFirstName", "name", "TDFirstName", "type", "text", "placeholder", "Pr\u00E9nom", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDFirstNameRef", "ngModel"], ["class", "invalid-form", 4, "ngIf"], ["for", "TDLastName", 1, "form-control-label"], ["required", "", "id", "TDLastName", "name", "TDLastName", "type", "text", "placeholder", "Pr\u00E9nom", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDLastNameRef", "ngModel"], ["for", "TDUserName", 1, "form-control-label"], ["disabled", "", "required", "", "id", "TDUserName", "name", "TDUserName", "type", "text", "placeholder", "Nom D'utilisateur", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDUserNameRef", "ngModel"], ["for", "TDMultiRuleEmail", 1, "form-control-label"], ["required", "", "email", "", "id", "TDMultiRuleEmail", "name", "TDMultiRuleEmail", "type", "text", "placeholder", "Votre Email", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["TDMultiRuleEmailRef", "ngModel"], ["class", "col-sm-6 col-md-6", 4, "ngIf"], ["type", "submit", "rippleEffect", "", 3, "disabled", "ngClass", "click"], ["type", "reset", "rippleEffect", "", 1, "btn", "btn-outline-secondary", "mr-1", "mt-1", 3, "routerLink"], ["type", "button", "rippleEffect", "", 1, "btn", "btn-flat-danger", "mt-1", 3, "click"], [1, "invalid-form"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-text", "text-danger"], ["bindLabel", "roleName", "placeholder", "S\u00E9l\u00E9ctionner au moins un Roles", 3, "items", "multiple", "closeOnSelect", "searchable", "ngModel", "ngModelOptions", "ngModelChange"], ["TDSubContractorRef", "ngModel", "select", ""], ["ng-header-tmp", ""], [1, "add-new-customer", "btn", "btn-flat-success", "cursor-pointer", "rounded-0", "text-left", "p-50", "w-100", 3, "click"], ["data-feather", "plus"], [1, "align-middle", "ml-25"], [1, "d-block", "mb-1"], [1, "custom-control", "custom-checkbox", "custom-control-inline"], ["type", "checkbox", "id", "email-cb", 1, "custom-control-input", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["for", "email-cb", 1, "custom-control-label"], ["type", "checkbox", "id", "message", 1, "custom-control-input", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["for", "message", 1, "custom-control-label"], ["type", "checkbox", "id", "phone", 1, "custom-control-input", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["for", "phone", 1, "custom-control-label"], ["ngbNavLink", "", "id", "account-pill-journal", "data-toggle", "pill", "href", "#account-vertical-journal", "aria-expanded", "true", 1, "nav-link", "d-flex", "py-75"], ["data-feather", "list", 1, "font-medium-3", "mr-1"], [1, "col-md-6", "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "m-1"], [1, "d-flex", "align-items-center"], [1, "form-control", "mx-25", 3, "ngModel", "ngModelChange"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "col-md-6", "col-12", "d-flex", "justify-content-start", "justify-content-md-end"], [1, "d-flex", "align-items-center", "justify-content-end", "pr-1", "pb-1", "pb-md-0"], [1, "d-flex", "align-items-center", "ml-1", "ml-md-0"], ["name", "searchValue", "type", "search", 1, "form-control", "ml-25", 3, "ngModel", "ngModelChange", "keyup"], [1, "bootstrap", "core-bootstrap", 3, "rows", "rowHeight", "limit", "columnMode", "headerHeight", "footerHeight", "scrollbarH"], ["name", "Date", "prop", "dateCreation"], ["name", "Heure", "prop", "timeCreation"], ["name", "Projet", "prop", "projetName"], ["name", "Operation", "prop", "event"], ["name", "Classe", "prop", "classeName"], ["name", "Id Object", "prop", "objectId"], [1, "modal-header"], ["id", "idmodalNewCity", 1, "modal-title", "text-bold", "text-primary"], ["tabindex", "0", "ngbAutofocus", "", 1, "modal-body"], [1, "text-bold", "text-success"], [3, "ngSubmit"], ["newRoleForm", "ngForm"], ["id", "roleName", "required", "", "name", "roleName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["txtRoleName", "ngModel"], [1, "modal-footer"], ["type", "button", "rippleEffect", "", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", "rippleEffect", "", 3, "disabled", "click"]], template: function UserEditComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-content-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "ul", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "G\u00E9n\u00E9ral");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, UserEditComponent_ng_template_13_Template, 53, 31, "ng-template", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, UserEditComponent_li_14_Template, 6, 0, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, UserEditComponent_ng_template_16_Template, 17, 8, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authService.isAdmin(ctx.accountUser));
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngbNavOutlet", _r0);
    return UserEditComponent;
}());



/***/ }),

/***/ 3163:
/*!*******************************************************************!*\
  !*** ./src/app/main/projets/users/user-edit/user-edit.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditService": function() { return /* binding */ UserEditService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _sr_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sr-manager.service */ 14471);




var UserEditService = /** @class */ (function () {
    /**
     *
     * @param srManagerService
     */
    function UserEditService(srManagerService) {
        this.srManagerService = srManagerService;
        // Set the defaults
        this.onUserChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    UserEditService.prototype.resolve = function (route, state) {
        var _this = this;
        this.id = (route.paramMap.get('id'));
        return new Promise(function (resolve, reject) {
            Promise.all([_this.getOneUseById(_this.id)]).then(function () {
                resolve();
            }, reject);
        });
    };
    UserEditService.prototype.getOneUseById = function (id) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authQueryHost + '/getOneUseById/' + id;
        return new Promise(function (resolve, reject) {
            _this.srManagerService.getResource(url).subscribe(function (response) {
                _this.onUserChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    UserEditService.prototype.initPwd = function (username) {
        return this.srManagerService.getResource(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authCmdHost + '/initPwd/' + username);
    };
    UserEditService.ɵfac = function UserEditService_Factory(t) { return new (t || UserEditService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_sr_manager_service__WEBPACK_IMPORTED_MODULE_1__.SrManagerService)); };
    UserEditService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserEditService, factory: UserEditService.ɵfac, providedIn: 'root' });
    return UserEditService;
}());



/***/ }),

/***/ 4028:
/*!***********************************************************************!*\
  !*** ./src/app/main/projets/users/users-list/users-list.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListComponent": function() { return /* binding */ UsersListComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _authentication_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../authentication/models/role */ 46295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/auth.service */ 7918);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _users_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-list.service */ 9236);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@core/services/config.service */ 52553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/pipes/initials.pipe */ 16516);



















function UsersListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Filtre de recherche");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "fieldset", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UsersListComponent_div_3_Template_ng_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r5.selectedRole = $event; })("change", function UsersListComponent_div_3_Template_ng_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r7.filterByRole($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "fieldset", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ng-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UsersListComponent_div_3_Template_ng_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.selectedPlan = $event; })("change", function UsersListComponent_div_3_Template_ng_select_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.filterByPlan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "fieldset", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ng-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UsersListComponent_div_3_Template_ng_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r10.selectedStatus = $event; })("change", function UsersListComponent_div_3_Template_ng_select_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.filterByStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r0.selectRole)("ngModel", ctx_r0.selectedRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r0.selectPlan)("ngModel", ctx_r0.selectedPlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r0.selectStatus)("ngModel", ctx_r0.selectedStatus);
} }
function UsersListComponent_ng_template_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r12.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
} }
var _c0 = function (a0, a1, a2) { return { "bg-light-success": a0, "bg-light-secondary": a1, "bg-light-warning": a2 }; };
function UsersListComponent_ng_template_31_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    var row_r12 = ctx_r18.row;
    var fullName_r13 = ctx_r18.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](4, _c0, row_r12.status == "active", row_r12.status == "inactive", row_r12.status == "pending"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, fullName_r13));
} }
function UsersListComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UsersListComponent_ng_template_31_div_1_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UsersListComponent_ng_template_31_ng_template_2_Template, 4, 8, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r12 = ctx.row;
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r12.avatar.length > 0)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("routerLink", "/projets/users/edit/", row_r12.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", row_r12.firstName, " ", row_r12.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" @", row_r12.username, " ");
} }
var _c1 = function (a0, a1, a2, a3, a4) { return { "icon-layers text-danger": a0, "icon-settings text-success": a1, "icon-check text-info": a2, "icon-edit-2 text-warning": a3, "icon-eye text-primary": a4 }; };
function UsersListComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var role_r19 = ctx.value;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction5"](2, _c1, role_r19 == ctx_r2.Role.ADMIN, role_r19 == ctx_r2.Role.CAISSIER || role_r19 == ctx_r2.Role.RESP_ST, role_r19 == ctx_r2.Role.DAF || role_r19 == ctx_r2.Role.DGA || role_r19 == ctx_r2.Role.RESP_METREE || role_r19 == ctx_r2.Role.CDG || role_r19 == ctx_r2.Role.CHEF_ZONE, role_r19 == ctx_r2.Role.COND_CH || role_r19 == ctx_r2.Role.TECH_CH || role_r19 == ctx_r2.Role.CHEF_CH || role_r19 == ctx_r2.Role.COMPT_CH, role_r19 == ctx_r2.Role.PDG));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", role_r19, " ");
} }
var _c2 = function (a0, a1) { return { "badge-light-success": a0, "badge-light-danger": a1 }; };
function UsersListComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var accountNonLocked_r20 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](2, _c2, accountNonLocked_r20 == 1, accountNonLocked_r20 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", accountNonLocked_r20 == 1 ? "Activ\u00E9" : "Desactiv\u00E9", " ");
} }
function UsersListComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r21 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("cursor-pointer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data-feather", "more-vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("routerLink", "/projets/users/edit/", row_r21.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data-feather", "edit")("size", 16);
} }
var UsersListComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {UserListService} _userListService
     * @param {CoreSidebarService} _coreSidebarService
     */
    function UsersListComponent(authService, router, _userListService, _coreSidebarService, _coreConfigService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this._userListService = _userListService;
        this._coreSidebarService = _coreSidebarService;
        this._coreConfigService = _coreConfigService;
        this.Role = _authentication_models_role__WEBPACK_IMPORTED_MODULE_0__.Role;
        // Public
        this.sidebarToggleRef = false;
        this.rows = [];
        this.selectedOption = 10;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.ColumnMode;
        this.temp = [];
        this.previousRoleFilter = '';
        this.previousPlanFilter = '';
        this.previousStatusFilter = '';
        this.selectRole = [
            { name: 'All', value: '' },
            { name: 'Admin', value: 'Admin' },
            { name: 'Author', value: 'Author' },
            { name: 'Editor', value: 'Editor' },
            { name: 'Maintainer', value: 'Maintainer' },
            { name: 'Subscriber', value: 'Subscriber' }
        ];
        this.selectPlan = [
            { name: 'All', value: '' },
            { name: 'Basic', value: 'Basic' },
            { name: 'Company', value: 'Company' },
            { name: 'Enterprise', value: 'Enterprise' },
            { name: 'Team', value: 'Team' }
        ];
        this.selectStatus = [
            { name: 'All', value: '' },
            { name: 'Pending', value: 'Pending' },
            { name: 'Active', value: 'Active' },
            { name: 'Inactive', value: 'Inactive' }
        ];
        this.selectedRole = [];
        this.selectedPlan = [];
        this.selectedStatus = [];
        this.searchValue = '';
        // Private
        this.tempData = [];
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.currentUserSubscription = this.authService.currentUserSubject.subscribe(function (data) {
            _this.accountUser = data;
        });
        authService.loadCurrentUser();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * filterUpdate
     *
     * @param event
     */
    UsersListComponent.prototype.filterUpdate = function (event) {
        var val = event.target.value.toLowerCase();
        // Filter Our Data
        var temp = this.tempData.filter(function (d) {
            var _a, _b, _c;
            return ((_a = d.firstName) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(val)) !== -1
                || ((_b = d.lastName) === null || _b === void 0 ? void 0 : _b.toLowerCase().indexOf(val)) !== -1 || !val
                || ((_c = d.fullName) === null || _c === void 0 ? void 0 : _c.toLowerCase().indexOf(val)) !== -1 || !val;
        });
        // Update The Rows
        this.rows = temp;
        // Whenever The Filter Changes, Always Go Back To The First Page
        this.table.offset = 0;
    };
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    UsersListComponent.prototype.toggleSidebar = function (name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    };
    /**
     * Filter By Roles
     *
     * @param event
     */
    UsersListComponent.prototype.filterByRole = function (event) {
        var filter = event ? event.value : '';
        this.previousRoleFilter = filter;
        this.temp = this.filterRows(filter, this.previousPlanFilter, this.previousStatusFilter);
        this.rows = this.temp;
    };
    /**
     * Filter By Plan
     *
     * @param event
     */
    UsersListComponent.prototype.filterByPlan = function (event) {
        var filter = event ? event.value : '';
        this.previousPlanFilter = filter;
        this.temp = this.filterRows(this.previousRoleFilter, filter, this.previousStatusFilter);
        this.rows = this.temp;
    };
    /**
     * Filter By Status
     *
     * @param event
     */
    UsersListComponent.prototype.filterByStatus = function (event) {
        var filter = event ? event.value : '';
        this.previousStatusFilter = filter;
        this.temp = this.filterRows(this.previousRoleFilter, this.previousPlanFilter, filter);
        this.rows = this.temp;
    };
    /**
     * Filter Rows
     *
     * @param roleFilter
     * @param planFilter
     * @param statusFilter
     */
    UsersListComponent.prototype.filterRows = function (roleFilter, planFilter, statusFilter) {
        // Reset search on select change
        this.searchValue = '';
        roleFilter = roleFilter.toLowerCase();
        planFilter = planFilter.toLowerCase();
        statusFilter = statusFilter.toLowerCase();
        return this.tempData.filter(function (row) {
            var isPartialNameMatch = row.role.toLowerCase().indexOf(roleFilter) !== -1 || !roleFilter;
            var isPartialGenderMatch = row.currentPlan.toLowerCase().indexOf(planFilter) !== -1 || !planFilter;
            var isPartialStatusMatch = row.status.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
            return isPartialNameMatch && isPartialGenderMatch && isPartialStatusMatch;
        });
    };
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe config change
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
            if (config.layout.animation === 'zoomIn') {
                setTimeout(function () {
                    _this._userListService.onAllUserListChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(_this._unsubscribeAll)).subscribe(function (response) {
                        _this.rows = response;
                        _this.tempData = _this.rows;
                        console.log(_this.rows);
                    });
                }, 450);
            }
            else {
                _this._userListService.onAllUserListChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(_this._unsubscribeAll)).subscribe(function (response) {
                    _this.rows = response;
                    _this.tempData = _this.rows;
                    console.log(_this.rows);
                });
            }
        });
    };
    /**
     * On destroy
     */
    UsersListComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    UsersListComponent.prototype.onAddUser = function () {
        this.router.navigate(['/projets/users/add']);
    };
    UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_users_list_service__WEBPACK_IMPORTED_MODULE_2__.UsersListService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_4__.CoreConfigService)); };
    UsersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], viewQuery: function UsersListComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.DatatableComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, decls: 39, vars: 16, consts: [[1, "content-wrapper", "container-xl"], [1, "content-body"], [1, "users-list-wrapper"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "row"], [1, "col-md-6", "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "m-1"], [1, "d-flex", "align-items-center"], [1, "form-control", "mx-25", 3, "ngModel", "ngModelChange"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "col-md-6", "col-12", "d-flex", "justify-content-start", "justify-content-md-end"], [1, "d-flex", "align-items-center", "justify-content-end", "pr-1", "pb-1", "pb-md-0"], [1, "d-flex", "align-items-center", "ml-1", "ml-md-0"], ["name", "searchValue", "type", "search", 1, "form-control", "ml-25", 3, "ngModel", "ngModelChange", "keyup"], ["rippleEffect", "", 1, "btn", "btn-primary", "ml-1", 3, "click"], ["data-feather", "plus", 1, "d-sm-none", "d-inline-block", "mr-0", "mr-sm-1"], [1, "d-none", "d-sm-inline-block"], [1, "bootstrap", "core-bootstrap", 3, "rows", "rowHeight", "limit", "columnMode", "headerHeight", "footerHeight", "scrollbarH"], ["name", "Utilisateur", "prop", "fullName", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Email", "prop", "email", 3, "width"], ["name", "Role", "prop", "role", 3, "width"], ["name", "Status", "prop", "accountNonLocked", 3, "width"], ["name", "Actions", 3, "width", "sortable"], [1, "card-header"], [1, "card-body"], [1, "users-list-filter"], [1, "col-12", "col-md-4"], [1, "form-group"], ["name", "selectedRole", "bindLabel", "name", "placeholder", "Select Role", 3, "items", "ngModel", "ngModelChange", "change"], ["name", "selectedPlan", "bindLabel", "name", "placeholder", "Select Plan", 3, "items", "ngModel", "ngModelChange", "change"], ["name", "selectedStatus", "bindLabel", "name", "placeholder", "Select Status", 3, "items", "ngModel", "ngModelChange", "change"], [4, "ngIf", "ngIfElse"], ["customAvatar", ""], [1, "cell-line-height"], [1, "font-medium-1", "d-block", 3, "routerLink"], [1, "font-weight-bold"], [1, "text-muted", "font-small-2"], ["height", "32", "width", "32", "alt", "datatable-avatar", 1, "rounded-circle", "mr-1", 3, "src"], [1, "avatar", "mr-1", "ml-0", 3, "ngClass"], [1, "avatar-content"], [1, "feather", "font-medium-3", 3, "ngClass"], [1, "badge", "badge-pill", 3, "ngClass"], ["ngbDropdown", "", "container", "body"], ["ngbDropdownToggle", "", "type", "button", "rippleEffect", "", 1, "btn", "icon-btn", "btn-sm", "hide-arrow"], [3, "data-feather"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "routerLink"], [3, "data-feather", "size"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UsersListComponent_div_3_Template, 16, 6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Afficher ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UsersListComponent_Template_select_ngModelChange_10_listener($event) { return ctx.selectedOption = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "10");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "25");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "50");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "100");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " lignes");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Recherche: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UsersListComponent_Template_input_ngModelChange_24_listener($event) { return ctx.searchValue = $event; })("keyup", function UsersListComponent_Template_input_keyup_24_listener($event) { return ctx.filterUpdate($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_25_listener() { return ctx.onAddUser(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Ajouter un nouvel utilisateur");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "ngx-datatable", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "ngx-datatable-column", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, UsersListComponent_ng_template_31_Template, 10, 6, "ng-template", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "ngx-datatable-column", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "ngx-datatable-column", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, UsersListComponent_ng_template_34_Template, 3, 8, "ng-template", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "ngx-datatable-column", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, UsersListComponent_ng_template_36_Template, 2, 5, "ng-template", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "ngx-datatable-column", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, UsersListComponent_ng_template_38_Template, 7, 8, "ng-template", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.selectedOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchValue);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rows", ctx.rows)("rowHeight", 50)("limit", ctx.selectedOption)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 40)("sortable", false);
    return UsersListComponent;
}());



/***/ }),

/***/ 9236:
/*!*********************************************************************!*\
  !*** ./src/app/main/projets/users/users-list/users-list.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListService": function() { return /* binding */ UsersListService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _sr_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sr-manager.service */ 14471);




var UsersListService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param srManagerService
     */
    function UsersListService(srManagerService) {
        this.srManagerService = srManagerService;
        // Set the defaults
        this.onAllUserListChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.onAllActivatedUsersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    UsersListService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([_this.getUsers()]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get rows
     */
    UsersListService.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.srManagerService.getResources(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authQueryHost + '/users').subscribe(function (response) {
                _this.rows = response;
                _this.onAllUserListChanged.next(_this.rows);
                resolve(_this.rows);
            }, reject);
        });
    };
    UsersListService.prototype.allActivatedUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.srManagerService.getResources(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authQueryHost + '/allActivatedUsers').subscribe(function (response) {
                _this.rows = response;
                _this.onAllActivatedUsersChanged.next(_this.rows);
                resolve(_this.rows);
            }, reject);
        });
    };
    UsersListService.ɵfac = function UsersListService_Factory(t) { return new (t || UsersListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_sr_manager_service__WEBPACK_IMPORTED_MODULE_1__.SrManagerService)); };
    UsersListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UsersListService, factory: UsersListService.ɵfac, providedIn: 'root' });
    return UsersListService;
}());



/***/ }),

/***/ 66492:
/*!****************************************************!*\
  !*** ./src/app/main/projets/users/users.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": function() { return /* binding */ UsersModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-edit/user-edit.component */ 64961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/common.module */ 75078);
/* harmony import */ var _layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-flatpickr */ 15386);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-block-ui */ 98044);
/* harmony import */ var _role_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-list.service */ 2764);
/* harmony import */ var _user_edit_user_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-edit/user-edit.service */ 3163);
/* harmony import */ var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-settings/account-settings.component */ 78474);
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-list/users-list.component */ 4028);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@core/components */ 69065);
/* harmony import */ var _users_list_users_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-list/users-list.service */ 9236);
/* harmony import */ var _authentication_models_role__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../authentication/models/role */ 46295);
/* harmony import */ var _authentication_auth_guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../authentication/auth.guards */ 58260);
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-add/user-add.component */ 92403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);





















var routes = [
    {
        path: 'account-settings',
        component: _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__.AccountSettingsComponent,
        resolve: {
            roleListService: _role_list_service__WEBPACK_IMPORTED_MODULE_3__.RoleListService,
        },
        data: { animation: 'account-settings' },
        canActivate: [_authentication_auth_guards__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
    },
    {
        path: 'add',
        component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_11__.UserAddComponent,
        resolve: {
            roleListService: _role_list_service__WEBPACK_IMPORTED_MODULE_3__.RoleListService
        },
        canActivate: [_authentication_auth_guards__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
    },
    {
        path: 'edit/:id',
        component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_0__.UserEditComponent,
        resolve: {
            roleListService: _role_list_service__WEBPACK_IMPORTED_MODULE_3__.RoleListService,
            UserEditService: _user_edit_user_edit_service__WEBPACK_IMPORTED_MODULE_4__.UserEditService
        },
        canActivate: [_authentication_auth_guards__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
    },
    {
        path: 'list',
        component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__.UsersListComponent,
        resolve: {
            roleListService: _role_list_service__WEBPACK_IMPORTED_MODULE_3__.RoleListService,
            UsersListService: _users_list_users_list_service__WEBPACK_IMPORTED_MODULE_8__.UsersListService
        },
        data: { roles: [_authentication_models_role__WEBPACK_IMPORTED_MODULE_9__.Role.ADMIN] },
        canActivate: [_authentication_auth_guards__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
    }
];
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
    UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: UsersModule });
    UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
                _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule,
                _layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule,
                ng2_flatpickr__WEBPACK_IMPORTED_MODULE_16__.Ng2FlatpickrModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule,
                ng_block_ui__WEBPACK_IMPORTED_MODULE_18__.BlockUIModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__.NgxDatatableModule,
                _core_components__WEBPACK_IMPORTED_MODULE_7__.CoreSidebarModule
            ]] });
    return UsersModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_0__.UserEditComponent, _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__.AccountSettingsComponent, _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__.UsersListComponent, _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_11__.UserAddComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule,
        _layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule,
        ng2_flatpickr__WEBPACK_IMPORTED_MODULE_16__.Ng2FlatpickrModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule,
        ng_block_ui__WEBPACK_IMPORTED_MODULE_18__.BlockUIModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__.NgxDatatableModule,
        _core_components__WEBPACK_IMPORTED_MODULE_7__.CoreSidebarModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_main_projets_users_users_module_ts.js.map