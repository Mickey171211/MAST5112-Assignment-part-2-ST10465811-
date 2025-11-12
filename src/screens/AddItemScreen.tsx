import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuContext } from '../context/MenuContext';

const COURSES = ['Starter', 'Main', 'Dessert'];

export default function AddItemScreen({ navigation }: any) {
  const ctx = useContext(MenuContext)!;
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [course, setCourse] = useState(COURSES[0]);
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    const p = parseFloat(price);
    if (!name.trim() || isNaN(p)) {
      Alert.alert('Validation', 'Please provide a valid name and numeric price.');
      return;
    }
    ctx.addItem({ name: name.trim(), description: desc.trim(), course, price: p });
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.title}>Add Menu Item</Text>

      <TextInput placeholder="Dish Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Description" style={[styles.input, { height: 80 }]} value={desc} onChangeText={setDesc} multiline />

      <View style={styles.pickerWrap}>
        <Picker selectedValue={course} onValueChange={v => setCourse(v)}>
          {COURSES.map(c => <Picker.Item label={c} value={c} key={c} />)}
        </Picker>
      </View>

      <TextInput placeholder="Price (e.g., 45.50)" keyboardType="numeric" style={styles.input} value={price} onChangeText={setPrice} />

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
  container: { flex: 1, padding: 20, backgroundColor: '#F7F8FA' },
  title: { fontSize: 22, fontWeight: '700', color: '#111', marginBottom: 12 },
  input: { backgroundColor: '#fff', borderRadius: 10, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
  pickerWrap: { backgroundColor: '#fff', borderRadius: 10, marginBottom: 12 },
  primary: { backgroundColor: '#28A745', padding: 14, borderRadius: 30, alignItems: 'center' },
  primaryText: { color: '#fff', fontWeight: '700' },
});