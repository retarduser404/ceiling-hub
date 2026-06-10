# ceiling-hub

> fr fr no cap, this is the move

a fresh React + Vite setup that just hits different. no bloat, no mid framework nonsense — just pure vibes and instant HMR that slaps.

## what's the tea ☕

ceiling-hub is your one-stop shop for spinning up React projects that actually *don't* take 47 years to load. we're talking:

- **React 19** with all the sauce 
- **Vite** (the speed runner's choice, periodt)
- **Zero config** — srsly just clone and ship
- **HMR that goes crazy** — change your code, see it instantly
- **ESLint opinions** (but make it fashion)

## the stack 

| thing | what it do |
|------|-----------|
| React | it's literally React. you know this one |
| Vite | fast build tool that didn't miss |
| TypeScript | optional but recommended (your future self will thank you) |
| ESLint | keeps the code touching grass |

## get started (it's giving easy) 🎯

```bash
# clone this bad boy
git clone https://github.com/retarduser404/ceiling-hub.git
cd ceiling-hub

# install the drip
npm install

# start the dev server (watch it go brrr)
npm run dev

# build for prod (let's get this bread )
npm run build
```

your app will be live at `http://localhost:5173` — go off 

## plugins (choose your fighter) ⚔️

we got two moves:

### [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)
uses **Oxc** — fast, optimized, and doesn't gatekeep

```bash
npm run dev  # already equipped with this one
```

### [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react)
uses **SWC** — even more cooked than Oxc (if you're feeling spicy)

```bash
npm install --save-dev @vitejs/plugin-react-swc
# then update vite.config.js to use swcReact() instead
```

## react compiler (the experimental era) 

the React Compiler is lowkey fire but we didn't enable it by default cuz it hits different on build times. if you're built different and want it anyway:

```bash
npm install --save-dev babel-plugin-react-compiler
```

then follow [this guide](https://react.dev/learn/react-compiler/installation) to set it up fr fr

## eslint (code hygiene matters bestie) 

already got the base setup, but if you're running prod, upgrade to TypeScript rules:

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

update `.eslintrc.js` to enable type-aware rules and watch your code stay immaculate 

## the vibes checklist ✅

- [ ] clone the repo (you got this)
- [ ] `npm install` (trust the process)
- [ ] `npm run dev` (watch the magic)
- [ ] make something unhinged and beautiful
- [ ] push it, git it, commit it
- [ ] link it in your portfolio (the endorsements will come)

## contributing (let's make it together) 

this is a template but it can be more. if you got a move that slaps:

1. fork it
2. make your changes (chef's kiss only)
3. send a PR 
4. i'll probably merge it cuz i'm not mid

## license

MIT — do whatever, i'm not the vibe police

---


*last updated: 2026 (the future is now, bestie)*
