import React from "react";
import Filters from "../../../components/Filters";

const ProductOptions = () => {
  // Обработчик изменения состояния checkbox-ов
  const handleCheckboxChange = (event) => {
    const selectedSizes = [];
    const checkboxXS = document.getElementById("checkboxXS");
    const checkboxS = document.getElementById("checkboxS");
    const checkboxM = document.getElementById("checkboxM");
    const checkboxL = document.getElementById("checkboxL");

    // Проверяем какие размеры были выбраны
    if (checkboxXS.checked) selectedSizes.push("XS");
    if (checkboxS.checked) selectedSizes.push("S");
    if (checkboxM.checked) selectedSizes.push("M");
    if (checkboxL.checked) selectedSizes.push("L");

    // Если ничего не выбрано, отображаем все товары, иначе фильтруем
    if (selectedSizes.length === 0) {
      showAllProducts();
    } else {
      filterAndDisplayProducts(selectedSizes);
    }
  };

  // Функция для отображения всех товаров
  const showAllProducts = () => {
    // Отобразить все товары, скрыть фильтрованные
  };

  // Функция для фильтрации и отображения товаров по выбранным размерам
  const filterAndDisplayProducts = (selectedSizes) => {
    // Фильтрация товаров по выбранным размерам
    const filteredProducts = [];
    selectedSizes.forEach((size) => {
      filteredProducts.push(...Filters.productsBySize[size]);
    });

    // Отобразить отфильтрованные товары, скрыть остальные
  };

  return (
    <div className="product_options_box">
      <details>
        <summary className="product_options">
          <h3 className="product_options_subtitle">TRENDING NOW</h3>
          <svg
            className="product_options_img"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
          >
            <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" />
          </svg>
        </summary>
      </details>
      <details>
        <summary className="product_options">
          <span className="product_options_subtitle">SIZE</span>
          <svg
            className="product_options_img"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
          >
            <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" />
          </svg>
        </summary>
        <div className="product_sort_box">
          <div className="product_sort_check">
            <input
              type="checkbox"
              id="checkboxXS"
              onChange={handleCheckboxChange}
            />
            XS
          </div>
          <div className="product_sort_check">
            <input
              type="checkbox"
              id="checkboxS"
              onChange={handleCheckboxChange}
            />
            S
          </div>
          <div className="product_sort_check">
            <input
              type="checkbox"
              id="checkboxM"
              onChange={handleCheckboxChange}
            />
            M
          </div>
          <div className="product_sort_check">
            <input
              type="checkbox"
              id="checkboxL"
              onChange={handleCheckboxChange}
            />
            L
          </div>
        </div>
      </details>
      {/* <details>
        <summary className="product_options">
          <span className="product_options_subtitle">SIZE</span>
          <svg
            className="product_options_img"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
          >
            <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" />
          </svg>
        </summary>
        <div className="product_sort_box">
          <div className="product_sort_check">
            <input type="checkbox" />
            XS
          </div>
          <div className="product_sort_check">
            <input type="checkbox" />S
          </div>
          <div className="product_sort_check">
            <input type="checkbox" />M
          </div>
          <div className="product_sort_check">
            <input type="checkbox" />L
          </div>
        </div>
      </details> */}
      <details>
        <summary className="product_options">
          <h3 className="product_options_subtitle">FILTER</h3>
          <svg
            className="product_options_img"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
          >
            <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" />
          </svg>
        </summary>
      </details>
    </div>
  );
};

export default ProductOptions;
