import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { useProductVM } from '../../viewmodels/useProductVM';
import { Button } from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';

export const AddProductScreen = () => {
  const navigation = useNavigation<any>();
  const { addProduct, checkDuplicate } = useProductVM();
  const [form, setForm] = useState({ name: '', calories: '', protein: '', fat: '', carbs: '' });

  const handleSave = async () => {
    const dup = await checkDuplicate(form.name);
    if (dup) Alert.alert('Внимание', 'Продукт с таким названием уже есть');
    await addProduct({
      name: form.name, calories: Number(form.calories),
      protein: Number(form.protein), fat: Number(form.fat), carbs: Number(form.carbs),
      isGlobal: false,
    });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Новый продукт</Text>
      <TextInput placeholder="Название" style={styles.input} onChangeText={(v) => setForm({...form, name: v})} />
      <TextInput placeholder="Калории /100г" style={styles.input} keyboardType="numeric" onChangeText={(v) => setForm({...form, calories: v})} />
      <TextInput placeholder="Белки /100г" style={styles.input} keyboardType="numeric" onChangeText={(v) => setForm({...form, protein: v})} />
      <TextInput placeholder="Жиры /100г" style={styles.input} keyboardType="numeric" onChangeText={(v) => setForm({...form, fat: v})} />
      <TextInput placeholder="Углеводы /100г" style={styles.input} keyboardType="numeric" onChangeText={(v) => setForm({...form, carbs: v})} />
      <Button title="Добавить" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 15 },
});
