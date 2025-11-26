import styles from './page.module.scss';

export default function TestimonialsPage() {
  return (
    <div className={styles.testimonialsPage}>
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

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Why COMQUEST?</h1>
          <div className={styles.breadcrumbs}>
            <a href="#" className={styles.breadcrumbLink}>Home</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <a href="#" className={styles.breadcrumbLink}>Why COMQUEST</a>
          </div>
        </div>
      </section>

      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.introSection}>
            <h2 className={styles.mainHeading}>
              Are you ready to <strong>pass</strong> your COMLEX and COMAT exams?
            </h2>
            
            <div className={styles.introParagraph}>
              <p className={styles.introText}>
                Most osteopathic medical students and residents say 'not completely'. 
                <span className={styles.handwrittenNote}>That's OK!</span> The COMLEX
                and COMAT are intense and very unique exams. To score as high as possible on test day, you need
                to use targeted practice questions to master the concepts you'll be tested on - and the sooner you
                start, the better.
              </p>
            </div>
          </div>

          <div className={styles.separator}></div>

          <div className={styles.whySection}>
            <div className={styles.whyContent}>
              <h2 className={styles.whyHeading}>
                Why <strong>COMQUEST</strong>
              </h2>
              <p className={styles.whyDescription}>
                COMQUEST ensures that you pass your exams with higher scores,
                less preparation time, and less anxiety, while providing amazing
                support along the way. We want to see our subscribers match at top
                residency programs.
              </p>
              <p className={styles.whyDetails}>
                Originally started in 2008, COMQUEST has grown to a team of dozens of academic physicians and
                administrative staff who genuinely care about students' success on the COMLEX and COMAT. The
                difference is that we filter out minutia that is unlikely to be tested. Instead, our focus is on teaching
                you what's really important for your exam so that your score is as high as possible. You will get
                outstanding customer support 365 days a year should you ever need us.
              </p>
            </div>
            <div className={styles.deviceImage}>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e1ade266196a2ae1b33af74f74a4057b7692fa5?width=720" 
                alt="COMQUEST Platform" 
              />
            </div>
          </div>

          <div className={styles.separator}></div>

          <div className={styles.testimonialsSection}>
            <h2 className={styles.testimonialsHeading}>
              Satisfied <strong>Customers</strong>
            </h2>

            <div className={styles.testimonialsList}>
              <div className={`${styles.testimonialItem} ${styles.alignLeft}`}>
                <div className={styles.testimonialBubble}>
                  <p className={styles.testimonialText}>
                    Excellent test questions that really prepare you for the actual exam.
                  </p>
                  <span className={styles.quoteLeft}>&ldquo;</span>
                  <span className={styles.quoteRight}>&rdquo;</span>
                </div>
                <div className={styles.testimonialPointer}></div>
                <div className={styles.testimonialAuthor}>
                  <strong>Emmanuel Nwogo, D.O.</strong>
                  <div className={styles.rating}>
                    <span className={styles.starsBackground}>SSSSS</span>
                    <span className={styles.starsActive}>SSSSS</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.testimonialItem} ${styles.alignRight}`}>
                <div className={styles.testimonialBubble}>
                  <p className={styles.testimonialText}>
                    The customer service is unparalleled! If you have a question, whether it be about the service or if you need help with a test question, you'll
                    get a helpful answer very fast, oftentimes within an hour. The qbank is great and the price is reasonable. I highly recommend!
                  </p>
                  <span className={styles.quoteLeft}>&ldquo;</span>
                  <span className={styles.quoteRight}>&rdquo;</span>
                </div>
                <div className={styles.testimonialPointer}></div>
                <div className={styles.testimonialAuthor}>
                  <strong>Maggie Y</strong>
                  <div className={styles.rating}>
                    <span className={styles.starsBackground}>SSSSS</span>
                    <span className={styles.starsActive}>SSSSS</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.testimonialItem} ${styles.alignLeft}`}>
                <div className={styles.testimonialBubble}>
                  <p className={styles.testimonialText}>
                    I really like the format. I felt like I was really taking the test, which gave me practice on time, the website and nerves. I also liked being
                    able to read the evaluation after EACH individual question and why/why not the question was right or wrong. That was very beneficial
                    instead of having to go back at end of test and then re-read question and determine my thought process all over again.
                  </p>
                  <span className={styles.quoteLeft}>&ldquo;</span>
                  <span className={styles.quoteRight}>&rdquo;</span>
                </div>
                <div className={styles.testimonialPointer}></div>
                <div className={styles.testimonialAuthor}>
                  <strong>Nicole</strong>
                  <div className={styles.rating}>
                    <span className={styles.starsBackground}>SSSSS</span>
                    <span className={styles.starsActive}>SSSSS</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.testimonialItem} ${styles.alignRight}`}>
                <div className={styles.testimonialBubble}>
                  <p className={styles.testimonialText}>
                    I significantly improved my scores. My high scores definitely helped me match into a great residency program!
                  </p>
                  <span className={styles.quoteLeft}>&ldquo;</span>
                  <span className={styles.quoteRight}>&rdquo;</span>
                </div>
                <div className={styles.testimonialPointer}></div>
                <div className={styles.testimonialAuthor}>
                  <strong>Andrea D</strong>
                  <div className={styles.rating}>
                    <span className={styles.starsBackground}>SSSSS</span>
                    <span className={styles.starsActive}>SSSSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerContainer}>
            <div className={styles.socialSection}>
              <h4 className={styles.followTitle}>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook"></a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter"></a>
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

      <button className={styles.scrollToTop} aria-label="Scroll to top">
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1484 10.5117L11.8516 11.8008C11.7526 11.8997 11.6354 11.9492 11.5 11.9492C11.3646 11.9492 11.2474 11.8997 11.1484 11.8008L7 7.65234L2.85156 11.8008C2.7526 11.8997 2.63542 11.9492 2.5 11.9492C2.36458 11.9492 2.2474 11.8997 2.14844 11.8008L0.851562 10.5117C0.752604 10.4128 0.703125 10.2943 0.703125 10.1562C0.703125 10.0182 0.752604 9.89974 0.851562 9.80078L6.64844 4.01172C6.7474 3.91276 6.86458 3.86328 7 3.86328C7.13542 3.86328 7.2526 3.91276 7.35156 4.01172L13.1484 9.80078C13.2474 9.89974 13.2969 10.0182 13.2969 10.1562C13.2969 10.2943 13.2474 10.4128 13.1484 10.5117Z" fill="white"/>
        </svg>
      </button>
    </div>
  );
}
