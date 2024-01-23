import { Box, Card, CardBody, Flex, Heading, Image } from '@chakra-ui/react'
import { Game } from '../interfaces/Game'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import getCroppedImageUrl from '../services/imageUrl'

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card maxInlineSize="22.5rem" overflow="hidden" borderRadius="5">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        objectFit="cover"
      />
      <CardBody>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <PlatformIconList
              platforms={game.parent_platforms.map(p => p.platform)}
            />
          </Box>
          <Box>
            <CriticScore score={game.metacritic} />
          </Box>
        </Flex>
        <Box marginBlock="3">
          <Heading as="h4" size="md" whiteSpace="wrap">
            {game.name}
          </Heading>
        </Box>
        <Box>
          <Emoji rating={game.rating_top} />
        </Box>
      </CardBody>
    </Card>
  )
}

export default GameCard
