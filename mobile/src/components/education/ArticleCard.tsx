import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ArticleCardProps {
  title: string;
  preview: string;
  onPress?: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, preview, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.preview} numberOfLines={3}>{preview}</Text>
      <Text style={styles.readMore}>Читать →</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  preview: { fontSize: 14, color: '#666', lineHeight: 20 },
  readMore: { fontSize: 13, color: '#2e7d32', marginTop: 8, fontWeight: '600' },
});
