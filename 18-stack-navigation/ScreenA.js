import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ScreenA({ navigation }) {

    const onPressHandler = () => {
        //when use Bottom navigation aBove code will not work
        navigation.navigate('screen_C');
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                screen A
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'green' : 'yellow' })}
            >
                <Text style={styles.text}>
                    Go to screen C
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