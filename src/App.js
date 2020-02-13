import React from 'react';
import logo from './logo.svg';
import './App.css';
import MantraForm from './containers/MantraFormContainer';
import {createStore} from 'redux';
import {mantras} from './reducers';
import MantraList from './containers/MantraListContainer';
import {Provider} from 'react-redux';

const store = createStore(mantras)
function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <MantraForm />
          <MantraList />
        </Provider>
    </div>
  );
}

export default App;
