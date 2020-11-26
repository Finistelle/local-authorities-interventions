import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import * as moment from "moment";
import localization from 'moment/locale/fr';

moment.locale('fr', localization);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
