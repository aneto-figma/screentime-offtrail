# Screentime Offtrail

React and Vite prototype for the Screentime Offtrail experience.

## Prerequisites

- Node.js
- npm

This repo uses `package-lock.json`, so use npm for dependency installs.

## Install Dependencies

```sh
npm install
```

For a clean install that exactly matches `package-lock.json`, use:

```sh
npm ci
```

## Run The App

Start the Vite development server:

```sh
npm run dev
```

Vite will print the local URL in the terminal. By default, it is usually:

```txt
http://localhost:5173/
```

## Run Storybook

Start the Storybook development server:

```sh
npm run storybook
```

Storybook runs on:

```txt
http://localhost:6006/
```

Stories are loaded from `src/**/*.mdx` and `src/**/*.stories.@(js|jsx|mjs|ts|tsx)`.

## Useful Commands

```sh
npm run build
```

Builds the Vite app into `dist/`.

```sh
npm run preview
```

Serves the production build locally after `npm run build`.

```sh
npm run build-storybook
```

Builds the static Storybook site into `storybook-static/`.

```sh
npm run lint
```

Runs ESLint across the repo.
