import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { styles } from '../../css/global.css';
import { Actions } from 'react-native-router-flux';

const Landing = () => {
  const goToEvaluation = () => {
    Actions.evaluation()
  }

  return (
  <View style={styles.App}>
    <Text style={styles.title}>Essencia Pilates</Text>
    <Button
      onPress={goToEvaluation}
      title="Entrar on this"
      style={styles.Button}
      accessibilityLabel="Abrir applicativo">
      Abrir Avaliacao
    </Button>
  </View>
  );  
}

export default Landing;
