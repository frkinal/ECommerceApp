import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../Colors/Colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    account: {
        width: width / 1.1,
        alignItems: 'center',
    },
    avatarText: {
        width: width / 3,
        height: width / 3,
        borderRadius: width / 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.border,
    },
    avatarTextName: {
        color: colors.secondary,
        fontSize: 50,
        fontWeight: 'bold',
    },
    accountDetail: {
        width: width / 1.3,
        alignItems: 'center',
    },
    accountText: {
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary
    },
    email: {
        fontSize: 20,
        color: colors.primary
    },
    transactions: {},
    buttons: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
})