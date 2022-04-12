import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Counter = function(props) {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("a")

    //밑의 세 줄은 위의 것과 같다.
    // const arr = useState(0)
    // const count = arr[0]
    // const setCount = arr[1]

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
            {/* </div><button onClick={() => setCount(count - 1))}>a 추가</button> */}

            <h1>{text}</h1>
            <button onClick={() => setText(text + "a")}>a 추가</button>
        </div>
    )
}

const UserProfile = props => {
    const[userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState(0)
    const [emailAddress, setEmailAddres] = useState(null)

    return (
        <div>{"윤서연"} {"19"} {"s2013"}</div>
    )
}

const StateDemoComponent = function(props) {
    // 저장할 상태값과 관련된 제약이 없으므로 객체도 저장 가능
    const [state, setState] = useState({
        value1: "hello",
        value2: 1000
    })

    return (
        <div>
            <button onClick={() => {
                if(state.value1 === "hello") {
                    // 기존 객체를 복사하는 과정에서 새롭게 값을 갱신해주는 것을 확인 가능
                    setState({ ...state, value1: "bye" } )
                } else {
                    setState({ ...state, value1: "hello" } )
                }
            }}>{state.value1}</button>
            <br />
            <button onClick={() => {
                setState({ ...state, value2: state.value2 * 2 } )
            }}>{state.value2}</button>
        </div>
    )
}


ReactDOM.render(<StateDemoComponent/>, document.getElementById('root'));