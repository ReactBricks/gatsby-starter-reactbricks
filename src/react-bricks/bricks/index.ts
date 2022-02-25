import { types } from 'react-bricks/frontend'
import HeroUnit from './MyHeroUnit'
import website from 'react-bricks-ui/website'

const bricks: types.Brick<any>[] = [
  HeroUnit, // Example brick
  ...website,
  // Put here your other bricks...
]

export default bricks
