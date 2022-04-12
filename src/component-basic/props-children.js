import React from 'react';
import ReactDOM from 'react-dom';

const Child = props => <div>{props.children}</div>
const ChildWithFunctionProp = props => <div>{props.children()}</div>
const ChildWithRenderProp = props => <div>{props.render()}</div>

ReactDOM.render(
    <>
        <Child>Hello</Child>

        <Child>Seo Yeon</Child>

        <Child>
            <h1>title</h1>
            <div>
                <p>para</p>
            </div>
        </Child>

        <ChildWithFunctionProp>
            {() => <div>Function Prop</div>}
        </ChildWithFunctionProp>
        
        <ChildWithRenderProp render = {() => <div>Render Prop</div>}/>
    </>,
    document.getElementById("root")
)