import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
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
      
      <ImageBackground style={styles.imageBackground} source={this.myBackground}>
        <View style={styles.imageView}>
          <Text>{this.state.customText}</Text>
          <Text>Hello</Text>
          <Button onPress={()=>this.setState({customText:'Custon Text'})}><Text style={styles.buttonTextStyle}>Native Base Button</Text></Button>
        </View>
      </ImageBackground>
      
    </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
  buttonTextStyle:{
    color: 'white',
    marginLeft: 4,
    marginRight: 4
  },
  imageBackground:{
    flex: 1,
    
  },
  imageView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
