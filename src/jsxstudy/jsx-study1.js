import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Josh Perez'
// 변수 내용 삽입 가능
const element = <h1>Hello, {name}</h1>

const lst = [100, 200, 300]
const person = {
    name: 'John',
    age: 20
}
function double(value) {
    return value * 2
}

const JSXwithExpressions = (
    /* JSX 주석 */
    <h1>
        {lst[0]}
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)}
    </h1>)

ReactDOM.render(JSXwithExpressions, document.getElementById('root'));