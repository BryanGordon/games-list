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

  <article>
    <form onsubmit={handleSubmit} class="w-3/4 my-0 mx-auto h-dvh pt-4">
      <div class="my-3 w-3/4 mx-auto">
        <label class="text-base font-medium mr-3" for="name">Nombre:</label>
        <input placeholder='Death Stranding' type="text" name="name" id="name" required bind:value={gameName} class="rounded-xl  px-4 focus-visible:outline-none focus-visible:shadow-sm focus-visible:shadow-zinc-600" />
      </div>
      
      <div class="w-3/4 mx-auto my-3">
        <label class="text-base font-medium mr-3" for="status">Estado:</label>
        <select name="status" id="status" bind:value={gameStatus} class="rounded-xl px-2">
          <option value='1' class="bg-red-300">Jugando</option>
          <option value='2'>Por jugar</option>
          <option value='3'>Completado</option>
          <option value='4'>Platinar</option>
        </select>
      </div>

      <div class="w-3/4 mx-auto my-3">
        <label class="text-base font-medium mr-3" for="header_image">Imagen:</label>
        <input class="rounded-xl px-4" placeholder="Link image" type="text" name="header_image" id="header_image" required bind:value={gameImage} />
      </div>

      <div class="w-1/2 my-3 mx-auto">
        <button class="bg-blue-400 px-8 py-1.5 rounded-2xl" type="submit">Agregar juego</button>
      </div>
    </form>
  </article>