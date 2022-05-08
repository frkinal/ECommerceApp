import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from '../../Screens/Categories/Categories'
import SecondCategories from '../../Screens/Categories/SecondCategories';
import ThirdCategories from '../../Screens/Categories/ThirdCategories'
import Products from '../../Screens/Products'

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
                name="Categories"
                component={Categories}
                options={() => ({
                    title: 'Kategoriler'
                })}
            />
            <Stack.Screen
                name="SecondCategories"
                component={SecondCategories}
                options={() => ({
                    title: 'Kategoriler'
                })}
            />
            <Stack.Screen
                name="ThirdCategories"
                component={ThirdCategories}
                options={() => ({
                    title: 'Kategoriler'
                })}
            />
            <Stack.Screen
                name="Products"
                component={Products}
                options={() => ({
                    title: 'Ürünler'
                })}
            />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator