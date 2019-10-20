import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import {Button} from 'native-base';

export default class App extends React.Component {
  state={
    customText: ""
  }

  render (){
    return(
      <View style={styles.container}>
      <Text>{this.state.customText}</Text>
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
  }
});
