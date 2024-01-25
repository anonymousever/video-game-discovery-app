import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useData from '../hooks/useData'

interface Props {
  sortOrder: string
  onSelectSortOrder: (sortOrder: string) => void
}

function SortSelector({ sortOrder, onSelectSortOrder }: Props) {
  const { error } = useData('')

  if (error) return null

  const sortOrders = [
    { label: 'Relevance', value: '' },
    { label: 'Date Added', value: '-added' },
    { label: 'Name', value: 'name' },
    { label: 'Release Date', value: '-released' },
    { label: 'Popularity', value: '-metacritic' },
    { label: 'Average Rating', value: '-rating' },
  ]

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
