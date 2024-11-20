import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './components/Header';
import Address from './components/Address';
import WineUpInformation from './components/WineUpInformation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#c81a78" />
      <View style={styles.container}>
        <Header />
        <Address />
        <WineUpInformation />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 0,
  },
  content: {
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 15,
  },
});
