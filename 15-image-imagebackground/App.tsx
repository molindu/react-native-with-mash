import { StyleSheet, Text, View, TextInput, Pressable, Alert, ToastAndroid, Modal, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'


export default function App() {
  const [name, Setname] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {

      SetSubmitted(!submitted);
    }
    else {
      SetshowWarning(true);
    }
  }
  return (
    <ImageBackground
      style={styles.body}
      source={{ uri: 'https://i.pinimg.com/236x/4b/05/0c/4b050ca4fcf588eedc58aa6135f5eecf.jpg' }}
    >
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() =>
          SetshowWarning(false)
        }
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning!</Text>
            </View>
            <View style={styles.warning_text}>
              <Text style={styles.text}>The name must be longer than 3 characters</Text>
            </View>
            <Pressable
              onPress={() => SetshowWarning(false)}
              style={styles.button_modal}
              android_ripple={{ color: '#fff' }}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        multiline={false}
        style={styles.input}
        placeholder='e.g. John'
        // placeholderTextColor="gray"
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
          <>
            <Text style={styles.text}>
              You are registered as {name}
            </Text>
            <Image
              style={styles.image}
              source={require('../images/CheckIcon.png')}
              resizeMode='stretch'
            />
          </>
          :
          <Image
            style={styles.image}
            source={require('../images/Frame84.png')}
            resizeMode='stretch'
          />
      }
    </ImageBackground >

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
    margin: 10,
    // fontStyle: 'italic',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    // color: '#000',
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
  button_modal: {

    backgroundColor: '#0f0',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',

  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000'
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_text: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    // width: 100,
    // height: 100,
    margin: 10,
  },
})
