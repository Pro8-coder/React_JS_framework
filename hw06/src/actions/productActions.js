// productActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Действие для добавления нового продукта
export const addNewProduct = createAsyncThunk('products/addNewProduct', async (productData) => {
  // Здесь может быть логика для отправки данных на сервер или другие асинхронные операции
  const response = await fetch('api/products', {
    method: 'POST',
    body: JSON.stringify(productData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
});

// Действие для удаления продукта по его ID
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId) => {
  // Здесь может быть логика для отправки запроса на удаление продукта
  await fetch(`api/products/${productId}`, {
    method: 'DELETE'
  });
  return productId;
});

// Действие для обновления информации о продукте
export const updateProductInfo = createAsyncThunk('products/updateProductInfo', async (productData) => {
  // Здесь может быть логика для отправки данных на сервер или другие асинхронные операции
  const response = await fetch(`api/products/${productData.id}`, {
    method: 'PUT',
    body: JSON.stringify(productData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
});
