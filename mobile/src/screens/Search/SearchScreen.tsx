import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database } from '../../database';
import { FoodModel } from '../../database/models/FoodModel';

export const SearchScreen = () => {
  const navigation = useNavigation<any>();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FoodModel[]>([]);

  const handleSearch = async (text: string) => {
    setQuery(text);
    if (text.length < 2) return;
    const collection = database.get<FoodModel>('products');
    const all = await collection.query().fetch();
    setResults(all.filter(p => p.name.toLowerCase().includes(text.toLowerCase())));
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Поиск продуктов..." 
        value={query} 
        onChangeText={handleSearch}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AddToDiary', { product: item })}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCalories}>{item.calories} ккал/100г</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Введите название</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 8, marginBottom: 15 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee', flexDirection: 'row', justifyContent: 'space-between' },
  itemName: { fontSize: 16 },
  itemCalories: { color: '#666' },
  empty: { textAlign: 'center', marginTop: 20, color: '#999' }
});
