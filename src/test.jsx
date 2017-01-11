import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';

function Hello() {
    var imgUrl = require('./assert/1.jpg');
    return (
        <div>
            <img src={imgUrl} />
            <Button>Test</Button>
        </div>
    )
}

render((
    <div>
        <Hello></Hello>
    </div>
), document.getElementById('root'));