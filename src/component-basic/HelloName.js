/*
Q) 컴포넌트로 name 속성값을 전달하면 "Hello, {name}"을 내용을 출력하는 
h1 요소가 있는 Greeting 컴포넌트 정의 (A: sol_greeting)
*/
import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = function({name, age}) { //{}없으면 아무것도 안뜸
    return <h1>Hello, {name} {age}</h1>
}

ReactDOM.render(<Greeting name= "윤서연, " age= {19}/>, document.getElementById('root')); 