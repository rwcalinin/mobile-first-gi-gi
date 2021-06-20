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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next slide"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="prev slide"></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {}
    }, {
      breakpoint: 640,
      settings: {
        arrows: false
      }
    }]
  });
  $('.bottom-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '',
    prevArrow: '',
    responsive: [{
      breakpoint: 1024,
      settings: {}
    }, {
      breakpoint: 640,
      settings: {
        arrows: false
      }
    }]
  });
}); // ! =================================

const appearOnLoad = document.querySelectorAll('.--appear-on-load');
appearOnLoad.forEach(e => {
  e.classList.add('--active');
});
const serviceBlock = document.querySelector('.services__head'),
      serviceItems = document.querySelector('.services__items'),
      projectInner = document.querySelector('.project__inner'),
      teamInner = document.querySelector('.team__inner'),
      quote = document.querySelector('.quote'),
      footer = document.querySelector('.footer'),
      updoc = document.querySelector('.updoc');

window.onscroll = function () {
  if (document.documentElement.clientWidth <= 640) {
    if (window.pageYOffset >= 0) {
      serviceBlock.classList.add('--active');
      serviceItems.classList.add('--active');
    }

    if (window.pageYOffset >= 3150) {
      projectInner.classList.add('--active');
    }

    if (window.pageYOffset >= 4250) {
      teamInner.classList.add('--active');
    }

    if (window.pageYOffset >= 5050) {
      quote.classList.add('--active');
    }

    if (window.pageYOffset >= 5500) {
      footer.classList.add('--active');
      updoc.classList.add('--active');
    }
  } else {
    if (window.pageYOffset >= 460) {
      serviceBlock.classList.add('--active');
      serviceItems.classList.add('--active');
    }

    if (window.pageYOffset >= 1200) {
      projectInner.classList.add('--active');
    }

    if (window.pageYOffset >= 1600) {
      teamInner.classList.add('--active');
    }

    if (window.pageYOffset >= 2100) {
      quote.classList.add('--active');
    }

    if (window.pageYOffset >= 2500) {
      footer.classList.add('--active');
      updoc.classList.add('--active');
    }
  }
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map