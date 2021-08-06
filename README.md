# 🟨 `@kurone-kito/nodejs-versions-list`: JSON of Node.js versions list

Getting a list of Node.js versions can sometimes be a pain. Typically,
you can parse the [official dist](https://nodejs.org/dist) to get it,
but you may want to get the version number more easily.

There is also a handy library for this purpose,
**[`all-node-versions`](https://www.npmjs.com/package/all-node-versions)**.

The `@kurone-kito/nodejs-versions-list` library pre-parses the
results of _his_ library into JSON so that you can get a list of
versions of this package at the time you installed it.

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

And, that’s all!

```ts
import list from '@kurone-kito/nodejs-versions-list';

console.log(JSON.stringify(list.versions));
console.log(JSON.stringify(list.majors));
```

Since the body is _JSON_, you need to specify the `resolveJsonModule`
flag if you want to use it in your TypeScript project.

See the
**[all-node-versions](https://www.npmjs.com/package/all-node-versions)**
package’s document for the JSON structure.

<!-- markdownlint-disable MD033 -->
<details>

<summary>
  The type definition of JSON
</summary>

```ts
interface AllNodeVersionsReturns {
  /**
   * List of Node.js major releases sorted from the most to the
   * least recent. Each major release has the following properties.
   */
  majors: {
    /**
     * Latest version for that major release,
     * as a `major.minor.patch` string.
     */
    latest: string;
    /**
     * LTS name, lowercased. `undefined` if the major release is not LTS.
     */
    lts?: string;
    /** Major version number. `0` for old releases `0.*.*`. */
    major: number;
  }[];
  /**
   * List of available Node.js versions sorted from the most to the
   * least recent. Each version is a `major.minor.patch` string.
   */
  versions: string[];
}
```

</details>

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
