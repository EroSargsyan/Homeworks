<p align="center">
<img  width="200" title="code_academy" src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/133194341_1605664762975723_3938585525615517246_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=fWKHf-0XXA8AX8XfWOE&_nc_ht=scontent.fevn1-4.fna&oh=4cd5ff363d5ec50221f805da20abc0f2&oe=60AF303F" >
</p>


# Functions

***

## Summary of Functions paragraph
 * Values passed to a function as parameters are copied to its local variables.
 * A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
 * A function can return a value. If it doesn’t, then its result is undefined.
 * To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

* It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side-effect.


***

## Function expressions
* Functions are values. They can be assigned, copied or declared in any place of the code.
* If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
* If the function is created as a part of an expression, it’s called a “Function Expression”.
* Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
* Function Expressions are created when the execution flow reaches them.
* In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.



***
## Arrow functions
1.  Arrow functions are handy for one-liners.
2.  They come in two types;
   * Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
   * With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.



***

## Literature

1. [Functions](https://javascript.info/function-basics)
2. [Function expressions](https://javascript.info/function-expressions)
3. [Arrow functions](https://javascript.info/arrow-functions-basics)

## Video Tutorials
1. Video tutorial 1
<a href="https://www.youtube.com/watch?v=xUI5Tsl2JpY
" target="_blank"><img src="https://i.ytimg.com/vi/xUI5Tsl2JpY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPXaC5W_1n4AyY0AtK_cGawY9p2g" 
 width="300" height="180" /></a>

2. Video tutorial 2
<a href="https://www.youtube.com/watch?v=xjAu2Y2nJ34
" target="_blank"><img src="https://i.ytimg.com/an_webp/xjAu2Y2nJ34/mqdefault_6s.webp?du=3000&sqp=CNrMy4QG&rs=AOn4CLCKyfMeRiafDsSMHhaixCTClygODA" 
 width="300" height="180" /></a>

3. Video tutorial 3
<a href="https://www.youtube.com/watch?v=HAP1rS9WeuA
" target="_blank"><img src="https://i.ytimg.com/an_webp/HAP1rS9WeuA/mqdefault_6s.webp?du=3000&sqp=CMDUy4QG&rs=AOn4CLD7AD2H5e9RxhZz5DFifCCsS8Yzug" 
 width="300" height="180" /></a> 