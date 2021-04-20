import React from 'react'
import { Repeater, types, uuid } from 'react-bricks'

import BlockNames from '../BlockNames'
import * as styles from './Features.module.css'

//=============================
// Colors enum
//=============================
const Colors = {
  white: { value: '#fff', label: 'White' },
  lightGray: { value: '#f7fafc', label: 'Light Gray' },
}

//=============================
// Component to be rendered
//=============================
const Features = ({ backgroundColor }) => {
  return (
    <section className={styles.features} style={{ backgroundColor }}>
      <Repeater
        propName="FeatureItem"
        renderWrapper={(items) => (
          <div className={styles.container}>{items}</div>
        )}
      />
    </section>
  )
}

//=============================
// Exported BlockType Schema
//=============================
Features.schema = {
  name: BlockNames.Features,
  label: 'Features',
  getDefaultProps: () => ({
    backgroundColor: Colors.white.value,
    items: [
      {
        id: uuid(),
        type: BlockNames.FeatureItem,
        props: {
          imageSource: {
            src:
              'https://api.reactbricks.com/images/original/41800240-5e34-11ea-b64f-f36644626031.svg',
            placeholderSrc:
              'https://api.reactbricks.com/images/original/41800240-5e34-11ea-b64f-f36644626031.svg',
            srcSet: '',
          },
          title: 'A React Brick in the wall',
          text:
            "We don't need no source control. All in all you are just another React Brick in the wall.",
        },
      },
    ],
  }),
  sideEditProps: [
    {
      name: 'backgroundColor',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [Colors.white, Colors.lightGray],
      },
    },
  ],

  repeaterItems: [
    {
      name: 'FeatureItem',
      itemType: BlockNames.FeatureItem,
      itemLabel: 'Add Feature',
    },
  ],
}

export default Features
