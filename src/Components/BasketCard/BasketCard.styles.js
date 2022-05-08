import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../Colors/Colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        width: width,
        alignItems: 'center',
    },
    brandBox: {
        width: width,
        height: height / 22,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },
    brand: {
        fontSize: 16,
    },
    innerContainer: {
        width: width,
        height: height / 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    check: {
        width: width / 18,
        height: width / 18,
        borderRadius: width / 36,
        backgroundColor: 'red'
    },
    image: {
        width: width / 5,
        height: width / 5,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    descContainer:{
        width:width/1.4,
        justifyContent:'space-between'
    },
    descBox: {
        width: width / 1.5,
        height: height / 12,
        justifyContent:'space-between',
        flexDirection: 'row',
    },
    title: {
        width: width / 2,
        color: '#000',
    },
    priceContainer: {
        width: width / 1.5,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    counter: {
        width: width / 6,
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})