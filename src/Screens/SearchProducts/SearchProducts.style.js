import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../Colors/Colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    innerModalContainer: {
        width: width / 1.4,
        height: height / 4,
        backgroundColor: colors.border,
        justifyContent: 'center',
    },
    modalBoxTop: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primary,
    },
    sorting: {
        alignItems: 'center',
    },
    sortBox: {
        width: width / 1.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.primary
    },
    sortText: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchContainer: {
        marginTop: 5,
    },
    inputContainer: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textInput: {
        width: width / 1.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: colors.border,
        borderRadius: 20,
    },
    input: {
        width: width / 1.6,
    },
    messageBox: {
        width: width,
        height: height / 1.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary,
    },
})