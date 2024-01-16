import { Game } from '../interfaces/Game'
import useData from './useData'

function useGames() {
  return useData<Game>('/games')
}

export default useGames
