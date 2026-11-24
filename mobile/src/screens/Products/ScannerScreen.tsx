import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ScannerScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>📷 Сканер штрих-кодов</Text>
    <Text style={styles.sub}>Для полноценной работы подключите react-native-vision-camera</Text>
  </View>
);
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { fontSize: 22, marginBottom: 10 },
  sub: { color: '#666', textAlign: 'center' },
});
