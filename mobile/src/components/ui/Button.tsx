import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, isLoading, variant = 'primary' }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, variant === 'secondary' && styles.secondary]} 
      onPress={onPress}
      disabled={isLoading}
    >
      {isLoading ? <ActivityIndicator color="#fff" /> : (
        <Text style={[styles.text, variant === 'secondary' && styles.textSecondary]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { 
    backgroundColor: '#2e7d32', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center',
    marginVertical: 10
  },
  secondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#2e7d32' },
  text: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  textSecondary: { color: '#2e7d32' }
});
