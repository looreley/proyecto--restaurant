 import  React  from 'react'
 import {createStackNavigator} from '@react-navigation/stack'
 import TopRestaurants from '../Screens/TopRestaurants'

 const Stack = createStackNavigator()

 export default function TopRestaurantsStack(){
     return(
         <Stack.Navigator>  
         <Stack.Screen
             name='top-restaurants'
             component={TopRestaurants}
             options={{title:'los mejores 5'}}
         />
         </Stack.Navigator>
     )
 }