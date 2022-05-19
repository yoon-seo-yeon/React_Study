/* 3214 윤서연 */
import React from 'react';
import ReactDOM from 'react-dom';
import circle from './Circle.css';

const Circle = function(props) {
    return <button className={`${style.color} ${style.border}`}></button>
    //return <div style = {{circle = props.radius}}
}
//ReactDOM.render(<Circle radius = "50px" color = "#ff0000"/>, document.getElementById("root"))

const Gugudan = function(props) {
    let array = [];

    for (let i = props.from; i <= props.to; i++) {
        for(let j = 2; j <= 9; j++) {
            array.push('${i}' + '*' + '${j}' + '${i*j}')
        }
    }
}
ReactDOM.render(<Gugudan from = {3} to={5}/>, document.getElementById("root"))