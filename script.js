// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Prevent horizontal scroll on mobile
function preventHorizontalScroll() {
    // Check for horizontal overflow
    if (document.body.scrollWidth > window.innerWidth) {
        console.warn('Horizontal overflow detected');
        
        // Find elements that might be causing overflow
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
            if (el.scrollWidth > el.clientWidth && el.clientWidth > 0) {
                el.style.maxWidth = '100%';
                el.style.overflowX = 'hidden';
            }
        });
    }
}

// Add touch-friendly improvements
function improveTouchExperience() {
    // Add touch feedback to buttons
    document.querySelectorAll('.btn, .nav-link, .card').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Improve scrolling on iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.body.style.webkitOverflowScrolling = 'touch';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 217, 255, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 217, 255, 0.1)';
    }
});

// Animate elements on scroll
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe cards and sections
    document.querySelectorAll('.gpt-card, .practice-card, .step, .service').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Contact Form Handling - REMOVED
// Contact form has been replaced with Calendly and direct email options
// No JavaScript needed for the new contact setup

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.type === 'submit') {
            // Add loading state for form submission
            const originalText = this.textContent;
            this.textContent = 'Sending...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Copy prompt functionality
function copyPrompt() {
    const promptText = document.querySelector('.prompt-text').textContent;
    navigator.clipboard.writeText(promptText).then(() => {
        showNotification('Meta-prompt copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy prompt', 'error');
    });
}

// Copy GPT template functionality
function copyGPTTemplate() {
    const templateTextarea = document.getElementById('gptTemplateText');
    if (templateTextarea) {
        // Get the current value from the textarea (which may have been edited by the user)
        const templateText = templateTextarea.value.trim();
        
        // Use the more robust clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(templateText).then(() => {
                showNotification('GPT Prompt Booster copied to clipboard!', 'success');
            }).catch((err) => {
                console.error('Failed to copy prompt booster:', err);
                fallbackCopyMethod(templateText);
            });
        } else {
            fallbackCopyMethod(templateText);
        }
    } else {
        showNotification('Prompt template not found', 'error');
        console.error('Could not find GPT template textarea');
    }
}

// Fallback copy method for older browsers
function fallbackCopyMethod(text) {
    try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
            showNotification('GPT Prompt Booster copied to clipboard!', 'success');
        } else {
            showNotification('Failed to copy prompt booster', 'error');
        }
    } catch (err) {
        console.error('Fallback copy failed:', err);
        showNotification('Failed to copy prompt booster', 'error');
    }
}

// Reset GPT template to original state
function resetGPTTemplate() {
    const templateTextarea = document.getElementById('gptTemplateText');
    if (templateTextarea) {
        const originalTemplate = `Please create optimized instructions for a custom GPT based on the following specifications. Return the instructions in strict markdown format with proper headers, bullet points, and formatting that I can copy directly into the GPT builder.

## GPT Specifications:

**Purpose & Goal:**
- This GPT is designed to help with: [e.g., "creating differentiated math worksheets for 4th grade students"]
- Primary output should be: [e.g., "printable worksheets with answer keys"]
- Key functionality needed: [e.g., "adjust difficulty levels, include visual aids, align to Common Core standards"]

**Target Users:**
- Primary users: [e.g., "elementary school teachers, homeschool parents"]
- User skill level: [e.g., "beginner to intermediate with technology"]
- Main challenges users face: [e.g., "not enough time to create materials, need multiple difficulty levels"]

**Communication Style:**
- Tone: [e.g., "encouraging and supportive"]
- Personality: [e.g., "like a helpful teaching mentor"]
- Language level: [e.g., "clear and jargon-free"]
- Avoid: [e.g., "complex educational theory, overwhelming choices"]

**Response Format:**
- Structure responses as: [e.g., "numbered steps with brief explanations"]
- Include: [e.g., "examples, implementation tips, time estimates"]
- Length: [e.g., "concise but comprehensive, under 300 words unless requested"]
- Special formatting: [e.g., "use tables for comparing options"]

**Knowledge & References:**
- Key standards/frameworks: [e.g., "Common Core Math Standards, Bloom's Taxonomy"]
- Preferred methodologies: [e.g., "hands-on learning, visual representations"]
- Resources to reference: [e.g., "research-based teaching strategies"]

**Important Restrictions:**
- Never do: [e.g., "provide direct homework answers to students"]
- Always avoid: [e.g., "suggesting expensive materials or complex technology"]
- Privacy considerations: [e.g., "don't request student personal information"]
- Safety guidelines: [e.g., "ensure age-appropriate content only"]

**Special Instructions:**
- Always ask clarifying questions when: [e.g., "grade level or topic isn't specified"]
- Provide multiple options when: [e.g., "creating lesson activities"]
- Include these elements: [e.g., "time estimates, material lists, differentiation tips"]
- End responses with: [e.g., "asking if the user needs modifications or has questions"]

Please transform this into professional GPT instructions with clear sections, proper markdown formatting, and actionable directives that will make this GPT highly effective for educators.`;
        
        templateTextarea.value = originalTemplate;
        showNotification('GPT template reset to original!', 'success');
    }
}

