import { Game, GameQuery } from '../interfaces/Game'
import useData from './useData'

function useGames(gameQuery: GameQuery) {
  return useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  )
}

export default useGames
