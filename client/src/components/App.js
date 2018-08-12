import React from 'react'
import { BrowserRouter, Route, NavLink} from 'react-router-dom'

const Landing = () => <h2> Landing </h2>
const Dashboard = () => <h2> Dashboard </h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component= {Landing} />
          <Route path="/surveys" component= {Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App