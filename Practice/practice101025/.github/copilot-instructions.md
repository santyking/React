# Copilot Instructions for AI Agents

## Project Overview
This is a minimal React project bootstrapped with Vite. The main entry point is `src/main.jsx`, which renders the root `App` component from `src/App.jsx`. Styling is managed via `App.css` and `index.css`. Static assets are located in `src/assets/` and `public/`.

## Architecture & Patterns
- **Single-page React app**: All logic is contained in the `src/` directory. There is no routing or backend integration by default.
- **Component Structure**: The root component is `App.jsx`. Add new components in `src/` or subfolders as needed.
- **Styling**: Use CSS files in `src/` for component styles. Follow the convention of importing CSS at the top of each component file.
- **Assets**: Place images and other static files in `src/assets/` or `public/`.

## Developer Workflows
- **Start Dev Server**: Run `npm run dev` to start the Vite development server with hot module replacement.
- **Build for Production**: Run `npm run build` to generate optimized static files in the `dist/` folder.
- **Preview Production Build**: Run `npm run preview` to serve the production build locally.
- **Linting**: Run `npm run lint` to check code quality using ESLint. The configuration is in `eslint.config.js`.

## Conventions & Practices
- **No TypeScript**: This template uses plain JavaScript. If TypeScript is needed, migrate using the official Vite React TS template.
- **Minimal Boilerplate**: Avoid unnecessary abstractions. Keep components simple and colocate related files.
- **No Custom Routing**: If adding routing, use `react-router-dom` and document the structure in this file.
- **No State Management Library**: Use React's built-in state management unless scaling up.

## Integration Points
- **Vite Plugins**: Uses `@vitejs/plugin-react` for fast refresh and JSX support. See `vite.config.js` for plugin configuration.
- **ESLint**: Configured via `eslint.config.js`. Expand rules as needed for your team.

## Key Files & Directories
- `src/App.jsx`: Main app component
- `src/main.jsx`: Entry point
- `src/assets/`: Static assets
- `public/`: Public files
- `eslint.config.js`: Linting rules
- `vite.config.js`: Vite configuration

## Example: Adding a New Component
1. Create `src/MyComponent.jsx`:
   ```jsx
   import React from 'react';
   import './MyComponent.css';

   export default function MyComponent() {
     return <div className="my-component">Hello!</div>;
   }
   ```
2. Import and use in `App.jsx`:
   ```jsx
   import MyComponent from './MyComponent';
   // ...existing code...
   <MyComponent />
   ```

## Updating This Guide
If you add new workflows, libraries, or architectural patterns, update this file to help future AI agents and developers be productive.
