# React Hooks

React hooks are used in functional components


## useState hook
In react we manage the state of the app, and when the state changes, we rerender the app. In order to make use of State in a function component :

```js
    import React, { useState } from "react";
    const [myVar, setMyVar] = useState("defaultVal");
```

We are doing object destructuring above, because useState returns an array.

Setting the value of a variable :
```js
    setMyVar("newValue");
```

Example of using previous value - Adding an item to an array
```js
    setTodos((prevTodos) => {
	    return [...prevTodos, newTodoObject]
	});
```

Note : 
- Each time the set function is called, the component will be rerendered.
- SetState is asynchronous, and React does not guarantee that the state changes are applied immediately. **setState() does not always immediately update the component.** [Read here](https://reactjs.org/docs/react-component.html#setstate) 



## useRef hook
useRef allows us to reference elements inside of our html. For example, let us say we have an input textbox :

```html
    <input type='text' />
```

then we can access it using useRef thus :

```js
    const textboxRef = useRef()
    
    // referencing the text box
    <input ref={textboxRef} type='text' />
    
    //Accessing the textbox's value
    const userInput = textboxRef.current.value
```

## useEffect hook

The Effect Hook lets you perform side effects in function components, after the component renders. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. By default, useEffect runs both after the first render and after every update.

There are two types of effects : 
### Effects that don't require cleanup

- Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can run them and immediately forget about them.

### Effects that require cleanup

- For example, we might want to set up a subscription to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak!

The Class component comparison to useEffect are the methods componentDidMount, componentDidUpdate, and componentWillUnmount.

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

Tip : You can have multiple effects in seperate useEffect hooks, to separate the concerns.


To limit the number of times the effect runs, we pass in an optional second array argument.
```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

To run the effect only after the first render, pass in an empty array.
```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, []); // Only run the effect once after initial render.
```

## useContext hook

When we use useState, that state is bound with the component in which we defined it. If we want to use a state that can be available across components, then we need to use the createContext and useContext functions.

The most efficient way to do this is to create a ContextProvider file, for example take a look at the myContextProvider.js :

```js
import React, { useContext, useState } from "react";

// Create and export the context to be used
export const MyContext = React.createContext();

export function MyContextProvider({ children }) {
  const [myVar, setmyVar] = useState("Hello");

  return (
    <MyContext.Provider value={[myVar, setmyVar]}>
      {children}
    </MyContext.Provider>
  );
}
```

Now, in App.js, we wrap the return element, with our Context Provider :
```js
import { MyContextProvider } from "./myContextProvider";

const App = (props) => {
  return (
    <MyContextProvider>
      <div className="app-container">
        <Welcome />
      </div>
    </MyContextProvider>
  );
};

```

Now, we can use this myVar state, in all the children of the App component (which is basically all the components.). Let's see how to use it in the `Welcome` Component :

```js
import React, { useContext } from "react";
import { MyContext } from "../ModelProvider";

const Welcome = (props) => {
    
    const [myVar, setmyVar] = useContext(MyContext);
    setmyVar("Hello World");

    return (
        <h1> {myVar} </h1>
    )
```

Note : if you get an error like `undefined is not iterable` when using UseContext, the solution is to initialise it with an empty array like this :
```js
export const MyContext = React.createContext([]);
```


# Practice Questions

1. What will be the output in below code
    ```js
    const MyComponent = () => {

      const [myState, setMyState] = useState(0);
      let isFirstRender = true;

      useEffect(() => {
        if (isFirstRender) {
          console.log("First Render");
        }
        else {
          console.log("Not the first render");
        }
      }, [myState]);

      isFirstRender = false;
      setMyState(10);
    
    }
    ```

    1.     First Render
           Not the first render

    1.     First Render
           First render

    Answer : option 2.

    Explanation : Everytime the state changes, a rerender will happen, and everytime the component is re-rendered, all the variables declared outside of the state are re-created. So although isFirstRender is set to false, as soon as myState changes causing a re-render, isFirstRender is again created and initialised to true.



2. What will be the output in below code
    ```js
    const MyComponent = () => {

      const [myState, setMyState] = useState(5);

      useEffect(() => {
          console.log("MyState value : ", myState);
      }, [myState]);

      setMyState(10);
      setMyState(10);
    
    }
    ```

    1.     MyState value : 5
           MyState value : 10

    2.     MyState value : 5
           MyState value : 10
           MyState value : 10

Answer : option 1.

Explanation : A re-render happens only when the state changes, and not everytime the setState method is called.
