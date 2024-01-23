import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../interfaces/Game'
import useData from '../hooks/useData'

interface Props {
  gameQuery: GameQuery
}

function GameHeading({ gameQuery }: Props) {
  const { error } = useData('')

  if (error) return null

  const topHeading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`

  return (
    <Heading
      as="h1"
      size="3xl"
      textAlign={{ base: 'center', md: 'left' }}
      lineHeight="1"
    >
      {topHeading}
    </Heading>
  )
}

export default GameHeading
