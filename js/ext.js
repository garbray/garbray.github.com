/************************************
 * The Javascript prototype and 
 * window extension
 ************************************/

Element.prototype.hasClassName = function(name) {
  return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className);
};
Element.prototype.addClassName = function(name) {
  if (!this.hasClassName(name)) {
    this.className = this.className ? [this.className, name].join(' ') : name;
  }
};
Element.prototype.removeClassName = function(name) {
  if (this.hasClassName(name)) {
    var c = this.className;
    this.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
  }
};

window.getStyle = function(elem, styleProp){
	return elem.currentStyle ? elem.currentStyle[styleProp] : window.getComputedStyle(elem,null).getPropertyValue(styleProp);
};

/*
window.$ = function (){
    return document.getElementById.apply(document, arguments)
}
window.$$ = function (){
    return document.querySelectorAll.apply(document, arguments)
}

Function.prototype.bind = function(scope) {
  var _function = this; 
  return function() {return _function.apply(scope, arguments);}
}

*/
