// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Interactive elements for read-more buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const postTitle = this.closest('.post').querySelector('.post-title').textContent;
            alert(`This is a demo. The full article "${postTitle}" would be displayed here.`);
        });
    });
    
    // Shop now button functionality
    const shopNowButton = document.querySelector('.shop-now');
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('This is a demo. You would be redirected to the product page.');
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const submitButton = newsletterForm.querySelector('button');
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            if(emailInput.value && emailInput.value.includes('@')) {
                alert('Thank you for subscribing to ARK Fashion Hub newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
        
        // Allow form submission with Enter key
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                submitButton.click();
            }
        });
    }
    
    // Add hover effect to category links
    document.querySelectorAll('.categories-list a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#c19a6b';
        });
        
        link.addEventListener('mouseleave', function() {
            if(!this.classList.contains('active')) {
                this.style.color = '#555';
            }
        });
    });
    
    // Navigation active state management
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});