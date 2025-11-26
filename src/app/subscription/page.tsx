export default function SubscriptionPage() {
  return (
    <div className="subscription-wrapper">
      <header className="subscription-header">
        <div className="header-nav">
          <div className="logo-section">
            <a href="/" className="logo-link">
              <img 
                alt="COMQUEST" 
                src="https://comquestmed.com/img/comquest-logo-color.png" 
                className="logo-image"
              />
            </a>
          </div>
          <nav className="main-nav">
            <ul className="nav-list">
              <li><a href="/blog" className="nav-link">Blog</a></li>
              <li><a href="/faq" className="nav-link">FAQ</a></li>
              <li><a href="/our-team" className="nav-link">Our Team</a></li>
              <li><a href="/institutional-accounts" className="nav-link">Institutional Accounts</a></li>
              <li><a href="/why-comquest" className="nav-link">Why COMQUEST?</a></li>
              <li><a href="/login" className="nav-link">Login</a></li>
            </ul>
          </nav>
          <button className="mobile-menu-btn" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main className="subscription-main">
        <section className="page-hero">
          <div className="hero-container">
            <h1 className="hero-title">Sign Up Now</h1>
            <nav className="breadcrumb">
              <ol className="breadcrumb-list">
                <li><a href="/">Home</a></li>
                <li><span>Sign Up</span></li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-card">
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <h3 className="author-name">Brian Stocker</h3>
            </div>
            <p className="testimonial-text">
              After using multiple COMLEX question banks for Level 1 and 2, I realized that quality is far more important than quantity and if I had to repeat it, I would focus on COMQUEST as my primary question bank. It covered all topics, had in depth explanations, and even gave tips and mnemonics that proved invaluable.
            </p>
          </div>
        </section>

        <section className="products-section">
          <div className="products-container">
            {/* COMLEX Question Bank */}
            <article className="product-card">
              <header className="product-header">
                <h2 className="product-title">COMLEX Question Bank</h2>
                <p className="product-subtitle">Updated for 2025</p>
              </header>

              <form className="product-form">
                <fieldset className="form-group">
                  <legend className="form-legend">Choose the COMLEX Level</legend>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" name="level" value="1" />
                      COMLEX Level 1
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="level" value="2" />
                      COMLEX Level 2-CE
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="level" value="3" />
                      COMLEX Level 3
                      <span className="badge-note">Now includes CDM type cases!</span>
                    </label>
                  </div>
                </fieldset>

                <fieldset className="form-group">
                  <label htmlFor="comlex-length" className="form-label">Choose Subscription Length</label>
                  <select id="comlex-length" name="subscription-length" className="form-select" disabled>
                    <option>1 Month: $179</option>
                    <option>2 Months: $269</option>
                    <option>3 Months: $329</option>
                    <option>6 Months: $389</option>
                    <option>1 Year: $489</option>
                  </select>
                </fieldset>
              </form>

              <div className="product-summary">
                <div className="summary-total">
                  <span className="total-label">Total:</span>
                  <span className="total-price">$0</span>
                </div>
                <button className="btn btn-add-to-cart">Add to Cart</button>
                <p className="product-note">Activate Individually, Anytime</p>
              </div>
            </article>

            {/* COMAT Question Bank */}
            <article className="product-card">
              <header className="product-header">
                <h2 className="product-title">COMAT Question Bank</h2>
                <p className="product-highlight">Over 2,900 Questions Total!</p>
              </header>

              <div className="tabs-container">
                <div className="tabs-nav">
                  <button className="tab-btn active" data-tab="individual">Individual COMATs</button>
                  <button className="tab-btn" data-tab="all">All 8 COMATs</button>
                </div>

                <div className="tab-content active">
                  <form className="product-form">
                    <fieldset className="form-group">
                      <div className="checkbox-group">
                        <label className="checkbox-label">
                          <input type="checkbox" name="comat" value="emergency" />
                          Emergency Medicine <span className="question-count">(294 Questions)</span>
                        </label>
                        <label className="checkbox-label">
                          <input type="checkbox" name="comat" value="family" />
                          Family Medicine <span className="question-count">(361 Questions)</span>
                        </label>
                        <label className="checkbox-label">
                          <input type="checkbox" name="comat" value="internal" />
                          Internal Medicine <span className="question-count">(400 Questions)</span>
                        </label>
                        <label className="checkbox-label">
                          <input type="checkbox" name="comat" value="obgyn" />
                          Ob/Gyn <span className="question-count">(369 Questions)</span>
                        </label>
                        <label className="checkbox-label">
                          <input type="checkbox" name="comat" value="omm" />
                          OMM <span className="question-count">(128 Questions)</span>
                        </label>
                        <label className="checkbox-label">
                          <input type="checkbox" name="comat" value="pediatrics" />
                          Pediatrics <span className="question-count">(317 Questions)</span>
                        </label>
                        <label className="checkbox-label">
                          <input type="checkbox" name="comat" value="psychiatry" />
                          Psychiatry <span className="question-count">(381 Questions)</span>
                        </label>
                        <label className="checkbox-label">
                          <input type="checkbox" name="comat" value="surgery" />
                          Surgery <span className="question-count">(336 Questions)</span>
                        </label>
                      </div>
                    </fieldset>

                    <fieldset className="form-group">
                      <label htmlFor="comat-length" className="form-label">Choose Subscription Length</label>
                      <select id="comat-length" name="comat-subscription-length" className="form-select" disabled>
                        <option>1 Month: $67</option>
                        <option>2 Months: $87</option>
                        <option>3 Months: $107</option>
                      </select>
                    </fieldset>
                  </form>

                  <div className="product-summary">
                    <div className="summary-total">
                      <span className="total-label">Total:</span>
                      <span className="total-price">$0</span>
                    </div>
                    <button className="btn btn-add-to-cart">Add to Cart</button>
                    <p className="product-note">Activate Individually, Anytime</p>
                  </div>
                </div>

                <div className="tab-content">
                  <div className="bundle-offer">
                    <h3 className="bundle-title">All 8 COMATs<br />for 3 Months Each</h3>
                    <div className="bundle-pricing">
                      <span className="original-price">$856</span>
                      <span className="sale-price">$599</span>
                    </div>
                    <p className="savings-label">Save Over 30%</p>
                  </div>

                  <div className="product-summary">
                    <div className="summary-total">
                      <span className="total-label">Total:</span>
                      <span className="total-price">$599</span>
                    </div>
                    <button className="btn btn-add-to-cart">Add to Cart</button>
                    <p className="product-note">Activate Individually, Anytime</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Bundle Offer */}
            <article className="product-card bundle-card">
              <header className="product-header">
                <span className="bundle-badge">BUNDLE</span>
                <p className="bundle-description">Buy together and save 44%</p>
              </header>

              <div className="bundle-details">
                <p className="bundle-combo">
                  All 8 COMATs for 3 Months Each <span className="plus-sign">+</span> Any COMLEX Level for 1 Year
                </p>
                <div className="bundle-pricing">
                  <span className="original-price">$1345</span>
                  <span className="sale-price">$889</span>
                </div>
              </div>

              <form className="product-form">
                <fieldset className="form-group">
                  <label htmlFor="bundle-comlex" className="form-label">Choose COMLEX Level</label>
                  <select id="bundle-comlex" name="bundle-comlex" className="form-select">
                    <option value="1">COMLEX Level 1</option>
                    <option value="2" selected>COMLEX Level 2-CE</option>
                    <option value="3">COMLEX Level 3</option>
                  </select>
                </fieldset>
              </form>

              <div className="product-summary">
                <div className="summary-total">
                  <span className="total-label">Total:</span>
                  <span className="total-price">$889</span>
                </div>
                <button className="btn btn-add-to-cart">Add to Cart</button>
                <p className="product-note">Activate Individually, Anytime</p>
              </div>
            </article>
          </div>

          {/* Shopping Cart */}
          <aside className="shopping-cart">
            <h2 className="cart-title">YOUR CART</h2>
            <div className="cart-empty">
              <p>Your shopping cart is empty</p>
            </div>
            <div className="cart-actions">
              <button className="btn btn-next">
                Next
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10l8-8M10 10v-8H2" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </aside>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Your Subscription Includes the Following:</h2>
          
          <div className="features-tabs">
            <div className="tabs-nav features-nav">
              <button className="tab-btn active">Test Taking Strategy</button>
              <button className="tab-btn">Platform Features</button>
              <button className="tab-btn">High Quality</button>
              <button className="tab-btn">Pause Exams</button>
              <button className="tab-btn">Exam Size</button>
              <button className="tab-btn">Mobile</button>
              <button className="tab-btn">Customer Service</button>
            </div>

            <div className="features-content">
              <div className="feature-group">
                <h3 className="feature-heading">Test Taking Strategy And Insights</h3>
                <ul className="feature-list">
                  <li>
                    <h4>Various question types</h4>
                    <p>Build a test from any combination of question types: New only, New and Incorrect, Incorrect only, Questions Marked for Review.</p>
                  </li>
                  <li>
                    <h4>Mark questions</h4>
                    <p>Mark any questions for later review and to create future exams with these questions. Marked questions dashboards tracks various metrics on these questions.</p>
                  </li>
                  <li>
                    <h4>Add and review notes</h4>
                    <p>Take notes and filter them later to review before your exam.</p>
                  </li>
                  <li>
                    <h4>Comment</h4>
                    <p>Comment on a question or explanation and our physician editors will review your comment and reply if a response is needed.</p>
                  </li>
                  <li>
                    <h4>Timed mode</h4>
                    <p>Create exams in timed mode to keep track of how much time you're taking on each question and on average compared to the national average and the goal of 72 seconds/question.</p>
                  </li>
                  <li>
                    <h4>Tutor mode</h4>
                    <p>See thorough explanations immediately after you commit to an answer for each question.</p>
                  </li>
                  <li>
                    <h4>Untimed mode</h4>
                    <p>Work on test-taking strategy rather than time management.</p>
                  </li>
                  <li>
                    <h4>Dimension I and II categorization</h4>
                    <p>Choose from two types of categories when creating an exam. For example, you can choose to do only Cardiology management questions.</p>
                  </li>
                  <li>
                    <h4>Resettable score</h4>
                    <p>Reset your resettable score to keep track of your performance after a reset.</p>
                  </li>
                  <li>
                    <h4>Graphical representation of performance</h4>
                    <p>See how you're doing compared to your peers through graphs and line charts on dimension I, dimension II, and overall!</p>
                  </li>
                  <li>
                    <h4>Countdown until exam</h4>
                    <p>Enter your exam date for a countdown of days until your exam.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="subscription-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-heading">Address</h4>
              <address className="footer-address">
                18740 Ventura Blvd #100<br />
                Tarzana, CA 91356
              </address>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/comquestmed" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/comquestmed" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-branding">
              <img src="https://comquestmed.com/img/logo-footer.png" alt="COMQUEST" className="footer-logo" />
              <p className="copyright">COMQUEST Osteopathic Specialists, LLC 2009-2026 © All rights reserved</p>
              <p className="footer-description">
                COMQUEST ensures that you pass your exams with higher scores, less preparation time, and less anxiety, while providing amazing support along the way. We want to see our subscribers match at top residency programs.
              </p>
              <p className="footer-disclaimer">
                COMQUEST is in no way affiliated with the Comprehensive Osteopathic Medical Licensing Examination (COMLEX-USA®), Comprehensive Osteopathic Medical Achievement Test (COMAT®), or National Board of Osteopathic Medical Examiners (NBOME®).
              </p>
            </div>

            <nav className="footer-nav">
              <ul className="footer-nav-list">
                <li><a href="/faq">FAQ's</a></li>
                <li><a href="/sitemap">Sitemap</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
