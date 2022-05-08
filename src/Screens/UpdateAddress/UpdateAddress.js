import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native'


import { useSelector, useDispatch } from 'react-redux'
import {
    getCityProcess,
    getTownProcess,
    updateAddressProcess,
    getAddressProcess,
    getMemberInfo,
} from '../../Redux/services'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Picker } from '@react-native-picker/picker'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Button from '../../Components/Button'
import Input from '../../Components/Input'

import colors from '../../Colors/Colors'
import styles from './UpdateAddress.styles'

const UpdateAddress = ({ navigation, route }) => {
    const data = route.params.data
    const [name, setName] = useState(data.name)
    const [billingName, setBillingName] = useState(data.billing_name)
    const [surname, setSurname] = useState(data.surname)
    const [billingSurname, setBillingSurname] = useState(data.billing_surname)
    const [phone, setPhone] = useState(data.telephone)
    const [billingPhone, setBillingPhone] = useState(data.telephone)
    const [selectedCityId, setSelectedCityId] = useState(data.city_id)
    const [selectedBillingCityId, setSelectedBillingCityId] = useState(data.city_id)
    const [selectedTownId, setSelectedTownId] = useState(data.town_id)
    const [selectedBillingTownId, setSelectedBillingTownId] = useState(data.town_id)
    const [clearAddress, setClearAddress] = useState(data.clear_address);
    const [billingClearAddress, setBillingClearAddress] = useState(data.clear_address);
    const [mail, setMail] = useState('')

    const [check, setCheck] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTownProcess({ city_id: selectedCityId }))
    }, [selectedCityId])


    useEffect(() => {
        dispatch(getCityProcess())
    }, [])
    
    useEffect(() => {
        AsyncStorage.getItem('@USERDATA').then(
            session => {
                setMail(JSON.parse(session).mail)
                console.log(JSON.parse(session).mail)
            }
        )
    }, [])

    const getCity = useSelector(state => state.getCity.data)
    const getTown = useSelector(state => state.getTown.data)
    const status = useSelector(state => state.getTown.status)

    const updateAddress = () => {
        if (check === true) {
            dispatch(updateAddressProcess({
                address_id: data.id,
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
            dispatch(updateAddressProcess({
                address_id: data.id,
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
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.innerContainer}>
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
                                                        getTown?.map((item, index) =>
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
                        onPress={updateAddress}
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

export default UpdateAddress