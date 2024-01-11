import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import { Game } from '../interfaces/Game'
import apiClient from '../services/apiClient'

interface FetchGamesResponse {
  count: number
  results: Game[]
}

function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => setGames(res.data.results))
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })

    return () => controller.abort()
  }, [])

  return { games, error }
}

export default useGames
