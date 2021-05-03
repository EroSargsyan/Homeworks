<p align="center">
<img  width="200" title="code_academy" src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/133194341_1605664762975723_3938585525615517246_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=fWKHf-0XXA8AX8XfWOE&_nc_ht=scontent.fevn1-4.fna&oh=4cd5ff363d5ec50221f805da20abc0f2&oe=60AF303F" >
</p>

# Some useful stuff to remember

---

## Objects

1. An empty object (“empty cabinet”) can be created using one of two syntaxes:
* let user = new Object(); // "object constructor" syntax     
let user = {};  // "object literal" syntax

2. Property values are accessible using the dot notation:
* alert( user.name ); // John  
alert( user.age ); // 30

3. To remove a property, we can use delete operator:
* delete user.age;

4. For multiword properties, the dot access doesn’t work:
* user.likes birds = true

5. There’s an alternative “square bracket notation” that works with any string:
* let user = {};
* // set            
user["likes birds"] = true;

* // get                          
alert(user["likes birds"]); // true

* // delete                         
delete user["likes birds"];

6. Square brackets also provide a way to obtain the property name as the result of any expression:
* let key = "likes birds";
* // same as user["likes birds"] = true;
user[key] = true;

7. There’s also a special operator "in" that checks existence of property;
* "key" in object

8. The “for…in” loop:
* for (key in object) {}


## Array

1. There are two syntaxes for creating an empty array:
* let arr = new Array();
* let arr = [];

2. The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.

3. We can use an array as a deque with the following operations:
* push(...items) adds items to the end.
* pop() removes the element from the end and returns it.
* shift() removes the element from the beginning and returns it.
* unshift(...items) adds items to the beginning.

4. To loop over the elements of the array: 
* for (let i=0; i<arr.length; i++),
* for (let item of arr),
* for (let i in arr).

---

## Material used

1. [Objects](https://javascript.info/object)
2. [Arrays](https://javascript.info/array)
3. [Conditional branching](https://javascript.info/ifelse)
4. [The "switch" statement](https://javascript.info/switch)
5. [Loops: while and for](https://javascript.info/while-for)
6. Youtube video tutorial 1
<a href="https://www.youtube.com/watch?v=oigfaZ5ApsM
" target="_blank"><img src="https://i.ytimg.com/an_webp/oigfaZ5ApsM/mqdefault_6s.webp?du=3000&sqp=CIr-v4QG&rs=AOn4CLApRM-jsh-KZVLXc2Qs9p3jZ6RYig" 
 width="300" height="180" /></a>

7. Youtube video tutorial 2
<a href="https://www.youtube.com/watch?v=4uVwGw317QM&t=613s
" target="_blank"><img src="https://i.ytimg.com/an_webp/4uVwGw317QM/mqdefault_6s.webp?du=3000&sqp=CO7wv4QG&rs=AOn4CLC_sWffvoIPrAsH6ck7SiL5WYpqdg" 
 width="300" height="180" /></a>





 