import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const AppWrapper = () =>
  <React.StrictMode>
    <App />
  </React.StrictMode>

ReactDOM.render(<AppWrapper />, document.getElementById('root'))
