import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    containerButton: {
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 5,
    },
    image: {
        width: width / 1.02,
        height: height / 3.3,
        resizeMode: 'cover',
    }
})