import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuContext } from '../context/MenuContext';

const COURSES = ['Starter', 'Main', 'Dessert'];

export default function EditItemScreen({ route, navigation }: any) {
  const { id } = route.params;
  const ctx = useContext(MenuContext)!;
  const item = ctx.items.find(i => i.id === id);

  const [name, setName] = useState(item?.name ?? '');
  const [desc, setDesc] = useState(item?.description ?? '');
  const [course, setCourse] = useState(item?.course ?? COURSES[0]);
  const [price, setPrice] = useState(item ? item.price.toString() : '');

  useEffect(() => {
    if (!item) navigation.goBack();
  }, [item]);

  const save = () => {
    const p = parseFloat(price);
    if (!name.trim() || isNaN(p)) { Alert.alert('Validation', 'Provide valid name and price'); return; }
    ctx.updateItem(id, { name: name.trim(), description: desc.trim(), course, price: p });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Item</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={[styles.input, { height: 80 }]} value={desc} onChangeText={setDesc} multiline />
      <View style={styles.pickerWrap}>
        <Picker selectedValue={course} onValueChange={v => setCourse(v)}>
          {COURSES.map(c => <Picker.Item label={c} value={c} key={c} />)}
        </Picker>
      </View>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />
      <TouchableOpacity style={styles.primary} onPress={save}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 12 }}>
        <Text style={{ color: '#007AFF' }}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F7F8FA' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  input: { backgroundColor: '#fff', borderRadius: 10, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
  pickerWrap: { backgroundColor: '#fff', borderRadius: 10, marginBottom: 12 },
  primary: { backgroundColor: '#28A745', padding: 14, borderRadius: 30, alignItems: 'center' },
});