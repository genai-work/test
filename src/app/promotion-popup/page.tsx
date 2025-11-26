import styles from './styles.module.scss';

export default function PromotionPopupPage() {
  return (
    <div className={styles.promotionModal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close modal"
          >
            ×
          </button>
          <h4 className={styles.promoBanner}>
            <span className={styles.bannerMain}>
              <b>
                Get 50% off of 1-year Level 2-CE and/or all 8 COMAT subscriptions if you add to your order today.
                Your subscription doesn't start until you take your first exam.
              </b>
            </span>
            <span className={styles.bannerAlt} style={{ display: 'none' }}>
              <b>
                Get 50% off of 1-year Level 2-CE if you add to your order today.
                Your subscription doesn't start until you take your first exam.
              </b>
            </span>
          </h4>
          <h4 className={styles.specialOfferTitle} style={{ display: 'none' }}>
            Special Offer
          </h4>
          <h4 className={styles.comatOnlyTitle} style={{ display: 'none' }}>
            <b>
              Get 50% off of the COMAT Bundle if you add to your order today. Each subject may be activated
              individually at different times!
            </b>
          </h4>
        </div>

        <form role="form" className={styles.modalForm} noValidate>
          <div className={styles.formHeader}>
            <h4 className={`${styles.formTitle} ${styles.level1Title}`}>
              Special Offer for COMLEX Level 1 Subscribers (Today Only)
            </h4>
            <h4 className={`${styles.formTitle} ${styles.level2Title}`} style={{ display: 'none' }}>
              Special Offer for COMLEX Level 2 Subscribers (Today Only)
            </h4>
            <h4 className={`${styles.formTitle} ${styles.bothLevelsTitle}`} style={{ display: 'none' }}>
              Special Offer for COMLEX Subscribers (Today Only)
            </h4>
            <h4 className={`${styles.formTitle} ${styles.comatOnlyFormTitle}`} style={{ display: 'none' }}>
              Special Offer (Today Only)
            </h4>
          </div>

          <div className={styles.offeringsGrid}>
            <div className={`${styles.offeringCard} ${styles.level1Card}`}>
              <h1 className={styles.offeringTitle}>
                <strong>COMSAE</strong> Level 1 Form A
              </h1>
              <p className={styles.offeringDescription}>
                This <b>full-length 176-question practice exam</b> provides a format and structure similar to the
                COMLEX with questions not published in the question bank and provides a <b>predicted score</b>. You may
                take each assessment up to three times. Assessments are just that, so they do not contain explanations.
                You can use your assessment during your COMLEX subscription's active period (they'll have the same
                'expiration' date). This is the only 176-question assessment in the market!
              </p>
              <div className={styles.offeringFooter}>
                <h4 className={styles.price}>
                  <span className={styles.priceAmount}>$39.00</span>
                </h4>
                <label className={styles.offerLabel}>Yes, add full-length practice exam!</label>
                <button type="button" className={styles.addToCartBtn}>
                  <i className={styles.cartIcon}></i>
                  Add to cart
                </button>
              </div>
            </div>

            <div className={`${styles.offeringCard} ${styles.level1Card}`}>
              <h1 className={styles.offeringTitle}>
                <strong>COMSAE</strong> Level 1 Form B
              </h1>
              <p className={styles.offeringDescription}>
                This <b>full-length 176-question practice exam</b> provides a format and structure similar to the
                COMLEX with questions not published in the question bank and provides a <b>predicted score</b>. You may
                take each assessment up to three times. Assessments are just that, so they do not contain explanations.
                You can use your assessment during your COMLEX subscription's active period (they'll have the same
                'expiration' date). This is the only 176-question assessment in the market!
              </p>
              <div className={styles.offeringFooter}>
                <h4 className={styles.price}>
                  <span className={styles.priceAmount}>$39.00</span>
                </h4>
                <label className={styles.offerLabel}>Yes, add full-length practice exam!</label>
                <button type="button" className={styles.addToCartBtn}>
                  <i className={styles.cartIcon}></i>
                  Add to cart
                </button>
              </div>
            </div>

            <div className={`${styles.offeringCard} ${styles.level2Card}`} style={{ display: 'none' }}>
              <h1 className={styles.offeringTitle}>
                <strong>COMSAE</strong> Level 2 Form A
              </h1>
              <p className={styles.offeringDescription}>
                This <b>full-length 176-question practice exam</b> provides a format and structure similar to the
                COMLEX with questions not published in the question bank and provides a <b>predicted score</b>. You may
                take each assessment up to three times. Assessments are just that, so they do not contain explanations.
                You can use your assessment during your COMLEX subscription's active period (they'll have the same
                'expiration' date). This is the only 176-question assessment in the market!
              </p>
              <div className={styles.offeringFooter}>
                <h4 className={styles.price}>
                  <span className={styles.priceAmount}>$39.00</span>
                </h4>
                <label className={styles.offerLabel}>Yes, add full-length practice exam!</label>
                <button type="button" className={styles.addToCartBtn}>
                  <i className={styles.cartIcon}></i>
                  Add to cart
                </button>
              </div>
            </div>

            <div className={`${styles.offeringCard} ${styles.level2Card}`} style={{ display: 'none' }}>
              <h1 className={styles.offeringTitle}>
                <strong>COMSAE</strong> Level 2 Form B
              </h1>
              <p className={styles.offeringDescription}>
                This <b>full-length 176-question practice exam</b> provides a format and structure similar to the
                COMLEX with questions not published in the question bank and provides a <b>predicted score</b>. You may
                take each assessment up to three times. Assessments are just that, so they do not contain explanations.
                You can use your assessment during your COMLEX subscription's active period (they'll have the same
                'expiration' date). This is the only 176-question assessment in the market!
              </p>
              <div className={styles.offeringFooter}>
                <h4 className={styles.price}>
                  <span className={styles.priceAmount}>$39.00</span>
                </h4>
                <label className={styles.offerLabel}>Yes, add full-length practice exam!</label>
                <button type="button" className={styles.addToCartBtn}>
                  <i className={styles.cartIcon}></i>
                  Add to cart
                </button>
              </div>
            </div>

            <div className={`${styles.offeringCard} ${styles.level2Subscription}`}>
              <h1 className={styles.offeringTitle}>
                <strong>COMLEX</strong> Level 2
              </h1>
              <p className={styles.offeringDescription}>
                Studying for COMLEX Level 2-CE throughout third year has been proven to increase scores. This offer is
                only available when purchased with Level 1. You may activate your subscription <strong>ANYTIME</strong>.
              </p>
              <div className={styles.offeringFooter}>
                <h4 className={styles.price}>
                  <span className={styles.originalPrice}>$489</span>
                  <span className={styles.discountedPrice}>$244.50</span>
                </h4>
                <label className={styles.offerLabel}>Yes! Save 50% off of Level 2</label>
                <button type="button" className={styles.addToCartBtn}>
                  <i className={styles.cartIcon}></i>
                  Add to cart
                </button>
              </div>
            </div>

            <div className={`${styles.offeringCard} ${styles.comatBundle}`}>
              <h1 className={styles.offeringTitle}>
                <strong>COMAT</strong> Bundle
              </h1>
              <p className={styles.offeringDescription}>
                COMQUEST just released over 2,900 extremely high quality questions specific for the shelf exams. You will
                get 3 months of access to each of the following COMAT subscriptions: EM, FM, IM, Ob/Gyn, OMM, Peds,
                Pscyh, Surgery. You may activate each of these COMATs <strong>individually, ANYTIME!</strong>
              </p>
              <p className={styles.offeringNote}>
                * These questions are different from the questions in the Level 2-CE database but can provide additional
                prep for COMLEX Level 2-CE.
              </p>
              <div className={styles.offeringFooter}>
                <h4 className={styles.price}>
                  <span className={styles.originalPrice}>$599</span>
                  <span className={styles.discountedPrice}>$299.50</span>
                </h4>
                <label className={styles.offerLabel}>Yes! Save 50% off of the COMAT Bundle</label>
                <button type="button" className={styles.addToCartBtn}>
                  <i className={styles.cartIcon}></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={`${styles.btn} ${styles.btnSecondary}`}>
              No Thanks
            </button>
            <button type="button" className={`${styles.btn} ${styles.btnPrimary}`}>
              Add All
            </button>
            <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>
              Ok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
