import { FormEvent, useRef } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

interface Props {
  onSearch: (searchText: string) => void
}

function Search({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (ref.current) {
      onSearch(ref.current.value)
      ref.current.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" aria-label="Search">
          <FaSearch />
        </InputLeftElement>
        <Input
          type="search"
          variant="flushed"
          ref={ref}
          aria-label="Search games"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  )
}

export default Search
