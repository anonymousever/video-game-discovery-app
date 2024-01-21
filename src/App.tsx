import { useState } from 'react'
import { Box, Container, Grid, GridItem, Show } from '@chakra-ui/react'
import { GameQuery } from './interfaces/Game'
import Nav from './components/Nav'
import Games from './components/Games'
import Genres from './components/Genres'
import PlatformSelector from './components/PlatformSelector'

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
            selectedGenre={gameQuery.genre}
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
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
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={platform =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <Box>
            <Games gameQuery={gameQuery} />
          </Box>
        </Container>
      </GridItem>
    </Grid>
  )
}

export default App
