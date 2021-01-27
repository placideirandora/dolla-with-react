import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages';
import SignIn from './pages/signin';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} exact />
      </Switch>
    </Router>
  );
}

export default App;
