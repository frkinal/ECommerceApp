import React, { useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux';
import {
    getMemberInfo,
    logoutProcess,
    getPreviousOrders,
} from '../../../Redux/services'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../../../Components/Button'
import styles from './Account.styles'
import colors from '../../../Colors/Colors';

const Account = ({ navigation }) => {
    const user = useSelector(state => state.memberInfo.memberInfoData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMemberInfo());
    }, [])

    const orders = () => {
        dispatch(getPreviousOrders())
        navigation.navigate('PreviousOrders')
    }
    const favorites = () => {
        navigation.navigate('Favorites')
    }
    const address = () => {
        navigation.navigate('Addresses', { email: user?.email })
    }
    const changePassword = () => {
        navigation.navigate('ChangePassword')
    }
    const logout = () => {
        dispatch(logoutProcess())
    }

    const buttons = [
        {
            icon: 'cookie-clock',
            text: "Siparişlerim",
            onPress: orders
        },
        {
            icon: 'arrow-right-bold',
            text: "Favorilerim",
            onPress: favorites
        },
        {
            icon: 'office-building-marker',
            text: "Adreslerim",
            onPress: address
        },
        {
            icon: 'shield-key',
            text: "Şifreyi Değiştir",
            onPress: changePassword
        },
        {
            icon: 'location-exit',
            text: "Çıkış Yap",
            onPress: logout
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.account}>
                {
                    user?.surname == '' ? (
                        <View style={styles.avatarText}>
                            <Text style={styles.avatarTextName}>
                                {user?.name
                                    .split(' ')
                                    .reduce((prev, current) => `${prev}${current[0]}`, '')}
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.avatarText}>
                            <Text style={styles.avatarTextName}>
                                {user?.name
                                    .split(' ')
                                    .reduce((prev, current) => `${prev}${current[0]}`, '')}
                            </Text>
                            <Text style={styles.avatarTextName}>
                                {user?.surname
                                    .split(' ')
                                    .reduce((prev, current) => `${prev}${current[0]}`, '')}
                            </Text>
                        </View>
                    )
                }
                <TouchableOpacity
                    style={styles.accountDetail}
                    onPress={() => {
                        navigation.navigate('AccountDetail')
                    }}
                >
                    {
                        user?.surname == '' ? (
                            <View style={styles.accountText}>
                                <Text style={styles.name}>{user?.name}</Text>
                                <Text style={styles.email}>{user?.email}</Text>
                            </View>
                        ) : (
                            <View style={styles.accountText}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.name}>{user?.name}</Text>
                                    <Text style={styles.name}>{user?.surname}</Text>
                                </View>
                                <Text style={styles.email}>{user?.email}</Text>
                            </View>
                        )
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.transactions}>
                {
                    buttons?.map((item, index) => (
                        <View key={index} style={styles.buttons}>
                            <Button
                                icon={item.icon}
                                iconSize={30}
                                iconColor={colors.primary}
                                text={item.text}
                                theme="quaternary"
                                onPress={item.onPress}
                            />
                            <Icon
                                name='arrow-right-bold'
                                size={30}
                                color={colors.primary}
                            />
                        </View>
                    )
                    )
                }
            </View>
        </SafeAreaView>
    )
}

export default Account