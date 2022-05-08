import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import colors from '../../Colors/Colors'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector, useDispatch } from 'react-redux'
import {
    getCityProcess,
    getTownProcess,
    getSecondTownProcess,
    saveAddressProcess,
    getAddressProcess,
} from '../../Redux/services'

import { Picker } from '@react-native-picker/picker'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './AddAddress.styles'

const AddAddress = ({ navigation }) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [selectedCityId, setSelectedCityId] = useState(1)
    const [selectedTownId, setSelectedTownId] = useState(1)
    const [clearAddress, setClearAddress] = useState('');
    const [billingName, setBillingName] = useState('')
    const [billingSurname, setBillingSurname] = useState('')
    const [billingPhone, setBillingPhone] = useState('')
    const [selectedBillingCityId, setSelectedBillingCityId] = useState(1)
    const [selectedBillingTownId, setSelectedBillingTownId] = useState(1)
    const [billingClearAddress, setBillingClearAddress] = useState('');
    const [mail, setMail] = useState('')

    const [check, setCheck] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTownProcess({ city_id: selectedCityId }))
    }, [selectedCityId])

    useEffect(() => {
        dispatch(getSecondTownProcess({ city_id: selectedBillingCityId }))
    }, [selectedBillingCityId])

    useEffect(() => {
        dispatch(getCityProcess())
    }, [])

    useEffect(() => {
        AsyncStorage.getItem('@USERDATA').then(
            session => {
                setMail(JSON.parse(session).mail)
            }
        )
    }, [])

    const getCity = useSelector(state => state.getCity.data)
    const getTown = useSelector(state => state.getTown.data)
    const getSecondTown = useSelector(state => state.getSecondTown.data)
    const status = useSelector(state => state.getTown.status)

    const saveStatus = useSelector(state => state.saveAddress.status)

    const saveAddress = () => {
        if (check === true) {
            dispatch(saveAddressProcess({
                name: name,
                billing_name: billingName,
                surname: surname,
                billing_surname: billingSurname,
                email: mail,
                billing_email: mail,
                telephone: phone,
                billing_telephone: billingPhone,
                city: selectedCityId,
                billing_city: setSelectedBillingCityId,
                town: selectedTownId,
                billing_town: setSelectedBillingTownId,
                clear_address: clearAddress,
                billing_clear_address: billingClearAddress,
            }))
            navigation.goBack()
            dispatch(getAddressProcess())
        } else {
            dispatch(saveAddressProcess({
                name: name,
                billing_name: name,
                surname: surname,
                billing_surname: surname,
                email: mail,
                billing_email: mail,
                telephone: phone,
                billing_telephone: phone,
                city: selectedCityId,
                billing_city: selectedCityId,
                town: selectedTownId,
                billing_town: selectedTownId,
                clear_address: clearAddress,
                billing_clear_address: clearAddress,
            }))
            navigation.goBack()
            dispatch(getAddressProcess())
        }
    }

    return (
        <SafeAreaView style={styles.modalContainer}>
            <ScrollView style={styles.innerModalContainer}>
                {
                    check === true
                        ? (
                            <View style={styles.address}>
                                <View>
                                    <View style={styles.textInput}>
                                        <Text>İletişim Bilgileri</Text>
                                        <Input
                                            iconName='account-edit'
                                            iconSize={40}
                                            iconColor={colors.primary}
                                            value={name}
                                            onChangeText={setName}
                                            placeholder='Ad'
                                        />
                                        <Input
                                            iconName='account-edit'
                                            iconSize={40}
                                            iconColor={colors.primary}
                                            placeholder='Soyad'
                                            value={surname}
                                            onChangeText={setSurname}
                                        />
                                        <Input
                                            iconName='cellphone'
                                            iconSize={40}
                                            iconColor={colors.primary}
                                            placeholder='Telefon'
                                            value={phone}
                                            onChangeText={setPhone}
                                        />
                                    </View>
                                    <Text>Adres Bilgileri</Text>
                                    <View>
                                        <Text>Şehir</Text>
                                        <Picker
                                            selectedValue={selectedCityId}
                                            onValueChange={(itemValue, itemIndex) => (
                                                setSelectedCityId(itemValue)
                                            )
                                            }>
                                            {
                                                getCity?.map((item, index) =>
                                                    <Picker.Item
                                                        key={index}
                                                        label={item.title}
                                                        value={item.id}
                                                    />
                                                )
                                            }
                                        </Picker>
                                    </View>
                                    <View>
                                        <Text>İlçe</Text>
                                        <Picker
                                            selectedValue={selectedTownId}
                                            onValueChange={(itemValue, itemIndex) => (
                                                setSelectedTownId(itemValue)
                                            )
                                            }>
                                            {
                                                status == 'success'
                                                    ? (
                                                        getTown?.map((item, index) =>
                                                            <Picker.Item
                                                                key={index}
                                                                label={item.title}
                                                                value={item.id}
                                                            />
                                                        )
                                                    )
                                                    : null
                                            }
                                        </Picker>
                                    </View>
                                    <Input
                                        iconName='sign-real-estate'
                                        iconSize={40}
                                        iconColor={colors.primary}
                                        placeholder='Açık Adres'
                                        value={clearAddress}
                                        onChangeText={setClearAddress}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableNativeFeedback
                                        onPress={() => { setCheck(!check) }} >
                                        <Icon name='check-circle' size={30} color={colors.primary} />
                                    </TouchableNativeFeedback>
                                    <Text> Faturamı Aynı Adrese İstiyorum</Text>
                                </View>
                                <View>
                                    <View style={styles.textInput}>
                                        <Text>İletişim Bilgileri</Text>
                                        <Input
                                            iconName='account-edit'
                                            iconSize={40}
                                            iconColor={colors.primary}
                                            value={billingName}
                                            onChangeText={setBillingName}
                                            placeholder='Ad'
                                        />
                                        <Input
                                            iconName='account-edit'
                                            iconSize={40}
                                            iconColor={colors.primary}
                                            placeholder='Soyad'
                                            value={billingSurname}
                                            onChangeText={setBillingSurname}
                                        />
                                        <Input
                                            iconName='cellphone'
                                            iconSize={40}
                                            iconColor={colors.primary}
                                            placeholder='Telefon'
                                            value={billingPhone}
                                            onChangeText={setBillingPhone}
                                        />
                                    </View>
                                    <Text>Adres Bilgileri</Text>
                                    <View>
                                        <Text>Şehir</Text>
                                        <Picker
                                            selectedValue={selectedBillingCityId}
                                            onValueChange={(itemValue, itemIndex) => (
                                                setSelectedBillingCityId(itemValue)
                                            )
                                            }>
                                            {
                                                getCity?.map((item, index) =>
                                                    <Picker.Item
                                                        key={index}
                                                        label={item.title}
                                                        value={item.id}
                                                    />
                                                )
                                            }
                                        </Picker>
                                    </View>
                                    <View>
                                        <Text>İlçe</Text>
                                        <Picker
                                            selectedValue={selectedBillingTownId}
                                            onValueChange={(itemValue, itemIndex) => (
                                                setSelectedBillingTownId(itemValue)
                                            )
                                            }>
                                            {
                                                status === 'success'
                                                    ? (
                                                        getSecondTown?.map((item, index) =>
                                                            <Picker.Item
                                                                key={index}
                                                                label={item.title}
                                                                value={item.id}
                                                            />
                                                        )
                                                    )
                                                    : (
                                                        null
                                                    )
                                            }
                                        </Picker>
                                    </View>
                                    <Input
                                        iconName='sign-real-estate'
                                        iconSize={40}
                                        iconColor={colors.primary}
                                        placeholder='Açık Adres'
                                        value={billingClearAddress}
                                        onChangeText={setBillingClearAddress}
                                    />
                                </View>
                            </View>
                        )
                        : (
                            <View style={styles.address}>
                                <View style={styles.textInput}>
                                    <Text>İletişim Bilgileri</Text>
                                    <Input
                                        iconName='account-edit'
                                        iconSize={40}
                                        iconColor={colors.primary}
                                        value={name}
                                        onChangeText={setName}
                                        placeholder='Ad'
                                    />
                                    <Input
                                        iconName='account-edit'
                                        iconSize={40}
                                        iconColor={colors.primary}
                                        placeholder='Soyad'
                                        value={surname}
                                        onChangeText={setSurname}
                                    />
                                    <Input
                                        iconName='cellphone'
                                        iconSize={40}
                                        iconColor={colors.primary}
                                        placeholder='Telefon'
                                        value={phone}
                                        onChangeText={setPhone}
                                    />
                                </View>
                                <Text>Adres Bilgileri</Text>
                                <View>
                                    <Text>Şehir</Text>
                                    <Picker
                                        selectedValue={selectedCityId}
                                        onValueChange={(itemValue, itemIndex) => (
                                            setSelectedCityId(itemValue)
                                        )
                                        }>
                                        {
                                            getCity?.map((item, index) =>
                                                <Picker.Item
                                                    key={index}
                                                    label={item.title}
                                                    value={item.id}
                                                />
                                            )
                                        }
                                    </Picker>
                                </View>
                                <View>
                                    <Text>İlçe</Text>
                                    <Picker
                                        selectedValue={selectedTownId}
                                        onValueChange={(itemValue, itemIndex) => (
                                            setSelectedTownId(itemValue)
                                        )
                                        }>
                                        {
                                            status === 'success' ?
                                                (getTown?.map((item, index) =>
                                                    <Picker.Item
                                                        key={index}
                                                        label={item.title}
                                                        value={item.id}
                                                    />
                                                ))
                                                : null
                                        }
                                    </Picker>
                                </View>
                                <Input
                                    iconName='sign-real-estate'
                                    iconSize={40}
                                    iconColor={colors.primary}
                                    placeholder='Açık Adres'
                                    value={clearAddress}
                                    onChangeText={setClearAddress}
                                />
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableNativeFeedback onPress={() => { setCheck(!check) }} >
                                        <Icon name='check-circle-outline' size={30} color={colors.primary} />
                                    </TouchableNativeFeedback>
                                    <Text> Faturamı Farklı Adrese İstiyorum</Text>
                                </View>
                            </View>
                        )
                }
                <View style={styles.buttons}>
                    <Button
                        icon='cloud-search-outline'
                        iconColor={colors.border}
                        iconSize={40}
                        theme='primary'
                        text='Kaydet'
                        onPress={saveAddress}
                    />
                    <Button
                        icon='marker-cancel'
                        iconColor={colors.primary}
                        iconSize={40}
                        theme='secondary'
                        text='İptal'
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddAddress