<p align="center">
<img  width="200" title="code_academy" src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/133194341_1605664762975723_3938585525615517246_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=fWKHf-0XXA8AX8XfWOE&_nc_ht=scontent.fevn1-4.fna&oh=4cd5ff363d5ec50221f805da20abc0f2&oe=60AF303F" >
</p>


#  DATE API / Getter / Setter / Prop Descriptors

***

## Summary of Date paragraph
1) Date and time in JavaScript are represented with the Date object. We can’t create “only date” or “only time”: Date objects always carry both.
2) Months are counted from zero (yes, January is a zero month).
3) Days of week in getDay() are also counted from zero (that’s Sunday).
4) Date auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.
5) Dates can be subtracted, giving their difference in milliseconds. That’s because a Date becomes the timestamp when converted to a number.
6) Use Date.now() to get the current timestamp fast.


***

## Property flag and descriptors
### 1)  Object properties, besides a value, have three special attributes (so-called “flags”):

* **writable** – if true, the value can be changed, otherwise it’s read-only.

* **enumerable** – if true, then listed in loops, otherwise not listed.

* **configurable** – if true, the property can be deleted and these attributes can be modified, otherwise not.


### 2) The method **Object.getOwnPropertyDescriptor** allows to query the full information about a property.
### 3) To change the flags, we can use **Object.defineProperty**.

### 4) Sealing an object globally:

a) **Object.preventExtensions(obj)**

 * Forbids the addition of new properties to the object. 

b) **Object.seal(obj)**
* Forbids adding/removing of properties. Sets configurable: false for all existing properties.

c) **Object.freeze(obj)**

* Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.

d) And also there are **tests** for them:

* **Object.isExtensible(obj)**

* Returns false if adding properties is forbidden, otherwise true.

* **Object.isSealed(obj)**

* Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.

* **Object.isFrozen(obj)**
* Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.



***

## Literature

1. [Property flags and descriptors](https://javascript.info/property-descriptors)
2. [Property getters and setters](https://javascript.info/property-accessors)
3. [Date and time](https://javascript.info/date)

## Video Tutorials
1. Video tutorial 1
<a href="https://www.youtube.com/watch?v=bl98dm7vJt0
" target="_blank"><img src="https://i.ytimg.com/an_webp/bl98dm7vJt0/mqdefault_6s.webp?du=3000&sqp=CIDNjIUG&rs=AOn4CLDC7UgAWet2sdum_Iujhax1En-Lyw" 
 width="300" height="180" /></a>

2. Video tutorial 2
<a href="https://www.youtube.com/watch?v=aM_8WRaBljU
" target="_blank"><img src="https://i.ytimg.com/an_webp/aM_8WRaBljU/mqdefault_6s.webp?du=3000&sqp=CMTmjIUG&rs=AOn4CLAt0OzQIJ3qCcnCLw5QLmrl3DzuDg" 
 width="300" height="180" /></a>

3. Video tutorial 3
<a href="https://www.youtube.com/watch?v=-eRsWqwcPuk
" target="_blank"><img src="https://i.ytimg.com/vi/-eRsWqwcPuk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXF40O5lg9mcC9mxN7Ru9uNFFCpg" 
 width="300" height="180" /></a> 