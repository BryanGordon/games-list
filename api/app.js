import express, { json } from 'express'
import games from './data.json' with { type: 'json' }

const app = express()

app.disable('x-powered-by')
app.use(json())

app.get('/', (req, res) => {
  res.json({message: 'Inicio de server'})
})

app.get('/games', (req, res) => {
  res.json(games)
})

app.get('/completados', (req, res) => {
  const gamesList = games.filter(game => game.status === 3)
  res.json(gamesList)
})

app.get('/jugar', (req, res) => {
  const gamesList = games.filter(game => game.status === 2)
  res.json(gamesList)
})

app.get('/jugando', (req, res) => {
  const gamesList = games.filter(movie => movie.status === 1)
  res.json(gamesList)
})

app.get('/platinar', (req, res) => {
  const gamesList = games.filter(movie => movie.status === 4)
  res.json(gamesList)
})


const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})