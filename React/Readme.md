# React Basics

## Prerequisites and setting up
Visual Studio Code
Node

## Starting a new react app
We need to be in a completely blank folder, and the folder name should not have Capital letters or spaces in it. Generally we use hyphens, like my-first-react-app.
Run the following to create a new react app :

    npx create-react-app .
npx (instead of npm) is used to allow us to *execute* the create-react-app package (instead of installing it). And the period just indicates that use *this* or *current* folder. 
Note that create-react-app works with only some versions, so if it gives any error, download the suggested node version or the latest lms version. For managing node versions, it is best to use nvm. If using Windows machine, use nvm for windows. Once nvm is installed :

    //confirm that nvm is installed
    nvm version
    
    //list all the node versions available
    nvm list
    
    //Install a node version.
    //The version can be a specific version, "latest" for the latest current version, 
	    or "lts" for the most recent LTS version.
    nvm install <version>
    
    //Specify which version of node to use 
    nvm use <version>



To start the application run :

    npm start

This will run the app at localhost:3000

If you want a blank app, all the logos, css files, test files, css imports, service worker, can be safely deleted. The index.js, index.html, package.json, package-lock.json files and the node_modules folder are important.

## Learning the basics
[Create-react-app](https://create-react-app.dev/docs/getting-started/) will create a basic react app which will have an index.html with a body containing only one div of id-root. React will be putting our entire app into this root div.
The application starts in src folder in index.js at this line :

    ReactDOM.render(<App />, document.getElementById('root'));

The above line tells react to render the whole App component into the root div of index.html. 

Components are the main building blocks of a react app, and [Components](https://reactjs.org/docs/components-and-props.html) allow us to split the UI into independent, reusable pieces, and think about each piece in isolation.
In these components, we return a html lookalike - [JSX](https://reactjs.org/docs/introducing-jsx.html) - or Javascript XML which is a syntax extension to JavaScript. It looks like html, but under the hood it expands to React "elements" (this can be witnesssed at [babeljs.io](https://babeljs.io/)). In jsx we can write jaavascript inside curly braces { < code > }

A component is just a js file. 
The plugin - ES7 React/Redux/ snippets, helps us in using shortcuts for boilerplate react code. In a file named Todo.js, pressing **rfc** and hitting enter creates a new React function component named Todo.

We can pass in props to a component, just as we pass attributes to an html tag. for ex :

    // definition of the TodoList Component
    export default function TodoList({ todolist })
    
    // using the TodoList component in another Component, for ex- App
    <TodoList todolist={todos}/>

Note : If we want to return multiple components at once, then we need to wrap then in <React.Fragment> or <> for short.

## React Hooks

### useState hook
In react we manage the state of the app, and when the state changes, we rerender the app. In order to make use of State in a function component :

    import React, { useState } from 'react';
    const [var, setVar] = useState("defaultVal");

We are doing object destructuring above, because useState returns an array.

Setting the value of a variable :

    setVar("newValue");

Setting the value of an array :

    setTodos((prevTodos) => {
	    return [...prevTodos, newTodoObject]
	});

Note that each time the set function is called, the component will be rerendered.


### useRef hook
useRef allows us to reference elements inside of our html. For example, let us say we have an input textbox :

    <input type='text' />

then we can access it using useRef thus :

    const textboxRef = useRef()
    
    // referencing the text box
    <input ref={textboxRef} type='text' />
    
    //Accessing the textbox's value
    const userInput = textboxRef.current.value

## Statements and Expressions
We saw that a component is just a function. So if we want to return an array of 

Lets first look at [expressions and statements](https://victorofoegbu.com/notes/loop-inside-react-jsx-faq). The easiest way to differentiate statements from expressions is their output. An expression produces a value while a statement is executed to make something happen. Example of statements are `if/else`, `for loops`, `switch statements`, etc. While examples of expressions are function calls, `map`, `ternary operation`, `filter` etc. Actually just `"foo"`, `{foo: 'bar'}`, `[1,2,3]`, or `42` are also expressions, they are called `literals` (string, object, array and number literal) because they just return their literal value. A good place to start is to prefer expressions over statements in react jsx.
-   Use  `tenary operators`  in place of  `if/else`  statments
-   Use  `map`  in place of  `for loops`
-   Use  `&&`  instead of  `switch`

Its not like these are good or bad, they're just easier to think of in the context of JSX.


## Looping (Rendering multiple components)
As we saw it is better to prefer expressions like map over statements like for loop. Morover, a react component expects either a string, another component, or an array of components. For loops do not return any of these, whereas map will return an array. Hence if we want to [return multiple components](https://reactjs.org/docs/lists-and-keys.html)(let us say returning multiple todo components in a todolist component), it is preferred to use map as follows:

    todolist.map((mytodo) => {
	    return <Todo key={mytodo.id} todo={mytodo} />
	})

Note that we use key attribute which should have a unique value. This key is necessary to help react tell which element is new, so that it doesn't inefficiently mutate all the elements. (for more detail on the need of key, [read this](https://reactjs.org/docs/reconciliation.html#recursing-on-children))
