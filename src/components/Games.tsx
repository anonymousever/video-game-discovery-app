import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGames from '../hooks/useGames'
import GameCardSkeleton from './GameCardSkeleton'
import { Genre } from '../interfaces/Genre'
import { Platform } from '../interfaces/Game'

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}

function Games({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
        {data.map(gameData => (
          <GameCard key={gameData.id} game={gameData} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default Games
