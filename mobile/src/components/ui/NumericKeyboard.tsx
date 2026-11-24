import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface NumericKeyboardProps {
  onPress: (value: string) => void;
}

export const NumericKeyboard: React.FC<NumericKeyboardProps> = ({ onPress }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'];

  return (
    <View style={styles.grid}>
      {keys.map((key) => (
        <TouchableOpacity key={key} style={styles.key} onPress={() => onPress(key)}>
          <Text style={styles.keyText}>{key}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: 10 },
  key: { width: '30%', aspectRatio: 1.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', margin: '1%', borderRadius: 8 },
  keyText: { fontSize: 24, fontWeight: 'bold' }
});
