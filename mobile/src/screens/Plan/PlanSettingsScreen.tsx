import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '../../components/ui/Button';

export const PlanSettingsScreen = () => {
  const [exclusions, setExclusions] = useState('');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Настройки плана</Text>
      <Text style={styles.label}>Исключить продукты (через запятую)</Text>
      <TextInput style={styles.input} value={exclusions} onChangeText={setExclusions} placeholder="например: глютен, лактоза" />
      <Button title="Сохранить" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 14, color: '#666', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 8, marginBottom: 20 },
});
