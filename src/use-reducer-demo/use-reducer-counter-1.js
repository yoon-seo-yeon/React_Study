import React, { useReducer } from "react"
import ReactDOM from "react-dom"


const Action = {
    INCREASE : 'INCREASE',
    DECREASE: 'DECREASE',
    ADd: 'ADD'
}
// reducer 함수 정의 (함수의 역할은 이전 상태를 받아서 새 상태를 반환하는 것 (단, 이전 상태는 불변으로 취급))
// reducer 함수는 순수 함수(pure function)임을 유의
function reducer(state, action) {
    // 전달된 파라미터값의 의미
    // (state => 이전 상태값, action => dispatch 함수를 통해 전달된 action)
    switch(action.type) {
        case Action.INCREASE:
            return { count: state.count + 1 }
        case Action.DECREASE:
            return { count: state.count - 1 }
        // 추가 정보값(payload)을 전달받는 ADD 액션 추가
        case Action.ADD:
            return { count: state.count + action.payload }
        default:
            return state
    }
}

function CounterUsingReducer(props) {
    // useReducer 함수로 reducer 함수와 초기 상태(객체) 전달
    // 반환값은 현재 상태(state)와 액션 값을 전달할 dispatch 함수
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <p>count : { state.count }</p>
            {/*
                dispatch 함수를 통해 액션값 전달
                (액션값의 타입은 아무거나 가능(보통은 객체 사용), 여기서는 문자열 전달)
            */}
            <button onClick={() => dispatch({type: Action.INCREASE})}>INCREASE</button>
            <br />
            <button onClick={() => dispatch({type: Action.DECREASE})}>DECREASE</button>
            <br />
            <button onClick={() => dispatch({ type: Action.ADD, payload: 10 })}>ADD 10</button>
            <br />
            <button onClick={() => dispatch({ type: Action.ADD, payload: -10 })}>SUB 10</button>
        </div>
    )
}

ReactDOM.render(<CounterUsingReducer />, document.getElementById("root"));