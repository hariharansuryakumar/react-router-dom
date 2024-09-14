import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import All from './components/All'
import FullStackDevelopment from './components/FullStackDevelopment'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import Career from './components/Career'


function App() {
  

  return (
    <div className="app">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' Component={All}/>
          <Route path='/fullstackdevelopment' Component={FullStackDevelopment}/>
          <Route path='/datascience' Component={DataScience}/>
          <Route path='/cybersecurity' Component={CyberSecurity}/>
          <Route path='/career' Component={Career}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App