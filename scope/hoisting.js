// @author Junaid Ansari

// Hoisting: Constructor

var a = b();
var c = d(); // Error - d is not a function

a; // undefined
c;

function b() {
  return c; // auto global variable gets created
}

var d = function () { // function expression doesn't gets hoisted
  return b();
};

// conceptually hoisted as

/*
function b(){
  return c;
}

var a;
var c;
var d;

a = b();
c = d();

d = function(){
  return b();
}

Notes: functions gets hoisted first and then var
       function hoisting overwrite previous function declaration
       hoisting allows mutual recursion, function declarations are moved
*/
