
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { useState, useEffect } from 'react';
import { AppColorScheme } from '@/context/ThemeContext';

export default function SettingsScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  const toggleDarkMode = () => {
    const newColorScheme = isDarkMode ? 'light' : 'dark';
    setColorScheme(newColorScheme);
  };

  const styles = getStyles(colorScheme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.light.tint }}
          thumbColor={isDarkMode ? Colors.light.background : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
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

const getStyles = (colorScheme: AppColorScheme) => {
  const currentColors = Colors[colorScheme];
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20,
      backgroundColor: currentColors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: currentColors.text,
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
      color: currentColors.text,
    },
    optionValue: {
      fontSize: 18,
      color: '#888',
    },
  });
};
