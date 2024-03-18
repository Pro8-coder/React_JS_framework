// ProductList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, updateProduct } from "./productsSlice";
import EditProductForm from "./EditProductForm"; // Импорт компонента EditProductForm

const ProductList = () => {
  const products = useSelector((state) => state.products.list);
  const [productIdToEdit, setProductIdToEdit] = useState(null); // Состояние для хранения идентификатора продукта для редактирования
  const dispatch = useDispatch();

  const handleEditProduct = (productId) => {
    setProductIdToEdit(productId); // Устанавливаем выбранный идентификатор продукта для редактирования
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleToggleAvailability = (id) => {
    const productToUpdate = products.find((product) => product.id === id);
    dispatch(
      updateProduct({
        ...productToUpdate,
        available: !productToUpdate.available,
      })
    );
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Available: {product.available ? "Yes" : "No"}</p>
          <button onClick={() => handleRemoveProduct(product.id)}>
            Remove Product
          </button>
          <button onClick={() => handleToggleAvailability(product.id)}>
            Toggle Availability
          </button>
          <button onClick={() => handleEditProduct(product.id)}>
            Edit Product
          </button>{" "}
          {/* Добавляем кнопку для редактирования продукта */}
        </div>
      ))}
      {productIdToEdit && <EditProductForm id={productIdToEdit} />}{" "}
      {/* Отображаем компонент EditProductForm с переданным идентификатором, если productIdToEdit не равен null */}
    </div>
  );
};

export default ProductList;
