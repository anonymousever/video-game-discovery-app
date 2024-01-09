import { Grid, GridItem, Show } from '@chakra-ui/react'
import Nav from './components/Nav'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      gap="5"
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside"></GridItem>
      </Show>
      <GridItem area="main"></GridItem>
    </Grid>
  )
}

export default App
