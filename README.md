# NRIC Validator

![npm](https://img.shields.io/npm/v/nric-validator) ![npm bundle size](https://img.shields.io/bundlephobia/min/nric-validator) ![npm](https://img.shields.io/npm/dw/nric-validator)

An Utility to validate Malaysia NRIC

I decided to publish this as public library after applied this code to 3 Angular Projects and fixed some issues on it.


## Tech stacks

- Javascript
- Ava

## Install

`npm i nric-validator`

## Features

- check NRIC valid
- get birth date
- get gender

## Benefits

- Small bundle size
- Work with all frameworks
- Simple to use

## Usage

It is simple to use the library, just import it directly to the typescript component

```typescript
import NRIC from "nric-validator";
```

And use like this:

1. Check NRIC valid

- if valid return `true`
- if invalid return `Error('Invalid value number format')` || `false`

```javascript
const nric = new NRIC(value);
nric.isValid
```

2. Get birth date 

- if valid return birthday `Fri Feb 24 1956 00:00:00 GMT+0730 (Malaysia Time)`
- if invalid return `Error('Invalid value number format')` || `false`

```javascript
const nric = new NRIC(value);
nric.birthDate // Fri Feb 24 1956 00:00:00 GMT+0730 (Malaysia Time)
```

3. Get gender

- if valid return F || M
- if invalid return `Error('Invalid value number format')` || `false`

```javascript
const nric = new NRIC(value);
nric.gender // F (Female) or M (Male)
```
