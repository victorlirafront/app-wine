import { View, StyleSheet, Text, Image } from 'react-native';

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
              uri: 'https://img.wine.com.br/martech/external/app-wine/icons/arrow-right.png',
            }}
            alt="arrow right"
          />
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default BestCountries;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: '100%',
    marginTop: 16,
  },
  title: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    flex: 1, // Garante que o texto principal ocupe o espaço restante
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    lineHeight: 22,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontSize: 12,
    color: '#C81A78',
    marginRight: 4, // Espaçamento entre o texto e o ícone
  },
  arrowIcon: {
    width: 12,
    height: 10, // Ajuste o tamanho do ícone
  },
});
