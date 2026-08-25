# AGENTS.md

Статик HTML/CSS/JS заах ажлын орон зай (summer_course_2026, GitHub: abaagii0111-pixel). `package.json`, build алхам, тест, lint байхгүй — `.html` файлуудыг браузер дээр нээж ажиллуулна/шалгана. Юу ч суулгах, ажиллуулах шаардлагагүй.

## Бүтэц & дүрмүүд
- Хичээлийн долоо хоногууд: `weekNN/<day>/` (monday/tuesday/thursday/friday), хичээл бүр `.html` + `.css` + `js/<name>.js` файлуудаас бүрдэнэ. Хосолсон файлууд нэг нэртэй (жишээ нь `ex01.html` / `ex01.css` / `js/ex01.js`; хожмын долоо хоногт `beginner.html` / `js/beginner.js` гэх мэт тайлбартай нэршлүүд хэрэглэгдэнэ).
- HTML нь CSS болон JS-г харьцангуй замаар холбоно (`./ex01.css`, `./js/ex01.js`).
- p5.js нь фолдер бүрт тус тусад нь хадгалагддаг (13 хуулбар tracked, `project03/js/p5.min.js` + week05–08); фолдер бүр өөрийн хуулбарыг хадгалж, локалаар холбоно. Хуваалцсан/CDN хуулбарыг хэзээ ч бүү тооц.
- Кодын тайлбарууд Монгол хэлээр; git commit мессежүүд Англи хэлээр ("summer course 2026 update").
- Нэршлийн алдаанууд/жигд бус байдал — фолдер нэрээр бүү таа: `week02/mondayy` (monday биш), `week01/friday/Lesson02|03`, `week03/monday/thursday`, `week07/friday/catch-target/` зэрэг дэд фолдерууд байна.

## Firebase hosting (хоёр тохиргоо)
- `my-firebase-workspace/` — олон сайттай тохиргоо (эндээс deploy хийнэ). `firebase.json` нь `target:` project01/02/03 ашиглаж, `.firebaserc`-т `my-project001-app` / `my-project002-app` / `my-project003-app` аппуудад `summer-course-2026-baagii` төсөл дээр холбогддог. Сайт бүрээр deploy: `firebase deploy --only hosting:project03`.
- `week04/tuesday/project01|02/` — хуучин бие даасан хавтаснууд, `public/` дэд фолдер + SPA rewrite; `firebase deploy`-г тухайн төслийн хавтсаас ажиллуулна.
- `my-firebase-workspace/projects/project03/` — одоогийн хийгдэж буй p5 sketch, `firebase.json` болон `.firebaserc`-т аль хэдийн холбогдсон.

## Git gotcha-ууд
- Репо `main` дээр, remote `git@github.com:abaagii0111-pixel/summer_course_2026.git`.
- Root `.gitignore` байхгүй. `.DS_Store` (3 хуулбар) болон `.firebase/*.cache` (3 хуулбар) tracked — шинэ хуулбар нэмж болохгүй (жишээ нь дахин хуулсан `p5.min.js`, `.firebase/` cache). Зөвхөн `week04/tuesday/project01|02/.gitignore` байдаг.
- Энгийн урсгал: шинэ `weekNN/` фолдер untracked харагддаг бөгөөд нэг "summer course 2026 update" commit-оор бүхэлдээ commit хийгддэг. Эхлээд `git status` шалгаж, зөвхөн зориулалтын файлуудыг stage хийх (хуучин долоо хоногт хамааралгүй өөрчлөлт хийхгүй байх) мөн commit мессежийн хэв маягийг баримтлах. `my-firebase-workspace/.firebase/hosting.*.cache` tracked тул deploy бүрийн дараа өөрчлөгдөнө — энэ нь хэвийн, stage бүү хий.
- Төлөв (2026-08-25): идэвхтэй ажил `my-firebase-workspace/projects/project03/` — `index.html`, `js/sketch.js`, `style.css` өөрчлөгдсөн, `screenshots/gal-togoo.jpg` + `screenshots/play.jpeg` untracked; `week08/monday/` commit хийгдсэн, `week08/`-ийн бусад өдрүүд хоосон.
