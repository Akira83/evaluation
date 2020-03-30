import React from 'react';
import { 
  Landing,
  Evaluation,
 } from './src';
import { Router, Scene } from 'react-native-router-flux';


export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="landing" component={Landing} initial={true}/>
        <Scene key="evaluation" component={Evaluation}/>
      </Scene>
    </Router>
  );
}
