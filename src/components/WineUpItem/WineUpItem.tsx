import React from 'react';
import { View, Text, Image } from 'react-native';
import { WineUpItemProps } from './WineUpItem.types';
import styles from './WineUpItem.styled';

const WineUpItem = ({
  backgroundColor = '#dbdbdb',
  wineUpText,
  iconImage,
  color = '#000',
  label,
}: WineUpItemProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.item, { backgroundColor }]}>
        <Image source={iconImage} style={styles.iconImage} alt={'tes'} />
        <Text style={[styles.iconText, { color }]}>{wineUpText}</Text>
      </View>
    </View>
  );
};

export default WineUpItem;
