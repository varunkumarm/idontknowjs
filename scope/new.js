// @author Junaid Ansari

// new() -- TODO

function foo(baz,bam) {
	this.baz = "baz";
	console.log(this.bar + " " + baz);			// undefined undefined
	console.log(this.bar + " " + this.baz);		// undefined baz
}

var bar = "bar";
var baz = new foo();

// new conceptually does the following

// 1. Creates a brand new empty object, 
// 2. Roughly links the newly created object to Object Prototype .. etc 
// 3. Calls the function specified, with this set to that new object. 
// 4. Returns the new object, if nothing is returned. // non-strict vs strict ... is there a difference here??