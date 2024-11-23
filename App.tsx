import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './src/components/Header/Header';
import Address from './src/components/Address/Address';
import WineUpInformation from './src/components/WineUpInformation/WineUpInformation';
import MiniBanner from './src/components/MiniBanner/MiniBanner';
import Carousel from './src/components/Carousel/Carousel';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#c81a78" />
      <View style={styles.container}>
        <Header />
        <Address />
        <WineUpInformation />
        <MiniBanner />
        <Carousel />
        <MiniBanner />
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
