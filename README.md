# WDD 430 Portfolio

This is my Week 01 portfolio project for BYU-Idaho WDD 430 Web Full-Stack
Development. It is built with Next.js, TypeScript, Tailwind CSS, and the App
Router.

## Features

- Home portfolio page
- About page
- Reusable header, footer, project card, and project list components
- Simple `/api/hello` route
- Responsive layout for mobile and desktop screens

## Local setup

Requirements:

- Node.js 20.9 or newer
- npm 10 or newer

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Validation

```bash
npm run lint
npm run build
```

## Project structure

```text
app/
  about/page.tsx
  api/hello/route.ts
  layout.tsx
  page.tsx
components/
  Footer.tsx
  Header.tsx
  ProjectCard.tsx
  ProjectList.tsx
public/
```
