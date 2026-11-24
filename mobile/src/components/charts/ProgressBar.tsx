import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
  label: string;
  current: number;
  target: number;
  unit: string;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, current, target, unit, color = '#2e7d32' }) => {
  const percentage = Math.min((current / target) * 100, 100);
  const isExceeded = current > target;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.values}>
          {Math.round(current)} / {target} {unit}
        </Text>
      </View>
      <View style={styles.track}>
        <View 
          style={[
            styles.fill, 
            { width: `${percentage}%`, backgroundColor: isExceeded ? '#d32f2f' : color }
          ]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  label: { fontSize: 14, fontWeight: '500' },
  values: { fontSize: 14, color: '#666' },
  track: { height: 10, backgroundColor: '#e0e0e0', borderRadius: 5, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 5 },
});
