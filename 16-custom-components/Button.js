import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
// import TextCom from './TextCom';
// import colors from '../../assets/colors';

export default function Button(props) {

  return (
    <TouchableOpacity
      style={props.disabled ? [styles.container, props.containerStyle, { backgroundColor: colors.TEXT_COLOR3, }] : [styles.container, props.containerStyle]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text
        style={({ pressed }) => [
          { ...props.textStyle },
          { backgroundColor: pressed ? colors.BLUE : props.color }
        ]}

      >
        {props.text}</Text>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  container: {
    height: 62,
    // backgroundColor: colors.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
  },
}) 