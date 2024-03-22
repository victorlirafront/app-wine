import { StyleSheet, View } from 'react-native';
import PrimaryButton from './components/PrimaryButton';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <PrimaryButton>Iniciar um ciclo</PrimaryButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
