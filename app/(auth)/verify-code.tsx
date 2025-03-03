/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'

import MainContainer from '~/components/MainContainer'
import CustomButton from '~/components/CustomButton'
import { Colors } from '~/constants/Colors'

export default function VerifyCode() {
    const [code, setCode] = useState(['', '', '', '', '', ''])
    const inputRefs = Array(6).fill(0).map(() => React.createRef<TextInput>())

    const handleCodeChange = (text: string, index: number) => {
        if (text.length <= 1) {
            const newCode = [...code]
            newCode[index] = text
            setCode(newCode)

            if (text.length === 1 && index < 5) {
                inputRefs[index + 1].current?.focus()
            }
        }
    }

    const handleVerify = () => {
        router.push('/(auth)/reset-password')
    }

    return (
        <MainContainer>
            <View style={styles.logoContainer}>
                <Image source={require('~/assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.form}>
                <Text style={styles.title}>Verification code</Text>
                <Text style={styles.subtitle}>Please enter the code you received {'\n'}through email.</Text>

                <View style={styles.codeContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            style={styles.codeInput}
                            value={digit}
                            onChangeText={(text) => handleCodeChange(text, index)}
                            keyboardType="numeric"
                            maxLength={1}
                        />
                    ))}
                </View>

                <CustomButton
                    title="SEND CODE"
                    onPress={handleVerify}
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
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    codeInput: {
        width: 45,
        height: 45,
        borderWidth: 2,
        // borderColor: Colors.border,
        borderColor: "#000" + 10,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        color: Colors.text,
        backgroundColor: Colors.input,
    },
})