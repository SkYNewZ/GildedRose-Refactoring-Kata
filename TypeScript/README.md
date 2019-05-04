# GildedRose-Refactoring-Kata report

## Prerequisites

In order to run this code, you need
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/)/Npm

> This project was init with yarn, I advise to use it for more simplicity

## Getting started

```bash
$ git clone https://github.com/SkYNewZ/GildedRose-Refactoring-Kata.git GildedRose
$ cd $_/TypeScript
$ yarn # or npm i
```

## Lauch tests

```bash
$ yarn test
```

It will prompt tests case results as well as coverage report

## Run single file

If you need to run [`golden-master-text-test.ts`](test/golden-master-text-test.ts) specifically, just run

```bash
$ yarn run compile # will compile Typescript files to Javascript files
$ node test/golden-master-text-test.js
```

## Code explanation

1. Read and understand the instructions
2. Read and understand given code
3. Write all test cases accordingly
4. Replace `for` loop by `forEeach` loop for a better readability
5. Take care of the `SULFURAS` case because it is the easiest, its values never change
6. Try to clean each `if` under `if` under `if` to better way
7. (Re)Write some code to ensure that the tests are validated :sweat_smile: (Indeed I spent most of my time writing tests, in the TDD way)

Thanks for this test !
