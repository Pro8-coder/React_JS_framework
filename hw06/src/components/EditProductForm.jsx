// EditProductForm.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct } from './productsSlice';

const EditProductForm = ({ id }) => {
  const product = useSelector((state) => state.products.list.find((product) => product.id === id));
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleUpdateProduct = () => {
    dispatch(updateProduct({
      id,
      name,
      description,
      price,
      availability,
    }));
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      <button onClick={handleUpdateProduct}>Update Product</button>
    </div>
  );
};

export default EditProductForm;
