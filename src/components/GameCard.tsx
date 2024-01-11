import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../interfaces/Game'

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card maxInlineSize="22.5rem" overflow="hidden" borderRadius="5">
      <Image src={game.background_image} alt={game.name} objectFit="cover" />
      <CardBody>
        <Heading as="h4" size="md">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
