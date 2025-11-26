import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.html}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.logoContainer}>
            <a href="https://comquestmed.com/" className={styles.logoLink}>
              <img
                alt="COMLEX-USA"
                width="240"
                height="32"
                loading="lazy"
                src="https://comquestmed.com/img/comquest-logo-color.png"
                className={styles.logo}
              />
            </a>
          </div>
          <nav className={styles.topNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="https://comquestmed.com/blog/" className={styles.navLink}>
                  <i className={styles.icon}></i> Blog
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="https://comquestmed.com/faq.php" className={styles.navLink}>
                  <i className={styles.icon}></i> FAQ
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="https://comquestmed.com/our-team.php" className={styles.navLink}>
                  <i className={styles.icon}></i> Our Team
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="https://comquestmed.com/institutional-accounts.php" className={styles.navLink}>
                  <i className={styles.icon}></i> Institutional Accounts
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="https://comquestmed.com/why-comquest.php" className={styles.navLink}>
                  <i className={styles.icon}></i> Why COMQUEST?
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="https://comquestmed.com/#/login" className={styles.navLink}>
                  <i className={styles.icon}></i> Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div role="main" className={styles.mainContent}>
        <div className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.heroSubtitle}>
                The fastest way to guarantee you'll <em>Pass Your Exams!</em>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.introSection}>
          <div className={styles.introInner}>
            <h1 className={styles.mainHeading}>
              PASS YOUR COMLEX AND COMAT EXAMS, GUARANTEED!
            </h1>
            <p className={styles.introText}>
              COMQUEST ensures that you're getting the most relevant content for the
              COMLEX and COMAT by regularly updating the practice questions. Our goal is
              for you to get higher scores with less preparation time, less anxiety, and
              while receiving amazing support along the way. We want to see more
              osteopathic physicians matching at top residency programs.
            </p>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <div className={styles.featuresInner}>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img
                    alt="Pass your COMLEX exams guaranteed"
                    loading="lazy"
                    src="https://comquestmed.com/img/comlex.png"
                    className={styles.featureImg}
                  />
                </div>
                <strong className={styles.featureTitle}>Progress Tracking</strong>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img
                    alt="We guarantee you'll pass your COMLEX-USA exams"
                    loading="lazy"
                    src="https://comquestmed.com/img/comlex-usa.png"
                    className={styles.featureImg}
                  />
                </div>
                <strong className={styles.featureTitle}>Customized Exams</strong>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img
                    alt="Practice for your COMAT exams on your tablet or mobile device"
                    loading="lazy"
                    src="https://comquestmed.com/img/comat.png"
                    className={styles.featureImg}
                  />
                </div>
                <strong className={styles.featureTitle}>Mobile & Tablet</strong>
              </div>

              <div className={styles.featureCard}>
                <strong className={styles.featureTitle}>Pass!</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.statsSection}>
          <div className={styles.statsInner}>
            <div className={styles.statItem}>
              <i className={styles.statIcon}></i>
              <strong className={styles.statNumber}>97%</strong>
              <label className={styles.statLabel}>Recommend COMQUEST</label>
            </div>
            <div className={styles.statItem}>
              <i className={styles.statIcon}></i>
              <strong className={styles.statNumber}>14</strong>
              <label className={styles.statLabel}>Years in Business</label>
            </div>
            <div className={styles.statItem}>
              <i className={styles.statIcon}></i>
              <strong className={styles.statNumber}>100%</strong>
              <label className={styles.statLabel}>Guaranteed Pass</label>
            </div>
            <div className={styles.statItem}>
              <i className={styles.statIcon}></i>
              <strong className={styles.statNumber}>Students</strong>
              <label className={styles.statLabel}>From All Osteopathic Schools</label>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.featuresListSection}>
          <div className={styles.featuresListInner}>
            <h2 className={styles.sectionHeading}>
              Our <strong>Features</strong>
            </h2>
            <div className={styles.featuresListGrid}>
              <div className={styles.featureListItem}>
                <div className={styles.featureListIcon}></div>
                <div className={styles.featureListContent}>
                  <h4 className={styles.featureListTitle}>365 Days of Customer support</h4>
                  <p className={styles.featureListDescription}>
                    We realize that your schedules aren't exactly predictable. We're here
                    7 days a week, 365 days per year to serve you with outstanding
                    customer support.
                  </p>
                </div>
              </div>

              <div className={styles.featureListItem}>
                <div className={styles.featureListIcon}></div>
                <div className={styles.featureListContent}>
                  <h4 className={styles.featureListTitle}>High Quality, High Yield</h4>
                  <p className={styles.featureListDescription}>
                    You're busy. We won't waste your time teaching minutia that is
                    unlikely to show up on test day. You'll learn important material
                    through high quality questions and detailed explanations.
                  </p>
                </div>
              </div>

              <div className={styles.featureListItem}>
                <div className={styles.featureListIcon}></div>
                <div className={styles.featureListContent}>
                  <h4 className={styles.featureListTitle}>ChoiceTRAX™</h4>
                  <p className={styles.featureListDescription}>
                    Know whether or not to go with your first instinct on test day by
                    seeing the frequency of changing your right answers to wrong, and vice
                    versa.
                  </p>
                </div>
              </div>

              <div className={styles.featureListItem}>
                <div className={styles.featureListIcon}></div>
                <div className={styles.featureListContent}>
                  <h4 className={styles.featureListTitle}>TimeTRAX™</h4>
                  <p className={styles.featureListDescription}>
                    Managing your time is as important as knowing the material on test
                    day. You'll see how much time you're spending and how it compares to
                    your peers who have done the same questions.
                  </p>
                </div>
              </div>

              <div className={styles.featureListItem}>
                <div className={styles.featureListIcon}></div>
                <div className={styles.featureListContent}>
                  <h4 className={styles.featureListTitle}>PeerTRAX™</h4>
                  <p className={styles.featureListDescription}>
                    Get a breakdown of how you're doing overall, in each category, and
                    each task compared to your peers using COMQUEST. Beat this national
                    average to have a better chance at doing above average on test day.
                  </p>
                </div>
              </div>

              <div className={styles.featureListItem}>
                <div className={styles.featureListIcon}></div>
                <div className={styles.featureListContent}>
                  <h4 className={styles.featureListTitle}>Charted Tracking</h4>
                  <p className={styles.featureListDescription}>
                    Get various charts and visuals to track your progress and identify
                    your strengths and weaknesses so that you can hone in on subjects
                    that you're weak in.
                  </p>
                </div>
              </div>

              <div className={styles.featureListItem}>
                <div className={styles.featureListIcon}></div>
                <div className={styles.featureListContent}>
                  <h4 className={styles.featureListTitle}>Resettable Score</h4>
                  <p className={styles.featureListDescription}>
                    Want to start over? You'll be able to reset your score with one click
                    and do all of the questions again for as long as your subscription is
                    active.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.additionalFeaturesSection}>
            <h2 className={styles.sectionHeading}>and more...</h2>
            <div className={styles.additionalFeaturesGrid}>
              <div className={styles.additionalFeature}>
                <h4 className={styles.additionalFeatureTitle}>Notes</h4>
                <div className={styles.additionalFeatureContent}>
                  Take notes while you're taking a practice test and save them so that
                  you may review them before test day.
                </div>
              </div>

              <div className={styles.additionalFeature}>
                <h4 className={styles.additionalFeatureTitle}>Mobile Access</h4>
                <div className={styles.additionalFeatureContent}>
                  The platform is fully mobile and tablet responsive so that you can
                  study for any device with WiFi or mobile coverage.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testimonialHeading}>
          <h2 className={styles.sectionHeading}>
            We're not the only ones <strong>excited about COMQUEST...</strong>
          </h2>
        </div>

        <hr className={styles.divider} />

        <div className={styles.testimonialsPreview}>
          <div className={styles.testimonialCard}>
            <blockquote className={styles.testimonialQuote}>
              <p>I significantly improved my scores. My high scores definitely helped me match into a great residency program!</p>
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <strong>Andrea D</strong>
            </div>
            <div className={styles.testimonialRating}>
              <span>5 out of 5</span>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <blockquote className={styles.testimonialQuote}>
              <p>Excellent test questions that really prepare you for the actual exam.</p>
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <strong>Emmanuel Nwogo, D.O.</strong>
            </div>
            <div className={styles.testimonialRating}>
              <span>5 out of 5</span>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <blockquote className={styles.testimonialQuote}>
              <p>The customer service is unparalleled! If you have a question, whether it be about the service or if you need help with a test question, you'll get a helpful answer very fast, oftentimes within an hour. The qbank is great and the price is reasonable. I highly recommend!</p>
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <strong>Maggie Y</strong>
            </div>
            <div className={styles.testimonialRating}>
              <span>5 out of 5</span>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerAddress}>
            <p>
              <strong>Address:</strong>
              <br />
              18740 Ventura Blvd #100
              <br />
              <span>Tarzana, CA 91356</span>
            </p>
          </div>

          <div className={styles.footerSocial}>
            <h4 className={styles.footerTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/comquestmed">
                Facebook
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/comquestmed">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <div className={styles.footerLogo}>
              <a href="https://comquestmed.com/">
                <img
                  alt="COMQUEST Osteopathic Specialists"
                  loading="lazy"
                  src="https://comquestmed.com/img/logo-footer.png"
                  className={styles.footerLogoImg}
                />
              </a>
            </div>
            <div className={styles.footerText}>
              <p>COMQUEST Osteopathic Specialists, LLC 2009-2026 © All rights reserved</p>
              <p>
                COMQUEST ensures that you pass your exams with higher scores, less
                preparation time, and less anxiety, while providing amazing support along
                the way. We want to see our subscribers match at top residency programs.
                Originally started in 2008, COMQUEST has grown to a team of dozens of
                academic physicians and administrative staff who genuinely care about
                students' success on the COMLEX and COMAT.
              </p>
              <p>
                COMQUEST is in no way affiliated with the Comprehensive Osteopathic
                Medical Licensing Examination (COMLEX-USA™), Comprehensive Osteopathic
                Medical Achievement Test (COMAT ®), National Board of Osteopathic Medical
                Examiners, (NBOME ®), or The American Osteopathic Association (AOA ®).
                <br />
                <br />
                The NBOME™ does not review, manage, or endorse any product of COMQUEST.
                All exam names and other trademarks are the property of the respective
                trademark owners.
              </p>
            </div>

            <div className={styles.footerNav}>
              <ul className={styles.footerNavList}>
                <li>
                  <a href="https://comquestmed.com/faq.php">FAQ's</a>
                </li>
                <li>
                  <a href="https://comquestmed.com/sitemap.php">Sitemap</a>
                </li>
                <li>
                  <a href="https://comquestmed.com/terms-and-conditions.php">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="https://comquestmed.com/privacy-policy.php">Privacy</a>
                </li>
                <li>
                  <a href="https://comquestmed.com/contact-us.php">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
