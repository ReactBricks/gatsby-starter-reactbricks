import * as React from 'react'
import classNames from 'classnames'
import { Text, RichText, Image, types } from 'react-bricks'

import BlockNames from '../BlockNames'
import * as styles from './FeatureItem.module.css'

//=============================
// Component to be rendered
//=============================
const FeatureItem = ({ imageSource, linkText, linkUrl, centered, ...rest }) => {
  return (
    <div
      className={classNames(styles.feature_item, {
        [styles.text_center]: centered,
      })}
      {...rest}
    >
      <Image
        containerClassName={styles.image_container}
        imageClassName={styles.image}
        alt=""
        propName="imageSource"
      />

      <div>
        <Text
          renderBlock={(props) => <h3>{props.children}</h3>}
          placeholder="Type a title..."
          propName="title"
        />

        <RichText
          renderBlock={(props) => (
            <p className={styles.text}>{props.children}</p>
          )}
          placeholder="Type a text..."
          propName="text"
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Link,
          ]}
        />

        {linkText && linkUrl && (
          <p>
            <a href={linkUrl}>{linkText} &raquo;</a>
          </p>
        )}
      </div>
    </div>
  )
}

//=============================
// Exported BlockType Schema
//=============================
FeatureItem.schema = {
  name: BlockNames.FeatureItem,
  label: 'Feature Item',
  getDefaultProps: () => ({
    imageSource: {
      src:
        'https://api.reactbricks.com/images/original/0882c680-5e34-11ea-b64f-f36644626031.svg',
      placeholderSrc:
        'https://api.reactbricks.com/images/original/0882c680-5e34-11ea-b64f-f36644626031.svg',
      srcSet: '',
    },
    title: 'Another React Brick in the wall',
    text:
      'We create high performance custom Ecommerce websites for any industry and Booking systems.',
    linkText: '',
    linkUrl: '',
  }),
  sideEditProps: [
    {
      name: 'centered',
      label: 'Centered',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkText',
      label: 'Link text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'linkUrl',
      label: 'Link URL',
      type: types.SideEditPropType.Text,
    },
  ],

  hideFromAddMenu: true,
}

export default FeatureItem
