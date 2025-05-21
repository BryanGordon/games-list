import express, { json } from 'express'
import crypto from 'node:crypto'
import { corsMiddleware } from './middlewares/cors.js'
import games from './data.json' with { type: 'json' }

const app = express()

app.disable('x-powered-by')
app.use(corsMiddleware())
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

// POST add a new game
app.post('/games', (req, res) => {
  const result = req.body

  const newGame = {
    id: crypto.randomUUID(),
    ...result,
  }

  games.push(newGame)

  res.status(201).json(newGame)
})

// Delete
app.delete('/games/:id', (req, res) => {
  const { id } = req.params
  const index = games.findIndex(game => game.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Game not found' })
  }

  games.splice(index, 1)

  res.json({ message: 'Game deleted' })
})


const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})