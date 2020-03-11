import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavTab from './src/components/NavTabs';
import PokemonDetails from './src/screens/PokemonDetails';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';

const Stack = createStackNavigator();
const store = configureStore();
const myTheme = {
  colors: {
    background: 'rgb(20,20,20)',
    text: 'rgb(255,255,255)',
    card: 'rgb(18, 18, 18)',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={myTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Pokemon Index" component={NavTab} />
          <Stack.Screen
            name="Pokemon Details"
            component={PokemonDetails}
            options={{
              headerBackTitle: 'Back',
              headerBackTitleStyle: {color: 'white'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
