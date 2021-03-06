import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const AccountScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Account Detail</Text>
        <View style={styles.inputHeader} >
          <TextInput  
            style={styles.inputText}
            value="Full Name:"/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            value="Demo Demo Demo"/>
        </View>
        <View style={styles.inputHeader} >
          <TextInput  
            style={styles.inputText}
            value="Email:"/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            value="abc@demo.com"/>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('SignIn')}}>
          <Text style={styles.loginText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
  )
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40,
    marginTop: 30
  },
  inputView:{
    width:"80%",
    backgroundColor:"black",
    height:50,
    marginBottom:40,
    justifyContent:"center",
    padding:5
  },
  inputHeader:{
    width:"80%",
    backgroundColor:"black",
    height:50,
    marginBottom:5,
    justifyContent:"center",
    padding:5
  },
  inputText:{
    height:100,
    color:"white",
    fontSize: 22
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    paddingTop: 100,
    color:"white"
  }
});