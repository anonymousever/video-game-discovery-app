import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}

function CriticScore({ score }: Props) {
  const scoreColor = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'

  return <Badge colorScheme={scoreColor}>{score}</Badge>
}

export default CriticScore
