import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        width: width / 2,
        height: height / 2.3,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:5
    },
    image: {
        width: width / 2.1,
        height: height / 6,
        resizeMode: 'cover',
    },
    innerContainer: {
        width: width / 2.1,
        height: height / 5.6,
        justifyContent: 'space-between',
    },
    brand: {
        color: '#000',
        fontWeight: 'bold',
    },
    title: {
        color: 'gray',
        fontWeight: 'normal'
    },
    stars: {
    },
    price: {
        color: '#cf1e46',
    }
})