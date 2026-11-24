import React, { useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDiaryVM } from '../../viewmodels/useDiaryVM';
import { useCalculatorVM } from '../../viewmodels/useCalculatorVM';
import { ProgressBar } from '../../components/charts/ProgressBar';
import { MacroChart } from '../../components/charts/MacroChart';

export const DiaryScreen = () => {
  const navigation = useNavigation<any>();
  const { entries, loadEntries } = useDiaryVM();
  const { result: norms } = useCalculatorVM();

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    loadEntries(today);
  }, []);

  const totals = entries.reduce((acc, e) => ({
    calories: acc.calories + e.calories,
    protein: acc.protein + e.protein,
    fat: acc.fat + e.fat,
    carbs: acc.carbs + e.carbs,
  }), { calories: 0, protein: 0, fat: 0, carbs: 0 });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Дневник питания</Text>
      
      <View style={styles.card}>
        <ProgressBar label="Калории" current={totals.calories} target={norms?.calories || 2000} unit="ккал" />
        <MacroChart protein={totals.protein} fat={totals.fat} carbs={totals.carbs} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Съедено сегодня</Text>
        {entries.map((entry, index) => (
          <View key={index} style={styles.entryRow}>
            <Text>Продукт ID: {entry.productId}</Text>
            <Text>{entry.calories.toFixed(0)} ккал</Text>
          </View>
        ))}
        {entries.length === 0 && <Text style={styles.empty}>Ничего не добавлено</Text>}
      </View>

      <Button title="Добавить еду" onPress={() => navigation.navigate('Search')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  entryRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  empty: { color: '#999', textAlign: 'center', padding: 10 }
});
