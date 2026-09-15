# Jadyn's Personal Barista

A small home-screen app with Jadyn's espresso recipes — Hot and Iced, tap a
drink name to see the full recipe card. Built as a static site, no build step,
no backend.

## What's in here

```
index.html          the app
style.css            coffee-shop styling (Bungee + Karla fonts)
app.js                all 20 recipes + the tap-to-open logic
manifest.json         makes the site installable as an app
service-worker.js     lets it open even with a flaky connection
icons/                the coffee cup icon, pre-rendered at every size needed
```

## 1. Put it on GitHub

1. Create a new repository on GitHub (public repos get free Pages hosting) —
   something like `jadyns-barista`.
2. Upload every file in this folder to the repo, keeping the `icons/` folder
   structure intact.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub will give you a URL like:
   `https://<your-username>.github.io/jadyns-barista/`
   It can take a minute or two to go live the first time.

## 2. Install it on an iPhone (no App Store needed)

1. Open the GitHub Pages link **in Safari** (it has to be Safari, not Chrome,
   for this to work on iOS).
2. Tap the **Share** icon (the square with an arrow, in the bottom bar).
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add**.

That's it — a "Barista" icon (the coffee cup) shows up on the home screen.
Opening it from there launches full-screen, with no address bar, just like a
regular app.

## 3. Install it on Android / other phones

Open the link in Chrome — you'll usually see an **"Add to Home screen"** or
**"Install app"** prompt automatically. If not, it's in the browser's
&#8942; menu.

## Updating the recipes later

All the drink data lives in `app.js`, near the top, in a `DRINKS` object with
`hot` and `iced` arrays. Each drink is an object like:

```js
{
  name: "Drink Name",
  source: "Inspired by ...",
  tag: "one-line description",
  ingredients: [["Ingredient", "Amount"], ...],
  steps: ["Step one.", "Step two.", ...],
  notes: "optional extra note",   // omit this line if there's no note
}
```

Add, edit, or remove entries there, commit the change on GitHub (or push from
your machine), and the live site updates automatically — no rebuild needed.
If it's already installed on a phone, it'll pick up the change the next time
it's opened with a connection (thanks to the service worker refreshing its
cache).
