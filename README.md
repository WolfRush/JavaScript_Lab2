# Johan Mossberg Portfolio
- A simple portfolio website, with separate pages for about me, projects, skills, and contact. Built with HTML, CSS, and standard JavaScript.

## Tech Stack
- HTML5, CSS3, JavaScript (no frameworks)

## Project Structure
- `index.html` — About + featured projects preview
- `projects.html` — Full projects list with filtering and timeline
- `skills.html` — Skill lists with star ratings
- `contact.html` — Contact form with validation and character counter
- `styles/style.css` — Global layout, typography, grid
- `styles/projects.css` — Project list styles and filter controls
- `styles/contact.css` — Form layout and validation states
- `scripts/projects.js` — Project data + rendering + filtering
- `scripts/contact.js` — Form validation, feedback, and character counter

## Features
- **Responsive layout** with sticky nav, hover states, and simple animations.
- **Skills section** with star ratings and descriptions.
- **Timeline** shows milestones on the projects page.
- **Dynamic projects filters** Shows the `projects` array in `scripts/projects.js`, with category filters (categories in the array must match the filter buttons) "All, Games, Modding, Web Development". index page shows top 2, projects page shows all.
-- Each array entry contains `title`, `description`, `category`, `technologies`, `image`, `link`
- **Contact form validation** error messages, required markers, character counter, success message.
- First/Last name: letters only
- Email: must match standard email pattern
- Phone: optional; accepts `+` and 7–15 digits
- Subject: required (must select an option)
- Message: minimum 20 characters; live counter shows progress

## Setup Instructions
1) Clone/download the repository files (`git clone https://github.com/WolfRush/JavaScript_Lab2.git`).
2) Open the folder in your editor (VS Code recommended) (`cd JavaScript_Lab2`, `code .`).
3) Run locally (pick one):
	- Open `index.html` in a modern browser.
	- Or start a static server (it is not needed for the code to work).
