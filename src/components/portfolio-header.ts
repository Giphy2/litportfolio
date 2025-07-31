import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'

/**
 * Portfolio Header Component
 *
 * Features a sticky top navigation with responsive mobile burger menu.
 * scrolling links to internal sections of the page.
  * Styling: Custom gradient background with centered links and hover effects
 */
@customElement('portfolio-header')
export class PortfolioHeader extends LitElement {
  // Reactive state for mobile menu toggle
  @state()
  private isMenuOpen = false

  static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .navbar {
      padding: 1rem 0;
    }

    .navbar-brand .navbar-item {
      font-weight: 700;
      font-size: 1.75rem;
      color: #fff;
    }

    .navbar-brand .navbar-item:hover {
      color: #ffd700;
    }

    .navbar-burger span {
      background-color: white;
    }

    .navbar-menu {
      background-color: transparent;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .navbar-end {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex: 1;
    }

    .navbar-item {
      color: #f0f0f0;
      font-weight: 500;
      transition: background 0.3s, color 0.3s;
    }

    .navbar-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }
  `

  // Toggle mobile menu state
  private toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  // Scroll smoothly to a specific section ID
  private scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    this.isMenuOpen = false
  }

  render() {
    return html`
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
          
            <!-- Mobile Burger Toggle -->
            <a
              role="button"
              class="navbar-burger ${this.isMenuOpen ? 'is-active' : ''}"
              aria-label="menu"
              aria-expanded="${this.isMenuOpen}"
              @click=${this.toggleMenu}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <!-- Navigation Links -->
          <div class="navbar-menu ${this.isMenuOpen ? 'is-active' : ''}">
            <div class="navbar-end">
              <a class="navbar-item" @click=${() => this.scrollToSection('hero')}>Home</a>
              <a class="navbar-item" @click=${() => this.scrollToSection('services')}>Services</a>
              <a class="navbar-item" @click=${() => this.scrollToSection('projects')}>Projects</a>
              <a class="navbar-item" @click=${() => this.scrollToSection('contact')}>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    `
  }
}
