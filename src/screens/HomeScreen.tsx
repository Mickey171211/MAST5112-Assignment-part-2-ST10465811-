import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';
import MenuCard from '../components/MenuCard';

export default function HomeScreen({ navigation }: any) {
  const ctx = useContext(MenuContext)!;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>
      <Text style={styles.subtitle}>Total items: {ctx.items.length}</Text>

      <FlatList
        data={ctx.items.slice(0, 3)} // quick preview of top 3 (matches many Figma designs)
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <MenuCard item={item} onEdit={() => navigation.navigate('EditItem', { id: item.id })} onDelete={() => navigation.navigate('DeleteConfirm', { id: item.id })} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No menu items yet — add one!</Text>}
      />

      <View style={{ marginTop: 12 }}>
        <TouchableOpacity style={styles.primary} onPress={() => navigation.navigate('AddItem')}>
          <Text style={styles.primaryText}>+ Add Menu Item</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondary} onPress={() => navigation.navigate('MenuOverview')}>
          <Text style={styles.secondaryText}>View Full Menu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.link}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20 },
  title: { fontSize: 26, fontWeight: '700', color: '#222' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 12 },
  empty: { color: '#666', marginTop: 20 },
  primary: { backgroundColor: '#007AFF', padding: 14, borderRadius: 30, alignItems: 'center', marginBottom: 10 },
  primaryText: { color: '#fff', fontWeight: '600' },
  secondary: { borderColor: '#007AFF', borderWidth: 1, padding: 12, borderRadius: 12, alignItems: 'center' },
  secondaryText: { color: '#007AFF', fontWeight: '600' },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  link: { color: '#007AFF', fontWeight: '600' },
});
