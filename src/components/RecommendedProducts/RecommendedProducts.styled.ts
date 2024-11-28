import { StyleSheet } from 'react-native';

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
    borderWidth: 1,
    borderColor: 'red',
    height: 442,
    width: 156,
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
