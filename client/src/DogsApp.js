import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import { AppRouter } from './routes/AppRouter';

import './DogsApp.css';

function DogsApp() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={ LandingPage } />
       <Route path="/" component={ AppRouter } />
     </Switch>  
    </div>
  );
}

export default DogsApp;
