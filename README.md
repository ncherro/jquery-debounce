# $.debounce()

adds [underscore's debounce](http://underscorejs.org/#debounce) functionality to jQuery

## Example

```javascript
var foo = function() {
  // do something compliated
}

// run foo once per 60ms (at most) during the window.resize event
var debouncedResize = $.debounce(foo, 60);

$(window).resize(debouncedResize);

// run foo once per 30ms (at most) during the window.scroll event
var debouncedScroll = $.debounce(foo, 60);

$(window).scroll(debouncedScroll);
```
