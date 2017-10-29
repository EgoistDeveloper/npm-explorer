# [NPM Explorer](https://zitros.github.io/npm-explorer)

Online file explorer for [NPM](https://www.npmjs.com/).
Visit [zitros.github.io/npm-explorer](https://zitros.github.io/npm-explorer).

The main purpose of this service is to improve quality of NPM packages, primarily because many people
publish a lot of unnecessary files to NPM (like CI configs, tests, build tools or even whole repositories).
This service helps to see what files does NPM package include along with some other metrics regarding
to the package quality.

You can easily hotlink packages and individual files, for example:

```txt
https://zitros.github.io/npm-explorer/?p=lodash/LICENSE
```

Preview
-------

Import files from [Lodash](https://lodash.com) carefully!

![2017-10-29](https://user-images.githubusercontent.com/4989256/32148242-9ef3f002-bcfc-11e7-97b5-d197a13fec5a.png)

Development
-----------

Anyone is welcome to contribute to the project. The project hosted at [zitros.github.io/npm-explorer](https://zitros.github.io/npm-explorer)
is located in the `docs` directory of this repository. To build this project from sources (`src` 
directory), run the following:

```bash
npm run build
```

or

```bash
npm run dev
```

For non-minified (development) build with sourcemaps.

License
-------

[MIT](license) © [Nikita Savchenko](https://nikita.tk)
