import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavTab from './src/components/NavTabs';
import PokemonDetails from './src/screens/PokemonDetails';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';

const Stack = createStackNavigator();
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pokemon Index" component={NavTab} />
          <Stack.Screen
            name="Pokemon Details"
            component={PokemonDetails}
            options={{headerBackTitle: 'Back'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
