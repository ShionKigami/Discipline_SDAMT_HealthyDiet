import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { educationArticles } from '../../constants/educationData';

export const EducationScreen = () => {
  const [selected, setSelected] = React.useState<any>(null);
  if (selected) {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => setSelected(null)}><Text style={styles.back}>← Назад</Text></TouchableOpacity>
        <Text style={styles.title}>{selected.title}</Text>
        <Text style={styles.body}>{selected.body}</Text>
      </ScrollView>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Обучение</Text>
      {educationArticles.map((a, i) => (
        <TouchableOpacity key={i} style={styles.card} onPress={() => setSelected(a)}>
          <Text style={styles.cardTitle}>{a.title}</Text>
          <Text style={styles.cardSub}>{a.body.slice(0, 80)}...</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardSub: { fontSize: 14, color: '#666', marginTop: 5 },
  back: { color: '#2e7d32', marginBottom: 15, fontSize: 16 },
  body: { fontSize: 16, lineHeight: 24 },
});
