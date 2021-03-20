import SearchPage from './Components/Pages/SearchPage';
import Home from './Components/Pages/Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={SearchPage} />
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
