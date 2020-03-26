import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Header, Left, Right, Icon} from 'native-base'



export default class SettingsScreen extends React.Component{
   static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor }) =>
        <Icon name = "md-settings"  
      style={{fontSize: 24, color: tintColor}}/>

    }


  render(){
  return (
    <View style={styles.container}>
        
                <View style = {{position: 'absolute', backgroundColor: 'black', width: '100%', height: '20%', top: 0, left: 0}}/>
        
                <Icon  name = "menu" 
                onPress = {() => this.props.navigation.openDrawer()}
                style = {{zIndex: 2, height: 40, width: 40, position: 'absolute', top: '6%', left: 30, color: 'white'}}/>

                <Image source = {{uri: 'https://cdnassets.hw.net/f4/12/d613149a4677b09ca08dd760fe34/parr-lumber.png'}}
                style = {{height: '15%', width: '18%', position: 'absolute', left: '8%', top: '4%'}}/>

              
               

            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text> Settings Screen </Text>
            </View>
        
    </View>
  );
}
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
