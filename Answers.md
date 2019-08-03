# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a commonly used JavaScript library used for building user interface whose main purpose is to build powerful applications.  It can be used as a base in the development of single page or mobile applications.

 It tries to solve some of the major problems faced when dealing with complex states, such as constantly changing data and worldwide multiple users.
----------------------------------------------------------------------------------------------

2. What does it mean to think in react?

'Thinking' in React means separating your user interface into components and thinking about
how to transition from one state to another.
----------------------------------------------------------------------------------------------

3. Describe state.

State is the data held by components that can be shared with other components.
----------------------------------------------------------------------------------------------

4. Describe props.

Props are immutable variables passed to it by its parent component.  They are used to
write reusable code.
----------------------------------------------------------------------------------------------

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed.  It can cause a component to return a different output for the same state and props.  The effect hook (useEffect()) s one React tool that is used to manage side effects in order to avoid bugs and inconsistencies in an app.  You can determine which state or props the sffect should sync by using a dependency array as the second argument in the effect hook.
