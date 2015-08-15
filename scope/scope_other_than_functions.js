// Scope - Apart from function - eval & with

// @author - Junaid Ansari

var foo;

try {
  foo.length; // TypeError as foo is undefined, and it caught below
}
catch(err)
{
  console.log(err); // err has catch block scope
}

// console.log(err); // ReferenceError err not accessible outside catch block

// eval - non-strict mode
/* eval modified existing lexical scope at runtime, in short recompiles ;)
 eval had to invoke script engine again to recompile the code by inserting at
 the specific point where it is called

Therefore, Javascript engine disables some of the optimization when it sees eval

var bar = "bar";

function evalStr(str){
  eval(str);
  console.log(bar); // 42
}

foo("var bar=42;");

*/

// eval - strict mode

/*
Creates a new scope for the eval statement... how ?
*/

// setTimeout - similar to eval
// https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout

// eval - use: Javascript templates (templating possible through Constructor fn)

// with - some optimization are disabled by compiler
// disallowed in strict mode

var obj = {
  a : 2,
  b : 3,
}

obj.a = obj.b + 1;

// alternate way

with (obj) {
  a = b + 1;
  c = 4; // leads to creation of a global variable c, how different from
         // global variable creation from function.
}
