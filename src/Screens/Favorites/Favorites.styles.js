import { StyleSheet } from 'react-native'
import colors from '../../Colors/Colors'

export default StyleSheet.create({
    messageBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary,
    },
})