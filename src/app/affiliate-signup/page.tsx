import styles from './page.module.scss';

export default function AffiliateSignUpPage() {
  return (
    <div className={styles.affiliatePage}>
      <header className={styles.header}>
        <div className={styles.hamburgerBtn}>
          <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10.6133V11.6133C12 11.7487 11.9505 11.8659 11.8516 11.9648C11.7526 12.0638 11.6354 12.1133 11.5 12.1133H0.5C0.364583 12.1133 0.247396 12.0638 0.148438 11.9648C0.0494792 11.8659 0 11.7487 0 11.6133V10.6133C0 10.4779 0.0494792 10.3607 0.148438 10.2617C0.247396 10.1628 0.364583 10.1133 0.5 10.1133H11.5C11.6354 10.1133 11.7526 10.1628 11.8516 10.2617C11.9505 10.3607 12 10.4779 12 10.6133ZM12 6.61328V7.61328C12 7.7487 11.9505 7.86589 11.8516 7.96484C11.7526 8.0638 11.6354 8.11328 11.5 8.11328H0.5C0.364583 8.11328 0.247396 8.0638 0.148438 7.96484C0.0494792 7.86589 0 7.7487 0 7.61328V6.61328C0 6.47786 0.0494792 6.36068 0.148438 6.26172C0.247396 6.16276 0.364583 6.11328 0.5 6.11328H11.5C11.6354 6.11328 11.7526 6.16276 11.8516 6.26172C11.9505 6.36068 12 6.47786 12 6.61328ZM12 2.61328V3.61328C12 3.7487 11.9505 3.86589 11.8516 3.96484C11.7526 4.0638 11.6354 4.11328 11.5 4.11328H0.5C0.364583 4.11328 0.247396 4.0638 0.148438 3.96484C0.0494792 3.86589 0 3.7487 0 3.61328V2.61328C0 2.47786 0.0494792 2.36068 0.148438 2.26172C0.247396 2.16276 0.364583 2.11328 0.5 2.11328H11.5C11.6354 2.11328 11.7526 2.16276 11.8516 2.26172C11.9505 2.36068 12 2.47786 12 2.61328Z" fill="white"/>
          </svg>
        </div>

        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/e8fe0d918408f09a6f02afec18b9ec4b2d26e0b1?width=480" 
              alt="COMQUEST Logo" 
              className={styles.logo}
            />
          </div>
          <nav className={styles.mainNav}>
            <a href="#" className={styles.navLink}>Blog</a>
            <a href="#" className={styles.navLink}>FAQ</a>
            <a href="#" className={styles.navLink}>Our Team</a>
            <a href="#" className={styles.navLink}>Institutional Accounts</a>
            <a href="#" className={styles.navLink}>Why COMQUEST?</a>
            <a href="#" className={styles.navLink}>Login</a>
          </nav>
        </div>

        <div className={styles.secondaryNavContainer}>
          <nav className={styles.secondaryNav}>
            <a href="#" className={styles.secondaryNavLink}>Exams</a>
            <a href="#" className={styles.secondaryNavLink}>Testimonials</a>
            <a href="#" className={`${styles.secondaryNavLink} ${styles.active}`}>Spread the Word, Earn Rewards!</a>
            <a href="#" className={styles.secondaryNavLink}>Contact Us</a>
            <a href="#" className={`${styles.secondaryNavLink} ${styles.buyNowBtn}`}>Buy Now</a>
          </nav>
        </div>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Affiliate Sign Up</h1>
          <div className={styles.breadcrumbs}>
            <a href="#" className={styles.breadcrumbLink}>Home</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>Affiliate Sign Up</span>
          </div>
        </div>
      </section>

      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <h2 className={styles.mainHeading}>Become a COMQUEST Affiliate!</h2>

          <div className={styles.introText}>
            <p>Did you experience all of the great benefits of using COMQUEST and want to spread the word? If so, we want you to <strong>Join Our Team</strong>!</p>
          </div>

          <div className={styles.introParagraph}>
            <p>
              Become a <span className={styles.handwritten}>COMQUEST Affiliate</span> and take advantage of all the great perks while spreading the word about your success after studying with COMQUEST. Being a <span className={styles.handwritten}>COMQUEST Affiliate</span> is simple, doesn't require a huge time commitment, and gives you the opportunity to earn some great rewards!
            </p>
          </div>

          <div className={styles.separator}></div>

          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <section className={styles.infoSection}>
                <h3 className={styles.sectionHeading}>
                  What's <strong>In It For You?</strong>
                </h3>
                <ul className={styles.benefitsList}>
                  <li className={styles.benefitItem}>
                    <svg className={styles.checkIcon} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 7.37891V9.86328C11 10.4831 10.7799 11.013 10.3398 11.4531C9.89974 11.8932 9.36979 12.1133 8.75 12.1133H2.25C1.63021 12.1133 1.10026 11.8932 0.660156 11.4531C0.220052 11.013 0 10.4831 0 9.86328V3.36328C0 2.74349 0.220052 2.21354 0.660156 1.77344C1.10026 1.33333 1.63021 1.11328 2.25 1.11328H8.75C9.07812 1.11328 9.38281 1.17839 9.66406 1.30859C9.74219 1.34505 9.78906 1.40495 9.80469 1.48828C9.82031 1.57682 9.79688 1.65234 9.73438 1.71484L9.35156 2.09766C9.29948 2.14974 9.23958 2.17578 9.17188 2.17578C9.15625 2.17578 9.13281 2.17057 9.10156 2.16016C8.98177 2.12891 8.86458 2.11328 8.75 2.11328H2.25C1.90625 2.11328 1.61198 2.23568 1.36719 2.48047C1.1224 2.72526 1 3.01953 1 3.36328V9.86328C1 10.207 1.1224 10.5013 1.36719 10.7461C1.61198 10.9909 1.90625 11.1133 2.25 11.1133H8.75C9.09375 11.1133 9.38802 10.9909 9.63281 10.7461C9.8776 10.5013 10 10.207 10 9.86328V7.87891C10 7.8112 10.0234 7.75391 10.0703 7.70703L10.5703 7.20703C10.6224 7.15495 10.6823 7.12891 10.75 7.12891C10.7812 7.12891 10.8125 7.13672 10.8438 7.15234C10.9479 7.19401 11 7.26953 11 7.37891ZM12.8047 3.55859L6.44531 9.91797C6.32031 10.043 6.17188 10.1055 6 10.1055C5.82812 10.1055 5.67969 10.043 5.55469 9.91797L2.19531 6.55859C2.07031 6.43359 2.00781 6.28516 2.00781 6.11328C2.00781 5.94141 2.07031 5.79297 2.19531 5.66797L3.05469 4.80859C3.17969 4.68359 3.32812 4.62109 3.5 4.62109C3.67188 4.62109 3.82031 4.68359 3.94531 4.80859L6 6.86328L11.0547 1.80859C11.1797 1.68359 11.3281 1.62109 11.5 1.62109C11.6719 1.62109 11.8203 1.68359 11.9453 1.80859L12.8047 2.66797C12.9297 2.79297 12.9922 2.94141 12.9922 3.11328C12.9922 3.28516 12.9297 3.43359 12.8047 3.55859Z" fill="#0084C7"/>
                    </svg>
                    <span>Discounted subscription to the COMQUEST question banks through YOUR exclusive affiliate discount code</span>
                  </li>
                  <li className={styles.benefitItem}>
                    <svg className={styles.checkIcon} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 7.37891V9.86328C11 10.4831 10.7799 11.013 10.3398 11.4531C9.89974 11.8932 9.36979 12.1133 8.75 12.1133H2.25C1.63021 12.1133 1.10026 11.8932 0.660156 11.4531C0.220052 11.013 0 10.4831 0 9.86328V3.36328C0 2.74349 0.220052 2.21354 0.660156 1.77344C1.10026 1.33333 1.63021 1.11328 2.25 1.11328H8.75C9.07812 1.11328 9.38281 1.17839 9.66406 1.30859C9.74219 1.34505 9.78906 1.40495 9.80469 1.48828C9.82031 1.57682 9.79688 1.65234 9.73438 1.71484L9.35156 2.09766C9.29948 2.14974 9.23958 2.17578 9.17188 2.17578C9.15625 2.17578 9.13281 2.17057 9.10156 2.16016C8.98177 2.12891 8.86458 2.11328 8.75 2.11328H2.25C1.90625 2.11328 1.61198 2.23568 1.36719 2.48047C1.1224 2.72526 1 3.01953 1 3.36328V9.86328C1 10.207 1.1224 10.5013 1.36719 10.7461C1.61198 10.9909 1.90625 11.1133 2.25 11.1133H8.75C9.09375 11.1133 9.38802 10.9909 9.63281 10.7461C9.8776 10.5013 10 10.207 10 9.86328V7.87891C10 7.8112 10.0234 7.75391 10.0703 7.70703L10.5703 7.20703C10.6224 7.15495 10.6823 7.12891 10.75 7.12891C10.7812 7.12891 10.8125 7.13672 10.8438 7.15234C10.9479 7.19401 11 7.26953 11 7.37891ZM12.8047 3.55859L6.44531 9.91797C6.32031 10.043 6.17188 10.1055 6 10.1055C5.82812 10.1055 5.67969 10.043 5.55469 9.91797L2.19531 6.55859C2.07031 6.43359 2.00781 6.28516 2.00781 6.11328C2.00781 5.94141 2.07031 5.79297 2.19531 5.66797L3.05469 4.80859C3.17969 4.68359 3.32812 4.62109 3.5 4.62109C3.67188 4.62109 3.82031 4.68359 3.94531 4.80859L6 6.86328L11.0547 1.80859C11.1797 1.68359 11.3281 1.62109 11.5 1.62109C11.6719 1.62109 11.8203 1.68359 11.9453 1.80859L12.8047 2.66797C12.9297 2.79297 12.9922 2.94141 12.9922 3.11328C12.9922 3.28516 12.9297 3.43359 12.8047 3.55859Z" fill="#0084C7"/>
                    </svg>
                    <span>Gift Cards or COMQUEST Dollars</span>
                  </li>
                  <li className={styles.benefitItem}>
                    <svg className={styles.checkIcon} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 7.37891V9.86328C11 10.4831 10.7799 11.013 10.3398 11.4531C9.89974 11.8932 9.36979 12.1133 8.75 12.1133H2.25C1.63021 12.1133 1.10026 11.8932 0.660156 11.4531C0.220052 11.013 0 10.4831 0 9.86328V3.36328C0 2.74349 0.220052 2.21354 0.660156 1.77344C1.10026 1.33333 1.63021 1.11328 2.25 1.11328H8.75C9.07812 1.11328 9.38281 1.17839 9.66406 1.30859C9.74219 1.34505 9.78906 1.40495 9.80469 1.48828C9.82031 1.57682 9.79688 1.65234 9.73438 1.71484L9.35156 2.09766C9.29948 2.14974 9.23958 2.17578 9.17188 2.17578C9.15625 2.17578 9.13281 2.17057 9.10156 2.16016C8.98177 2.12891 8.86458 2.11328 8.75 2.11328H2.25C1.90625 2.11328 1.61198 2.23568 1.36719 2.48047C1.1224 2.72526 1 3.01953 1 3.36328V9.86328C1 10.207 1.1224 10.5013 1.36719 10.7461C1.61198 10.9909 1.90625 11.1133 2.25 11.1133H8.75C9.09375 11.1133 9.38802 10.9909 9.63281 10.7461C9.8776 10.5013 10 10.207 10 9.86328V7.87891C10 7.8112 10.0234 7.75391 10.0703 7.70703L10.5703 7.20703C10.6224 7.15495 10.6823 7.12891 10.75 7.12891C10.7812 7.12891 10.8125 7.13672 10.8438 7.15234C10.9479 7.19401 11 7.26953 11 7.37891ZM12.8047 3.55859L6.44531 9.91797C6.32031 10.043 6.17188 10.1055 6 10.1055C5.82812 10.1055 5.67969 10.043 5.55469 9.91797L2.19531 6.55859C2.07031 6.43359 2.00781 6.28516 2.00781 6.11328C2.00781 5.94141 2.07031 5.79297 2.19531 5.66797L3.05469 4.80859C3.17969 4.68359 3.32812 4.62109 3.5 4.62109C3.67188 4.62109 3.82031 4.68359 3.94531 4.80859L6 6.86328L11.0547 1.80859C11.1797 1.68359 11.3281 1.62109 11.5 1.62109C11.6719 1.62109 11.8203 1.68359 11.9453 1.80859L12.8047 2.66797C12.9297 2.79297 12.9922 2.94141 12.9922 3.11328C12.9922 3.28516 12.9297 3.43359 12.8047 3.55859Z" fill="#0084C7"/>
                    </svg>
                    <span>Referral Bonus – You'll get a bonus for every referral that you send who successfully becomes a COMQUEST affiliate</span>
                  </li>
                </ul>
              </section>

              <section className={styles.infoSection}>
                <h3 className={styles.sectionHeading}>
                  Why <strong>Your Audience Will LOVE It!</strong>
                </h3>
                <p className={styles.sectionSubtext}>Your followers will get access to:</p>
                <ul className={styles.benefitsList}>
                  <li className={styles.benefitItem}>
                    <svg className={styles.checkIcon} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 7.37891V9.86328C11 10.4831 10.7799 11.013 10.3398 11.4531C9.89974 11.8932 9.36979 12.1133 8.75 12.1133H2.25C1.63021 12.1133 1.10026 11.8932 0.660156 11.4531C0.220052 11.013 0 10.4831 0 9.86328V3.36328C0 2.74349 0.220052 2.21354 0.660156 1.77344C1.10026 1.33333 1.63021 1.11328 2.25 1.11328H8.75C9.07812 1.11328 9.38281 1.17839 9.66406 1.30859C9.74219 1.34505 9.78906 1.40495 9.80469 1.48828C9.82031 1.57682 9.79688 1.65234 9.73438 1.71484L9.35156 2.09766C9.29948 2.14974 9.23958 2.17578 9.17188 2.17578C9.15625 2.17578 9.13281 2.17057 9.10156 2.16016C8.98177 2.12891 8.86458 2.11328 8.75 2.11328H2.25C1.90625 2.11328 1.61198 2.23568 1.36719 2.48047C1.1224 2.72526 1 3.01953 1 3.36328V9.86328C1 10.207 1.1224 10.5013 1.36719 10.7461C1.61198 10.9909 1.90625 11.1133 2.25 11.1133H8.75C9.09375 11.1133 9.38802 10.9909 9.63281 10.7461C9.8776 10.5013 10 10.207 10 9.86328V7.87891C10 7.8112 10.0234 7.75391 10.0703 7.70703L10.5703 7.20703C10.6224 7.15495 10.6823 7.12891 10.75 7.12891C10.7812 7.12891 10.8125 7.13672 10.8438 7.15234C10.9479 7.19401 11 7.26953 11 7.37891ZM12.8047 3.55859L6.44531 9.91797C6.32031 10.043 6.17188 10.1055 6 10.1055C5.82812 10.1055 5.67969 10.043 5.55469 9.91797L2.19531 6.55859C2.07031 6.43359 2.00781 6.28516 2.00781 6.11328C2.00781 5.94141 2.07031 5.79297 2.19531 5.66797L3.05469 4.80859C3.17969 4.68359 3.32812 4.62109 3.5 4.62109C3.67188 4.62109 3.82031 4.68359 3.94531 4.80859L6 6.86328L11.0547 1.80859C11.1797 1.68359 11.3281 1.62109 11.5 1.62109C11.6719 1.62109 11.8203 1.68359 11.9453 1.80859L12.8047 2.66797C12.9297 2.79297 12.9922 2.94141 12.9922 3.11328C12.9922 3.28516 12.9297 3.43359 12.8047 3.55859Z" fill="#0084C7"/>
                    </svg>
                    <span>Year-round savings of hundreds of dollars on every COMQUEST subscription.</span>
                  </li>
                  <li className={styles.benefitItem}>
                    <svg className={styles.checkIcon} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 7.37891V9.86328C11 10.4831 10.7799 11.013 10.3398 11.4531C9.89974 11.8932 9.36979 12.1133 8.75 12.1133H2.25C1.63021 12.1133 1.10026 11.8932 0.660156 11.4531C0.220052 11.013 0 10.4831 0 9.86328V3.36328C0 2.74349 0.220052 2.21354 0.660156 1.77344C1.10026 1.33333 1.63021 1.11328 2.25 1.11328H8.75C9.07812 1.11328 9.38281 1.17839 9.66406 1.30859C9.74219 1.34505 9.78906 1.40495 9.80469 1.48828C9.82031 1.57682 9.79688 1.65234 9.73438 1.71484L9.35156 2.09766C9.29948 2.14974 9.23958 2.17578 9.17188 2.17578C9.15625 2.17578 9.13281 2.17057 9.10156 2.16016C8.98177 2.12891 8.86458 2.11328 8.75 2.11328H2.25C1.90625 2.11328 1.61198 2.23568 1.36719 2.48047C1.1224 2.72526 1 3.01953 1 3.36328V9.86328C1 10.207 1.1224 10.5013 1.36719 10.7461C1.61198 10.9909 1.90625 11.1133 2.25 11.1133H8.75C9.09375 11.1133 9.38802 10.9909 9.63281 10.7461C9.8776 10.5013 10 10.207 10 9.86328V7.87891C10 7.8112 10.0234 7.75391 10.0703 7.70703L10.5703 7.20703C10.6224 7.15495 10.6823 7.12891 10.75 7.12891C10.7812 7.12891 10.8125 7.13672 10.8438 7.15234C10.9479 7.19401 11 7.26953 11 7.37891ZM12.8047 3.55859L6.44531 9.91797C6.32031 10.043 6.17188 10.1055 6 10.1055C5.82812 10.1055 5.67969 10.043 5.55469 9.91797L2.19531 6.55859C2.07031 6.43359 2.00781 6.28516 2.00781 6.11328C2.00781 5.94141 2.07031 5.79297 2.19531 5.66797L3.05469 4.80859C3.17969 4.68359 3.32812 4.62109 3.5 4.62109C3.67188 4.62109 3.82031 4.68359 3.94531 4.80859L6 6.86328L11.0547 1.80859C11.1797 1.68359 11.3281 1.62109 11.5 1.62109C11.6719 1.62109 11.8203 1.68359 11.9453 1.80859L12.8047 2.66797C12.9297 2.79297 12.9922 2.94141 12.9922 3.11328C12.9922 3.28516 12.9297 3.43359 12.8047 3.55859Z" fill="#0084C7"/>
                    </svg>
                    <span>No surveys or waiting periods: they'll access the discount code instantly and directly from your profiles!</span>
                  </li>
                </ul>
              </section>

              <section className={styles.infoSection}>
                <h3 className={styles.sectionHeading}>
                  <strong>How</strong> It Works:
                </h3>
                <ol className={styles.stepsList}>
                  <li>Fill out our online COMQUEST Affiliate Application</li>
                  <li>We will get in touch with you within 2 business days</li>
                  <li>You'll receive your own unique discount code to share with your followers on all social media platforms you use</li>
                  <li>You'll get monthly updates on purchases made using your unique discount code so that you can keep track of the rewards you've earned!</li>
                </ol>
              </section>

              <section className={styles.infoSection}>
                <h3 className={styles.sectionHeading}>
                  <strong>Sign Up</strong> Now!
                </h3>
                <p className={styles.contactText}>
                  Do you have any questions? Feel free to <a href="#" className={styles.contactLink}>contact us</a>
                </p>
              </section>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.formContainer}>
                <h3 className={styles.formHeading}>Affiliate Application</h3>
                <form className={styles.applicationForm}>
                  <input type="text" placeholder="* First Name" className={styles.formInput} required />
                  <input type="text" placeholder="* Last Name" className={styles.formInput} required />
                  <input type="email" placeholder="* E-mail address" className={styles.formInput} required />

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>* Main Social Media Platform:</label>
                    <div className={styles.checkboxGroup}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span>Reddit Account</span>
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span>Subreddit Moderator</span>
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span>Facebook Page</span>
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span>Facebook Account</span>
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span>Instagram Account</span>
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span>TikTok Account</span>
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span>Twitter Account</span>
                      </label>
                    </div>
                  </div>

                  <input type="number" placeholder="* Current Number of Followers" className={styles.formInput} required />
                  <input type="url" placeholder="* Link to account or page" className={styles.formInput} required />

                  <select className={styles.formSelect} required>
                    <option value="">--- * Have you studied with COMQUEST before? ---</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>

                  <textarea 
                    placeholder="* Why would you be a good COMQUEST Affiliate?" 
                    className={styles.formTextarea}
                    rows={4}
                    required
                  ></textarea>

                  <input 
                    type="text" 
                    placeholder="Did someone recommend you for this program? If so, who referred you?" 
                    className={styles.formInput}
                  />

                  <div className={styles.recaptchaContainer}>
                    <div className={styles.recaptchaBox}>
                      <div className={styles.recaptchaCheckbox}>
                        <input type="checkbox" className={styles.recaptchaInput} />
                        <span className={styles.recaptchaLabel}>Я не робот</span>
                      </div>
                      <div className={styles.recaptchaLogo}>
                        <img 
                          src="https://api.builder.io/api/v1/image/assets/TEMP/86d75e67830dfedb552cb8197c294fa086d00f1a?width=64" 
                          alt="reCAPTCHA" 
                        />
                        <div className={styles.recaptchaText}>reCAPTCHA</div>
                      </div>
                    </div>
                    <div className={styles.recaptchaLinks}>
                      <a href="#" className={styles.recaptchaLink}>Конфиденциальность</a>
                      <span> - </span>
                      <a href="#" className={styles.recaptchaLink}>Условия использования</a>
                    </div>
                  </div>

                  <div className={styles.submitBtnContainer}>
                    <button type="submit" className={styles.submitBtn}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className={styles.separator}></div>
        </div>
      </main>

      <div className={styles.recaptchaBadge}>
        <div className={styles.badgeContent}>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/45c342dbf17dce8197f3a70b9bbcaef0975445ff?width=80" 
            alt="reCAPTCHA" 
            className={styles.badgeLogo}
          />
          <div className={styles.badgeText}>
            <div>защита от спама <strong>reCAPTCHA</strong></div>
            <div className={styles.badgeLinks}>
              <a href="#">Конфиденциальность</a> - <a href="#">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
