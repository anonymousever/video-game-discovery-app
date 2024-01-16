import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

function GameCardSkeleton() {
  return (
    <Card
      inlineSize={{ base: '100%', md: '20.5rem' }}
      overflow="hidden"
      borderRadius="5"
    >
      <Skeleton blockSize="15rem" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
