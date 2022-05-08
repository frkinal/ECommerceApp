import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
    TextInput,
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import { searchProductProcess } from '../../Redux/services'
import { reset } from '../../Redux/searchProductsSlice';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSearch from 'react-native-vector-icons/Ionicons';

import ProductCards from '../../Components/ProductCards'

import colors from '../../Colors/Colors';
import Button from '../../Components/Button';
import styles from './SearchProducts.style'

const SearchProducts = ({ navigation, route }) => {
    const { keywords } = route.params

    const per_page = 10;
    const [page, setPage] = useState(0);
    const [more, setMore] = useState(true);

    const [focus, setFocus] = useState(false);
    const [rSearch, setRSearch] = useState(false);
    const [sorting, setSorting] = useState();

    const [value, setValue] = useState(keywords)
    const [searchValue, setSearchValue] = useState(keywords)

    const data = useSelector(state => state.search.data)
    const message = useSelector(state => state.search.message)
    const image = useSelector(state => state.search.image)
    const loading = useSelector(state => state.search.loading)
    const status = useSelector(state => state.search.status)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(reset())
        dispatch(searchProductProcess({
            keywords: value,
            per_page: per_page,
            page: page,
            sorting: sorting,
        },
            setPage(page + 10)
        ))
    }, [sorting, rSearch])


    const getMoreProduct = () => {
        if (status !== 'error') {
            dispatch(
                searchProductProcess({
                    keywords: value,
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


    const renderSearchProduct = ({ item }) => {
        return <ProductCards
            item={item}
            url={image}
            onPress={() => {
                navigation.navigate('ProductDetail', { id: item.id })
            }}
        />
    }

    const LoadingGetMore = () => {
        return loading ? (
            <View>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        ) : null;
    };

    const getSearchProducts = () => {
        if (value !== '') {
            setSearchValue(value)
            setRSearch(!rSearch)
            setPage(0)
        } else {
            Alert.alert('Hata', 'Aramak İstediğiniz Ürünü Giriniz')
        }
    }

    const keyword = searchValue.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const numColumns = 2
    return (
        <SafeAreaView>
            <SafeAreaView>
                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name='keyboard-backspace' size={40} color='#cf1e46' />
                        </TouchableOpacity>
                        <View style={styles.textInput}>
                            <TextInput
                                onChangeText={setValue}
                                value={value}
                                style={styles.input}
                                placeholder={`${keyword} (${data?.length} ürün)`}
                            />
                            <TouchableOpacity onPress={()=>setValue('')}>
                                <IconSearch name='close-circle' size={20} color='gray' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={getSearchProducts}>
                                <IconSearch name='search' size={40} color='#cf1e46' />
                            </TouchableOpacity>
                        </View>
                    </View>
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
                </View>
            </SafeAreaView>

            {
                data?.length !== 0
                    ? (
                        <FlatList
                            numColumns={numColumns}
                            data={data}
                            renderItem={renderSearchProduct}
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

                    )
                    : (
                        <View style={styles.messageBox}>
                            <Text style={styles.messageText}>{message}</Text>
                        </View>
                    )
            }
        </SafeAreaView>
    )
}

export default SearchProducts