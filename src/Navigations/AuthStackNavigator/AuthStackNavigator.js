import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { useSelector, useDispatch } from 'react-redux';
import { loginProcess } from '../../Redux/services'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../Screens/Auth/Login'
import Register from '../../Screens/Auth/Register'
import Account from '../../Screens/Auth/Account';
import AccountDetail from '../../Screens/Auth/AccountDetail';
import PreviousOrders from '../../Screens/PreviousOrders'
import Favorites from '../../Screens/Favorites'
import Addresses from '../../Screens/Addresses'
import AddAddress from '../../Screens/AddAddress'
import UpdateAddress from '../../Screens/UpdateAddress';
import ChangePassword from '../../Screens/ChangePassword'
import ForgotPassword from '../../Screens/ForgotPassword'

import colors from '../../Colors/Colors';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        AsyncStorage.getItem('@USERDATA').then(session => {
            if (session !== null) {
                dispatch(loginProcess(JSON.parse(session)));
            }
        });
    }, [auth]);

    const auth = useSelector(state => state.login.auth)

    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTitleStyle: {
                    color: colors.primary,
                },
                headerTintColor: colors.primary
            })}
        >
            {
                auth
                    ? (
                        <Stack.Screen
                            name="Account"
                            component={Account}
                            options={() => ({ headerShown: false })}
                        />
                    )
                    : (
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={() => ({
                                title: 'Giriş Yap'
                            })}
                        />
                    )
            }
            <Stack.Screen
                name="Register"
                component={Register}
                options={() => ({
                    title: 'Kayıt Ol'
                })}
            />
            <Stack.Screen
                name="AccountDetail"
                component={AccountDetail}
                options={() => ({
                    title: 'Hesabım'
                })}
            />
            <Stack.Screen
                name="PreviousOrders"
                component={PreviousOrders}
                options={() => ({
                    title: 'Siparişlerim'
                })}
            />
            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={() => ({
                    title: 'Favorilerim'
                })}
            />
            <Stack.Screen
                name="Addresses"
                component={Addresses}
                options={() => ({
                    title: 'Adreslerim'
                })}
            />
            <Stack.Screen
                name="AddAddress"
                component={AddAddress}
                options={() => ({
                    title: 'Adres Ekle'
                })}
            />
            <Stack.Screen
                name="UpdateAddress"
                component={UpdateAddress}
                options={() => ({
                    title: 'Adresi Güncelle'
                })}
            />
            <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={() => ({
                    title: 'Şifreyi Değiştir'
                })}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={() => ({
                    title: 'Şifremi Unuttum'
                })}
            />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator