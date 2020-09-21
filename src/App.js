import React from 'react';
import logo from './logo.svg';
import { Provider} from 'react-redux'
import ProductDetail from './components/ProductDetail/ProductDetail'
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <ProductDetail/>
      </div>
    </Provider>
  );
}

export default App;
