import { useState } from 'react'
import { Container, Grid, GridItem, Show } from '@chakra-ui/react'
import { Genre } from './interfaces/Genre'
import Nav from './components/Nav'
import Games from './components/Games'
import Genres from './components/Genres'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '10rem 1fr',
      }}
      gap="5"
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingInline="3">
          <Genres
            selectedGenre={selectedGenre}
            onSelectGenre={genre => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Container maxInlineSize="71.25rem" marginInline="auto" marginBlock="5">
          <Games selectedGenre={selectedGenre} />
        </Container>
      </GridItem>
    </Grid>
  )
}

export default App
