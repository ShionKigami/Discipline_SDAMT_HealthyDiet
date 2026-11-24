import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { useRecipeVM } from '../../viewmodels/useRecipeVM';
import { Button } from '../../components/ui/Button';

export const CreateRecipeScreen = () => {
  const { drafts, addIngredient, saveRecipe, clearDraft } = useRecipeVM();
  const [name, setName] = useState('');
  const [steps, setSteps] = useState('');
  const [totalWeight, setTotalWeight] = useState('500');

  const handleAddMock = () => {
    addIngredient({ name: 'Ингредиент', calories: 100, protein: 5, fat: 3, carbs: 15, weight: 100 });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Новый рецепт</Text>
      <TextInput placeholder="Название" style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Состав:</Text>
      {drafts.map((d, i) => <Text key={i}>• {d.name} ({d.weight}г)</Text>)}
      <Button title="+ Добавить ингредиент" variant="secondary" onPress={handleAddMock} />
      <TextInput placeholder="Шаги приготовления" style={[styles.input, {height: 100}]} multiline value={steps} onChangeText={setSteps} />
      <TextInput placeholder="Выход блюда (г)" style={styles.input} keyboardType="numeric" value={totalWeight} onChangeText={setTotalWeight} />
      <Button title="Сохранить" onPress={async () => { await saveRecipe(name, steps, Number(totalWeight)); clearDraft(); }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 15 },
  label: { fontSize: 14, color: '#666', marginBottom: 5 },
});
