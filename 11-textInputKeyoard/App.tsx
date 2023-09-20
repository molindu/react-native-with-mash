import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'


export default function App() {
  const [name, Setname] = useState('')

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
      // keyboardType='numeric' //'phone-pad'//'default'
      // maxLength={2}
      // editable={false}
      // secureTextEntry
      />
      <Text style={styles.text}>
        Your name is : {name}
      </Text>
    </View>

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

  },

})
