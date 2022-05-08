import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Button from '../Button'

import styles from './ProductCards.styles'

const ProductCards = ({ item, url, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: url + item.img_url }} style={styles.image} />
            <View style={styles.innerContainer}>
                <Text style={styles.brand}>{item.brand + ' '}
                    <Text style={styles.title}>{item.title}</Text>
                </Text>
                <Text style={styles.stars}>Yildizlar olucak burda <Text style={styles.title}>({item.review})</Text></Text>
                <Text style={styles.price}>{item.price + ' ' + (item.money_unit === '₺' ? item.money_unit : 'TL')}</Text>
            </View>
            <Button text="Ürün Detayı " theme='secondary' onPress={onPress} />
        </TouchableOpacity>
    )
}

export default ProductCards