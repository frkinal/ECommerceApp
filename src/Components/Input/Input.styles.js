import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../Colors/Colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        width: width / 1.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10,
        
    },
    input: {
        width: width / 1.2,
        borderBottomWidth: 1,
        borderColor: colors.primary,
    }
})