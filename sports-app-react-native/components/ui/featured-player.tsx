import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import Card from '@/components/ui/card';

type FeaturedPlayerProps = {
  playerImage: any;
  playerName: string;
  playerTeam: string;
};

const FeaturedPlayer = ({ playerImage, playerName, playerTeam }: FeaturedPlayerProps) => {
  return (
    <Card>
      <View style={styles.playerContainer}>
        <Image source={playerImage} style={styles.playerImage} />
        <View>
          <ThemedText style={styles.playerName}>{playerName}</ThemedText>
          <ThemedText>{playerTeam}</ThemedText>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  playerName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default FeaturedPlayer;
