import React, { useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { usePlanVM } from '../../viewmodels/usePlanVM';
import { useCalculatorVM } from '../../viewmodels/useCalculatorVM';
import { Button } from '../../components/ui/Button';

export const PlanScreen = () => {
  const { plan, generate, isGenerating } = usePlanVM();
  const { result } = useCalculatorVM();

  useEffect(() => { if (result && plan.length === 0) generate(result.calories, []); }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>План на неделю</Text>
      <Button title={isGenerating ? 'Генерация...' : 'Сгенерировать план'} onPress={() => result && generate(result.calories, [])} isLoading={isGenerating} />
      {plan.map((day) => (
        <View key={day.day} style={styles.card}>
          <Text style={styles.dayTitle}>День {day.day}</Text>
          {day.meals.map((m: any, i: number) => (
            <View key={i} style={styles.meal}>
              <Text style={styles.mealName}>{m.meal}: {m.recipe.name}</Text>
              <Text style={styles.mealInfo}>{Math.round(m.recipe.calories)} ккал</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  dayTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  meal: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#eee' },
  mealName: { flex: 1, fontSize: 14 },
  mealInfo: { color: '#666' },
});
