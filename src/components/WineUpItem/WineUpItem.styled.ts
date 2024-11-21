import { StyleSheet } from 'react-native';

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

export default styles;
