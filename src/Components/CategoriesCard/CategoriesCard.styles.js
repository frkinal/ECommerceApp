import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../Colors/Colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        width: width / 2.1,
        height: height / 8,
        backgroundColor: colors.border,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
    },
    image: {
        width: width / 7.5,
        height: height / 8.2,
        resizeMode: 'cover',
        borderRadius: 10,

    },
    titleBox: {
        width: width / 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.primary
    }
})