import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ImageOpener } from './components';

import { styles } from './Evaluation.css';

const Evaluation = () => {
  const [name, setName] = useState('Client name');

  const goToHome = () => {
    Actions.landing();
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Before After Evaluation</Text>
      </View>
      <View style={styles.wrapperPacient}>
        <TextInput 
          style={styles.pacientInput}
          onChangeText={text => setName(text)} 
          clearTextOnFocus={true}
          value={name}
        />
      </View>
      <View style={styles.wrapperImages}>
        <View style={styles.beforeView}>
          <Text style={styles.label}>Before</Text>
          <ImageOpener style={styles.imageOpener} key={1}/>
        </View>
        <View style={styles.afterView}>
          <Text style={styles.label}>After</Text>
          <ImageOpener key={2}/>
        </View>
      </View>
      <View style={styles.actionBtn}>
        <Button
          onPress={goToHome}
          title="home button"
        >
          Inicio
        </Button>
      </View>
    </View>
  );
}

export default Evaluation;
