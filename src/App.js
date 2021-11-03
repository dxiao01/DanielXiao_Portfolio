import React from 'react'
import Topbar from './components/Topbar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import path from './components/utils/path'

function App() {
  
  
  return (
    
    <Router basename="/DanielXiao_Portfolio">
      <Topbar/>
      <div class="w-full h-section relative top-20 overflow-y-scroll
       hide-scrollbar-chrome hide-scrollbar-firefox">
         <Switch>
          <Route exact path={path.root} component = {Intro} />
          <Route path={path.projects} component = {Portfolio} />
          <Route path={path.contact} component = {Contact} />
        </Switch>
      </div>
    
    </Router>
    
  );
}

export default App;
