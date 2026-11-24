import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MacroChartProps {
  protein: number;
  fat: number;
  carbs: number;
}

export const MacroChart: React.FC<MacroChartProps> = ({ protein, fat, carbs }) => {
  const total = protein + fat + carbs || 1;
  const pPercent = (protein / total) * 100;
  const fPercent = (fat / total) * 100;
  const cPercent = (carbs / total) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={[styles.segment, { width: `${pPercent}%`, backgroundColor: '#1976d2' }]} />
        <View style={[styles.segment, { width: `${fPercent}%`, backgroundColor: '#f57c00' }]} />
        <View style={[styles.segment, { width: `${cPercent}%`, backgroundColor: '#7b1fa2' }]} />
      </View>
      <View style={styles.legend}>
        <Text style={styles.legendText}>Б: {Math.round(pPercent)}%</Text>
        <Text style={styles.legendText}>Ж: {Math.round(fPercent)}%</Text>
        <Text style={styles.legendText}>У: {Math.round(cPercent)}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  bar: { height: 20, flexDirection: 'row', borderRadius: 10, overflow: 'hidden' },
  segment: { height: '100%' },
  legend: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 },
  legendText: { fontSize: 12, color: '#666' }
});
