# Javascript

## Measure execution time



	const  start  =  Date.now();
	// code for which execution time is being measured
	const  duration  =  Date.now()  -  start;
	// report duration
Date.now() is a static method of the Date object. You cannot use it on a date like myDate.now(). The syntax is always Date.now().

Note that Date.now() gives results in milliseconds ( more specifiaclly, it returns the number of milliseconds since January 1, 1970.). 

If we want even more precise values, the performance api should be used ([read here](https://michaelscodingspot.com/measure-execution-time-in-javascript/)).


## For Loop :

	for (let i = 0; i < 10; i++) {
  	// some code
	}

## Promise

	myPromise.then(
	  function(value) { /* code if successful */ },
	  function(error) { /* code if some error */ }
	);

## Image Element

[Image element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image)
	
	var myImage = new Image(100, 200);
	myImage.src = 'picture.jpg';
	document.body.appendChild(myImage);
This would be the equivalent of defining the following HTML tag inside the `<body>`
`<img width="100" height="200" src="picture.jpg">`

Creating an image element dynamically using javascript : [read here](https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/)

## Fetch

The `fetch()` function lets you load other files on the internet, but it does not work with local files loaded using `file://` URLs. This is a safety feature. Imagine how scary the internet would be if any website could read files from your computer!

Using fetch with json :

    fetch("resource")
    .then(response  => response.json())
    .then(json  =>  console.log(json));

## Onloaddata event

Execute a JavaScript when data for the current frame is available

    object.addEventListener("loadeddata",myScript);

Same thing in HTML:

    <video onloadeddata="myFunction()">
During the loading process of an audio/video, the following events occur, in this order:

1.  [onloadstart](https://www.w3schools.com/jsref/event_onloadstart.asp)
2.  [ondurationchange](https://www.w3schools.com/jsref/event_ondurationchange.asp)
3.  [onloadedmetadata](https://www.w3schools.com/jsref/event_onloadedmetadata.asp)
4.  [onloadeddata](https://www.w3schools.com/jsref/event_onloadeddata.asp)
5.  [onprogress](https://www.w3schools.com/jsref/event_onprogress.asp)
6.  [oncanplay](https://www.w3schools.com/jsref/event_oncanplay.asp)
7.  [oncanplaythrough](https://www.w3schools.com/jsref/event_oncanplaythrough.asp)
