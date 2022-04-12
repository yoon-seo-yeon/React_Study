import React from 'react';
import ReactDOM from 'react-dom';

// props를 통해서 전달된 값에 접근 가능
const ComponentWithProps = function(props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

//문자열이 아닌 숫자형을 표현하기 위해 {1}
//ReactDOM.render(<ComponentWithProps value={1}/>, document.getElementById('root')); 

ReactDOM.render(<ComponentWithProps value={{a : 1, b : "React"}}/>, document.getElementById('root')); 