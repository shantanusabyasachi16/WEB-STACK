USESTATE:

UseState is a hook in React that lets you add state to functional components. It allows a component to maintain state between renders.

When a state of components changes react re renders the components to reflect the updated state.

const [stateVariable, setStateFunction] = useState(initialState);

*stateVariable: The current state value.(VARIABLE)
*setStateFunction: A function to update the state.(FUNCTIONS)
*initialState: The initial value of the state.

BENIFITS

*Simple State Management: Easy to add and manage state in functional components.
*Local State: Each useState call manages a separate piece of state.
*Reactivity: State changes cause the component to re-render with updated values.

COMPONENTS:

In React, components are the building blocks of a React application

There are two main types of components in React: functional components and class components.

**Functional Components

Functional components are the simplest way to write components in React. They are JavaScript functions that return JSX (a syntax extension that looks similar to HTML). With the introduction of Hooks, functional components can now manage state and use lifecycle methods.

**Class Components

Class components are ES6 classes that extend from React.Component. They have a render method that returns JSX. Class components can also hold and manage state and use lifecycle methods

*Key Differences

Syntax:
Functional components are simpler and use functions.
Class components use ES6 classes.


State Management:
Functional components use the useState hook for state.
Class components use this.state and this.setState.

Lifecycle Methods:
Functional components use hooks like useEffect for lifecycle methods.
Class components use lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
Hooks



PROPS:

"props" (short for properties) are used to pass data from one component to another, typically from a parent component to a child component. Props are read-only and should not be modified by the receiving component.

*Props: Used to pass data from parent to child components.
*Read-only: Props cannot be modified by the child component.
*Default Props: You can set default values for props using defaultProps.
*Prop Types: Validate the type of props using PropTypes.