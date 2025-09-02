
---

# 🎮 Tokenizer Quest: 8-Bit Edition

A retro-styled browser game where you battle with **tokens** instead of swords ⚔️!
Encode your secret messages into tokens, or decode enemy tokens back into text using **Tiktoken** — all wrapped in a nostalgic **80’s arcade neon UI**.

---

## ✨ Features

* 🕹️ **Encode Mode**: Turn any text into token IDs.
* 👾 **Decode Mode**: Transform token IDs back into readable text.
* 🌈 **Retro 8-bit UI**: Neon borders, CRT scanlines, glitch animations.
* ⚡ **Runs in the Browser**: No backend needed — uses `js-tiktoken`.

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, CSS3, Vanilla JavaScript
* **Tokenizer**: [js-tiktoken](https://github.com/openai/tiktoken/tree/main/js) (loaded via ESM)

---

## 📂 Project Structure

```
├── index.html   # Main game page
├── style.css    # (Optional) external styles
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/tokenizer-quest.git
cd tokenizer-quest
```

### 2️⃣ Run Locally

Simply open `index.html` in your browser (double-click it or use **Live Server** in VS Code).

---

## 🕹️ How to Play

### 🎯 Encode Attack (Player 1)

1. Enter a **secret message** in the input field.
2. Click **"Encode Attack!"**.
3. Watch it transform into a sequence of token IDs.

### 👾 Decode Attack (Player 2)

1. Paste a **list of tokens** (comma-separated).
2. Click **"Decode Attack"**.
3. See the decoded message appear on screen.

---

## 📸 Screenshots

### Main UI

![Screenshot](screenshot.png)

---

## 💡 Example

* Input (Player 1):

  ```
  Hello world!
  ```

* Output Tokens:

  ```
  9906, 1917, 0
  ```

* Decode those tokens back → **Hello world!**

---

## 🧑‍💻 Contributing

Feel free to fork this project, add new retro styles, or extra **levels** (like scoring system or multiplayer).

---

