import React from 'react';
import {Button, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Style from './Style';

const Login = () => {
  return (
    <ScrollView>
      <View style={Style.container}>
        <Text style={Style.title}>Login</Text>
        <TextInput placeholder="Phone" style={Style.input}></TextInput>
        <TextInput placeholder="Password" style={Style.input}></TextInput>
        <TouchableOpacity style={Style.button}>
          <Text style={Style.button_text}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
