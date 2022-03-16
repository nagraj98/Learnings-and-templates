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




## For Loop :

```js
	for (let i = 0; i < 10; i++) {
  	// some code
	}
```

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
