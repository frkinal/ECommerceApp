import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../Colors/Colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    bottom: {
        width: width,
        height: height / 11,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.border
    },
    total: {
        color: '#000',
        fontSize: 20,
    }
})