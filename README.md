# file-hash
> A lightweight library for calculating MD5 and SHA256 hashes of files in the browser.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation

```shell
# peer dependencies
npm install crypto-js
# install file-hash
npm install @jswork/file-hash
```

## usage

```js
import { computeMD5, computeSHA256} from '@jswork/file-hash';

const file = new File(['hello world'], 'hello.txt');
const md5 = await computeMD5(file);
const sha256 = await computeSHA256(file);
console.log(md5, sha256); 
// 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069 
// 4f8b42c22dd3729b519ba6f68d2da7cc5b2d606d05daed5ad5128cc03e6c6358
```

## license

Code released under [the MIT license](https://github.com/afeiship/file-hash/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/file-hash
[version-url]: https://npmjs.org/package/@jswork/file-hash
[license-image]: https://img.shields.io/npm/l/@jswork/file-hash
[license-url]: https://github.com/afeiship/file-hash/blob/master/LICENSE.txt
[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/file-hash
[size-url]: https://github.com/afeiship/file-hash/blob/master/dist/file-hash.min.js
[download-image]: https://img.shields.io/npm/dm/@jswork/file-hash
[download-url]: https://www.npmjs.com/package/@jswork/file-hash
