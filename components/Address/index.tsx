import { Image, Text, StyleSheet, View } from 'react-native';

const Address = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.truckIcon}
        source={require('../../assets/icon/truck.png')}
        alt="truck icon"
      />
      <Text style={styles.addressText}>
        Av. Getúlio Vargas do Brasil, 1549...
      </Text>
      <Image
        source={require('../../assets/icon/dropdown.png')}
        alt="dropdown icon"
      />
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  truckIcon: {
    marginRight: 10,
  },
  addressText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
