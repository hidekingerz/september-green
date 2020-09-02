import React from 'react'
import ReactDOM from 'react-dom'
import Panel from './component/panel'
var name = 'webpack'
console.log(`Hello ${name}`)
ReactDOM.render(<Panel />, document.getElementById('app'))
