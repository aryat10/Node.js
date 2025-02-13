# 📚 Node.js 

Welcome to my Node.js learning journey! This repository is a collection of basic examples and exercises to help me understand the core concepts of Node.js, including modules, file handling, and basic operations.

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










## 👋🏼 Introduction

Node.js is a powerful JavaScript runtime built on Chrome's V8 engine, enabling developers to build fast and scalable server-side applications. It is event-driven and non-blocking, making it ideal for data-intensive real-time applications.

## 📦 Core Modules

Node.js comes with a set of core modules that provide essential functionality without requiring any external dependencies. Some of the core modules I've explored include:

- **fs (File System):** For interacting with the file system (reading, writing, updating files).
- **http:** For creating web servers and handling HTTP requests and responses.
- **path:** For handling and transforming file paths.
- **os:** For getting information about the operating system.

## 📂 Local Modules

Local modules are custom modules that you create to organize your code. These modules are files or folders in your project that export specific functionalities, making your code more modular and easier to manage.

Example:
```javascript
// myModule.js
function greet(name) {
    return `Hello, ${name}!`;
} 

```
---

## 🌐 Express.js 

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building web servers and handling routes, making it one of the most popular frameworks in the Node.js ecosystem.

### 🛠️ Creating a Server with Express 

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

```

--- 

## 🚀 Features

- **Modular Code**: Learn how to create and use modules in Node.js.
- **Basic Arithmetic Operations**: Implement and use functions like addition.
- **File Organization**: Understand how to structure Node.js projects.
- **Express ineraction**: Web application framework that provides a robust set of features.



