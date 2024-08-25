# Node.js 

Welcome to my Node.js learning repository! This document provides an overview of the key concepts, modules, and tools I've explored while learning Node.js.

<p align="center">
  <br />
  <a href="https://nodejs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://nodejs.org/static/logos/nodejsLight.svg">
      <img src="https://nodejs.org/static/logos/nodejsDark.svg" width="200px">
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://nodejs.org">Node.js</a> Website built using Next.js with TypeScript, CSS Modules/Tailwind, and MDXv3
</p>

<p align="center">
  <a title="MIT License" href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />
  </a>
  <a title="Localised" href="https://crowdin.com/project/nodejs-web">
    <img src="https://badges.crowdin.net/nodejs-web/localized.svg" alt="Crowdin Badge" />
  </a>
  <a title="Vercel" href="https://vercel.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/powered%20by-Vercel%20%E2%96%B2-white">
      <img src="https://img.shields.io/badge/powered%20by-Vercel%20%E2%96%B2-black" alt="Powered by Vercel">
    </picture>
  </a>
  <br />
  <img src="https://github.com/nodejs/nodejs.org/actions/workflows/build.yml/badge.svg" alt="Build and Analysis Checks" />
  <a title="scorecard" href="https://securityscorecards.dev/viewer/?uri=github.com/nodejs/nodejs.org">
    <img src="https://api.securityscorecards.dev/projects/github.com/nodejs/nodejs.org/badge" alt="nodejs.org scorecard badge" />
  </a>
  <a href="http://commitizen.github.io/cz-cli/" alt="Commitizen friendly">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
  <br />
  <br />
</p>










## Table of Contents

1. [Introduction](#introduction)
2. [Core Modules](#core-modules)
3. [Local Modules](#local-modules)
4. [Built-in Modules](#built-in-modules)
5. [npm (Node Package Manager)](#npm-node-package-manager)
6. [nodemon](#nodemon)
7. [package.json](#packagejson)
8. [Event Loop](#event-loop)
9. [Events](#events)
10. [Conclusion](#conclusion)

## Introduction

Node.js is a powerful JavaScript runtime built on Chrome's V8 engine, enabling developers to build fast and scalable server-side applications. It is event-driven and non-blocking, making it ideal for data-intensive real-time applications.

## Core Modules

Node.js comes with a set of core modules that provide essential functionality without requiring any external dependencies. Some of the core modules I've explored include:

- **fs (File System):** For interacting with the file system (reading, writing, updating files).
- **http:** For creating web servers and handling HTTP requests and responses.
- **path:** For handling and transforming file paths.
- **os:** For getting information about the operating system.

## Local Modules

Local modules are custom modules that you create to organize your code. These modules are files or folders in your project that export specific functionalities, making your code more modular and easier to manage.

Example:
```javascript
// myModule.js
function greet(name) {
    return `Hello, ${name}!`;
} 



