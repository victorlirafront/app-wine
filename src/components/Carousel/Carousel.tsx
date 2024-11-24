import React from 'react';
import { View, Image } from 'react-native';
import Slick from 'react-native-slick';
import { styles } from './Carousel.styled';
import { CAROUSEL_01 } from '../../constants/images';

const Carousel: React.FC = () => {
  return (
    <View style={styles.container}>
      <Slick
        style={styles.wrapper}
        showsButtons={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={{
          bottom: -23,
        }}
      >
        {CAROUSEL_01.map((slide, index) => {
          return (
            <View key={index} style={styles.slide1}>
              <Image
                source={{
                  uri: slide,
                }}
                style={styles.image}
                alt="Imagem do carrosou principal"
              />
            </View>
          );
        })}
      </Slick>
    </View>
  );
};

export default Carousel;
