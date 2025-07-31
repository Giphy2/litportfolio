import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * Portfolio Hero Component

 * Features bold animated introduction, call-to-action buttons, and clean responsive layout.
 */
@customElement('portfolio-hero')
export class PortfolioHero extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .hero-body {
      padding: 6rem 1.5rem;
      max-width: 800px;
      margin: auto;
    }

    .title {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 1rem;
      animation: fadeInUp 0.8s ease-out both;
    }

    .subtitle {
      font-size: 1.75rem;
      font-weight: 400;
      margin-bottom: 2rem;
      animation: fadeInUp 1s ease-out 0.3s both;
    }

    .description {
      font-size: 1.25rem;
      line-height: 1.8;
      margin-bottom: 2.5rem;
      animation: fadeInUp 1s ease-out 0.5s both;
    }

    .buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      animation: fadeInUp 1s ease-out 0.7s both;
    }

    .button {
      font-weight: 600;
      padding: 0.75rem 2rem;
      border-radius: 30px;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .button.is-white {
      background: white;
      color: #667eea;
    }

    .button.is-white:hover {
      background: #f0f0f0;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .button.is-outlined {
      border: 2px solid white;
      color: white;
      background: transparent;
    }

    .button.is-outlined:hover {
      background: white;
      color: #764ba2;
      transform: translateY(-3px);
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

    @media screen and (max-width: 768px) {
      .title {
        font-size: 2.75rem;
      }

      .subtitle {
        font-size: 1.25rem;
      }

      .description {
        font-size: 1rem;
      }
    }
  `

  render() {
    return html`
      <section class="hero" id="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Albert Otieno</h1>
            <h2 class="subtitle">Software Engineer</h2>
            <p class="description">
              Passionate developer focused on clean, scalable, and efficient solutions.
              I specialize in modern JavaScript frameworks like React, Next.js, and Lit.
            </p>
            <div class="buttons">
              <a class="button is-white is-large" href="#projects">View My Work</a>
              <a class="button is-outlined is-large" href="#contact">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>
    `
  }
}
