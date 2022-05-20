# Javascript

## Measure execution time

```js
	const  start  =  Date.now();
	// code for which execution time is being measured
	const  duration  =  Date.now()  -  start;
	// report duration
```
Date.now() is a static method of the Date object. You cannot use it on a date like myDate.now(). The syntax is always Date.now().

Note that Date.now() gives results in milliseconds ( more specifiaclly, it returns the number of milliseconds since January 1, 1970.). 

If we want even more precise values, the performance api should be used ([read here](https://michaelscodingspot.com/measure-execution-time-in-javascript/)).


IF our only intention is to log the time in milliseconds, then following is a much simpler way :

```js
    console.time("Some tag");
    // Code for whihc execution time is being measured
    console.timeEnd("Some tag");
```

## When sending a post request, when to use JSON.stringify()

If the object you are sending through the post request doesn't have nested Objects it's safe to send data without converting it to string, otherwise it is necessary to stringify it first. (for more detail, read [here](https://stackoverflow.com/a/68445325))

```js
    a = {id: 1, name: 'icy-cream', flavor: 'vanilla'};
    b = JSON.stringify(a);
    // b is '{"id":1,"name":"icy-cream","flavor":"vanilla"}'
```

As a thumb rule, its better to always stringify the objects.

## Use ReadableStream to show image

We can convert the readable stream into a blob, and then use it as an image.

```js
    let imsource;
    
    async  function  getImage(url) {
		await  fetch(url)
			.then((response) => {
				//Here the response body is a readable stream
				return  response.blob();
				})
			.then((imageData) => {
				const src  =  URL.createObjectURL(imageData);
				imsource  =  src;
				});
	}
	
	// Now an imageElement with src as imsource can be made and displayed.
```

**BLOB** stands for **Binary Large Object**. It is defined as the chunk of binary data being stored as a single entity in a database system. BLOBs are used primarily to hold multimedia objects like images, videos, and sound, though they can also be used to store programs.

In JS, the [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) so its methods can be used for processing the data.

[More](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams) on using readable streams.

## Right way to delay execution in JS

Taken from [this](https://blog.praveen.science/right-way-of-delaying-execution-synchronously-in-javascript-without-using-loops-or-timeouts/) blog.

```js
    // delay by 5 seconds
    await new Promise(done => setTimeout(() => done(), 5000));
```

## SetTimeout and SetInterval

[set timeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

[set interval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)


## For Loop :

```js
	for (let i = 0; i < 10; i++) {
  	// some code
	}
```

The `break` statement "jumps out" of a loop.

The `continue` statement "jumps over" one iteration in the loop.

## Append values to array :

```js
	// initialize array
	let mylist = ["Namaste", "Hello", "Bonjour"];

	// append new value to the array
	mylist.push("Hola");
```

## Promise

```js
	myPromise.then(
	  function(value) { /* code if successful */ },
	  function(error) { /* code if some error */ }
	);
```

## Image Element

[Image element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image)

```js	
	var myImage = new Image(100, 200);
	myImage.src = 'picture.jpg';
	document.body.appendChild(myImage);
```
This would be the equivalent of defining the following HTML tag inside the 
```html
	<body>
	<img width="100" height="200" src="picture.jpg">
```

Creating an image element dynamically using javascript : [read here](https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/)


## Fetch

The `fetch()` function lets you load other files on the internet, but it does not work with local files loaded using `file://` URLs. This is a safety feature. Imagine how scary the internet would be if any website could read files from your computer!

Using fetch with json :

```js
    fetch(url)
    .then(response  => response.json())
    .then(json  =>  console.log(json));
```

Note what is response and what is json. ???

Using fetch to do a post request (for detail, read [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)) :

```js
    fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
```


## Onloaddata event

Execute a JavaScript when data for the current frame is available

```js
    object.addEventListener("loadeddata",myScript);
```
Same thing in HTML:

```html
    <video onloadeddata="myFunction()">
```
During the loading process of an audio/video, the following events occur, in this order:

1.  [onloadstart](https://www.w3schools.com/jsref/event_onloadstart.asp)
2.  [ondurationchange](https://www.w3schools.com/jsref/event_ondurationchange.asp)
3.  [onloadedmetadata](https://www.w3schools.com/jsref/event_onloadedmetadata.asp)
4.  [onloadeddata](https://www.w3schools.com/jsref/event_onloadeddata.asp)
5.  [onprogress](https://www.w3schools.com/jsref/event_onprogress.asp)
6.  [oncanplay](https://www.w3schools.com/jsref/event_oncanplay.asp)
7.  [oncanplaythrough](https://www.w3schools.com/jsref/event_oncanplaythrough.asp)


## Local Storage

- Anything saved in the **Local storage**, will stay there even after the browser is restarted. 
- Only if incognito mode is used, this behaviour will not be followed. 
- And the only way to clear the localstorage non-programmatically is to clear the cache/cookies from the browser for that webpage.

```js
	//save an item to local storage
	localStorage.setItem("mykey","myvalue");

	// retrieve the item from local storage
	localStorage.getItem("mykey");

	// remove the item from local storage
	localStorage.removeItem("mykey");

	// clear the entire local storage
	localStorage.clear();
```

- Items saved in the sessionStorage object will remain until the browser is closed by the user. Then, the storage will be cleared.
```js
	// all the methods are similar to that of localstorage
	sessionStorage.setItem("mykey","myvalue");
```
## Math Object

Math is a built-in object that has properties and methods for mathematical constants and functions.

It has constants like : `Math.PI`, `Math.E`, `Math.SQRT2`, `Math.LN2`, and more.

Useful methods like max to find maximum of given numbers :
```js
	// Find max value out of given numbers
	Math.max(value0, value1, /* ... ,*/ valueN)

	// Find the absolute value of given number
	Math.abs(x)

	// Find the cosine of an angle (provided in radians)
	Math.cos(angle)

	// Find arc sine of a value (returns in radians)
	Math.asin(x)

	// Returns x^y
	Math.pow(x,y)

	// Find poitive square root of a number
	Math.sqrt(x)
```

## Export

The export statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the import statement.

There are two types of exports:

1. Named Exports (Zero or more exports per module)

	Named exports are useful to export several values. During the import, it is mandatory to import them within curly braces with the same name of the corresponding object.
	```js
		// export features declared earlier
		export { myFunction, myVariable };

		// export individual features (can export var, let,
		// const, function, class)
		export let myVariable = Math.sqrt(2);
		export function myFunction() { /* ... */ };
	```
2. Default Exports (One per module)
   
   A default export can be imported using any name : 
   
	```js
		// file test.js
		let k; export default k = 12;
	```

	```js
		// some other file
		import m from './test'; // note that we have the freedom to use import m instead of import k, because k was default export
		console.log(m);        // will log 12
	```
We can also rename named exports to avoid naming conflicts:
```js
	export { myFunction as function1,
			myVariable as variable };
```

## Iterating over an object (For In Loop)

To iterate over all properties in an object, we can use the loop for...in... to iterate over the keys:

The syntax:
```js
for (let key in object) {
  // do something for each key in the object 
}
```

## String literals :

```js
const myString = `10% of 534 is ${534*0.1}`
```

## The Question mark (?) operator in javascript

Three main uses of the ? operator :
- Ternary Operator
- Optional Chaining
- Nullish Coalescing

### Ternary Operator 
```js
	var age = 26;
	var beverage = (age >= 21) ? "Beer" : "Juice";
	console.log(beverage); // "Beer"
```

### Optional Chaining

```js
	const Employee = {
		name : "Severus",
		age : 32
	}

	console.log(Employee.department.name);
	// Throws an error : Uncaught TypeError: Cannot read properties of undefined (reading 'name')

	console.log(Employee.department?.name);
	// just returns undefined
```

## Getting the base url

```js
window.location.origin.toString()
```

## JsDeliver (CDN)

jsDelivr is a public, open-source CDN (Content Delivery Network) developed by Dmitriy Akulov and Prospect One, focused on performance, reliability, and security. It is free to use for everyone, with no bandwidth limits.

jsDelivr provides mirrors for npm, GitHub, WordPress plugins, and custom endpoints for several other projects with special requirements. This simply means that any npm package or public github repo can be converted into a CDN.

Steps for making a github repo into a CDN :
1. Create a public github repo and push the files that you want to deliver, there.
2. That's it ! You can access this as CDN in the following url : `https://cdn.jsdelivr.net/gh/{username}/{repo}/`

There are more capabilities like versioning which you can read [here](https://gomakethings.com/how-to-turn-any-github-repo-into-a-cdn/).