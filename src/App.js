import React, { Component } from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import Bonus from './components/bonus';
import Faq from './components/faq';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path='/' component={Bonus}/>
        <Route exact path='/faq' component={Faq}/>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
