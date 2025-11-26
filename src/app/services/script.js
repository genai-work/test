/**
 * Services Page - JavaScript Utilities
 * Handles interactive elements and animations
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeServiceCards();
  initializeSmoothScroll();
});

/**
 * Initialize service card hover animations
 */
function initializeServiceCards() {
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

/**
 * Smooth scroll for anchor links
 */
function initializeSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Mobile menu toggle (if implemented)
 */
function toggleMobileMenu() {
  const nav = document.querySelector('.header-nav');
  if (nav) {
    nav.classList.toggle('active');
  }
}

/**
 * Utility function to add event listeners with delegation
 */
function delegateListener(parentSelector, childSelector, eventType, callback) {
  const parent = document.querySelector(parentSelector);
  
  if (!parent) return;
  
  parent.addEventListener(eventType, function(event) {
    const child = event.target.closest(childSelector);
    if (child) {
      callback.call(child, event);
    }
  });
}
