import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AppContainer from './app/components/AppContainer';
import AsyncStorage from '@react-native-community/async-storage';

function getPersistenceFunctions() {
  const persistenceKey = 'persistenceKey';
  return __DEV__ ? {
    persistNavigationState: async (navState) => {
      try {
        await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState))
      } catch (err) {
        console.log(err);
      }
    },
    loadNavigationState: async () => {
      const jsonString = await AsyncStorage.getItem(persistenceKey)
      return JSON.parse(jsonString)
    }
  } : undefined;
}

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView}>
        <AppContainer {...getPersistenceFunctions()} />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
