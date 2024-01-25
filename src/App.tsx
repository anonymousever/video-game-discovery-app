import { useState } from 'react'
import { Box, Container, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import { GameQuery } from './interfaces/Game'
import Nav from './components/Nav'
import Games from './components/Games'
import Genres from './components/Genres'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

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
        <Nav
          onSearch={searchText => setGameQuery({ ...gameQuery, searchText })}
        />
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
          <Box marginInlineStart={{ base: '0', md: '0.75rem', lg: '0' }}>
            <Flex
              justifyContent={{ base: 'center', md: 'start' }}
              marginBlockEnd={{ md: '6' }}
            >
              <GameHeading gameQuery={gameQuery} />
            </Flex>
            <Flex
              justifyContent={{ base: 'center', md: 'start' }}
              alignItems="center"
              gap="2"
              marginBlock="4"
            >
              <Box>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={platform =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <Box>
                <SortSelector
                  sortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={sortOrder =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </Box>
            </Flex>
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
