/*
 * adds underscorejs debounce functionality to jQuery
 *
 * example:
 *
 * var foo = function() {
 *   // do something compliated
 * }
 *
 * var debouncedResize = $.debounce(foo, 60); // run at most one time per 60 ms
 *
 * $(window).resize(debouncedResize);
 */

;(function($, undefined) {

  $.debounce = function(func, wait, immediate) {
      // * stolen from underscorejs
      var timeout, args, context, timestamp, result;
      return function() {
        context = this;
        args = arguments;
        timestamp = new Date();
        var later = function() {
          var last = (new Date()) - timestamp;
          if (last < wait) {
            timeout = setTimeout(later, wait - last);
          } else {
            timeout = null;
            if (!immediate) result = func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        if (!timeout) {
          timeout = setTimeout(later, wait);
        }
        if (callNow) result = func.apply(context, args);
        return result;
      };
  }

}(jQuery));
