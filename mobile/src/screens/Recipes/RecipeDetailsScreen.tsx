import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export const RecipeDetailsScreen = () => {
  const route = useRoute<any>();
  const r = route.params?.recipe;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{r?.name}</Text>
      <Text style={styles.macros}>КБЖУ: {Math.round(r?.calories)} ккал · Б {r?.protein} · Ж {r?.fat} · У {r?.carbs}</Text>
      <Text style={styles.section}>Ингредиенты:</Text>
      {r?.ingredients?.map((ing: any, i: number) => <Text key={i}>• {ing.name} — {ing.weight}г</Text>)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  macros: { fontSize: 16, color: '#2e7d32', marginBottom: 20 },
  section: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
});
