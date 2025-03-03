/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

import MainContainer from '~/components/MainContainer'
import CustomTextInput from '~/components/CustomTextInput'
import CustomButton from '~/components/CustomButton'
import { Colors } from '~/constants/Colors'

export default function Signup() {
    const [fullName, setFullName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState<'organiser' | 'player' | null>(null)

    const handleSignup = () => {
        // Handle signup logic
    }

    return (
        <MainContainer>
            <View style={styles.logoContainer}>
                <Image source={require('~/assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.form}>
                <Text style={styles.description}>
                    Play the new real-time build your own {'\n'}scavenger hunt game and see if you can {'\n'}solve the clues to win the game!
                </Text>
                <Text style={styles.subtitle}>
                    If you are a player, tap the button below.{'\n'}
                    If you are an organiser, create your {'\n'}account using the fields below.
                </Text>

                <View style={styles.buttonGroup}>
                    <CustomButton
                        title="ORGANISER"
                        onPress={() => setUserType('organiser')}
                        style={[
                            styles.typeButton,
                            {
                                borderColor: userType === 'organiser'
                                    ? Colors.link
                                    : Colors.link + '20'
                            }
                        ]}
                        textStyle={[
                            styles.buttonText,
                            userType === 'organiser' && styles.activeButtonText
                        ]}
                    />
                    <CustomButton
                        title="PLAYER"
                        onPress={() => setUserType('player')}
                        style={[
                            styles.typeButton,
                            {
                                borderColor: userType === 'player'
                                    ? Colors.link
                                    : Colors.link + '20'
                            }
                        ]}
                        textStyle={[
                            styles.buttonText,
                            userType === 'player' && styles.activeButtonText
                        ]}
                    />
                </View>

                {userType === 'organiser' && (
                    <>
                        <CustomTextInput
                            label="Full Name"
                            placeholder="Enter full name"
                            value={fullName}
                            onChangeText={setFullName}
                        />

                        <CustomTextInput
                            label="Your Age"
                            placeholder="dd/mm/yyyy"
                            value={age}
                            onChangeText={setAge}
                            keyboardType="numeric"
                        />

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

                        <CustomButton
                            title="SIGN UP"
                            onPress={handleSignup}
                        />
                    </>
                )}

                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account? </Text>
                    <Link href="/(auth)/login" style={styles.loginLink}>
                        Sign in
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
    description: {
        fontSize: 14,
        color: Colors.text,
        marginBottom: 14,
        lineHeight: 20,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.text,
        marginBottom: 14,
        opacity: 0.8,
        lineHeight: 20,
    },
    buttonGroup: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
    },
    typeButton: {
        flex: 1,
        backgroundColor: Colors.input,
        borderWidth: 1,
        // borderColor: Colors.link,
    },
    buttonText: {
        color: Colors.text
    },
    activeButtonText: {
        color: Colors.text,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    loginText: {
        color: Colors.text,
    },
    loginLink: {
        color: Colors.link,
    },
})