import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './HomeCards.styles'

const HomeCards = ({ card, url, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.containerButton}
            onPress={onPress}
        >
            <Image style={styles.image} source={{ uri: url + card.img_url }} />
        </TouchableOpacity>
    )
}

export default HomeCards