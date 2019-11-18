import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const rubyonrails = () => {
    const goToQuiz = () => {
      Actions.IT()
    }
     
 
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToQuiz}> 
      <Text>ruby on rails</Text>
      </TouchableOpacity>
   )
}
export default rubyonrails