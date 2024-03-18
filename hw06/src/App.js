// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Product Catalog Management</h1>
        <AddProductForm />
        <h2>Product List</h2>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
