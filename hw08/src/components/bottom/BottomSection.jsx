import React from "react";
import AdvantageCard from "./AdvantageCard";
import Subscribe from "./Subscribe";

const BottomSection = () => {
  return (
    <section className="bottom">
      <article className="bottom_advantages">
        <AdvantageCard
          title="Free Delivery"
          imageSrc="M30.2868 27.2429H14.8098C14.6026 28.5509 13.9355 29.742 12.9285 30.6021C11.9215 31.4621 10.6406 31.9346 9.31633 31.9346C7.99203 31.9346 6.71117 31.4621 5.70415 30.6021C4.69713 29.742 4.03003 28.5509 3.82283 27.2429H1.88582C1.391 27.2397 0.91765 27.0404 0.569536 26.6887C0.221422 26.337 0.0269624 25.8618 0.0288259 25.3669V1.87695C0.0266969 1.38195 0.221028 0.906335 0.56917 0.554443C0.917313 0.202551 1.39082 0.00317363 1.88582 0H27.4368C27.9318 0.00317353 28.4051 0.202522 28.7531 0.554443C29.1011 0.906364 29.2952 1.38204 29.2928 1.87695V3.78198H36.4138C36.4942 3.78164 36.5742 3.79208 36.6518 3.81299C38.9518 4.01299 40.1088 5.2129 41.3288 7.2749L44.8878 13.3689C44.9727 13.5136 45.0176 13.6782 45.0178 13.8459V26.304C45.0189 26.5515 44.9216 26.7892 44.7475 26.9651C44.5733 27.141 44.3364 27.2406 44.0888 27.2419H41.2748C41.0676 28.5499 40.4005 29.741 39.3935 30.6011C38.3865 31.4611 37.1056 31.9336 35.7813 31.9336C34.457 31.9336 33.1762 31.4611 32.1691 30.6011C31.1621 29.741 30.495 28.5499 30.2878 27.2419L30.2868 27.2429ZM32.0648 26.304C32.0727 27.0369 32.2973 27.7511 32.7102 28.3567C33.1231 28.9623 33.706 29.4322 34.3854 29.7073C35.0649 29.9824 35.8105 30.0503 36.5284 29.9026C37.2464 29.7548 37.9046 29.398 38.4202 28.877C38.9358 28.3559 39.2857 27.6941 39.426 26.9746C39.5662 26.2551 39.4905 25.5103 39.2083 24.8337C38.9262 24.1572 38.4502 23.5794 37.8403 23.1729C37.2304 22.7663 36.5138 22.5491 35.7808 22.5488C34.7905 22.5552 33.8431 22.9543 33.1464 23.6582C32.4498 24.3621 32.0608 25.3136 32.0648 26.304ZM5.60085 26.304C5.60874 27.0369 5.83327 27.7511 6.2462 28.3567C6.65914 28.9623 7.24201 29.4322 7.92143 29.7073C8.60086 29.9824 9.34648 30.0503 10.0644 29.9026C10.7824 29.7548 11.4406 29.398 11.9562 28.877C12.4718 28.3559 12.8217 27.6941 12.962 26.9746C13.1022 26.2551 13.0265 25.5103 12.7443 24.8337C12.4622 24.1572 11.9862 23.5794 11.3763 23.1729C10.7664 22.7663 10.0498 22.5491 9.31682 22.5488C8.3263 22.5549 7.37866 22.9537 6.68181 23.6577C5.98496 24.3617 5.59585 25.3134 5.59984 26.304H5.60085ZM41.2728 25.366H43.1588V19.7478H40.4228C40.3002 19.7473 40.1789 19.7227 40.0659 19.6753C39.9528 19.6279 39.8502 19.5585 39.7639 19.4714C39.6776 19.3843 39.6094 19.281 39.563 19.1675C39.5167 19.054 39.4932 18.9324 39.4938 18.8098V16.9629C39.4935 16.2423 39.7691 15.5488 40.2638 15.0249H33.8848C33.8076 15.0248 33.7307 15.015 33.6558 14.9958C32.9511 14.933 32.2956 14.6081 31.819 14.0852C31.3423 13.5623 31.0793 12.8794 31.0818 12.1719V7.47192C31.0812 7.34927 31.1047 7.22758 31.151 7.11401C31.1973 7.00044 31.2656 6.89725 31.3519 6.81006C31.4381 6.72286 31.5407 6.6535 31.6538 6.60596C31.7669 6.55841 31.8882 6.53361 32.0108 6.53296H38.4938C38.1495 6.21428 37.7421 5.97123 37.2981 5.81982C36.854 5.66842 36.3831 5.61187 35.9158 5.65381H29.2928V25.3618H30.2868C30.494 24.0538 31.1611 22.8627 32.1682 22.0027C33.1752 21.1426 34.456 20.6702 35.7803 20.6702C37.1046 20.6702 38.3855 21.1426 39.3925 22.0027C40.3995 22.8627 41.0666 24.0538 41.2738 25.3618L41.2728 25.366ZM14.8088 25.366H27.4358V1.87598H1.88582V25.366H3.82283C4.03003 24.058 4.69713 22.8666 5.70415 22.0066C6.71117 21.1465 7.99203 20.6741 9.31633 20.6741C10.6406 20.6741 11.9215 21.1465 12.9285 22.0066C13.9355 22.8666 14.6026 24.058 14.8098 25.366H14.8088ZM41.3508 16.9658V17.875H43.1588V16.0278H42.2798C42.033 16.0294 41.7968 16.1288 41.6229 16.304C41.449 16.4792 41.3516 16.716 41.3518 16.9629L41.3508 16.9658ZM32.9378 12.1738C32.9368 12.4263 33.0359 12.6691 33.2134 12.8486C33.3909 13.0282 33.6324 13.13 33.8848 13.1318C33.9487 13.1316 34.0124 13.1384 34.0748 13.1519H42.5998L39.8339 8.41602H32.9338L32.9378 12.1738ZM33.0308 26.3059C33.0279 25.5734 33.3157 24.8695 33.8311 24.3489C34.3464 23.8283 35.0473 23.5333 35.7798 23.5288C36.0286 23.5288 36.2672 23.6278 36.4431 23.8037C36.619 23.9796 36.7178 24.218 36.7178 24.4668C36.7178 24.7156 36.619 24.9542 36.4431 25.1301C36.2672 25.306 36.0286 25.4048 35.7798 25.4048C35.6015 25.4032 35.4267 25.4548 35.2777 25.5527C35.1286 25.6507 35.012 25.7905 34.9427 25.9548C34.8733 26.1191 34.8544 26.3005 34.8882 26.4756C34.922 26.6507 35.0071 26.8118 35.1326 26.9385C35.2582 27.0651 35.4185 27.1516 35.5933 27.187C35.7681 27.2224 35.9494 27.2051 36.1144 27.1372C36.2793 27.0693 36.4203 26.9538 36.5196 26.8057C36.6188 26.6575 36.6718 26.4833 36.6718 26.3049C36.6718 26.0587 36.7696 25.8226 36.9438 25.6484C37.1179 25.4743 37.3541 25.3765 37.6003 25.3765C37.8466 25.3765 38.0828 25.4743 38.2569 25.6484C38.431 25.8226 38.5288 26.0587 38.5288 26.3049C38.5288 27.0343 38.2391 27.7338 37.7234 28.2495C37.2077 28.7652 36.5082 29.0549 35.7788 29.0549C35.0495 29.0549 34.35 28.7652 33.8343 28.2495C33.3186 27.7338 33.0288 27.0343 33.0288 26.3049L33.0308 26.3059ZM6.56682 26.3059C6.56389 25.5734 6.85171 24.8695 7.36708 24.3489C7.88245 23.8283 8.58329 23.5333 9.31584 23.5288C9.56462 23.5288 9.8032 23.6278 9.97911 23.8037C10.155 23.9796 10.2538 24.218 10.2538 24.4668C10.2538 24.7156 10.155 24.9542 9.97911 25.1301C9.8032 25.306 9.56462 25.4048 9.31584 25.4048C9.13751 25.4032 8.9627 25.4548 8.81365 25.5527C8.66459 25.6507 8.548 25.7905 8.47865 25.9548C8.40931 26.1191 8.39033 26.3005 8.42415 26.4756C8.45797 26.6507 8.54305 26.8118 8.6686 26.9385C8.79414 27.0651 8.95449 27.1516 9.12929 27.187C9.30409 27.2224 9.48546 27.2051 9.65038 27.1372C9.8153 27.0693 9.95634 26.9538 10.0556 26.8057C10.1548 26.6575 10.2078 26.4833 10.2078 26.3049C10.2078 26.0587 10.3057 25.8226 10.4798 25.6484C10.6539 25.4743 10.8901 25.3765 11.1363 25.3765C11.3826 25.3765 11.6188 25.4743 11.7929 25.6484C11.967 25.8226 12.0648 26.0587 12.0648 26.3049C12.0648 27.0343 11.7751 27.7338 11.2594 28.2495C10.7437 28.7652 10.0442 29.0549 9.31484 29.0549C8.58549 29.0549 7.88601 28.7652 7.37029 28.2495C6.85456 27.7338 6.56484 27.0343 6.56484 26.3049L6.56682 26.3059ZM4.70885 5.65991C4.46008 5.65991 4.22149 5.56116 4.04558 5.38525C3.86967 5.20934 3.77083 4.9707 3.77083 4.72192C3.77083 4.47315 3.86967 4.2345 4.04558 4.05859C4.22149 3.88268 4.46008 3.78394 4.70885 3.78394H24.6088C24.8576 3.78394 25.0962 3.88268 25.2721 4.05859C25.448 4.2345 25.5468 4.47315 25.5468 4.72192C25.5468 4.9707 25.448 5.20934 25.2721 5.38525C25.0962 5.56116 24.8576 5.65991 24.6088 5.65991H4.70885Z"
          text="Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models."
        />
        <AdvantageCard
          title="Sales & Discounts"
          imageSrc="M19.994 37.0239L16.523 39.9238L14.235 36.0039L9.995 37.5159L9.17297 33.0359L4.67999 32.991L5.41199 28.491L1.20398 26.8909L3.414 22.925L0 19.96L3.41199 16.9929L1.20203 13.0278L5.41101 11.428L4.67798 6.93286L9.172 6.88892L9.99402 2.40894L14.234 3.91992L16.522 0L19.993 2.8999L23.464 0L25.753 3.9209L29.993 2.40894L30.814 6.88989L35.308 6.93481L34.576 11.4299L38.784 13.03L36.574 16.9958L39.986 19.9609L36.574 22.928L38.783 26.894L34.574 28.4939L35.307 32.988L30.812 33.033L29.991 37.5139L25.753 36.0029L23.464 39.9229L19.994 37.0239ZM21.2 35.541L22.961 37.012L24.122 35.022L24.914 33.666L26.382 34.189L28.533 34.957L28.95 32.6838L29.235 31.1289L30.796 31.113L33.078 31.092L32.706 28.8098L32.452 27.25L33.911 26.696L36.045 25.8828L34.925 23.873L34.159 22.498L35.342 21.4709L37.076 19.9609L35.343 18.4609L34.16 17.4319L34.926 16.0559L36.047 14.0449L33.913 13.2339L32.454 12.6809L32.709 11.1208L33.081 8.83984L30.799 8.81689L29.239 8.80103L28.954 7.24683L28.538 4.97388L26.386 5.74097L24.918 6.26392L24.125 4.90698L22.963 2.91699L21.201 4.38794L19.996 5.39282L18.791 4.38794L17.03 2.91699L15.869 4.90601L15.077 6.26294L13.608 5.73999L11.458 4.97192L11.04 7.24585L10.755 8.80005L9.19501 8.81592L6.914 8.83789L7.28601 11.1199L7.53998 12.678L6.08099 13.2329L3.94598 14.0439L5.06702 16.0549L5.83301 17.4299L4.65002 18.459L2.91602 19.967L4.64899 21.4739L5.83197 22.5029L5.06598 23.8779L3.94501 25.8879L6.078 26.698L7.53802 27.2529L7.28302 28.812L6.91199 31.0959L9.19299 31.1189L10.753 31.135L11.038 32.6899L11.455 34.9619L13.607 34.1948L15.076 33.6719L15.868 35.0288L17.03 37.019L18.791 35.5479L19.996 34.543L21.2 35.541ZM21.318 23.02C21.318 20.093 22.883 18.4648 24.777 18.4648C26.783 18.4648 28.077 20.0279 28.077 22.7949C28.077 25.8539 26.492 27.3718 24.662 27.3718C22.883 27.3718 21.338 25.922 21.318 23.02ZM22.839 22.9319C22.816 24.7829 23.521 26.1899 24.711 26.1899C25.988 26.1899 26.561 24.8049 26.561 22.8899C26.561 21.1249 26.054 19.6528 24.711 19.6528C23.5 19.6488 22.839 21.1029 22.839 22.9309V22.9319ZM15.194 27.332L23.609 12.613H24.842L16.427 27.332H15.194ZM11.979 16.99C11.979 14.09 13.542 12.458 15.437 12.458C17.437 12.458 18.763 14.022 18.763 16.79C18.763 19.848 17.177 21.365 15.327 21.365C13.544 21.365 12 19.915 11.979 16.991V16.99ZM13.521 16.9238C13.477 18.7748 14.162 20.1809 15.371 20.1829C16.648 20.1829 17.221 18.7988 17.221 16.8828C17.221 15.1168 16.714 13.645 15.371 13.645C14.162 13.642 13.521 15.092 13.521 16.925V16.9238Z"
          text="Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models."
          isLast="true"
        />
        <AdvantageCard
          title="Quality Assurance"
          imageSrc="M42.393 8.53564C41.1766 8.52335 40.0049 8.99349 39.1342 9.84302C38.2635 10.6925 37.7647 11.8522 37.747 13.0686C37.7501 13.7086 37.8911 14.3405 38.1603 14.9211C38.4295 15.5018 38.8206 16.0176 39.3071 16.4336L33.4471 18.4888L25.1081 8.80566C26.0034 8.50693 26.7831 7.93646 27.3388 7.17358C27.8945 6.41071 28.1983 5.49331 28.2081 4.54956C28.1828 3.33432 27.6824 2.17743 26.814 1.3269C25.9457 0.476377 24.7785 0 23.563 0C22.3475 0 21.1804 0.476377 20.3121 1.3269C19.4437 2.17743 18.9432 3.33432 18.918 4.54956C18.9277 5.48395 19.2253 6.39274 19.7702 7.15186C20.3151 7.91097 21.0809 8.48368 21.9631 8.79175L13.611 18.4917L7.7531 16.4368C8.23917 16.0206 8.62989 15.5045 8.89873 14.9238C9.16757 14.3432 9.30822 13.7116 9.31108 13.0718C9.33412 12.195 9.10852 11.3296 8.66045 10.5757C8.21238 9.82172 7.56009 9.2099 6.77898 8.81104C5.99787 8.41217 5.11986 8.2424 4.24639 8.32153C3.37291 8.40067 2.53965 8.72555 1.84295 9.2583C1.14624 9.79105 0.614525 10.5101 0.309254 11.3323C0.00398245 12.1545 -0.0623783 13.0462 0.117848 13.9045C0.298073 14.7629 0.717494 15.5526 1.32769 16.1826C1.93788 16.8126 2.71394 17.2571 3.56609 17.4646V29.7556C3.57345 29.8376 3.59015 29.9184 3.61602 29.9966C3.58308 30.1233 3.56636 30.2538 3.56609 30.3848C3.56609 34.7968 21.485 34.9268 23.528 34.9268C25.571 34.9268 43.49 34.7978 43.49 30.3848C43.4893 30.2539 43.4725 30.1234 43.44 29.9966C43.4676 29.9189 43.4845 29.8379 43.49 29.7556V17.4646C44.5889 17.2244 45.5587 16.5828 46.2094 15.6653C46.8601 14.7478 47.1449 13.6204 47.0082 12.5039C46.8715 11.3874 46.323 10.3621 45.4701 9.62866C44.6173 8.89526 43.5214 8.50653 42.397 8.53857L42.393 8.53564ZM21.174 4.55176C21.1625 4.07755 21.2926 3.61062 21.5477 3.21069C21.8027 2.81076 22.1712 2.49591 22.606 2.3064C23.0408 2.11688 23.5223 2.06132 23.9889 2.14673C24.4555 2.23214 24.8861 2.45463 25.2256 2.78589C25.5652 3.11715 25.7982 3.542 25.8951 4.00635C25.9919 4.4707 25.9482 4.95345 25.7695 5.39282C25.5907 5.8322 25.2851 6.20831 24.8915 6.47314C24.498 6.73798 24.0345 6.8795 23.5601 6.87964C22.9354 6.88605 22.3335 6.64481 21.8863 6.2085C21.4391 5.77218 21.183 5.17647 21.174 4.55176ZM13.584 20.8276C13.801 20.9026 14.0353 20.9113 14.2573 20.8525C14.4792 20.7938 14.6786 20.6701 14.83 20.4976L23.5301 10.3977L32.23 20.4976C32.3812 20.6702 32.5804 20.7938 32.8022 20.8528C33.0239 20.9117 33.2581 20.9033 33.475 20.8286L41.2331 18.1038V28.0408C36.3481 25.9188 25.124 25.8406 23.533 25.8406C21.942 25.8406 10.7141 25.9198 5.83306 28.0408V18.1038L13.584 20.8276ZM23.527 32.7166C14.827 32.7166 9.27802 31.7057 6.97002 30.8547C6.61895 30.7373 6.28322 30.578 5.97002 30.3806C6.69202 29.8596 9.03109 29.1487 12.9361 28.6487C19.9715 27.844 27.0756 27.844 34.111 28.6487C38.011 29.1487 40.3561 29.8596 41.0761 30.3806C40.7654 30.5794 40.4312 30.7388 40.0811 30.8547C37.7791 31.7037 32.235 32.7166 23.527 32.7166ZM2.28008 13.0686C2.26895 12.5945 2.39939 12.1279 2.65471 11.7283C2.91003 11.3286 3.27866 11.0139 3.71355 10.8247C4.14844 10.6355 4.62977 10.5801 5.09624 10.6658C5.56271 10.7514 5.99313 10.9743 6.33245 11.3057C6.67176 11.637 6.90458 12.0618 7.00127 12.5261C7.09797 12.9904 7.05412 13.4731 6.87529 13.9124C6.69647 14.3516 6.39074 14.7277 5.99724 14.9924C5.60374 15.2572 5.14033 15.3986 4.66607 15.3987C4.04091 15.4054 3.43856 15.1638 2.99126 14.7271C2.54396 14.2903 2.28825 13.6937 2.28008 13.0686ZM42.393 15.3987C41.935 15.3875 41.4906 15.2414 41.1152 14.9788C40.7398 14.7162 40.4501 14.3487 40.2825 13.9224C40.1149 13.496 40.0768 13.0297 40.1729 12.5818C40.269 12.1339 40.4952 11.7241 40.8229 11.4041C41.1507 11.084 41.5656 10.8677 42.0157 10.7822C42.4658 10.6968 42.931 10.7459 43.3533 10.9236C43.7756 11.1013 44.1361 11.3997 44.3897 11.7812C44.6433 12.1628 44.7788 12.6105 44.7791 13.0686C44.7704 13.6935 44.5144 14.2895 44.0672 14.7261C43.62 15.1626 43.0179 15.4041 42.393 15.3977V15.3987Z"
          text="Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models."
        />
      </article>
      <Subscribe />
    </section>
  );
};

export default BottomSection;
