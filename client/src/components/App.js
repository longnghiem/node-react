import React from 'react'
import { BrowserRouter, Route, NavLink} from 'react-router-dom'

const Landing = () => <h2> Landing </h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component= {Landing} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App