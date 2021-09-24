import './App.css'
import HomePage from './components/homePage/HomePage'
import Login from './components/login/Login'
import Register from './components/login/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div className='app'>
      <Router>
        <Switch>

          <Route exact path='/'>

            <HomePage />

          </Route>

          <Route path='/login'>
            <Login />
          </Route>
          
        </Switch>
      </Router>
    </div>
  )
}

export default App
