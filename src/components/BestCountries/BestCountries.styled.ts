import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    flex: 1,
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
    marginRight: 4,
    fontWeight: '500',
  },
  arrowIcon: {
    width: 12,
    height: 10,
  },
  countryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countryBox: {
    alignItems: 'center',
    minWidth: 70,
  },
  countryImage: {
    width: 56,
    height: 56,
    marginBottom: 4,
  },
  countryName: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    color: '#666666',
  },
});

export default styles;
