import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useCalculatorVM } from '../../viewmodels/useCalculatorVM';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export const EditProfileScreen = () => {
  const { formData, setField } = useCalculatorVM();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Редактирование</Text>
      <Input label="Возраст" keyboardType="numeric" value={String(formData.age)} onChangeText={(v) => setField('age', Number(v))} />
      <Input label="Рост (см)" keyboardType="numeric" value={String(formData.height)} onChangeText={(v) => setField('height', Number(v))} />
      <Input label="Вес (кг)" keyboardType="numeric" value={String(formData.weight)} onChangeText={(v) => setField('weight', Number(v))} />
      <Button title="Сохранить" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
