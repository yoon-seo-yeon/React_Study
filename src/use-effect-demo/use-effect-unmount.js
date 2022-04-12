import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import Toggler from "./Toggler"

function UseEffectUnmountDemo(props) {
    const [count, setCount] = useState(0)
    
    // 의존 배열로 빈 배열([])을 전달했음을 유의! (컴포넌트가 mount 되는 시점에 호출)
    useEffect(() => {
        // 타이머 시작
        const id = setInterval(function() {
            console.log('setCount')
            setCount(c => c + 1)
        }, 1000)
        console.log('mount 진행)')

        // 반환하는 함수는 컴포넌트가 unmount 되는 시점에 호출
        return () => {
            // 타이머 정리
            clearInterval(id)
            console.log('unmount 진행')
        }
    }, [])

    return <div>{count}</div>
}

ReactDOM.render(<Toggler><UseEffectUnmountDemo /></Toggler>, document.getElementById("root"))