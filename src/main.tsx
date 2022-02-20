import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {default as App} from './App/StyledApp';

ReactDOM.render(
  <React.StrictMode>
    <App className='app'/>
  </React.StrictMode>,
  document.getElementById('root')
)
