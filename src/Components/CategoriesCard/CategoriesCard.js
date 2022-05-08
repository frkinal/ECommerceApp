import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'

import styles from './CategoriesCard.styles'

const CategoriesCard = ({ item, url, onPress }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <Image source={{ uri: url + item.img_url }} style={styles.image} />
        </TouchableOpacity>
    )
}

export default CategoriesCard