import {
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/imageUrl'
import { Genre } from '../interfaces/Genre'

interface Props {
  selectedGenre: Genre | null
  onSelectGenre: (genre: Genre) => void
}

function Genres({ selectedGenre, onSelectGenre }: Props) {
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
              <Button
                variant="link"
                textAlign="left"
                whiteSpace="wrap"
                fontWeight={
                  genreData.id === selectedGenre?.id ? 'bold' : 'normal'
                }
                onClick={() => onSelectGenre(genreData)}
              >
                {genreData.name}
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Genres
