# Node.js versions list

🟨 Since getting a list of Node.js version numbers is tedious,
we’ll periodically convert the contents of the
[official dist](https://nodejs.org/dist) into JSON.

## System requirements

- Node.js >= 14.17

## Usage

First, you should install this package in your project.

```sh
npm install @kurone-kito/nodejs-versions-list
```

```sh
yarn add @kurone-kito/nodejs-versions-list
```

And, that’s all!

```ts
import list from '@kurone-kito/nodejs-versions-list';

console.log(JSON.stringify(list));
```

Since the body is _JSON_, you need to specify the `resolveJsonModule`
flag if you want to use it in your TypeScript project.

<!-- markdownlint-disable MD033 -->
<details>

<summary>
  The developer documentation for this library can be found here.
</summary>

## Install the dependencies

```sh
npm ci
```

## Linting

```sh
npm run lint
```

## Build

```sh
npm run prepack
```

</details>
<!-- markdownlint-enable MD033 -->

## License

MIT
