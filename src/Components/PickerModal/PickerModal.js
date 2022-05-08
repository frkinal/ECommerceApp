import React, { useState, useEffect } from 'react'
import { View, Text, Modal } from 'react-native'

import { Picker } from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Button from '../Button';
import styles from './PickerModal.styles'
import colors from '../../Colors/Colors';

const PickerModal = ({ items, title, value }) => {
    const [pickerValue, setPickerValue] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (value) {
            setPickerValue(value)
        }
    }, [value])

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}

        >
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <View style={styles.header}>
                        <Button
                            icon='close'
                            iconSize={35}
                            iconColor={colors.primary}
                            theme='tertiary'
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                        <Text style={styles.title}>{title || 'Placeholder'}</Text>
                        <Button
                            icon='check'
                            iconSize={35}
                            iconColor={colors.primary}
                            theme='tertiary'

                        />
                    </View>
                    <Picker
                        selectedValue={pickerValue}
                        onValueChange={(value) => setPickerValue(value)}
                    >
                        {
                            items?.map((item, index) => (
                                <Picker.Item key={index} value={item.id} label={item.title} />
                            ))
                        }
                    </Picker>
                </View>
            </View>
        </Modal>
    )
}

export default PickerModal