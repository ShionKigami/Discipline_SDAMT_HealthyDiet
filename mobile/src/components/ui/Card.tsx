import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
  title: string;
  subtitle?: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  onPress?: () => void;
  selected?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title, subtitle, calories, protein, fat, carbs, onPress, selected,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.selected]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.macros}>
        <Text style={styles.calories}>{Math.round(calories)} ккал</Text>
        <Text style={styles.macroText}>Б {Math.round(protein)} · Ж {Math.round(fat)} · У {Math.round(carbs)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  selected: { borderColor: '#2e7d32', borderWidth: 2 },
  header: { marginBottom: 8 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  subtitle: { fontSize: 12, color: '#999', marginTop: 2 },
  macros: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  calories: { fontSize: 15, fontWeight: '600', color: '#2e7d32' },
  macroText: { fontSize: 12, color: '#666' },
});
