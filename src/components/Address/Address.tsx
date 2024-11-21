import { Image, Text, View } from 'react-native';
import styles from './Address.styles';

const Address: React.FC = () => {
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
