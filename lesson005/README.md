<p align="center">
<img  width="200" title="code_academy" src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/133194341_1605664762975723_3938585525615517246_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=fWKHf-0XXA8AX8XfWOE&_nc_ht=scontent.fevn1-4.fna&oh=4cd5ff363d5ec50221f805da20abc0f2&oe=60AF303F" >
</p>


# Type conversion

***

## Difference between isNaN() and Number.isNan()
* Number.isNaN() is different from the global isNaN() function. The global isNaN() function converts the tested value to a Number, then tests it.

* Number.isNaN() does not convert the values to a Number, and will not return true for any value that is not of the type Number.


***

## Tasks with commentaries
1.  "" + 1 + 0       ---->//  10.   //We have string and '+' sign.This means that the values are converted to String type.
2. "" - 1 + 0         ---->// -1.   //After a string we have "-" sign. So 1 isn`t converted to string.
3. true + false         ---->//1.   //It is like "1 + 0" when we have 2 numbers
4. 6 / "3"              ---->// 2.   //"3" automaticly converted to number.
5.  "2" * "3"          ---->// 6.   //We have the same as in previous example.
6. 4 + 5 + "px"      ---->// "9px".   //First numbers are summed then added to "px".
7. "$" + 4 + 5        ---->//$45.   //String summed to converted numbers.
8. "4" - 2      ---->//2.   //Same as 6th example.
9. "4px" - 2       ---->//NaN.   //Letters can not be divided to numbers.
10. 7 / 0           ---->//Infinity.
11. " -9 " + 5          ---->// -9 5.   //Again we have strings and "+" sign.
12. " -9 " - 5          ---->//-14.   //We have "-" sign.
13. null + 1             ---->//1.   //It is like 4th example.
14. undefined + 1          ---->//NaN.   //Something that is not defined can not be summed to another number.


***


## Literature

1. [Type conversion](https://javascript.info/type-conversions)
2. [Numbers](https://javascript.info/number)
3. [Basic operators, maths](https://javascript.info/operators)

## Video Tutorials
1. Video tutorial 1
<a href="https://www.youtube.com/watch?v=1qm_SSLunkw
" target="_blank"><img src="https://i.ytimg.com/an_webp/1qm_SSLunkw/mqdefault_6s.webp?du=3000&sqp=CNjcwIQG&rs=AOn4CLB6jDZ-R3s5q1dT92dEYLuKsyF4-w" 
 width="300" height="180" /></a>

2. Video tutorial 1
<a href="https://www.youtube.com/watch?v=XWNq7XJuwoo
" target="_blank"><img src="https://i.ytimg.com/an_webp/XWNq7XJuwoo/mqdefault_6s.webp?du=3000&sqp=CNDlwIQG&rs=AOn4CLC7GoE9TZ4KNemCrzeNvL4EUfAbfg" 
 width="300" height="180" /></a>