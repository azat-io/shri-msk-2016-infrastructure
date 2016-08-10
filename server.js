'use strict'

import express from 'express'
import path from 'path'
import chalk from 'chalk'

import postcss from 'postcss-middleware'
import cssNext from 'postcss-cssnext'
import atImport from 'postcss-import'
import csso from 'postcss-csso'
import responsiveType from 'postcss-responsive-type'

const app = express()
const port = 3000

app.set('port', process.env.PORT || port)

app.set('views', path.join('view'))
app.set('view engine', 'pug')

app.use('/css', postcss({
  src: (req) => {
    return path.join(__dirname, 'public', 'css', req.path)
  },
  plugins: [
    atImport,
    responsiveType,
    cssNext,
    csso
  ]
}))

app.use(
  express.static(path.join('public'))
)

app.get('/', (req, res) => {
  console.time('render')
  res.render('index')
  console.timeEnd('render')
})

app.listen(app.get('port'), () => {
  console.log(chalk.bold('Server has started at port: ') +
    chalk.green.bold(app.get('port')))
})
