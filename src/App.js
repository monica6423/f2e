import React from 'react';
import { Provider} from 'react-redux'
import ProductTable from './components/ProductTable/ProductTable'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductTable/>
      </div>
    </Provider>
  );
}

export default App;
