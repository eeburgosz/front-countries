import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./redux-toolkit/store";
import App from './App';
import './index.css';
import { FiltersProvider } from "./context/filters";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

