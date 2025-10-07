import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuContext } from '../context/MenuContext';

export default function EditItemScreen({ route, navigation }: any) {
  const { id } = route.params;
  const ctx = useContext(MenuContext)!;
  const existing = ctx.items.find(i => i.id === id);

  const [name, setName] = useState(existing?.name ?? '');
  const [desc, setDesc] = useState(existing?.description ?? '');
  const [course, setCourse] = useState(existing?.course ?? 'Starter');
  const [price, setPrice] = useState(existing?.price ?? '');

  useEffect(() => {
    if (!existing) navigation.goBack();
  }, [existing]);

  const save = () => {
    ctx.updateItem(id, { name, description: desc, course, price });
    navigation.navigate('Confirmation', { message: 'Item updated' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Item</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <TextInput value={desc} onChangeText={setDesc} style={[styles.input, { height: 80 }]} multiline />
      <View style={styles.pickerWrap}>
        <Picker selectedValue={course} onValueChange={v => setCourse(v)}>
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>
      <TextInput value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
      <TouchableOpacity style={styles.saveBtn} onPress={save}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FA' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  input: { backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#ddd' },
  pickerWrap: { backgroundColor: '#fff', borderRadius: 12, marginBottom: 12 },
  saveBtn: { backgroundColor: '#28A745', padding: 12, borderRadius: 12, alignItems: 'center', marginTop: 8 },
});
