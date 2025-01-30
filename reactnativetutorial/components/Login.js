import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Image} from 'react-native';
import { TextInput } from 'react-native-web';
import {useState} from 'react';

export default function Login() {
  const [username,setUsername]=useState("")
  const [password , setPassword]=useState("")
  const [errors,setErrors]=useState({});

  const validateForm =()=>{
    let errors ={}
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length ===0;
  }
  return (
    <View style={styles.container}>
      <View style = {styles.form}>
        <Image source={require('../assets/logo.png')}/>
          <Text style = {styles.label}>Username:</Text>
          <TextInput style={styles.input} placeholder="Enter your username" placeholderTextColor={'gray'} 
          name={username} onChangeText={setUsername}/>
          {
            errors.username? <Text>{errors.username}</Text>:null
          }
          <Text style = {styles.label} >Password:</Text>
          <TextInput  style={styles.input} placeholder="Enter your password"  placeholderTextColor={'gray'}
          name={password} onChangeText={setPassword}/>
          {
            
          }
          <Button title="Login" onPress={()=>{}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{
    backgroundColor:"white",
    padding:20,
  },
  input:{
    border:"2px solid black",
    height:40,
    width:500,
    margin: 10    


  },
  label:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:5,
  },

  image:{
    width:500,
    marginBottom:70
  },

  Button:{
    padding: 50,
    margin: 10    


  }
});
