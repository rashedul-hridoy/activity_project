import React from 'react';

const Questions = () => {
    return (
        <div>
            <h2>How Does React Work?</h2>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h2>Difference between State and Props</h2>
            <p>
                1. Props are read-only. State changes can be asynchronous. <br />
                2. Props are immutable. State is mutable. <br />
                3. Props allow you to pass data from one component to other components as an argument.State holds information about the components. <br />
                4. Props can be accessed by the child component. 	State cannot be accessed by child components.
            </p>
            <h2>Other Uses of useEffect other than loading data</h2>
            <p>
                1. validating input field <br />
                2. live filtering <br />
                3. trigger animation on new array value.
            
            </p>
        </div>
    );
};

export default Questions;