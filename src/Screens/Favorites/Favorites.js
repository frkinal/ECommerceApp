import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import { getFavorites } from '../../Redux/services'
import { resetFavorites } from '../../Redux/getFavoritesSlice';

import Loading from '../../Components/Loading'
import ProductCards from '../../Components/ProductCards'

import styles from './Favorites.styles'

const Favorites = ({ navigation }) => {
    const data = useSelector(state => state.getFavory.data)
    const image = useSelector(state => state.getFavory.image)
    const loading = useSelector(state => state.getFavory.loading)
    const message = useSelector(state => state.getFavory.message)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetFavorites())
        dispatch(getFavorites())
    }, [])

    const renderProductCards = ({ item }) => {
        return <ProductCards
            item={item}
            url={image}
            onPress={() => {
                navigation.navigate('ProductDetail', { id: item.id })
            }}
        />
    }
    const numColumns = 2;
    return (
        <React.Fragment>
            {
                loading
                    ? (
                        <Loading />
                    )
                    : (
                        data.length !== 0
                            ? (
                                <SafeAreaView style={{ flex: 1 }}>
                                    <FlatList
                                        numColumns={numColumns}
                                        data={data}
                                        renderItem={renderProductCards}
                                        keyExtractor={(item, index) => index}
                                    />
                                </SafeAreaView>
                            )
                            : (
                                <View style={styles.messageBox}>
                                    <Text style={styles.messageText}>{message}</Text>
                                </View>
                            )
                    )
            }
        </React.Fragment>
    )
}

export default Favorites