import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: ' rgba(0, 0, 0, 0.5)'
    },
    pickerContainer: {
        width: width,
        height: height / 4,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})