import React from 'react';
import ReactDOM from 'react-dom'

// 함수 선언식을 통해서 컴포넌트 정의 가능
function Cat() {
    return <div>🐱</div>
}

// 함수 표현식을 통해서 컴포넌트 정의 가능
const Dog = function() {
    return <div>🐶</div>
}

// 화살표 함수로 컴포넌트 정의 가능
const Pig = () => <div>🐷</div>

function AnimalContainer() {
    return (
        /* 일반적인 태그 사용 가능 */
        //div를 없애는 순간 오류가 남 무조건 있어야 함 그게 약속임
        //<React.Fragment>으로 대체 가능
        //<> </>으로도 대체 가능

        //<div style={{fontSize: "100px"}}>  
        //<React.Fragment>
        <>
            {/* 이미 정의한 컴포넌트들도 JSX 내부에서 사용 가능 */}
            <Cat />
            <Dog />
            <Pig />
        </>
        //{</div>}
        // </React.Fragment> 
    )
}

ReactDOM.render(<AnimalContainer />, document.getElementById("root"))