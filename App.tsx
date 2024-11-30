import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import Header from './src/components/Header/Header';
import Address from './src/components/Address/Address';
import WineUpInformation from './src/components/WineUpInformation/WineUpInformation';
import MiniBanner from './src/components/MiniBanner/MiniBanner';
import Carousel from './src/components/Carousel/Carousel';
import { BANNER_EXTRA, MINIBANNERS } from './src/constants/images';
import ExpressDelivery from './src/components/ExpressDelivery/ExpressDelivery';
import FeaturedBanner from './src/components/ FeaturedBanner/FeaturedBanner';
import BestCountries from './src/components/BestCountries/BestCountries';
import RecommendedProducts from './src/components/RecommendedProducts/RecommendedProducts';
import SpecialBanner from './src/components/SpecialBanner/SpecialBanner';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#c81a78" />
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Address />
          <WineUpInformation />
          <MiniBanner uri={MINIBANNERS[0]} />
          <Carousel />
          <MiniBanner uri={MINIBANNERS[1]} />
          <ExpressDelivery />
          <FeaturedBanner bannerExtraImage={BANNER_EXTRA[0]} />
          <RecommendedProducts />
          <FeaturedBanner bannerExtraImage={BANNER_EXTRA[1]} />
          <RecommendedProducts />
          <FeaturedBanner bannerExtraImage={BANNER_EXTRA[2]} />
          <SpecialBanner />
          <RecommendedProducts />
          <MiniBanner uri={MINIBANNERS[1]} />
          <RecommendedProducts />
          <SpecialBanner />
          <MiniBanner uri={MINIBANNERS[1]} />
          <RecommendedProducts />
          <FeaturedBanner bannerExtraImage={BANNER_EXTRA[0]} />
          <FeaturedBanner bannerExtraImage={BANNER_EXTRA[1]} />
          <BestCountries />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  scrollContainer: {
    paddingVertical: 10,
  },
});
