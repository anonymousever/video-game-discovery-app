import { Box, Container, Flex, Text } from '@chakra-ui/react'

function Nav() {
  return (
    <nav style={{ paddingInline: '0.5rem', paddingBlock: '1.5rem' }}>
      <Container maxInlineSize="60rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize={{ lg: 'xl' }} fontWeight="bold">
              Gamezone
            </Text>
          </Box>
        </Flex>
      </Container>
    </nav>
  )
}

export default Nav
