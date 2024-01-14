import { Box, Card, CardBody, Flex, Heading, Image } from '@chakra-ui/react'
import { Game } from '../interfaces/Game'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card maxInlineSize="22.5rem" overflow="hidden" borderRadius="5">
      <Image src={game.background_image} alt={game.name} objectFit="cover" />
      <CardBody>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBlockEnd="3"
        >
          <Box>
            <PlatformIconList
              platforms={game.parent_platforms.map(p => p.platform)}
            />
          </Box>
          <Box>
            <CriticScore score={game.metacritic} />
          </Box>
        </Flex>
        <Heading as="h4" size="md">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
