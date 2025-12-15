# Zustand State Management (Sync & Async)

This repository contains a **React** application built with **Vite** that demonstrates
state management using **Zustand**.

The project covers:
- ✅ **Synchronous Todo state**
- 🔄 **Asynchronous Todo state**
- 🔢 **Global Counter state**
- 📄 Page-based separation of logic

It is designed for learning and comparing **sync vs async state management using Zustand**.

---

## 🚀 Tech Stack

- **React**
- **Zustand**
- **Vite**
- **JavaScript (ES6+)**
- **JSON Server (for async todos)**

---

## 📂 Project Structure

```text
src/
├── pages/
│   ├── Home.jsx        # Main page
│   ├── Info.jsx        # Info/About page
│   ├── Sync.jsx        # Sync todo example
│   ├── Async.jsx       # Async todo example
│   └── Counter.jsx    # Global counter example
│
├── store/
│   ├── counter.js      # Counter Zustand store
│   ├── todo.js         # Single todo store
│   └── todos.js        # Todos list store (sync & async)
│
├── Layout.jsx          # App layout
├── App.jsx
├── main.jsx
└── index.css


📝 Features
🔹 Sync Todo

Add and remove todos synchronously

Instant state updates

No API calls

🔹 Async Todo

Fetch todos asynchronously

Add todos via API

Uses db.json as a mock backend

🔹 Counter

Global counter state

Increment / decrement actions

Shared across pages