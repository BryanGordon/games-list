import { games } from "../mocks/data";

const playing = 1
const toPlay = 2
const finished = 3
const toComplete = 4

export const useFilter = () => {

  const filterGames = (status: number) => {
    const filteredGames = games.filter(game => game.status === status)
    return filteredGames
  }
  
  return {
    filterGames,
    playing,
    toPlay,
    finished,
    toComplete,
  }
}




