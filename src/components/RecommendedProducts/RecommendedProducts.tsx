import { View, Text, Image } from 'react-native';
import { ARROW_RIGHT, CAROUSEL_01 } from '../../constants/images';
import { styles } from './RecommendedProducts.styled';
import Slick from 'react-native-slick';
import { Props } from './RecommendedProducts.types';

const groupArray = (array: string[], size: number) => {
  const grouped = [];
  for (let i = 0; i < array.length; i += size) {
    grouped.push(array.slice(i, i + size));
  }
  return grouped;
};

const RecommendedProducts: React.FC<Props> = () => {
  const groupedSlides = groupArray(CAROUSEL_01, 2);

  const slidesArray = groupedSlides.map((group, index) => (
    <View key={index} style={styles.slide}>
      {group.map((item: string, itemIndex: number) => (
        <View key={itemIndex} style={[styles.product, styles.sliderItem]}>
          <View style={styles.productBox}>
            <View style={styles.starWrapper}>
              <View style={styles.starBox}>
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/icon/star.png')}
                  alt="Icone de estrela"
                />
                <Text style={styles.starNote}>4.5</Text>
              </View>
              <View style={styles.dotsBox}>
                <Image
                  style={styles.dotsIcon}
                  source={require('../../assets/icon/dots.png')}
                  alt="pontos"
                />
              </View>
            </View>
            <View style={styles.bottleWrapper}>
              <Image
                style={styles.bottleImage}
                source={require('../../assets/bottle.png')}
                alt="Imagem da garrafa"
              />
            </View>
            <View style={styles.countryWrapper}>
              <Image
                style={styles.countryFlag}
                source={require('../../assets/ireland.png')}
                alt="flag"
              />
            </View>
            <View style={styles.wineNameWrapper}>
              <Text style={styles.wineName}>
                Citadel Tempranillo Tinto - Castilla La Mancha 2018
              </Text>
            </View>
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
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Recomendados para você</Text>
          <View style={styles.arrowContainer}>
            <Text style={styles.link}>Ver todos</Text>
            <Image
              style={styles.arrowRight}
              source={{
                uri: ARROW_RIGHT,
              }}
              accessibilityLabel="Seta apontando para a direita"
              alt="arrow right"
            />
          </View>
        </View>
      </View>
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

export default RecommendedProducts;
