import {
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/imageUrl'

function Genres() {
  const { data, error, isLoading } = useGenres()

  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <>
      <Heading size="md" marginBlockEnd="2">
        Genres
      </Heading>
      <List>
        {data.map(genreData => (
          <ListItem key={genreData.id} paddingBlock="2">
            <Flex alignItems="center" gap="3">
              <Image
                src={getCroppedImageUrl(genreData.image_background)}
                alt={genreData.name}
                boxSize="28px"
                objectFit="cover"
                borderRadius="5"
              />
              <Text>{genreData.name}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Genres
