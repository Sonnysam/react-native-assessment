/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

import MainContainer from '~/components/MainContainer'
import CustomTextInput from '~/components/CustomTextInput'
import CustomButton from '~/components/CustomButton'
import { Colors } from '~/constants/Colors'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        // Handle login logic
    }

    return (
        <MainContainer>
            <View style={styles.logoContainer}>
                <Image source={require('~/assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.form}>
                <Text style={styles.title}>Sign in</Text>

                <CustomTextInput
                    label="Email"
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <CustomTextInput
                    label="Password"
                    placeholder="********"
                    value={password}
                    onChangeText={setPassword}
                    isPassword
                />

                <Link href="/(auth)/forgot" style={styles.forgotPassword}>
                    Forgot Password?
                </Link>

                <CustomButton
                    title="SIGN IN"
                    onPress={handleLogin}

                />

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <Link href="/(auth)/signup" style={styles.signupLink}>
                        Sign up
                    </Link>
                </View>
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
    forgotPassword: {
        color: Colors.link,
        textAlign: 'right',
        fontSize: 14,
        marginTop: -15,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    signupText: {
        color: Colors.text,
    },
    signupLink: {
        color: Colors.link,
    }
})