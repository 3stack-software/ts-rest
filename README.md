# tRPC

<p align="center">
 <img src="https://avatars.githubusercontent.com/u/109956939?s=400&u=8bf67b1281da46d64eab85f48255cd1892bf0885&v=4" height=150 />
</p>

 <p align="center">RPC-like client and server helpers for a magical end to end typed experience</p> 
 <p align="center">
   <a href="https://www.npmjs.com/package/@ts-rest/core">
   <img src="https://img.shields.io/npm/v/@ts-rest/core.svg" alt="langue typescript">
   </a>
   <a href="https://www.npmjs.com/package/@ts-rest/core">
   <img alt="npm" src="https://img.shields.io/npm/dw/@ts-rest/core">
   </a>
   <a href="https://codecov.io/gh/ts-rest/ts-rest" > 
 <img src="https://codecov.io/gh/ts-rest/ts-rest/branch/main/graph/badge.svg?token=JPOVG7KC3Z"/> 
 </a>
 </p>

# Introduction

tRPC provides an RPC-like client side interface over your existing REST APIs, as well as allowing you define a _separate_ contract implementation rather than going for a 'implementation is the contract' approach, which is best suited for smaller or simpler APIs.

If you have non typescript consumers, a public API, or maybe want to add type safety to your existing REST API? tRPC is what you're looking for!

## Features

- End to end type safety 🛟
- Magic RPC-like API 🪄
- Tiny bundle size 🌟 (1kb!)
- Well-tested and production ready ✅
- No Code Generation 🏃‍♀️
- Zod support for body parsing 👮‍♀️
- Full optional OpenAPI integration 📝

## Quickstart

Install the core package

```bash
yarn add @ts-rest/core
# Optional react-query integration
yarn add @ts-rest/react-query
# Pick your backend
yarn add @ts-rest/nest @ts-rest/express
# For automatic server OpenAPI gen
yarn add @ts-rest/open-api
```

Create a contract, implement it on your server then consume it in your client. Incrementally adopt, trial it with your team, then get shipping faster.

👉 Read more on the official [Quickstart Guide](https://ts-rest.com/docs/quickstart) 👈
