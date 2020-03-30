import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ImageOpener, CameraOpener } from './components';

const Evaluation = () => {
  const [name, setName] = useState('Client name');

  const goToHome = () => {
    Actions.landing();
  }

  return (
    <View>
      <Text>Before After Evaluation</Text>
      <TextInput 
        onChangeText={text => setName(text)} 
        clearTextOnFocus={true}
        value={name}
      />
      <ImageOpener key={1}/>
      <ImageOpener key={2}/>
      <Button
        onPress={goToHome}
        title="home button"
      >
        Inicio
      </Button>
    </View>
  );
}

export default Evaluation;
