import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Switch, Route } from 'wouter'
import Home from './Home'
import Navbar from './components/Navbar'
import ErrorPage from './ErrorPage'
import Portal from './Portal'
import Registry from './Portal/Registry'
import InCourse from './Portal/InCourse'
import History from './Portal/History'
// Express js
// Nodejs
//
import { UserContextProvider } from './Context/UserContext'

function App() {
  return (
    <>
     <div className='App'>
      <UserContextProvider>
        {/* <Router> */}
          <Navbar />
          <Switch>
            <Route path='/' component={Home} />
            <Route path='*' component={ErrorPage} />
            <Route path={'/:username'} component={Portal} />
            <Route path={'/:username/registry'} component={ Registry } />
            <Route path={'/:username/inCourse'} component={ InCourse } />
            <Route path={'/:username/history'} component={ History } />
          </Switch>
        {/* </Router> */}
    </UserContextProvider>
    </div>
    </>
  )
}

export default App
