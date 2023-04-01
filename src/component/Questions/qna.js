const questions = [
    {
        id: 1,
        question: "Props vs State",
        answer: `Props are short for properties and are passed down from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are used to configure and customize a component, allowing it to be reusable across multiple parts of an application.
        Example: if we have a component that displays a user's name and profile picture, we might pass in the user's information as props to the component.
        
        State, on the other hand, is used to manage internal data within a component. It is mutable and can be changed by the component itself. State is used to keep track of information that can change over time, such as form input data, user interactions, or the results of an API call.
        Example: if we have a form component that allows a user to enter their email address, we might use state to store the value of the input field as the user types.
        
        It's important to note that changing the state of a component will trigger a re-render of the component and its child components. In contrast, changing a prop will not trigger a re-render, because props are read-only.
        `
    },

    {
        id: 2,
        question: "How does useState work?",
        answer: `In React, the useState hook is used to add state to a functional component. The useState hook is a built-in function that returns an array containing two elements: the current state value and a function to update that state value.

        Here's how the useState hook works:
        First, we have to import the useState hook from the 'react' library:
        import React, { useState } from 'react';
        
        Then, inside your functional component, we call the useState hook, passing in an initial value for state variable:
        const [count, setCount] = useState(0);
        In this example, count is the state variable, and setCount is the function used to update count. The initial value of count is 0.
        
        We can now use count and setCount in component as we would with any other variable or function.
        
        The useState hook can be used to manage multiple state variables in a component, and can be called multiple times with different initial values. useState is a powerful and easy-to-use hook that makes it simple to add state to functional components in React.
        `
    },
    {
        id: 3,
        question: "Purpose of useEffect other than fetching data.",
        answer: `The useEffect hook in React is used to handle side effects in a functional component. In other words, it allows us to perform certain actions in response to certain events, such as changes to the component's props, state, or lifecycle.

        The primary use case for useEffect is to fetch data from an external API or perform other asynchronous operations when a component mounts or updates. By using useEffect, we can ensure that the data is fetched or other actions are performed only when necessary, and that the component is updated to reflect the latest data.

        But it has some other usage also. Some of those are:
        1. Perform some task when value of variable or other things changes or updates by declaring dependencies as an argument. When any dependencies changes it re-renders the function within useEffect.
        2. Setting up event listeners: useEffect can be used to set up event listeners.
        3. Clean up after a component: useEffect can be used to perform clean up tasks when a component is unmounted, such as removing event listeners or canceling pending requests.
        4. Triggering animations: useEffect can be used to trigger animations based on state changes or other events.
        `
    },
    {
        id: 4,
        question: "How Does React work?",
        answer: `React is a powerful and flexible library for building user interfaces in JavaScript. React works by breaking down the UI into reusable components that can be composed together to create complex UIs.

        The core idea of React is that the UI should be a function of the application's state. When the state changes, React updates the UI to reflect those changes. This approach to building UIs is often called "declarative programming" because we declare what we want the UI to look like, and React handles the details of how to update it.
        
        To create a React application, we start by defining a root component that renders the entire application. This root component can contain child components, each of which can contain their own child components, and so on. Each component is responsible for rendering a specific part of the UI and can be reused throughout the application.
        
        When a component is first rendered, React creates a "virtual DOM" tree that represents the structure of the UI. This virtual DOM is a lightweight representation of the UI that React can manipulate more efficiently than the actual DOM.
        
        When the state of the application changes, React updates the virtual DOM to reflect those changes. It then compares the updated virtual DOM to the previous version of the virtual DOM and calculates the minimum set of changes needed to update the actual DOM. This process is known as "reconciliation", and it's what allows React to update the UI efficiently.
        
        By using the virtual DOM and carefully managing updates to the actual DOM, React provides a fast and responsive user interface that can handle complex interactions and dynamic data.
        `
    }
]

export { questions };