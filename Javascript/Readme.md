# Javascript



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
