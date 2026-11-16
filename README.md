# Rebuild

An offline study app you install on your phone from a web page. It starts with a placement test, then teaches several subjects side by side. A lesson only unlocks once you have mastered the one before it, and every lesson carries a thread of neuroscience.

## What is in it now

- Placement test: math, physics, chemistry, biology, biochemistry, physiology, statistics and neuroscience
- Algebra Unit 1 (7 lessons)
- Physics Unit 1 (3 lessons)
- Anatomy Unit 1 (3 lessons)
- Spaced review of everything you have mastered
- Progress saved on the phone, with a backup code on the Home tab

Chemistry, biology, biochemistry, statistics and neuroscience lessons come later.

## Turning the website on (one time)

1. On github.com, open this repository and go to **Settings**.
2. In the left menu choose **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, pick the branch that holds the app, leave the folder as **/ (root)**, and press **Save**.
5. Wait a minute or two, then open `https://lokispen.github.io/School/`.

## Installing it on a phone

- **iPhone:** open the address in Safari, tap the Share button, then **Add to Home Screen**.
- **Android:** open the address in Chrome, tap the three dots, then **Install app**.

Open the app from the new icon before you start the placement test, so your progress is saved inside the installed app. After the first open it works with no internet.

## How the files are organized

| File | What it holds |
| --- | --- |
| `index.html` | The page that loads everything |
| `css/app.css` | Colors and layout |
| `js/placement.js` | Placement test questions |
| `js/lessons-math.js`, `js/lessons-physics.js`, `js/lessons-anatomy.js` | Lessons, one file per subject |
| `js/app.js` | The engine: test, mastery gates, review schedule, saving |
| `js/util.js` | Small shared helpers |
| `sw.js` | Makes the app work offline |
| `manifest.webmanifest`, `icons/` | Name and icon for the home screen |

## Adding a subject or unit later

1. Add a new `js/lessons-<subject>.js` file in the same format as the existing ones. Lesson ids start with the subject letter, for example `c1` for chemistry.
2. Add a `<script>` line for it in `index.html` and add the file to the list in `sw.js`.
3. Add the subject to `TRACKS` at the top of `js/app.js` (and remove it from `SOON`).
4. Change `VERSION` at the top of `sw.js` (for example `rebuild-v2`). Phones only pick up the new files when this changes.
