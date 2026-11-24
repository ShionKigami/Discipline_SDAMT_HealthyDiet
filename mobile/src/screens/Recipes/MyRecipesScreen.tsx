import React, { useEffect } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRecipeVM } from '../../viewmodels/useRecipeVM';

export const MyRecipesScreen = () => {
  const navigation = useNavigation<any>();
  const { myRecipes, loadMyRecipes } = useRecipeVM();
  useEffect(() => { loadMyRecipes(); }, []);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Мои рецепты</Text>
      {myRecipes.map(r => (
        <TouchableOpacity key={r.id} style={styles.card} onPress={() => navigation.navigate('RecipeDetails', { recipe: r })}>
          <Text style={styles.cardTitle}>{r.name}</Text>
          <Text style={styles.cardInfo}>{Math.round(r.calories)} ккал/100г</Text>
        </TouchableOpacity>
      ))}
      {myRecipes.length === 0 && <Text style={styles.empty}>Пока нет рецептов</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardInfo: { color: '#666', marginTop: 5 },
  empty: { textAlign: 'center', color: '#999', marginTop: 20 },
});
