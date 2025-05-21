<script lang="ts">
  let gameName: string = $state('')
  let gameStatus: string = $state('1')
  let gameImage: string = $state('')

  async function handleSubmit(event: Event) {
    event.preventDefault()
    const newGame = {
      name: gameName,
      status: Number(gameStatus),
      header_image: gameImage
    }
    try{
      await fetch('http://localhost:3000/games', {
        method: 'POST',
        body: JSON.stringify(newGame),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('status ' + gameStatus)
    }
    catch (error) {
      console.error('Error al agregar el juego:', error)
    }
  }
</script>

<h1>Agregar juego titulo</h1>
  <article>
    <form onsubmit={handleSubmit}>
      <div>
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name" required bind:value={gameName} />
      </div>
      
      <div>
        <label for="status">Estado</label>
        <select name="status" id="status" bind:value={gameStatus}>
          <option value='1'>Jugando</option>
          <option value='2'>Por jugar</option>
          <option value='3'>Completado</option>
          <option value='4'>Platinar</option>
        </select>
      </div>

      <div>
        <label for="header_image">Imagen</label>
        <input type="text" name="header_image" id="header_image" required bind:value={gameImage} />
      </div>

      <button type="submit">Agregar juego</button>
    </form>
  </article>