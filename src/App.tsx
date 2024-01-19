import { useState } from 'react'
import { Box, Container, Grid, GridItem, Show } from '@chakra-ui/react'
import { Genre } from './interfaces/Genre'
import { Platform } from './interfaces/Game'
import Nav from './components/Nav'
import Games from './components/Games'
import Genres from './components/Genres'
import PlatformSelector from './components/PlatformSelector'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  )

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
          <Box
            marginInline={{ base: '0', md: '0.75rem', lg: '0' }}
            marginBlock="3"
          >
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={platform => setSelectedPlatform(platform)}
            />
          </Box>
          <Box>
            <Games
              selectedGenre={selectedGenre}
              selectedPlatform={selectedPlatform}
            />
          </Box>
        </Container>
      </GridItem>
    </Grid>
  )
}

export default App
