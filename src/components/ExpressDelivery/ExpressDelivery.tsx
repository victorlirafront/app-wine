import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../ExpressDelivery/ExpressDelivery.styled';

const ExpressDelivery: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.duration}>
        <Text style={styles.text}>Receba seu pedido em até 3 horas!</Text>
        <Image
          source={require('../../assets/icon/arrow-right.png')}
          alt="arrow right"
          style={styles.image}
        />
      </View>
      <View style={styles.storeWrapper}>
        <Image
          source={require('../../assets/icon/delivery-icon.png')}
          alt="Delivery icon"
        />
        <View>
          <Text style={styles.title}>Loja física</Text>
          <Text style={styles.name}>Wine BH</Text>
          <Text style={styles.description}>
            {'Conheça o catálogo, faça pedidos \n ou saiba como chegar.'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ExpressDelivery;
