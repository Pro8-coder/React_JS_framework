import React from "react";

const Navigation = () => {
  return (
    <nav className="header_menu">
      <details class="menu_details">
        <summary class="menu_summary">
          <svg
            class="header_img"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="23"
            viewBox="0 0 32 23"
            fill="none"
          >
            <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" />
          </svg>
        </summary>
        <div class="dropdowns_menu">
          <div class="dropdowns_name">
            <h1 class="dropdowns_menu_title">Menu</h1>
          </div>
          <details class="dropdowns_details" open>
            <summary class="dropdowns_summary">
              <h2 class="dropdowns_summary_subtitle">MAN</h2>
            </summary>
            <div class="dropdowns_content">
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="/catalogPage">
                  Accessories
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="/catalogPage">
                  Bags
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="/catalogPage">
                  Denim
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="/catalogPage">
                  T-Shirts
                </a>
              </div>
            </div>
          </details>
          <details class="dropdowns_details" open>
            <summary class="dropdowns_summary">
              <h2 class="dropdowns_summary_subtitle">WOMAN</h2>
            </summary>
            <div class="dropdowns_content">
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="productPage">
                  Accessories
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="productPage">
                  Jackets & Coats
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="productPage">
                  Polos
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="productPage">
                  T-Shirts
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="productPage">
                  Shirts
                </a>
              </div>
            </div>
          </details>
          <details class="dropdowns_details" open>
            <summary class="dropdowns_summary">
              <h2 class="dropdowns_summary_subtitle">KIDS</h2>
            </summary>
            <div class="dropdowns_content">
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="#">
                  Accessories
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="#">
                  Jackets & Coats
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="#">
                  Polos
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="#">
                  T-Shirts
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="#">
                  Shirts
                </a>
              </div>
              <div class="dropdowns_item">
                <a class="dropdowns_item_link" href="#">
                  Bags
                </a>
              </div>
            </div>
          </details>
        </div>
      </details>
      <a class="menu_link" href="/registrationPage">
        <svg
          class="header_img"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z" />
        </svg>
      </a>
      <a class="menu_link" href="/cartPage">
        <svg
          class="header_img"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="29"
          viewBox="0 0 32 29"
          fill="none"
        >
          <path d="M26.2 29C25.5522 28.9738 24.9405 28.6948 24.4962 28.2227C24.0519 27.7506 23.8104 27.1232 23.8235 26.475C23.8366 25.8269 24.1033 25.2097 24.5663 24.7559C25.0293 24.3022 25.6518 24.048 26.3 24.048C26.9483 24.048 27.5707 24.3022 28.0337 24.7559C28.4967 25.2097 28.7634 25.8269 28.7765 26.475C28.7896 27.1232 28.5481 27.7506 28.1038 28.2227C27.6594 28.6948 27.0478 28.9738 26.4 29H26.2ZM6.75195 26.32C6.75195 25.79 6.90913 25.2718 7.20361 24.8311C7.4981 24.3904 7.91667 24.0469 8.40637 23.844C8.89608 23.6412 9.43497 23.5881 9.95483 23.6915C10.4747 23.7949 10.9522 24.0502 11.327 24.425C11.7018 24.7998 11.9571 25.2773 12.0605 25.7972C12.164 26.317 12.1108 26.8559 11.908 27.3456C11.7051 27.8353 11.3616 28.2539 10.9209 28.5483C10.4802 28.8428 9.96206 29 9.43201 29C9.0799 29.0003 8.73114 28.9311 8.40576 28.7966C8.08038 28.662 7.78472 28.4646 7.53564 28.2158C7.28657 27.9669 7.08903 27.6713 6.95422 27.3461C6.81942 27.0208 6.75 26.6721 6.75 26.32H6.75195ZM10.552 20.686C10.2926 20.6868 10.04 20.6024 9.83313 20.4457C9.62629 20.2891 9.47661 20.0689 9.40698 19.819L4.57397 2.36401H1.18103C0.867544 2.36401 0.566883 2.23947 0.345215 2.01781C0.123547 1.79614 -0.000976562 1.49549 -0.000976562 1.18201C-0.000976562 0.868519 0.123547 0.567873 0.345215 0.346205C0.566883 0.124537 0.867544 5.81268e-06 1.18103 5.81268e-06H5.46204C5.72153 -0.00080736 5.97406 0.0837201 6.18079 0.240568C6.38751 0.397416 6.53686 0.617884 6.60596 0.868006L11.439 18.323H24.6169L29 8.27501H14.4C14.2418 8.27961 14.0844 8.25242 13.9369 8.19507C13.7894 8.13771 13.6549 8.05134 13.5414 7.94108C13.4279 7.83082 13.3376 7.69891 13.276 7.55315C13.2144 7.40739 13.1826 7.25075 13.1826 7.0925C13.1826 6.93426 13.2144 6.77762 13.276 6.63186C13.3376 6.4861 13.4279 6.35419 13.5414 6.24393C13.6549 6.13367 13.7894 6.0473 13.9369 5.98994C14.0844 5.93259 14.2418 5.90541 14.4 5.91001H30.813C31.0087 5.90996 31.2013 5.95866 31.3734 6.05172C31.5456 6.14478 31.6918 6.27926 31.799 6.44301C31.9068 6.60729 31.9724 6.79569 31.9899 6.99145C32.0073 7.18721 31.9762 7.38424 31.899 7.565L26.494 19.977C26.4016 20.1876 26.25 20.3668 26.0575 20.4927C25.865 20.6186 25.64 20.6858 25.41 20.686H10.552Z" />
        </svg>
      </a>
    </nav>
  );
};

export default Navigation;
