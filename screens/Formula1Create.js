import { ScrollView, Text, StyleSheet, Alert,Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Button } from '@rneui/base'
import * as ImagePicker from 'expo-image-picker';
// import * as DocumentPicker from 'expo-document-picker';


import DocumentPicker from 'react-native-document-picker';


export default function Formula1Create(props) {
  
    const [content, setContent]=  useState("")
    const [game_image, setGame_image] = useState(null);


    const createLoad =() => {
        fetch('http://192.168.25.107:8000/api/Formula1/create/', {
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
            body: JSON.stringify({content:content})
        })
        .then(resp => resp.json())
        .then(data => { 
          console.log(data)
          props.navigation.navigate('Formular1')
        })
        .catch(error=> Alert.alert('Error', error.message))
      }
     

  return (
    <ScrollView>
      <TextInput style={styles.input}
      label="content"
      value={content}
      mode= 'outlined'
      multiline
      numberOfLines={12}
      onChangeText={text => setContent(text)}
    />
    <Button
      buttonStyle={{ width: 150, alignSelf: 'center' }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      iconContainerStyle={{ background: "#000" }}
      onPress={() => createLoad()}
      title="Submit"
      titleStyle={{ marginHorizontal: 5 }}
    />
    </ScrollView>
  )
}
const styles= StyleSheet.create({
  input:{
    margin: 10,
  }
})