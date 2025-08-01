import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * Portfolio Footer Component
 * 
 * Footer section with social media links, copyright, and additional navigation.
 * Features icon-based social media links and responsive design.
 * 
 * Props: None (contains static footer content)
 * Styling: Uses Bulma footer classes with custom social media icon styling
 */
@customElement('portfolio-footer')
export class PortfolioFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .footer {
      background: #363636;
      color: white;
      padding: 3rem 1.5rem 2rem;
    }

    .footer-content {
      text-align: center;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1.5rem;
    }

    .social-link:hover {
      background: var(--primary-color);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(50, 115, 220, 0.3);
      color: white;
    }

    .social-link.github:hover {
      background: #333;
    }

    .social-link.linkedin:hover {
      background: #0077b5;
    }

    .social-link.twitter:hover {
      background: #1da1f2;
    }

    .social-link.email:hover {
      background: #ea4335;
    }

    .footer-nav {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .footer-nav a {
      color: #b5b5b5;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-nav a:hover {
      color: white;
    }

    .copyright {
      color: #b5b5b5;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .tech-stack {
      color: #b5b5b5;
      font-size: 0.8rem;
    }

    .tech-stack a {
      color: var(--accent-color);
      text-decoration: none;
    }

    .tech-stack a:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
      .social-links {
        gap: 1rem;
      }

      .social-link {
        width: 45px;
        height: 45px;
        font-size: 1.3rem;
      }

      .footer-nav {
        gap: 1rem;
      }
    }
  `

  private scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  render() {
    return html`
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="social-links">
              <a 
                href="https://github.com/giphy2" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link github"
                title="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com/albert-kere" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link linkedin"
                title="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://twitter.com/haterke" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link twitter"
                title="Twitter"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:albertkere942@gmail.com" 
                class="social-link email"
                title="Email"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
              </a>
            </div>

            <nav class="footer-nav">
              <a @click=${() => this.scrollToSection('hero')}>Home</a>
              <a @click=${() => this.scrollToSection('services')}>Services</a>
              <a @click=${() => this.scrollToSection('projects')}>Projects</a>
              <a @click=${() => this.scrollToSection('contact')}>Contact</a>
              <a href="/resume.pdf" target="_blank">Resume</a>
            </nav>

            <p class="copyright">
              © ${new Date().getFullYear()} Albert.
            </p>

            <p class="tech-stack">
              Built with 
              <a href="https://lit.dev" target="_blank" rel="noopener noreferrer">Lit</a>, 
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>, 
              <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">Bulma</a> 
              & TypeScript
            </p>
          </div>
        </div>
      </footer>
    `
  }
}
