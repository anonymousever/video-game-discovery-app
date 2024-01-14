import {
  FaLinux,
  FaApple,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { Flex, Icon } from '@chakra-ui/react'
import { Platform } from '../interfaces/Game'

interface Props {
  platforms: Platform[]
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    linux: FaLinux,
    mac: FaApple,
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }

  return (
    <Flex gap="2">
      {platforms.map(platform => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          aria-label={platform.name}
        />
      ))}
    </Flex>
  )
}

export default PlatformIconList
