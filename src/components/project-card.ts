import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Project Card Component
 * Reusable card component for displaying project information.
 */
@customElement('project-card')
export class ProjectCard extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) image = '';
  @property({ type: String }) description = '';
  @property({ type: String }) link = '';
  @property({ type: String }) technologies = '';

  static styles = css`
    :host {
      display: block;
    }

    .card {
      height: 100%;
      transition: all 0.3s ease;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      background: white;
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .card-image {
      position: relative;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .card:hover .card-image img {
      transform: scale(1.05);
    }

    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #363636;
    }

    .content {
      color: #4a4a4a;
      line-height: 1.6;
      margin-bottom: 1rem;
      flex-grow: 1;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tech-tag {
      background-color: #f0f0f0;
      color: #555;
      padding: 0.25rem 0.5rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .button {
      margin-top: auto;
      border-radius: 25px;
      font-weight: 600;
      transition: all 0.3s ease;
      background: linear-gradient(45deg, #3273dc, #209cee);
      color: white;
      text-align: center;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      display: inline-block;
    }

    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(50, 115, 220, 0.3);
    }

    .card-image::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(50, 115, 220, 0.1) 0%,
        rgba(0, 209, 178, 0.1) 100%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .card:hover .card-image::after {
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      .card-content {
        padding: 1rem;
      }

      .title {
        font-size: 1.3rem;
      }
    }
  `;

  private get technologyList() {
    return this.technologies.split(',').map(t => t.trim()).filter(Boolean);
  }

  render() {
    return html`
      <div class="card">
        ${this.image ? html`
          <div class="card-image">
            <img src="${this.image}" alt="${this.title}" loading="lazy" />
          </div>
        ` : ''}

        <div class="card-content">
          <p class="title">${this.title}</p>
          <div class="content">
            ${this.description}
          </div>

          ${this.technologyList.length > 0 ? html`
            <div class="technologies">
              ${this.technologyList.map(tech => html`<span class="tech-tag">${tech}</span>`)}
            </div>
          ` : ''}

          <a 
            class="button" 
            href="${this.link}" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    `;
  }
}
