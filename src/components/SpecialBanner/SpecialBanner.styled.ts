import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  sliderContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    height: 170,
    marginTop: 16,
  },
  wrapper: {},
  slide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  sliderItem: {
    height: 141,
    width: 156,
  },
  productBox: {
    width: '100%',

    flex: 1,
    height: 34,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
  addToCartButton: {
    width: '100%',
    backgroundColor: '#fff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  product: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#C6007E',
    width: 16,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});
