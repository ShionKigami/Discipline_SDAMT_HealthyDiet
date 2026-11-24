import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthVM } from '../../viewmodels/useAuthVM';
import { Button } from '../../components/ui/Button';

export const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const { logout } = useAuthVM();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Профиль</Text>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.itemText}>✏️ Редактировать профиль</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Education')}>
        <Text style={styles.itemText}>📚 Обучение</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Calculator')}>
        <Text style={styles.itemText}>🧮 Пересчитать нормы</Text>
      </TouchableOpacity>
      <Button title="Выйти" variant="secondary" onPress={logout} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
  itemText: { fontSize: 16 },
});
