import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../context/MenuContext';

type Props = {
  item: MenuItem;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function MenuCard({ item, onEdit, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.name}</Text>
        {item.description ? <Text style={styles.desc}>{item.description}</Text> : null}
        <Text style={styles.meta}>{item.course} • ${item.price}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit} style={styles.actionBtn}>
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={[styles.actionBtn, { marginTop: 6 }]}>
          <Text style={[styles.actionText, { color: '#c0392b' }]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: '600', color: '#222' },
  desc: { fontSize: 13, color: '#666', marginTop: 6 },
  meta: { marginTop: 8, fontSize: 12, color: '#888' },
  actions: { marginLeft: 12, justifyContent: 'center', alignItems: 'flex-end' },
  actionBtn: { paddingHorizontal: 10, paddingVertical: 6 },
  actionText: { color: '#007AFF', fontWeight: '600' },
});
