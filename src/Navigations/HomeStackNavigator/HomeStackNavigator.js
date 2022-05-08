import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../Screens/Home'
import SliderProducts from '../../Screens/SliderProducts';
import BrandProducts from '../../Screens/BrandProducts';
import SearchProducts from '../../Screens/SearchProducts';
import ProductDetail from '../../Screens/ProductDetail'
import Login from '../../Screens/Auth/Login'
import Basket from '../../Screens/Basket'

import colors from '../../Colors/Colors';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTitleStyle: {
                    color: colors.primary,
                },
                headerTintColor: colors.primary
            })}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={() => ({ headerShown: false })}
            />
            <Stack.Screen
                name="SliderProducts"
                component={SliderProducts}
                options={() => ({
                    title: 'Ürünler',
                })}
            />
            <Stack.Screen
                name="BrandProducts"
                component={BrandProducts}
                options={() => ({
                    title: 'Ürünler',
                })}
            />
            <Stack.Screen
                name="SearchProducts"
                component={SearchProducts}
                options={() => ({ headerShown: false })}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={() => ({
                    title: 'Ürün Detayı',
                })}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Basket"
                component={Basket}
                options={() => ({
                    headerBackVisible: false
                })}
            />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator