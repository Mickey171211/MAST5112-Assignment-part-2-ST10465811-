import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ConfirmationScreen({ route, navigation }: any) {
  const message = route.params?.message ?? 'Done';

  return (
    <View style={styles.container}>
      <Text style={styles.msg}>{message}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F9FA', padding: 20 },
  msg: { fontSize: 20, fontWeight: '700', marginBottom: 20 },
  btn: { backgroundColor: '#007AFF', padding: 12, borderRadius: 12 },
  btnText: { color: '#fff', fontWeight: '600' },
});
