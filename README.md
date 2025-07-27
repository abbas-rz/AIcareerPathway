# 🗺️ CareerPath - AI-Powered Career Roadmap Generator

<div align="center">
  <img src="public/logo12.png" alt="CareerPath Logo" width="120" height="120" />
  
  <p align="center">
    <strong>Generate personalized career roadmaps with AI-powered insights</strong>
  </p>
  
  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-demo">Demo</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-usage">Usage</a> •
    <a href="#-tech-stack">Tech Stack</a>
  </p>
</div>

---

## 🌟 **Features**

✨ **AI-Powered Generation** - Leverage Google Gemini AI to create comprehensive career roadmaps  
🎯 **Personalized Paths** - Tailored learning paths based on your experience and goals  
📚 **Rich Resources** - Curated courses, books, projects, and documentation for each skill  
🌙 **Dark Theme** - Beautiful dark mode interface with modern UI components  
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices  
🔄 **Demo Mode** - Try the app without an API key using sample roadmaps  
⚡ **Fast & Modern** - Built with Vite, React 18, and TypeScript for optimal performance  

## 🎯 **What Makes CareerPath Special**

Unlike static career guides, CareerPath generates **dynamic, personalized roadmaps** that adapt to your:
- Current experience level
- Specific career goals
- Learning preferences
- Time constraints

Each roadmap includes:
- **Multiple Learning Paths** - Choose from beginner to advanced tracks
- **Skill Prerequisites** - Clear dependency mapping between skills
- **Time Estimates** - Realistic timelines for each learning milestone
- **Curated Resources** - Hand-picked courses, books, and projects
- **Market Insights** - Salary expectations and job market demand

## 🚀 **Demo**

### Try it now! 
- **With API Key**: Full AI-powered roadmap generation
- **Demo Mode**: Experience the interface with sample data

### Sample Roadmaps Generated:
- 👨‍💻 Frontend Developer
- 🔧 DevOps Engineer  
- 📊 Data Scientist
- 🎨 UI/UX Designer
- 🏗️ Software Architect

## 📸 **Screenshots**

### Dark Theme Interface
Beautiful, modern dark theme with shadcn/ui components

### Interactive Roadmap Display
Comprehensive skill cards with resources and prerequisites

### Responsive Design
Works perfectly on all device sizes

## 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 19.1.0 |
| **TypeScript** | Type Safety | Latest |
| **Vite** | Build Tool & Dev Server | Latest |
| **Tailwind CSS** | Utility-First Styling | 3.x |
| **shadcn/ui** | Modern UI Components | Latest |
| **Google Gemini AI** | AI Roadmap Generation | gemini-1.5-flash |
| **Lucide React** | Beautiful Icons | 0.525.0 |

## 📦 **Installation**

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** package manager

### Quick Start

```bash
# Clone the repository
git clone https://github.com/abbas-rz/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser
# Navigate to http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 🎮 **Usage**

### 1. **Demo Mode (No API Key Required)**
Perfect for testing and exploring the interface:
- Click "Try Demo" on the form
- Explore a sample Frontend Developer roadmap
- Experience all features without setup

### 2. **Full AI Mode (Requires Gemini API Key)**

#### Get Your Free API Key:
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key (starts with `AIza...`)

#### Using the App:
1. **Enter Career Details:**
   - Target career field (e.g., "Data Scientist")
   - Your current experience level
   - Specific goals and interests

2. **Configure API Key:**
   - Click "Configure API Key"
   - Paste your Gemini API key
   - Keys are stored locally and never sent to servers

3. **Generate Roadmap:**
   - Click "Generate Roadmap"
   - Wait 5-10 seconds for AI processing
   - Explore your personalized career roadmap!

### 3. **Understanding Your Roadmap**

Each generated roadmap includes:

#### **📊 Career Overview**
- Market demand analysis
- Average salary ranges
- Key skills overview

#### **🛤️ Learning Paths**
- **Beginner Path**: Foundation skills and concepts
- **Intermediate Path**: Practical application and projects
- **Advanced Path**: Specialized skills and expertise

#### **🎯 Skill Cards**
- **Prerequisites**: What you need to know first
- **Time Estimates**: Realistic learning timelines
- **Resources**: Curated learning materials
- **Difficulty Levels**: Color-coded progression

## 🔧 **Configuration**

### Environment Setup
No environment variables required! The app uses:
- Client-side API key input
- Local storage for preferences
- No backend server needed

### Customization Options
The app is highly customizable:

```typescript
// Modify AI prompts in src/lib/gemini.ts
// Customize UI components in src/components/ui/
// Adjust styling in tailwind.config.js
// Update themes in src/index.css
```

## 🏗️ **Project Structure**

```
src/
├── lib/
│   ├── utils.ts              # Utility functions
│   └── gemini.ts             # AI service integration
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── RoadmapForm.tsx       # User input interface
│   └── RoadmapVisualization.tsx # Roadmap display
├── App.tsx                   # Main application
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## 🤝 **Contributing**

