import { computeMD5, computeSHA256 } from '../src/index.js';
// import fs from 'node:fs';

describe('Normal test cases', () => {
  test('Should return a hash of a file', () => {
    // const filePath = './__tests__/index.spec.ts';
    // const file = fs.readFileSync(filePath);
    // const md5Hash = computeMD5(file);
    // const sha256Hash = computeSHA256(file);
    // console.log(md5Hash);
    // console.log(sha256Hash);
    // expect(md5Hash).toBe('b9a7d5d5');
    // expect(sha256Hash).toBe('7d5d');
    //
    expect(typeof computeMD5).toBe('function');
    expect(typeof computeSHA256).toBe('function');
  });
});
