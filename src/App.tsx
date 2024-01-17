import { Container, Grid, GridItem, Show } from '@chakra-ui/react'
import Nav from './components/Nav'
import Games from './components/Games'
import Genres from './components/Genres'

function App() {
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
          <Genres />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Container maxInlineSize="71.25rem" marginInline="auto" marginBlock="5">
          <Games />
        </Container>
      </GridItem>
    </Grid>
  )
}

export default App
