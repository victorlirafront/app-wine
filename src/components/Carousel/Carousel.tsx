import React from 'react';
import { View, Image } from 'react-native';
import Slick from 'react-native-slick';
import { styles } from './Carousel.styled';

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
        <View style={styles.slide1}>
          <Image
            source={{
              uri: 'https://img.wine.com.br/revista-digital/cms/3_RQS_144_kit_home_app_e6fa9881dc.jpeg',
            }}
            style={styles.image}
            alt="sds"
          />
        </View>
        <View style={styles.slide1}>
          <Image
            source={{
              uri: 'https://img.wine.com.br/revista-digital/cms/3_RQS_144_kit_home_app_e6fa9881dc.jpeg',
            }}
            style={styles.image}
            alt="sds"
          />
        </View>
        <View style={styles.slide1}>
          <Image
            source={{
              uri: 'https://img.wine.com.br/revista-digital/cms/3_RQS_144_kit_home_app_e6fa9881dc.jpeg',
            }}
            style={styles.image}
            alt="sds"
          />
        </View>
      </Slick>
    </View>
  );
};

export default Carousel;
