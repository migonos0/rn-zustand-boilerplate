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
import {
  getTestDispatcher,
  testStateSelector,
} from './src/services/store/slices/test.slice';
import {useStore} from './src/services/store/useStore';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {message} = useStore(testStateSelector);
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
          createTestActionHandler()(getTestDispatcher(useStore))(localMessage);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
