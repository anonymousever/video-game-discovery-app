import { Genre } from '../interfaces/Genre'
import useData from './useData'

function useGenres() {
  return useData<Genre>('/genres')
}

export default useGenres
