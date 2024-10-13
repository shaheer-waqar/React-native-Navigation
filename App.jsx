import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Product from './screens/Product';
import Contact from './screens/Contact';
import Entypo from 'react-native-vector-icons/Entypo';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <Entypo name="home" size={25} />;
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <Entypo name="shopping-cart" size={25} />;
            },
          }}
          name="Products"
          component={Product}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <Entypo name="phone" size={25} />;
            },
          }}
          name="Contact"
          component={Contact}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
