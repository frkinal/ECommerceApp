import React, { useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux';
import {
    getMemberInfo,
} from '../../../Redux/services'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Button from '../../../Components/Button'
import colors from '../../../Colors/Colors';

import styles from './AccountDetail.styles'

const AccountDetail = () => {
    const user = useSelector(state => state.memberInfo.memberInfoData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMemberInfo());
    }, [])
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
                <View style={styles.accountDetail}>
                    {
                        user?.surname == '' ? (
                            <View style={styles.accountText}>
                                <View style={styles.detailBox} >
                                    <Text style={styles.title}>İsim Soyisim: </Text>
                                    <Text style={styles.name}>{user?.name}</Text>
                                </View>
                                <View style={styles.detailBox}>
                                    <Text style={styles.title}>E-Posta Adresi: </Text>
                                    <Text style={styles.email}>{user?.email}</Text>
                                </View>
                                <View style={styles.detailBox}>
                                    <Text style={styles.title}>Telefon Numarasi: </Text>
                                    <Text style={styles.email}>{user?.telephone}</Text>
                                </View>
                            </View>
                        ) : (
                            <View style={styles.accountText}>
                                <View style={styles.detailBox}>
                                    <Text style={styles.title}>İsim Soyisim: </Text>
                                    <Text style={styles.name}>{user?.name}</Text>
                                    <Text style={styles.name}>{user?.surname}</Text>
                                </View>
                                <View style={styles.detailBox}>
                                    <Text style={styles.title}>E-Posta Adresi: </Text>
                                    <Text style={styles.email}>{user?.email}</Text>
                                </View>
                                <View style={styles.detailBox}>
                                    <Text style={styles.title}>Telefon Numarasi: </Text>
                                    <Text style={styles.email}>{user?.telephone}</Text>
                                </View>
                            </View>
                        )
                    }
                </View>
            </View>
            <View>
            </View>
        </SafeAreaView>
    )
}

export default AccountDetail