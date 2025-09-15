
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function DashboardScreen() {
  const handleCameraPress = () => {
    console.log('Camera button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <TouchableOpacity style={styles.cameraButton} onPress={handleCameraPress}>
        <IconSymbol size={40} name="camera.fill" color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  cameraButton: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#007BFF',
  },
});
