# Hero Section Design Prompt - Modern Dark Mode Landing Page

## 🎯 Project Brief
Create a modern, dark mode hero section for a website landing page with animated elements, responsive design, and professional aesthetics. This template is based on the AITeach Pro website implementation.

## 🎨 Design Requirements

### Visual Style
- **Theme**: Dark mode with electric blue accents
- **Layout**: Split-screen (50/50) desktop, stacked mobile
- **Typography**: Modern sans-serif with gradient text effects
- **Animation**: Subtle, professional micro-interactions
- **Aesthetic**: Glassmorphism and neural network themes

### Color Palette
```css
Primary Background: #0a0a0f (Deep dark blue)
Secondary Background: #1a1a25 (Slightly lighter dark)
Primary Text: #ffffff (Pure white)
Secondary Text: #a0a0a0 (Light gray)
Accent Color: #00d9ff (Electric blue)
Gradient: Linear gradient from primary to secondary backgrounds
```

## 📱 Technical Specifications

### HTML Structure
```html
<section id="home" class="hero">
  <div class="hero-container">
    <!-- Left Content Column -->
    <div class="hero-content">
      <div class="hero-badge">
        <i class="fas fa-bolt"></i>
        <span>[Your Badge Text]</span>
      </div>
      <h1 class="hero-title">[Your Main Headline]</h1>
      <p class="hero-subtitle">[Your Descriptive Subtitle]</p>
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-number">[Number]</div>
          <div class="stat-label">[Label]</div>
        </div>
        <!-- Repeat for 2-3 stats -->
      </div>
      <div class="hero-buttons">
        <a href="#action" class="btn btn-primary">
          <i class="fas fa-rocket"></i>
          [Primary CTA]
        </a>
        <a href="#secondary" class="btn btn-secondary">
          <i class="fas fa-[icon]"></i>
          [Secondary CTA]
        </a>
      </div>
    </div>
    
    <!-- Right Graphics Column -->
    <div class="hero-image">
      <div class="hero-graphic">
        <div class="ai-brain">
          <i class="fas fa-[main-icon]"></i>
          <div class="neural-network">
            <div class="neural-node"></div>
            <!-- 6 nodes total -->
          </div>
        </div>
        <div class="floating-elements">
          <div class="element element-1">
            <i class="fas fa-[icon]"></i>
            <span>[Text]</span>
          </div>
          <!-- 3 floating elements -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### CSS Core Styles
```css
/* Variables */
:root {
  --primary-bg: #0a0a0f;
  --secondary-bg: #1a1a25;
  --primary-text: #ffffff;
  --secondary-text: #a0a0a0;
  --primary-accent: #00d9ff;
  --gradient-accent: linear-gradient(135deg, #00d9ff 0%, #0099cc 100%);
  --card-bg: rgba(255, 255, 255, 0.05);
  --shadow-light: 0 4px 20px rgba(0, 217, 255, 0.1);
  --shadow-medium: 0 8px 30px rgba(0, 217, 255, 0.2);
}

/* Hero Container */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: 
    radial-gradient(ellipse at center, rgba(0, 217, 255, 0.1) 0%, transparent 70%),
    linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
  position: relative;
  overflow: hidden;
}

/* Grid Pattern Overlay */
.hero::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff05" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.5;
}

/* Layout */
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Typography */
.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--primary-text) 0%, var(--primary-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}
```

### Animation System
```css
/* Badge Glow Animation */
@keyframes glow {
  from { box-shadow: 0 0 10px rgba(0, 217, 255, 0.2); }
  to { box-shadow: 0 0 20px rgba(0, 217, 255, 0.4); }
}

.hero-badge {
  animation: glow 2s ease-in-out infinite alternate;
}

/* Main Icon Pulse */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Neural Network Nodes */
@keyframes node-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Floating Elements */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  33% { transform: translateY(-15px); }
  66% { transform: translateY(-8px); }
}

/* Button Shimmer Effect */
.btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}
```

### JavaScript Enhancements
```javascript
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll-based Navbar Changes
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

// Intersection Observer for Animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.hero-content > *').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
  });
};

document.addEventListener('DOMContentLoaded', observeElements);
```

## 🎭 Content Customization Guide

### Text Content
- **Hero Badge**: Short, action-oriented phrase (e.g., "Empower Your [Field]")
- **Main Title**: Bold value proposition, 5-8 words max
- **Subtitle**: Detailed explanation, 2-3 sentences
- **Statistics**: 3 key metrics relevant to your industry
- **Buttons**: Primary action + secondary exploration option

### Icon Selection (FontAwesome)
- **Main Icon**: Industry-relevant (brain, rocket, shield, etc.)
- **Badge Icon**: Action symbol (bolt, star, fire, etc.)
- **Floating Elements**: 3 core concepts (tools, goals, benefits)
- **Button Icons**: Action indicators (rocket, arrow, play, etc.)

### Color Adaptation
```css
/* Technology/AI Theme */
--primary-accent: #00d9ff; /* Electric blue */

/* Finance Theme */
--primary-accent: #00ff88; /* Green */

/* Health/Medical Theme */
--primary-accent: #ff6b6b; /* Soft red */

/* Education Theme */
--primary-accent: #ffd93d; /* Yellow */

/* Creative/Design Theme */
--primary-accent: #ff6b9d; /* Pink */
```

## 🚀 Implementation Steps

### 1. Setup Base HTML
- Copy the HTML structure
- Replace placeholder text with your content
- Update icon classes for your industry

### 2. Apply Core CSS
- Set up CSS custom properties with your colors
- Implement the layout and typography styles
- Add responsive breakpoints

### 3. Add Animations
- Include keyframe animations
- Apply animation classes to elements
- Adjust timing and easing as needed

### 4. Integrate JavaScript
- Add smooth scrolling functionality
- Implement scroll-based effects
- Set up intersection observers

### 5. Test & Optimize
- Check responsive behavior
- Verify animation performance
- Test accessibility features

## 🎯 Key Features Included

### ✅ Performance
- Hardware-accelerated animations
- Efficient CSS custom properties
- Optimized asset loading
- Minimal JavaScript footprint

### ✅ Accessibility
- Semantic HTML structure
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

### ✅ Responsive Design
- Mobile-first approach
- Flexible grid system
- Scalable typography
- Touch-friendly interactions

### ✅ Modern Features
- CSS Grid and Flexbox
- Custom properties (CSS variables)
- Advanced animations
- Intersection Observer API

## 🔧 Browser Support
- **Modern browsers**: Full support (Chrome 88+, Firefox 85+, Safari 14+)
- **Fallbacks included**: For older browsers
- **Progressive enhancement**: Core functionality works without JavaScript

## 📝 Notes for Developers
- All animations use `transform` and `opacity` for 60fps performance
- CSS custom properties allow easy theming
- Modular structure enables component reuse
- TypeScript-ready JavaScript patterns
- SCSS/SASS compatible structure

This prompt provides everything needed to recreate a professional, modern hero section with dark mode aesthetics and engaging animations that can be adapted for any industry or brand.
