# bun-express

## bun-express

A minimal Express-style scaffold adapted to run with Bun (and Node.js). This repository contains the typical Express generator layout (routes, views, public assets) and a small starter server.

### Why this repo

- Easy-to-read example of an Express app folder layout
- Works with Bun (recommended) and Node.js
- Good starting point for small demos or to learn how Bun runs an Express app

### Contents

- `app.js` - Express app setup
- `server.js` - Optional server launcher
- `bin/www` - Executable script used to start the server (used by `npm start`/`bun run start`)
- `routes/` - Route handlers (`index.js`, `users.js`)
- `views/` - Jade (Pug) templates
- `public/` - Static files (CSS, JS, images)
- `package.json` - Project manifest and scripts

### Prerequisites

- Bun (recommended): https://bun.sh
- Or Node.js >=14 and npm/yarn

### Install

Using Bun (fastest):

```bash
bun install
```

Using npm:

```bash
npm install
```

### Run

Start with Bun (uses the `start` script in `package.json` which launches `bin/www`):

```bash
bun run start
```

You can also invoke the launcher directly:

```bash
bun bin/www
```

With Node / npm:

```bash
npm start
```

By default the app listens on the port defined in the `PORT` environment variable (defaults to `3000`). Open http://localhost:3000 in your browser.

### Project structure

```
./
├─ app.js
├─ bin/www
├─ package.json
├─ routes/
│  ├─ index.js
│  └─ users.js
├─ public/
│  ├─ stylesheets/
│  └─ javascripts/
└─ views/
	├─ index.jade
	├─ layout.jade
	└─ error.jade
```

### Development notes

- Views use Jade (now called Pug) templates. Rename to `.pug` and update the view engine if you upgrade.
- `bin/www` is the standard Express launcher; it reads `PORT` and starts the HTTP server.

### Troubleshooting

- If Bun commands fail, ensure Bun is installed and on your PATH: `bun -v` should print the version.
- If `npm start` fails, run `npm install` and check your Node.js version with `node -v`.

### Customizing

- Change the listening port with `PORT=4000 bun run start` or `PORT=4000 npm start`.
- Add dependencies with `bun add <pkg>` or `npm install <pkg>`.

### Tests

No tests included by default. Add a testing framework (Jest, Mocha, etc.) and add a `test` script to `package.json`.

### License

MIT — see LICENSE (if you want to add one)

### Contributing

Contributions are welcome. Open issues or PRs with small, focused changes.

### Acknowledgements

This repo structure is based on the default Express generator layout and adapted for Bun.
