import React from "react";

const Breadcrumbs = () => {
  return (
    <section className="breadcrumbs">
      <h1 className="breadcrumbs_title">NEW ARRIVALS</h1>
      <nav className="breadcrumbs_nav">
        <ul className="breadcrumbs_ul">
          <li className="breadcrumbs_li">
            <a href="/" className="breadcrumbs_link">
              HOME
            </a>
          </li>
          <li className="breadcrumbs_li">
            <a href="/productPage" className="breadcrumbs_link">
              WOMAN
            </a>
          </li>
          <li className="breadcrumbs_li">
            <a href="/productPage" className="breadcrumbs_link">
              NEW ARRIVALS
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Breadcrumbs;
