import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ScreenC({ navigation }) {

    const onPressHandler = () => {
        //when use Bottom navigation aBove code will not work
        // navigation.navigate('screen_A');
        // navigation.goBack();
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                screen C
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => { backgroundColor: pressed ? 'green' : 'yellow' }}
            >
                <Text style={styles.text}>
                    Go to screen A
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },

})