import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <div className={styles['contact-page']}>
      <header className={styles.header}>
        <div className={styles['header-container']}>
          <button className={styles['menu-button']} aria-label="Open menu">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none">
              <path d="M12 10.6133V11.6133C12 11.7487 11.9505 11.8659 11.8516 11.9648C11.7526 12.0638 11.6354 12.1133 11.5 12.1133H0.5C0.364583 12.1133 0.247396 12.0638 0.148438 11.9648C0.0494792 11.8659 0 11.7487 0 11.6133V10.6133C0 10.4779 0.0494792 10.3607 0.148438 10.2617C0.247396 10.1628 0.364583 10.1133 0.5 10.1133H11.5C11.6354 10.1133 11.7526 10.1628 11.8516 10.2617C11.9505 10.3607 12 10.4779 12 10.6133ZM12 6.61328V7.61328C12 7.7487 11.9505 7.86589 11.8516 7.96484C11.7526 8.0638 11.6354 8.11328 11.5 8.11328H0.5C0.364583 8.11328 0.247396 8.0638 0.148438 7.96484C0.0494792 7.86589 0 7.7487 0 7.61328V6.61328C0 6.47786 0.0494792 6.36068 0.148438 6.26172C0.247396 6.16276 0.364583 6.11328 0.5 6.11328H11.5C11.6354 6.11328 11.7526 6.16276 11.8516 6.26172C11.9505 6.36068 12 6.47786 12 6.61328ZM12 2.61328V3.61328C12 3.7487 11.9505 3.86589 11.8516 3.96484C11.7526 4.0638 11.6354 4.11328 11.5 4.11328H0.5C0.364583 4.11328 0.247396 4.0638 0.148438 3.96484C0.0494792 3.86589 0 3.7487 0 3.61328V2.61328C0 2.47786 0.0494792 2.36068 0.148438 2.26172C0.247396 2.16276 0.364583 2.11328 0.5 2.11328H11.5C11.6354 2.11328 11.7526 2.16276 11.8516 2.26172C11.9505 2.36068 12 2.47786 12 2.61328Z" fill="white"/>
            </svg>
          </button>
          <div className={styles['logo-wrapper']}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f7168861ee65df665c892f8ca9ed27cd1afe2eec?width=164" 
              alt="COMLEX-USA" 
              className={styles.logo}
            />
          </div>
          <nav className={styles.nav}>
            <ul className={styles['nav-list']}>
              <li className={styles['nav-item']}>
                <a href="#" className={styles['nav-link']}>
                  <svg width="5" height="13" viewBox="0 0 5 13" fill="none">
                    <path d="M4.21068 6.66721C4.25812 6.71465 4.28184 6.7692 4.28184 6.83087C4.28184 6.89254 4.25812 6.94709 4.21068 6.99453L0.894867 10.3103C0.84743 10.3578 0.792878 10.3815 0.731211 10.3815C0.669543 10.3815 0.614991 10.3578 0.567554 10.3103L0.21178 9.95457C0.164343 9.90713 0.140625 9.85258 0.140625 9.79091C0.140625 9.72925 0.164343 9.67469 0.21178 9.62726L3.00817 6.83087L0.21178 4.03448C0.164343 3.98705 0.140625 3.93249 0.140625 3.87083C0.140625 3.80916 0.164343 3.75461 0.21178 3.70717L0.567554 3.3514C0.614991 3.30396 0.669543 3.28024 0.731211 3.28024C0.792878 3.28024 0.84743 3.30396 0.894867 3.3514L4.21068 6.66721Z" fill="#999999"/>
                  </svg>
                  Blog
                </a>
              </li>
              <li className={styles['nav-item']}>
                <a href="#" className={styles['nav-link']}>
                  <svg width="5" height="13" viewBox="0 0 5 13" fill="none">
                    <path d="M4.20144 6.65289C4.24878 6.70023 4.27245 6.75466 4.27245 6.8162C4.27245 6.87773 4.24878 6.93217 4.20144 6.9795L0.892757 10.2882C0.845422 10.3355 0.790987 10.3592 0.729452 10.3592C0.667917 10.3592 0.613483 10.3355 0.566148 10.2882L0.211139 9.93318C0.163804 9.88585 0.140137 9.83141 0.140137 9.76988C0.140137 9.70834 0.163804 9.65391 0.211139 9.60657L3.00151 6.8162L0.211139 4.02582C0.163804 3.97849 0.140137 3.92406 0.140137 3.86252C0.140137 3.80099 0.163804 3.74655 0.211139 3.69922L0.566148 3.34421C0.613483 3.29687 0.667917 3.27321 0.729452 3.27321C0.790987 3.27321 0.845422 3.29687 0.892757 3.34421L4.20144 6.65289Z" fill="#999999"/>
                  </svg>
                  FAQ
                </a>
              </li>
              <li className={styles['nav-item']}>
                <a href="#" className={styles['nav-link']}>
                  <svg width="5" height="13" viewBox="0 0 5 13" fill="none">
                    <path d="M4.21068 6.66721C4.25812 6.71465 4.28184 6.7692 4.28184 6.83087C4.28184 6.89254 4.25812 6.94709 4.21068 6.99453L0.894867 10.3103C0.84743 10.3578 0.792878 10.3815 0.731211 10.3815C0.669543 10.3815 0.614991 10.3578 0.567554 10.3103L0.21178 9.95457C0.164343 9.90713 0.140625 9.85258 0.140625 9.79091C0.140625 9.72925 0.164343 9.67469 0.21178 9.62726L3.00817 6.83087L0.21178 4.03448C0.164343 3.98705 0.140625 3.93249 0.140625 3.87083C0.140625 3.80916 0.164343 3.75461 0.21178 3.70717L0.567554 3.3514C0.614991 3.30396 0.669543 3.28024 0.731211 3.28024C0.792878 3.28024 0.84743 3.30396 0.894867 3.3514L4.21068 6.66721Z" fill="#999999"/>
                  </svg>
                  Our Team
                </a>
              </li>
              <li className={styles['nav-item']}>
                <a href="#" className={styles['nav-link']}>
                  <svg width="5" height="13" viewBox="0 0 5 13" fill="none">
                    <path d="M4.21068 6.66721C4.25812 6.71465 4.28184 6.7692 4.28184 6.83087C4.28184 6.89254 4.25812 6.94709 4.21068 6.99453L0.894867 10.3103C0.84743 10.3578 0.792878 10.3815 0.731211 10.3815C0.669543 10.3815 0.614991 10.3578 0.567554 10.3103L0.21178 9.95457C0.164343 9.90713 0.140625 9.85258 0.140625 9.79091C0.140625 9.72925 0.164343 9.67469 0.21178 9.62726L3.00817 6.83087L0.21178 4.03448C0.164343 3.98705 0.140625 3.93249 0.140625 3.87083C0.140625 3.80916 0.164343 3.75461 0.21178 3.70717L0.567554 3.3514C0.614991 3.30396 0.669543 3.28024 0.731211 3.28024C0.792878 3.28024 0.84743 3.30396 0.894867 3.3514L4.21068 6.66721Z" fill="#999999"/>
                  </svg>
                  Institutional Accounts
                </a>
              </li>
              <li className={styles['nav-item']}>
                <a href="#" className={styles['nav-link']}>
                  <svg width="5" height="13" viewBox="0 0 5 13" fill="none">
                    <path d="M4.21068 6.66721C4.25812 6.71465 4.28184 6.7692 4.28184 6.83087C4.28184 6.89254 4.25812 6.94709 4.21068 6.99453L0.894867 10.3103C0.84743 10.3578 0.792878 10.3815 0.731211 10.3815C0.669543 10.3815 0.614991 10.3578 0.567554 10.3103L0.21178 9.95457C0.164343 9.90713 0.140625 9.85258 0.140625 9.79091C0.140625 9.72925 0.164343 9.67469 0.21178 9.62726L3.00817 6.83087L0.21178 4.03448C0.164343 3.98705 0.140625 3.93249 0.140625 3.87083C0.140625 3.80916 0.164343 3.75461 0.21178 3.70717L0.567554 3.3514C0.614991 3.30396 0.669543 3.28024 0.731211 3.28024C0.792878 3.28024 0.84743 3.30396 0.894867 3.3514L4.21068 6.66721Z" fill="#999999"/>
                  </svg>
                  Why COMQUEST?
                </a>
              </li>
              <li className={styles['nav-item']}>
                <a href="#" className={`${styles['nav-link']} ${styles['nav-link-active']}`}>
                  <svg width="5" height="13" viewBox="0 0 5 13" fill="none">
                    <path d="M4.21068 6.66721C4.25812 6.71465 4.28184 6.7692 4.28184 6.83087C4.28184 6.89254 4.25812 6.94709 4.21068 6.99453L0.894867 10.3103C0.84743 10.3578 0.792878 10.3815 0.731211 10.3815C0.669543 10.3815 0.614991 10.3578 0.567554 10.3103L0.21178 9.95457C0.164343 9.90713 0.140625 9.85258 0.140625 9.79091C0.140625 9.72925 0.164343 9.67469 0.21178 9.62726L3.00817 6.83087L0.21178 4.03448C0.164343 3.98705 0.140625 3.93249 0.140625 3.87083C0.140625 3.80916 0.164343 3.75461 0.21178 3.70717L0.567554 3.3514C0.614991 3.30396 0.669543 3.28024 0.731211 3.28024C0.792878 3.28024 0.84743 3.30396 0.894867 3.3514L4.21068 6.66721Z" fill="#0088CC"/>
                  </svg>
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles['hero-section']}>
          <div className={styles['hero-container']}>
            <h1 className={styles['page-title']}>Contact COMQUEST</h1>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <ul className={styles['breadcrumb-list']}>
                <li className={styles['breadcrumb-item']}>
                  <a href="#" className={styles['breadcrumb-link']}>Home</a>
                </li>
                <li className={styles['breadcrumb-separator']}>/ </li>
                <li className={styles['breadcrumb-item']}>
                  <a href="#" className={styles['breadcrumb-link']}>Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section className={styles['map-section']}>
          <div className={styles['map-container']}>
            <div className={styles['map-info-card']}>
              <div className={styles['map-info-content']}>
                <div className={styles['map-address-title']}>18740 Ventura Blvd # 100</div>
                <a href="#" className={styles['map-link']}>View larger map</a>
              </div>
            </div>
            <div className={styles['map-embed']}>
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/8336017fedd18676da4ededfb2c52d3595296a88?width=512" alt="Map tile 1" className={styles['map-tile']} />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/9d09181e0e98e445c3899839f0c00bc0b2f441a4?width=512" alt="Map tile 2" className={styles['map-tile']} />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/ba395ed226fad80090e03aa049158df1031fadb6?width=512" alt="Map tile 3" className={styles['map-tile']} />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/41b5f4287221b239f0683e84da3fa821222d9c72?width=512" alt="Map tile 4" className={styles['map-tile']} />
            </div>
            <button className={styles['map-control-btn']} aria-label="Map controls">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M13.9999 22.3708L16.4791 19.8916L18.1416 21.525L13.9999 25.6666L9.85825 21.525L11.5208 19.8916L13.9999 22.3708ZM5.62909 14L8.10825 16.4791L6.47492 18.1416L2.33325 14L6.47492 9.85831L8.10825 11.5208L5.62909 14ZM22.3708 14L19.8916 11.5208L21.5249 9.85831L25.6666 14L21.5249 18.1416L19.8916 16.4791L22.3708 14ZM13.9999 5.62915L11.5208 8.10831L9.85825 6.47498L13.9999 2.33331L18.1416 6.47498L16.4791 8.10831L13.9999 5.62915Z" fill="#666666"/>
              </svg>
            </button>
            <div className={styles['map-logo']}>
              <svg width="52" height="13" viewBox="0 0 52 13" fill="none">
                <g opacity="0.6">
                  <path d="M13.1662 5.52613L13.574 5.11833L13.1581 4.71883C12.1305 3.73178 10.7452 2.97064 8.81793 2.97064C5.34094 2.97064 2.41016 5.80062 2.41016 9.2979C2.41016 12.7952 5.34094 15.6252 8.81793 15.6252C10.6797 15.6252 12.1162 15.0081 13.2441 13.8407C14.4269 12.6553 14.7676 11.0249 14.7676 9.76213C14.7676 9.36783 14.7345 8.98936 14.67 8.66719L14.5792 8.21283H8.25271V10.9215H11.8928C11.7629 11.3711 11.5671 11.6967 11.3282 11.936C10.8544 12.4043 10.1358 12.9227 8.81793 12.9227C6.81898 12.9227 5.24878 11.3166 5.24878 9.2979C5.24878 7.27923 6.81898 5.67311 8.81793 5.67311C9.90028 5.67311 10.6833 6.09567 11.2725 6.64701L11.6717 7.02061L12.0584 6.63398L13.1662 5.52613Z" fill="white" stroke="white" strokeWidth="1.13043"/>
                  <path d="M18.7393 15.619C21.0672 15.619 22.9623 13.7958 22.9623 11.3465C22.9623 8.88363 21.066 7.07404 18.7393 7.07404C16.4126 7.07404 14.5164 8.88363 14.5164 11.3465C14.5164 13.7958 16.4113 15.619 18.7393 15.619ZM18.7393 9.66506C19.5035 9.66506 20.2289 10.2958 20.2289 11.3465C20.2289 12.3869 19.5014 13.028 18.7393 13.028C17.9782 13.028 17.2497 12.3818 17.2497 11.3465C17.2497 10.301 17.9762 9.66506 18.7393 9.66506Z" fill="white" stroke="white" strokeWidth="1.13043"/>
                  <path d="M26.9428 13.028H26.9396C26.1785 13.028 25.45 12.3818 25.45 11.3465C25.45 10.301 26.1765 9.66506 26.9396 9.66506C27.7037 9.66506 28.4292 10.2958 28.4292 11.3465C28.4292 12.3899 27.6997 13.0322 26.9428 13.028ZM26.9335 15.619C29.2614 15.619 31.1564 13.7958 31.1564 11.3465C31.1564 8.88363 29.2601 7.07404 26.9335 7.07404C24.6067 7.07404 22.7104 8.88363 22.7104 11.3465C22.7104 13.7964 24.6123 15.619 26.9335 15.619Z" fill="white" stroke="white" strokeWidth="1.13043"/>
                  <path d="M39.1529 7.86202V7.29683H36.4752V7.38917C36.0607 7.19189 35.5692 7.06783 35.0289 7.06783C32.8557 7.06783 30.9111 8.9654 30.9111 11.3589C30.9111 12.9618 31.7883 14.3341 33.0238 15.062L32.9742 15.0826L31.5569 15.6705L31.0347 15.8871L31.2515 16.4092C31.7208 17.54 32.9679 18.9487 35.0599 18.9487C36.1229 18.9487 37.1603 18.6363 37.9342 17.8866C38.7129 17.1323 39.1529 16.0052 39.1529 14.5215V7.86202ZM33.7122 15.3865C34.1306 15.5376 34.5746 15.619 35.0289 15.619C35.542 15.619 36.013 15.5084 36.4164 15.3258C36.3503 15.619 36.2342 15.8314 36.0959 15.9801C35.884 16.2078 35.5532 16.3577 35.0599 16.3577C34.3727 16.3577 33.9143 15.8696 33.7122 15.3865ZM35.1713 9.66507C35.904 9.66507 36.5866 10.3044 36.5866 11.3651C36.5866 12.4048 35.9116 13.0341 35.1713 13.0341C34.3854 13.0341 33.6693 12.3756 33.6693 11.3651C33.6693 10.3286 34.3924 9.66507 35.1713 9.66507ZM42.0059 3.93198V3.36676H39.2477V15.4024H42.0059V3.93198Z" fill="white" stroke="white" strokeWidth="1.13043"/>
                  <path d="M48.1661 12.1017L47.7002 11.791L47.3852 12.2541C47.0414 12.7597 46.6239 13.0403 46.0268 13.0403C45.7023 13.0403 45.4544 12.9664 45.2584 12.8427C45.2056 12.8095 45.1541 12.771 45.1042 12.7269L49.3997 10.9465L49.9141 10.7332L49.7087 10.2157L49.5436 9.80016C49.2024 8.89016 48.1193 7.0802 45.8412 7.0802C43.5929 7.0802 41.8286 8.86145 41.8286 11.3527C41.8286 13.7247 43.5787 15.6252 46.0206 15.6252C47.9833 15.6252 49.1189 14.4201 49.584 13.7294L49.9013 13.2584L49.4288 12.9434L48.1661 12.1017ZM46.2318 9.6823L44.7733 10.2863C45.0593 9.85352 45.535 9.64032 45.8969 9.64032C46.0215 9.64032 46.1332 9.65592 46.2318 9.6823Z" fill="white" stroke="white" strokeWidth="1.13043"/>
                </g>
                <path d="M8.8179 15.06C5.64285 15.06 2.97534 12.4729 2.97534 9.29793C2.97534 6.12293 5.64285 3.53589 8.8179 3.53589C10.5756 3.53589 11.8258 4.22288 12.7665 5.12649L11.6587 6.23434C10.984 5.60305 10.0681 5.10792 8.8179 5.10792C6.49695 5.10792 4.68353 6.97703 4.68353 9.29793C4.68353 11.6189 6.49695 13.488 8.8179 13.488C10.3218 13.488 11.1759 12.8815 11.7267 12.3368C12.1785 11.885 12.4694 11.2413 12.5808 10.3563H8.8179V8.77808H14.1157C14.1714 9.05654 14.2024 9.39695 14.2024 9.76216C14.2024 10.9442 13.8806 12.4049 12.8408 13.4447C11.8258 14.4968 10.5384 15.06 8.8179 15.06Z" fill="#4285F4"/>
                <path d="M22.397 11.3465C22.397 13.4818 20.7569 15.0537 18.7393 15.0537C16.7217 15.0537 15.0815 13.4818 15.0815 11.3465C15.0815 9.19884 16.7217 7.63922 18.7393 7.63922C20.7569 7.63922 22.397 9.19884 22.397 11.3465ZM20.7941 11.3465C20.7941 10.0097 19.8409 9.09982 18.7393 9.09982C17.6376 9.09982 16.6845 10.0158 16.6845 11.3465C16.6845 12.6648 17.6376 13.5931 18.7393 13.5931C19.8409 13.5931 20.7941 12.6709 20.7941 11.3465Z" fill="#E94235"/>
                <path d="M30.5911 11.3465C30.5911 13.4818 28.951 15.0537 26.9334 15.0537C24.9219 15.0537 23.2756 13.4818 23.2756 11.3465C23.2756 9.19884 24.9157 7.63922 26.9334 7.63922C28.951 7.63922 30.5911 9.19884 30.5911 11.3465ZM28.9944 11.3465C28.9944 10.0097 28.0412 9.09982 26.9396 9.09982C25.838 9.09982 24.8848 10.0158 24.8848 11.3465C24.8848 12.6648 25.838 13.5931 26.9396 13.5931C28.0412 13.5993 28.9944 12.6709 28.9944 11.3465Z" fill="#FABB05"/>
                <path d="M38.5877 7.86201V14.5215C38.5877 17.2633 36.9723 18.3835 35.0599 18.3835C33.2588 18.3835 32.1819 17.1766 31.7734 16.1926L33.1907 15.6046C33.4445 16.2111 34.0634 16.9229 35.0599 16.9229C36.2853 16.9229 37.0404 16.1617 37.0404 14.7443V14.212H36.9846C36.6195 14.6638 35.914 15.0538 35.0289 15.0538C33.1722 15.0538 31.4763 13.4384 31.4763 11.3589C31.4763 9.26699 33.1784 7.63306 35.0289 7.63306C35.914 7.63306 36.6195 8.02916 36.9846 8.46234H37.0404V7.86201H38.5877ZM37.1518 11.3651C37.1518 10.0592 36.2791 9.09983 35.1713 9.09983C34.0448 9.09983 33.1041 10.0529 33.1041 11.3651C33.1041 12.6586 34.0448 13.5993 35.1713 13.5993C36.2791 13.5993 37.1518 12.6586 37.1518 11.3651Z" fill="#4285F4"/>
                <path d="M41.4407 3.93195V14.8372H39.813V3.93195H41.4407Z" fill="#34A853"/>
                <path d="M47.8526 12.572L49.1152 13.4137C48.7067 14.0203 47.7227 15.06 46.0206 15.06C43.9102 15.06 42.3938 13.4323 42.3938 11.3527C42.3938 9.14938 43.9287 7.64545 45.8412 7.64545C47.7659 7.64545 48.7067 9.17417 49.0162 10.0035L49.1833 10.4244L44.2258 12.4792C44.6033 13.2219 45.1975 13.6056 46.0268 13.6056C46.8562 13.6056 47.4318 13.1909 47.8526 12.572ZM43.9597 11.2351L47.2771 9.86117C47.0914 9.39694 46.5467 9.07514 45.8969 9.07514C45.0675 9.07514 43.9163 9.80548 43.9597 11.2351Z" fill="#E94235"/>
              </svg>
            </div>
            <div className={styles['map-preview-marker']}>
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/205bbd8f4418d66c4fb8a796c79a140cfcd86eb8?width=512" alt="Map preview" className={styles['map-preview-img']} />
            </div>
          </div>
        </section>

        <section className={styles['contact-section']}>
          <div className={styles['contact-container']}>
            <h2 className={styles['section-heading']}><strong>Contact</strong> Us</h2>
            <h4 className={styles['section-subheading']}>Get in <strong>touch</strong></h4>
            <p className={styles['section-description']}>
              Our support staff is here 7 days per week to help, or to
              listen to any suggestions you may have! We are always
              looking for ways to deliver an even better experience.
              Please feel encouraged to share your thoughts.
            </p>

            <form className={styles['contact-form']}>
              <div className={styles['form-group']}>
                <label htmlFor="name" className={styles['form-label']}>Your name *</label>
                <input type="text" id="name" className={styles['form-input']} required />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="email" className={styles['form-label']}>Your email address *</label>
                <input 
                  type="email" 
                  id="email" 
                  className={styles['form-input']} 
                  placeholder="Registered email, if one exists" 
                  required 
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="subject" className={styles['form-label']}>Subject *</label>
                <input type="text" id="subject" className={styles['form-input']} required />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="message" className={styles['form-label']}>Message *</label>
                <textarea id="message" className={styles['form-textarea']} required></textarea>
              </div>
              <button type="submit" className={styles['submit-btn']}>Send Message</button>
            </form>

            <div className={styles.separator}></div>

            <h4 className="section-subheading">The <strong>Office</strong></h4>
            <div className={styles['office-info']}>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M5.00281 5.84185C5.00281 5.84185 5.09176 5.75291 5.26964 5.57502C5.44753 5.39713 5.53647 5.05678 5.53647 4.55395C5.53647 4.05112 5.35859 3.62182 5.00281 3.26605C4.64704 2.91027 4.21774 2.73238 3.71491 2.73238C3.21208 2.73238 2.78278 2.91027 2.427 3.26605C2.07123 3.62182 1.89334 4.05112 1.89334 4.55395C1.89334 5.05678 2.07123 5.48608 2.427 5.84185C2.78278 6.19763 3.21208 6.37551 3.71491 6.37551C4.21774 6.37551 4.64704 6.19763 5.00281 5.84185ZM7.35804 4.55395C7.35804 5.07101 7.27977 5.49557 7.12323 5.82762L4.53319 11.335C4.45729 11.4916 4.34463 11.6149 4.1952 11.705C4.04578 11.7951 3.88568 11.8402 3.71491 11.8402C3.54414 11.8402 3.38404 11.7951 3.23461 11.705C3.08519 11.6149 2.9749 11.4916 2.90374 11.335L0.306589 5.82762C0.150048 5.49557 0.0717773 5.07101 0.0717773 4.55395C0.0717773 3.54829 0.427552 2.68969 1.1391 1.97814C1.85065 1.26659 2.70925 0.910818 3.71491 0.910818C4.72056 0.910818 5.57917 1.26659 6.29072 1.97814C7.00226 2.68969 7.35804 3.54829 7.35804 4.55395Z" fill="#777777"/>
              </svg>
              <p><strong>Address:</strong> 18740 Ventura Blvd #100 Tarzana, CA 91356</p>
            </div>

            <div className={styles.separator}></div>

            <h4 className="section-subheading">Business <strong>Hours</strong></h4>
            <p className={styles['business-hours']}>Monday - Sunday 7am to 7pm PST</p>
          </div>
        </section>

        <section className={styles['faq-section']}>
          <div className={styles['faq-container']}>
            <h1 className={styles['faq-heading']}><strong>FAQs</strong></h1>
            <div className={styles['faq-list']}>
              <div className={`${styles['faq-item']} ${styles['faq-item-active']}`}>
                <button className={styles['faq-question']}>
                  <span className={styles['faq-indicator']}></span>
                  Can I buy now and activate the subscription
                  later?
                </button>
                <div className={styles['faq-answer']}>
                  <p>
                    Yes. Your subscription starts once you create your first
                    exam. You can buy now and save your subscription for
                    future use.
                  </p>
                </div>
              </div>
              <div className={styles['faq-item']}>
                <button className={styles['faq-question']}>
                  <span className={styles['faq-indicator']}></span>
                  What do the Guaranteed Pass subscriptions
                  offer?
                </button>
              </div>
              <div className={styles['faq-item']}>
                <button className={styles['faq-question']}>
                  <span className={styles['faq-indicator']}></span>
                  Do you offer returns or refunds?
                </button>
              </div>
              <div className={styles['faq-item']}>
                <button className={styles['faq-question']}>
                  <span className={styles['faq-indicator']}></span>
                  Are there any discounts available?
                </button>
              </div>
              <div className={styles['faq-item']}>
                <button className={styles['faq-question']}>
                  <span className={styles['faq-indicator']}></span>
                  Can I reset my account/scores?
                </button>
              </div>
              <div className={styles['faq-item']}>
                <button className={styles['faq-question']}>
                  <span className={styles['faq-indicator']}></span>
                  How can I work for COMQUEST?
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['cta-section']}>
          <h3 className={styles['cta-heading']}>
            COMQUEST is <strong>everything</strong> you<br />
            need to <strong>pass</strong> your COMLEX and<br />
            COMAT exams!
          </h3>
          <div className={styles['cta-arrow']}></div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles['footer-container']}>
          <h4 className={styles['footer-heading']}>Follow Us</h4>
          <div className={styles['social-links']}>
            <a href="#" className={`${styles['social-link']} ${styles['social-facebook']}`} aria-label="Facebook"></a>
            <a href="#" className={`${styles['social-link']} ${styles['social-twitter']}`} aria-label="Twitter"></a>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <div className={styles['footer-bottom-container']}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/1d519649ee952577a764f9b50488cd8e224f39a9?width=134" 
              alt="COMQUEST Osteopathic Specialists" 
              className={styles['footer-logo']}
            />
            <div className={styles['footer-info']}>
              <p className={styles['footer-copyright']}>
                COMQUEST Osteopathic Specialists, LLC 2009-2026 © All rights
                reserved
              </p>
              <p className={styles['footer-disclaimer']}>
                COMQUEST is in no way affiliated with the Comprehensive
                Osteopathic Medical Licensing Examination (COMLEX-USA™),
                Comprehensive Osteopathic Medical Achievement Test (COMAT
                ®), National Board of Osteopathic Medical Examiners, (NBOME
                ®), or The American Osteopathic Association (AOA ®).
              </p>
              <p className={styles['footer-disclaimer']}>
                The NBOME™ does not review, manage, or endorse any product
                of COMQUEST. All exam names and other trademarks are the
                property of the respective trademark owners.
              </p>
            </div>
            <nav className={styles['footer-nav']}>
              <ul className={styles['footer-nav-list']}>
                <li className={styles['footer-nav-item']}>
                  <a href="#" className={styles['footer-nav-link']}>FAQ's</a>
                </li>
                <li className={styles['footer-nav-separator']}>|</li>
                <li className={styles['footer-nav-item']}>
                  <a href="#" className={styles['footer-nav-link']}>Sitemap</a>
                </li>
                <li className={styles['footer-nav-separator']}>|</li>
                <li className={styles['footer-nav-item']}>
                  <a href="#" className={styles['footer-nav-link']}>Terms & Conditions</a>
                </li>
                <li className={styles['footer-nav-separator']}>|</li>
                <li className={styles['footer-nav-item']}>
                  <a href="#" className={styles['footer-nav-link']}>Privacy</a>
                </li>
                <li className={styles['footer-nav-separator']}>|</li>
                <li className={styles['footer-nav-item']}>
                  <a href="#" className={styles['footer-nav-link']}>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
