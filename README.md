# hview

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/hview)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/hview)
[![hview](https://img.shields.io/badge/hview-0.0.3-brightgreen.svg)](https://www.npmjs.com/package/hview)

## Build Setup

``` bash
# install dependencies
npm i hview --save

# serve with hot reload at localhost:8080
npm run dev / npm start

# build for production
npm run dist:dev

# build for production with minification
npm run dist:prod
```

## Quick Start

``` bash
# global imports
import Vue from 'vue'
import hview from 'hview'
Vue.use(hview)

# needs imports way1
import Vue from 'vue'
import { htable, hform } from 'hview'
Vue.use(htable);

# needs imports way2
import Vue from 'vue'
import { htable, hform } from 'hview'
Vue.component('htable', htable);
```
