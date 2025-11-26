'use client';

import styles from './page.module.scss';

export default function LoginPopup() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <form
          name="loginForm"
          role="form"
          autoComplete="off"
          noValidate
          className={styles.form}
        >
          <h1 className={styles.formTitle}>Login</h1>

          <div className={styles.formGroup}>
            <div className={styles.formField}>
              <label htmlFor="username" className={styles.label}>
                E-mail Address
              </label>
              <input
                autoComplete="off"
                type="email"
                name="username"
                id="username"
                pattern="^(([^<>()[\]\\.,;:\s@\&quot;]+(\.[^<>()[\]\\.,;:\s@\&quot;]+)*)|(\&quot;.+\&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.passwordGroup}>
            <div className={styles.passwordField}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className={styles.input}
              />

              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="show"
                  className={styles.hiddenCheckbox}
                />
                <label htmlFor="show" className={styles.checkboxLabel}>
                  <span className={styles.checkboxText}>Show</span>
                </label>
              </div>

              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="remember_me"
                  className={styles.hiddenCheckbox}
                />
                <label htmlFor="remember_me" className={styles.checkboxLabel}>
                  <span className={styles.checkboxText}>Remember me</span>
                </label>
              </div>

              <a href="#" className={styles.forgotLink}>
                Forgot your password?
              </a>
            </div>
          </div>

          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitButton}>
              Sign in to my account
            </button>
          </div>
        </form>

        <div className={styles.googleSigninWrapper}>
          <button
            type="button"
            onClick={() => {
              const width = 450;
              const height = 550;
              const left = window.screenX + (window.outerWidth - width) / 2;
              const top = window.screenY + (window.outerHeight - height) / 2;
              window.open(
                '/auth/google',
                'googleAuth',
                `width=${width},height=${height},left=${left},top=${top}`
              );
            }}
            className={styles.googleButton}
          >
            <span className={styles.googleIconWrapper}>
              <svg
                viewBox="0 0 366 372"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.googleIcon}
              >
                <path
                  d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                  fill="#EA4335"
                />
                <path
                  d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                  fill="#FBBC05"
                />
                <path
                  d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                  fill="#4285F4"
                />
                <path
                  d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                  fill="#34A853"
                />
              </svg>
            </span>
            <span className={styles.googleButtonText}>Sign in with Google</span>
          </button>
        </div>

        <div className={styles.signupPrompt}>
          Don't have an account?{' '}
          <a href="/signup" className={styles.signupLink}>
            Create one here
          </a>
        </div>
      </div>
    </div>
  );
}
