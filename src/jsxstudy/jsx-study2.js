import React from 'react';
import ReactDOM  from 'react-dom';

//boolean 값, undefined, null 반환
const div = <div>
    @
    {true}
    {false}
    {undefined}
    {null}
    @
</div>

//읽지 않은 메세지
const unreadMessages = [];
const div2 = <div>
<h1>Hello!</h1>
    {/* 만약 읽지 않은 메시지가 있다면 경고문을 출력 */}
    {
        unreadMessages.length > 0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2> 
    }

    {
         unreadMessages.length > 0 ?
         <h2>You have {unreadMessages.length} unread messages.</h2> : <h2>메세지 다 읽음</h2>
    }
</div>

// 조건문
function conditionalRender(age) {
    if(age >= 20) {
        return <div>성인</div>
    } else {
        return <div>미성년자</div>
    }
}
const div3 = <div>
    {conditionalRender(18)}
</div>

//위의 걸 삼항연산자로 바꾼 것
const age = 20
const div4 = (
    <>{age >= 20 ? <div>성인</div> : <div>미성년자</div>}</> //<></> --> div
)

//인라인 스타일 정의하기
const h1 = <h1 style={{color: "red", backgroundColor: "lightblue"}}>Hello Style!</h1>


ReactDOM.render(h1, document.getElementById('root'));