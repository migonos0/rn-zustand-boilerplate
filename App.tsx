/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createTestActionHandler} from './src/services/store/actions/test.action';
import {useStore} from './src/services/store/useStore';

const testDispatcher = useStore.getState().testDispatcher;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {message} = useStore(state => state.testState);
  const [localMessage, setLocalMessage] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>{message}</Text>
      <TextInput
        onChangeText={e => {
          setLocalMessage(e);
        }}
      />
      <Button
        title="Hola"
        onPress={() => {
          createTestActionHandler()(testDispatcher)(localMessage);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
