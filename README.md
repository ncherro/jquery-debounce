# $.debounce()

adds [underscore's debounce](http://underscorejs.org/#debounce) functionality to jQuery

```javascript
var foo = function() {
  // do something compliated
}

// run foo once per 60ms (at most) during the window.resize event
var debouncedResize = $.debounce(foo, 60);

$(window).resize(debouncedResize);
```
