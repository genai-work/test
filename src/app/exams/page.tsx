import styles from './page.module.scss';

export default function ExamsPage() {
  return (
    <main className={styles.examsPage}>
      <section className={styles.pageHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.pageTitle}>Exams</h1>
            </div>
            <div className={styles.breadcrumbWrapper}>
              <ul className={styles.breadcrumb}>
                <li className={styles.breadcrumbItem}>
                  <a href="https://comquestmed.com/" className={styles.breadcrumbLink}>
                    <span>Home</span>
                  </a>
                </li>
                <li className={styles.breadcrumbItem}>
                  <a href="https://comquestmed.com/exams.php" className={styles.breadcrumbLink}>
                    <span>Exams</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>
            Our <strong>Exams</strong>
          </h2>

          <div className={styles.introSection}>
            <div className={styles.introText}>
              <p>
                COMQUEST is comprised of a team of physician educators who wanted higher quality preparation
                material that wasn't available. COMQUEST currently focuses on the core COMAT/Clerkship exams
                and COMLEX Level 1, 2-CE, and 3.
              </p>
              <p>
                <em>If you have a request for another exam, please let us know.</em>
              </p>
            </div>
            <div className={styles.introButton}>
              <a href="#" className={styles.sampleButton}>
                Sample Questions
              </a>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.examsGrid}>
            <div className={styles.examCard}>
              <div className={styles.examCardInner}>
                <div className={styles.examCardContent}>
                  <h4 className={styles.examTitle}>COMLEX</h4>
                  <p className={styles.examDescription}>
                    Students and residents preparing for the COMLEX have historically been at a disadvantage
                    by having to use USMLE or substandard COMLEX products. COMQUEST has put together a solid
                    team of academic physicians to add many new questions, edit existing questions, and ensure
                    that you're being provided content that is consistent with current 2025 testing standards.
                    You may expect the highest quality, most relevant and efficient COMLEX preparation in the
                    market.
                  </p>
                  <a href="https://comquestmed.com/exams/comlex.php" className={styles.learnMoreLink}>
                    learn more <i className={styles.arrowIcon}>→</i>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.examCard}>
              <div className={styles.examCardInner}>
                <div className={styles.examCardContent}>
                  <h4 className={styles.examTitle}>COMAT</h4>
                  <p className={styles.examDescription}>
                    There is a very limited amount of high-quality resources to prepare for the NBOME
                    Comprehensive Osteopathic Medical Achievement Test (COMAT) shelf exam questions. COMQUEST
                    has authored the most relevant content that is consistent with current 2025 testing
                    standards. Expect the highest quality, most relevant and efficient COMAT exam preparation
                    in the market.
                  </p>
                  <a href="https://comquestmed.com/exams/comat.php" className={styles.learnMoreLink}>
                    learn more <i className={styles.arrowIcon}>→</i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className={styles.dividerLarge} />
        </div>
      </section>
    </main>
  );
}
