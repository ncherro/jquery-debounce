# $.debounce()

adds [underscorejs debounce](http://underscorejs.org/#debounce) functionality to jQuery

example:

```javascript
var foo = function() {
  // do something compliated
}

// run foo one time per 60ms at most during the window.resize event
var debouncedResize = $.debounce(foo, 60);

$(window).resize(debouncedResize);
```
