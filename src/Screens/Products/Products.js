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
import { allProducts } from '../../Redux/services'
import { reset } from '../../Redux/productsSlice';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProductCards from '../../Components/ProductCards'
import styles from './Products.styles'
import colors from '../../Colors/Colors';
import Button from '../../Components/Button';

const Products = ({ navigation, route }) => {
    const { id, categoryId } = route.params;
    const per_page = 10;
    const [page, setPage] = useState(0);
    const [more, setMore] = useState(true);
    const [focus, setFocus] = useState(false);
    const [sorting, setSorting] = useState();

    const data = useSelector(state => state.products.data)
    const image = useSelector(state => state.products.image)
    const loading = useSelector(state => state.products.loading)
    const status = useSelector(state => state.products.status)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(reset())
        dispatch(allProducts({
            categoryId: categoryId,
            id: id,
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
                allProducts({
                    categoryId: categoryId,
                    id: id,
                    per_page: per_page,
                    page: page,
                    sorting: sorting,
                }),
            );
            setPage(page + 10);
        } else if (status === 'error') {
            setPage(0)
            console.log(status)
            console.log(page)
        } else {
            console.log('first')
        }
    };
    const LoadingGetMore = () => {
        return loading ? (
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
}

export default Products