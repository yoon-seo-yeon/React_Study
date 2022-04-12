// 함수 인자값을 전달받으면서 비구조화 할당 진행

import React from 'react';
import ReactDOM from 'react-dom';

const PersonProfile = function({ name, age, gender, profile, highlight }) {
    return (
    <div className='person' style={highlight ? {color: 'red'} : null}>
    <h1>Profile</h1>
    <img src={profile} />
    <p>name : {name}</p>
    <p>age : {age}</p>
    <p>gender : {gender}</p>
    </div>
    )
}

ReactDOM.render (
    <div>
        <PersonProfile
            name = "서연" age = {19} gender="female"
            profile = "http://file3.instiz.net/data/cached_img/upload/2022/01/25/13/1bb59d2f5f47787c360e179afac84168.jpg"/>
    </div>,
    document.getElementById("root")
)