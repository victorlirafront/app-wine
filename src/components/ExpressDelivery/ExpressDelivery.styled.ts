import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#fff', // Necessário para que a sombra seja visível
    borderRadius: 8, // Opcional: arredonda as bordas
    shadowColor: '#000', // Cor da sombra (aplicável no iOS)
    shadowOffset: {
      width: 0,
      height: 2, // Define a direção da sombra
    },
    shadowOpacity: 0.25, // Transparência da sombra (iOS)
    shadowRadius: 4, // Suavidade da sombra (iOS)
    elevation: 5, // Intensidade da sombra (Android)
  },
  duration: {
    backgroundColor: '#00B495',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  image: {
    marginLeft: 8,
  },
  storeWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 8,
    flex: 1,
  },

  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  name: {
    color: '#333',
    fontSize: 20,
    fontWeight: '800',
  },

  description: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginBottom: 8,
  },
});

export default styles;
