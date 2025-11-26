import styles from './page.module.scss';

export default function TeamPage() {
  return (
    <div className={styles.teamPage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <a href="/" className={styles.logoLink}>
              <img 
                src="https://comquestmed.com/img/comquest-logo-color.png"
                alt="COMQUEST"
                className={styles.logo}
              />
            </a>
          </div>
          <nav className={styles.mainNav}>
            <a href="/blog" className={styles.navItem}>
              <span>Blog</span>
            </a>
            <a href="/faq" className={styles.navItem}>
              <span>FAQ</span>
            </a>
            <a href="/team" className={styles.navItem}>
              <span>Our Team</span>
            </a>
            <a href="/institutional" className={styles.navItem}>
              <span>Institutional Accounts</span>
            </a>
            <a href="/why-comquest" className={styles.navItem}>
              <span>Why COMQUEST?</span>
            </a>
            <a href="/login" className={`${styles.navItem} ${styles.navItemLogin}`}>
              <span>Login</span>
            </a>
          </nav>
        </div>

        <div className={styles.secondaryNav}>
          <div className={styles.secondaryNavContainer}>
            <a href="/exams" className={`${styles.secondaryNavItem} ${styles.secondaryNavItemActive}`}>
              <span>Exams</span>
            </a>
            <a href="/testimonials" className={styles.secondaryNavItem}>
              <span>Testimonials</span>
            </a>
            <a href="/referral" className={styles.secondaryNavItem}>
              <span>Spread the Word, Earn Rewards!</span>
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
          <h1 className={styles.pageTitle}>Team</h1>
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <a href="/team">Our Team</a>
          </nav>
        </div>
      </section>

      {/* Team Content */}
      <main className={styles.mainContent}>
        <h2 className={styles.sectionTitle}>
          Meet the <strong>Team</strong>
        </h2>

        {/* Filter Tabs */}
        <ul className={styles.filterTabs}>
          <li className={styles.filterTabItem}>
            <a href="#" className={styles.filterTabActive}>Show All</a>
          </li>
          <li className={styles.filterTabItem}>
            <a href="#">Administrative</a>
          </li>
          <li className={styles.filterTabItem}>
            <a href="#">Authors</a>
          </li>
          <li className={styles.filterTabItem}>
            <a href="#">Editors</a>
          </li>
        </ul>

        <hr className={styles.divider} />

        {/* Team Members Grid */}
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/team-1-aaron.jpg"
                alt="Aaron"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Aaron</span>
                <span className={styles.teamMemberRole}>Project Manager</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Aaron handles the day-to-day task of keeping our content production engine running smoothly. Overseeing the development of new practice questions for the company's ever-growing Qbanks is a challenging...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/team-1-marie_2.jpg"
                alt="Marie"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Marie</span>
                <span className={styles.teamMemberRole}>Contributing Physician Author and Editor</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Marie's medical career has taken a meandering and varied route, ranging from basic science research to clinical research to physician educator. The only real constant has been a love of learning new...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/team-1-heather.jpg"
                alt="Heather"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Heather</span>
                <span className={styles.teamMemberRole}>Contributing Physician Author</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Heather graduated from the University of Virginia. After earning her Economics degree, she worked on a small business project for an incredible doctor in Cape Town, South Africa, which planted the see...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/dr_vivian.jpg"
                alt="Vivian"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Vivian</span>
                <span className={styles.teamMemberRole}>Contributing Physician Author</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Vivian grew up in Macao and moved to Minnesota by herself at the age of 18 years old to become a food scientist. That's where she fell in love with medical research while undertaking a research proj...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/dr_lane.jpg"
                alt="Lane"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Lane</span>
                <span className={styles.teamMemberRole}>Contributing Physician Author</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Lane is an osteopathic physician who enjoys playing with his American bulldog puppy, practicing Brazilian jiu jitsu, and annoying his neighbors with his guitar, which he plays poorly. Lane is board ce...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/dr_cristen.jpg"
                alt="Christen"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Christen</span>
                <span className={styles.teamMemberRole}>Contributing Physician Author</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Christen grew up in the midwest and jumped at the chance to move to California for medical school at the University of Southern California. Once she and her husband experienced the endless sunshine, t...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/dr_shan.jpg"
                alt="Shan"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Shan</span>
                <span className={styles.teamMemberRole}>Contributing Physician Author and Editor</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Although he has found himself in a variety of trades over the years - freelance writing, selling computers, teaching chess, dealing guitars, doing various types of biomedical research, and eventually...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/dr_raj.jpg"
                alt="Raj"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Raj</span>
                <span className={styles.teamMemberRole}>Contributing Physician Author</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Raj is a subject matter expert in predictive analytics in healthcare and a physician with a medical foundation in academic medicine. He provides a strong skill set in Analytical and Statistical Decisi...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/jennifer.jpg"
                alt="Jennifer"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Jennifer</span>
                <span className={styles.teamMemberRole}>Contributing Physician Author</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Jennifer, her husband, two teenage stepsons, two dogs, three cats, and two fish call El Paso home, but the first two take every opportunity to travel and seek out adventure. Soon, she hopes to retire...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/katie.jpg"
                alt="Katie"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Katie</span>
                <span className={styles.teamMemberRole}>Subscriber Support Manager</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                If you ever wonder who it is that's answering your email questions about your account, we hope you get the feeling that it's a real person who cares about making your COMQUEST experience as smooth and...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/team-1-katherine.jpg"
                alt="Katherine"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Katherine</span>
                <span className={styles.teamMemberRole}>Subscriber Support</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Katherine was a registered nurse for several years prior to attending medical school - working in the fields of emergency, transport, and flight nursing. She joined COMQUEST because she wanted to help...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/dr_joel.jpg"
                alt="Joel"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Joel</span>
                <span className={styles.teamMemberRole}>Director of Osteopathic Exams</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Joel completed his urological surgery residency at St John Providence Health in Detroit. He served as the program's Chief Resident 2012-2015. He was selected into the highly competitive Endourology...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/paul.jpg"
                alt="Paul"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Paul</span>
                <span className={styles.teamMemberRole}>Lead Developer</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Paul has 10+ years of web and systems engineering experience. A solutions-focused professional who is in charge of our web-applications and IT-infrastructure. Apart from programming he loves sailing...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <a href="#" className={styles.teamMemberLink}>
              <img 
                src="https://comquestmed.com/img/team-1-jeff.jpg"
                alt="Jeff"
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <span className={styles.teamMemberName}>Jeff</span>
                <span className={styles.teamMemberRole}>Director of Content</span>
              </div>
            </a>
            <div className={styles.teamMemberBio}>
              <p>
                Jeff has always had a passion for medicine and education. When asked during medical school interviews what he'd do if he weren't accepted, his answer always included teaching. After graduating med...
                <a href="#" className={styles.readMore}>more</a>
              </p>
            </div>
          </div>
        </div>

        {/* Team Stats Section */}
        <div className={styles.teamStats}>
          <div className={styles.teamStatsContent}>
            <h2 className={styles.teamStatsTitle}>And Many, Many More...</h2>
          </div>
        </div>

        <hr className={styles.divider} />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerContainer}>
            <div className={styles.footerSection}>
              <div className={styles.footerAddress}>
                <h4 className={styles.footerHeading}>Address</h4>
                <p className={styles.footerText}>
                  18740 Ventura Blvd #100<br />
                  Tarzana, CA 91356
                </p>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerHeading}>Follow Us</h4>
              <ul className={styles.socialLinks}>
                <li>
                  <a href="https://www.facebook.com/comquestmed" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/comquestmed" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <a href="/" className={styles.footerLogo}>
              <img 
                src="https://comquestmed.com/img/logo-footer.png"
                alt="COMQUEST"
                className={styles.footerLogoImage}
              />
            </a>

            <div className={styles.footerInfo}>
              <p className={styles.copyright}>
                COMQUEST Osteopathic Specialists, LLC 2009-2026 © All rights reserved
              </p>
              <p className={styles.description}>
                COMQUEST ensures that you pass your exams with higher scores, less preparation time, and less anxiety, while providing amazing support along the way. We want to see our subscribers match at top residency programs. Originally started in 2008, COMQUEST has grown to a team of dozens of academic physicians and administrative staff who genuinely care about students' success on the COMLEX and COMAT. The difference is that we filter out minutia that is unlikely to be tested. Instead, our focus is on teaching you what's really important for your exam so that your score is as high as possible. You will get outstanding customer support 365 days a year should you ever need us.
              </p>
              <p className={styles.disclaimer}>
                COMQUEST is in no way affiliated with the Comprehensive Osteopathic Medical Licensing Examination (COMLEX-USA™), Comprehensive Osteopathic Medical Achievement Test (COMAT ®), National Board of Osteopathic Medical Examiners, (NBOME ®), or The American Osteopathic Association (AOA ®).<br />
                <br />
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
