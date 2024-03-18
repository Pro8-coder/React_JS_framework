// AddProductForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addProduct } from './productsSlice';

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(false);

  const handleAddProduct = () => {
    dispatch(addProduct({
      id: uuidv4(),
      name,
      description,
      price,
      available,
    }));
    setName('');
    setDescription('');
    setPrice(0);
    setAvailable(false);
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProductForm;
