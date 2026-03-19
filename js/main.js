// Church Tech Insider - Main JavaScript
// Handles modal, sticky CTA, email capture, and conversion optimization

(function() {
    'use strict';
    
    // ===================================
    // Email Modal Management
    // ===================================
    
    const modal = document.getElementById('emailModal');
    const modalClose = document.querySelector('.modal-close');
    const emailForm = document.getElementById('emailForm');
    
    // Show modal after 30 seconds or on exit intent
    let modalShown = false;
    const MODAL_DELAY = 30000; // 30 seconds
    
    function showModal() {
        if (modalShown || localStorage.getItem('emailCaptured')) return;
        modal.classList.add('active');
        modalShown = true;
    }
    
    // Time-based trigger
    setTimeout(showModal, MODAL_DELAY);
    
    // Exit intent trigger (mouse leaves viewport at top)
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 10) {
            showModal();
        }
    });
    
    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Handle email form submission
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = emailForm.querySelector('input[type="email"]').value;
            
            // Store that email was captured
            localStorage.setItem('emailCaptured', 'true');
            localStorage.setItem('userEmail', email);
            
            // Here you would integrate with your email service (Mailchimp, ConvertKit, etc.)
            console.log('Email captured:', email);
            
            // Show success message
            const modalContent = document.querySelector('.modal-content');
            modalContent.innerHTML = `
                <h2 style="color: #059669;">✓ You're In!</h2>
                <p>Check your inbox for your free church tech guides. We'll send you weekly gear reviews and tips.</p>
                <button onclick="document.getElementById('emailModal').classList.remove('active')" class="btn btn-primary" style="margin-top: 20px;">Close</button>
            `;
        });
    }
    
    // Newsletter form (footer)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            localStorage.setItem('emailCaptured', 'true');
            localStorage.setItem('userEmail', email);
            
            console.log('Newsletter signup:', email);
            
            // Show inline success
            newsletterForm.innerHTML = `
                <p style="color: white; font-weight: 600; font-size: 1.1rem;">✓ Success! Check your email to confirm.</p>
            `;
        });
    }
    
    // ===================================
    // Sticky CTA Bar
    // ===================================
    
    const stickyCTA = document.getElementById('stickyCTA');
    let lastScrollTop = 0;
    let scrollThreshold = 500;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show sticky CTA after scrolling down 500px
        if (scrollTop > scrollThreshold) {
            stickyCTA.classList.remove('hidden');
        } else {
            stickyCTA.classList.add('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
    
    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===================================
    // Track Link Clicks (for affiliate analytics)
    // ===================================
    
    document.querySelectorAll('a[href*="amazon.com"], a[href*="sweetwater.com"], a[href*="bhphotovideo.com"]').forEach(link => {
        link.addEventListener('click', function() {
            const destination = this.href;
            console.log('Affiliate click tracked:', destination);
            
            // Here you would send to Google Analytics or your analytics platform
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Affiliate Link',
                    'event_label': destination
                });
            }
        });
    });
    
    // ===================================
    // Lazy Load Images
    // ===================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(function(img) {
            imageObserver.observe(img);
        });
    }
    
    // ===================================
    // Add Reading Time Estimator
    // ===================================
    
    function estimateReadingTime(text) {
        const wordsPerMinute = 200;
        const wordCount = text.trim().split(/\s+/).length;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        return minutes;
    }
    
    // Update read time on article pages
    const articleContent = document.querySelector('.article-body');
    const readTimeElement = document.querySelector('.read-time');
    
    if (articleContent && readTimeElement) {
        const readTime = estimateReadingTime(articleContent.textContent);
        readTimeElement.textContent = `${readTime} min read`;
    }
    
})();
