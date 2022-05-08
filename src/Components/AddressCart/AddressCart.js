import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { removeAddressProcess, getAddressProcess } from '../../Redux/services'

import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../../Colors/Colors'
import styles from './AddressCart.styles'

const AddressCart = ({ navigation, item, update }) => {
    const [focus, setFocus] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)

    const dispatch = useDispatch()
    const removeAddress = () => {
        dispatch(removeAddressProcess({ address_id: item.id }))
        dispatch(getAddressProcess())
        setFocus(!focus)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.innerContainer}>
                <Icon name='location-outline' size={35} color={colors.primary} />
                <View style={styles.textBox}>
                    <View style={styles.address}>
                        <Text style={styles.city}>{item.city}</Text>
                        <Text style={styles.town}>/{item.town}</Text>
                    </View>
                    <Text style={styles.name}>{item.name} {item.surname} </Text>
                    <Text style={styles.email}>{item.email} </Text>
                </View>
            </TouchableOpacity>
            <View>
                {
                    !focus
                        ? (
                            <TouchableOpacity
                                style={styles.more}
                                onPress={() => setFocus(true)}
                            >
                                <Icon name='ellipsis-horizontal-sharp' size={30} color={colors.primary} />
                            </TouchableOpacity>
                        )
                        : (
                            <View style={styles.modal}>
                                <View style={styles.close}>
                                    <TouchableOpacity onPress={() => setFocus(!focus)}>
                                        <Icon name='close-sharp' size={25} color={colors.primary} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttons}>
                                    <TouchableOpacity onPress={update} style={styles.icon} >
                                        <Text style={styles.buttonText}>Düzenle</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={removeAddress} style={styles.icon}>
                                        <Text style={styles.buttonText}>Sil</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                }
            </View>
        </View>
    )
}

export default AddressCart