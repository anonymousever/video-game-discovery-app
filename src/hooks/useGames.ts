import { Game } from '../interfaces/Game'
import { Genre } from '../interfaces/Genre'
import useData from './useData'

function useGames(selectedGenre: Genre | null) {
  return useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ])
}

export default useGames
