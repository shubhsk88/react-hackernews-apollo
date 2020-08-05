import React from 'react';
import Header from './Header';

import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import { Switch, Route } from 'react-router';
import Login from './Login';
function App() {
  return (
    <div className=" w-3/5 mx-auto">
      <Header />
      <div className="px-3 py-1 bg-gray-200">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
