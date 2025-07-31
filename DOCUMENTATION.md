Portfolio Documentation

Components

 1. <portfolio-header>
Purpose : Responsive navigation header with mobile menu support

Props: None (self-contained)

Features:
Sticky positioning
Mobile hamburger menu
Smooth scroll navigation
Brand/logo display

Usage:
```html
<portfolio-header></portfolio-header>
```

Customization:
Modify brand name in `render()` method
Update navigation links in navbar-menu section
Adjust styling via CSS custom properties

2. `<portfolio-hero>`
Purpose: Main hero section with animated introduction
Props: None (contains static content)

Features:
 Gradient background
 Animated text entrance
 Call-to-action buttons
- Responsive typography

Usage:
```html
<portfolio-hero></portfolio-hero>
```

Customization:
- Update name, tagline, and description in template
- Modify gradient colors in CSS
- Adjust animation timing and effects

---

### 3. `<project-card>`
Purpose: Reusable component for displaying project information

Props:
- `title: string` - Project title
- `image: string` - Project image URL
- `description: string` - Project description  
- `link: string` - Project/repository URL

Features:
- Hover animations
- Responsive images
- Consistent card layout
- External link handling

Usage:
```html
<project-card
  title="My Project"
  image="https://example.com/image.jpg"
  description="Project description here"
  link="https://github.com/user/repo"
></project-card>
```

Customization:
- Modify hover effects in CSS
- Update button styling
- Adjust card dimensions

---

### 4. `<contact-form>`
Purpose: Interactive contact form with validation

Props: None (self-contained form logic)

Features:
- Client-side validation
- Loading states
- Error handling
- Responsive design
- Form submission simulation

Usage:
```html
<contact-form></contact-form>
```

Customization:
- Update form fields in template
- Modify validation rules in `validateForm()`
- Integrate with real backend service
- Customize error messages

## Project Structure

```
developer-portfolio/
├── public/                     # Static assets
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/            # Lit web components
│   │   ├── portfolio-header.ts
│   │   ├── portfolio-hero.ts
│   │   ├── project-card.ts
│   │   └── contact-form.ts
│   ├── main.ts               # Application entry point
│   └── style.css             # Global styles
├── index.html                # Main HTML template
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies
├── README.md                 # Setup and deployment guide
└── DOCUMENTATION.md          # This file
```

File Responsibilities

Configuration Files:
- `vite.config.ts`: Vite build configuration for Lit
- `tsconfig.json`: TypeScript compiler settings
- `package.json`: Dependencies and npm scripts

Source Files:
- `src/main.ts`: Imports Bulma CSS and registers all components
- `src/style.css`: Global CSS variables, animations, utilities
- `src/components/.ts`: Individual Lit web components

Template Files:
- `index.html`: Main HTML structure with component usage

## 🎨 Styling Architecture

### Design System
The portfolio uses a layered styling approach:

1. Bulma CSS Framework: Base responsive design system
2. CSS Custom Properties: Design tokens for consistent theming
3. Component Styles: Encapsulated styles within Lit components
4. Global Utilities: Shared animations and utility classes

### CSS Custom Properties
```css
:root {
  --primary-color: #3273dc;    / Primary brand color /
  --secondary-color: #363636;  / Text and accents /
  --accent-color: #00d1b2;     / Highlight color /
  --text-color: #4a4a4a;       / Body text /
  --light-bg: #fafafa;         / Light backgrounds /
}
```

### Bulma Integration
- Grid System: Responsive columns and layout
- Typography: Consistent font sizes and spacing
- Form Components: Styled inputs, buttons, validation states
- Utility Classes: Spacing, colors, responsive helpers

### Component Styling Strategy
Each component uses Lit's `static styles` for:
- Encapsulation: Styles don't leak between components
- Performance: Styles are optimized and cached
- Maintainability: Component-specific styling is co-located

### Animation System
- CSS Keyframes: Fade-in animations for content entrance
- Transitions: Smooth hover and interaction effects
- Transform Effects: Lift and scale animations for engagement

## 🚀 Extension Guide

### Adding New Sections

1. Create New Component:
   ```typescript
   // src/components/new-section.ts
   import { LitElement, html, css } from 'lit'
   import { customElement } from 'lit/decorators.js'

   @customElement('new-section')
   export class NewSection extends LitElement {
     static styles = css`
       :host {
         display: block;
         padding: 2rem 0;
       }
     `

     render() {
       return html`
         <section class="section">
           <div class="container">
             <!-- Your content here -->
           </div>
         </section>
       `
     }
   }
   ```

