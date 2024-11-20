import { View, StyleSheet, Image } from 'react-native';
import WineUpItem from '../WineUpItem';

const WineUpInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsWrapper}>
        <WineUpItem
          backgroundColor="#DAD4E7"
          wineUpText="Estreante"
          iconImage={require('../../assets/icon/wineup-nivel.png')}
          color="#573D90"
          label="Nivel 2"
        />
        <WineUpItem
          backgroundColor="#F7E2CE"
          wineUpText="05"
          iconImage={require('../../assets/icon/wineup-selos.png')}
          color="#DD7D1E"
          label="Selos"
        />
        <WineUpItem
          backgroundColor="#D5E9E2"
          wineUpText="R$ 2,00"
          iconImage={require('../../assets/icon/cashback.png')}
          color="#00826B"
          label="Cashback"
        />
        <Image
          source={require('../../assets/icon/question-mark.png')}
          alt="question mark"
        />
      </View>
    </View>
  );
};

export default WineUpInformation;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
