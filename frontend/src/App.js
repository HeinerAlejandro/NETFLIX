import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import routes from './constants/routes'

function App() {

  return (
      <Router>
        <>
          <Route 
            { ...routes.home }
          />

          <Route 
            { ...routes.login }  
          />

          <Route 
            { ...routes.register }
          />

           <Route 
            { ...routes.entry_content }
          />
        </>
      </Router>
  )
}

export default App;
