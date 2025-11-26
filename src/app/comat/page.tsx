import styles from './page.module.scss';

export default function ComatPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/e8fe0d918408f09a6f02afec18b9ec4b2d26e0b1?width=480" 
              alt="COMLEX-USA" 
              className={styles.logo}
            />
          </div>
          <nav className={styles.mainNav}>
            <a href="#" className={styles.navLink}>
              <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>Blog</span>
            </a>
            <a href="#" className={styles.navLink}>
              <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>FAQ</span>
            </a>
            <a href="#" className={styles.navLink}>
              <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>Our Team</span>
            </a>
            <a href="#" className={styles.navLink}>
              <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>Institutional Accounts</span>
            </a>
            <a href="#" className={styles.navLink}>
              <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>Why COMQUEST?</span>
            </a>
            <a href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>
              <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
              </svg>
              <span>Login</span>
            </a>
          </nav>
        </div>
        
        <div className={styles.secondaryNav}>
          <div className={styles.secondaryNavContent}>
            <button className={styles.examButton}>
              Exams
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.13696 4.90639C7.18164 4.95106 7.20398 5.00244 7.20398 5.06052C7.20398 5.1186 7.18164 5.16997 7.13696 5.21465L4.01412 8.3375C3.96944 8.38217 3.91806 8.40451 3.85998 8.40451C3.80191 8.40451 3.75053 8.38217 3.70585 8.3375L0.583005 5.21465C0.538329 5.16997 0.515991 5.1186 0.515991 5.06052C0.515991 5.00244 0.538329 4.95106 0.583005 4.90639L0.918075 4.57132C0.96275 4.52664 1.01413 4.5043 1.07221 4.5043C1.13029 4.5043 1.18166 4.52664 1.22634 4.57132L3.85998 7.20496L6.49363 4.57132C6.53831 4.52664 6.58968 4.5043 6.64776 4.5043C6.70584 4.5043 6.75722 4.52664 6.80189 4.57132L7.13696 4.90639Z" fill="white"/>
              </svg>
            </button>
            <a href="#" className={styles.secondaryNavLink}>Testimonials</a>
            <a href="#" className={styles.secondaryNavLink}>Spread the Word, Earn Rewards!</a>
            <a href="#" className={styles.secondaryNavLink}>Contact Us</a>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        </div>
      </header>

      <section className={styles.breadcrumbSection}>
        <div className={styles.breadcrumbContainer}>
          <h1 className={styles.pageTitle}>COMAT</h1>
          <nav className={styles.breadcrumb}>
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Exams</a>
            <span>/</span>
            <a href="#">COMAT</a>
          </nav>
        </div>
      </section>

      <main className={styles.mainContent}>
        <div className={styles.introSection}>
          <div className={styles.introContent}>
            <h2 className={styles.heading}>
              <strong>COMAT</strong> Shelf Exam Preparation
            </h2>
            
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>
                There is a very limited amount of high-quality resources to prepare for the NBOME COMAT shelf examinations (COMAT). COMQUEST, in collaboration with ExamGuru, has authored the most relevant content that is consistent with current 2025 testing standards. Expect the highest quality, most relevant and efficient COMAT exam preparation in the market.
              </p>
              <button className={styles.buyButtonLarge}>Buy Now</button>
            </div>
          </div>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.cardsSection}>
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={`${styles.cardBorder} ${styles.cardBorderRed}`}>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleRed}`}>Emergency Medicine</h3>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>The emergency medicine COMAT covers cases that a third or fourth year..</p>
                  <a href="#" className={styles.learnMore}>
                    learn more
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.cardBorder} ${styles.cardBorderCyan}`}>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleCyan}`}>Family Medicine</h3>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>The family medicine shelf exam has a mix of pediatrics to Ob/Gyn, and everything...</p>
                  <a href="#" className={styles.learnMore}>
                    learn more
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.cardBorder} ${styles.cardBorderViolet}`}>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleViolet}`}>Internal Medicine</h3>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>The internal medicine (IM) shelf exam includes conditions that a general ...</p>
                  <a href="#" className={styles.learnMore}>
                    learn more
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.cardBorder} ${styles.cardBorderRed}`}>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleRed}`}>Ob/Gyn</h3>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>The Ob/Gyn shelf exam has always been one of the most challenging subjects...</p>
                  <a href="#" className={styles.learnMore}>
                    learn more
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.cardBorder} ${styles.cardBorderViolet}`}>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleViolet}`}>Pediatrics</h3>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>The pediatrics shelf exam tends to be difficult for many students who aren&apos;t pursuing...</p>
                  <a href="#" className={styles.learnMore}>
                    learn more
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.cardBorder} ${styles.cardBorderBlue}`}>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleBlue}`}>Psychiatry</h3>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>The psychiatry shelf exam has recently undergone some changes due to the DSM-4 to DSM-5...</p>
                  <a href="#" className={styles.learnMore}>
                    learn more
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.cardBorder} ${styles.cardBorderCyan}`}>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleCyan}`}>Surgery</h3>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>The surgery shelf exam is very similar to internal medicine, with some key differences...</p>
                  <a href="#" className={styles.learnMore}>
                    learn more
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.cardBorder} ${styles.cardBorderRed}`}>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleRed}`}>Osteopathic Manipulative Medicine</h3>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>The OMM COMAT tests many aspects of osteopathic...</p>
                  <a href="#" className={styles.learnMore}>
                    learn more
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.separator}></div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.followSection}>
            <h4 className={styles.followTitle}>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook"></a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter"></a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerContent}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/1d519649ee952577a764f9b50488cd8e224f39a9?width=134" 
              alt="COMQUEST Osteopathic Specialists" 
              className={styles.footerLogo}
            />
            
            <div className={styles.footerInfo}>
              <p className={styles.copyright}>COMQUEST Osteopathic Specialists, LLC 2009-2026 © All rights reserved</p>
              
              <div className={styles.disclaimer}>
                <p>COMQUEST is in no way affiliated with the Comprehensive Osteopathic Medical Licensing Examination (COMLEX-USA™), Comprehensive Osteopathic Medical Achievement Test (COMAT ®), National Board of Osteopathic Medical Examiners, (NBOME ®), or The American Osteopathic Association (AOA ®).</p>
                <p>The NBOME™ does not review, manage, or endorse any product of COMQUEST. All exam names and other trademarks are the property of the respective trademark owners.</p>
              </div>
            </div>

            <nav className={styles.footerNav}>
              <a href="#">FAQ&apos;s</a>
              <a href="#">Sitemap</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>

        <div className={styles.recaptcha}>
          <div className={styles.recaptchaContent}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/45c342dbf17dce8197f3a70b9bbcaef0975445ff?width=80" 
              alt="reCAPTCHA" 
            />
            <div className={styles.recaptchaText}>
              <p>protected by <strong>reCAPTCHA</strong></p>
              <div className={styles.recaptchaLinks}>
                <a href="#">Privacy</a>
                <span>-</span>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </div>

        <button className={styles.scrollTop} aria-label="Scroll to top">
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1484 10.5117L11.8516 11.8008C11.7526 11.8997 11.6354 11.9492 11.5 11.9492C11.3646 11.9492 11.2474 11.8997 11.1484 11.8008L7 7.65234L2.85156 11.8008C2.7526 11.8997 2.63542 11.9492 2.5 11.9492C2.36458 11.9492 2.2474 11.8997 2.14844 11.8008L0.851562 10.5117C0.752604 10.4128 0.703125 10.2943 0.703125 10.1562C0.703125 10.0182 0.752604 9.89974 0.851562 9.80078L6.64844 4.01172C6.7474 3.91276 6.86458 3.86328 7 3.86328C7.13542 3.86328 7.2526 3.91276 7.35156 4.01172L13.1484 9.80078C13.2474 9.89974 13.2969 10.0182 13.2969 10.1562C13.2969 10.2943 13.2474 10.4128 13.1484 10.5117Z" fill="white"/>
          </svg>
        </button>
      </footer>
    </div>
  );
}
