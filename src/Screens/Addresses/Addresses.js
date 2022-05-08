import React, { useEffect } from 'react'
import {
    SafeAreaView,
    View,
    FlatList,
    Text,
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { getAddressProcess } from '../../Redux/services'

import AddressCart from '../../Components/AddressCart'
import Loading from '../../Components/Loading'
import Button from '../../Components/Button'

import styles from './Addresses.styles'

const Addresses = ({ navigation, route }) => {
    const email = route.params.email
    const data = useSelector(state => state.getAddress.data)
    const loading = useSelector(state => state.getAddress.loading)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAddressProcess())
    }, [])

    const getAddress = ({ item }) => {
        return <AddressCart
            item={item}
            update={() =>
                navigation.navigate('UpdateAddress', { data: item })
            }
        />
    }
    return (
        <React.Fragment>
            {
                loading === true
                    ? (
                        <Loading />
                    )
                    : (
                        <SafeAreaView style={styles.container}>
                            <FlatList
                                data={data}
                                renderItem={getAddress}
                                keyExtractor={(item, index) => index}
                            />
                            <View>
                                <Button
                                    theme='primary'
                                    text='Adres Ekle'
                                    onPress={() => {
                                        navigation.navigate('AddAddress', { email: email })
                                    }}
                                />
                            </View>
                        </SafeAreaView>
                    )
            }
        </React.Fragment>
    )
}

export default Addresses