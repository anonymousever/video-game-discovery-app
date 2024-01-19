import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../interfaces/Game'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
  selectedPlatform: Platform | null
  onSelectPlatform: (platform: Platform) => void
}

function PlatformSelector({ selectedPlatform, onSelectPlatform }: Props) {
  const { data, error } = usePlatforms()

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map(platformData => (
          <MenuItem
            key={platformData.id}
            onClick={() => onSelectPlatform(platformData)}
          >
            {platformData.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
