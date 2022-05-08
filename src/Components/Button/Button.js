import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.styles';

export const Button = ({
  text,
  onPress,
  loading,
  icon,
  theme,
  iconSize,
  iconColor
}) => {
  return (
    <React.Fragment>
      {
        theme === ('tertiary' || 'fifth')
          ? (
            <TouchableOpacity
              style={styles[theme].container}
              onPress={onPress}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <View style={styles[theme].buttonContainer}>
                  <Icon name={icon} color={iconColor} size={iconSize} />
                </View>
              )}
            </TouchableOpacity>
          )
          : (
            <TouchableOpacity
              style={styles[theme].container}
              onPress={onPress}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <View style={styles[theme].buttonContainer}>
                  <Icon name={icon} color={iconColor} size={iconSize} />
                  <Text style={styles[theme].text}>{text}</Text>
                </View>
              )}
            </TouchableOpacity>
          )
      }
    </React.Fragment>
  );
};

export default Button;

