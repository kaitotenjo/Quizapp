import React from 'react'
import {
   StyleSheet,
   Text,
   View,
   Image,
   FlatList,
 } from 'react-native';
import { Actions } from 'react-native-router-flux'
import list from '../../data/ListTheory'
const styles = StyleSheet.create({
   header:{
     backgroundColor: "#DCDCDC",
   },
   headerContent:{
     padding:30,
     alignItems: 'center',
   },
   avatar: {
     width: 130,
     height: 130,
     borderRadius: 63,
     borderWidth: 4,
     borderColor: "white",
     marginBottom:10,
   },
   name:{
     fontSize:22,
     color:"#000000",
     fontWeight:'600',
   },
   userInfo:{
     fontSize:16,
     color:"#778899",
     fontWeight:'600',
   },
   body:{
     backgroundColor: "#778899",
     height:500,
     alignItems:'center',
   },
   item:{
     flexDirection : 'row',
   },
   infoContent:{
     flex:1,
     alignItems:'flex-start',
     paddingLeft:5
   },
   iconContent:{
     flex:1,
     alignItems:'flex-end',
     paddingRight:5,
   },
   icon:{
     width:30,
     height:30,
     marginTop:20,
   },
   info:{
     fontSize:18,
     marginTop:20,
     color: "#FFFFFF",
   }
 });
 keyExtractor = (item, index) => index.toString()
 renderItem = ({ item }) => (
   <ListItem
     title={item.name}
     bottomDivider
     chevron
   />
 )
 
const  Account= () => {
   const goToHome = () => {
      Actions.home()
   }
  
   return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>John Doe </Text>
                <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
            </View>
          </View>
          <FlatList
           keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}

          />
         

          
      </View>
   )
}
export default Account