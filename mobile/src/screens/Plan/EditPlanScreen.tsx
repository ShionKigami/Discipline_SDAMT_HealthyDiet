import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export const EditPlanScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Редактирование плана</Text>
    <Text style={styles.text}>Функция замены блюд и порций будет здесь.</Text>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { color: '#666' },
});
