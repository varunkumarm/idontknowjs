// @author Junaid Ansari

// Bind - what is does below - binds invocation of a function to an object
// external object.
function bind2(fn,o) {
	return function(){
		fn.call(o);
	};
}
function foo() {
	console.log(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

foo = bind2(foo,obj);

foo();          // bar
foo.call(obj2); // bar

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

// Simplified bind implementation

if(!Function.prototype.bind2){
  Function.prototype.bind2 = function(o) {
    var fn = this;
    return function() {
      return fn.apply(o, arguments);
    };
  };
}

function foo1(baz) {
  console.log(this.bar9 + " " + baz);
}

var obj9 = {bar9 : "bar9"};

foo2 = foo1.bind2(obj9);

foo2("baz");
