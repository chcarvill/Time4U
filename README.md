# T4U — Time4U

**Your personal reset toolkit.**

A lightweight, single-file web app that helps you decompress and reset — organised by how much time you have, not how you feel.

## What it is

When you're exhausted, overwhelmed, or just need a break, Time4U gives you a menu of body-based reset activities sorted into five time-based categories:

| Category | Time |
|---|---|
| ⚡ Quick reset | Under 2 minutes |
| 🌿 5 min chillout | Just enough to shift the state |
| ↻ 10 min reset | A proper pause |
| 〜 20 min deep retune | When you need a real reset |
| ☀ 3 hour overhaul | Full restoration mode |

Each activity includes a built-in timer (where relevant) you can start right from the card.

## How to use it

No build step, no dependencies, no server needed.

1. Clone or download this repo
2. Open `index.html` in any browser
3. That's it

```bash
git clone https://github.com/yourusername/time4u.git
cd time4u
open index.html
```

## Hosting on GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your app will be live at `https://yourusername.github.io/time4u`

## Customising activities

All activities live in the `data` array inside the `<script>` tag in `index.html`. Each activity looks like this:

```js
{
  name: 'Box breathing',
  desc: 'Inhale 4 counts, hold 4, exhale 4, hold 4. Repeat 3 times.',
  timer: 90  // seconds — set to null for open-ended activities
}
```

Edit, add, or remove activities freely.

## Stack

- Plain HTML, CSS, JavaScript — no frameworks
- Google Fonts (DM Serif Display + DM Sans)
- No dependencies, no build tools

---

*Made for you.*
