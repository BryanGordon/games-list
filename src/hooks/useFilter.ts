import { games } from "../mocks/data";

const playing = 1
const finished = 2
const toComplete = 3

export const useFilter = () => {

  const filterGames = (status: number) => {
    const filteredGames = games.filter(game => game.status === status)
    return filteredGames
  }
  
  return {
    filterGames,
    playing,
    finished,
    toComplete,
  }
}




