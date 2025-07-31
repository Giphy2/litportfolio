/**
 * Contact Form Component
 * and smooth interactive elements.
 */
import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'

@customElement('contact-form')
export class ContactForm extends LitElement {
  @state()
  private formData: { name: string; email: string; message: string } = {
    name: '',
    email: '',
    message: ''
  }

  @state()
  private isSubmitting = false

  @state()
  private errors: { [key: string]: string } = {}

  static styles = css`
    :host {
      display: block;
      background: #f6f8ff;
      padding: 4rem 1rem;
    }

    .contact-wrapper {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
    }

    h2.title {
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 2rem;
      color: #333;
    }

    .field {
      margin-bottom: 1.5rem;
    }

    .label {
      font-weight: 600;
      color: #444;
      margin-bottom: 0.5rem;
      display: block;
    }

    .input,
    .textarea {
      width: 100%;
      border-radius: 8px;
      border: 1px solid #ccc;
      padding: 0.75rem;
      font-size: 1rem;
      transition: border 0.3s;
    }

    .input:focus,
    .textarea:focus {
      border-color: #667eea;
      outline: none;
    }

    .input.is-danger,
    .textarea.is-danger {
      border-color: #ff3860;
    }

    .help.is-danger {
      color: #ff3860;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .button {
      background: linear-gradient(135deg, #667eea, #764ba2);
      border: none;
      padding: 0.75rem 2rem;
      color: white;
      border-radius: 30px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      width: 100%;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(50, 115, 220, 0.3);
    }

    .button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .button.is-loading::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
  `

  private validateForm(): boolean {
    const errors: { [key: string]: string } = {}

    if (!this.formData.name.trim()) errors.name = 'Name is required'
    if (!this.formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
      errors.email = 'Invalid email format'
    }
    if (!this.formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (this.formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    this.errors = errors
    return Object.keys(errors).length === 0
  }

 private async handleSubmit(e: Event) {
  e.preventDefault()

  if (!this.validateForm()) return

  this.isSubmitting = true

  try {
    const response = await fetch('https://formspree.io/f/yourFormId', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message,
      })
    })

    if (response.ok) {
      this.formData = { name: '', email: '', message: '' }
      alert('Message sent successfully!')
    } else {
      alert('Failed to send. Please try again.')
    }
  } catch (error) {
    alert('Network error. Please try again later.')
  } finally {
    this.isSubmitting = false
  }
}

  private handleInputChange(field: string, value: string) {
    this.formData = { ...this.formData, [field]: value }
    if (this.errors[field]) {
      this.errors = { ...this.errors, [field]: '' }
    }
  }

  render() {
    return html`
      <div class="contact-wrapper">
        <h2 class="title">Contact Me</h2>
        <form @submit=${this.handleSubmit}>
          <div class="field">
            <label class="label">Name</label>
            <input
              class="input ${this.errors.name ? 'is-danger' : ''}"
              type="text"
              placeholder="Your name"
              .value=${this.formData.name}
              @input=${(e: Event) => this.handleInputChange('name', (e.target as HTMLInputElement).value)}
            />
            ${this.errors.name ? html`<p class="help is-danger">${this.errors.name}</p>` : ''}
          </div>

          <div class="field">
            <label class="label">Email</label>
            <input
              class="input ${this.errors.email ? 'is-danger' : ''}"
              type="email"
              placeholder="you@example.com"
              .value=${this.formData.email}
              @input=${(e: Event) => this.handleInputChange('email', (e.target as HTMLInputElement).value)}
            />
            ${this.errors.email ? html`<p class="help is-danger">${this.errors.email}</p>` : ''}
          </div>

          <div class="field">
            <label class="label">Message</label>
            <textarea
              class="textarea ${this.errors.message ? 'is-danger' : ''}"
              placeholder="Your message..."
              rows="5"
              .value=${this.formData.message}
              @input=${(e: Event) => this.handleInputChange('message', (e.target as HTMLTextAreaElement).value)}
            ></textarea>
            ${this.errors.message ? html`<p class="help is-danger">${this.errors.message}</p>` : ''}
          </div>

          <button
            class="button ${this.isSubmitting ? 'is-loading' : ''}"
            type="submit"
            ?disabled=${this.isSubmitting}
          >
            ${this.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    `
  }
}
