import React, { useState } from "react";
import StateExample from "./FunctionalComponents/JSX/ChildComponents/StateExample";

const State = () => {

    

    return (
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>useState is Unique to Functional Components</dt>
                    <dd>Class components have a separate means of using and changing state.</dd>
                    <dt>useState Uses Array Destructuring</dt>
                    <dd>useState proves a state variable and a setState function.</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a hook baked into React.</dd>
                    <dt>Triggers Re-render</dt>
                    <dd>Like with props changes, changing the state of a component re-renders the whole component.</dd>
                </ul>
                <StateExample />
            </div>
        </div>
    )

    
}

export default State;