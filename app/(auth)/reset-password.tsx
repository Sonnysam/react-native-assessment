/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'

import MainContainer from '~/components/MainContainer'
import CustomTextInput from '~/components/CustomTextInput'
import CustomButton from '~/components/CustomButton'
import { Colors } from '~/constants/Colors'

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleResetPassword = () => {
        router.push('/(auth)/success')
    }

    return (
        <MainContainer>
            <View style={styles.logoContainer}>
                <Image source={require('~/assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.form}>
                <Text style={styles.title}>Reset Password</Text>

                <CustomTextInput
                    label="New Password"
                    placeholder="********"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    isPassword
                />

                <CustomTextInput
                    label="Confirm New Password"
                    placeholder="********"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    isPassword
                />

                <CustomButton
                    title="RESET PASSWORD"
                    onPress={handleResetPassword}
                />
            </View>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginBottom: 14,
    },
    logo: {
        width: 150,
        height: 150,
    },
    form: {
        gap: 14,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 14,
    },
})