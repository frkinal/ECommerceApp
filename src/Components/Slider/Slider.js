import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import styles from './Slider.styles'

const Slider = ({ item, url, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.containerButton}
            onPress={onPress}
        >
            <Image style={styles.image} source={{ uri: url + item.img_url }} />
        </TouchableOpacity>
    )
}

export default Slider