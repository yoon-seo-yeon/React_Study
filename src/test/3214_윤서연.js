/* 3214 윤서연 */
import React, {useState, setLikeState} from 'react';
import ReactDOM from 'react-dom';

function Circle(props) {
    return <div style={{
        width: props.radius,
        height: props.radius,
        borderRadius: "50%",
        background: props.color
    }}></div>
}
ReactDOM.render(<Circle radius = "50px" color = "red"/>, document.getElementById("root"))

function Gugudan({from, to}) {
    let array = [];

    for (let i = from; i <= to; i++) {
        for(let j = 2; j <= 9; j++) {
            array.push(<p>{i} X {j} = {i * j}</p>)
        }
    }

    return <div>{array}</div>
}
ReactDOM.render(<Gugudan from = {3} to={5}/>, document.getElementById("root"))

function LikeButton(props) {
    const [likeState, setLikeState] = useState(0)

    let likeResult = ""
    if(likeState === 1) likeResult = "👍"
    if(likeState === -1) likeResult = "👎"

    return <div>
        {/* <p>{likeState !== 0 ? (likeState === 1 ? "+1" : "-1") : null}</p> */}
        <p>{likeResult}</p>
        <button style = {likeState === 1 ? {background : "blue"} : null} onClick = {() => likeState === 1 ? setLikeState(0) : setLikeState(1)}>좋아요</button>
        <button style = {likeState === -1 ? {background : "red"} : null} onClick = {() => likeState === -1 ? setLikeState(0) : setLikeState(-1)}>싫어요</button>
    </div>
}
ReactDOM.render(<LikeButton/>, document.getElementById("root"))