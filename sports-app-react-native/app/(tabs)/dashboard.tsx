import { StyleSheet, View } from 'react-native';
import Card from '@/components/ui/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import NewsItem from '@/components/ui/news-item';
import FeaturedPlayer from '@/components/ui/featured-player';

export default function DashboardScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Dashboard</ThemedText>

      <FeaturedPlayer 
        playerName="John Doe"
        playerTeam="Los Angeles Lakers"
        playerImage={require('@/assets/images/player.png')}
      />
      
      <Card>
        <View style={styles.cardHeader}>
          <ThemedText type="subtitle">Upcoming Games</ThemedText>
          <IconSymbol name="calendar" size={24} color="#007BFF" />
        </View>
        <View style={styles.item}>
          <ThemedText>Lakers vs. Celtics</ThemedText>
          <ThemedText>Tomorrow at 8:00 PM</ThemedText>
        </View>
        <View style={styles.item}>
          <ThemedText>Warriors vs. Nets</ThemedText>
          <ThemedText>Next Friday at 9:00 PM</ThemedText>
        </View>
      </Card>

      <Card>
        <View style={styles.cardHeader}>
          <ThemedText type="subtitle">Latest News</ThemedText>
          <IconSymbol name="newspaper.fill" size={24} color="#007BFF" />
        </View>
        <NewsItem 
          title="Player of the Week Announced"
          content="John Doe from the Lakers has been named the player of the week..."
        />
        <NewsItem 
          title="Trade rumors heating up"
          content="Sources say a major trade is in the works between the Warriors and the Bulls..."
        />
      </Card>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    marginVertical: 10,
  },
});
