import React, { useState,useEffect } from 'react'
import {
   StyleSheet,
   Text,
   View,
   Image,
   FlatList,
 } from 'react-native';
import { Actions } from 'react-native-router-flux'
import {firebaseApp} from '../../Fireconfig'

 
function Account() {
  const userRef=firebaseApp.database()

   const [user,setuser]=useState([])
   const VerificationUser=()=>{
    firebaseApp.auth().onAuthStateChanged((user)=>{
      if(user){
      
      }else{

      }
    })
   }
   const getuser=()=>{
    userRef.ref('users/'+firebaseApp.auth().currentUser.uid+"/profile").on('value',(snap)=>{
  
     let items=snap.val()
     setuser(items)
    })
      
  
   }
   useEffect(()=>{
    getuser(setuser(user))
   })
   return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

   <Text style={styles.name} title = { user.map((name)=>{
     console.log(name.UserEmail)
   })}></Text>
                <Text style={styles.userInfo}></Text>
              
            </View>
          </View>
          
         

          
      </View>
   )
}
export default Account
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
