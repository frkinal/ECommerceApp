import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

import colors from '../../../Colors/Colors'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    titleBox: {
        backgroundColor: colors.secondary,
        height: height / 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.primary
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary
    },
    CategoriesCards: {
        alignItems: "center"
    }
})