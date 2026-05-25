
## Tic-Tac-Toe Game

A lightweight, responsive frontend implementation of the classic Tic-Tac-Toe game built using HTML5, CSS3, and Vanilla JavaScript.

## 🚀 Live Demo
*(Add your GitHub Pages link here once deployed)*

## 🎨 UI Features
- Minimalist color palette closely resembling modern web aesthetic (Teal background with custom rounded buttons).
- Dynamic interactive "New Game" option that surfaces automatically upon completion.
- Universal layout responsiveness.

## 🕹️ Rules & System Mechanics
1. The game is played on a 3x3 grid system.
2. Player 1 is **X**, and Player 2/AI is **O**. Turn actions alternate sequentially.
3. The engine monitors 8 specific win vectors (3 horizontal, 3 vertical, 2 diagonal):
   - Horizontal: `[0,1,2]`, `[3,4,5]`, `[6,7,8]`
   - Vertical: `[0,3,6]`, `[1,4,7]`, `[2,5,8]`
   - Diagonal: `[0,4,8]`, `[2,4,6]`
4. The game concludes immediately when a win vector condition evaluates true or a state of grid saturation is met (Draw).

## 🛠️ Technology Stack
- **Structure:** HTML5 
- **Styling:** CSS3 Grid and Flexbox alignment
- **Logic Handling:** Vanilla JavaScript (ES6 Execution context)

 ## HOW ITS LOOK.
 <img width="1909" height="913" alt="Screenshot 2026-05-25 184039" src="https://github.com/user-attachments/assets/042ec441-0daa-4ae7-94c7-0a2f10163520" />
 <img width="1902" height="915" alt="Screenshot 2026-05-25 184021" src="https://github.com/user-attachments/assets/63c8df3a-4643-4a6f-97c7-10c9a4fa588e" />
 <img width="1895" height="917" alt="Screenshot 2026-05-25 184209" src="https://github.com/user-attachments/assets/8f494279-9fbf-4ee9-af00-b9be683b1458" />




## 📂 File Architecture
```text
├── index.html   # Main structural architecture
├── style.css    # Interface layout mechanics & themes 
└── script.js    # Logic control & win-state evaluators
