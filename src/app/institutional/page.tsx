import styles from './page.module.scss';

export default function InstitutionalPage() {
  return (
    <div className={styles.institutionalPage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <a href="/" className={styles.logoLink}>
              <img 
                src="https://comquestmed.com/img/comquest-logo-color.png"
                alt="COMLEX-USA"
                className={styles.logo}
                width="240"
                height="32"
              />
            </a>
          </div>
          <nav className={styles.mainNav}>
            <a href="/blog" className={styles.navItem}>
              <i className={styles.navIcon}></i>
              <span>Blog</span>
            </a>
            <a href="/faq" className={styles.navItem}>
              <i className={styles.navIcon}></i>
              <span>FAQ</span>
            </a>
            <a href="/team" className={styles.navItem}>
              <i className={styles.navIcon}></i>
              <span>Our Team</span>
            </a>
            <a href="/institutional" className={styles.navItem}>
              <i className={styles.navIcon}></i>
              <span>Institutional Accounts</span>
            </a>
            <a href="/why-comquest" className={styles.navItem}>
              <i className={styles.navIcon}></i>
              <span>Why COMQUEST?</span>
            </a>
            <a href="/login" className={styles.navItem}>
              <i className={styles.navIcon}></i>
              <span>Login</span>
            </a>
          </nav>
        </div>

        <div className={styles.secondaryNav}>
          <div className={styles.secondaryNavContainer}>
            <nav className={styles.subNav}>
              <ul className={styles.subNavList}>
                <li className={styles.subNavItem}>
                  <a href="/exams" className={styles.subNavLink}>
                    Exams
                    <i className={styles.dropdownIcon}></i>
                  </a>
                  <ul className={styles.subNavSubmenu}>
                    <li className={styles.subNavSubmenuItem}>
                      <a href="/exams/comlex" className={styles.subNavSubmenuLink}>
                        COMLEX
                        <i className={styles.dropdownIcon}></i>
                      </a>
                      <ul className={styles.subNavSubSubmenu}>
                        <li><a href="/exams/comlex/level1">COMLEX - Level 1</a></li>
                        <li><a href="/exams/comlex/level2">COMLEX - Level 2</a></li>
                        <li><a href="/exams/comlex/level3">COMLEX - Level 3</a></li>
                      </ul>
                    </li>
                    <li className={styles.subNavSubmenuItem}>
                      <a href="/exams/comat" className={styles.subNavSubmenuLink}>
                        COMAT
                        <i className={styles.dropdownIcon}></i>
                      </a>
                      <ul className={styles.subNavSubSubmenu}>
                        <li><a href="/exams/comat/emergency-medicine">COMAT - Emergency Medicine</a></li>
                        <li><a href="/exams/comat/family-medicine">COMAT - Family Medicine</a></li>
                        <li><a href="/exams/comat/internal-medicine">COMAT - Internal Medicine</a></li>
                        <li><a href="/exams/comat/obgyn">COMAT - Ob/Gyn</a></li>
                        <li><a href="/exams/comat/omm">COMAT - OMM</a></li>
                        <li><a href="/exams/comat/pediatrics">COMAT - Pediatrics</a></li>
                        <li><a href="/exams/comat/psychiatry">COMAT - Psychiatry</a></li>
                        <li><a href="/exams/comat/surgery">COMAT - Surgery</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={styles.subNavItem}>
                  <a href="/testimonials" className={styles.subNavLink}>Testimonials</a>
                </li>
                <li className={styles.subNavItem}>
                  <a href="/referral" className={styles.subNavLink}>
                    Spread the Word, Earn Rewards!
                    <i className={styles.dropdownIcon}></i>
                  </a>
                  <ul className={styles.subNavSubmenu}>
                    <li className={styles.subNavSubmenuItem}>
                      <a href="/blog/ambassador-signup" className={styles.subNavSubmenuLink}>Become a Class Ambassador</a>
                    </li>
                    <li className={styles.subNavSubmenuItem}>
                      <a href="/blog/affiliate-signup" className={styles.subNavSubmenuLink}>Become an Affiliate</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.subNavItem}>
                  <a href="/contact" className={styles.subNavLink}>Contact Us</a>
                </li>
                <li className={styles.subNavItem}>
                  <a href="/subscribe" className={`${styles.subNavLink} ${styles.buyNowBtn}`}>Buy Now</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Title Section */}
      <section className={styles.pageTitleSection}>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Institutional Accounts</h1>
          <nav className={styles.breadcrumb}>
            <ul className={styles.breadcrumbList}>
              <li className={styles.breadcrumbItem}>
                <a href="/">Home</a>
              </li>
              <li className={styles.breadcrumbItem}>
                <a href="/institutional">Institutional Accounts</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Banner Section */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerContainer}>
          <ul className={styles.bannerList}>
            <li className={styles.bannerItem}>
              <div className={styles.bannerImage}></div>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Consultation Form Section */}
          <section className={styles.consultationSection}>
            <div className={styles.consultationContent}>
              <h2 className={styles.consultationTitle}>
                Receive a Free <strong>Institutional Consultation</strong>
              </h2>
              <form className={styles.consultationForm}>
                <div className={styles.formGroup}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="name" className={styles.formLabel}>Your name *</label>
                      <input type="text" id="name" name="name" className={styles.formInput} required />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="email" className={styles.formLabel}>Your email address *</label>
                      <input type="email" id="email" name="email" className={styles.formInput} required />
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="school" className={styles.formLabel}>School *</label>
                      <input type="text" id="school" name="school" className={styles.formInput} required />
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="comments" className={styles.formLabel}>Comments *</label>
                      <textarea id="comments" name="comments" rows={10} className={styles.formTextarea} required></textarea>
                    </div>
                  </div>
                </div>

                <div className={styles.formDivider}></div>

                <div className={styles.formSubmit}>
                  <input type="submit" value="Schedule Consultation" className={styles.submitButton} />
                </div>
              </form>
            </div>

            {/* Benefits Section */}
            <div className={styles.benefitsSection}>
              <h4 className={styles.benefitsTitle}>Our goal is to <strong>help your students</strong></h4>
              <p className={styles.benefitsText}>
                Outcome data provided to us by various medical schools that either provide COMQUEST products to their students, or poll students in what resources they utilize, has identified improved scoring by the students that have utilized COMQUEST.
              </p>
              <p className={styles.benefitsText}>
                This ultimately results in a better reputation, increased selection in student applicants, more satisfied students, and less attrition.
              </p>
              <p className={styles.benefitsText}>
                We provide institutions who directly purchase from us insight into each student's performance so that administrators may monitor their progress, use, and practice test scoring before their students take their exam.
              </p>
              <p className={styles.benefitsText}>
                The institutional administrators also get access to a dashboard with insight into the institution's performance compared to the national average, so that department strengths and weaknesses are identified. Feature requests and customization is available at no extra charge to institutions.
              </p>
              <p className={styles.benefitsTextHighlight}>
                <strong>Contact us to learn more about how your school can benefit from a partnership with us.</strong>
              </p>

              <div className={styles.divider}></div>

              <h4 className={styles.contactInfoTitle}>The <strong>Office</strong></h4>
              <ul className={styles.contactInfoList}>
                <li className={styles.contactInfoItem}>
                  <i className={styles.contactIcon}></i>
                  <strong>Address:</strong> 18740 Ventura Blvd #100 Tarzana, CA 91356
                </li>
                <li className={styles.contactInfoItem}>
                  <i className={styles.contactIcon}></i>
                  <strong>Email:</strong> <a href="mailto:info@comquestmed.com">info@comquestmed.com</a>
                </li>
              </ul>

              <div className={styles.divider}></div>

              <h4 className={styles.hoursTitle}>Business <strong>Hours</strong></h4>
              <ul className={styles.hoursList}>
                <li className={styles.hoursItem}>
                  <i className={styles.hoursIcon}></i>
                  Monday - Friday 9am to 5pm PST
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerContainer}>
            <div className={styles.footerSection}></div>
            <div className={styles.footerSection}></div>
            <div className={styles.footerSection}>
              <div className={styles.socialContent}>
                <h4 className={styles.footerSectionTitle}>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <a href="https://facebook.com/comquestmed" className={styles.socialLink}>Facebook</a>
                  <a href="https://instagram.com/comquestmed" className={styles.socialLink}>Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <div className={styles.footerLogoSection}>
              <a href="/">
                <img 
                  src="https://comquestmed.com/img/logo-footer.png"
                  alt="COMQUEST Osteopathic Specialists"
                  className={styles.footerLogo}
                />
              </a>
            </div>
            <div className={styles.footerContent}>
              <p className={styles.copyright}>COMQUEST Osteopathic Specialists, LLC 2009-2026 © All rights reserved</p>
              <p className={styles.disclaimer}>
                COMQUEST ensures that you pass your exams with higher scores, less preparation time, and less anxiety, while providing amazing support along the way. We want to see our subscribers match at top residency programs. Originally started in 2008, COMQUEST has grown to a team of dozens of academic physicians and administrative staff who genuinely care about students' success on the COMLEX and COMAT.
              </p>
              <p className={styles.disclaimer}>
                COMQUEST is in no way affiliated with the Comprehensive Osteopathic Medical Licensing Examination (COMLEX-USA™), Comprehensive Osteopathic Medical Achievement Test (COMAT ®), National Board of Osteopathic Medical Examiners, (NBOME ®), or The American Osteopathic Association (AOA ®).
              </p>
              <p className={styles.disclaimer}>
                The NBOME™ does not review, manage, or endorse any product of COMQUEST. All exam names and other trademarks are the property of the respective trademark owners.
              </p>
            </div>
            <nav className={styles.footerNav}>
              <a href="/faq">FAQ's</a>
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
