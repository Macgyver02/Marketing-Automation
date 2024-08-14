import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Leads from './components/Leads';
import Campaigns from './components/Campaigns';
import Emails from './components/Emails';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/leads">Leads</Link></li>
            <li><Link to="/campaigns">Campaigns</Link></li>
            <li><Link to="/emails">Emails</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/leads">
            <Leads />
          </Route>
          <Route path="/campaigns">
            <Campaigns />
          </Route>
          <Route path="/emails">
            <Emails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
