/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'

import MainContainer from '~/components/MainContainer'
import CustomTextInput from '~/components/CustomTextInput'
import CustomButton from '~/components/CustomButton'
import { Colors } from '~/constants/Colors'

export default function Forgot() {
    const [email, setEmail] = useState('')

    const handleSendCode = () => {
        router.push('/(auth)/verify-code')
    }

    return (
        <MainContainer>
            <View style={styles.logoContainer}>
                <Image source={require('~/assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.form}>
                <Text style={styles.title}>Forget Password</Text>
                <Text style={styles.subtitle}>Please enter your email or phone {'\n'}number to get reset password.</Text>

                <CustomTextInput
                    label="Email"
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <CustomButton
                    title="SEND CODE"
                    onPress={handleSendCode}
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
    subtitle: {
        fontSize: 18,
        color: Colors.text,
        marginBottom: 14,
        opacity: 0.8,
    },
})