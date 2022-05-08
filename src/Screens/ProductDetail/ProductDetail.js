import React, { useState, useEffect, useRef } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Animated,
    Dimensions,
    Alert
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import {
    productDetails,
    toggleFavorite,
    addBasketProcess,
    getFavorites,
    getBasketProcess
} from '../../Redux/services'
import { reset } from '../../Redux/toggleFavoriteSlice';
import { resetFavorites } from '../../Redux/getFavoritesSlice';

import AsyncStorage from '@react-native-async-storage/async-storage'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Button from '../../Components/Button'
import styles from './ProductDetail.styles'
import colors from '../../Colors/Colors';

const ProductDetail = ({ navigation, route }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const id = route.params.id

    const data = useSelector(state => state.productDetail.productDetailData)
    const images = useSelector(state => state.productDetail.images)

    const message = useSelector(state => state.favorite.message)
    const toggleStatus = useSelector(state => state.favorite.status)
    const toggleLoading = useSelector(state => state.favorite.loading)

    const status = useSelector(state => state.getFavory.status)
    const dataFavorites = useSelector(state => state.getFavory.data)
    const favoritesLoading = useSelector(state => state.getFavory.loading)

    const loading = useSelector(state => state.addBasket.loading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productDetails({ id: id }))
    }, [])

    useEffect(() => {
        dispatch(resetFavorites())
        dispatch(getFavorites())
        if (status === 'success') {
            dataFavorites?.forEach(element => {
                if (element.id === id) {
                    setIsFavorite(true)
                    console.log(isFavorite)
                }
            });
        }
    }, [])

    useEffect(() => {
        if (toggleStatus === 'success') {
            Alert.alert('Favoriler', message)
        }
    }, [toggleLoading])

    const addToFavorites = () => {
        AsyncStorage.getItem('@USERDATA').then(session => {
            if (session !== null) {
                if (isFavorite !== true) {
                    dispatch(toggleFavorite({ product_id: id }))
                    setIsFavorite(true)
                } else {
                    dispatch(reset())
                    dispatch(toggleFavorite({ product_id: id }))
                    setIsFavorite(false)
                }
            } else {
                navigation.navigate('Login')
            }
        });
    }

    const animation = useRef(new Animated.Value(0))
    const [currentImage, setCurrentImage] = useState(0)

    const swipeRight = () => {
        let newCurrentImage = currentImage + 1
        if (newCurrentImage >= images?.length) {
            newCurrentImage = 0
        }
        Animated.spring(animation.current, {
            toValue: -(Dimensions.get('window').width * newCurrentImage),
            useNativeDriver: true
        }).start();
        setCurrentImage(newCurrentImage)
    }
    const swipeLeft = () => {
        let newCurrentImage = currentImage
        if (newCurrentImage <= 0) {
            newCurrentImage = images?.length - 1
        } else {
            newCurrentImage -= 1
        }
        Animated.spring(animation.current, {
            toValue: -(Dimensions.get('window').width * newCurrentImage),
            useNativeDriver: true
        }).start();
        setCurrentImage(newCurrentImage)
    }

    var count = 1;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.productTitle}>
                    <Text style={styles.title}>{data?.title}</Text>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => addToFavorites()}
                    >
                        <Icon
                            name={
                                isFavorite
                                    ? 'cards-heart'
                                    : 'cards-heart-outline'
                            }
                            size={40}
                            color={colors.primary}

                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Animated.View
                            style={[styles.imageBox, {
                                transform: [{ translateX: animation.current }],
                            }]}
                        >
                            {
                                images?.map((item, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri: item }}
                                        style={styles.image}
                                    />
                                ))
                            }
                        </Animated.View>
                        {
                            images?.length > 1 &&
                            <View style={styles.indicatorContainer}>
                                <Button
                                    icon='menu-left'
                                    iconColor={colors.primary}
                                    iconSize={35}
                                    theme='tertiary'
                                    onPress={swipeLeft}
                                />
                                {
                                    images?.map((item, index) => (
                                        <View
                                            key={`${item}_${index}`}
                                            style={[styles.indicator, index === currentImage ? styles.activeIndicator : undefined]}
                                        />
                                    ))
                                }
                                <Button
                                    icon='menu-right'
                                    iconColor={colors.primary}
                                    iconSize={35}
                                    theme='tertiary'
                                    onPress={swipeRight}
                                />
                            </View>
                        }
                    </View>
                </View>
                <View style={styles.descriptionBox}>
                    <Text style={styles.desc}>Ürün Bilgileri</Text>
                    <Text style={styles.description}>{data?.description}</Text>
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <Text style={styles.price}>{data?.price} TL</Text>
                <View style={styles.button}>
                    <Button
                        text="Sepete Ekle"
                        theme="primary"
                        onPress={() => {
                            AsyncStorage.getItem('@USERDATA').then(session => {
                                if (session !== null) {
                                    dispatch(addBasketProcess({ product_id: id, qty: count }))
                                    if (!loading) {
                                        dispatch(getBasketProcess())
                                        navigation.navigate('Sepetim')
                                    }
                                } else {
                                    navigation.navigate('Login')
                                }
                            });
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail