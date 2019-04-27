"scripts": {
  "build": "NODE_ENV=production node postcss",
  "start": "NODE_ENV=development node postcss"
}
const { readFileSync } = require('fs')
 
const postcss = require('postcss')
const postcssrc = require('postcss-load-config')
 
const css = readFileSync('index.sss', 'utf8')
 
const ctx = { parser: true, map: 'inline' }
 
postcssrc(ctx).then(({ plugins, options }) => {
  postcss(plugins)
    .process(css, options)
    .then((result) => console.log(result.css))
})