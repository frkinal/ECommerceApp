import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../Colors/Colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        backgroundColor: '#363b4a',
        width: width,
        height: height / 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    modalContainer: {
        flex: 1,
        width: width,
        alignItems: 'center',
        justifyContent:'flex-end',
        backgroundColor: 'rgba(100,100,100, 0.9)'
    },
    innerModalContainer: {
        width: width,
        height: height / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363b4a',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,

    },
    logo: {
        width: width / 2,
        resizeMode: 'contain'
    },
    textInput: {
        width: width / 1.12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.primary
    },
    close:{
        width:width/1.1,
    },
    input: {
        width: width / 1.3,
    },
    buttons: {
        width: width / 1.1,
        justifyContent:'space-around'
    },
    innerContainer: {
    },
    productCard: {},
    brandList: {
        marginTop: 30,
        alignItems: 'center'
    },
    brandText: {
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#cf1e46'
    },
    productCards: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})