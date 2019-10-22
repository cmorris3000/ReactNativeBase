import React from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';
import {Container, Button, Header, Left, Body, Right, Title, Subtitle, Icon, Item, Input} from 'native-base';

export default class Home extends React.Component{
  state={
    searchText: ""
  }
  IconSearch= ()=>{
    
  }
  render(){
    return(
      
        <View style={styles.container}>
          <Header searchBar rounded>
            <Left>         
                <Icon style={styles.searchIcon} name='arrow-back' onPress={()=> this.props.switchScreem("Login")}/>  
            </Left>
            <Body>
              <Title>Home</Title>              
            </Body>
            <Right>              
              <Button transparent>
                <Icon name='heart' />
              </Button>            
              <Button transparent>
                <Icon style={styles.searchIcon}ios='ios-menu' android="md-menu" />
              </Button>              
            </Right>
            
            
          </Header>
          <Item>
              <Icon ios='ios-search' android="md-search" onPress={this.IconSearch}/>
              <Input placeholder="Search" value={this.searchText} onChangeText={(search)=>this.setState({searchText: search})}/>
          </Item>
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
    
  },  
  searchIcon:{
    
    color: Platform.OS === 'ios' ? 'black' : 'white'
  },
  buttonText:{
    marginLeft: 6,
    marginRight: 6
  },
})