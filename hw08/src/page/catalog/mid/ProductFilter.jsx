import React from "react";

const ProductFilter = () => {
  return (
    <div className="product_settings_box">
      <details className="product_filter">
        <summary className="product_filter_summary">
          <h1 className="product_filter_title">FILTER</h1>
          <svg
            className="product_filter_desktop"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
          >
            <path d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z" />
          </svg>
          <svg
            className="product_filter_767px"
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="25"
            viewBox="0 0 38 25"
            fill="none"
          >
            <path d="M2.08333 25H10.4167C11.5625 25 12.5 24.0625 12.5 22.9167C12.5 21.7708 11.5625 20.8333 10.4167 20.8333H2.08333C0.9375 20.8333 0 21.7708 0 22.9167C0 24.0625 0.9375 25 2.08333 25ZM0 2.08333C0 3.22917 0.9375 4.16667 2.08333 4.16667H35.4167C36.5625 4.16667 37.5 3.22917 37.5 2.08333C37.5 0.9375 36.5625 0 35.4167 0H2.08333C0.9375 0 0 0.9375 0 2.08333ZM2.08333 14.5833H22.9167C24.0625 14.5833 25 13.6458 25 12.5C25 11.3542 24.0625 10.4167 22.9167 10.4167H2.08333C0.9375 10.4167 0 11.3542 0 12.5C0 13.6458 0.9375 14.5833 2.08333 14.5833Z" />
          </svg>
        </summary>
        <div className="dropdowns">
          <details className="dropdowns_details" open>
            <summary className="dropdowns_summary dropdowns_summary_prod-filter">
              <h2 className="dropdowns_summary_subtitle">CATEGORY</h2>
            </summary>
            <div className="dropdowns_content dropdowns_content_prod-filter">
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Accessories
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Bags
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Denim
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Hoodies & Sweatshirts
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Jackets & Coats
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Polos
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Shirts
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Shoes
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Sweaters & Knits
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  T-Shirts
                </a>
              </div>
              <div className="dropdowns_item">
                <a className="dropdowns_item_link" href="#">
                  Tanks
                </a>
              </div>
            </div>
          </details>
          <details className="dropdowns_details">
            <summary className="dropdowns_summary dropdowns_summary_prod-filter">
              <h2 className="dropdowns_summary_subtitle">BRAND</h2>
            </summary>
          </details>
          <details className="dropdowns_details">
            <summary className="dropdowns_summary dropdowns_summary_prod-filter">
              <h2 className="dropdowns_summary_subtitle">DESIGNER</h2>
            </summary>
          </details>
        </div>
      </details>
    </div>
  );
};

export default ProductFilter;
