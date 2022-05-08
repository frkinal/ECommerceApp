import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
import colors from '../../Colors/Colors';

const baseStyle = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff',
    },
});

export default {
    primary: StyleSheet.create({
        ...baseStyle,
        container: {
            ...baseStyle.container,
            backgroundColor: colors.primary,
        },
        text: {
            ...baseStyle.text,
            color: '#fff',
        },
    }),
    secondary: StyleSheet.create({
        ...baseStyle,
        container: {
            ...baseStyle.container,
            borderColor: colors.primary,
            borderWidth: 1,
        },
        text: {
            ...baseStyle.text,
            color: colors.primary,
        },
    }),
    tertiary: {
        ...baseStyle,
        container: {
            ...baseStyle.container,
            borderWidth: 0,
            padding: 0,
            margin: 0,
            alignItems: 'flex-end'
        },
        text: {
            ...baseStyle.text,
            color: colors.primary,
            marginRight: 13
        },
    },
    quaternary: {
        ...baseStyle,
        container: {
            ...baseStyle.container,
            width: width / 1.3,
            alignItems: 'flex-start'
        },
        text: {
            ...baseStyle.text,
            color: colors.primary,
            marginRight: 13
        },
    },
    fifth: {
        ...baseStyle,
        container: {
            ...baseStyle.container,
            padding: 0,
            margin: 0,
        },
        text: {
            ...baseStyle.text,
            color: colors.primary,
            marginRight: 13
        },
    },
    sixth: {
        ...baseStyle,
        container: {
            ...baseStyle.container,
            width:width/1.5,
            backgroundColor: colors.primary,
        },
        text: {
            ...baseStyle.text,
            color: '#fff',
        },
    }
};