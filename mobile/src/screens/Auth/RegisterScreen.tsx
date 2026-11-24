import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthVM } from '../../viewmodels/useAuthVM';
import { Button } from '../../components/ui/Button';
import { Gender, Goal, ActivityLevel } from '../../../../shared/types/enums';

export const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const { register, isLoading, error } = useAuthVM();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState({
    gender: Gender.MALE, age: 25, height: 175, weight: 70,
    activityLevel: ActivityLevel.MODERATE, goal: Goal.MAINTAIN,
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput placeholder="Пароль (мин. 6 символов)" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="Возраст" style={styles.input} keyboardType="numeric" onChangeText={(v) => setProfile({...profile, age: Number(v)})} />
      <TextInput placeholder="Рост (см)" style={styles.input} keyboardType="numeric" onChangeText={(v) => setProfile({...profile, height: Number(v)})} />
      <TextInput placeholder="Вес (кг)" style={styles.input} keyboardType="numeric" onChangeText={(v) => setProfile({...profile, weight: Number(v)})} />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Создать аккаунт" onPress={() => register(email, password, profile)} isLoading={isLoading} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 8, marginBottom: 15 },
  error: { color: 'red', marginBottom: 15, textAlign: 'center' },
  link: { color: '#2e7d32', textAlign: 'center', marginTop: 20 },
});
