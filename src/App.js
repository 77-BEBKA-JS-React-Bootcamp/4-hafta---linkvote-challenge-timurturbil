import React from 'react';
import './App.css';
import ListScren from './view/List_Screen';
import NewLink from './view/Adding_Link/Adding_Link_Screen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
     <Route exact path="/">
            <ListScren />
          </Route>
      <Route path="/newLink">
            <NewLink />
          </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
