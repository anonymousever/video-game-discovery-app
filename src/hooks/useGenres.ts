import { Genre } from '../interfaces/Game'
import useData from './useData'

function useGenres() {
  return useData<Genre>('/genres')
}

export default useGenres
