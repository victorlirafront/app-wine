import { View, Text } from 'react-native';
import { CAROUSEL_01 } from '../../constants/images';
import { styles } from './SpecialBanner.styled';
import Slick from 'react-native-slick';
import { Props } from './SpecialBanner.types';

const groupArray = (array: string[], size: number) => {
  const grouped = [];
  for (let i = 0; i < array.length; i += size) {
    grouped.push(array.slice(i, i + size));
  }
  return grouped;
};

const SpecialBanner: React.FC<Props> = () => {
  const groupedSlides = groupArray(CAROUSEL_01, 2);

  const slidesArray = groupedSlides.map((group, index) => (
    <View key={index} style={styles.slide}>
      {group.map((item: string, itemIndex: number) => (
        <View key={itemIndex} style={[styles.product, styles.sliderItem]}>
          <View style={styles.productBox}>
            <Text>adasdf</Text>
          </View>
          <View style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Adicionar</Text>
          </View>
        </View>
      ))}
    </View>
  ));

  return (
    <>
      <View style={styles.sliderContainer}>
        <Slick
          style={styles.wrapper}
          showsButtons={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={{
            bottom: -20,
          }}
        >
          {slidesArray}
        </Slick>
      </View>
    </>
  );
};

export default SpecialBanner;