// Add interactive animations to stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const text = stat.textContent;
        if (text === '$0') {
            stat.style.animation = 'price-flash 2s ease-in-out infinite';
        } else if (text === '100%') {
            stat.style.animation = 'percentage-grow 2s ease-in-out infinite';
        } else if (text === '∞') {
            stat.style.animation = 'infinity-rotate 3s linear infinite';
        }
    });
}

// Add hover effects to neural nodes
function initializeNeuralNetwork() {
    const nodes = document.querySelectorAll('.neural-node');
    nodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            nodes.forEach(n => n.style.animationPlayState = 'paused');
            node.style.transform = 'scale(1.5)';
            node.style.boxShadow = `0 0 30px var(--primary-accent)`;
        });
        
        node.addEventListener('mouseleave', () => {
            nodes.forEach(n => n.style.animationPlayState = 'running');
            node.style.transform = 'scale(1)';
            node.style.boxShadow = `0 0 20px var(--primary-accent)`;
        });
    });
}

// Add interactive card effects
function initializeCardEffects() {
    const cards = document.querySelectorAll('.gpt-card, .revelation-card, .technique-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add typing effect to hero title
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typingSpeed = 50;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Add cursor blink effect
                const cursor = document.createElement('span');
                cursor.textContent = '|';
                cursor.style.animation = 'blink 1s infinite';
                heroTitle.appendChild(cursor);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }
}

// Add price comparison animation
function initializePriceComparison() {
    const priceItems = document.querySelectorAll('.price-item');
    priceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (item.classList.contains('expensive')) {
                item.style.transform = 'scale(1.1) rotate(-2deg)';
            } else {
                item.style.transform = 'scale(1.1) rotate(2deg)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    observeElements();
    
    // Add loading animation to the page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize mobile optimizations
    preventHorizontalScroll();
    improveTouchExperience();
    
    // Check for horizontal overflow on resize
    window.addEventListener('resize', () => {
        setTimeout(preventHorizontalScroll, 100);
    });
    
    // Initialize new features
    animateStats();
    initializeNeuralNetwork();
    initializeCardEffects();
    initializePriceComparison();
    
    // Add typing effect after a delay
    setTimeout(initializeTypingEffect, 1000);
});

// Add function to check if search functionality exists before calling it
function addSearchFunctionality() {
    // This function is referenced but not defined in the original code
    // Adding a placeholder to prevent errors
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            // Add search functionality here if needed
            console.log('Search term:', e.target.value);
        });
    }
}

// Add CSS classes for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .notification {
        animation: slideInRight 0.3s ease;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
    
    @keyframes price-flash {
        0%, 100% { color: var(--success-color); }
        50% { color: var(--primary-accent); }
    }
    
    @keyframes percentage-grow {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    @keyframes infinity-rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .hero-badge {
        animation: badge-pulse 3s ease-in-out infinite;
    }
    
    @keyframes badge-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;

document.head.appendChild(style);
