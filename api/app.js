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

// Get completados
app.get('/completados', (req, res) => {
  const gamesList = games.filter(game => game.status === 4)
  res.json(gamesList)
})


const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})