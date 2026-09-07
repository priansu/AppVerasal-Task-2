# Pulseframe CSAT Campaign Builder

A polished React/Vite implementation of the AppVersal frontend intern assignment. Configure a CSAT campaign from the Content and Styling tabs while a mobile preview updates instantly.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Tech stack

- React 19
- JavaScript (JSX)
- Vite
- CSS with responsive layout and CSS custom properties

## Features

- Controlled welcome, feedback, and thank-you content fields
- Dynamic add/delete answer options
- Additional comments toggle
- Media upload input for PNG, JPG, JPEG, GIF, and Lottie JSON
- Live styling controls for colors, typography, radius, button sizing, and rating states
- Interactive phone preview with selectable ratings and feedback-to-thank-you flow
- Responsive desktop and mobile layout

## Structure

```text
src/
  App.jsx       Main builder, settings panels, and live preview
  main.jsx      React entrypoint
  style.css     Visual system and responsive styles
index.html      Vite document shell
```

## Deployment

This Vite app can be deployed to Vercel, Netlify, Render, or Firebase Hosting. Set the build command to `npm run build` and the output directory to `dist`.
