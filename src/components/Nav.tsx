import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Search from './Search'

interface Props {
  onSearch: (searchText: string) => void
}

function Nav({ onSearch }: Props) {
  return (
    <nav style={{ paddingInline: '0.5rem', paddingBlock: '1.5rem' }}>
      <Container maxInlineSize="60rem">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={{ base: '3', md: '0' }}
        >
          <Box>
            <Text
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              fontWeight="bold"
            >
              Gamezone
            </Text>
          </Box>
          <Box>
            <Search onSearch={onSearch} />
          </Box>
        </Flex>
      </Container>
    </nav>
  )
}

export default Nav
