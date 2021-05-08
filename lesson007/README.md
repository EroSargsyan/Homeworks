<p align="center">
<img  width="200" title="code_academy" src="https://readme.com/static/brandkit/readme-blue.png" >
</p>


# Closure



## Summary of paragraph

***
### Code Blocks
 * If a variable is declared inside a code block {...}, it’s only visible inside that block.
 ```
 {
  let message = "Hello"; // only visible in this block

  alert(message); // Hello
}

alert(message); // Error: message is not defined 
```

* For if, for, while and so on, variables declared in {...} are also only visible inside:

```
if (true) {
  let phrase = "Hello!";

  alert(phrase); // Hello!
}

alert(phrase); // Error, no such variable!
```
### Nested functions
* A function is called “nested” when it is created inside another function.
```
function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );

}
```
### Closures
* A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

* A lexical scope or static scope in JavaScript refers to the accessibility of the variables, functions, and objects based on their physical location in the source code.Example below:
```
let a = 'global';
  function outer() {
    let b = 'outer';
    function inner() {
      let c = 'inner'
      console.log(c);   // prints 'inner'
      console.log(b);   // prints 'outer'
      console.log(a);   // prints 'global'
    }
    console.log(a);     // prints 'global'
    console.log(b);     // prints 'outer'
    inner();
  }
outer();
console.log(a);         // prints 'global'
```
Here the inner function can access the variables defined in its own scope, the outer function’s scope, and the global scope. And the outer function can access the variable defined in its own scope and the global scope.
* Practical examples of closures:
```
function person() {
  let name = 'Peter';
  
  return function displayName() {
    console.log(name);
  };
}
let peter = person();
peter(); // prints 'Peter'
```
In this code, we are calling person function which returns inner function displayName and stores that inner function in peter variable. When we call peter function (which is actually referencing the displayName function), the name ‘Peter’ is printed to the console.
But we don’t have any variable named name in displayName function, so this function can somehow access the variable of its outer function person even after that function has returned. So the displayName function is actually a closure.


***


***

## Literature

1. [Closures MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
2. [Closures (JS info)](https://javascript.info/closure)
3. [Closures tutorial](https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda)

## Video Tutorials
1. Video tutorial 1
<a href="https://www.youtube.com/watch?v=1JsJx1x35c0
" target="_blank"><img src="https://i.ytimg.com/an_webp/1JsJx1x35c0/mqdefault_6s.webp?du=3000&sqp=CMOo24QG&rs=AOn4CLD4lhkGp9san1_ataZ7oa9fBlkC4Q" 
 width="300" height="180" /></a>

2. Video tutorial 2
<a href="https://www.youtube.com/watch?v=3a0I8ICR1Vg
" target="_blank"><img src="https://i.ytimg.com/an_webp/3a0I8ICR1Vg/mqdefault_6s.webp?du=3000&sqp=CLiO24QG&rs=AOn4CLCEtBXxrCTJQQE1ind9RgCwlKlRbg" 
 width="300" height="180" /></a>

 