import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch, useSelector } from 'react-redux';
import { changePasswordProcess } from '../../Redux/services';

import colors from '../../Colors/Colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import styles from './ChangePassword.styles'

const ChangePassword = ({ navigation }) => {
    const [oldPass, setOldPass] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [rpassword, setRpassword] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        AsyncStorage.getItem('@USERDATA').then(
            session => {
                setOldPass(JSON.parse(session).password)
                setMail(JSON.parse(session).mail)
            }
        )
    }, [])
    const status = useSelector(state => state.password.status)
    const loading = useSelector(state => state.password.loading)

    const changePass = () => {
        if (oldPass === password) {
            if (newPassword === rpassword) {
                dispatch(changePasswordProcess({ old_password: password, new_password: newPassword }))
            } else {
                Alert.alert('Hata', 'Şifreler Uyuşmuyor')
            }
        } else {
            Alert.alert('Hata', 'Eski sifreyi yanlis girdniz')
        }
    }

    useEffect(() => {
        if (status === 'success') {
            AsyncStorage.setItem('@USERDATA', JSON.stringify({ mail: mail, password: newPassword }))
            navigation.goBack()
        }
    }, [loading])

    return (
        <SafeAreaView style={styles.container}>
            <Input
                iconName='key'
                iconColor={colors.primary}
                iconSize={40}
                value={password}
                onChangeText={setPassword}
                textContentType='password'
                placeholder="Eski Şifrenizi Giriniz"
                secureTextEntry={true}
            />
            <Input
                iconName='key'
                iconColor={colors.primary}
                iconSize={40}
                value={newPassword}
                onChangeText={setNewPassword}
                textContentType='password'
                placeholder="Yeni Şifreyi Giriniz"
                secureTextEntry={true}
            />
            <Input
                iconName='key'
                iconColor={colors.primary}
                iconSize={40}
                value={rpassword}
                onChangeText={setRpassword}
                textContentType='password'
                placeholder="Yeni Şifreyi Tekrar Giriniz"
                secureTextEntry={true}
            />
            <Button
                text="Şifreyi Değiştir"
                theme="quaternary"
                onPress={() => {
                    changePass()
                }}
            />
        </SafeAreaView>
    )
}

export default ChangePassword