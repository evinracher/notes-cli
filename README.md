# 📝 Notes CLI & Server — Node.js Fundamentals

A hands-on **Node.js fundamentals project** built as part of the **Frontend Masters – Introduction to Node.js** course.

This repository demonstrates how to work with the Node.js runtime beyond the browser by building:

- A **CLI tool** to create and manage notes from the terminal  
- A **basic HTTP server** to display notes in the browser  
- File system operations using native Node.js modules  
- Automated tests for core functionality  

Designed as a practical project, structured and documented to showcase **backend and developer tooling skills**.

---

## 🚀 Features

- 📂 Create, read, and write files using Node.js
- 🧠 CLI for managing notes directly from the terminal
- 🌐 Minimal HTTP server to visualize notes in the browser
- 🚪 Automatically opens the browser when a new note is added
- 🧪 Basic automated tests with Jest
- 📦 Uses modern **ES Modules (ESM)**

---

## 🛠️ Tech Stack & Key Packages

### Core Runtime
- **Node.js** (ES Modules enabled)

### Important Packages
- 📌 **yargs** — CLI argument parsing and command definition
- 🌍 **open** — Automatically opens the browser from Node
- 🧪 **jest** — Unit testing framework

### Native Node.js Modules Used
- 📁 `fs` — File system operations
- 🌐 `http` — Basic HTTP server

---

## 📦 Installation

Install dependencies:

```bash
npm install
```

### 🔗 Install the CLI locally

To use the `note` command globally during development:

```bash
npm link
```

---

## ▶️ Run the CLI

The CLI is exposed via the `note` command.

### Basic examples

Create a new note:

```bash
note new "Prepare project roadmap"
```

Create a note with tags:

```bash
note new "Fix production bug" --tags=urgent,backend
```

Launch the web interface to view notes:

```bash
note web
```

---

### 📋 Available commands

```bash
note <command>

Commands:
  note new <note>    create a new note
  note all           get all notes
  note find <query>  get matching notes
  note remove <id>   remove a note by id
  note web [port]    launch website to see notes
  note clean         remove all notes
```

👉 You can always see the full list of commands by running:

```bash
note --help
```

---

## 🧪 Testing

This project includes **basic unit tests** using **Jest**, configured to work with **Node.js ES Modules**:

```bash
npm test
```

---

## 🎯 Skills Demonstrated

- ✅ Node.js fundamentals (runtime, modules, CLI)
- ✅ File system manipulation (`fs`)
- ✅ Building CLI tools with `yargs`
- ✅ Creating a basic HTTP server
- ✅ Working with ES Modules (`type: module`)
- ✅ Automating workflows from the terminal
- ✅ Writing and running unit tests with Jest
- ✅ Understanding developer tooling & scripting

---

## 🎓 Course & Credential

This project was built as part of:

**Frontend Masters — Introduction to Node.js**

📜 **Course Completion Credential:**  
👉 https://static.frontendmasters.com/ud/c/dcb8516976/ehyaBEyiou/node-js-v3.pdf

---

## 👤 Author

**Kevin Parra**  
Senior Frontend Engineer | JavaScript • React • Node.js  

🔗 LinkedIn: https://www.linkedin.com/in/evinracher/
