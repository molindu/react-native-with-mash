import { StyleSheet, Text, View, TextInput, Pressable, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'


export default function App() {
  const [name, Setname] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {

      SetSubmitted(!submitted);
    }
    else {

      //Alert component here ####################################

      // Alert.alert('Warning', 'The name must be longer than 3 characters', [
      //   {
      //     text: 'DO not show again',
      //     onPress: () => console.warn('DO not show again Pressed!'),
      //     // style: 'destructive'
      //   },
      //   {
      //     text: 'Cancel',
      //     onPress: () => console.warn('Cancel Pressed!'),
      //     // style: 'destructive'
      //   },
      //   {
      //     text: 'OK',
      //     onPress: () => console.warn('OK Pressed!'),
      //     // style: 'destructive'
      //   },
      // ],
      //   {
      //     cancelable: true,
      //     onDismiss: () => console.warn('Alert dismissed!')
      //   })

      //Toast Component ##################################################

      ToastAndroid.showWithGravityAndOffset(
        'The name must be longer than 3 characters',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100,
        200
      )
      // ToastAndroid.showWithGravity(
      //   'The name must be longer than 3 characters',
      //   ToastAndroid.LONG,
      //   ToastAndroid.CENTER,
      // )

      // ToastAndroid.show('The name must be longer than 3 characters',
      //   // ToastAndroid.SHORT 
      //   ToastAndroid.LONG
      // )


    }
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        multiline={false}
        style={styles.input}
        placeholder='e.g. John'
        placeholderTextColor="gray"
        onChangeText={(value) => Setname(value)}
      />

      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [{ backgroundColor: pressed ? '#dddddd' : '#00ff00' }, styles.button]}
      >
        <Text style={styles.text}>{submitted ? 'clear' : 'Submit'}</Text>
      </Pressable>

      {
        submitted ?
          <Text style={styles.text}>
            You are registered as {name}
          </Text>
          :
          null
      }
    </View >

  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  text: {
    color: '#000000',
    fontSize: 20,
    margin: 5,
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00ff00',
    width: 150,
    height: 50,
    alignItems: 'center',
    margin: 10,
  },
})
