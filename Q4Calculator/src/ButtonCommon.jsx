import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
const ButtonCommon = ({title, onPress}) => {
  return (
    <TouchableOpacity style={Styles.button} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCommon
