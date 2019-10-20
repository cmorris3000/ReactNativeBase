import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Constants from 'expo-constants';

import {Button} from 'native-base';

export default class App extends React.Component {
  state={
    customText: ""
  }
  myBackground= require('./Images/001.jpg')
  render (){
    return(
      <View style={styles.container}>
      <Text>{this.state.customText}</Text>
      <Image style={styles.imageBackground} source={this.myBackground}/>
      <Button onPress={()=>this.setState({customText:'Custon Text'})}><Text style={styles.buttonTextStyle}>Native Base Button</Text></Button>
    </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle:{
    color: 'white',
    marginLeft: 4,
    marginRight: 4
  },
  imageBackground:{
    height: 500,
    width: 300
  }
});
