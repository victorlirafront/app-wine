import { View, Text, Image } from 'react-native';
import { ARROW_RIGHT } from '../../constants/images';
import { styles } from './RecommendedProducts.styled';

const RecommendedProducts: React.FC = () => {
  return (
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
  );
};

export default RecommendedProducts;
