<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Career Roadmap Generator - Development Guidelines

This project is a React-based career roadmap generator that uses the following technologies:
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Google Gemini AI** for roadmap generation
- **Lucide React** for icons

## Code Style and Structure

- Use TypeScript for all components and utilities
- Follow React functional component patterns with hooks
- Use proper TypeScript types and interfaces
- Implement shadcn/ui component patterns for consistency
- Use Tailwind CSS classes for styling
- Follow the established folder structure:
  - `/src/components` - React components
  - `/src/components/ui` - shadcn/ui components  
  - `/src/lib` - Utility functions and services
  
## Component Guidelines

- Use proper prop typing with TypeScript interfaces
- Implement proper error handling for API calls
- Use React.forwardRef for UI components that need refs
- Follow the shadcn/ui component structure and naming conventions
- Use Lucide React icons consistently

## Gemini AI Integration

- The `geminiService` handles all AI interactions
- Proper error handling is implemented for API failures
- The service expects a valid Gemini API key for initialization
- Roadmap generation follows a structured JSON schema

## Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the CSS variable system for colors (defined in index.css)
- Use the established design tokens for consistency
- Implement responsive design patterns
- Use shadcn/ui component variants for different states
