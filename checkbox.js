
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RememberMeButton = () => {
    const [rememberMe, setRememberMe] = useState(false);

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleRememberMe} style={styles.button}>
                {rememberMe ? (
                    <Text style={styles.buttonText}>✓</Text>
                ) : (
                    <Text style={styles.buttonText}></Text>
                )}
            </TouchableOpacity>
            <Text style={styles.label}>Remember Me</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    button: {
        width: 14,
        height: 14,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 8,
    },
    buttonText: {
        fontSize: 12,
        color: '#000',
        fontWeight: '500',
    },
    label: {
        fontSize: 16,
        color: 'black',
    },
});

export default RememberMeButton;
