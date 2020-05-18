# NRIC Validator

[![npm version](https://badge.fury.io/js/nric-validator.svg)](https://badge.fury.io/js/nric-validator)

An Utility to validate Malaysia NRIC

I decided to publish this as public library after applied this code to 3 Angular Projects and fixed some issues on it.


## Tech stacks

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.
- Typescript 3.8.3

## Benefits

1. No need `providers`
2. You don't need to add service to `constructor`

## Install

`npm i nric-validator`

## Features

- check NRIC valid
- get birth date
- get gender

## Usage

It is simple to use the library, just import it directly to the typescript component

```typescript
import { NricService as NRIC } from "nric-validator";
```

And use like this:

1. Check NRIC valid

```javascript
const nric = new NRIC(value);
nric.isValid // true or false
```

2. Get birth date

```javascript
const nric = new NRIC(value);
nric.birthDate // Fri Feb 24 1956 00:00:00 GMT+0730 (Malaysia Time)
```

3. Get gender

```javascript
const nric = new NRIC(value);
nric.gender // F (Female) or M (Male)
```
