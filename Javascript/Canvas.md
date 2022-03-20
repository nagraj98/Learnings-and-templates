
## Canvas


## Introduction

The  `<canvas>`  tag is used to draw graphics, on the fly, via scripting (usually JavaScript).

The  `<canvas>`  tag is transparent, and is only a container for graphics, you must use a script to actually draw the graphics.

The <canvas> element must have an id attribute so it can be referred to by JavaScript. The width and height attribute is necessary to define the size of the canvas. By default, it has not borders. To add borders, we can use the style attribute.

```html
<canvas id="myCanvas"  width="200"  height="100"  style="border:1px solid #000000;"></canvas>
```
We need a drawing object for the canvas. The getContext() is a built-in HTML object, with properties and methods for drawing. 

The fillStyle property can be a CSS color, a gradient, or a pattern. The default fillStyle is black.

The fillRect(_x,y,width,height_) method draws a rectangle, filled with the fill style, on the canvas:
```js
	let  canvas = document.getElementById("myCanvas");  
	let  ctx = canvas.getContext("2d");  
	ctx.fillStyle  =  "#FF0000";  
	ctx.fillRect(0,  0,  150,  75);  
```
It looks like this :
![](https://github.com/nagraj98/Learnings-and-templates/blob/main/assets/Javascript/CanvasBasic.png)


The HTML canvas is a two-dimensional grid. The **upper-left corner** of the canvas has the coordinates (**0,0**).

## Drawing on the Canvas
#### To draw a straight line on a canvas, use the following methods:

-   moveTo(_x,y_) - defines the starting point of the line
-   lineTo(_x,y_) - defines the ending point of the line

To actually draw the line, you must use one of the "ink" methods, like stroke().

```js
	ctx.moveTo(0, 0);  
	ctx.lineTo(200, 100);  
	ctx.stroke();
```

#### To draw a circle on a canvas, use the following methods:

-   beginPath() - begins a path
-   arc(x,y,r,startangle,endangle) - creates an arc/curve. To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI. The x and y parameters define the x- and y-coordinates of the center of the circle. The r parameter defines the radius of the circle.

#### To draw an image on a canvas, use the following method:

-   drawImage(_image,x,y_)

```js
	window.onload =  function() {  
	var canvas = document.getElementById("myCanvas");  
	var ctx = canvas.getContext("2d");  
	var img = document.getElementById("scream");  
	ctx.drawImage(img, 10, 10);  
	};
```

It is important to use some kind of onload event, above we are using window.onload, but we can also fetch an image from a url and use the image.onload :

```js
    var imageObj = new Image();
    imageObj.src = 'url/to/the/image.jpg';
    imageObj.onload = function() {
      context.drawImage(imageObj, x, y, width, height);
    };
```     


#### How to clear the canvas for redrawing
```js
	context.clearRect(0, 0, canvas.width, canvas.height);
```

## Saving the Canvas image :
A Data URL,  in the context of an image, is essentially the binary data of an image file encoded in [Base64](https://en.wikipedia.org/wiki/Base64), to be displayed as an ASCII string.

```js
const dataURL = canvas.toDataURL();
```
So we need to call the toDataurl method on the canvas, to get the base64 data of the image which looks similar to this: 
```js
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAE...
```
This data can be sent through a fetch post request, and can be handled by the backend, by converting the data after comma, ie ```iVBORw0KGgoA...``` to an image. (In python, the string is first converted to a bytes like object, and then it is decoded from base64, and then saved to a file.)

There is also a [toBlob](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob) method of the canvas, using which we can convert it to a blob, but I'm not sure how to save the image from the blob.
