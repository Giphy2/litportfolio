import { css as d, LitElement as h, html as n } from "lit";
import { state as b, customElement as p, property as g } from "lit/decorators.js";
var k = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, y = (e, r, s, a) => {
  for (var t = a > 1 ? void 0 : a ? $(r, s) : r, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (t = (a ? o(r, s, t) : o(t)) || t);
  return a && t && k(r, s, t), t;
};
let f = class extends h {
  constructor() {
    super(...arguments), this.isMenuOpen = !1;
  }
  // Toggle mobile menu state
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  // Scroll smoothly to a specific section ID
  scrollToSection(e) {
    const r = document.getElementById(e);
    r && r.scrollIntoView({ behavior: "smooth" }), this.isMenuOpen = !1;
  }
  render() {
    return n`
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
          
            <!-- Mobile Burger Toggle -->
            <a
              role="button"
              class="navbar-burger ${this.isMenuOpen ? "is-active" : ""}"
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
          <div class="navbar-menu ${this.isMenuOpen ? "is-active" : ""}">
            <div class="navbar-end">
              <a class="navbar-item" @click=${() => this.scrollToSection("hero")}>Home</a>
              <a class="navbar-item" @click=${() => this.scrollToSection("services")}>Services</a>
              <a class="navbar-item" @click=${() => this.scrollToSection("projects")}>Projects</a>
              <a class="navbar-item" @click=${() => this.scrollToSection("contact")}>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
};
f.styles = d`
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
  `;
y([
  b()
], f.prototype, "isMenuOpen", 2);
f = y([
  p("portfolio-header")
], f);
var z = Object.getOwnPropertyDescriptor, S = (e, r, s, a) => {
  for (var t = a > 1 ? void 0 : a ? z(r, s) : r, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (t = o(t) || t);
  return t;
};
let v = class extends h {
  render() {
    return n`
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
    `;
  }
};
v.styles = d`
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
  `;
v = S([
  p("portfolio-hero")
], v);
var C = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, m = (e, r, s, a) => {
  for (var t = a > 1 ? void 0 : a ? _(r, s) : r, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (t = (a ? o(r, s, t) : o(t)) || t);
  return a && t && C(r, s, t), t;
};
let l = class extends h {
  constructor() {
    super(...arguments), this.title = "", this.image = "", this.description = "", this.link = "", this.technologies = "";
  }
  get technologyList() {
    return this.technologies.split(",").map((e) => e.trim()).filter(Boolean);
  }
  render() {
    return n`
      <div class="card">
        ${this.image ? n`
          <div class="card-image">
            <img src="${this.image}" alt="${this.title}" loading="lazy" />
          </div>
        ` : ""}

        <div class="card-content">
          <p class="title">${this.title}</p>
          <div class="content">
            ${this.description}
          </div>

          ${this.technologyList.length > 0 ? n`
            <div class="technologies">
              ${this.technologyList.map((e) => n`<span class="tech-tag">${e}</span>`)}
            </div>
          ` : ""}

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
};
l.styles = d`
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
m([
  g({ type: String })
], l.prototype, "title", 2);
m([
  g({ type: String })
], l.prototype, "image", 2);
m([
  g({ type: String })
], l.prototype, "description", 2);
m([
  g({ type: String })
], l.prototype, "link", 2);
m([
  g({ type: String })
], l.prototype, "technologies", 2);
l = m([
  p("project-card")
], l);
var D = Object.getOwnPropertyDescriptor, O = (e, r, s, a) => {
  for (var t = a > 1 ? void 0 : a ? D(r, s) : r, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (t = o(t) || t);
  return t;
};
let x = class extends h {
  renderCard(e, r, s) {
    return n`
      <div class="card">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="currentColor">${e}</svg>
        </div>
        <div class="title">${r}</div>
        <div class="description">${s}</div>
      </div>
    `;
  }
  render() {
    return n`
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
      n`<path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>`,
      "Web Development",
      "Full-stack web applications using modern frameworks, responsive designs, and performance best practices."
    )}

            ${this.renderCard(
      n`<path d="M7 2v11h3v9l7-12h-4l4-8z"/>`,
      "UI/UX Design",
      "User-centered design with clean interfaces, rapid prototyping, and smooth interactions."
    )}

            ${this.renderCard(
      n`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`,
      "E-Commerce",
      "Complete storefront setups with product management, secure payment gateways, and seamless checkout flows."
    )}

            ${this.renderCard(
      n`<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>`,
      "API Development",
      "RESTful API development, backend integrations, and scalable architecture design."
    )}

            ${this.renderCard(
      n`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9s.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>`,
      "Consulting",
      "Strategic tech consulting, performance audits, and long-term digital guidance for growing products."
    )}

            ${this.renderCard(
      n`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`,
      "Optimization",
      "Speed improvements, SEO optimization, and accessibility enhancements for web platforms."
    )}
          </div>
        </div>
      </section>
    `;
  }
};
x.styles = d`
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
x = O([
  p("services-section")
], x);
var P = Object.defineProperty, M = Object.getOwnPropertyDescriptor, u = (e, r, s, a) => {
  for (var t = a > 1 ? void 0 : a ? M(r, s) : r, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (t = (a ? o(r, s, t) : o(t)) || t);
  return a && t && P(r, s, t), t;
};
let c = class extends h {
  constructor() {
    super(...arguments), this.formData = {
      name: "",
      email: "",
      message: ""
    }, this.isSubmitting = !1, this.errors = {};
  }
  validateForm() {
    const e = {};
    return this.formData.name.trim() || (e.name = "Name is required"), this.formData.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email) || (e.email = "Invalid email format") : e.email = "Email is required", this.formData.message.trim() ? this.formData.message.trim().length < 10 && (e.message = "Message must be at least 10 characters") : e.message = "Message is required", this.errors = e, Object.keys(e).length === 0;
  }
  async handleSubmit(e) {
    if (e.preventDefault(), !!this.validateForm()) {
      this.isSubmitting = !0;
      try {
        (await fetch("https://formspree.io/f/yourFormId", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.formData.name,
            email: this.formData.email,
            message: this.formData.message
          })
        })).ok ? (this.formData = { name: "", email: "", message: "" }, alert("Message sent successfully!")) : alert("Failed to send. Please try again.");
      } catch {
        alert("Network error. Please try again later.");
      } finally {
        this.isSubmitting = !1;
      }
    }
  }
  handleInputChange(e, r) {
    this.formData = { ...this.formData, [e]: r }, this.errors[e] && (this.errors = { ...this.errors, [e]: "" });
  }
  render() {
    return n`
      <div class="contact-wrapper">
        <h2 class="title">Contact Me</h2>
        <form @submit=${this.handleSubmit}>
          <div class="field">
            <label class="label">Name</label>
            <input
              class="input ${this.errors.name ? "is-danger" : ""}"
              type="text"
              placeholder="Your name"
              .value=${this.formData.name}
              @input=${(e) => this.handleInputChange("name", e.target.value)}
            />
            ${this.errors.name ? n`<p class="help is-danger">${this.errors.name}</p>` : ""}
          </div>

          <div class="field">
            <label class="label">Email</label>
            <input
              class="input ${this.errors.email ? "is-danger" : ""}"
              type="email"
              placeholder="you@example.com"
              .value=${this.formData.email}
              @input=${(e) => this.handleInputChange("email", e.target.value)}
            />
            ${this.errors.email ? n`<p class="help is-danger">${this.errors.email}</p>` : ""}
          </div>

          <div class="field">
            <label class="label">Message</label>
            <textarea
              class="textarea ${this.errors.message ? "is-danger" : ""}"
              placeholder="Your message..."
              rows="5"
              .value=${this.formData.message}
              @input=${(e) => this.handleInputChange("message", e.target.value)}
            ></textarea>
            ${this.errors.message ? n`<p class="help is-danger">${this.errors.message}</p>` : ""}
          </div>

          <button
            class="button ${this.isSubmitting ? "is-loading" : ""}"
            type="submit"
            ?disabled=${this.isSubmitting}
          >
            ${this.isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    `;
  }
};
c.styles = d`
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
  `;
u([
  b()
], c.prototype, "formData", 2);
u([
  b()
], c.prototype, "isSubmitting", 2);
u([
  b()
], c.prototype, "errors", 2);
c = u([
  p("contact-form")
], c);
var j = Object.getOwnPropertyDescriptor, I = (e, r, s, a) => {
  for (var t = a > 1 ? void 0 : a ? j(r, s) : r, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (t = o(t) || t);
  return t;
};
let w = class extends h {
  scrollToSection(e) {
    const r = document.getElementById(e);
    r && r.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return n`
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
              <a @click=${() => this.scrollToSection("hero")}>Home</a>
              <a @click=${() => this.scrollToSection("services")}>Services</a>
              <a @click=${() => this.scrollToSection("projects")}>Projects</a>
              <a @click=${() => this.scrollToSection("contact")}>Contact</a>
              <a href="/resume.pdf" target="_blank">Resume</a>
            </nav>

            <p class="copyright">
              © ${(/* @__PURE__ */ new Date()).getFullYear()} John Developer. All rights reserved.
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
    `;
  }
};
w.styles = d`
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
  `;
w = I([
  p("portfolio-footer")
], w);
console.log("Developer Portfolio loaded successfully!");
