# webpack-sass-example

This is an example of sass/scss and webpack integration.

## Requirements
- npm >3

## How to use

Download or clone this repository, and run:
```bash
$ npm install
```

Open dev mode:
```bash
$ npm run hot-dev
```

Open `http://localhost:8080/`, and you can see basic UI. Now return to your editor and change any sass setting in `scss/partials/index.scss`. After save the file, browser will automatically reload and style changed.

Host mode:
```bash
$ npm run host
```

Use host feature of webpack-dev-server. It alllows your colleague to see your web page from LAN. Just give them url address returned in terminal.

Generate bundle：
```bash
$ npm run build
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)