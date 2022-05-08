import React from 'react'
import { View, TextInput } from 'react-native'

import styles from './Input.styles'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({
    iconSize,
    iconColor,
    iconName,
    secureTextEntry,
    placeholder,
    value,
    onChangeText,
    textContentType,
    keyboardType
}) => {
    return (
        <View style={styles.container}>
            <Icon name={iconName} size={iconSize} color={iconColor} />
            <TextInput
                autoCapitalize="none"
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                textContentType={textContentType}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default Input