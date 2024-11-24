import React from 'react';
import { View, Image } from 'react-native';
import styles from './MiniBanner.styled';
import { MiniBannerProps } from './MiniBanner.types';

const MiniBanner: React.FC<MiniBannerProps> = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: uri,
        }}
        style={styles.image}
        resizeMode="contain"
        alt="minibanner"
      />
    </View>
  );
};

export default MiniBanner;
