import React from 'react';
import { View, Image } from 'react-native';
import styles from './Address.styled';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logoIcon}
        alt="logo wine"
      />
      <Image
        source={require('../../../assets/carrinho.png')}
        style={styles.chackoutIcon}
        alt="carrinho icone"
      />
    </View>
  );
};

export default Header;
