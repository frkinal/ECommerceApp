import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../Colors/Colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        width: width,
        height: height / 1.55,
        flexDirection: 'row',
    },
    productTitle: {
        margin: 10,
    },
    title: {
        width: width / 1.2,
        color: '#000',
        fontSize: 20,
    },
    icon: {
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    imageBox: {
        flexDirection: 'row'
    },
    image: {
        width: width / 1.1,
        height: height / 1.55,
        resizeMode: 'cover',
        margin: 15
    },
    indicatorContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'flex-end',
        width: width,
        bottom: 10,
        zIndex: 2,
    },
    indicator: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        borderColor: colors.primary,
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    activeIndicator: {
        backgroundColor: colors.primary
    },
    descriptionBox: {
        width: width / 1.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    desc: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
    },
    description: {
        margin: 15,
        color: '#000'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: width / 1.2,
    },
    price: {
        color: colors.primary,
        fontSize: 20,
    }
})