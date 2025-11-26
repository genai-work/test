import styles from './page.module.scss';

export default function FAQPage() {
  return (
    <div className={styles.faqPage}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerContent}>
            <a href="/" className={styles.logoLink}>
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
          <nav className={styles.primaryNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="/blog" className={styles.navLink}>
                  Blog
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/faq" className={styles.navLink}>
                  FAQ
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/team" className={styles.navLink}>
                  Our Team
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/institutional" className={styles.navLink}>
                  Institutional Accounts
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/why-comquest" className={styles.navLink}>
                  Why COMQUEST?
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/login" className={styles.navLink}>
                  Login
                </a>
              </li>
            </ul>
          </nav>
          <button className={styles.mobileMenuButton} aria-label="Menu">
            <span className={styles.menuIcon}></span>
          </button>
        </div>
        <div className={styles.headerBottom}>
          <div className={styles.secondaryNavWrapper}>
            <nav className={styles.secondaryNav}>
              <ul className={styles.secondaryNavList}>
                <li className={styles.secondaryNavItem}>
                  <a href="/exams" className={styles.secondaryNavLink}>
                    Exams
                  </a>
                  <ul className={styles.submenu}>
                    <li className={styles.submenuItem}>
                      <a href="/exams/comlex" className={styles.submenuLink}>
                        COMLEX
                      </a>
                      <ul className={styles.nestedSubmenu}>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comlex/level1" className={styles.nestedSubmenuLink}>
                            COMLEX - Level 1
                          </a>
                        </li>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comlex/level2" className={styles.nestedSubmenuLink}>
                            COMLEX - Level 2
                          </a>
                        </li>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comlex/level3" className={styles.nestedSubmenuLink}>
                            COMLEX - Level 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className={styles.submenuItem}>
                      <a href="/exams/comat" className={styles.submenuLink}>
                        COMAT
                      </a>
                      <ul className={styles.nestedSubmenu}>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comat/emergency" className={styles.nestedSubmenuLink}>
                            COMAT - Emergency Medicine
                          </a>
                        </li>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comat/family" className={styles.nestedSubmenuLink}>
                            COMAT - Family Medicine
                          </a>
                        </li>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comat/internal" className={styles.nestedSubmenuLink}>
                            COMAT - Internal Medicine
                          </a>
                        </li>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comat/obgyn" className={styles.nestedSubmenuLink}>
                            COMAT - Ob/Gyn
                          </a>
                        </li>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comat/omm" className={styles.nestedSubmenuLink}>
                            COMAT - OMM
                          </a>
                        </li>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comat/pediatrics" className={styles.nestedSubmenuLink}>
                            COMAT - Pediatrics
                          </a>
                        </li>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comat/psychiatry" className={styles.nestedSubmenuLink}>
                            COMAT - Psychiatry
                          </a>
                        </li>
                        <li className={styles.nestedSubmenuItem}>
                          <a href="/exams/comat/surgery" className={styles.nestedSubmenuLink}>
                            COMAT - Surgery
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={styles.secondaryNavItem}>
                  <a href="/testimonials" className={styles.secondaryNavLink}>
                    Testimonials
                  </a>
                </li>
                <li className={styles.secondaryNavItem}>
                  <a href="/referral" className={styles.secondaryNavLink}>
                    Spread the Word, Earn Rewards!
                  </a>
                  <ul className={styles.submenu}>
                    <li className={styles.submenuItem}>
                      <a href="/ambassador" className={styles.submenuLink}>
                        Become a Class Ambassador
                      </a>
                    </li>
                    <li className={styles.submenuItem}>
                      <a href="/affiliate" className={styles.submenuLink}>
                        Become an Affiliate
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={styles.secondaryNavItem}>
                  <a href="/contact" className={styles.secondaryNavLink}>
                    Contact Us
                  </a>
                </li>
                <li className={styles.secondaryNavItem}>
                  <a href="/subscribe" className={styles.secondaryNavLink}>
                    Buy Now
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.headerModals}>
          <div className={styles.modalOverlay}></div>
          <div role="alert" className={styles.alertMessage}>
            <button aria-label="Close" type="button" className={styles.alertClose}>
              <span aria-hidden="true">×</span>
            </button>
            <p className={styles.alertText}></p>
          </div>
          <div className={styles.modalContent}></div>
        </div>
      </header>

      <main role="main">
        <section className={styles.pageHeaderSection}>
          <div className={styles.pageHeaderContainer}>
            <div className={styles.pageHeaderContent}>
              <div className={styles.pageTitleWrapper}>
                <h1 className={styles.pageTitle}>FAQ</h1>
              </div>
              <div className={styles.breadcrumbWrapper}>
                <ul className={styles.breadcrumbList} itemScope itemType="http://schema.org/BreadcrumbList">
                  <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className={styles.breadcrumbItem}>
                    <a itemScope itemType="https://schema.org/WebPage" itemProp="item" itemID="/" href="/" className={styles.breadcrumbLink}>
                      <span itemProp="name">Home</span>
                    </a>
                  </li>
                  <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className={styles.breadcrumbItem}>
                    <a itemScope itemType="https://schema.org/WebPage" itemProp="item" itemID="/faq" href="/faq" className={styles.breadcrumbLink}>
                      <span itemProp="name">FAQ</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.faqMainContent}>
          <h2 className={styles.faqHeading}>
            Frequently Asked
            <strong className={styles.faqHeadingStrong}>Questions</strong>
          </h2>
          <div className={styles.faqIntroSection}>
            <div className={styles.faqIntroContent}>
              <p className={styles.faqIntroText}>
                Below are answers to some commonly asked questions that you might
                have. We're here 7 days a week, so if you can't find an answer
                here, please feel free to contact us and we'll promptly answer
                your question, too.
              </p>
            </div>
          </div>
          <hr className={styles.faqDivider} />
          <div className={styles.faqAccordionWrapper}>
            <div className={styles.faqAccordionContainer}>
              <div role="tablist" aria-multiselectable="true">
                <section className={styles.faqAccordionItem}>
                  <label className={styles.faqQuestion}>
                    Can I buy now and activate the subscription later?
                  </label>
                  <p className={styles.faqAnswer}>
                    Yes. Your subscription starts once you create your first exam.
                    You can buy now and save your subscription for future use.
                  </p>
                </section>
                <section className={styles.faqAccordionItem}>
                  <label className={styles.faqQuestion}>
                    What do the Guaranteed Pass subscriptions offer?
                  </label>
                  <p className={styles.faqAnswer}>
                    We provide guaranteed pass options for all subscriptions that
                    are 3 months long or more. If for some reason you do not pass
                    the exam after completing all of the questions in the
                    database, you may contact us to receive the same amount of
                    time that you originally purchased added to your account at no
                    extra charge.
                  </p>
                </section>
                <section className={styles.faqAccordionItem}>
                  <label className={styles.faqQuestion}>Do you offer returns or refunds?</label>
                  <p className={styles.faqAnswer}>
                    We're flexible. But we're also really confident in the quality
                    and content of our question banks, and want you to understand
                    what you would be missing out on. A lot of our subscribers
                    have shared stories that they've passed their exam after using
                    our product after failing with other products on the market.
                    This is probably because we hire about 1 in 100 authors who
                    apply for a job to write questions for us. If your school
                    provides a different product or you found a less expensive
                    product, we want you to know that our material is very
                    different from others. Having said all of that, we did start
                    off by saying we're flexible. If you haven't activated your
                    subscription (started any exams), we have some options: We can
                    change the subscription to a different exam and length with
                    the same or lesser price; we can provide COMQUEST credits to
                    use toward a future purchase; or we'll even help facilitate a
                    transfer to a friend or classmate of yours! And, if for some
                    odd reason you don't pass your exam, and you had completed all
                    the questions, we'll add the same amount of time as your
                    original purchase back to your account for that exam. But
                    please, make sure you read all of the explanations this time
                    around! We can't stress this enough.
                  </p>
                </section>
                <section className={styles.faqAccordionItem}>
                  <label className={styles.faqQuestion}>
                    Are there any discounts available?
                  </label>
                  <p className={styles.faqAnswer}>
                    Yes. We organize discounts for classes who are interested in a
                    group/class-wide purchase. If you're interested in organizing
                    a group discount for your class, please contact us and include
                    your school, graduation year, and exam(s) that you're
                    interested in organizing a group purchase for.
                  </p>
                </section>
                <section className={styles.faqAccordionItem}>
                  <label className={styles.faqQuestion}>Can I reset my account/scores?</label>
                  <p className={styles.faqAnswer}>
                    Yes. You may reset your overall score to see how you do the
                    second time around. You may also mark all of the questions
                    "unused", so that you encounter each question only one
                    additional time. These features are available with any active
                    subscription and at no additional cost.
                  </p>
                </section>
                <section className={styles.faqAccordionItem}>
                  <label className={styles.faqQuestion}>How can I work for COMQUEST?</label>
                  <p className={styles.faqAnswer}>
                    We're always looking for fun, talented, enthusiastic people to
                    join our team. If you're interested in providing the best
                    experience for students, and are looking for a position, send
                    us an email and let us know what you're great at!
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ghostLoginContainer}>
          <div className={styles.ghostLoginWrapper}>
            <div className={styles.ghostLoginContent}>
              <form name="loginGhostForm" role="form" autoComplete="off" noValidate className={styles.loginForm}>
                <div className={styles.ghostFormHeader}></div>
                <div className={styles.ghostFormSubheader}></div>
                <div className={styles.formTitle}>Login</div>
                <div className={styles.ghostFormFields}>
                  <div className={styles.ghostFormGroup}>
                    <label htmlFor="username_ghost" className={styles.formLabel}>
                      E-mail Address
                    </label>
                    <input 
                      autoComplete="off" 
                      type="email" 
                      name="username_ghost" 
                      className={styles.formInput}
                      data-dom-state="input-1"
                    />
                  </div>
                </div>
                <div className={styles.ghostFormFields}>
                  <div className={styles.ghostFormGroup}>
                    <label htmlFor="password_ghost" className={styles.formLabel}>Password</label>
                    <input type="password" name="password_ghost" className={styles.formInput} data-dom-state="input-2" />
                    <div className={styles.passwordToggle}>
                      <input type="checkbox" className={styles.passwordCheckbox} data-dom-state="input-3" />
                      <label htmlFor="show_ghost" className={styles.showPasswordLabel}>
                        <span>Show</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={styles.ghostFormSubmit}>
                  <button type="submit" className={styles.submitBtn}>
                    Ghost Sign in to Account ID:
                    <span></span>
                  </button>
                </div>
                <div className={styles.ghostFormFooter}></div>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.mainLoginContainer}>
          <div className={styles.mainLoginWrapper}>
            <div className={styles.mainLoginContent}>
              <form name="loginForm" role="form" autoComplete="off" noValidate className={styles.loginForm}>
                <div className={styles.formHeader}></div>
                <div className={styles.formSubheader}></div>
                <div className={styles.formTitle}>Login</div>
                <div className={styles.formFields}>
                  <div className={styles.formGroup}>
                    <label htmlFor="username" className={styles.formLabel}>E-mail Address</label>
                    <input 
                      autoComplete="off" 
                      type="email" 
                      name="username" 
                      className={styles.formInput}
                      data-dom-state="input-4"
                    />
                  </div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.formLabel}>Password</label>
                    <input type="password" name="password" className={styles.formInput} data-dom-state="input-5" />
                    <div className={styles.passwordToggle}>
                      <input type="checkbox" className={styles.passwordCheckbox} data-dom-state="input-6" />
                      <label htmlFor="show" className={styles.showPasswordLabel}>
                        <span>Show</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={styles.formSubmit}>
                  <button type="submit" className={styles.submitBtn}>Sign in to Account ID: <span></span></button>
                </div>
                <div className={styles.formFooter}></div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
