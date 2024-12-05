import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
    maxWidth: '100%',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    color: '#C81A78',
    marginLeft: 8,
    marginRight: 8,
  },
  arrowRight: {
    width: 12,
    height: 10,
  },

  sliderContainer: {
    height: 500,
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  wrapper: {},
  slide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  sliderItem: {
    height: 442,
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
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  // star start
  starWrapper: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 8,
  },
  starBox: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 3,
  },
  starNote: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 16,
    color: '#555555',
  },

  dotsBox: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  dotsIcon: {
    height: 16,
    resizeMode: 'contain',
  },
  // star end
  // bottle start
  bottleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottleImage: {
    width: 124,
    height: 183,
  },
  //bottle end

  //country init
  countryWrapper: {
    alignItems: 'flex-end',
    width: '100%',
    paddingRight: 8,
    marginTop: -10,
  },

  countryFlag: {
    width: 16,
    height: 16,
  },
  //country end

  //Wine name
  wineNameWrapper: {
    paddingHorizontal: 8,
  },
  wineName: {
    color: '#111',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 8,
  },
  //wine name end

  //partner PRICE INIT
  parterPrice: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 19,
  },

  partnerText: {
    color: '#555',
    textTransform: 'uppercase',
    fontSize: 10,
    marginRight: 8,
  },

  partnerPriceText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 28,
    color: '#C81A78',
  },

  //partner PRICE END

  addToCartButton: {
    width: '100%',
    backgroundColor: '#7EBC43',
    height: 40,
    marginTop: 8,
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
