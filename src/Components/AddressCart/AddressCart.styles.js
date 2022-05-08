import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../Colors/Colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        width: width / 1.1,
        height: height / 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        marginTop: 10
    },
    innerContainer: {
        width: width / 1.4,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textBox: {
    },
    address: {
        flexDirection: 'row',
    },
    city: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        flexDirection: 'row'
    },
    town: {
        fontSize: 20,
        color: '#000',
        flexDirection: 'row'
    },
    more: {
        alignItems: 'flex-end',
        width: width / 6,
    },
    modal: {
        backgroundColor: 'transparent',
        width: width / 5,
        borderRadius: 10,
    },
    close: {
        width: width / 5,
        alignItems: 'flex-end',
    },
    buttons: {
        backgroundColor: 'transparent',
    },
    icon: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderRadius: 5,
        borderBottomColor: colors.border,
    },
    buttonText: {
        fontSize: 20,
    },
    updateModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    updateModalInnerContainer: {
        backgroundColor: colors.border
    }
})