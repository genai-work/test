import styles from './page.module.scss';

export default function ComlexPage() {
  return (
    <div className={styles.comlexPage}>
      <header className={styles.header}>
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
            <a href="#" className={`${styles.navLink} ${styles.navLinkLogin}`}>Login</a>
          </nav>
        </div>
        <div className={styles.secondaryNavContainer}>
          <nav className={styles.secondaryNav}>
            <a href="#" className={`${styles.secondaryNavLink} ${styles.active}`}>Exams</a>
            <a href="#" className={styles.secondaryNavLink}>Testimonials</a>
            <a href="#" className={styles.secondaryNavLink}>Spread the Word, Earn Rewards!</a>
            <a href="#" className={styles.secondaryNavLink}>Contact Us</a>
            <a href="#" className={`${styles.secondaryNavLink} ${styles.buyNowBtn}`}>Buy Now</a>
          </nav>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>COMLEX</h1>
            <div className={styles.breadcrumbs}>
              <a href="#" className={styles.breadcrumbLink}>Home</a>
              <span className={styles.breadcrumbSeparator}>/</span>
              <a href="#" className={styles.breadcrumbLink}>Exams</a>
              <span className={styles.breadcrumbSeparator}>/</span>
              <a href="#" className={styles.breadcrumbLink}>COMLEX</a>
            </div>
          </div>
        </section>

        <div className={styles.contentContainer}>
          <div className={styles.introSection}>
            <h2 className={styles.mainHeading}>
              <strong>COMLEX</strong> Preparation <em>by COMQUEST</em>
            </h2>

            <div className={styles.introContent}>
              <div className={styles.introText}>
                <p>
                  Students and residents preparing for the COMLEX have historically been at a disadvantage by having
                  to use USMLE or substandard COMLEX products. COMQUEST has started to add many new
                  questions, while updating existing questions, to ensure that you're being provided content that is
                  consistent with current 2025-2026 testing standards. You may expect the highest quality, most
                  relevant and efficient COMLEX preparation in the market.
                </p>
              </div>
              <div className={styles.buyNowContainer}>
                <a href="#" className={styles.buyNowButton}>Buy Now</a>
              </div>
            </div>
          </div>

          <div className={styles.separator}></div>

          <div className={styles.levelsSection}>
            <div className={styles.levelCard}>
              <div className={styles.levelCardInner}>
                <h3 className={styles.levelTitle}>Level 1</h3>
                <p className={styles.levelDescription}>
                  Get immediate access to newly published,
                  high quality COMLEX-style questions with
                  explanations that cover everything that is
                  most likely to be asked on test day. Expect to
                  see new material to the question bank
                  regularly as our authors keep the content
                  consistent with current testing standards at
                  no extra charge to you.
                </p>
                <a href="#" className={styles.learnMore}>
                  learn more
                  <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.levelCard}>
              <div className={`${styles.levelCardInner} ${styles.levelCardBlue}`}>
                <h3 className={styles.levelTitle}>Level 2-CE</h3>
                <p className={styles.levelDescription}>
                  Get immediate access to newly published,
                  high quality COMLEX-style questions with
                  explanations that cover everything that is
                  most likely to be asked on the COMLEX Level
                  2-CE. Expect to see new material to the
                  question bank regularly as our authors keep
                  the content consistent with current testing
                  standards at no extra charge to you.
                </p>
                <a href="#" className={styles.learnMore}>
                  learn more
                  <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.levelCard}>
              <div className={`${styles.levelCardInner} ${styles.levelCardCyan}`}>
                <h3 className={styles.levelTitle}>Level 3</h3>
                <p className={styles.levelDescription}>
                  It's time for your last COMLEX! We realize that
                  your time is extremely limited during
                  internship. Study efficiently with COMLEX-
                  style questions with explanations that cover
                  everything that is most likely to be asked on
                  the COMLEX Level 3. Nothing more. Nothing
                  less. Expect to see new material to the
                  question bank regularly as our authors keep
                  the content consistent with current testing
                  standards at no extra charge to you.
                </p>
                <a href="#" className={styles.learnMore}>
                  learn more
                  <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.separator}></div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerContainer}>
            <div className={styles.socialSection}>
              <h4 className={styles.followTitle}>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <div className={styles.socialIconBg}></div>
                </a>
                <a href="#" className={`${styles.socialIcon} ${styles.socialIconTwitter}`} aria-label="Twitter">
                  <div className={styles.socialIconBg}></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <div className={styles.footerLogo}>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/1d519649ee952577a764f9b50488cd8e224f39a9?width=134" 
                alt="COMQUEST Osteopathic Specialists" 
              />
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.copyright}>
                COMQUEST Osteopathic Specialists, LLC 2009-2026 &copy; All rights reserved
              </p>
              <p className={styles.disclaimer}>
                COMQUEST is in no way affiliated with the Comprehensive Osteopathic Medical Licensing Examination
                (COMLEX-USA&trade;), Comprehensive Osteopathic Medical Achievement Test (COMAT &reg;), National Board of
                Osteopathic Medical Examiners, (NBOME &reg;), or The American Osteopathic Association (AOA &reg;).
              </p>
              <p className={styles.disclaimer}>
                The NBOME&trade; does not review, manage, or endorse any product of COMQUEST. All exam names and other
                trademarks are the property of the respective trademark owners.
              </p>
            </div>
            <nav className={styles.footerNav}>
              <a href="#" className={styles.footerNavLink}>FAQ's</a>
              <span className={styles.footerNavDivider}>|</span>
              <a href="#" className={styles.footerNavLink}>Sitemap</a>
              <span className={styles.footerNavDivider}>|</span>
              <a href="#" className={styles.footerNavLink}>Terms &amp; Conditions</a>
              <span className={styles.footerNavDivider}>|</span>
              <a href="#" className={styles.footerNavLink}>Privacy</a>
              <span className={styles.footerNavDivider}>|</span>
              <a href="#" className={styles.footerNavLink}>Contact</a>
            </nav>
          </div>
        </div>
      </footer>

      <div className={styles.recaptchaBadge}>
        <div className={styles.recaptchaContainer}>
          <div className={styles.recaptchaLogo}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/45c342dbf17dce8197f3a70b9bbcaef0975445ff?width=80" 
              alt="reCAPTCHA" 
            />
          </div>
          <div className={styles.recaptchaContent}>
            <div className={styles.recaptchaText}>
              protected by <strong>reCAPTCHA</strong>
            </div>
          </div>
        </div>
        <div className={styles.recaptchaLinks}>
          <a href="#" className={styles.recaptchaLink}>Privacy</a>
          <span> - </span>
          <a href="#" className={styles.recaptchaLink}>Terms</a>
        </div>
      </div>

      <button className={styles.scrollToTop} aria-label="Scroll to top">
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1484 10.5117L11.8516 11.8008C11.7526 11.8997 11.6354 11.9492 11.5 11.9492C11.3646 11.9492 11.2474 11.8997 11.1484 11.8008L7 7.65234L2.85156 11.8008C2.7526 11.8997 2.63542 11.9492 2.5 11.9492C2.36458 11.9492 2.2474 11.8997 2.14844 11.8008L0.851562 10.5117C0.752604 10.4128 0.703125 10.2943 0.703125 10.1562C0.703125 10.0182 0.752604 9.89974 0.851562 9.80078L6.64844 4.01172C6.7474 3.91276 6.86458 3.86328 7 3.86328C7.13542 3.86328 7.2526 3.91276 7.35156 4.01172L13.1484 9.80078C13.2474 9.89974 13.2969 10.0182 13.2969 10.1562C13.2969 10.2943 13.2474 10.4128 13.1484 10.5117Z" fill="white"/>
        </svg>
      </button>
    </div>
  );
}
