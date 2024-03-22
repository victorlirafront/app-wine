import { View, StyleSheet, Text, Pressable } from 'react-native';

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = function (props: PrimaryButtonProps) {
  const { children } = props;

  return (
    <View style={styles.buttonContainer}>
      <Pressable android_ripple={{ color: '#4e56ad' }}>
        <Text style={styles.buttonText}> {children} </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#5965e0',
    width: '90%',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});