We welcome contributions! Here's how you can help:

### **🐛 Bug Reports**
Found a bug? Please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information

### **✨ Feature Requests**
Have an idea? We'd love to hear it! Include:
- Detailed feature description
- Use case examples
- Mockups or wireframes (if applicable)

### **🔧 Development**
Ready to contribute code?

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR_USERNAME/website.git

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Test thoroughly
npm run dev

# Commit with clear messages
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Create a Pull Request
```

### **Development Guidelines**
- Follow TypeScript best practices
- Use shadcn/ui component patterns
- Maintain responsive design
- Add JSDoc comments for complex functions
- Test on multiple browsers and devices

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - you're free to use, modify, and distribute this software!
```

## 🔐 **Privacy & Security**

Your privacy is important to us:

- **🔒 No Data Collection**: We don't store or track your personal information
- **🏠 Local Processing**: All data processing happens in your browser
- **🔑 Secure API Keys**: API keys are stored locally and never transmitted to our servers
- **🌐 Client-Side Only**: No backend server means no data persistence risks

## 🚀 **Deployment**

Deploy CareerPath to any static hosting platform:

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### **Netlify**
```bash
# Build the project
npm run build

# Deploy the dist/ folder to Netlify
```

### **GitHub Pages**
```bash
# Build and deploy using GitHub Actions
# See .github/workflows/ for CI/CD setup
```

## 📈 **Performance**

CareerPath is optimized for speed and efficiency:

- **⚡ Fast Loading**: < 2s initial load time
- **📦 Optimized Bundle**: ~200KB gzipped
- **🔄 Hot Reload**: Instant development feedback
- **📱 Mobile Optimized**: Smooth experience on all devices

## 🆘 **Support**

Need help? We've got you covered:

### **📚 Documentation**
- [Technical Documentation](codebase.md)
- [API Reference](src/lib/gemini.ts)
- [Component Guide](src/components/)

### **💬 Community**
- Create an [Issue](https://github.com/abbas-rz/website/issues) for bug reports
- Start a [Discussion](https://github.com/abbas-rz/website/discussions) for questions
- Follow updates on [GitHub](https://github.com/abbas-rz/website)

### **🔧 Common Issues**

<details>
<summary><strong>Tailwind styles not working</strong></summary>

Make sure PostCSS is configured correctly:
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
</details>

<details>
<summary><strong>Gemini API errors</strong></summary>

- Ensure you're using a valid API key
- Check that you have API quota remaining
- Verify you're using the correct model name: `gemini-1.5-flash`
</details>

<details>
<summary><strong>Build errors</strong></summary>

Try clearing cache and reinstalling:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```
</details>

## 🌟 **Acknowledgments**

Special thanks to:
- **shadcn** for the amazing UI component library
- **Google** for the Gemini AI API
- **Vercel** for the fantastic Vite template
- **Tailwind CSS** team for the utility-first CSS framework
- **React** team for the incredible framework

## 🎯 **Roadmap**

### **Coming Soon**
- [ ] 📱 Mobile app version
- [ ] 👥 User accounts and saved roadmaps
- [ ] 📊 Progress tracking
- [ ] 🌐 Community roadmap sharing
- [ ] 🔗 Learning platform integrations

### **Future Ideas**
- [ ] 🤖 Multiple AI provider support
- [ ] 📈 Advanced analytics
- [ ] 🎓 Certification tracking
- [ ] 💼 Job market integration

---

<div align="center">
  
  **⭐ Star this repo if you found it helpful!**
  
  Made with ❤️ by [abbas-rz](https://github.com/abbas-rz)
  
  [🐛 Report Bug](https://github.com/abbas-rz/website/issues) • [✨ Request Feature](https://github.com/abbas-rz/website/issues) • [💬 Ask Question](https://github.com/abbas-rz/website/discussions)

</div>
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
