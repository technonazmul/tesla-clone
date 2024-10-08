import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarList from '@/components/CarsList';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CarList />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