2. Register Component:
   ```typescript
   // src/main.ts
   import './components/new-section'
   ```

3. Use in Template:
   ```html
   <!-- index.html -->
   <new-section></new-section>
   ```

### Adding New Project Cards

Simply add more `<project-card>` elements to the projects section:

```html
<div class="column is-4">
  <project-card
    title="New Project"
    image="https://images.pexels.com/photos/..."
    description="Description of your new project"
    link="https://github.com/username/project"
  ></project-card>
</div>
```

### Implementing Theme Switching

1. Add Theme Toggle Component:
   ```typescript
   @customElement('theme-toggle')
   export class ThemeToggle extends LitElement {
     @state()
     private isDark = false

     private toggleTheme() {
       this.isDark = !this.isDark
       document.documentElement.setAttribute(
         'data-theme', 
         this.isDark ? 'dark' : 'light'
       )
     }

     render() {
       return html`
         <button @click=${this.toggleTheme}>
           ${this.isDark ? '☀️' : '🌙'}
         </button>
       `
     }
   }
   ```

2. Add Dark Theme Variables:
   ```css
   [data-theme="dark"] {
     --primary-color: #4dabf7;
     --secondary-color: #ffffff;
     --text-color: #e9ecef;
     --light-bg: #212529;
   }
   ```

### Customizing Animations

Modify Existing Animations:
```css
/ Adjust timing and easing /
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px); / Increase distance /
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/ Apply to elements /
.custom-animation {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
```

Add New Animation Types:
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### Integrating Backend Services

Contact Form Integration:
```typescript
// In contact-form.ts handleSubmit method
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.formData)
  })
  
  if (response.ok) {
    // Success handling
  }
} catch (error) {
  // Error handling
}
```

Dynamic Project Loading:
```typescript
@customElement('projects-section')
export class ProjectsSection extends LitElement {
  @state()
  private projects: Project[] = []

  async connectedCallback() {
    super.connectedCallback()
    this.projects = await this.loadProjects()
  }

  private async loadProjects(): Promise<Project[]> {
    const response = await fetch('/api/projects')
    return response.json()
  }

  render() {
    return html`
      <div class="columns is-multiline">
        ${this.projects.map(project => html`
          <div class="column is-4">
            <project-card
              title=${project.title}
              image=${project.image}
              description=${project.description}
              link=${project.link}
            ></project-card>
          </div>
        `)}
      </div>
    `
  }
}
```

### Performance Optimization

Lazy Loading Components:
```typescript
// Dynamic imports for code splitting
const lazyLoadComponent = async (componentName: string) => {
  await import(`./components/${componentName}.js`)
}

// Use intersection observer for loading
const observer = new IntersectionObserver(async (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      await lazyLoadComponent('heavy-component')
      observer.unobserve(entry.target)
    }
  }
})
```

Image Optimization:
```html
<!-- Use responsive images -->
<img 
  src="image-800w.jpg"
  srcset="image-400w.jpg 400w, image-800w.jpg 800w, image-1200w.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  alt="Project screenshot"
/>
```

## 🔧 Development Tips

### Debugging Components
```typescript
// Add to component for debugging
connectedCallback() {
  super.connectedCallback()
  console.log(`${this.tagName} connected:`, this)
}

updated(changedProperties: Map<string, unknown>) {
  console.log(`${this.tagName} updated:`, changedProperties)
}
```

### Testing Components
```typescript
// Example test setup (using @web/test-runner)
import { expect, fixture, html } from '@open-wc/testing'
import './project-card.js'

describe('ProjectCard', () => {
  it('renders with correct title', async () => {
    const el = await fixture(html`
      <project-card title="Test Project"></project-card>
    `)
    
    const title = el.shadowRoot?.querySelector('.title')
    expect(title?.textContent).to.equal('Test Project')
  })
})
```

### Browser Compatibility
- Web Components: Modern browsers (Chrome 54+, Firefox 63+, Safari 10.1+)
- CSS Custom Properties: Modern browsers
- ES Modules: Modern browsers
- Polyfills: Consider using @webcomponents/webcomponentsjs for older browsers

This documentation provides a comprehensive guide for understanding, customizing, and extending your developer portfolio. The modular architecture makes it easy to add new features while maintaining clean, maintainable code.
