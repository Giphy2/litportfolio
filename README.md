 Developer Portfolio
A modern, responsive developer portfolio built with Vite, TypeScript, Lit web components, and Bulma CSS framework.
 🚀 Features
•	Modern Tech Stack: Vite + TypeScript + Lit 3 + Bulma CSS
•	Web Components: Reusable, encapsulated components using Lit
•	Responsive Design: Mobile-first approach with Bulma's grid system
•	Smooth Animations: Custom CSS animations and micro-interactions
•	Form Validation: Interactive contact form with client-side validation
•	Fast Development: Hot module replacement with Vite
 📦 Setup Commands
 Prerequisites
Node.js (v16 or higher)
npm or yarn

 Installation
Clone the repository
git clone <your-repo-url>
cd developer-portfolio

 Install dependencies
npm install

 Start development server
npm run dev

 Build for production
npm run build

 Preview production build
npm run preview
```

 📁 Project Structure

        src/
        ├── components/           Lit web components
        │   ├── portfolio-header.ts     Navigation header
        │   ├── portfolio-hero.ts       Hero section
        │   ├── project-card.ts         Project card component
        │   └── contact-form.ts         Contact form
        ├── main.ts              Main entry point
        └── style.css            Global styles

        public/                  Static assets
        index.html              Main HTML file
        vite.config.ts          Vite configuration
        package.json            Dependencies and scripts


 🎯 Purpose of Each File

 Core Files
`index.html`: Main HTML template with component usage examples
`src/main.ts`: Entry point that imports Bulma CSS and all components
`vite.config.ts`: Vite configuration optimized for Lit development
`src/style.css`: Global styles and CSS custom properties

 Components
`portfolio-header.ts`: Sticky navigation with mobile menu
`portfolio-hero.ts`: Hero section with animated intro
`project-card.ts`: Reusable project showcase cards
`contact-form.ts`: Interactive contact form with validation

 🚀 GitHub Pages Deployment

 Method 1: Manual Deployment
1. Build the project:
   npm run build
2. Deploy the `dist` folder to GitHub Pages:
   - Push the `dist` folder contents to `gh-pages` branch
   - Enable GitHub Pages in repository settings
   - Select `gh-pages` branch as source
 Method 2: GitHub Actions (Recommended)
1. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
               - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'
            
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
 Vite GitHub Pages Plugin
1. Install the plugin:
   npm install --save-dev gh-pages

2. Add deploy script to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }

3. Deploy:
   npm run deploy

 🛠️ Development

 Adding New Components
1. Create new component file in `src/components/`
2. Import in `src/main.ts`
3. Use in `index.html` or other components

 Customizing Styles
Modify CSS custom properties in `src/style.css`
Add component-specific styles using Lit's `static styles`
Override Bulma variables before importing

 Environment Setup
📚 Documentation

See `DOCUMENTATION.md` for detailed component API, styling guide, and extension instructions.

 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
6 HBO


