// @author Junaid Ansari

// this - rules

// default binding - precedence 4

function foo() {
  console.log(this.bar);
}

var bar = "bar1";

var o2 = { bar : "bar2", foo: foo }; // foo - references to the same function
var o3 = { bar : "bar3", foo: foo };

foo();    // bar1 - default binding
          // this: global - non-strict mode
          // this: undefined - strict mode

// Implicit binding - object property reference - this: object invoking function
o2.foo(); // bar2
o3.foo(); // bar3

// Another example
// Always the first call invocation reference is used for this, if the nested
// calls do not hard bind

var o4 = {
	bar1: "bar4",
	foo: function() {
		console.log(this.bar1);
	}
};
var o5 = { bar1: "bar5", foo: o4.foo };

var bar1 = "bar6";
var foo = o4.foo;

o4.foo();		// "bar4"
o5.foo();		// "bar5"
foo();			// "bar6"

// Explicit or Hard binding
function foo7() {
	console.log(this.bar7);
}

var obj7 = { bar7: "bar7" };
var obj8 = { bar7: "bar8" };

var orig = foo7;
foo7 = function(){ orig.call(obj7); };

foo7();
foo7.call(obj8);
