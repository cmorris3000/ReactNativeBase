import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Constants from 'expo-constants';


import Home from './src/screems/Home';
import Login from './src/screems/Login';

export default class App extends React.Component {
  state={    
    currentScreem: "Login"
  }
  myBackground= require('./Images/001.jpg')

  //Navigation without react Navigation.
  renderScreem= ()=>{
    if(this.state.currentScreem === "Login"){
      return(
        <Login switchScreem={this.switchScreem}/>
      );
    }else if(this.state.currentScreem === "Home"){
      return(
        <Home switchScreem={this.switchScreem}/>
      );
    }
  }

  //Function to change the page
  switchScreem= (screem)=>{
    this.setState({currentScreem: screem});
  }

  render (){
    return(
      <View style={styles.container}>
        {this.renderScreem()}
        
      
    </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  }
});
