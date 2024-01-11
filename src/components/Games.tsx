import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGames from '../hooks/useGames'

function Games() {
  const { games, error } = useGames()

  return (
    <>
      {error && (
        <Flex justifyContent="start" marginBlock="5">
          <Text color="red.500">{error}</Text>
        </Flex>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        justifyItems="center"
        gap="5"
      >
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default Games
