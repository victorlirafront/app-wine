import { View, Text, Image } from 'react-native';
import { styles } from './SpecialBanner.styled';
import Slick from 'react-native-slick';
import { Props } from './SpecialBanner.types';
import { SPECIAL_BANNER } from '../../constants/images';

const groupArray = (array, size: number) => {
  const grouped = [];
  for (let i = 0; i < array.length; i += size) {
    grouped.push(array.slice(i, i + size));
  }
  return grouped;
};

const SpecialBanner: React.FC<Props> = () => {
  const groupedSlides = groupArray(SPECIAL_BANNER, 2);

  const slidesArray = groupedSlides.map((group, index) => (
    <View key={index} style={styles.slide}>
      {group.map((item: string, itemIndex: number) => (
        <View key={itemIndex} style={[styles.product, styles.sliderItem]}>
          <View style={styles.productBox}>
            <Image
              source={{ uri: item.image }}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>{item.text}</Text>
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
