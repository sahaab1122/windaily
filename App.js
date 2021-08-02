import React, { Profiler } from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';

import AppNavigator from './AppNavigator';
//  import firebase from 'firebase';



import { ActivityIndicator, Text, View } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import Store from './app/store/Store';
import { Provider } from 'react-redux';




const Stack = createStackNavigator();

class App extends React.Component {



  render() {
    return (

      <PersistGate loading={false} persistor={Store.persistor}>
        <Provider store={Store.store}>
          <AppNavigator />
        </Provider>
      </PersistGate>



    );
  }
}
export default App

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // var firebaseConfig = {
  //   apiKey: "AIzaSyDHpdnjtZPe4Wd-bn-PEq0S0QeqF8gVzO0",
  //   authDomain: "windaily-cf016.firebaseapp.com",
  //   projectId: "windaily-cf016",
  //   storageBucket: "windaily-cf016.appspot.com",
  //   messagingSenderId: "478338770949",
  //   appId: "1:478338770949:web:94210923f2f3b22c07946c",
  //   measurementId: "G-6320PG51P9"
  // };
  // // Initialize Firebase
  // if(!firebase.apps.length)
  // firebase.initializeApp(firebaseConfig);

