 import  React  from 'react'
 import {createStackNavigator} from '@react-navigation/stack'
 import Search from '../Screens/Search'

 const Stack = createStackNavigator()

 export default function SearchStack(){
     return(
         <Stack.Navigator>  
         <Stack.Screen
             name='search'
             component={Search}
             options={{title:'buscador'}}
         />
         </Stack.Navigator>
     )
 }