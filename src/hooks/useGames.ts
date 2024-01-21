import { Game, GameQuery } from '../interfaces/Game'
import useData from './useData'

function useGames(gameQuery: GameQuery) {
  return useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  )
}

export default useGames
