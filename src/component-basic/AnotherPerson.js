import React from 'react';
import ReactDOM from 'react-dom';
//zzz
const PersonProfile = function(props) {
    const {name, age, gender, profile} = props.person
    return (
    <div className='person' style={props.highlight ? {color: 'red'} : null}>
    <h1>Profile</h1>
    <img src={profile} />
    <p>name : {name}</p>
    <p>age : {age}</p>
    <p>gender : {gender}</p>
    <p>gender2 : {gender}</p>
    </div>
    )
}

const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}

const { name, gender, ...rest } = anotherPerson
console.log(rest)   

ReactDOM.render (
    <div>
        {
        /*<PersonProfile
            name = "서연" age = {19} gender="female"
            profile = "http://file3.instiz.net/data/cached_img/upload/2022/01/25/13/1bb59d2f5f47787c360e179afac84168.jpg"/>
        */}

        {/* <PersonProfile {...anotherPerson} highlight/> */}

        {/* <PersonProfile
            name={anotherPerson.name}
            age={anotherPerson.age}
            gender={anotherPerson.gender}
            profile={anotherPerson.profile}/> */}
            
        <PersonProfile
            name="ken" gender='male' {...rest} age={32} />
    </div>,
    document.getElementById("root")
)
    