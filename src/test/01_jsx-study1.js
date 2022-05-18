import React from 'react';
import ReactDOM from 'react-dom';

const img = React.createElement (
    'img', 
    {
        src : 'https://picsum.photos/id/237/200/300',
        title : 'img title'
    }
)

console.log(img)

ReactDOM.render(img, document.getElementById("root"))