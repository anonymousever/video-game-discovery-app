import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGames from '../hooks/useGames'
import GameCardSkeleton from './GameCardSkeleton'

function Games() {
  const { games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && (
        <Box marginBlock="5">
          <Text color="red.500">{error}</Text>
        </Box>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        justifyItems="center"
        gap="5"
      >
        {isLoading &&
          skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default Games
