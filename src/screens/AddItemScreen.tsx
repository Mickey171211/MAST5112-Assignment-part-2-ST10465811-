import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuContext } from '../context/MenuContext';

export default function AddItemScreen({ navigation }: any) {
  const ctx = useContext(MenuContext)!;
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [course, setCourse] = useState('Starter');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name || !price) return; // minimal validation
    ctx.addItem({ name, description: desc, course, price: parseFloat(price).toFixed(2) });
    navigation.navigate('Confirmation', { message: 'Item added' });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.title}>Add Menu Item</Text>

      <TextInput placeholder="Dish Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Description" style={[styles.input, { height: 80 }]} multiline value={desc} onChangeText={setDesc} />

      <View style={styles.pickerWrap}>
        <Picker selectedValue={course} onValueChange={(v) => setCourse(v)}>
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>

      <TextInput placeholder="Price (e.g., 12.50)" keyboardType="numeric" style={styles.input} value={price} onChangeText={setPrice} />

      <TouchableOpacity style={styles.primary} onPress={handleAdd}>
        <Text style={styles.primaryText}>Add Item</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 12 }}>
        <Text style={{ color: '#007AFF' }}>Cancel</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12, color: '#222' },
  input: { backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#ddd' },
  pickerWrap: { backgroundColor: '#fff', borderRadius: 12, marginBottom: 12 },
  primary: { backgroundColor: '#28A745', padding: 14, borderRadius: 30, alignItems: 'center' },
  primaryText: { color: '#fff', fontWeight: '700' },
});

