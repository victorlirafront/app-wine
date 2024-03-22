import { StyleSheet, View } from 'react-native';
import PrimaryButton from './components/PrimaryButton';

export default function App() {
  return (
    <View style={styles.container}>
      <PrimaryButton>Iniciar um ciclo</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
