# Mitra Reptir
[![NPM](https://nodei.co/npm/mitra-reptir.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/mitra-reptir/)  

[![npm version](https://img.shields.io/npm/v/mitra-reptir.svg?style=flat-square)](https://www.npmjs.org/package/mitra-reptir)
![NPM download/month](https://img.shields.io/npm/dm/mitra-reptir.svg)
![NPM download total](https://img.shields.io/npm/dt/mitra-reptir.svg)

Mitra Reptir is a library for NodeJS (support typescript). 

## Install using NPM
```bash
$ npm install mitra-reptir
```

## Install using YARN
```bash
$ yarn add mitra-reptir
```

## Usage
This library was created refer to Mitra Reptir technical documentation version 1.0
Please see:
- [Website](https://reptir.com/)
- [Mitra Website](https://mitra.reptir.com/)
- [Api Docs](https://reptir.docs.apiary.io/)

### Initialize
```javascript
import MitraReptir from 'mitra-reptir'

const reptir = new MitraReptir('YOUR-API-KEY')
```

### Main Method
- `account()` this is to get account info
- `productList()` this is to get product list
- `productDetail('code')` this is to get product detail
- `buyProduct('code', 'dest', 'ref')` this is to buy product (`ref` is optional)
- `ppobData()` this is to get PPOB Data
- `ppobInquiry('code', 'dest', 'ref')` this is to get PPOB Inquiry (`ref` is optional)
- `ppobPayment('inquiry', 'ref')` this is to pay the PPOB Inquiry (`ref` is optional)

### Example
#### Get Account Info
```javascript
try {
  const result = await reptir.account()
} catch (e) {
  console.log(e)
}
```

#### Get Product List
```javascript
try {
  const result = await reptir.productList()
} catch (e) {
  console.log(e)
}
```

#### Get Product Detail
```javascript
try {
  const result = await reptir.productDetail('code')
} catch (e) {
  console.log(e)
}
```

#### Buy Product
```javascript
try {
  const result = await reptir.buyProduct('code', 'dest', 'ref')
} catch (e) {
  console.log(e)
}
```
param `ref` is optional

#### PPOB Data
```javascript
try {
  const result = await reptir.ppobData()
} catch (e) {
  console.log(e)
}
```

#### PPOB Inquiry
```javascript
try {
  const result = await reptir.ppobInquiry('code', 'dest', 'ref')
} catch (e) {
  console.log(e)
}
```
param `ref` is optional

#### PPOB Payment
```javascript
try {
  const result = await reptir.ppobPayment('inquiry', 'ref')
} catch (e) {
  console.log(e)
}
```
param `ref` is optional