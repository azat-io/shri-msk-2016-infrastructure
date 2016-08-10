'use strict'

import express from 'express'
import path from 'path'
import chalk from 'chalk'

import helpers from './helpers'

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

app.get('/helpers', (req, res) => {
  switch (req.query.type) {
    case 'square':
      res.json({
        result: helpers.squareArea(req.query.side)
      })
      break
    case 'rectangle':
      res.json({
        result: helpers.rectangeArea(req.query.rectWidth, req.query.rectHeight)
      })
      break
    case 'triangle':
      res.json({
        result: helpers.triangleArea(req.query.sideFirst, req.query.sideSecond, req.query.sideThird)
      })
      break
    case 'circle':
      res.json({
        result: helpers.circleArea(req.query.radius)
      })
      break
    default:
      res.sendStatus(404)
  }
})

app.listen(app.get('port'), () => {
  console.log(chalk.bold('Server has started at port: ') +
    chalk.green.bold(app.get('port')))
})
