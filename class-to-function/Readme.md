# Prototypal Inheritance 
- In JavaScript, objects have a special hidden property `[[Prototype]]`.
 - JS first looks for property in object. If not found, it goes up the prototype chain.
 - `__proto__` is the setter/getter for `[[Prototype]]`.
 - The value of  `__proto__`  can be either an object or  `null`. Other types are ignored.
 - The references can’t go in circles. JavaScript will throw an error if we try to assign  `__proto__`  in a circle.
 - **No matter where the method is found: in an object or its prototype. In a method call,  `this`  is always the object before the dot.**
 - The `for..in` loop iterates over inherited properties too. (inherited property with `enumerable:true`)
 - Almost all other key/value-getting methods, such as `Object.keys`, `Object.values` and so on ignore inherited properties.
 - `delete` operator affect ONLY own property of obj.
 - new objects can be created with a constructor function, like `new F()`
 - The  `F.prototype`  property (don’t mistake it for  `[[Prototype]]`) sets  `[[Prototype]]`  of new objects when  `new F()`  is called.
 - The default `"prototype"` is an object with the only property `constructor` that points back to the function itself. 
	 - We should modify `F.prototype` carefully. If we override the default constructor property, `new F()` will not work. In our code we override Student's prototype with Person (line 40). This brings everything is Person's prototype chain to Student. In next line, we add the default `constructor` property back.
 - `new` vs `Object.create`
	- Both create a new object and inherit a prototype. `Object.create` doesn't run constructor.