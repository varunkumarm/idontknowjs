// @author - Junaid Ansari

var foo = "global"; // created in global scope

function bar()
{
  console.log(foo); // prints undefined & not - "global" or "bar".
  var foo = "bar"; // created in bar scope
  console.log(foo); // prints "bar"
}

function baz(foo)
{
  console.log(foo); // prints undefined
  foo = "baz";
  console.log(foo);
  // console.log(bam); // would throw ReferenceError
  bam = "yay";
  console.log(bam); // prints yay
}

function bar_variation()
{
  console.log(foo); // prints "global"
  console.log(bam); // prints "yay", if baz() was called before
                    // bar_variation(), else ReferenceError
}

bar();

baz();

baz("test");

bar_variation();

/*
Output of this would be as

// invocation of bar()
undefined
bar

// invocation of baz()
undefined
baz
yay

// invocation of baz("test")
test
baz
yay

// invocation of bar_variation()
global
yay
*/

/*
The above program would get translated to something like below;

function bar()
{
  // Also see bar_variation

  var foo;            // only variable declaration is hoisted at the top.
  console.log(foo);  // foo is undefined at this point
                     // as line 6 is split as line 73 and 76
  foo="bar";         // assignment is left at the same line.
  console.log(foo);
}

function baz(foo)
{
  console.log(foo); // As in bar we now have a reference in the form of
                    // parameter whose value is undefined when called as baz();
  foo = "baz";
  console.log(foo);
  // console.log(bam); // would throw ReferenceError: bam is not defined
  bam = "yay";         // will cause a global variable to be created
                       // Note: this will happen only during assignment.
  console.log(bam);  // prints global variable value
}

function bar_variation()
{
console.log(foo); // as now we can reference the global
// variable and also the fact we don't have foo in bar_variation scope.
console.log(bam); // would print "yay", if baz() was called before
                  // bar_variation(), else ReferenceError
}

var foo;
foo = "global";

var bam;

bar();

baz();

baz("test");

bar_variation();
*/
