import { View, Text, Image } from 'react-native';
import styles from './BestCountries.styled';
import { countries } from './BestCountriesObject';
import { ARROW_RIGHT } from '../../constants/images';

const CountryBox = ({ name, flagUri }: { name: string; flagUri: string }) => (
  <View style={styles.countryBox}>
    <Image
      style={styles.countryImage}
      source={{ uri: flagUri }}
      accessibilityLabel={`Bandeira de ${name}`}
      alt={`Bandeira de ${name}`}
    />
    <Text style={styles.countryName}>{name}</Text>
  </View>
);

const BestCountries = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {'Os melhores vinhos do \n seu país favorito'}
        </Text>
        <View style={styles.linkContainer}>
          <Text style={styles.link}>VER TODOS</Text>
          <Image
            style={styles.arrowIcon}
            source={{
              uri: ARROW_RIGHT,
            }}
            accessibilityLabel="Seta apontando para a direita"
            alt="arrow right"
          />
        </View>
      </View>

      <View style={[styles.countryRow, { marginTop: 18 }]}>
        {countries.slice(0, 4).map((country, index) => (
          <CountryBox
            key={index}
            name={country.name}
            flagUri={country.flagUri}
          />
        ))}
      </View>
      <View style={[styles.countryRow, { marginTop: 16 }]}>
        {countries.slice(4, 8).map((country, index) => (
          <CountryBox
            key={index}
            name={country.name}
            flagUri={country.flagUri}
          />
        ))}
      </View>
    </View>
  );
};

export default BestCountries;
