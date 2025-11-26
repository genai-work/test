import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <a href="/" className={styles.logoLink}>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e8fe0d918408f09a6f02afec18b9ec4b2d26e0b1?width=480" 
                alt="COMLEX-USA"
                className={styles.logo}
              />
            </a>
          </div>
          <nav className={styles.mainNav}>
            <a href="/blog" className={styles.navItem}>
              <svg className={styles.navIcon} width="5" height="15" viewBox="0 0 5 15" fill="none">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>Blog</span>
            </a>
            <a href="/faq" className={styles.navItem}>
              <svg className={styles.navIcon} width="5" height="15" viewBox="0 0 5 15" fill="none">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>FAQ</span>
            </a>
            <a href="/team" className={styles.navItem}>
              <svg className={styles.navIcon} width="5" height="15" viewBox="0 0 5 15" fill="none">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>Our Team</span>
            </a>
            <a href="/institutional" className={styles.navItem}>
              <svg className={styles.navIcon} width="5" height="15" viewBox="0 0 5 15" fill="none">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>Institutional Accounts</span>
            </a>
            <a href="/why-comquest" className={styles.navItem}>
              <svg className={styles.navIcon} width="5" height="15" viewBox="0 0 5 15" fill="none">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#999999"/>
              </svg>
              <span>Why COMQUEST?</span>
            </a>
            <a href="/login" className={`${styles.navItem} ${styles.navItemLogin}`}>
              <svg className={styles.navIcon} width="5" height="15" viewBox="0 0 5 15" fill="none">
                <path d="M4.57031 7.43359C4.6224 7.48568 4.64844 7.54557 4.64844 7.61328C4.64844 7.68099 4.6224 7.74089 4.57031 7.79297L0.929688 11.4336C0.877604 11.4857 0.817708 11.5117 0.75 11.5117C0.682292 11.5117 0.622396 11.4857 0.570312 11.4336L0.179688 11.043C0.127604 10.9909 0.101562 10.931 0.101562 10.8633C0.101562 10.7956 0.127604 10.7357 0.179688 10.6836L3.25 7.61328L0.179688 4.54297C0.127604 4.49089 0.101562 4.43099 0.101562 4.36328C0.101562 4.29557 0.127604 4.23568 0.179688 4.18359L0.570312 3.79297C0.622396 3.74089 0.682292 3.71484 0.75 3.71484C0.817708 3.71484 0.877604 3.74089 0.929688 3.79297L4.57031 7.43359Z" fill="#0088CC"/>
              </svg>
              <span>Login</span>
            </a>
          </nav>
        </div>
        <div className={styles.secondaryNav}>
          <div className={styles.secondaryNavContainer}>
            <a href="/exams" className={`${styles.secondaryNavItem} ${styles.secondaryNavItemActive}`}>
              <span>Exams</span>
              <svg className={styles.dropdownIcon} width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M7.13709 4.90639C7.18176 4.95106 7.2041 5.00244 7.2041 5.06052C7.2041 5.1186 7.18176 5.16997 7.13709 5.21465L4.01424 8.3375C3.96956 8.38217 3.91818 8.40451 3.86011 8.40451C3.80203 8.40451 3.75065 8.38217 3.70597 8.3375L0.583127 5.21465C0.538451 5.16997 0.516113 5.1186 0.516113 5.06052C0.516113 5.00244 0.538451 4.95106 0.583127 4.90639L0.918197 4.57132C0.962873 4.52664 1.01425 4.5043 1.07233 4.5043C1.13041 4.5043 1.18178 4.52664 1.22646 4.57132L3.86011 7.20496L6.49375 4.57132C6.53843 4.52664 6.58981 4.5043 6.64788 4.5043C6.70596 4.5043 6.75734 4.52664 6.80202 4.57132L7.13709 4.90639Z" fill="white"/>
              </svg>
            </a>
            <a href="/testimonials" className={styles.secondaryNavItem}>
              <span>Testimonials</span>
            </a>
            <a href="/referral" className={styles.secondaryNavItem}>
              <span>Spread the Word, Earn Rewards!</span>
              <svg className={styles.dropdownIcon} width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M7.13709 4.90639C7.18176 4.95106 7.2041 5.00244 7.2041 5.06052C7.2041 5.1186 7.18176 5.16997 7.13709 5.21465L4.01424 8.3375C3.96956 8.38217 3.91818 8.40451 3.86011 8.40451C3.80203 8.40451 3.75065 8.38217 3.70597 8.3375L0.583127 5.21465C0.538451 5.16997 0.516113 5.1186 0.516113 5.06052C0.516113 5.00244 0.538451 4.95106 0.583127 4.90639L0.918197 4.57132C0.962873 4.52664 1.01425 4.5043 1.07233 4.5043C1.13041 4.5043 1.18178 4.52664 1.22646 4.57132L3.86011 7.20496L6.49375 4.57132C6.53843 4.52664 6.58981 4.5043 6.64788 4.5043C6.70596 4.5043 6.75734 4.52664 6.80202 4.57132L7.13709 4.90639Z" fill="#0088CC"/>
              </svg>
            </a>
            <a href="/contact" className={styles.secondaryNavItem}>
              <span>Contact Us</span>
            </a>
            <a href="/buy" className={`${styles.secondaryNavItem} ${styles.buyButton}`}>
              <span>Buy Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* Page Title Section */}
      <section className={styles.pageTitleSection}>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Contact COMQUEST</h1>
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <a href="/contact">Contact Us</a>
          </nav>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.2!2d-118.5!3d34.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA2JzAwLjAiTiAxMTjCsDMwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
            className={styles.mapIframe}
            loading="lazy"
          ></iframe>
          <div className={styles.mapInfoCard}>
            <div className={styles.mapInfoContent}>
              <h3 className={styles.mapInfoTitle}>18740 Ventura Blvd # 100</h3>
              <p className={styles.mapInfoAddress}>18740 Ventura Blvd, Tarzana, CA 91356</p>
            </div>
            <a href="https://maps.google.com" className={styles.mapDirectionsLink}>
              <svg className={styles.directionsIcon} width="22" height="22" viewBox="0 0 22 22">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" fill="#1A73E8"/>
              </svg>
              <span>Directions</span>
            </a>
            <a href="https://maps.google.com" className={styles.viewLargerMap}>View larger map</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentGrid}>
          {/* Contact Form Section */}
          <section className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>
              <strong>Contact</strong> Us
            </h2>
            <h3 className={styles.subsectionTitle}>
              Get in <strong>touch</strong>
            </h3>
            <p className={styles.contactDescription}>
              Our support staff is here 7 days per week to help, or to listen to any suggestions you may have! We are always looking for ways to deliver an even better experience. Please feel encouraged to share your thoughts.
            </p>

            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Your name *</label>
                  <input type="text" id="name" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Your email address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={styles.formInput} 
                    placeholder="Registered email, if one exists"
                    required 
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject *</label>
                <input type="text" id="subject" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message *</label>
                <textarea id="message" className={styles.formTextarea} rows={8} required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>

            <div className={styles.divider}></div>

            <h3 className={styles.subsectionTitle}>
              The <strong>Office</strong>
            </h3>
            <div className={styles.infoItem}>
              <svg className={styles.infoIcon} width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M5.41406 6.52734C5.41406 6.52734 5.51172 6.42969 5.70703 6.23438C5.90234 6.03906 6 5.66536 6 5.11328C6 4.5612 5.80469 4.08984 5.41406 3.69922C5.02344 3.30859 4.55208 3.11328 4 3.11328C3.44792 3.11328 2.97656 3.30859 2.58594 3.69922C2.19531 4.08984 2 4.5612 2 5.11328C2 5.66536 2.19531 6.13672 2.58594 6.52734C2.97656 6.91797 3.44792 7.11328 4 7.11328C4.55208 7.11328 5.02344 6.91797 5.41406 6.52734ZM8 5.11328C8 5.68099 7.91406 6.14714 7.74219 6.51172L4.89844 12.5586C4.8151 12.7305 4.69141 12.8659 4.52734 12.9648C4.36328 13.0638 4.1875 13.1133 4 13.1133C3.8125 13.1133 3.63672 13.0638 3.47266 12.9648C3.30859 12.8659 3.1875 12.7305 3.10938 12.5586L0.257812 6.51172C0.0859375 6.14714 0 5.68099 0 5.11328C0 4.00911 0.390625 3.06641 1.17188 2.28516C1.95312 1.50391 2.89583 1.11328 4 1.11328C5.10417 1.11328 6.04688 1.50391 6.82812 2.28516C7.60938 3.06641 8 4.00911 8 5.11328Z" fill="#777777"/>
              </svg>
              <p>
                <strong>Address:</strong> 18740 Ventura Blvd #100 Tarzana, CA 91356
              </p>
            </div>

            <div className={styles.divider}></div>

            <h3 className={styles.subsectionTitle}>
              Business <strong>Hours</strong>
            </h3>
            <p className={styles.businessHours}>Monday - Sunday 7am to 7pm PST</p>
          </section>

          {/* FAQs Section */}
          <section className={styles.faqSection}>
            <h2 className={styles.faqTitle}>FAQs</h2>
            <div className={styles.faqList}>
              <details className={styles.faqItem} open>
                <summary className={styles.faqQuestion}>
                  Can I buy now and activate the subscription later?
                </summary>
                <div className={styles.faqAnswer}>
                  Yes. Your subscription starts once you create your first exam. You can buy now and save your subscription for future use.
                </div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  What do the Guaranteed Pass subscriptions offer?
                </summary>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  Do you offer returns or refunds?
                </summary>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  Are there any discounts available?
                </summary>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  Can I reset my account/scores?
                </summary>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  How can I work for COMQUEST?
                </summary>
              </details>
            </div>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            COMQUEST is <strong>everything</strong> you need to <strong>pass</strong> your COMLEX and COMAT exams!
          </h2>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/525117a7612644780f34f8d0074769a29da85dab?width=240"
            alt="Badge"
            className={styles.ctaBadge}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerContainer}>
            <div className={styles.socialSection}>
              <h4 className={styles.footerHeading}>Follow Us</h4>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <div className={styles.socialIconFacebook}></div>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <div className={styles.socialIconTwitter}></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <a href="/" className={styles.footerLogo}>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/1d519649ee952577a764f9b50488cd8e224f39a9?width=134"
                alt="COMQUEST Osteopathic Specialists"
                className={styles.footerLogoImage}
              />
            </a>
            <div className={styles.footerInfo}>
              <p className={styles.copyright}>
                COMQUEST Osteopathic Specialists, LLC 2009-2026 © All rights reserved
              </p>
              <p className={styles.disclaimer}>
                COMQUEST is in no way affiliated with the Comprehensive Osteopathic Medical Licensing Examination (COMLEX-USA™), Comprehensive Osteopathic Medical Achievement Test (COMAT ®), National Board of Osteopathic Medical Examiners, (NBOME ®), or The American Osteopathic Association (AOA ®).
              </p>
              <p className={styles.disclaimer}>
                The NBOME™ does not review, manage, or endorse any product of COMQUEST. All exam names and other trademarks are the property of the respective trademark owners.
              </p>
            </div>
            <nav className={styles.footerNav}>
              <a href="/faq">FAQ&apos;s</a>
              <a href="/sitemap">Sitemap</a>
              <a href="/terms">Terms & Conditions</a>
              <a href="/privacy">Privacy</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
