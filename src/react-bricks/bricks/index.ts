import { types } from 'react-bricks/frontend'
import HeroUnit from './MyHeroUnit'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'

const bricks: types.Brick<any>[] = [
  HeroUnit, // Example brick
  ...blog,
  ...website,
  // Put here your other bricks...
]

export default bricks
