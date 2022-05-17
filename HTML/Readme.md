# HTML

## Barebones

The HTML boilerplate looks like below, and in VS-code, `!` is the Emmet Abbreviation for this boilerplate.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- The DOCTYPE declaration is used to tell the browser what version of HTML it should use to render the document. The doctype for HTML5 is simply html. (for older versions it used to be a bit complicated.)
- After DOCTYPE declaration, we provide the `<html>` tag (also known as the root element), and every other element in the document is a decendent of this.
- In the `<head>` tag, we put important meta information about our webpage, and other things required for correctly rendering the webpage.
  - Setting the `<meta>` tag for charset encoding is very important to ensures that the webpage will display special symbols and characters correctly in the browser. Again, UTF-8 iss the preferred charset that should take care of everything, but if curious, take a look at all the encodings available [here](https://encoding.spec.whatwg.org/#names-and-labels).
  - The title provided in the `<title>` tag, will appear as the name of the tab in our browser, like shown below :
    ![](https://github.com/nagraj98/Learnings-and-templates/blob/main/assets/HTML/titleTag.png)
- Finally the `<body>` tag is where all the content to be displayed on the webpage goes - text, images, lists, etc.

Comments in html are written inside `<!-- -->`
```html
<!-- This is an html comment -->
```

## Text Basics


#### Heading
HTML provides 6 levels of headings : ***h1 > h2 > h3 > h4 > h5 > h6***
```html
<h1>Biggest Heading</h1>
```

#### Paragraph
```html
<p>This is a paragraph</p>
```
#### Linebreak
The self-closing tag `<br>` is used for linebreak/newline.

#### Ordered (Numbered) List
```html
<ol>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ol>
```
Tags also have some attributes using which we can change some behaviour, for example :
```html
<!-- This will use letters a, b, c, ... instead of numbers-->
<ol type='a'>

<!-- This will use letters A, B, C, ... instead of numbers-->
<ol type='A'>

<!-- This will use numerals i, ii, iii, ... instead of numbers-->
<ol type='i'>
```

#### Unordered (Bulletpoints) List
```html
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
```

#### Linking pages
The anchor tag is used for linking other webpages in our document.
```html
<a href = "https://tinsandwich.medium.com/">Checkout my Medium</a>
```


## Media basics

#### Adding an Image
```html
<img src="https://" />
```

#### Adding a Button
```html
<button> Click Me </button>
```

#### Creating a form
```html
<form>
    Enter your name : <input type = "text"/>
    Enter your email-id : <input type = "email"/>
    <button>Submit form</button>
</form>
```

#### Creating a table


```html
<table>
    <caption> HTML table </caption>
    <tr>
        <th> Name </th>
        <th> Role </th>
    </tr>
    <tr>
        <td> Nagraj </td>
        <td> Developer </td>
    </tr>
</table>
```

Where,
- `<tr>` = Table Row
- `<th>` = Table Header (Column name)
- `<td>` = Normal Data Cell.

#### Making sections using div

```html
<div id="topDiv" class="RedBox">
    This is a section/division on the webpage.
</div>
```


## Lifecycle of video element in chromium

[read here](http://abhijeetk.github.io/Video-rendering-in-chromium(Sequence-diagram)/)





