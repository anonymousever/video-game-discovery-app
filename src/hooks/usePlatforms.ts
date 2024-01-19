import useData from './useData'
import { Platform } from '../interfaces/Game'

function usePlatforms() {
  return useData<Platform>('/platforms/lists/parents')
}

export default usePlatforms
