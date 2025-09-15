
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { useState } from 'react';

export default function SettingsScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const toggleDarkMode = () => {
    const newColorScheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    setColorScheme(newColorScheme);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Language</Text>
        <Text style={styles.optionValue}>English</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>App Version</Text>
        <Text style={styles.optionValue}>1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
  optionValue: {
    fontSize: 18,
    color: '#888',
  },
});
