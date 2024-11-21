import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,

    fontWeight: 'bold',
  },
  logoIcon: {
    padding: 30,
    width: 100,
    resizeMode: 'contain',
  },

  chackoutIcon: {
    width: 48,
    height: 48,
  },
});

export default styles;
