import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import About from '../screens/About';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';

const Tab = createMaterialBottomTabNavigator();

const NavTabs = () => {
  return (
    <Tab.Navigator initialRouteName={Home}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Sign In" component={SignIn} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default NavTabs;
