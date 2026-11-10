// mobile/src/screens/Calculator/NormsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useCalculatorVM } from '../../viewmodels/useCalculatorVM';
import { HowCalculatedModal } from './HowCalculatedModal'; // Предполагаемый компонент

export const NormsScreen = () => {
  const { result, formData } = useCalculatorVM();
  const [modalVisible, setModalVisible] = React.useState(false);

  if (!result) return <Text>Сначала заполните данные в калькуляторе</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ваши нормы КБЖУ</Text>
      
      {/* Калории */}
      <View style={styles.card}>
        <Text style={styles.macroTitle}>Калории</Text>
        <Text style={styles.macroValue}>{result.calories} ккал</Text>
        {/* Здесь должен быть ProgressBar из components/charts */}
      </View>

      {/* БЖУ */}
      <View style={styles.row}>
        <View style={styles.macroCard}><Text>Белки</Text><Text>{result.protein} г</Text></View>
        <View style={styles.macroCard}><Text>Жиры</Text><Text>{result.fat} г</Text></View>
        <View style={styles.macroCard}><Text>Углеводы</Text><Text>{result.carbs} г</Text></View>
      </View>

      {/* Кнопка "Как рассчитано?" (F.01.04, U.01.06) */}
      <Button 
        title="Как рассчитано?" 
        onPress={() => setModalVisible(true)} 
      />

      {/* Модальное окно с пояснением */}
      <HowCalculatedModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        data={formData}
        result={result}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  macroTitle: { fontSize: 16, color: '#666' },
  macroValue: { fontSize: 24, fontWeight: 'bold', color: '#2e7d32' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  macroCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, flex: 1, marginHorizontal: 5, alignItems: 'center' }
});
