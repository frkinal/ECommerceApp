import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { loginProcess } from '../../../Redux/services'

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';

import styles from './Login.styles';
import colors from '../../../Colors/Colors';

const Login = ({ navigation }) => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const status = useSelector(state => state.login.status);
    const data = useSelector(state => state.login.data);

    const dispatch = useDispatch();

    useEffect(() => {
        if (data !== undefined && status === 'error') {
            setMail('');
            setPassword('');
        }
    }, [status?.login?.data]);
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const login = () => {
        if (regEx.test(mail)) {
            dispatch(loginProcess({ mail, password }));
            if (status === 'success') {
                setMail('')
                setPassword('')
            }
        } else if (!regEx.test(mail) && mail !== '') {
            console.log('email is not valid')
        }
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
                    text="Şifreni mi unttun?"
                    theme="tertiary"
                    onPress={() => {
                        navigation.navigate('ForgotPassword', { email: mail })
                    }}
                />
                <Button
                    text="Giriş Yap"
                    theme="primary"
                    onPress={() => {
                        login()
                    }}
                />
                <Button
                    text="Kayıt Ol"
                    theme="secondary"
                    onPress={() => {
                        navigation.navigate('Register')
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Login;