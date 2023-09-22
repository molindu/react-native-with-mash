import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useState } from 'react'


export default function App() {
  const [name, Setname] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    SetSubmitted(!submitted);
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
      // keyboardType='numeric' //'phone-pad'//'default'
      // maxLength={2}
      // editable={false}
      // secureTextEntry
      />
      {/* <Button
        title={submitted ? 'clear' : 'Submit'}
        onPress={onPressHandler}
        // disabled={submitted}
        color='#00f'
      /> */}

      <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.2}
      >
        <Text style={styles.text}>{submitted ? 'clear' : 'Submit'}</Text>
      </TouchableOpacity>

      {/* //####################################################### */}
      <TouchableHighlight
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.2}
        underlayColor='#dddddd'
      >
        <Text style={styles.text}>{submitted ? 'clear' : 'Submit'}</Text>

      </TouchableHighlight>

      {/* //####################################################### */}
      {/* 
      <TouchableWithoutFeedback
        onPress={onPressHandler}
        >
        <View
        style={styles.button}>
        <Text style={styles.text}>{submitted ? 'clear' : 'Submit'}</Text>
        </View>
      </TouchableWithoutFeedback> */}

      {/* //####################################################### */}

      <Pressable
        onPress={onPressHandler}
        // onLongPress={onPressHandler}
        // delayLongPress={2000}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        // disabled={submitted}
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
