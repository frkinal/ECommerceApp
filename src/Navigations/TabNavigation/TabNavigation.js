import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackNavigator from '../HomeStackNavigator'
import CategoriesStackNavigator from '../CategoriesStacNavigator'
import BasketStackNavigator from '../BasketStackNavigator'
import AuthStackNavigator from '../AuthStackNavigator'

import colors from '../../Colors/Colors';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 50 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Ana Sayfa') {
              iconName = focused
                ? 'home-variant'
                : 'home-variant-outline';
              size = 30
            } else if (route.name === 'Kategoriler') {
              iconName = focused
                ? 'view-list'
                : 'view-list-outline';
              size = 30
            } else if (route.name === 'Sepetim') {
              iconName = focused
                ? 'cart'
                : 'cart-outline';
              size = 30
            } else if (route.name === 'Hesabım') {
              iconName = focused
                ? 'account-circle'
                : 'account-circle-outline';
              size = 30
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.secondary,
        })}>
        <Tab.Screen name="Ana Sayfa" component={HomeStackNavigator} />
        <Tab.Screen name="Kategoriler" component={CategoriesStackNavigator} />
        <Tab.Screen name="Sepetim" component={BasketStackNavigator} />
        <Tab.Screen name="Hesabım" component={AuthStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation