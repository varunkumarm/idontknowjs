// More of Function scope: IIFE. Usage creating new hidden scope - clickhandler
// IIFE termed coined by Ben Alman - cowboy

// Anonymous IIFE
(function () {
  var foo = "Anonymous";
  console.log(foo);
})();

// or as preferred by Doug Crockford

(function () {
  var foo = "Anonymous";
  console.log(foo);
}());

// Named IIFE
(function iife(bar) {
  var foo = "Anonymous";
  console.log(foo);
})(foo);

// de-tour - undefined keyword writable property in non-strict mode

(function($,window,undefined){
    ....plugin code....
})(jQuery,this);
