import React from 'react';
import { Modal, View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '../../components/ui/Button';
import { useSearchVM } from '../../viewmodels/useSearchVM';

export const FiltersModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const { setFilters } = useSearchVM();
  const [min, setMin] = React.useState('');
  const [max, setMax] = React.useState('');
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Фильтры по калориям</Text>
          <TextInput placeholder="Мин. ккал" keyboardType="numeric" style={styles.input} value={min} onChangeText={setMin} />
          <TextInput placeholder="Макс. ккал" keyboardType="numeric" style={styles.input} value={max} onChangeText={setMax} />
          <Button title="Применить" onPress={() => { setFilters(min ? Number(min) : null, max ? Number(max) : null); onClose(); }} />
          <Button title="Закрыть" variant="secondary" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modal: { backgroundColor: '#fff', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 10 },
});
