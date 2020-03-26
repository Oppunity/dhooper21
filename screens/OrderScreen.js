import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Header, Left, Right, Icon} from 'native-base'
import {  SearchBar } from 'react-native-elements';




export default class OrderScreen extends React.Component{
     static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor }) =>
        <Icon name = "md-cart" 
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

                <SearchBar 
                placeholder="Search products..."
                round
                fontColor="black"

                
                containerStyle={{backgroundColor: 'black', width: '60%', height: '2%', left: '30%', borderWidth: 1, borderRadius: 10, position: 'absolute', top: '4%', }}

               /> 
            <View style = {{position: 'absolute', flexDirection: 'row', borderColor: 'white', borderWidth: 1,  top: '24%', width: '90%', height: '12%', alignItems: 'center', justifyContent: 'center', }}>
                 
                 
            <TouchableOpacity style={{left: '-145%', bottom: '7.5%'}}> 
                  <Text style = {{top: 5, color: 'white', fontSize: 16, fontWeight: '500', position: 'absolute'}}> Current Cart </Text>       
                  </TouchableOpacity>
                  
                 <Text style = {{top: '50%', left: '1%', color: '#808080', fontSize: 16, fontWeight: '400', position: 'absolute'}}> See More </Text>
                    
                      
                  

                      
                        <TouchableOpacity style={{ postion: 'absolute', left: '-45%', bottom: '3.5%'}}> 
                        <Image source = {{uri: 'https://images.homedepot-static.com/productImages/712f88b9-407a-4dc4-942f-09ccdf813fd3/svn/framing-studs-161640-64_1000.jpg'}}
                          style={{width: 30, height: 30, resizeMode: 'cover', position: 'absolute'}}/>
                          <Image source = {{uri: 'https://images.homedepot-static.com/productImages/74fc4971-bc31-4cd8-bb5b-12c15a8565c7/svn/grip-rite-drywall-screws-114cdws1-64_1000.jpg'}}
                          style={{width: 30, height: 30, resizeMode: 'cover', top: '30%'}}/>
                          </TouchableOpacity>
                       
                      
                          <TouchableOpacity style={{ postion: 'absolute', left: '-40%', bottom: '3.5%'}}> 
                        <Image source = {{uri: 'https://images.homedepot-static.com/productImages/62a70196-70dc-49a1-9af8-e536ed0a3b88/svn/sierra-pacific-industries-wood-fence-pickets-458830-64_1000.jpg'}}
                          style={{width: 30, height: 30, resizeMode: 'cover', position: 'absolute'}}/>
                          <Image source = {{uri: 'https://images.homedepot-static.com/productImages/55b548ca-df89-461e-85a9-a72fab5bccf3/svn/metal-sales-metal-roofing-2313317-64_1000.jpg'}}
                          style={{width: 30, height: 30, resizeMode: 'cover', top: '30%'}}/>
                          </TouchableOpacity>

                          <Text style={{color: '#808080', position: 'absolute', top: '80%', left: '50%'}}>Subtotal (4 items): $81.11 </Text>
                          <Text style={{color: '#FF9900', position: 'absolute', top: '36%', left: '72%'}}> Checkout </Text>  
                          <Icon  name = "arrow-forward" 
                onPress = {() => this.props.navigation.openDrawer()}
                size={100}
                style = {{ height: 60, width: 60, position: 'absolute', top: '30%', left: '92%', color: '#FF9900'}}/>

                   
            </View>

            <View style = {{position: 'absolute', flexDirection: 'row', borderColor: 'white', borderWidth: 1,  top: '35%', width: '90%', height: '12%', alignItems: 'center'}}>
                 
                     
                       <TouchableOpacity> 
                       <Image source = {{uri: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Paint/Gildden-Paint-Pod1.png'}}
                         style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: '5%'}}/>
                         </TouchableOpacity>
                      

                       
                    
                       <TouchableOpacity> 
                         <Image source = {{uri: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Paint/BehrPremium-Paint-Pod2.png'}}
                         style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: '0%'}}/>
                         </TouchableOpacity>
                      
                    
                       <TouchableOpacity> 
                         <Image source = {{uri: 'https://www.rmfp.com/wp-content/uploads/2018/12/lumber-colors-1080x675.jpeg'}}
                         style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: '0%'}}/>
                         </TouchableOpacity>
                         <TouchableOpacity> 
                    <Text style={{color: 'white', right: '15%', fontSize: 20}}> Delivered on March 15th </Text>
                    </TouchableOpacity>
                  
           </View>

           <View style = {{position: 'absolute', flexDirection: 'row', borderColor: 'white', borderWidth: 1,  top: '50%', width: '90%', height: '12%', alignItems: 'center'}}>
                 
                     
                 <TouchableOpacity> 
                 <Image source = {{uri: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Lighting_and_Fans/standard-light-bulb.png'}}
                   style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: '5%'}}/>
                   </TouchableOpacity>
                

                 
              
                 <TouchableOpacity> 
                   <Image source = {{uri: 'https://images.homedepot-static.com/productImages/9c2b3d5c-3b2a-4a82-99d9-fa7ef3201e57/svn/quietcool-power-roof-vents-afr-slr-40-64_400_compressed.jpg'}}
                   style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: '0%'}}/>
                   </TouchableOpacity>
                
              
                 <TouchableOpacity> 
                   <Image source = {{uri: 'https://www.rmfp.com/wp-content/uploads/2018/12/lumber-colors-1080x675.jpeg'}}
                   style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: '0%'}}/>
                   </TouchableOpacity>
                   <TouchableOpacity> 
              <Text style={{color: 'white', right: '15%', fontSize: 20}}> Delivered on March 1st </Text>
              </TouchableOpacity>
            
     </View>

     <View style = {{position: 'absolute', flexDirection: 'row', borderColor: 'white', borderWidth: 1,  top: '65%', width: '90%', height: '12%', alignItems: 'center'}}>
                 
                     
                 <TouchableOpacity> 
                 <Image source = {{uri: 'https://www.yellowstonelumber.com/wp-content/uploads/2018/05/wood-dark.jpg'}}
                   style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: '5%'}}/>
                   </TouchableOpacity>
                

                 
              
                 <TouchableOpacity> 
                   <Image source = {{uri: 'https://twainharteace.com/wp-content/uploads/lumber.png'}}
                   style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: '0%'}}/>
                   </TouchableOpacity>
                
              
                 <TouchableOpacity> 
                   <Image source = {{uri: 'https://www.rmfp.com/wp-content/uploads/2018/12/lumber-colors-1080x675.jpeg'}}
                   style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: '0%'}}/>
                   </TouchableOpacity>
                   <TouchableOpacity> 
              <Text style={{color: 'white', right: '15%', fontSize: 20}}> Delivered on February 28th </Text>
              </TouchableOpacity>
            
     </View>

      <TouchableOpacity style={{ backgroundColor: '#FF9900', padding: 5, width: 150, height: 40, justifyContent: 'center', borderRadius: 5, borderWidth: 1, top: '35%'}}
                           >
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> Continue Shopping </Text>

               </TouchableOpacity>
        
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
