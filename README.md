# Mitra Reptir
Mitra Reptir is a library for NodeJS (support typescript). 

## Install using NPM
```bash
$ npm install mitra-reptir
```

## Usage
This library was created refer to Mitra Reptir technical documentation version 1.0
Please see:
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