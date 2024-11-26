import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { FeaturedBannerProps } from './FeaturedBanner.types';

const FeaturedBanner: React.FC<FeaturedBannerProps> = props => {
  const { bannerExtraImage } = props;

  return (
    <View style={styles.bannerExtraContainer}>
      <Image
        style={styles.bannerExtra}
        source={{ uri: bannerExtraImage }}
        alt="banner extra"
      />
    </View>
  );
};

export default FeaturedBanner;

const styles = StyleSheet.create({
  bannerExtraContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    height: 144,
  },
  bannerExtra: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
