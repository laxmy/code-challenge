  import React from 'react';
  import './App.css';
  import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom'
  import IssuesList from './components/IssueList'

  function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            GitHub Repo Issue Tracker
          </header>
          <Switch>
            <Route path ="/Issues">
              <IssuesList />
            </Route>
            <Redirect from="/" to="/Issues"></Redirect>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }

  export default App;
