import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Updated Services Section
 * Inspired by https://giphy2.github.io/kere-albert-portfolio/#services
 */
@customElement('services-section')
export class ServicesSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    section {
      padding: 4rem 1.5rem;
      background-color: #f9f9f9;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
    }

    .header p {
      color: #555;
      font-size: 1.1rem;
      margin-top: 1rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .card {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .card:hover .description,
    .card:hover .title {
      color: white;
    }

    .icon {
      background: linear-gradient(135deg, #3273dc, #209cee);
      border-radius: 50%;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      transition: transform 0.3s ease;
    }

    .card:hover .icon {
      transform: scale(1.1);
      background: white;
    }

    .icon svg {
      width: 36px;
      height: 36px;
      color: white;
      transition: color 0.3s ease;
    }

    .card:hover .icon svg {
      color: #764ba2;
    }

    .title {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #222;
    }

    .description {
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
    }
  `;

  renderCard(iconPath: any, title: string, description: string) {
    return html`
      <div class="card">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="currentColor">${iconPath}</svg>
        </div>
        <div class="title">${title}</div>
        <div class="description">${description}</div>
      </div>
    `;
  }

  render() {
    return html`
      <section id="services">
        <div class="container">
          <div class="header">
            <h2>What I Do</h2>
            <p>
              I specialize in crafting modern, scalable, and performant web solutions that elevate digital experiences.
            </p>
          </div>

          <div class="grid">
            ${this.renderCard(
              html`<path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>`,
              'Web Development',
              'Full-stack web applications using modern frameworks, responsive designs, and performance best practices.'
            )}

            ${this.renderCard(
              html`<path d="M7 2v11h3v9l7-12h-4l4-8z"/>`,
              'UI/UX Design',
              'User-centered design with clean interfaces, rapid prototyping, and smooth interactions.'
            )}

            ${this.renderCard(
              html`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`,
              'E-Commerce',
              'Complete storefront setups with product management, secure payment gateways, and seamless checkout flows.'
            )}

            ${this.renderCard(
              html`<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>`,
              'API Development',
              'RESTful API development, backend integrations, and scalable architecture design.'
            )}

            ${this.renderCard(
              html`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9s.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>`,
              'Consulting',
              'Strategic tech consulting, performance audits, and long-term digital guidance for growing products.'
            )}

            ${this.renderCard(
              html`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`,
              'Optimization',
              'Speed improvements, SEO optimization, and accessibility enhancements for web platforms.'
            )}
          </div>
        </div>
      </section>
    `;
  }
}
