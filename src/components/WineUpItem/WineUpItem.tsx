import React from 'react'; // Adicione esta linha
import { View, Text, Image, StyleSheet } from 'react-native';
import { WineUpItemProps } from './WineUpItem.types';

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

const styles = StyleSheet.create({
  wrapper: {},
  label: {
    marginBottom: 4,
    fontSize: 12,
    color: '#555555',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  iconImage: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  iconText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});
