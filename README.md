# Ramadan RHCSA Training 🐧

A lightweight, frontend-only web app for structured RHCSA (Red Hat Certified System Administrator) training during Ramadan. Built with vanilla HTML, CSS, and JavaScript.

**Instructor:** Mushfiqur Rahman  
**Developed by:** [Zihad Hasan](https://www.linkedin.com/in/pkmzihad/)

---

## 🚀 Quick Start

```bash
git clone https://github.com/zihaaaad/ramadan-rhcsa-training.git
cd ramadan-rhcsa-training
# Open index.html in any browser — no server needed!
```

---

## 📁 Project Structure

```
├── index.html    # Main HTML skeleton (dashboard + class view)
├── style.css     # Complete design system & responsive styles
├── script.js     # Content-block rendering engine & quiz system
├── data.js       # All class data (structured content blocks)
├── favicon.ico   # Site icon
└── README.md     # This file
```

---

## ➕ How to Add a New Class

Open `data.js` and add a new entry to the `classData` object:

```js
'2026-03-04': {                          // Date in YYYY-MM-DD format
    title: "File System Hierarchy",       // Class title
    classNumber: 3,                       // Sequential class number
    description: "Short description...",  // Dashboard card description
    sections: [                           // Content blocks (see below)
        {
            type: 'section',
            title: 'Section Title',
            blocks: [
                { type: 'paragraph', text: 'Your text here...' },
                { type: 'terminal', commands: ['ls -la', 'cd /etc'] },
                // ... more blocks
            ]
        }
    ],
    questions: [                          // Quiz questions
        {
            id: 11,                       // Unique ID
            text: "Question text?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: 0              // 0-indexed correct option
        }
    ]
}
```

---

## 🧩 Supported Content Block Types

| Block Type | Purpose | Required Fields |
|---|---|---|
| `section` | Groups blocks under a heading | `title`, `blocks[]` |
| `heading` | Section heading | `text` |
| `subheading` | Sub-section heading | `text` |
| `paragraph` | Body text (supports HTML) | `text` |
| `list` | Bullet list | `items[]` |
| `quote` | Quote block | `text` (string or array) |
| `highlight` | Key concept box | `text`, optional `title` |
| `terminal` | Terminal/code example | `commands[]` |
| `alert` | Warning/note callout | `text`, optional `label` |
| `cards` | Side-by-side info cards | `items[]` → `icon`, `title`, `text`, `list[]`, `alert` |
| `timeline` | Step-by-step process | `steps[]` → `title`, `text`, `highlight?` |
| `history` | Historical timeline | `items[]` → `year`, `title`, `text`, `highlight?` |
| `table` | Data table | `headers[]`, `rows[][]` |
| `comparison` | Side-by-side comparison | `items[]` → `header`, `cssClass`, `list[]` |
| `qa` | Q&A pairs | `items[]` → `question`, `answer` |
| `numbered-facts` | Numbered fact list | `items[]` → `title`, `text` |
| `prompt-structure` | Shell prompt breakdown | `parts[]` → `label`, `value` |
| `lts-box` | LTS info box | `title`, `text` |

---

## 🎨 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, responsive grid, animations
- **JavaScript** — Content rendering engine, quiz system
- **Google Fonts** — Poppins + Noto Sans Bengali

---

## 📄 License

© 2026 Ramadan RHCSA Training. Developed by [Zihad Hasan](https://zihadhasan.web.app/).
