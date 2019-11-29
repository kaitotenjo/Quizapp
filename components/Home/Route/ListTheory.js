import React ,{useState, useEffect, useMemo,useCallback} from 'react'
import {FlatList,TouchableOpacity,Text,List,StyleSheet,View} from 'react-native'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { ListItem } from 'react-native-elements'
import {firebaseApp} from '../../Fireconfig'
import { YellowBox } from 'react-native';
import _ from 'lodash';
import DropDownItem from "react-native-drop-down-item";
export default function ListTheory() {
  const [items,setitems]=useState()
  const [Show,setShow ]=useState([])
  const [selected, setSelected] = React.useState();
  const itemRef= firebaseApp.database().ref('Theory')
  YellowBox.ignoreWarnings(['Setting a timer']);
  const _console = _.clone(console);
  console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
  const getTheory=()=>{
     itemRef.on('value',(snap)=>{
  let Theorys = snap.val()
  let index=[]
  let getoneTheory=[]
  for (let Theory in Theorys){
    index.push({
      name: Theory,
      oneTheory:Theorys[Theory]
    })
    setitems(index) 
  }
  index.map((k)=>{
 for (let Theo in k.oneTheory){
   getoneTheory.push({
     id:k.name,
     nameOneTheory:Theo,
     val: k.oneTheory[Theo],
   })
 }
 setShow(getoneTheory)
  })
 })}
const onSelect=( name)=>{
  let index=[]
  Show.map((k)=>{
    if(name==k.id){
      index.push({
        nameOneTheory: k.nameOneTheory,
        val:k.val
      })

    }
  })
  console.log(index)
 return(
   <FlatList
    data={index}
    renderItem={({item}) => 
    <ListItem
    title={item.nameOneTheory}
    selected={item.nameOneTheory}
    />
    }
    keyExtractor={item=>item.nameOneTheory}
    />
   )
}
  useEffect(()=>{
   getTheory(setitems(items))
  })
   return (
    <TouchableOpacity>
    <FlatList
    data={items}
    renderItem={({item}) => 
    <ListItem
    title={item.name}
    onPress={()=>onSelect(item.name)}
    />
    }
    keyExtractor={item=>item.name}
    />
     </TouchableOpacity>
     )
    }
