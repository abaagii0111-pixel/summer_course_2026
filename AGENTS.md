# AGENTS.md

Static HTML/CSS/JS teaching workspace (summer_course_2026, GitHub: abaagii0111-pixel). No package.json, build step, tests, or lint — open the `.html` files in a browser to run/verify. Nothing to install or run.

## Layout & conventions
- Course weeks: `weekNN/<day>/` (monday/tuesday/thursday/friday), each lesson is a set of `.html` + `.css` + `js/<name>.js` files. Paired files share a base name (e.g. `ex01.html` / `ex01.css` / `js/ex01.js`).
- HTML links CSS and JS with relative paths (`./ex01.css`, `./js/ex01.js`).
- p5.js is vendored (9 copies of `p5.min.js`); every folder keeps its own copy and links it locally. Never assume a shared/CDN copy.
- Code comments are in Mongolian; git commit messages are in English ("summer course 2026 update").

## Firebase hosting (two setups)
- `my-firebase-workspace/` — multi-site config. `firebase.json` uses `target:` (project01, project02) mapped in `.firebaserc` to apps `my-project001-app` / `my-project002-app` on project `summer-course-2026-baagii`. Deploy per site: `firebase deploy --only hosting:project01`.
- `week04/tuesday/project01|02/` — older standalone dirs with `public/` subfolder + SPA rewrite; run `firebase deploy` from the project dir.
- `my-firebase-workspace/projects/project03/` is NOT wired into `firebase.json` targets yet (work-in-progress p5 sketch).

## Git gotchas
- Repo on `main`, remote `git@github.com:abaagii0111-pixel/summer_course_2026.git`.
- No `.gitignore`. `.DS_Store` and `.firebase/*.cache` are tracked — don't add new copies (e.g. re-copied `p5.min.js`, `.firebase/` caches).
- Uncommitted state (2026-08-18): `week07/tuesday/` untracked; root `project/` folder staged for deletion (superseded by `my-firebase-workspace/projects/`). When committing, stage only intended files and match the "summer course 2026 update" style.