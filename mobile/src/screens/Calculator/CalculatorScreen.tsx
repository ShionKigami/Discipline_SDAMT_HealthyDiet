import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCalculatorVM } from '../../viewmodels/useCalculatorVM';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Gender, Goal, ActivityLevel } from '../../../../shared/types/enums';

export const CalculatorScreen = () => {
  const navigation = useNavigation<any>();
  const { formData, setField, calculate } = useCalculatorVM();

  const handleCalculate = () => {
    calculate();
    navigation.navigate('Norms');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Калькулятор КБЖУ</Text>
      
      <View style={styles.row}>
        <TouchableOpacity 
          style={[styles.chip, formData.gender === Gender.MALE && styles.activeChip]}
          onPress={() => setField('gender', Gender.MALE)}
        >
          <Text>Мужчина</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.chip, formData.gender === Gender.FEMALE && styles.activeChip]}
          onPress={() => setField('gender', Gender.FEMALE)}
        >
          <Text>Женщина</Text>
        </TouchableOpacity>
      </View>

      <Input label="Возраст (лет)" keyboardType="numeric" value={String(formData.age)} onChangeText={(v) => setField('age', Number(v))} />
      <Input label="Рост (см)" keyboardType="numeric" value={String(formData.height)} onChangeText={(v) => setField('height', Number(v))} />
      <Input label="Вес (кг)" keyboardType="numeric" value={String(formData.weight)} onChangeText={(v) => setField('weight', Number(v))} />

      <Text style={styles.sectionTitle}>Уровень активности</Text>
      <View style={styles.row}>
        {Object.entries(ActivityLevel).filter(([k]) => isNaN(Number(k))).map(([key, val]) => (
           <TouchableOpacity 
             key={key}
             style={[styles.chip, formData.activityLevel === val && styles.activeChip]}
             onPress={() => setField('activityLevel', val)}
           >
             <Text style={{fontSize: 12}}>{key}</Text>
           </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Цель</Text>
      <View style={styles.row}>
        {Object.entries(Goal).map(([key, val]) => (
           <TouchableOpacity 
             key={key}
             style={[styles.chip, formData.goal === val && styles.activeChip]}
             onPress={() => setField('goal', val)}
           >
             <Text>{key}</Text>
           </TouchableOpacity>
        ))}
      </View>

      <Button title="Рассчитать нормы" onPress={handleCalculate} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 15 },
  chip: { padding: 10, borderRadius: 20, backgroundColor: '#e0e0e0', marginRight: 5, marginBottom: 5 },
  activeChip: { backgroundColor: '#a5d6a7', borderWidth: 1, borderColor: '#2e7d32' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }
});
