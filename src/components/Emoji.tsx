import { Image, ImageProps } from '@chakra-ui/react'
import bullsEye from '../assets/images/image-bulls-eye.webp'
import thumbsUp from '../assets/images/image-thumbs-up.webp'
import meh from '../assets/images/image-meh.webp'

interface Props {
  rating: number
}

function Emoji({ rating }: Props) {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'Meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'Recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'Exceptional', boxSize: '32px' },
  }

  return <Image {...emojiMap[rating]} />
}

export default Emoji
