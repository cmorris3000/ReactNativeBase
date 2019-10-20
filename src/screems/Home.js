import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';

export default class Home extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Welcome to Home Page</Text>
        <Button onPress={()=> this.props.switchScreem("Login")}>
          <Text style={styles.buttonText}>Return</Text></Button>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    marginLeft: 6,
    marginRight: 6
  }
})