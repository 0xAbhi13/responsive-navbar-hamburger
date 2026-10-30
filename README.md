<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:0ea5e9&height=170&section=header&text=Responsive%20Navbar&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2021&descAlignY=62&descSize=17" alt="Responsive Navbar header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563eb&center=true&vCenter=true&width=720&lines=Veda+Technology+Internship+%E2%80%A2+Day+21;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Responsive+Navbar+%E2%80%A2+Hamburger+Menu" alt="Typing introduction" />

  <p><b>Light Theme &#183; Blue Accent &#183; Responsive &#183; Accessible &#183; No Frameworks</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=for-the-badge)
  ![Accessible](https://img.shields.io/badge/Accessible-2563eb?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-16a34a?style=for-the-badge)

</div>

---


## Features

- **Sticky header** that stays visible while scrolling.
- **Horizontal desktop menu** with hover and active-link styling.
- **Hamburger toggle** on mobile that animates into a close icon.
- **Slide-in mobile panel** with smooth CSS transition and backdrop.
- **Close on link click, backdrop click, or Escape key.**
- **aria-expanded / aria-label / aria-controls** kept in sync.
- **Responsive resize handling** between mobile and desktop.
- **Scroll-spy** active link highlighting via IntersectionObserver.
- **Touch-friendly targets** (min 48px) and focus-visible rings.
- **prefers-reduced-motion** respected.
- **No horizontal overflow**; tested down to 320px.

## Technologies

| Technology | Use |
|------------|-----|
| HTML5 | Semantic `nav`, `header`, `main`, `section`, `footer`, ARIA attributes (`index.html`) |
| CSS3 | Custom properties, Flexbox, transitions, media queries, focus states (`style.css`) |
| JavaScript | Toggle, backdrop, Escape, resize, scroll-spy (`script.js`) |
| SVG | Brand mark and favicon (`assets/favicon.svg`) |
| No Frameworks | Zero dependencies |

## Project Structure

```text
internship-task-21/
├── index.html          # Semantic structure and navbar markup
├── style.css           # Responsive styling and animations
├── script.js           # Navbar logic and accessibility
├── README.md           # This file
└── assets/
    └── favicon.svg     # Hamburger favicon
```

## How to Run

1. Open the `internship-task-21` folder.
2. Double-click `index.html` — opens in Chrome / Edge / Firefox.
3. Or serve it: `python -m http.server 8000` → http://localhost:8000
4. Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.

No install, no build, no dependencies.

Quick syntax check:

```powershell
node --check script.js
```

## Testing Checklist

- [x] Navbar displays horizontally on desktop.
- [x] Hamburger appears on mobile (≤768px).
- [x] Toggle animates to close icon when open.
- [x] Slide-in panel opens/closes smoothly.
- [x] Clicking a link closes the mobile menu.
- [x] Clicking the backdrop closes the menu.
- [x] Escape key closes the menu.
- [x] aria-expanded stays in sync.
- [x] Resizing between mobile/desktop resets state.
- [x] Active link updates on scroll.
- [x] Layout works at 320px, 375px, 768px, 1024px+.
- [x] No JavaScript console errors.
- [x] prefers-reduced-motion respected.

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:0ea5e9&height=120&section=footer" alt="Footer wave" />
  <p><sub>Veda Technology Internship — Day 21: Responsive Navbar with Hamburger Menu — HTML5 · CSS3 · Vanilla JavaScript</sub></p>
</div>
