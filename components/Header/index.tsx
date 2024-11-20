import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logoIcon}
        alt="logo wine"
      />
      <Image
        source={require('../../assets/carrinho.png')}
        style={styles.chackoutIcon}
        alt="carrinho icone"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,

    fontWeight: 'bold',
  },
  logoIcon: {
    padding: 30,
    width: 100,
    resizeMode: 'contain',
  },

  chackoutIcon: {
    width: 48,
    height: 48,
  },
});

export default Header;
