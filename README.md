# aview

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/aview)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/aview)
[![aview](https://img.shields.io/badge/aview-0.0.3-brightgreen.svg)](https://www.npmjs.com/package/aview)

## Build Setup

``` bash
# install dependencies
npm i aview --save

# serve with hot reload at localhost:8080
npm run dev / npm start

# build for production with minification
npm run dist:dev

# build for production with minification
npm run dist:prod
```

## Quick Start

``` bash
# global imports
import Vue from 'vue'
import aview from 'aview'
Vue.use(aview)

# needs imports way1
import Vue from 'vue'
import { atable, aform } from 'aview'
Vue.use(atable);

# needs imports way2
import Vue from 'vue'
import { atable, aform } from 'aview'
Vue.component('atable', atable);
```
