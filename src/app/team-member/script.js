// Team Member Profile Page Script
(function() {
  'use strict';

  // Initialize smooth scrolling for anchor links
  const initSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  };

  // Add animation class when elements come into view
  const initIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe profile cards and info cards
    document.querySelectorAll('.info-card, .profile-section').forEach(el => {
      observer.observe(el);
    });
  };

  // Handle active navigation link
  const initActiveNav = () => {
    const navLinks = document.querySelectorAll('.nav-link:not(.subscribe-link)');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  };

  // Scroll to top functionality
  const initScrollToTop = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  // Initialize all functions when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initSmoothScroll();
      initIntersectionObserver();
      initActiveNav();
      initScrollToTop();
    });
  } else {
    initSmoothScroll();
    initIntersectionObserver();
    initActiveNav();
    initScrollToTop();
  }
})();
