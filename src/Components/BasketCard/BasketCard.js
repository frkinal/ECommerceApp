import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import {
    getBasketProcess,
    removeCartProcess,
    updateCartProcess,
} from '../../Redux/services'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../../Components/Button'

import colors from '../../Colors/Colors'
import styles from './BasketCard.styles'

const BasketCard = ({ item }) => {
    const [number, setNumber] = useState(item.qty)
    const [loading, setLoading] = useState(false)

    const loadingUpdate = useSelector(state => state.updateCart.loading)
    const updateStatus = useSelector(state => state.updateCart.status)
    const removeUpdate = useSelector(state => state.removeCart.loading)
    const removeStatus = useSelector(state => state.removeCart.status)
    const dispatch = useDispatch()

    const remove = () => {
        dispatch(removeCartProcess({ rowID: item.rowid }))
    }
    const Decrement = () => {
        setNumber(number - 1)
    }
    const Increment = () => {
        setNumber(number + 1)
    }
    useEffect(() => {
        number <= 1
            ? setLoading(true)
            : setLoading(false)
    }, [number])

    useEffect(() => {
        dispatch(updateCartProcess({ rowID: item.rowid, qty: number }))
    }, [number])

    useEffect(() => {
        if (removeStatus === 'success') dispatch(getBasketProcess())
    }, [removeUpdate])

    useEffect(() => {
        if (updateStatus === 'success') dispatch(getBasketProcess())
    }, [loadingUpdate])

    return (
        <View style={styles.container} >
            <View style={styles.brandBox}>
                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>Satıcı: </Text>
                <Text style={styles.brand}>{item.brand}</Text>
            </View>
            <View style={styles.innerContainer}>
                <Image source={{ uri: item.img_url }} style={styles.image} />
                <View style={styles.descContainer} >
                    <View style={styles.descBox}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Button
                            icon='trash-can'
                            iconColor={colors.primary}
                            iconSize={30}
                            theme='fifth'
                            onPress={remove}
                        />
                    </View>
                    <View style={styles.priceContainer} >
                        <View style={styles.counter}>
                            <TouchableOpacity
                                disabled={loading}
                                onPress={Decrement}
                            >
                                <Icon
                                    name='minus-thick'
                                    size={20}
                                    color={number <= 1
                                        ? colors.border
                                        : colors.primary}
                                />
                            </TouchableOpacity>
                            <Text>{item.qty}</Text>
                            <TouchableOpacity
                                onPress={Increment}
                            >
                                <Icon
                                    name='plus-thick'
                                    size={20}
                                    color={colors.primary}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text>{item.price}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BasketCard