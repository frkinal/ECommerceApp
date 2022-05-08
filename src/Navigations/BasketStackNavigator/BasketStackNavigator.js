import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Basket from '../../Screens/Basket'
import CompleteOrder from '../../Screens/CompleteOrder'

import colors from '../../Colors/Colors';

const Stack = createNativeStackNavigator();

const BasketStackNavigator = () => {
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
                name="Basket"
                component={Basket}
                options={() => ({
                    title: 'Sepetim'
                })}
            />
            <Stack.Screen
                name="CompleteOrder"
                component={CompleteOrder}
                options={() => ({
                    title: 'Siparişi Tamamla'
                })}
            />
        </Stack.Navigator>
    )
}

export default BasketStackNavigator