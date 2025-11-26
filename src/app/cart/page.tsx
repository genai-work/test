import styles from './page.module.scss';

export default function CartPage() {
  return (
    <div className={styles.cartPage}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <button className={styles.menuButton} aria-label="Menu">
            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15.75V17.25C18 17.4531 17.9258 17.6289 17.7773 17.7773C17.6289 17.9258 17.4531 18 17.25 18H0.75C0.546875 18 0.371094 17.9258 0.222656 17.7773C0.0742188 17.6289 0 17.4531 0 17.25V15.75C0 15.5469 0.0742188 15.3711 0.222656 15.2227C0.371094 15.0742 0.546875 15 0.75 15H17.25C17.4531 15 17.6289 15.0742 17.7773 15.2227C17.9258 15.3711 18 15.5469 18 15.75ZM18 9.75V11.25C18 11.4531 17.9258 11.6289 17.7773 11.7773C17.6289 11.9258 17.4531 12 17.25 12H0.75C0.546875 12 0.371094 11.9258 0.222656 11.7773C0.0742188 11.6289 0 11.4531 0 11.25V9.75C0 9.54688 0.0742188 9.37109 0.222656 9.22266C0.371094 9.07422 0.546875 9 0.75 9H17.25C17.4531 9 17.6289 9.07422 17.7773 9.22266C17.9258 9.37109 18 9.54688 18 9.75ZM18 3.75V5.25C18 5.45312 17.9258 5.62891 17.7773 5.77734C17.6289 5.92578 17.4531 6 17.25 6H0.75C0.546875 6 0.371094 5.92578 0.222656 5.77734C0.0742188 5.62891 0 5.45312 0 5.25V3.75C0 3.54688 0.0742188 3.37109 0.222656 3.22266C0.371094 3.07422 0.546875 3 0.75 3H17.25C17.4531 3 17.6289 3.07422 17.7773 3.22266C17.9258 3.37109 18 3.54688 18 3.75Z" fill="white"/>
            </svg>
          </button>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/5110e2adbd48f52a8e96b2de7f412983c96cf8d8?width=303" 
            alt="COMQUEST" 
            className={styles.logo}
          />
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.pageHeader}>
          <div className={styles.pageHeaderIcon}>
            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.85929 18.4286V15.8572C6.85929 15.7322 6.81911 15.6295 6.73875 15.5491C6.65839 15.4688 6.55572 15.4286 6.43072 15.4286H2.145C2.02 15.4286 1.91732 15.4688 1.83697 15.5491C1.75661 15.6295 1.71643 15.7322 1.71643 15.8572V18.4286C1.71643 18.5536 1.75661 18.6563 1.83697 18.7366C1.91732 18.817 2.02 18.8572 2.145 18.8572H6.43072C6.55572 18.8572 6.65839 18.817 6.73875 18.7366C6.81911 18.6563 6.85929 18.5536 6.85929 18.4286ZM6.85929 13.2857V10.7143C6.85929 10.5893 6.81911 10.4866 6.73875 10.4063C6.65839 10.3259 6.55572 10.2857 6.43072 10.2857H2.145C2.02 10.2857 1.91732 10.3259 1.83697 10.4063C1.75661 10.4866 1.71643 10.5893 1.71643 10.7143V13.2857C1.71643 13.4107 1.75661 13.5134 1.83697 13.5938C1.91732 13.6741 2.02 13.7143 2.145 13.7143H6.43072C6.55572 13.7143 6.65839 13.6741 6.73875 13.5938C6.81911 13.5134 6.85929 13.4107 6.85929 13.2857ZM13.7164 18.4286V15.8572C13.7164 15.7322 13.6763 15.6295 13.5959 15.5491C13.5155 15.4688 13.4129 15.4286 13.2879 15.4286H9.00214C8.87714 15.4286 8.77447 15.4688 8.69411 15.5491C8.61375 15.6295 8.57357 15.7322 8.57357 15.8572V18.4286C8.57357 18.5536 8.61375 18.6563 8.69411 18.7366C8.77447 18.817 8.87714 18.8572 9.00214 18.8572H13.2879C13.4129 18.8572 13.5155 18.817 13.5959 18.7366C13.6763 18.6563 13.7164 18.5536 13.7164 18.4286ZM6.85929 8.14287V5.57144C6.85929 5.44644 6.81911 5.34376 6.73875 5.26341C6.65839 5.18305 6.55572 5.14287 6.43072 5.14287H2.145C2.02 5.14287 1.91732 5.18305 1.83697 5.26341C1.75661 5.34376 1.71643 5.4464..." fill="none"/>
            </svg>
          </div>
          <h1 className={styles.pageTitle}>Add Subscription</h1>
        </section>

        <section className={styles.stepsContainer}>
          <div className={styles.stepItem}>
            <div className={styles.stepBadge}>1</div>
            <span className={styles.stepLabel}>Select your exam(s)</span>
          </div>
          <div className={`${styles.stepItem} ${styles.stepItemActive}`}>
            <div className={`${styles.stepBadge} ${styles.stepBadgeActive}`}>2</div>
            <span className={styles.stepLabel}>Billing Information</span>
          </div>
        </section>

        <section className={styles.orderSummarySection}>
          <div className={styles.orderSummaryCard}>
            <div className={styles.orderHeader}>
              <div className={styles.encryptBadge}>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/93d5c4b55277c61cbee2385ecf166d34ea8c00da?width=170" 
                  alt="Let's Encrypt" 
                  className={styles.encryptLogo}
                />
              </div>
              <h2 className={styles.orderTitle}>Order Summary</h2>
              <p className={styles.orderSubtitle}>This is a secure 128-bit SSL encrypted payment</p>
            </div>

            <div className={styles.orderDetails}>
              <div className={styles.orderBox}>
                <div className={styles.orderBoxHeader}>
                  Buy Now, Activate Anytime
                </div>
                <div className={styles.orderBoxContent}>
                  <div className={styles.productInfo}>
                    <div className={styles.productDetails}>
                      <p className={styles.productName}>COMLEX Level 1</p>
                      <p className={styles.productDuration}>1 month</p>
                    </div>
                    <div className={styles.productPrice}>$179.00</div>
                  </div>
                </div>
                <a href="#" className={styles.comboLink}>
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7273 9.45202C12.8478 9.33148 12.9081 9.18081 12.9081 9.00001C12.9081 8.81921 12.8478 8.66854 12.7273 8.548L11.8132 7.63394L8.17705 3.99778C8.05652 3.87724 7.90585 3.81697 7.72505 3.81697C7.54424 3.81697 7.39357 3.87724 7.27304 3.99778L6.35897 4.91184C6.23844 5.03238 6.17817 5.18304 6.17817 5.36385C6.17817 5.54465 6.23844 5.69532 6.35897 5.81586L8.25741 7.71429H3.215C3.04089 7.71429 2.89022 7.77791 2.76299 7.90514C2.63576 8.03238 2.57214 8.18304 2.57214 8.35715V9.64287C2.57214 9.81697 2.63576 9.96764 2.76299 10.0949C2.89022 10.2221 3.04089 10.2857 3.215 10.2857H8.25741L6.35897 12.1842C6.23174 12.3114 6.16813 12.4621 6.16813 12.6362C6.16813 12.8103 6.23174 12.9609 6.35897 13.0882L7.27304 14.0022C7.39357 14.1228 7.54424 14.183 7.72505 14.183C7.90585 14.183 8.05652 14.1228 8.17705 14.0022L11.8132 10.3661L12.7273 9.45202ZM14.3947 5.1278C14.3947 5.1278 14.5671 5.42328 14.912 6.01424C15.2569 6.6052 15.4293 7.60046 15.4293 9.00001C15.4293 10.3996 15.0844 11.6903 14.3947 12.8722C13.705 14.0541 12.7691 14.99 11.5872 15.6797C10.4053 16.3694 9.11455 16.7143 7.715 16.7143C6.31545 16.7143 5.02471 16.3694 3.84279 15.6797C2.66087 14.99 1.72505 14.0541 1.03531 12.8722C0.345581 11.6903 0.000715256 10.3996 0.000715256 9.00001C0.000715256 7.60046 0.345581 6.30972 1.03531 5.1278C1.72505 3.94588 2.66087 3.01005 3.84279 2.32032C5.02471 1.63059 6.31545 1.28572 7.715 1.28572C9.11455 1.28572 10.4053 1.63059 11.5872 2.32032C12.7691 3.01005 13.705 3.94588 14.3947 5.1278Z" fill="#337ab7"/>
                  </svg>
                  Special combo-deal available
                </a>
                <div className={styles.savingsBadge}>
                  <p className={styles.savingsAmount}>$0.00</p>
                  <p className={styles.savingsLabel}>saved!</p>
                </div>
              </div>
            </div>

            <div className={styles.orderTotal}>
              <p className={styles.totalLabel}>Total <span className={styles.totalAmount}>$179.00</span></p>
            </div>

            <div className={styles.couponSection}>
              <a href="#" className={styles.couponLink}>Use coupon</a>
            </div>

            <div className={styles.termsSection}>
              <p className={styles.termsText}>
                By purchasing, you agree to the <a href="#" className={styles.termsLink}>terms</a> below.
              </p>
              <p className={styles.termsNote}>
                OK, we know you don't read these, but we do want to make sure you understand our terms regarding refunds
              </p>
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.prevButton}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.82031 10.5703C4.8724 10.6224 4.89844 10.6823 4.89844 10.75C4.89844 10.8177 4.8724 10.8776 4.82031 10.9297L4.42969 11.3203C4.3776 11.3724 4.31771 11.3984 4.25 11.3984C4.18229 11.3984 4.1224 11.3724 4.07031 11.3203L0.429688 7.67969C0.377604 7.6276 0.351562 7.56771 0.351562 7.5C0.351562 7.43229 0.377604 7.3724 0.429688 7.32031L4.07031 3.67969C4.1224 3.6276 4.18229 3.60156 4.25 3.60156C4.31771 3.60156 4.3776 3.6276 4.42969 3.67969L4.82031 4.07031C4.8724 4.1224 4.89844 4.18229 4.89844 4.25C4.89844 4.31771 4.8724 4.3776 4.82031 4.42969L1.75 7.5L4.82031 10.5703ZM7.82031 10.5703C7.8724 10.6224 7.89844 10.6823 7.89844 10.75C7.89844 10.8177 7.8724 10.8776 7.82031 10.9297L7.42969 11.3203C7.3776 11.3724 7.31771 11.3984 7.25 11.3984C7.18229 11.3984 7.1224 11.3724 7.07031 11.3203L3.42969 7.67969C3.3776 7.6276 3.35156 7.56771 3.35156 7.5C3.35156 7.43229 3.3776 7.3724 3.42969 7.32031L7.07031 3.67969C7.1224 3.6276 7.18229 3.60156 7.25 3.60156C7.31771 3.60156 7.3776 3.6276 7.42969 3.67969L7.82031 4.07031C7.8724 4.1224 7.89844 4.18229 7.89844 4.25C7.89844 4.31771 7.8724 4.3776 7.82031 4.42969L4.75 7.5L7.82031 10.5703Z" fill="white"/>
                </svg>
                Prev
              </button>
              <button className={styles.submitButton}>Enter Secure Payment</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
