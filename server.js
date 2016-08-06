import express from 'express'
import path from 'path'
import chalk from 'chalk'

const app = express()
const port = 3000

app.set('port', process.env.PORT || port)

app.set('views', path.join('view'))
app.set('view engine', 'pug')

app.use(express.static(path.join('public')))

app.get('/', (request, response) => {
  console.time('render')
  response.render('index')
  console.timeEnd('render')
})

app.listen(app.get('port'), () => {
  console.log(chalk.white.bold('Server has started at port: ') +
    chalk.green.bold(app.get('port')))
})

