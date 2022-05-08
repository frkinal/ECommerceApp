import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    Modal
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import { sliderProducts } from '../../Redux/services'
import { reset } from '../../Redux/sliderProductsSlice';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../../Components/Button';
import ProductCards from '../../Components/ProductCards'

import styles from './SliderProducts.styles'
import colors from '../../Colors/Colors';

const SliderProducts = ({ navigation, route }) => {
    const getUrl = route.params.getUrl;
    const per_page = 10;
    const [page, setPage] = useState(0);
    const [more, setMore] = useState(true);
    const [sorting, setSorting] = useState('');
    const [focus, setFocus] = useState(false);

    const data = useSelector(state => state.sliderProduct.data)
    const image = useSelector(state => state.sliderProduct.image)
    const loading = useSelector(state => state.sliderProduct.loading);
    const status = useSelector(state => state.sliderProduct.status);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset())
        dispatch(sliderProducts({
            url_string: getUrl,
            per_page: per_page,
            page: page,
            sorting: sorting,
        },
            setPage(page + 10)
        ))
    }, [sorting])

    const getMoreProduct = () => {
        if (status !== 'error') {
            dispatch(
                sliderProducts({
                    url_string: getUrl,
                    per_page: per_page,
                    page: page,
                    sorting: sorting,
                })
            )
            setPage(page + 10)
        } else if (status === 'error') {
            setPage(0)
            console.log(status)
            console.log(page)
        } else {
            console.log('first')
        }
    };


    const LoadingGetMore = () => {
        return loading ?
            (
                <View>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            ) : null;
    };


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
                (
                    data?.length === 0
                        ? (
                            <SafeAreaView
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ fontSize: 40, color: colors.primary }}>Ürün Bulunamadı!!!</Text>
                            </SafeAreaView>
                        )
                        : (
                            <SafeAreaView style={{ flex: 1 }}>
                                <View style={styles.sorting}>
                                    <TouchableOpacity style={styles.sortBox} onPress={() => { setFocus(!focus) }}>
                                        <Icon name='filter-menu' size={40} color='#cf1e46' />
                                        <Text style={styles.sortText}>Sırala</Text>
                                    </TouchableOpacity>
                                    <Modal
                                        animationType="fade"
                                        visible={focus}
                                        onRequestClose={() => setFocus(!focus)}
                                        transparent
                                    >
                                        <View style={styles.modalContainer}>
                                            <View style={styles.innerModalContainer}>
                                                <View style={styles.modalBoxTop}>
                                                    <Text style={styles.modalText}>Ürünler Sırala</Text>
                                                    <Button
                                                        theme='tertiary'
                                                        icon='close'
                                                        iconColor={colors.primary}
                                                        iconSize={30}
                                                        onPress={() => { setFocus(!focus) }}
                                                    />
                                                </View>
                                                <View style={styles.buttons}>
                                                    <Button
                                                        theme='quaternary'
                                                        text='Fiyata Göre Artan'
                                                        icon='sort-descending'
                                                        iconColor={colors.primary}
                                                        iconSize={30}
                                                        onPress={
                                                            () => {
                                                                setPage(0)
                                                                setSorting('ASC')
                                                                setFocus(!focus)
                                                            }
                                                        }
                                                    />
                                                    <Button
                                                        theme='quaternary'
                                                        text='Fiyata Göre Azalan'
                                                        icon='sort-ascending'
                                                        iconColor={colors.primary}
                                                        iconSize={30}
                                                        onPress={
                                                            () => {
                                                                setPage(0)
                                                                setSorting('DESC')
                                                                setFocus(!focus)
                                                            }
                                                        }
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                                <FlatList
                                    numColumns={numColumns}
                                    data={data}
                                    renderItem={renderProductCards}
                                    keyExtractor={(item, index) => index}
                                    onEndReachedThreshold={0.8}
                                    onEndReached={
                                        () => {
                                            if (!more) {
                                                getMoreProduct(); // LOAD MORE DATA
                                                setMore(true);
                                            }
                                        }
                                    }
                                    ListFooterComponent={LoadingGetMore}
                                    onMomentumScrollBegin={() => {
                                        setMore(false)
                                    }}
                                />
                            </SafeAreaView>
                        )
                )
            }
        </React.Fragment>
    )
}

export default SliderProducts