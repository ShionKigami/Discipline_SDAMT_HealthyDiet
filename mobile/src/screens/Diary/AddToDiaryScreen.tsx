import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NumericKeyboard } from '../../components/ui/NumericKeyboard';
import { Button } from '../../components/ui/Button';
import { useDiaryVM } from '../../viewmodels/useDiaryVM';

export const AddToDiaryScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { addEntry } = useDiaryVM();
  const product = route.params?.product;
  const [weight, setWeight] = useState('100');

  const handleKeyPress = (key: string) => {
    if (key === '⌫') {
      setWeight(weight.slice(0, -1));
    } else {
      setWeight(weight + key);
    }
  };

  const handleAdd = async () => {
    if (product && Number(weight) > 0) {
      const today = new Date().toISOString().split('T')[0];
      await addEntry(product, Number(weight), today);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product?.name}</Text>
      <Text style={styles.subtitle}>Введите вес (г)</Text>
      <Text style={styles.weightDisplay}>{weight}</Text>
      
      <NumericKeyboard onPress={handleKeyPress} />
      
      <Button title="Добавить в дневник" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#666', marginBottom: 20 },
  weightDisplay: { fontSize: 48, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#2e7d32' }
});
