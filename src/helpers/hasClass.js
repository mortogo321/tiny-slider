import { classListSupport } from "./classListSupport.js";

var hasClass = classListSupport
  ? function (el, str) {
      return el && el.classList.contains(str);
    }
  : function (el, str) {
      return el && el.className.indexOf(str) >= 0;
    };

export { classListSupport, hasClass };
