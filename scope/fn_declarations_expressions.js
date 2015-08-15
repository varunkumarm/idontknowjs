// @author Junaid Ansari

function fnOne()
{
  console.log("one")
}

one(); // Works as the function gets declared in outer (or enclosing) scope

var fnTwo = function two() {
  console.log("two");
}

// two(); // ReferenceError as two is expression form of it and doesn't gets
          // declared in outer (or enclosing) scope

fnTwo();

/*
var two = function two() {
  console.log("two");
}

// two(); // works fine.
          // Interestingly name of function var can be same as expression name
*/

var fnThree = function () {
  console.log("Anonymous Function Expression");
}

fnThree();

/*
Limitations of "Anonymous Function Expression"

1. No reference inside of the function to refer to itself.
   "this" is not a reference to itself
   // Recursion
   // Unbind inside a clickhandler() ?
2. Debug Stacktrace doesn't have reference
3. Doesn't improve readability.
*/

var fnFour = function (i) {
  // fnFour might be a reference to itself here... but it's possible that
  // fnFour get overWritten in the outer scope and isn't the same function or
  // function at all?
  if (i < 3)
  {
    console.log("i here: " + i);
    i++;
    fnFour(i)
  }

}

fnFour(1);
