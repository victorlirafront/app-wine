import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import Header from './src/components/Header/Header';
import Address from './src/components/Address/Address';
import WineUpInformation from './src/components/WineUpInformation/WineUpInformation';
import MiniBanner from './src/components/MiniBanner/MiniBanner';
import Carousel from './src/components/Carousel/Carousel';
import { MINIBANNERS } from './src/constants/images';
import ExpressDelivery from './src/components/ExpressDelivery/ExpressDelivery';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#c81a78" />
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Address />
          <WineUpInformation />
          <MiniBanner uri={MINIBANNERS[0]} />
          <Carousel />
          <MiniBanner uri={MINIBANNERS[1]} />
          <ExpressDelivery />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  scrollContainer: {
    paddingVertical: 10, // Ajusta o espaçamento entre os itens
  },
});
