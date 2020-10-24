# NRIC Validator

![npm](https://img.shields.io/npm/v/nric-validator) ![library size](https://img.shields.io/github/size/hoangtranson/nric-validator/index.js) ![npm](https://img.shields.io/npm/dw/nric-validator)

An Utility to validate Malaysia NRIC

I decided to publish this as public library after using this library to 3 Angular Projects and fixed some issues on it.


## Tech stacks

- Javascript
- Ava

## Install

`npm i nric-validator`


## Features

- check NRIC valid
- get birth date
- get gender
- get age
- format NRIC number

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

### Check NRIC valid

Valid format is `YYMMDD-PB-###G`.

**YYMMDD**, the person's date of birth in the ISO 8601:2000 format; for example, a person born on 16 September 1963, would have 630916 as the first six digits of their identity card. A person born on 1 January 1900 would have 000101 as the first digits, same with a person born on 1 January 2000.

**PB**, the seventh and eighth digit, based on the place of birth of the person, which will be referred from the birth certificate upon application of the MyKad.

**###**, the ninth through eleventh digit is the generic special number generated by the National Registration Department of Malaysia's computer system.

**G**, the 12th digit represents the gender of the person. The odd numbers for G denote male while the even numbers denote female.

- if valid return `true`
- if invalid return `Error('Invalid value number format')` || `false`

```javascript
const nric = new NRIC(value);
nric.isValid
```

### Get birth date 

- if valid return birthday `Fri Feb 24 1956 00:00:00 GMT+0730 (Malaysia Time)`
- if invalid return `Error('Invalid value number format')` || `false`

```javascript
const nric = new NRIC(value);
nric.birthDate // Fri Feb 24 1956 00:00:00 GMT+0730 (Malaysia Time)
```

### Get gender

- if valid return F || M
- if invalid return `Error('Invalid value number format')` || `false`

```javascript
const nric = new NRIC(value);
nric.gender // F (Female) or M (Male)
```

### Get age

- if valid return age
- if invalid return `Error('Invalid value number format')` || `false`

```javascript
const nric = new NRIC(value);
nric.age // 29
```

### Format NRIC number

A static method with 2 arguments:
- NRIC value
- Delimiter (default `-`)

```javascript
NRIC.format('560224608354') // 560224-60-8354
NRIC.format('560224608') // 560224-60-8
NRIC.format('56022460') // 560224-60
NRIC.format('56022') // 56022
```

- if the value length more than 12, return `Error('Invalid value number length')`

```javascript
NRIC.format('56022460835456') // Error('Invalid value number length')
```

- if the value is not numberic, return `Error('Invalid value number format')`

```javascript
NRIC.format('1ad224-10-8354') // Error('Invalid value number format')
```

### Support Traditional Way

We can get the library directly from here:

`https://unpkg.com/nric-validator@0.3.1/nric.min.js`

then, you can get it from window object and using normally.

```javascript
const test = new window.NRIC('560224608354');
test.isValid // true
```