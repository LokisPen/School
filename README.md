# Rebuild

An offline study app you install on your phone from a web page. It starts with a placement test, then teaches several subjects side by side. A lesson only unlocks once you have mastered the one before it, and every lesson carries a thread of neuroscience.

## What is in it now

- Placement test: math, physics, chemistry, biology, biochemistry, physiology, statistics and neuroscience
- Math: Unit 1, algebra from zero (7 lessons) and Unit 2, powers, units and logarithms (5 lessons)
- Unit 1 (3 lessons each) of physics, chemistry, biology, biochemistry, anatomy and physiology, statistics and neuroscience
- A checkpoint at the end of every unit, which opens the next unit
- Testing out: if the placement test shows you know a subject's basics, you can take a unit's checkpoint without doing its lessons
- Spaced review of everything you have mastered
- A library of textbooks and a set of notes, under the More tab
- Progress saved on the phone, with a backup code under the More tab

More units for each subject come later. The plan is in `CLAUDE.md`.

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
| `js/lessons-*.js` | Lessons, one file per subject and unit |
| `js/reference.js` | The library and notes |
| `js/app.js` | The engine: test, mastery gates, units, review schedule, saving |
| `js/util.js` | Small shared helpers |
| `sw.js` | Makes the app work offline |
| `manifest.webmanifest`, `icons/` | Name and icon for the home screen |
| `tests/e2e.js` | An automated check of the whole app |
| `CLAUDE.md` | Notes for whoever works on the app next, including what to build next |

## Getting an update onto your phone

When new lessons are published, open the app while online. It downloads the update in the background and shows an "update is ready" card on the Home tab; tap it. If you do not see the card, close the app fully and open it again. Your progress is kept.

## Adding a unit later

See `CLAUDE.md`. In short: add a lessons file, list it in `index.html` and `sw.js`, add the unit to `TRACKS` in `js/app.js`, and change `VERSION` in `sw.js`.
