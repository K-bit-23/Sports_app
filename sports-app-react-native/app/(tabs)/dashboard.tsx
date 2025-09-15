
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function DashboardScreen() {
  const handleCameraPress = () => {
    console.log('Camera button pressed');
  };

  return (
    <ImageBackground
      source={require('@/assets/images/sports-background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity style={styles.cameraButton} onPress={handleCameraPress}>
          <IconSymbol size={40} name="camera.fill" color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
