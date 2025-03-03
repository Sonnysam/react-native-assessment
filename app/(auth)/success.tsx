/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

import MainContainer from '~/components/MainContainer'
import CustomButton from '~/components/CustomButton'
import { Colors } from '~/constants/Colors'

export default function Success() {
    const handleContinue = () => {
        router.push('/(auth)/login')
    }

    return (
        <MainContainer>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('../../assets/success.png')}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.title}>Password has been{'\n'}set successfully</Text>
                </View>

                <CustomButton
                    title="CONTINUE"
                    onPress={handleContinue}
                />
            </View>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 40,
    },
    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    iconContainer: {
        // width: 100,
        // height: 100,
        // borderRadius: 50,
        // backgroundColor: Colors.link,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    icon: {
        width: 80,
        height: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
        textAlign: 'center',
        lineHeight: 32,
    },
})