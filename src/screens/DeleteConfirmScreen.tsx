import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';

export default function DeleteConfirmScreen({ route, navigation }: any) {
  const { id } = route.params;
  const ctx = useContext(MenuContext)!;
  const item = ctx.items.find(i => i.id === id);

  if (!item) return null;

  const doDelete = () => {
    ctx.deleteItem(id);
    navigation.navigate('Confirmation', { message: 'Item deleted' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete</Text>
      <Text style={styles.msg}>Are you sure you want to delete "{item.name}"?</Text>
      <TouchableOpacity style={styles.delBtn} onPress={doDelete}>
        <Text style={{ color: '#fff' }}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 12 }} onPress={() => navigation.goBack()}>
        <Text style={{ color: '#007AFF' }}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FA', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  msg: { color: '#333', marginBottom: 20 },
  delBtn: { backgroundColor: '#c0392b', padding: 12, borderRadius: 12, alignItems: 'center' },
});
