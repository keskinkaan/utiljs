<h2 align="center">
  <br>
  <img src="./assets/utiljs.png" alt="EeJs" width="128" style="border-radius:12px;"></a>
  <br>
  UtilJs
  <br>
</h2>

<h4 align="center">A collection of utility functions for JavaScript</h4>

<p align="center">
  <a href="https://github.com/keskinkaan/utiljs/actions/workflows/main.yaml" target="_self">
    <img src="https://github.com/keskinkaan/utiljs/actions/workflows/main.yaml/badge.svg" alt="Test"/> 
  </a>
  <a href="https://www.npmjs.com/package/@kinbay/utiljs" target="_blank">
    <img src="https://img.shields.io/github/package-json/v/keskinkaan/utiljs" alt="Version"/>
  </a>
  <a href="https://www.npmjs.com/package/@kinbay/utiljs" target="_blank">
    <img src="https://img.shields.io/bundlephobia/min/%40kinbay%2Futiljs?color=blue" alt="Minifield Size"/>
  </a>
  <a href="https://github.com/keskinkaan/utiljs/blob/dev/LICENSE" target="_self">
    <img src="https://img.shields.io/github/license/keskinkaan/utiljs?color=blue" alt="License"/>
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@kinbay/utiljs" target="_blank">
    <img src="https://img.shields.io/github/actions/workflow/status/keskinkaan/utiljs/main.yaml?branch=dev&color=green" alt="Build"/> 
  </a>
  <a href="https://www.npmjs.com/package/@kinbay/utiljs" target="_blank">
    <img src="https://img.shields.io/npm/dt/%40kinbay%2Futiljs" alt="Downloads"/> 
  </a>
  <a href="http://commitizen.github.io/cz-cli/" target="_blank">
    <img src="https://img.shields.io/badge/commitizen-friendly-blue.svg" alt="Commitizen friendly"/> 
  </a>
</p>

<p align="center">
  <a href="" target="_blank">
    <img src="https://img.shields.io/node/v/%40kinbay%2Futiljs" alt="Version Node"/> 
  </a>
  <a href="https://pnpm.io/installation" target="_blank">
    <img src="https://img.shields.io/badge/pnpm-%3E%3D%209.0.1-blue.svg" alt="Version Pnpm"/> 
  </a>
</p>

### Installation

First, clone the repossitory

```sh
git clone https://github.com/keskinkaan/utiljs.git
```

Then, install the dependencies

```sh
pnpm install
```

After installing the dependencies the following `pnpm` scripts become available:

- `dev`: starts the application in [Jest](https://jestjs.io/) watch mode.
- `test`: runs the tests with [Jest](https://jestjs.io/)
- `build`: bundles the application for production into the build folder with [Tsup](https://tsup.egoist.dev)
- `lint`: lint files with [Eslint](https://eslint.org/) based on the [typescript-eslint/parser](https://typescript-eslint.io/packages/parser/) and [typescript-eslint/eslint-plugin](https://typescript-eslint.io/)
- `prettify`: formats the code with [Prettier](https://prettier.io/)
- `format`: formats the code with [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/) within the `src` folder
- `commit`: commits the changes with [Commitizen](http://commitizen.github.io/cz-cli/)
- `release`: releases a new version with [Changeset]()
