import { classListSupport, hasClass } from "./hasClass.js";
var addClass = classListSupport
  ? function (el, str) {
      if (el && !hasClass(el, str)) {
        el.classList.add(str);
      }
    }
  : function (el, str) {
      if (el && !hasClass(el, str)) {
        el.className += " " + str;
      }
    };

export { addClass };
