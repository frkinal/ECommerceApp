import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Alert,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { lostPasswordProcess } from '../../Redux/services';

import colors from '../../Colors/Colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import styles from './ForgotPassword.styles'

const ForgotPassword = ({ route }) => {
    const { email } = route.params
    const [mail, setMail] = useState('')

    const dispatch = useDispatch()
    const sendToken = () => {
        if (mail != '') {
            dispatch(lostPasswordProcess({ email: mail }))
            Alert.alert('Token', 'Girdiğiniz E-Posta Adresine Token Gönderilmiştir')
        } else {
            Alert.alert('Hata', 'Lütfen E-Posta Adresinizi Giriniz')
        }
    }
    console.log(email)
    if (email != '') {
        Alert.alert('E-Posta', `E-Postanızı Doğrulayın: ${email}`, [
            {
                text: "Evet",
                onPress: () => setMail(email),
            },
            { text: "Hayır", onPress: () => setMail('') }
        ])
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Input
                    iconName='account'
                    iconColor={colors.primary}
                    iconSize={40}
                    value={mail}
                    onChangeText={setMail}
                    textContentType='emailAddress'
                    placeholder="E-Posta Adresinizi Giriniz"
                />
                <Button
                    text="Gönder"
                    theme="primary"
                    onPress={() => {
                        sendToken()
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword