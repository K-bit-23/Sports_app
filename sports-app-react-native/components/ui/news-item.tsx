import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';

type NewsItemProps = {
  title: string;
  content: string;
};

const NewsItem = ({ title, content }: NewsItemProps) => {
  return (
    <View style={styles.item}>
      <ThemedText style={styles.newsTitle}>{title}</ThemedText>
      <ThemedText>{content}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
  },
  newsTitle: {
    fontWeight: 'bold',
  },
});

export default NewsItem;
