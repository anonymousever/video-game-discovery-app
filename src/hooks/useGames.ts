import { Game, Platform } from '../interfaces/Game'
import { Genre } from '../interfaces/Genre'
import useData from './useData'

function useGames(
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) {
  return useData<Game>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  )
}

export default useGames
