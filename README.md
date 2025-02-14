# Drupal Experience Builder JS Components Storybook Starter

Build and test JavaScript components for
[Drupal's Experience Builder](https://www.drupal.org/project/experience_builder)
with this preconfigured development environment.

![Screenshot](./screenshot.png)

Experience Builder will include an in-browser code editor for authoring
components using React/Preact and Tailwind CSS. Compiling these components
happens directly in the browser, and they become available to content creators.

All of this work is ongoing, and is in an earlier stage of development. See the
[meta plan issue](https://www.drupal.org/project/experience_builder/issues/3499919)
for the initial roadmap.

The components can be developed in any environment, and then synchronized into
Experience Builder by using a CLI tool, which will be created later. For now,
e.g. for creating an initial set of JavaScript components, they will need to be
added manually.

This starter project aims to provide an environment for developing these
components. It loosely mimics how Experience Builder compiles JavaScript and
builds the CSS code by using [SWC](https://swc.rs) and
[Tailwind CSS v4](https://tailwindcss.com).

## Features

- [Storybook](https://storybook.js.org) for developing and presenting the
  components
- Compiling with [SWC](https://swc.rs) (Experience Builder uses
  [`@swc/wasm-web`](https://swc.rs/docs/usage/wasm)) through
  [`@vitejs/plugin-react-swc`](https://www.npmjs.com/package/@vitejs/plugin-react-swc)
- [Tailwind CSS v4](https://tailwindcss.com) for styling
  - [Inter font](https://rsms.me/inter) added as an example
- [Prettier](https://prettier.io/) with plugins configured
  - [`prettier-plugin-tailwindcss`](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
  - [`@ianvs/prettier-plugin-sort-imports`](https://www.npmjs.com/package/@ianvs/prettier-plugin-sort-imports)
- [ESLint](https://eslint.org/) config matching
  [`create-vite`](https://www.npmjs.com/package/create-vite)'s
  [`react` template](https://github.com/vitejs/vite/blob/main/packages/create-vite/template-react/eslint.config.js)
- [Husky](https://typicode.github.io/husky) for Git hooks:
  - Pre-commit: Linting and formatting staged files using
    [`lint-staged`](https://www.npmjs.com/package/lint-staged)
  - Pre-commit: Validating commit messages against
    [the Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0)
    using [`commitlint`](https://commitlint.js.org) (e.g. run `npx git-cz` to
    commit, or delete `.husky/commit-msg` if you don't want this)
- [GitHub Actions](https://github.com/features/actions) workflows
  - Static code checks
  - Validating PR titles against
    [the Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0)
    (delete `.github/workflows/lint-pr.yml` if you don't want this)
- Sample component

## Commands

| Command               | Description                           |
| --------------------- | ------------------------------------- |
| `dev`                 | Starts Storybook's development server |
| `storybook`           | Alias for `dev` command               |
| `build-storybook`     | Creates a static Storybook build      |
| `code:check`          | Runs all code checks                  |
| `code:check:prettier` | Checks code formatting with Prettier  |
| `code:check:eslint`   | Checks code with ESLint               |
| `code:fix`            | Runs all code fixes                   |
| `code:fix:prettier`   | Fixes code formatting with Prettier   |
| `code:fix:eslint`     | Fixes code with ESLint                |
