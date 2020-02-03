/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component
{


    MyLocation=()=>
    // {
    //       fetch('https://api.geodatasource.com/city?key=WAC8XLUITMGLG8TWONWRN3WQQHTMKXJM&&format=json&lat=22.3072&lng=73.1812')
    //     .then((response) => response.json())
    //     .then((responseJson) => {

    //       Alert.alert(responseJson.city+","+responseJson.region)
    //       console.log(responseJson.city);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });


      

        fetch('https://developers.zomato.com/api/v2.1/geocode?lat=22.3072&lon=73.1812', {method: 'GET',
        headers: {
                  'Accept': 'application/json',
                  "user-key": "2f9c4c3df18b580b1b257a48f23d4155"
              }})
          .then((response) => response.json())
          .then((responseJson) => {

              Alert.alert(responseJson["popularity"].subzone+" , "+responseJson['location'].country_name);
              
              console.log(responseJson['location'].country_name);
              console.log(responseJson["popularity"].subzone);
          })
          .catch((error) => {
              console.error(error);
          });
    }

  render()
  {
    return(
      <View style={{flex:1,flexDirection:"column",backgroundColor:"white"}}>
        <Button title="Click Me" onPress={this.MyLocation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
