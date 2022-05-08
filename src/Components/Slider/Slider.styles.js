import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    containerButton: {
        marginLeft:5,
    },
    image: {
        width: width / 2,
        height: height / 6.5,
        resizeMode: 'contain'
    }
})