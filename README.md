# Rock Paper Scissors

My first JavaScript project, built to put my JavaScript learning into practice.

I know that in 2026, AI can generate a game like this in minutes. But I believe understanding the fundamentals behind the code matters more than the finished result. This project is one of my first steps toward that understanding and toward building a developer mindset.

**[View Live Demo](https://ammucodes.github.io/rock-paper-scissors/)**

![Screenshot](images/screenshot.png)

---

## What I Learned & Implemented

- **Variables, operators & conditionals:** used `if / else if / else` with `===`, `&&`, and `||` to determine win, loss, or tie outcomes
- **Functions:** split the game into reusable functions like `playGame()`, `pickComputerMove()`, and `updateScoreElement()`, using parameters and return values to pass data between them
- **Randomness:** used `Math.random()` to generate the computer's move
- **Template literals:** built dynamic text and HTML using `${}`
- **DOM manipulation:** selected elements with `querySelector()` and updated the UI using `textContent` and `innerHTML`
- **Events:** handled user interactions with `addEventListener()` and arrow-function callbacks
- **Objects:** stored application state in a `score` object (`wins`, `losses`, `ties`)
- **JSON & localStorage:** persisted score data using `JSON.stringify()` and `JSON.parse()`
- **Code organization:** cached DOM elements in variables and kept HTML, CSS, and JavaScript in separate files
- **Debugging:** fixed logic and scope-related issues by using browser DevTools, console output, and step-by-step code tracing

---

## Features

- Play against the computer with random moves
- Automatic win / loss / tie detection
- Live score tracking that persists after refresh
- Reset button
- Hover and click effects, with image-based move buttons

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

---

## What's Next

This is **Version 1**. I plan to revisit it with loops, arrays, cleaner structure, and error handling around `localStorage`.

**Build → Learn → Improve → Repeat**