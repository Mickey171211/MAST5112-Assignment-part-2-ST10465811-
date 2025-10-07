import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';
import MenuCard from '../components/MenuCard';

export default function MenuOverviewScreen({ navigation }: any) {
  const ctx = useContext(MenuContext)!;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Menu</Text>
      <Text style={styles.sub}>Total: {ctx.items.length}</Text>

      <FlatList
        data={ctx.items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <MenuCard item={item} onEdit={() => navigation.navigate('EditItem', { id: item.id })} onDelete={() => navigation.navigate('DeleteConfirm', { id: item.id })} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No items yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FA' },
  title: { fontSize: 22, fontWeight: '700' },
  sub: { color: '#666', marginBottom: 12 },
  empty: { color: '#666', marginTop: 20 },
});
