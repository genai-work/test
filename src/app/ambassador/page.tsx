import './styles.scss';

export default function AmbassadorPage() {
  return (
    <div className="ambassador-page">
      <header className="site-header">
        <div className="header-wrapper">
          <button className="menu-toggle" aria-label="Toggle menu">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 10.6133V11.6133C12 11.7487 11.9505 11.8659 11.8516 11.9648C11.7526 12.0638 11.6354 12.1133 11.5 12.1133H0.5C0.364583 12.1133 0.247396 12.0638 0.148438 11.9648C0.0494792 11.8659 0 11.7487 0 11.6133V10.6133C0 10.4779 0.0494792 10.3607 0.148438 10.2617C0.247396 10.1628 0.364583 10.1133 0.5 10.1133H11.5C11.6354 10.1133 11.7526 10.1628 11.8516 10.2617C11.9505 10.3607 12 10.4779 12 10.6133ZM12 6.61328V7.61328C12 7.7487 11.9505 7.86589 11.8516 7.96484C11.7526 8.0638 11.6354 8.11328 11.5 8.11328H0.5C0.364583 8.11328 0.247396 8.0638 0.148438 7.96484C0.0494792 7.86589 0 7.7487 0 7.61328V6.61328C0 6.47786 0.0494792 6.36068 0.148438 6.26172C0.247396 6.16276 0.364583 6.11328 0.5 6.11328H11.5C11.6354 6.11328 11.7526 6.16276 11.8516 6.26172C11.9505 6.36068 12 6.47786 12 6.61328ZM12 2.61328V3.61328C12 3.7487 11.9505 3.86589 11.8516 3.96484C11.7526 4.0638 11.6354 4.11328 11.5 4.11328H0.5C0.364583 4.11328 0.247396 4.0638 0.148438 3.96484C0.0494792 3.86589 0 3.7487 0 3.61328V2.61328C0 2.47786 0.0494792 2.36068 0.148438 2.26172C0.247396 2.16276 0.364583 2.11328 0.5 2.11328H11.5C11.6354 2.11328 11.7526 2.16276 11.8516 2.26172C11.9505 2.36068 12 2.47786 12 2.61328Z" fill="white"/>
            </svg>
          </button>
          <div className="logo-wrapper">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/f7168861ee65df665c892f8ca9ed27cd1afe2eec?width=164" alt="COMQUEST Logo" className="logo" />
          </div>
          <nav className="main-nav">
            <ul className="nav-list">
              <li><a href="#" className="nav-link">Blog</a></li>
              <li><a href="#" className="nav-link">FAQ</a></li>
              <li><a href="#" className="nav-link">Our Team</a></li>
              <li><a href="#" className="nav-link">Institutional Accounts</a></li>
              <li><a href="#" className="nav-link">Why COMQUEST?</a></li>
              <li><a href="#" className="nav-link">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="page-banner">
          <div className="banner-wrapper">
            <h1 className="page-title">Become an Ambassador</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ul className="breadcrumb-list">
                <li><a href="#" className="breadcrumb-link">Home</a></li>
                <li className="breadcrumb-sep">/</li>
                <li><a href="#" className="breadcrumb-link">Become an Ambassador</a></li>
              </ul>
            </nav>
          </div>
        </section>

        <article className="article">
          <section className="hero-section">
            <h2 className="hero-title">Become a Campus<br/>Ambassador!</h2>
            <p className="hero-subtitle">You and your classmates<br/>will LOVE the perks!</p>
          </section>

          <section className="intro-section">
            <p className="intro-text">
              Did you experience all of the great benefits of using COMQUEST and want to spread the word? If so, we want you to <strong>Join Our Team!!</strong> Become a <span className="handwritten">Campus Ambassador</span> and take advantage of all the great perks while spreading the word about your success after studying with COMQUEST.
            </p>
          </section>

          <section className="benefits-preview">
            <p className="benefits-text">
              Being a <span className="handwritten">Campus Ambassador</span> is simple and doesn't require a huge time commitment (we know you already have a lot going on!) and gives you the opportunity to earn gift card rewards!
            </p>
            <p className="note-text">
              Please note that there are only 2-3 spots per campus, so be sure to apply before it's too late.
            </p>
          </section>

          <hr className="divider"/>

          <section className="benefits-section">
            <h2 className="section-title">What's <strong>In It For You?</strong></h2>
            <ul className="feature-list">
              <li className="feature-item">
                <svg className="check-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1385 6.61746V8.88018C10.1385 9.44468 9.9381 9.92735 9.53726 10.3282C9.13642 10.729 8.65376 10.9294 8.08926 10.9294H2.16917C1.60468 10.9294 1.12201 10.729 0.72117 10.3282C0.320331 9.92735 0.119911 9.44468 0.119911 8.88018V2.96009C0.119911 2.3956 0.320331 1.91293 0.72117 1.51209C1.12201 1.11125 1.60468 0.910833 2.16917 0.910833H8.08926C8.38811 0.910833 8.66561 0.970129 8.92177 1.08872C8.99293 1.12193 9.03562 1.17648 9.04985 1.25238C9.06408 1.33302 9.04274 1.4018 8.98581 1.45873L8.63715 1.80738C8.58972 1.85482 8.53516 1.87854 8.4735 1.87854C8.45927 1.87854 8.43792 1.8738 8.40946 1.86431C8.30035 1.83585 8.19362 1.82162 8.08926 1.82162H2.16917C1.85609 1.82162 1.58807 1.93309 1.36512 2.15604C1.14217 2.379 1.03069 2.64701 1.03069 2.96009V8.88018C1.03069 9.19326 1.14217 9.46128 1.36512 9.68423C1.58807 9.90718 1.85609 10.0187 2.16917 10.0187H8.08926C8.40234 10.0187 8.67036 9.90718 8.89331 9.68423C9.11626 9.46128 9.22774 9.19326 9.22774 8.88018V7.07285C9.22774 7.01118 9.24908 6.959 9.29178 6.91631L9.74717 6.46092C9.79461 6.41348 9.84916 6.38976 9.91082 6.38976C9.93929 6.38976 9.96775 6.39688 9.99621 6.41111C10.0911 6.44906 10.1385 6.51784 10.1385 6.61746ZM11.7822 3.13798L5.99019 8.92999C5.87634 9.04384 5.74115 9.10076 5.58461 9.10076C5.42807 9.10076 5.29287 9.04384 5.17902 8.92999L2.11936 5.87033C2.00552 5.75648 1.94859 5.62129 1.94859 5.46475C1.94859 5.30821 2.00552 5.17301 2.11936 5.05916L2.90207 4.27646C3.01592 4.16261 3.15111 4.10569 3.30765 4.10569C3.46419 4.10569 3.59938 4.16261 3.71323 4.27646L5.58461 6.1479L9.20695 2.52557C9.3208 2.41172 9.456 2.35481 9.61254 2.35481C9.76908 2.35481 9.90427 2.41172 10.0181 2.52557L10.8008 3.30828C10.9147 3.42213 10.9716 3.55732 10.9716 3.71386C10.9716 3.8704 10.9147 4.00559 10.8008 4.11944L11.7822 3.13798Z" fill="#0084c7"/>
                </svg>
                Best available discounts on the COMQUEST question bank of your choice
              </li>
              <li className="feature-item">
                <svg className="check-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1385 6.61746V8.88018C10.1385 9.44468 9.9381 9.92735 9.53726 10.3282C9.13642 10.729 8.65376 10.9294 8.08926 10.9294H2.16917C1.60468 10.9294 1.12201 10.729 0.72117 10.3282C0.320331 9.92735 0.119911 9.44468 0.119911 8.88018V2.96009C0.119911 2.3956 0.320331 1.91293 0.72117 1.51209C1.12201 1.11125 1.60468 0.910833 2.16917 0.910833H8.08926C8.38811 0.910833 8.66561 0.970129 8.92177 1.08872C8.99293 1.12193 9.03562 1.17648 9.04985 1.25238C9.06408 1.33302 9.04274 1.4018 8.98581 1.45873L8.63715 1.80738C8.58972 1.85482 8.53516 1.87854 8.4735 1.87854C8.45927 1.87854 8.43792 1.8738 8.40946 1.86431C8.30035 1.83585 8.19362 1.82162 8.08926 1.82162H2.16917C1.85609 1.82162 1.58807 1.93309 1.36512 2.15604C1.14217 2.379 1.03069 2.64701 1.03069 2.96009V8.88018C1.03069 9.19326 1.14217 9.46128 1.36512 9.68423C1.58807 9.90718 1.85609 10.0187 2.16917 10.0187H8.08926C8.40234 10.0187 8.67036 9.90718 8.89331 9.68423C9.11626 9.46128 9.22774 9.19326 9.22774 8.88018V7.07285C9.22774 7.01118 9.24908 6.959 9.29178 6.91631L9.74717 6.46092C9.79461 6.41348 9.84916 6.38976 9.91082 6.38976C9.93929 6.38976 9.96775 6.39688 9.99621 6.41111C10.0911 6.44906 10.1385 6.51784 10.1385 6.61746ZM11.7822 3.13798L5.99019 8.92999C5.87634 9.04384 5.74115 9.10076 5.58461 9.10076C5.42807 9.10076 5.29287 9.04384 5.17902 8.92999L2.11936 5.87033C2.00552 5.75648 1.94859 5.62129 1.94859 5.46475C1.94859 5.30821 2.00552 5.17301 2.11936 5.05916L2.90207 4.27646C3.01592 4.16261 3.15111 4.10569 3.30765 4.10569C3.46419 4.10569 3.59938 4.16261 3.71323 4.27646L5.58461 6.1479L9.20695 2.52557C9.3208 2.41172 9.456 2.35481 9.61254 2.35481C9.76908 2.35481 9.90427 2.41172 10.0181 2.52557L10.8008 3.30828C10.9147 3.42213 10.9716 3.55732 10.9716 3.71386C10.9716 3.8704 10.9147 4.00559 10.8008 4.11944L11.7822 3.13798Z" fill="#0084c7"/>
                </svg>
                Access to a dedicated point of contact at COMQUEST to support you
              </li>
              <li className="feature-item">
                <svg className="check-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1385 6.61746V8.88018C10.1385 9.44468 9.9381 9.92735 9.53726 10.3282C9.13642 10.729 8.65376 10.9294 8.08926 10.9294H2.16917C1.60468 10.9294 1.12201 10.729 0.72117 10.3282C0.320331 9.92735 0.119911 9.44468 0.119911 8.88018V2.96009C0.119911 2.3956 0.320331 1.91293 0.72117 1.51209C1.12201 1.11125 1.60468 0.910833 2.16917 0.910833H8.08926C8.38811 0.910833 8.66561 0.970129 8.92177 1.08872C8.99293 1.12193 9.03562 1.17648 9.04985 1.25238C9.06408 1.33302 9.04274 1.4018 8.98581 1.45873L8.63715 1.80738C8.58972 1.85482 8.53516 1.87854 8.4735 1.87854C8.45927 1.87854 8.43792 1.8738 8.40946 1.86431C8.30035 1.83585 8.19362 1.82162 8.08926 1.82162H2.16917C1.85609 1.82162 1.58807 1.93309 1.36512 2.15604C1.14217 2.379 1.03069 2.64701 1.03069 2.96009V8.88018C1.03069 9.19326 1.14217 9.46128 1.36512 9.68423C1.58807 9.90718 1.85609 10.0187 2.16917 10.0187H8.08926C8.40234 10.0187 8.67036 9.90718 8.89331 9.68423C9.11626 9.46128 9.22774 9.19326 9.22774 8.88018V7.07285C9.22774 7.01118 9.24908 6.959 9.29178 6.91631L9.74717 6.46092C9.79461 6.41348 9.84916 6.38976 9.91082 6.38976C9.93929 6.38976 9.96775 6.39688 9.99621 6.41111C10.0911 6.44906 10.1385 6.51784 10.1385 6.61746ZM11.7822 3.13798L5.99019 8.92999C5.87634 9.04384 5.74115 9.10076 5.58461 9.10076C5.42807 9.10076 5.29287 9.04384 5.17902 8.92999L2.11936 5.87033C2.00552 5.75648 1.94859 5.62129 1.94859 5.46475C1.94859 5.30821 2.00552 5.17301 2.11936 5.05916L2.90207 4.27646C3.01592 4.16261 3.15111 4.10569 3.30765 4.10569C3.46419 4.10569 3.59938 4.16261 3.71323 4.27646L5.58461 6.1479L9.20695 2.52557C9.3208 2.41172 9.456 2.35481 9.61254 2.35481C9.76908 2.35481 9.90427 2.41172 10.0181 2.52557L10.8008 3.30828C10.9147 3.42213 10.9716 3.55732 10.9716 3.71386C10.9716 3.8704 10.9147 4.00559 10.8008 4.11944L11.7822 3.13798Z" fill="#0084c7"/>
                </svg>
                Earn gift card rewards when students in your program purchase from your referral link
              </li>
            </ul>
          </section>

          <section className="audience-section">
            <h2 className="section-title">Why <strong>Your Class Will LOVE It!</strong></h2>
            <p className="audience-intro">With you as a COMQUEST Ambassador, your peers will get access to:</p>
            <ul className="feature-list">
              <li className="feature-item">
                <svg className="check-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1385 6.61746V8.88018C10.1385 9.44468 9.9381 9.92735 9.53726 10.3282C9.13642 10.729 8.65376 10.9294 8.08926 10.9294H2.16917C1.60468 10.9294 1.12201 10.729 0.72117 10.3282C0.320331 9.92735 0.119911 9.44468 0.119911 8.88018V2.96009C0.119911 2.3956 0.320331 1.91293 0.72117 1.51209C1.12201 1.11125 1.60468 0.910833 2.16917 0.910833H8.08926C8.38811 0.910833 8.66561 0.970129 8.92177 1.08872C8.99293 1.12193 9.03562 1.17648 9.04985 1.25238C9.06408 1.33302 9.04274 1.4018 8.98581 1.45873L8.63715 1.80738C8.58972 1.85482 8.53516 1.87854 8.4735 1.87854C8.45927 1.87854 8.43792 1.8738 8.40946 1.86431C8.30035 1.83585 8.19362 1.82162 8.08926 1.82162H2.16917C1.85609 1.82162 1.58807 1.93309 1.36512 2.15604C1.14217 2.379 1.03069 2.64701 1.03069 2.96009V8.88018C1.03069 9.19326 1.14217 9.46128 1.36512 9.68423C1.58807 9.90718 1.85609 10.0187 2.16917 10.0187H8.08926C8.40234 10.0187 8.67036 9.90718 8.89331 9.68423C9.11626 9.46128 9.22774 9.19326 9.22774 8.88018V7.07285C9.22774 7.01118 9.24908 6.959 9.29178 6.91631L9.74717 6.46092C9.79461 6.41348 9.84916 6.38976 9.91082 6.38976C9.93929 6.38976 9.96775 6.39688 9.99621 6.41111C10.0911 6.44906 10.1385 6.51784 10.1385 6.61746ZM11.7822 3.13798L5.99019 8.92999C5.87634 9.04384 5.74115 9.10076 5.58461 9.10076C5.42807 9.10076 5.29287 9.04384 5.17902 8.92999L2.11936 5.87033C2.00552 5.75648 1.94859 5.62129 1.94859 5.46475C1.94859 5.30821 2.00552 5.17301 2.11936 5.05916L2.90207 4.27646C3.01592 4.16261 3.15111 4.10569 3.30765 4.10569C3.46419 4.10569 3.59938 4.16261 3.71323 4.27646L5.58461 6.1479L9.20695 2.52557C9.3208 2.41172 9.456 2.35481 9.61254 2.35481C9.76908 2.35481 9.90427 2.41172 10.0181 2.52557L10.8008 3.30828C10.9147 3.42213 10.9716 3.55732 10.9716 3.71386C10.9716 3.8704 10.9147 4.00559 10.8008 4.11944L11.7822 3.13798Z" fill="#0084c7"/>
                </svg>
                Best available discounts offered once a quarter
              </li>
              <li className="feature-item">
                <svg className="check-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1385 6.61746V8.88018C10.1385 9.44468 9.9381 9.92735 9.53726 10.3282C9.13642 10.729 8.65376 10.9294 8.08926 10.9294H2.16917C1.60468 10.9294 1.12201 10.729 0.72117 10.3282C0.320331 9.92735 0.119911 9.44468 0.119911 8.88018V2.96009C0.119911 2.3956 0.320331 1.91293 0.72117 1.51209C1.12201 1.11125 1.60468 0.910833 2.16917 0.910833H8.08926C8.38811 0.910833 8.66561 0.970129 8.92177 1.08872C8.99293 1.12193 9.03562 1.17648 9.04985 1.25238C9.06408 1.33302 9.04274 1.4018 8.98581 1.45873L8.63715 1.80738C8.58972 1.85482 8.53516 1.87854 8.4735 1.87854C8.45927 1.87854 8.43792 1.8738 8.40946 1.86431C8.30035 1.83585 8.19362 1.82162 8.08926 1.82162H2.16917C1.85609 1.82162 1.58807 1.93309 1.36512 2.15604C1.14217 2.379 1.03069 2.64701 1.03069 2.96009V8.88018C1.03069 9.19326 1.14217 9.46128 1.36512 9.68423C1.58807 9.90718 1.85609 10.0187 2.16917 10.0187H8.08926C8.40234 10.0187 8.67036 9.90718 8.89331 9.68423C9.11626 9.46128 9.22774 9.19326 9.22774 8.88018V7.07285C9.22774 7.01118 9.24908 6.959 9.29178 6.91631L9.74717 6.46092C9.79461 6.41348 9.84916 6.38976 9.91082 6.38976C9.93929 6.38976 9.96775 6.39688 9.99621 6.41111C10.0911 6.44906 10.1385 6.51784 10.1385 6.61746ZM11.7822 3.13798L5.99019 8.92999C5.87634 9.04384 5.74115 9.10076 5.58461 9.10076C5.42807 9.10076 5.29287 9.04384 5.17902 8.92999L2.11936 5.87033C2.00552 5.75648 1.94859 5.62129 1.94859 5.46475C1.94859 5.30821 2.00552 5.17301 2.11936 5.05916L2.90207 4.27646C3.01592 4.16261 3.15111 4.10569 3.30765 4.10569C3.46419 4.10569 3.59938 4.16261 3.71323 4.27646L5.58461 6.1479L9.20695 2.52557C9.3208 2.41172 9.456 2.35481 9.61254 2.35481C9.76908 2.35481 9.90427 2.41172 10.0181 2.52557L10.8008 3.30828C10.9147 3.42213 10.9716 3.55732 10.9716 3.71386C10.9716 3.8704 10.9147 4.00559 10.8008 4.11944L11.7822 3.13798Z" fill="#0084c7"/>
                </svg>
                High-quality COMLEX and COMAT practice questions that students love!
              </li>
              <li className="feature-item">
                <svg className="check-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1385 6.61746V8.88018C10.1385 9.44468 9.9381 9.92735 9.53726 10.3282C9.13642 10.729 8.65376 10.9294 8.08926 10.9294H2.16917C1.60468 10.9294 1.12201 10.729 0.72117 10.3282C0.320331 9.92735 0.119911 9.44468 0.119911 8.88018V2.96009C0.119911 2.3956 0.320331 1.91293 0.72117 1.51209C1.12201 1.11125 1.60468 0.910833 2.16917 0.910833H8.08926C8.38811 0.910833 8.66561 0.970129 8.92177 1.08872C8.99293 1.12193 9.03562 1.17648 9.04985 1.25238C9.06408 1.33302 9.04274 1.4018 8.98581 1.45873L8.63715 1.80738C8.58972 1.85482 8.53516 1.87854 8.4735 1.87854C8.45927 1.87854 8.43792 1.8738 8.40946 1.86431C8.30035 1.83585 8.19362 1.82162 8.08926 1.82162H2.16917C1.85609 1.82162 1.58807 1.93309 1.36512 2.15604C1.14217 2.379 1.03069 2.64701 1.03069 2.96009V8.88018C1.03069 9.19326 1.14217 9.46128 1.36512 9.68423C1.58807 9.90718 1.85609 10.0187 2.16917 10.0187H8.08926C8.40234 10.0187 8.67036 9.90718 8.89331 9.68423C9.11626 9.46128 9.22774 9.19326 9.22774 8.88018V7.07285C9.22774 7.01118 9.24908 6.959 9.29178 6.91631L9.74717 6.46092C9.79461 6.41348 9.84916 6.38976 9.91082 6.38976C9.93929 6.38976 9.96775 6.39688 9.99621 6.41111C10.0911 6.44906 10.1385 6.51784 10.1385 6.61746ZM11.7822 3.13798L5.99019 8.92999C5.87634 9.04384 5.74115 9.10076 5.58461 9.10076C5.42807 9.10076 5.29287 9.04384 5.17902 8.92999L2.11936 5.87033C2.00552 5.75648 1.94859 5.62129 1.94859 5.46475C1.94859 5.30821 2.00552 5.17301 2.11936 5.05916L2.90207 4.27646C3.01592 4.16261 3.15111 4.10569 3.30765 4.10569C3.46419 4.10569 3.59938 4.16261 3.71323 4.27646L5.58461 6.1479L9.20695 2.52557C9.3208 2.41172 9.456 2.35481 9.61254 2.35481C9.76908 2.35481 9.90427 2.41172 10.0181 2.52557L10.8008 3.30828C10.9147 3.42213 10.9716 3.55732 10.9716 3.71386C10.9716 3.8704 10.9147 4.00559 10.8008 4.11944L11.7822 3.13798Z" fill="#0084c7"/>
                </svg>
                And so much more!
              </li>
            </ul>
          </section>

          <section className="process-section">
            <h2 className="section-title"><strong>How</strong> It Works:</h2>
            <ol className="process-list">
              <li>Fill out our online Campus Ambassador application</li>
              <li>We will review your application and get in touch with you within 2 business days with the next steps</li>
              <li>We'll work with you to determine the best time to schedule quarterly promotions to share with your classmates</li>
              <li>You'll be able to track referral progress in real-time so that you can keep track of the rewards</li>
            </ol>
          </section>

          <section className="form-section">
            <h2 className="form-title">Campus <strong>Ambassador Application</strong></h2>
            <form className="application-form">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="* First Name" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="* Last Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="* School e-mail address" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="* School Name" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="* Number of students in your class" required />
              </div>
              <div className="form-group">
                <select className="form-select" required>
                  <option value="">--- * Graduation Year ---</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-select" required>
                  <option value="">--- * Have you studied with COMQUEST before? ---</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="List any organizations/class positions you hold (if any)" />
              </div>
              <div className="form-group">
                <label className="form-label">* How do you plan to promote COMQUEST to your classmates?</label>
                <div className="checkbox-grid">
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-input" />
                    <span>Class Email</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-input" />
                    <span>Class Facebook Group</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-input" />
                    <span>Word of Mouth</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-input" />
                    <span>Other</span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <textarea className="form-textarea" placeholder="* Why would you be a good Campus Ambassador?" required></textarea>
              </div>
              <div className="form-group">
                <div className="recaptcha-placeholder">
                  <div className="recaptcha-checkbox">
                    <div className="checkbox-box"></div>
                  </div>
                  <span className="recaptcha-text">I'm not a robot</span>
                  <div className="recaptcha-logo">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/86d75e67830dfedb552cb8197c294fa086d00f1a?width=64" alt="reCAPTCHA" />
                  </div>
                </div>
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </section>

          <hr className="divider"/>
        </article>
      </main>
    </div>
  );
}
