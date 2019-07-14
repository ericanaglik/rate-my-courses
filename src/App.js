import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import SignUp from './SignUp'
import LogIn from './LogIn'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
        {/* <SignUp /> */}
        <Route path="/login" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
        
        </BrowserRouter>
    </div>
  );
}

export default App;
