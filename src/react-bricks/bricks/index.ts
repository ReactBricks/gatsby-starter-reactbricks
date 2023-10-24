import { types } from 'react-bricks/frontend'
import layout from './layout'
import HeroUnit from './HeroUnit'
import features from './features'
import Pokemon from './Pokemon'

const bricks = [HeroUnit, Pokemon, ...layout, ...features]

export default bricks
