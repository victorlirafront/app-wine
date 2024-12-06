import React from 'react';
import { View, Text } from 'react-native';
import styles from './NavItem.styled';
import NavItemProps from './NavItem.types';

const NavItem: React.FC<NavItemProps> = props => {
  const { icon, text } = props;

  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default NavItem;
