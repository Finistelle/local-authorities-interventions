import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configureStore, { sagaMiddleware } from './store';
import rootSaga from './sagas';

import Header from './components/Header';
import InterventionsList from './containers/InterventionsList';
import InterventionCreate from "./components/Intervention/Create/InterventionCreate";
import {ROUTES} from "./services/config";
import InterventionDetail from "./components/Intervention/Detail/InterventionDetail";

const store = configureStore();
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type})

function App() {
  return (
    <Provider store={store} action={action}>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path={ROUTES.home} exact component={InterventionsList}/>
            <Route path={ROUTES.see} render={(props) => <InterventionDetail {...props} />}/>
            <Route path={ROUTES.create} render={(props) => <InterventionCreate {...props} />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
