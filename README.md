# Angular ES2015 DemoApp

> An Angular ES2015 demo application using Angular, AngularUI Router, Angular Translate and Angular Material.

- Angular
- AngularUI Router
- Angular Translate
- Angular Material
- Webpack
- Babel
- ESLint
- BrowserSync

### Screenshots

![](screenshots/01.png)
![](screenshots/02.png)
![](screenshots/03.png)
![](screenshots/04.png)

### Requirement

`Node >= 4.0.0`

### Usage

Install dependencies:
```sh
$ npm install
```

Start the JSON API server:
```sh
$ npm run api-server
```

#### Development

Open another terminal and running below command:
```sh
$ npm start
```

`http://localhost:3001` will automatic open in your browser with browser-sync.

#### Production

Build the bundle js:
```sh
$ npm run build
```

Start the production server:
```sh
$ npm run prod
```

### Scaffold

```sh
$ gulp make --name={name} --path={path} [--route]
```

- `name`: component name.
- `path`: component path.
- `route`: if you set `--route` option that will stubing route config for your module.

For example, if you execute `gulp make --name=create --path=posts --route`, it will generate following files and include route config:

```
src/
└── components
    └── posts
        └── create
            ├── create.controller.js
            ├── create.css
            ├── create.html
            ├── create.js
            └── create.spec.js
```


Open `http://localhost:3000` in your browser.

### Referencies
- https://github.com/AngularClass/NG6-starter
- https://github.com/nihgwu/hexo-hey
