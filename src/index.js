import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import {store} from "./store/store";
import {Provider} from "react-redux";

// https://www.youtube.com/watch?v=_j4k73zoy5Y&t=51s

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

