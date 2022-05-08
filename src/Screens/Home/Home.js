import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    Modal,
    Alert
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import {
    sliderCategory,
    brandsCategory,
    getMainProducts,
} from '../../Redux/services'

import Icon from 'react-native-vector-icons/Ionicons';

import HomeCards from '../../Components/HomeCards'
import Slider from '../../Components/Slider';
import ProductCards from '../../Components/ProductCards';
import Loading from '../../Components/Loading'

import styles from './Home.styles'
import Button from '../../Components/Button';
import colors from '../../Colors/Colors';

const Home = ({ navigation }) => {
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState('')

    const sliderData = useSelector(state => state.slider.data)
    const sliderImage = useSelector(state => state.slider.image)
    const sliderstatus = useSelector(state => state.slider.loading)

    const brandData = useSelector(state => state.brand.data)
    const brandImage = useSelector(state => state.brand.image)
    const brandstatus = useSelector(state => state.brand.loading)

    const productData = useSelector(state => state.mainProducts.data)
    const productImage = useSelector(state => state.mainProducts.image)
    const productstatus = useSelector(state => state.mainProducts.loading)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sliderCategory());
    }, []);

    useEffect(() => {
        dispatch(brandsCategory());
    }, []);
    useEffect(() => {
        dispatch(getMainProducts());
    }, []);

    const renderHomeCard = ({ item }) => {
        return <HomeCards
            card={item}
            url={sliderImage}
            onPress={() => {
                navigation.navigate('SliderProducts', { getUrl: item.button_url })
            }}
        />
    }
    const renderSliders = ({ item }) => {
        return <Slider
            item={item}
            url={brandImage}
            onPress={() => {
                navigation.navigate('BrandProducts', { id: item.id })
            }}
        />
    }
    const renderProductCards = ({ item }) => {
        return <ProductCards
            item={item}
            url={productImage}
            onPress={() => {
                navigation.navigate('ProductDetail', { id: item.id })
            }}
        />
    }

    const getSearchProducts = () => {
        if (value !== '') {
            navigation.navigate('SearchProducts', { keywords: value })
            setFocus(!focus)
        } else {
            Alert.alert('Hata', 'Aramak İstediğiniz Ürünü Giriniz')
        }
    }
    const numColumns = 2
    return (
        <React.Fragment>
            {(sliderstatus || brandstatus || productstatus) && (
                <Loading />
            )}
            {(!sliderstatus && !brandstatus && !productstatus) && (
                <SafeAreaView style={styles.container}>
                    {
                        !focus
                            ? (
                                <View style={styles.banner}>
                                    <TouchableOpacity onPress={() => setFocus(!focus)}>
                                        <Icon name='search' size={40} color='#cf1e46' />
                                    </TouchableOpacity>
                                </View>
                            )
                            : (

                                <View>
                                    <View style={styles.banner}>
                                        <TouchableOpacity onPress={() => setFocus(!focus)}>
                                            <Icon name='search' size={40} color='#cf1e46' />
                                        </TouchableOpacity>
                                    </View>
                                    <Modal
                                        animationType="fade"
                                        visible={focus}
                                        onRequestClose={() => setFocus(!focus)}
                                        transparent
                                    >
                                        <View style={styles.modalContainer}>
                                            <View style={styles.innerModalContainer}>
                                                <View style={styles.close}>
                                                    <Button
                                                        icon='close-thick'
                                                        iconColor={colors.primary}
                                                        iconSize={40}
                                                        theme='tertiary'
                                                        onPress={() => setFocus(!focus)}
                                                    />
                                                </View>
                                                <View style={styles.textInput}>
                                                    <TextInput
                                                        onChangeText={setValue}
                                                        value={value}
                                                        style={styles.input}
                                                        placeholder='Ne aramak istemiştiniz?'
                                                    />
                                                </View>
                                                <View style={styles.buttons}>
                                                    <Button
                                                        icon='cloud-search-outline'
                                                        iconColor={colors.border}
                                                        iconSize={40}
                                                        theme='primary'
                                                        text='Ara'
                                                        onPress={getSearchProducts}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                            )
                    }
                    <ScrollView nestedScrollEnabled>
                        <View style={styles.productCard}>
                            <FlatList
                                data={sliderData}
                                renderItem={renderHomeCard}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                        <View style={styles.brandList}>
                            <Text style={styles.brandText}>Markalar</Text>
                            <FlatList
                                data={brandData}
                                renderItem={renderSliders}
                                keyExtractor={(item, index) => index}
                                horizontal
                            />
                        </View>
                        <View style={styles.productCards}>
                            <Text style={styles.brandText}> En Beğenilen Ürünler</Text>
                            <FlatList
                                numColumns={numColumns}
                                data={productData}
                                renderItem={renderProductCards}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            )}
        </React.Fragment>
    )
}

export default Home