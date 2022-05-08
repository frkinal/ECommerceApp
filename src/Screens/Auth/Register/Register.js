import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { registerProcess } from '../../../Redux/services';

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';

import styles from './Register.styles';
import colors from '../../../Colors/Colors';

const Register = ({ navigation }) => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState()

    const user = useSelector(state => state.register.registerData);
    const status = useSelector(state => state.register.status);

    const dispatch = useDispatch();
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const saveUser = () => {
        if (mail !== '' || name !== '' || password !== '' || phone !== '') {
            if (regEx.test(mail)) {
                dispatch(
                    registerProcess({
                        name: name,
                        telephone: phone,
                        email: mail,
                        password: password,
                    }),
                );
            } else {
                console.log('error')
            }
        } else {
            console.log('error')
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Input
                    iconName='account'
                    iconColor={colors.primary}
                    iconSize={40}
                    value={name}
                    onChangeText={setName}
                    textContentType='name'
                    placeholder="Adınızı Giriniz"
                />
                <Input
                    iconName='phone-dial'
                    iconColor={colors.primary}
                    iconSize={40}
                    value={phone}
                    onChangeText={setPhone}
                    textContentType='telephoneNumber'
                    placeholder="Telefon Numarası Giriniz"
                    keyboardType='numeric'
                />
                <Input
                    iconName='email'
                    iconColor={colors.primary}
                    iconSize={40}
                    value={mail}
                    onChangeText={setMail}
                    textContentType='emailAddress'
                    placeholder="E-Posta Adresinizi Giriniz"
                />
                <Input
                    iconName='key'
                    iconColor={colors.primary}
                    iconSize={40}
                    value={password}
                    onChangeText={setPassword}
                    textContentType='password'
                    placeholder="Şifrenizi Giriniz"
                    secureTextEntry={true}
                />
                <Button
                    text="Kayıt Ol"
                    theme="secondary"
                    onPress={() => {
                        saveUser()
                    }}
                />
                <Button
                    text="Giriş Yap"
                    theme="primary"
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Register;