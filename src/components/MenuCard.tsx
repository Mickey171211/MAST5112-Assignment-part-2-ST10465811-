import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../context/MenuContext';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  item: MenuItem;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function MenuCard({ item, onEdit, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        {item.description ? <Text style={styles.desc}>{item.description}</Text> : null}
        <Text style={styles.meta}>
          {item.course} • R{item.price.toFixed(2)}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit} style={styles.iconBtn}>
          <Ionicons name="create-outline" size={20} color="#0a84ff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.iconBtn}>
          <Ionicons name="trash-outline" size={20} color="#ff3b30" />
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
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },
  name: { fontSize: 16, fontWeight: '700', color: '#111' },
  desc: { fontSize: 13, color: '#666', marginTop: 6 },
  meta: { marginTop: 8, fontSize: 12, color: '#888' },
  actions: { marginLeft: 12, justifyContent: 'center', alignItems: 'center' },
  iconBtn: { padding: 8 },
});