import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';
import MenuCard from '../components/MenuCard';

const COURSES = ['All', 'Starter', 'Main', 'Dessert'];

export default function FilterScreen({ navigation }: any) {
  const ctx = useContext(MenuContext)!;
  const [filter, setFilter] = useState<string>('All');

  const filtered = filter === 'All' ? ctx.items : ctx.items.filter(i => i.course === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>

      <View style={styles.filters}>
        {COURSES.map(c => (
          <TouchableOpacity key={c} onPress={() => setFilter(c)} style={[styles.filterBtn, filter === c && styles.filterActive]}>
            <Text style={[styles.filterText, filter === c && { color: '#fff' }]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={i => i.id}
        renderItem={({ item }) => <MenuCard item={item} onEdit={() => navigation.navigate('EditItem', { id: item.id })} onDelete={() => ctx.deleteItem(item.id)} />}
        ListEmptyComponent={<Text style={{ color: '#666', marginTop: 20 }}>No items for this filter</Text>}
      />

      <TouchableOpacity style={{ marginTop: 12 }} onPress={() => navigation.goBack()}>
        <Text style={{ color: '#007AFF' }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F7F8FA' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  filters: { flexDirection: 'row', marginBottom: 12, flexWrap: 'wrap' as any },
  filterBtn: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, borderWidth: 1, borderColor: '#ddd', marginRight: 8, marginBottom: 8 },
  filterActive: { backgroundColor: '#0066FF', borderColor: '#0066FF' },
  filterText: { color: '#222', fontWeight: '600' },
});