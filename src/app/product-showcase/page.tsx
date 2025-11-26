import styles from './page.module.scss';

export default function ProductShowcasePage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoSection}>
            <a href="/" className={styles.logoLink}>
              <img 
                alt="COMQUEST" 
                src="https://comquestmed.com/img/comquest-logo-color.png" 
                className={styles.logoImage}
              />
            </a>
          </div>
          <button className={styles.mobileMenuBtn} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>COMLEX and COMAT Prep</h1>
            <p className={styles.heroSubtitle}>
              Premium Question Banks & Study Materials
            </p>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className={styles.testimonialSection}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>
                After using multiple COMLEX question banks for Level 1 and 2, I realized that quality is far more important than quantity and if I had to repeat it, I would focus on COMQUEST as my primary question bank. It covered all topics, had in depth explanations, and even gave tips and mnemonics that proved invaluable.
              </p>
              <div className={styles.testimonialAuthor}>
                <p className={styles.authorName}>Brian Stocker</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className={styles.productsSection}>
          <div className={styles.productsContainer}>
            {/* COMLEX Product Card */}
            <div className={styles.productCard}>
              <div className={styles.productHeader}>
                <span className={styles.productTitle}>COMLEX Question Bank</span>
                <span className={styles.productBadge}>Updated for 2025</span>
              </div>
              
              <div className={styles.productContent}>
                <h3 className={styles.productName}>Choose Your Level</h3>
                <div className={styles.optionsList}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>COMLEX Level 1</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>COMLEX Level 2-CE</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>COMLEX Level 3</span>
                  </label>
                </div>

                <div className={styles.subscriptionSelector}>
                  <label htmlFor="comlex-length" className={styles.label}>
                    Choose Subscription Length
                  </label>
                  <select id="comlex-length" className={styles.select}>
                    <option value="">-- Choose Length --</option>
                    <option value="1month">1 month: $179</option>
                    <option value="2months">2 months: $269</option>
                    <option value="3months">3 months: $329</option>
                    <option value="6months">6 months: $389</option>
                    <option value="1year">1 year: $489</option>
                  </select>
                </div>
              </div>

              <div className={styles.productFooter}>
                <div className={styles.priceDisplay}>
                  <span className={styles.totalLabel}>Total:</span>
                  <span className={styles.totalPrice}>$179</span>
                </div>
                <button className={styles.addButton}>Add to Cart</button>
              </div>
            </div>

            {/* COMAT Product Card */}
            <div className={styles.productCard}>
              <div className={styles.productHeader}>
                <span className={styles.productTitle}>COMAT Question Bank</span>
                <span className={styles.productBadge}>2,900+ Questions</span>
              </div>
              
              <div className={styles.productContent}>
                <h3 className={styles.productName}>Select Subjects</h3>
                <div className={styles.optionsList}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Emergency Medicine (294 Q)</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Family Medicine (361 Q)</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Internal Medicine (400 Q)</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Ob/Gyn (369 Q)</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Pediatrics (317 Q)</span>
                  </label>
                </div>

                <div className={styles.subscriptionSelector}>
                  <label htmlFor="comat-length" className={styles.label}>
                    Choose Subscription Length
                  </label>
                  <select id="comat-length" className={styles.select}>
                    <option value="">-- Choose Length --</option>
                    <option value="1month">1 month: $67</option>
                    <option value="2months">2 months: $87</option>
                    <option value="3months">3 months: $107</option>
                  </select>
                </div>
              </div>

              <div className={styles.productFooter}>
                <div className={styles.priceDisplay}>
                  <span className={styles.totalLabel}>Total:</span>
                  <span className={styles.totalPrice}>$67</span>
                </div>
                <button className={styles.addButton}>Add to Cart</button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.sectionTitle}>Your Subscription Includes</h2>
            
            <div className={styles.featuresTabs}>
              <div className={styles.tabContent}>
                <div className={styles.featuresGrid}>
                  <div className={styles.featureItem}>
                    <h4 className={styles.featureName}>PeerTrax™</h4>
                    <p className={styles.featureDescription}>
                      See how you compare nationally by seeing your average vs. your peers on questions you've answered.
                    </p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4 className={styles.featureName}>ChoiceTrax™</h4>
                    <p className={styles.featureDescription}>
                      Track how your answer choices evolve over time and analyze your decision-making patterns.
                    </p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4 className={styles.featureName}>Timed Mode</h4>
                    <p className={styles.featureDescription}>
                      Create exams in timed mode to keep track of your speed and compare to the 72 seconds/question benchmark.
                    </p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4 className={styles.featureName}>Detailed Explanations</h4>
                    <p className={styles.featureDescription}>
                      Thorough rationales for right answers and explanations for why distractors are incorrect.
                    </p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4 className={styles.featureName}>Mobile Access</h4>
                    <p className={styles.featureDescription}>
                      Study on-the-go with our responsive platform and dedicated mobile applications.
                    </p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4 className={styles.featureName}>Customer Support</h4>
                    <p className={styles.featureDescription}>
                      Get help 7 days a week, 365 days a year from our dedicated support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Section */}
        <section className={styles.bundleSection}>
          <div className={styles.bundleContainer}>
            <div className={styles.bundleCard}>
              <div className={styles.bundleHeader}>
                <span className={styles.bundleBadge}>BUNDLE</span>
                <span className={styles.bundleSave}>Save 44%</span>
              </div>
              
              <div className={styles.bundleContent}>
                <h3 className={styles.bundleTitle}>
                  All 8 COMATs <br /> + Any COMLEX Level
                </h3>
                <div className={styles.bundlePricing}>
                  <span className={styles.originalPrice}>$1345</span>
                  <span className={styles.bundlePrice}>$889</span>
                </div>
              </div>

              <div className={styles.bundleFooter}>
                <button className={styles.bundleButton}>Add to Cart</button>
                <p className={styles.bundleNote}>
                  Activate individually, anytime
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cart Summary */}
        <section className={styles.cartSection}>
          <div className={styles.cartContainer}>
            <h2 className={styles.cartTitle}>Your Cart</h2>
            <div className={styles.cartContent}>
              <p className={styles.emptyCart}>Your shopping cart is empty</p>
            </div>
            <div className={styles.cartFooter}>
              <button className={styles.checkoutButton} disabled>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 COMQUEST. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
