// mobile/src/screens/Calculator/HowCalculatedModal.tsx
import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { IProfileData, ICalcResult } from '../../../../shared/types/interfaces';

export const HowCalculatedModal = ({ visible, onClose, data, result }: any) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Пояснение расчёта</Text>
          
          <Text style={styles.text}>
            Мы используем формулу <Text style={{fontWeight: 'bold'}}>Миффлина-Сан-Жеора</Text>.
          </Text>
          
          <Text style={styles.text}>
            Ваши данные: пол {data.gender}, возраст {data.age} лет, рост {data.height} см, вес {data.weight} кг.
          </Text>
          <Text style={styles.text}>
            Коэффициент активности: {data.activityLevel} (учитывает вашу физическую нагрузку).
          </Text>
          
          <Text style={styles.text}>
            Итог: Базовый метаболизм корректируется под цель "{data.goal}" и составляет {result.calories} ккал.
          </Text>

          <Button title="Понятно" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  text: { fontSize: 16, marginBottom: 10, lineHeight: 22 }
});
