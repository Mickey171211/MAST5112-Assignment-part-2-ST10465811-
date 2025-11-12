import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { MenuContext } from '../context/MenuContext';
import Header from '../components/Header';
import MenuCard from '../components/MenuCard';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: any) {
  const ctx = useContext(MenuContext)!;
  const averages = ctx.averageByCourse();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <Header title="Chef's Menu" />
      <Text style={styles.subtitle}>Total items: <Text style={{ fontWeight: '700' }}>{ctx.items.length}</Text></Text>

      <View style={styles.metrics}>
        {Object.keys(averages).length === 0 ? (
          <Text style={styles.noMetrics}>No items yet — add some to see averages.</Text>
        ) : (
          Object.entries(averages).map(([course, value]) => (
            <View key={course} style={styles.metricCard}>
              <Text style={styles.metricLabel}>{course}</Text>
              <Text style={styles.metricValue}>R{value.toFixed(2)}</Text>
            </View>
          ))
        )}
      </View>

      <Text style={styles.section}>Menu</Text>

      <FlatList
        data={ctx.items}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <MenuCard
            item={item}
            onEdit={() => navigation.navigate('EditItem', { id: item.id })}
            onDelete={() => ctx.deleteItem(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No menu items yet—tap Add to create one.</Text>}
        scrollEnabled={false}
      />

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity style={styles.primary} onPress={() => navigation.navigate('AddItem')}>
          <Text style={styles.primaryText}>+ Add Menu Item</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.outline} onPress={() => navigation.navigate('Filter')}>
          <Text style={styles.outlineText}><Ionicons name="funnel-outline" /> Filter by Course</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('About')}>
          <Text style={styles.linkText}>About & Submission Info</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA', padding: 20 },
  subtitle: { color: '#666', marginBottom: 12 },
  metrics: { flexDirection: 'row', gap: 10, marginBottom: 14, flexWrap: 'wrap' as any },
  metricCard: { backgroundColor: '#fff', padding: 10, borderRadius: 10, minWidth: 110, marginRight: 8, elevation: 1 },
  metricLabel: { fontSize: 12, color: '#888' },
  metricValue: { fontSize: 16, fontWeight: '700', color: '#111' },
  noMetrics: { color: '#666' },
  section: { marginTop: 8, marginBottom: 8, fontSize: 18, fontWeight: '700', color: '#222' },
  empty: { color: '#666', paddingVertical: 20 },
  primary: { backgroundColor: '#0066FF', padding: 14, borderRadius: 30, alignItems: 'center', marginBottom: 8 },
  primaryText: { color: '#fff', fontWeight: '700' },
  outline: { borderColor: '#0066FF', borderWidth: 1, padding: 12, borderRadius: 12, alignItems: 'center', marginBottom: 8 },
  outlineText: { color: '#0066FF', fontWeight: '600' },
  link: { alignItems: 'center', marginTop: 6 },
  linkText: { color: '#007AFF', fontWeight: '600' },
});